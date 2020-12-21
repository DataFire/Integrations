# @datafire/fantasydata_nfl_v3_projections_dfsr

Client library for NFL v3 Projections DFSR

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nfl_v3_projections_dfsr
```
```js
let fantasydata_nfl_v3_projections_dfsr = require('@datafire/fantasydata_nfl_v3_projections_dfsr').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NFL v3 Projections DFSR

## Actions

### DfsrProjectedFantasyDefenseGameStats
DFSR Projected Fantasy Defense Game Stats


```js
fantasydata_nfl_v3_projections_dfsr.DfsrProjectedFantasyDefenseGameStats({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [FantasyDefenseGameProjectionDfsr](#fantasydefensegameprojectiondfsr)

### DfsrProjectedPlayerGameStats
DFSR Projected Player Game Stats


```js
fantasydata_nfl_v3_projections_dfsr.DfsrProjectedPlayerGameStats({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [PlayerGameProjectionDfsr](#playergameprojectiondfsr)



## Definitions

### FantasyDefenseGameProjectionDfsr
* FantasyDefenseGameProjectionDfsr `object`
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

### PlayerGameProjectionDfsr
* PlayerGameProjectionDfsr `object`
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


