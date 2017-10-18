# @datafire/apitore_wordnetsynonymapis

Client library for WordNet synonym APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_wordnetsynonymapis
```

```js
let datafire = require('datafire');
let apitore_wordnetsynonymapis = require('@datafire/apitore_wordnetsynonymapis').create();

apitore_wordnetsynonymapis.simpleSynonymUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
Return synonym words.<BR />[Endpoint] https://api.apitore.com/api/41

## Actions
### simpleSynonymUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />&nbsp; Class: com.apitore.banana.response.de.sciss.ws4j.LinksResponseEntity<BR />


```js
apitore_wordnetsynonymapis.simpleSynonymUsingGET({
  "access_token": "",
  "word": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* word (string) **required** - Word
* pos (string) - Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

