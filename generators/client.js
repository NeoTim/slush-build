var es = require('event-stream');

module.exports = function(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp, del){
  gulp.task('client',["client:task"], function(done){

    /* Delete all moved files */
    del(['./app', './styles', './bower_components', './favicon.ico', './index.html'], function (err) {
      console.log('Files deleted');
    })
    done()
  });
  gulp.task('client:task', function (done) {

    gulp.src('build.json')
      .pipe( g.jsonEditor( function ( json ) {
        json.clientDir = './client';
        console.log(json)
        return json;
      } ) )
      .pipe( gulp.dest( '.' ) )

    gulp.src('.bowerrc')
      .pipe( g.jsonEditor( function ( json ) {
        json.directory = 'client/bower_components';
        return json;
      } ) )
      .pipe( gulp.dest( '.' ) )

    /* Pipe the app/ dir to the client/ dir */
    gulp
      .src(['**/*', '!.bowerrc', '!bower.json', '!build.json'], { base: './' })
      .pipe( gulp.dest('./client') )
      .on('end', function(){
        done();
      });
  });
  return gulp;
}