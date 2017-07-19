module.exports = spec => {
  let oauth = spec.securityDefinitions.oauth_2_0;
  oauth['x-location'] = {
    name: 'token',
    in: 'query',
  }
  for (let path in spec.paths) {
    let op = spec.paths[path].get;
    op.operationId = path.substring(1).replace(/\.(\w)/, (match, w) => w.toUpperCase());
  }
}
