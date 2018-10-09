module.exports = function(spec) {
  let op = spec.paths['/files.upload'].post;
  let param = op.parameters.filter(p => p.name === 'file').pop();
  param.type = 'file';
}
