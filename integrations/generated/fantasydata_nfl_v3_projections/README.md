# @datafire/fantasydata_nfl_v3_projections

Client library for NFL v3 Projections

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nfl_v3_projections
```
```js
let fantasydata_nfl_v3_projections = require('@datafire/fantasydata_nfl_v3_projections').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NFL projected stats API.

## Actions

### DfsSlatesByDate
DFS Slates by Date


```js
fantasydata_nfl_v3_projections.DfsSlatesByDate({
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

### DfsSlatesByWeek
DFS Slates by Week


```js
fantasydata_nfl_v3_projections.DfsSlatesByWeek({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### ProjectedFantasyDefenseGameStatsWDfsSalaries
Projected Fantasy Defense Game Stats (w/ DFS Salaries)


```js
fantasydata_nfl_v3_projections.ProjectedFantasyDefenseGameStatsWDfsSalaries({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [FantasyDefenseGameProjection](#fantasydefensegameprojection)

### ProjectedFantasyDefenseSeasonStatsWByeWeekAdp
Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)


```js
fantasydata_nfl_v3_projections.ProjectedFantasyDefenseSeasonStatsWByeWeekAdp({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [FantasyDefenseSeasonProjection](#fantasydefenseseasonprojection)

### ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries
Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)


```js
fantasydata_nfl_v3_projections.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries({
  "format": "",
  "season": "",
  "week": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.

#### Output
* output [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries
Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)


```js
fantasydata_nfl_v3_projections.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries({
  "format": "",
  "season": "",
  "week": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries
Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)


```js
fantasydata_nfl_v3_projections.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerSeasonStatsWByeWeekAdp
Projected Player Season Stats (w/ Bye Week, ADP)


```js
fantasydata_nfl_v3_projections.ProjectedPlayerSeasonStatsWByeWeekAdp({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [PlayerSeasonProjection](#playerseasonprojection)

### ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp
Projected Player Season Stats by Player (w/ Bye Week, ADP)


```js
fantasydata_nfl_v3_projections.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp({
  "format": "",
  "season": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.

#### Output
* output [PlayerSeasonProjection](#playerseasonprojection)

### ProjectedPlayerSeasonStatsByTeamWByeWeekAdp
Projected Player Season Stats by Team (w/ Bye Week, ADP)


```js
fantasydata_nfl_v3_projections.ProjectedPlayerSeasonStatsByTeamWByeWeekAdp({
  "format": "",
  "season": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

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
  * GameID `integer`
  * OperatorGameID `integer`
  * RemovedByOperator `boolean`
  * SlateGameID `integer`
  * SlateID `integer`

### DfsSlatePlayer
* DfsSlatePlayer `object`
  * FantasyDefenseProjectionStatID `integer`
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

### FantasyDefenseGameProjection
* FantasyDefenseGameProjection `object`
  * AssistedTackles `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * Date `string`
  * DateTime `string`
  * Day `string`
  * DefensiveTouchdowns `number`
  * DraftKingsFantasyPointsAllowed `number`
  * DraftKingsKickerFantasyPointsAllowed `number`
  * DraftKingsPosition `string`
  * DraftKingsQuarterbackFantasyPointsAllowed `number`
  * DraftKingsRunningbackFantasyPointsAllowed `number`
  * DraftKingsSalary `integer`
  * DraftKingsTightEndFantasyPointsAllowed `number`
  * DraftKingsWideReceiverFantasyPointsAllowed `number`
  * FanDuelFantasyPointsAllowed `number`
  * FanDuelKickerFantasyPointsAllowed `number`
  * FanDuelPosition `string`
  * FanDuelQuarterbackFantasyPointsAllowed `number`
  * FanDuelRunningbackFantasyPointsAllowed `number`
  * FanDuelSalary `integer`
  * FanDuelTightEndFantasyPointsAllowed `number`
  * FanDuelWideReceiverFantasyPointsAllowed `number`
  * FantasyDataSalary `integer`
  * FantasyDefenseID `integer`
  * FantasyDraftFantasyPointsAllowed `number`
  * FantasyDraftKickerFantasyPointsAllowed `number`
  * FantasyDraftPosition `string`
  * FantasyDraftQuarterbackFantasyPointsAllowed `number`
  * FantasyDraftRunningbackFantasyPointsAllowed `number`
  * FantasyDraftSalary `integer`
  * FantasyDraftTightEndFantasyPointsAllowed `number`
  * FantasyDraftWideReceiverFantasyPointsAllowed `number`
  * FantasyPoints `number`
  * FantasyPointsAllowed `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FourthDownAttempts `number`
  * FourthDownConversions `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * FumblesForced `number`
  * FumblesRecovered `number`
  * GameKey `string`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * IsGameOver `boolean`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturns `number`
  * KickerFantasyPointsAllowed `number`
  * OffensiveYardsAllowed `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PassesDefended `number`
  * PlayerID `integer`
  * PointsAllowed `number`
  * PointsAllowedByDefenseSpecialTeams `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturns `number`
  * QuarterbackFantasyPointsAllowed `number`
  * QuarterbackHits `number`
  * RunningbackFantasyPointsAllowed `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * ScoreID `integer`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `number`
  * SpecialTeamsTouchdowns `number`
  * Stadium `string`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * ThirdDownAttempts `number`
  * ThirdDownConversions `number`
  * TightEndFantasyPointsAllowed `number`
  * TouchdownsScored `number`
  * TwoPointConversionReturns `number`
  * VictivSalary `integer`
  * Week `integer`
  * WideReceiverFantasyPointsAllowed `number`
  * WindSpeed `integer`
  * YahooFantasyPointsAllowed `number`
  * YahooKickerFantasyPointsAllowed `number`
  * YahooPosition `string`
  * YahooQuarterbackFantasyPointsAllowed `number`
  * YahooRunningbackFantasyPointsAllowed `number`
  * YahooSalary `integer`
  * YahooTightEndFantasyPointsAllowed `number`
  * YahooWideReceiverFantasyPointsAllowed `number`

### FantasyDefenseSeasonProjection
* FantasyDefenseSeasonProjection `object`
  * AssistedTackles `number`
  * AuctionValue `number`
  * AuctionValuePPR `number`
  * AverageDraftPosition `number`
  * AverageDraftPositionPPR `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DefensiveTouchdowns `number`
  * DraftKingsFantasyPointsAllowed `number`
  * DraftKingsKickerFantasyPointsAllowed `number`
  * DraftKingsQuarterbackFantasyPointsAllowed `number`
  * DraftKingsRunningbackFantasyPointsAllowed `number`
  * DraftKingsTightEndFantasyPointsAllowed `number`
  * DraftKingsWideReceiverFantasyPointsAllowed `number`
  * FanDuelFantasyPointsAllowed `number`
  * FanDuelKickerFantasyPointsAllowed `number`
  * FanDuelQuarterbackFantasyPointsAllowed `number`
  * FanDuelRunningbackFantasyPointsAllowed `number`
  * FanDuelTightEndFantasyPointsAllowed `number`
  * FanDuelWideReceiverFantasyPointsAllowed `number`
  * FantasyDraftFantasyPointsAllowed `number`
  * FantasyDraftKickerFantasyPointsAllowed `number`
  * FantasyDraftQuarterbackFantasyPointsAllowed `number`
  * FantasyDraftRunningbackFantasyPointsAllowed `number`
  * FantasyDraftTightEndFantasyPointsAllowed `number`
  * FantasyDraftWideReceiverFantasyPointsAllowed `number`
  * FantasyPoints `number`
  * FantasyPointsAllowed `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FourthDownAttempts `number`
  * FourthDownConversions `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * FumblesForced `number`
  * FumblesRecovered `number`
  * Games `integer`
  * GlobalTeamID `integer`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturns `number`
  * KickerFantasyPointsAllowed `number`
  * OffensiveYardsAllowed `number`
  * PassesDefended `number`
  * PlayerID `integer`
  * PointsAllowed `number`
  * PointsAllowedByDefenseSpecialTeams `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturns `number`
  * QuarterbackFantasyPointsAllowed `number`
  * QuarterbackHits `number`
  * RunningbackFantasyPointsAllowed `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `number`
  * SpecialTeamsTouchdowns `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * ThirdDownAttempts `number`
  * ThirdDownConversions `number`
  * TightEndFantasyPointsAllowed `number`
  * TouchdownsScored `number`
  * TwoPointConversionReturns `number`
  * WideReceiverFantasyPointsAllowed `number`
  * WindSpeed `integer`
  * YahooFantasyPointsAllowed `number`
  * YahooKickerFantasyPointsAllowed `number`
  * YahooQuarterbackFantasyPointsAllowed `number`
  * YahooRunningbackFantasyPointsAllowed `number`
  * YahooTightEndFantasyPointsAllowed `number`
  * YahooWideReceiverFantasyPointsAllowed `number`

### PlayerGameProjection
* PlayerGameProjection `object`
  * Activated `integer`
  * AssistedTackles `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DateTime `string`
  * Day `string`
  * DeclaredInactive `boolean`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyDraftPosition `string`
  * FantasyDraftSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GameDate `string`
  * GameKey `string`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * Humidity `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryPractice `string`
  * InjuryPracticeDescription `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * IsGameOver `boolean`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * PlayingSurface `string`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoreID `integer`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Stadium `string`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * VictivSalary `integer`
  * Week `integer`
  * WindSpeed `integer`
  * YahooPosition `string`
  * YahooSalary `integer`

### PlayerSeasonProjection
* PlayerSeasonProjection `object`
  * Activated `integer`
  * AssistedTackles `number`
  * AuctionValue `number`
  * AuctionValuePPR `number`
  * AverageDraftPosition `number`
  * AverageDraftPositionPPR `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GlobalTeamID `integer`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerID `integer`
  * PlayerSeasonID `integer`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * WindSpeed `integer`

### ScoringDetail
* ScoringDetail `object`
  * GameKey `string`
  * Length `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * ScoreID `integer`
  * ScoringDetailID `integer`
  * ScoringType `string`
  * Season `integer`
  * SeasonType `integer`
  * Team `string`
  * Week `integer`


