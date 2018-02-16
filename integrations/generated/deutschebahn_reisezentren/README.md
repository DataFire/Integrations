# @datafire/deutschebahn_reisezentren

Client library for Reisezentren-API

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_reisezentren
```
```js
let deutschebahn_reisezentren = require('@datafire/deutschebahn_reisezentren').create();

deutschebahn_reisezentren.reisezentren.get({}).then(data => {
  console.log(data);
});
```

## Description

This REST-API enables you to query information about travel centers in Germany.

## Actions

### reisezentren.get
Get all station infos


```js
deutschebahn_reisezentren.reisezentren.get({}, context)
```

#### Input
* input `object`
  * name `string`: A station name or part of it

#### Output
* output [TravelCenterList](#travelcenterlist)

### reisezentren.loc.lat.lon.get
Get information about a station near a location


```js
deutschebahn_reisezentren.reisezentren.loc.lat.lon.get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude
  * lon **required** `number`: Longitude

#### Output
* output [TravelCenter](#travelcenter)

### reisezentren.loc.lat.lon.dist.get
Get stations in a given radius


```js
deutschebahn_reisezentren.reisezentren.loc.lat.lon.dist.get({
  "lat": 0,
  "lon": 0,
  "dist": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude
  * lon **required** `number`: Longitude
  * dist **required** `number`: Radius

#### Output
* output [TravelCenter](#travelcenter)

### reisezentren.id.get
Get information about a specific station


```js
deutschebahn_reisezentren.reisezentren.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Station id

#### Output
* output [TravelCenter](#travelcenter)



## Definitions

### Error
* Error `object`
  * code `integer`
  * message `string`

### OpeningTime
* OpeningTime `array`
  * items `string`

### TravelCenter
* TravelCenter `object`
  * address `string`: Street address of travel center
  * city `string`: City of travel center
  * id `integer`: Identifying number
  * lat `number`: Latitude of travel center location
  * lon `number`: Longitude of travel center location
  * name `string`: Name of travel center
  * openingTimes `object`: Opening times of the travel center, ordered by week day
    * fri [OpeningTime](#openingtime)
    * mon [OpeningTime](#openingtime)
    * sat [OpeningTime](#openingtime)
    * sun [OpeningTime](#openingtime)
    * thu [OpeningTime](#openingtime)
    * tue [OpeningTime](#openingtime)
    * wed [OpeningTime](#openingtime)
  * postCode `string`: Post code of travel center
  * type `string` (values: Reisezentrum, Mobility Center): Type of travel center

### TravelCenterList
* TravelCenterList `array`
  * items [TravelCenter](#travelcenter)


