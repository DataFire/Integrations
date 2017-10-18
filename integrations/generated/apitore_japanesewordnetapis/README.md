# @datafire/apitore_japanesewordnetapis

Client library for Japanese WordNet APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_japanesewordnetapis
```

```js
let datafire = require('datafire');
let apitore_japanesewordnetapis = require('@datafire/apitore_japanesewordnetapis').create();

apitore_japanesewordnetapis.simpleAllUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Return all WordNet words.<BR />[Endpoint] https://api.apitore.com/api/40

## Actions
### simpleAllUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />&nbsp; Class: com.apitore.banana.response.de.sciss.ws4j.LinksResponseEntity<BR />


```js
apitore_japanesewordnetapis.simpleAllUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - Word
* pos (string) - Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

