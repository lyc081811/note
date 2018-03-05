* gulp-sequence
gulp的异步处理的，但遇到需要环环相扣的操作（比如css）就gg了，gulp-sequence就是可以按顺序逐个同步地运行gulp任务```gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));```[资料](https://www.jianshu.com/p/d06943382f00)
* gulp-if
可以在pipe()里写判断了，一般在区分开发、生成时做判断```pipe(gulpif(args.watch,livereload()))```
* gulp-plumber
gulp 的错误处理有点坑，假如发生错误进程就挂了。相对的解决办法不少，但是这个是我个人比较推荐的，比特么在容易出错的地方写错误监听靠谱。所以这个插件可以阻止 gulp 插件发生错误导致进程退出并输出错误日志。  ``` pipe(plumber()) ```
* gulp-concat
合并多个js文件
```
gulp.src('src/js/*.js')
    .pipe(concat('all.js'))//合并后的文件名
    .pipe(gulp.dest('dist/js'));
```
* yargs(不是gulp插件)
一个命令行参数