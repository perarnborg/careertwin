function Routes($routeProvider) {
  $routeProvider.
    when('/find-twins', {
      templateUrl: 'app-angular/findTwins/findTwinsView.html',
      controller: 'FindTwinsCtrl',
      controllerAs: 'FindTwins',
      resolve: {
        getCurrentUser: function (AuthenticationService) {
          return AuthenticationService.getCurrentUser();
        }
      }
    }).
    otherwise({
      redirectTo: '/'
    });
}

angular.module("careertwin")
  .config(['$routeProvider', Routes]);
