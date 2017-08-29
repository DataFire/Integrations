# @datafire/apitore_url2srcapis

Client library for Url2Src APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_url2srcapis
```

```js
let datafire = require('datafire');
let apitore_url2srcapis = require('@datafire/apitore_url2srcapis').create();

apitore_url2srcapis.url2srcUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Url to Image src urls.<BR />[Endpoint] https://api.apitore.com/api/15

## Actions
### url2srcUsingGET
Jsoup Web scraper.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/jsoup-response">jsoup-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LinkResponseEntity<BR />


```js
apitore_url2srcapis.url2srcUsingGET({
  "access_token": "",
  "url": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* url (string) **required** - URL

