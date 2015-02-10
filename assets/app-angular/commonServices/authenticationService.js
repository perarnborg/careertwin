angular.module("careertwin").factory("AuthenticationService", ["$window", "Restangular", function($window, Restangular) {
	var signin = function() {
		$window.location.href = '/oauth/signin';
	};

	var getCurrentUser = function() {
		return Restangular.one('current-user').get().then(function(data) {
			return data;
		}).then(function(a,b,c){
			return false;
		});
	};

	return {
		signin: signin,
		getCurrentUser: getCurrentUser
	};
}]);
