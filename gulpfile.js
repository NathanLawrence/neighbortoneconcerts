var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less');

gulp.task('less', function(){
	return gulp.src('less/styles.less')
    .pipe(less({}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch',function(){
	gutil.log('Gulp will say that this task has finished, but don\'t believe its dirty lies.');
	gutil.log('Hit \^c to actually exit watch mode.');
});