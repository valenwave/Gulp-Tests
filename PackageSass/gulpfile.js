var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var args = require('yargs').argv;
var path = require('path');

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', [ 'sass' ]);
