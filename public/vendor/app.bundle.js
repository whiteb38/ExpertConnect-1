webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var angular = __webpack_require__(0);
var app = angular.module('app');
app.controller('dataCtrl', function($scope, dataService){
  dataService.getData(function(response){
    var data = response.data;
    $scope.data = data;
  })
})
module.exports = 'dataCtrl';

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
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
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);
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

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);


/***/ })
],[5]);