const path = require('path');
const fs = require('fs');
const BASE_DIR = __dirname + '/../integrations/';

// FIXME
process.setMaxListeners(0);

module.exports = function(fn, filterFn) {
  if (!filterFn) filterFn = (name) => true;
  function iterateDir(dir) {
    fs.readdirSync(dir).forEach(name => {
      if (!filterFn(name)) return;
      let fullDir = path.join(dir, name);
      let integ = require(fullDir);
      fn(fullDir, name, integ);
      if (integ.ajv) {
        integ.ajv._cache.clear();
      }
      integ = null;
      for (let key in require.cache) {
        if (key.indexOf(path.join(__dirname, '../integrations')) !== -1) {
          delete require.cache[key];
        }
      }
    })
  }

  iterateDir(BASE_DIR + '/generated');
  iterateDir(BASE_DIR + '/manual');
}
