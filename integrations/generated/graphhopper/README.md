# @datafire/graphhopper

Client library for GraphHopper Directions API

## Installation and Usage
```bash
npm install --save @datafire/graphhopper
```
```js
let graphhopper = require('@datafire/graphhopper').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description


With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation,
route optimization, isochrone calculations and other tools in your application.

The GraphHopper Directions API consists of the following RESTful web services:

 * [Routing API](#tag/Routing-API),
 * [Route Optimization API](#tag/Route-Optimization-API),
 * [Isochrone API](#tag/Isochrone-API),
 * [Map Matching API](#tag/Map-Matching-API),
 * [Matrix API](#tag/Matrix-API),
 * [Geocoding API](#tag/Geocoding-API) and
 * [Cluster API](#tag/Cluster-API).

# Explore our APIs

## Get started

1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)

Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.

In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.

## Insomnia

To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:

1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json).
2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `"api_key": your API key`
3. Start exploring

![Insomnia](./img/insomnia.png)

## Postman

To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:

1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json).
2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `"api_key": your API key`
3. Start exploring

![Postman](./img/postman.png)

## API Client Libraries

To speed up development and make coding easier, we offer the following client libraries:

 * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)
 * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API

### Bandwidth reduction

If you create your own client, make sure it supports http/2 and gzipped responses for best speed.

If you use the Matrix or Route Optimization API and want to solve large problems, we recommend you to reduce bandwidth
by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4)
and specifying the header as follows: `Content-Encoding: gzip`.

## Contact Us

If you have problems or questions, please read the following information:

- [FAQ](https://graphhopper.com/api/1/docs/FAQ/)
- [Public forum](https://discuss.graphhopper.com/c/directions-api)
- [Contact us](https://www.graphhopper.com/contact-form/)

To stay informed about the latest developments, you can

- follow us on [twitter](https://twitter.com/graphhopper/),
- read [our blog](https://graphhopper.com/blog/),
- watch [our documentation](https://github.com/graphhopper/directions-api-doc),
- sign up for our newsletter or
- [our forum](https://discuss.graphhopper.com/c/directions-api).

Select the channel you like the most.


# Map Data and Routing Profiles

Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers.
This chapter gives an overview about the options you have.

## OpenStreetMap

#### Geographical Coverage

[OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region,
please visit [GraphHopper Maps](https://graphhopper.com/maps/).
You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge.
[Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.

#### Supported Vehicle Profiles

The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:

Name       | Description           | Restrictions              | Icon
-----------|:----------------------|:--------------------------|:---------------------------------------------------------
car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)
truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png)
scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png)
foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png)
hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png)
bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png)
mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png)
racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)

Please note:

 * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`
 * the free package supports only the vehicle profiles `car`, `bike` or `foot`
 * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.
 * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).
 * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.


 
## TomTom

If you want to include traffic, you can purchase the TomTom Add-on.
This Add-on only uses TomTom's road network and historical traffic information.
Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).

Please note the following:

 * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).
 * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).
 * We do *not* use TomTom's web services. We only use their data with our software.


 
[Contact us](https://www.graphhopper.com/contact-form/) for more details.

#### Geographical Coverage

We offer

- Europe including Russia
- North, Central and South America
- Saudi Arabia
- United Arab Emirates
- South Africa
- Australia

#### Supported Vehicle Profiles

Name       | Description           | Restrictions              | Icon
-----------|:----------------------|:--------------------------|:---------------------------------------------------------
car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)


## Actions

### solveClusteringProblem

