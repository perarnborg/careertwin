var gulp = require("gulp");

module.exports = function() {
	gulp.watch(["assets/app-angular/*.js", "assets/app-angular/**/*.js"], ["javascript"]);
	gulp.watch(["assets/css/**.scss"], ["sass"]);
};
