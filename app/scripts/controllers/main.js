'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('MainCtrl', function ($location) {
    this.goToPost = function(){
      $location.path("/post");
    }
  });
