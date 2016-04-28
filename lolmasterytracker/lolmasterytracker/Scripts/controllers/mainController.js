angular.module('lcmtApp')
.controller('mainController', ['$scope', 'lolChampionService', 'lolChampionMasteryService', function($scope, lolChampionService, lolChampionMasteryService) {
  $scope.champions = {};
  $scope.championMasteries = {};


  //fetch champions
  lolChampionService.getChampions(
    function(champions){
      $scope.champions = champions;
    },
    function(error){
    }
  )

  //fetch masteries
  lolChampionMasteryService.getChampionMasteries(
    function(champions){
      $scope.championMasteries = champions;
    },
    function(error){
    }
  )


  $scope.noMasteryFilter = function (key, value) {
      return championMasteries[value.id] !== undefined;
  }
}]);
