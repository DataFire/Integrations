# @datafire/apitore_designfeedsapis

Client library for Design feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_designfeedsapis
```

```js
let datafire = require('datafire');
let apitore_designfeedsapis = require('@datafire/apitore_designfeedsapis').actions;
let context = new datafire.Context();

apitore_designfeedsapis.feedUsingGET_4({}, context).then(data => {
  console.log(data);
})
```

## Description
Various design feeds.<BR />[Endpoint] https://api.apitore.com/api/32

## Actions
### feedUsingGET_4
Design feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_designfeedsapis.feedUsingGET_4({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

