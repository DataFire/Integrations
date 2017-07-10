let path = require('path');
let fs = require('fs');
let iterateIntegs = require('./iterate-integrations');

function schemaToMarkdown(schema, title) {
  if (!schema) return '';
  delete schema.definitions;
  return `### ${title || ''} Schema\n` + '```json\n' + JSON.stringify(schema, null, 2) + '\n```\n'
}

iterateIntegs((dir, name, integ) => {
  console.log('Generating README for ' + name);
  let md = '# @datafire/' + integ.id + '\n';
  md += integ.description + '\n\n';
  integ.allActions.forEach(action => {
    let id = action.id.substring(action.id.indexOf('/') + 1);
    md += '## Operation: ' + id + '\n' + action.description + '\n\n';
    md += schemaToMarkdown(action.inputSchema, 'Input');
    md += schemaToMarkdown(action.outputSchema, 'Output');
  })
  let readmeFile = path.join(dir, 'README.md');
  fs.writeFileSync(readmeFile, md);
})

