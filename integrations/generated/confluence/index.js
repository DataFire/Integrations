"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "confluence");
module.exports.security.confluence.fields.host = "The host for your Confluence Server";
