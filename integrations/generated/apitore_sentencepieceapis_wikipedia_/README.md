# @datafire/apitore_sentencepieceapis_wikipedia_

Client library for SentencePiece APIs (wikipedia)

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_sentencepieceapis_wikipedia_
```

```js
let datafire = require('datafire');
let apitore_sentencepieceapis_wikipedia_ = require('@datafire/apitore_sentencepieceapis_wikipedia_').actions;
let context = new datafire.Context();

apitore_sentencepieceapis_wikipedia_.getUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
SentencePiece tokenizer (wikipedia).<BR />[Endpoint] https://api.apitore.com/api/37

## Actions
### getUsingGET
SentencePiece (bpe).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />


```js
apitore_sentencepieceapis_wikipedia_.getUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [up to 400 characters]

### getUsingGET_1
SentencePiece (unigram).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />


```js
apitore_sentencepieceapis_wikipedia_.getUsingGET_1({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [up to 400 characters]

