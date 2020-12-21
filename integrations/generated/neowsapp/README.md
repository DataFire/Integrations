# @datafire/neowsapp

Client library for NeoWs - (Near Earth Object Web Service)

## Installation and Usage
```bash
npm install --save @datafire/neowsapp
```
```js
let neowsapp = require('@datafire/neowsapp').create();

.then(data => {
  console.log(data);
});
```

## Description

A web service for near earth objects. All the data is from the <a href="http://neo.jpl.nasa.gov/" target="_blank">NASA JPL Asteroid team</a>. 

 

NeoWs is proud to power AsteroidTracker on <a href="https://itunes.apple.com/us/app/asteroid-tracker/id689684901?mt=8" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.vitruviussoftware.bunifish.asteroidtracker&feature" target="_blank">Android</a> as well as related apps. 

 Follow us on <a href="https://twitter.com/AsteroidTracker" target="_blank">Twitter</a>

## Actions

### retrieveNearEarthObjectFeed
Get a list of Near Earth Objects within a date range, The max range in one query is 7 days


```js
neowsapp.retrieveNearEarthObjectFeed({}, context)
```

#### Input
* input `object`
  * start_date `string`: Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)
  * end_date `string`: End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date
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

### retrieveSentryRiskData
Retrieves Near Earth Objects listed in the NASA sentry data set


```js
neowsapp.retrieveSentryRiskData({}, context)
```

#### Input
* input `object`
  * is_active `boolean`: show current list of Sentry objects, or show removed Sentry objects
  * page `integer`: page
  * size `integer`: size

#### Output
* output [SentryObjectPagingDto](#sentryobjectpagingdto)

### retrieveSentryRiskDataById
Retrieves Sentry Near Earth Object by ID


```js
neowsapp.retrieveSentryRiskDataById({
  "asteroid_id": ""
}, context)
```

#### Input
* input `object`
  * asteroid_id **required** `string`: ID of NearEarth object.  ID can be SPK_ID, Asteroid des (designation) or Sentry ID

#### Output
* output [SentryImpactRiskObject](#sentryimpactriskobject)

### retrieveNearEarthObjectById
Retrieve a Near Earth Objects with a given id


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
  * close_approach_date_full `string`
  * epoch_date_close_approach `integer`
  * miss_distance [MissDistance](#missdistance)
  * orbiting_body `string`
  * relative_velocity [RelVelocity](#relvelocity)

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

### HashMap_string_List_NearEarthObject_


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
  * designation `string`
  * estimated_diameter [EstimatedDiameterContainer](#estimateddiametercontainer)
  * is_potentially_hazardous_asteroid `boolean`
  * is_sentry_object `boolean`
  * name `string`
  * name_limited `string`
  * nasa_jpl_url `string`: A Link to the NASA JPL Small-Body Database website
  * neo_reference_id `string`: The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data
  * orbital_data [OrbitalData](#orbitaldata)
  * sentry_data `string`

### NearEarthObjectList
* NearEarthObjectList `object`
  * element_count `integer`: Number of NEOs in list
  * links `object`: Hypermedia links to collection
  * near_earth_objects [HashMap_string_List_NearEarthObject_](#hashmap_string_list_nearearthobject_)

### OrbitClass
* OrbitClass `object`
  * orbit_class_description `string`
  * orbit_class_range `string`
  * orbit_class_type `string` (values: IEO, ATE, APO, AMO, MCA, IMB, MBA, OMB, TJN, CEN, TNO, PAA, HYA, HYP, PAR, COM, JFC, HTC, ETC, CTC, JFc)

### OrbitalData
* OrbitalData `object`
  * aphelion_distance `string`
  * ascending_node_longitude `string`
  * data_arc_in_days `integer`
  * eccentricity `string`
  * epoch_osculation `string`
  * equinox `string`
  * first_observation_date `string`
  * inclination `string`
  * jupiter_tisserand_invariant `string`
  * last_observation_date `string`
  * mean_anomaly `string`
  * mean_motion `string`
  * minimum_orbit_intersection `string`
  * observations_used `integer`
  * orbit_class [OrbitClass](#orbitclass)
  * orbit_determination_date `string`
  * orbit_id `string`
  * orbit_uncertainty `string`
  * orbital_period `string`
  * perihelion_argument `string`
  * perihelion_distance `string`
  * perihelion_time `string`
  * semi_major_axis `string`

### PageMetaData
* PageMetaData `object`
  * number `integer`
  * size `integer`
  * total_elements `integer`
  * total_pages `integer`

### RelVelocity
* RelVelocity `object`
  * kilometers_per_hour `string`
  * miles_per_hour `string`

### SentryImpactRiskObject
* SentryImpactRiskObject `object`
  * Palermo_scale_max `string`
  * absolute_magnitude `string`
  * average_lunar_distance `number`
  * designation `string`
  * estimated_diameter `string`
  * fullname `string`
  * impact_probability `string`
  * is_active_sentry_object `boolean`
  * last_obs `string`
  * last_obs_jd `string`
  * palermo_scale_ave `string`
  * potential_impacts `string`
  * removal_date `string`
  * sentryId `string`
  * torino_scale `string`
  * v_infinity `string`
  * year_range_max `string`
  * year_range_min `string`

### SentryObjectPagingDto
* SentryObjectPagingDto `object`
  * links `object`
  * page [PageMetaData](#pagemetadata)
  * sentry_objects `array`
    * items [SentryImpactRiskObject](#sentryimpactriskobject)

### Statistics
* Statistics `object`
  * close_approach_count `integer`: Number of Close Approach listings across all NEOs listed in NeoWs
  * last_updated `string`: TimeStamp the last time the DB was updated
  * nasa_jpl_url [URL](#url)
  * near_earth_object_count `integer`: Number of NearEarthObjects listed in NeoWs
  * source `string`

### URL
* URL `object`
  * host `string`
  * authority `string`
  * content `object`
  * defaultPort `integer`
  * file `string`
  * path `string`
  * port `integer`
  * protocol `string`
  * query `string`
  * ref `string`
  * userInfo `string`


