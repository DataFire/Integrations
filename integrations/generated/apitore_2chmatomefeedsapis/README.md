# @datafire/apitore_2chmatomefeedsapis

Client library for 2ch matome feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_2chmatomefeedsapis
```

```js
let datafire = require('datafire');
let apitore_2chmatomefeedsapis = require('@datafire/apitore_2chmatomefeedsapis').actions;
let context = new datafire.Context();

apitore_2chmatomefeedsapis.feedUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Various 2ch matome feeds.<BR />[Endpoint] https://api.apitore.com/api/29

## Actions
### feedUsingGET
2ch matome feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_2chmatomefeedsapis.feedUsingGET({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

