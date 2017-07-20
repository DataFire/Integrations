# @datafire/apitore_synonymapis

Client library for Synonym APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_synonymapis
```

```js
let datafire = require('datafire');
let apitore_synonymapis = require('@datafire/apitore_synonymapis').actions;
let context = new datafire.Context();

apitore_synonymapis.distanceUsingGET({}, context).then(data => {
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

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - word
* num (integer) - num [max 10, default 1]

