# @datafire/wmata_rail_realtime

Client library for Real-Time Rail Predictions

## Installation and Usage
```bash
npm install --save @datafire/wmata_rail_realtime
```
```js
let wmata_rail_realtime = require('@datafire/wmata_rail_realtime').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Real-time rail prediction methods.

## Actions

### 547636a6f918230da8553640
<h4 class="text-primary">Description</h4>

<p>Returns next train arrival information for one or more stations. Will return
an empty set of results when no predictions are available. Use <span class=
"text-info">All</span> for the StationCodes parameter to return predictions for
all stations.</p>

<p>For terminal stations (e.g.: Greenbelt, Shady Grove, etc.), predictions may
be displayed twice.</p>

<p>Some stations have two platforms (e.g.: Gallery Place, Fort Totten, L'Enfant
Plaza, and Metro Center). To retrieve complete predictions for these stations,
be sure to pass in both StationCodes.</p>

<p>For trains with no passengers, the DestinationName will be <span class=
"text-info">No Passenger</span>.</p>

<p>Next train arrival information is refreshed once every 20 to 30 seconds approximately.</p>

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
<td>Trains</td>

<td>
Array containing train prediction information (<a href=
"#AIMPredictionTrainInfo">AIMPredictionTrainInfo</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="AIMPredictionTrainInfo" name=
"AIMPredictionTrainInfo">AIMPredictionTrainInfo
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Car</td>

<td>Number of cars on a train, usually 6 or 8, but might also
return <span class="text-info">-</span> or NULL.</td>
</tr>

<tr>
<td>Destination</td>

<td>Abbreviated version of the final destination for a train. This
is similar to what is displayed on the signs at stations.</td>
</tr>

<tr>
<td>DestinationCode</td>

<td>Destination station code. Can be NULL. Use this value in other
rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>DestinationName</td>

<td>When DestinationCode is populated, this is the full name of the
destination station, as shown on the WMATA website.</td>
</tr>

<tr>
<td>Group</td>

<td>Denotes the track this train is on, but does not necessarily
equate to Track 1 or Track 2. With the exception of terminal
stations, predictions at the same station with different Group
values refer to trains on different tracks.</td>
</tr>

<tr>
<td>Line</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV). May also be blank or <span class="text-info">No</span> for
trains with no passengers.</td>
</tr>

<tr>
<td>LocationCode</td>

<td>Station code for where the train is arriving. Useful when
passing in <span class="text-info">All</span> as the StationCodes
parameter. Use this value in other rail-related APIs to retrieve
data about a station.</td>
</tr>

<tr>
<td>LocationName</td>

<td>Full name of the station where the train is arriving. Useful
when passing in <span class="text-info">All</span> as the
StationCodes parameter.</td>
</tr>

<tr>
<td>Min</td>

<td>Minutes until arrival. Can be a numeric value, <span class=
"text-info">ARR</span> (arriving), <span class=
"text-info">BRD</span> (boarding), <span class=
"text-info">---</span>, or empty.</td>
</tr>
</tbody>
</table>
<hr>


```js
wmata_rail_realtime.547636a6f918230da8553640({
  "StationCodes": ""
}, context)
```

#### Input
* input `object`
  * StationCodes **required** `string` (values: B03, All): Comma-separated list of station codes.  For all predictions, use "All".

#### Output
*Output schema unknown*

### 547636a6f918230da855363f
<h4 class="text-primary">Description</h4>

<p>Returns next train arrival information for one or more stations. Will return
an empty set of results when no predictions are available. Use <span class=
"text-info">All</span> for the StationCodes parameter to return predictions for
all stations.</p>

<p>For terminal stations (e.g.: Greenbelt, Shady Grove, etc.), predictions may
be displayed twice.</p>

<p>Some stations have two platforms (e.g.: Gallery Place, Fort Totten, L'Enfant
Plaza, and Metro Center). To retrieve complete predictions for these stations,
be sure to pass in both StationCodes.</p>

<p>For trains with no passengers, the DestinationName will be <span class=
"text-info">No Passenger</span>.</p>

<p>Next train arrival information is refreshed once every 20 to 30 seconds approximately.</p>

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
<td>Trains</td>

<td>
Array containing train prediction information (<a href=
"#AIMPredictionTrainInfo">AIMPredictionTrainInfo</a>).
</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="AIMPredictionTrainInfo" name=
"AIMPredictionTrainInfo">AIMPredictionTrainInfo
Elements</a>
</div>
</td>
</tr>

<tr>
<td>Car</td>

<td>Number of cars on a train, usually 6 or 8, but might also
return <span class="text-info">-</span> or NULL.</td>
</tr>

<tr>
<td>Destination</td>

<td>Abbreviated version of the final destination for a train. This
is similar to what is displayed on the signs at stations.</td>
</tr>

<tr>
<td>DestinationCode</td>

<td>Destination station code. Can be NULL. Use this value in other
rail-related APIs to retrieve data about a station.</td>
</tr>

<tr>
<td>DestinationName</td>

<td>When DestinationCode is populated, this is the full name of the
destination station, as shown on the WMATA website.</td>
</tr>

<tr>
<td>Group</td>

<td>Denotes the track this train is on, but does not necessarily
equate to Track 1 or Track 2. With the exception of terminal
stations, predictions at the same station with different Group
values refer to trains on different tracks.</td>
</tr>

<tr>
<td>Line</td>

<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,
or SV). May also be blank or <span class="text-info">No</span> for
trains with no passengers.</td>
</tr>

<tr>
<td>LocationCode</td>

<td>Station code for where the train is arriving. Useful when
passing in <span class="text-info">All</span> as the StationCodes
parameter. Use this value in other rail-related APIs to retrieve
data about a station.</td>
</tr>

<tr>
<td>LocationName</td>

<td>Full name of the station where the train is arriving. Useful
when passing in <span class="text-info">All</span> as the
StationCodes parameter.</td>
</tr>

<tr>
<td>Min</td>

<td>Minutes until arrival. Can be a numeric value, <span class=
"text-info">ARR</span> (arriving), <span class=
"text-info">BRD</span> (boarding), <span class=
"text-info">---</span>, or empty.</td>
</tr>
</tbody>
</table>
<hr>


```js
wmata_rail_realtime.547636a6f918230da855363f({
  "StationCodes": ""
}, context)
```

#### Input
* input `object`
  * StationCodes **required** `string` (values: B03, All): Comma-separated list of station codes.  For all predictions, use "All".

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
