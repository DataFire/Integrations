module.exports = spec => {
  let def = spec.securityDefinitions.OAuth;

  def.authorizationUrl = 'https://ssl.reddit.com/api/v1/authorize';
  def.tokenUrl = 'https://www.reddit.com/api/v1/access_token';
  require('./util/add-responses')(spec);
}
