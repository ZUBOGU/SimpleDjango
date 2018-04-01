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
                $scope.destList = $scope.list;
                
                $scope.put = function(){
                    return $http.put(
                        url,
                        $scope.card
                    );
                };

                function removeCardFromList(card, list) {
                    var cards = list.cards;
                    cards.splice(
                        cards.indexOf(card),
                        1
                    );
                }

                $scope.delete = function(){
                    $http.delete(url).then(
                        function(){
                            removeCardFromList($scope.card, $scope.list);
                        }
                    );
                };

                $scope.move = function () {
                    if ($scope.destList === undefined) {
                        return;
                    }
                    $scope.card.list = $scope.destList.id;
                    $scope.put().then(
                        function () {
                            removeCardFromList($scope.card, $scope.list);
                            $scope.destList.cards.push($scope.card);
                        }
                    );
                };
            }]
        };
    }
})();