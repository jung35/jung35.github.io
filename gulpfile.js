var gulp        = require('gulp')
var browserSync = require('browser-sync').create()
var sass        = require('gulp-sass')
var babel       = require("gulp-babel")
var browserify  = require('browserify')
var babelify    = require("babelify")
var source      = require('vinyl-source-stream')

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {
  browserSync.init({server: "./", online: false})

  gulp.watch("src/scss/**/*.scss", ['sass'])
  gulp.watch("src/js/**/*.js", ['js'])
  gulp.watch("*.html").on('change', browserSync.reload)
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
});

gulp.task('js', function() {
  return browserify('src/js/main.js')
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])