# @datafire/reddit_rss

Client library for www.reddit.com

## Installation and Usage
```bash
npm install --save @datafire/reddit_rss
```
```js
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

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### subreddit
Retrieve the RSS feed


```js
reddit_rss.subreddit({
  "subreddit": ""
}, context)
```

#### Input
* input `object`
  * subreddit **required** `string`

#### Output
* output [Feed](#feed)



## Definitions

### Feed
* Feed `object`
  * feed `object`
    * link `string`
    * title `string`
    * feedUrl `string`
    * entries `array`
      * items `object`
        * id `string`
        * link `string`
        * title `string`
        * pubDate `string`
        * author `string`
        * content `string`
        * contentSnippet `string`


