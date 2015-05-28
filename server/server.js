var mongoose = require('mongoose');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// var model = require('./models');

var app = express();

mongoose.connect('mongodb://localhost/simple-pos');

app.use(logger('dev'));
app.use(bodyParser());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/', require('./routes'));

// 404 - not found
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status =  404;
  next(err);
});

app.listen(81, function(){
  console.log('App listening on port 81');
});
