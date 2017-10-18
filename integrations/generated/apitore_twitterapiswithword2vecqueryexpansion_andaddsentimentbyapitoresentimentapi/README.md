# @datafire/apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi

Client library for Twitter APIs with Word2Vec query expansion, and add sentiment by Apitore sentiment

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi
```

```js
let datafire = require('datafire');
let apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi = require('@datafire/apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi').create();

apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi.searchUsingGET_3({}).then(data => {
  console.log(data);
})
```

## Description
Call Twitter APIs with word2vec query expansion and sentiment analysis.<BR />[Endpoint] https://api.apitore.com/api/26

## Actions
### searchUsingGET_3
Tweets search API with Word2Vec query expansion, and add sentiment by Apitore sentiment API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapiswithword2vecqueryexpansion_andaddsentimentbyapitoresentimentapi.searchUsingGET_3({
  "access_token": "",
  "q": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* q (string) **required** - Search query
* sinceId (integer) - Get after this id.
* maxId (integer) - Get before this id.

