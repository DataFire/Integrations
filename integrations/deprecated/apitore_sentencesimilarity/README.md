# @datafire/apitore_sentencesimilarity

Client library for Sentence Similarity

## Installation and Usage
```bash
npm install --save @datafire/apitore_sentencesimilarity
```
```js
let apitore_sentencesimilarity = require('@datafire/apitore_sentencesimilarity').create();

apitore_sentencesimilarity.evalUsingPOST({
  "access_token": "",
  "req": {
    "text1": "",
    "text2": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description

Sentence Similarity.<BR />[Endpoint] https://api.apitore.com/api/53

## Actions

### evalUsingPOST
Sentence similarity.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/text-similarity-response">text-similarity-response</a><BR />&nbsp; Class: com.apitore.banana.response.textsimilarity.TextSimilarityResponseEntity<BR />


```js
apitore_sentencesimilarity.evalUsingPOST({
  "access_token": "",
  "req": {
    "text1": "",
    "text2": ""
  }
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * req **required** [TextRequestEntity](#textrequestentity)

#### Output
* output [TextSimilarityResponseEntity](#textsimilarityresponseentity)



## Definitions

### TextRequestEntity
* TextRequestEntity `object`
  * text1 **required** `string`: text1
  * text2 **required** `string`: text2

### TextSimilarityResponseEntity
* TextSimilarityResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * similarity **required** `number`: Similarity
  * startTime **required** `string`: Start date
  * text1 **required** `string`: Text1
  * text2 **required** `string`: Text2


