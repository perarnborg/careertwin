function SetupRestangular(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
}

angular.module("careertwin")
  .config(SetupRestangular);
