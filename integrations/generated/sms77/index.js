'use strict';
let datafire = require('datafire');
let openapi = require('./openapi.json');

module.exports = datafire.Integration.fromOpenAPI(openapi, 'sms77',
    (data, ctx) => {
        data.headers['SentWith'] = 'DataFire';
    });