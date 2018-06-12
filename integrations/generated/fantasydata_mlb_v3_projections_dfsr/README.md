# @datafire/fantasydata_mlb_v3_projections_dfsr

Client library for MLB v3 Projections DFSR

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_mlb_v3_projections_dfsr
```
```js
let fantasydata_mlb_v3_projections_dfsr = require('@datafire/fantasydata_mlb_v3_projections_dfsr').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

fantasydata_mlb_v3_projections_dfsr.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries({
  "format": "",
  "date": ""
}).then(data => {
  console.log(data);
});
```

## Description

MLB projections API from DailyFantasySportsRankings.com.

## Actions

### ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries
Projected Player Game Stats by Date (w/ Injuries, Lineups, DFS Salaries)


```js
fantasydata_mlb_v3_projections_dfsr.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries
Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)


```js
fantasydata_mlb_v3_projections_dfsr.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries({
  "format": "",
  "date": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)



## Definitions

### PlayerGameProjection
* PlayerGameProjection `object`
  * AtBats `number`
  * BallsInPlay `number`
  * BattingAverage `number`
  * BattingAverageOnBallsInPlay `number`
  * BattingOrder `integer`
  * BattingOrderConfirmed `boolean`
  * CaughtStealing `number`
  * DateTime `string`
  * Day `string`
  * DoublePlays `number`
  * Doubles `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * EarnedRunAverage `number`
  * Errors `number`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyDraftPosition `string`
  * FantasyDraftSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * FieldingIndependentPitching `number`
  * FlyOuts `number`
  * GameID `integer`
  * Games `integer`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * GrandSlams `number`
  * GroundIntoDoublePlay `number`
  * GroundOuts `number`
  * HitByPitch `number`
  * Hits `number`
  * HomeOrAway `string`
  * HomeRuns `number`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * InningsPitchedDecimal `number`
  * InningsPitchedFull `number`
  * InningsPitchedOuts `number`
  * IntentionalWalks `number`
  * IsGameOver `boolean`
  * IsolatedPower `number`
  * LeftOnBase `number`
  * LineOuts `number`
  * Losses `number`
  * Name `string`
  * OnBasePercentage `number`
  * OnBasePlusSlugging `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * Outs `number`
  * PitchesSeen `number`
  * PitchesThrown `number`
  * PitchesThrownStrikes `number`
  * PitchingBallsInPlay `number`
  * PitchingBattingAverageAgainst `number`
  * PitchingBattingAverageOnBallsInPlay `number`
  * PitchingBlownSaves `number`
  * PitchingCatchersInterference `number`
  * PitchingCompleteGames `number`
  * PitchingDoublePlays `number`
  * PitchingDoubles `number`
  * PitchingEarnedRuns `number`
  * PitchingFlyOuts `number`
  * PitchingGrandSlams `number`
  * PitchingGroundIntoDoublePlay `number`
  * PitchingGroundOuts `number`
  * PitchingHitByPitch `number`
  * PitchingHits `number`
  * PitchingHolds `number`
  * PitchingHomeRuns `number`
  * PitchingInningStarted `integer`
  * PitchingIntentionalWalks `number`
  * PitchingLineOuts `number`
  * PitchingNoHitters `number`
  * PitchingOnBasePercentage `number`
  * PitchingOnBasePlusSlugging `number`
  * PitchingPerfectGames `number`
  * PitchingPlateAppearances `number`
  * PitchingPopOuts `number`
  * PitchingQualityStarts `number`
  * PitchingReachedOnError `number`
  * PitchingRuns `number`
  * PitchingSacrificeFlies `number`
  * PitchingSacrifices `number`
  * PitchingShutOuts `number`
  * PitchingSingles `number`
  * PitchingSluggingPercentage `number`
  * PitchingStrikeouts `number`
  * PitchingStrikeoutsPerNineInnings `number`
  * PitchingTotalBases `number`
  * PitchingTriples `number`
  * PitchingWalks `number`
  * PitchingWalksPerNineInnings `number`
  * PitchingWeightedOnBasePercentage `number`
  * PlateAppearances `number`
  * PlayerID `integer`
  * PopOuts `number`
  * Position `string`
  * PositionCategory `string`
  * ReachedOnError `number`
  * Runs `number`
  * RunsBattedIn `number`
  * SacrificeFlies `number`
  * Sacrifices `number`
  * Saves `number`
  * Season `integer`
  * SeasonType `integer`
  * Singles `number`
  * SluggingPercentage `number`
  * Started `integer`
  * StatID `integer`
  * StolenBases `number`
  * Strikeouts `number`
  * SubstituteBattingOrder `integer`
  * SubstituteBattingOrderSequence `integer`
  * Team `string`
  * TeamID `integer`
  * TotalBases `number`
  * TotalOutsPitched `number`
  * Triples `number`
  * Updated `string`
  * Walks `number`
  * WalksHitsPerInningsPitched `number`
  * WeightedOnBasePercentage `number`
  * Wins `number`
  * YahooPosition `string`
  * YahooSalary `integer`


