const path = require('path');
const fs = require('fs');
const BASE_DIR = __dirname + '/../integrations/';

module.exports = function(fn) {
  function iterateDir(dir) {
    fs.readdirSync(dir).forEach(name => {
      let fullDir = path.join(dir, name);
      let integ = require(fullDir);
      fn(fullDir, name, integ)
      if (integ.ajv) {
        integ.ajv._cache.clear();
      }
      integ = null;
      for (let key in require.cache) {
        if (key.indexOf(path.join(__dirname, '..')) !== -1) {
          delete require.cache[key];
        }
      }
    })
  }

  iterateDir(BASE_DIR + '/generated');
  iterateDir(BASE_DIR + '/manual');
}
