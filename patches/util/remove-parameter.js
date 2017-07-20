module.exports = (spec, filterName) => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      if (!op.parameters) continue;
      op.parameters = op.parameters.filter(p => p.name !== filterName);
    }
  }
}
