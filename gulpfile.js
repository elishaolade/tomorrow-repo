var gulp        = require('gulp');
var dartSass = require('sass');
var gulpSass        = require('gulp-sass');
const sass = gulpSass(dartSass);
const concat = require('gulp-concat');


// Watching scss/html files
gulp.task('serve', function() {
    gulp.watch("./src/components/**/*.scss", gulp.parallel('sass'));
});

/* Compiles sass files in sass directory */
/* Change to desired CSS Preprocessor */
gulp.task('sass', function() {
    return gulp.src("./src/*.scss")
        .pipe(sass.sync())
        .pipe(concat('theme.css'))
        .pipe(gulp.dest("./theme/assets/"));
});

/* Compiles ES6+ to vanilla */
/* Not needed for current task */
// gulp.task('es6', function() {
//     return gulp.src("./src/*.js")
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(browserify({
//             insertGlobals : true}))
//         .pipe(concat('theme.js'))
//         .pipe(gulp.dest("./theme/assets/"))
// })