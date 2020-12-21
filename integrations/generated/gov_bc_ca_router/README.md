# @datafire/gov_bc_ca_router

Client library for BC Route Planner REST API

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_router
```
```js
let gov_bc_ca_router = require('@datafire/gov_bc_ca_router').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Finds shortest/fastest route between a start point and one or more stop points on British Columbia's public road network. The BC Route planner [webpage](https://www2.gov.bc.ca/gov/content?id=9D99E684CCD042CD88FADC51E079B4B5) provides additional information.  Here are some geocoded addresses to play with:<br>18 Douglas St,Victoria -123.36962,48.40892<br>1002 Johnson St, Victoria -123.355745,48.426206<br>543 Johnson St, Victoria, BC -123.36907,48.42770 <br>14 Centennial Sq, Victoria, BC -123.36564,48.42863<br>1105 Royal Ave,New Westminster  -122.92009,49.20063<br>808 Jackson Cres, New Westminster -122.90762,49.22558<br>10810 McDonald Rd, Chilliwack -121.93808,49.19859<br>3950 June Springs Rd, Kelowna -119.40751,49.83960<br>1201 Riondel Rd, Kootenay Bay -116.85402,49.74448<br>1201 Riondel Rd, Kootenay Bay -116.832759,49.730500 (parcelPoint)<br>2499 Walbran Pl, Courtenay -124.97295,49.71518<br>2013 Smoke Bluff Rd, Squamish -123.13946,49.70401<br>235 Kelvin Grove Way, Lions Bay -123.23524,49.45035<br>   Please see our <a href=https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice target="_blank">data collection notice</a>. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers. 

[Developer API keys](https://github.com/bcgov/gwa/wiki/Developer-Guide#developer-api-keys) are unique and can be acquired with a GitHub account. Production government applications may use organization API keys acquired by [contacting DataBC](https://forms.gov.bc.ca/databc-contact-us/).



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
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### directions.outputFormat.post
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points


```js
gov_bc_ca_router.directions.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
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
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### distance.outputFormat.post
Represents the distance and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.distance.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
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
  * fromPoints **required** `string`: A comma-separated list of origin points.  See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#fromPoints target='_blank'>fromPoints</a>
  * toPoints **required** `string`: A comma-separated list of destination points. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#toPoints target='_blank'>toPoints</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)
  * maxPairs `integer`: The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.

#### Output
*Output schema unknown*

### distance.betweenPairs.outputFormat.post
Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.


```js
gov_bc_ca_router.distance.betweenPairs.outputFormat.post({
  "outputFormat": "",
  "fromPoints": "",
  "toPoints": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, html): Format of representation
  * fromPoints **required** `string`: A comma-separated list of origin points.  See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#fromPoints target='_blank'>fromPoints</a>
  * toPoints **required** `string`: A comma-separated list of destination points. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#toPoints target='_blank'>toPoints</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)
  * maxPairs `integer`: The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.

#### Output
*Output schema unknown*

### optimalDirections.outputFormat.get
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time


```js
gov_bc_ca_router.optimalDirections.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### optimalDirections.outputFormat.post
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.


```js
gov_bc_ca_router.optimalDirections.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### optimalRoute.outputFormat.get
Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time


```js
gov_bc_ca_router.optimalRoute.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### optimalRoute.outputFormat.post
Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.


```js
gov_bc_ca_router.optimalRoute.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
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
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br> Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### route.outputFormat.post
Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.route.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.directions.outputFormat.get
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle


```js
gov_bc_ca_router.truck.directions.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.directions.outputFormat.post
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points


```js
gov_bc_ca_router.truck.directions.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.distance.outputFormat.get
Represents the distance and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.truck.distance.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.distance.outputFormat.post
Represents the distance and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.truck.distance.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.distance.betweenPairs.outputFormat.get
Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.


```js
gov_bc_ca_router.truck.distance.betweenPairs.outputFormat.get({
  "outputFormat": "",
  "fromPoints": "",
  "toPoints": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, html): Format of representation
  * fromPoints **required** `string`: A comma-separated list of origin points.  See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#fromPoints target='_blank'>fromPoints</a>
  * toPoints **required** `string`: A comma-separated list of destination points. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#toPoints target='_blank'>toPoints</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)
  * maxPairs `integer`: The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.

#### Output
*Output schema unknown*

### truck.distance.betweenPairs.outputFormat.post
Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.


```js
gov_bc_ca_router.truck.distance.betweenPairs.outputFormat.post({
  "outputFormat": "",
  "fromPoints": "",
  "toPoints": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, html): Format of representation
  * fromPoints **required** `string`: A comma-separated list of origin points.  See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#fromPoints target='_blank'>fromPoints</a>
  * toPoints **required** `string`: A comma-separated list of destination points. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#toPoints target='_blank'>toPoints</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)
  * maxPairs `integer`: The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.

#### Output
*Output schema unknown*

### truck.optimalDirections.outputFormat.get
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.


```js
gov_bc_ca_router.truck.optimalDirections.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.optimalDirections.outputFormat.post
Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.


```js
gov_bc_ca_router.truck.optimalDirections.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.optimalRoute.outputFormat.get
Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.


```js
gov_bc_ca_router.truck.optimalRoute.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.optimalRoute.outputFormat.post
Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.


```js
gov_bc_ca_router.truck.optimalRoute.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start and end points.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.route.outputFormat.get
Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.


```js
gov_bc_ca_router.truck.route.outputFormat.get({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br> Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*

### truck.route.outputFormat.post
Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.


```js
gov_bc_ca_router.truck.route.outputFormat.post({
  "outputFormat": "",
  "points": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, kml, html): Format of representation
  * points **required** `string`: A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#points target='_blank'>points</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/router/glossary.md#outputSRS target="_blank">outputSRS</a>
  * criteria `string` (values: shortest, fastest): Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
  * distanceUnit `string` (values: km, mi): distance unit of measure (e.g., km, mi). Default is km.
  * roundTrip `boolean`: If true, route ends at start point. Default is false.
  * departure `string`: departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
  * correctSide `boolean`: If true, route starts and ends on same side of road as start/end point.Default is false.
  * disable `string`: A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
  * routeDescription `string`: Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
