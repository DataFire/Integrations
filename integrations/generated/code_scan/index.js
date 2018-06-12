"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "code_scan");