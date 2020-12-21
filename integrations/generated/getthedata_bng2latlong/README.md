# @datafire/getthedata_bng2latlong

Client library for bng2latlong

## Installation and Usage
```bash
npm install --save @datafire/getthedata_bng2latlong
```
```js
let getthedata_bng2latlong = require('@datafire/getthedata_bng2latlong').create();

.then(data => {
  console.log(data);
});
```

## Description

Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude.

## Actions

### bng2latlong.easting.northing.get
Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
#### A successful request returns the following fields:
* status - this will be `ok`
* easting - the easting provided in the request
* northing - the northing provided in the request
* latitude - the latitude of the converted coordinates
* longitude - the longitude of the converted coordinates
#### An unsuccessful request returns the following fields:
* status - this will be `error`
* error - an error message



```js
getthedata_bng2latlong.bng2latlong.easting.northing.get({
  "easting": 0,
  "northing": 0
}, context)
```

#### Input
* input `object`
  * easting **required** `integer`: An OSGB36 (British National Grid) easting.
  * northing **required** `integer`: An OSGB36 (British National Grid) northing.

#### Output
* output `object`
  * easting `integer`
  * error `string`
  * latitude `number`
  * longitude `number`
  * northing `integer`
  * status `string` (values: ok, error)



## Definitions

*This integration has no definitions*
