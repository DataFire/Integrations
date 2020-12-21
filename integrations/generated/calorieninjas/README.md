# @datafire/calorieninjas

Client library for CalorieNinjas

## Installation and Usage
```bash
npm install --save @datafire/calorieninjas
```
```js
let calorieninjas = require('@datafire/calorieninjas').create({
  "x-api-key": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Natural language nutrition API to extract nutrition data from any text.

## Actions

### v1.nutrition.get
Returns a list of food item nutrition facts extracted from an input string containing food and beverage words. 


```js
calorieninjas.v1.nutrition.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Input query containing food and/or beverage words.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
