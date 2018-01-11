# @datafire/apitore_certificatefeedsapis

Client library for Certificate feeds APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_certificatefeedsapis
```
```js
let apitore_certificatefeedsapis = require('@datafire/apitore_certificatefeedsapis').create();

apitore_certificatefeedsapis.feedUsingGET_3({}).then(data => {
  console.log(data);
})
```

## Description

Various certificate feeds.<BR />[Endpoint] https://api.apitore.com/api/31

## Actions

### feedUsingGET_3
Certificate feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />


```js
apitore_certificatefeedsapis.feedUsingGET_3({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * page `integer`: Page number [page x 10 feeds]

#### Output
* output [FeedResponseEntity](#feedresponseentity)



## Definitions

### FeedEntryEntity
* FeedEntryEntity `object`
  * author `string`: Author
  * description `string`: Description
  * link **required** `string`: Link
  * pubDate **required** `integer`: Published Date
  * sourceLink **required** `string`: Source Link
  * sourceTitle **required** `string`: Source Title
  * title **required** `string`: Title

### FeedResponseEntity
* FeedResponseEntity `object`
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [FeedEntryEntity](#feedentryentity)
  * lastUpdatedAt **required** `integer`: Last Updated At
  * log **required** `string`: Log message
  * num **required** `integer`: Num
  * page **required** `integer`: Input page num
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date


