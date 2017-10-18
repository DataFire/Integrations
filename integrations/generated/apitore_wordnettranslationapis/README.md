# @datafire/apitore_wordnettranslationapis

Client library for WordNet translation APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_wordnettranslationapis
```

```js
let datafire = require('datafire');
let apitore_wordnettranslationapis = require('@datafire/apitore_wordnettranslationapis').create();

apitore_wordnettranslationapis.simpleTranslationUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Return translation words.<BR />[Endpoint] https://api.apitore.com/api/45

## Actions
### simpleTranslationUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />&nbsp; Class: com.apitore.banana.response.de.sciss.ws4j.LinksResponseEntity<BR />


```js
apitore_wordnettranslationapis.simpleTranslationUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - Word
* pos (string) - Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

