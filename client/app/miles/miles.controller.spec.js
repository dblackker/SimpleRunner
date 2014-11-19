'use strict';

describe('Controller: MilesCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleRunnerApp'));

  var MilesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MilesCtrl = $controller('MilesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
