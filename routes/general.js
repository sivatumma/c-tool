var express = require('express'),
	_ = require('underscore'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	mc = require('mc'),
	router = express.Router(),
	db = require('../core/dbModule'),
	Nutritive = require('../core/models/nutritive'),
	Recipe = require('../core/models/recipe'),
	Exercise = require('../core/models/exercise');

//	Specifically meant for returning only names of documents.
//	Example: /general/Recipe will return an array of recipe names created
router.get('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
		model.find({name:{$ne:""}},{name:1, _id:0}).exec(function(err,data) {
			if(err){res.status(500).send(err.message);}
			res.status(200).send(_.pluck(data,"name"));
		});
});

module.exports = router;