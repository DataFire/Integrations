# @datafire/apitore_sentenceseparatorapis

Client library for Sentence separator APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_sentenceseparatorapis
```
```js
let apitore_sentenceseparatorapis = require('@datafire/apitore_sentenceseparatorapis').create();

apitore_sentenceseparatorapis.heuristicsUsingGET({
  "access_token": "",
  "text": ""
}).then(data => {
  console.log(data);
});
```

## Description

Simple sentence separator.<BR />[Endpoint] https://api.apitore.com/api/17

## Actions

### heuristicsUsingGET
Sentence separator.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.SentenceResponseEntity<BR />


```js
apitore_sentenceseparatorapis.heuristicsUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: text

#### Output
* output [SentenceResponseEntity](#sentenceresponseentity)



## Definitions

### SentenceResponseEntity
* SentenceResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * sentences **required** `array`: Output: sentences
    * items `string`
  * startTime **required** `string`: Start date
  * text **required** `string`: Input: text


