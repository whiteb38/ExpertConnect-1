webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var angular = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
var app = angular.module('app');
app.controller('dataCtrl', function($scope, dataService){
  dataService.getData(function(response){
    var data = response.data;
    $scope.data = data;
  })
})
module.exports = 'dataCtrl';

/***/ }),
/* 1 */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('app')
.service('dataService', function($http){
  this.getData = function(callback) {
    $http.get('../../mock/data.json').then(callback)
  }
})
module.exports = 'dataService';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
angular.module('app', ['ngRoute'])
/* .config(['$routeProvider', function($routeProvider){
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
]);*/

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);


/***/ })
],[3]);