# @datafire/interzoid_getglobaltime

Client library for Interzoid Get Global Time API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getglobaltime
```
```js
let interzoid_getglobaltime = require('@datafire/interzoid_getglobaltime').create();

.then(data => {
  console.log(data);
});
```

## Description

This API retrieves the current time for a city or geographic location around the globe.

## Actions

### getglobaltime
Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)


```js
interzoid_getglobaltime.getglobaltime({
  "license": "",
  "locale": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * locale **required** `string`: Geographic locale to get the current time for

#### Output
* output `object`
  * ClockTime `string`
  * Code `string`
  * Credits `string`
  * CurrentDate `string`
  * CurrentTime `string`
  * Day `string`
  * Hour `string`
  * Locale `string`
  * Minute `string`
  * Month `string`
  * MonthNumber `string`
  * Second `string`
  * TimeStamp `string`
  * Weekday `string`
  * Year `string`
  * Zone `string`



## Definitions

*This integration has no definitions*
