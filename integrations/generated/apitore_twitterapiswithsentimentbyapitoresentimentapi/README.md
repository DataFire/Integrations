# @datafire/apitore_twitterapiswithsentimentbyapitoresentimentapi

Client library for Twitter APIs with sentiment by Apitore sentiment

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_twitterapiswithsentimentbyapitoresentimentapi
```

```js
let datafire = require('datafire');
let apitore_twitterapiswithsentimentbyapitoresentimentapi = require('@datafire/apitore_twitterapiswithsentimentbyapitoresentimentapi').create();

apitore_twitterapiswithsentimentbyapitoresentimentapi.searchUsingGET_1({}).then(data => {
  console.log(data);
})
```

## Description
Call Twitter APIs with sentiment by Apitore sentiment API.<BR />[Endpoint] https://api.apitore.com/api/25

## Actions
### searchUsingGET_1
Tweets search API with sentiment by Apitore sentiment API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapiswithsentimentbyapitoresentimentapi.searchUsingGET_1({
  "access_token": "",
  "q": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* q (string) **required** - Search query
* sinceId (integer) - Get after this id.
* maxId (integer) - Get before this id.

