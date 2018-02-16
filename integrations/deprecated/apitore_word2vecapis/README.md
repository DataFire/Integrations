# @datafire/apitore_word2vecapis

Client library for Word2Vec APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_word2vecapis
```
```js
let apitore_word2vecapis = require('@datafire/apitore_word2vecapis').create();

apitore_word2vecapis.analogyUsingGET({
  "access_token": "",
  "positives": ""
}).then(data => {
  console.log(data);
});
```

## Description

Word2Vec.<BR />[Endpoint] https://api.apitore.com/api/8

## Actions

### analogyUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.AnalogyResponseEntity<BR />


```js
apitore_word2vecapis.analogyUsingGET({
  "access_token": "",
  "positives": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * positives **required** `string`: positive1 positive2 ...[space separated strings]
  * negatives `string`: negative1 negative2 ...[space separated strings]
  * num `integer`: num [max 10, default 1]

#### Output
* output [AnalogyResponseEntity](#analogyresponseentity)

### distanceUsingGET_1
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.DistanceResponseEntity<BR />


```js
apitore_word2vecapis.distanceUsingGET_1({
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

### similarityUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.SimilarityResponseEntity<BR />


```js
apitore_word2vecapis.similarityUsingGET({
  "access_token": "",
  "word1": "",
  "word2": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * word1 **required** `string`: word1
  * word2 **required** `string`: word2

#### Output
* output [SimilarityResponseEntity](#similarityresponseentity)

### vec_distanceUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.DistanceResponseEntity<BR />


```js
apitore_word2vecapis.vec_distanceUsingGET({
  "access_token": "",
  "vector": []
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * vector **required** `array`: vector [length 200]
  * num `integer`: num [max 10, default 1]

#### Output
* output [VectorDistanceResponseEntity](#vectordistanceresponseentity)

### wordvectorUsingGET_1
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.WordVectorResponseEntity<BR />


```js
apitore_word2vecapis.wordvectorUsingGET_1({
  "access_token": "",
  "word": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * word **required** `string`: word

#### Output
* output [WordVectorResponseEntity](#wordvectorresponseentity)



## Definitions

### AnalogyResponseEntity
* AnalogyResponseEntity `object`
  * analogies `array`: Analogies
    * items `string`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * negatives **required** `string`: Input negatives
  * num **required** `string`: Input num
  * positives **required** `string`: Input positives
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date

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

### SimilarityResponseEntity
* SimilarityResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * similarity `number`: Similarity
  * startTime **required** `string`: Start date
  * word1 **required** `string`: Input word1
  * word2 **required** `string`: Input word2

### VectorDistanceResponseEntity
* VectorDistanceResponseEntity `object`
  * distances `array`: Distances
    * items [DistanceEntity](#distanceentity)
  * endTime **required** `string`: End date
  * input **required** `array`: Input vector
    * items `number`
  * log **required** `string`: Log message
  * num **required** `string`: Input num
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date

### WordVectorResponseEntity
* WordVectorResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * vector `array`: Vector
    * items `number`
  * word **required** `string`: Input word


