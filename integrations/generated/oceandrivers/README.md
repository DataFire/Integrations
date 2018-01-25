# @datafire/oceandrivers

Client library for ODWeather

## Installation and Usage
```bash
npm install --save @datafire/oceandrivers
```
```js
let oceandrivers = require('@datafire/oceandrivers').create();

oceandrivers.compareStation({
  "stationName": ""
}).then(data => {
  console.log(data);
});
```

## Description

This is the api to access the ODWeather API information

## Actions

### compareStation
Get forecast and realtime information for known points<br/>None


```js
oceandrivers.compareStation({
  "stationName": ""
}, context)
```

#### Input
* input `object`
  * stationName **required** `string`: Weather station to compare, values: cnareanl|cmsap|boyaenderrocat|areopuertopalma

#### Output
*Output schema unknown*

### getAemetStation
Get data from the aemet stations<br/>None


```js
oceandrivers.getAemetStation({
  "stationName": "",
  "period": ""
}, context)
```

#### Input
* input `object`
  * stationName **required** `string`: station name currently: aeropuertopalma | caboblanco 
  * period **required** `string`: Period of time to get the data. Options: lastdata lastday

#### Output
*Output schema unknown*

### getForecastPoints
Get forecast points of a yatchclub<br/>None


```js
oceandrivers.getForecastPoints({
  "yatchclubid": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * yatchclubid **required** `string`: base URL for the the
  * language **required** `string`

#### Output
*Output schema unknown*

### getForecastTimeSeries
Get timeseries forecast information<br/>None


```js
oceandrivers.getForecastTimeSeries({
  "latitude": 0,
  "longitude": 0,
  "weather": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: latitude for the forecast
  * longitude **required** `number`: longitude for the forecast
  * inittime `string`: initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
  * endtime `string`: end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
  * days `integer`: optional number of days in string. Will be added to init forecast date
  * hours `integer`: optional number of hours in string. Will be added to init forecast date
  * weather **required** `string`:  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
  * wave `string`:  Comma separated values for the wave parameteres height,direction,period
  * entryid `string`: Direct file I want to extract

#### Output
*Output schema unknown*

### getForecastTimeSeriesWrf
Get timeseries forecast information<br/>None


```js
oceandrivers.getForecastTimeSeriesWrf({
  "latitude": 0,
  "longitude": 0,
  "weather": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: latitude for the forecast
  * longitude **required** `number`: longitude for the forecast
  * inittime `string`: initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
  * endtime `string`: end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
  * days `integer`: optional number of days in string. Will be added to init forecast date
  * hours `integer`: optional number of hours in string. Will be added to init forecast date
  * weather **required** `string`:  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
  * wave `string`:  Comma separated values for the wave parameteres height,direction,period
  * entryid `string`: Direct file I want to extract

#### Output
*Output schema unknown*

### getSocibWeatherStation
Get data from the socib bahia de palma buoy<br/>None


```js
oceandrivers.getSocibWeatherStation({
  "stationName": "",
  "period": ""
}, context)
```

#### Input
* input `object`
  * stationName **required** `string`: station name currently: boyaenderrocat | playadepalma
  * period **required** `string`: Period of time to get the data. Options: lastdata lasthour lastday

#### Output
*Output schema unknown*

### getWeatherDisplay
Get data from the weather display software<br/>None


```js
oceandrivers.getWeatherDisplay({
  "stationName": "",
  "period": ""
}, context)
```

#### Input
* input `object`
  * stationName **required** `string`: currently: 'cnarenal'|'campastilla' | 'cncg'
  * period **required** `string`: Period of time to get the data latestdata|latesthour|latestday|dailylog

#### Output
*Output schema unknown*

### getWebCams
Get forecast and realtime information for known points<br/>None


```js
oceandrivers.getWebCams(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
