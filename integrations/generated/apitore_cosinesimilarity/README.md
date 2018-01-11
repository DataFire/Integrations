# @datafire/apitore_cosinesimilarity

Client library for Cosine Similarity

## Installation and Usage
```bash
npm install --save @datafire/apitore_cosinesimilarity
```
```js
let apitore_cosinesimilarity = require('@datafire/apitore_cosinesimilarity').create();

apitore_cosinesimilarity.vecVecUsingPOST({}).then(data => {
  console.log(data);
})
```

## Description

Cosine Similarity.<BR />[Endpoint] https://api.apitore.com/api/49

## Actions

### vecVecUsingPOST
Cosine similarity.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/clustering-response">clustering-response</a><BR />&nbsp; Class: com.apitore.banana.response.clustering.SimilarityResponseEntity<BR />


```js
apitore_cosinesimilarity.vecVecUsingPOST({
  "access_token": "",
  "req": {
    "vec1": [],
    "vec2": []
  }
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * req **required** [VecvecRequestEntity](#vecvecrequestentity)

#### Output
* output [SimilarityResponseEntity](#similarityresponseentity)

### vecWordUsingPOST
Cosine similarity.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/clustering-response">clustering-response</a><BR />&nbsp; Class: com.apitore.banana.response.clustering.SimilarityResponseEntity<BR />


```js
apitore_cosinesimilarity.vecWordUsingPOST({
  "access_token": "",
  "req": {
    "vec": [],
    "word": ""
  }
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * req **required** [VecwordRequestEntity](#vecwordrequestentity)

#### Output
* output [SimilarityResponseEntity](#similarityresponseentity)



## Definitions

### SimilarityResponseEntity
* SimilarityResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * score **required** `number`: Score
  * startTime **required** `string`: Start date

### VecvecRequestEntity
* VecvecRequestEntity `object`
  * vec1 **required** `array`: Vector1
    * items `number`
  * vec2 **required** `array`: Vector2
    * items `number`

### VecwordRequestEntity
* VecwordRequestEntity `object`
  * vec **required** `array`: Vector
    * items `number`
  * word **required** `string`: Word


