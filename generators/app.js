var es = require('event-stream');
var path = require('path');
module.exports = function(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp){
  gulp.task('default', function(done){
    // if (!this.args[0]) {
    //   console.log('******    Incorrect usage of the sub-generator!!          ******');
    //   console.log('******    Try slush build <level-name>                    ******');
    //   console.log('******    Ex: slush build biginner                        ******');
    //   console.log('******    Ex: slush build basic                           ******');
    //   console.log('******    Ex: slush build expert                          ******');
    //   console.log('******    Ex: slush build fullstack                       ******');
    //   return done();
    // }

    var templatePath = __dirname + '/../templates';

    var prompts = [{
        name: 'appName',
        message: 'What would you like to call your application?',
        default: 'Build'
      },{
        type: 'list',
        name: 'level',
        message: 'Which Level would you like to start at?',
        choices: [
          {
            value: 'beginner',
            name: 'Beginner',
            default: true
          },{
            value: 'basic',
            name: 'Basic',
            default: false
          }
        ]
      },{
        name: 'appAuthor',
        message: 'What is your company/author name?'
      }];
      //Ask
    inquirer.prompt(prompts,
      function (answers) {


        if (!answers.appName) {
            return done();
        }
        answers.slugifiedAppName = _.slugify(answers.appName);
        answers.humanizedAppName = _.humanize(answers.appName);
        answers.capitalizedAppAuthor = _.capitalize(answers.appAuthor);


        gulp.src(path.join(templatePath, '/build.json'))
          .pipe( g.jsonEditor( function ( json ) {
            json.appName = answers.appName
            json.slugifiedAppName = answers.slugifiedAppName
            json.humanizedAppName = answers.humanizedAppName
            json.capitalizedAppAuthor = answers.capitalizedAppAuthor
            json.level = answers.level
            return json;
          }))
          .pipe( gulp.dest('./') )

        gulp.src(path.join(templatePath, answers.level, '/templates/**'))
            .pipe(rename(function(file) {
                if (file.basename.indexOf('__') == 0) {

                  file.basename = '.' + file.basename.slice(2);

                }
             }))
            .pipe(template(answers))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('end', function () {
              done()
            });
    });

  });
  return gulp;
}