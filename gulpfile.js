var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

gulp.task('default', function () {
	var bundler = browserify({
		entries: 'index.js',
		debug: true
	});
	bundler.transform(babelify);

	bundler.bundle()
		.on('error', function (err) { console.error(err); })
		.pipe(source('index.js'))
		.pipe(rename('utils.js'))
		.pipe(buffer())
		.pipe(gulp.dest('build/'));
});
