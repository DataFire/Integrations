module.exports = spec => {
  let def = spec.securityDefinitions.oauth2;
  def.tokenUrl = 'https://api.fitbit.com/oauth2/token';
  def.authorizationUrl = 'https://www.fitbit.com/oauth2/authorize';
  for (let path in spec.paths) {
    if (path.match(/\?.*/)) delete spec.paths[path];
    /*let newPath = path.replace(/\?.*$/, '');
    if (newPath === path) continue;
    spec.paths[newPath] = spec.paths[path];
    delete spec.paths[path];*/
  }
  require('./util/remove-parameter')(spec, 'format');
}
