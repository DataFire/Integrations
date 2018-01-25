# @datafire/apitore_url2textapis

Client library for Url2Text APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_url2textapis
```
```js
let apitore_url2textapis = require('@datafire/apitore_url2textapis').create();

apitore_url2textapis.url2textUsingGET({
  "access_token": "",
  "url": ""
}).then(data => {
  console.log(data);
});
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


