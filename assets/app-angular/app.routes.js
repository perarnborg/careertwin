angular.module("careertwin").config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/find-twins', {
      templateUrl: 'app-angular/findTwins/findTwinsView.html',
      controller: 'FindTwinsCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
