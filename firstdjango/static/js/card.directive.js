(function () {
    'use strict';
    // retrieve the module to re-use it.
    var app = angular.module('Scrumboardemo');
    app.directive('scrumboardCardDirective', CardDirective);

    function CardDirective() {
        return{
            templateUrl: '/static/html/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/scrumboard/cards/' + $scope.card.id + '/';

                $scope.put = function(){
                    $http.put(
                        url,
                        $scope.card
                    );
                };

                $scope.delete = function(){
                    $http.delete(url).then(
                        function(){
                            var cards = $scope.list.cards;
                            cards.splice(
                                cards.indexOf($scope.card),
                                1
                            );
                        }
                    );
                };
            }]
        };
    }
})();