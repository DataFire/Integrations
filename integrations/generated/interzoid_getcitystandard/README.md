# @datafire/interzoid_getcitystandard

Client library for Interzoid City Data Standardization API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getcitystandard
```
```js
let interzoid_getcitystandard = require('@datafire/interzoid_getcitystandard').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a standard for US and international cities for the purposes of standardizing city name data, improving query results, analytics, and data merging.

## Actions

### getcitystandard
Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.


```js
interzoid_getcitystandard.getcitystandard({
  "license": "",
  "city": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * city **required** `string`: City name from which to retrieve the standardized version

#### Output
* output `object`
  * CityStandard `string`
  * Code `string`
  * Credits `string`



## Definitions

*This integration has no definitions*
