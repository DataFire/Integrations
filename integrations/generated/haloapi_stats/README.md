# @datafire/haloapi_stats

Client library for Stats

## Installation and Usage
```bash
npm install --save @datafire/haloapi_stats
```
```js
let haloapi_stats = require('@datafire/haloapi_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

haloapi_stats.h5.arena.matches.matchId.get({}).then(data => {
  console.log(data);
})
```

## Description

API that provides statistical data about Players and Matches.

## Actions

### h5.arena.matches.matchId.get
<p>Retrieves detailed statistics for a Match.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Post-Game Carnage Report: Arena" to "Halo 5 - Match Result - Arena".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Updated the documentation for "GameVariantResourceId" and "MapVariantResourceId" to reference the UGC API.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 16, 2016:</strong></p>
    <ul>
        <li>Documented HTTP 503 Response Code.</li>
        <li>Added documentation for the "MatchSpeedWinAmount", "ObjectivesCompletedAmount", and "BoostData" fields.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added documentation for the "GameVariantResourceId", "MapVariantResourceId", and "PlayerScore" fields.</li>
        <li>Updated the documentation for the "MapVariantId" and "GameVariantId" fields with the recommendation of using the "MapVariantResourceId" and "GameVariantResourceId" fields, respectively.</li>
    </ul>
</div>



```js
haloapi_stats.h5.arena.matches.matchId.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo 5 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### h5.campaign.matches.matchId.get
<p>Retrieves detailed statistics for a Match.</p>
<p>Every time a player plays a portion of a Campaign Mission, a Match will be generated whether the player finishes the Mission or not. If the "Match" ends because the Mission was completed, this will be indicated in the response.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Post-Game Carnage Report: Campaign" to "Halo 5 - Match Result - Campaign".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 16, 2016:</strong></p>
    <ul>
        <li>Documented HTTP 503 Response Code.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added documentation for the "GameVariantResourceId", "MapVariantResourceId", and "PlayerScore" fields.</li>
    </ul>
</div>



```js
haloapi_stats.h5.campaign.matches.matchId.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo 5 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### h5.companies.companyId.get
<p>Retrieves information about the Company. The response will contain the Company's name, status, and members.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.h5.companies.companyId.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: The ID for the Company. The Company ID for a player can be retrieved from the Profile APIs via the "Halo 5 - Player Apperance" Endpoint.

#### Output
*Output schema unknown*

### h5.companies.companyId.commendations.get
<p>Retrieves the commendation state for a Company.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.h5.companies.companyId.commendations.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: The ID for the Company. The Company ID for a player can be retrieved from the Profile APIs via the "Halo 5 - Player Apperance" Endpoint.

#### Output
*Output schema unknown*

### h5.custom.matches.matchId.get
<p>Retrieves detailed statistics for a Match.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Post-Game Carnage Report: Custom" to "Halo 5 - Match Result - Custom".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Updated the documentation for "GameVariantResourceId" and "MapVariantResourceId" to reference the UGC API.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 16, 2016:</strong></p>
    <ul>
        <li>Documented HTTP 503 Response Code.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added documentation for the "GameVariantResourceId", "MapVariantResourceId", and "PlayerScore" fields.</li>
        <li>Updated the documentation for the "MapVariantId" and "GameVariantId" fields with the recommendation of using the "MapVariantResourceId" and "GameVariantResourceId" fields, respectively.</li>
    </ul>
</div>



