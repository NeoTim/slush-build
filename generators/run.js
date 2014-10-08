var path = require('path')

module.exports = function (gulp, g, install, conflict, template, rename, _, inflections, inquirer, mkdirp, express) {
  var app = express();
  gulp.task('run', function (done) {
    gulp.src('build.json')
      .pipe( g.jsonEditor( function ( json ) {
          app.use( express.static(json.clientDir) )
          app.use( express.static(path.join('./') ) )
          app.listen(9000, function(){
            console.log('Go to Localhost:9000')
            done()
          });
        return json;
      } ) )
      .pipe( gulp.dest( '.' ) )

  });
  return gulp;
};