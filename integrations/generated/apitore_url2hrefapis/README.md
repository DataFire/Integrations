# @datafire/apitore_url2hrefapis

Client library for Url2Href APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_url2hrefapis
```

```js
let datafire = require('datafire');
let apitore_url2hrefapis = require('@datafire/apitore_url2hrefapis').actions;
let context = new datafire.Context();

apitore_url2hrefapis.url2hrefUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Url to Href links.<BR />[Endpoint] https://api.apitore.com/api/14

## Actions
### url2hrefUsingGET
Jsoup Web scraper.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/jsoup-response">jsoup-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LinkResponseEntity<BR />


```js
apitore_url2hrefapis.url2hrefUsingGET({
  "access_token": "",
  "url": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* url (string) **required** - URL

