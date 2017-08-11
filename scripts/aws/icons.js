let fs = require('fs');
let args = require('yargs').argv;
let list = require('./sdk-names');

let DIR = args.icon_directory + '/AWS_Simple_Icons_EPS-SVG_v17.1.19';
let OUT_DIR = args.out_directory;
let INTEG_DIR = __dirname + '/../../integrations/generated';

const RENAME = {
  es: "elasticsearch",
  elasticache: "elasticcache",
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
  let outFile = OUT_DIR + '/amazonaws_' + key + '.svg';
  fs.createReadStream(icons[key]).pipe(fs.createWriteStream(outFile));

  let infoFile = INTEG_DIR + '/amazonaws_' + key + '/info.json';
  let info = {};
  if (fs.existsSync(infoFile)) {
    info = require(infoFile);
  }
  info.logo = {url: 'https://app.datafire.io/img/aws/amazonaws_' + key + '.svg'};
  fs.writeFileSync(infoFile, JSON.stringify(info, null, 2));
}

