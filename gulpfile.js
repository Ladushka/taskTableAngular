'use strict';

var gulp = require('gulp'),
    // jasmine = require('gulp-jasmine'),
    // Server = require('karma').Server,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    clean = require('gulp-clean'),
    del = require('del'),
    connect = require('gulp-connect'),
    browserSync  = require('browser-sync')

    ;

var config = {
    index: {
        src: 'index.html',
        dst: 'dist/'
    },
    scripts: {
        src: ['src/**/**/*.js'],
        dst: 'dist/scripts'
    },
    styles: {
        src: 'src/globals/styles/*css',
        dst: 'dist/styles'
    }
};


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false
    });
});
gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('scripts', function () {
    return gulp.src(config.scripts.src)
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.dst));
});

gulp.task('watch',['browser-sync', 'scripts'], function () {


    // gulp.watch(config.index.src, ['index']);
    gulp.watch(config.scripts.src, browserSync.reload);
    // gulp.watch(config.styles.src, ['styles']);
});

gulp.task('default', ['watch']);