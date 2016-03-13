var express = require('express'),
	fs = require('fs'),
	n = require('./nutritiveNames');	// n means nutritive Names
	mc = require('mc'),
	router = express.Router(),
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