// Testando execução do gulp
// var gulp = require('gulp');

// gulp.task('default', function() {
// 	console.log('Olá, Desenvolvedor!');
// });

// Abaixo com a versão Gulp 4
var gulp = require('gulp');
var sass = require('gulp-sass');

// Task para o sass
gulp.task('sass', gulp.series( function() {    
    return gulp.src('sass/**/*.sass')
    // Converter o Sass em CSS
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
    .pipe(gulp.dest('css'));
}));

// Task para watch
gulp.task('watch', gulp.series( function() {
    gulp.watch('sass/**/*.sass', gulp.parallel( ['sass'] ));
}));

// Task default gulp
gulp.task('default', gulp.series( ['sass', 'watch'] ));