# @datafire/sportsdata_soccer_v3_projections

Client library for Soccer v3 Projections

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_soccer_v3_projections
```
```js
let sportsdata_soccer_v3_projections = require('@datafire/sportsdata_soccer_v3_projections').create({
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
Dfs Slates By Date


```js
sportsdata_soccer_v3_projections.DfsSlatesByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### ProjectedPlayerGameStatsByCompetitionWDfsSalaries
Projected Player Game Stats by Competition (w/ DFS Salaries)


```js
sportsdata_soccer_v3_projections.ProjectedPlayerGameStatsByCompetitionWDfsSalaries({
  "format": "",
  "competition": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competition **required** `string`: An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByDateWDfsSalaries
Projected Player Game Stats by Date (w/ DFS Salaries)


```js
sportsdata_soccer_v3_projections.ProjectedPlayerGameStatsByDateWDfsSalaries({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByPlayerWDfsSalaries
Projected Player Game Stats by Player (w/ DFS Salaries)


```js
sportsdata_soccer_v3_projections.ProjectedPlayerGameStatsByPlayerWDfsSalaries({
  "format": "",
  "date": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### UpcomingDfsSlatesByCompetition
Upcoming Dfs Slates By Competition


```js
sportsdata_soccer_v3_projections.UpcomingDfsSlatesByCompetition({
  "format": "",
  "competitionId": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competitionId **required** `string`: The Competition Id.

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)



## Definitions

### DfsSlate
* DfsSlate `object`
  * CompetitionId `integer`
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
  * AwayTeamCountryCode `string`
  * AwayTeamFormation `string`
  * AwayTeamId `integer`
  * AwayTeamKey `string`
  * AwayTeamMoneyLine `integer`
  * AwayTeamName `string`
  * AwayTeamPointSpreadPayout `integer`
  * AwayTeamScore `integer`
  * AwayTeamScoreExtraTime `integer`
  * AwayTeamScorePenalty `integer`
  * AwayTeamScorePeriod1 `integer`
  * AwayTeamScorePeriod2 `integer`
  * Clock `integer`
  * ClockDisplay `string`
  * ClockExtra `integer`
  * DateTime `string`
  * Day `string`
  * DrawMoneyLine `integer`
  * GameId `integer`
  * GlobalAwayTeamId `integer`
  * GlobalGameId `integer`
  * GlobalHomeTeamId `integer`
  * Group `string`
  * HomeTeamCountryCode `string`
  * HomeTeamFormation `string`
  * HomeTeamId `integer`
  * HomeTeamKey `string`
  * HomeTeamMoneyLine `integer`
  * HomeTeamName `string`
  * HomeTeamPointSpreadPayout `integer`
  * HomeTeamScore `integer`
  * HomeTeamScoreExtraTime `integer`
  * HomeTeamScorePenalty `integer`
  * HomeTeamScorePeriod1 `integer`
  * HomeTeamScorePeriod2 `integer`
  * IsClosed `boolean`
  * OverPayout `integer`
  * OverUnder `number`
  * Period `string`
  * PlayoffAggregateScore [PlayoffAggregateScore](#playoffaggregatescore)
  * PointSpread `number`
  * RoundId `integer`
  * Season `integer`
  * SeasonType `integer`
  * Status `string`
  * UnderPayout `integer`
  * Updated `string`
  * UpdatedUtc `string`
  * VenueId `integer`
  * VenueType `string`
  * Week `integer`
  * Winner `string`

### PlayerGameProjection
* PlayerGameProjection `object`
  * Assists `number`
  * BlockedShots `number`
  * Captain `boolean`
  * CornersWon `number`
  * Crosses `number`
  * DateTime `string`
  * Day `string`
  * DefenderCleanSheets `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsMondogoal `number`
  * FantasyPointsYahoo `number`
  * Fouled `number`
  * Fouls `number`
  * GameId `integer`
  * Games `integer`
  * GlobalGameId `integer`
  * GlobalOpponentId `integer`
  * GlobalTeamId `integer`
  * GoalkeeperCleanSheets `number`
  * GoalkeeperGoalsAgainst `number`
  * GoalkeeperSaves `number`
  * GoalkeeperSingleGoalAgainst `number`
  * GoalkeeperWins `number`
  * Goals `number`
  * HomeOrAway `string`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * Interceptions `number`
  * IsGameOver `boolean`
  * Jersey `integer`
  * LastManTackle `number`
  * Minutes `number`
  * MondogoalPosition `string`
  * MondogoalSalary `integer`
  * Name `string`
  * Offsides `number`
  * Opponent `string`
  * OpponentId `integer`
  * OpponentScore `number`
  * OwnGoals `number`
  * Passes `number`
  * PassesCompleted `number`
  * PenaltiesConceded `number`
  * PenaltiesWon `number`
  * PenaltyKickGoals `number`
  * PenaltyKickMisses `number`
  * PenaltyKickSaves `number`
  * PlayerId `integer`
  * Position `string`
  * PositionCategory `string`
  * RedCards `number`
  * RoundId `integer`
  * Score `number`
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * Shots `number`
  * ShotsOnGoal `number`
  * Started `integer`
  * StatId `integer`
  * Suspension `boolean`
  * SuspensionReason `string`
  * TacklesWon `number`
  * Team `string`
  * TeamId `integer`
  * Touches `number`
  * Updated `string`
  * UpdatedUtc `string`
  * YahooPosition `string`
  * YahooSalary `integer`
  * YellowCards `number`
  * YellowRedCards `number`

### PlayoffAggregateScore
* PlayoffAggregateScore `object`
  * Created `string`
  * TeamA_AggregateScore `integer`
  * TeamA_Id `integer`
  * TeamB_AggregateScore `integer`
  * TeamB_Id `integer`
  * Updated `string`
  * WinningTeamId `integer`


