# @datafire/apitore_wordnethyponymapis

Client library for WordNet hyponym APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_wordnethyponymapis
```
```js
let apitore_wordnethyponymapis = require('@datafire/apitore_wordnethyponymapis').create();

apitore_wordnethyponymapis.simpleHyponymUsingGET({
  "access_token": "",
  "word": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * word **required** `string`: Word
  * pos `string`: Part-of-speech. You can specify several pos by csv format. [n:noun,v:verb,a:adjective,r:adverb]

#### Output
* output [LinksResponseEntity](#linksresponseentity)



## Definitions

### LinkWordsEntity
* LinkWordsEntity `object`
  * labelen **required** `string`: Link label En
  * labelja **required** `string`: Link label Ja
  * pos **required** `string`: Input part-of-speech
  * words **required** `array`: Link words
    * items `string`

### LinksResponseEntity
* LinksResponseEntity `object`
  * endTime **required** `string`: End date
  * entries **required** `array`: Entries
    * items [LinkWordsEntity](#linkwordsentity)
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * word **required** `string`: Input word


