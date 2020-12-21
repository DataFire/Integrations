# @datafire/stormglass

Client library for Storm Glass Marine Weather

## Installation and Usage
```bash
npm install --save @datafire/stormglass
```
```js
let stormglass = require('@datafire/stormglass').create({
  authenticationToken: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Global marine weather data from multiple sources in one single API with hourly resolution. Get your API key by visiting the Storm Glass web site.

## Actions

### getForecast
Get forecast info for the given coordinates. For every hour and property, you will get a list of weather sources and their values.


```js
stormglass.getForecast({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: The latitude for a location. Valid input is a number between -90 and 90.
  * lng **required** `number`: The longitude for a location. Valid input is a number between -180 and 180.

#### Output
* output [Forecast](#forecast)



## Definitions

### Forecast
* Forecast `object`
  * hours `array`: Every hour with forecast data is represented with an object in this array
    * items `object`: Hourly forecast information
      * airTemperature `array`
        * items `object`: Air temperature given in celsius
          * source `string`
          * value `string`
      * swellDirection `array`
        * items `object`: Direction given in degrees where 0 goes from North to South
          * source `string`
          * value `string`
      * swellHeight `array`
        * items `object`: Swell height given in meters
          * source `string`
          * value `string`
      * swellPeriod `array`
        * items `object`: Swell period given in seconds
          * source `string`
          * value `string`
      * time `string`: Timestamp in utc for the hour represented
      * waterTemperature `array`
        * items `object`: Water temperature given in celsius
          * source `string`
          * value `string`
      * waveDirection `array`
        * items `object`: Direction given in degrees where 0 goes from North to South
          * source `string`
          * value `number`
      * waveHeight `array`
        * items `object`: Wave height given in metres
          * source `string`
          * value `string`
      * wavePeriod `array`
        * items `object`
          * source `string`
          * value `string`
      * windDirection `array`
        * items `object`: Wind direction given in degrees where 0 goes from North to South
          * source `string`
          * value `string`
      * windSpeed `array`
        * items `object`: Wind speed given in meters per second
          * source `string`
          * value `string`
  * meta `object`
    * dailyQuota `integer`: The number of successful requests you can do on one day
    * lat `number`: The latitude the response is showing forecast data for
    * lng `number`: The longitude the response is showing forecast data for
    * requestCount `integer`: The number of successful requests made this day.


