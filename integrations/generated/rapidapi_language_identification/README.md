# @datafire/rapidapi_language_identification

Client library for Language Identification (Prediction)

## Installation and Usage
```bash
npm install --save @datafire/rapidapi_language_identification
```
```js
let rapidapi_language_identification = require('@datafire/rapidapi_language_identification').create();

.then(data => {
  console.log(data);
});
```

## Description

Automatic language detection for any texts. Supports over 150 languages.

## Actions

### recognize_language.post
Recognize Language


```js
rapidapi_language_identification.recognize_language.post({
  "X-RapidAPI-Host": "",
  "X-RapidAPI-Key": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * X-RapidAPI-Host **required** `string`
  * X-RapidAPI-Key **required** `string`
  * text **required** `string`: text

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
