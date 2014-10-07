var es = require('event-stream');

module.exports = function(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp){
  gulp.task('client', function (done) {

    gulp.src('bower.json')
      .pipe( g.jsonEditor( function ( json ) {
        console.log(json)
      } ) )
      .pipe( gulp.dest( '.' ) )
      .on('end', function(){
        done();
      });
  });
  return gulp;
}