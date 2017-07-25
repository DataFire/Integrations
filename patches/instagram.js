module.exports = spec => {
  let def = spec.securityDefinitions.instagram_auth;
  def.in = 'query';
  def.name = 'access_token';
}
