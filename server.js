// server.js

'use strict';

// modules =================================================
var express        = require('express');
var app            = express();
var mongoose 			 = require('mongoose');
var bodyParser     = require('body-parser');

require('./database');
// set our port
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// set the static files location
app.use(express.static(__dirname + '/public'));

// routes ==================================================
//require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;

//However, the path that you provide to the express.static
//function is relative to the directory from where you launch your node process.
//If you run the express app from another directory, it’s safer to use the absolute
//path of the directory that you want to serve:
