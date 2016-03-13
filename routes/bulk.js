var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	mc = require('mc'),
	router = express.Router(),
	db = require('../core/dbModule'),
	Nutritive = require('../core/models/nutritive'),
	nutritiveStaticData = require('../core/t')(),
	Recipe = require('../core/models/recipe'),
	Exercise = require('../core/models/exercise');

router.post('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
	JSON.parse(nutritiveStaticData).forEach(function(oneModel) {
		model(oneModel).save(function(err) {
			if (err) {
				res.send({
					err: err
				});
			}
		});
	});
	res.status(200).send("Successfully saved all models");
});

module.exports = router;