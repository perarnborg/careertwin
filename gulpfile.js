var gulp = require('./gulp')([
	'javascript',
	{
		dependencies: ['javascript'],
		name: 'uglify'
	},
	'sass',
	{
		dependencies: ['sass'],
		name: 'minifycss'
	},
	'bower',
	'watch'
]);

gulp.task("default", ["bower", "javascript", "sass"]);
