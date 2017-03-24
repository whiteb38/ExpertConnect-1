'use strict';
var angular = require('angular');
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
	