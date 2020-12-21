# @datafire/faretrotter

Client library for Faretrotter Travel API

## Installation and Usage
```bash
npm install --save @datafire/faretrotter
```
```js
let faretrotter = require('@datafire/faretrotter').create({
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Multimodal travel API to return modes of transportation between cities and points of interest.

## Actions

### GET_places
Returns possible modes of transportation between two cities.


```js
faretrotter.GET_places(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PlaceResponse](#placeresponse)

### GET_routes



```js
faretrotter.GET_routes({
  "origin_lat": 0,
  "origin_lng": 0,
  "destination_lat": 0,
  "destination_lng": 0
}, context)
```

#### Input
* input `object`
  * origin_lat **required** `number`
  * origin_lng **required** `number`
  * destination_lat **required** `number`
  * destination_lng **required** `number`

#### Output
* output [RoutesResponse](#routesresponse)



## Definitions

### PlaceResponse
* Place response `object`
  * city **required** `string`
  * country **required** `string`
  * geoname_id **required** `string`
  * id **required** `string`
  * lat **required** `number`
  * lng **required** `number`
  * name **required** `string`
  * name_long **required** `string`
  * region **required** `string`
  * slug **required** `string`
  * type **required** `string`

### PlacesResponse
* Places response `object`
  * places **required** `array`
    * items [PlaceResponse](#placeresponse)
  * request **required** `object`
    * distance_miles **required** `number`
    * endpoint **required** `string`
    * environment **required** `string`
    * fields **required** `object`
      * destination_lat **required** `number`
      * destination_lng **required** `number`
      * origin_lat **required** `number`
      * origin_lng **required** `number`
    * version **required** `string`
  * status **required** `object`
    * code **required** `number`
    * message **required** `string`

### RoutesResponse
* Routes response `object`
  * data **required** `object`
    * operators **required** `array`
      * items `object`
        * attributes **required** `array`
          * items `string`
        * code **required** `string`
        * id **required** `string`
        * logo_img **required** `string`
        * mode **required** `string`
        * name **required** `string`
    * places **required** `array`
      * items [PlaceResponse](#placeresponse)
    * routes **required** `array`
      * items `object`
        * co2 **required** `number`
        * destination_id **required** `string`
        * duration **required** `number`
        * fare **required** `number`
        * mode **required** `string`
        * origin_id **required** `string`
  * request **required** `object`
    * distance_miles **required** `number`
    * endpoint **required** `string`
    * environment **required** `string`
    * fields **required** `object`
      * destination_lat **required** `number`
      * destination_lng **required** `number`
      * origin_lat **required** `number`
      * origin_lng **required** `number`
    * version **required** `string`
  * response **required** `object`
    * time **required** `number`
    * url **required** `string`
  * status **required** `object`
    * code **required** `number`
    * message **required** `string`


