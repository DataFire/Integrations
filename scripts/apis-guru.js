const request = require('request');
const async = require('async');
const fs = require('fs');
const path = require('path');
const integrate = require('./integrate');

const args = require('yargs').argv;

const APIS_GURU_URL = "https://api.apis.guru/v2/list.json";

const SUFFIXES = [
  '.com', '.org', '.net', '.co.uk', '.io',
]

const NAME_CHANGES = {
  "m2010.vg": "magento",
  "googleapis.com": "google",
  "citrixonline.com": "citrix",
  "hetrascertification.net": "hetras",
  "nrel.gov": "nrel",
  "posty-api.herokuapp.com": "posty",
  "microsoft.com": "microsoft_security_updates",
}

const getName = (apisGuruName) => {
  let provider = '';
  let name = NAME_CHANGES[apisGuruName];
  if (!name) {
    name = apisGuruName.substring(apisGuruName.indexOf(':') + 1);
    provider = apisGuruName.substring(0, apisGuruName.indexOf(':'));
    provider = NAME_CHANGES[provider] || provider;
    SUFFIXES.forEach(suffix => {
      let regex = new RegExp(suffix.replace(/\./g, '\\.') + '$');
      name = name.replace(regex, '');
      provider = provider.replace(regex, '');
    });
    if (provider) name = provider + '_' + name;
  }
  name = name.toLowerCase().replace(/\W+/g, '_');
  return {provider, name};
}

const OUT_DIR = __dirname + '/../integrations/generated';
const DEPRECATED_DIR = __dirname + '/../integrations/deprecated';

request.get(APIS_GURU_URL, {json: true}, (err, resp, body) => {
  if (err) throw err;
  let keys = Object.keys(body);
  if (args.new) {
    keys = keys.filter(key => {
      let {provider, name} = getName(key);
      return !fs.existsSync(OUT_DIR + '/' + name) && !fs.existsSync(DEPRECATED_DIR + '/' + name);
    })
  }
  if (args.name) {
    keys = keys.filter(key => {
      let {provider, name} = getName(key);
       return name === args.name;
    })
  }
  async.parallel(keys.map(key => {
    return acb => {
      let {name, provider} = getName(key);
      let info = body[key];
      let api = info.versions[info.preferred];
      if (args.info_only) {
        updateSpec(name, api.swaggerUrl, true, acb)
      } else if (args.spec_only) {
        updateSpec(name, api.swaggerUrl, false, acb)
      } else {
        integrate({
          name,
          openapi: api.swaggerUrl,
          patch: maybeGetPatch(name) || maybeGetPatch(provider),
        }, acb);
      }
    }
  }), err => {
    if (err) throw err;
    console.log('done');
  })
})

function updateSpec(name, url, infoOnly, callback) {
  let specFile = path.join(OUT_DIR, name, 'openapi.json');
  if (!fs.existsSync(specFile)) return callback();
  request.get(url, {json: true}, (err, resp, newSpec) => {
    if (err) return callback(err);
    let specToWrite = newSpec;
    if (infoOnly) {
      specToWrite = require(specFile);
      specToWrite.info.title = newSpec.info.title;
      specToWrite.info.description = newSpec.info.description;
      specToWrite.info['x-logo'] = newSpec.info['x-logo'];
    } else {
      specToWrite = newSpec;
    }
    fs.writeFile(specFile, JSON.stringify(specToWrite, null, 2), (err) => {
      callback(err, specToWrite);
    });
  })
}

const maybeGetPatch = (name) => {
  try {
    return require('../patches/' + name);
  } catch (e) {
    return;
  }
}
