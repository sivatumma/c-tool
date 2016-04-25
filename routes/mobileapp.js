var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	mc = require('mc'),
	router = express.Router(),
	db = require('../core/dbModule'),
	Nutritive = require('../core/models/nutritive'),
	User = require('../core/models/user'),
	// modelStaticData = require('../core/t')(),
	Recipe = require('../core/models/recipe'),
	Exercise = require('../core/models/exercise');


/**	
 *	Behavior is like the following: Requests come to this server from RTMB (/rtmb), from mobile app (/app)
 *	and whatsoever. The current file serves the mobile app requests.
 *	Each route param implies the module of the mobile app.
 *	For example, /app/diet, /app/exercise, /app/medication, /app/qanda, /app/core-readings etc.
 */
// router.get('/:moduleName', User.authorize, function(req, res, next) {
router.get('/:moduleName', function(req, res, next) {
	//	Move session handling to User.authorize
	var session = req.session;
	console.log(session);

	var medicationData = {
		userID: "",
		userRating: 3.5,
		date: new Date(),
		medicines: [{
			medicineName: "Super Medicin",
			intakeMethod: "Oral",
			quantity: "", // Think again
			dosage: {
				quantity: 20,
				uom: "mg"
			},
			shape: "hexagon",
			color: "#f4f4f4",
			schedules: [{
				datetime: new Date(),
				compliance: false,
				reminderType: "Jingle1",
				reminderToggle: true
			}],

		}, {
			medicineName: "Super Medicin",
			intakeMethod: "Oral",
			quantity: "", // Think again
			dosage: {
				quantity: 20,
				uom: "mg"
			},
			shape: "hexagon",
			color: "#f4f4f4",
			schedules: [{
				datetime: new Date(),
				compliance: false,
				reminderType: "Jingle1",
				reminderToggle: true
			}],

		}, {
			medicineName: "Super Medicin",
			intakeMethod: "Oral",
			quantity: "", // Think again
			dosage: {
				quantity: 20,
				uom: "mg"
			},
			shape: "hexagon",
			color: "#f4f4f4",
			schedules: [{
				datetime: new Date(),
				compliance: false,
				reminderType: "Jingle1",
				reminderToggle: true
			}],

		}, {
			medicineName: "Super Medicin",
			intakeMethod: "Oral",
			quantity: "", // Think again
			dosage: {
				quantity: 20,
				uom: "mg"
			},
			shape: "hexagon",
			color: "#f4f4f4",
			schedules: [{
				datetime: new Date(),
				compliance: false,
				reminderType: "Jingle1",
				reminderToggle: true
			}],

		}]
	};
	res.status(200).send(medicationData);
});


module.exports = router;