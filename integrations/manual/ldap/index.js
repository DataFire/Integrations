"use strict";

const datafire = require('datafire');
const ldapJS = require('ldapjs');

const ldap = module.exports = new datafire.Integration({
  id: 'ldap',
  title: 'LDAP - Lightweight Directory Access Protocol',
  description: "The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol (IP) network.",
  security: {
    ldap: {
      fields: {
        "host": "A URL begining with ldap://",
        "dn": "e.g. cn=root",
        "password": "",
      }
    }
  }
})

function getClient(context) {
  var client = ldapJS.createClient({
    url: context.accounts.ldap.host,
  });
  return new Promise((resolve, reject) => {
    client.bind(context.accounts.ldap.dn, context.accounts.ldap.password, function(err) {
      if (err) return reject(err);
      else resolve(client);
    })
  })
}

function makeCall(client, fn, args, getOutput) {
  getOutput = getOutput || (() => "Success");
  return new Promise((resolve, reject) => {
    args.push(function(err, resp) {
      if (err) reject(err);
      else resolve(getOutput(resp));
    });
    client[fn].apply(client, args);
  })
}

function getHandler(fn, params, getOutput) {
  return function(input, context) {
    const args = params.map(name => {
      if (fn === 'modify' && name === 'change') {
        return new ldapJS.Change(input[name]);
      }
      return input[name]
    });
    return getClient(context).then(client => {
      return makeCall(client, fn, args, getOutput)
    });
  }
}

const DN_INPUT = {
  title: 'dn',
  type: 'string',
  description: "Distinguished Name, e.g. cn=foo, o=example",
};

ldap.addAction('add', new datafire.Action({
  inputs: [
  DN_INPUT, {
    title: 'entry',
    type: 'object',
    properties: {
      cn: {type: 'string', description: "Common Name"},
      sn: {type: 'string', description: "Surname"},
      email: {
        type: 'array',
        items: {type: 'string'},
      },
      objectclass: {type: 'string'},
    }
  }],
  outputSchema: {type: 'string'},
  handler: getHandler('add', ['dn', 'entry']),
}))

ldap.addAction('compare', new datafire.Action({
  inputs: [
  DN_INPUT, {
    title: 'attribute',
    type: 'string',
  }, {
    title: 'value',
    type: 'string',
  }],
  outputSchema: {},
  handler: getHandler('compare', ['dn', 'attribute', 'value'], _ => _),
}))

ldap.addAction('del', new datafire.Action({
  inputs: [DN_INPUT],
  outputSchema: {type: 'string'},
  handler: getHandler('del', ['dn']),
}));

ldap.addAction('modify', new datafire.Action({
  inputs: [DN_INPUT, {
    title: 'change',
    type: 'object',
    properties: {
      operation: {type: 'string', enum: ['add', 'delete', 'replace']},
      modification: {
        type: 'object',
        additionalProperties: true,
      }
    }
  }],
  outputSchema: {type: 'string'},
  handler: getHandler('modify', ['dn', 'change']),
}));

ldap.addAction('search', new datafire.Action({
  inputs: [{
    title: 'base',
    type: 'string',
    description: "A DN string, e.g. o=example",
  }, {
    title: 'searchOptions',
    type: 'object',
    default: {},
    properties: {
      scope: {type: 'string', enum: ['base', 'one', 'sub'], default: 'base'},
      filter: {type: 'string', description: "e.g. (&(l=Seattle)(email=*@foo.com))"},
      attributes: {
        type: 'array',
        description: "Attributes to select and return. Empty set means all attributes",
        items: {type: 'string'},
        default: [],
      },
      attrsOnly: {type: 'boolean'},
      sizeLimit: {type: 'integer', description: "Maximum number of entries to return (0=unlimited)"},
      timeLimit: {type: 'integer', description: "Time limit in seconds"},
    }
  }],
  outputSchema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        dn: {type: 'string'},
        sn: {type: 'string'},
        cn: {type: 'string'},
        controls: {type: 'array'},
        email: {type: 'string'},
        objectclass: {type: 'string'},
      }
    }
  },
  handler: (input, context) => {
    let innerHandler = getHandler('search', ['base', 'searchOptions'], _ => _);
    return new Promise((resolve, reject) => {
      innerHandler(input, context).then(res => {
        let results = [];
        res.on('searchEntry', entry => results.push(entry.object));
        res.on('end', () => resolve(results));
        res.on('error', err => reject(err));
      })
    });
  }
}))

ldap.addAction("modifyDN", new datafire.Action({
  inputs: [DN_INPUT, {
    title: 'newDN',
    type: 'string',
    description: "The new DN for this object",
  }],
  outputSchema: {type: 'string'},
  handler: getHandler('modifyDN', ['dn', 'newDN']),
}))
