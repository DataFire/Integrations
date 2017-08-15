let removeParam = require('./util/remove-parameter');

module.exports = spec => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      op.operationId = path.match(/method=(\w+)/)[1];
    }
  }
  removeParam(spec, 'apikey');
  removeParam(spec, 'method');
}
