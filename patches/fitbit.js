module.exports = spec => {
  let def = spec.securityDefinitions.oauth2;
  def.tokenUrl = 'https://api.fitbit.com/oauth2/token';
  def.authorizationUrl = 'https://www.fitbit.com/oauth2/authorize';
}
