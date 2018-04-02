(function () {
    'use strict';
    var app = angular.module('Scrumboardemo');
    app.controller('ScrumboardController', ['$scope', '$http', 'Login', ScrumboardController]);

    function ScrumboardController($scope, $http, Login) {
        Login.redirectIfNotLoggedIn();
        $scope.data = [];
        $scope.sortBy = 'story_points';
        $scope.reverse = true;
        $scope.showFilters = false;
        $scope.logout = Login.logout;

        // REST GET
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
    }

})()