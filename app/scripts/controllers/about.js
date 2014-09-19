'use strict';

/**
 * @ngdoc function
 * @name sampleAngularExternalApiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleAngularExternalApiApp
 */
angular.module('sampleAngularExternalApiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
