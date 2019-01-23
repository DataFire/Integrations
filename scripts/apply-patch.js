const fs = require('fs');

function applyPatch(name) {
  let openapiFile = __dirname + '/../integrations/generated/' + name + '/openapi.json';
  let openapi = require(openapiFile);
  let patch = require('../patches/' + name);
  patch(openapi);
  fs.writeFileSync(openapiFile, JSON.stringify(openapi, null, 2));
}

if (module === require.main) {
  let name = require('yargs').argv.name;
  applyPatch(name);
}
