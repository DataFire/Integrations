# @datafire/interzoid_getweathercity

Client library for Interzoid Get Weather City API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getweathercity
```
```js
let interzoid_getweathercity = require('@datafire/interzoid_getweathercity').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides current weather information for US Cities, including temperatures, wind speeds, wind direction, relative humidity, and visibility.

## Actions

### getweather
Use city and state to retrieve current US weather information.


```js
interzoid_getweathercity.getweather({
  "license": "",
  "city": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * city **required** `string`: City for weather information
  * state **required** `string`: State for weather information

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
