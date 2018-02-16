# @datafire/apitore_sentencepieceapis_tweet_

Client library for SentencePiece APIs (tweet)

## Installation and Usage
```bash
npm install --save @datafire/apitore_sentencepieceapis_tweet_
```
```js
let apitore_sentencepieceapis_tweet_ = require('@datafire/apitore_sentencepieceapis_tweet_').create();

apitore_sentencepieceapis_tweet_.getUsingGET({
  "access_token": "",
  "text": ""
}).then(data => {
  console.log(data);
});
```

## Description

SentencePiece tokenizer (tweet).<BR />[Endpoint] https://api.apitore.com/api/38

## Actions

### getUsingGET
SentencePiece (bpe).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />


```js
apitore_sentencepieceapis_tweet_.getUsingGET({
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


