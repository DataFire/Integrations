# @datafire/apitore_rss2jsonapis

Client library for RSS2JSON APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_rss2jsonapis
```
```js
let apitore_rss2jsonapis = require('@datafire/apitore_rss2jsonapis').create();

apitore_rss2jsonapis.rss2jsonUsingGET({
  "access_token": "",
  "rss": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * rss **required** `string`: RSS

#### Output
* output [SyndFeedResponseEntity](#syndfeedresponseentity)



## Definitions

### SyndEntryEntity
* SyndEntryEntity `object`
  * author `string`: Author
  * description `string`: Description
  * link **required** `string`: Link
  * pubDate **required** `integer`: Published Date
  * title **required** `string`: Title

### SyndFeedResponseEntity
* SyndFeedResponseEntity `object`
  * author `string`: Author
  * description `string`: Description
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [SyndEntryEntity](#syndentryentity)
  * link **required** `string`: Link
  * log **required** `string`: Log message
  * num **required** `integer`: Num
  * processTime **required** `string`: Process time [millisecond]
  * pubDate **required** `integer`: Published Date
  * rss **required** `string`: Input RSS
  * startTime **required** `string`: Start date
  * title **required** `string`: Title


