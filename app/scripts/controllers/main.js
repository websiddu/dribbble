'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('MainCtrl', function ($scope) {

  $scope.shots = [];

  $.jribbble.setToken('ba94cd2678b6111dcb64b5f3e79ccf429e6c4562b3e5a41da6fec7e6f5e4686e');

  $.jribbble.users('Creativedash').then(function(res) {
    $scope.team = res;
    $scope.$apply();
  });

  $.jribbble.teams('Creativedash').shots().then(function(res) {
    $scope.shots = res;
    $scope.$apply();
  });

  $.jribbble.teams('Creativedash').members().then(function(res) {
    $scope.members = res;
    $scope.$apply();
  });



});
