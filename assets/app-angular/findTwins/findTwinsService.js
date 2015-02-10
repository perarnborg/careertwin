angular.module("findTwin").factory("FindTwinsService", ["Restangular", function(Restangular) {
	var findTwins = function() {
		return Restangular.all('findTwins').get().then(function(data) {
			return data;
		}).then(function(){
			return [];
		});
	};

	return {
		findTwins: findTwins
	};
}]);
