const gulp = require('gulp');
const eslint = require('gulp-eslint');

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
