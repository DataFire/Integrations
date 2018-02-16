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
  * items [AccidentDetail](#accidentdetail)

### AirQuality_Get
Gets air quality data feed


```js
tfl_gov_uk.AirQuality_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Object](#object)

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
  * items [Place](#place)

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
  * items [Place](#place)

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
* output [Place](#place)

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
* output [Object](#object)

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
* output [ItineraryResult](#itineraryresult)

### Journey_Meta
Gets a list of all of the available journey planner modes


```js
tfl_gov_uk.Journey_Meta(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Mode](#mode)

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
  * items [Mode](#mode)

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
  * items [StatusSeverity](#statusseverity)

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
  * items [Line](#line)

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
  * items [Disruption](#disruption)

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
  * items [Line](#line)

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
  * items [Line](#line)

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
  * items [Line](#line)

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
* output [RouteSearchResponse](#routesearchresponse)

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
  * items [Line](#line)

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
  * items [Line](#line)

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
  * items [Prediction](#prediction)

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
  * items [Disruption](#disruption)

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
  * items [Line](#line)

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
  * items [Line](#line)

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
  * items [Line](#line)

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
* output [RouteSequence](#routesequence)

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
  * items [StopPoint](#stoppoint)

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
* output [TimetableResponse](#timetableresponse)

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
* output [TimetableResponse](#timetableresponse)

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
  * items [ActiveServiceType](#activeservicetype)

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
  * items [Prediction](#prediction)

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
  * items [BikePointOccupancy](#bikepointoccupancy)

### Occupancy.CarPark.get
Gets the occupancy for all car parks that have occupancy data


```js
tfl_gov_uk.Occupancy.CarPark.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CarParkOccupancy](#carparkoccupancy)

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
* output [CarParkOccupancy](#carparkoccupancy)

### Occupancy_GetAllChargeConnectorStatus
Gets the occupancy for all charge connectors


```js
tfl_gov_uk.Occupancy_GetAllChargeConnectorStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ChargeConnectorOccupancy](#chargeconnectoroccupancy)

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
  * items [ChargeConnectorOccupancy](#chargeconnectoroccupancy)

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
  * items [StopPoint](#stoppoint)

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
* output [Object](#object)

### Place_MetaCategories
Gets a list of all of the available place property categories and keys.


```js
tfl_gov_uk.Place_MetaCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PlaceCategory](#placecategory)

### Place_MetaPlaceTypes
Gets a list of the available types of Place.


```js
tfl_gov_uk.Place_MetaPlaceTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PlaceCategory](#placecategory)

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
  * items [Place](#place)

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
  * items [Place](#place)

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
  * items [Place](#place)

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
* output [Object](#object)

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
* output [Object](#object)

### Road.get
Gets all roads managed by TfL


```js
tfl_gov_uk.Road.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [RoadCorridor](#roadcorridor)

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
  * items [StatusSeverity](#statusseverity)

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
* output [RoadDisruption](#roaddisruption)

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
* output [Object](#object)

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
  * items [RoadCorridor](#roadcorridor)

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
  * items [RoadDisruption](#roaddisruption)

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
  * items [RoadCorridor](#roadcorridor)

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
* output [SearchResponse](#searchresponse)

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
* output [SearchResponse](#searchresponse)

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
* output [StopPointsResponse](#stoppointsresponse)

### StopPoint_MetaCategories
Gets the list of available StopPoint additional information categories


```js
tfl_gov_uk.StopPoint_MetaCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [StopPointCategory](#stoppointcategory)

### StopPoint_MetaModes
Gets the list of available StopPoint modes


```js
tfl_gov_uk.StopPoint_MetaModes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Mode](#mode)

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
* output [StopPointsResponse](#stoppointsresponse)

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
  * items [DisruptedPoint](#disruptedpoint)

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
* output [SearchResponse](#searchresponse)

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
* output [SearchResponse](#searchresponse)

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
  * items [LineServiceType](#lineservicetype)

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
* output [Object](#object)

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
  * items [StopPoint](#stoppoint)

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
  * items [StopPoint](#stoppoint)

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
  * items [DisruptedPoint](#disruptedpoint)

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
  * items [Prediction](#prediction)

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
  * items [StopPoint](#stoppoint)

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
  * items [StopPoint](#stoppoint)

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
  * items [StopPointRouteSection](#stoppointroutesection)

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
  * items [Place](#place)

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
  * items [Place](#place)

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
  * items [Place](#place)

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
* output [Object](#object)

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
* output [Object](#object)

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
* output [VehicleMatch](#vehiclematch)

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
* output [VehicleMatch](#vehiclematch)

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
  * items [Prediction](#prediction)



## Definitions

### AccidentDetail
* AccidentDetail `object`
  * borough `string`
  * casualties `array`
    * items [Casualty](#casualty)
  * date `string`
  * id `integer`
  * lat `number`
  * location `string`
  * lon `number`
  * severity `string`
  * vehicles `array`
    * items [Vehicle](#vehicle)

### AccidentStatsOrderedSummary
* AccidentStatsOrderedSummary `object`
  * accidents `integer`
  * borough `string`
  * year `integer`

### ActiveServiceType
* ActiveServiceType `object`
  * mode `string`
  * serviceType `string`

### AdditionalProperties
* AdditionalProperties `object`
  * category `string`
  * key `string`
  * modified `string`
  * sourceSystemKey `string`
  * value `string`

### ApiVersionInfo
* ApiVersionInfo `object`
  * assemblies `array`
    * items `string`
  * label `string`
  * timestamp `string`
  * version `string`

### Bay
* Bay `object`
  * bayCount `integer`
  * bayType `string`
  * free `integer`
  * occupied `integer`

### BikePointOccupancy
* BikePointOccupancy `object`: Bike point occupancy
  * bikesCount `integer`: Total bike counts
  * emptyDocks `integer`: Empty docks
  * id `string`: Id of the bike point such as BikePoints_1
  * name `string`: Name / Common name of the bike point
  * totalDocks `integer`: Total docks available

### CarParkOccupancy
* CarParkOccupancy `object`
  * bays `array`
    * items [Bay](#bay)
  * carParkDetailsUrl `string`
  * id `string`
  * name `string`

### Casualty
* Casualty `object`
  * age `integer`
  * ageBand `string`
  * class `string`
  * mode `string`
  * severity `string`

### ChargeConnectorOccupancy
* ChargeConnectorOccupancy `object`
  * id `integer`
  * sourceSystemPlaceId `string`
  * status `string`

### Coordinate
* Coordinate `object`
  * easting `number`
  * latitude `number`
  * longitude `number`
  * northing `number`
  * xCoord `integer`
  * yCoord `integer`

### Crowding
* Crowding `object`
  * passengerFlows `array`: Busiest times at a station (static information)
    * items [PassengerFlow](#passengerflow)
  * trainLoadings `array`: Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information)
    * items [TrainLoading](#trainloading)

### CycleSuperhighway
* CycleSuperhighway `object`
  * geography [DbGeography](#dbgeography)
  * id `string`: The Id
  * label `string`: The long label to show on maps when zoomed in
  * labelShort `string`: The short label to show on maps
  * modified `string`: When the data was last updated
  * segmented `boolean`: True if the route is split into segments

### DateRange
* DateRange `object`
  * endDate `string`
  * startDate `string`

### DateRangeNullable
* DateRangeNullable `object`
  * endDate `string`
  * startDate `string`

### DbGeography
* DbGeography `object`
  * geography [DbGeographyWellKnownValue](#dbgeographywellknownvalue)

### DbGeographyWellKnownValue
* DbGeographyWellKnownValue `object`
  * coordinateSystemId `integer`
  * wellKnownBinary `string`
  * wellKnownText `string`

### Disambiguation
* Disambiguation `object`
  * disambiguationOptions `array`
    * items [DisambiguationOption](#disambiguationoption)

### DisambiguationOption
* DisambiguationOption `object`
  * description `string`
  * uri `string`

### DisruptedPoint
* DisruptedPoint `object`
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

### Disruption
* Disruption `object`: Represents a disruption to a route within the transport network.
  * additionalInfo `string`: Gets or sets the additionaInfo of this disruption.
  * affectedRoutes `array`: Gets or sets the routes affected by this disruption
    * items [RouteSection](#routesection)
  * affectedStops `array`: Gets or sets the stops affected by this disruption
    * items [StopPoint](#stoppoint)
  * category `string` (values: Undefined, RealTime, PlannedWork, Information, Event, Crowding, StatusAlert): Gets or sets the category of this dispruption.
  * categoryDescription `string`: Gets or sets the description of the category.
  * closureText `string`: Text describing the closure type
  * created `string`: Gets or sets the date/time when this disruption was created.
  * description `string`: Gets or sets the description of this disruption.
  * lastUpdate `string`: Gets or sets the date/time when this disruption was last updated.
  * summary `string`: Gets or sets the summary of this disruption.
  * type `string`: Gets or sets the disruption type of this dispruption.

### Fare
* Fare `object`
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

### FareBounds
* FareBounds `object`
  * description `string`
  * displayName `string`
  * displayOrder `integer`
  * from `string`
  * id `integer`
  * isPopularFare `boolean`
  * isPopularTravelCard `boolean`
  * isTour `boolean`
  * messages `array`
    * items [Message](#message)
  * operator `string`
  * routeCode `string`
  * to `string`
  * via `string`

### FareDetails
* FareDetails `object`
  * boundsId `integer`
  * displayName `string`
  * displayOrder `integer`
  * endDate `string`
  * from `string`
  * fromStation `string`
  * isTour `boolean`
  * messages `array`
    * items [Message](#message)
  * mode `string`
  * operator `string`
  * passengerType `string`
  * routeCode `string`
  * routeDescription `string`
  * specialFare `boolean`
  * startDate `string`
  * throughFare `boolean`
  * ticketsAvailable `array`
    * items [Ticket](#ticket)
  * to `string`
  * toStation `string`
  * validatorInformation `string`
  * via `string`

### FaresMode
* FaresMode `object`
  * description `string`
  * id `integer`
  * name `string`

### FaresPeriod
* FaresPeriod `object`
  * endDate `string`
  * id `integer`
  * isFuture `boolean`
  * startDate `string`
  * viewableDate `string`

### FaresSection
* FaresSection `object`
  * header `string`
  * index `integer`
  * messages `array`
    * items [Message](#message)
  * rows `array`
    * items [FareDetails](#faredetails)

### GeoCodeSearchMatch
* GeoCodeSearchMatch `object`
  * address `string`: A string describing the formatted address of the place. Adds additional context to the place's Name.
  * id `string`
  * lat `number`
  * lon `number`
  * name `string`
  * types `array`: The type of the place e.g. "street_address"
    * items `string`
  * url `string`

### GeoPoint
* GeoPoint `object`
  * lat **required** `number`
  * lon **required** `number`

### GeoPointBBox
* GeoPointBBox `object`
  * neLat **required** `number`
  * neLon **required** `number`
  * swLat **required** `number`
  * swLon **required** `number`

### Identifier
* Identifier `object`
  * crowding [Crowding](#crowding)
  * fullName `string`
  * id `string`
  * name `string`
  * type `string`
  * uri `string`

### Instruction
* Instruction `object`
  * detailed `string`
  * steps `array`
    * items [InstructionStep](#instructionstep)
  * summary `string`

### InstructionStep
* InstructionStep `object`
  * cumulativeDistance `integer`
  * cumulativeTravelTime `integer`
  * description `string`
  * descriptionHeading `string`
  * distance `integer`
  * latitude `number`
  * longitude `number`
  * pathAttribute [PathAttribute](#pathattribute)
  * skyDirection `integer`
  * skyDirectionDescription `string` (values: North, NorthEast, East, SouthEast, South, SouthWest, West, NorthWest)
  * streetName `string`
  * trackType `string` (values: CycleSuperHighway, CanalTowpath, QuietRoad, ProvisionForCyclists, BusyRoads, None, PushBike, Quietway)
  * turnDirection `string`

### Interval
* Interval `object`
  * stopId `string`
  * timeToArrival `number`

### ItineraryResult
* ItineraryResult `object`: A DTO representing a list of possible journeys.
  * cycleHireDockingStationData [JourneyPlannerCycleHireDockingStationData](#journeyplannercyclehiredockingstationdata)
  * journeyVector [JourneyVector](#journeyvector)
  * journeys `array`
    * items [Journey](#journey)
  * lines `array`
    * items [Line](#line)
  * recommendedMaxAgeMinutes `integer`
  * searchCriteria [SearchCriteria](#searchcriteria)
  * stopMessages `array`
    * items `string`

### Journey
* Journey `object`: Object that represents an end to end journey (see schematic).
  * arrivalDateTime `string`
  * duration `integer`
  * legs `array`
    * items [Leg](#leg)
  * startDateTime `string`

### JourneyPlannerCycleHireDockingStationData
* JourneyPlannerCycleHireDockingStationData `object`
  * destinationId `string`
  * destinationNumberOfBikes `integer`
  * destinationNumberOfEmptySlots `integer`
  * originId `string`
  * originNumberOfBikes `integer`
  * originNumberOfEmptySlots `integer`

### JourneyVector
* JourneyVector `object`
  * from `string`
  * to `string`
  * uri `string`
  * via `string`

### JpElevation
* JpElevation `object`
  * distance `integer`
  * endLat `number`
  * endLon `number`
  * gradient `number`
  * heightFromPreviousPoint `integer`
  * startLat `number`
  * startLon `number`

### KnownJourney
* KnownJourney `object`
  * hour `string`
  * intervalId `integer`
  * minute `string`

### Leg
* Leg `object`
  * arrivalPoint [Point](#point)
  * arrivalTime `string`
  * departurePoint [Point](#point)
  * departureTime `string`
  * disruptions `array`
    * items [Disruption](#disruption)
  * distance `number`
  * duration `integer`
  * hasFixedLocations `boolean`
  * instruction [Instruction](#instruction)
  * isDisrupted `boolean`
  * mode [Identifier](#identifier)
  * obstacles `array`
    * items [Obstacle](#obstacle)
  * path [Path](#path)
  * plannedWorks `array`
    * items [PlannedWork](#plannedwork)
  * routeOptions `array`
    * items [RouteOption](#routeoption)
  * speed `string`

### Line
* Line `object`
  * created `string`
  * crowding [Crowding](#crowding)
  * disruptions `array`
    * items [Disruption](#disruption)
  * id `string`
  * lineStatuses `array`
    * items [LineStatus](#linestatus)
  * modeName `string`
  * modified `string`
  * name `string`
  * routeSections `array`
    * items [MatchedRoute](#matchedroute)
  * serviceTypes `array`
    * items [LineServiceTypeInfo](#lineservicetypeinfo)

### LineGroup
* LineGroup `object`
  * lineIdentifier `array`
    * items `string`
  * naptanIdReference `string`
  * stationAtcoCode `string`

### LineModeGroup
* LineModeGroup `object`
  * lineIdentifier `array`
    * items `string`
  * modeName `string`

### LineRouteSection
* LineRouteSection `object`
  * destination `string`
  * direction `string`
  * fromStation `string`
  * routeId `integer`
  * serviceType `string`
  * toStation `string`
  * vehicleDestinationText `string`

### LineServiceType
* LineServiceType `object`
  * lineName `string`
  * lineSpecificServiceTypes `array`
    * items [LineSpecificServiceType](#linespecificservicetype)

### LineServiceTypeInfo
* LineServiceTypeInfo `object`
  * name `string`
  * uri `string`

### LineSpecificServiceType
* LineSpecificServiceType `object`
  * serviceType [LineServiceTypeInfo](#lineservicetypeinfo)
  * stopServesServiceType `boolean`

### LineStatus
* LineStatus `object`
  * created `string`
  * disruption [Disruption](#disruption)
  * id `integer`
  * lineId `string`
  * modified `string`
  * reason `string`
  * statusSeverity `integer`
  * statusSeverityDescription `string`
  * validityPeriods `array`
    * items [ValidityPeriod](#validityperiod)

### MatchedRoute
* MatchedRoute `object`: Description of a Route used in Route search results.
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

### MatchedRouteSections
* MatchedRouteSections `object`
  * id `integer`

### MatchedStop
* MatchedStop `object`
  * accessibilitySummary `string`
  * direction `string`
  * hasDisruption `boolean`
  * icsId `string`
  * id `string`
  * lat `number`
  * lines `array`
    * items [Identifier](#identifier)
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

### Message
* Message `object`
  * bulletOrder `integer`
  * header `boolean`
  * linkText `string`
  * messageText `string`
  * url `string`

### Mode
* Mode `object`
  * isFarePaying `boolean`
  * isScheduledService `boolean`
  * isTflService `boolean`
  * modeName `string`

### Object
* Object `object`

### Obstacle
* Obstacle `object`
  * incline `string`
  * position `string`
  * stopId `integer`
  * type `string`

### OrderedRoute
* OrderedRoute `object`
  * name `string`
  * naptanIds `array`
    * items `string`
  * serviceType `string`

### PassengerFlow
* PassengerFlow `object`
  * timeSlice `string`: Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.
  * value `integer`: Count of passenger flow towards a platform

### PassengerType
* PassengerType `object`
  * description `string`
  * displayName `string`
  * displayOrder `integer`
  * type `string`

### Path
* Path `object`
  * elevation `array`
    * items [JpElevation](#jpelevation)
  * lineString `string`
  * stopPoints `array`
    * items [Identifier](#identifier)

### PathAttribute
* PathAttribute `object`
  * name `string`
  * value `string`

### Period
* Period `object`
  * frequency [ServiceFrequency](#servicefrequency)
  * fromTime [TwentyFourHourClockTime](#twentyfourhourclocktime)
  * toTime [TwentyFourHourClockTime](#twentyfourhourclocktime)
  * type `string` (values: Normal, FrequencyHours, FrequencyMinutes, Unknown)

### Place
* Place `object`
  * additionalProperties `array`: A bag of additional key/value pairs with extra information about this place.
    * items [AdditionalProperties](#additionalproperties)
  * children `array`
    * items [Place](#place)
  * childrenUrls `array`
    * items `string`
  * commonName `string`: A human readable name.
  * distance `number`: The distance of the place from its search point, if this is the result
  * id `string`: A unique identifier.
  * lat `number`: WGS84 latitude of the location.
  * lon `number`: WGS84 longitude of the location.
  * placeType `string`: The type of Place. See /Place/Meta/placeTypes for possible values.
  * url `string`: The unique location of this resource.

### PlaceCategory
* PlaceCategory `object`
  * availableKeys `array`
    * items `string`
  * category `string`

### PlacePolygon
* PlacePolygon `object`
  * commonName `string`
  * geoPoints `array`
    * items [GeoPoint](#geopoint)

### PlannedWork
* PlannedWork `object`
  * createdDateTime `string`
  * description `string`
  * id `string`
  * lastUpdateDateTime `string`

### Point
* Point `object`: Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
  * lat `number`: WGS84 latitude of the location.
  * lon `number`: WGS84 longitude of the location.

### PostcodeInput
* PostcodeInput `object`
  * postcode `string`

### Prediction
* Prediction `object`: DTO to capture the prediction details
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
  * timing [PredictionTiming](#predictiontiming)
  * towards `string`: Routing information or other descriptive text about the path of the vehicle towards the destination
  * vehicleId `string`: The actual vehicle in transit (for train modes, the leading car of the rolling set)

### PredictionTiming
* PredictionTiming `object`
  * countdownServerAdjustment `string`
  * insert `string`
  * read `string`
  * received `string`
  * sent `string`
  * source `string`

### Recommendation
* Recommendation `object`
  * cost `string`
  * discountCard `string`
  * fareType `string`
  * gettingYourTicket `array`
    * items [Message](#message)
  * id `integer`
  * keyFeatures `array`
    * items [Message](#message)
  * notes `array`
    * items [Message](#message)
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

### RecommendationResponse
* RecommendationResponse `object`
  * recommendations `array`
    * items [Recommendation](#recommendation)

### Redirect
* Redirect `object`
  * active `boolean`
  * longUrl `string`
  * shortUrl `string`

### RoadCorridor
* RoadCorridor `object`
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

### RoadDisruption
* RoadDisruption `object`
  * category `string`: Describes the nature of disruption e.g. Traffic Incidents, Works
  * comments `string`: Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate.
  * corridorIds `array`: The Ids of affected corridors, if any.
    * items `string`
  * currentUpdate `string`: Text of the most recent update from the LSTCC on the state of the
  * currentUpdateDateTime `string`: The time when the last CurrentUpdate description was recorded, 
  * endDateTime `string`: The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned 
  * geography [DbGeography](#dbgeography)
  * geometry [DbGeography](#dbgeography)
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
    * items [RoadDisruptionSchedule](#roaddisruptionschedule)
  * roadDisruptionImpactAreas `array`
    * items [RoadDisruptionImpactArea](#roaddisruptionimpactarea)
  * roadDisruptionLines `array`
    * items [RoadDisruptionLine](#roaddisruptionline)
  * roadProject [RoadProject](#roadproject)
  * severity `string`: A description of the severity of the disruption.
  * startDateTime `string`: The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.
  * status `string`: This describes the status of the disruption.  
  * streets `array`: A collection of zero or more streets affected by the disruption.
    * items [Street](#street)
  * subCategory `string`: Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load
  * timeFrame `string`
  * url `string`: URL to retrieve this road disruption

### RoadDisruptionImpactArea
* RoadDisruptionImpactArea `object`
  * endDate `string`
  * endTime `string`
  * id `integer`
  * polygon [DbGeography](#dbgeography)
  * roadDisruptionId `string`
  * startDate `string`
  * startTime `string`

### RoadDisruptionLine
* RoadDisruptionLine `object`
  * endDate `string`
  * endTime `string`
  * id `integer`
  * isDiversion `boolean`
  * multiLineString [DbGeography](#dbgeography)
  * roadDisruptionId `string`
  * startDate `string`
  * startTime `string`

### RoadDisruptionSchedule
* RoadDisruptionSchedule `object`
  * endTime `string`
  * startTime `string`

### RoadProject
* RoadProject `object`
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

### RouteOption
* RouteOption `object`
  * directions `array`
    * items `string`
  * id `string`: The Id of the route
  * lineIdentifier [Identifier](#identifier)
  * name `string`: Name such as "72"

### RouteSearchMatch
* RouteSearchMatch `object`
  * id `string`
  * lat `number`
  * lineId `string`
  * lineName `string`
  * lineRouteSection `array`
    * items [LineRouteSection](#lineroutesection)
  * lon `number`
  * matchedRouteSections `array`
    * items [MatchedRouteSections](#matchedroutesections)
  * matchedStops `array`
    * items [MatchedStop](#matchedstop)
  * mode `string`
  * name `string`
  * url `string`

### RouteSearchResponse
* RouteSearchResponse `object`
  * input `string`
  * searchMatches `array`
    * items [RouteSearchMatch](#routesearchmatch)

### RouteSection
* RouteSection `object`
  * destinationName `string`: The name of the Destination StopPoint
  * direction `string`: Inbound or Outbound
  * id `string`: The Id of the route
  * lineId `string`: The Id of the Line
  * lineString `string`: The co-ordinates of the route's path as a geoJSON lineString
  * name `string`: Name such as "72"
  * originationName `string`: The name of the Origin StopPoint
  * routeCode `string`: The route code
  * routeSectionNaptanEntrySequence `array`
    * items [RouteSectionNaptanEntrySequence](#routesectionnaptanentrysequence)
  * validFrom `string`: The DateTime that the Service containing this Route is valid from.
  * validTo `string`: The DateTime that the Service containing this Route is valid until.

### RouteSectionNaptanEntrySequence
* RouteSectionNaptanEntrySequence `object`
  * ordinal `integer`
  * stopPoint [StopPoint](#stoppoint)

### RouteSequence
* RouteSequence `object`
  * direction `string`
  * isOutboundOnly `boolean`
  * lineId `string`
  * lineName `string`
  * lineStrings `array`
    * items `string`
  * mode `string`
  * orderedLineRoutes `array`
    * items [OrderedRoute](#orderedroute)
  * stations `array`
    * items [MatchedStop](#matchedstop)
  * stopPointSequences `array`
    * items [StopPointSequence](#stoppointsequence)

### Schedule
* Schedule `object`
  * firstJourney [KnownJourney](#knownjourney)
  * knownJourneys `array`
    * items [KnownJourney](#knownjourney)
  * lastJourney [KnownJourney](#knownjourney)
  * name `string`
  * periods `array`
    * items [Period](#period)

### SearchCriteria
* SearchCriteria `object`
  * dateTime `string`
  * dateTimeType `string` (values: Arriving, Departing)
  * timeAdjustments [TimeAdjustments](#timeadjustments)

### SearchMatch
* SearchMatch `object`
  * id `string`
  * lat `number`
  * lon `number`
  * name `string`
  * url `string`

### SearchResponse
* SearchResponse `object`
  * from `integer`
  * matches `array`
    * items [SearchMatch](#searchmatch)
  * maxScore `number`
  * page `integer`
  * pageSize `integer`
  * provider `string`
  * query `string`
  * total `integer`

### ServiceFrequency
* ServiceFrequency `object`
  * highestFrequency `number`
  * lowestFrequency `number`

### StationInterval
* StationInterval `object`
  * id `string`
  * intervals `array`
    * items [Interval](#interval)

### StatusSeverity
* StatusSeverity `object`
  * description `string`
  * modeName `string`
  * severityLevel `integer`

### StopPoint
* StopPoint `object`
  * accessibilitySummary `string`
  * additionalProperties `array`: A bag of additional key/value pairs with extra information about this place.
    * items [AdditionalProperties](#additionalproperties)
  * children `array`
    * items [Place](#place)
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
    * items [LineGroup](#linegroup)
  * lineModeGroups `array`
    * items [LineModeGroup](#linemodegroup)
  * lines `array`
    * items [Identifier](#identifier)
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

### StopPointCategory
* StopPointCategory `object`
  * availableKeys `array`
    * items `string`
  * category `string`

### StopPointRouteSection
* StopPointRouteSection `object`
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

### StopPointSequence
* StopPointSequence `object`
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
    * items [MatchedStop](#matchedstop)

### StopPointsResponse
* StopPointsResponse `object`: A paged response containing StopPoints
  * centrePoint `array`: The centre latitude/longitude of this list of StopPoints
    * items `number`
  * page `integer`: The index of this page
  * pageSize `integer`: The maximum size of the page in this response i.e. the maximum number of StopPoints
  * stopPoints `array`: Collection of stop points
    * items [StopPoint](#stoppoint)
  * total `integer`: The total number of StopPoints available across all pages

### Street
* Street `object`
  * closure `string`: Type of road closure. Some example values:
  * directions `string`: The direction of the disruption on the street. Some example values:
  * name `string`: Street name
  * segments `array`: Geographic description of the sections of this street that are affected.
    * items [StreetSegment](#streetsegment)
  * sourceSystemId `integer`: The ID from the source system of the disruption that this street belongs to.
  * sourceSystemKey `string`: The key of the source system of the disruption that this street belongs to.

### StreetSegment
* StreetSegment `object`
  * lineString `string`: geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment.
  * sourceSystemId `integer`: The ID from the source system of the disruption that this street belongs to.
  * sourceSystemKey `string`: The key of the source system of the disruption that this street belongs to.
  * toid `string`: A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link.

### Ticket
* Ticket `object`
  * cost `string`
  * description `string`
  * displayOrder `integer`
  * messages `array`
    * items [Message](#message)
  * mode `string`
  * passengerType `string`
  * ticketTime [TicketTime](#tickettime)
  * ticketType [TicketType](#tickettype)

### TicketTime
* TicketTime `object`
  * description `string`
  * type `string`

### TicketType
* TicketType `object`
  * description `string`
  * type `string`

### TimeAdjustment
* TimeAdjustment `object`
  * date `string`
  * time `string`
  * timeIs `string`
  * uri `string`

### TimeAdjustments
* TimeAdjustments `object`
  * earlier [TimeAdjustment](#timeadjustment)
  * earliest [TimeAdjustment](#timeadjustment)
  * later [TimeAdjustment](#timeadjustment)
  * latest [TimeAdjustment](#timeadjustment)

### Timetable
* Timetable `object`
  * departureStopId `string`
  * routes `array`
    * items [TimetableRoute](#timetableroute)

### TimetableResponse
* TimetableResponse `object`
  * direction `string`
  * disambiguation [Disambiguation](#disambiguation)
  * lineId `string`
  * lineName `string`
  * pdfUrl `string`
  * stations `array`
    * items [MatchedStop](#matchedstop)
  * statusErrorMessage `string`
  * stops `array`
    * items [MatchedStop](#matchedstop)
  * timetable [Timetable](#timetable)

### TimetableRoute
* TimetableRoute `object`
  * schedules `array`
    * items [Schedule](#schedule)
  * stationIntervals `array`
    * items [StationInterval](#stationinterval)

### TrainLoading
* TrainLoading `object`
  * direction `string`: Direction in regards to Journey Planner i.e. inbound or outbound
  * line `string`: The Line Name e.g. "Victoria"
  * lineDirection `string`: Direction of the Line e.g. NB, SB, WB etc.
  * naptanTo `string`: Naptan of the adjacent station
  * platformDirection `string`: Direction displayed on the platform e.g. NB, SB, WB etc.
  * timeSlice `string`: Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.
  * value `integer`: Scale between 1-6, 

### TwentyFourHourClockTime
* TwentyFourHourClockTime `object`
  * hour `string`
  * minute `string`

### ValidityPeriod
* ValidityPeriod `object`: Represents a period for which a planned works is valid.
  * fromDate `string`: Gets or sets the start date.
  * isNow `boolean`: If true is a realtime status rather than planned or info
  * toDate `string`: Gets or sets the end date.

### Vehicle
* Vehicle `object`
  * type `string`

### VehicleMatch
* VehicleMatch `object`
  * colour `string`
  * compliance `string` (values: NotAvailable, NotCompliant, Compliant, Exempt)
  * make `string`
  * model `string`
  * type `string`
  * vrm `string`


