let fs = require('fs');
let request = require('request');

const URL = "https://datafire.io/api/connections";
const INTEG_DIR = __dirname + '/../integrations/generated';

let allKeys = fs.readdirSync(INTEG_DIR);

request.get(URL, {json: true}, (err, resp, connections) => {
  connections.forEach(conn => {
    if (!conn.key) return;
    let connKey = conn.key.replace(/googleapis\.com\:/, 'google_').split(':')[1] || conn.key;
    let toMatch = connKey.replace(/\.\w{2,3}$/, '.*').replace(/\W+/, '.*').toLowerCase();
    let key = allKeys.filter(key => {
      if (key.match(toMatch)) {
        return true;
      }
    })[0]
    if (!key) {
      console.log('missing', conn.key, toMatch);
    } else {
      let logo = conn.info['x-logo'];
      if (!logo) return;
      if (!logo.url.match(/\.\w{2,3}$/)) return
      delete logo.data;
      let infoFile = INTEG_DIR + '/' + key + '/info.json';
      let info = {};
      if (fs.existsSync(infoFile)) {
        info = require(infoFile);
      }
      request.get(logo.url, (err, resp, body) => {
        if (err || resp.statusCode >= 300) return;
        info.logo = logo;
        fs.writeFileSync(infoFile, JSON.stringify(info, null, 2));
      });
    }
  })
})
