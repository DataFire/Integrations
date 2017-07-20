module.exports = spec => {
  let def = spec.securityDefinitions.OAuth;
  def.tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
  def.authorizationUrl = 'https://www.linkedin.com/oauth/v2/authorization';
  for (let path in spec.paths) {
    let newPath = path.replace(/\?format=json.*/, '');
    if (newPath === path) continue;
    let ops = spec.paths[newPath] = spec.paths[path];
    delete spec.paths[path];
    let params = ops.parameters = ops.parameters || [];
    params.push({
      name: 'format',
      in: 'query',
      type: 'string',
      'x-consoleDefault': 'json',
    })
  }
}
