# @datafire/apitore_word2vecapis

Client library for Word2Vec APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_word2vecapis
```

```js
let datafire = require('datafire');
let apitore_word2vecapis = require('@datafire/apitore_word2vecapis').actions;
let context = new datafire.Context();

apitore_word2vecapis.analogyUsingGET({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* access_token (string) **required** - Access Token
* positives (string) **required** - positive1 positive2 ...[space separated strings]
* negatives (string) - negative1 negative2 ...[space separated strings]
* num (integer) - num [max 10, default 1]

### distanceUsingGET_1
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.DistanceResponseEntity<BR />


```js
apitore_word2vecapis.distanceUsingGET_1({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - word
* num (integer) - num [max 10, default 1]

### similarityUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.SimilarityResponseEntity<BR />


```js
apitore_word2vecapis.similarityUsingGET({
  "access_token": "",
  "word1": "",
  "word2": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word1 (string) **required** - word1
* word2 (string) **required** - word2

### vec_distanceUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.DistanceResponseEntity<BR />


```js
apitore_word2vecapis.vec_distanceUsingGET({
  "access_token": "",
  "vector": []
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* vector (array) **required** - vector [length 200]
* num (integer) - num [max 10, default 1]

### wordvectorUsingGET_1
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.WordVectorResponseEntity<BR />


```js
apitore_word2vecapis.wordvectorUsingGET_1({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - word

