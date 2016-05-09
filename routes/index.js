var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(process.cwd() + '/public/build.html');
});
router.get('/oprime.apk', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(process.cwd() + '/public/oprime.apk');
});

module.exports = router;
