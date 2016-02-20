var gulp = require('gulp');

gulp.task('inject', function() {
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');

  var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'],
  {read: false});
  var injectOptions = {
    ignorePath: 'public',
  };

  var injectAngularSrc = gulp.src('./public/modules/**/*.js',
  {read: false});
  var injectAngularOptions = {
    ignorePath: 'public',
    name: 'angular',
  };

  // Define where bowerjson options for wiredep
  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public/',
  };

  return gulp.src('./public/*.html')
      .pipe(inject(injectAngularSrc,injectAngularOptions))
      .pipe(inject(injectSrc,injectOptions))
      .pipe(wiredep(options))
      .pipe(gulp.dest('./public'));
});
