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
    'ngTouch',
    'angularFileUpload',
    'ui-notification'
  ])
  .config(function ($routeProvider, NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 2000
    });

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
      .when('/search-result', {
        templateUrl: 'views/search_result.html',
        controller: 'ResultSearchCtrl',
        controllerAs: 'search'
      })
      .when('/provider', {
        templateUrl: 'views/provider.html',
        controller: 'ProviderProfileCtrl',
        controllerAs: 'provider'
      })
      .when('/application', {
        templateUrl: 'views/application_detail.html',
        controller: 'ApplicationDetailProfileCtrl',
        controllerAs: 'applicationDetail'
      })
      .when('/provider-dashboard', {
        templateUrl: 'views/provider_dashboard.html'
      })
      .when('/skill', {
        templateUrl: 'views/skill.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function ($scope) {
    $scope.location = window.location;
    $scope.data = {pplist:[{name:"mjx"}]};
    $scope.current_role = undefined;
  })
  .directive('ngThumb', ['$window', function($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
            var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function(scope, element, attributes) {
            if (!helper.support) return;

            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file)) return;
            if (!helper.isImage(params.file)) return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}]);
