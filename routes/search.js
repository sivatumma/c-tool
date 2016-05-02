/********************************************************
 *	NOTE: This route file is specifically meant for
 *	Searching Relatively high similarities in texts in
 *	the target fields
 *
 *	Mainly started to find best suited answers for a
 *	Question as part of Q & A Module functionality
 ********************************************************/
var express = require('express'),
    mongoose = require('mongoose'),
    request = require('request'),
    router = express.Router(),
    db = require('../core/dbModule'),
    TIMEOUT = 10000;
router.post('/:modelName', function(req, res, next) {
    var model = mongoose.model(req.params.modelName),
        question = req.body.question,
        currentUser, reviewee,
        session = req.session,
        API_KEY = req.get("API_KEY");

    if (session.user) {
        currentUser = session.user.username;
    }
    console.log(API_KEY, typeof API_KEY, question);
    if (currentUser || (API_KEY == "52d0747f-2bb1-438e-879a-84726c4f90d0")) {
        model.find({
            $text: {
                $search: question
            }}).limit(10).exec(function(err, results) {
        	if(err) {res.status(500).send(err.message);}
            console.log(results.length);
            // callback
        });
    } else {
        return res.status(401).send("You are not authorized to use the current API");
    }
});
module.exports = router;