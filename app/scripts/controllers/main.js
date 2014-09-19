'use strict';

/**
 * @ngdoc function
 * @name sampleAngularExternalApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAngularExternalApiApp
 */
angular.module('sampleAngularExternalApiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
