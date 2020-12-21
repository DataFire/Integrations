# @datafire/interzoid_getzipinfo

Client library for Interzoid Zip Code Detailed Info API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getzipinfo
```
```js
let interzoid_getzipinfo = require('@datafire/interzoid_getzipinfo').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides detailed information for a given zip code, including city, state, latitude, longitude, area size, and various population demographics.

## Actions

### getzipcodeinfo
For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.


```js
interzoid_getzipinfo.getzipcodeinfo({
  "license": "",
  "zip": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * zip **required** `string`: Zip code to retrieve detailed information

#### Output
* output `object`
  * AreaSquareMiles `string`
  * City `string`
  * Code `string`
  * Credits `string`
  * ElderlyHouseholdPercent `string`
  * FarmerHouseholdPercent `string`
  * IncomePercent100k `string`
  * IncomePercent200k `string`
  * IncomePercent50k `string`
  * Latitude `string`
  * Longitude `string`
  * MarriedHouseholdPercent `string`
  * Population `string`
  * State `string`
  * ZipCode `string`



## Definitions

*This integration has no definitions*
