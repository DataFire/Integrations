# @datafire/apitore_url2srcapis

Client library for Url2Src APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_url2srcapis
```
```js
let apitore_url2srcapis = require('@datafire/apitore_url2srcapis').create();

apitore_url2srcapis.url2srcUsingGET({
  "access_token": "",
  "url": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * url **required** `string`: URL

#### Output
* output [LinkResponseEntity](#linkresponseentity)



## Definitions

### LinkResponseEntity
* LinkResponseEntity `object`
  * endTime **required** `string`: End date
  * links **required** `array`: Links
    * items `string`
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date


