const DIR = __dirname + '/../integrations/generated';
const fs = require('fs');
const args = require('yargs').argv;

fs.readdirSync(DIR).forEach(name => {
  let pkgFile = DIR + '/' + name + '/package.json';
  let pkg = require(pkgFile);
  let version = pkg.version;
  let parts = version.split('.');
  let toBump = args.bump || 'patch';
  if (toBump === 'major') {
    parts[0] = (+parts[0]) + 1;
    parts[1] = parts[2] = 0;
  } else if (toBump === 'minor') {
    parts[1] = (+parts[1]) + 1;
    parts[2] = 0;
  } else {
    parts[2] = (+parts[2]) + 1;
  }
  pkg.version = parts.join('.');
  fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2))
})
