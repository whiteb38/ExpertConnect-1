
'use strict';
var angular = require('angular');
angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : '/../../views/template1.html',
    })

    .when('/servicesOne', {
      templateUrl : '/../../views/template2.html',

    })

    .when('/servicesTwo', {
      templateUrl : '/../../views/template3.html',
    })
}
]);

require('./controllers/MainCtrl.js');
require('./directives/directives.js');
require('./services/MainService.js');
