'use strict';
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "redmine");
module.exports.security.redmine.fields['host'] = "The host for your Redmine server, e.g. https://redmine.acme.com";
