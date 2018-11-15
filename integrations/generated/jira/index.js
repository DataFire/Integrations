"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "jira", (req, context) => {
  let sec = context.accounts.jira;
  if (sec.password && sec.username) {
    if (!sec.host) throw new Error("host is required when using Jira Basic Auth");
    return;
  }
  if (!sec.cloud_id) throw new Error("cloud_id required when using Jira OAuth. See https://developer.atlassian.com/cloud/jira/platform/oauth-2-authorization-code-grants-3lo-for-apps/");
  let path = req.url.match(/^https?:\/\/[^\/]+(\/.*)?/)[1]
  req.url = 'https://api.atlassian.com/ex/jira/' + sec.cloud_id + path;
});
