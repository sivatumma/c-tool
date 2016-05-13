var express = require('express'),
    _ = require("underscore"),
    fs = require('fs'),
    appConfig = require("../core/appConfig"),
    utils = require("../core/utils"),
    request = require("request"),
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
 *	Behavior is like the following: Requests come to this server from RTMB (/rtmb), from mobile app (/mobileapp)
 *	and whatsoever. The current file serves the mobile app requests.
 *	Each route param implies the module of the mobile app.
 *	For example, /app/diet, /app/exercise, /app/medication, /app/qanda, /app/core-readings etc.
 */
// router.get('/:moduleName', User.authorize, function(req, res, next) {
router.get('/:moduleName', function(req, res, next) {
    //	Move session handling to User.authorize
    var session = req.session,
        currentUser = session.user,
        gcm = appConfig.gcm;
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
    switch (req.params.moduleName) {
        case 'notification':
            console.log(req.get("Authorization"), req.body);
            var notificationBody = {
                    "to": "eYBrHGCsv-0:APA91bHnrZTzRNFmDeTiEYo1XyKKg4T43Ut0XHUyCtg_PE_r3rCPNKjoa_QzYcN40-2tu5Mcj5yPXQuauBkf6G4NoeGfiZgc86FVrTW0ERPwDX4rVRMb6nQE-QGfJF0A_HosvG-OuDS6",
                    "data": {
                        "message": "This is Siva from O-Prime !",
                    }
                },
                url = "https://gcm-http.googleapis.com/gcm/send",
                headers = {
                    "Authorization": "key=AIzaSyBmRQVJnin-qAiRD2SagaxIW4NDN9H7f50",
                    "Content-Type": "application/json"
                },
                proxy = request[req.method.toLowerCase()]({
                    uri: url,
                    json: req.body,
                    headers: headers,
                    timeout: TIMEOUT
                }, function(error, response, body) {
                    if (error) return res.send(500, error);
                    console.log(response);
                });
            res.status(200).send("success - but pls confirm with Siva once pls ");
            break;
        case 'medication':
            res.status(200).send(medicationData);
            break;
        default:
            res.status(401).send("No Url with this sub path");
            break;
    }
});
router.post('/:moduleName', function(req, res, next) {
    //	Move session handling to User.authorize
    var session = req.session,
        currentUser = session.user,
        gcm = appConfig.gcm;
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
    switch (req.params.moduleName) {
        case 'notification':
            console.log(req.body);
            break;
        case 'medication':
            res.status(200).send(medicationData);
            break;
        default:
            res.status(401).send("No Url with this sub path");
            break;
    }
});
router.get('/:moduleName/:intent', function(req, res, next) {
    //	Move session handling to User.authorize
    var session = req.session,
        currentUser = session.user,
        gcm = appConfig.gcm;
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
    switch (req.params.moduleName) {
        case "medication":
            switch (req.params.intent) {
                case "register":
                case "signup":
                    require('crypto').randomBytes(48, function(err, buffer) {
                        var token = buffer.toString('hex');
                    });
                    var postBody = {
                        "firstName": "",
                        "lastName": "",
                        "email": "",
                        "gender": "",
                        "salutation": "",
                        "dob": "2000-09-09",
                        "password": req.body.password || "C@llHe@lth",
                        "mobile": "9985572137",
                        "sourceType": "OP",
                        "parentId": "0"
                    };
                    var gcmProxy = request({
                        url: gcm.url + "/createCustomerService",
                        method: gcm.method,
                        json: postBody,
                    });
                    utils.sendAnSms("HiSiva", "9985572137");
                    gcmProxy.pipe(res);
                    break;
                case "login":
                    var postBody = {
                        "customerId": "300002",
                        "password": "123456"
                    };
                    var gcmProxy = request({
                        uri: gcm.url + "/loginCustomer",
                        method: gcm.method,
                        json: postBody
                    });
                    gcmProxy.pipe(res);
                    break;
                default:
                    res.status(200).send(medicationData);
                    break;
            }
            break;
        default:
            res.status(200).send(medicationData);
            break;
    }
});
module.exports = router;