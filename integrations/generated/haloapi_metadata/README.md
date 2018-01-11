# @datafire/haloapi_metadata

Client library for Metadata

## Installation and Usage
```bash
npm install --save @datafire/haloapi_metadata
```
```js
let haloapi_metadata = require('@datafire/haloapi_metadata').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

haloapi_metadata.hw2.techs.get({}).then(data => {
  console.log(data);
})
```

## Description

API that provides Metadata information.

## Actions

### h5.metadata.campaign_missions.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Campaign Missions" to "Halo 5 - Campaign Missions".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.campaign_missions.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.commendations.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Commendations" to "Halo 5 - Commendations".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.commendations.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.csr_designations.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "CSR Designations" to "Halo 5 - CSR Designations".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.csr_designations.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.enemies.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Enemies" to "Halo 5 - Enemies".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Corrected documentation typo. The field "largeIconImageUrl" was incorrectly named "lageIconImageUrl".</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.enemies.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.flexible_stats.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Flexible Stats" to "Halo 5 - Flexible Stats".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.flexible_stats.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.game_base_variants.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Game Base Variants" to "Halo 5 - Game Base Variants".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.game_base_variants.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.game_variants.id.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Game Variants" to "Halo 5 - Game Variant".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.game_variants.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An ID that uniquely identifies a Game Variant.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.impulses.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Impulses" to "Halo 5 - Impulses".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.impulses.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.map_variants.id.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Map Variants" to "Halo 5 - Map Variant".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.map_variants.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An ID that uniquely identifies a Map Variant.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.maps.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Maps" to "Halo 5 - Maps".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.maps.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.medals.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Medals" to "Halo 5 - Medals".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.medals.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.playlists.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Playlists" to "Halo 5 - Playlists".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.playlists.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.requisition_packs.id.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Requisition Packs" to "Halo 5 - Requisition Pack".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.requisition_packs.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An ID that uniquely identifies a Requisition Pack.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.requisitions.id.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Requisitions" to "Halo 5 - Requisition".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.requisitions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An ID that uniquely identifies a Requisition.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.seasons.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Seasons" to "Halo 5 - Seasons".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.seasons.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.skulls.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Skulls" to "Halo 5 - Skulls".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.skulls.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.spartan_ranks.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Spartan Ranks" to "Halo 5 - Spartan Ranks".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.spartan_ranks.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.team_colors.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Team Colors" to "Halo 5 - Team Colors".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.team_colors.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.vehicles.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Vehicles" to "Halo 5 - Vehicles".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.vehicles.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### h5.metadata.weapons.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Weapons" to "Halo 5 - Weapons".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Documented "Accept-Language" Request Header.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 26, 2016:</strong></p>
    <ul>
        <li>Corrected documentation issue. The documentation for the "type" field was incorrect.</li>
    </ul>
</div>



```js
haloapi_metadata.h5.metadata.weapons.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.campaign_levels.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.campaign_levels.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.campaign_logs.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.campaign_logs.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.

#### Output
*Output schema unknown*

### hw2.card_keywords.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 22, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.card_keywords.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.cards.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.cards.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.csr_designations.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 22, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.csr_designations.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.difficulties.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.difficulties.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.game_object_categories.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.game_object_categories.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.

#### Output
*Output schema unknown*

### hw2.game_objects.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.game_objects.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.leader_powers.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.leader_powers.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.leaders.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.leaders.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.maps.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.maps.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.packs.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.packs.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.playlists.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.playlists.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.seasons.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.seasons.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.spartan_ranks.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 27, 2017:</strong></p>
    <ul>
        <li>Updated documentation to clarify the relationship between the Spartan Rank content item and the Spartan Rank Display Info content item.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.spartan_ranks.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*

### hw2.techs.get
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_metadata.hw2.techs.get({}, context)
```

#### Input
* input `object`
  * startAt `number`: When specified, this indicates the index of the item to start at.
  * Accept-Language `string`: The desired language for the Metadata.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