```js
haloapi_stats.h5.custom.matches.matchId.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo 5 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### h5.matches.matchId.events.get
<p>Retrieves a set of Events related to the Match specified. Events are only available once the Match has completed.</p>
<p>The set of Events may grow over time as data becomes available.</p>
<p>This Endpoint does not have the accuracy guarantees of other Endpoints have, so please use with caution. This endpoint may not return Matches before December 1, 2015.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Events for Match" to "Halo 5 - Match Events".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 20, 2016:</strong></p>
    <ul>
        <li>The Endpoint now correctly reports the "Content-Type" Response Header as "application/json".</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 16, 2016:</strong></p>
    <ul>
        <li>Documented HTTP 503 Response Code.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added new types of events to the Endpoint: Impulses, Medals, Player Spawns, Round Stats, Round Ends, Weapon Drops, Weapon Pickups, and Weapon Pickup Pads.</li>
        <li>Fixed an issue that caused the API to consistently return HTTP 500's for matches where a player left and rejoined the match.</li>
    </ul>
</div>



```js
haloapi_stats.h5.matches.matchId.events.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo 5 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### h5.player_leaderboards.csr.seasonId.playlistId.get
<p>Retrieves the Leaderboard for Player CSRs. The Leaderboard consists of the top Players with a CSR of 1800 or above for a given Playlist in a Season.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 31, 2017:</strong></p>
    <ul>
        <li>Clarified documentation for which players are included in the leaderboard.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Player Leaderboard" to "Halo 5 - Leaderboard Player CSR".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.h5.player_leaderboards.csr.seasonId.playlistId.get({
  "seasonId": "",
  "playlistId": ""
}, context)
```

#### Input
* input `object`
  * seasonId **required** `string`: The ID for the Season.
  * playlistId **required** `string`: The ID for the Playlist.
  * count `number`: When specified, this indicates the maximum quantity of items the client would like returned in the response.

#### Output
*Output schema unknown*

### h5.players.player.commendations.get
<p>Retrieves the commendation state for a Player.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.h5.players.player.commendations.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.

#### Output
*Output schema unknown*

### h5.players.player.matches.get
<p>Retrieves a list of Matches that the Player has participated in and which have completed processing. If the Player is currently in a match, it is not returned in this API.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Matches for Player" to "Halo 5 - Player Match History".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Clarified documentation for the "MapVariant" and "GameVariant" fields.</li>
        <li>Corrected "OwnerType" values for the "MapVariant" and "GameVariant" fields.</li>
    </ul>
</div>



```js
haloapi_stats.h5.players.player.matches.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.
  * modes `string`: Indicates what Game Mode(s) the client is interested in getting Matches for (arena, campaign, custom, or warzone).
  * start `number`: When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, "start=0" indicates that the first qualifying result will be returned, no items are 'skipped'. Passing "start=10" indicates that the result will begin with the 11th item, the first 10 will be 'skipped'.
  * count `number`: When specified, this indicates the maximum quantity of items the client would like returned in the response.

#### Output
*Output schema unknown*

### h5.servicerecords.arena.get
<p>Retrieves Arena Service Records for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Service Record: Arena" to "Halo 5 - Player Service Records - Arena".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added documentation for the "CsrPercentile" field.</li>
    </ul>
</div>



```js
haloapi_stats.h5.servicerecords.arena.get({
  "players": ""
}, context)
```

#### Input
* input `object`
  * players **required** `string`: A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.
  * seasonId `string`: When specified, this indicates the Season to request the Arena Playlist Stats for. If this is not specified, the default is the current Season. Seasons are available via the Metadata API.

#### Output
*Output schema unknown*

### h5.servicerecords.campaign.get
<p>Retrieves Campaign Service Records for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Service Record: Campaign" to "Halo 5 - Player Service Records - Campaign".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>



```js
haloapi_stats.h5.servicerecords.campaign.get({
  "players": ""
}, context)
```

#### Input
* input `object`
  * players **required** `string`: A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

#### Output
*Output schema unknown*

### h5.servicerecords.custom.get
<p>Retrieves Custom Service Records for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Service Record: Custom" to "Halo 5 - Player Service Records - Custom".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>



```js
haloapi_stats.h5.servicerecords.custom.get({
  "players": ""
}, context)
```

#### Input
* input `object`
  * players **required** `string`: A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

#### Output
*Output schema unknown*

### h5.servicerecords.warzone.get
<p>Retrieves Warzone Service Records for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Service Record: Warzone" to "Halo 5 - Player Service Records - Warzone".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>



