const DIR = __dirname + '/../integrations/generated';
const fs = require('fs');

fs.readdirSync(DIR).forEach(name => {
  let pkgFile = DIR + '/' + name + '/package.json';
  let pkg = require(pkgFile);
  let version = pkg.version;
  let parts = version.split('.');
  let patch = +parts[2];
  parts[2] = patch + 1;
  pkg.version = parts.join('.');
  fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2))
})
