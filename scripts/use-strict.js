let fs = require('fs');

const DIR = __dirname + '/../integrations/generated';

const STRICT_LINE = "'use strict';";

fs.readdirSync(DIR).forEach(name => {
  let indexFile = DIR + '/' + name + '/index.js';
  let index = fs.readFileSync(indexFile, 'utf8');
  if (index.split("\n")[0] !== STRICT_LINE) {
    index = STRICT_LINE + '\n' + index;
  }
  fs.writeFileSync(indexFile, index);
})
