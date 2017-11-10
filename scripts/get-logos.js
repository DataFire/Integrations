let iterate = require('./iterate-integrations');
let async = require('async');
let request = require('request');
let fs = require('fs');
let args = require('yargs').argv;
let logos = {};

const OUTDIR = __dirname + '/../logos';

iterate(function(dir, name, integ) {
  let logo = integ.logo;
  try {
    logo = require(dir + '/info.json').logo || logo;
  } catch (e) {}
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
    request.get(logos[name], (err, resp, body) => {
      if (err) throw err;
      if (resp.statusCode >= 300) throw new Error("Error fetching logo for " + name + ": " + resp.statusCode);
    })
    .pipe(fs.createWriteStream(OUTDIR + '/' + name + '.' + extname))
    .on('close', acb);
  }
}), function(err) {
  if (err) throw err;
  process.exit(0);
})
