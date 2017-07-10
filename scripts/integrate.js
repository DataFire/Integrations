const fs = require('fs');
const path = require('path');
const datafire = require('datafire');
const DESTINATION = __dirname + '/../integrations/generated';

const TYPES = ['rss', 'openapi', 'raml', 'wadl', 'api_blueprint'];

module.exports = (args, callback=()=>{}) => {
  args.name = args.name.toLowerCase().replace(/\W+/g, '_');
  args.destination = DESTINATION;
  let type = TYPES.filter(t => args[t])[0];
  function writeIntegrationFiles() {
    console.log('Writing', args.name);
    let spec = require(path.join(args.destination, args.name, 'openapi.json'));
    let pkg = JSON.parse(JSON.stringify(require('../package-template.json')))
    pkg.name = '@datafire/' + args.name;
    pkg.description = "DataFire integration for " + (spec.info.title || args.name);
    pkg.datafire = pkg.datafire || {};
    pkg.datafire.origin = args[type];
    pkg.datafire.type = type;
    let packageFile = path.join(args.destination, args.name, 'package.json');
    fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2));
    callback();
  }
  if (process.env.NO_UPDATE && fs.existsSync(path.join(args.destination, args.name))) {
    writeIntegrationFiles();
  } else {
    datafire.commands.integrate(args).then(spec => {
      writeIntegrationFiles();
    })
  }
}

if (require.main === module) {
  let args = require('yargs').argv;
  module.exports(args);
}
