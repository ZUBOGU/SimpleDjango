var app = angular.module('Scrumboardemo', []);

app.controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

function ScrumboardController($scope, $http) {
    $scope.data = [];
    $http.get('/scrumboard/lists/').then(
        function(response){
            $scope.data = response.data;
        }
    );

    $scope.add = function(list, title) {
        var card = {
            list: list.id,
            title: title,
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