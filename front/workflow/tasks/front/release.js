/**
 * 前端release task
 *
 * @author 85ido-fe-generator
 */
import path from 'path';
import through from 'through2';

module.exports = function(gulp, common) {
    const { config, plugins: $, util } = common;
    const deps = [];

    /**
     * 复制除 css/js 的资源到生成目录。
     */
    gulp.task('release-resources',
        () => {
            util.copy(config.client.image);
            util.copy({
                src: 'public/fonts/**/*',
                dist: 'dist/public/fonts/'
            });
            return util.copy({
                src: ['public/!(css|fonts|img|js|source)', 'public/!(css|fonts|img|js|source)/**/*'],
                dist: 'dist/public/'
            });
        }
    );

    gulp.task('release-css', () =>
        gulp.src(config.client.css.src)
            .pipe($.cssnano())
            .pipe($.rev())
            .pipe(gulp.dest(config.client.css.dist))
            .pipe($.rev.manifest('rev-css.json'))
            .pipe(gulp.dest(config.client.rev.dist))
    );

    /**
     * 处理并生成前端 js。
     */
    gulp.task('release-js', () =>
        gulp.src(Array.of(config.client.js.src, ...deps))
            .pipe($.stripDebug())
            .pipe($.sourcemaps.init())
            .pipe($.babel())
            .pipe($.ngAnnotate({
                single_quotes: true
            }))
            .pipe($.uglify())
            .pipe($.sourcemaps.write(`.`, {
                mapFile: mapFilePath => mapFilePath.replace('.js.map', '.map.json')
            }))
            .pipe($.if('*.js', $.rev()))
            .pipe(gulp.dest(config.client.js.dist))
            .pipe($.rev.manifest('rev-js.json'))
            .pipe(gulp.dest(config.client.rev.dist))
    );

    /**
     * 生成依赖的js和css文件。
     */
    gulp.task('release-deps', () => {
        gulp.src(config.client.js.deps.src, {
            base: 'public/js/deps'
        })
        .pipe(gulp.dest(config.client.js.deps.dist));

        return gulp.src(config.client.js.deps.bundles)
            .pipe($.useref())
            .pipe($.if('*.css', $.cssnano()))
            .pipe($.if('*.css', $.rev()))
            // If you want to compress and minify scripts, uncomment below codes.
            // .pipe($.if('*.js', $.uglify({
            //     mangle: false
            // })))
            .pipe($.if('*.js', $.rev()))
            .pipe($.revReplace())
            // dest css/js resources to public/ others to views/
            .pipe($.if('+(css|js)/**/*', gulp.dest('dist/public/'), gulp.dest(config.server.views.dist)))
            .pipe($.rev.manifest('rev-deps.json'))
            .pipe(gulp.dest(config.client.rev.dist));
    });

    /**
     * 记住依赖中包含的文件，在release-js时会被排除
     */
    gulp.task('remember-deps', () => {
        const projectDir = path.resolve(__dirname, '..', '..', '..') + path.sep;

        return gulp.src(config.client.js.deps.bundles, { base: 'public/' })
            .pipe($.fileAssets({
                includeSrc: true
            }))
            .pipe($.if('*.js', (() => {
                return through.obj((file, enc, cb) => {
                    if (file.isNull()) {
                        // 返回空文件
                        cb(null, file);
                    }
                    let filePath = file.path.replace(new RegExp(`^${projectDir.replace(/\\/g, '\\\\')}(public[\\\\\\\\/])js`), `!./$1source`);
                    deps.push(filePath);

                    cb(null, file);
                });
            })()));
    });

    /**
     * 将Directive的模板编译成html，并生成$templateCache代码。
     */
    gulp.task('partial-html',
        () => gulp.src(config.client.template.src)
                .pipe($.jade())
                .pipe($.angularTemplatecache({
                    module: '85ido',
                    transformUrl: url => url.replace(/\-tpl\.html/, '.tpl')
                }))
                .pipe(gulp.dest(config.client.template.dist))
    );
}
