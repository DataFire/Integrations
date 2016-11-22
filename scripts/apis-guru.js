const request = require('request');
const async = require('async');
const integrate = require('./integrate');

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
}

request.get(APIS_GURU_URL, {json: true}, (err, resp, body) => {
  if (err) throw err;
  async.parallel(Object.keys(body).map(key => {
    return acb => {
      let api = body[key];
      let version = api.preferred + '.0';
      api = api.versions[api.preferred];
      let name = NAME_CHANGES[key];
      if (!name) {
        name = key.substring(key.indexOf(':') + 1);
        let provider = key.substring(0, key.indexOf(':'));
        provider = NAME_CHANGES[provider] || provider;
        SUFFIXES.forEach(suffix => {
          let regex = new RegExp(suffix.replace(/\./g, '\\.') + '$');
          name = name.replace(regex, '');
          provider = provider.replace(regex, '');
        });
        if (provider) name = provider + '-' + name;
      }
      integrate({
        name,
        version,
        openapi: api.swaggerUrl,
      }, acb);
    }
  }), err => {
    if (err) throw err;
    console.log('done');
  })
})
