const async = require('async');
const integrate = require('./integrate');

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
  facebook: '563b9b84ea9ad5f345e97504',
  heroku: '563b9b84ea9ad5f345e974f8',
  soundcloud: '563b9b85ea9ad5f345e97514',
  quandl: '5684555fe39ec3d7747eaf14',
  etsy: '563b9b84ea9ad5f345e974d9',
}

async.series(Object.keys(integrations).map(name => {
  return acb => {
    integrate({
      name,
      openapi: `https://datafire.io/api/connection/${integrations[name]}/swagger`,
      patch: maybeGetPatch(name),
    }, acb)
  }
}), err => {
  if (err) throw err;
})

