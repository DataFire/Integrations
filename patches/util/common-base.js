module.exports = function(spec, prefix) {
  for (let path in spec.paths) {
    if (!path.startsWith(prefix)) throw new Error("Bad path for zoomconnect: " + path);
    let newPath = path.substring(prefix.length);
    spec.paths[newPath] = spec.paths[path];
    delete spec.paths[path];
  }
  spec.basePath += prefix;
}
