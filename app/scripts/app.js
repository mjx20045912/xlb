'use strict';

/**
 * @ngdoc overview
 * @name xlbApp
 * @description
 * # xlbApp
 *
 * Main module of the application.
 */
angular
  .module('xlbApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]) 
  .config(function ($routeProvider) {
    // $routeProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',

      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function ($scope) {
    $scope.location = window.location;
  })
  ;
