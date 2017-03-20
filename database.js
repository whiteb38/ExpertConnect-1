'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ExpertConnect', function(err) {
  if(err){
    console.log('Failed connecting to Mongodb!');
  } else {
    console.log('Successful connection to mongodb');
  }
});
