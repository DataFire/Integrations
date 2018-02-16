# @datafire/wordassociations

Client library for Word Associations

## Installation and Usage
```bash
npm install --save @datafire/wordassociations
```
```js
let wordassociations = require('@datafire/wordassociations').create({
  internalApiKey: ""
});

wordassociations.json.search.get({
  "text": [],
  "lang": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Word Associations Network API allows developers to embed the ability to find associations for a word or phrase into their mobile apps or web services. Words are grouped by semantics, meaning, and psychological perception. The Word Associations Network API currently supports English, French, Spanish, German, Italian, Portuguese, and Russian vocabulary. Please [register and subscribe](https://api.wordassociations.net/subscriptions/) to one of available tariff plans to get a valid API key.

## Actions

### json.search.get
Gets associations with the given word or phrase.



```js
wordassociations.json.search.get({
  "text": [],
  "lang": ""
}, context)
```

#### Input
* input `object`
  * text **required** `array`: Word or phrase to find associations with.
  * lang **required** `string` (values: de, en, es, fr, it, pt, ru): Query language. Use language code for the language of the text:
  * type `string` (values: stimulus, response): Type of result.
  * limit `integer`: Maximum number of results to return.
  * pos `array`: Parts of speech to return.
  * indent `string` (values: yes, no): Indentation switch for pretty printing of JSON response.

#### Output
* output [Body](#body)

### json.search.post
Gets associations with the given word or phrase.



```js
wordassociations.json.search.post({
  "text": [],
  "lang": ""
}, context)
```

#### Input
* input `object`
  * text **required** `array`: Word or phrase to find associations with.
  * lang **required** `string` (values: de, en, es, fr, it, pt, ru): Query language. Use language code for the language of the text:
  * type `string` (values: stimulus, response): Type of result.
  * limit `integer`: Maximum number of results to return.
  * pos `array`: Parts of speech to return.
  * indent `string` (values: yes, no): Indentation switch for pretty printing of JSON response.

#### Output
* output [Body](#body)



## Definitions

### Body
* Body `object`
  * code `integer`
  * request [Request](#request)
  * response `array`
    * items [Response](#response)
  * version `string`

### Item
* Item `object`
  * item `string`
  * pos `string`
  * weight `number`

### Request
* Request `object`
  * indent `string`
  * lang `string`
  * limit `integer`
  * pos `string`
  * text `array`
    * items `string`
  * type `string`

### Response
* Response `object`
  * items `array`
    * items [Item](#item)
  * text `string`


