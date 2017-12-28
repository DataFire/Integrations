let removeParameter = require('./util/remove-parameter');

module.exports = (spec) => {
  spec.securityDefinitions.api_key.name = 'key';
  spec.securityDefinitions.api_key.in = 'query';
  spec.securityDefinitions.api_token = {
    type: 'apiKey',
    in: 'query',
    name: 'token',
  }
  removeParameter(spec, 'key');
  removeParameter(spec, 'token');
  delete spec.securityDefinitions.trello_auth;
}
