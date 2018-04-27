var express = require('express');
var request = require("request");
var mongoose = require('mongoose');
var assert = require('assert');
var router = express.Router();

var Post = require('../models/post');

router.get('/:title', function(req, res, next) {

	// get the request title name from the url
	var title = req.params.title;
	
	// find the requested title from the mongo database
  Post.findOne({'title':title},function(err,doc) {
    // render to home page with found post details
    
    res.render('home/dashboard',{post : doc});
	
  });

});

router.get('/', function(req, res, next) {

	
	// find the requested title from the mongo database
  Post.find(function(err,doc) {
    // render to home page with found post details
    
    res.render('home/dashboard',{post : doc[0]});
	
  });
 

});



// export the route
module.exports = router;
