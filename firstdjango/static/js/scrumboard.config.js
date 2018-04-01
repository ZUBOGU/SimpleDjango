(function () {
  'use strict';
  // retrieve the module to re-use it.
  var app = angular.module('Scrumboardemo');
  app.config(['$routeProvider',config]).run(['$http', run]);

  function config($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: '/static/html/login.html',
            controller: 'LoginController',
        })
        .when('/', {
          templateUrl: '/static/html/scrumboard.html',
          controller: 'ScrumboardController',
        })
        .otherwise('/');
  }

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  };

})();
