# @datafire/wmata_bus_route

Client library for Bus Route and Stop Methods

## Installation and Usage
```bash
npm install --save datafire @datafire/wmata_bus_route
```

```js
let datafire = require('datafire');
let wmata_bus_route = require('@datafire/wmata_bus_route').create({
  apiKeyHeader: "",
  apiKeyQuery: "",
});

wmata_bus_route.json.jStops.get({}).then(data => {
  console.log(data);
})
```

## Description
Bus stop information, route and schedule data, and bus positions.

## Actions
### BusPositions.get
<h4 class="text-primary">Description</h4>

<p>Returns bus positions for the given route, with an optional search radius.
If no parameters are specified, all bus positions are returned.</p>

<p>Note that the RouteID parameter accepts only base route names and no
variations, i.e.: use 10A instead of 10Av1 or 10Av2.</p>

<p>Bus positions are refreshed approximately every <span style="text-decoration: line-through">20 to 30</span> 7 to 10 seconds.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>BusPositions</td>

<td>
Array containing bus position information (<a href=
"#BusPosition">BusPositions</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="BusPosition" name="BusPosition">BusPosition
Elements</a>
</div>
</td>
</tr>

<tr>
<td>DateTime</td>

<td>Date and time (Eastern Standard Time) of last position update.
Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:23:40).</td>
</tr>

<tr>
<td>Deviation</td>

<td>Deviation, in minutes, from schedule. Positive values indicate
that the bus is running late while negative ones are for buses
running ahead of schedule.</td>
</tr>

<tr>
<td style="text-decoration: line-through">DirectionNum</td>

<td><span class="text-danger">Deprecated.</span> Use the
DirectionText for a customer-friendly description of
direction.</td>
</tr>

<tr>
<td>DirectionText</td>

<td>General direction of the trip, not the bus itself (e.g.: NORTH,
SOUTH, EAST, WEST).</td>
</tr>

<tr>
<td>Lat</td>

<td>Last reported Latitude of the bus.</td>
</tr>

<tr>
<td>Lon</td>

<td>Last reported Longitude of the bus.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Base route name as shown on the bus. Note that the base route
name could also refer to any variant, so a RouteID of 10A could
refer to 10A, 10Av1, 10Av2, etc.</td>
</tr>

<tr>
<td>TripEndTime</td>

<td>Scheduled end date and time (Eastern Standard Time) of the
bus's current trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Destination of the bus.</td>
</tr>

<tr>
<td>TripID</td>

<td>Unique trip ID. This can be correlated with the data returned
from the schedule-related methods.</td>
</tr>

<tr>
<td>TripStartTime</td>

<td>Scheduled start date and time (Eastern Standard Time) of the
bus's current trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T12:40:00).</td>
</tr>

<tr>
<td>VehicleID</td>

