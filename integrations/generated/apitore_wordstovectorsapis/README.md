# @datafire/apitore_wordstovectorsapis

Client library for Words to Vectors APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_wordstovectorsapis
```
```js
let apitore_wordstovectorsapis = require('@datafire/apitore_wordstovectorsapis').create();

apitore_wordstovectorsapis.wordvectorUsingGET({}).then(data => {
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * word **required** `string`: word

#### Output
* output [WordVectorResponseEntity](#wordvectorresponseentity)



## Definitions

### WordVectorResponseEntity
* WordVectorResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * vector `array`: Vector
    * items `number`
  * word **required** `string`: Input word


