const fs = require('fs');
const path = require('path');
const datafire = require('datafire');

const MAX_DESCRIPTION_LENGTH = 120;

const truncateDescription = (desc) => {
  if (!desc) return;
  desc = desc || '';
  desc = desc.replace(/<(?:.|\n)*?>/gm, '');
  let newLine = desc.indexOf('\n');
  if (newLine > -1) {
    desc = desc.substring(0, newLine);
  }
  if (desc.length > MAX_DESCRIPTION_LENGTH) {
    desc = desc.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
  }
  return desc;
}

let list = {};
function addDirToList(dir) {
  fs.readdirSync(dir).forEach(name => {
    let integ = require(path.join(dir, name));
    if (list[name]) throw new Error("Duplicate name " + name);
    list[name] = {
      title: integ.title,
      description: integ.description,
    };
    list[name].description = truncateDescription(list[name].description);
  })
}

const BASE_DIR = __dirname + '/../integrations/';
addDirToList(BASE_DIR + 'generated');
addDirToList(BASE_DIR + 'manual');
fs.writeFileSync(__dirname + '/../list.json', JSON.stringify(list, null, 2));

