# @datafire/apitore_wordnetapis

Client library for WordNet APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_wordnetapis
```
```js
let apitore_wordnetapis = require('@datafire/apitore_wordnetapis').create();

apitore_wordnetapis.sensebysynsetUsingGET({
  "access_token": "",
  "synset": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * synset **required** `string`: Synset
  * lang `string`: Language. [jpn:japanese,eng:english]

#### Output
* output [SenseResponseEntity](#senseresponseentity)

### sensebywordidUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.sensebywordidUsingGET({
  "access_token": "",
  "wordid": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * wordid **required** `integer`: Word ID

#### Output
* output [SenseResponseEntity](#senseresponseentity)

### synlinkbySynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synlinkbySynsetUsingGET({
  "access_token": "",
  "synset": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * synset **required** `string`: Synset
  * link `string`: Link. You can specify several link by csv format. [also, syns, hype, inst, hypo, hasi, mero, mmem, msub, mprt, holo, hmem, hsub, hprt, attr, sim, enta, caus, dmnc, dmnu, dmnr, dmtc, dmtu, dmtr, ants]

#### Output
* output [SynlinkResponseEntity](#synlinkresponseentity)

### synsetbyNameUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synsetbyNameUsingGET({
  "access_token": "",
  "name": "",
  "pos": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * name **required** `string`: Name
  * pos **required** `string`: Part-of-speech. [n:noun,v:verb,a:adjective,r:adverb]

#### Output
* output [SynsetResponseEntity](#synsetresponseentity)

### synsetbysynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synsetbysynsetUsingGET({
  "access_token": "",
  "synset": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * synset **required** `string`: Synset

#### Output
* output [SynsetResponseEntity](#synsetresponseentity)

### synsetdefbysynsetUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.synsetdefbysynsetUsingGET({
  "access_token": "",
  "synset": "",
  "lang": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * synset **required** `string`: Synset
  * lang **required** `string`: Language. [jpn:japanese,eng:english]

#### Output
* output [SynsetDefResponseEntity](#synsetdefresponseentity)

### wordbylemmaUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.wordbylemmaUsingGET({
  "access_token": "",
  "lemma": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * lemma **required** `string`: Lemma
  * pos `string`: Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

#### Output
* output [WordResponseEntity](#wordresponseentity)

### wordbyidUsingGET
Japanese WordNet.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/wordnet-response">wordnet-response</a><BR />


```js
apitore_wordnetapis.wordbyidUsingGET({
  "access_token": "",
  "wordid": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * wordid **required** `integer`: Word ID

#### Output
* output [WordResponseEntity](#wordresponseentity)



## Definitions

### SenseEntity
* SenseEntity `object`
  * freq **required** `integer`: Freq
  * lang **required** `string`: Language
  * lexid **required** `integer`: Lexicon ID
  * rank **required** `integer`: Rank
  * src **required** `string`: Src
  * synset **required** `string`: Synset
  * wordid **required** `integer`: Word ID

### SenseResponseEntity
* SenseResponseEntity `object`
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [SenseEntity](#senseentity)
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date

### SynlinkEntity
* SynlinkEntity `object`
  * link **required** `string`: Link
  * src **required** `string`: Src
  * synset1 **required** `string`: Synset1
  * synset2 **required** `string`: Synset2

### SynlinkResponseEntity
* SynlinkResponseEntity `object`
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [SynlinkEntity](#synlinkentity)
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date

### SynsetDefResponseEntity
* SynsetDefResponseEntity `object`
  * def **required** `string`: Definition
  * endTime **required** `string`: End date
  * lang **required** `string`: Language
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * sid **required** `integer`: sid
  * startTime **required** `string`: Start date
  * synset **required** `string`: Synset

### SynsetEntity
* SynsetEntity `object`
  * name **required** `string`: Name
  * pos **required** `string`: Part-of-speech
  * src **required** `string`: Src
  * synset **required** `string`: Synset

### SynsetResponseEntity
* SynsetResponseEntity `object`
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [SynsetEntity](#synsetentity)
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date

### WordEntity
* WordEntity `object`
  * lang **required** `string`: Language
  * lemma **required** `string`: Lemma
  * pos **required** `string`: Part-of-speech
  * pron `string`: Pron
  * wordid **required** `integer`: Word ID

### WordResponseEntity
* WordResponseEntity `object`
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [WordEntity](#wordentity)
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date


