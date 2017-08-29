# @datafire/oceandrivers

Client library for ODWeather

## Installation and Usage
```bash
npm install --save datafire @datafire/oceandrivers
```

```js
let datafire = require('datafire');
let oceandrivers = require('@datafire/oceandrivers').create();

oceandrivers.compareStation({}).then(data => {
  console.log(data);
})
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

#### Parameters
* stationName (string) **required** - Weather station to compare, values: cnareanl|cmsap|boyaenderrocat|areopuertopalma

### getAemetStation
Get data from the aemet stations<br/>None


```js
oceandrivers.getAemetStation({
  "stationName": "",
  "period": ""
}, context)
```

#### Parameters
* stationName (string) **required** - station name currently: aeropuertopalma | caboblanco 
* period (string) **required** - Period of time to get the data. Options: lastdata lastday

### getForecastPoints
Get forecast points of a yatchclub<br/>None


```js
oceandrivers.getForecastPoints({
  "yatchclubid": "",
  "language": ""
}, context)
```

#### Parameters
* yatchclubid (string) **required** - base URL for the the
* language (string) **required**

### getForecastTimeSeries
Get timeseries forecast information<br/>None


```js
oceandrivers.getForecastTimeSeries({
  "latitude": 0,
  "longitude": 0,
  "weather": ""
}, context)
```

#### Parameters
* latitude (number) **required** - latitude for the forecast
* longitude (number) **required** - longitude for the forecast
* inittime (string) - initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
* endtime (string) - end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
* days (integer) - optional number of days in string. Will be added to init forecast date
* hours (integer) - optional number of hours in string. Will be added to init forecast date
* weather (string) **required** -  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
* wave (string) -  Comma separated values for the wave parameteres height,direction,period
* entryid (string) - Direct file I want to extract

### getForecastTimeSeriesWrf
Get timeseries forecast information<br/>None


```js
oceandrivers.getForecastTimeSeriesWrf({
  "latitude": 0,
  "longitude": 0,
  "weather": ""
}, context)
```

#### Parameters
* latitude (number) **required** - latitude for the forecast
* longitude (number) **required** - longitude for the forecast
* inittime (string) - initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
* endtime (string) - end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
* days (integer) - optional number of days in string. Will be added to init forecast date
* hours (integer) - optional number of hours in string. Will be added to init forecast date
* weather (string) **required** -  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
* wave (string) -  Comma separated values for the wave parameteres height,direction,period
* entryid (string) - Direct file I want to extract

### getSocibWeatherStation
Get data from the socib bahia de palma buoy<br/>None


```js
oceandrivers.getSocibWeatherStation({
  "stationName": "",
  "period": ""
}, context)
```

#### Parameters
* stationName (string) **required** - station name currently: boyaenderrocat | playadepalma
* period (string) **required** - Period of time to get the data. Options: lastdata lasthour lastday

### getWeatherDisplay
Get data from the weather display software<br/>None


```js
oceandrivers.getWeatherDisplay({
  "stationName": "",
  "period": ""
}, context)
```

#### Parameters
* stationName (string) **required** - currently: 'cnarenal'|'campastilla' | 'cncg'
* period (string) **required** - Period of time to get the data latestdata|latesthour|latestday|dailylog

### getWebCams
Get forecast and realtime information for known points<br/>None


```js
oceandrivers.getWebCams(null, context)
```


