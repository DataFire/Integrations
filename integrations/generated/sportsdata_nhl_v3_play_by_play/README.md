# @datafire/sportsdata_nhl_v3_play_by_play

Client library for NHL v3 Play-by-Play

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_nhl_v3_play_by_play
```
```js
let sportsdata_nhl_v3_play_by_play = require('@datafire/sportsdata_nhl_v3_play_by_play').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NHL play-by-play API.

## Actions

### PlayByPlay
Play By Play


```js
sportsdata_nhl_v3_play_by_play.PlayByPlay({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>

#### Output
* output [PlayByPlay](#playbyplay)

### PlayByPlayDelta
Play By Play Delta


```js
sportsdata_nhl_v3_play_by_play.PlayByPlayDelta({
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
  * Period `string`
  * Periods `array`
    * items [Period](#period)
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Season `integer`
  * SeasonType `integer`
  * StadiumID `integer`
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Updated `string`

### Penalty
* Penalty `object`
  * BenchPenaltyServedByPlayerID `integer`
  * Description `string`
  * DrawnByPlayerID `integer`
  * DrawnByTeamID `integer`
  * IsBenchPenalty `boolean`
  * PenalizedPlayerID `integer`
  * PenalizedTeamID `integer`
  * PenaltyID `integer`
  * PenaltyMinutes `integer`
  * PeriodID `integer`
  * Sequence `integer`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`

### Period
* Period `object`
  * AwayScore `integer`
  * GameID `integer`
  * HomeScore `integer`
  * Name `string`
  * Penalties `array`
    * items [Penalty](#penalty)
  * PeriodID `integer`
  * ScoringPlays `array`
    * items [ScoringPlay](#scoringplay)

### Play
* Play `object`
  * AwayTeamScore `integer`
  * Category `string`
  * ClockMinutes `integer`
  * ClockSeconds `integer`
  * Created `string`
  * Description `string`
  * FirstAssistedByPlayerID `integer`
  * HomeTeamScore `integer`
  * Opponent `string`
  * OpponentID `integer`
  * OpposingPlayerID `integer`
  * PeriodID `integer`
  * PeriodName `string`
  * PlayID `integer`
  * PlayerID `integer`
  * PowerPlayTeam `string`
  * PowerPlayTeamID `integer`
  * SecondAssistedByPlayerID `integer`
  * Sequence `integer`
  * Team `string`
  * TeamID `integer`
  * Type `string`
  * Updated `string`

### PlayByPlay
* PlayByPlay `object`
  * Game [Game](#game)
  * Plays `array`
    * items [Play](#play)

### ScoringPlay
* ScoringPlay `object`
  * AllowedByTeamID `integer`
  * AssistedByPlayerID1 `integer`
  * AssistedByPlayerID2 `integer`
  * AwayTeamScore `integer`
  * EmptyNet `boolean`
  * HomeTeamScore `integer`
  * PeriodID `integer`
  * PowerPlay `boolean`
  * ScoredByPlayerID `integer`
  * ScoredByTeamID `integer`
  * ScoringPlayID `integer`
  * Sequence `integer`
  * ShortHanded `boolean`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`


