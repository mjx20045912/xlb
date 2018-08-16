'use strict';

angular.module('xlbApp').controller(
  'ProviderProfileCtrl',
  function ($scope, $location, Notification) {
    this.goBack = function () {
      $location.path('/search-result');
    };

    this.bookMe = function () {
      Notification.success("Book success!");
      $location.path('/search-result');
        }
    }
);
