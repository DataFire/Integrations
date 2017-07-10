const request = require('request');
const async = require('async');
const fs = require('fs');
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
  "posty-api.herokuapp.com": "posty"
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

request.get(APIS_GURU_URL, {json: true}, (err, resp, body) => {
  if (err) throw err;
  let keys = Object.keys(body);
  if (args.new) {
    keys = keys.filter(key => {
      let {provider, name} = getName(key);
      let e = !fs.existsSync(OUT_DIR + '/' + name);
      return e;
    })
  }
  async.parallel(keys.map(key => {
    return acb => {
      let api = body[key];
      let version = api.preferred + '.0';
      api = api.versions[api.preferred];
      let {name, provider} = getName(key);
      integrate({
        name,
        version,
        openapi: api.swaggerUrl,
        patch: maybeGetPatch(name) || maybeGetPatch(provider),
      }, acb);
    }
  }), err => {
    if (err) throw err;
    console.log('done');
  })
})

const maybeGetPatch = (name) => {
  try {
    return require('../patches/' + name);
  } catch (e) {
    return;
  }
}
