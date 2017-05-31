var gulp = require('gulp');
 
gulp.task('copy', function() {
	gulp.src("./input/**")
	  .pipe(gulp.dest("./output")); 
});

gulp.task('default', [ 'copy' ]);
