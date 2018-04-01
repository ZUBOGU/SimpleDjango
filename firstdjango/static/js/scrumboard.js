(function () {
    'use strict';
    var app = angular.module('Scrumboardemo', ['ngRoute']);

    app.controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {
        // REST GET
        $scope.data = [];
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
        }
    }
})()