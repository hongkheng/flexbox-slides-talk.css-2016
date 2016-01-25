var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function(){
	connect.server({
		root: ['src', 'out'],
		livereload: true
	});
});

gulp.task('html', function(){
	return gulp.src('src/**/*.html')
	.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('src/**/*.html');
});