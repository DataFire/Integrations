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

  let op = spec.paths['/cards/{idCard}/attachments'].post;
  op.parameters.push({
    name: 'file',
    type: 'file',
    in: 'formData',
    description: "File contents",
  })
  let bodyParam = op.parameters.filter(p => p.in === 'body').pop();
  bodyParam.required = false;
}
