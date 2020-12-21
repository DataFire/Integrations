# @datafire/sportsdata_nhl_v3_projections

Client library for NHL v3 Projections

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_nhl_v3_projections
```
```js
let sportsdata_nhl_v3_projections = require('@datafire/sportsdata_nhl_v3_projections').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### DfsSlatesByDate
DFS Slates by Date


```js
sportsdata_nhl_v3_projections.DfsSlatesByDate({
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
  * items [DfsSlate](#dfsslate)

### ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries
Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)


```js
sportsdata_nhl_v3_projections.ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries({
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

### ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries
Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)


```js
sportsdata_nhl_v3_projections.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries({
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
* output [PlayerGameProjection](#playergameprojection)



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
  * SalaryCap `integer`
  * SlateID `integer`
  * SlateRosterSlots `array`
    * items `string`

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
  * Team `string`
  * TeamID `integer`

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

### PlayerGameProjection
* PlayerGameProjection `object`
  * Assists `number`
  * BenchPenaltyMinutes `number`
  * Blocks `number`
  * DateTime `string`
  * Day `string`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * EmptyNetGoals `number`
  * FaceoffsLost `number`
  * FaceoffsWon `number`
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
  * GameID `integer`
  * Games `integer`
  * Giveaways `number`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * Goals `number`
  * GoaltendingGoalsAgainst `number`
  * GoaltendingLosses `number`
  * GoaltendingMinutes `integer`
  * GoaltendingOvertimeLosses `number`
  * GoaltendingSaves `number`
  * GoaltendingSeconds `integer`
  * GoaltendingShotsAgainst `number`
  * GoaltendingShutouts `number`
  * GoaltendingWins `number`
  * HatTricks `number`
  * Hits `number`
  * HomeOrAway `string`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * IsGameOver `boolean`
  * Minutes `integer`
  * Name `string`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PenaltyMinutes `number`
  * PlayerID `integer`
  * PlusMinus `number`
  * Position `string`
  * PowerPlayAssists `number`
  * PowerPlayGoals `number`
  * Season `integer`
  * SeasonType `integer`
  * Seconds `integer`
  * Shifts `number`
  * ShootoutGoals `number`
  * ShortHandedAssists `number`
  * ShortHandedGoals `number`
  * ShotsOnGoal `number`
  * Started `integer`
  * StatID `integer`
  * Takeaways `number`
  * Team `string`
  * TeamID `integer`
  * Updated `string`
  * YahooPosition `string`
  * YahooSalary `integer`

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


