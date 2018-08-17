'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('ApplicationDetailProfileCtrl', function ($location,Notification) {
    this.goBack =function(){
      $location.path("/provider-dashboard");
    }
    this.confirm =function(){
      Notification.success("Thank you for help!"); 
      $location.path("/provider-dashboard");
    }
  });
