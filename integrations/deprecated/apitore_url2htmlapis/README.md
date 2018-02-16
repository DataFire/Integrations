# @datafire/apitore_url2htmlapis

Client library for Url2Html APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_url2htmlapis
```
```js
let apitore_url2htmlapis = require('@datafire/apitore_url2htmlapis').create();

apitore_url2htmlapis.url2htmlUsingGET({
  "access_token": "",
  "url": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * url **required** `string`: URL

#### Output
* output [TextResponseEntity](#textresponseentity)



## Definitions

### TextResponseEntity
* TextResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * text **required** `string`: Text


