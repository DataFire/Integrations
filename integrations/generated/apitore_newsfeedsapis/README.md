# @datafire/apitore_newsfeedsapis

Client library for News feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_newsfeedsapis
```

```js
let datafire = require('datafire');
let apitore_newsfeedsapis = require('@datafire/apitore_newsfeedsapis').actions;
let context = new datafire.Context();

apitore_newsfeedsapis.feedUsingGET_6({}, context).then(data => {
  console.log(data);
})
```

## Description
Various news feeds.<BR />[Endpoint] https://api.apitore.com/api/34

## Actions
### feedUsingGET_6
News feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_newsfeedsapis.feedUsingGET_6({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

