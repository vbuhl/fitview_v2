var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var trainings = require('./routes/trainings');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', (process.env.PORT || 3000));//THIS

app.get('/trainings', trainings);
app.post('/createTraining', trainings);
app.post('/removeTraining', trainings);

mongoose.connect('mongodb://vbuhl:fitview@ds045454.mongolab.com:45454/fitview');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error..'));
db.once('open', function callback(){
  console.log('db opened');
});

//this
var server = app.listen(app.get('port'), function(){
  console.log("Listening on port " + app.get('port'));
});




