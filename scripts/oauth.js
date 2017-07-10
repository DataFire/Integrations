let fs = require('fs');

let all = require('../json/list.json');
let allOAuth = {};
for (let key in all) {
  let integ = all[key];
  if (!integ.security || !integ.security[key]) continue;
  let sec = integ.security[key];
  if (sec.oauth) {
    let providerKey = sec.oauth.authorizationUrl || sec.oauth.tokenUrl;
    let cur = allOAuth[providerKey];
    if (!cur) {
      cur = {integrations: [], authorizationUrl: sec.oauth.authorizationUrl};
      allOAuth[providerKey] = cur;
    }
    cur.integrations.push(key);
  }
}
fs.writeFileSync(__dirname + '/../oauth_urls.txt', Object.keys(allOAuth).join('\n'))

