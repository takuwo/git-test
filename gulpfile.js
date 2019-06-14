let gulp         = require('gulp'),
    less         = require('gulp-less');
    plumber      = require("gulp-plumber");
    autoprefixer = require('gulp-autoprefixer');

let lessPath = './less/';
let cssPath = './css/';

gulp.task('less', function() {
    return gulp.src(lessPath + 'nokoto.less')
      .pipe(less({compress: false}))
      .pipe(gulp.dest(cssPath))
      .pipe(plumber())
      .pipe(autoprefixer({
        browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
        cascade: false
      }));
});

gulp.task('default', function () {
    gulp.watch(
        [lessPath + '**/*.less'],
        ['less']
    );
});
