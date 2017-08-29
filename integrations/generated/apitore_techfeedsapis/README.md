# @datafire/apitore_techfeedsapis

Client library for Tech feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_techfeedsapis
```

```js
let datafire = require('datafire');
let apitore_techfeedsapis = require('@datafire/apitore_techfeedsapis').create();

apitore_techfeedsapis.feedUsingGET_7({}).then(data => {
  console.log(data);
})
```

## Description
Various tech feeds.<BR />[Endpoint] https://api.apitore.com/api/35

## Actions
### feedUsingGET_7
Tech feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_techfeedsapis.feedUsingGET_7({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

