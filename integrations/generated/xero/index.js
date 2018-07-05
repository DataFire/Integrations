"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
let xero = module.exports = datafire.Integration.fromOpenAPI(openapi, "xero", function(reqOpts, context) {
  reqOpts.oauth = {
    consumer_key: context.accounts.xero.consumer_key,
    consumer_secret: context.accounts.xero.consumer_secret,
    token: context.accounts.xero.token,
    token_secret: context.accounts.xero.token_secret,
  }
});

xero.security = {
  xero: {
    fields: {
      consumer_key: '',
      consumer_secret: '',
      token: '',
      token_secret: '',
    }
  }
}
