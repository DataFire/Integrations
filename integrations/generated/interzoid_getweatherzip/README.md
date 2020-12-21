# @datafire/interzoid_getweatherzip

Client library for Interzoid Get Weather By Zip Code API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getweatherzip
```
```js
let interzoid_getweatherzip = require('@datafire/interzoid_getweatherzip').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides current weather information for US Cities, including temperatures, wind speeds, wind direction, relative humidity, and visibility.

## Actions

### getweatherzipcode
Use a US zip code to retrieve current weather information


```js
interzoid_getweatherzip.getweatherzipcode({
  "license": "",
  "zip": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * zip **required** `string`: Zip code for weather information

#### Output
* output `object`
  * City `string`
  * Code `string`
  * Credits `string`
  * RelativeHumidity `string`
  * State `string`
  * TempC `string`
  * TempF `string`
  * VisibilityMiles `string`
  * Weather `string`
  * WindDir `string`
  * WindMPH `string`



## Definitions

*This integration has no definitions*
