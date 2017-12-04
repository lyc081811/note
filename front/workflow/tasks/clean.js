import del from 'del';

/**
 * 清理任务
 *
 * @author 85ido-fe-generator
 */
module.exports = function(gulp, common) {
    const { config, plugins: $ } = common;
    /**
     * 清理发布目录，只保留.git, .gitignore和ecosystem.json
     */
    gulp.task('clean', () =>
        del(['dist/**', '!dist', '!dist/.git', '!dist/.gitignore', '!dist/ecosystem.json'])
    );

    /**
     * 清理发布出的revision文件
     */
    gulp.task('clean:rev', () =>
        del([`${config.client.rev.dist}**`])
    );
}
