/**
 * @ngInject
 */
function FindTwinsService(Restangular) {
  var service = {};

  service.twins = null;
  service.findTwins = function() {
    return Restangular.all('find-twins').getList().then(function(data) {
      service.twins = data;
      return service.twins
    }, function(){
      service.twins = []
      return service.twins
    });
  };

  return service;
}
angular.module("findTwins")
  .factory("FindTwinsService", FindTwinsService);
