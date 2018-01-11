let path = require('path');
let fs = require('fs');
let marked = require('marked');
let iterateIntegs = require('../iterate-integrations');
let args = require('yargs').argv;

function render(template, args) {
  let tmpl = fs.readFileSync(__dirname + '/' + template + '.md', 'utf8');
  let md = eval('`' + tmpl.replace(/`/g,'\\`') + '`');
  return md;
}

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

function actionToMarkdown(action, integration) {
  let shortID = action.id.substring(action.id.indexOf('/') + 1);
  let example = getExample(action.inputSchema);
  let inputMarkdown = '';
  let refBase = action.inputSchema;
  let addedParameters = false;
  function addSchemaToParameters(schema) {
    if (!schema) return;
    if (schema && schema.$ref) schema = resolveRef(schema.$ref, refBase);
    Object.keys(schema.properties || {}).forEach(prop => {
      addedParameters = true;
      let propSchema = schema.properties[prop];
      if (propSchema.$ref) propSchema = resolveRef(propSchema.$ref, refBase);
      inputMarkdown += `* ${prop} (${propSchema.type})`;
      if ((schema.required || []).indexOf(prop) !== -1) inputMarkdown += ' **required**';
      if (propSchema.description) {
        let desc = propSchema.description;
        let newLine = desc.indexOf('\n');
        if (newLine !== -1) desc = desc.substring(0, newLine);
        inputMarkdown += ' - ' + desc;
      }
      inputMarkdown += '\n';
    });
    (schema.allOf || []).forEach(addSchemaToParameters);
  }
  addSchemaToParameters(action.inputSchema);
  if (!addedParameters) {
    inputMarkdown += '*This action has no parameters*\n';
  }
  return render('action', {example, integration, action, shortID, inputMarkdown});
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
    let keys = Object.keys(integ.security[name].fields);
    let obj = {};
    keys.forEach(key => obj[key] = "");
    accountCode = JSON.stringify(obj, null, 2).replace(/"(\w+)":/g, '$1:');
  }

  let integVarName = integ.id.replace(/^[^a-z]+/, '');
  let actionsMarkdown = '';
  integ.allActions.forEach(action => {
    action.inputSchema.definitions = action.inputSchema.definitions || integ.definitions
    actionsMarkdown += actionToMarkdown(action, integVarName);
  });

  let md = render('template', {
    integration: integ,
    varName: integVarName,
    sampleAction: sampleAction.id.replace(/^.*\//, ''),
    accountCode,
    actionsMarkdown,
  })

  let readmeFile = path.join(dir, 'README.md');
  fs.writeFileSync(readmeFile, md);
}, name => !args.name || name === args.name)

