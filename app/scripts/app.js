(function () {

  'use strict';

  var numberGenerator = angular.module('buckFizzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

  numberGenerator.constant('appsettings', {
    tableRows: [{ id: 10, description: '10' },
    { id: 20, description: '20' },
    { id: 30, description: '30' },
    { id: 40, description: '40' },
    { id: 50, description: '50' }]
  })
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/number-generator');

    });
})();  