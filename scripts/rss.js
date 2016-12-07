const async = require('async');
const integrate = require('./integrate');

const FEEDS = {
  "bbc-rss": {
    "worldNews": "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml",
  },
  "nytimes-rss": {
    "homePage": "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    "world": "http://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "business": "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "sports": "http://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    "science": "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
  },
  "reddit-rss": {
    "frontPage": "https://www.reddit.com/.rss",
    "subreddit": "https://www.reddit.com/r/{subreddit}/.rss",
  },
  "cnn-rss": {
    "topStories": "http://rss.cnn.com/rss/cnn_topstories.rss",
    "world": "http://rss.cnn.com/rss/cnn_world.rss",
    "politics": "http://rss.cnn.com/rss/cnn_allpolitics.rss",
    "business": "http://rss.cnn.com/rss/money_latest.rss",
  },
  "npr-rss": {
    "news": "http://www.npr.org/rss/rss.php?id=1001",
  },
  "bbc-rss": {
    "topStories": "http://feeds.bbci.co.uk/news/rss.xml",
    "world": "http://feeds.bbci.co.uk/news/world/rss.xml",
    "uk": "http://feeds.bbci.co.uk/news/uk/rss.xml",
    "technology": "http://feeds.bbci.co.uk/news/technology/rss.xml",
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
