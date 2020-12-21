# @datafire/openuv

Client library for OpenUV - Global Real-Time UV Index Forecast API

## Installation and Usage
```bash
npm install --save @datafire/openuv
```
```js
let openuv = require('@datafire/openuv').create();

.then(data => {
  console.log(data);
});
```

## Description

The missing minimalistic JSON real-time UV Index API for awesome Developers, Innovators and Smart Home Enthusiasts

## Actions

### forecast.get
Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.


```js
openuv.forecast.get({
  "lat": 0,
  "lng": 0,
  "x-access-token": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: latitude, from -90.00 to 90.00
  * lng **required** `number`: longitude, from -180.00 to 180.00
  * alt `number`: Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
  * ozone `number`: Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
  * dt `string`: UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.
  * x-access-token **required** `string`: This header is used to send data that contains your OpenUV API key

#### Output
* output `array`
  * items [forecastResult](#forecastresult)

### protection.get
Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.


```js
openuv.protection.get({
  "lat": 0,
  "lng": 0,
  "from": 0,
  "to": 0,
  "x-access-token": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: latitude, from -90.00 to 90.00
  * lng **required** `number`: longitude, from -180.00 to 180.00
  * from **required** `number`: UV Index from value for protection datetime lookup. From 0 to 40.
  * to **required** `number`: UV Index to value for protection datetime lookup. From 0 to 40.
  * alt `number`: Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
  * ozone `number`: Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
  * x-access-token **required** `string`: This header is used to send data that contains your OpenUV API key

#### Output
* output [protectionResult](#protectionresult)

### uv.get
Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.


```js
openuv.uv.get({
  "lat": 0,
  "lng": 0,
  "x-access-token": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: latitude, from -90.00 to 90.00
  * lng **required** `number`: longitude, from -180.00 to 180.00
  * alt `number`: Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
  * ozone `number`: Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
  * dt `string`: UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.
  * x-access-token **required** `string`: This header is used to send data that contains your OpenUV API key

#### Output
* output [uvIndexResult](#uvindexresult)



## Definitions

### Error
* Error `object`
  * error **required** `string`

### forecast
* forecast `object`
  * uv **required** `number`
  * uv_time **required** `string`

### forecastResult
* result `array`
  * items [forecast](#forecast)

### protectionResult
* result `object`
  * ozone **required** `number`
  * ozone_time **required** `string`
  * uv **required** `number`
  * uv_max **required** `number`
  * uv_max_time **required** `string`
  * uv_time **required** `string`

### uvIndexResult
* result `object`
  * from_time **required** `string`
  * from_uv **required** `number`
  * to_time **required** `string`
  * to_uv **required** `number`


