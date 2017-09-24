var gulp = require('gulp'),
    less = require('gulp-less');
    autoprefixer = require('gulp-autoprefixer');
    plumber = require("gulp-plumber");


var lessPath = './less/';
var cssPath = './css/';

gulp.task('less', function() {
    return gulp.src(lessPath + 'nokoto.less')
      .pipe(plumber())
      .pipe(less({compress: false}))
      .pipe(gulp.dest(cssPath))
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
