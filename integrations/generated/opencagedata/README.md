# @datafire/opencagedata

Client library for OpenCage Geocoder

## Installation and Usage
```bash
npm install --save @datafire/opencagedata
```
```js
let opencagedata = require('@datafire/opencagedata').create();

opencagedata.vversion.format.get({}).then(data => {
  console.log(data);
})
```

## Description

Worldwide forward and reverse geocoding

## Actions

### vversion.format.get
geocode a query


```js
opencagedata.vversion.format.get({
  "version": 0,
  "format": "",
  "q": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * version **required** `integer`: API version.
  * format **required** `string`: format of the response. One of 'json', 'xml' or 'map'.
  * q **required** `string`: string or lat,lng to be geocoded.
  * key **required** `string`: an application key.
  * abbrv `boolean`: when true we attempt to abbreviate the formatted field in the response.
  * add_request `boolean`: if true the request is included in the response.
  * bounds `string`: four coordinate points forming the south-west and north-east corners of a bounding box (min long, min lat, max long, max lat).
  * countrycode `string`: two letter code ISO 3166-1 Alpha 2 code to limit results to that country.
  * jsonp `string`: wraps the returned JSON with a function name.
  * language `string`: an IETF format language code (ex: 'es' or 'pt-BR').
  * limit `integer`: maximum number of results to return. Default is 10. Maximum is 100.
  * min_confidence `integer`: integer from 1-10. Only results with at least this confidence are returned.
  * no_annotations `boolean`: when true annotations are not added to results.
  * no_dedupe `boolean`: when true results are not deduplicated.
  * no_record `boolean`: when true query content is not logged.
  * pretty `boolean`: when true results are pretty printed. Useful for debugging.

#### Output
* output [Response](#response)



## Definitions

### LatLng
* LatLng `object`
  * lat `number`
  * lng `number`

### Response
* Response `object`
  * documentation `string`
  * licenses `array`
    * items `object`
      * name `string`
      * url `string`
  * rate `object`
    * limit `integer`
    * remaining `integer`
    * reset `integer`
  * results `array`
    * items `object`
      * annotations `object`
      * bounds `object`
        * northeast [LatLng](#latlng)
        * southwest [LatLng](#latlng)
      * components `object`
      * confidence `integer`
      * formatted `string`
      * geometry [LatLng](#latlng)
  * status `object`
    * code `integer`
    * message `string`
  * stay_informed `object`
    * blog `string`
    * twitter `string`
  * thanks `string`
  * timestamp `object`
    * created_http `string`
    * created_unix `integer`
  * total_results `integer`


