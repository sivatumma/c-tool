var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	mc = require('mc'),
	router = express.Router(),
	db = require('../core/dbModule'),
	Nutritive = require('../core/models/nutritive'),
	Recipe = require('../core/models/recipe'),
	Exercise = require('../core/models/exercise');
	Tip = require('../core/models/tip');

router.get('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
	model.find({},function(err,data){
		if(err){res.send({err:err});}
		res.status(200).send(data);
	});
});
router.get('/dummy/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
	model.findOne({},function(err,data){
		if(err){res.send({err:err});}
		res.status(200).send(data);
	});
});

router.post('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
	model(req.body).save().then(function(data) {
		console.log(data.createdBy);
		var User = mongoose.model('User');
		return User.findOne({
			username: data.createdBy
		});
	}).then(function(user) {
		var User = mongoose.model('User');
		User.findOne({
			username: user.username
		}, {
			tokens: false
		}, function(err, doc) {
			//	If some error
			if (err) {
				res.status(500).send({
					"ERROR: ": err
				});
			}
			//	If this collection is being created by the user for the first time by this user
			if (!doc.createdCounts[req.params.modelName]) {
				doc.createdCounts[req.params.modelName] = 1;
				doc.markModified('createdCounts');
				doc.save();
				res.status(200).send({
					count: user.createdCounts[req.params.modelName]
				});
			}
			//	If this collection is being created non-first time by this user
			else {
				doc.createdCounts[req.params.modelName] = doc.createdCounts[req.params.modelName] + 1;
				doc.markModified('createdCounts');
				doc.save();
				res.status(200).send(user.createdCounts);
			}
		});
	}).catch(function(err) {
		res.status(500).send("Error");
		console.log(err);
	});
});

module.exports = router;