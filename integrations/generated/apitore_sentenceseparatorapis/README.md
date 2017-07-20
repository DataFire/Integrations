# @datafire/apitore_sentenceseparatorapis

Client library for Sentence separator APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_sentenceseparatorapis
```

```js
let datafire = require('datafire');
let apitore_sentenceseparatorapis = require('@datafire/apitore_sentenceseparatorapis').actions;
let context = new datafire.Context();

apitore_sentenceseparatorapis.heuristicsUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Simple sentence separator.<BR />[Endpoint] https://api.apitore.com/api/17

## Actions
### heuristicsUsingGET
Sentence separator.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.SentenceResponseEntity<BR />


```js
apitore_sentenceseparatorapis.heuristicsUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - text

