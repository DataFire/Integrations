const PREFIX = '/api/rest/v1';

module.exports = function(spec) {
  require('./util/common-base')(spec, PREFIX);
}
