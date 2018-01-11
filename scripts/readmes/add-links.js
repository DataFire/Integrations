const fs = require('fs');
const TITLE_LINE = '## Integrations';
const README_FILE = __dirname + '/../../README.md';

let readme = fs.readFileSync(README_FILE, 'utf8');
let list = require('../../json/list');

let integsLocation = readme.indexOf(TITLE_LINE);
if (integsLocation !== -1) {
  readme = readme.substring(0, integsLocation);
}

readme += TITLE_LINE + '\n';

Object.keys(list).sort().forEach(key => {
  let details = list[key];
  readme += `\n[${details.title}](integrations/${details.directory}/${key})`;
});

fs.writeFileSync(README_FILE, readme);
