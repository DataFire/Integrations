const fs = require('fs');
const path = require('path');
const datafire = require('datafire');
const DESTINATION = __dirname + '/../integrations/generated';

const TYPES = ['rss', 'openapi', 'openapi_3', 'raml', 'wadl', 'api_blueprint'];

const maybeGetPatch = (name) => {
  try {
    return require('../patches/' + name);
  } catch (e) {
    return;
  }
}

module.exports = (args, callback=()=>{}) => {
  args.name = args.name.toLowerCase().replace(/\W+/g, '_');
  args.destination = DESTINATION;
  args.patch = maybeGetPatch(args.name) || maybeGetPatch(args.provider);
  let type = TYPES.filter(t => args[t])[0];
  function writeIntegrationFiles() {
    console.log('Writing', args.name);
    let spec = require(path.join(args.destination, args.name, 'openapi.json'));
    let pkg = JSON.parse(JSON.stringify(require('../package-template.json')))
    let packageFile = path.join(args.destination, args.name, 'package.json');
    let isNew = !fs.existsSync(packageFile);
    if (!isNew) pkg = require(packageFile);
    pkg.name = '@datafire/' + args.name;
    pkg.description = "DataFire integration for " + (spec.info.title || args.name);
    pkg.datafire = pkg.datafire || {};
    pkg.datafire.origin = args[type];
    pkg.datafire.type = type;
    if (args.bump && !isNew) {
      let semver = pkg.version.split('.');
      pkg.version = [+semver[0] + 1, 0, 0].join('.');
    }
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
