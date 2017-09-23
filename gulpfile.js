var gulp = require('gulp'),
    less = require('gulp-less');
    autoprefixer = require('gulp-autoprefixer');

var lessDir = './less/';
var cssDir = './css/';
var dropboxDir = '../../Dropbox/Public/hatena-blog-themes/';

var themeName = 'nokoto';

gulp.task('less', function() {
    var lessPath = lessDir + themeName +'.less';
    var cssPath = cssDir;
    var dropboxPath = dropboxDir + themeName + '/';

    return gulp.src(lessPath)
        .pipe(less({compress: true}))
        .pipe(gulp.dest(cssPath))
        .pipe(autoprefixer({
          browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
          cascade: false
        }))
        .pipe(gulp.dest(dropboxPath));
});

gulp.task('default', function () {
    gulp.watch(
        [lessDir + '**/*.less'],
        ['less']
    );
});

