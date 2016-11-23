const fs = require('fs');
const path = require('path');
const datafire = require('datafire');
const DIRECTORY = __dirname + '/../integrations';

const TYPES = ['rss', 'openapi', 'raml', 'wadl', 'api_blueprint'];

module.exports = (args, callback=()=>{}) => {
  args.name = args.name.toLowerCase();
  args.directory = DIRECTORY;
  let type = TYPES.filter(t => args[t])[0];
  datafire.commands.integrate(args, (e, spec) => {
    if (e) throw e;
    let pkg = JSON.parse(JSON.stringify(require('../package-template.json')))
    let packageFile = path.join(args.directory, args.name, 'package.json');
    if (fs.existsSync(packageFile)) {
      pkg = require(packageFile);
    }
    pkg.name = '@datafire/' + args.name;
    pkg.description = "DataFire integration for " + spec.info.title || spec.info.host;
    pkg.datafire = pkg.datafire || {};
    pkg.datafire.origin = args.openapi;
    pkg.datafire.type = type;
    fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2));
    callback();
  })
}

if (require.main === module) {
  let args = require('yargs').argv;
  module.exports(args);
}
