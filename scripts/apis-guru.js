const request = require('request');
const async = require('async');
const fs = require('fs-extra');
const path = require('path');
const integrate = require('./integrate');

const args = require('yargs').argv;

const APIS_GURU_URL = "https://api.apis.guru/v2/list.json";

const getName = require('./apis-guru-name.js');

const OUT_DIR = __dirname + '/../integrations/generated';
const DEPRECATED_DIR = __dirname + '/../integrations/deprecated';

request.get(APIS_GURU_URL, {json: true}, (err, resp, body) => {
  if (err) throw err;
  let keys = Object.keys(body);
  keys = keys.filter(key => {
    let {provider, name} = getName(key);
    if (fs.existsSync(DEPRECATED_DIR + '/' + name)) {
      return false;
    }
    let isNew = !fs.existsSync(OUT_DIR + '/' + name);
    if (args.new && !isNew || args.nonew && isNew) {
      return false;
    }
    if (args.name && name !== args.name) {
      return false;
    }
    return true;
  });
  let names = [];
  async.parallelLimit(keys.map(key => {
    return acb => {
      let {name, provider} = getName(key);
      names.push(name);
      let info = body[key];
      let api = info.versions[info.preferred];
      if (args.info_only) {
        updateSpec(name, api.swaggerUrl, true, acb)
      } else if (args.spec_only) {
        updateSpec(name, api.swaggerUrl, false, acb)
      } else {
        let opts = {
          name,
          provider,
          bump: args.bump,
        };
        if (api.swaggerUrl.endsWith('openapi.json')) {
          opts.openapi_3 = api.swaggerUrl;
        } else {
          opts.openapi = api.swaggerUrl;
        }
        integrate(opts, err => {
          if (err) return acb(err);
          try {
            fs.unlinkSync(path.join(OUT_DIR, name, 'details.json'));
          } catch (e) {
            console.log('Error deleting details.json for ' + name, e);
          }
          acb();
        });
      }
    }
  }), 10, err => {
    if (err) throw err;
    if (!args.name && !args.new && !args.info_only) {
      // Deprecate anyting that's been removed from list.json or had a name change
      fs.readdirSync(OUT_DIR).forEach(name => {
        if (names.indexOf(name) !== -1) return;
        let dir = OUT_DIR + '/' + name;
        let pkg = require(dir + '/package.json');
        let origin = pkg.datafire.origin;
        if (typeof origin === 'string' && origin.indexOf('https://api.apis.guru/') === 0) {
          fs.moveSync(dir, DEPRECATED_DIR + '/' + name);
        }
      })
    }
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

