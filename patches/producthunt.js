module.exports = spec => {
  let def = spec.securityDefinitions.oauth;
  def.tokenUrl = 'https://api.producthunt.com/v1/oauth/token';
  def.authorizationUrl = 'https://api.producthunt.com/v1/oauth/authorize';
  require('./util/add-responses')(spec);
}
