# @datafire/apitore_wordnetapis

Client library for WordNet APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_wordnetapis
```

```js
let datafire = require('datafire');
let apitore_wordnetapis = require('@datafire/apitore_wordnetapis').create();

apitore_wordnetapis.sensebysynsetUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
You can access ALL WordNet DB.<BR />[Endpoint] https://api.apitore.com/api/46

## Actions
### sensebysynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.sensebysynsetUsingGET({
  "access_token": "",
  "synset": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* synset (string) **required** - Synset
* lang (string) - Language. [jpn:japanese,eng:english]

### sensebywordidUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.sensebywordidUsingGET({
  "access_token": "",
  "wordid": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* wordid (integer) **required** - Word ID

### synlinkbySynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synlinkbySynsetUsingGET({
  "access_token": "",
  "synset": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* synset (string) **required** - Synset
* link (string) - Link. You can specify several link by csv format. [also, syns, hype, inst, hypo, hasi, mero, mmem, msub, mprt, holo, hmem, hsub, hprt, attr, sim, enta, caus, dmnc, dmnu, dmnr, dmtc, dmtu, dmtr, ants]

### synsetbyNameUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synsetbyNameUsingGET({
  "access_token": "",
  "name": "",
  "pos": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* name (string) **required** - Name
* pos (string) **required** - Part-of-speech. [n:noun,v:verb,a:adjective,r:adverb]

### synsetbysynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synsetbysynsetUsingGET({
  "access_token": "",
  "synset": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* synset (string) **required** - Synset

### synsetdefbysynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synsetdefbysynsetUsingGET({
  "access_token": "",
  "synset": "",
  "lang": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* synset (string) **required** - Synset
* lang (string) **required** - Language. [jpn:japanese,eng:english]

### wordbylemmaUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.wordbylemmaUsingGET({
  "access_token": "",
  "lemma": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* lemma (string) **required** - Lemma
* pos (string) - Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

### wordbyidUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.wordbyidUsingGET({
  "access_token": "",
  "wordid": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* wordid (integer) **required** - Word ID

