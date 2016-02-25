'use strict';

/* Controllers */
var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.name = "HomeCtrl";
}]);
