# @datafire/wmata_rail_station

Client library for Rail Station Information

## Installation and Usage
```bash
npm install --save datafire @datafire/wmata_rail_station
```

```js
let datafire = require('datafire');
let wmata_rail_station = require('@datafire/wmata_rail_station').create({
  apiKeyHeader: "",
  apiKeyQuery: "",
});

wmata_rail_station.json.jStations.get({}).then(data => {
  console.log(data);
})
```

## Description
Rail line and station information, including locations, fares, times, and parking.

## Actions
### Lines.get
<h4 class="text-primary">Description</h4>

<p>Returns information about all rail lines.</p>

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
<td>Lines</td>

<td>
Array containing line information (<a href="#Line">Line</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Line" name="Line">Line Elements</a>
</div>
</td>
</tr>

<tr>
<td>DisplayName</td>

<td>Full name of line color.</td>
</tr>

<tr>
<td>EndStationCode</td>

<td>End station code. For example, will be E10 (Greenbelt) for the
Green Line, B11 (Glenmont) for the Red Line, etc. Use this value in
other rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>InternalDestination1</td>

<td>Intermediate terminal station code. During normal service, some
trains on some lines might end their trip prior to the
StartStationCode or EndStationCode. A good example is on the Red
Line where some trains stop at A11 (Grosvenor) or B08 (Silver
Spring). Empty string if not defined.</td>
</tr>

<tr>
<td>InternalDestination2</td>

<td>Similar to InternalDestination1.</td>
</tr>

<tr>
<td>LineCode</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV).</td>
</tr>

<tr>
<td>StartStationCode</td>

<td>Start station code. For example, will be F11 (Branch Avenue)
for the Green Line, A15 (Shady Grove) for the Red Line, etc. Use
this value in other rail-related APIs to retrieve data about a
station.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.Lines.get(null, context)
```

#### Parameters
*This action has no parameters*

### Path.get
<h4 class="text-primary">Description</h4>

<p>Returns a set of ordered stations and distances between two stations on the
<em>same line</em>.</p>

<p>Note that this method is not suitable on its own as a pathfinding solution
between stations.</p>

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
<td>Path</td>

<td>
Array containing path details (<a href=
"#MetroPathItem">MetroPathItem</a>)
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="MetroPathItem" name="MetroPathItem">MetroPathItem
Elements</a>
</div>
</td>
</tr>

<tr>
<td>DistanceToPrev</td>

<td>Distance in feet to the previous station in the list.</td>
</tr>

<tr>
<td>LineCode</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV) this station's platform is on.</td>
</tr>

<tr>
<td>SeqNum</td>

<td>Ordered sequence number.</td>
</tr>

<tr>
<td>StationCode</td>

<td>Station code for this station. Use this value in other
rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>StationName</td>

<td>Full name for this station, as shown on the WMATA website.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.Path.get({
  "FromStationCode": "",
  "ToStationCode": ""
}, context)
```

#### Parameters
* FromStationCode (string) **required** - Station code for the origin station.  Use the Station List method to return a list of all station codes.
* ToStationCode (string) **required** - Station code for the origin station.  Use the Station List method to return a list of all station codes.

### SrcStationToDstStationInfo.get
<h4 class="text-primary">Description</h4>

<p>Returns a distance, fare information, and estimated travel time between any
two stations, including those on different lines. Omit both parameters to
retrieve data for all stations.</p>

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
<td>StationToStationInfos</td>

