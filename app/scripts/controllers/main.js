'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('MainCtrl', function ($scope,$location) {
    this.goToPost = function(){
      $location.path("/post");
      $scope.$parent.current_role = 'consumer';
    }
    this.goToDashboard = function(){
      $location.path("/about");
      $scope.$parent.current_role = 'provider';
    }
    $scope.$parent.current_role = undefined;
  });
