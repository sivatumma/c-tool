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
			Nutritive.find({}).limit(5).then(function(err, data) {
				res.send({data:data});
			}, function(err) {
				res.send({error:err});
			});
			break;
		default:
			break;

	}

	// res.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router;