<td>
Array containing station to station information (<a href=
"#StationToStationInfo">StationToStationInfo</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationToStationInfo" name=
"StationToStationInfo">StationToStationInfo Elements</a>
</div>
</td>
</tr>

<tr>
<td>CompositeMiles</td>

<td>Distance in miles from the source to destination station.</td>
</tr>

<tr>
<td>DestinationStation</td>

<td>Destination station code. Use this value in other rail-related
APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>RailFare</td>

<td>
Structure containing <a href="#RailFare">fare</a> information.
</td>
</tr>

<tr>
<td>RailTime</td>

<td>Estimated travel time (schedule time) in minutes between the source and destination station. This is not correlated to minutes <span class="text-info">(Min)</span> in Real-Time Rail Predictions.</td>
</tr>

<tr>
<td>SourceStation</td>

<td>Origin station code. Use this value in other rail-related APIs
to retrieve data about a station.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="RailFare" name="RailFare">RailFare Elements</a>
</div>
</td>
</tr>

<tr>
<td>OffPeakTime</td>

<td>Fare during off-peak times (times other than the ones described
below).</td>
</tr>

<tr>
<td>PeakTime</td>

<td>Fare during peak times (weekdays from opening to 9:30 AM and
3-7 PM, and weekends from midnight to closing).</td>
</tr>

<tr>
<td>SeniorDisabled</td>

<td>
Reduced fare for <a href=
"http://www.wmata.com/fares/reduced.cfm">senior citizens or
people with disabilities</a>.
</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.SrcStationToDstStationInfo.get({}, context)
```

#### Parameters
* FromStationCode (string) - Station code for the origin station.  Use the Station List method to return a list of all station codes.
* ToStationCode (string) - Station code for the destination station.  Use the Station List method to return a list of all station codes.

### StationEntrances.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of nearby station entrances based on latitude, longitude, and
radius (meters). Omit search parameters to return all station entrances.</p>

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
<td>Entrances</td>

<td>
Array containing detailed information about station entrances
(<a href="#StationEntrance">StationEntrance</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationEntrance" name=
"StationEntrance">StationEntrance Elements</a>
</div>
</td>
</tr>

<tr>
<td>Description</td>

<td>Additional information for the entrance, if available.
Currently available data usually shows the same value as the Name
element.</td>
</tr>

<tr>
<td style="text-decoration: line-through">ID</td>

<td><span class="text-danger">Deprecated.</span></td>
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

<td>Name of the entrance (usually the station name and nearest
intersection).</td>
</tr>

<tr>
<td>StationCode1</td>

<td>The station code associated with this entrance. Use this value
in other rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>StationCode2</td>

<td>For stations containing multiple platforms (e.g.: Gallery
Place, Fort Totten, L'Enfant Plaza, and Metro Center), the other
station code.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.StationEntrances.get({}, context)
```

#### Parameters
* Lat (number) - Center point Latitude, required if Longitude and Radius are specified.
* Lon (number) - Center point Longitude, required if Latitude and Radius are specified.
* Radius (number) - Radius (meters) to include in the search area, required if Latitude and Longitude are specified.

### StationInfo.get
<h4 class="text-primary">Description</h4>

<p>Returns station location and address information based on a given
StationCode.</p>

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
<td>Address</td>

<td>
Structure describing <a href="#Address">address</a> information.
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code. Repeated from input.</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>LineCode1</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV) served by this station.</td>
</tr>

<tr>
<td>LineCode2</td>

<td>Additional line served by this station. This is often the case
when stations have multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center).</td>
</tr>

<tr>
<td>LineCode3</td>

<td>Similar to function as LineCodeX.</td>
</tr>

<tr>
<td>LineCode4</td>

<td>Similar to function as LineCodeX. Currently not in use.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Station name.</td>
</tr>

<tr>
<td>StationTogether1</td>

<td>For stations with multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center), the additional
StationCode will be listed here.</td>
</tr>

<tr>
<td>StationTogether2</td>

<td>Similar in function to StationTogether2. Currently not in
use.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a name="Address">Address Elements</a>
</div>
</td>
</tr>

<tr>
<td>City</td>

<td>City.</td>
</tr>

<tr>
<td>State</td>

<td>State (abbreviated).</td>
</tr>

<tr>
<td>Street</td>

<td>Street address (for GPS use).</td>
</tr>

<tr>
<td>Zip</td>

