'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');

var dst = {
    js: 'dist/js',
    css: 'dist/css'
};

var paths = {
    js: [
        'node_modules/jquery/dist/jquery.js',
        'src/js/app.js'
    ],
    sass: 'src/scss/**/*.scss'
};

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dst.js));
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('clean', function() {
    return gulp.src(['dist'])
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    return gulp.start('js', 'sass');
});