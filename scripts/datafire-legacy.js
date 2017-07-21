const async = require('async');
const request = require('request');
const fs = require('fs');
const integrate = require('./integrate');
const args = require('yargs').argv;

const OUT_DIR = __dirname + '/../integrations/generated';

const maybeGetPatch = (name) => {
  try {
    return require('../patches/' + name);
  } catch (e) {
    return;
  }
}

const integrations = {
  facebook: '563b9b84ea9ad5f345e97504',
  fitbit: '563b9b85ea9ad5f345e97537',
  producthunt: '567221ecc14389c87c92a77c',
  salesforce: '563b9b84ea9ad5f345e974fb',
  reddit: '56818e50b9ef0649538cc36a',
  linkedin: '563b9b85ea9ad5f345e97528',
  heroku: '563b9b84ea9ad5f345e974f8',
  soundcloud: '563b9b85ea9ad5f345e97514',
  quandl: '5684555fe39ec3d7747eaf14',
  etsy: '563b9b84ea9ad5f345e974d9',
  tumblr: "563b9b83ea9ad5f345e974d6",
  mailchimp: "563b9b83ea9ad5f345e974d4",
  groupon: "563b9b84ea9ad5f345e974e0",
  rubygems: "563b9b84ea9ad5f345e974e2",
  shopping_com: "563b9b84ea9ad5f345e974e3",
  pivotaltracker: "563b9b84ea9ad5f345e974e4",
  skyrock: "563b9b84ea9ad5f345e974ea",
  nextcaller: "563b9b85ea9ad5f345e9751a",
  myspace: "563b9b84ea9ad5f345e974f5",
  postmark: "563b9b84ea9ad5f345e97501",
  infoconnect: "563b9b85ea9ad5f345e9750b",
  picasa: "563b9b85ea9ad5f345e9750c",
  paypal: "563b9b85ea9ad5f345e97510",
  rhapsody: "563b9b85ea9ad5f345e9752a",
  urbanairship: "563b9b85ea9ad5f345e97530",
  onenote: "563b9b85ea9ad5f345e97536",
  yellowpages: "563b9b85ea9ad5f345e97539",
  pinboard: "563b9b85ea9ad5f345e97542",
  salesforcechatter: "563b9b85ea9ad5f345e97544",
  youphoric: "563b9b85ea9ad5f345e97549",
}

async.series(Object.keys(integrations).map(name => {
  return acb => {
    if (args.name && args.name !== name) return acb();
    let url = `https://datafire.io/api/connection/${integrations[name]}`;
    request.get(url, {json: true}, (err, resp, details) => {
      if (err) throw err;
      integrate({
        name,
        openapi: url + '/swagger',
        patch: maybeGetPatch(name),
      }, (err) => {
        if (err) return acb(err);
        let info = {
          title: details.info.title,
          description: details.info.summary,
          logo: details.info['x-logo'],
        };
        delete info.logo.data;
        fs.writeFileSync(OUT_DIR + '/' + name + '/info.json', JSON.stringify(info, null, 2));
        acb();
      })
    })
  }
}), err => {
  if (err) throw err;
})

