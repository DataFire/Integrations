let path = require('path');
let fs = require('fs');
let iterateIntegs = require('./iterate-integrations');
let args = require('yargs').argv;

function resolveRef(ref, base) {
  var keys = ref.split('/');
  keys.shift();
  var cur = base;
  keys.forEach(k => cur = cur[k]);
  return cur;
}

function getExample(schema, base) {
  if (!schema) return null;
  base = base || schema;
  if (schema.$ref) {
    schema = resolveRef(schema.$ref, base || schema);
  }
  let type = Array.isArray(schema.type) ? schema.type[0] : schema.type;
  if (type === 'string') return "";
  if (type === 'number' || type === 'integer') return 0;
  if (type === 'boolean') return true;
  if (type === 'array') return [];
  if (type === 'object') {
    let obj = {};
    (schema.required || []).forEach(req => {
      if (!schema.properties || !schema.properties[req]) return;  // FIXME: 'req' could be in an allOf schema
      obj[req] = getExample(schema.properties[req], base);
    });
    (schema.allOf || []).forEach(sub => {
      Object.assign(obj, getExample(sub, base));
    });
    return obj;
  }
  return null;
}

function actionToMarkdown(action, integVarName) {
  let md = '';
  let id = action.id.substring(action.id.indexOf('/') + 1);
  let example = getExample(action.inputSchema);
  md += '### ' + id + '\n' + action.description + '\n\n';
  let fnName = integVarName + '.' + action.id.substring(action.id.indexOf('/') + 1);
  md += `
\`\`\`js
${fnName}(${JSON.stringify(example, null, 2)}, context)
\`\`\`

`

  md += '#### Parameters\n';
  let refBase = action.inputSchema;
  let addedParameters = false;
  function addSchemaToParameters(schema) {
    if (!schema) return;
    if (schema && schema.$ref) schema = resolveRef(schema.$ref, refBase);
    Object.keys(schema.properties || {}).forEach(prop => {
      addedParameters = true;
      let propSchema = schema.properties[prop];
      if (propSchema.$ref) propSchema = resolveRef(propSchema.$ref, refBase);
      md += `* ${prop} (${propSchema.type})`;
      if ((schema.required || []).indexOf(prop) !== -1) md += ' **required**';
      if (propSchema.description) {
        let desc = propSchema.description;
        let newLine = desc.indexOf('\n');
        if (newLine !== -1) desc = desc.substring(0, newLine);
        md += ' - ' + desc;
      }
      md += '\n';
    });
    (schema.allOf || []).forEach(addSchemaToParameters);
  }
  addSchemaToParameters(action.inputSchema);
  if (!addedParameters) {
    md += '*This action has no parameters*\n';
  }
  return md + '\n';
}

iterateIntegs((dir, name, integ) => {
  if (dir.match(/\/manual\//)) return
  console.log('Generating README for ' + name);

  let sampleAction = integ.allActions.filter(action => {
    if (action.id.indexOf('oauth') !== -1) return false;
    return true;
  })[0];
  integ.allActions.forEach(action => {
    if (Array.isArray(action.inputSchema.type) && action.inputSchema.type.indexOf('null') !== -1) {
      sampleAction = action;
    }
  })

  let accountCode = '';
  if (integ.security && integ.security[name] && integ.security[name].fields) {
    accountCode = `{
  ${Object.keys(integ.security[name].fields).join(': "",\n  ') + ': "",'}
}`
  }

  let integVarName = integ.id.replace(/^[^a-z]+/, '');

  let md = `# @datafire/${integ.id}

Client library for ${(integ.title || name)}

## Installation and Usage
\`\`\`bash
npm install --save datafire @datafire/${integ.id}
\`\`\`

\`\`\`js
let datafire = require('datafire');
let ${integVarName} = require('@datafire/${integ.id}').create(${accountCode});

${sampleAction.id.replace('/', '.').replace(integ.id, integVarName)}({}).then(data => {
  console.log(data);
})
\`\`\`

## Description
${integ.description}

## Actions
`
  integ.allActions.forEach(action => {
    action.inputSchema.definitions = action.inputSchema.definitions || integ.definitions
    md += actionToMarkdown(action, integVarName);
  })
  let readmeFile = path.join(dir, 'README.md');
  fs.writeFileSync(readmeFile, md);
}, name => !args.name || name === args.name)