```js
haloapi_stats.h5.servicerecords.warzone.get({
  "players": ""
}, context)
```

#### Input
* input `object`
  * players **required** `string`: A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

#### Output
*Output schema unknown*

### h5.warzone.matches.matchId.get
<p>Retrieves detailed statistics for a Match.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Post-Game Carnage Report: Warzone" to "Halo 5 - Match Result - Warzone".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Updated the documentation for "GameVariantResourceId" and "MapVariantResourceId" to reference the UGC API.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 16, 2016:</strong></p>
    <ul>
        <li>Documented HTTP 503 Response Code.</li>
        <li>Added documentation for the "MatchSpeedWinAmount", "ObjectivesCompletedAmount", and "BoostData" fields.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added documentation for the "GameVariantResourceId", "MapVariantResourceId", and "PlayerScore" fields.</li>
        <li>Updated the documentation for the "MapVariantId" and "GameVariantId" fields with the recommendation of using the "MapVariantResourceId" and "GameVariantResourceId" fields, respectively.</li>
    </ul>
</div>



```js
haloapi_stats.h5.warzone.matches.matchId.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo 5 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### h5pc.custom.matches.matchId.get
<p>Retrieves detailed statistics for a Match.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Post-Game Carnage Report: Custom" to "Halo 5 - Match Result - Custom".</li>
        <li>Removed "{title}" Request Parameter.</li>
        <li>Updated the documentation for "GameVariantResourceId" and "MapVariantResourceId" to reference the UGC API.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>May 16, 2016:</strong></p>
    <ul>
        <li>Documented HTTP 503 Response Code.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Added documentation for the "GameVariantResourceId", "MapVariantResourceId", and "PlayerScore" fields.</li>
        <li>Updated the documentation for the "MapVariantId" and "GameVariantId" fields with the recommendation of using the "MapVariantResourceId" and "GameVariantResourceId" fields, respectively.</li>
    </ul>
</div>



```js
haloapi_stats.h5pc.custom.matches.matchId.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo 5 PC - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### h5pc.players.player.matches.get
<p>Retrieves a list of Matches that the Player has participated in and which have completed processing. If the Player is currently in a match, it is not returned in this API.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Matches for Player" to "Halo 5 - Player Match History".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>April 20, 2016:</strong></p>
    <ul>
        <li>Clarified documentation for the "MapVariant" and "GameVariant" fields.</li>
        <li>Corrected "OwnerType" values for the "MapVariant" and "GameVariant" fields.</li>
    </ul>
</div>



```js
haloapi_stats.h5pc.players.player.matches.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.
  * modes `string`: Indicates what Game Mode(s) the client is interested in getting Matches for (arena, campaign, custom, or warzone).
  * start `number`: When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, "start=0" indicates that the first qualifying result will be returned, no items are 'skipped'. Passing "start=10" indicates that the result will begin with the 11th item, the first 10 will be 'skipped'.
  * count `number`: When specified, this indicates the maximum quantity of items the client would like returned in the response.

#### Output
*Output schema unknown*

### h5pc.servicerecords.custom.get
<p>Retrieves Custom Service Records for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Service Record: Custom" to "Halo 5 - Player Service Records - Custom".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>



```js
haloapi_stats.h5pc.servicerecords.custom.get({
  "players": ""
}, context)
```

#### Input
* input `object`
  * players **required** `string`: A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

#### Output
*Output schema unknown*

### hw2.matches.matchId.get
<p>Retrieves detailed statistics for a Match. Matches can be retrieved before they are completed; however, the data for in-progress Matches is only updated every few minutes.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>September 5, 2017:</strong></p>
    <ul>
        <li>Documented new game mode "Terminus Firefight".</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.matches.matchId.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo Wars 2 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### hw2.matches.matchId.events.get
<p>Retrieves a set of Events related to the Match specified. Events are only available once the Match has completed. Events are not available for Matches played with the Custom Match Type.</p>
<p>The set of Events may grow over time as data becomes available.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>September 5, 2017:</strong></p>
    <ul>
        <li>Documented new game mode "Terminus Firefight".</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.matches.matchId.events.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: An ID that uniquely identifies a Match. Match IDs can be retrieved from the "Halo Wars 2 - Player Match History" Endpoint.

#### Output
*Output schema unknown*

### hw2.player_leaderboards.csr.seasonId.playlistId.get
<p>Retrieves the Leaderboard for Player CSRs. The Leaderboard consists of the top Players with a CSR of 1800 or above for a given Playlist in a Season.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 31, 2017:</strong></p>
    <ul>
        <li>Clarified documentation for which players are included in the leaderboard.</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.player_leaderboards.csr.seasonId.playlistId.get({
  "seasonId": "",
  "playlistId": ""
}, context)
```