<td>Unique identifier for the bus. This is usually visible on the
bus itself.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.BusPositions.get({}, context)
```

#### Parameters
* RouteID (string) - Bus route, e.g.: B30, 10A.
* Lat (string) - Center point Latitude, required if Longitude and Radius are specified.
* Lon (string) - Center point Longitude, required if Latitude and Radius are specified.
* Radius (string) - Radius (meters) to include in the search area, required if Latitude and Longitude are specified.

### RouteDetails.get
<h4 class="text-primary">Description</h4>
<p>For a given date, returns the set of ordered latitude/longitude points along route variant along with the list of stops served.</p>
<h4 class="text-primary">Response Elements</h4>
<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Direction0/Direction1</td>
<td>
Structures describing <a href="#Direction">path/stop</a>information.<br>
<br>
Most routes will return content in both Direction0 and Direction1 elements, though a few will return NULL for Direction0 or for Direction1.<br>
<br>
0 or 1 are binary properties. There is no specific mapping to direction, but a different value for the same route signifies that the route is in an opposite direction.
</td>
</tr>
<tr>
<td>Name</td>
<td>Descriptive name for the route.</td>
</tr>
<tr>
<td>RouteID</td>
<td>Bus route variant (e.g.: 10A, 10Av1, etc.).</td>
</tr>
<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Direction" name="Direction">Direction0/Direction1 Elements</a>
</div>
</td>
</tr>
<tr>
<td style="text-decoration: line-through">DirectionNum</td>
<td><span class="text-danger">Deprecated.</span> Use the DirectionText element to denote the general direction of the route variant.</td>
</tr>
<tr>
<td>DirectionText</td>
<td>General direction of the route variant (NORTH, SOUTH, EAST, WEST, LOOP, etc.).</td>
</tr>
<tr>
<td>Shape</td>
<td>
Array containing shape point information (<a href="#ShapePoint">ShapePoint</a>).
</td>
</tr>
<tr>
<td>Stops</td>
<td>
Array containing stop information (<a href="#Stop">Stop</a>).
</td>
</tr>
<tr>
<td>TripHeadsign</td>
<td>Descriptive text of where the bus is headed. This is similar, but not necessarily identical, to what is displayed on the bus.</td>
</tr>
<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="ShapePoint" name="ShapePoint">ShapePoint Elements</a>
</div>
</td>
</tr>
<tr>
<td>Lat</td>
<td>Latitude.</td>
</tr>
<tr>
<td>Lon</td>
<td>Longitude.</td>
</tr>
<tr>
<td>SeqNum</td>
<td>Order of the point in the sequence of ShapePoints.</td>
</tr>
<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em"> 
<a id="Stop" name="Stop">Stop Elements</a>
</div>
</td>
</tr>
<tr>
<td>Lat</td>
<td>Latitude.</td>
</tr>
<tr>
<td>Lon</td>
<td>Longitude.</td>
</tr>
<tr>
<td>Name</td>
<td>Stop name. May be slightly different from what is spoken or displayed in the bus.</td>
</tr>
<tr>
<td>Routes</td>
<td>String array of route variants which provide service at this stop. Note that these are not date-specific; any route variant which stops at this stop on any day will be listed.</td>
</tr>
<tr>
<td>StopID</td>
<td>7-digit regional ID which can be used in various bus-related methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.RouteDetails.get({
  "RouteID": ""
}, context)
```

#### Parameters
* RouteID (string) **required** - Bus route variant, e.g.: B30, 10A, 10Av1.
* Date (string) - Date in YYYY-MM-DD format for which to retrieve route and stop information.  Defaults to today's date unless specified.

### RouteSchedule.get
<h4 class="text-primary">Description</h4>

<p>Returns schedules for a given route variant for a given date.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Direction0/Direction1</td>

<td>
Arrays containing trip information (<a href=
"#Trip">Trip</a>).<br>
<br>
Most routes will return content in both Direction0 and
Direction1 elements, though a few (especially ones which run in
a loop, such as the U8) will return content only for Direction0
and NULL content for Direction1.<br>
<br>
0 or 1 are binary properties. There is no specific mapping to
direction, but a different value for the same route signifies
that the route is in an opposite direction.
</td>
</tr>

<tr>
<td>Name</td>

<td>Descriptive name for the route.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Trip" name="Trip">Trip Elements</a>
</div>
</td>
</tr>

<tr>
<td style="text-decoration: line-through">DirectionNum</td>

<td><span class="text-danger">Deprecated.</span> Use the
TripDirectionText element to denote the general direction of the
trip.</td>
</tr>

<tr>
<td>EndTime</td>

<td>Scheduled end date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>RouteID</td>

<td>Bus route variant. This can be used in several other bus
methods which accept variants.</td>
</tr>

<tr>
<td>StartTime</td>

<td>Scheduled start date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>StopTimes</td>

<td>
Array containing location and time information (<a href=
"#StopTime">StopTime</a>).
</td>
</tr>

<tr>
<td>TripDirectionText</td>

<td>General direction of the trip (NORTH, SOUTH, EAST, WEST, LOOP,
etc.).</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Descriptive text of where the bus is headed. This is similar,
but not necessarily identical, to what is displayed on the
bus.</td>
</tr>

<tr>
<td>TripID</td>

<td>Unique trip ID. This can be correlated with the data returned
from the schedule-related methods.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StopTime" name="StopTime">StopTime Elements</a>
</div>
</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>

