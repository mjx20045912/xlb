'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('ListCtrl', function ($scope,$location) {
    $scope.gotoBack=function(){
        $location.path("/post");
    }
  });
