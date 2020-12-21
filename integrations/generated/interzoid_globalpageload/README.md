# @datafire/interzoid_globalpageload

Client library for Interzoid Global Page Load Performance API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_globalpageload
```
```js
let interzoid_globalpageload = require('@datafire/interzoid_globalpageload').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a timed, browser-simulated page load function (or a measured API call) from the specified geography using a server from that geography.

## Actions

### globalpageload
Gets page load performance from a specified geography



```js
interzoid_globalpageload.globalpageload({
  "license": "",
  "origin": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * origin **required** `string`: Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)
  * url **required** `string`: specific URL to perform load test time

#### Output
* output `object`
  * Code `string`
  * Contents `string`
  * Credits `string`
  * Origin `string`
  * PageResponseStatus `string`
  * Seconds `string`



## Definitions

*This integration has no definitions*
