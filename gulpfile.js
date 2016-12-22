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
    browserSync = require('browser-sync'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files')

    ;

var config = {
    index: {
        src: 'index.html',
        dst: 'dist/'
    },
    html: {
        src: 'src/**/**/*.html',
        dst: 'dist/html'
    },
    scripts: {
        src: ['src/**/**/*.js'],
        dst: 'dist/scripts'
    },
    styles: {
        src: 'src/globals/styles/*.css',
        dst: 'dist/styles'
    }
};

gulp.task('bower', function () {
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return gulp.src(mainBowerFiles({
        includeDev: true
    }), {base: 'bower_components'})

        .pipe(jsFilter)
        .pipe(concat('bower.js'))
        .pipe(gulp.dest(config.scripts.dst))
        // .pipe(jsFilter.restore)

        .pipe(cssFilter)
        .pipe(concat('bower.css'))
        .pipe(gulp.dest(config.styles.dst));
});

gulp.task('styles',function () {
    return gulp.src(config.styles.src)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.styles.dst));
});
gulp.task('browser-sync', function () {
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


gulp.task('watch', ['browser-sync', 'scripts','styles'], function () {

    gulp.watch('bower.json', ['bower']);
    gulp.watch(config.html.src, browserSync.reload);
    gulp.watch(config.index.src, browserSync.reload);
    gulp.watch(config.scripts.src, browserSync.reload);
    gulp.watch(config.styles.src, browserSync.reload);
});

gulp.task( 'default', [ 'clean' ], function() {
    gulp.start(
        // 'index',
        'bower',
        'styles',
        'scripts',
        // 'images',
        'watch'
    );
    // gulp.start( 'openBrowser' );
} );
// gulp.task('default', ['watch']);