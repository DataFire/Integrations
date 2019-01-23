module.exports = function(spec) {
  for (let path in spec.paths) {
    let op = spec.paths[path].get;
    if (!op || op.operationId === 'my.profile.json.get') continue;
    let resp = op.responses['200'];
    if (!resp) continue;
    if (!resp.schema || resp.schema.type === 'array') {
      let pageParam = op.parameters.find(p => p.name === 'page');
      if (!pageParam) {
        console.log(op.operationId);
        op.parameters.push({
          name: 'page',
          in: 'query',
          type: 'integer',
        })
      }
    }
  }
}
