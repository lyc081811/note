import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.watch('clean', () => {
	return del(['server/public', 'server/views'])
})
