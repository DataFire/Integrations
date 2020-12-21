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
    function done(err) {
      if (err) {
        console.log("ERROR", err, name, logos[name]);
        process.exit(0);
      } else {
        console.log('done', name, logos[name]);
      }
      acb();
    }
    let extname = logos[name].match(/\.(\w+)$/)[1];
    let filename = OUTDIR + '/' + name + '.' + extname;
    if (args.new && fs.existsSync(filename)) return acb();
    request.get(logos[name], (err, resp, body) => {
      err = err || (resp.statusCode >= 300 ? resp.statusCode : null);
      if (err) {
        console.log('error while retrieving logo for', name, err);
        done();
        done = null;
      }
    })
    .pipe(fs.createWriteStream(filename))
    .on('close', () => done && done())
    .on('warning', console.log);
  }
}), function(err) {
  if (err) throw err;
  process.exit(0);
})
