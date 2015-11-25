var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;

// Transpile ES6 source files into JavaScript
gulp.task('build', function() {
  'use strict';

  return gulp.src(['src/**/*.js'])
    .pipe($.cached('*.js'))
    .pipe($.babel())
    .pipe(gulp.dest('dist/'));
});

// Run Hapi server and realod on changes
gulp.task('serve', function() {
  'use strict';
  $.nodemon({
    script: 'src/server.js',
    execMap: {
      'js': 'node_modules/babel/bin/babel-node'
    },
    ignore: ['gulpfile.js', 'node_modules', 'test']
  });
});

// Run lab tests
gulp.task('test', function() {
  'use strict';
  
  var testPath = ['test/**/*.js', 'test/mocks/*.js'];
  if (argv.f) {
    testPath = ['test/' + argv.f];
  }
  
  return gulp.src(testPath)
    .pipe($.lab('-T node_modules/lab-babel'));
});

// Run tests and watch for changes to keep tests running
gulp.task('tdd', ['test'], function() {
  'use strict';
  gulp.watch('{src,test}/**/*.js', ['test']);
});

// Clean built directory
gulp.task('clean', function (callback) {
  'use strict';

  var del = require('del');
  del(['dist'], callback);
});

gulp.task('default', ['build']);
