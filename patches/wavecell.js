module.exports = function(spec) {
  spec.securityDefinitions = {
    "BearerTokenHeader": {
      name: "Authorization",
      in: "header",
      type: "apiKey",
      description: "Your Wavecell auth token. Be sure to include the prefix 'Bearer '"
    }
  }
}
