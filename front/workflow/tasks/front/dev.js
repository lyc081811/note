/**
 * 前端开发task
 *
 * @author 85ido-fe-generator
 */
module.exports = function(gulp, common) {
    const { config, plugins: $ } = common;
    /**
     * 验证并转换前端 js。
     */
    gulp.task('transpile', ['hint-js'],
        () => gulp.src(config.client.js.src)
                    .pipe($.cached('transpile'))
                    .pipe($.babel())
                    .on('error', function(e) {
                        $.util.log($.util.colors.green([
                            '-----------transpile error-----------\n',
                            e.name,
                            ': ',
                            e.message,
                            '\n',
                            e.codeFrame,
                            '\n',
                            '-----------transpile error-----------'
                        ].join('')));
                        this.emit('end');
                    })
                    .pipe($.ngAnnotate({
                        single_quotes: true
                    }))
                    .pipe(gulp.dest(config.client.js.develop.dist))
    );
}
