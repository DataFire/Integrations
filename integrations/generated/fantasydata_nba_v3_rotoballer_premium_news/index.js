"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "fantasydata_nba_v3_rotoballer_premium_news");