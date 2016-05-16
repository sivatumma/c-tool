var express = require('express'),
	_ = require('underscore'),
	fs = require('fs'),
	n = require('./nutritiveNames');	// n means nutritive Names
	mc = require('mc'),
	router = express.Router(),
	facadeData = require('../core/facadeData')(),
	Nutritive = require('../core/models/nutritive'),
	Recipe = require('../core/models/recipe'),
	QandA = require('../core/models/qAndA');


/* get different kinds of data: 
	kindOfData can be core, substantial, nonSubstantial */
router.get('/:kindOfData', function(req, res, next) {

	// res.render('index', { title: 'Express' });
	console.log("Got request for ", req.params.kindOfData);
	switch (req.params.kindOfData) {
		case 'core':
			Nutritive.find({})
				.exec(function(err, data) {
					res.send(data);
				});
			break;
		//	The below option is to respond with complete data that either directly or indirectly 
		//	rendered in our SPA. All drop down contents will also be sent from this route.
		case 'facade':
			var facade = {};
			Nutritive.find({})
				.exec(function(err, data) {
					if(err){res.status(500).send("Error. See console logs for error description: ", err.message);
						console.log(err);
					}
					facade.ingredientNames = _.pluck(data,"NAME");
					console.log(facade.ingredientNames);
					_.extend(facade,facadeData);
					facade.nutritives = data;
				    facade.sampleIngredient = _.find(data, function(x) {
				      return x.NAME == "Brinjal";
				    });
				    facade.getIngredientData = function(name){
				    	return _.find(data, function(x) {
					      return x.NAME == name;
					    });
				    };
					res.status(200).send(JSON.stringify(facade));
				});
			break;
		case 'memcached':
			console.log( "N is here ", n('ch'));

			var client = new mc.Client('localhost:1121');
			client.connect(function(err, response) {
				if (!err) {
					console.log("Connected to the memcache on host 127.0.0.1 on port 1121!");
					client.add('myKey', new Buffer('Siva Tumma'), {
						flags: 0,
						exptime: 3600
					}, function(err, status) {
						if (!err) {
							console.log(status); // 'STORED' on success!
						} else {
							console.log("Error while add: ", err);
						}
					});
					client.get('myKey', function(err, response) {
						if (!err) {
							console.log("This was not error: getting myKey's value: ", response['myKey']); // should output a simple string.
						} else {
							console.log("This is error : ", err);
						}
					});

				} else console.log("Error :  ", err);
			});
			break;
		case 'recipeListOfCurrentUser':
			Recipe.find({createdBy:req.query.username}).exec(function(err,data){
				if(err) res.status(500).send("Server busy, Contact Siva");
				res.send(data);
			});
			break;
		default:
			break;

	}
	// res.sendFile(process.cwd() + '/public/index.html');
});

router.get('/:kindOfData/:toFind', function(req, res, next) {

	// res.render('index', { title: 'Express' });
	console.log("Got request for ", req.params.kindOfData);
	switch (req.params.kindOfData) {
		//	/data/core
		case 'core':
			console.log("Executing Nutritive.find()");
			Nutritive.find({})
				.exec(function(err, data) {
					if(err) res.status(500).send("ERROR at server");
					res.send(data);
				});
			break;
		case 'memcached':
			console.log( "N is here ", n('ch'));

			var client = new mc.Client('localhost:1121');
			client.connect(function(err, response) {
				if (!err) {
					console.log("Connected to the memcache on host 127.0.0.1 on port 1121!");
					client.add('myKey', new Buffer('Siva Tumma'), {
						flags: 0,
						exptime: 3600
					}, function(err, status) {
						if (!err) {
							console.log(status); // 'STORED' on success!
						} else {
							console.log("Error while add: ", err);
						}
					});
					client.get('myKey', function(err, response) {
						if (!err) {
							console.log("This was not error: getting myKey's value: ", response['myKey']); // should output a simple string.
						} else {
							console.log("This is error : ", err);
						}
					});

				} else console.log("Error :  ", err);
			});
			break;
		default:
			break;

	}
	// res.sendFile(process.cwd() + '/public/index.html');
});

router.post('/:kindOfData', function(req, res, next) {
	switch (req.params.kindOfData) {
		case 'recipeImageUpload':
			console.log("Came to fileUpload");
			req.pipe(req.busboy);
			req.busboy.on('file', function(fieldname, file, filename) {
				console.log("Uploading: " + filename);

				console.log(typeof file);
				var fstream = fs.createWriteStream(__dirname + '/' + filename);
				file.pipe(fstream);
			});
			break;
		default:
			break;
	}
});

module.exports = router;