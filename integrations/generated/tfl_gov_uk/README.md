# @datafire/tfl_gov_uk

Client library for Transport for London Unified

## Installation and Usage
```bash
npm install --save datafire @datafire/tfl_gov_uk
```

```js
let datafire = require('datafire');
let tfl_gov_uk = require('@datafire/tfl_gov_uk').create({
  apiKey: "",
  appId: "",
});

tfl_gov_uk.Line_Route({}).then(data => {
  console.log(data);
})
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

#### Parameters
* year (integer) **required** - The year for which to filter the accidents on.

### AirQuality_Get
Gets air quality data feed


```js
tfl_gov_uk.AirQuality_Get(null, context)
```

#### Parameters
*This action has no parameters*

### BikePoint_GetAll
Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.


```js
tfl_gov_uk.BikePoint_GetAll(null, context)
```

#### Parameters
*This action has no parameters*

### BikePoint_Search
Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.


```js
tfl_gov_uk.BikePoint_Search({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The search term e.g. "St. James"

### BikePoint_Get
Gets the bike point with the given id.


```js
tfl_gov_uk.BikePoint_Get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - A bike point id (a list of ids can be obtained from the above BikePoint call)

### Cabwise_Get
Gets taxis and minicabs contact information


```js
tfl_gov_uk.Cabwise_Get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude
* lon (number) **required** - Longitude
* optype (string) - Operator Type e.g Minicab, Executive, Limousine
* wc (string) - Wheelchair accessible
* radius (number) - The radius of the bounding circle in metres
* name (string) - Trading name of operating company
* maxResults (integer) - An optional parameter to limit the number of results return. Default and maximum is 20.
* legacyFormat (boolean) - Legacy Format
* forceXml (boolean) - Force Xml
* twentyFourSevenOnly (boolean) - Twenty Four Seven Only

### Journey_JourneyResults
Perform a Journey Planner search from the parameters specified in simple types


```js
tfl_gov_uk.Journey_JourneyResults({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* from (string) **required** - Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
* to (string) **required** - Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
* via (string) - Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
* nationalSearch (boolean) - Does the journey cover stops outside London? eg. "nationalSearch=true"
* date (string) - The date must be in yyyyMMdd format
* time (string) - The time must be in HHmm format
* timeIs (string) - Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
* journeyPreference (string) - The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
* mode (array) - The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"
* accessibilityPreference (array) - The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"
* fromName (string) - An optional name to associate with the origin of the journey in the results.
* toName (string) - An optional name to associate with the destination of the journey in the results.
* viaName (string) - An optional name to associate with the via point of the journey in the results.
* maxTransferMinutes (string) - The max walking time in minutes for transfer eg. "120"
* maxWalkingMinutes (string) - The max walking time in minutes for journeys eg. "120"
* walkingSpeed (string) - The walking speed. eg possible options: "slow" | "average" | "fast".
* cyclePreference (string) - The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
* adjustment (string) - Time adjustment command. eg possible options: "TripFirst" | "TripLast"
* bikeProficiency (array) - A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"
* alternativeCycle (boolean) - Option to determine whether to return alternative cycling journey
* alternativeWalking (boolean) - Option to determine whether to return alternative walking journey
* applyHtmlMarkup (boolean) - Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.
* useMultiModalCall (boolean) - A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey
* walkingOptimization (boolean) - A boolean to indicate whether to optimize journeys using walking
* taxiOnlyTrip (boolean) - A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".

### Journey_Meta
Gets a list of all of the available journey planner modes


```js
tfl_gov_uk.Journey_Meta(null, context)
```

#### Parameters
*This action has no parameters*

### Line_MetaDisruptionCategories
Gets a list of valid disruption categories


```js
tfl_gov_uk.Line_MetaDisruptionCategories(null, context)
```

#### Parameters
*This action has no parameters*

### Line_MetaModes
Gets a list of valid modes


```js
tfl_gov_uk.Line_MetaModes(null, context)
```

#### Parameters
*This action has no parameters*

### Line_MetaServiceTypes
Gets a list of valid ServiceTypes to filter on


```js
tfl_gov_uk.Line_MetaServiceTypes(null, context)
```

#### Parameters
*This action has no parameters*

### Line_MetaSeverity
Gets a list of valid severity codes


```js
tfl_gov_uk.Line_MetaSeverity(null, context)
```

#### Parameters
*This action has no parameters*

### Line_GetByMode
Gets lines that serve the given modes.


```js
tfl_gov_uk.Line_GetByMode({
  "modes": []
}, context)
```

#### Parameters
* modes (array) **required** - A comma-separated list of modes e.g. tube,dlr

### Line_DisruptionByMode
Get disruptions for all lines of the given modes.


```js
tfl_gov_uk.Line_DisruptionByMode({
  "modes": []
}, context)
```

#### Parameters
* modes (array) **required** - A comma-separated list of modes e.g. tube,dlr

### Line_RouteByMode
Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route


```js
tfl_gov_uk.Line_RouteByMode({
  "modes": []
}, context)
```

#### Parameters
* modes (array) **required** - A comma-separated list of modes e.g. tube,dlr
* serviceTypes (array) - A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

### Line_StatusByMode
Gets the line status of for all lines for the given modes


```js
tfl_gov_uk.Line_StatusByMode({
  "modes": []
}, context)
```

#### Parameters
* modes (array) **required** - A comma-separated list of modes to filter by. e.g. tube,dlr
* detail (boolean) - Include details of the disruptions that are causing the line status including the affected stops and routes

### Line_Route
Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.


```js
tfl_gov_uk.Line_Route({}, context)
```

#### Parameters
* serviceTypes (array) - A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

### Line_Search
Search for lines or routes matching the query string


```js
tfl_gov_uk.Line_Search({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search term e.g victoria
* modes (array) - Optionally filter by the specified modes
* serviceTypes (array) - A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

### Line_StatusBySeverity
Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity


```js
tfl_gov_uk.Line_StatusBySeverity({
  "severity": 0
}, context)
```

#### Parameters
* severity (integer) **required** - The level of severity (eg: a number from 0 to 14)

### Line_Get
Gets lines that match the specified line ids.


```js
tfl_gov_uk.Line_Get({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.

### Line_Arrivals
Get the list of arrival predictions for given line ids based at the given stop


```js
tfl_gov_uk.Line_Arrivals({
  "ids": [],
  "stopPointId": ""
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
* stopPointId (string) **required** - Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
* direction (string) - Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all
* destinationStationId (string) - Optional. Id of destination stop

### Line_Disruption
Get disruptions for the given line ids


```js
tfl_gov_uk.Line_Disruption({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.

### Line_LineRoutesByIds
Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.


```js
tfl_gov_uk.Line_LineRoutesByIds({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
* serviceTypes (array) - A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

### Line_StatusByIds
Gets the line status of for given line ids e.g Minor Delays


```js
tfl_gov_uk.Line_StatusByIds({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
* detail (boolean) - Include details of the disruptions that are causing the line status including the affected stops and routes

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

#### Parameters
* ids (array) **required** - A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
* detail (boolean) - Include details of the disruptions that are causing the line status including the affected stops and routes
* startDate (string) **required**
* endDate (string) **required**
* dateRange.startDate (string)
* dateRange.endDate (string)
* StartDate (string) **required**
* EndDate (string) **required**

### Line_RouteSequence
Gets all valid routes for given line id, including the sequence of stops on each route.


```js
tfl_gov_uk.Line_RouteSequence({
  "id": "",
  "direction": ""
}, context)
```

#### Parameters
* id (string) **required** - A single line id e.g. victoria
* direction (string) **required** - The direction of travel. Can be inbound or outbound.
* serviceTypes (array) - A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
* excludeCrowding (boolean) - That excludes crowding from line disruptions. Can be true or false.

### Line_StopPoints
Gets a list of the stations that serve the given line id


```js
tfl_gov_uk.Line_StopPoints({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - A single line id e.g. victoria

### Line_Timetable
Gets the timetable for a specified station on the give line


```js
tfl_gov_uk.Line_Timetable({
  "fromStopPointId": "",
  "id": ""
}, context)
```

#### Parameters
* fromStopPointId (string) **required** - The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
* id (string) **required** - A single line id e.g. victoria

### Line_TimetableTo
Gets the timetable for a specified station on the give line with specified destination


```js
tfl_gov_uk.Line_TimetableTo({
  "fromStopPointId": "",
  "id": "",
  "toStopPointId": ""
}, context)
```

#### Parameters
* fromStopPointId (string) **required** - The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
* id (string) **required** - A single line id e.g. victoria
* toStopPointId (string) **required** - The destination stations's Naptan code

### Mode_GetActiveServiceTypes
Returns the service type active for a mode.
            Currently only supports tube


```js
tfl_gov_uk.Mode_GetActiveServiceTypes(null, context)
```

#### Parameters
*This action has no parameters*

### Mode_Arrivals
Gets the next arrival predictions for all stops of a given mode


```js
tfl_gov_uk.Mode_Arrivals({
  "mode": ""
}, context)
```

#### Parameters
* mode (string) **required** - A mode name e.g. tube, dlr
* count (integer) - A number of arrivals to return for each stop, -1 to return all available.

### Occupancy_GetBikePointsOccupancies
Get the occupancy for bike points.


```js
tfl_gov_uk.Occupancy_GetBikePointsOccupancies({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required**

### Occupancy.CarPark.get
Gets the occupancy for all car parks that have occupancy data


```js
tfl_gov_uk.Occupancy.CarPark.get(null, context)
```

#### Parameters
*This action has no parameters*

### Occupancy.CarPark.id.get
Gets the occupancy for a car park with a given id


```js
tfl_gov_uk.Occupancy.CarPark.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### Occupancy_GetAllChargeConnectorStatus
Gets the occupancy for all charge connectors


```js
tfl_gov_uk.Occupancy_GetAllChargeConnectorStatus(null, context)
```

#### Parameters
*This action has no parameters*

### Occupancy_GetChargeConnectorStatus
Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)


```js
tfl_gov_uk.Occupancy_GetChargeConnectorStatus({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required**

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

#### Parameters
* categories (array) - an optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)
* includeChildren (boolean) - Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned
* type (array) - place types to filter on, or null to return all types
* activeOnly (boolean) - An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)
* bbBoxpoints.swLat (number) **required**
* bbBoxpoints.swLon (number) **required**
* bbBoxpoints.neLat (number) **required**
* bbBoxpoints.neLon (number) **required**

### Place_GetStreetsByPostCode
Gets the set of streets associated with a post code.


```js
tfl_gov_uk.Place_GetStreetsByPostCode({
  "postcode": "",
  "Postcode": ""
}, context)
```

#### Parameters
* postcode (string) **required**
* postcodeInput.postcode (string)
* Postcode (string) **required**

### Place_MetaCategories
Gets a list of all of the available place property categories and keys.


```js
tfl_gov_uk.Place_MetaCategories(null, context)
```

#### Parameters
*This action has no parameters*

### Place_MetaPlaceTypes
Gets a list of the available types of Place.


```js
tfl_gov_uk.Place_MetaPlaceTypes(null, context)
```

#### Parameters
*This action has no parameters*

### Place_Search
Gets all places that matches the given query


```js
tfl_gov_uk.Place_Search({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names.
* types (array) - A comma-separated list of the types to return. Max. approx 12 types.

### Place_GetByType
Gets all places of a given type


```js
tfl_gov_uk.Place_GetByType({
  "types": []
}, context)
```

#### Parameters
* types (array) **required** - A comma-separated list of the types to return. Max. approx 12 types.
* activeOnly (boolean) - An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)

### Place_Get
Gets the place with the given id.


```js
tfl_gov_uk.Place_Get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids
* includeChildren (boolean) - Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned

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

#### Parameters
* type (array) **required** - The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
* lat (string) **required**
* lon (string) **required**
* location.lat (number) **required**
* location.lon (number) **required**
* Lat (string) **required**
* Lon (string) **required**

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

#### Parameters
* z (integer) **required** - The zoom level
* type (array) **required** - The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
* width (integer) **required** - The width of the requested overlay.
* height (integer) **required** - The height of the requested overlay.
* lat (string) **required**
* lon (string) **required**
* location.lat (number) **required**
* location.lon (number) **required**
* Lat (string) **required**
* Lon (string) **required**

### Road.get
Gets all roads managed by TfL


```js
tfl_gov_uk.Road.get(null, context)
```

#### Parameters
*This action has no parameters*

### Road_MetaCategories
Gets a list of valid RoadDisruption categories


```js
tfl_gov_uk.Road_MetaCategories(null, context)
```

#### Parameters
*This action has no parameters*

### Road_MetaSeverities
Gets a list of valid RoadDisruption severity codes


```js
tfl_gov_uk.Road_MetaSeverities(null, context)
```

#### Parameters
*This action has no parameters*

### Road_DisruptionById
Gets a list of active disruptions filtered by disruption Ids.


```js
tfl_gov_uk.Road_DisruptionById({
  "disruptionIds": []
}, context)
```

#### Parameters
* disruptionIds (array) **required** - Comma-separated list of disruption identifiers to filter by.
* stripContent (boolean) - Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments.

### Road_DisruptedStreets
Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.


```js
tfl_gov_uk.Road_DisruptedStreets({
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* startDate (string) **required** - Optional, the start time to filter on.
* endDate (string) **required** - Optional, The end time to filter on.

### Road.ids.get
Gets the road with the specified id (e.g. A1)


```js
tfl_gov_uk.Road.ids.get({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - Comma-separated list of road identifiers e.g. "A406, A2" (a full list of supported road identifiers can be found at the /Road/ endpoint)

### Road_Disruption
Get active disruptions, filtered by road ids


```js
tfl_gov_uk.Road_Disruption({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
* stripContent (boolean) - Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets
* severities (array) - an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)
* categories (array) - an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)
* closures (boolean) - Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.

### Road_Status
Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.


```js
tfl_gov_uk.Road_Status({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - Comma-separated list of road identifiers e.g. "A406, A2" or use "all" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
* dateRangeNullable.startDate (string)
* dateRangeNullable.endDate (string)

### Search_Get
Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.


```js
tfl_gov_uk.Search_Get({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The search query

### Search_BusSchedules
Searches the bus schedules folder on S3 for a given bus number.


```js
tfl_gov_uk.Search_BusSchedules({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The search query

### Search_MetaCategories
Gets the available search categories.


```js
tfl_gov_uk.Search_MetaCategories(null, context)
```

#### Parameters
*This action has no parameters*

### Search_MetaSearchProviders
Gets the available searchProvider names.


```js
tfl_gov_uk.Search_MetaSearchProviders(null, context)
```

#### Parameters
*This action has no parameters*

### Search_MetaSorts
Gets the available sorting options.


```js
tfl_gov_uk.Search_MetaSorts(null, context)
```

#### Parameters
*This action has no parameters*

### StopPoint_GetByGeoPoint
Gets a list of StopPoints within {radius} by the specified criteria


```js
tfl_gov_uk.StopPoint_GetByGeoPoint({
  "stopTypes": [],
  "location.lat": 0,
  "location.lon": 0
}, context)
```

#### Parameters
* stopTypes (array) **required** - a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)
* radius (integer) - the radius of the bounding circle in metres (default : 200)
* useStopPointHierarchy (boolean) - Re-arrange the output into a parent/child hierarchy
* modes (array) - the list of modes to search (comma separated mode names e.g. tube,dlr)
* categories (array) - an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)
* returnLines (boolean) - true to return the lines that each stop point serves as a nested resource
* location.lat (number) **required**
* location.lon (number) **required**

### StopPoint_MetaCategories
Gets the list of available StopPoint additional information categories


```js
tfl_gov_uk.StopPoint_MetaCategories(null, context)
```

#### Parameters
*This action has no parameters*

### StopPoint_MetaModes
Gets the list of available StopPoint modes


```js
tfl_gov_uk.StopPoint_MetaModes(null, context)
```

#### Parameters
*This action has no parameters*

### StopPoint_MetaStopTypes
Gets the list of available StopPoint types


```js
tfl_gov_uk.StopPoint_MetaStopTypes(null, context)
```

#### Parameters
*This action has no parameters*

### StopPoint_GetByMode
Gets a list of StopPoints filtered by the modes available at that StopPoint.


```js
tfl_gov_uk.StopPoint_GetByMode({
  "modes": []
}, context)
```

#### Parameters
* modes (array) **required** - A comma-seperated list of modes e.g. tube,dlr
* page (integer) - The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large.

### StopPoint_DisruptionByMode
Gets a distinct list of disrupted stop points for the given modes


```js
tfl_gov_uk.StopPoint_DisruptionByMode({
  "modes": []
}, context)
```

#### Parameters
* modes (array) **required** - A comma-seperated list of modes e.g. tube,dlr
* includeRouteBlockedStops (boolean)

### StopPoint.Search.get
Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.


```js
tfl_gov_uk.StopPoint.Search.get({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
* modes (array) - An optional, parameter separated list of the modes to filter by
* faresOnly (boolean) - True to only return stations in that have Fares data available for single fares to another station.
* maxResults (integer) - An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
* lines (array) - An optional, parameter separated list of the lines to filter by
* includeHubs (boolean) - If true, returns results including HUBs.

### StopPoint.Search.query.get
Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.


```js
tfl_gov_uk.StopPoint.Search.query.get({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
* modes (array) - An optional, parameter separated list of the modes to filter by
* faresOnly (boolean) - True to only return stations in that have Fares data available for single fares to another station.
* maxResults (integer) - An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
* lines (array) - An optional, parameter separated list of the lines to filter by
* includeHubs (boolean) - If true, returns results including HUBs.

### StopPoint_GetServiceTypes
Gets the service types for a given stoppoint


```js
tfl_gov_uk.StopPoint_GetServiceTypes({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The Naptan id of the stop
* lineIds (array) - The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)
* modes (array) - The modes which the lines are relevant to (all if empty)

### StopPoint_GetBySms
Gets a StopPoint for a given sms code.


```js
tfl_gov_uk.StopPoint_GetBySms({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.
* output (string) - If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored.

### StopPoint_GetByType
Gets all stop points of a given type


```js
tfl_gov_uk.StopPoint_GetByType({
  "types": []
}, context)
```

#### Parameters
* types (array) **required** - A comma-separated list of the types to return. Max. approx. 12 types. 

### StopPoint.ids.get
Gets a list of StopPoints corresponding to the given list of stop ids.


```js
tfl_gov_uk.StopPoint.ids.get({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.
* includeCrowdingData (boolean) - Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}

### StopPoint_Disruption
Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.


```js
tfl_gov_uk.StopPoint_Disruption({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-seperated list of stop point ids. Max. approx. 20 ids.
* getFamily (boolean) - Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.
* includeRouteBlockedStops (boolean)
* flattenResponse (boolean) - Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).

### StopPoint_Arrivals
Gets the list of arrival predictions for the given stop point id


```js
tfl_gov_uk.StopPoint_Arrivals({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)

### StopPoint_ReachableFrom
Gets Stopoints that are reachable from a station/line combination.


```js
tfl_gov_uk.StopPoint_ReachableFrom({
  "id": "",
  "lineId": ""
}, context)
```

#### Parameters
* id (string) **required** - The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by
* lineId (string) **required** - Line id of the line to filter by (e.g. victoria)
* serviceTypes (array) - A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

### StopPoint_Crowding
Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.


```js
tfl_gov_uk.StopPoint_Crowding({
  "id": "",
  "line": "",
  "direction": ""
}, context)
```

#### Parameters
* id (string) **required** - The Naptan id of the stop
* line (string) **required** - A particular line e.g. victoria, circle, northern etc.
* direction (string) **required** - The direction of travel. Can be inbound or outbound.

### StopPoint_Direction
Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.


```js
tfl_gov_uk.StopPoint_Direction({
  "id": "",
  "toStopPointId": ""
}, context)
```

#### Parameters
* id (string) **required** - Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
* toStopPointId (string) **required** - Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
* lineId (string) - Optional line id filter e.g. victoria

### StopPoint_Route
Returns the route sections for all the lines that service the given stop point ids


```js
tfl_gov_uk.StopPoint_Route({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
* serviceTypes (array) - A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified

### StopPoint.id.placeTypes.get
Get a list of places corresponding to a given id and place types.


```js
tfl_gov_uk.StopPoint.id.placeTypes.get({
  "id": "",
  "placeTypes": []
}, context)
```

#### Parameters
* id (string) **required** - A naptan id for a stop point (station naptan code e.g. 940GZZLUASL).
* placeTypes (array) **required** - A comcomma-separated value representing the place types.

### StopPoint_GetCarParksById
Get car parks corresponding to the given stop point id.


```js
tfl_gov_uk.StopPoint_GetCarParksById({
  "stopPointId": ""
}, context)
```

#### Parameters
* stopPointId (string) **required** - stopPointId is required to get the car parks.

### StopPoint_GetTaxiRanksByIds
Gets a list of taxi ranks corresponding to the given stop point id.


```js
tfl_gov_uk.StopPoint_GetTaxiRanksByIds({
  "stopPointId": ""
}, context)
```

#### Parameters
* stopPointId (string) **required** - stopPointId is required to get the taxi ranks.

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

#### Parameters
* z (integer) **required** - The zoom level.
* pinLat (number) **required** - The latitude of the pin.
* pinLon (number) **required** - The longitude of the pin.
* mapCenterLat (number) **required** - The map center latitude.
* mapCenterLon (number) **required** - The map center longitude.
* scenarioTitle (string) **required** - The title of the scenario.
* timeOfDayId (string) **required** - The id for the time of day (AM/INTER/PM)
* modeId (string) **required** - The id of the mode.
* width (integer) **required** - The width of the requested overlay.
* height (integer) **required** - The height of the requested overlay.
* direction (string) **required** - The direction of travel.
* travelTimeInterval (integer) **required** - The total minutes between the travel time bands
* compareType (string) **required**
* compareValue (string) **required**

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

#### Parameters
* z (integer) **required** - The zoom level.
* pinLat (number) **required** - The latitude of the pin.
* pinLon (number) **required** - The longitude of the pin.
* mapCenterLat (number) **required** - The map center latitude.
* mapCenterLon (number) **required** - The map center longitude.
* scenarioTitle (string) **required** - The title of the scenario.
* timeOfDayId (string) **required** - The id for the time of day (AM/INTER/PM)
* modeId (string) **required** - The id of the mode.
* width (integer) **required** - The width of the requested overlay.
* height (integer) **required** - The height of the requested overlay.
* direction (string) **required** - The direction of travel.
* travelTimeInterval (integer) **required** - The total minutes between the travel time bands

### Vehicle_GetEmissionsSurchargeCompliance
Gets the Emissions Surcharge compliance for the Vehicle


```js
tfl_gov_uk.Vehicle_GetEmissionsSurchargeCompliance({
  "vrm": ""
}, context)
```

#### Parameters
* vrm (string) **required** - The Vehicle Registration Mark

### Vehicle_GetUlezCompliance
Gets the Ulez Surcharge compliance for the Vehicle


```js
tfl_gov_uk.Vehicle_GetUlezCompliance({
  "vrm": ""
}, context)
```

#### Parameters
* vrm (string) **required** - The Vehicle Registration Mark

### Vehicle_Get
Gets the predictions for a given list of vehicle Id's.


```js
tfl_gov_uk.Vehicle_Get({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required** - A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids.

