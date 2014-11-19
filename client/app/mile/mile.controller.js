'use strict';

angular.module('simpleRunnerApp')
.controller('MileCtrl', function ($scope) {
	$scope.mileDate = new Date();

	$scope.go = function ( path ) {
		$location.path( path );
	};
});