# @datafire/apitore_wordstovectorsapis

Client library for Words to Vectors APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_wordstovectorsapis
```

```js
let datafire = require('datafire');
let apitore_wordstovectorsapis = require('@datafire/apitore_wordstovectorsapis').actions;
let context = new datafire.Context();

apitore_wordstovectorsapis.wordvectorUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Word to vectors.<BR />[Endpoint] https://api.apitore.com/api/10

## Actions
### wordvectorUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.WordVectorResponseEntity<BR />


```js
apitore_wordstovectorsapis.wordvectorUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - word

