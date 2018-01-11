# @datafire/apitore_text2labelbytfidfapis

Client library for Text2Label by tfidf APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_text2labelbytfidfapis
```
```js
let apitore_text2labelbytfidfapis = require('@datafire/apitore_text2labelbytfidfapis').create();

apitore_text2labelbytfidfapis.getUsingGET_1({}).then(data => {
  console.log(data);
})
```

## Description

Text to label by tfidf of contents.<BR />[Endpoint] https://api.apitore.com/api/18

## Actions

### getUsingGET_1
Text2Label by tfidf.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />


```js
apitore_text2labelbytfidfapis.getUsingGET_1({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: text
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


