module.exports = function(spec) {
  spec.securityDefinitions = {
    apiKey: {
      "description": "Your API Key",
      "in": "formData",
      "name": "api_key",
      type: 'apiKey',
    }
  }
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      op.parameters = (op.parameters || []).filter(p => p.name !== 'api_key');
    }
  }
}
