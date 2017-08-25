"use strict";

let datafire = require('datafire');
let request = require('request');

let http = module.exports = new datafire.Integration({
  title: "HTTP",
  description: "Make HTTP calls",
});

const METHODS = ['get', 'put', 'post', 'patch', 'delete', 'options', 'head'];

const schemaProps = {
  url: {type: 'string'},
  query: {type: 'object', additionalProperties: true},
  body: {type: 'string'},
  headers: {type: 'object', additionalProperties: true},
}
const reqSchemaProps = Object.assign({}, schemaProps);
reqSchemaProps.method = {
  type: 'string',
  default: 'get',
  enum: METHODS,
}

http.addAction('request', new datafire.Action({
  title: 'request',
  description: 'Make an HTTP request',

  inputSchema: {
    type: 'object',
    properties: reqSchemaProps,
    required: ['url'],
  },

  handler: (input, ctx) => {
    let req = {
      method: input.method,
      url: input.url,
      qs: input.query,
      body: input.body,
      headers: input.headers,
    };
    return new Promise((resolve, reject) => {
      request(req, (err, resp, body) => {
        if (err) return reject(err);
        resolve({
          statusCode: resp.statusCode,
          headers: resp.headers,
          body: resp.body,
        })
      });
    });
  }
}))

METHODS.forEach(method => {
  http.addAction(method, new datafire.Action({
    inputSchema: {
      type: 'object',
      properties: schemaProps,
    },
    handler: (input, ctx) => {
      input.method = method;
      return http.actions.request(input);
    }
  }))
});
