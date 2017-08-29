# @datafire/apitore_documentfrequencyapis

Client library for Document frequency APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_documentfrequencyapis
```

```js
let datafire = require('datafire');
let apitore_documentfrequencyapis = require('@datafire/apitore_documentfrequencyapis').create();

apitore_documentfrequencyapis.getUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Document frequency of Wikipedia.<BR />[Endpoint] https://api.apitore.com/api/16

## Actions
### getUsingGET
Document Frequency by JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.DocumentFrequencyResponseEntity<BR />


```js
apitore_documentfrequencyapis.getUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - word

