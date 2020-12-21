let path = require('path');
let fs = require('fs');
let marked = require('marked');
let iterateIntegs = require('../iterate-integrations');
let args = require('yargs').argv;

const NO_GENERATE = ['lucybot_docs', 'swaggerui', 'fileserver'];
const MAX_DEPTH = 5;

const tick = '`';

function render(template, args) {
  let tmpl = fs.readFileSync(__dirname + '/' + template + '.md', 'utf8');
  let md = eval(tick + tmpl.replace(/`/g,'\\`') + tick);
  return md;
}

function resolveRef(ref, base) {
  ref = decodeURIComponent(ref);
  var keys = ref.split('/');
  keys.shift();
  var cur = base;
  keys.forEach(k => cur = cur[k]);
  if (cur === undefined) throw new Error("Key " + keys.pop() + " not found");
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
  let inputMarkdown = schemaToMarkdown(action.inputSchema, action.inputSchema, 'input');
  if (!inputMarkdown) {
    inputMarkdown = '*This action has no parameters*';
  }
  let outputMarkdown = schemaToMarkdown(action.outputSchema, action.outputSchema, 'output');
  if (!outputMarkdown) {
    outputMarkdown = '*Output schema unknown*';
  }
  return render('action', {example, integration, action, shortID, inputMarkdown, outputMarkdown});
}

const NEEDED_FIELDS = ['type', '$ref', 'enum', 'default', 'allOf', 'properties', 'items'];
function schemaToMarkdown(schema, base, property='', required=false, depth=0) {
  if (!schema) return '';
  if (depth > MAX_DEPTH) return '';
  let missingNeededFields = NEEDED_FIELDS.filter(field => !schema[field]).length === NEEDED_FIELDS.length;
  if (missingNeededFields) return '';
  let md = '';
  let spaces = 0;
  while (spaces++ < depth) md += '  ';
  property = property || schema.title || '';
  md += '* ' + property;
  if (required) md += ' **required**'

  if (schema.$ref) {
    let name = schema.$ref.replace('#/definitions/', '');
    return md + ` [${name}](#${name.toLowerCase()})`;
  }
  let types = schema.type;
  if (Array.isArray(types)) {
    types = types.filter(t => t !== 'null').join('`, `');
  }
  if (!types) {
    if (schema.properties) {
      types = 'object';
    } else if (schema.default) {
      types = typeof schema.default;
    } else if (schema.enum) {
      types = typeof schema.enum[0];
    }
  }
  if (types) {
    md += ' `' + types + '`';
  }
  if (schema.enum) {
    md += ' (values: ' + schema.enum.join(', ') + ')';
  }
  if (schema.description) {
    let desc = schema.description;
    let newLine = desc.indexOf('\n');
    if (newLine !== -1) desc = desc.substring(0, newLine);
    md += ': ' + desc;
  }

  Object.keys(schema.properties || {}).forEach(prop => {
    addedParameters = true;
    let propSchema = schema.properties[prop];
    let propRequired = (schema.required || []).indexOf(prop) !== -1;
    let propMD = schemaToMarkdown(propSchema, base, prop, propRequired, depth + 1);
    if (propMD.trim()) md += '\n' + propMD;
    //else console.log("skipping property", prop, propSchema);
  });

  if (schema.items) {
    let itemsMD = schemaToMarkdown(schema.items, base, 'items', false, depth + 1);
    if (itemsMD.trim()) md += '\n' + schemaToMarkdown(schema.items, base, 'items', false, depth + 1);
  }
  (schema.allOf || []).forEach(subschema => {
    if (subschema.$ref) subschema = resolveRef(subschema.$ref, base);
    let subMD = schemaToMarkdown(subschema, base, '', false, depth);
    let newLine = subMD.indexOf('\n');
    if (newLine !== -1) {
      md += '\n' + subMD.substring(newLine + 1);
    }
  });
  return md;
}

iterateIntegs((dir, name, integ) => {
  if (NO_GENERATE.indexOf(name) !== -1) return;
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
  let definitions = integ.definitions;
  integ.allActions.forEach(action => {
    action.inputSchema.definitions = action.inputSchema.definitions || integ.definitions;
    definitions = definitions || action.inputSchema.definitions || action.outputSchema.definitions;
    actionsMarkdown += actionToMarkdown(action, integVarName);
  });

  let definitionsMarkdown = '';
  for (let key in definitions) {
    let def = definitions[key];
    def.title = def.title || key;
    definitionsMarkdown += '### ' + key + '\n' + schemaToMarkdown(def, {definitions}) + '\n\n';
  }
  if (!definitionsMarkdown) definitionsMarkdown = '*This integration has no definitions*';
  let sampleActionCall = '';
  if (sampleAction) {
    let sampleInput = getExample(sampleAction.inputSchema);
    let sampleActionCall = `${integVarName}.${sampleAction.id.replace(/^.*\//, '')}(${JSON.stringify(sampleInput, null, 2)})`;
  }

  let md = render('template', {
    integration: integ,
    varName: integVarName,
    sampleActionCall,
    accountCode,
    actionsMarkdown,
    definitionsMarkdown,
  })

  let readmeFile = path.join(dir, 'README.md');
  fs.writeFileSync(readmeFile, md);
}, name => !args.name || name === args.name)

