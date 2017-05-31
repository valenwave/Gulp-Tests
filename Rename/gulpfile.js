var gulp = require('gulp');
var rename = require("gulp-rename");
 
gulp.task('rename', function() {
	gulp.src("./src/FileToRename.txt")
	  .pipe(rename("RenamedFile.txt"))
	  .pipe(gulp.dest("./out")); // ./dist/main/text/ciao/goodbye.md 	 
});

gulp.task('default', [ 'rename' ]);
