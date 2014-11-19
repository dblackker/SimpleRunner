'use strict';

angular.module('simpleRunnerApp')
  .controller('MilesCtrl', function ($scope) {
    $scope.miles = [
    	{ date: '11/1/2014', numOfMiles: 6 },
    	{ date: '11/2/2014', numOfMiles: 7 },
    	{ date: '11/3/2014', numOfMiles: 8 },
    	{ date: '11/4/2014', numOfMiles: 9 },
    	{ date: '11/5/2014', numOfMiles: 11 },
    	{ date: '11/6/2014', numOfMiles: 5 },
    	{ date: '11/7/2014', numOfMiles: 3 },
    	{ date: '11/8/2014', numOfMiles: 8 },
    	{ date: '11/9/2014', numOfMiles: 6 },
    	{ date: '11/10/2014', numOfMiles: 6 },
    ]
  });
