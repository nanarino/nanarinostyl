const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('stylus', function () {
    return gulp.src('./src/lib/index.styl')
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(rename('nanarinostyl.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('stylus'));