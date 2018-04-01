(function () {
    'use strict';
    var app = angular.module('Scrumboardemo');
    app.controller('LoginController', ['$scope', '$http', '$location', LoginController]);

    function LoginController($scope, $http, $location) {
        $scope.login = function () {
            $http.post('/auth_api/login/', $scope.user).then(
                function () {
                    $location.url('/');
                },
                function () {
                    $scope.login_error = "Invalid username/password combination";
                }
            );
        };
    }
})()