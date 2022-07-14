const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

function liveReload() {
  browserSync.init({
    server: './src'
  });

  gulp.watch('src/sass/*.scss', cssTranspile);
  gulp.watch('src/scripts/*.js', jsCompile);
  gulp.watch("src/*.html").on('change', browserSync.reload);
};

function cssTranspile() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

function jsCompile() {
  return gulp.src('./src/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/js'));
};

function cssPostprefixer(done) {
  return gulp.src('./src/sass/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
  .pipe(gulp.dest('./dist/css'));
   
  done();
};

function htmlMinify() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

function jsMinify() {
  return gulp.src(['src/js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
};

function cssClean(){
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
};

function buildCss() {
  return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('build/css'));
};

function buildJS() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('build/js'));
};

function buildHTML() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('build'));
};

function clean() {
  return del('build');
};

function archive() {
  return gulp.src('build/**/*')
    .pipe(zip('build.zip'))
    .pipe(gulp.dest('./'))
};

exports.default = liveReload;
exports.sass = cssTranspile;
exports.js = jsCompile;
exports.css = cssPostprefixer;
exports.html = htmlMinify;
exports.js1 = jsMinify;
exports.css1 = cssClean;
exports.archive = archive;
exports.build = gulp.series(clean, gukp.parallel (buildCss, buildJS, buildHTML), archive);

