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



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var angular = __webpack_require__(0);
var app = angular.module('app');

app.directive('accordion', function() {
	return {
		restrict: 'E',
		scope: { model: '='},
		templateUrl: 'panelTemplate.html',
		link: function (scope, element, attr) {
			scope.parentId = attr.id;
		}
	}
});
	

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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




/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);
angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])


__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);


/***/ })
],[5]);