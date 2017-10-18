# @datafire/apitore_sentencepieceapis_tweet_

Client library for SentencePiece APIs (tweet)

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_sentencepieceapis_tweet_
```

```js
let datafire = require('datafire');
let apitore_sentencepieceapis_tweet_ = require('@datafire/apitore_sentencepieceapis_tweet_').create();

apitore_sentencepieceapis_tweet_.getUsingGET({}).then(data => {
  console.log(data);
})
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

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [up to 400 characters]