<tr>
<td>StopName</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>StopSeq</td>

<td>Order of the stop in the sequence of StopTimes.</td>
</tr>

<tr>
<td>Time</td>

<td>Scheduled departure date and time (Eastern Standard Time) from
this stop. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.RouteSchedule.get({
  "RouteID": ""
}, context)
```

#### Parameters
* RouteID (string) **required** - Bus route variant, e.g.: B30, 10A, 10Av1.
* Date (string) - Date in YYYY-MM-DD format for which to retrieve schedule.  Defaults to today's date unless specified.
* IncludingVariations (boolean) - Whether or not to include variations.  For example, if B30 is specified, include all variations such as B30v1, B30v2, etc.

### Routes.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of all bus route variants (patterns). For example, the 10A
and 10Av1 are the same route, but may stop at slightly different locations.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Routes</td>

<td>
Array containing route variant information (<a href=
"#Route">Route</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Route" name="Route">Route Elements</a>
</div>
</td>
</tr>

<tr>
<td>Name</td>

<td>Descriptive name of the route variant.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Unique identifier for a given route variant. Can be used in
various other bus-related methods.</td>
</tr>


<tr>
<td>LineDescription</td>

<td>Denotes the route variant’s grouping – lines are a combination of routes which lie in the same corridor and which have significant portions of their paths along the same roadways.</td>
</tr> 
</tbody>
</table>


```js
wmata_bus_route.Routes.get(null, context)
```


### StopSchedule.get
<h4 class="text-primary">Description</h4>

<p>Returns a set of buses scheduled at a stop for a given date.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>ScheduleArrivals</td>

<td>
Array containing scheduled arrival information (<a href=
"#ScheduleArrival">ScheduleArrival</a>).
</td>
</tr>

<tr>
<td>Stop</td>

<td>
Structure describing <a href="#Stop">stop</a> information.
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="ScheduleArrival" name=
"ScheduleArrival">ScheduleArrival Elements</a>
</div>
</td>
</tr>

<tr>
<td>DirectionNum</td>

<td>Denotes a binary direction (0 or 1) of the bus. There is no
specific mapping to direction, but a different value for the same
route signifies that the buses are traveling in opposite
directions. Use the TripDirectionText element to show the actual
destination of the bus.</td>
</tr>

<tr>
<td>EndTime</td>

<td>Scheduled end date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>RouteID</td>

<td>Bus route variant identifier (pattern). This variant can be
used in several other bus methods which accept variants. Note that
customers will never see anything other than the base route name,
so variants 10A, 10Av1, 10Av2, etc. will be displayed as 10A on the
bus.</td>
</tr>

<tr>
<td>ScheduleTime</td>

<td>Date and time (Eastern Standard Time) when the bus is scheduled
to stop at this location. Will be in YYYY-MM-DDTHH:mm:ss format
(e.g.: 2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>StartTime</td>

<td>Scheduled start date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>TripDirectionText</td>

<td>General direction of the trip (e.g.: NORTH, SOUTH, EAST,
WEST).</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Destination of the bus.</td>
</tr>

<tr>
<td>TripID</td>

<td>Trip identifier. This can be correlated with the data in our
bus schedule information as well as bus positions.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Stop" name="Stop">Stop Elements</a>
</div>
</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>Routes</td>

<td>String array of route variants which provide service at this
stop. Note that these are not date-specific; any route variant
which stops at this stop on any day will be listed.</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.StopSchedule.get({
  "StopID": ""
}, context)
```

#### Parameters
* StopID (string) **required** - 7-digit regional stop ID.
* Date (string) - Date in YYYY-MM-DD format for which to retrieve schedule.  Defaults to today's date unless specified.

### Stops.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of nearby bus stops based on latitude, longitude, and radius.
Omit all parameters to retrieve a list of all stops.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Stops</td>

