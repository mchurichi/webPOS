'use strict';

/**
 * @ngdoc function
 * @name simplePosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simplePosApp
 */
angular.module('simplePosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
