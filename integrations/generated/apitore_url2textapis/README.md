# @datafire/apitore_url2textapis

Client library for Url2Text APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_url2textapis
```

```js
let datafire = require('datafire');
let apitore_url2textapis = require('@datafire/apitore_url2textapis').actions;
let context = new datafire.Context();

apitore_url2textapis.url2textUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Url to Text.<BR />[Endpoint] https://api.apitore.com/api/13

## Actions
### url2textUsingGET
Jsoup Web scraper.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/jsoup-response">jsoup-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.TextResponseEntity<BR />


```js
apitore_url2textapis.url2textUsingGET({
  "access_token": "",
  "url": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* url (string) **required** - URL

