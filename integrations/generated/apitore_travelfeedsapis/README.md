# @datafire/apitore_travelfeedsapis

Client library for Travel feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_travelfeedsapis
```

```js
let datafire = require('datafire');
let apitore_travelfeedsapis = require('@datafire/apitore_travelfeedsapis').actions;
let context = new datafire.Context();

apitore_travelfeedsapis.feedUsingGET_8({}, context).then(data => {
  console.log(data);
})
```

## Description
Various travel feeds.<BR />[Endpoint] https://api.apitore.com/api/36

## Actions
### feedUsingGET_8
Travel feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_travelfeedsapis.feedUsingGET_8({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

