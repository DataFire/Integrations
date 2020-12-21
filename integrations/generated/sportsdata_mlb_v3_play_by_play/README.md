# @datafire/sportsdata_mlb_v3_play_by_play

Client library for MLB v3 Play-by-Play

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_mlb_v3_play_by_play
```
```js
let sportsdata_mlb_v3_play_by_play = require('@datafire/sportsdata_mlb_v3_play_by_play').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

MLB play-by-play API.

## Actions

### PlayByPlay
Play By Play


```js
sportsdata_mlb_v3_play_by_play.PlayByPlay({
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
sportsdata_mlb_v3_play_by_play.PlayByPlayDelta({
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
  * AwayTeamErrors `integer`
  * AwayTeamHits `integer`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamProbablePitcherID `integer`
  * AwayTeamRuns `integer`
  * AwayTeamStartingPitcher `string`
  * AwayTeamStartingPitcherID `integer`
  * Balls `integer`
  * Channel `string`
  * CurrentHitter `string`
  * CurrentHitterID `integer`
  * CurrentHittingTeamID `integer`
  * CurrentPitcher `string`
  * CurrentPitcherID `integer`
  * CurrentPitchingTeamID `integer`
  * DateTime `string`
  * Day `string`
  * DueUpHitterID1 `integer`
  * DueUpHitterID2 `integer`
  * DueUpHitterID3 `integer`
  * ForecastDescription `string`
  * ForecastTempHigh `integer`
  * ForecastTempLow `integer`
  * ForecastWindChill `integer`
  * ForecastWindDirection `integer`
  * ForecastWindSpeed `integer`
  * GameEndDateTime `string`
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeRotationNumber `integer`
  * HomeTeam `string`
  * HomeTeamErrors `integer`
  * HomeTeamHits `integer`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * HomeTeamProbablePitcherID `integer`
  * HomeTeamRuns `integer`
  * HomeTeamStartingPitcher `string`
  * HomeTeamStartingPitcherID `integer`
  * Inning `integer`
  * InningDescription `string`
  * InningHalf `string`
  * Innings `array`
    * items [Inning](#inning)
  * IsClosed `boolean`
  * LastPlay `string`
  * LosingPitcher `string`
  * LosingPitcherID `integer`
  * NeutralVenue `boolean`
  * Outs `integer`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * RescheduledFromGameID `integer`
  * RescheduledGameID `integer`
  * RunnerOnFirst `boolean`
  * RunnerOnSecond `boolean`
  * RunnerOnThird `boolean`
  * SavingPitcher `string`
  * SavingPitcherID `integer`
  * Season `integer`
  * SeasonType `integer`
  * StadiumID `integer`
  * Status `string`
  * Strikes `integer`
  * Updated `string`
  * WinningPitcher `string`
  * WinningPitcherID `integer`

### Inning
* Inning `object`
  * AwayTeamRuns `integer`
  * GameID `integer`
  * HomeTeamRuns `integer`
  * InningID `integer`
  * InningNumber `integer`

### Pitch
* Pitch `object`
  * Ball `boolean`
  * BallsBeforePitch `integer`
  * Foul `boolean`
  * HitterID `integer`
  * Looking `boolean`
  * Outs `integer`
  * PitchID `integer`
  * PitchNumberThisAtBat `integer`
  * PitcherID `integer`
  * PlayID `integer`
  * Strike `boolean`
  * StrikesBeforePitch `integer`
  * Swinging `boolean`

### Play
* Play `object`
  * AtBat `boolean`
  * AwayTeamRuns `integer`
  * Balls `integer`
  * Description `string`
  * Error `boolean`
  * Hit `boolean`
  * HitterBatHand `string`
  * HitterID `integer`
  * HitterName `string`
  * HitterPosition `string`
  * HitterTeamID `integer`
  * HomeTeamRuns `integer`
  * InningBatterNumber `integer`
  * InningHalf `string`
  * InningID `integer`
  * InningNumber `integer`
  * NumberOfOutsOnPlay `integer`
  * Out `boolean`
  * Outs `integer`
  * PitchNumberThisAtBat `integer`
  * PitcherID `integer`
  * PitcherName `string`
  * PitcherTeamID `integer`
  * PitcherThrowHand `string`
  * Pitches `array`
    * items [Pitch](#pitch)
  * PlayID `integer`
  * PlayNumber `integer`
  * Result `string`
  * Runner1ID `integer`
  * Runner2ID `integer`
  * Runner3ID `integer`
  * RunsBattedIn `integer`
  * Sacrifice `boolean`
  * Strikeout `boolean`
  * Strikes `integer`
  * Updated `string`
  * Walk `boolean`

### PlayByPlay
* PlayByPlay `object`
  * Game [Game](#game)
  * Plays `array`
    * items [Play](#play)


