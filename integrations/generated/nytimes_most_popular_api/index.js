let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "nytimes_most_popular_api");