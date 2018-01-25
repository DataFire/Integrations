# @datafire/apitore_languagedetectionapis

Client library for Language Detection APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_languagedetectionapis
```
```js
let apitore_languagedetectionapis = require('@datafire/apitore_languagedetectionapis').create();

apitore_languagedetectionapis.getUsingGET({
  "access_token": "",
  "text": ""
}).then(data => {
  console.log(data);
});
```

## Description

Language detection.<BR />[Endpoint] https://api.apitore.com/api/22

## Actions

### getUsingGET
Language Detection.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/langdetect-response">langdetect-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LanguageResponseEntity<BR />


```js
apitore_languagedetectionapis.getUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: Text [10-20 words over is recommended]

#### Output
* output [LanguageResponseEntity](#languageresponseentity)

### smGetUsingGET
Language Detection.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/langdetect-response">langdetect-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LanguageResponseEntity<BR />


```js
apitore_languagedetectionapis.smGetUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * text **required** `string`: Text [Short message like tweet is supported]

#### Output
* output [LanguageResponseEntity](#languageresponseentity)



## Definitions

### LanguageEntity
* LanguageEntity `object`
  * lang **required** `string`: language
  * prob **required** `number`: probability

### LanguageResponseEntity
* LanguageResponseEntity `object`
  * endTime **required** `string`: End date
  * language **required** `string`: Output: prediction
  * log **required** `string`: Log message
  * probabilities **required** `array`: Output: probabilities
    * items [LanguageEntity](#languageentity)
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date
  * text **required** `string`: Input: text