<td>Zip code.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.StationInfo.get({
  "StationCode": ""
}, context)
```

#### Parameters
* StationCode (string) **required** - Station code.  Use the Station List method to return a list of all station codes.

### StationParking.get
<h4 class="text-primary">Description</h4>

<p>Returns parking information at a station based on a given StationCode. Omit
the StationCode to return parking information for all stations.</p>

<p>If a station has no parking, the StationsParking element will contain no
child elements.</p>

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
<td>StationsParking</td>

<td>
Array containing station parking information (<a href=
"#StationParking">StationParking</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationParking" name="StationParking">StationParking
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code. Useful when returning parking information for all
stations. Use this value in other rail-related APIs to retrieve
data about a station.</td>
</tr>

<tr>
<td>Notes</td>

<td>When not NULL, provides additional parking resources such as
nearby lots.</td>
</tr>

<tr>
<td>AllDayParking</td>

<td>
Structure describing <a href="#AllDayParking">all-day
parking</a> options.
</td>
</tr>

<tr>
<td>ShortTermParking</td>

<td>
Structure describing <a href="#ShortTermParking">short-term
parking</a> options.
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="AllDayParking" name="AllDayParking">AllDayParking
Elements</a>
</div>
</td>
</tr>

<tr>
<td>TotalCount</td>

<td>Number of all-day parking spots available at a station.</td>
</tr>

<tr>
<td>RiderCost</td>

<td>All-day cost per day for Metro riders. NULL when no all-day
spots are available. For most stations, this value is identical to
the NonRiderCost.<br>
<br>
For cases where the NonRiderCost is different, the lower cost per
day requires a valid rail trip using a SmarTrip&reg; card
originating from a station other than the one where the patron
parked. To receive this lower rate, patrons must pay for their
parking with the same SmarTrip&reg; card used to enter/exit
Metrorail, and must exit the parking lot within two hours of
exiting Metrorail.</td>
</tr>

<tr>
<td>NonRiderCost</td>

<td>All-day cost per day for non-Metro riders. NULL when no all-day
spots are available.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="ShortTermParking" name=
"ShortTermParking">ShortTermParking Elements</a>
</div>
</td>
</tr>

<tr>
<td>TotalCount</td>

<td>Number of short-term parking spots available at a station
(parking meters).</td>
</tr>

<tr>
<td>Notes</td>

<td>Misc. information relating to short-term parking. NULL when no
short-term spots are available.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.StationParking.get({}, context)
```

#### Parameters
* StationCode (string) - Station code.  Use the Station List method to return a list of all station codes.

### StationTimes.get
<h4 class="text-primary">Description</h4>

<p>Returns opening and scheduled first/last train times based on a given
StationCode. Omit the StationCode to return timing information for all
stations.</p>

<p>Note that for stations with multiple platforms (e.g.: Metro Center, L'Enfant
Plaza, etc.), a distinct call is required for each StationCode to retrieve the
full set of train times at such stations.</p>

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
<td>StationTimes</td>

