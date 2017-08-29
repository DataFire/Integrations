# @datafire/ptv_vic_gov_au

Client library for PTV Timetable API - Version 3

## Installation and Usage
```bash
npm install --save datafire @datafire/ptv_vic_gov_au
```

```js
let datafire = require('datafire');
let ptv_vic_gov_au = require('@datafire/ptv_vic_gov_au').create();

ptv_vic_gov_au.Routes_OneOrMoreRoutes({}).then(data => {
  console.log(data);
})
```

## Description
The PTV Timetable API provides direct access to Public Transport Victoria’s public transport timetable data.

The API returns scheduled timetable, route and stop data for all metropolitan and regional train, tram and bus services in Victoria, including Night Network(Night Train and Night Tram data are included in metropolitan train and tram services data, respectively, whereas Night Bus is a separate route type).

The API also returns real-time data for metropolitan train, tram and bus services (where this data is made available to PTV), as well as disruption information, stop facility information, and access to myki ticket outlet data.

This Swagger is for Version 3 of the PTV Timetable API. By using this documentation you agree to comply with the licence and terms of service.

Train timetable data is updated daily, while the remaining data is updated weekly, taking into account any planned timetable changes (for example, due to holidays or planned disruptions). The PTV timetable API is the same API used by PTV for its apps. To access the most up to date data PTV has (including real-time data) you must use the API dynamically.

You can access the PTV Timetable API through a HTTP or HTTPS interface, as follows:

    base URL / version number / API name / query string
The base URL is either:
  *  http://timetableapi.ptv.vic.gov.au
or
  *  https://timetableapi.ptv.vic.gov.au

The Swagger JSON file is available at http://timetableapi.ptv.vic.gov.au/swagger/docs/v3

Frequently asked questions are available on the PTV website at http://ptv.vic.gov.au/apifaq

Links to the following information are also provided on the PTV website at http://ptv.vic.gov.au/ptv-timetable-api/
* How to register for an API key and calculate a signature
* PTV Timetable API V2 to V3 Migration Guide
* Documentation for Version 2 of the PTV Timetable API
* PTV Timetable API Data Quality Statement

All information about how to use the API is in this documentation. PTV cannot provide technical support for the API.


## Actions
### Departures_GetForStop
View departures for all routes from a stop


```js
ptv_vic_gov_au.Departures_GetForStop({
  "route_type": 0,
  "stop_id": 0
}, context)
```

#### Parameters
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* stop_id (integer) **required** - Identifier of stop; values returned by Stops API
* platform_numbers (array) - Filter by platform number at stop
* direction_id (integer) - Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
* date_utc (string) - Filter by the date and time of the request (ISO 8601 UTC format)
* max_results (integer) - Maximum number of results returned
* gtfs (boolean) - Indicates that stop_id parameter will accept "GTFS stop_id" data
* include_cancelled (boolean) - Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
* expand (array) - List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Departures_GetForStopAndRoute
View departures for a specific route from a stop


```js
ptv_vic_gov_au.Departures_GetForStopAndRoute({
  "route_type": 0,
  "stop_id": 0,
  "route_id": ""
}, context)
```

#### Parameters
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* stop_id (integer) **required** - Identifier of stop; values returned by Stops API
* route_id (string) **required** - Identifier of route; values returned by Routes API - v3/routes
* direction_id (integer) - Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
* date_utc (string) - Filter by the date and time of the request (ISO 8601 UTC format)
* max_results (integer) - Maximum number of results returned
* gtfs (boolean) - Indicates that stop_id parameter will accept "GTFS stop_id" data
* include_cancelled (boolean) - Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
* expand (array) - List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Directions_ForRoute
View directions that a route travels in


```js
ptv_vic_gov_au.Directions_ForRoute({
  "route_id": 0
}, context)
```

#### Parameters
* route_id (integer) **required** - Identifier of route; values returned by Routes API - v3/routes
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Directions_ForDirection
View all routes for a direction of travel


```js
ptv_vic_gov_au.Directions_ForDirection({
  "direction_id": 0
}, context)
```

#### Parameters
* direction_id (integer) **required** - Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Directions_ForDirectionAndType
View all routes of a particular type for a direction of travel


```js
ptv_vic_gov_au.Directions_ForDirectionAndType({
  "direction_id": 0,
  "route_type": 0
}, context)
```

#### Parameters
* direction_id (integer) **required** - Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Disruptions_GetAllDisruptions
View all disruptions for all route types


```js
ptv_vic_gov_au.Disruptions_GetAllDisruptions({}, context)
```

#### Parameters
* route_types (array) - Filter by route_type; values returned via RouteTypes API
* disruption_status (string) - Filter by status of disruption
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Disruptions_GetDisruptionsByRoute
View all disruptions for a particular route


