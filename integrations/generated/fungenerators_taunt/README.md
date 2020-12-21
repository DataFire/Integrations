# @datafire/fungenerators_taunt

Client library for Taunt as a service

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_taunt
```
```js
let fungenerators_taunt = require('@datafire/fungenerators_taunt').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Fungenerators taunt generation API generates random taunts / insults,  relevant to the given category. Many categories are supported and new ones are added very frequently. [Click here to subscribe](http://fungenerators.com/api/taunt/)


## Actions

### taunt.categories.get
Get available taunt generation categories.


```js
fungenerators_taunt.taunt.categories.get({}, context)
```

#### Input
* input `object`
  * start `integer`: start
  * limit `integer`: limit

#### Output
*Output schema unknown*

### taunt.generate.get
Generated taunts in the given category


```js
fungenerators_taunt.taunt.generate.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: Category to generator taunt from
  * limit `integer`: Limit. Controls number of taunts generated. Max of 5-10 based on the plan

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
