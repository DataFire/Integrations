# @datafire/quicksold_location

Client library for Quicksold REST API

## Installation and Usage
```bash
npm install --save @datafire/quicksold_location
```
```js
let quicksold_location = require('@datafire/quicksold_location').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### wgs84ToOsgb36UsingGET
wgs84ToOsgb36


```js
quicksold_location.wgs84ToOsgb36UsingGET({
  "latitude": "",
  "longitude": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `string`: latitude
  * longitude **required** `string`: longitude

#### Output
* output [ApiResponse](#apiresponse)



## Definitions

### ApiResponse
* ApiResponse `object`
  * data `object`
  * error `string`
  * errors `object`
  * message `string`
  * path `string`
  * status `integer`
  * timestamp `integer`


