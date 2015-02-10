function AuthenticationService($window, Restangular) {
  var service = {};

  service.signin = function() {
    $window.location.href = '/oauth/signin';
  };

  service.currentCustomer = null;
  service.getCurrentUser = function() {
    Restangular.one('current-user').get().then(function(data) {
      console.log(data);
  	  service.currentCustomer = data;
  	  return data;
    }).then(function(){
  	  service.currentCustomer = false;
  	  return false;
    });
  };

  return service;
}

angular.module("careertwin")
  .factory("AuthenticationService", ["$window", "Restangular", AuthenticationService]);
