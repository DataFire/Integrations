module.exports = (spec) => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      let params = op.parameters || [];
      params.forEach(p => {
        if (p.in === 'formData') p.in = 'query';
      })
    }
  }
}

