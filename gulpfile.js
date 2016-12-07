/**
 * Gulpfile
 */

 /**
  * app specific const
  */
 const src = ['db/**/*.js', '*.js', '!gulpfile.js']
  , base = { base: 'db' }
  , targetPath = ['target/**/*.*'];

 /**
  * various imports
  */
 const gulp = require('gulp')
  , babel = require('gulp-babel')
  , nodemon = require('gulp-nodemon')
  , cache = require('gulp-memory-cache')
  , jshint = require('gulp-jshint')
  , clean = require('gulp-clean')
  , shell = require('gulp-shell')
  , spawn = require('child_process').spawn;

/**
 * 
 */
 gulp.task('build', ['nodeServer']);

/**
 * [description]
 * @param  {[type]} 'compile' [description]
 * @param  {[type]} (         [description]
 * @return {[type]}           [description]
 */
 gulp.task('compile', ['clean'], () => {
    return gulp.src(src, { base: '.' })
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(cache('compileCache'))
      .pipe(gulp.dest('target'));
 });

/**
 * [description]
 * @param  {[type]} 'clean' [description]
 * @param  {[type]} (       [description]
 * @return {[type]}         [description]
 */
 gulp.task('clean', () => {
    return gulp.src(targetPath, {read: false})
      .pipe(clean());
 });

/**
 * [description]
 * @param  {[type]} 'run' [description]
 * @param  {[type]} (     [description]
 * @return {[type]}       [description]
 */
 gulp.task('nodeServer', ['compile'], () => {
  spawn('node', ['./target/index'] , {stdio: 'inherit'});
 });