const gulp         = require('gulp');
const less         = require('gulp-less');
const plumber      = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');

const lessPath = './less/';
const cssPath = './css/';

gulp.task('less', function() {
    return gulp.src(lessPath + 'nokoto.less')
      .pipe(less({compress: false}))
      .pipe(gulp.dest(cssPath))
      .pipe(plumber())
      .pipe(autoprefixer({})
    );
});

gulp.task('default', function () {
    gulp.watch(
        [lessPath + '**/*.less'],
        gulp.task('less')
    );
});
