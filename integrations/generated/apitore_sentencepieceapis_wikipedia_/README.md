# @datafire/apitore_sentencepieceapis_wikipedia_

Client library for SentencePiece APIs (wikipedia)

## Installation and Usage
```bash
npm install --save @datafire/apitore_sentencepieceapis_wikipedia_
```
```js
let apitore_sentencepieceapis_wikipedia_ = require('@datafire/apitore_sentencepieceapis_wikipedia_').create();

apitore_sentencepieceapis_wikipedia_.getUsingGET_1({
  "access_token": "",
  "text": ""
}).then(data => {
  console.log(data);
});
```

## Description

SentencePiece tokenizer (wikipedia).<BR />[Endpoint] https://api.apitore.com/api/37

## Actions

### getUsingGET_1
SentencePiece (bpe).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />


```js
apitore_sentencepieceapis_wikipedia_.getUsingGET_1({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: Text [up to 400 characters]

#### Output
* output [SentencePieceTokenResponseEntity](#sentencepiecetokenresponseentity)

### getUsingGET_2
SentencePiece (unigram).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />


```js
apitore_sentencepieceapis_wikipedia_.getUsingGET_2({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: Text [up to 400 characters]

#### Output
* output [SentencePieceTokenResponseEntity](#sentencepiecetokenresponseentity)



## Definitions

### SPTokenEntity
* SPTokenEntity `object`
  * token **required** `string`: Token
  * wid **required** `integer`: Word ID

### SentencePieceTokenResponseEntity
* SentencePieceTokenResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * tokens `array`: SentencePiece Tokens
    * items [SPTokenEntity](#sptokenentity)


