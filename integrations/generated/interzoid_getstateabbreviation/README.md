# @datafire/interzoid_getstateabbreviation

Client library for Interzoid State Data Standardization API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getstateabbreviation
```
```js
let interzoid_getstateabbreviation = require('@datafire/interzoid_getstateabbreviation').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides the two-letter state abbreviation (or the province abbreviation for Canada) for the purposes of standardizing state name data, improving query results, analytics, and data merging.

## Actions

### getstateabbreviation
Gets a two-letter abbreviation for a state or province given a permutation of state or province data.


```js
interzoid_getstateabbreviation.getstateabbreviation({
  "license": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * state **required** `string`: State (or province) name from which to retrieve the two letter abbreviation.

#### Output
* output `object`
  * Abbreviation `string`
  * Code `string`
  * Credits `string`
  * State `string`



## Definitions

*This integration has no definitions*
