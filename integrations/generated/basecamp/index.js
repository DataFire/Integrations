"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "basecamp", (req, context) => {
  if (!context.accounts.basecamp.account_id) throw new Error("You need to specify account_id in your Basecamp account");
  req.url = req.url.replace('999999999', context.accounts.basecamp.account_id);
});

module.exports.security.basecamp.fields.account_id = "Your Basecamp account ID";
