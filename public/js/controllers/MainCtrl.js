'use strict';
var angular = require('angular');
var app = angular.module('app');
app.controller('dataCtrl', function($scope, dataService){
	
  dataService.getData(function(response){
    var data = response.data;
    $scope.data = data;
  })
  

  $scope.clicked = function(){
	  console.log("called");
	dataService.getExperts(function(response){
		console.log("called");
		var experts = response.data;
		$scope.experts = experts;
	})
  }

})
module.exports = 'dataCtrl';

