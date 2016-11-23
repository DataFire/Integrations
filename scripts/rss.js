const async = require('async');
const integrate = require('./integrate');

const FEEDS = {
  "bbc-rss": {
    "worldNews": "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml",
  },
  "reddit-rss": {
    "frontPage": "https://www.reddit.com/.rss",
    "subreddit": "https://www.reddit.com/r/{subreddit}/.rss",
  }
}

async.parallel(Object.keys(FEEDS).map(key => {
  let ops = FEEDS[key];
  return acb => {
    integrate({
      name: key,
      rss: ops,
    }, acb)
  }
}), err => {
  if (err) throw err;
})
