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
var TIMEOUT = 2000;

//  Automating Notifications - Workflow is Parse Treatment/Diet/Physio prescriptions
//  and apply node-schedule jobs to send notifications

var schedule = require('node-schedule');
var chance = new require("chance")();
 

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
            var notificationBody = {
                    "to": "eiJPBFj98ME:APA91bExQDORMQ4PhNxe3QpB0dmui-8FxZlAcj-gFpBdxOCYaDZZocb8g945Q0oCPgzrgIAgU8PrzDGsgxJVC_6bFBDPN0wR_S151IxFh1PMJKTJa3U1n1GqW3-j90g5Y02qyEOjPGlc",
                    "data": {
                        "message": "This is Siva, Mastan, Dattu from O-Prime !",
                    }
                },
                url = "https://gcm-http.googleapis.com/gcm/send",
                headers = {
                    "Authorization": "key=AIzaSyCrZC2cacQTXJppsCtSAH-_Uu4lf0YOPu4",
                    "Content-Type": "application/json"
                },
                proxy = request.post({
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
router.put('/:moduleName', function(req, res, next) {
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
            console.log("The token of client app: ", req.get("token"));

            var rule = new schedule.RecurrenceRule();
            rule.minute = 16;
            var t = req.get("token"); 
            var j = schedule.scheduleJob(rule, function(){
                var options = ["Medication","Lunch","Metformin","Walking"];
                // console.log(chance.integer({min:0, max:options.length}));
                var notificationBody = {
                        "to": t,
                        "data": {
                            "message": "Time for your " + options[chance.integer({min:0,max:options.length})],
                        }
                    },
                    url = "https://gcm-http.googleapis.com/gcm/send",
                    headers = {
                        "Authorization": "key=AIzaSyCrZC2cacQTXJppsCtSAH-_Uu4lf0YOPu4",
                        "Content-Type": "application/json"
                    },
                    proxy = request.post({
                        uri: url,
                        json: notificationBody,
                        headers: headers,
                        timeout: TIMEOUT
                    }, function(error, response, body) {
                        if (error) return res.send(500, error);
                        console.log(response);
                    });
            });

            var notificationBody = {
                    "to": req.get("token"),
                    "data": {
                        "message": "Welcome to Oprime : Time: " + new Date().toISOString(),
                    }
                },
                url = "https://gcm-http.googleapis.com/gcm/send",
                headers = {
                    "Authorization": "key=AIzaSyCrZC2cacQTXJppsCtSAH-_Uu4lf0YOPu4",
                    "Content-Type": "application/json"
                },
                proxy = request.post({
                    uri: url,
                    json: notificationBody,
                    headers: headers,
                    timeout: TIMEOUT
                }, function(error, response, body) {
                    if (error) return res.send(500, error);
                    console.log(response);
                });
            proxy.pipe(res);
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