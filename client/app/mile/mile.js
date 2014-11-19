'use strict';

angular.module('simpleRunnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mile', {
        url: '/mile',
        templateUrl: 'app/mile/mile.html',
        controller: 'MileCtrl'
      });
  });