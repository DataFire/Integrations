# @datafire/apitore_synonymapis

Client library for Synonym APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_synonymapis
```
```js
let apitore_synonymapis = require('@datafire/apitore_synonymapis').create();

apitore_synonymapis.distanceUsingGET({}).then(data => {
  console.log(data);
})
```

## Description

Return synonymous words. (equal to "word2vec distance")<BR />[Endpoint] https://api.apitore.com/api/9

## Actions

### distanceUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.DistanceResponseEntity<BR />


```js
apitore_synonymapis.distanceUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * word **required** `string`: word
  * num `integer`: num [max 10, default 1]

#### Output
* output [DistanceResponseEntity](#distanceresponseentity)



## Definitions

### DistanceEntity
* DistanceEntity `object`
  * distance **required** `number`: cosine distance
  * word **required** `string`: word

### DistanceResponseEntity
* DistanceResponseEntity `object`
  * distances `array`: Distances
    * items [DistanceEntity](#distanceentity)
  * endTime **required** `string`: End date
  * input **required** `string`: Input word
  * log **required** `string`: Log message
  * num **required** `string`: Input num
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date


