# @datafire/apitore_gamefeedsapis

Client library for Game feeds APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_gamefeedsapis
```

```js
let datafire = require('datafire');
let apitore_gamefeedsapis = require('@datafire/apitore_gamefeedsapis').create();

apitore_gamefeedsapis.feedUsingGET_5({}).then(data => {
  console.log(data);
})
```

## Description
Various game feeds.<BR />[Endpoint] https://api.apitore.com/api/33

## Actions
### feedUsingGET_5
Game feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_gamefeedsapis.feedUsingGET_5({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* page (integer) - Page number [page x 10 feeds]

