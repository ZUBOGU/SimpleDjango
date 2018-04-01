(function () {
    'use strict';
    var app = angular.module('Scrumboardemo', ['ngRoute']);

    app.controller('ScrumboardController', ['$scope', '$http', '$location', ScrumboardController]);

    function ScrumboardController($scope, $http, $location) {
        // REST GET
        $scope.data = [];
        $scope.sortBy = 'story_points';
        $scope.reverse = true;
        $scope.showFilters = false;
        
        $http.get('/scrumboard/lists/').then(
            function(response){
                $scope.data = response.data;
            }
        );

        // REST POST
        $scope.add = function(list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card).then(
                function(response){
                    list.cards.push(response.data);
                },
                function() {
                    alert('Could not create card');
                }
             );
        };

        // GET LOGOUT
        $scope.logout = function() {
            $http.get('/auth_api/logout/')
                .then(function () {
                    $location.path('/login/')
                });
        };

        // Redirect to login page
        $scope.login = function(){
            $location.path('/login/');
        }

    }
})()