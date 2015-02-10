function FindTwinsCtrl (AuthenticationService, FindTwinsService) {
	this.currentUser = AuthenticationService.currentCustomer;
}

angular
  .module('findTwins')
  .controller('FindTwinsCtrl', ["$scope", "AuthenticationService", "FindTwinsService", FindTwinsCtrl]);
