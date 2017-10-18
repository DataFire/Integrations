# @datafire/apitore_cosinesimilarity

Client library for Cosine Similarity

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_cosinesimilarity
```

```js
let datafire = require('datafire');
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

#### Parameters
* access_token (string) **required** - Access Token
* req (object) **required**

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

#### Parameters
* access_token (string) **required** - Access Token
* req (object) **required**

