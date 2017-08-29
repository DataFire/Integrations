# @datafire/apitore_pioneerblogfeedsapis

Client library for Pioneer blog feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_pioneerblogfeedsapis
```

```js
let datafire = require('datafire');
let apitore_pioneerblogfeedsapis = require('@datafire/apitore_pioneerblogfeedsapis').create();

apitore_pioneerblogfeedsapis.feedUsingGET_2({}).then(data => {
  console.log(data);
})
```

## Description
Various blog feeds.<BR />[Endpoint] https://api.apitore.com/api/30

## Actions
### feedUsingGET_2
Pioneer blog feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_pioneerblogfeedsapis.feedUsingGET_2({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

