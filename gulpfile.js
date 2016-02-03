var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Transpile ES6 source files into JavaScript
gulp.task('build', function() {
  'use strict';

  return gulp.src(['src/**/*.js'])
    .pipe($.cached('*.js'))
    .pipe($.babel())
    .pipe(gulp.dest('dist/'));
});

// Run Hapi server and reload on changes
gulp.task('serve', function() {
  'use strict';
  $.nodemon({
    script: 'src/server.js',
    ignore: ['gulpfile.js', 'node_modules', 'test']
  });
});

// Run lab tests
gulp.task('test', function() {
  'use strict';
  return gulp.src(['test/**/*.js', 'test/mocks/*.js'])
    .pipe($.lab());
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
