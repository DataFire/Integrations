let iterate = require('./iterate-integrations');
let async = require('async');
let request = require('request');
let fs = require('fs');
let args = require('yargs').argv;
let logos = {};

let overrides = require('../overrides.json');

const OUTDIR = __dirname + '/../logos';

iterate(function(dir, name, integ) {
  let logo = integ.logo;
  if (overrides[name]) {
    logo = overrides[name].logo || logo;
  }
  if (!logo) {
    console.log('no logo:' + name);
    return;
  }
  logos[name] = logo.url;
}, name => !args.name || args.name === name);

async.series(Object.keys(logos).map(name => {
  return function(acb) {
    console.log(name, logos[name]);
    let extname = logos[name].match(/\.(\w+)$/)[1];
    let filename = OUTDIR + '/' + name + '.' + extname;
    if (fs.existsSync(filename)) return acb();
    request.get(logos[name], (err, resp, body) => {
      if (err) throw err;
      if (resp.statusCode >= 300) throw new Error("Error fetching logo for " + name + ": " + resp.statusCode);
    })
    .pipe(fs.createWriteStream(filename))
    .on('close', acb);
  }
}), function(err) {
  if (err) throw err;
  process.exit(0);
})
