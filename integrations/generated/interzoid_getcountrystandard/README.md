# @datafire/interzoid_getcountrystandard

Client library for Interzoid Country Data Standardization API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getcountrystandard
```
```js
let interzoid_getcountrystandard = require('@datafire/interzoid_getcountrystandard').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a standard for country name for the purposes of standardizing country name data, improving query results, analytics, and data merging.

## Actions

### getcountrystandard
Gets a pre-selected country name standard for various permutations of a given country name.


```js
interzoid_getcountrystandard.getcountrystandard({
  "license": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * country **required** `string`: Country name from which to retrieve the standardized version

#### Output
* output `object`
  * Code `string`
  * CountryStandard `string`
  * Credits `string`



## Definitions

*This integration has no definitions*
