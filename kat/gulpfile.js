const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['./lib/**/*.js', 'gulpfile.js', 'index.js'];
var allFiles = ['./lib/**/*.js', 'gulpfile.js', 'index.js', './test/**/*test.js'];

gulp.task('lint:test', function () {
  return gulp.src('./test/**/*test.js')
  .pipe(eslint({
    'rules': {
      'indent':['error',2]
    },
    'env': [
      'mocha'
    ]
  }))
  .pipe(eslint.format());
});

gulp.task('lint:js', function () {
  return gulp.src(files)
  .pipe(eslint({
    'rules': {
      'indent' :['error',2]
    }
  }))
  .pipe(eslint.format());
});

gulp.task('mocha', function () {
  return gulp.src('./test/**/*test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watchFiles', function () {
  gulp.watch(allFiles, ['lint:js', 'lint:test', 'mocha']);
});
