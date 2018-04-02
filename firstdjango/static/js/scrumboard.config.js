(function () {
  'use strict';
  // retrieve the module to re-use it.
  var app = angular.module('Scrumboardemo');
  app.config(['$routeProvider',config]).run(['$http', run]);

  function config($routeProvider) {

    $routeProvider
        .when('/', {
          templateUrl: '/static/html/scrumboard.html',
          controller: 'ScrumboardController',
        })
        .when('/login', {
            templateUrl: '/static/html/login.html',
            controller: 'LoginController',
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
