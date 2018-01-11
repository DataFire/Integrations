# @datafire/gov_bc_ca_router

Client library for BC Route Planner

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_router
```
```js
let gov_bc_ca_router = require('@datafire/gov_bc_ca_router').create({
  apikey: ""
});

gov_bc_ca_router.directions.outputFormat.get({}).then(data => {
  console.log(data);
})
```

## Description

Finds shortest/fastest route between a start point and one or more stop points on British Columbia's public road network. Here are some geocoded addresses to play with:<br>18 Douglas St,Victoria -123.36962,48.40892<br>1002 Johnson St, Victoria -123.355745,48.426206<br>543 Johnson St, Victoria, BC -123.36907,48.42770 <br>14 Centennial Sq, Victoria, BC -123.36564,48.42863<br>1105 Royal Ave,New Westminster  -122.92009,49.20063<br>808 Jackson Cres, New Westminster -122.90762,49.22558<br>10810 McDonald Rd, Chilliwack -121.93808,49.19859<br>3950 June Springs Rd, Kelowna -119.40751,49.83960<br>1201 Riondel Rd, Kootenay Bay -116.85402,49.74448<br>1201 Riondel Rd, Kootenay Bay -116.832759,49.730500 (parcelPoint)<br>2499 Walbran Pl, Courtenay -124.97295,49.71518<br>2013 Smoke Bluff Rd, Squamish -123.13946,49.70401<br>235 Kelvin Grove Way, Lions Bay -123.23524,49.45035.<br>   Please see our <a href=https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice target="_blank">data collection notice</a>

## Actions

### directions.outputFormat.get
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points


```js
gov_bc_ca_router.directions.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: Example: -123.70794,48.77869,-123.53785,48.38200. A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### distance.outputFormat.get
Represents the distance and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.distance.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: Example: -123.70794,48.77869,-123.53785,48.38200. A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### distance.betweenPairs.outputFormat.get
Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.


```js
gov_bc_ca_router.distance.betweenPairs.outputFormat.get({
  "outputFormat": "",
  "fromPoints": "",
  "toPoints": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, html): Format of representation
  * fromPoints **required** `string`: Example: -123.70794,48.77869,-123.53785,48.38200. A comma-separated list of origin points.  See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#fromPoints target='_blank'>fromPoints</a>
  * toPoints **required** `string`: Example: -124.972951,49.715181,-123.139464,49.704015. A comma-separated list of destination points. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#toPoints target='_blank'>toPoints</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### route.outputFormat.get
Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.route.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: Example: -123.70794,48.77869,-123.53785,48.38200. A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*



## Definitions

** No definitions **
