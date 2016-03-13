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
	model.find({name:"Some recipe"},function(err,data){
		if(err){res.send({err:err});}
		res.status(200).send(data);
	});
});

router.post('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
	model(req.body).save(function(err){
		if(err){res.send({err:err});}
		res.status(200).send("Successfully saved your " + req.params.modelName);
	});
});

module.exports = router;