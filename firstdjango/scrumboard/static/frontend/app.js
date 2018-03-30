var app = angular.module('Scrumboardemo', []);

app.controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

function ScrumboardController($scope, $http) {
    $scope.data = [];
    $http.get('/scrumboard/lists/').then(
        function(response){
            $scope.data = response.data;
        }
    );
}