import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';

gulp.task('css', () => {
	return gulp.src('app/**/*.css')
		.pipe(gulp.dest('sever/public'))
})
