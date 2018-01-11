# @datafire/apitore_kuromojiapis

Client library for Kuromoji APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_kuromojiapis
```
```js
let apitore_kuromojiapis = require('@datafire/apitore_kuromojiapis').create();

apitore_kuromojiapis.tokenizeUsingGET_1({}).then(data => {
  console.log(data);
})
```

## Description

Kuromoji: japanese morphological analyzer.<BR />[Endpoint] https://api.apitore.com/api/7

## Actions

### tokenizeUsingGET_1
Kuromoji IPADIC NEologd dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />


```js
apitore_kuromojiapis.tokenizeUsingGET_1({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: Text [up to 400 characters]

#### Output
* output [TokenResponseEntity](#tokenresponseentity)

### tokenizeUsingPOST_1
Kuromoji IPADIC NEologd dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />


```js
apitore_kuromojiapis.tokenizeUsingPOST_1({
  "access_token": "",
  "req": {
    "texts": []
  }
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * req **required** [KuromojiRequestEntity](#kuromojirequestentity)

#### Output
* output [TokensResponseEntity](#tokensresponseentity)

### tokenizeUsingGET
Kuromoji IPADIC dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />


```js
apitore_kuromojiapis.tokenizeUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: Text [up to 400 characters]

#### Output
* output [TokenResponseEntity](#tokenresponseentity)

### tokenizeUsingPOST
Kuromoji IPADIC dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />


```js
apitore_kuromojiapis.tokenizeUsingPOST({
  "access_token": "",
  "req": {
    "texts": []
  }
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * req **required** [KuromojiRequestEntity](#kuromojirequestentity)

#### Output
* output [TokensResponseEntity](#tokensresponseentity)



## Definitions

### KuromojiRequestEntity
* KuromojiRequestEntity `object`
  * texts **required** `array`: texts [max 1MB]
    * items `string`

### TokenEntity
* TokenEntity `object`
  * allFeatures **required** `string`: All features
  * allFeaturesArray **required** `array`: All features array
    * items `string`
  * baseForm **required** `string`: Base form
  * conjugationForm **required** `string`: Conjugation form
  * conjugationType **required** `string`: Conjugation type
  * known **required** `boolean`: Known
  * partOfSpeechLevel1 **required** `string`: Part of speech level1
  * partOfSpeechLevel2 **required** `string`: Part of speech level2
  * partOfSpeechLevel3 **required** `string`: Part of speech level3
  * partOfSpeechLevel4 **required** `string`: Part of speech level4
  * position **required** `integer`: Position
  * pronunciation **required** `string`: Pronunciation
  * reading **required** `string`: Reading
  * surface **required** `string`: Surface

### TokenResponseEntity
* TokenResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * tokens `array`: Tokens
    * items [TokenEntity](#tokenentity)

### TokensResponseEntity
* TokensResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * tokens `array`: Tokens
    * items `array`
      * items [TokenEntity](#tokenentity)


