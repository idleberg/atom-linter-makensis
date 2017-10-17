// Dependencies
const debug = require('gulp-debug');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const jsonlint = require('gulp-jsonlint');

// Files

const jsFiles = [
    './lib/**/*.js'
];

const jsonFiles = [
    './grammars/*.json',
    './keymaps/*.json',
    './menus/*.json',
    './snippets/*.json',
    './package.json'
];

// Lint LESS files
gulp.task('lint:less', gulp.series(function(done) {
    gulp.src(lessFiles)
        .pipe(debug({title: 'lesshint:'}))
        .pipe(lesshint())
        .pipe(lesshint.reporter());
    done();
}));

// Lint JavaScript files
gulp.task('lint:js', gulp.series(function(done) {
    gulp.src(jsFiles)
        .pipe(debug({title: 'eslint:'}))
        .pipe(eslint());
    done();
}));

// Lint JSON files
gulp.task('lint:json', gulp.series(function(done) {
    gulp.src(jsonFiles)
        .pipe(debug({title: 'jsonlint:'}))
        .pipe(jsonlint())
        .pipe(jsonlint.failAfterError())
        .pipe(jsonlint.reporter());
    done();
}));

// Tasks
gulp.task('lint', gulp.parallel('lint:js', 'lint:json', function(done) {
  done();
}));
