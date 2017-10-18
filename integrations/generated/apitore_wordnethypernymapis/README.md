# @datafire/apitore_wordnethypernymapis

Client library for WordNet hypernym APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_wordnethypernymapis
```

```js
let datafire = require('datafire');
let apitore_wordnethypernymapis = require('@datafire/apitore_wordnethypernymapis').create();

apitore_wordnethypernymapis.simpleHypernymUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Return hypernym words.<BR />[Endpoint] https://api.apitore.com/api/42

## Actions
### simpleHypernymUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />&nbsp; Class: com.apitore.banana.response.de.sciss.ws4j.LinksResponseEntity<BR />


```js
apitore_wordnethypernymapis.simpleHypernymUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - Word
* pos (string) - Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

