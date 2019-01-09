module.exports = spec => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      if (!op.parameters) continue;
      op.parameters = op.parameters.filter(p => p.name !== 'Authorization');
    }
  }
  for (let name in spec.definitions) {
    let def = spec.definitions[name];
    delete def.example;
  }
}
