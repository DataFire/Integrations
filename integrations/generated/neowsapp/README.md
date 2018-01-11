# @datafire/neowsapp

Client library for NeoWs - (Near Earth Object Web Service)

## Installation and Usage
```bash
npm install --save @datafire/neowsapp
```
```js
let neowsapp = require('@datafire/neowsapp').create();

neowsapp.browseNearEarthObjects({}).then(data => {
  console.log(data);
})
```

## Description

A web service for near earth objects. All the data is from the  <a href="http://neo.jpl.nasa.gov/" target="_blank">NASA JPL Asteroid team</a>. 

 

NeoWs is proud to power AsteroidTracker on <a href="https://itunes.apple.com/us/app/asteroid-tracker/id689684901?mt=8" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.vitruviussoftware.bunifish.asteroidtracker&feature" target="_blank">Android</a> as well as related apps. 

 Get <a href="http://apps.getpebble.com/en_US/application/55bc4913d1690c372900000f" target="_blank">Asteroid Today on Pebble</a> 

Follow us on <a href="https://twitter.com/AsteroidTracker" target="_blank">Twitter</a>

## Actions

### retrieveNearEarthObjectFeed
Get a list of Near Earth Objects within a date range, The max range in one query is 7 days


```js
neowsapp.retrieveNearEarthObjectFeed({
  "end_date": ""
}, context)
```

#### Input
* input `object`
  * start_date `string`: Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)
  * end_date **required** `string`: End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date
  * detailed `boolean`: detailed

#### Output
* output [NearEarthObjectList](#nearearthobjectlist)

### retrieveNEOFeedToday
Get a list of Near Earth Objects for today


```js
neowsapp.retrieveNEOFeedToday({}, context)
```

#### Input
* input `object`
  * detailed `boolean`: detailed

#### Output
* output [NearEarthObjectList](#nearearthobjectlist)

### browseNearEarthObjects
Retieve a paginated list of Near Earth Objects


```js
neowsapp.browseNearEarthObjects({}, context)
```

#### Input
* input `object`
  * page `integer`: page
  * size `integer`: size

#### Output
* output [NearEarthObject](#nearearthobject)

### retrieveNearEarthObjectById
Retieve a Near Earth Objects with a given id


```js
neowsapp.retrieveNearEarthObjectById({
  "asteroid_id": ""
}, context)
```

#### Input
* input `object`
  * asteroid_id **required** `string`: ID of Near Earth Object - (ex: 3729835)

#### Output
* output [NearEarthObject](#nearearthobject)

### retrieveCurrentNeoStatistics
retrieveCurrentNeoStatistics


```js
neowsapp.retrieveCurrentNeoStatistics(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Statistics](#statistics)



## Definitions

### CloseApproachData
* CloseApproachData `object`
  * close_approach_date `string`
  * epoch_date_close_approach `integer`
  * miss_distance [MissDistance](#missdistance)
  * orbiting_body `string`
  * relative_velocity [relativeVelocity](#relativevelocity)

### EstimatedDiameter
* EstimatedDiameter `object`
  * estimated_diameter_max `number`: An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude
  * estimated_diameter_min `number`: An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude

### EstimatedDiameterContainer
* EstimatedDiameterContainer `object`
  * feet [EstimatedDiameter](#estimateddiameter)
  * kilometers [EstimatedDiameter](#estimateddiameter)
  * meters [EstimatedDiameter](#estimateddiameter)
  * miles [EstimatedDiameter](#estimateddiameter)

### HashMap«string,List«NearEarthObject»»


### Link
* Link `object`
  * href `string`
  * rel `string`
  * templated `boolean`

### MissDistance
* MissDistance `object`
  * astronomical `string`
  * kilometers `string`
  * lunar `string`
  * miles `string`

### NearEarthObject
* NearEarthObject `object`
  * absolute_magnitude_h `number`: Is a measure of an asteroids brightness
  * close_approach_data `array`: Close approach information of the Asteroid
    * items [CloseApproachData](#closeapproachdata)
  * estimated_diameter [EstimatedDiameterContainer](#estimateddiametercontainer)
  * is_potentially_hazardous_asteroid `boolean`
  * name `string`
  * nasa_jpl_url `string`: A Link to the NASA JPL Small-Body Database website
  * neo_reference_id `string`: The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data
  * orbital_data [OrbitalData](#orbitaldata)

### NearEarthObjectList
* NearEarthObjectList `object`
  * element_count `integer`: Number of NEOs in list
  * links `object`: Hypermedia links to collection
  * near_earth_objects [HashMap«string,List«NearEarthObject»»](#hashmap«string,list«nearearthobject»»)

### OrbitalData
* OrbitalData `object`
  * aphelion_distance `string`
  * ascending_node_longitude `string`
  * eccentricity `string`
  * epoch_osculation `string`
  * equinox `string`
  * inclination `string`
  * jupiter_tisserand_invariant `string`
  * mean_anomaly `string`
  * mean_motion `string`
  * minimum_orbit_intersection `string`
  * orbit_determination_date `string`
  * orbit_id `string`
  * orbit_uncertainty `string`
  * orbital_period `string`
  * perihelion_argument `string`
  * perihelion_distance `string`
  * perihelion_time `string`
  * semi_major_axis `string`

### Statistics
* Statistics `object`
  * close_approach_count `integer`: Number of Close Approach listings across all NEOs listed in NeoWs
  * last_updated `string`: TimeStamp the last time the DB was updated
  * links `array`
    * items [Link](#link)
  * nasa_jpl_url [URL](#url)
  * near_earth_object_count `integer`: Number of NearEarthObjects listed in NeoWs
  * source `string`

### URL
* URL `object`
  * authority `string`
  * content `object`
  * defaultPort `integer`
  * file `string`
  * host `string`
  * path `string`
  * port `integer`
  * protocol `string`
  * query `string`
  * ref `string`
  * userInfo `string`

### relativeVelocity
* relativeVelocity `object`
  * kilometers_per_hour `string`
  * miles_per_hour `string`


