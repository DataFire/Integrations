# @datafire/apitore_rss2jsonapis

Client library for RSS2JSON APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_rss2jsonapis
```

```js
let datafire = require('datafire');
let apitore_rss2jsonapis = require('@datafire/apitore_rss2jsonapis').actions;
let context = new datafire.Context();

apitore_rss2jsonapis.rss2jsonUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Rss to Json.<BR />[Endpoint] https://api.apitore.com/api/28

## Actions
### rss2jsonUsingGET
RSS to Json.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.SyndFeedResponseEntity<BR />


```js
apitore_rss2jsonapis.rss2jsonUsingGET({
  "access_token": "",
  "rss": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* rss (string) **required** - RSS

