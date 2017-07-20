module.exports = spec => {
  let def = spec.securityDefinitions.oauth2;
  def.tokenUrl = 'https://id.heroku.com/oauth/token';
  def.authorizationUrl = 'https://id.heroku.com/oauth/authorize';
}
