module.exports = function(spec) {
  spec.securityDefinitions = {
    "ApplicationKey": {
      "name": "X-Application",
      "in": "header",
      "type": "apiKey",
    },
    "Session": {
      "name": "X-Authentication",
      "in": "header",
      "type": "apiKey",
    }
  }
}
