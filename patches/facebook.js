module.exports = spec => {
  let def = spec.securityDefinitions.Oauth2;
  def.tokenUrl = 'https://graph.facebook.com/oauth/access_token';
  def.authorizationUrl = 'https://www.facebook.com/dialog/oauth';
}
