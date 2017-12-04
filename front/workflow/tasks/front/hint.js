/**
 * 前端验证task
 *
 * @author 85ido-fe-generator
 */
module.exports = function(gulp, common) {
    const { config, plugins: $ } = common;
    /**
     * 验证前端 js。
     */
    gulp.task('hint-js', () =>
        gulp.src(config.client.js.src)
            .pipe($.cached('hint'))
            .pipe($.eslint(config.client.js.lintrc))
            .pipe($.eslint.format())
    );
}
