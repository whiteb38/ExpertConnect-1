// Include http module.
'use strict';
var express = require('express'),
	home = require('./api/index');

var app = express();

require('./database');

app.use('/home', home);
app.listen(8080, function(){
	console.log("The server is running on port 8080.");
});

//However, the path that you provide to the express.static
//function is relative to the directory from where you launch your node process.
//If you run the express app from another directory, it’s safer to use the absolute
//path of the directory that you want to serve:
