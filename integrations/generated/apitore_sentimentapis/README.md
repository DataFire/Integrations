# @datafire/apitore_sentimentapis

Client library for Sentiment APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_sentimentapis
```

```js
let datafire = require('datafire');
let apitore_sentimentapis = require('@datafire/apitore_sentimentapis').create();

apitore_sentimentapis.predictUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Japanese sentiment analyzer. (tokenized by SentencePiece)<BR />[Endpoint] https://api.apitore.com/api/39

## Actions
### predictUsingGET
Sentiment Analysis, last update at 2017-4-29.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.sentiment.SentimentResponseEntity<BR />


```js
apitore_sentimentapis.predictUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - text

