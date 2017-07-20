module.exports = spec => {
  let def = spec.securityDefinitions.OAuth;
  def.tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
  def.authorizationUrl = 'https://www.linkedin.com/oauth/v2/authorization';
}
