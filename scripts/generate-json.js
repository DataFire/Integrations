const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const datafire = require('datafire');
const args = require('yargs').argv;

const iterateIntegs = require('./iterate-integrations');

const MAX_DESCRIPTION_LENGTH = 120;

const maybeMkdirp = (dir) => {
  try {
    mkdirp.sync(dir);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

const truncateDescription = (desc) => {
  if (!desc) return;
  desc = desc || '';
  desc = desc.replace(/<(?:.|\n)*?>/gm, '');
  let newLine = desc.indexOf('\n');
  if (newLine > -1) {
    desc = desc.substring(0, newLine);
  }
  if (desc.length > MAX_DESCRIPTION_LENGTH) {
    desc = desc.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
  }
  return desc;
}

const BASE_DIR = __dirname + '/../integrations/';
const OUT_DIR = __dirname + '/../json/';

let list = {};
if (args.name) list = require(OUT_DIR + 'list.json');
iterateIntegs((dir, name, integ) => {
    console.log('adding', name);
    let package = require(path.join(dir, 'package.json'));
    let openapiFile = path.join(dir, 'openapi.json');
    let openapi = {info: {}};
    if (fs.existsSync(openapiFile)) {
      openapi = JSON.parse(fs.readFileSync(openapiFile, 'utf8'));
    }
    if (list[name] && !args.name) throw new Error("Duplicate name " + name);
    list[name] = {
      id: name,
      title: integ.title,
      description: integ.description,
      security: integ.security,
      logo: openapi.info['x-logo'],
      tags: (openapi.info['x-apisguru-categories'] || []).map(t => t.replace(/_/g, ' ')),
    };
    if (name.indexOf('google_') === 0) list[name].tags.push('google');
    if (name.indexOf('amazonaws_') === 0) list[name].tags.push('aws');
    if (name.indexOf('azure_') === 0) list[name].tags.push('azure');
    let details = Object.assign({}, list[name]);
    list[name].description = truncateDescription(list[name].description);
    list[name].actionCount = integ.allActions.length;
    list[name].latestVersion = package.version;

    details.actions = integ.allActions.map(action => {
      details.definitions = details.definitions || action.inputSchema.definitions;
      let actionDetails = {
        id: action.id.split('/')[1],
        title: action.title,
        description: action.description,
        inputSchema: Object.assign({definitions: null}, action.inputSchema),
        outputSchema: Object.assign({definitions: null}, action.outputSchema),
      }
      if (action.security && action.security[name]) {
        actionDetails.security = {};
        actionDetails.security[name] = {integration: name};
      }
      delete actionDetails.inputSchema.definitions;
      delete actionDetails.outputSchema.definitions;
      return actionDetails;
    })
    let integDir = path.join(OUT_DIR, name, package.version);
    maybeMkdirp(integDir);
    fs.writeFileSync(path.join(integDir, 'index.json'), JSON.stringify(details, null, 2));
}, name => !args.name || name === args.name)

fs.writeFileSync(OUT_DIR + 'list.json', JSON.stringify(list, null, 2));

