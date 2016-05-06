var express = require('express'),
	mongoose = require('mongoose'),
	request = require('request'),
	router = express.Router(),
	db = require('../core/dbModule'),
	TIMEOUT=10000;

var reviewerMappings = {
	"naazia.kauser":{reviewee:"sarojanandam.mattagunja"},
	"sarojanandam.mattagunja":{reviewee:"merlin.annieraj"},
	"merlin.annieraj":{reviewee:"naazia.kauser"},
	"rajasekhar.vanapalli":{reviewee:"siva.tumma"},
	"solomon.ch":{reviewee:"kalpana.payagulla"},
	"kalpana.payagulla":{reviewee:"krishna.swathi"},
	"krishna.swathi":{reviewee:"priyanka.gupta"},
	"priyanka.gupta":{reviewee:"rajasekhar.vanapalli"},
	"siva.tumma":{"reviewee":"rajasekhar.vanapalli"}
};

router.get('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName),
		currentUser,reviewee,
		session = req.session;

	if(session.user){ currentUser = session.user.username; }
	if(!currentUser) {return res.status(401).send("You are not authorized to use the current API");}
	reviewee = reviewerMappings[currentUser.split("@")[0]].reviewee,
	url = '/crud/' + req.params.modelName + "?username=" + reviewee;
	
	var filter = (currentUser) ? {createdBy: new RegExp('^'+reviewee, "i"), $or:[{"reviews.reviewerFlag":{$ne:"final"}},{"reviews.reviewAcknowledged":false}]} : {};
	model.find(filter).sort({reviews:-1}).exec(function(err, data) {
		if(err){res.send({err:err});}
		res.status(200).send(data);
	  //Do your action here..
	});
});

router.put('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName),
		currentUser,reviewee,
		session = req.session;

	if(session.user){ currentUser = session.user.username; }
	if(!currentUser) {return res.status(401).send("You are not authorized to use the current API");}
	reviewee = reviewerMappings[currentUser.split("@")[0]].reviewee;
	
	var filter = {_id:req.body._id};
	// model.findOneAndUpdate(filter, {$push:{reviews:{reviewer:currentUser,reviewerFlag:req.body.reviewerFlag,reviewerSuggestions:req.body.reviewerSuggestions}}},function(err, updateConcern) {
	// 	if(err){res.send({err:err});}
	// 	res.status(200).send(updateConcern);
	// });
	model.update(filter, {$set:{reviews:[{reviewer:currentUser,reviewerFlag:req.body.reviewerFlag,reviewerSuggestions:req.body.reviewerSuggestions}]}},function(err, updateConcern) {
		if(err){return res.status(503).send({err:err});}
		
		res.status(200).send(updateConcern);
	});
});

module.exports = router;