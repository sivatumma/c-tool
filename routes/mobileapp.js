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

var dummyPrescriptions = require("../core/dummyPrescriptions")();
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

router.get('/:moduleName',function(req, res, next){
    switch (req.params.moduleName) {
        case 'medication':
            console.log(dummyPrescriptions, dummyPrescriptions.medicationData);
            res.status(200).send(dummyPrescriptions.medicationData);
            break;
        case 'exercisePlan':
            res.status(200).send(dummyPrescriptions.exercisePlanData);
            break;
        case 'dietPlan':
            res.status(200).send(dummyPrescriptions.dietPlanData);
            break;
        default:
            res.status(403).send("No Resources with this path");
            break;
    }

});

router.post('/:moduleName', function(req, res, next) {
    //	Move session handling to User.authorize
    var session = req.session,
        currentUser = session.user,
        gcm = appConfig.gcm;

    switch (req.params.moduleName) {
        case 'notification':
            console.log("The token of client app: ", req.get("token"));

            var rule = new schedule.RecurrenceRule();
            rule.minute = 0;
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
        case "signin":
            var postBody = {
                "customerId": "300002",
                "password": "123456"
            };
            var gcmProxy = request({
                uri: gcm.url + "/loginCustomer",
                method: gcm.method,
                json: postBody
            })
            .on('response',function(response){
                if(response.statusCode == 200)
                    res.status(200).send(dummyPrescriptions);
            })
            .on('error',function(error){
                res.status(500).send(error.message);
            });
            break;
        default:
            res.status(401).send("No Url with this sub path");
            break;
    }
});

module.exports = router;