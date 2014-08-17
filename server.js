var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/static'));

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/notes-development');
//when on heroku, url will be used

app.use(bodyparser.json()); //necessary for mocha chai tests
app.use(bodyparser.urlencoded({ extended: false })); //necessary for front end html
require('./routes/note-routes')(app); //require note-routes (which is exported from same named file) 

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server runnning on port 3000');
});