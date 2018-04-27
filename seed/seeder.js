/* if you want seed data to the database
  edit own data and add more data and goto the directory folder. then run >> (node seeder.js)
  then your data may be added to the database
*/


var Post = require('../models/post');
var mongoose = require('mongoose');

// url of mongo database
var uri = 'mongodb://sampat:12345@ds259089.mlab.com:59089/blog_title_db';
// connect to the mongo database
mongoose.connect(uri);

// the data to be seeded in json objects 
var posts = [
  new Post({
    title :'title1',
    body: 'description1',
    img: 'a.jpg'
    
  }),
  new Post({
    title :'title2',
    body: 'description2',
    img: 'b.jpg'
    
  }),
  new Post({
    title :'title3',
    body: 'description3',
    img: 'c.jpg'
    
  }),
  new Post({
    title :'title4',
    body: 'description4',
    img: 'd.jpg'
    
  }),
  new Post({
    title :'title5',
    body: 'description5',
    img: 'e.jpg'
    
  }),
  new Post({
    title :'title6',
    body: 'description6',
    img: 'f.jpg'
    
  })
];
var done = 0;
for(var i=0;i<posts.length;i++){
// store all the data to the database
    posts[i].save(function(err,results){
      done++;
      // if over the all data stop the connection with mongo database
      if(done==posts.length){
        // stop the connection with mongo
        exit();
      }
    });
}
function exit(){
  // disconnect the connection with mongod
  mongoose.disconnect();
}
