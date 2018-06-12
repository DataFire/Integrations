# @datafire/fantasydata_nfl_v3_play_by_play

Client library for NFL v3 Play-by-Play

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nfl_v3_play_by_play
```
```js
let fantasydata_nfl_v3_play_by_play = require('@datafire/fantasydata_nfl_v3_play_by_play').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

fantasydata_nfl_v3_play_by_play.PlayByPlay({
  "format": "",
  "season": "",
  "week": "",
  "hometeam": ""
}).then(data => {
  console.log(data);
});
```

## Description

NFL play-by-play API.

## Actions

### PlayByPlay
Play By Play


```js
fantasydata_nfl_v3_play_by_play.PlayByPlay({
  "format": "",
  "season": "",
  "week": "",
  "hometeam": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
  * hometeam **required** `string`: Abbreviation of the home team. Example: <code>WAS</code>.

#### Output
* output [PlayByPlay](#playbyplay)

### PlayByPlayDelta
Play By Play Delta


```js
fantasydata_nfl_v3_play_by_play.PlayByPlayDelta({
  "format": "",
  "season": "",
  "week": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>

#### Output
* output `array`
  * items [PlayByPlay](#playbyplay)

### PlayByPlaySimulation
Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.


```js
fantasydata_nfl_v3_play_by_play.PlayByPlaySimulation({
  "format": "",
  "numberofplays": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * numberofplays **required** `string`: The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.

#### Output
* output `array`
  * items [PlayByPlay](#playbyplay)



## Definitions

### Play
* Play `object`
  * Created `string`
  * Description `string`
  * Distance `integer`
  * Down `integer`
  * IsScoringPlay `boolean`
  * Opponent `string`
  * PlayID `integer`
  * PlayStats `array`
    * items [PlayStat](#playstat)
  * PlayTime `string`
  * QuarterID `integer`
  * QuarterName `string`
  * Sequence `integer`
  * Team `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Type `string`
  * Updated `string`
  * YardLine `integer`
  * YardLineTerritory `string`
  * YardsGained `integer`
  * YardsToEndZone `integer`

### PlayByPlay
* PlayByPlay `object`
  * Plays `array`
    * items [Play](#play)
  * Quarters `array`
    * items [Quarter](#quarter)
  * Score [Score](#score)

### PlayStat
* PlayStat `object`
  * AssistedTackles `integer`
  * BlockedKickReturnTouchdowns `integer`
  * BlockedKickReturnYards `integer`
  * BlockedKickReturns `integer`
  * BlockedKicks `integer`
  * Created `string`
  * Direction `string`
  * ExtraPointsAttempted `integer`
  * ExtraPointsHadBlocked `integer`
  * ExtraPointsMade `integer`
  * FieldGoalReturnTouchdowns `integer`
  * FieldGoalReturnYards `integer`
  * FieldGoalReturns `integer`
  * FieldGoalsAttempted `integer`
  * FieldGoalsHadBlocked `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsYards `integer`
  * FumbleReturnTouchdowns `integer`
  * FumbleReturnYards `integer`
  * Fumbles `integer`
  * FumblesForced `integer`
  * FumblesLost `integer`
  * FumblesRecovered `integer`
  * HomeOrAway `string`
  * InterceptionReturnTouchdowns `integer`
  * InterceptionReturnYards `integer`
  * Interceptions `integer`
  * KickReturnTouchdowns `integer`
  * KickReturnYards `integer`
  * KickReturns `integer`
  * KickoffTouchbacks `integer`
  * KickoffYards `integer`
  * Kickoffs `integer`
  * Name `string`
  * Opponent `string`
  * PassesDefended `integer`
  * PassingAttempts `integer`
  * PassingCompletions `integer`
  * PassingInterceptions `integer`
  * PassingSackYards `integer`
  * PassingSacks `integer`
  * PassingTouchdowns `integer`
  * PassingYards `integer`
  * Penalties `integer`
  * PenaltyYards `integer`
  * PlayID `integer`
  * PlayStatID `integer`
  * PlayerID `integer`
  * PuntReturnTouchdowns `integer`
  * PuntReturnYards `integer`
  * PuntReturns `integer`
  * PuntTouchbacks `integer`
  * PuntYards `integer`
  * Punts `integer`
  * PuntsHadBlocked `integer`
  * ReceivingTargets `integer`
  * ReceivingTouchdowns `integer`
  * ReceivingYards `integer`
  * Receptions `integer`
  * RushingAttempts `integer`
  * RushingTouchdowns `integer`
  * RushingYards `integer`
  * SackYards `number`
  * Sacks `number`
  * Safeties `integer`
  * Sequence `integer`
  * SoloTackles `integer`
  * TacklesForLoss `integer`
  * Team `string`
  * TwoPointConversionAttempts `integer`
  * TwoPointConversionPasses `integer`
  * TwoPointConversionReceptions `integer`
  * TwoPointConversionReturns `integer`
  * TwoPointConversionRuns `integer`
  * Updated `string`

### Quarter
* Quarter `object`
  * AwayTeamScore `integer`
  * Created `string`
  * Description `string`
  * HomeTeamScore `integer`
  * Name `string`
  * Number `integer`
  * QuarterID `integer`
  * ScoreID `integer`
  * Updated `string`

### Score
* Score `object`
  * AwayScore `integer`
  * AwayScoreOvertime `integer`
  * AwayScoreQuarter1 `integer`
  * AwayScoreQuarter2 `integer`
  * AwayScoreQuarter3 `integer`
  * AwayScoreQuarter4 `integer`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * Canceled `boolean`
  * Channel `string`
  * Closed `boolean`
  * Date `string`
  * DateTime `string`
  * Day `string`
  * Distance `string`
  * Down `integer`
  * DownAndDistance `string`
  * ForecastDescription `string`
  * ForecastTempHigh `integer`
  * ForecastTempLow `integer`
  * ForecastWindChill `integer`
  * ForecastWindSpeed `integer`
  * GameKey `string`
  * GeoLat `number`
  * GeoLong `number`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * Has1stQuarterStarted `boolean`
  * Has2ndQuarterStarted `boolean`
  * Has3rdQuarterStarted `boolean`
  * Has4thQuarterStarted `boolean`
  * HasStarted `boolean`
  * HomeScore `integer`
  * HomeScoreOvertime `integer`
  * HomeScoreQuarter1 `integer`
  * HomeScoreQuarter2 `integer`
  * HomeScoreQuarter3 `integer`
  * HomeScoreQuarter4 `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * IsInProgress `boolean`
  * IsOver `boolean`
  * IsOvertime `boolean`
  * LastPlay `string`
  * LastUpdated `string`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Possession `string`
  * Quarter `string`
  * QuarterDescription `string`
  * RedZone `string`
  * ScoreID `integer`
  * Season `integer`
  * SeasonType `integer`
  * StadiumDetails [Stadium](#stadium)
  * StadiumID `integer`
  * TimeRemaining `string`
  * Week `integer`
  * YardLine `integer`
  * YardLineTerritory `string`

### Stadium
* Stadium `object`
  * Capacity `integer`
  * City `string`
  * Country `string`
  * GeoLat `number`
  * GeoLong `number`
  * Name `string`
  * PlayingSurface `string`
  * StadiumID `integer`
  * State `string`


