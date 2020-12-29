'use strict';

var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('scss', function () {
  gulp.src('./methods/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./methods'));
});

gulp.task('a', function () {
  gulp.src('./accessibility/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./accessibility'));
});

gulp.task('v', function () {
  gulp.src('./vertical/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./vertical'));
});

gulp.task('s', function () {
  gulp.src('./sticky/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./sticky'));
});

gulp.task('t', function () {
  gulp.src('./tricks/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./tricks'));
});

gulp.task('scss-maps', function () {
  gulp.src('./maps/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./maps'));
});


gulp.task('scss-responsive', function () {
  gulp.src('./responsive-scss/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./responsive-scss'));
  gulp.src('./responsive-scss-extension/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./responsive-scss-extension'));
});

gulp.task('watch', function () {
  gulp.watch('./methods/**/*.scss', ['scss']);
});
