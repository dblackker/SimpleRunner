'use strict';

describe('Controller: MileCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleRunnerApp'));

  var MileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MileCtrl = $controller('MileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
