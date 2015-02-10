angular.module("findTwin").controller("FindTwinsCtrl", ["$scope", "AuthenticationService", "FindTwinsService", function($scope, AuthenticationService, FindTwinsService) {
	$scope.currentUser = AuthenticationService.getCurrentUser();
//	$scope.currentUser = AuthenticationService.getCurrentUser();
//  FindTwinsService.findTwins().then(function(twins) {
//    $scope.twins = twins;
//  });
}]);
