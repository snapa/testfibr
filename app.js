var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressHbs = require('express-handlebars');
var hbs = require('handlebars');
// get the routes for post
var post = require('./routes/post');


var app = express();

// mongo db url
var uri = 'mongodb://sampat:12345@ds259089.mlab.com:59089/blog_title_db';
// connect to the database
mongoose.connect(uri);

// view engine setup
app.engine('.hbs', expressHbs(
  {
    defaultLayout:'layout',
    extname:'.hbs',
    helpers: require('./Helpers/helpers.js')(hbs)
  }));
app.set('view engine', '.hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use cookie parser - don't want to this, for further more implements 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// when hit the localhost:3000 render to the post routes
app.use('/', post);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Foundc');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // set the error
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page and set the status code
  res.status(err.status || 500);
  // render the error page
  res.render('error');
});

module.exports = app;
