var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('build', function() {
  return gulp.src('input.css').pipe(postcss([
    require('cssstats'),
    require('postcss-reporter')
  ]));
});
