"use strict";

let datafire = require('datafire');
let request = require('request');

const METHODS = ['get', 'put', 'post', 'patch', 'delete', 'options', 'head'];
const BODY_METHODS = ['put', 'post', 'patch'];

let definitions = {
  Response: {
    type: 'object',
    properties: {
      statusCode: {type: 'integer'},
      headers: {
        type: 'object',
        additionalProperties: true,
      },
      body: {type: 'string'},
    }
  },
  Request: {
    type: 'object',
    required: ['url'],
    properties: {
      url: {type: 'string'},
      query: {type: 'object', additionalProperties: true},
      headers: {type: 'object', additionalProperties: true},
    }
  },
  BodyRequest: {
    allOf: [{$ref: '#/definitions/Request'}],
    properties: {
      body: {type: 'string'},
    }
  },
  MethodRequest: {
    allOf: [{$ref: '#/definitions/BodyRequest'}],
    required: ['method'],
    properties: {
      method: {type: 'string'},
    }
  }
}

let http = module.exports = new datafire.Integration({
  title: "HTTP",
  description: "Make HTTP calls",
});

http.addAction('request', new datafire.Action({
  title: 'request',
  description: 'Make an HTTP request',

  inputSchema: {
    definitions,
    $ref: '#/definitions/MethodRequest',
  },
  outputSchema: {
    definitions,
    $ref: '#/definitions/Response'
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
      definitions,
      $ref: '#/definitions/' + (BODY_METHODS.indexOf(method) === -1 ? 'Request' : 'BodyRequest'),
    },
    outputSchema: {
      definitions,
      $ref: '#/definitions/Response'
    },
    handler: (input, ctx) => {
      input.method = method;
      return http.actions.request(input);
    }
  }))
});
