# @datafire/ptv_vic_gov_au

Client library for PTV Timetable API - Version 3

## Installation and Usage
```bash
npm install --save @datafire/ptv_vic_gov_au
```
```js
let ptv_vic_gov_au = require('@datafire/ptv_vic_gov_au').create();

.then(data => {
  console.log(data);
});
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

Credits: This page has been based on Steve Bennett's http://opentransportdata.org/, used with permission.


## Actions

### Departures_GetForStop
View departures for all routes from a stop


```js
ptv_vic_gov_au.Departures_GetForStop({
  "route_type": 0,
  "stop_id": 0
}, context)
```

#### Input
* input `object`
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * stop_id **required** `integer`: Identifier of stop; values returned by Stops API
  * platform_numbers `array`: Filter by platform number at stop
  * direction_id `integer`: Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
  * look_backwards `boolean`: Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
  * gtfs `boolean`: Indicates that stop_id parameter will accept "GTFS stop_id" data
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
  * max_results `integer`: Maximum number of results returned
  * include_cancelled `boolean`: Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
  * expand `array`: List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DeparturesResponse](#v3.departuresresponse)

### Departures_GetForStopAndRoute
View departures for a specific route from a stop


```js
ptv_vic_gov_au.Departures_GetForStopAndRoute({
  "route_type": 0,
  "stop_id": 0,
  "route_id": ""
}, context)
```

#### Input
* input `object`
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * stop_id **required** `integer`: Identifier of stop; values returned by Stops API
  * route_id **required** `string`: Identifier of route; values returned by Routes API - v3/routes
  * direction_id `integer`: Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
  * look_backwards `boolean`: Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
  * gtfs `boolean`: Indicates that stop_id parameter will accept "GTFS stop_id" data
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
  * max_results `integer`: Maximum number of results returned
  * include_cancelled `boolean`: Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
  * expand `array`: List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DeparturesResponse](#v3.departuresresponse)

### Directions_ForRoute
View directions that a route travels in


```js
ptv_vic_gov_au.Directions_ForRoute({
  "route_id": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Routes API - v3/routes
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DirectionsResponse](#v3.directionsresponse)

### Directions_ForDirection
View all routes for a direction of travel


```js
ptv_vic_gov_au.Directions_ForDirection({
  "direction_id": 0
}, context)
```

#### Input
* input `object`
  * direction_id **required** `integer`: Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DirectionsResponse](#v3.directionsresponse)

### Directions_ForDirectionAndType
View all routes of a particular type for a direction of travel


```js
ptv_vic_gov_au.Directions_ForDirectionAndType({
  "direction_id": 0,
  "route_type": 0
}, context)
```

#### Input
* input `object`
  * direction_id **required** `integer`: Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DirectionsResponse](#v3.directionsresponse)

### Disruptions_GetAllDisruptions
View all disruptions for all route types


```js
ptv_vic_gov_au.Disruptions_GetAllDisruptions({}, context)
```

#### Input
* input `object`
  * route_types `array`: Filter by route_type; values returned via RouteTypes API
  * disruption_modes `array`: Filter by disruption_mode; values returned via v3/disruptions/modes API
  * disruption_status `string` (values: current, planned): Filter by status of disruption
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DisruptionsResponse](#v3.disruptionsresponse)

### Disruptions_GetDisruptionModes
Get all disruption modes


```js
ptv_vic_gov_au.Disruptions_GetDisruptionModes({}, context)
```

#### Input
* input `object`
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DisruptionModesResponse](#v3.disruptionmodesresponse)

### Disruptions_GetDisruptionsByRoute
View all disruptions for a particular route


```js
ptv_vic_gov_au.Disruptions_GetDisruptionsByRoute({
  "route_id": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Routes API - v3/routes
  * disruption_status `string` (values: current, planned): Filter by status of disruption
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DisruptionsResponse](#v3.disruptionsresponse)

### Disruptions_GetDisruptionsByRouteAndStop
View all disruptions for a particular route and stop


```js
ptv_vic_gov_au.Disruptions_GetDisruptionsByRouteAndStop({
  "route_id": 0,
  "stop_id": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Routes API - v3/routes
  * stop_id **required** `integer`: Identifier of stop; values returned by Stops API - v3/stops
  * disruption_status `string` (values: current, planned): Filter by status of disruption
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DisruptionsResponse](#v3.disruptionsresponse)

### Disruptions_GetDisruptionsByStop
View all disruptions for a particular stop


```js
ptv_vic_gov_au.Disruptions_GetDisruptionsByStop({
  "stop_id": 0
}, context)
```

#### Input
* input `object`
  * stop_id **required** `integer`: Identifier of stop; values returned by Stops API - v3/stops
  * disruption_status `string` (values: current, planned): Filter by status of disruption
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DisruptionsResponse](#v3.disruptionsresponse)

### Disruptions_GetDisruptionById
View a specific disruption


```js
ptv_vic_gov_au.Disruptions_GetDisruptionById({
  "disruption_id": 0
}, context)
```

#### Input
* input `object`
  * disruption_id **required** `integer`: Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id}
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.DisruptionResponse](#v3.disruptionresponse)

### Outlets_GetAllOutlets
List all ticket outlets


```js
ptv_vic_gov_au.Outlets_GetAllOutlets({}, context)
```

#### Input
* input `object`
  * max_results `integer`: Maximum number of results returned (default = 30)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.OutletResponse](#v3.outletresponse)

### Outlets_GetOutletsByGeolocation
List ticket outlets near a specific location


```js
ptv_vic_gov_au.Outlets_GetOutletsByGeolocation({
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: Geographic coordinate of latitude
  * longitude **required** `number`: Geographic coordinate of longitude
  * max_distance `number`: Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
  * max_results `integer`: Maximum number of results returned (default = 30)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.OutletGeolocationResponse](#v3.outletgeolocationresponse)

### Patterns_GetPatternByRun
View the stopping pattern for a specific trip/service run


```js
ptv_vic_gov_au.Patterns_GetPatternByRun({
  "run_id": 0,
  "route_type": 0,
  "expand": []
}, context)
```

#### Input
* input `object`
  * run_id **required** `integer`: Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * expand **required** `array`: Objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption. By default disruptions are expanded.
  * stop_id `integer`: Filter by stop_id; values returned by Stops API
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.StoppingPattern](#v3.stoppingpattern)

### RouteTypes_GetRouteTypes
View all route types and their names


```js
ptv_vic_gov_au.RouteTypes_GetRouteTypes({}, context)
```

#### Input
* input `object`
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RouteTypesResponse](#v3.routetypesresponse)

### Routes_OneOrMoreRoutes
View route names and numbers for all routes


```js
ptv_vic_gov_au.Routes_OneOrMoreRoutes({}, context)
```

#### Input
* input `object`
  * route_types `array`: Filter by route_type; values returned via RouteTypes API
  * route_name `string`: Filter by name  of route (accepts partial route name matches)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RouteResponse](#v3.routeresponse)

### Routes_RouteFromId
View route name and number for specific route ID


```js
ptv_vic_gov_au.Routes_RouteFromId({
  "route_id": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Departures, Directions and Disruptions APIs
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RouteResponse](#v3.routeresponse)

### Runs_ForRoute
View all trip/service runs for a specific route ID


```js
ptv_vic_gov_au.Runs_ForRoute({
  "route_id": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Routes API - v3/routes.
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RunsResponse](#v3.runsresponse)

### Runs_ForRouteAndRouteType
View all trip/service runs for a specific route ID and route type


```js
ptv_vic_gov_au.Runs_ForRouteAndRouteType({
  "route_id": 0,
  "route_type": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Routes API - v3/routes.
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RunsResponse](#v3.runsresponse)

### Runs_ForRun
View all trip/service runs for a specific run ID


```js
ptv_vic_gov_au.Runs_ForRun({
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * run_id **required** `integer`: Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RunsResponse](#v3.runsresponse)

### Runs_ForRunAndRouteType
View the trip/service run for a specific run ID and route type


```js
ptv_vic_gov_au.Runs_ForRunAndRouteType({
  "run_id": 0,
  "route_type": 0
}, context)
```

#### Input
* input `object`
  * run_id **required** `integer`: Identifier of a trip/service run; values returned by Runs API - /v3/route/{route_id} and Departures API
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.RunResponse](#v3.runresponse)

### Search_Search
View stops, routes and myki ticket outlets that match the search term


```js
ptv_vic_gov_au.Search_Search({
  "search_term": ""
}, context)
```

#### Input
* input `object`
  * search_term **required** `string`: Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)
  * route_types `array`: Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)
  * latitude `number`: Filter by geographic coordinate of latitude
  * longitude `number`: Filter by geographic coordinate of longitude
  * max_distance `number`: Filter by maximum distance (in metres) from location specified via latitude and longitude parameters
  * include_addresses `boolean`: Placeholder for future development; currently unavailable
  * include_outlets `boolean`: Indicates if outlets will be returned in response (default = true)
  * match_stop_by_suburb `boolean`: Indicates whether to find stops by suburbs in the search term (default = true)
  * match_route_by_suburb `boolean`: Indicates whether to find routes by suburbs in the search term (default = true)
  * match_stop_by_gtfs_stop_id `boolean`: Indicates whether to search for stops according to a metlink stop ID (default = false)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.SearchResult](#v3.searchresult)

### Stops_StopsByGeolocation
View all stops near a specific location


```js
ptv_vic_gov_au.Stops_StopsByGeolocation({
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: Geographic coordinate of latitude
  * longitude **required** `number`: Geographic coordinate of longitude
  * route_types `array`: Filter by route_type; values returned via RouteTypes API
  * max_results `integer`: Maximum number of results returned (default = 30)
  * max_distance `number`: Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
  * stop_disruptions `boolean`: Indicates if stop disruption information will be returned (default = false)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.StopsByDistanceResponse](#v3.stopsbydistanceresponse)

### Stops_StopsForRoute
View all stops on a specific route


```js
ptv_vic_gov_au.Stops_StopsForRoute({
  "route_id": 0,
  "route_type": 0
}, context)
```

#### Input
* input `object`
  * route_id **required** `integer`: Identifier of route; values returned by Routes API - v3/routes
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * direction_id `integer`: An optional direction; values returned by Directions API. When this is set, stop sequence information is returned in the response.
  * stop_disruptions `boolean`: Indicates if stop disruption information will be returned (default = false)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.StopsOnRouteResponse](#v3.stopsonrouteresponse)

### Stops_StopDetails
View facilities at a specific stop (Metro and V/Line stations only)


```js
ptv_vic_gov_au.Stops_StopDetails({
  "stop_id": 0,
  "route_type": 0
}, context)
```

#### Input
* input `object`
  * stop_id **required** `integer`: Identifier of stop; values returned by Stops API
  * route_type **required** `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * stop_location `boolean`: Indicates if stop location information will be returned (default = false)
  * stop_amenities `boolean`: Indicates if stop amenity information will be returned (default = false)
  * stop_accessibility `boolean`: Indicates if stop accessibility information will be returned (default = false)
  * stop_contact `boolean`: Indicates if stop contact information will be returned (default = false)
  * stop_ticket `boolean`: Indicates if stop ticket information will be returned (default = false)
  * gtfs `boolean`: Incdicates whether the stop_id is a GTFS ID or not
  * stop_staffing `boolean`: Indicates if stop staffing information will be returned (default = false)
  * stop_disruptions `boolean`: Indicates if stop disruption information will be returned (default = false)
  * token `string`: Please ignore
  * devid `string`: Your developer id
  * signature `string`: Authentication signature for request

#### Output
* output [V3.StopResponse](#v3.stopresponse)



## Definitions

### V2.Object
* V2.Object `object`

### V3.BulkDeparturesRequest
* V3.BulkDeparturesRequest `object`
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
  * expand `array`: List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
    * items `string` (values: All, Stop, Route, Run, Direction, Disruption)
  * include_cancelled `boolean`: Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
  * look_backwards `boolean`: Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
  * requests **required** `array`: Collection of departure requests
    * items [V3.StopDepartureRequest](#v3.stopdeparturerequest)

### V3.BulkDeparturesResponse
* V3.BulkDeparturesResponse `object`
  * directions `array`: Directions of travel of route
    * items [V3.Direction](#v3.direction)
  * disruptions `object`: Disruption information applicable to relevant routes or stops
  * responses `array`: Contains departures for the requested stop and route(s). It includes details as to the route_direction and whether it is still valid.
    * items [V3.BulkDeparturesUpdateResponse](#v3.bulkdeparturesupdateresponse)
  * routes `array`: Train lines, tram routes, bus routes, regional coach routes, Night Bus routes
    * items [V3.Route](#v3.route)
  * runs `array`: Individual trips/services of a route
    * items [V3.Run](#v3.run)
  * status [V3.Status](#v3.status)
  * stops `object`: A train station, tram stop, bus stop, regional coach stop or Night Bus stop

### V3.BulkDeparturesRouteDirectionResponse
* V3.BulkDeparturesRouteDirectionResponse `object`
  * direction_id `integer`: Direction of travel identifier
  * direction_name `string`: Name of direction of travel
  * route_id `string`: Route identifier

### V3.BulkDeparturesStopResponse
* V3.BulkDeparturesStopResponse `object`
  * stop_id `integer`: Stop identifier
  * stop_latitude `number`: Geographic coordinate of latitude at stop
  * stop_longitude `number`: Geographic coordinate of longitude at stop
  * stop_name `string`: Name of stop
  * stop_suburb `string`: suburb of stop

### V3.BulkDeparturesUpdateResponse
* V3.BulkDeparturesUpdateResponse `object`
  * departures `array`: Timetabled and real-time service departures
    * items [V3.Departure](#v3.departure)
  * requested_route_direction [V3.BulkDeparturesRouteDirectionResponse](#v3.bulkdeparturesroutedirectionresponse)
  * route_direction [V3.BulkDeparturesRouteDirectionResponse](#v3.bulkdeparturesroutedirectionresponse)
  * route_direction_status `integer` (values: 0, 1): The status of the route direction (changed | unchanged).
  * route_type `integer`: Transport mode identifier
  * stop_id `integer`: Stop identifier

### V3.Departure
* V3.Departure `object`
  * at_platform `boolean`: Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes
  * departure_sequence `integer`: Chronological sequence of the departure for the run on the route. Order ascendingly by this field to get chronological order (earliest first) of departures with the same route_id and run_id.
  * direction_id `integer`: Direction of travel identifier
  * disruption_ids `array`: Disruption information identifier(s)
    * items `integer`
  * estimated_departure_utc `string`: Real-time estimate of departure time and date in ISO 8601 UTC format
  * flags `string`: Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag)
  * platform_number `string`: Platform number at stop (metropolitan train only; returns null for other modes)
  * route_id `integer`: Route identifier
  * run_id `integer`: Trip/service run identifier
  * scheduled_departure_utc `string`: Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format
  * stop_id `integer`: Stop identifier

### V3.DeparturesBroadParameters
* V3.DeparturesBroadParameters `object`
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
  * direction_id `integer`: Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
  * expand `array`: List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
    * items `string` (values: All, Stop, Route, Run, Direction, Disruption)
  * gtfs `boolean`: Indicates that stop_id parameter will accept "GTFS stop_id" data
  * include_cancelled `boolean`: Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
  * look_backwards `boolean`: Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
  * max_results `integer`: Maximum number of results returned
  * platform_numbers `array`: Filter by platform number at stop
    * items `integer`

### V3.DeparturesResponse
* V3.DeparturesResponse `object`
  * departures `array`: Timetabled and real-time service departures
    * items [V3.Departure](#v3.departure)
  * directions `object`: Directions of travel of route
  * disruptions `object`: Disruption information applicable to relevant routes or stops
  * routes `object`: Train lines, tram routes, bus routes, regional coach routes, Night Bus routes
  * runs `object`: Individual trips/services of a route
  * status [V3.Status](#v3.status)
  * stops `object`: A train station, tram stop, bus stop, regional coach stop or Night Bus stop

### V3.DeparturesSpecificParameters
* V3.DeparturesSpecificParameters `object`
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
  * direction_id `integer`: Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
  * expand `array`: List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
    * items `string` (values: All, Stop, Route, Run, Direction, Disruption)
  * gtfs `boolean`: Indicates that stop_id parameter will accept "GTFS stop_id" data
  * include_cancelled `boolean`: Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
  * look_backwards `boolean`: Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
  * max_results `integer`: Maximum number of results returned

### V3.Direction
* V3.Direction `object`
  * direction_id `integer`: Direction of travel identifier
  * direction_name `string`: Name of direction of travel
  * route_id `integer`: Route identifier
  * route_type `integer`: Transport mode identifier

### V3.DirectionWithDescription
* V3.DirectionWithDescription `object`
  * direction_id `integer`: Direction of travel identifier
  * direction_name `string`: Name of direction of travel
  * route_direction_description `string`
  * route_id `integer`: Route identifier
  * route_type `integer`: Transport mode identifier

### V3.DirectionsResponse
* V3.DirectionsResponse `object`
  * directions `array`: Directions of travel of route
    * items [V3.DirectionWithDescription](#v3.directionwithdescription)
  * status [V3.Status](#v3.status)

### V3.Disruption
* V3.Disruption `object`
  * colour `string`
  * description `string`: Description of the disruption
  * display_on_board `boolean`
  * display_status `boolean`
  * disruption_id `integer`: Disruption information identifier
  * disruption_status `string`: Status of the disruption (e.g. "Planned", "Current")
  * disruption_type `string`: Type of disruption
  * from_date `string`: Date and time at which disruption begins, in ISO 8601 UTC format
  * last_updated `string`: Date and time disruption information was last updated by PTV, in ISO 8601 UTC format
  * published_on `string`: Date and time disruption information is published on PTV website, in ISO 8601 UTC format
  * routes `array`: Route relevant to a disruption (if applicable)
    * items [V3.DisruptionRoute](#v3.disruptionroute)
  * stops `array`: Stop relevant to a disruption (if applicable)
    * items [V3.DisruptionStop](#v3.disruptionstop)
  * title `string`: Headline title summarising disruption information
  * to_date `string`: Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown)
  * url `string`: URL of relevant article on PTV website

### V3.DisruptionDirection
* V3.DisruptionDirection `object`
  * direction_id `integer`: Direction of travel identifier
  * direction_name `string`: Name of direction of travel
  * route_direction_id `integer`: Route and direction of travel combination identifier
  * service_time `string`: Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services

### V3.DisruptionMode
* V3.DisruptionMode `object`
  * disruption_mode `integer`: Disruption mode identifier
  * disruption_mode_name `string`: Name of disruption mode

### V3.DisruptionModesResponse
* V3.DisruptionModesResponse `object`
  * disruption_modes `array`: Transport mode identifiers
    * items [V3.DisruptionMode](#v3.disruptionmode)
  * status [V3.Status](#v3.status)

### V3.DisruptionResponse
* V3.DisruptionResponse `object`
  * disruption [V3.Disruption](#v3.disruption)
  * status [V3.Status](#v3.status)

### V3.DisruptionRoute
* V3.DisruptionRoute `object`
  * direction [V3.DisruptionDirection](#v3.disruptiondirection)
  * route_gtfs_id `string`: GTFS Identifer of the route
  * route_id `integer`: Route identifier
  * route_name `string`: Name of route
  * route_number `string`: Route number presented to public (i.e. not route_id)
  * route_type `integer`: Transport mode identifier

### V3.DisruptionStop
* V3.DisruptionStop `object`
  * stop_id `integer`: Stop identifier
  * stop_name `string`: Name of stop

### V3.Disruptions
* V3.Disruptions `object`
  * ferry `array`: Subset of disruption information applicable to ferry
    * items [V3.Disruption](#v3.disruption)
  * general `array`: Subset of disruption information applicable to multiple route_types
    * items [V3.Disruption](#v3.disruption)
  * interstate_train `array`: Subset of disruption information applicable to interstate train
    * items [V3.Disruption](#v3.disruption)
  * metro_bus `array`: Subset of disruption information applicable to metropolitan bus
    * items [V3.Disruption](#v3.disruption)
  * metro_train `array`: Subset of disruption information applicable to metropolitan train
    * items [V3.Disruption](#v3.disruption)
  * metro_tram `array`: Subset of disruption information applicable to metropolitan tram
    * items [V3.Disruption](#v3.disruption)
  * night_bus `array`: Subset of disruption information applicable to night bus
    * items [V3.Disruption](#v3.disruption)
  * regional_bus `array`: Subset of disruption information applicable to regional bus
    * items [V3.Disruption](#v3.disruption)
  * regional_coach `array`: Subset of disruption information applicable to V/Line coach
    * items [V3.Disruption](#v3.disruption)
  * regional_train `array`: Subset of disruption information applicable to V/Line train
    * items [V3.Disruption](#v3.disruption)
  * school_bus `array`: Subset of disruption information applicable to school bus
    * items [V3.Disruption](#v3.disruption)
  * skybus `array`: Subset of disruption information applicable to skybus
    * items [V3.Disruption](#v3.disruption)
  * taxi `array`: Subset of disruption information applicable to taxi
    * items [V3.Disruption](#v3.disruption)
  * telebus `array`: Subset of disruption information applicable to telebus services
    * items [V3.Disruption](#v3.disruption)

### V3.DisruptionsResponse
* V3.DisruptionsResponse `object`
  * disruptions [V3.Disruptions](#v3.disruptions)
  * status [V3.Status](#v3.status)

### V3.ErrorResponse
* V3.ErrorResponse `object`: An error response
  * message `string`: Error message
  * status [V3.Status](#v3.status)

### V3.Outlet
* V3.Outlet `object`
  * outlet_business `string`: The business name of the outlet
  * outlet_business_hour_fri `string`: The business hours on Friday
  * outlet_business_hour_mon `string`: The business hours on Monday
  * outlet_business_hour_sat `string`: The business hours on Saturday
  * outlet_business_hour_sun `string`: The business hours on Sunday
  * outlet_business_hour_thur `string`: The business hours on Thursday
  * outlet_business_hour_tue `string`: The business hours on Tuesday
  * outlet_business_hour_wed `string`: The business hours on Wednesday
  * outlet_latitude `number`: Geographic coordinate of latitude at outlet
  * outlet_longitude `number`: Geographic coordinate of longitude at outlet
  * outlet_name `string`: The location name of the outlet
  * outlet_notes `string`: Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.
  * outlet_postcode `integer`: The postcode for the outlet
  * outlet_slid_spid `string`: The SLID / SPID
  * outlet_suburb `string`: The city/municipality the outlet is in

### V3.OutletGeolocation
* V3.OutletGeolocation `object`
  * outlet_business `string`: The business name of the outlet
  * outlet_business_hour_fri `string`: The business hours on Friday
  * outlet_business_hour_mon `string`: The business hours on Monday
  * outlet_business_hour_sat `string`: The business hours on Saturday
  * outlet_business_hour_sun `string`: The business hours on Sunday
  * outlet_business_hour_thur `string`: The business hours on Thursday
  * outlet_business_hour_tue `string`: The business hours on Tuesday
  * outlet_business_hour_wed `string`: The business hours on Wednesday
  * outlet_distance `number`: Distance of outlet from input location (in metres); returns 0 if no location is input
  * outlet_latitude `number`: Geographic coordinate of latitude at outlet
  * outlet_longitude `number`: Geographic coordinate of longitude at outlet
  * outlet_name `string`: The location name of the outlet
  * outlet_notes `string`: Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.
  * outlet_postcode `integer`: The postcode for the outlet
  * outlet_slid_spid `string`: The SLID / SPID
  * outlet_suburb `string`: The city/municipality the outlet is in

### V3.OutletGeolocationParameters
* V3.OutletGeolocationParameters `object`
  * max_distance `number`: Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
  * max_results `integer`: Maximum number of results returned (default = 30)

### V3.OutletGeolocationResponse
* V3.OutletGeolocationResponse `object`
  * outlets `array`: myki ticket outlets
    * items [V3.OutletGeolocation](#v3.outletgeolocation)
  * status [V3.Status](#v3.status)

### V3.OutletParameters
* V3.OutletParameters `object`
  * max_results `integer`: Maximum number of results returned (default = 30)

### V3.OutletResponse
* V3.OutletResponse `object`
  * outlets `array`: myki ticket outlets
    * items [V3.Outlet](#v3.outlet)
  * status [V3.Status](#v3.status)

### V3.ResultOutlet
* V3.ResultOutlet `object`
  * outlet_business `string`: The business name of the outlet
  * outlet_business_hour_fri `string`: The business hours on Friday
  * outlet_business_hour_mon `string`: The business hours on Monday
  * outlet_business_hour_sat `string`: The business hours on Saturday
  * outlet_business_hour_sun `string`: The business hours on Sunday
  * outlet_business_hour_thur `string`: The business hours on Thursday
  * outlet_business_hour_tue `string`: The business hours on Tuesday
  * outlet_business_hour_wed `string`: The business hours on Wednesday
  * outlet_distance `number`: Distance of outlet from input location (in metres); returns 0 if no location is input
  * outlet_latitude `number`: Geographic coordinate of latitude at outlet
  * outlet_longitude `number`: Geographic coordinate of longitude at outlet
  * outlet_name `string`: The location name of the outlet
  * outlet_notes `string`: Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.
  * outlet_postcode `integer`: The postcode for the outlet
  * outlet_slid_spid `string`: The SLID / SPID
  * outlet_suburb `string`: The city/municipality the outlet is in

### V3.ResultRoute
* V3.ResultRoute `object`
  * route_gtfs_id `string`: GTFS Identifer of the route
  * route_id `integer`: Route identifier
  * route_name `string`: Name of route
  * route_number `string`: Route number presented to public (nb. not route_id)
  * route_service_status [V3.RouteServiceStatus](#v3.routeservicestatus)
  * route_type `integer`: Transport mode identifier

### V3.ResultStop
* V3.ResultStop `object`
  * route_type `integer`: Transport mode identifier
  * stop_distance `number`: Distance of stop from input location (in metres); returns 0 if no location is input
  * stop_id `integer`: Stop identifier
  * stop_latitude `number`: Geographic coordinate of latitude at stop
  * stop_longitude `number`: Geographic coordinate of longitude at stop
  * stop_name `string`: Name of stop
  * stop_sequence `integer`: Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.
  * stop_suburb `string`: suburb of stop

### V3.Route
* V3.Route `object`
  * route_gtfs_id `string`: GTFS Identifer of the route
  * route_id `integer`: Route identifier
  * route_name `string`: Name of route
  * route_number `string`: Route number presented to public (nb. not route_id)
  * route_type `integer`: Transport mode identifier

### V3.RouteDeparturesSpecificParameters
* V3.RouteDeparturesSpecificParameters `object`
  * date_utc `string`: Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
  * expand `array`: List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption
    * items `string` (values: All, Stop, Route, Run, Direction, Disruption)
  * include_cancelled `boolean`: Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
  * look_backwards `boolean`: Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
  * max_results `integer`: Maximum number of results returned
  * train_scheduled_timetables `boolean`: When set to true, all timetable information returned by Chronos will be sourced from the Parser timetables,

### V3.RouteResponse
* V3.RouteResponse `object`
  * route [V3.RouteWithStatus](#v3.routewithstatus)
  * status [V3.Status](#v3.status)

### V3.RouteServiceStatus
* V3.RouteServiceStatus `object`
  * description `string`
  * timestamp `string`

### V3.RouteType
* V3.RouteType `object`
  * route_type `integer`: Transport mode identifier
  * route_type_name `string`: Name of transport mode

### V3.RouteTypesResponse
* V3.RouteTypesResponse `object`
  * route_types `array`: Transport mode identifiers
    * items [V3.RouteType](#v3.routetype)
  * status [V3.Status](#v3.status)

### V3.RouteWithStatus
* V3.RouteWithStatus `object`
  * route_gtfs_id `string`: GTFS Identifer of the route
  * route_id `integer`: Route identifier
  * route_name `string`: Name of route
  * route_number `string`: Route number presented to public (nb. not route_id)
  * route_service_status [V3.RouteServiceStatus](#v3.routeservicestatus)
  * route_type `integer`: Transport mode identifier

### V3.Run
* V3.Run `object`
  * destination_name `string`: Name of destination of run
  * direction_id `integer`: Direction of travel identifier
  * express_stop_count `integer`: The number of remaining skipped/express stations for the run/service from a stop
  * final_stop_id `integer`: stop_id of final stop of run
  * route_id `integer`: Route identifier
  * route_type `integer`: Transport mode identifier
  * run_id `integer`: Trip/service run identifier
  * run_sequence `integer`: Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id.
  * status `string`: Status of metropolitan train run; returns "scheduled" for other modes
  * vehicle_descriptor [V3.VehicleDescriptor](#v3.vehicledescriptor)
  * vehicle_position [V3.VehiclePosition](#v3.vehicleposition)

### V3.RunResponse
* V3.RunResponse `object`
  * run [V3.Run](#v3.run)
  * status [V3.Status](#v3.status)

### V3.RunsResponse
* V3.RunsResponse `object`
  * runs `array`: Individual trips/services of a route
    * items [V3.Run](#v3.run)
  * status [V3.Status](#v3.status)

### V3.SearchParameters
* V3.SearchParameters `object`
  * include_addresses `boolean`: Placeholder for future development; currently unavailable
  * include_outlets `boolean`: Indicates if outlets will be returned in response (default = true)
  * latitude `number`: Filter by geographic coordinate of latitude
  * longitude `number`: Filter by geographic coordinate of longitude
  * match_route_by_suburb `boolean`: Indicates whether to find routes by suburbs in the search term (default = true)
  * match_stop_by_gtfs_stop_id `boolean`: Indicates whether to search for stops according to a metlink stop ID (default = false)
  * match_stop_by_suburb `boolean`: Indicates whether to find stops by suburbs in the search term (default = true)
  * max_distance `number`: Filter by maximum distance (in metres) from location specified via latitude and longitude parameters
  * route_types `array`: Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)
    * items `integer` (values: 0, 1, 2, 3, 4)

### V3.SearchResult
* V3.SearchResult `object`
  * outlets `array`: myki ticket outlets
    * items [V3.ResultOutlet](#v3.resultoutlet)
  * routes `array`: Train lines, tram routes, bus routes, regional coach routes, Night Bus routes
    * items [V3.ResultRoute](#v3.resultroute)
  * status [V3.Status](#v3.status)
  * stops `array`: Train stations, tram stops, bus stops, regional coach stops or Night Bus stops
    * items [V3.ResultStop](#v3.resultstop)

### V3.Status
* V3.Status `object`
  * health `integer` (values: 0, 1): API system health status (0=offline, 1=online)
  * version `string`: API Version number

### V3.StopAccessibility
* V3.StopAccessibility `object`
  * audio_customer_information `boolean`: Indicates if there is at least one audio customer information at the stop/platform
  * escalator `boolean`: Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
  * hearing_loop `boolean`: Indicates if there is a hearing loop facility at the stop/platform
  * lift `boolean`: Indicates if there is an elevator at the stop/platform
  * lighting `boolean`: Indicates if there is lighting at the stop
  * platform_number `integer`: Indicates the platform number for xivic information (Platform 0 indicates general stop facilities)
  * stairs `boolean`: Indicates if there are stairs available in the stop
  * stop_accessible `boolean`: Indicates if the stop is accessible
  * tactile_ground_surface_indicator `boolean`: Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop
  * waiting_room `boolean`: Indicates if there is a general waiting area at the stop
  * wheelchair [V3.StopAccessibilityWheelchair](#v3.stopaccessibilitywheelchair)

### V3.StopAccessibilityWheelchair
* V3.StopAccessibilityWheelchair `object`
  * accessible_ramp `boolean`
  * low_ticket_counter `boolean`: Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
  * manouvering `boolean`: Indicates if there is a space for mobility device to board on or off a transport mode
  * parking `boolean`: Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
  * raised_platform `boolean`: Indicates if there is a raised platform to board a train
  * raised_platform_shelther `boolean`: Indicates if there is shelter near the raised platform
  * ramp `boolean`: Indicates if there are ramps (&lt;1:14) at the stop/platform
  * secondary_path `boolean`: Indicates if there is a path beyond the stop which is accessible
  * steep_ramp `boolean`: Indicates if there are ramps (&gt;1:14) at the stop/platform
  * telephone `boolean`: Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
  * toilet `boolean`: Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)

### V3.StopAmenityDetails
* V3.StopAmenityDetails `object`
  * car_parking `string`: The number of free car parking spots at the stop
  * cctv `boolean`: Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop
  * taxi_rank `boolean`: Indicates if there is a taxi rank at or near the stop
  * toilet `boolean`: Indicates if there is a public toilet at or near the stop

### V3.StopBase
* V3.StopBase `object`
  * stop_id `integer`: Stop identifier
  * stop_name `string`: Name of stop

### V3.StopDepartureRequest
* V3.StopDepartureRequest `object`
  * gtfs `boolean`: Indicates that stop_id parameter will accept "GTFS stop_id" data and route_directions[x].route_id parameters will accept route_gtfs_id data
  * max_results `integer`: Maximum number of results returned
  * route_directions **required** `array`: The route directions to find departures for at this stop.
    * items [V3.StopDepartureRequestRouteDirection](#v3.stopdeparturerequestroutedirection)
  * route_type `integer` (values: 0, 1, 2, 3, 4): Number identifying transport mode; values returned via RouteTypes API
  * stop_id `integer`: Identifier of stop; values returned by Stops API

### V3.StopDepartureRequestRouteDirection
* V3.StopDepartureRequestRouteDirection `object`
  * direction_id `integer`: Direction of travel identifier; values returned by Directions API - v3/directions
  * direction_name **required** `string`: Name of direction of travel; values returned by Directions API - v3/directions
  * route_id `string`: Identifier of route; values returned by Routes API - v3/routes

### V3.StopDetails
* V3.StopDetails `object`
  * disruption_ids `array`: Disruption information identifier(s)
    * items `integer`
  * route_type `integer`: Transport mode identifier
  * station_description `string`: The definition applicable to the station_type; returns null for V/Line train
  * station_type `string`: Type of metropolitan train station (i.e. "Premium", "Host" or "Unstaffed" station); returns null for V/Line train
  * stop_accessibility [V3.StopAccessibility](#v3.stopaccessibility)
  * stop_amenities [V3.StopAmenityDetails](#v3.stopamenitydetails)
  * stop_id `integer`: Stop identifier
  * stop_location [V3.StopLocation](#v3.stoplocation)
  * stop_name `string`: Name of stop
  * stop_staffing [V3.StopStaffing](#v3.stopstaffing)

### V3.StopGeosearch
* V3.StopGeosearch `object`
  * disruption_ids `array`: Disruption information identifier(s)
    * items `integer`
  * route_type `integer`: Transport mode identifier
  * stop_distance `number`: Distance of stop from input location (in metres); returns 0 if no location is input
  * stop_id `integer`: Stop identifier
  * stop_latitude `number`: Geographic coordinate of latitude at stop
  * stop_longitude `number`: Geographic coordinate of longitude at stop
  * stop_name `string`: Name of stop
  * stop_sequence `integer`: Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.
  * stop_suburb `string`: suburb of stop

### V3.StopGps
* V3.StopGps `object`
  * latitude `number`: Geographic coordinate of latitude at stop
  * longitude `number`: Geographic coordinate of longitude at stop

### V3.StopLocation
* V3.StopLocation `object`
  * gps [V3.StopGps](#v3.stopgps)

### V3.StopOnRoute
* V3.StopOnRoute `object`
  * disruption_ids `array`: Disruption information identifier(s)
    * items `integer`
  * route_type `integer`: Transport mode identifier
  * stop_id `integer`: Stop identifier
  * stop_latitude `number`: Geographic coordinate of latitude at stop
  * stop_longitude `number`: Geographic coordinate of longitude at stop
  * stop_name `string`: Name of stop
  * stop_sequence `integer`: Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.
  * stop_suburb `string`: suburb of stop

### V3.StopResponse
* V3.StopResponse `object`
  * disruptions `object`: Disruption information applicable to relevant routes or stops
  * status [V3.Status](#v3.status)
  * stop [V3.StopDetails](#v3.stopdetails)

### V3.StopStaffing
* V3.StopStaffing `object`
  * fri_am_from `string`: Stop staffing hours
  * fri_am_to `string`: Stop staffing hours
  * fri_pm_from `string`: Stop staffing hours
  * fri_pm_to `string`: Stop staffing hours
  * mon_am_from `string`: Stop staffing hours
  * mon_am_to `string`: Stop staffing hours
  * mon_pm_from `string`: Stop staffing hours
  * mon_pm_to `string`: Stop staffing hours
  * ph_additional_text `string`: Stop staffing hours
  * ph_from `string`: Stop staffing hours
  * ph_to `string`: Stop staffing hours
  * sat_am_from `string`: Stop staffing hours
  * sat_am_to `string`: Stop staffing hours
  * sat_pm_from `string`: Stop staffing hours
  * sat_pm_to `string`: Stop staffing hours
  * sun_am_from `string`: Stop staffing hours
  * sun_am_to `string`: Stop staffing hours
  * sun_pm_from `string`: Stop staffing hours
  * sun_pm_to `string`: Stop staffing hours
  * thu_am_from `string`: Stop staffing hours
  * thu_am_to `string`: Stop staffing hours
  * thu_pm_from `string`: Stop staffing hours
  * thu_pm_to `string`: Stop staffing hours
  * tue_am_from `string`: Stop staffing hours
  * tue_am_to `string`: Stop staffing hours
  * tue_pm_from `string`: Stop staffing hours
  * tue_pm_to `string`: Stop staffing hours
  * wed_am_from `string`: Stop staffing hours
  * wed_am_to `string`: Stop staffing hours
  * wed_pm_To `string`: Stop staffing hours
  * wed_pm_from `string`: Stop staffing hours

### V3.StoppingPattern
* V3.StoppingPattern `object`
  * departures `array`: Timetabled and real-time service departures
    * items [V3.Departure](#v3.departure)
  * directions `object`: Directions of travel of route
  * disruptions `array`: Disruption information applicable to relevant routes or stops
    * items [V3.Disruption](#v3.disruption)
  * routes `object`: Train lines, tram routes, bus routes, regional coach routes, Night Bus routes
  * runs `object`: Individual trips/services of a route
  * status [V3.Status](#v3.status)
  * stops `object`: A train station, tram stop, bus stop, regional coach stop or Night Bus stop

### V3.StopsByDistanceResponse
* V3.StopsByDistanceResponse `object`
  * disruptions `object`: Disruption information applicable to relevant routes or stops
  * status [V3.Status](#v3.status)
  * stops `array`: Train stations, tram stops, bus stops, regional coach stops or Night Bus stops
    * items [V3.StopGeosearch](#v3.stopgeosearch)

### V3.StopsOnRouteResponse
* V3.StopsOnRouteResponse `object`
  * disruptions `object`: Disruption information applicable to relevant routes or stops
  * status [V3.Status](#v3.status)
  * stops `array`: Train stations, tram stops, bus stops, regional coach stops or Night Bus stops
    * items [V3.StopOnRoute](#v3.stoponroute)

### V3.VehicleDescriptor
* V3.VehicleDescriptor `object`
  * air_conditioned `boolean`: Indicator if vehicle is air conditioned. May be null. Only available for some tram runs.
  * description `string`: Vehicle description such as "6 Car Comeng", "6 Car Xtrapolis", "3 Car Comeng", "6 Car Siemens", "3 Car Siemens". May be null/empty.
  * id `string`: Operator identifier of the vehicle such as "26094". May be null/empty. Only available for some tram and bus runs.
  * low_floor `boolean`: Indicator if vehicle has a low floor. May be null. Only available for some tram runs.
  * operator `string`: Operator name of the vehicle such as "Metro Trains Melbourne", "Yarra Trams", "Ventura Bus Line", "CDC" or "Sita Bus Lines" . May be null/empty.
  * supplier `string`: Supplier of vehicle descriptor data.

### V3.VehiclePosition
* V3.VehiclePosition `object`
  * bearing `number`: Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.
  * latitude `number`: Geographic coordinate of latitude of the vehicle when known. May be null.
  * longitude `number`: Geographic coordinate of longitude of the vehicle when known. 
  * supplier `string`: Supplier of vehicle position data.


