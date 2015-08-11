var path       = require('path');
var gulp       = require('gulp');
var rename     = require('gulp-rename');
var webpack    = require('webpack-stream');
var config     = require('../config');

gulp.task('webpack', function() {
  return gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest('build/js'));
});
