# @datafire/bethmardutho

Client library for SEDRA IV API

## Installation and Usage
```bash
npm install --save @datafire/bethmardutho
```
```js
let bethmardutho = require('@datafire/bethmardutho').create();

.then(data => {
  console.log(data);
});
```

## Description

The SEDRA API is documented in **OpenAPI format** and uses [ReDoc](https://github.com/Rebilly/ReDoc) for documentation.
# Introduction
This document describes the JSON API for the Syriac Electronic Data Research Archive (SEDRA). The SEDRA project is a linguistic and literary database of Syriac language and literature focusing on providing electronic access to the corpus of Syriac lexicons with linguistic information added to each entry in those lexicons. The API is a mechanism to provide the linguistic information stored in SEDRA to a broader audience.
Additionally there is a XML API for Syriac words which conforms to a prototype Semitic Languages schema which can be found in the XSD file https://sedra.bethmardutho.org/api/semiticLanguages.xsd.
# Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with the [W3C spec](https://www.w3.org/TR/cors/) and allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.
# Samples
Explaining how to lookup words in the SEDRA API is complex and would clutter the API description. For that reason we have chosen to give the explanation of how to lookup words in its own section. SEDRA can lookup words by the SEDRA word Id. However, it will often be the case that the consumer of information provided by the SEDRA API does not know the SEDRA word Id. It is for that reason that the SEDRA API provides a method to lookup words by the Syriac text. But that process is complicated by the nature of Syriac writing. So the SEDRA API will lookup words for consonantal, partially vocalized, and fully vocalized Syriac text. Using the word Id will provide the most accurate results as the exact word will be returned. Fully vocalized text will provide the next most accurate result. The least accurate results will be returned by partially vocalized and consonantal Syriac words in that order. Following are some samples to help understand how this works.
1. By Word Id [30862](https://sedra.bethmardutho.org/api/word/30862.json)
2. By fully vocalized Syriac word [ܐܰܒܳܪܳܐ](https://sedra.bethmardutho.org/api/word/ܐܰܒܳܪܳܐ.json)
3. By partially vocalized Syriac word [ܐܶܒܪܐ](https://sedra.bethmardutho.org/api/word/ܐܶܒܪܐ.json)
4. By consonantal Syriac word [ܐܒܪܐ](https://sedra.bethmardutho.org/api/word/ܐܒܪܐ.json).

## Actions

### lexeme.id.get
Returns linguistic information for a Syriac lexeme.


```js
bethmardutho.lexeme.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Id of a lexeme from the Sedra database.

#### Output
* output `object`
  * categoryType `string` (values: adjective, adjective of place, adverb, adverb ending with aiyt, denominative, idiom, noun, numeral, participle adjective, particle, pronoun, proper noun, substantive, verb, proper noun (individual&#039;s name; e.g. Ephrem), proper noun (place name), proper noun (nations; e.g. Huns), demonym, preposition, interjection): The category of the Syriac lexeme or word.
  * etymologies [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/glosses](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/glosses)
  * glosses [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/glosses](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/glosses)
  * kaylo [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/kaylo](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/kaylo)
  * lexeme **required** [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/word](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/word)
  * root [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/word](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/word)
  * syriac **required** `string`: Consonantal form of this Syriac lexeme.
  * words `array`
    * items [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/word](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/word)

### word.id.get
Returns an array of linguistic information for every word that matches the Syriac word. Adjustment is made if the Syriac word is consonantal, partially, or fully vocalized.


```js
bethmardutho.word.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameters must contain either the Id of a word from the Sedra database or a Syriac word in the unicode character set. When the id parameter is a Syriac word it may be consonantal, partially vocalized, or fully vocalized. Fully vocalized Syriac words will have less false positive results than partially vocalized or consonantal Syriac words. When id is the Id of a word from the SEDRA database then that word will be the only word in the result.

#### Output
* output `array`
  * items `object`
    * eastern `string`: Eastern vocalized form of this Syriac word.
    * gender `string` (values: common, feminine, masculine): The gender of a Syriac adjective, noun, numeral, pronoun, suffix, or verb.
    * glosses `object`: A hashmap with language name as a key and and array of text strings in that language
    * hasSeyame `boolean`: Indicator to the presence of a Seyame in this word.
    * isEnclitic `boolean`: Indicator if this Syriac word is an enclitic.
    * isLexicalForm `boolean`: Indicator if this Syriac word is the lexeme form.
    * isTheoretical `boolean`: Indicator if this Syriac word is theoretical or it is attested.
    * kaylo `string` (values: ettaphʿal (pass. of Taphʿel), IVa, IVp, pʿal, paʿʿel, shaphʿel, palpel, ethpaʿʿal, aphʿel, ettaphʿal, saphʿel, ethpʿel, p, ethp, ethpalpal, payʿel, ethpayʿal, ethparʿal, eshtaphʿal, ethpawʿal, pawʿel, palpal, pamʿel, taphʿel, parʿel, estaphʿal, ethpaʿli, paʿli): The Kaylo or conjugation of a Syriac verb.
    * lexeme **required** [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/word](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/word)
    * number `string` (values: plural, singular): The number of a Syriac adjective, noun, suffix, or verb.
    * person `string` (values: first, second, third): The person of a Syriac verb.
    * state `string` (values: absolute, emphatic, construct): The state of a Syriac substantive or adjective.
    * suffixGender [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/gender](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/gender)
    * suffixNumber [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/number](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/number)
    * suffixPerson [#/paths/~1word~1%7Bid%7D/get/responses/200/schema/items/properties/person](##/paths/~1word~1%7bid%7d/get/responses/200/schema/items/properties/person)
    * suffixType `string` (values: contraction, suffix): The type of suffix attached to the Syriac word.
    * syriac **required** `string`: Consonantal form of this Syriac word.
    * tense `string` (values: active participle, imperative, imperfect, infinitive, participle, passive participle, perfect): The tense of a Syriac verb.
    * western `string`: Western vocalized form of this Syriac word.
    * word **required** `object`
      * id **required** `integer`: The SEDRA 'Id' used for referencing this object.
      * uri **required** `string`: Full URI of the SEDRA API reference for this object.



## Definitions

*This integration has no definitions*
