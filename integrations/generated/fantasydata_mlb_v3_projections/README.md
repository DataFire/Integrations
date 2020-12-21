# @datafire/fantasydata_mlb_v3_projections

Client library for MLB v3 Projections

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_mlb_v3_projections
```
```js
let fantasydata_mlb_v3_projections = require('@datafire/fantasydata_mlb_v3_projections').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

MLB projections API.

## Actions

### DfsSlatesByDate
DFS Slates by Date


```js
fantasydata_mlb_v3_projections.DfsSlatesByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the slates.

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries
Projected Player Game Stats by Date (w/ Injuries, Lineups, DFS Salaries)


```js
fantasydata_mlb_v3_projections.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries({
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
fantasydata_mlb_v3_projections.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries({
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

### ProjectedPlayerSeasonStatsWithAdp
Projected Player Season Stats (with ADP)


```js
fantasydata_mlb_v3_projections.ProjectedPlayerSeasonStatsWithAdp({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season.

#### Output
* output `array`
  * items [PlayerSeasonProjection](#playerseasonprojection)



## Definitions

### DfsSlate
* DfsSlate `object`
  * DfsSlateGames `array`
    * items [DfsSlateGame](#dfsslategame)
  * DfsSlatePlayers `array`
    * items [DfsSlatePlayer](#dfsslateplayer)
  * IsMultiDaySlate `boolean`
  * NumberOfGames `integer`
  * Operator `string`
  * OperatorDay `string`
  * OperatorGameType `string`
  * OperatorName `string`
  * OperatorSlateID `integer`
  * OperatorStartTime `string`
  * RemovedByOperator `boolean`
  * SlateID `integer`

### DfsSlateGame
* DfsSlateGame `object`
  * Game [Game](#game)
  * GameID `integer`
  * OperatorGameID `integer`
  * RemovedByOperator `boolean`
  * SlateGameID `integer`
  * SlateID `integer`

### DfsSlatePlayer
* DfsSlatePlayer `object`
  * OperatorPlayerID `string`
  * OperatorPlayerName `string`
  * OperatorPosition `string`
  * OperatorRosterSlots `array`
    * items `string`
  * OperatorSalary `integer`
  * OperatorSlatePlayerID `string`
  * PlayerGameProjectionStatID `integer`
  * PlayerID `integer`
  * RemovedByOperator `boolean`
  * SlateGameID `integer`
  * SlateID `integer`
  * SlatePlayerID `integer`

### Game
* Game `object`
  * Attendance `integer`
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
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
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
  * InningHalf `string`
  * IsClosed `boolean`
  * LastPlay `string`
  * LosingPitcher `string`
  * LosingPitcherID `integer`
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

### PlayerSeasonProjection
* PlayerSeasonProjection `object`
  * AtBats `number`
  * AverageDraftPosition `number`
  * BallsInPlay `number`
  * BattingAverage `number`
  * BattingAverageOnBallsInPlay `number`
  * BattingOrder `integer`
  * BattingOrderConfirmed `boolean`
  * CaughtStealing `number`
  * DoublePlays `number`
  * Doubles `number`
  * EarnedRunAverage `number`
  * Errors `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * FieldingIndependentPitching `number`
  * FlyOuts `number`
  * Games `integer`
  * GlobalTeamID `integer`
  * GrandSlams `number`
  * GroundIntoDoublePlay `number`
  * GroundOuts `number`
  * HitByPitch `number`
  * Hits `number`
  * HomeRuns `number`
  * InningsPitchedDecimal `number`
  * InningsPitchedFull `number`
  * InningsPitchedOuts `number`
  * IntentionalWalks `number`
  * IsolatedPower `number`
  * LeftOnBase `number`
  * LineOuts `number`
  * Losses `number`
  * Name `string`
  * OnBasePercentage `number`
  * OnBasePlusSlugging `number`
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


