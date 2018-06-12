# @datafire/fantasydata_nba_v3_projections

Client library for NBA v3 Projections

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nba_v3_projections
```
```js
let fantasydata_nba_v3_projections = require('@datafire/fantasydata_nba_v3_projections').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

fantasydata_nba_v3_projections.DfsSlatesByDate({
  "format": "",
  "date": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### DfsSlatesByDate
DFS Slates by Date


```js
fantasydata_nba_v3_projections.DfsSlatesByDate({
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
fantasydata_nba_v3_projections.ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries
Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)


```js
fantasydata_nba_v3_projections.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries({
  "format": "",
  "date": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
  * playerid **required** `string`: Unique FantasyData Player ID. Example:<code>20000571</code>.

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
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamScore `integer`
  * Channel `string`
  * DateTime `string`
  * Day `string`
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * HomeTeamScore `integer`
  * IsClosed `boolean`
  * LastPlay `string`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Quarter `string`
  * Season `integer`
  * SeasonType `integer`
  * StadiumID `integer`
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Updated `string`

### PlayerGameProjection
* PlayerGameProjection `object`
  * Assists `number`
  * AssistsPercentage `number`
  * BlockedShots `number`
  * BlocksPercentage `number`
  * DateTime `string`
  * Day `string`
  * DefensiveRebounds `number`
  * DefensiveReboundsPercentage `number`
  * DoubleDoubles `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * EffectiveFieldGoalsPercentage `number`
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
  * FieldGoalsAttempted `number`
  * FieldGoalsMade `number`
  * FieldGoalsPercentage `number`
  * FreeThrowsAttempted `number`
  * FreeThrowsMade `number`
  * FreeThrowsPercentage `number`
  * GameID `integer`
  * Games `integer`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * IsClosed `boolean`
  * IsGameOver `boolean`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `number`
  * OffensiveReboundsPercentage `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PersonalFouls `number`
  * PlayerEfficiencyRating `number`
  * PlayerID `integer`
  * PlusMinus `number`
  * Points `number`
  * Position `string`
  * Rebounds `number`
  * Season `integer`
  * SeasonType `integer`
  * Seconds `integer`
  * Started `integer`
  * StatID `integer`
  * Steals `number`
  * StealsPercentage `number`
  * Team `string`
  * TeamID `integer`
  * ThreePointersAttempted `number`
  * ThreePointersMade `number`
  * ThreePointersPercentage `number`
  * TotalReboundsPercentage `number`
  * TripleDoubles `number`
  * TrueShootingAttempts `number`
  * TrueShootingPercentage `number`
  * TurnOversPercentage `number`
  * Turnovers `number`
  * TwoPointersAttempted `number`
  * TwoPointersMade `number`
  * TwoPointersPercentage `number`
  * Updated `string`
  * UsageRatePercentage `number`
  * YahooPosition `string`
  * YahooSalary `integer`


