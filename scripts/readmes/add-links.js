const fs = require('fs');
const TITLE_LINE = '## Integrations';
const README_FILE = __dirname + '/../../README.md';
const removeMD = require('remove-markdown-and-html');

const SKIP = ['apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi'];

let list = require('../../json/list');
let readme = fs.readFileSync(README_FILE, 'utf8');

let numIntegrations = Object.keys(list).length;
let estimate = Math.floor(numIntegrations / 100) * 100;
readme = readme.replace(/over \d+ different/, `over ${estimate} different`);

let integsLocation = readme.indexOf(TITLE_LINE);
if (integsLocation !== -1) {
  readme = readme.substring(0, integsLocation);
}

readme += TITLE_LINE + '\n';
readme += `Currently ${Object.keys(list).length} integrations\n\n`;
readme += '\n|name|title|README|link|description|';
readme += '\n|---|---|---|---|---|';

Object.keys(list).sort().forEach(key => {
  if (SKIP.indexOf(key) !== -1) return;
  let details = list[key];
  let parts = [
    key,
    details.title,
    `[README](integrations/${details.directory}/${key})`,
    `[DataFire.io](https://app.datafire.io/integrations/${key})`,
    removeMD(details.description || ''),
  ]
  let line = '|' + parts.join('|') + '|';
  readme += '\n' + line;
});

fs.writeFileSync(README_FILE, readme);
