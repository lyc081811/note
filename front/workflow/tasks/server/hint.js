/**
 * 前端验证task
 *
 * @author 85ido-fe-generator
 */
module.exports = function(gulp, common) {
    const { config, plugins: $ } = common;
    /**
     * 验证server js。
     */
    gulp.task('hint-server', () =>
        gulp.src(config.server.js.src)
            .pipe($.eslint())
            .pipe($.eslint.format())
    );
}
