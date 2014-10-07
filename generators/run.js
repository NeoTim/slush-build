module.exports = function (gulp, g, install, conflict, template, rename, _, inflections, inquirer, mkdirp, express) {
  var app = express();
  gulp.task('run', function (done) {

    app.use( express.static('.') )
    app.listen(9000, function(){
      console.log('Go to Localhost:9000')
      done()
    });
  });
  return gulp;
};