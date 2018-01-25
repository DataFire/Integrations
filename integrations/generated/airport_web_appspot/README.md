# @datafire/airport_web_appspot

Client library for airportsapi

## Installation and Usage
```bash
npm install --save @datafire/airport_web_appspot
```
```js
let airport_web_appspot = require('@datafire/airport_web_appspot').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

airport_web_appspot.AirportApi_getAirport({
  "icao_code": ""
}).then(data => {
  console.log(data);
});
```

## Description

Get name and website-URL for airports by ICAO code. Covered airports are mostly in Germany.

## Actions

### AirportApi_getAirport



```js
airport_web_appspot.AirportApi_getAirport({
  "icao_code": ""
}, context)
```

#### Input
* input `object`
  * icao_code **required** `string`

#### Output
* output [ApiEndpointsAirportResponse](#apiendpointsairportresponse)



## Definitions

### ApiEndpointsAirportResponse
* ApiEndpointsAirportResponse `object`
  * ICAO `string`
  * last_update `string`
  * name `string`
  * url `string`


