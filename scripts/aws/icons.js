let fs = require('fs');
let args = require('yargs').argv;
let list = require('./sdk-names');

let overrides = require('../../overrides.json');

let DIR = args.icon_directory + '/AWS_Simple_Icons_EPS-SVG_v17.1.19';
let OUT_DIR = args.out_directory;
let INTEG_DIR = __dirname + '/../../integrations/generated';

const RENAME = {
  es: "elasticsearch",
  elasticache: "elasticcache",
  acm: 'certificatemanager',
}

let icons = {};
for (let key in list) {
  icons[key] = false;
}

fs.readdirSync(DIR).forEach(category => {
  let catDir = DIR + '/' + category;
  fs.readdirSync(catDir).forEach(filename => {
    for (let key in icons) {
      let target = (RENAME[key] || key) + '.svg';
      if (filename.toLowerCase().indexOf(target) !== -1) {
        if (icons[key]) {
          console.log('duplicate', key);
        }
        icons[key] = DIR + '/' + category + '/' + filename;
      }
    }
  });
})

for (let key in icons) {
  if (!icons[key]) continue;
  let fullKey = 'amazonaws_' + key;
  let outFile = OUT_DIR + '/' + fullKey + '.svg';
  fs.createReadStream(icons[key]).pipe(fs.createWriteStream(outFile));
  let info = overrides[fullKey] = overrides[fullKey] || {};
  info.logo = {url: 'https://app.datafire.io/img/aws/' + fullKey + '.svg'};
}

fs.writeFileSync(__dirname + '/../overrides.json', JSON.stringify(overrides, null, 2));

