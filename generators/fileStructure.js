var es = require('event-stream');

module.exports = function(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp){
  gulp.task('file-structure', function (done) {

    gulp.src(__dirname + '/../templates/steps/file-structure/*.html')
        .pipe( g.conflict('./'))
        .pipe( gulp.dest('./app/states/steps/file-structure'))

    var newScripts = gulp.src(__dirname + '/../templates/steps/file-structure/*.js', {read:false})
        .pipe( g.conflict('./'))
        .pipe( gulp.dest('./app/states/steps/file-structure') )

    var scripts = gulp.src('./app/**/*.js', {read:false})
        .pipe( gulp.dest('./app') )

    gulp.src('./index.html')
      .pipe( g.inject( es.merge(scripts), {addRootSlash:false, relative:true, name:'app'} ) )
      .pipe( gulp.dest( '.' ) )
        .on('end', function () {
            done();
        });
  });
  return gulp;
}