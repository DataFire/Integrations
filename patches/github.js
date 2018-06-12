let removeParam = require('./util/remove-parameter');

module.exports = (spec) => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      if (method === 'get' && path.endsWith('s')) {
        op.parameters.push({
          name: 'page',
          in: 'query',
          type: 'integer',
        })
      }
      // Lots of parameters that are optional are listed as required
      (op.parameters || []).filter(p => p.in !== 'path' && p.in !== 'body').forEach(p => delete p.required);
    }
  }
  spec.definitions.postGist.properties.files.additionalProperties = true;
  removeParam(spec, 'X-GitHub-Media-Type');
  removeParam(spec, 'Accept');
  removeParam(spec, 'X-RateLimit-Limit');
  removeParam(spec, 'X-RateLimit-Remaining');
  removeParam(spec, 'X-RateLimit-Reset');
  removeParam(spec, 'X-GitHub-Request-Id');
}
