# @datafire/fungenerators_namegen

Client library for Name Generation API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_namegen
```
```js
let fungenerators_namegen = require('@datafire/fungenerators_namegen').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Fungenerators name generation API generates random names relevant to the given category. Lots of categories are supported with many variations supported. [Click here to subscribe](http://fungenerators.com/api/namegen/)


## Actions

### name.categories.get
Get available name generation categories.


```js
fungenerators_namegen.name.categories.get({}, context)
```

#### Input
* input `object`
  * start `integer`: start
  * limit `integer`: limit

#### Output
*Output schema unknown*

### name.generate.get
Generated names in the given category


```js
fungenerators_namegen.name.generate.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: Category to generator names from
  * suggest `string`: Suggestion string if supported by this category generator.
  * start `integer`: start. Controls pagination. Relevant only if suggestion is supported
  * limit `integer`: limit. Controls pagination limit. Relevant only if suggestion is supported
  * variation `string`: Variation if supported ( male/female/any )

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