The Cluster endpoint is used with a POST request towards
`https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
Please note that for problems that take longer than 10 seconds a bad request error is returned.
In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.



```js
graphhopper.solveClusteringProblem({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterRequest](#clusterrequest)

#### Output
* output [ClusterResponse](#clusterresponse)

### asyncClusteringProblem

Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
long running problems only. The work flow is asynchronous:

- send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
- poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
  towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.



```js
graphhopper.asyncClusteringProblem({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterRequest](#clusterrequest)

#### Output
* output [JobId](#jobid)

### getClusterSolution
This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
You can fetch it with the job_id, you have been sent.



```js
graphhopper.getClusterSolution({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Request solution with jobId

#### Output
* output [ClusterResponse](#clusterresponse)

### getGeocode

### Introduction

![Geocoding Example](./img/geocoding-example.png)

_Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
For example the conversion from `Berlin` to `52.5170365,13.3888599`.

_Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).



```js
graphhopper.getGeocode({}, context)
```

#### Input
* input `object`
  * q `string`: If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.
  * locale `string`: Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.
  * limit `integer`: Specify the maximum number of results to return
  * reverse `boolean`: It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.
  * debug `boolean`: If `true`, the output will be formatted.
  * point `string`: _Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
  * provider `string`: The provider parameter is currently under development and can fall back to `default` at any time.

#### Output
* output [GeocodingResponse](#geocodingresponse)

### getIsochrone
### Example
You can get an example response via:

```
curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
```

Don't forget to replace the placeholder with your own key.

### Introduction
![Isochrone screenshot](./img/isochrone-example.png)

An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.

### Use Cases
Some possible areas in which this API may be useful to you:

- real estate analysis
- realtors
- vehicle scheduling
- geomarketing
- reach of electric vehicles
- transport planning
- logistics (distribution and retail network planning)

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).



```js
graphhopper.getIsochrone({
  "point": ""
}, context)
```

#### Input
* input `object`
  * point **required** `string`: Specify the start coordinate
  * time_limit `integer`: Specify which time the vehicle should travel. In seconds.
  * distance_limit `integer`: Specify which distance the vehicle should travel. In meters.
  * vehicle `string` (values: car, bike, foot, hike, mtb, racingbike, scooter, truck, small_truck): The vehicle profile for which the route should be calculated.
  * buckets `integer`: Number by which to divide the given `time_limit` to create `buckets` nested isochrones of time intervals `time_limit-n*time_limit/buckets`. Applies analogously to `distance_limit`.
  * reverse_flow `boolean`: If `false` the flow goes from point to the polygon, if `true` the flow goes from the polygon "inside" to the point.
  * weighting `string` (values: fastest, shortest): Use `"shortest"` to get an isodistance line instead of an isochrone.

#### Output
* output [IsochroneResponse](#isochroneresponse)

### postGPX
### Example
You get an example response for a GPX via:

```
curl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx
```

A minimal working GPX file looks like
```gpx
<gpx>
 <trk>
  <trkseg>
   <trkpt lat="51.343657" lon="12.360708"></trkpt>
   <trkpt lat="51.343796" lon="12.361337"></trkpt>
   <trkpt lat="51.342784" lon="12.361882"></trkpt>
  </trkseg>
 </trk>
</gpx>
```

### Introduction
![Map Matching screenshot](./img/map-matching-example.gif)

The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.

In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.

Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).

### Limits and Counts
The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).

One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.



```js
graphhopper.postGPX({}, context)
```

#### Input
* input `object`
  * gps_accuracy `integer`: Specify the precision of a point, in meter
  * vehicle `string`: Specify the vehicle profile like car

#### Output
* output [RouteResponse](#routeresponse)

### getMatrix
With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
as it works out-of-the-box in the browser. If possible you should
prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
and automatically gzipps the request (note that all endpoints return gzipped results).



```js
graphhopper.getMatrix({}, context)
```

#### Input
* input `object`
  * point `array`: Specify multiple points in `latitude,longitude` for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
  * from_point `array`: The starting points for the routes in `latitude,longitude`. E.g. if you want to calculate the three routes A-&gt;1, A-&gt;2, A-&gt;3 then you have one from_point parameter and three to_point parameters.
  * to_point `array`: The destination points for the routes in `latitude,longitude`.
  * point_hint `array`: Optional parameter. Specifies a hint for each `point` parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
  * from_point_hint `array`: For the from_point parameter. See point_hint
  * to_point_hint `array`: For the to_point parameter. See point_hint
  * snap_prevention `array`: Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`
  * curbside `array`: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
  * from_curbside `array`: Curbside setting for the from_point parameter. See curbside.
  * to_curbside `array`: Curbside setting for the to_point parameter. See curbside.
  * out_array `array`: Specifies which arrays should be included in the response. Specify one or more of the following options 'weights', 'times', 'distances'. To specify more than one array use e.g. out_array=times&out_array=distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
  * vehicle `string` (values: car, bike, foot, hike, mtb, racingbike, scooter, truck, small_truck): The vehicle profile for which the matrix should be calculated.
  * fail_fast `boolean`: Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).
  * turn_costs `boolean`: Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.

#### Output
* output [MatrixResponse](#matrixresponse)

### postMatrix

The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
please refer to the [guide of the GET endpoint](#operation/getMatrix).

**Please note that in contrast to GET endpoint the points have to be specified as `longitude, latitude` pairs (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.

For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
```json
{ "points": [[11,10], [22,20]], "vehicle": "car" }
```

A complete curl Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
```



```js
graphhopper.postMatrix({}, context)
```

#### Input
* input `object`

#### Output
* output [MatrixResponse](#matrixresponse)

### calculateMatrix
Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.

The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
 * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
 * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`

Here are some full examples via curl:
```bash
$ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
{"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
```

Pick the returned `job_id` and use it in the next GET requests:
```bash
$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
{"status":"waiting"}
```

When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
```bash
$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
{"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
```

Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
```json
{"message":"Cannot find from_points: 1","hints":[{...}]}
```



```js
graphhopper.calculateMatrix({}, context)
```

#### Input
* input `object`

#### Output
* output [JobId](#jobid)

### getMatrixSolution
This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.



```js
graphhopper.getMatrixSolution({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Request solution with jobId

#### Output
* output [MatrixResponse](#matrixresponse)

### getRoute
The GET request is the most simple one: just specify the parameter in the URL and you are done.
Can be tried directly in every browser.



```js
graphhopper.getRoute({
  "point": []
}, context)
```

#### Input
* input `object`
  * point **required** `array`: The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible.
  * point_hint `array`: The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters.
  * snap_prevention `array`: Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`.
  * vehicle `string` (values: car, bike, foot, hike, mtb, racingbike, scooter, truck, small_truck): The vehicle profile for which the route should be calculated.
  * curbside `array`: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
  * turn_costs `boolean`: Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap.
  * locale `string`: The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.
  * elevation `boolean`: If `true`, a third coordinate, the altitude, is included with all positions in the response.
  * details `array`: Optional parameter to retrieve path details. You can request additional details for the route: `street_name`, 
  * optimize `string`: Normally, the calculated route will visit the points in the order you specified them.
  * instructions `boolean`: If instructions should be calculated and returned
  * calc_points `boolean`: If the points for the route should be calculated at all.
  * debug `boolean`: If `true`, the output will be formatted.
  * points_encoded `boolean`: Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact
  * ch.disable `boolean`: Use this parameter in combination with one or more parameters from below.
  * weighting `string`: Determines the way the "best" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`.
  * heading `array`: Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.
  * heading_penalty `integer`: Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.
  * pass_through `boolean`: If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.
  * block_area `string`: Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`.
  * avoid `string`: Specify which road classes and environments you would like to avoid. 
  * algorithm `string` (values: round_trip, alternative_route): Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:
  * round_trip.distance `integer`: If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.
  * round_trip.seed `integer`: If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.
  * alternative_route.max_paths `integer`: If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.
  * alternative_route.max_weight_factor `number`: If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.
  * alternative_route.max_share_factor `number`: If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.

#### Output
* output [RouteResponse](#routeresponse)

### postRoute
Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
If you are familiar with POST requests and JSON then do not hesitate to continue here.

Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
speed up the request.

To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `point_hints` and `snap_preventions`.

**Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.

For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
```json
{ "points": [[11,10], [22,20]] }
```
Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).

Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
```



```js
graphhopper.postRoute({}, context)
```

#### Input
* input `object`
  * body [RouteRequest](#routerequest)

#### Output
* output [RouteResponse](#routeresponse)

### route.info.get
Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.



```js
graphhopper.route.info.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [InfoResponse](#inforesponse)

### solveVRP

To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).

To solve a new vehicle routing problem, make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp?key=<your_key>
```

It returns the solution to this problem in the JSON response.

Please note that this URL is very well suited to solve minor problems.
Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.



```js
graphhopper.solveVRP({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Request](#request)

#### Output
* output [Response](#response)

### asyncVRP

To solve a vehicle routing problem, perform the following steps:

1.) Make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
```

It returns a job id (job_id).

2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

We recommend to query the solution every 500ms until it returns 'status=finished'.

**Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.



```js
graphhopper.asyncVRP({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Request](#request)

#### Output
* output [JobId](#jobid)

### getSolution

Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).



```js
graphhopper.getSolution({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Request solution with jobId

#### Output
* output [Response](#response)



## Definitions

### Activity
* Activity `object`
  * address [ResponseAddress](#responseaddress)
  * arr_date_time `string`: Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.
  * arr_time `integer`: Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \"departure time\" at start location. It is important to note that `arr_time` does not necessarily mean \"start of underlying activity\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time.
  * distance `integer`: cumulated distance from start to this activity in m
  * driving_time `integer`: cumulated driving time from start to this driver activity in seconds
  * end_date_time `string`: End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.
  * end_time `integer`: End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location.
  * id `string`: Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to
  * load_after `array`: Array with size/capacity dimensions after this activity
    * items `integer`: dimension value
  * load_before `array`: Array with size/capacity dimensions before this activity
    * items `integer`: dimension value
  * location_id `string`: Id that refers to address
  * preparation_time `integer`: preparation time at this activity in seconds
  * type `string` (values: start, end, service, pickupShipment, deliverShipment, pickup, delivery, break): type of activity
  * waiting_time `integer`: Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs.

### Address
* Address `object`
  * curbside `string` (values: right, left, any): Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap.
  * lat **required** `number`: Latitude of location.
  * location_id **required** `string`: Specifies the id of the location.
  * lon **required** `number`: Longitude of location.
  * name `string`: Name of location.
  * street_hint `string`: Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.

### Algorithm
* Algorithm `object`: Use `objectives` instead.
  * objective `string` (values: transport_time, completion_time)
  * problem_type `string` (values: min, min-max)

### BadRequest
* BadRequest `object`
  * hints `array`: More detailed information about the error.
    * items [ErrorMessage](#errormessage)
  * message `string`: Short error message
  * status `string`: status

### Cluster
* Cluster `object`
  * ids `array`: Array of customer ids assigned to this specific cluster
    * items `string`
  * quantity `number`: Cluster size

### ClusterConfiguration
* ClusterConfiguration `object`
  * clustering [ClusterConfigurationClustering](#clusterconfigurationclustering)
  * response_type `string`: Specifies the response format. You can either choose `geojson` or `json`.
  * routing [ClusterConfigurationRouting](#clusterconfigurationrouting)

### ClusterConfigurationClustering
* ClusterConfigurationClustering `object`
  * max_quantity `number`: Specifies max. quantity in a cluster
  * min_quantity `number`: Specifies min. quantity in a cluster
  * num_clusters `number`: Specifies the number of clusters

### ClusterConfigurationRouting
* ClusterConfigurationRouting `object`
  * cost_per_meter `number`: Cost per meter (travel distance)
  * cost_per_second `number`: Cost per second (travel time)
  * profile `string`: The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap)

### ClusterCustomer
* ClusterCustomer `object`
  * address [ClusterCustomerAddress](#clustercustomeraddress)
  * id `string`: id of customer
  * quantity `number`: demand of customer

### ClusterCustomerAddress
* ClusterCustomerAddress `object`
  * lat `number`: Latitude
  * lon `number`: Longitude
  * street_hint `string`: Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.

### ClusterRequest
* ClusterRequest `object`
  * configuration [ClusterConfiguration](#clusterconfiguration)
  * customers `array`
    * items [ClusterCustomer](#clustercustomer)

### ClusterResponse
* ClusterResponse `object`
  * clusters `array`
    * items [Cluster](#cluster)
  * copyrights `array`
    * items `string`
  * processing_time `number`
  * status `string` (values: waiting_in_queue, processing, finished): Indicates the current status of the job
  * waiting_time_in_queue `number`

### Configuration
* Configuration `object`: Specifies general configurations that are taken into account when solving the vehicle routing problem.
  * routing [Routing](#routing)

### CostMatrix
* CostMatrix `object`
  * data `object`: JSON data of matrix response
    * info `object`: Additional information for your request
      * copyrights `array`
        * items `string`
      * took `number`
    * distances `array`
      * items `array`
        * items `number`
    * times `array`
      * items `array`
        * items `integer`
  * location_ids `array`
    * items `string`
  * profile `string`: vehicle profile or empty if catch all fallback
  * type `string` (values: default, google): type of cost matrix, currently default or google are supported

### Detail
* Detail `object`
  * code `integer`: Reason code
  * id `string`: Id of unassigned service/shipment
  * reason `string`: Human readable reason as listed above

### DriveTimeBreak
* DriveTimeBreak `object`
  * duration **required** `integer`: Specifies the duration of the break in seconds.
  * initial_driving_time `integer`: Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds.
  * max_driving_time **required** `integer`: Specifies the max driving time (in a row) without break in seconds.
  * possible_split `array`: Array specifying how a break duration (in seconds) can be split into several smaller breaks
    * items `integer`

### EncodedLineString
* EncodedLineString `string`: A polyline-encoded list of positions. You'll need to decode this string in client code. We provide open source code in [Java](https://github.com/graphhopper/graphhopper/blob/e649aaed8d3f4378bf2d8889bbbc2318261eabb2/web-api/src/main/java/com/graphhopper/http/WebHelper.java#L54) and [JavaScript](https://github.com/graphhopper/directions-api-js-client/blob/cf43d1a5bc93a3e8007a44fcfc551117e4fa49bc/src/GHUtil.js#L27).

### ErrorMessage
* ErrorMessage `object`
  * details `string`: Details
  * message `string`: error message

### GHError
* GHError `object`
  * hints `array`
    * items `object`
      * message `string`
  * message `string`

### GeocodingLocation
* GeocodingLocation `object`
  * city `string`: The city of the address
  * country `string`: The country of the address
  * housenumber `string`: The housenumber of the address
  * name `string`: The name of the entity. Can be a boundary, POI, address, etc
  * osm_id `string`: The OSM ID of the entity
  * osm_key `string`: The OSM key of the entity
  * osm_type `string`: N = node, R = relation, W = way
  * point [GeocodingPoint](#geocodingpoint)
  * postcode `string`: The postcode of the address
  * state `string`: The state of the address
  * street `string`: The street of the address

### GeocodingPoint
* GeocodingPoint `object`
  * lat `number`: Latitude
  * lng `number`: Longitude

### GeocodingResponse
* GeocodingResponse `object`
  * hits `array`
    * items [GeocodingLocation](#geocodinglocation)
  * took `number`: in ms

### GroupRelation
* GroupRelation `object`
  * groups **required** `array`: An array of groups that should be related
    * items `string`: group of services or shipments
  * type **required** `string`: Specifies the type of relation. It must be either of type `in_sequence` or `in_direct_sequence`.

### InfoResponse
* InfoResponse `object`: Information about the server and the geographical area that it covers.
  * bbox `string`: The bounding box of the geographical area covered by this GraphHopper instance. Format: `"minLon,minLat,maxLon,maxLat"
  * features `object`: The supported features, such as elevation, per vehicle profile.
  * version `string`: The version of the GraphHopper server that provided this response. This is not related to the API version.

### InternalErrorMessage
* InternalErrorMessage `object`
  * code `integer`
  * message `string`: Details

### IsochroneResponse
* IsochroneResponse `object`
  * copyrights `array`
    * items `string`
  * polygons `array`: The list of polygons in GeoJson format. It can be used e.g. in the Leaflet framework:
    * items [IsochroneResponsePolygon](#isochroneresponsepolygon)

### IsochroneResponsePolygon
* IsochroneResponsePolygon `object`: A found path
  * geometry [Polygon](#polygon)
  * properties `object`
    * bucket `integer`
  * type `string`

### JobId
* JobId `object`
  * job_id `string`: UUID. Unique id for your job/request with which you can fetch your solution

### JobRelation
* JobRelation `object`
  * ids **required** `array`: Specifies an array of shipment and/or service ids that are in relation. If you deal with services then you need to use the id of your services in ids. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use your shipment id plus the keyword `_pickup` or `_delivery`. If you want to place a service or shipment activity at the beginning of your route, use the special ID `start`. In turn, use `end` to place it at the end of the route.
    * items `string`
  * type **required** `string`: Specifies the type of relation. It must be either of type `in_same_route`, `in_sequence` or `in_direct_sequence`.
  * vehicle_id `string`: Id of pre-assigned vehicle, i.e. the vehicle id that is determined to conduct the services and shipments in this relation.

### LineString
* LineString `object`
  * coordinates `array`: A list of coordinate pairs or triples, `[lon,lat]` or `[lon,lat,elevation]`.
    * items `array`
      * items `number`
  * type `string`

### MatrixRequest
* MatrixRequest `object`
  * fail_fast `boolean`: Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).
  * from_curbsides `array`: See `curbsides`of symmetrical matrix
    * items `string`
  * from_point_hints `array`: See `point_hints`of symmetrical matrix
    * items `string`
  * from_points `array`: The starting points for the routes in an array of `[longitude,latitude]`. For instance, if you want to calculate three routes from point A such as A->1, A->2, A->3 then you have one `from_point` parameter and three `to_point` parameters.
    * items `array`
      * items `number`
  * out_arrays `array`: Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.
    * items `string`
  * snap_preventions `array`: See `snap_preventions` of symmetrical matrix
    * items `string`
  * to_curbsides `array`: See `curbsides`of symmetrical matrix
    * items `string`
  * to_point_hints `array`: See `point_hints`of symmetrical matrix
    * items `string`
  * to_points `array`: The destination points for the routes in an array of `[longitude,latitude]`.
    * items `array`
      * items `number`
  * turn_costs `boolean`: Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.
  * vehicle

### MatrixResponse
* MatrixResponse `object`
  * info [ResponseInfo](#responseinfo)
  * distances `array`: The distance matrix for the specified points in the same order as the time matrix. The distances are in meters. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.
    * items `array`
      * items `number`
  * hints `array`: Optional. Additional response data
    * items `object`
      * details `string`: Details of this hint
      * invalid_from_points `array`: Optional. An array of from_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `from_point`s were not found.`
        * items `number`
      * invalid_to_points `array`: Optional. An array of to_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `to_point`s were not found.`
        * items `number`
      * message `string`: Short description of this hint
      * point_pairs `array`: Optional. An array of two-element arrays representing the from/to_point indices of points for which no connection could be found. Will only be added if `fail_fast=false` and some connections were not found.
        * items `array`
          * items `number`
  * times `array`: The time matrix for the specified points in the order [[from1->to1, from1->to2, ...], [from2->to1, from2->to2, ...], ...]. The times are in seconds. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.
    * items `array`
      * items `number`
  * weights `array`: The weight matrix for the specified points in the same order as the time matrix. The weights for different vehicles can have a different unit but the weights array is perfectly suited as input for Vehicle Routing Problems as it is currently faster to calculate. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.
    * items `array`
      * items `number`

### Objective
* Objective `object`
  * type **required** `string` (values: min, min-max): Type of objective function, i.e. `min` or `min-max`.
  * value **required** `string` (values: completion_time, transport_time, vehicles, activities): The value of the objective function.

### Pickup
* Pickup [Stop](#stop)

### Polygon
* Polygon `object`
  * coordinates `array`
    * items `array`
      * items `array`
        * items `number`
  * type `string`

### Request
* Request `object`
  * algorithm [Algorithm](#algorithm)
  * configuration [Configuration](#configuration)
  * cost_matrices `array`: Specifies your own tranport time and distance matrices.
    * items [CostMatrix](#costmatrix)
  * objectives `array`: Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.
    * items [Objective](#objective)
  * relations `array`: Defines additional relationships between orders.
  * services `array`: Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.
    * items [Service](#service)
  * shipments `array`: Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.
    * items [Shipment](#shipment)
  * vehicle_types `array`: Specifies the available vehicle types. These types can be assigned to vehicles.
    * items [VehicleType](#vehicletype)
  * vehicles `array`: Specifies the available vehicles.
    * items [Vehicle](#vehicle)

### Response
* Response `object`
  * copyrights `array`
    * items `string`: Attribution
  * processing_time `integer`: Processing time in ms. If job is still waiting in queue, processing_time is 0
  * solution [Solution](#solution)
  * status `string` (values: waiting_in_queue, processing, finished): Indicates the current status of the job
  * waiting_time_in_queue `integer`: Waiting time in ms

### ResponseAddress
* ResponseAddress `object`: Address of activity
  * lat `number`: Latitude of location.
  * location_id `string`: Specifies the id of the location.
  * lon `number`: Longitude of location.
  * name `string`: Name of location.
  * snapped_waypoint [SnappedWaypoint](#snappedwaypoint)
  * street_hint `string`: Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.

### ResponseInfo
* ResponseInfo `object`: Additional information for your request
  * copyrights `array`: Attribution according to our documentation is necessary if no white-label option included.
    * items `string`
  * took `number`

### Route
* Route `object`
  * activities `array`: Array of activities
    * items [Activity](#activity)
  * completion_time `integer`: Completion time of route in seconds
  * distance `integer`: Distance of route in meter
  * points `array`: Array of route planning points
    * items [RoutePoint](#routepoint)
  * preparation_time `integer`: Preparation time of route in seconds
  * service_duration `integer`: Service duration of route in seconds
  * transport_time `integer`: Transport time of route in seconds
  * vehicle_id `string`: Id of vehicle that operates route
  * waiting_time `integer`: Waiting time of route in seconds

### RoutePoint
* RoutePoint `object`
  * coordinates `array`
    * items `object`
  * type `string`

### RouteRequest
* RouteRequest `object`
  * algorithm `string` (values: round_trip, alternative_route): Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:
  * alternative_route.max_paths `integer`: If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.
  * alternative_route.max_share_factor `number`: If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.
  * alternative_route.max_weight_factor `number`: If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.
  * avoid `string`: Specify which road classes and environments you would like to avoid.
  * block_area `string`: Block road access via a point with the format `latitude,longitude`
  * calc_points `boolean`: If the points for the route should be calculated at all.
  * ch.disable `boolean`: Use this parameter in combination with one or more parameters from below.
  * curbsides `array`: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
    * items `string` (values: any, right, left)
  * debug `boolean`: If `true`, the output will be formatted.
  * details `array`: Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,
    * items `string`
  * elevation `boolean`: If `true`, a third coordinate, the altitude, is included with all positions in the response.
  * heading_penalty `integer`: Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.
  * headings `array`: Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.
    * items `integer`
  * instructions `boolean`: If instructions should be calculated and returned
  * locale `string`: The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.
  * optimize `string`: Normally, the calculated route will visit the points in the order you specified them.
  * pass_through `boolean`: If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.
  * point_hints `array`: Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
    * items `string`
  * points `array`: The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C
    * items `array`
      * items `number`
  * points_encoded `boolean`: Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact
  * round_trip.distance `integer`: If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.
  * round_trip.seed `integer`: If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.
  * snap_preventions `array`: Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`
    * items `string`
  * vehicle
  * weighting `string`: Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`.

### RouteResponse
* RouteResponse `object`
  * info [ResponseInfo](#responseinfo)
  * paths `array`
    * items [RouteResponsePath](#routeresponsepath)

### RouteResponsePath
* RouteResponsePath `object`
  * ascend `number`: The total ascent, in meters.
  * bbox `array`: The bounding box of the route geometry. Format: `[minLon, minLat, maxLon, maxLat]`.
    * items `number`
  * descend `number`: The total descent, in meters.
  * details `object`: Details, as requested with the `details` parameter. Consider the value `{"street_name": [[0,2,"Frankfurter Straße"],[2,6,"Zollweg"]]}`.
  * distance `number`: The total distance, in meters. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
  * instructions `array`: The instructions for this route. This feature is under active development, and our instructions can sometimes be misleading,
    * items `object`
      * distance `number`: The distance for this instruction, in meters.
      * exit_number `integer`: Only available for USE_ROUNDABOUT instructions. The count of exits at which the route leaves the roundabout.
      * interval `array`: Two indices into `points`, referring to the beginning and the end of the segment of the route
        * items `integer`
      * sign `integer`: A number which specifies the sign to show:
      * street_name `string`: The name of the street to turn onto in order to follow the route.
      * text `string`: A description what the user has to do in order to follow the route. The language depends on the locale parameter.
      * time `integer`: The duration for this instruction, in milliseconds.
      * turn_angle `number`: Only available for USE_ROUNDABOUT instructions. The radian of the route within the roundabout `0 < r < 2*PI` for clockwise and
  * points
  * points_encoded `boolean`: Whether the `points` and `snapped_waypoints` fields are polyline-encoded strings rather than JSON arrays
  * points_order `array`: An array of indices (zero-based), specifiying the order in which the input points are visited.
    * items `integer`
  * snapped_waypoints
  * time `integer`: The total travel time, in milliseconds. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).

### Routing
* Routing `object`: This contains all routing specific configurations.
  * calc_points `boolean`: It lets you specify whether the API should provide you with route geometries for vehicle routes or not. Thus, you do not need to do extra routing to get the polyline for each route.
  * consider_traffic `boolean`: indicates whether historical traffic information should be considered
  * curbside_strictness `string` (values: ignore, soft, strict): In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address).
  * fail_fast `boolean`: indicates whether matrix calculation should fail fast when points cannot be connected
  * network_data_provider `string` (values: openstreetmap, tomtom): specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles).
  * return_snapped_waypoints `boolean`: Indicates whether a solution includes snapped waypoints. In contrary to the address coordinate a snapped waypoint is the access point to the (road) network.
  * snap_preventions `array`: Prevents snapping locations to road links of specified road types, e.g. to motorway.
    * items `string` (values: motorway, trunk, bridge, ford, tunnel, ferry)

### Service
* Service `object`
  * address **required** [Address](#address)
  * allowed_vehicles `array`: Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this service can only be conducted EITHER by `technician_peter` OR `technician_stefan` specify this as follows: `["technician_peter","technician_stefan"]`.
    * items `string`
  * disallowed_vehicles `array`: Specifies an array of disallowed vehicles, i.e. array of vehicle ids.
    * items `string`
  * duration `integer`: Specifies the duration of the service in seconds, i.e. how long it takes at the customer site.
  * group `string`: Group this service belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.
  * id **required** `string`: Specifies the id of the service. Ids need to be unique so there must not be two services/shipments with the same id.
  * max_time_in_vehicle `integer`: Specifies the maximum time in seconds a delivery can stay in the vehicle. Currently, it only works with services of "type":"delivery".
  * name `string`: Meaningful name for service, e.g. `"deliver pizza"`.
  * preparation_time `integer`: Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
  * priority `integer`: Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.
  * required_skills `array`: Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this service needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.
    * items `string`
  * size `array`: Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.
    * items `integer`
  * time_windows `array`: Specifies an array of time window objects (see time_window object below). Specify the time either with the recommended Unix time stamp (the number of seconds since 1970-01-01) or you can also count the seconds relative to Monday morning 00:00 and define the whole week in seconds. For example, Monday 9am is then represented by 9hour * 3600sec/hour = 32400. In turn, Wednesday 1pm corresponds to 2day * 24hour/day * 3600sec/hour + 1day * 13hour/day * 3600sec/hour = 219600. See this tutorial for more information.
    * items [TimeWindow](#timewindow)
  * type `string` (values: service, pickup, delivery): Specifies type of service. This makes a difference if items are loaded or unloaded, i.e. if one of the size dimensions > 0. If it is specified as `service` or `pickup`, items are loaded and will stay in the vehicle for the rest of the route (and thus consumes capacity for the rest of the route). If it is a `delivery`, items are implicitly loaded at the beginning of the route and will stay in the route until delivery (and thus releases capacity for the rest of the route).

### Shipment
* Shipment `object`
  * allowed_vehicles `array`: Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this shipment can only be conducted EITHER by "technician_peter" OR "technician_stefan" specify this as follows: ["technician_peter","technician_stefan"].
    * items `string`
  * delivery **required** [Stop](#stop)
  * disallowed_vehicles `array`: Specifies an array of disallowed vehicles, i.e. array of vehicle ids.
    * items `string`
  * id **required** `string`: Specifies the id of the shipment. Ids need to be unique so there must not be two services/shipments with the same id.
  * max_time_in_vehicle `integer`: Specifies the maximum time in seconds a shipment can stay in the vehicle.
  * name `string`: Meaningful name for shipment, e.g. "pickup and deliver pizza to Peter".
  * pickup **required** [Stop](#stop)
  * priority `integer`: Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.
  * required_skills `array`: Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this shipment needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.
    * items `string`
  * size `array`: Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.
    * items `integer`

### SnappedWaypoint
* SnappedWaypoint `object`: Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
  * lat `number`: Latitude of location.
  * lon `number`: Longitude of location.

### Solution
* Solution `object`: Only available if status field indicates `finished`.
  * completion_time `integer`: Overall completion time in seconds, i.e. the sum of each routes/drivers operation time.
  * costs `integer`
  * distance `integer`: Overall distance travelled in meter, i.e. the sum of each route's transport distance
  * max_operation_time `integer`: Operation time of longest route in seconds.
  * no_unassigned `integer`: Number of jobs that could not be assigned to final solution.
  * no_vehicles `integer`: Number of employed vehicles.
  * preparation_time `integer`: Overall preparation time in seconds.
  * routes `array`: An array of routes
    * items [Route](#route)
  * service_duration `integer`: Overall service time in seconds.
  * time `integer`: Use `transport_time` instead.
  * transport_time `integer`: Overall time travelled in seconds, i.e. the sum of each route's transport time.
  * unassigned `object`
    * breaks `array`: An array of ids of unassigned breaks
      * items `string`: Id of unassigned breaks
    * details `array`: An array of details, i.e. reason for unassigned services or shipments
      * items [Detail](#detail)
    * services `array`: An array of ids of unassigned services
      * items `string`: Id of unassigned service
    * shipments `array`: An array of ids of unassigned shipments
      * items `string`: Id of unassigned shipments
  * waiting_time `integer`: Overall waiting time in seconds.

### Stop
* Stop `object`
  * address [Address](#address)
  * duration `integer`: Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.
  * group `string`: Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.
  * preparation_time `integer`: Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
  * time_windows `array`: Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds).
    * items [TimeWindow](#timewindow)

### SymmetricalMatrixRequest
* SymmetricalMatrixRequest `object`
  * curbsides `array`: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
    * items `string`
  * fail_fast `boolean`: Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).
  * out_arrays `array`: Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.
    * items `string`
  * point_hints `array`: Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
    * items `string`
  * points `array`: Specify multiple points for which the weight-, route-, time- or distance-matrix should be calculated as follows: `[longitude,latitude]`. In this case the origins are identical to the destinations. Thus, if there are N points, NxN entries are calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with `from_point` or `to_point.`.
    * items `array`
      * items `number`
  * snap_preventions `array`: Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`
    * items `string`
  * turn_costs `boolean`: Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.
  * vehicle

### TimeWindow
* TimeWindow `object`
  * earliest `integer`: Specifies the opening time of the time window in seconds, i.e. the earliest time the service can start.
  * latest `integer`: Specifies the closing time of the time window in seconds, i.e. the latest time the service can start.

### TimeWindowBreak
* TimeWindowBreak `object`
  * duration **required** `integer`: Specifies the duration of the break in seconds.
  * earliest **required** `integer`: Specifies the earliest start time of the break in seconds.
  * latest **required** `integer`: Specifies the latest start time of break in seconds.

### Vehicle
* Vehicle `object`
  * earliest_start `integer`: Earliest start of vehicle in seconds. It is recommended to use the unix timestamp.
  * end_address [Address](#address)
  * latest_end `integer`: Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest.
  * max_activities `integer`: Specifies the maximum number of activities a vehicle can conduct.
  * max_distance `integer`: Specifies the maximum distance (in meters) a vehicle can go.
  * max_driving_time `integer`: Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here)
  * max_jobs `integer`: Specifies the maximum number of jobs a vehicle can load.
  * move_to_end_address `boolean`: Indicates whether a vehicle should be moved even though it has not been assigned any jobs.
  * return_to_depot `boolean`: If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers' locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location.
  * skills `array`: Array of skills, i.e. array of string (not case sensitive).
    * items `string`
  * start_address **required** [Address](#address)
  * type_id `string`: The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a `car` with a capacity of 0.
  * vehicle_id **required** `string`: Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned.

### VehicleProfileId
* VehicleProfileId `string` (values: car, bike, foot, hike, mtb, racingbike, scooter, truck, small_truck)

### VehicleType
* VehicleType `object`
  * capacity `array`: Specifies an array of capacity dimension values which need to be int values. For example, if there are two dimensions such as volume and weight then it needs to be defined as [ 1000, 300 ] assuming a maximum volume of 1000 and a maximum weight of 300.
    * items `integer`
  * consider_traffic `boolean`: Specifies whether traffic should be considered. if "tomtom" is used and this is false, free flow travel times from "tomtom" are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for "openstreetmap", thus, setting this true has no effect at all.
  * cost_per_activation `number`: **_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle
  * cost_per_meter `number`: **_BETA feature_**! Cost parameter per distance unit, here meter is used
  * cost_per_second `number`: **_BETA feature_**! Cost parameter per time unit, here second is used
  * network_data_provider `string` (values: openstreetmap, tomtom): Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required).
  * profile
  * service_time_factor `number`: Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5.
  * speed_factor `number`: Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5.
  * type_id **required** `string`: Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute.


