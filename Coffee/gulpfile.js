var gulp = require('gulp');
var coffeescript = require('gulp-coffeescript');
 
gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffeescript({bare: true}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', [ 'coffee' ]);
