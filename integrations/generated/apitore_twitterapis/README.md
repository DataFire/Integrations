# @datafire/apitore_twitterapis

Client library for Twitter APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_twitterapis
```

```js
let datafire = require('datafire');
let apitore_twitterapis = require('@datafire/apitore_twitterapis').create();

apitore_twitterapis.myTimelineUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Call Twitter APIs.<BR />[Endpoint] https://api.apitore.com/api/23

## Actions
### myTimelineUsingGET
Get my timeline tweets.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapis.myTimelineUsingGET({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* sinceId (integer) - Get after this id.
* maxId (integer) - Get before this id.
* iter (integer) - Numof requests. Return up to 200 x iter tweets.

### myTweetUsingGET
Get my tweets.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapis.myTweetUsingGET({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* sinceId (integer) - Get after this id.
* maxId (integer) - Get before this id.
* iter (integer) - Numof requests. Return up to 200 x iter tweets.

### searchUsingGET
Tweets search API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapis.searchUsingGET({
  "access_token": "",
  "q": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* q (string) **required** - Search query
* sinceId (integer) - Search after this id.
* maxId (integer) - Search before this id.
* iter (integer) - Numof search requests. Return up to 100 x iter tweets.

