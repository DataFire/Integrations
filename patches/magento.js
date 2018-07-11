module.exports = function(spec) {
  spec.securityDefinitions = {
    "Bearer": {
      name: "Authorization",
      in: "header",
      type: "apiKey",
      description: "Your Magento auth token. Be sure to include the prefix 'Bearer '"
    }
  }
}
