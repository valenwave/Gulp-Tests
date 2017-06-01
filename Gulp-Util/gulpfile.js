var gulp = require('gulp');
var gutil = require('gulp-util');
 
gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));

gulp.task('replace', function() {
	gutil.replaceExtension('file.coffee', '.js'); // file.js 
});


gulp.task('template', function() {
	var opt = {
	  name: 'todd',
	  file: 'hi.js'
	};
	gutil.template('test <%= name %> <%= file.path %>', opt) // test todd /js/hi.js
});

