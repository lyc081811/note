import runSequence from 'run-sequence';

/**
 * 发布
 *
 * @author 85ido-fe-generator
 */
module.exports = function(gulp, common) {
    const { config, plugins: $, util } = common;
    /**
     * 综合发布，顺序执行所有任务，在任务执行完成后会生成dist目录，该目录可以直接发布
     */
    gulp.task('release', (cb) => {
        runSequence(
            'clean',
            'transpile',
            [
                'hint-server'
            ],
            'remember-deps',
            [
                'release-resources',
                'partial-html',
                'release-deps',
                'release-server',
                'release-app'
            ],
            'release-js',
            'release-views',
            'clean:rev',
            () => {
                util.copy({
                    src: ['package.json'],
                    dist: 'dist/'
                });
                util.copy({
                    src: 'bin/*',
                    dist: 'dist/bin/'
                });
                cb();
            }
        );
    });
}
