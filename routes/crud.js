var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.Types.ObjectId,
	mc = require('mc'),
	router = express.Router(),
	db = require('../core/dbModule'),
	Nutritive = require('../core/models/nutritive'),
	Recipe = require('../core/models/recipe'),
	Exercise = require('../core/models/exercise');
	Tip = require('../core/models/tip');

router.get('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName),
		currentUser,reviewee,
		session = req.session;

	if(session.user){ currentUser = session.user.username; }
	if(!currentUser) {return res.status(401).send("You are not authorized to use the current API");}

	var filter = {createdBy:currentUser};
	model.find(filter).sort({
        reviews: -1, //Sort by Date Added DESC
    }).exec(function(err,data){
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

router.put('/:modelName', function(req, res, next) {
	console.log(req.session);
	var model = mongoose.model(req.params.modelName);
	var _id = req.body._id;
	console.log(req.query);
	delete req.body._id;
	console.log(req.body.question, req.body.answer);
	model.update({_id:_id},req.body,{multi:true},function(err,data) {
		if(err){res.status(500).send(err.message);}
		else res.status(200).send(data);
	});
});

router.post('/:modelName', function(req, res, next) {
	console.log(req.session);
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
			try{
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
			} catch (e){
				console.log("Error., ", e.message);
			}
		});
	}).catch(function(err) {
		res.status(500).send("Error");
		console.log(err);
	});
});

module.exports = router;