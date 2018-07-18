"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "traccar");

module.exports.security.traccar.fields.host = "The host for your Traccar instance";
