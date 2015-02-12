function CareertwinConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
}

angular.module("careertwin")
  .config(CareertwinConfig);
