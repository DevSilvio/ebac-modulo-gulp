const gulp = require('gulp');
<<<<<<< HEAD
//const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-dart-sass');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback){
    setTimeout(function() {
        console.log("Executando via gulp");
        callback();
    }, 2000)
}

function dizOi(callback){
    setTimeout(function() {
        console.log("Olá gulp");
        dizTchau();
        callback();
    }, 1000);
=======
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
>>>>>>> 7a92f0692299eb9b7e97140612bed2bc6b4e456a
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe( sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

<<<<<<< HEAD
exports.default = gulp.parallel(funcaoPadrao,dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
=======
exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
}
>>>>>>> 7a92f0692299eb9b7e97140612bed2bc6b4e456a
