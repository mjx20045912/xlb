'use strict';

/**
 * @ngdoc function
 * @name xlbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xlbApp
 */
angular.module('xlbApp')
  .controller('PostCtrl', ['$scope', 'FileUploader','$location', function($scope, FileUploader,$location) {
    $scope.confirm = function(){
      $location.path('/search-result');
    }
    var uploader = $scope.uploader = new FileUploader({
        url: 'upload.php'
    });
   
  }]);