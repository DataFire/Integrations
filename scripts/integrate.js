const fs = require('fs');
const path = require('path');
const datafire = require('datafire');
const DESTINATION = __dirname + '/../integrations/generated';

const TYPES = ['rss', 'openapi', 'raml', 'wadl', 'api_blueprint'];

function schemaToMarkdown(schema, title) {
  if (!schema) return '';
  delete schema.definitions;
  return `### ${title || ''} Schema\n` + '```json\n' + JSON.stringify(schema, null, 2) + '\n```\n'
}

module.exports = (args, callback=()=>{}) => {
  args.name = args.name.toLowerCase().replace(/\W+/g, '_');
  args.destination = DESTINATION;
  let type = TYPES.filter(t => args[t])[0];
  function writeIntegrationFiles() {
    console.log('Writing', args.name);
    let spec = require(path.join(args.destination, args.name, 'openapi.json'));
    let pkg = JSON.parse(JSON.stringify(require('../package-template.json')))
    let packageFile = path.join(args.destination, args.name, 'package.json');
    pkg.name = '@datafire/' + args.name;
    pkg.description = "DataFire integration for " + (spec.info.title || args.name);
    pkg.datafire = pkg.datafire || {};
    pkg.datafire.origin = args[type];
    pkg.datafire.type = type;
    let integ = require(path.join(args.destination, args.name, 'index.js'));
    let md = '# @datafire/' + integ.id + '\n';
    md += integ.description + '\n\n';
    integ.allActions.forEach(action => {
      let id = action.id.substring(action.id.indexOf('/') + 1);
      md += '## Operation: ' + id + '\n' + action.description + '\n\n';
      md += schemaToMarkdown(action.inputSchema, 'Input');
      md += schemaToMarkdown(action.outputSchema, 'Output');
    })
    let readmeFile = path.join(args.destination, args.name, 'README.md');
    fs.writeFileSync(readmeFile, md);
    fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2));
    if (integ.ajv) {
      integ.ajv._cache.clear();
    }
    integ = null;
    for (let key in require.cache) {
      if (key.indexOf(path.join(__dirname, '..')) !== -1) {
        delete require.cache[key];
      }
    }
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
