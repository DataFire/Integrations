# @datafire/visualcrossing_weather

Client library for Visual Crossing Weather API

## Installation and Usage
```bash
npm install --save @datafire/visualcrossing_weather
```
```js
let visualcrossing_weather = require('@datafire/visualcrossing_weather').create();

.then(data => {
  console.log(data);
});
```

## Description

Weather Forecast and Historical Weather Observation Data via an convenient, restful API.

## Actions

### VisualCrossingWebServices.rest.services.weatherdata.forecast.get
Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.


```js
visualcrossing_weather.VisualCrossingWebServices.rest.services.weatherdata.forecast.get({}, context)
```

#### Input
* input `object`
  * sendAsDatasource `boolean`
  * allowAsynch `boolean`
  * shortColumnNames `boolean`
  * locations `string`
  * aggregateHours `string`
  * contentType `string`
  * unitGroup `string`
  * key `string`

#### Output
*Output schema unknown*

### VisualCrossingWebServices.rest.services.weatherdata.history.get
The weather history data is suitable for retrieving hourly or daily historical weather records.


```js
visualcrossing_weather.VisualCrossingWebServices.rest.services.weatherdata.history.get({}, context)
```

#### Input
* input `object`
  * maxDistance `string`
  * shortColumnNames `boolean`
  * endDateTime `string`
  * aggregateHours `string`
  * collectStationContributions `boolean`
  * startDateTime `string`
  * maxStations `string`
  * allowAsynch `boolean`
  * locations `string`
  * includeNormals `boolean`
  * contentType `string`
  * unitGroup `string`
  * key `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
