const gulp = require('gulp')
const tmodjs = require('gulp-tmod')

gulp.task('tpl', () => {
  return gulp.src('tpl/**/*.tpl')
    .pipe(tmodjs({
      templateBase: 'tpl',
      type: 'commonjs'
    }))
    .pipe(gulp.dest('template'))
})