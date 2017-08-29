let removeParam = require('./util/remove-parameter');

module.exports = (spec) => {
  for (let path in spec.paths) {
    let op = spec.paths[path].get;
    if (op && path.endsWith('s')) {
      op.parameters.push({
        name: 'page',
        in: 'query',
        type: 'integer',
      })
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