<td>
Array containing station timing information (<a href=
"#StationTime">StationTime</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationTime" name="StationTime">StationTime
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code for this station. Use this value in other
rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>StationName</td>

<td>Full name of the station.</td>
</tr>

<tr>
<td>*Day Elements</td>

<td>
Container elements containing timing information based on
<a href="#dow">day of the week.</a>
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="dow" name="dow">Monday/Tuesday/Wednesday/etc.
Elements</a>
</div>
</td>
</tr>

<tr>
<td>OpeningTime</td>

<td>Station opening time. Format is HH:mm.</td>
</tr>

<tr>
<td>FirstTrains</td>

<td>
Structure containing <a href="#first">first train</a>
information.
</td>
</tr>

<tr>
<td>LastTrains</td>

<td>
Structure containing <a href="#last">last train</a>
information.
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="first" name="first">FirstTrains Elements</a>
</div>
</td>
</tr>

<tr>
<td>Time</td>

<td>First train leaves the station at this time. Format is
HH:mm.</td>
</tr>

<tr>
<td>DestinationStation</td>

<td>Station code for the train's destination. Use this value in
other rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="last" name="last">LastTrains Elements</a>
</div>
</td>
</tr>

<tr>
<td>Time</td>

<td>Last train leaves the station at this time. Format is HH:mm.
Note that when the time is AM, it signifies the next day. For
example, a value of 02:30 under a Saturday element means the last
train leaves on Sunday at 2:30 AM.</td>
</tr>

<tr>
<td>DestinationStation</td>

<td>Station code for the train's destination. Use this value in
other rail-related APIs to retrieve data about a station.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.StationTimes.get({}, context)
```

#### Parameters
* StationCode (string) - Station code.  Use the Station List method to return a list of all station codes.

### Stations.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of station location and address information based on a given
LineCode. Omit the LineCode to return all stations. The response is an array of
objects identical to those returned in the Station Information method.</p>

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
<td>Stations</td>

<td>
Array containing station information (<a href=
"#Station">Station</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Station" name="Station">Station Elements</a>
</div>
</td>
</tr>

<tr>
<td>Address</td>

<td>
Structure describing <a href="#Address">address</a> information.
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code. Repeated from input.</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>LineCode1</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV) served by this station.</td>
</tr>

<tr>
<td>LineCode2</td>

<td>Additional line served by this station. This is often the case
when stations have multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center).</td>
</tr>

<tr>
<td>LineCode3</td>

<td>Similar to function as LineCodeX.</td>
</tr>

<tr>
<td>LineCode4</td>

<td>Similar to function as LineCodeX. Currently not in use.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Station name.</td>
</tr>

<tr>
<td>StationTogether1</td>

<td>For stations with multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center), the additional
StationCode will be listed here.</td>
</tr>

<tr>
<td>StationTogether2</td>

<td>Similar in function to StationTogether2. Currently not in
use.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Address" name="Address">Address Elements</a>
</div>
</td>
</tr>

<tr>
<td>City</td>

<td>City.</td>
</tr>

<tr>
<td>State</td>

<td>State (abbreviated).</td>
</tr>

<tr>
<td>Street</td>

<td>Street address (for GPS use).</td>
</tr>

<tr>
<td>Zip</td>

<td>Zip code.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.Stations.get({}, context)
```

#### Parameters
* LineCode (string) - Two-letter line code abbreviation:

### json.jLines.get
<h4 class="text-primary">Description</h4>

<p>Returns information about all rail lines.</p>

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
<td>Lines</td>

<td>
Array containing line information (<a href="#Line">Line</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Line" name="Line">Line Elements</a>
</div>
</td>
</tr>

<tr>
<td>DisplayName</td>

<td>Full name of line color.</td>
</tr>

<tr>
<td>EndStationCode</td>

<td>End station code. For example, will be E10 (Greenbelt) for the
Green Line, B11 (Glenmont) for the Red Line, etc. Use this value in
other rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>InternalDestination1</td>

<td>Intermediate terminal station code. During normal service, some
trains on some lines might end their trip prior to the
StartStationCode or EndStationCode. A good example is on the Red
Line where some trains stop at A11 (Grosvenor) or B08 (Silver
Spring). Empty string if not defined.</td>
</tr>

<tr>
<td>InternalDestination2</td>

<td>Similar to InternalDestination1.</td>
</tr>

<tr>
<td>LineCode</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV).</td>
</tr>

<tr>
<td>StartStationCode</td>

<td>Start station code. For example, will be F11 (Branch Avenue)
for the Green Line, A15 (Shady Grove) for the Red Line, etc. Use
this value in other rail-related APIs to retrieve data about a
station.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jLines.get(null, context)
```

#### Parameters
*This action has no parameters*

### json.jPath.get
<h4 class="text-primary">Description</h4>

<p>Returns a set of ordered stations and distances between two stations on the
<em>same line</em>.</p>

<p>Note that this method is not suitable on its own as a pathfinding solution
between stations.</p>

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
<td>Path</td>

<td>
Array containing path details (<a href=
"#MetroPathItem">MetroPathItem</a>)
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="MetroPathItem" name="MetroPathItem">MetroPathItem
Elements</a>
</div>
</td>
</tr>

<tr>
<td>DistanceToPrev</td>

<td>Distance in feet to the previous station in the list.</td>
</tr>

<tr>
<td>LineCode</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV) this station's platform is on.</td>
</tr>

<tr>
<td>SeqNum</td>

<td>Ordered sequence number.</td>
</tr>

<tr>
<td>StationCode</td>

<td>Station code for this station. Use this value in other
rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>StationName</td>

<td>Full name for this station, as shown on the WMATA website.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jPath.get({
  "FromStationCode": "",
  "ToStationCode": ""
}, context)
```

#### Parameters
* FromStationCode (string) **required** - Station code for the origin station.  Use the Station List method to return a list of all station codes.
* ToStationCode (string) **required** - Station code for the destination station.  Use the Station List method to return a list of all station codes.

### json.jSrcStationToDstStationInfo.get
<h4 class="text-primary">Description</h4>

<p>Returns a distance, fare information, and estimated travel time between any
two stations, including those on different lines. Omit both parameters to
retrieve data for all stations.</p>

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
<td>StationToStationInfos</td>

<td>
Array containing station to station information (<a href=
"#StationToStationInfo">StationToStationInfo</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationToStationInfo" name=
"StationToStationInfo">StationToStationInfo Elements</a>
</div>
</td>
</tr>

<tr>
<td>CompositeMiles</td>

<td>Distance in miles from the source to destination station.</td>
</tr>

<tr>
<td>DestinationStation</td>

<td>Destination station code. Use this value in other rail-related
APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>RailFare</td>

<td>
Structure containing <a href="#RailFare">fare</a> information.
</td>
</tr>

<tr>
<td>RailTime</td>

<td>Estimated travel time (schedule time) in minutes between the source and
destination station. This is not correlated to minutes <span class="text-info">(Min)</span> in Real-Time Rail Predictions.</td>
</tr>

<tr>
<td>SourceStation</td>

<td>Origin station code. Use this value in other rail-related APIs
to retrieve data about a station.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="RailFare" name="RailFare">RailFare Elements</a>
</div>
</td>
</tr>

<tr>
<td>OffPeakTime</td>

<td>Fare during off-peak times (times other than the ones described
below).</td>
</tr>

<tr>
<td>PeakTime</td>

<td>Fare during peak times (weekdays from opening to 9:30 AM and
3-7 PM, and weekends from midnight to closing).</td>
</tr>

<tr>
<td>SeniorDisabled</td>

<td>
Reduced fare for <a href=
"http://www.wmata.com/fares/reduced.cfm">senior citizens or
people with disabilities</a>.
</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jSrcStationToDstStationInfo.get({}, context)
```

#### Parameters
* FromStationCode (string) - Station code for the origin station.  Use the Station List method to return a list of all station codes.
* ToStationCode (string) - Station code for the destination station.  Use the Station List method to return a list of all station codes.

### json.jStationEntrances.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of nearby station entrances based on latitude, longitude, and
radius (meters). Omit search parameters to return all station entrances.</p>

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
<td>Entrances</td>

<td>
Array containing detailed information about station entrances
(<a href="#StationEntrance">StationEntrance</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationEntrance" name=
"StationEntrance">StationEntrance Elements</a>
</div>
</td>
</tr>

<tr>
<td>Description</td>

<td>Additional information for the entrance, if available.
Currently available data usually shows the same value as the Name
element.</td>
</tr>

<tr>
<td style="text-decoration: line-through">ID</td>

<td><span class="text-danger">Deprecated.</span></td>
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

<td>Name of the entrance (usually the station name and nearest
intersection).</td>
</tr>

<tr>
<td>StationCode1</td>

<td>The station code associated with this entrance. Use this value
in other rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>StationCode2</td>

<td>For stations containing multiple platforms (e.g.: Gallery
Place, Fort Totten, L'Enfant Plaza, and Metro Center), the other
station code.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jStationEntrances.get({}, context)
```

#### Parameters
* Lat (number) - Center point Latitude, required if Longitude and Radius are specified.
* Lon (number) - Center point Longitude, required if Latitude and Radius are specified.
* Radius (number) - Radius (meters) to include in the search area, required if Latitude and Longitude are specified.

### json.jStationInfo.get
<h4 class="text-primary">Description</h4>

<p>Returns station location and address information based on a given
StationCode.</p>

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
<td>Address</td>

<td>
Structure describing <a href="#Address">address</a> information.
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code. Repeated from input.</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>LineCode1</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV) served by this station.</td>
</tr>

<tr>
<td>LineCode2</td>

<td>Additional line served by this station. This is often the case
when stations have multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center).</td>
</tr>

