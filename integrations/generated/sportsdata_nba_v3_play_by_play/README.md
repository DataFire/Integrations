# @datafire/sportsdata_nba_v3_play_by_play

Client library for NBA v3 Play-by-Play

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_nba_v3_play_by_play
```
```js
let sportsdata_nba_v3_play_by_play = require('@datafire/sportsdata_nba_v3_play_by_play').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NBA play-by-play API.

## Actions

### PlayByPlay
Play By Play


```js
sportsdata_nba_v3_play_by_play.PlayByPlay({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: The GameID of an NBA game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code>, <code>16905</code>, etc.

#### Output
* output [PlayByPlay](#playbyplay)

### PlayByPlayDelta
Play By Play Delta


```js
sportsdata_nba_v3_play_by_play.PlayByPlayDelta({
  "format": "",
  "date": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).
  * minutes **required** `string`: Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:

#### Output
* output `array`
  * items [PlayByPlay](#playbyplay)



## Definitions

### Game
* Game `object`
  * Attendance `integer`
  * AwayRotationNumber `integer`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamScore `integer`
  * Channel `string`
  * DateTime `string`
  * Day `string`
  * GameEndDateTime `string`
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeRotationNumber `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * HomeTeamScore `integer`
  * IsClosed `boolean`
  * LastPlay `string`
  * NeutralVenue `boolean`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Quarter `string`
  * Quarters `array`
    * items [Quarter](#quarter)
  * Season `integer`
  * SeasonType `integer`
  * StadiumID `integer`
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Updated `string`

### Play
* Play `object`
  * AssistedByPlayerID `integer`
  * AwayPlayerID `integer`
  * AwayTeamScore `integer`
  * BaselineOffsetPercentage `number`
  * BlockedByPlayerID `integer`
  * Category `string`
  * Coordinates `string`
  * Created `string`
  * Description `string`
  * FastBreak `boolean`
  * HomePlayerID `integer`
  * HomeTeamScore `integer`
  * Opponent `string`
  * OpponentID `integer`
  * PlayID `integer`
  * PlayerID `integer`
  * Points `integer`
  * PotentialPoints `integer`
  * QuarterID `integer`
  * QuarterName `string`
  * ReceivingPlayerID `integer`
  * ReceivingTeam `string`
  * ReceivingTeamID `integer`
  * Sequence `integer`
  * ShotMade `boolean`
  * SideOfBasket `string`
  * SidelineOffsetPercentage `number`
  * StolenByPlayerID `integer`
  * SubstituteInPlayerID `integer`
  * SubstituteOutPlayerID `integer`
  * Team `string`
  * TeamID `integer`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Type `string`
  * Updated `string`

### PlayByPlay
* PlayByPlay `object`
  * Game [Game](#game)
  * Plays `array`
    * items [Play](#play)
  * Quarters `array`
    * items [Quarter](#quarter)

### Quarter
* Quarter `object`
  * AwayScore `integer`
  * GameID `integer`
  * HomeScore `integer`
  * Name `string`
  * Number `integer`
  * QuarterID `integer`


