function FindTwinsService(Restangular) {
  var findTwins = function() {
    Restangular.all('findTwins').get().then(function(data) {
      return data;
    }).then(function(){
      return [];
    });
  };

  return {
    findTwins: findTwins
  };
}

angular.module("findTwins").factory("FindTwinsService", ["Restangular", FindTwinsService]);