<td>
Array containing stop information (<a href="#Stop">Stop</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Stop" name="Stop">Stop Elements</a>
</div>
</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>Routes</td>

<td>String array of route variants which provide service at this
stop. Note that these are not date-specific; any route variant
which stops at this stop on any day will be listed.</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.Stops.get({}, context)
```

#### Parameters
* Lat (string) - Center point Latitude, required if Longitude and Radius are specified.
* Lon (string) - Center point Longitude, required if Latitude and Radius are specified.
* Radius (string) - Radius (feet) to include in the search area, required if Latitude and Longitude are specified.

### json.jBusPositions.get
<h4 class="text-primary">Description</h4>

<p>Returns bus positions for the given route, with an optional search radius.
If no parameters are specified, all bus positions are returned.</p>

<p>Note that the RouteID parameter accepts only base route names and no
variations, i.e.: use 10A instead of 10Av1 or 10Av2.</p>

<p>Bus positions are refreshed approximately every <span style="text-decoration: line-through">20 to 30</span> 7 to 10 seconds.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>BusPositions</td>

<td>
Array containing bus position information (<a href=
"#BusPosition">BusPositions</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="BusPosition" name="BusPosition">BusPosition
Elements</a>
</div>
</td>
</tr>

<tr>
<td>DateTime</td>

<td>Date and time (Eastern Standard Time) of last position update.
Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:23:40).</td>
</tr>

<tr>
<td>Deviation</td>

<td>Deviation, in minutes, from schedule. Positive values indicate
that the bus is running late while negative ones are for buses
running ahead of schedule.</td>
</tr>

<tr>
<td style="text-decoration: line-through">DirectionNum</td>

<td><span class="text-danger">Deprecated.</span> Use the
DirectionText for a customer-friendly description of
direction.</td>
</tr>

<tr>
<td>DirectionText</td>

<td>General direction of the trip, not the bus itself (e.g.: NORTH,
SOUTH, EAST, WEST).</td>
</tr>

<tr>
<td>Lat</td>

<td>Last reported Latitude of the bus.</td>
</tr>

<tr>
<td>Lon</td>

<td>Last reported Longitude of the bus.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Base route name as shown on the bus. Note that the base route
name could also refer to any variant, so a RouteID of 10A could
refer to 10A, 10Av1, 10Av2, etc.</td>
</tr>

<tr>
<td>TripEndTime</td>

<td>Scheduled end date and time (Eastern Standard Time) of the
bus's current trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Destination of the bus.</td>
</tr>

<tr>
<td>TripID</td>

<td>Unique trip ID. This can be correlated with the data returned
from the schedule-related methods.</td>
</tr>

<tr>
<td>TripStartTime</td>

<td>Scheduled start date and time (Eastern Standard Time) of the
bus's current trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T12:40:00).</td>
</tr>

<tr>
<td>VehicleID</td>

<td>Unique identifier for the bus. This is usually visible on the
bus itself.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.json.jBusPositions.get({}, context)
```

#### Parameters
* RouteID (string) - Base bus route, e.g.: B30, 10A.
* Lat (number) - Center point Latitude, required if Longitude and Radius are specified.
* Lon (number) - Center point Longitude, required if Latitude and Radius are specified.
* Radius (number) - Radius (meters) to include in the search area, required if Latitude and Longitude are specified.

### json.jRouteDetails.get
<h4 class="text-primary">Description</h4>

<p>For a given date, returns the set of ordered latitude/longitude points along
a route variant along with the list of stops served.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Direction0/Direction1</td>

<td>
Structures describing <a href="#Direction">path/stop</a>
information.<br>
<br>
Most routes will return content in both Direction0 and
Direction1 elements, though a few will return NULL for Direction0 or for Direction1.<br>
<br>
0 or 1 are binary properties. There is no specific mapping to
direction, but a different value for the same route signifies
that the route is in an opposite direction.
</td>
</tr>

<tr>
<td>Name</td>

<td>Descriptive name for the route.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Bus route variant (e.g.: 10A, 10Av1, etc.).</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Direction" name="Direction">Direction0/Direction1
Elements</a>
</div>
</td>
</tr>

<tr>
<td style="text-decoration: line-through">DirectionNum</td>

<td><span class="text-danger">Deprecated.</span> Use the
DirectionText element to denote the general direction of the route
variant.</td>
</tr>

<tr>
<td>DirectionText</td>

<td>General direction of the route variant (NORTH, SOUTH, EAST,
WEST, LOOP, etc.).</td>
</tr>

<tr>
<td>Shape</td>

<td>
Array containing shape point information (<a href=
"#ShapePoint">ShapePoint</a>).
</td>
</tr>

<tr>
<td>Stops</td>

<td>
Array containing stop information (<a href="#Stop">Stop</a>).
</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Descriptive text of where the bus is headed. This is similar,
but not necessarily identical, to what is displayed on the
bus.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="ShapePoint" name="ShapePoint">ShapePoint
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>SeqNum</td>

<td>Order of the point in the sequence of ShapePoints.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Stop" name="Stop">Stop Elements</a>
</div>
</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>Routes</td>

<td>String array of route variants which provide service at this
stop. Note that these are not date-specific; any route variant
which stops at this stop on any day will be listed.</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.json.jRouteDetails.get({
  "RouteID": ""
}, context)
```

#### Parameters
* RouteID (string) **required** - Bus route variant, e.g.: B30, 10A, 10Av1.
* Date (string) - Date in YYYY-MM-DD format for which to retrieve route and stop information.  Defaults to today's date unless specified.

### json.jRouteSchedule.get
<h4 class="text-primary">Description</h4>

<p>Returns schedules for a given route variant for a given date.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Direction0/Direction1</td>

<td>
Arrays containing trip information (<a href=
"#Trip">Trip</a>).<br>
<br>
Most routes will return content in both Direction0 and
Direction1 elements, though a few (especially ones which run in
a loop, such as the U8) will return content only for Direction0
and NULL content for Direction1.<br>
<br>
0 or 1 are binary properties. There is no specific mapping to
direction, but a different value for the same route signifies
that the route is in an opposite direction.
</td>
</tr>

<tr>
<td>Name</td>

<td>Descriptive name for the route.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Trip" name="Trip">Trip Elements</a>
</div>
</td>
</tr>

<tr>
<td style="text-decoration: line-through">DirectionNum</td>

<td><span class="text-danger">Deprecated.</span> Use the
TripDirectionText element to denote the general direction of the
trip.</td>
</tr>

<tr>
<td>EndTime</td>

<td>Scheduled end date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>RouteID</td>

<td>Bus route variant. This can be used in several other bus
methods which accept variants.</td>
</tr>

<tr>
<td>StartTime</td>

<td>Scheduled start date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>StopTimes</td>

<td>
Array containing location and time information (<a href=
"#StopTime">StopTime</a>).
</td>
</tr>

<tr>
<td>TripDirectionText</td>

<td>General direction of the trip (NORTH, SOUTH, EAST, WEST, LOOP,
etc.).</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Descriptive text of where the bus is headed. This is similar,
but not necessarily identical, to what is displayed on the
bus.</td>
</tr>

<tr>
<td>TripID</td>

<td>Unique trip ID. This can be correlated with the data returned
from the schedule-related methods.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StopTime" name="StopTime">StopTime Elements</a>
</div>
</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>

<tr>
<td>StopName</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>StopSeq</td>

<td>Order of the stop in the sequence of StopTimes.</td>
</tr>

<tr>
<td>Time</td>

<td>Scheduled departure date and time (Eastern Standard Time) from
this stop. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.json.jRouteSchedule.get({
  "RouteID": ""
}, context)
```

#### Parameters
* RouteID (string) **required** - Bus route variant, e.g.: B30, 10A, 10Av1, etc.
* Date (string) - Date in YYYY-MM-DD format for which to retrieve schedule.  Defaults to today's date unless specified.
* IncludingVariations (boolean) - Whether or not to include variations if a base route is specified in RouteID.  For example, if B30 is specified and IncludingVariations is set to true, data for all variations of B30 such as B30v1, B30v2, etc. will be returned.

### json.jRoutes.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of all bus route variants (patterns). For example, the 10A
and 10Av1 are the same route, but may stop at slightly different locations.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Routes</td>

<td>
Array containing route variant information (<a href=
"#Route">Route</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Route" name="Route">Route Elements</a>
</div>
</td>
</tr>

<tr>
<td>Name</td>

<td>Descriptive name of the route variant.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Unique identifier for a given route variant. Can be used in
various other bus-related methods.</td>
</tr>

<tr>
<td>LineDescription</td>

<td>Denotes the route variant’s grouping – lines are a combination of routes which lie in the same corridor and which have significant portions of their paths along the same roadways.</td>
</tr> 
</tbody>
</table>


```js
wmata_bus_route.json.jRoutes.get(null, context)
```


### json.jStopSchedule.get
<h4 class="text-primary">Description</h4>

<p>Returns a set of buses scheduled at a stop for a given date.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>ScheduleArrivals</td>

<td>
Array containing scheduled arrival information (<a href=
"#ScheduleArrival">ScheduleArrival</a>).
</td>
</tr>

<tr>
<td>Stop</td>

<td>
Structure describing <a href="#Stop">stop</a> information.
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="ScheduleArrival" name=
"ScheduleArrival">ScheduleArrival Elements</a>
</div>
</td>
</tr>

<tr>
<td>DirectionNum</td>

<td>Denotes a binary direction (0 or 1) of the bus. There is no
specific mapping to direction, but a different value for the same
route signifies that the buses are traveling in opposite
directions. Use the TripDirectionText element to show the actual
destination of the bus.</td>
</tr>

<tr>
<td>EndTime</td>

<td>Scheduled end date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>RouteID</td>

<td>Bus route variant identifier (pattern). This variant can be
used in several other bus methods which accept variants. Note that
customers will never see anything other than the base route name,
so variants 10A, 10Av1, 10Av2, etc. will be displayed as 10A on the
bus.</td>
</tr>

<tr>
<td>ScheduleTime</td>

<td>Date and time (Eastern Standard Time) when the bus is scheduled
to stop at this location. Will be in YYYY-MM-DDTHH:mm:ss format
(e.g.: 2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>StartTime</td>

<td>Scheduled start date and time (Eastern Standard Time) for this
trip. Will be in YYYY-MM-DDTHH:mm:ss format (e.g.:
2014-10-27T13:17:00).</td>
</tr>

<tr>
<td>TripDirectionText</td>

<td>General direction of the trip (e.g.: NORTH, SOUTH, EAST,
WEST).</td>
</tr>

<tr>
<td>TripHeadsign</td>

<td>Destination of the bus.</td>
</tr>

<tr>
<td>TripID</td>

<td>Trip identifier. This can be correlated with the data in our
bus schedule information as well as bus positions.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Stop" name="Stop">Stop Elements</a>
</div>
</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>Routes</td>

<td>String array of route variants which provide service at this
stop. Note that these are not date-specific; any route variant
which stops at this stop on any day will be listed.</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.json.jStopSchedule.get({
  "StopID": ""
}, context)
```

#### Parameters
* StopID (string) **required** - 7-digit regional stop ID.
* Date (string) - Date in YYYY-MM-DD format for which to retrieve schedule.  Defaults to today's date unless specified.

### json.jStops.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of nearby bus stops based on latitude, longitude, and radius.
Omit all parameters to retrieve a list of all stops.</p>

<h4 class="text-primary">Response Elements</h4>

<table class="table table-condensed table-hover">
<thead>
<tr>
<th class="col-md-3">Element</th>

<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Stops</td>

<td>
Array containing stop information (<a href="#Stop">Stop</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Stop" name="Stop">Stop Elements</a>
</div>
</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Stop name. May be slightly different from what is spoken or
displayed in the bus.</td>
</tr>

<tr>
<td>Routes</td>

<td>String array of route variants which provide service at this
stop. Note that these are not date-specific; any route variant
which stops at this stop on any day will be listed.</td>
</tr>

<tr>
<td>StopID</td>

<td>7-digit regional ID which can be used in various bus-related
methods. If unavailable, the StopID will be 0 or NULL.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_route.json.jStops.get({}, context)
```

#### Parameters
* Lat (number) - Center point Latitude, required if Longitude and Radius are specified.
* Lon (number) - Center point Longitude, required if Latitude and Radius are specified.
* Radius (number) - Radius (meters) to include in the search area, required if Latitude and Longitude are specified.

