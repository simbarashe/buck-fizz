
(function () {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('buckFizzApp')
    .factory('NumberGeneratorService', function ($filter) {
      var numberGeneratorService = {};

      var dividends = [{
        dividend: 3,
        description: 'Fizz'
      },
      {
        dividend: 5,
        description: 'Buck'
      }];

      numberGeneratorService.get = function (start, end) {
        if ((!angular.isNumber(start)) || (!angular.isNumber(end)) || (start > end)) {
          return [];
        }
        return generate(start, end);
      };

      var generateDescription = function (description, counter) {
        var sortedDividends = $filter('orderBy')(dividends, '-dividend');
        angular.forEach(sortedDividends, function (value) {
          if (counter % value.dividend === 0) {
            description += value.description;
          }
        });
        return description;
      };

      var generate = function (start, end) {
        var step = 1;
        var result = [];
        for (var i = start; i <= end; i += step) {
          var description = '';
        /*  var sortedDividends = $filter('orderBy')(dividends, '-dividend');
          angular.forEach(sortedDividends, function (value) {
            if (i % value.dividend === 0) {
              description += value.description;
            }
          });*/

          description = generateDescription(description,i);
          if (!description) {
            description = i.toString();
          }
          result.push({ number: i, description: description });
        }
        return result;
      };

      return numberGeneratorService;
    });
})();