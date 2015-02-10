angular.module("careertwin", [
	"ngRoute",
	"restangular",
	"findTwins"
])
.run(function() {
});

angular.module("findTwins", [
	"restangular"
]);
