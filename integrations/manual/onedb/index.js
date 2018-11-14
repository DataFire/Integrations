"use strict";

let datafire = require('datafire');
let OneDBClient = require('onedb-client').Client;

let onedb = module.exports = new datafire.Integration({
  id: 'onedb',
  title: 'OneDB',
  description: "An open source backend-as-a-service",
  security: {
    onedb: {
      fields: {
        host: "The host to connect to, e.g. https://one-db.datafire.io",
        core_host: "The host to use for core data, like namespaces and schemas",
        username: "The email address of the account to use",
        password: "The password of the account to use",
        access_token: "An access token to use in place of email and password",
      }
    }
  }
});

function getClient(context) {
  let hosts = {
    primary: {
      location: context.accounts.onedb.host,
      username: context.accounts.onedb.username,
      password: context.accounts.onedb.password,
      token: context.accounts.onedb.access_token,
    }
  };
  if (context.accounts.onedb.core_host) {
    hosts.core = {location: context.accounts.onedb.core_host};
  }
  let client = new OneDBClient({hosts});
  return client;
}

const NAMESPACE_INPUT = {title: 'namespace', type: 'string'};
const TYPE_INPUT = {title: 'type', type: 'string'};
const ID_INPUT = {title: 'id', type: 'string'};
const ITEM_INPUT = {title: 'item', type: 'object'};
const USER_LIST_SCHEMA = {
  type: 'array',
  items: {type: 'string'},
}
const ACL_LIST_SCHEMA = {
  read: USER_LIST_SCHEMA,
  write: USER_LIST_SCHEMA,
  append: USER_LIST_SCHEMA,
  delete: USER_LIST_SCHEMA,
}
const ACL_INPUT = {
  title: 'acl',
  type: 'object',
  properties: {
    allow: ACL_LIST_SCHEMA,
    disallow: ACL_LIST_SCHEMA,
    modify: ACL_LIST_SCHEMA,
  }
}

onedb.addAction('get', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, ID_INPUT],
  handler: async (input, context) => {
    const client = getClient(context);
    return client.get(input.namespace, input.type, input.id);
  }
});

onedb.addAction('list', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, {
    title: 'query',
    type: 'object',
    additionalProperties: true,
    default: {},
    properties: {
      sort: {type: 'string'},
      created_before: {type: 'string'},
      created_since: {type: 'string'},
      updated_before: {type: 'string'},
      updated_since: {type: 'string'},
      created_by: {type: 'string'},
      owner: {type: 'string'},
    }
  }],
  handler: (input, context) => {
    const client = getClient(context);
    return client.list(input.namespace, input.type, input.query);
  }
});

onedb.addAction('create', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, Object.assign({default: ''}, ID_INPUT), ITEM_INPUT],
  handler: (input, context) => {
    const client = getClient(context);
    return client.create(input.namespace, input.type, input.id, input.item);
  }
});

onedb.addAction('update', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, ID_INPUT, ITEM_INPUT],
  handler: (input, context) => {
    const client = getClient(context);
    return client.update(input.namespace, input.type, input.id, input.item);
  }
});

onedb.addAction('append', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, ID_INPUT, ITEM_INPUT],
  handler: (input, context) => {
    const client = getClient(context);
    return client.append(input.namespace, input.type, input.id, input.item);
  }
});

onedb.addAction('delete', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, ID_INPUT],
  handler: (input, context) => {
    const client = getClient(context);
    return client.delete(input.namespace, input.type, input.id);
  }
})

onedb.addAction('updateACL', {
  inputs: [NAMESPACE_INPUT, TYPE_INPUT, ACL_INPUT],
  handler: (input, context) => {
    const client = getClient(context);
    return client.updateACL(input.namespace, input.type, input.id, input.acl);
  }
})


