# @datafire/tfl_gov_uk
Our unified API brings together data across all modes of transport into a single RESTful API. This API provides access to the most highly requested realtime and status infomation across all the modes of transport, in a single and consistent way. Access to the developer documentation is available at https://api.tfl.gov.uk

## Operation: AccidentStats_Get
Gets all accident details for accidents occuring in the specified year

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "year": {
      "type": "integer",
      "format": "int32",
      "description": "The year for which to filter the accidents on."
    }
  },
  "additionalProperties": false,
  "required": [
    "year"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AccidentDetail"
  },
  "type": "array"
}
```
## Operation: AirQuality_Get
Gets air quality data feed

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: BikePoint_GetAll
Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Place"
  },
  "type": "array"
}
```
## Operation: BikePoint_Search
Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search term e.g. \"St. James\""
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Place"
  },
  "type": "array"
}
```
## Operation: BikePoint_Get
Gets the bike point with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A bike point id (a list of ids can be obtained from the above BikePoint call)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Place"
}
```
## Operation: Cabwise_Get
Gets taxis and minicabs contact information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude"
    },
    "lon": {
      "type": "number",
      "format": "double",
      "description": "Longitude"
    },
    "optype": {
      "type": "string",
      "description": "Operator Type e.g Minicab, Executive, Limousine"
    },
    "wc": {
      "type": "string",
      "description": "Wheelchair accessible"
    },
    "radius": {
      "type": "number",
      "format": "double",
      "description": "The radius of the bounding circle in metres"
    },
    "name": {
      "type": "string",
      "description": "Trading name of operating company"
    },
    "maxResults": {
      "type": "integer",
      "format": "int32",
      "description": "An optional parameter to limit the number of results return. Default and maximum is 20."
    },
    "legacyFormat": {
      "type": "boolean",
      "description": "Legacy Format"
    },
    "forceXml": {
      "type": "boolean",
      "description": "Force Xml"
    },
    "twentyFourSevenOnly": {
      "type": "boolean",
      "description": "Twenty Four Seven Only"
    }
  },
  "additionalProperties": false,
  "required": [
    "lat",
    "lon"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Journey_JourneyResults
Perform a Journey Planner search from the parameters specified in simple types

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "from": {
      "type": "string",
      "description": "Origin of the journey. Can be WGS84 coordinates expressed as \"lat,long\", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name)."
    },
    "to": {
      "type": "string",
      "description": "Destination of the journey. Can be WGS84 coordinates expressed as \"lat,long\", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name)."
    },
    "via": {
      "type": "string",
      "description": "Travel through point on the journey. Can be WGS84 coordinates expressed as \"lat,long\", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name)."
    },
    "nationalSearch": {
      "type": "boolean",
      "description": "Does the journey cover stops outside London? eg. \"nationalSearch=true\""
    },
    "date": {
      "type": "string",
      "description": "The date must be in yyyyMMdd format"
    },
    "time": {
      "type": "string",
      "description": "The time must be in HHmm format"
    },
    "timeIs": {
      "type": "string",
      "description": "Does the time given relate to arrival or leaving time? Possible options: \"departing\" | \"arriving\"",
      "enum": [
        "Arriving",
        "Departing"
      ]
    },
    "journeyPreference": {
      "type": "string",
      "description": "The journey preference eg possible options: \"leastinterchange\" | \"leasttime\" | \"leastwalking\"",
      "enum": [
        "LeastInterchange",
        "LeastTime",
        "LeastWalking"
      ]
    },
    "mode": {
      "type": "array",
      "description": "The mode must be a comma separated list of modes. eg possible options: \"public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle\""
    },
    "accessibilityPreference": {
      "type": "array",
      "description": "The accessibility preference must be a comma separated list eg. \"noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform\""
    },
    "fromName": {
      "type": "string",
      "description": "An optional name to associate with the origin of the journey in the results."
    },
    "toName": {
      "type": "string",
      "description": "An optional name to associate with the destination of the journey in the results."
    },
    "viaName": {
      "type": "string",
      "description": "An optional name to associate with the via point of the journey in the results."
    },
    "maxTransferMinutes": {
      "type": "string",
      "description": "The max walking time in minutes for transfer eg. \"120\""
    },
    "maxWalkingMinutes": {
      "type": "string",
      "description": "The max walking time in minutes for journeys eg. \"120\""
    },
    "walkingSpeed": {
      "type": "string",
      "description": "The walking speed. eg possible options: \"slow\" | \"average\" | \"fast\".",
      "enum": [
        "Slow",
        "Average",
        "Fast"
      ]
    },
    "cyclePreference": {
      "type": "string",
      "description": "The cycle preference. eg possible options: \"allTheWay\" | \"leaveAtStation\" | \"takeOnTransport\" | \"cycleHire\"",
      "enum": [
        "None",
        "LeaveAtStation",
        "TakeOnTransport",
        "AllTheWay",
        "CycleHire"
      ]
    },
    "adjustment": {
      "type": "string",
      "description": "Time adjustment command. eg possible options: \"TripFirst\" | \"TripLast\""
    },
    "bikeProficiency": {
      "type": "array",
      "description": "A comma separated list of cycling proficiency levels. eg possible options: \"easy,moderate,fast\""
    },
    "alternativeCycle": {
      "type": "boolean",
      "description": "Option to determine whether to return alternative cycling journey"
    },
    "alternativeWalking": {
      "type": "boolean",
      "description": "Option to determine whether to return alternative walking journey"
    },
    "applyHtmlMarkup": {
      "type": "boolean",
      "description": "Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not."
    },
    "useMultiModalCall": {
      "type": "boolean",
      "description": "A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey"
    },
    "walkingOptimization": {
      "type": "boolean",
      "description": "A boolean to indicate whether to optimize journeys using walking"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ItineraryResult"
}
```
## Operation: Journey_Meta
Gets a list of all of the available journey planner modes

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Mode"
  },
  "type": "array"
}
```
## Operation: Line_MetaDisruptionCategories
Gets a list of valid categories to filter disruptions

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: Line_MetaModes
Gets a list of all of the valid modes to filter lines by

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Mode"
  },
  "type": "array"
}
```
## Operation: Line_MetaServiceTypes
Gets a list of valid ServiceTypes to filter on

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: Line_MetaSeverity
Gets a list of valid severity codes

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StatusSeverity"
  },
  "type": "array"
}
```
## Operation: Line_GetByMode
Gets line specified by provided modes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "modes": {
      "type": "array",
      "description": "A comma-separated list of modes e.g. tube,dlr"
    }
  },
  "additionalProperties": false,
  "required": [
    "modes"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_DisruptionByMode
Get disruptions for all lines of the given modes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "modes": {
      "type": "array",
      "description": "A comma-separated list of modes e.g. tube,dlr"
    }
  },
  "additionalProperties": false,
  "required": [
    "modes"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Disruption"
  },
  "type": "array"
}
```
## Operation: Line_RouteByMode
Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "modes": {
      "type": "array",
      "description": "A comma-separated list of modes e.g. tube,dlr"
    },
    "serviceTypes": {
      "type": "array",
      "description": "A comma seperated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    }
  },
  "additionalProperties": false,
  "required": [
    "modes"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_StatusByMode
Gets the line status of for all lines for the given modes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "modes": {
      "type": "array",
      "description": "A comma-separated list of modes to filter by. e.g. tube,dlr"
    },
    "detail": {
      "type": "boolean",
      "description": "Include details of the disruptions that are causing the line status including the affected stops and routes"
    }
  },
  "additionalProperties": false,
  "required": [
    "modes"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_Route
Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "serviceTypes": {
      "type": "array",
      "description": "A comma seperated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_Search
Search for lines or routes matching the query string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search term e.g victoria"
    },
    "modes": {
      "type": "array",
      "description": "Optionally filter by the specified modes"
    },
    "serviceTypes": {
      "type": "array",
      "description": "A comma seperated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteSearchResponse"
}
```
## Operation: Line_StatusBySeverity
Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "integer",
      "format": "int32",
      "description": "The level of severity (eg: a number from 0 to 14)"
    }
  },
  "additionalProperties": false,
  "required": [
    "severity"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_Get
Gets line specified by the line id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line.ids.Arrivals.get
Get the list of arrival predictions for given line ids based at the given stop

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stopPointId": {
      "type": "string",
      "description": "Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    }
  },
  "additionalProperties": false,
  "required": [
    "stopPointId",
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Prediction"
  },
  "type": "array"
}
```
## Operation: Line.ids.Arrivals.stopPointId.get
Get the list of arrival predictions for given line ids based at the given stop going in the procided direction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stopPointId": {
      "type": "string",
      "description": "Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    },
    "direction": {
      "type": "string",
      "description": "The direction of travel. Can be inbound or outbound",
      "enum": [
        "inbound",
        "outbound",
        "all"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "stopPointId",
    "ids",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Prediction"
  },
  "type": "array"
}
```
## Operation: Line_Disruption
Get disruptions for the given line ids

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Disruption"
  },
  "type": "array"
}
```
## Operation: Line_LineRoutesByIds
Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    },
    "serviceTypes": {
      "type": "array",
      "description": "A comma seperated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_StatusByIds
Gets the line status of for given line ids e.g Minor Delays

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    },
    "detail": {
      "type": "boolean",
      "description": "Include details of the disruptions that are causing the line status including the affected stops and routes"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_Status
Gets the line status for given line ids during the provided dates e.g Minor Delays

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids."
    },
    "detail": {
      "type": "boolean",
      "description": "Include details of the disruptions that are causing the line status including the affected stops and routes"
    },
    "startDate": {
      "type": "string"
    },
    "endDate": {
      "type": "string"
    },
    "dateRange.startDate": {
      "type": "string",
      "format": "date-time"
    },
    "dateRange.endDate": {
      "type": "string",
      "format": "date-time"
    },
    "StartDate": {
      "type": "string"
    },
    "EndDate": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids",
    "startDate",
    "endDate",
    "StartDate",
    "EndDate"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Line"
  },
  "type": "array"
}
```
## Operation: Line_RouteSequence
Gets all valid routes for given line id, including the sequence of stops on each route.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A single line id e.g. victoria"
    },
    "direction": {
      "type": "string",
      "description": "The direction of travel. Can be inbound or outbound.",
      "enum": [
        "inbound",
        "outbound",
        "all"
      ]
    },
    "serviceTypes": {
      "type": "array",
      "description": "A comma seperated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    },
    "excludeCrowding": {
      "type": "boolean",
      "description": "That excludes crowding from line disruptions. Can be true or false."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteSequence"
}
```
## Operation: Line_StopPoints
Gets a list of the stations that serve the given line id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A single line id e.g. victoria"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPoint"
  },
  "type": "array"
}
```
## Operation: Line_Timetable
Gets the timetable for a specified station on the give line

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fromStopPointId": {
      "type": "string",
      "description": "The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "id": {
      "type": "string",
      "description": "A single line id e.g. victoria"
    }
  },
  "additionalProperties": false,
  "required": [
    "fromStopPointId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TimetableResponse"
}
```
## Operation: Line_TimetableTo
Gets the timetable for a specified station on the give line with specified destination

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fromStopPointId": {
      "type": "string",
      "description": "The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "id": {
      "type": "string",
      "description": "A single line id e.g. victoria"
    },
    "toStopPointId": {
      "type": "string",
      "description": "The destination stations's Naptan code"
    }
  },
  "additionalProperties": false,
  "required": [
    "fromStopPointId",
    "id",
    "toStopPointId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TimetableResponse"
}
```
## Operation: Mode_GetActiveServiceTypes
Returns the service type active for a mode.
            Currently only supports tube

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ActiveServiceType"
  },
  "type": "array"
}
```
## Operation: Mode_Arrivals
Gets the next arrival predictions for all stops of a given mode

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "mode": {
      "type": "string",
      "description": "A mode name e.g. tube, dlr"
    },
    "count": {
      "type": "integer",
      "format": "int32",
      "description": "A number of arrivals to return for each stop, -1 to return all available."
    }
  },
  "additionalProperties": false,
  "required": [
    "mode"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Prediction"
  },
  "type": "array"
}
```
## Operation: Occupancy.CarPark.get
Gets the occupancy for all car parks that have occupancy data

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CarParkOccupancy"
  },
  "type": "array"
}
```
## Operation: Occupancy.CarPark.id.get
Gets the occupancy for a car park with a given id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CarParkOccupancy"
}
```
## Operation: Place_GetByGeoBox
Gets the places that lie within the bounding box defined by the lat/lon of its north-west and south-east corners. Optionally filters
            on type and can strip properties for a smaller payload.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categories": {
      "type": "array",
      "description": "an optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword \"none\" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)"
    },
    "includeChildren": {
      "type": "boolean",
      "description": "Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned"
    },
    "type": {
      "type": "array",
      "description": "place types to filter on, or null to return all types"
    },
    "activeOnly": {
      "type": "boolean",
      "description": "An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)"
    },
    "bbBoxpoints.swLat": {
      "type": "number",
      "format": "double"
    },
    "bbBoxpoints.swLon": {
      "type": "number",
      "format": "double"
    },
    "bbBoxpoints.neLat": {
      "type": "number",
      "format": "double"
    },
    "bbBoxpoints.neLon": {
      "type": "number",
      "format": "double"
    }
  },
  "additionalProperties": false,
  "required": [
    "bbBoxpoints.swLat",
    "bbBoxpoints.swLon",
    "bbBoxpoints.neLat",
    "bbBoxpoints.neLon"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPoint"
  },
  "type": "array"
}
```
## Operation: Place_GetStreetsByPostCode
Gets the set of streets associated with a post code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "postcode": {
      "type": "string"
    },
    "postcodeInput.postcode": {
      "type": "string",
      "pattern": "^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$"
    },
    "Postcode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "postcode",
    "Postcode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Place_MetaCategories
Gets a list of all of the available place property categories and keys.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PlaceCategory"
  },
  "type": "array"
}
```
## Operation: Place_MetaPlaceTypes
Gets a list of the available types of Place.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PlaceCategory"
  },
  "type": "array"
}
```
## Operation: Place_GetByType
Gets all places of a given type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "types": {
      "type": "array",
      "description": "A comma-separated list of the types to return. Max. approx 12 types.\r\n            A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint."
    },
    "activeOnly": {
      "type": "boolean",
      "description": "An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)"
    }
  },
  "additionalProperties": false,
  "required": [
    "types"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Place"
  },
  "type": "array"
}
```
## Operation: Place_Get
Gets the place with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids"
    },
    "includeChildren": {
      "type": "boolean",
      "description": "Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Place"
  },
  "type": "array"
}
```
## Operation: Place_GetAt
Gets any {laces of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "array",
      "description": "The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)"
    },
    "lat": {
      "type": "string"
    },
    "lon": {
      "type": "string"
    },
    "location.lat": {
      "type": "number",
      "format": "double"
    },
    "location.lon": {
      "type": "number",
      "format": "double"
    },
    "Lat": {
      "type": "string"
    },
    "Lon": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "lat",
    "lon",
    "location.lat",
    "location.lon",
    "Lat",
    "Lon"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Place_GetOverlay
Gets the place overlay for a given set of co-ordinates and a given width/height.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "z": {
      "type": "integer",
      "format": "int32",
      "description": "The zoom level"
    },
    "type": {
      "type": "array",
      "description": "The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)"
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "The width of the requested overlay."
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "The height of the requested overlay."
    },
    "lat": {
      "type": "string"
    },
    "lon": {
      "type": "string"
    },
    "location.lat": {
      "type": "number",
      "format": "double"
    },
    "location.lon": {
      "type": "number",
      "format": "double"
    },
    "Lat": {
      "type": "string"
    },
    "Lon": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "z",
    "type",
    "width",
    "height",
    "lat",
    "lon",
    "location.lat",
    "location.lon",
    "Lat",
    "Lon"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Road.get
Gets all roads managed by TfL

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RoadCorridor"
  },
  "type": "array"
}
```
## Operation: Road_MetaCategories
Gets a list of valid RoadDisruption categories

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: Road_MetaSeverities
Gets a list of valid RoadDisruption severity codes

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StatusSeverity"
  },
  "type": "array"
}
```
## Operation: Road_DisruptionById
Gets a list of active disruptions filtered by disruption Ids.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "disruptionIds": {
      "type": "array",
      "description": "Comma-separated list of disruption identifiers to filter by."
    },
    "stripContent": {
      "type": "boolean",
      "description": "Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments."
    }
  },
  "additionalProperties": false,
  "required": [
    "disruptionIds"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoadDisruption"
}
```
## Operation: Road_DisruptedStreets
Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "Optional, the start time to filter on."
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "Optional, The end time to filter on."
    }
  },
  "additionalProperties": false,
  "required": [
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Road.ids.get
Gets the road with the specified id (e.g. A1)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "Comma-separated list of road identifiers e.g. \"A406, A2\" (a full list of supported road identifiers can be found at the /Road/ endpoint)"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RoadCorridor"
  },
  "type": "array"
}
```
## Operation: Road_Disruption
Get active disruptions, filtered by road ids

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "Comma-separated list of road identifiers e.g. \"A406, A2\" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)"
    },
    "stripContent": {
      "type": "boolean",
      "description": "Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets"
    },
    "severities": {
      "type": "array",
      "description": "an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)"
    },
    "categories": {
      "type": "array",
      "description": "an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)"
    },
    "closures": {
      "type": "boolean",
      "description": "Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RoadDisruption"
  },
  "type": "array"
}
```
## Operation: Road_Status
Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "Comma-separated list of road identifiers e.g. \"A406, A2\" or use \"all\" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)"
    },
    "dateRangeNullable.startDate": {
      "type": "string",
      "format": "date-time"
    },
    "dateRangeNullable.endDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RoadCorridor"
  },
  "type": "array"
}
```
## Operation: Search_Get
Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResponse"
}
```
## Operation: Search_BusSchedules
Searches the bus schedules folder on S3 for a given bus number.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResponse"
}
```
## Operation: Search_MetaCategories
Gets the available search categories.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: Search_MetaSearchProviders
Gets the available searchProvider names.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: Search_MetaSorts
Gets the available sorting options.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: StopPoint_GetByGeoPoint
Gets a list of StopPoints within {radius} by the specified criteria

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stopTypes": {
      "type": "array",
      "description": "a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)"
    },
    "radius": {
      "type": "integer",
      "format": "int32",
      "description": "the radius of the bounding circle in metres (default : 200)"
    },
    "useStopPointHierarchy": {
      "type": "boolean",
      "description": "Re-arrange the output into a parent/child hierarchy"
    },
    "modes": {
      "type": "array",
      "description": "the list of modes to search (comma separated mode names e.g. tube,dlr)"
    },
    "categories": {
      "type": "array",
      "description": "an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword \"none\" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)"
    },
    "returnLines": {
      "type": "boolean",
      "description": "true to return the lines that each stop point serves as a nested resource"
    },
    "location.lat": {
      "type": "number",
      "format": "double"
    },
    "location.lon": {
      "type": "number",
      "format": "double"
    }
  },
  "additionalProperties": false,
  "required": [
    "stopTypes",
    "location.lat",
    "location.lon"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StopPointsResponse"
}
```
## Operation: StopPoint_MetaCategories
Gets the list of available StopPoint additional information categories

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPointCategory"
  },
  "type": "array"
}
```
## Operation: StopPoint_MetaModes
Gets the list of available StopPoint modes

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Mode"
  },
  "type": "array"
}
```
## Operation: StopPoint_MetaStopTypes
Gets the list of available StopPoint types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: StopPoint_GetByMode
Gets a list of StopPoints filtered by the modes available at that StopPoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "modes": {
      "type": "array",
      "description": "A comma-seperated list of modes e.g. tube,dlr"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large."
    }
  },
  "additionalProperties": false,
  "required": [
    "modes"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StopPointsResponse"
}
```
## Operation: StopPoint_DisruptionByMode
Gets a distinct list of disrupted stop points for the given modes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "modes": {
      "type": "array",
      "description": "A comma-seperated list of modes e.g. tube,dlr"
    },
    "includeRouteBlockedStops": {
      "type": "boolean",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "modes"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/DisruptedPoint"
  },
  "type": "array"
}
```
## Operation: StopPoint.Search.get
Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The query string, case-insensitive. Leading and trailing wildcards are applied automatically."
    },
    "modes": {
      "type": "array",
      "description": "An optional, parameter separated list of the modes to filter by"
    },
    "faresOnly": {
      "type": "boolean",
      "description": "True to only return stations in that have Fares data available for single fares to another station."
    },
    "maxResults": {
      "type": "integer",
      "format": "int32",
      "description": "An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,\r\n            it is possible that the flattened result set will contain more than 50 items."
    },
    "lines": {
      "type": "array",
      "description": "An optional, parameter separated list of the lines to filter by"
    },
    "includeHubs": {
      "type": "boolean",
      "description": "If true, returns results including HUBs."
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResponse"
}
```
## Operation: StopPoint.Search.query.get
Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The query string, case-insensitive. Leading and trailing wildcards are applied automatically."
    },
    "modes": {
      "type": "array",
      "description": "An optional, parameter separated list of the modes to filter by"
    },
    "faresOnly": {
      "type": "boolean",
      "description": "True to only return stations in that have Fares data available for single fares to another station."
    },
    "maxResults": {
      "type": "integer",
      "format": "int32",
      "description": "An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,\r\n            it is possible that the flattened result set will contain more than 50 items."
    },
    "lines": {
      "type": "array",
      "description": "An optional, parameter separated list of the lines to filter by"
    },
    "includeHubs": {
      "type": "boolean",
      "description": "If true, returns results including HUBs."
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResponse"
}
```
## Operation: StopPoint_GetServiceTypes
Gets the service types for a given stoppoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Naptan id of the stop"
    },
    "lineIds": {
      "type": "array",
      "description": "The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)"
    },
    "modes": {
      "type": "array",
      "description": "The modes which the lines are relevant to (all if empty)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/LineServiceType"
  },
  "type": "array"
}
```
## Operation: StopPoint_GetBySms
Gets a StopPoint for a given sms code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334."
    },
    "output": {
      "type": "string",
      "description": "If set to \"web\", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: StopPoint_GetByType
Gets all stop points of a given type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "types": {
      "type": "array",
      "description": "A comma-separated list of the types to return. Max. approx. 12 types. \r\n            A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint."
    }
  },
  "additionalProperties": false,
  "required": [
    "types"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPoint"
  },
  "type": "array"
}
```
## Operation: StopPoint_Get
Gets a list of StopPoints corresponding to the given list of stop ids.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.\r\n            You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name."
    },
    "includeCrowdingData": {
      "type": "boolean",
      "description": "Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPoint"
  },
  "type": "array"
}
```
## Operation: StopPoint_Disruption
Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-seperated list of stop point ids. Max. approx. 20 ids.\r\n            You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name."
    },
    "getFamily": {
      "type": "boolean",
      "description": "Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false."
    },
    "includeRouteBlockedStops": {
      "type": "boolean",
      "description": ""
    },
    "flattenResponse": {
      "type": "boolean",
      "description": "Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true)."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/DisruptedPoint"
  },
  "type": "array"
}
```
## Operation: StopPoint_Arrivals
Gets the list of arrival predictions for the given stop point id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Prediction"
  },
  "type": "array"
}
```
## Operation: StopPoint_ReachableFrom
Gets Stopoints that are reachable from a station/line combination.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by"
    },
    "lineId": {
      "type": "string",
      "description": "Line id of the line to filter by (e.g. victoria)"
    },
    "serviceTypes": {
      "type": "array",
      "description": "A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "lineId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPoint"
  },
  "type": "array"
}
```
## Operation: StopPoint_Crowding
Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Naptan id of the stop"
    },
    "line": {
      "type": "string",
      "description": "A particular line e.g. victoria, circle, northern etc."
    },
    "direction": {
      "type": "string",
      "description": "The direction of travel. Can be inbound or outbound.",
      "enum": [
        "inbound",
        "outbound",
        "all"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "line",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPoint"
  },
  "type": "array"
}
```
## Operation: StopPoint_Direction
Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "toStopPointId": {
      "type": "string",
      "description": "Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "lineId": {
      "type": "string",
      "description": "Optional line id filter e.g. victoria"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "toStopPointId"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: StopPoint_Route
Returns the route sections for all the lines that service the given stop point ids

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)"
    },
    "serviceTypes": {
      "type": "array",
      "description": "A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/StopPointRouteSection"
  },
  "type": "array"
}
```
## Operation: StopPoint_GetTaxiRanksByIds
Gets a list of taxi ranks corresponding to the given stop point id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stopPointId": {
      "type": "string",
      "description": "stopPointId is required to get the taxi ranks."
    }
  },
  "additionalProperties": false,
  "required": [
    "stopPointId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Place"
  },
  "type": "array"
}
```
## Operation: TravelTime_GetCompareOverlay
Gets the TravelTime overlay.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "z": {
      "type": "integer",
      "format": "int32",
      "description": "The zoom level."
    },
    "pinLat": {
      "type": "number",
      "format": "double",
      "description": "The latitude of the pin."
    },
    "pinLon": {
      "type": "number",
      "format": "double",
      "description": "The longitude of the pin."
    },
    "mapCenterLat": {
      "type": "number",
      "format": "double",
      "description": "The map center latitude."
    },
    "mapCenterLon": {
      "type": "number",
      "format": "double",
      "description": "The map center longitude."
    },
    "scenarioTitle": {
      "type": "string",
      "description": "The title of the scenario."
    },
    "timeOfDayId": {
      "type": "string",
      "description": "The id for the time of day (AM/INTER/PM)"
    },
    "modeId": {
      "type": "string",
      "description": "The id of the mode."
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "The width of the requested overlay."
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "The height of the requested overlay."
    },
    "direction": {
      "type": "string",
      "description": "The direction of travel.",
      "enum": [
        "Average",
        "From",
        "To"
      ]
    },
    "travelTimeInterval": {
      "type": "integer",
      "format": "int32",
      "description": "The total minutes between the travel time bands"
    },
    "compareType": {
      "type": "string"
    },
    "compareValue": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "z",
    "pinLat",
    "pinLon",
    "mapCenterLat",
    "mapCenterLon",
    "scenarioTitle",
    "timeOfDayId",
    "modeId",
    "width",
    "height",
    "direction",
    "travelTimeInterval",
    "compareType",
    "compareValue"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: TravelTime_GetOverlay
Gets the TravelTime overlay.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "z": {
      "type": "integer",
      "format": "int32",
      "description": "The zoom level."
    },
    "pinLat": {
      "type": "number",
      "format": "double",
      "description": "The latitude of the pin."
    },
    "pinLon": {
      "type": "number",
      "format": "double",
      "description": "The longitude of the pin."
    },
    "mapCenterLat": {
      "type": "number",
      "format": "double",
      "description": "The map center latitude."
    },
    "mapCenterLon": {
      "type": "number",
      "format": "double",
      "description": "The map center longitude."
    },
    "scenarioTitle": {
      "type": "string",
      "description": "The title of the scenario."
    },
    "timeOfDayId": {
      "type": "string",
      "description": "The id for the time of day (AM/INTER/PM)"
    },
    "modeId": {
      "type": "string",
      "description": "The id of the mode."
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "The width of the requested overlay."
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "The height of the requested overlay."
    },
    "direction": {
      "type": "string",
      "description": "The direction of travel.",
      "enum": [
        "Average",
        "From",
        "To"
      ]
    },
    "travelTimeInterval": {
      "type": "integer",
      "format": "int32",
      "description": "The total minutes between the travel time bands"
    }
  },
  "additionalProperties": false,
  "required": [
    "z",
    "pinLat",
    "pinLon",
    "mapCenterLat",
    "mapCenterLon",
    "scenarioTitle",
    "timeOfDayId",
    "modeId",
    "width",
    "height",
    "direction",
    "travelTimeInterval"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Vehicle_GetVehicle
Gets the Emissions Surcharge compliance for the Vehicle

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vrm": {
      "type": "string",
      "description": "The Vehicle Registration Mark"
    }
  },
  "additionalProperties": false,
  "required": [
    "vrm"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmissionsSurchargeVehicle"
}
```
## Operation: Vehicle_Get
Gets the predictions for a given list of vehicle Id's.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "array",
      "description": "A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Prediction"
  },
  "type": "array"
}
```
