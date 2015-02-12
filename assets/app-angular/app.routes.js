function Routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app-angular/index/indexView.html'
    })
    .when('/find-twins', {
      templateUrl: 'app-angular/findTwins/findTwinsView.html',
      controller: 'FindTwinsCtrl',
      controllerAs: 'findTwins',
      resolve: FindTwinsCtrl.resolve
    });
}

angular.module("careertwin")
  .config(['$routeProvider', Routes]);
