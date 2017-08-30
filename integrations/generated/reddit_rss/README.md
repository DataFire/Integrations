# @datafire/reddit_rss

Client library for www.reddit.com

## Installation and Usage
```bash
npm install --save datafire @datafire/reddit_rss
```

```js
let datafire = require('datafire');
let reddit_rss = require('@datafire/reddit_rss').create();

reddit_rss.frontPage({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### frontPage
reddit: the front page of the internet


```js
reddit_rss.frontPage(null, context)
```

#### Parameters
*This action has no parameters*

### subreddit
Retrieve the RSS feed


```js
reddit_rss.subreddit({
  "subreddit": ""
}, context)
```

#### Parameters
* subreddit (string) **required**

