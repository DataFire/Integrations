module.exports = spec => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      spec.paths[path][method].responses = spec.paths[path][method].responses || {default: {description: ""}};
    }
  }
}
