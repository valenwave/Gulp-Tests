var gulp = require('gulp');
 
gulp.task('copy', function() {
	gulp.src("./src/**")
	  .pipe(gulp.dest("./mirror-dimension")); 
});

gulp.task('default', [ 'copy' ]);
