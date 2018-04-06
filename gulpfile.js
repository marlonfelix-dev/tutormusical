/* Include plugins */
var gulp 		   = require('gulp');
var less 		   = require('gulp-less');
var cleanCSS       = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
 
/* Task to compile LESS */
gulp.task('compile-less', function() {  
  gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));
});

/* Task to autoprefix CSS */
gulp.task('autoprefix', function(){
    gulp.src('./css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
});

/* Task to watch less changes */
gulp.task('watch', function() {  
  gulp.watch('./less/**/*.less' , ['compile-less']);
  gulp.watch('./css/style.css' , ['autoprefix']);
});

/* Task when running 'gulp' from terminal */
gulp.task('default', ['watch']);