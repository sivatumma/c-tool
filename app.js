var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    busboy = require('connect-busboy'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index'),
    general = require('./routes/general'),
    users = require('./routes/users'),
    data = require('./routes/data'),
    crud = require('./routes/crud'),
    reviews = require('./routes/reviews'),
    bulk = require('./routes/bulk'),
    mobileapp = require('./routes/mobileapp'),
    expressSession = require('express-session'),
    passport = require('passport'),
    app = express();

// app.use(morgan('combined'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(expressSession({
  secret: '$!>@#||^^@',
  resave: false,
  saveUninitialized: true
}));

app.use(busboy());
app.use(express.static(path.join(__dirname)));

app.use('/', routes);
app.use('/general', general);
app.use('/users', users);
app.use('/data',data);
app.use('/crud',crud);
app.use('/bulk',bulk);
app.use('/users',users);
app.use('/reviews',reviews);
app.use('/mobileapp',mobileapp);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err.message, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
