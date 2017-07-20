# @datafire/apitore_url2htmlapis

Client library for Url2Html APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_url2htmlapis
```

```js
let datafire = require('datafire');
let apitore_url2htmlapis = require('@datafire/apitore_url2htmlapis').actions;
let context = new datafire.Context();

apitore_url2htmlapis.url2htmlUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Url to Html.<BR />[Endpoint] https://api.apitore.com/api/12

## Actions
### url2htmlUsingGET
Jsoup Web scraper.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/jsoup-response">jsoup-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.TextResponseEntity<BR />


```js
apitore_url2htmlapis.url2htmlUsingGET({
  "access_token": "",
  "url": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* url (string) **required** - URL

