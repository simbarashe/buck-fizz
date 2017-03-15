'use strict';

describe('Controller: NumberGeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('fizzBuzzApp'));

  var NumberGeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NumberGeneratorCtrl = $controller('NumberGeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NumberGeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
