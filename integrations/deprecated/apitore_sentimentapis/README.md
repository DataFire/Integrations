# @datafire/apitore_sentimentapis

Client library for Sentiment APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_sentimentapis
```
```js
let apitore_sentimentapis = require('@datafire/apitore_sentimentapis').create();

apitore_sentimentapis.predictUsingGET({
  "access_token": "",
  "text": ""
}).then(data => {
  console.log(data);
});
```

## Description

Japanese sentiment analyzer.<BR />[Endpoint] https://api.apitore.com/api/52

## Actions

### predictUsingGET
Sentiment Analysis, last update at 2017-4-29.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.sentiment.SentimentResponseEntity<BR />


```js
apitore_sentimentapis.predictUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: text

#### Output
* output [SentimentResponseEntity](#sentimentresponseentity)



## Definitions

### SentimentEntity
* SentimentEntity `object`
  * score **required** `number`: cosine distance
  * sentiment **required** `string`: sentiment

### SentimentResponseEntity
* SentimentResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * predict **required** [SentimentEntity](#sentimententity)
  * processTime **required** `string`: Process time [millisecond]
  * sentiments **required** `array`: Output: sentiments
    * items [SentimentEntity](#sentimententity)
  * startTime **required** `string`: Start date
  * text **required** `string`: Input: text


