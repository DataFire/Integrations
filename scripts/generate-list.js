const fs = require('fs');
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
fs.readdirSync(__dirname + '/../integrations').forEach(name => {
  let integration = datafire.Integration.new(name);
  list[name] = {
    title: integration.spec.info.title,
    description: integration.spec.info.description,
  }
  list[name].description = truncateDescription(list[name].description);
})
fs.writeFileSync(__dirname + '/../list.json', JSON.stringify(list, null, 2));

