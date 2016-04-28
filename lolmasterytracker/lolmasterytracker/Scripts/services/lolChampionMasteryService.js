angular.module('lcmtApp')
.service('lolChampionMasteryService', ['$http', '$log' ,'settingsService', function($http, $log, settingsService) {
    var url = './api/championmasteries?playerid=' + settingsService.lolPlayerId + '&serverid=' + settingsService.lolServerId;
    this.getChampionMasteries = function(success, fail){
      $http.get(url, {
        headers:{
          'Content-Type' : 'application/json;charset=utf-8'
        }
      })
      .success(
        function(data) {
          var championMasteries = {};
          angular.forEach(data, function(value, key) {
            championMasteries[value.championId] = value;
          });
          success(championMasteries);
        })
      .error(function(error) {
        if (fail) fail(error);
      });
    };
}]);
