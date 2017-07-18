let iterate = require('./iterate-integrations');
let async = require('async');
let request = require('request');
let fs = require('fs');
let logos = {};

const OUTDIR = __dirname + '/../logos';

iterate(function(dir, name, integ) {
  if (!integ.logo) return;
  console.log(name, integ.logo.url);
  logos[name] = integ.logo.url;
});

async.series(Object.keys(logos).map(name => {
  return function(acb) {
    console.log(name, logos[name]);
    let extname = logos[name].match(/\.(\w+)$/)[1];
    request.get(logos[name])
        .pipe(fs.createWriteStream(OUTDIR + '/' + name + '.' + extname))
        .on('close', acb);
  }
}), function(err) {
  if (err) throw err;
})
