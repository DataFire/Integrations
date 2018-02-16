"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
let twitter = module.exports = datafire.Integration.fromOpenAPI(openapi, "twitter", function(reqOpts, context) {
  reqOpts.oauth = {
    consumer_key: context.accounts.twitter.consumer_key,
    consumer_secret: context.accounts.twitter.consumer_secret,
    token: context.accounts.twitter.token,
    token_secret: context.accounts.twitter.token_secret,
  }
});

twitter.security = {
  twitter: {
    fields: {
      consumer_key: '',
      consumer_secret: '',
      token: '',
      token_secret: '',
    }
  }
}
