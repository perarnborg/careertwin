/**
 * @ngInject
 */
function FindTwinsCtrl($location, AuthenticationService, FindTwinsService, getCurrentUser) {
  this.currentUser = AuthenticationService.currentUser;
  if(this.currentUser) {
    this.twins = FindTwinsService.twins;
  } else {
    window.location = '/oauth/signin';
  }
}

FindTwinsCtrl.resolve = {
  getCurrentUser: function (AuthenticationService) {
    return AuthenticationService.getCurrentUser();
  },
  findTwins: function (FindTwinsService) {
    return FindTwinsService.findTwins();
  }
};
angular
  .module('findTwins')
  .controller('FindTwinsCtrl', FindTwinsCtrl);

