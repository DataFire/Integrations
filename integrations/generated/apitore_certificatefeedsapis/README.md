# @datafire/apitore_certificatefeedsapis

Client library for Certificate feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_certificatefeedsapis
```

```js
let datafire = require('datafire');
let apitore_certificatefeedsapis = require('@datafire/apitore_certificatefeedsapis').create();

apitore_certificatefeedsapis.feedUsingGET_3({}).then(data => {
  console.log(data);
})
```

## Description
Various certificate feeds.<BR />[Endpoint] https://api.apitore.com/api/31

## Actions
### feedUsingGET_3
Certificate feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_certificatefeedsapis.feedUsingGET_3({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

