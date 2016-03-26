var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	mc = require('mc'),
	router = express.Router(),
	db = require('../core/dbModule'),
	Nutritive = require('../core/models/nutritive'),
	// modelStaticData = require('../core/t')(),
	Recipe = require('../core/models/recipe'),
	Exercise = require('../core/models/exercise');

router.post('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName);
	if(!req.body.fileName || !req.body.createdBy) res.status(403).send("fileName to process, createdBy params are necessary for bulk processing of data. Files must be put in 'core' folder");
	var modelStaticData = require('../core/' + req.body.fileName)();
	console.log("Going to parse modelStaticData");
	console.log(typeof modelStaticData);

	modelStaticData.forEach(function(oneModel) {
		oneModel.createdBy = req.body.createdBy;
		model(oneModel).save(function(err,data) {
			if (err) {
				console.log({
					err: err
				});
				res.status(500).send(err.message);
				return;
			}
		});
	});
	res.status(200).send("Successfully saved all models");
});

module.exports = router;