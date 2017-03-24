'use strict';
angular.module('app')
.service('dataService', function($http){
  this.getData = function(callback) {
    $http.get('../../mock/data.json').then(callback)
  }
  
  this.getExperts = function(callback) {
	  $http.get('../../mock/Experts.json').then(callback)
  }
  
  
})
//module.exports = 'dataService';


