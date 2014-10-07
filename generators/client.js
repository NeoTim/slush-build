var es = require('event-stream');

module.exports = function(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp){
  gulp.task('client', function (done) {

    gulp.src('build.json')
      .pipe( g.jsonEditor( function ( json ) {
        json.clientDir = './client';
        console.log(json)
        return json;
      } ) )
      .pipe( gulp.dest( '.' ) )

    /* Pipe the app/ dir to the client/ dir */
    gulp.src
      .on('end', function(){
        done();
      });
  });
  return gulp;
}