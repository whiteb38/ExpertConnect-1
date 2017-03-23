'use strict';
var angular = require('angular');
var app = angular.module('app');
app.controller('dataCtrl', function($scope, dataService){
  dataService.getData(function(response){
    var data = response.data;
    $scope.data = data;
  })
})
module.exports = 'dataCtrl';