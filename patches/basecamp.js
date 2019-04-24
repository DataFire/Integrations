module.exports = function(spec) {
  for (let path in spec.paths) {
    let op = spec.paths[path].get;
    if (!op || path === '/my/profile.json') continue;
    if (path.endsWith('Id}.json')) continue;
    let resp = op.responses['200'];
    if (!resp) continue;
    if (!resp.schema || resp.schema.type === 'array') {
      let pageParam = op.parameters.find(p => p.name === 'page');
      if (!pageParam) {
        op.parameters.push({
          name: 'page',
          in: 'query',
          type: 'integer',
        })
      }
    }
  }
}