```js
ptv_vic_gov_au.Disruptions_GetDisruptionsByRoute({
  "route_id": 0
}, context)
```

#### Parameters
* route_id (integer) **required** - Identifier of route; values returned by Routes API - v3/routes
* disruption_status (string) - Filter by status of disruption
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Disruptions_GetDisruptionById
View a specific disruption


```js
ptv_vic_gov_au.Disruptions_GetDisruptionById({
  "disruption_id": 0
}, context)
```

#### Parameters
* disruption_id (integer) **required** - Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id}
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Patterns_GetPatternByRun
View the stopping pattern for a specific trip/service run


```js
ptv_vic_gov_au.Patterns_GetPatternByRun({
  "run_id": 0,
  "route_type": 0
}, context)
```

#### Parameters
* run_id (integer) **required** - Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* stop_id (integer) - Filter by stop_id; values returned by Stops API
* date_utc (string) - Filter by the date and time of the request (ISO 8601 UTC format)
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### RouteTypes_GetRouteTypes
View all route types and their names


```js
ptv_vic_gov_au.RouteTypes_GetRouteTypes({}, context)
```

#### Parameters
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Routes_OneOrMoreRoutes
View route names and numbers for all routes


```js
ptv_vic_gov_au.Routes_OneOrMoreRoutes({}, context)
```

#### Parameters
* route_types (array) - Filter by route_type; values returned via RouteTypes API
* route_name (string) - Filter by name  of route (accepts partial route name matches)
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Routes_RouteFromId
View route name and number for specific route ID


```js
ptv_vic_gov_au.Routes_RouteFromId({
  "route_id": 0
}, context)
```

#### Parameters
* route_id (integer) **required** - Identifier of route; values returned by Departures, Directions and Disruptions APIs
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Runs_ForRoute
View all trip/service runs for a specific route ID


```js
ptv_vic_gov_au.Runs_ForRoute({
  "route_id": 0
}, context)
```

#### Parameters
* route_id (integer) **required** - Identifier of route; values returned by Routes API - v3/routes.
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Runs_ForRun
View all trip/service runs for a specific run ID


```js
ptv_vic_gov_au.Runs_ForRun({
  "run_id": 0
}, context)
```

#### Parameters
* run_id (integer) **required** - Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Runs_ForRunAndRouteType
View the trip/service run for a specific run ID and route type


```js
ptv_vic_gov_au.Runs_ForRunAndRouteType({
  "run_id": 0,
  "route_type": 0
}, context)
```

#### Parameters
* run_id (integer) **required** - Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Search_Search
View stops, routes and myki ticket outlets that match the search term


```js
ptv_vic_gov_au.Search_Search({
  "search_term": ""
}, context)
```

#### Parameters
* search_term (string) **required** - Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)
* route_types (array) - Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)
* latitude (number) - Filter by geographic coordinate of latitude
* longitude (number) - Filter by geographic coordinate of longitude
* max_distance (number) - Filter by maximum distance (in metres) from location specified via latitude and longitude parameters
* include_addresses (boolean) - Placeholder for future development; currently unavailable
* include_outlets (boolean) - Indicates if outlets will be returned in response (default = true)
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Stops_StopsByGeolocation
View all stops near a specific location


```js
ptv_vic_gov_au.Stops_StopsByGeolocation({
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Parameters
* latitude (number) **required** - Geographic coordinate of latitude
* longitude (number) **required** - Geographic coordinate of longitude
* route_types (array) - Filter by route_type; values returned via RouteTypes API
* max_results (integer) - Maximum number of results returned (default = 30)
* max_distance (number) - Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Stops_StopsForRoute
View all stops on a specific route


```js
ptv_vic_gov_au.Stops_StopsForRoute({
  "route_id": 0,
  "route_type": 0
}, context)
```

#### Parameters
* route_id (integer) **required** - Identifier of route; values returned by Routes API - v3/routes
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

### Stops_StopDetails
View facilities at a specific stop (Metro and V/Line stations only)


```js
ptv_vic_gov_au.Stops_StopDetails({
  "stop_id": 0,
  "route_type": 0
}, context)
```

#### Parameters
* stop_id (integer) **required** - Identifier of stop; values returned by Stops API
* route_type (integer) **required** - Number identifying transport mode; values returned via RouteTypes API
* stop_location (boolean) - Indicates if stop location information will be returned (default = false)
* stop_amenities (boolean) - Indicates if stop amenity information will be returned (default = false)
* stop_accessibility (boolean) - Indicates if stop accessibility information will be returned (default = false)
* stop_contact (boolean) - Placeholder for future development; currently unavailable
* stop_ticket (boolean) - Placeholder for future development; currently unavailable
* token (string) - Please ignore
* devid (string) - Your developer id
* signature (string) - Authentication signature for request

