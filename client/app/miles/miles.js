'use strict';

angular.module('simpleRunnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('miles', {
        url: '/miles',
        templateUrl: 'app/miles/miles.html',
        controller: 'MilesCtrl'
      });
  });