<tr>
<td>LineCode3</td>

<td>Similar to function as LineCodeX.</td>
</tr>

<tr>
<td>LineCode4</td>

<td>Similar to function as LineCodeX. Currently not in use.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Station name.</td>
</tr>

<tr>
<td>StationTogether1</td>

<td>For stations with multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center), the additional
StationCode will be listed here.</td>
</tr>

<tr>
<td>StationTogether2</td>

<td>Similar in function to StationTogether2. Currently not in
use.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a name="Address">Address Elements</a>
</div>
</td>
</tr>

<tr>
<td>City</td>

<td>City.</td>
</tr>

<tr>
<td>State</td>

<td>State (abbreviated).</td>
</tr>

<tr>
<td>Street</td>

<td>Street address (for GPS use).</td>
</tr>

<tr>
<td>Zip</td>

<td>Zip code.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jStationInfo.get({
  "StationCode": ""
}, context)
```

#### Parameters
* StationCode (string) **required** - Station code.  Use the Station List method to return a list of all station codes.

### json.jStationParking.get
<h4 class="text-primary">Description</h4>

<p>Returns parking information at a station based on a given StationCode. Omit
the StationCode to return parking information for all stations.</p>

<p>If a station has no parking, the StationsParking element will contain no
child elements.</p>

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
<td>StationsParking</td>

<td>
Array containing station parking information (<a href=
"#StationParking">StationParking</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationParking" name="StationParking">StationParking
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code. Useful when returning parking information for all
stations. Use this value in other rail-related APIs to retrieve
data about a station.</td>
</tr>

<tr>
<td>Notes</td>

<td>When not NULL, provides additional parking resources such as
nearby lots.</td>
</tr>

<tr>
<td>AllDayParking</td>

<td>
Structure describing <a href="#AllDayParking">all-day
parking</a> options.
</td>
</tr>

<tr>
<td>ShortTermParking</td>

<td>
Structure describing <a href="#ShortTermParking">short-term
parking</a> options.
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="AllDayParking" name="AllDayParking">AllDayParking
Elements</a>
</div>
</td>
</tr>

<tr>
<td>TotalCount</td>

<td>Number of all-day parking spots available at a station.</td>
</tr>

<tr>
<td>RiderCost</td>

<td>All-day cost per day for Metro riders. NULL when no all-day
spots are available. For most stations, this value is identical to
the NonRiderCost.<br>
<br>
For cases where the NonRiderCost is different, the lower cost per
day requires a valid rail trip using a SmarTrip&reg; card
originating from a station other than the one where the patron
parked. To receive this lower rate, patrons must pay for their
parking with the same SmarTrip&reg; card used to enter/exit
Metrorail, and must exit the parking lot within two hours of
exiting Metrorail.</td>
</tr>

<tr>
<td>NonRiderCost</td>

<td>All-day cost per day for non-Metro riders. NULL when no all-day
spots are available.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="ShortTermParking" name=
"ShortTermParking">ShortTermParking Elements</a>
</div>
</td>
</tr>

<tr>
<td>TotalCount</td>

<td>Number of short-term parking spots available at a station
(parking meters).</td>
</tr>

<tr>
<td>Notes</td>

<td>Misc. information relating to short-term parking. NULL when no
short-term spots are available.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jStationParking.get({}, context)
```

