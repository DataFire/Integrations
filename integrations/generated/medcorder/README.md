# @datafire/medcorder

Client library for Medcorder Nearby Doctor API

## Installation and Usage
```bash
npm install --save @datafire/medcorder
```
```js
let medcorder = require('@datafire/medcorder').create();

.then(data => {
  console.log(data);
});
```

## Description

Returns doctors near a client given a lat/lon and autocomplete text.

## Actions

### doctors
Fetch a list of nearby medical providers


```js
medcorder.doctors({}, context)
```

#### Input
* input `object`
  * search `string`: The search text so far for autocomplete
  * latitude `number`: The latitude of the client, around which to search
  * longitude `number`: The longitude of the client, around which to search
  * limit `integer`: The number of results desired

#### Output
* output `array`
  * items [doctor](#doctor)



## Definitions

### doctor
* doctor `object`
  * address `string`
  * address2 `string`
  * city `string`
  * county `string`
  * distance `number`
  * email `string`
  * first_name `string`
  * full_name `string`
  * gender `string`
  * last_name `string`
  * latitude `number`
  * longitude `number`
  * specialty `string`
  * state `string`
  * title `string`
  * website `string`
  * zip `string`


