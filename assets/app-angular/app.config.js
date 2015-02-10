angular.module("careertwin").config(function($httpProvider, RestangularProvider, $routeProvider) {
	RestangularProvider.setBaseUrl('/api');
});