#### Parameters
* StationCode (string) - Station code.  Use the Station List method to return a list of all station codes.

### json.jStationTimes.get
<h4 class="text-primary">Description</h4>

<p>Returns opening and scheduled first/last train times based on a given
StationCode. Omit the StationCode to return timing information for all
stations.</p>

<p>Note that for stations with multiple platforms (e.g.: Metro Center, L'Enfant
Plaza, etc.), a distinct call is required for each StationCode to retrieve the
full set of train times at such stations.</p>

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
<td>StationTimes</td>

<td>
Array containing station timing information (<a href=
"#StationTime">StationTime</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="StationTime" name="StationTime">StationTime
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code for this station. Use this value in other
rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>StationName</td>

<td>Full name of the station.</td>
</tr>

<tr>
<td>*Day Elements</td>

<td>
Container elements containing timing information based on
<a href="#dow">day of the week.</a>
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="dow" name="dow">Monday/Tuesday/Wednesday/etc.
Elements</a>
</div>
</td>
</tr>

<tr>
<td>OpeningTime</td>

<td>Station opening time. Format is HH:mm.</td>
</tr>

<tr>
<td>FirstTrains</td>

<td>
Structure containing <a href="#first">first train</a>
information.
</td>
</tr>

<tr>
<td>LastTrains</td>

<td>
Structure containing <a href="#last">last train</a>
information.
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="first" name="first">FirstTrains Elements</a>
</div>
</td>
</tr>

<tr>
<td>Time</td>

<td>First train leaves the station at this time. Format is
HH:mm.</td>
</tr>

<tr>
<td>DestinationStation</td>

<td>Station code for the train's destination. Use this value in
other rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="last" name="last">LastTrains Elements</a>
</div>
</td>
</tr>

<tr>
<td>Time</td>

<td>Last train leaves the station at this time. Format is HH:mm.
Note that when the time is AM, it signifies the next day. For
example, a value of 02:30 under a Saturday element means the last
train leaves on Sunday at 2:30 AM.</td>
</tr>

<tr>
<td>DestinationStation</td>

<td>Station code for the train's destination. Use this value in
other rail-related APIs to retrieve data about a station.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jStationTimes.get({}, context)
```

#### Parameters
* StationCode (string) - Station code.  Use the Station List method to return a list of all station codes.

### json.jStations.get
<h4 class="text-primary">Description</h4>

<p>Returns a list of station location and address information based on a given
LineCode. Omit the LineCode to return all stations. The response is an array of
objects identical to those returned in the Station Information method.</p>

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
<td>Stations</td>

<td>
Array containing station information (<a href=
"#Station">Station</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Station" name="Station">Station Elements</a>
</div>
</td>
</tr>

<tr>
<td>Address</td>

<td>
Structure describing <a href="#Address">address</a> information.
</td>
</tr>

<tr>
<td>Code</td>

<td>Station code. Repeated from input.</td>
</tr>

<tr>
<td>Lat</td>

<td>Latitude.</td>
</tr>

<tr>
<td>LineCode1</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV) served by this station.</td>
</tr>

<tr>
<td>LineCode2</td>

<td>Additional line served by this station. This is often the case
when stations have multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center).</td>
</tr>

<tr>
<td>LineCode3</td>

<td>Similar to function as LineCodeX.</td>
</tr>

<tr>
<td>LineCode4</td>

<td>Similar to function as LineCodeX. Currently not in use.</td>
</tr>

<tr>
<td>Lon</td>

<td>Longitude.</td>
</tr>

<tr>
<td>Name</td>

<td>Station name.</td>
</tr>

<tr>
<td>StationTogether1</td>

<td>For stations with multiple platforms (e.g.: Gallery Place, Fort
Totten, L'Enfant Plaza, and Metro Center), the additional
StationCode will be listed here.</td>
</tr>

<tr>
<td>StationTogether2</td>

<td>Similar in function to StationTogether2. Currently not in
use.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="Address" name="Address">Address Elements</a>
</div>
</td>
</tr>

<tr>
<td>City</td>

<td>City.</td>
</tr>

<tr>
<td>State</td>

<td>State (abbreviated).</td>
</tr>

<tr>
<td>Street</td>

<td>Street address (for GPS use).</td>
</tr>

<tr>
<td>Zip</td>

<td>Zip code.</td>
</tr>
</tbody>
</table>


```js
wmata_rail_station.json.jStations.get({}, context)
```

#### Parameters
* LineCode (string) - Two-letter line code abbreviation:

