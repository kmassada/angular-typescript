var gulp = require('gulp');

gulp.task('tsd', function(callback) {
  var tsd = require('gulp-tsd');
  tsd({
    command: 'reinstall',
    config: './tsd.json',
  }, callback);
});

gulp.task('ts', function() {
  var ts = require('gulp-typescript');
  var tsProject = ts.createProject('./tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('./public/modules'));
});

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

gulp.task('serve', ['ts', 'inject'], function() {
  var nodemon = require('gulp-nodemon');
  var Files = ['public/**/*.*', 'app/**/*.*', '!gulpfile.js'];
  var options = {
    exec: 'node_modules/.bin/http-server',
    delayTime: 1,
    env: {
      PORT: 8000,
    },
    watch: Files,
  };

  return nodemon(options)
    .on('restart', function(ev) {
      console.log('Restarting');
    });
});
