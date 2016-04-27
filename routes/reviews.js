var express = require('express'),
	mongoose = require('mongoose'),
	request = require('request'),
	router = express.Router(),
	db = require('../core/dbModule'),
	TIMEOUT=10000;

var reviewerMappings = {
	"naazia.kauser":{reviewee:"sarojanandam.mattagunja"},
	"sarojanandama.mattagunja":{reviewee:"merlin.annieraj"},
	"merlin.annieraj":{reviewee:"naazia.kauser"},
	"rajasekhar.vanapalli":{reviewee:"solomon.ch"},
	"solomon.ch":{reviewee:"kalpana.payagulla"},
	"kalpana.payagulla":{reviewee:"krishna.swathi"},
	"krishna.swathi":{reviewee:"priyanka.gupta"},
	"priyanka.gupta":{reviewee:"rajasekhar.vanapalli"},
	"siva.tumma@callhealth.co.in":{"reviewee":"rajasekhar.vanapalli"}
};

router.get('/:modelName', function(req, res, next) {
	var model = mongoose.model(req.params.modelName),
		session = req.session,
		currentUser = session.user.username,
		reviewee = reviewerMappings[currentUser].reviewee,
		url = '/crud/' + req.params.modelName + "?username=" + reviewee,
		proxy = request.get({uri:url,qa:req.query,header:{},timeout:TIMEOUT},function(error, response, body){
                if(error)return res.status(500).send(error);
            });

	req.pipe(proxy).pipe(res);
	
	console.log("Here in reviews");


});


module.exports = router;