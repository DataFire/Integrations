let req = require('request');
let async = require('async');
let fs = require('fs');
let _ = require('lodash');

const REFS = {};
const OUT_FILE = __dirname + '/../integrations/generated/mailchimp/openapi.json';
const BASE_URL = "http://api.mailchimp.com/schema/3.0/Swagger.json";
const DELAY = 50;

req.get(BASE_URL, {json: true}, (err, resp, baseSpec) => {
  err = err || (resp.statusCode >= 300 ? resp.statusCode : null);
  if (err) throw err;
  derefObj(baseSpec, baseSpec, (err, derefed) => {
    if (err) throw err;
    fixup(derefed);
    fs.writeFileSync(OUT_FILE, JSON.stringify(derefed, null, 2));
  });
});

function fixup(openapi) {
  openapi.host = '{dc}.api.mailchimp.com';
  openapi.parameters.datacenter = {
    name: 'dc',
    in: 'path',
    type: 'string',
    required: true,
    description: '`dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`',
  }
  openapi.securityDefinitions = {
    "apiKey": {
      "in": "query",
      "name": "apikey",
      "type": "apiKey"
    }
  };
  for (let path in openapi.paths) {
    let pathSet = openapi.paths[path];
    pathSet.parameters = pathSet.parameters || [];
    pathSet.parameters.push({$ref: '#/parameters/datacenter'});
  }
  for (let def in openapi.definitions) {
    openapi.definitions[def] = fixupSchema(openapi.definitions[def]);
  }
}

function fixupSchema(schema) {
  if (schema.$ref) return schema;
  if (typeof schema.required === 'boolean') delete schema.required;
  if (schema.enum) schema.enum = _.uniq(schema.enum);
  if (schema.properties) {
    for (let key in schema.properties) {
      schema.properties[key] = fixupSchema(schema.properties[key]);
    }
  }
  if (schema.items) {
    schema.items = fixupSchema(schema.items);
  }
  if (schema.allOf) {
    schema.allOf = schema.allOf.map(s => fixupSchema(s));
  }
  return schema;
}

function derefObj(obj, base, callback) {
  let oldCB = callback;
  callback = function(err, data) {
    process.nextTick(() => oldCB(err, data));
  }

  if (!obj || typeof obj !== 'object') return callback(null, obj);
  if (Array.isArray(obj)) {
    async.series(obj.map(sub => {
      return acb => {
        derefObj(sub, base, acb);
      }
    }), callback)
  } else if (!obj.$ref) {
    async.series(Object.keys(obj).map(key => {
      return acb => {
        derefObj(obj[key], base, (err, sub) => {
          if (err) return acb(err);
          obj[key] = sub;
          acb();
        })
      }
    }), (err) => {
      callback(null, obj);
    });
  } else if (obj.$ref.indexOf('http') !== 0) {
    return callback(null, obj);
  } else if (REFS[obj.$ref]) {
    return callback(null, REFS[obj.$ref]);
  } else {
    console.log('resolve', obj.$ref);
    req.get(obj.$ref, {json: true}, (err, resp, body) => {
      if (err || resp.statusCode >= 300) return callback(err || resp.statusCode);
      setTimeout(() => {
        derefObj(body, base, (err, derefed) => {
          if (err) return callback(err);
          let refMatch = obj.$ref.match(/3\.0\/(Definitions|Parameters)\/([^\/]+).json/);
          if (refMatch) {
            let type = refMatch[1].toLowerCase();
            let name = refMatch[2];
            base[type] = base[type] || {};
            base[type][name] = derefed;
            derefed = {$ref: '#/' + type + '/' + name};
          }
          REFS[obj.$ref] = derefed;
          return callback(null, derefed);
        });
      }, DELAY);
    })
  }
}
