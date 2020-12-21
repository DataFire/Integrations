# @datafire/haloapi_ugc

Client library for UGC

## Installation and Usage
```bash
npm install --save @datafire/haloapi_ugc
```
```js
let haloapi_ugc = require('@datafire/haloapi_ugc').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API that provides Metadata about User-Generated Content (Maps and Game Variants).

## Actions

### 58acde292109180bdcacc40d
<p>Retrieves a list of Game Variants created by a Player.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "List Game Variants" to "Halo 5 - Player Game Variants".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>August 5, 2016:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_ugc.58acde292109180bdcacc40d({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Gamertag of the Player that owns the listed Game Variants.
  * start `number`: When specified, this indicates the starting index (0-based) for which the list of results will begin at.
  * count `number`: When specified, this indicates the maximum quantity of items the caller would like returned in the response.
  * sort `number`: When specified, this indicates what field should be used to sort the results as the primary sort order. When omitted, "modified" (descending) is the assumed primary sort order. Allowed sort fields are: name, description, accessibility, created, modified, bookmarkCount.
  * order `number`: When specified, this indicates the ordering that will be applied. When omitted, "desc" is assumed. Allowed order values are: asc, desc.

#### Output
*Output schema unknown*

### 58acde292109180bdcacc40c
<p>Retrieves Metadata about a Player-created Game Variant.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Get Game Variant" to "Halo 5 - Player Game Variant".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>August 5, 2016:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_ugc.58acde292109180bdcacc40c({
  "player": "",
  "variant": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Gamertag of the Player that owns the Game Variant.
  * variant **required** `string`: The ID for the Game Variant.

#### Output
*Output schema unknown*

### 58acde292109180bdcacc40f
<p>Retrieves a list Map Variants created by a Player.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "List Map Variants" to "Halo 5 - Player Map Variants".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>August 5, 2016:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_ugc.58acde292109180bdcacc40f({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Gamertag of the Player that owns the listed Map Variants.
  * start `number`: When specified, this indicates the starting index (0-based) for which the list of results will begin at.
  * count `number`: When specified, this indicates the maximum quantity of items the caller would like returned in the response.
  * sort `number`: When specified, this indicates what field should be used to sort the results as the primary sort order. When omitted, "modified" (descending) is the assumed primary sort order. Allowed sort fields are: name, description, accessibility, created, modified, bookmarkCount.
  * order `number`: When specified, this indicates the ordering that will be applied. When omitted, "desc" is assumed. Allowed order values are: asc, desc.

#### Output
*Output schema unknown*

### 58acde292109180bdcacc40e
<p>Retrieves Metadata about a Player-created Map Variant.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Get Map Variant" to "Halo 5 - Player Map Variant".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>August 5, 2016:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_ugc.58acde292109180bdcacc40e({
  "player": "",
  "variant": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Gamertag of the Player that owns the Map Variant.
  * variant **required** `string`: The ID for the Map Variant.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
