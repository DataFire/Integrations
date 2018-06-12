# @datafire/tfl_gov_uk

Client library for Transport for London Unified

## Installation and Usage
```bash
npm install --save @datafire/tfl_gov_uk
```
```js
let tfl_gov_uk = require('@datafire/tfl_gov_uk').create({
  apiKey: "",
  appId: ""
});

tfl_gov_uk.Line_Route({}).then(data => {
  console.log(data);
});
```

## Description

Our unified API brings together data across all modes of transport into a single RESTful API. This API provides access to the most highly requested realtime and status infomation across all the modes of transport, in a single and consistent way. Access to the developer documentation is available at https://api.tfl.gov.uk

## Actions

### AccidentStats_Get
Gets all accident details for accidents occuring in the specified year


```js
tfl_gov_uk.AccidentStats_Get({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: The year for which to filter the accidents on.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail](#tfl.api.presentation.entities.accidentstats.accidentdetail)

### AirQuality_Get
Gets air quality data feed


```js
tfl_gov_uk.AirQuality_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [System.Object](#system.object)

### BikePoint_GetAll
Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.


```js
tfl_gov_uk.BikePoint_GetAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### BikePoint_Search
Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.


```js
tfl_gov_uk.BikePoint_Search({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search term e.g. "St. James"

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### BikePoint_Get
Gets the bike point with the given id.


```js
tfl_gov_uk.BikePoint_Get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A bike point id (a list of ids can be obtained from the above BikePoint call)

#### Output
* output [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### Cabwise_Get
Gets taxis and minicabs contact information


```js
tfl_gov_uk.Cabwise_Get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude
  * lon **required** `number`: Longitude
  * optype `string`: Operator Type e.g Minicab, Executive, Limousine
  * wc `string`: Wheelchair accessible
  * radius `number`: The radius of the bounding circle in metres
  * name `string`: Trading name of operating company
  * maxResults `integer`: An optional parameter to limit the number of results return. Default and maximum is 20.
  * legacyFormat `boolean`: Legacy Format
  * forceXml `boolean`: Force Xml
  * twentyFourSevenOnly `boolean`: Twenty Four Seven Only

#### Output
* output [System.Object](#system.object)

### Journey_JourneyResults
Perform a Journey Planner search from the parameters specified in simple types


```js
tfl_gov_uk.Journey_JourneyResults({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
  * to **required** `string`: Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
  * via `string`: Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
  * nationalSearch `boolean`: Does the journey cover stops outside London? eg. "nationalSearch=true"
  * date `string`: The date must be in yyyyMMdd format
  * time `string`: The time must be in HHmm format
  * timeIs `string` (values: Arriving, Departing): Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
  * journeyPreference `string` (values: LeastInterchange, LeastTime, LeastWalking): The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
  * mode `array`: The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"
  * accessibilityPreference `array`: The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"
  * fromName `string`: An optional name to associate with the origin of the journey in the results.
  * toName `string`: An optional name to associate with the destination of the journey in the results.
  * viaName `string`: An optional name to associate with the via point of the journey in the results.
  * maxTransferMinutes `string`: The max walking time in minutes for transfer eg. "120"
  * maxWalkingMinutes `string`: The max walking time in minutes for journeys eg. "120"
  * walkingSpeed `string` (values: Slow, Average, Fast): The walking speed. eg possible options: "slow" | "average" | "fast".
  * cyclePreference `string` (values: None, LeaveAtStation, TakeOnTransport, AllTheWay, CycleHire): The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
  * adjustment `string`: Time adjustment command. eg possible options: "TripFirst" | "TripLast"
  * bikeProficiency `array`: A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"
  * alternativeCycle `boolean`: Option to determine whether to return alternative cycling journey
  * alternativeWalking `boolean`: Option to determine whether to return alternative walking journey
  * applyHtmlMarkup `boolean`: Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.
  * useMultiModalCall `boolean`: A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey
  * walkingOptimization `boolean`: A boolean to indicate whether to optimize journeys using walking
  * taxiOnlyTrip `boolean`: A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".

#### Output
* output [Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult](#tfl.api.presentation.entities.journeyplanner.itineraryresult)

### Journey_Meta
Gets a list of all of the available journey planner modes


```js
tfl_gov_uk.Journey_Meta(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Mode](#tfl.api.presentation.entities.mode)

### Line_MetaDisruptionCategories
Gets a list of valid disruption categories


```js
tfl_gov_uk.Line_MetaDisruptionCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### Line_MetaModes
Gets a list of valid modes


```js
tfl_gov_uk.Line_MetaModes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Mode](#tfl.api.presentation.entities.mode)

### Line_MetaServiceTypes
Gets a list of valid ServiceTypes to filter on


```js
tfl_gov_uk.Line_MetaServiceTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### Line_MetaSeverity
Gets a list of valid severity codes


```js
tfl_gov_uk.Line_MetaSeverity(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StatusSeverity](#tfl.api.presentation.entities.statusseverity)

### Line_GetByMode
Gets lines that serve the given modes.


```js
tfl_gov_uk.Line_GetByMode({
  "modes": []
}, context)
```

#### Input
* input `object`
  * modes **required** `array`: A comma-separated list of modes e.g. tube,dlr

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_DisruptionByMode
Get disruptions for all lines of the given modes.


```js
tfl_gov_uk.Line_DisruptionByMode({
  "modes": []
}, context)
```

#### Input
* input `object`
  * modes **required** `array`: A comma-separated list of modes e.g. tube,dlr

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Disruption](#tfl.api.presentation.entities.disruption)

### Line_RouteByMode
Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route


```js
tfl_gov_uk.Line_RouteByMode({
  "modes": []
}, context)
```

#### Input
* input `object`
  * modes **required** `array`: A comma-separated list of modes e.g. tube,dlr
  * serviceTypes `array`: A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_StatusByMode
Gets the line status of for all lines for the given modes


```js
tfl_gov_uk.Line_StatusByMode({
  "modes": []
}, context)
```

#### Input
* input `object`
  * modes **required** `array`: A comma-separated list of modes to filter by. e.g. tube,dlr
  * detail `boolean`: Include details of the disruptions that are causing the line status including the affected stops and routes

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_Route
Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.


```js
tfl_gov_uk.Line_Route({}, context)
```

#### Input
* input `object`
  * serviceTypes `array`: A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_Search
Search for lines or routes matching the query string


```js
tfl_gov_uk.Line_Search({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Search term e.g victoria
  * modes `array`: Optionally filter by the specified modes
  * serviceTypes `array`: A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

#### Output
* output [Tfl.Api.Presentation.Entities.RouteSearchResponse](#tfl.api.presentation.entities.routesearchresponse)

### Line_StatusBySeverity
Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity


```js
tfl_gov_uk.Line_StatusBySeverity({
  "severity": 0
}, context)
```

#### Input
* input `object`
  * severity **required** `integer`: The level of severity (eg: a number from 0 to 14)

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_Get
Gets lines that match the specified line ids.


```js
tfl_gov_uk.Line_Get({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_Arrivals
Get the list of arrival predictions for given line ids based at the given stop


```js
tfl_gov_uk.Line_Arrivals({
  "ids": [],
  "stopPointId": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
  * stopPointId **required** `string`: Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
  * direction `string` (values: inbound, outbound, all): Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all
  * destinationStationId `string`: Optional. Id of destination stop

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Prediction](#tfl.api.presentation.entities.prediction)

### Line_Disruption
Get disruptions for the given line ids


```js
tfl_gov_uk.Line_Disruption({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Disruption](#tfl.api.presentation.entities.disruption)

### Line_LineRoutesByIds
Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.


```js
tfl_gov_uk.Line_LineRoutesByIds({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
  * serviceTypes `array`: A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_StatusByIds
Gets the line status of for given line ids e.g Minor Delays


```js
tfl_gov_uk.Line_StatusByIds({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
  * detail `boolean`: Include details of the disruptions that are causing the line status including the affected stops and routes

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_Status
Gets the line status for given line ids during the provided dates e.g Minor Delays


```js
tfl_gov_uk.Line_Status({
  "ids": [],
  "startDate": "",
  "endDate": "",
  "StartDate": "",
  "EndDate": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
  * detail `boolean`: Include details of the disruptions that are causing the line status including the affected stops and routes
  * startDate **required** `string`
  * endDate **required** `string`
  * dateRange.startDate `string`
  * dateRange.endDate `string`
  * StartDate **required** `string`
  * EndDate **required** `string`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)

### Line_RouteSequence
Gets all valid routes for given line id, including the sequence of stops on each route.


```js
tfl_gov_uk.Line_RouteSequence({
  "id": "",
  "direction": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A single line id e.g. victoria
  * direction **required** `string` (values: inbound, outbound, all): The direction of travel. Can be inbound or outbound.
  * serviceTypes `array`: A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
  * excludeCrowding `boolean`: That excludes crowding from line disruptions. Can be true or false.

#### Output
* output [Tfl.Api.Presentation.Entities.RouteSequence](#tfl.api.presentation.entities.routesequence)

### Line_StopPoints
Gets a list of the stations that serve the given line id


```js
tfl_gov_uk.Line_StopPoints({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A single line id e.g. victoria
  * tflOperatedNationalRailStationsOnly `boolean`: If the national-rail line is requested, this flag will filter the national rail stations so that only those operated by TfL are returned

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### Line_Timetable
Gets the timetable for a specified station on the give line


```js
tfl_gov_uk.Line_Timetable({
  "fromStopPointId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * fromStopPointId **required** `string`: The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
  * id **required** `string`: A single line id e.g. victoria

#### Output
* output [Tfl.Api.Presentation.Entities.TimetableResponse](#tfl.api.presentation.entities.timetableresponse)

### Line_TimetableTo
Gets the timetable for a specified station on the give line with specified destination


```js
tfl_gov_uk.Line_TimetableTo({
  "fromStopPointId": "",
  "id": "",
  "toStopPointId": ""
}, context)
```

#### Input
* input `object`
  * fromStopPointId **required** `string`: The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
  * id **required** `string`: A single line id e.g. victoria
  * toStopPointId **required** `string`: The destination stations's Naptan code

#### Output
* output [Tfl.Api.Presentation.Entities.TimetableResponse](#tfl.api.presentation.entities.timetableresponse)

### Mode_GetActiveServiceTypes
Returns the service type active for a mode.
            Currently only supports tube


```js
tfl_gov_uk.Mode_GetActiveServiceTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.ActiveServiceType](#tfl.api.presentation.entities.activeservicetype)

### Mode_Arrivals
Gets the next arrival predictions for all stops of a given mode


```js
tfl_gov_uk.Mode_Arrivals({
  "mode": ""
}, context)
```

#### Input
* input `object`
  * mode **required** `string`: A mode name e.g. tube, dlr
  * count `integer`: A number of arrivals to return for each stop, -1 to return all available.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Prediction](#tfl.api.presentation.entities.prediction)

### Occupancy_GetBikePointsOccupancies
Get the occupancy for bike points.


```js
tfl_gov_uk.Occupancy_GetBikePointsOccupancies({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.BikePointOccupancy](#tfl.api.presentation.entities.bikepointoccupancy)

### Occupancy.CarPark.get
Gets the occupancy for all car parks that have occupancy data


```js
tfl_gov_uk.Occupancy.CarPark.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.CarParkOccupancy](#tfl.api.presentation.entities.carparkoccupancy)

### Occupancy.CarPark.id.get
Gets the occupancy for a car park with a given id


```js
tfl_gov_uk.Occupancy.CarPark.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Tfl.Api.Presentation.Entities.CarParkOccupancy](#tfl.api.presentation.entities.carparkoccupancy)

### Occupancy_GetAllChargeConnectorStatus
Gets the occupancy for all charge connectors


```js
tfl_gov_uk.Occupancy_GetAllChargeConnectorStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy](#tfl.api.presentation.entities.chargeconnectoroccupancy)

### Occupancy_GetChargeConnectorStatus
Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)


```js
tfl_gov_uk.Occupancy_GetChargeConnectorStatus({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy](#tfl.api.presentation.entities.chargeconnectoroccupancy)

### Place_GetByGeoBox
Gets the places that lie within the bounding box defined by the lat/lon of its north-west and south-east corners. Optionally filters
            on type and can strip properties for a smaller payload.


```js
tfl_gov_uk.Place_GetByGeoBox({
  "bbBoxpoints.swLat": 0,
  "bbBoxpoints.swLon": 0,
  "bbBoxpoints.neLat": 0,
  "bbBoxpoints.neLon": 0
}, context)
```

#### Input
* input `object`
  * categories `array`: an optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)
  * includeChildren `boolean`: Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned
  * type `array`: place types to filter on, or null to return all types
  * activeOnly `boolean`: An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)
  * bbBoxpoints.swLat **required** `number`
  * bbBoxpoints.swLon **required** `number`
  * bbBoxpoints.neLat **required** `number`
  * bbBoxpoints.neLon **required** `number`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### Place_GetStreetsByPostCode
Gets the set of streets associated with a post code.


```js
tfl_gov_uk.Place_GetStreetsByPostCode({
  "postcode": "",
  "Postcode": ""
}, context)
```

#### Input
* input `object`
  * postcode **required** `string`
  * postcodeInput.postcode `string`
  * Postcode **required** `string`

#### Output
* output [System.Object](#system.object)

### Place_MetaCategories
Gets a list of all of the available place property categories and keys.


```js
tfl_gov_uk.Place_MetaCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.PlaceCategory](#tfl.api.presentation.entities.placecategory)

### Place_MetaPlaceTypes
Gets a list of the available types of Place.


```js
tfl_gov_uk.Place_MetaPlaceTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.PlaceCategory](#tfl.api.presentation.entities.placecategory)

### Place_Search
Gets all places that matches the given query


```js
tfl_gov_uk.Place_Search({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names.
  * types `array`: A comma-separated list of the types to return. Max. approx 12 types.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### Place_GetByType
Gets all places of a given type


```js
tfl_gov_uk.Place_GetByType({
  "types": []
}, context)
```

#### Input
* input `object`
  * types **required** `array`: A comma-separated list of the types to return. Max. approx 12 types.
  * activeOnly `boolean`: An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### Place_Get
Gets the place with the given id.


```js
tfl_gov_uk.Place_Get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids
  * includeChildren `boolean`: Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### Place_GetAt
Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.


```js
tfl_gov_uk.Place_GetAt({
  "type": [],
  "lat": "",
  "lon": "",
  "location.lat": 0,
  "location.lon": 0,
  "Lat": "",
  "Lon": ""
}, context)
```

#### Input
* input `object`
  * type **required** `array`: The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
  * lat **required** `string`
  * lon **required** `string`
  * location.lat **required** `number`
  * location.lon **required** `number`
  * Lat **required** `string`
  * Lon **required** `string`

#### Output
* output [System.Object](#system.object)

### Place_GetOverlay
Gets the place overlay for a given set of co-ordinates and a given width/height.


```js
tfl_gov_uk.Place_GetOverlay({
  "z": 0,
  "type": [],
  "width": 0,
  "height": 0,
  "lat": "",
  "lon": "",
  "location.lat": 0,
  "location.lon": 0,
  "Lat": "",
  "Lon": ""
}, context)
```

#### Input
* input `object`
  * z **required** `integer`: The zoom level
  * type **required** `array`: The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
  * width **required** `integer`: The width of the requested overlay.
  * height **required** `integer`: The height of the requested overlay.
  * lat **required** `string`
  * lon **required** `string`
  * location.lat **required** `number`
  * location.lon **required** `number`
  * Lat **required** `string`
  * Lon **required** `string`

#### Output
* output [System.Object](#system.object)

### Road.get
Gets all roads managed by TfL


```js
tfl_gov_uk.Road.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.RoadCorridor](#tfl.api.presentation.entities.roadcorridor)

### Road_MetaCategories
Gets a list of valid RoadDisruption categories


```js
tfl_gov_uk.Road_MetaCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### Road_MetaSeverities
Gets a list of valid RoadDisruption severity codes


```js
tfl_gov_uk.Road_MetaSeverities(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StatusSeverity](#tfl.api.presentation.entities.statusseverity)

### Road_DisruptionById
Gets a list of active disruptions filtered by disruption Ids.


```js
tfl_gov_uk.Road_DisruptionById({
  "disruptionIds": []
}, context)
```

#### Input
* input `object`
  * disruptionIds **required** `array`: Comma-separated list of disruption identifiers to filter by.
  * stripContent `boolean`: Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments.

#### Output
* output [Tfl.Api.Presentation.Entities.RoadDisruption](#tfl.api.presentation.entities.roaddisruption)

### Road_DisruptedStreets
Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.


```js
tfl_gov_uk.Road_DisruptedStreets({
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * startDate **required** `string`: Optional, the start time to filter on.
  * endDate **required** `string`: Optional, The end time to filter on.

#### Output
* output [System.Object](#system.object)

### Road.ids.get
Gets the road with the specified id (e.g. A1)


```js
tfl_gov_uk.Road.ids.get({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: Comma-separated list of road identifiers e.g. "A406, A2" (a full list of supported road identifiers can be found at the /Road/ endpoint)

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.RoadCorridor](#tfl.api.presentation.entities.roadcorridor)

### Road_Disruption
Get active disruptions, filtered by road ids


```js
tfl_gov_uk.Road_Disruption({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
  * stripContent `boolean`: Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets
  * severities `array`: an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)
  * categories `array`: an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)
  * closures `boolean`: Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.RoadDisruption](#tfl.api.presentation.entities.roaddisruption)

### Road_Status
Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.


```js
tfl_gov_uk.Road_Status({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: Comma-separated list of road identifiers e.g. "A406, A2" or use "all" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
  * dateRangeNullable.startDate `string`
  * dateRangeNullable.endDate `string`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.RoadCorridor](#tfl.api.presentation.entities.roadcorridor)

### Search_Get
Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.


```js
tfl_gov_uk.Search_Get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search query

#### Output
* output [Tfl.Api.Presentation.Entities.SearchResponse](#tfl.api.presentation.entities.searchresponse)

### Search_BusSchedules
Searches the bus schedules folder on S3 for a given bus number.


```js
tfl_gov_uk.Search_BusSchedules({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search query

#### Output
* output [Tfl.Api.Presentation.Entities.SearchResponse](#tfl.api.presentation.entities.searchresponse)

### Search_MetaCategories
Gets the available search categories.


```js
tfl_gov_uk.Search_MetaCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### Search_MetaSearchProviders
Gets the available searchProvider names.


```js
tfl_gov_uk.Search_MetaSearchProviders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### Search_MetaSorts
Gets the available sorting options.


```js
tfl_gov_uk.Search_MetaSorts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### StopPoint_GetByGeoPoint
Gets a list of StopPoints within {radius} by the specified criteria


```js
tfl_gov_uk.StopPoint_GetByGeoPoint({
  "stopTypes": [],
  "location.lat": 0,
  "location.lon": 0
}, context)
```

#### Input
* input `object`
  * stopTypes **required** `array`: a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)
  * radius `integer`: the radius of the bounding circle in metres (default : 200)
  * useStopPointHierarchy `boolean`: Re-arrange the output into a parent/child hierarchy
  * modes `array`: the list of modes to search (comma separated mode names e.g. tube,dlr)
  * categories `array`: an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)
  * returnLines `boolean`: true to return the lines that each stop point serves as a nested resource
  * location.lat **required** `number`
  * location.lon **required** `number`

#### Output
* output [Tfl.Api.Presentation.Entities.StopPointsResponse](#tfl.api.presentation.entities.stoppointsresponse)

### StopPoint_MetaCategories
Gets the list of available StopPoint additional information categories


```js
tfl_gov_uk.StopPoint_MetaCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPointCategory](#tfl.api.presentation.entities.stoppointcategory)

### StopPoint_MetaModes
Gets the list of available StopPoint modes


```js
tfl_gov_uk.StopPoint_MetaModes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Mode](#tfl.api.presentation.entities.mode)

### StopPoint_MetaStopTypes
Gets the list of available StopPoint types


```js
tfl_gov_uk.StopPoint_MetaStopTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### StopPoint_GetByMode
Gets a list of StopPoints filtered by the modes available at that StopPoint.


```js
tfl_gov_uk.StopPoint_GetByMode({
  "modes": []
}, context)
```

#### Input
* input `object`
  * modes **required** `array`: A comma-seperated list of modes e.g. tube,dlr
  * page `integer`: The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large.

#### Output
* output [Tfl.Api.Presentation.Entities.StopPointsResponse](#tfl.api.presentation.entities.stoppointsresponse)

### StopPoint_DisruptionByMode
Gets a distinct list of disrupted stop points for the given modes


```js
tfl_gov_uk.StopPoint_DisruptionByMode({
  "modes": []
}, context)
```

#### Input
* input `object`
  * modes **required** `array`: A comma-seperated list of modes e.g. tube,dlr
  * includeRouteBlockedStops `boolean`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.DisruptedPoint](#tfl.api.presentation.entities.disruptedpoint)

### StopPoint.Search.get
Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.


```js
tfl_gov_uk.StopPoint.Search.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
  * modes `array`: An optional, parameter separated list of the modes to filter by
  * faresOnly `boolean`: True to only return stations in that have Fares data available for single fares to another station.
  * maxResults `integer`: An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
  * lines `array`: An optional, parameter separated list of the lines to filter by
  * includeHubs `boolean`: If true, returns results including HUBs.
  * tflOperatedNationalRailStationsOnly `boolean`: If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned

#### Output
* output [Tfl.Api.Presentation.Entities.SearchResponse](#tfl.api.presentation.entities.searchresponse)

### StopPoint.Search.query.get
Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.


```js
tfl_gov_uk.StopPoint.Search.query.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
  * modes `array`: An optional, parameter separated list of the modes to filter by
  * faresOnly `boolean`: True to only return stations in that have Fares data available for single fares to another station.
  * maxResults `integer`: An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
  * lines `array`: An optional, parameter separated list of the lines to filter by
  * includeHubs `boolean`: If true, returns results including HUBs.
  * tflOperatedNationalRailStationsOnly `boolean`: If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned

#### Output
* output [Tfl.Api.Presentation.Entities.SearchResponse](#tfl.api.presentation.entities.searchresponse)

### StopPoint_GetServiceTypes
Gets the service types for a given stoppoint


```js
tfl_gov_uk.StopPoint_GetServiceTypes({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Naptan id of the stop
  * lineIds `array`: The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)
  * modes `array`: The modes which the lines are relevant to (all if empty)

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.LineServiceType](#tfl.api.presentation.entities.lineservicetype)

### StopPoint_GetBySms
Gets a StopPoint for a given sms code.


```js
tfl_gov_uk.StopPoint_GetBySms({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.
  * output `string`: If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored.

#### Output
* output [System.Object](#system.object)

### StopPoint_GetByType
Gets all stop points of a given type


```js
tfl_gov_uk.StopPoint_GetByType({
  "types": []
}, context)
```

#### Input
* input `object`
  * types **required** `array`: A comma-separated list of the types to return. Max. approx. 12 types. 

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### StopPoint_GetByTypeWithPagination
Gets all the stop points of given type(s) with a page number


```js
tfl_gov_uk.StopPoint_GetByTypeWithPagination({
  "types": [],
  "page": 0
}, context)
```

#### Input
* input `object`
  * types **required** `array`
  * page **required** `integer`

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### StopPoint.ids.get
Gets a list of StopPoints corresponding to the given list of stop ids.


```js
tfl_gov_uk.StopPoint.ids.get({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.
  * includeCrowdingData `boolean`: Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### StopPoint_Disruption
Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.


```js
tfl_gov_uk.StopPoint_Disruption({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-seperated list of stop point ids. Max. approx. 20 ids.
  * getFamily `boolean`: Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.
  * includeRouteBlockedStops `boolean`
  * flattenResponse `boolean`: Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.DisruptedPoint](#tfl.api.presentation.entities.disruptedpoint)

### StopPoint_Arrivals
Gets the list of arrival predictions for the given stop point id


```js
tfl_gov_uk.StopPoint_Arrivals({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Prediction](#tfl.api.presentation.entities.prediction)

### StopPoint_ReachableFrom
Gets Stopoints that are reachable from a station/line combination.


```js
tfl_gov_uk.StopPoint_ReachableFrom({
  "id": "",
  "lineId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by
  * lineId **required** `string`: Line id of the line to filter by (e.g. victoria)
  * serviceTypes `array`: A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### StopPoint_Crowding
Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.


```js
tfl_gov_uk.StopPoint_Crowding({
  "id": "",
  "line": "",
  "direction": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Naptan id of the stop
  * line **required** `string`: A particular line e.g. victoria, circle, northern etc.
  * direction **required** `string` (values: inbound, outbound, all): The direction of travel. Can be inbound or outbound.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### StopPoint_Direction
Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.


```js
tfl_gov_uk.StopPoint_Direction({
  "id": "",
  "toStopPointId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
  * toStopPointId **required** `string`: Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
  * lineId `string`: Optional line id filter e.g. victoria

#### Output
* output `string`

### StopPoint_Route
Returns the route sections for all the lines that service the given stop point ids


```js
tfl_gov_uk.StopPoint_Route({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
  * serviceTypes `array`: A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.StopPointRouteSection](#tfl.api.presentation.entities.stoppointroutesection)

### StopPoint.id.placeTypes.get
Get a list of places corresponding to a given id and place types.


```js
tfl_gov_uk.StopPoint.id.placeTypes.get({
  "id": "",
  "placeTypes": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A naptan id for a stop point (station naptan code e.g. 940GZZLUASL).
  * placeTypes **required** `array`: A comcomma-separated value representing the place types.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### StopPoint_GetCarParksById
Get car parks corresponding to the given stop point id.


```js
tfl_gov_uk.StopPoint_GetCarParksById({
  "stopPointId": ""
}, context)
```

#### Input
* input `object`
  * stopPointId **required** `string`: stopPointId is required to get the car parks.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### StopPoint_GetTaxiRanksByIds
Gets a list of taxi ranks corresponding to the given stop point id.


```js
tfl_gov_uk.StopPoint_GetTaxiRanksByIds({
  "stopPointId": ""
}, context)
```

#### Input
* input `object`
  * stopPointId **required** `string`: stopPointId is required to get the taxi ranks.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)

### TravelTime_GetCompareOverlay
Gets the TravelTime overlay.


```js
tfl_gov_uk.TravelTime_GetCompareOverlay({
  "z": 0,
  "pinLat": 0,
  "pinLon": 0,
  "mapCenterLat": 0,
  "mapCenterLon": 0,
  "scenarioTitle": "",
  "timeOfDayId": "",
  "modeId": "",
  "width": 0,
  "height": 0,
  "direction": "",
  "travelTimeInterval": 0,
  "compareType": "",
  "compareValue": ""
}, context)
```

#### Input
* input `object`
  * z **required** `integer`: The zoom level.
  * pinLat **required** `number`: The latitude of the pin.
  * pinLon **required** `number`: The longitude of the pin.
  * mapCenterLat **required** `number`: The map center latitude.
  * mapCenterLon **required** `number`: The map center longitude.
  * scenarioTitle **required** `string`: The title of the scenario.
  * timeOfDayId **required** `string`: The id for the time of day (AM/INTER/PM)
  * modeId **required** `string`: The id of the mode.
  * width **required** `integer`: The width of the requested overlay.
  * height **required** `integer`: The height of the requested overlay.
  * direction **required** `string` (values: Average, From, To): The direction of travel.
  * travelTimeInterval **required** `integer`: The total minutes between the travel time bands
  * compareType **required** `string`
  * compareValue **required** `string`

#### Output
* output [System.Object](#system.object)

### TravelTime_GetOverlay
Gets the TravelTime overlay.


```js
tfl_gov_uk.TravelTime_GetOverlay({
  "z": 0,
  "pinLat": 0,
  "pinLon": 0,
  "mapCenterLat": 0,
  "mapCenterLon": 0,
  "scenarioTitle": "",
  "timeOfDayId": "",
  "modeId": "",
  "width": 0,
  "height": 0,
  "direction": "",
  "travelTimeInterval": 0
}, context)
```

#### Input
* input `object`
  * z **required** `integer`: The zoom level.
  * pinLat **required** `number`: The latitude of the pin.
  * pinLon **required** `number`: The longitude of the pin.
  * mapCenterLat **required** `number`: The map center latitude.
  * mapCenterLon **required** `number`: The map center longitude.
  * scenarioTitle **required** `string`: The title of the scenario.
  * timeOfDayId **required** `string`: The id for the time of day (AM/INTER/PM)
  * modeId **required** `string`: The id of the mode.
  * width **required** `integer`: The width of the requested overlay.
  * height **required** `integer`: The height of the requested overlay.
  * direction **required** `string` (values: Average, From, To): The direction of travel.
  * travelTimeInterval **required** `integer`: The total minutes between the travel time bands

#### Output
* output [System.Object](#system.object)

### Vehicle_GetEmissionsSurchargeCompliance
Gets the Emissions Surcharge compliance for the Vehicle


```js
tfl_gov_uk.Vehicle_GetEmissionsSurchargeCompliance({
  "vrm": ""
}, context)
```

#### Input
* input `object`
  * vrm **required** `string`: The Vehicle Registration Mark

#### Output
* output [Tfl.Api.Presentation.Entities.VehicleMatch](#tfl.api.presentation.entities.vehiclematch)

### Vehicle_GetUlezCompliance
Gets the Ulez Surcharge compliance for the Vehicle


```js
tfl_gov_uk.Vehicle_GetUlezCompliance({
  "vrm": ""
}, context)
```

#### Input
* input `object`
  * vrm **required** `string`: The Vehicle Registration Mark

#### Output
* output [Tfl.Api.Presentation.Entities.VehicleMatch](#tfl.api.presentation.entities.vehiclematch)

### Vehicle_Get
Gets the predictions for a given list of vehicle Id's.


```js
tfl_gov_uk.Vehicle_Get({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids.

#### Output
* output `array`
  * items [Tfl.Api.Presentation.Entities.Prediction](#tfl.api.presentation.entities.prediction)



## Definitions

### System.Data.Spatial.DbGeography
* System.Data.Spatial.DbGeography `object`
  * geography [System.Data.Spatial.DbGeographyWellKnownValue](#system.data.spatial.dbgeographywellknownvalue)

### System.Data.Spatial.DbGeographyWellKnownValue
* System.Data.Spatial.DbGeographyWellKnownValue `object`
  * coordinateSystemId `integer`
  * wellKnownBinary `string`
  * wellKnownText `string`

### System.Object
* System.Object `object`

### Tfl.Api.Common.ApiVersionInfo
* Tfl.Api.Common.ApiVersionInfo `object`
  * assemblies `array`
    * items `string`
  * label `string`
  * timestamp `string`
  * version `string`

### Tfl.Api.Common.DateRange
* Tfl.Api.Common.DateRange `object`
  * endDate `string`
  * startDate `string`

### Tfl.Api.Common.DateRangeNullable
* Tfl.Api.Common.DateRangeNullable `object`
  * endDate `string`
  * startDate `string`

### Tfl.Api.Common.GeoPoint
* Tfl.Api.Common.GeoPoint `object`
  * lat **required** `number`
  * lon **required** `number`

### Tfl.Api.Common.GeoPointBBox
* Tfl.Api.Common.GeoPointBBox `object`
  * neLat **required** `number`
  * neLon **required** `number`
  * swLat **required** `number`
  * swLon **required** `number`

### Tfl.Api.Common.JourneyPlanner.JpElevation
* Tfl.Api.Common.JourneyPlanner.JpElevation `object`
  * distance `integer`
  * endLat `number`
  * endLon `number`
  * gradient `number`
  * heightFromPreviousPoint `integer`
  * startLat `number`
  * startLon `number`

### Tfl.Api.Common.PostcodeInput
* Tfl.Api.Common.PostcodeInput `object`
  * postcode `string`

### Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail
* Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail `object`
  * borough `string`
  * casualties `array`
    * items [Tfl.Api.Presentation.Entities.AccidentStats.Casualty](#tfl.api.presentation.entities.accidentstats.casualty)
  * date `string`
  * id `integer`
  * lat `number`
  * location `string`
  * lon `number`
  * severity `string`
  * vehicles `array`
    * items [Tfl.Api.Presentation.Entities.AccidentStats.Vehicle](#tfl.api.presentation.entities.accidentstats.vehicle)

### Tfl.Api.Presentation.Entities.AccidentStats.AccidentStatsOrderedSummary
* Tfl.Api.Presentation.Entities.AccidentStats.AccidentStatsOrderedSummary `object`
  * accidents `integer`
  * borough `string`
  * year `integer`

### Tfl.Api.Presentation.Entities.AccidentStats.Casualty
* Tfl.Api.Presentation.Entities.AccidentStats.Casualty `object`
  * age `integer`
  * ageBand `string`
  * class `string`
  * mode `string`
  * severity `string`

### Tfl.Api.Presentation.Entities.AccidentStats.Vehicle
* Tfl.Api.Presentation.Entities.AccidentStats.Vehicle `object`
  * type `string`

### Tfl.Api.Presentation.Entities.ActiveServiceType
* Tfl.Api.Presentation.Entities.ActiveServiceType `object`
  * mode `string`
  * serviceType `string`

### Tfl.Api.Presentation.Entities.AdditionalProperties
* Tfl.Api.Presentation.Entities.AdditionalProperties `object`
  * category `string`
  * key `string`
  * modified `string`
  * sourceSystemKey `string`
  * value `string`

### Tfl.Api.Presentation.Entities.Bay
* Tfl.Api.Presentation.Entities.Bay `object`
  * bayCount `integer`
  * bayType `string`
  * free `integer`
  * occupied `integer`

### Tfl.Api.Presentation.Entities.BikePointOccupancy
* Tfl.Api.Presentation.Entities.BikePointOccupancy `object`: Bike point occupancy
  * bikesCount `integer`: Total bike counts
  * emptyDocks `integer`: Empty docks
  * id `string`: Id of the bike point such as BikePoints_1
  * name `string`: Name / Common name of the bike point
  * totalDocks `integer`: Total docks available

### Tfl.Api.Presentation.Entities.CarParkOccupancy
* Tfl.Api.Presentation.Entities.CarParkOccupancy `object`
  * bays `array`
    * items [Tfl.Api.Presentation.Entities.Bay](#tfl.api.presentation.entities.bay)
  * carParkDetailsUrl `string`
  * id `string`
  * name `string`

### Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy
* Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy `object`
  * id `integer`
  * sourceSystemPlaceId `string`
  * status `string`

### Tfl.Api.Presentation.Entities.Coordinate
* Tfl.Api.Presentation.Entities.Coordinate `object`
  * easting `number`
  * latitude `number`
  * longitude `number`
  * northing `number`
  * xCoord `integer`
  * yCoord `integer`

### Tfl.Api.Presentation.Entities.Crowding
* Tfl.Api.Presentation.Entities.Crowding `object`
  * passengerFlows `array`: Busiest times at a station (static information)
    * items [Tfl.Api.Presentation.Entities.PassengerFlow](#tfl.api.presentation.entities.passengerflow)
  * trainLoadings `array`: Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information)
    * items [Tfl.Api.Presentation.Entities.TrainLoading](#tfl.api.presentation.entities.trainloading)

### Tfl.Api.Presentation.Entities.CycleSuperhighway
* Tfl.Api.Presentation.Entities.CycleSuperhighway `object`
  * geography [System.Data.Spatial.DbGeography](#system.data.spatial.dbgeography)
  * id `string`: The Id
  * label `string`: The long label to show on maps when zoomed in
  * labelShort `string`: The short label to show on maps
  * modified `string`: When the data was last updated
  * segmented `boolean`: True if the route is split into segments

### Tfl.Api.Presentation.Entities.DisruptedPoint
* Tfl.Api.Presentation.Entities.DisruptedPoint `object`
  * additionalInformation `string`
  * appearance `string`
  * atcoCode `string`
  * commonName `string`
  * description `string`
  * fromDate `string`
  * mode `string`
  * stationAtcoCode `string`
  * toDate `string`
  * type `string`

### Tfl.Api.Presentation.Entities.Disruption
* Tfl.Api.Presentation.Entities.Disruption `object`: Represents a disruption to a route within the transport network.
  * additionalInfo `string`: Gets or sets the additionaInfo of this disruption.
  * affectedRoutes `array`: Gets or sets the routes affected by this disruption
    * items [Tfl.Api.Presentation.Entities.RouteSection](#tfl.api.presentation.entities.routesection)
  * affectedStops `array`: Gets or sets the stops affected by this disruption
    * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)
  * category `string` (values: Undefined, RealTime, PlannedWork, Information, Event, Crowding, StatusAlert): Gets or sets the category of this dispruption.
  * categoryDescription `string`: Gets or sets the description of the category.
  * closureText `string`: Text describing the closure type
  * created `string`: Gets or sets the date/time when this disruption was created.
  * description `string`: Gets or sets the description of this disruption.
  * lastUpdate `string`: Gets or sets the date/time when this disruption was last updated.
  * summary `string`: Gets or sets the summary of this disruption.
  * type `string`: Gets or sets the disruption type of this dispruption.

### Tfl.Api.Presentation.Entities.Fares.Fare
* Tfl.Api.Presentation.Entities.Fares.Fare `object`
  * cap `number`
  * cost `string`
  * description `string`
  * id `integer`
  * mode `string`
  * passengerType `string`
  * ticketTime `string`
  * ticketType `string`
  * validFrom `string`
  * validUntil `string`
  * zone `string`

### Tfl.Api.Presentation.Entities.Fares.FareBounds
* Tfl.Api.Presentation.Entities.Fares.FareBounds `object`
  * description `string`
  * displayName `string`
  * displayOrder `integer`
  * from `string`
  * id `integer`
  * isPopularFare `boolean`
  * isPopularTravelCard `boolean`
  * isTour `boolean`
  * messages `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * operator `string`
  * routeCode `string`
  * to `string`
  * via `string`

### Tfl.Api.Presentation.Entities.Fares.FareDetails
* Tfl.Api.Presentation.Entities.Fares.FareDetails `object`
  * boundsId `integer`
  * displayName `string`
  * displayOrder `integer`
  * endDate `string`
  * from `string`
  * fromStation `string`
  * isTour `boolean`
  * messages `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * mode `string`
  * operator `string`
  * passengerType `string`
  * routeCode `string`
  * routeDescription `string`
  * specialFare `boolean`
  * startDate `string`
  * throughFare `boolean`
  * ticketsAvailable `array`
    * items [Tfl.Api.Presentation.Entities.Fares.Ticket](#tfl.api.presentation.entities.fares.ticket)
  * to `string`
  * toStation `string`
  * validatorInformation `string`
  * via `string`

### Tfl.Api.Presentation.Entities.Fares.FaresMode
* Tfl.Api.Presentation.Entities.Fares.FaresMode `object`
  * description `string`
  * id `integer`
  * name `string`

### Tfl.Api.Presentation.Entities.Fares.FaresPeriod
* Tfl.Api.Presentation.Entities.Fares.FaresPeriod `object`
  * endDate `string`
  * id `integer`
  * isFuture `boolean`
  * startDate `string`
  * viewableDate `string`

### Tfl.Api.Presentation.Entities.Fares.FaresSection
* Tfl.Api.Presentation.Entities.Fares.FaresSection `object`
  * header `string`
  * index `integer`
  * messages `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * rows `array`
    * items [Tfl.Api.Presentation.Entities.Fares.FareDetails](#tfl.api.presentation.entities.fares.faredetails)

### Tfl.Api.Presentation.Entities.Fares.PassengerType
* Tfl.Api.Presentation.Entities.Fares.PassengerType `object`
  * description `string`
  * displayName `string`
  * displayOrder `integer`
  * type `string`

### Tfl.Api.Presentation.Entities.Fares.Recommendation
* Tfl.Api.Presentation.Entities.Fares.Recommendation `object`
  * cost `string`
  * discountCard `string`
  * fareType `string`
  * gettingYourTicket `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * id `integer`
  * keyFeatures `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * notes `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * priceComparison `string`
  * priceDescription `string`
  * product `string`
  * productType `string`
  * rank `integer`
  * recommendedTopUp `string`
  * rule `integer`
  * singleFare `number`
  * ticketTime `string`
  * ticketType `string`
  * zones `string`

### Tfl.Api.Presentation.Entities.Fares.RecommendationResponse
* Tfl.Api.Presentation.Entities.Fares.RecommendationResponse `object`
  * recommendations `array`
    * items [Tfl.Api.Presentation.Entities.Fares.Recommendation](#tfl.api.presentation.entities.fares.recommendation)

### Tfl.Api.Presentation.Entities.Fares.Ticket
* Tfl.Api.Presentation.Entities.Fares.Ticket `object`
  * cost `string`
  * description `string`
  * displayOrder `integer`
  * messages `array`
    * items [Tfl.Api.Presentation.Entities.Message](#tfl.api.presentation.entities.message)
  * mode `string`
  * passengerType `string`
  * ticketTime [Tfl.Api.Presentation.Entities.Fares.TicketTime](#tfl.api.presentation.entities.fares.tickettime)
  * ticketType [Tfl.Api.Presentation.Entities.Fares.TicketType](#tfl.api.presentation.entities.fares.tickettype)

### Tfl.Api.Presentation.Entities.Fares.TicketTime
* Tfl.Api.Presentation.Entities.Fares.TicketTime `object`
  * description `string`
  * type `string`

### Tfl.Api.Presentation.Entities.Fares.TicketType
* Tfl.Api.Presentation.Entities.Fares.TicketType `object`
  * description `string`
  * type `string`

### Tfl.Api.Presentation.Entities.GeoCodeSearchMatch
* Tfl.Api.Presentation.Entities.GeoCodeSearchMatch `object`
  * address `string`: A string describing the formatted address of the place. Adds additional context to the place's Name.
  * id `string`
  * lat `number`
  * lon `number`
  * name `string`
  * types `array`: The type of the place e.g. "street_address"
    * items `string`
  * url `string`

### Tfl.Api.Presentation.Entities.Identifier
* Tfl.Api.Presentation.Entities.Identifier `object`
  * crowding [Tfl.Api.Presentation.Entities.Crowding](#tfl.api.presentation.entities.crowding)
  * fullName `string`
  * id `string`
  * name `string`
  * type `string`
  * uri `string`

### Tfl.Api.Presentation.Entities.Instruction
* Tfl.Api.Presentation.Entities.Instruction `object`
  * detailed `string`
  * steps `array`
    * items [Tfl.Api.Presentation.Entities.InstructionStep](#tfl.api.presentation.entities.instructionstep)
  * summary `string`

### Tfl.Api.Presentation.Entities.InstructionStep
* Tfl.Api.Presentation.Entities.InstructionStep `object`
  * cumulativeDistance `integer`
  * cumulativeTravelTime `integer`
  * description `string`
  * descriptionHeading `string`
  * distance `integer`
  * latitude `number`
  * longitude `number`
  * pathAttribute [Tfl.Api.Presentation.Entities.PathAttribute](#tfl.api.presentation.entities.pathattribute)
  * skyDirection `integer`
  * skyDirectionDescription `string` (values: North, NorthEast, East, SouthEast, South, SouthWest, West, NorthWest)
  * streetName `string`
  * trackType `string` (values: CycleSuperHighway, CanalTowpath, QuietRoad, ProvisionForCyclists, BusyRoads, None, PushBike, Quietway)
  * turnDirection `string`

### Tfl.Api.Presentation.Entities.Interval
* Tfl.Api.Presentation.Entities.Interval `object`
  * stopId `string`
  * timeToArrival `number`

### Tfl.Api.Presentation.Entities.JourneyPlanner.Fare
* Tfl.Api.Presentation.Entities.JourneyPlanner.Fare `object`
  * chargeLevel `string`
  * chargeProfileName `string`
  * cost `integer`
  * highZone `integer`
  * isHopperFare `boolean`
  * lowZone `integer`
  * offPeak `integer`
  * peak `integer`
  * taps `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap](#tfl.api.presentation.entities.journeyplanner.faretap)

### Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat
* Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat `object`
  * text `string`
  * type `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap
* Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap `object`
  * atcoCode `string`
  * tapDetails [Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails](#tfl.api.presentation.entities.journeyplanner.faretapdetails)

### Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails
* Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails `object`
  * busRouteId `string`
  * hostDeviceType `string`
  * modeType `string`
  * nationalLocationCode `integer`
  * tapTimestamp `string`
  * validationType `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult
* Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult `object`: A DTO representing a list of possible journeys.
  * cycleHireDockingStationData [Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData](#tfl.api.presentation.entities.journeyplanner.journeyplannercyclehiredockingstationdata)
  * journeyVector [Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector](#tfl.api.presentation.entities.journeyplanner.journeyvector)
  * journeys `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.Journey](#tfl.api.presentation.entities.journeyplanner.journey)
  * lines `array`
    * items [Tfl.Api.Presentation.Entities.Line](#tfl.api.presentation.entities.line)
  * recommendedMaxAgeMinutes `integer`
  * searchCriteria [Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria](#tfl.api.presentation.entities.journeyplanner.searchcriteria)
  * stopMessages `array`
    * items `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.Journey
* Tfl.Api.Presentation.Entities.JourneyPlanner.Journey `object`: Object that represents an end to end journey (see schematic).
  * arrivalDateTime `string`
  * duration `integer`
  * fare [Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare](#tfl.api.presentation.entities.journeyplanner.journeyfare)
  * legs `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.Leg](#tfl.api.presentation.entities.journeyplanner.leg)
  * startDateTime `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare
* Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare `object`
  * caveats `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat](#tfl.api.presentation.entities.journeyplanner.farecaveat)
  * fares `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.Fare](#tfl.api.presentation.entities.journeyplanner.fare)
  * totalCost `integer`

### Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData
* Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData `object`
  * destinationId `string`
  * destinationNumberOfBikes `integer`
  * destinationNumberOfEmptySlots `integer`
  * originId `string`
  * originNumberOfBikes `integer`
  * originNumberOfEmptySlots `integer`

### Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector
* Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector `object`
  * from `string`
  * to `string`
  * uri `string`
  * via `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.Leg
* Tfl.Api.Presentation.Entities.JourneyPlanner.Leg `object`
  * arrivalPoint [Tfl.Api.Presentation.Entities.Point](#tfl.api.presentation.entities.point)
  * arrivalTime `string`
  * departurePoint [Tfl.Api.Presentation.Entities.Point](#tfl.api.presentation.entities.point)
  * departureTime `string`
  * disruptions `array`
    * items [Tfl.Api.Presentation.Entities.Disruption](#tfl.api.presentation.entities.disruption)
  * distance `number`
  * duration `integer`
  * hasFixedLocations `boolean`
  * instruction [Tfl.Api.Presentation.Entities.Instruction](#tfl.api.presentation.entities.instruction)
  * isDisrupted `boolean`
  * mode [Tfl.Api.Presentation.Entities.Identifier](#tfl.api.presentation.entities.identifier)
  * obstacles `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle](#tfl.api.presentation.entities.journeyplanner.obstacle)
  * path [Tfl.Api.Presentation.Entities.JourneyPlanner.Path](#tfl.api.presentation.entities.journeyplanner.path)
  * plannedWorks `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork](#tfl.api.presentation.entities.journeyplanner.plannedwork)
  * routeOptions `array`
    * items [Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption](#tfl.api.presentation.entities.journeyplanner.routeoption)
  * speed `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle
* Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle `object`
  * incline `string`
  * position `string`
  * stopId `integer`
  * type `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.Path
* Tfl.Api.Presentation.Entities.JourneyPlanner.Path `object`
  * elevation `array`
    * items [Tfl.Api.Common.JourneyPlanner.JpElevation](#tfl.api.common.journeyplanner.jpelevation)
  * lineString `string`
  * stopPoints `array`
    * items [Tfl.Api.Presentation.Entities.Identifier](#tfl.api.presentation.entities.identifier)

### Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork
* Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork `object`
  * createdDateTime `string`
  * description `string`
  * id `string`
  * lastUpdateDateTime `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption
* Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption `object`
  * directions `array`
    * items `string`
  * id `string`: The Id of the route
  * lineIdentifier [Tfl.Api.Presentation.Entities.Identifier](#tfl.api.presentation.entities.identifier)
  * name `string`: Name such as "72"

### Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria
* Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria `object`
  * dateTime `string`
  * dateTimeType `string` (values: Arriving, Departing)
  * timeAdjustments [Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments](#tfl.api.presentation.entities.journeyplanner.timeadjustments)

### Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment
* Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment `object`
  * date `string`
  * time `string`
  * timeIs `string`
  * uri `string`

### Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments
* Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments `object`
  * earlier [Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#tfl.api.presentation.entities.journeyplanner.timeadjustment)
  * earliest [Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#tfl.api.presentation.entities.journeyplanner.timeadjustment)
  * later [Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#tfl.api.presentation.entities.journeyplanner.timeadjustment)
  * latest [Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#tfl.api.presentation.entities.journeyplanner.timeadjustment)

### Tfl.Api.Presentation.Entities.KnownJourney
* Tfl.Api.Presentation.Entities.KnownJourney `object`
  * hour `string`
  * intervalId `integer`
  * minute `string`

### Tfl.Api.Presentation.Entities.Line
* Tfl.Api.Presentation.Entities.Line `object`
  * created `string`
  * crowding [Tfl.Api.Presentation.Entities.Crowding](#tfl.api.presentation.entities.crowding)
  * disruptions `array`
    * items [Tfl.Api.Presentation.Entities.Disruption](#tfl.api.presentation.entities.disruption)
  * id `string`
  * lineStatuses `array`
    * items [Tfl.Api.Presentation.Entities.LineStatus](#tfl.api.presentation.entities.linestatus)
  * modeName `string`
  * modified `string`
  * name `string`
  * routeSections `array`
    * items [Tfl.Api.Presentation.Entities.MatchedRoute](#tfl.api.presentation.entities.matchedroute)
  * serviceTypes `array`
    * items [Tfl.Api.Presentation.Entities.LineServiceTypeInfo](#tfl.api.presentation.entities.lineservicetypeinfo)

### Tfl.Api.Presentation.Entities.LineGroup
* Tfl.Api.Presentation.Entities.LineGroup `object`
  * lineIdentifier `array`
    * items `string`
  * naptanIdReference `string`
  * stationAtcoCode `string`

### Tfl.Api.Presentation.Entities.LineModeGroup
* Tfl.Api.Presentation.Entities.LineModeGroup `object`
  * lineIdentifier `array`
    * items `string`
  * modeName `string`

### Tfl.Api.Presentation.Entities.LineRouteSection
* Tfl.Api.Presentation.Entities.LineRouteSection `object`
  * destination `string`
  * direction `string`
  * fromStation `string`
  * routeId `integer`
  * serviceType `string`
  * toStation `string`
  * vehicleDestinationText `string`

### Tfl.Api.Presentation.Entities.LineServiceType
* Tfl.Api.Presentation.Entities.LineServiceType `object`
  * lineName `string`
  * lineSpecificServiceTypes `array`
    * items [Tfl.Api.Presentation.Entities.LineSpecificServiceType](#tfl.api.presentation.entities.linespecificservicetype)

### Tfl.Api.Presentation.Entities.LineServiceTypeInfo
* Tfl.Api.Presentation.Entities.LineServiceTypeInfo `object`
  * name `string`
  * uri `string`

### Tfl.Api.Presentation.Entities.LineSpecificServiceType
* Tfl.Api.Presentation.Entities.LineSpecificServiceType `object`
  * serviceType [Tfl.Api.Presentation.Entities.LineServiceTypeInfo](#tfl.api.presentation.entities.lineservicetypeinfo)
  * stopServesServiceType `boolean`

### Tfl.Api.Presentation.Entities.LineStatus
* Tfl.Api.Presentation.Entities.LineStatus `object`
  * created `string`
  * disruption [Tfl.Api.Presentation.Entities.Disruption](#tfl.api.presentation.entities.disruption)
  * id `integer`
  * lineId `string`
  * modified `string`
  * reason `string`
  * statusSeverity `integer`
  * statusSeverityDescription `string`
  * validityPeriods `array`
    * items [Tfl.Api.Presentation.Entities.ValidityPeriod](#tfl.api.presentation.entities.validityperiod)

### Tfl.Api.Presentation.Entities.MatchedRoute
* Tfl.Api.Presentation.Entities.MatchedRoute `object`: Description of a Route used in Route search results.
  * destination `string`: The Id (NaPTAN code) or the Destination StopPoint
  * destinationName `string`: The name of the Destination StopPoint
  * direction `string`: Inbound or Outbound
  * name `string`: Name such as "72"
  * originationName `string`: The name of the Origin StopPoint
  * originator `string`: The Id (NaPTAN code) of the Origin StopPoint
  * routeCode `string`: The route code
  * serviceType `string`: Regular or Night
  * validFrom `string`: The DateTime that the Service containing this Route is valid from.
  * validTo `string`: The DateTime that the Service containing this Route is valid until.

### Tfl.Api.Presentation.Entities.MatchedRouteSections
* Tfl.Api.Presentation.Entities.MatchedRouteSections `object`
  * id `integer`

### Tfl.Api.Presentation.Entities.MatchedStop
* Tfl.Api.Presentation.Entities.MatchedStop `object`
  * accessibilitySummary `string`
  * direction `string`
  * hasDisruption `boolean`
  * icsId `string`
  * id `string`
  * lat `number`
  * lines `array`
    * items [Tfl.Api.Presentation.Entities.Identifier](#tfl.api.presentation.entities.identifier)
  * lon `number`
  * modes `array`
    * items `string`
  * name `string`
  * parentId `string`
  * routeId `integer`
  * stationId `string`
  * status `boolean`
  * stopLetter `string`
  * stopType `string`
  * topMostParentId `string`
  * towards `string`
  * url `string`
  * zone `string`

### Tfl.Api.Presentation.Entities.Message
* Tfl.Api.Presentation.Entities.Message `object`
  * bulletOrder `integer`
  * header `boolean`
  * linkText `string`
  * messageText `string`
  * url `string`

### Tfl.Api.Presentation.Entities.Mode
* Tfl.Api.Presentation.Entities.Mode `object`
  * isFarePaying `boolean`
  * isScheduledService `boolean`
  * isTflService `boolean`
  * modeName `string`

### Tfl.Api.Presentation.Entities.NetworkStatus
* Tfl.Api.Presentation.Entities.NetworkStatus `object`: Represent travel network status
  * message `string`
  * operator `string`
  * status `string`
  * statusLevel `integer`

### Tfl.Api.Presentation.Entities.OrderedRoute
* Tfl.Api.Presentation.Entities.OrderedRoute `object`
  * name `string`
  * naptanIds `array`
    * items `string`
  * serviceType `string`

### Tfl.Api.Presentation.Entities.PassengerFlow
* Tfl.Api.Presentation.Entities.PassengerFlow `object`
  * timeSlice `string`: Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.
  * value `integer`: Count of passenger flow towards a platform

### Tfl.Api.Presentation.Entities.PathAttribute
* Tfl.Api.Presentation.Entities.PathAttribute `object`
  * name `string`
  * value `string`

### Tfl.Api.Presentation.Entities.Period
* Tfl.Api.Presentation.Entities.Period `object`
  * frequency [Tfl.Api.Presentation.Entities.ServiceFrequency](#tfl.api.presentation.entities.servicefrequency)
  * fromTime [Tfl.Api.Presentation.Entities.TwentyFourHourClockTime](#tfl.api.presentation.entities.twentyfourhourclocktime)
  * toTime [Tfl.Api.Presentation.Entities.TwentyFourHourClockTime](#tfl.api.presentation.entities.twentyfourhourclocktime)
  * type `string` (values: Normal, FrequencyHours, FrequencyMinutes, Unknown)

### Tfl.Api.Presentation.Entities.Place
* Tfl.Api.Presentation.Entities.Place `object`
  * additionalProperties `array`: A bag of additional key/value pairs with extra information about this place.
    * items [Tfl.Api.Presentation.Entities.AdditionalProperties](#tfl.api.presentation.entities.additionalproperties)
  * children `array`
    * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)
  * childrenUrls `array`
    * items `string`
  * commonName `string`: A human readable name.
  * distance `number`: The distance of the place from its search point, if this is the result
  * id `string`: A unique identifier.
  * lat `number`: WGS84 latitude of the location.
  * lon `number`: WGS84 longitude of the location.
  * placeType `string`: The type of Place. See /Place/Meta/placeTypes for possible values.
  * url `string`: The unique location of this resource.

### Tfl.Api.Presentation.Entities.PlaceCategory
* Tfl.Api.Presentation.Entities.PlaceCategory `object`
  * availableKeys `array`
    * items `string`
  * category `string`

### Tfl.Api.Presentation.Entities.PlacePolygon
* Tfl.Api.Presentation.Entities.PlacePolygon `object`
  * commonName `string`
  * geoPoints `array`
    * items [Tfl.Api.Common.GeoPoint](#tfl.api.common.geopoint)

### Tfl.Api.Presentation.Entities.Point
* Tfl.Api.Presentation.Entities.Point `object`: Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
  * lat `number`: WGS84 latitude of the location.
  * lon `number`: WGS84 longitude of the location.

### Tfl.Api.Presentation.Entities.Prediction
* Tfl.Api.Presentation.Entities.Prediction `object`: DTO to capture the prediction details
  * bearing `string`: Bearing (between 0 to 359)
  * currentLocation `string`: The current location of the vehicle.
  * destinationName `string`: Name of the destination
  * destinationNaptanId `string`: Naptan Identifier for the prediction's destination
  * direction `string`: Direction (unified to inbound/outbound)
  * expectedArrival `string`: The expected arrival time of the vehicle at the stop/station
  * id `string`: The identitier for the prediction
  * lineId `string`: Unique identifier for the Line
  * lineName `string`: Line Name
  * modeName `string`: The mode name of the station/line the prediction relates to
  * naptanId `string`: Identifier for the prediction
  * operationType `integer`: The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache)
  * platformName `string`: Platform name (for bus, this is the stop letter)
  * stationName `string`: Station name
  * timeToLive `string`: The expiry time for the prediction
  * timeToStation `integer`: Prediction of the Time to station in seconds
  * timestamp `string`: Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration)
  * timing [Tfl.Api.Presentation.Entities.PredictionTiming](#tfl.api.presentation.entities.predictiontiming)
  * towards `string`: Routing information or other descriptive text about the path of the vehicle towards the destination
  * vehicleId `string`: The actual vehicle in transit (for train modes, the leading car of the rolling set)

### Tfl.Api.Presentation.Entities.PredictionTiming
* Tfl.Api.Presentation.Entities.PredictionTiming `object`
  * countdownServerAdjustment `string`
  * insert `string`
  * read `string`
  * received `string`
  * sent `string`
  * source `string`

### Tfl.Api.Presentation.Entities.Redirect
* Tfl.Api.Presentation.Entities.Redirect `object`
  * active `boolean`
  * longUrl `string`
  * shortUrl `string`

### Tfl.Api.Presentation.Entities.RoadCorridor
* Tfl.Api.Presentation.Entities.RoadCorridor `object`
  * bounds `string`: The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate
  * displayName `string`: The display name of the Corridor e.g. "North Circular (A406)". This
  * envelope `string`: The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon
  * group `string`: The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null.
  * id `string`: The Id of the Corridor e.g. "A406"
  * statusAggregationEndDate `string`: The end of the period over which status has been aggregated, or null if this is the current corridor status.
  * statusAggregationStartDate `string`: The start of the period over which status has been aggregated, or null if this is the current corridor status.
  * statusSeverity `string`: Standard multi-mode status severity code
  * statusSeverityDescription `string`: Description of the status severity as applied to RoadCorridors
  * url `string`: URL to retrieve this Corridor.

### Tfl.Api.Presentation.Entities.RoadDisruption
* Tfl.Api.Presentation.Entities.RoadDisruption `object`
  * category `string`: Describes the nature of disruption e.g. Traffic Incidents, Works
  * comments `string`: Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate.
  * corridorIds `array`: The Ids of affected corridors, if any.
    * items `string`
  * currentUpdate `string`: Text of the most recent update from the LSTCC on the state of the
  * currentUpdateDateTime `string`: The time when the last CurrentUpdate description was recorded, 
  * endDateTime `string`: The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned 
  * geography [System.Data.Spatial.DbGeography](#system.data.spatial.dbgeography)
  * geometry [System.Data.Spatial.DbGeography](#system.data.spatial.dbgeography)
  * hasClosures `boolean`: True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a 
  * id `string`: Unique identifier for the road disruption
  * isProvisional `boolean`: True if the disruption is planned on a future date that is open to change
  * lastModifiedTime `string`: The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly
  * levelOfInterest `string`: This describes the level of potential impact on traffic operations of the disruption. 
  * linkText `string`: The text of any associated link
  * linkUrl `string`: The url of any associated link
  * location `string`: Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited.
  * ordinal `integer`: An ordinal of the disruption based on severity, level of interest and corridor.
  * point `string`: Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string.
  * publishEndDate `string`
  * publishStartDate `string`: TDM Additional properties
  * recurringSchedules `array`
    * items [Tfl.Api.Presentation.Entities.RoadDisruptionSchedule](#tfl.api.presentation.entities.roaddisruptionschedule)
  * roadDisruptionImpactAreas `array`
    * items [Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea](#tfl.api.presentation.entities.roaddisruptionimpactarea)
  * roadDisruptionLines `array`
    * items [Tfl.Api.Presentation.Entities.RoadDisruptionLine](#tfl.api.presentation.entities.roaddisruptionline)
  * roadProject [Tfl.Api.Presentation.Entities.RoadProject](#tfl.api.presentation.entities.roadproject)
  * severity `string`: A description of the severity of the disruption.
  * startDateTime `string`: The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.
  * status `string`: This describes the status of the disruption.  
  * streets `array`: A collection of zero or more streets affected by the disruption.
    * items [Tfl.Api.Presentation.Entities.Street](#tfl.api.presentation.entities.street)
  * subCategory `string`: Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load
  * timeFrame `string`
  * url `string`: URL to retrieve this road disruption

### Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea
* Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea `object`
  * endDate `string`
  * endTime `string`
  * id `integer`
  * polygon [System.Data.Spatial.DbGeography](#system.data.spatial.dbgeography)
  * roadDisruptionId `string`
  * startDate `string`
  * startTime `string`

### Tfl.Api.Presentation.Entities.RoadDisruptionLine
* Tfl.Api.Presentation.Entities.RoadDisruptionLine `object`
  * endDate `string`
  * endTime `string`
  * id `integer`
  * isDiversion `boolean`
  * multiLineString [System.Data.Spatial.DbGeography](#system.data.spatial.dbgeography)
  * roadDisruptionId `string`
  * startDate `string`
  * startTime `string`

### Tfl.Api.Presentation.Entities.RoadDisruptionSchedule
* Tfl.Api.Presentation.Entities.RoadDisruptionSchedule `object`
  * endTime `string`
  * startTime `string`

### Tfl.Api.Presentation.Entities.RoadProject
* Tfl.Api.Presentation.Entities.RoadProject `object`
  * boroughsBenefited `array`
    * items `string`
  * constructionEndDate `string`
  * constructionStartDate `string`
  * consultationEndDate `string`
  * consultationPageUrl `string`
  * consultationStartDate `string`
  * contactEmail `string`
  * contactName `string`
  * cycleSuperhighwayId `string`
  * externalPageUrl `string`
  * phase `string` (values: Unscoped, Concept, ConsultationEnded, Consultation, Construction, Complete)
  * projectDescription `string`
  * projectId `string`
  * projectName `string`
  * projectPageUrl `string`
  * projectSummaryPageUrl `string`
  * schemeName `string`

### Tfl.Api.Presentation.Entities.RouteSearchMatch
* Tfl.Api.Presentation.Entities.RouteSearchMatch `object`
  * id `string`
  * lat `number`
  * lineId `string`
  * lineName `string`
  * lineRouteSection `array`
    * items [Tfl.Api.Presentation.Entities.LineRouteSection](#tfl.api.presentation.entities.lineroutesection)
  * lon `number`
  * matchedRouteSections `array`
    * items [Tfl.Api.Presentation.Entities.MatchedRouteSections](#tfl.api.presentation.entities.matchedroutesections)
  * matchedStops `array`
    * items [Tfl.Api.Presentation.Entities.MatchedStop](#tfl.api.presentation.entities.matchedstop)
  * mode `string`
  * name `string`
  * url `string`

### Tfl.Api.Presentation.Entities.RouteSearchResponse
* Tfl.Api.Presentation.Entities.RouteSearchResponse `object`
  * input `string`
  * searchMatches `array`
    * items [Tfl.Api.Presentation.Entities.RouteSearchMatch](#tfl.api.presentation.entities.routesearchmatch)

### Tfl.Api.Presentation.Entities.RouteSection
* Tfl.Api.Presentation.Entities.RouteSection `object`
  * destinationName `string`: The name of the Destination StopPoint
  * direction `string`: Inbound or Outbound
  * id `string`: The Id of the route
  * lineId `string`: The Id of the Line
  * lineString `string`: The co-ordinates of the route's path as a geoJSON lineString
  * name `string`: Name such as "72"
  * originationName `string`: The name of the Origin StopPoint
  * routeCode `string`: The route code
  * routeSectionNaptanEntrySequence `array`
    * items [Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence](#tfl.api.presentation.entities.routesectionnaptanentrysequence)
  * validFrom `string`: The DateTime that the Service containing this Route is valid from.
  * validTo `string`: The DateTime that the Service containing this Route is valid until.

### Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence
* Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence `object`
  * ordinal `integer`
  * stopPoint [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)

### Tfl.Api.Presentation.Entities.RouteSequence
* Tfl.Api.Presentation.Entities.RouteSequence `object`
  * direction `string`
  * isOutboundOnly `boolean`
  * lineId `string`
  * lineName `string`
  * lineStrings `array`
    * items `string`
  * mode `string`
  * orderedLineRoutes `array`
    * items [Tfl.Api.Presentation.Entities.OrderedRoute](#tfl.api.presentation.entities.orderedroute)
  * stations `array`
    * items [Tfl.Api.Presentation.Entities.MatchedStop](#tfl.api.presentation.entities.matchedstop)
  * stopPointSequences `array`
    * items [Tfl.Api.Presentation.Entities.StopPointSequence](#tfl.api.presentation.entities.stoppointsequence)

### Tfl.Api.Presentation.Entities.Schedule
* Tfl.Api.Presentation.Entities.Schedule `object`
  * firstJourney [Tfl.Api.Presentation.Entities.KnownJourney](#tfl.api.presentation.entities.knownjourney)
  * knownJourneys `array`
    * items [Tfl.Api.Presentation.Entities.KnownJourney](#tfl.api.presentation.entities.knownjourney)
  * lastJourney [Tfl.Api.Presentation.Entities.KnownJourney](#tfl.api.presentation.entities.knownjourney)
  * name `string`
  * periods `array`
    * items [Tfl.Api.Presentation.Entities.Period](#tfl.api.presentation.entities.period)

### Tfl.Api.Presentation.Entities.SearchMatch
* Tfl.Api.Presentation.Entities.SearchMatch `object`
  * id `string`
  * lat `number`
  * lon `number`
  * name `string`
  * url `string`

### Tfl.Api.Presentation.Entities.SearchResponse
* Tfl.Api.Presentation.Entities.SearchResponse `object`
  * from `integer`
  * matches `array`
    * items [Tfl.Api.Presentation.Entities.SearchMatch](#tfl.api.presentation.entities.searchmatch)
  * maxScore `number`
  * page `integer`
  * pageSize `integer`
  * provider `string`
  * query `string`
  * total `integer`

### Tfl.Api.Presentation.Entities.ServiceFrequency
* Tfl.Api.Presentation.Entities.ServiceFrequency `object`
  * highestFrequency `number`
  * lowestFrequency `number`

### Tfl.Api.Presentation.Entities.StationInterval
* Tfl.Api.Presentation.Entities.StationInterval `object`
  * id `string`
  * intervals `array`
    * items [Tfl.Api.Presentation.Entities.Interval](#tfl.api.presentation.entities.interval)

### Tfl.Api.Presentation.Entities.StatusSeverity
* Tfl.Api.Presentation.Entities.StatusSeverity `object`
  * description `string`
  * modeName `string`
  * severityLevel `integer`

### Tfl.Api.Presentation.Entities.StopPoint
* Tfl.Api.Presentation.Entities.StopPoint `object`
  * accessibilitySummary `string`
  * additionalProperties `array`: A bag of additional key/value pairs with extra information about this place.
    * items [Tfl.Api.Presentation.Entities.AdditionalProperties](#tfl.api.presentation.entities.additionalproperties)
  * children `array`
    * items [Tfl.Api.Presentation.Entities.Place](#tfl.api.presentation.entities.place)
  * childrenUrls `array`
    * items `string`
  * commonName `string`: A human readable name.
  * distance `number`: The distance of the place from its search point, if this is the result
  * fullName `string`
  * hubNaptanCode `string`
  * icsCode `string`
  * id `string`: A unique identifier.
  * indicator `string`: The indicator of the stop point e.g. "Stop K"
  * lat `number`: WGS84 latitude of the location.
  * lineGroup `array`
    * items [Tfl.Api.Presentation.Entities.LineGroup](#tfl.api.presentation.entities.linegroup)
  * lineModeGroups `array`
    * items [Tfl.Api.Presentation.Entities.LineModeGroup](#tfl.api.presentation.entities.linemodegroup)
  * lines `array`
    * items [Tfl.Api.Presentation.Entities.Identifier](#tfl.api.presentation.entities.identifier)
  * lon `number`: WGS84 longitude of the location.
  * modes `array`
    * items `string`
  * naptanId `string`
  * naptanMode `string`
  * placeType `string`: The type of Place. See /Place/Meta/placeTypes for possible values.
  * platformName `string`
  * smsCode `string`
  * stationNaptan `string`
  * status `boolean`
  * stopLetter `string`: The stop letter, if it could be cleansed from the Indicator e.g. "K"
  * stopType `string`
  * url `string`: The unique location of this resource.

### Tfl.Api.Presentation.Entities.StopPointCategory
* Tfl.Api.Presentation.Entities.StopPointCategory `object`
  * availableKeys `array`
    * items `string`
  * category `string`

### Tfl.Api.Presentation.Entities.StopPointRouteSection
* Tfl.Api.Presentation.Entities.StopPointRouteSection `object`
  * destinationName `string`
  * direction `string`
  * isActive `boolean`
  * lineId `string`
  * lineString `string`
  * mode `string`
  * naptanId `string`
  * routeSectionName `string`
  * serviceType `string`
  * validFrom `string`
  * validTo `string`
  * vehicleDestinationText `string`

### Tfl.Api.Presentation.Entities.StopPointSequence
* Tfl.Api.Presentation.Entities.StopPointSequence `object`
  * branchId `integer`: The id of this branch.
  * direction `string`
  * lineId `string`
  * lineName `string`
  * nextBranchIds `array`: The ids of the next branch(es) in the sequence. Note that the next and previous branch id can be
    * items `integer`
  * prevBranchIds `array`: The ids of the previous branch(es) in the sequence. Note that the next and previous branch id can be
    * items `integer`
  * serviceType `string` (values: Regular, Night)
  * stopPoint `array`
    * items [Tfl.Api.Presentation.Entities.MatchedStop](#tfl.api.presentation.entities.matchedstop)

### Tfl.Api.Presentation.Entities.StopPointsResponse
* Tfl.Api.Presentation.Entities.StopPointsResponse `object`: A paged response containing StopPoints
  * centrePoint `array`: The centre latitude/longitude of this list of StopPoints
    * items `number`
  * page `integer`: The index of this page
  * pageSize `integer`: The maximum size of the page in this response i.e. the maximum number of StopPoints
  * stopPoints `array`: Collection of stop points
    * items [Tfl.Api.Presentation.Entities.StopPoint](#tfl.api.presentation.entities.stoppoint)
  * total `integer`: The total number of StopPoints available across all pages

### Tfl.Api.Presentation.Entities.Street
* Tfl.Api.Presentation.Entities.Street `object`
  * closure `string`: Type of road closure. Some example values:
  * directions `string`: The direction of the disruption on the street. Some example values:
  * name `string`: Street name
  * segments `array`: Geographic description of the sections of this street that are affected.
    * items [Tfl.Api.Presentation.Entities.StreetSegment](#tfl.api.presentation.entities.streetsegment)
  * sourceSystemId `integer`: The ID from the source system of the disruption that this street belongs to.
  * sourceSystemKey `string`: The key of the source system of the disruption that this street belongs to.

### Tfl.Api.Presentation.Entities.StreetSegment
* Tfl.Api.Presentation.Entities.StreetSegment `object`
  * lineString `string`: geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment.
  * sourceSystemId `integer`: The ID from the source system of the disruption that this street belongs to.
  * sourceSystemKey `string`: The key of the source system of the disruption that this street belongs to.
  * toid `string`: A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link.

### Tfl.Api.Presentation.Entities.Timetable
* Tfl.Api.Presentation.Entities.Timetable `object`
  * departureStopId `string`
  * routes `array`
    * items [Tfl.Api.Presentation.Entities.TimetableRoute](#tfl.api.presentation.entities.timetableroute)

### Tfl.Api.Presentation.Entities.TimetableResponse
* Tfl.Api.Presentation.Entities.TimetableResponse `object`
  * direction `string`
  * disambiguation [Tfl.Api.Presentation.Entities.Timetables.Disambiguation](#tfl.api.presentation.entities.timetables.disambiguation)
  * lineId `string`
  * lineName `string`
  * pdfUrl `string`
  * stations `array`
    * items [Tfl.Api.Presentation.Entities.MatchedStop](#tfl.api.presentation.entities.matchedstop)
  * statusErrorMessage `string`
  * stops `array`
    * items [Tfl.Api.Presentation.Entities.MatchedStop](#tfl.api.presentation.entities.matchedstop)
  * timetable [Tfl.Api.Presentation.Entities.Timetable](#tfl.api.presentation.entities.timetable)

### Tfl.Api.Presentation.Entities.TimetableRoute
* Tfl.Api.Presentation.Entities.TimetableRoute `object`
  * schedules `array`
    * items [Tfl.Api.Presentation.Entities.Schedule](#tfl.api.presentation.entities.schedule)
  * stationIntervals `array`
    * items [Tfl.Api.Presentation.Entities.StationInterval](#tfl.api.presentation.entities.stationinterval)

### Tfl.Api.Presentation.Entities.Timetables.Disambiguation
* Tfl.Api.Presentation.Entities.Timetables.Disambiguation `object`
  * disambiguationOptions `array`
    * items [Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption](#tfl.api.presentation.entities.timetables.disambiguationoption)

### Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption
* Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption `object`
  * description `string`
  * uri `string`

### Tfl.Api.Presentation.Entities.TrainLoading
* Tfl.Api.Presentation.Entities.TrainLoading `object`
  * direction `string`: Direction in regards to Journey Planner i.e. inbound or outbound
  * line `string`: The Line Name e.g. "Victoria"
  * lineDirection `string`: Direction of the Line e.g. NB, SB, WB etc.
  * naptanTo `string`: Naptan of the adjacent station
  * platformDirection `string`: Direction displayed on the platform e.g. NB, SB, WB etc.
  * timeSlice `string`: Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.
  * value `integer`: Scale between 1-6, 

### Tfl.Api.Presentation.Entities.TwentyFourHourClockTime
* Tfl.Api.Presentation.Entities.TwentyFourHourClockTime `object`
  * hour `string`
  * minute `string`

### Tfl.Api.Presentation.Entities.ValidityPeriod
* Tfl.Api.Presentation.Entities.ValidityPeriod `object`: Represents a period for which a planned works is valid.
  * fromDate `string`: Gets or sets the start date.
  * isNow `boolean`: If true is a realtime status rather than planned or info
  * toDate `string`: Gets or sets the end date.

### Tfl.Api.Presentation.Entities.VehicleMatch
* Tfl.Api.Presentation.Entities.VehicleMatch `object`
  * colour `string`
  * compliance `string` (values: NotAvailable, NotCompliant, Compliant, Exempt)
  * make `string`
  * model `string`
  * type `string`
  * vrm `string`


