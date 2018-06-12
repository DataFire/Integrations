# @datafire/transavia

Client library for Airports API v2

## Installation and Usage
```bash
npm install --save @datafire/transavia
```
```js
let transavia = require('@datafire/transavia').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

transavia.58d8bcb8a9e6240e200cff27({}).then(data => {
  console.log(data);
});
```

## Description

Returns all airports

## Actions

### 58d8bcb7a9e6240e200cff24
Retrieve all airports.


```js
transavia.58d8bcb7a9e6240e200cff24(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AirportDtoArray](#airportdtoarray)

### 58d8bcb8a9e6240e200cff26
Retrieve airports by country code.


```js
transavia.58d8bcb8a9e6240e200cff26({
  "countryCode": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Comma-separated list of country codes (2-character ISO 3166-1). More than 3 country codes is not allowed.

#### Output
* output [AirportDtoArray](#airportdtoarray)

### 58d8bcb8a9e6240e200cff27
Retrieve nearest airports by geo coordinates (latitude/longitude).


```js
transavia.58d8bcb8a9e6240e200cff27({}, context)
```

#### Input
* input `object`
  * latitude `string`: Latitude in decimals, lower than -90.0 and higher than 90.0 is not allowed.
  * longitude `string`: Longitude in decimals, lower than -180.0 and higher than 180.0 is not allowed.
  * maxDistanceInKm `string`: Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied.
  * limit `string`: Limits the result, lower than 0 is not allowed. If not set, the result is not limited.

#### Output
* output [NearestAirportDtoArray](#nearestairportdtoarray)

### 58d8bcb8a9e6240e200cff28
Retrieve nearest airports by station id.


```js
transavia.58d8bcb8a9e6240e200cff28({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Airport (IATA code) to search nearest airports for.
  * maxDistanceInKm `string`: Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied.
  * limit `string`: Limits the result, lower than 0 is not allowed. If not set, the result is not limited.

#### Output
* output [NearestAirportDtoArray](#nearestairportdtoarray)

### 58d8bcb7a9e6240e200cff25
Retrieve airport by id.


```js
transavia.58d8bcb7a9e6240e200cff25({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Airport code (3-character IATA code).

#### Output
* output [AirportDetailsDto](#airportdetailsdto)



## Definitions

### AirportDetailsDto
* AirportDetailsDto `object`
  * city `string`: City where the airport is located.
  * country [Country](#country)
  * geoCoordinates [GeoCoordinates](#geocoordinates)
  * id `string`: Unique identifier.
  * inboundRoutes [Link](#link)
  * name `string`: Name of the airport.
  * outboundRoutes [Link](#link)

### AirportDto
* AirportDto `object`
  * city `string`: City where the airport is located.
  * country [Country](#country)
  * geoCoordinates [GeoCoordinates](#geocoordinates)
  * id `string`: Unique identifier.
  * name `string`: Name of the airport.
  * self [Link](#link)

### AirportDtoArray
* AirportDtoArray `array`
  * items [AirportDto](#airportdto)

### BadRequestResponse
* BadRequestResponse `object`
  * errorMessages `array`
    * items `string`

### Country
* Country `object`
  * code `string`
  * name `string`

### GeoCoordinates
* GeoCoordinates `object`
  * latitude `number`
  * longitude `number`

### InternalServerErrorResponse
* InternalServerErrorResponse `object`
  * errorMessage `string`
  * referenceId `string`

### Link
* Link `object`
  * href `string`

### NearestAirportDto
* NearestAirportDto `object`
  * city `string`: City where the airport is located.
  * country [Country](#country)
  * distanceInKm `integer`: Distance in kilometers.
  * geoCoordinates [GeoCoordinates](#geocoordinates)
  * id `string`: Unique identifier.
  * name `string`: Name of the airport.
  * self [Link](#link)

### NearestAirportDtoArray
* NearestAirportDtoArray `array`
  * items [NearestAirportDto](#nearestairportdto)


