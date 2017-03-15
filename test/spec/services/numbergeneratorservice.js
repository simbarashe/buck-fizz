'use strict';

describe('Service: NumberGeneratorService', function () {

  // load the service's module
  beforeEach(module('fizzBuzzApp'));

  // instantiate service
  var NumberGeneratorService;
  beforeEach(inject(function (_NumberGeneratorService_) {
    NumberGeneratorService = _NumberGeneratorService_;
  }));

  it('should do something', function () {
    expect(!!NumberGeneratorService).toBe(true);
  });

});
