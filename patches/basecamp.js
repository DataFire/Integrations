module.exports = function(spec) {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      let resp = op.responses['200'];
      if (!resp) continue;
      if (resp.schema && resp.schema.type === 'array') {
        op.parameters.push({
          name: 'page',
          in: 'query',
          type: 'integer',
        })
      }
    }
  }
}
