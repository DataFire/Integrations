# @datafire/apitore_twitterapiswithword2vecqueryexpansion

Client library for Twitter APIs with Word2Vec query expansion

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_twitterapiswithword2vecqueryexpansion
```

```js
let datafire = require('datafire');
let apitore_twitterapiswithword2vecqueryexpansion = require('@datafire/apitore_twitterapiswithword2vecqueryexpansion').actions;
let context = new datafire.Context();

apitore_twitterapiswithword2vecqueryexpansion.searchUsingGET_2({}, context).then(data => {
  console.log(data);
})
```

## Description
Call Twitter APIs with word2vec query expansion.<BR />[Endpoint] https://api.apitore.com/api/24

## Actions
### searchUsingGET_2
Tweets search API with Word2Vec query expansion.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapiswithword2vecqueryexpansion.searchUsingGET_2({
  "access_token": "",
  "q": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* q (string) **required** - Search query
* sinceId (integer) - Get after this id.
* maxId (integer) - Get before this id.
* iter (integer) - Numof search requests. Return up to 100 x iter tweets.

