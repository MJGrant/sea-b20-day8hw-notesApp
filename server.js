var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/static'));

//when on heroku, url will be used
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notes-development');

//the gigantic long url was formerly:
//process.env.MONGO_URL

//add mongodb add-on to heroku
//mongo labs

app.use(bodyparser.json()); //necessary for mocha chai tests
app.use(bodyparser.urlencoded({ extended: false })); //necessary for front end html
require('./routes/note-routes')(app); //require note-routes (which is exported from same named file) 

/*
var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server runnning on port 3000');
});
*/

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});