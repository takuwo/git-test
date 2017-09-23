var gulp = require('gulp'),
    less = require('gulp-less');
    autoprefixer = require('gulp-autoprefixer');

var paths = {
  less: './less/nokoto.less',
  css_build: './css'
}

gulp.task('less', function() {
  gulp.src(paths.less)
      .pipe(less())
      .pipe(gulp.dest(paths.css_build));
});

// var lessDir = './less/';
// var cssDir = './css/';
// 
// var themeName = 'nokoto';
// 
// gulp.task('less', function() {
//     var lessPath = lessDir + themeName +'.less';
//     var cssPath = cssDir;
// 
//     return gulp.src('lessPath')
//       .pipe(less({compress: false}))
//       .pipe(gulp.dest(cssPath))
//       .pipe(autoprefixer({
//         browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
//         cascade: false
//       }));
// });

gulp.task('default', function () {
    gulp.watch(
        ['./less/**/*.less'],
        ['less']
    );
});
