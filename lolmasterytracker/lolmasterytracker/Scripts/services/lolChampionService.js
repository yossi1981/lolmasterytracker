angular.module('lcmtApp')
.service('lolChampionService', ['$http', '$log', function($http, $log) {
    var cacheKey = 'lolChampions';
    var url = './api/champions';

    this.getChampions = function(success, fail){
      var cachedData = JSON.parse(localStorage.getItem(cacheKey));
      if (success && cachedData) {
        return success(cachedData);
      }
      $http.get(url).then(
        function(data) {
          if (success) {
            (success(data.data.data));
            localStorage.setItem(cacheKey, JSON.stringify(data.data.data));
          }
        },
        function(error) {
          if (fail) fail(error);
        });
  };
}]);
