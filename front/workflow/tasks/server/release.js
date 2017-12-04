/**
 * 服务端release task
 *
 * @author 85ido-fe-generator
 */
module.exports = function(gulp, common) {
    const { config, plugins: $, util } = common;
    /**
     * 处理并生成server js。
     */
    gulp.task('release-server', () =>
        gulp.src(config.server.js.src)
            .pipe($.babel())
            .pipe($.stripDebug())
            .pipe(gulp.dest(config.server.js.dist))
    );

    /**
     * 生成 views，替换静态资源文件。
     */
    gulp.task('release-views',
        () => gulp.src([config.client.rev.dist + '**/*.json'].concat(config.server.views.src))
                    .pipe($.revCollector())
                    .pipe(gulp.dest(config.server.views.dist))
    );

    /**
     * 生成 app.js
     */
    gulp.task('release-app', () => {
        gulp.src('app.js')
            .pipe($.babel())
            .pipe($.stripDebug())
            .pipe(gulp.dest('dist/'));

        return util.copy({
            src: 'logs/.gitkeep',
            dist: 'dist/logs/'
        });
    });
}
