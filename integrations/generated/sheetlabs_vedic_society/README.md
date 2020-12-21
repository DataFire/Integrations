# @datafire/sheetlabs_vedic_society

Client library for vs API

## Installation and Usage
```bash
npm install --save @datafire/sheetlabs_vedic_society
```
```js
let sheetlabs_vedic_society = require('@datafire/sheetlabs_vedic_society').create();

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
This API returns data regarding almost all nouns in vedic literature. The results are JSON objects that contain the word transliterated to the Roman script, the word in the Nagari script, the meaning of the word, and the category the word belongs to. Proper nouns are not included (yet).

The API uses the Swagger 2.0 specification.

# Authentication
This is an open API.

# Rate limits
Total monthly calls are limited to 10,000.


## Actions

### .get
Fetch all entries in this API


```js
sheetlabs_vedic_society..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### category.get
Fetch all words in a specific category


```js
sheetlabs_vedic_society.category.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string` (values: grass, plant, tree, animal, bird, cattle, fish, insect, snake, worm, building, chariot, food, grain, metal, object, ship, weapon, war, number, distance, time, weight, mountain, place, river, astronomy, disease, literature, medicine, poison, subject, dicing, games, music, clothing, hair, ornament, law, morals, agriculture, caste, family, occupation, priest, royalty, trade, tribe): Click to select from a list

#### Output
*Output schema unknown*

### description.get
Fetch all meanings that contain a specific English string


```js
sheetlabs_vedic_society.description.get({
  "description": ""
}, context)
```

#### Input
* input `object`
  * description **required** `string`: The string you are looking for in the word meaning, for example, chariot. Wildcards are allowed, for example, char\*.

#### Output
*Output schema unknown*

### word.get
Fetch the meaning of a specific Sanskrit word


```js
sheetlabs_vedic_society.word.get({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: The Sanskrit word transliterated into English, for example, rajan. Wildcards are allowed, for example, \*aj\*.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
