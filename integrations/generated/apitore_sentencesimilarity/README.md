# @datafire/apitore_sentencesimilarity

Client library for Sentence Similarity

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_sentencesimilarity
```

```js
let datafire = require('datafire');
let apitore_sentencesimilarity = require('@datafire/apitore_sentencesimilarity').create();

apitore_sentencesimilarity.evalUsingPOST({}).then(data => {
  console.log(data);
})
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

#### Parameters
* access_token (string) **required** - Access Token
* req (object) **required**

