# @datafire/apitore_url2labelbytfidfapis

Client library for Url2Label by tfidf APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_url2labelbytfidfapis
```
```js
let apitore_url2labelbytfidfapis = require('@datafire/apitore_url2labelbytfidfapis').create();

apitore_url2labelbytfidfapis.getUsingGET_3({}).then(data => {
  console.log(data);
})
```

## Description

Url to label by tfidf of contents.<BR />[Endpoint] https://api.apitore.com/api/20

## Actions

### getUsingGET_3
Url2Label by tfidf.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />


```js
apitore_url2labelbytfidfapis.getUsingGET_3({
  "access_token": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * url **required** `string`: url
  * num `integer`: num [max 10, default 1]

#### Output
* output [LabelResponseEntity](#labelresponseentity)



## Definitions

### LabelEntity
* LabelEntity `object`
  * label **required** `string`: label
  * score **required** `number`: tfidf score

### LabelResponseEntity
* LabelResponseEntity `object`
  * endTime **required** `string`: End date
  * input **required** `string`: Input word
  * labels `array`: Distances
    * items [LabelEntity](#labelentity)
  * log **required** `string`: Log message
  * num **required** `string`: Input num
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date


