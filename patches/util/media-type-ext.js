module.exports = function(spec) {
  for (let path in spec.paths) {
    let ops = spec.paths[path];
    let newPath = path.replace('{mediaTypeExtension}', '.json');
    if (newPath === path) continue;
    delete spec.paths[path];
    spec.paths[newPath] = ops;
    for (let method in ops) {
      ops[method].parameters = ops[method].parameters.filter(p => p.name !== 'mediaTypeExtension');
    }
  }
}
