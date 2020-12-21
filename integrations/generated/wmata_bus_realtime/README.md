# @datafire/wmata_bus_realtime

Client library for Real-Time Bus Predictions

## Installation and Usage
```bash
npm install --save @datafire/wmata_bus_realtime
```
```js
let wmata_bus_realtime = require('@datafire/wmata_bus_realtime').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Real-time bus prediction methods.

## Actions

### 5476365e031f5909e4fe331e
<h4 class="text-primary">Description</h4>

<p>Returns next bus arrival times at a stop.</p>

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
<td>Predictions</td>

<td>
Array containing bus predictions (<a href=
"#NextBusPrediction">NextBusPrediction</a>).
</td>
</tr>

<tr>
<td>StopName</td>

<td>Full name of the given StopID.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="NextBusPrediction" name=
"NextBusPrediction">NextBusPrediction Elements</a>
</div>
</td>
</tr>

<tr>
<td>DirectionNum</td>

<td>Denotes a binary direction (0 or 1) of the bus. There is no
specific mapping to direction, but a different value for the same
route signifies that the buses are traveling in opposite
directions. Use the DirectionText element to show the actual
destination of the bus.</td>
</tr>

<tr>
<td>DirectionText</td>

<td>Customer-friendly description of direction and destination for
a bus.</td>
</tr>

<tr>
<td>Minutes</td>

<td>Minutes until bus arrival at this stop. Numeric value.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Base route name as shown on the bus. This can be used in other
bus-related methods. Note that all variants will be shown as their
base route names (i.e.: 10Av1 and 10Av2 will be shown as 10A).</td>
</tr>

<tr>
<td>TripID</td>

<td>Trip identifier. This can be correlated with the data in our
bus schedule information as well as bus positions.</td>
</tr>

<tr>
<td>VehicleID</td>

<td>Bus identifier. This can be correlated with results returned
from bus positions.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_realtime.5476365e031f5909e4fe331e({
  "StopID": ""
}, context)
```

#### Input
* input `object`
  * StopID **required** `string` (values: 1001195): 7-digit regional stop ID.

#### Output
*Output schema unknown*

### 5476365e031f5909e4fe331d
<h4 class="text-primary">Description</h4>

<p>Returns next bus arrival times at a stop.</p>

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
<td>Predictions</td>

<td>
Array containing bus predictions (<a href=
"#NextBusPrediction">NextBusPrediction</a>).
</td>
</tr>

<tr>
<td>StopName</td>

<td>Full name of the given StopID.</td>
</tr>

<tr>
<td colspan="2">
<div class="text-primary" style="margin-top: 1em">
<a id="NextBusPrediction" name=
"NextBusPrediction">NextBusPrediction Elements</a>
</div>
</td>
</tr>

<tr>
<td>DirectionNum</td>

<td>Denotes a binary direction (0 or 1) of the bus. There is no
specific mapping to direction, but a different value for the same
route signifies that the buses are traveling in opposite
directions. Use the DirectionText element to show the actual
destination of the bus.</td>
</tr>

<tr>
<td>DirectionText</td>

<td>Customer-friendly description of direction and destination for
a bus.</td>
</tr>

<tr>
<td>Minutes</td>

<td>Minutes until bus arrival at this stop. Numeric value.</td>
</tr>

<tr>
<td>RouteID</td>

<td>Base route name as shown on the bus. This can be used in other
bus-related methods. Note that all variants will be shown as their
base route names (i.e.: 10Av1 and 10Av2 will be shown as 10A).</td>
</tr>

<tr>
<td>TripID</td>

<td>Trip identifier. This can be correlated with the data in our
bus schedule information as well as bus positions.</td>
</tr>

<tr>
<td>VehicleID</td>

<td>Bus identifier. This can be correlated with results returned
from bus positions.</td>
</tr>
</tbody>
</table>


```js
wmata_bus_realtime.5476365e031f5909e4fe331d({
  "StopID": ""
}, context)
```

#### Input
* input `object`
  * StopID **required** `string` (values: 1001195): 7-digit regional stop ID.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
