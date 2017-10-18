# @datafire/airport_web_appspot

Client library for airportsapi

## Installation and Usage
```bash
npm install --save datafire @datafire/airport_web_appspot
```

```js
let datafire = require('datafire');
let airport_web_appspot = require('@datafire/airport_web_appspot').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

airport_web_appspot.AirportApi_getAirport({}).then(data => {
  console.log(data);
})
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

#### Parameters
* icao_code (string) **required**