#### Input
* input `object`
  * seasonId **required** `string`: The ID for the Season.
  * playlistId **required** `string`: The ID for the Playlist.
  * count `number`: When specified, this indicates the maximum quantity of items the client would like returned in the response.

#### Output
*Output schema unknown*

### hw2.players.player.campaign_progress.get
<p>Retrieves the Campaign Progress state for a Player.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.players.player.campaign_progress.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.

#### Output
*Output schema unknown*

### hw2.players.player.matches.get
<p>Retrieves a list of Matches that the Player has participated in. If the Player is currently in a Match, it is not returned in this API.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>September 5, 2017:</strong></p>
    <ul>
        <li>Documented new game mode "Terminus Firefight".</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.players.player.matches.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.
  * matchType `string`: Indicates what Match Type the client is interested in getting Matches for ("custom" or "matchmaking").
  * start `number`: When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, "start=0" indicates that the first qualifying result will be returned, no items are 'skipped'. Passing "start=10" indicates that the result will begin with the 11th item, the first 10 will be 'skipped'.
  * count `number`: When specified, this indicates the maximum quantity of items the client would like returned in the response.

#### Output
*Output schema unknown*

### hw2.players.player.stats.get
<p>Retrieves high-level aggregations across the lifetime of a Player.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>September 5, 2017:</strong></p>
    <ul>
        <li>Added additional fields: "GameMode" and "HighestObjectiveScoreByTeamSize".</li>
        <li>Documented new game mode "Terminus Firefight".</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.players.player.stats.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.

#### Output
*Output schema unknown*

### hw2.players.player.stats.seasons.seasonId.get
<p>Retrieves high-level aggregations across a Season for a Player.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>September 5, 2017:</strong></p>
    <ul>
        <li>Added additional pivots of data: "CustomModeStats", "SinglePlayerModeStats", "MultiplayerModeStats", "SocialModeStats", and "RankedModeStats".</li>
        <li>Added additional fields to the "Summary" contract: "GameMode" and "HighestObjectiveScoreByTeamSize".</li>
        <li>Documented new game mode "Terminus Firefight".</li>
    </ul>
</div>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.players.player.stats.seasons.seasonId.get({
  "player": "",
  "seasonId": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.
  * seasonId **required** `string`: A Season ID or "current" for the current Season. Seasons are available via the Metadata API.

#### Output
*Output schema unknown*

### hw2.playlist.playlistId.rating.get
<p>Retrieves Playlist Ratings in the current season for one or more Players.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.playlist.playlistId.rating.get({
  "playlistId": "",
  "players": ""
}, context)
```

#### Input
* input `object`
  * playlistId **required** `string`: The ID of the Playlist to get Ratings for.
  * players **required** `string`: A comma-separated list of Gamertags. Up to 6 Gamertags may be specified.

#### Output
*Output schema unknown*

### hw2.xp.get
<p>Retrieves XP and Rank information for one or more players.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_stats.hw2.xp.get({
  "players": ""
}, context)
```

#### Input
* input `object`
  * players **required** `string`: A comma-separated list of Gamertags. Up to 6 Gamertags may be specified.

#### Output
*Output schema unknown*



## Definitions

** No definitions **
