var express = require('express'),
	router = express.Router(),
	Nutritive = require('../core/models/nutritive');


/* get different kinds of data: 
	kindOfData can be core, substantial, nonSubstantial */
router.get('/:kindOfData', function(req, res, next) {

	// res.render('index', { title: 'Express' });
	console.log("Got request for ", req.params.kindOfData);
	switch (req.params.kindOfData) {
		case 'core':
			Nutritive.find({})
				.limit(14)
				.exec(function(err, data) {
					res.send(data);
				});
			break;
		case 'memcached':
			res.send("Came to memcached");
			var Memcached = require('memcached');
			Memcached.config.poolSize = 25;
			var memcached = new Memcached('172.17.1.61:1121');
			console.log(memcached);

			memcached.touch('foo', 10, function(err) {
				console.log("err happened : ", err);
			});
			memcached.get('foo', function(err, data) {
				if(err){console.log("Err while 'get', ",err);}
				console.log(data || "No data was found. Setting some key:value to test...", data, this.command);
				memcached.set('foo', 'bar', 10, function (err, data) { console.log("Unable to set key:value... err: ",err, data); });
				memcached.add('foo', 'bar', 10, function (err) { console.log("Error also while 'add' ",err); });

			});
		default:
			break;

	}
	// res.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router;