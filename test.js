var fs = require('fs-extra')

var pkg = fs.readJsonSync('./package.json')
console.log(pkg)