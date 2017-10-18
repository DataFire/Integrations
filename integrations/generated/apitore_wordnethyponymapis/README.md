# @datafire/apitore_wordnethyponymapis

Client library for WordNet hyponym APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_wordnethyponymapis
```

```js
let datafire = require('datafire');
let apitore_wordnethyponymapis = require('@datafire/apitore_wordnethyponymapis').create();

apitore_wordnethyponymapis.simpleHyponymUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Return hyponym words.<BR />[Endpoint] https://api.apitore.com/api/43

## Actions
### simpleHyponymUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />&nbsp; Class: com.apitore.banana.response.de.sciss.ws4j.LinksResponseEntity<BR />


```js
apitore_wordnethyponymapis.simpleHyponymUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - Word
* pos (string) - Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

