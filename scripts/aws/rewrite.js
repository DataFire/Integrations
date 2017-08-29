const fs = require('fs');

const DIR = __dirname + '/../../integrations/generated';
const CODE = fs.readFileSync(__dirname + '/code.js', 'utf8');

const sdkNames = require('./sdk-names');
const sdk = require('aws-sdk');

fs.readdirSync(DIR)
    .filter(name => name.startsWith('amazonaws_'))
    .forEach(name => {
      let pkgFile = DIR + '/' + name + '/package.json';
      let pkg = require(pkgFile);
      pkg.version = '3.0.2';
      pkg.dependencies['aws-sdk'] = '^2.105.0';
      fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2));

      let indexFile =  DIR + '/' + name + '/index.js';
      let code = CODE.replace('{{integrationID}}', name);
      let shortName = name.substring('amazonaws_'.length);
      let sdkName = sdkNames[shortName];
      if (!sdkName || !sdk[sdkName]) throw new Error("SDK name not found for " + shortName);
      code = code.replace('{{sdkID}}', sdkNames[shortName]);
      fs.writeFileSync(indexFile, code);
    })
