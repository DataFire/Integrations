# @datafire/fantasydata_golf_v2

Client library for Golf v2

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_golf_v2
```
```js
let fantasydata_golf_v2 = require('@datafire/fantasydata_golf_v2').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### DfsSlates
DFS Slates


```js
fantasydata_golf_v2.DfsSlates({
  "format": "",
  "tournamentid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * tournamentid **required** `string`: The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### Injuries
Injuries


```js
fantasydata_golf_v2.Injuries({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Injury](#injury)

### InjuriesHistorical
Injuries (Historical)


```js
fantasydata_golf_v2.InjuriesHistorical({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Injury](#injury)

### Leaderboard
Leaderboard


```js
fantasydata_golf_v2.Leaderboard({
  "format": "",
  "tournamentid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * tournamentid **required** `string`: The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.

#### Output
* output [Leaderboard](#leaderboard)

### News
News


```js
fantasydata_golf_v2.News({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [News](#news)

### NewsByDate
News by Date


```js
fantasydata_golf_v2.NewsByDate({
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
  * items [News](#news)

### NewsByPlayer
News by Player


```js
fantasydata_golf_v2.NewsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output `array`
  * items [News](#news)

### Player
Player


```js
fantasydata_golf_v2.Player({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output [Player](#player)

### PlayerSeasonStatsWWorldGolfRankings
Player Season Stats (w/ World Golf Rankings)


```js
fantasydata_golf_v2.PlayerSeasonStatsWWorldGolfRankings({
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
  * items [PlayerSeason](#playerseason)

### PlayerTournamentProjectedStatsWDraftkingsSalaries
Player Tournament Projected Stats (w/ DraftKings Salaries)


```js
fantasydata_golf_v2.PlayerTournamentProjectedStatsWDraftkingsSalaries({
  "format": "",
  "tournamentid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * tournamentid **required** `string`: The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.

#### Output
* output `array`
  * items [PlayerTournamentProjection](#playertournamentprojection)

### PlayerTournamentStatsByPlayer
Player Tournament Stats By Player


```js
fantasydata_golf_v2.PlayerTournamentStatsByPlayer({
  "format": "",
  "tournamentid": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * tournamentid **required** `string`: The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output [PlayerTournament](#playertournament)

### Players
Players


```js
fantasydata_golf_v2.Players({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### Schedule
Schedule


```js
fantasydata_golf_v2.Schedule({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Tournament](#tournament)

### ScheduleBySeason
Schedule by Season


```js
fantasydata_golf_v2.ScheduleBySeason({
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
  * items [Tournament](#tournament)



## Definitions

### DfsSlate
* DfsSlate `object`
  * DfsSlatePlayers `array`
    * items [DfsSlatePlayer](#dfsslateplayer)
  * DfsSlateTournaments `array`
    * items [DfsSlateTournament](#dfsslatetournament)
  * IsMultiDaySlate `boolean`
  * NumberOfTournaments `integer`
  * Operator `string`
  * OperatorDay `string`
  * OperatorGameType `string`
  * OperatorName `string`
  * OperatorSlateID `integer`
  * OperatorStartTime `string`
  * RemovedByOperator `boolean`
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
  * PlayerID `integer`
  * PlayerTournamentProjectionID `integer`
  * RemovedByOperator `boolean`
  * SlateID `integer`
  * SlatePlayerID `integer`
  * SlateTournamentID `integer`

### DfsSlateTournament
* DfsSlateTournament `object`
  * OperatorTournamentID `integer`
  * RemovedByOperator `boolean`
  * SlateID `integer`
  * SlateTournamentID `integer`
  * Tournament [Tournament](#tournament)
  * TournamentID `integer`

### Injury
* Injury `object`
  * Active `boolean`
  * BodyPart `string`
  * ExpectedReturn `string`
  * InjuryID `integer`
  * Name `string`
  * PlayerID `integer`
  * StartDate `string`
  * Status `string`

### Leaderboard
* Leaderboard `object`
  * Players `array`
    * items [PlayerTournament](#playertournament)
  * Tournament [Tournament](#tournament)

### News
* News `object`
  * Content `string`
  * NewsID `integer`
  * PlayerID `integer`
  * Source `string`
  * TermsOfUse `string`
  * Title `string`
  * Updated `string`
  * Url `string`

### Player
* Player `object`
  * BirthCity `string`
  * BirthDate `string`
  * BirthState `string`
  * College `string`
  * Country `string`
  * DraftKingsName `string`
  * FanDuelName `string`
  * FantasyAlarmPlayerID `integer`
  * FantasyDraftName `string`
  * FantasyDraftPlayerID `integer`
  * FirstName `string`
  * LastName `string`
  * PgaDebut `integer`
  * PgaTourPlayerID `integer`
  * PhotoUrl `string`
  * PlayerID `integer`
  * RotoWirePlayerID `integer`
  * RotoworldPlayerID `integer`
  * SportRadarPlayerID `string`
  * Swings `string`
  * Weight `integer`

### PlayerHole
* PlayerHole `object`
  * Birdie `boolean`
  * Bogey `boolean`
  * DoubleBogey `boolean`
  * DoubleEagle `boolean`
  * Eagle `boolean`
  * HoleInOne `boolean`
  * IsPar `boolean`
  * Number `integer`
  * Par `integer`
  * Score `integer`
  * ToPar `integer`
  * WorseThanDoubleBogey `boolean`

### PlayerRound
* PlayerRound `object`
  * Birdies `integer`
  * BogeyFree `boolean`
  * Bogeys `integer`
  * BounceBackCount `number`
  * ConsecutiveBirdieOrBetterCount `number`
  * Day `string`
  * DoubleBogeys `integer`
  * DoubleEagles `integer`
  * Eagles `integer`
  * HoleInOnes `integer`
  * Holes `array`
    * items [PlayerHole](#playerhole)
  * IncludesFiveOrMoreBirdiesOrBetter `boolean`
  * IncludesStreakOfFiveBirdiesOrBetter `boolean`
  * IncludesStreakOfFourBirdiesOrBetter `boolean`
  * IncludesStreakOfThreeBirdiesOrBetter `boolean`
  * LongestBirdieOrBetterStreak `number`
  * Number `integer`
  * Par `integer`
  * Pars `integer`
  * Score `integer`
  * TripleBogeys `integer`
  * WorseThanDoubleBogey `integer`
  * WorseThanTripleBogey `integer`

### PlayerSeason
* PlayerSeason `object`
  * AveragePoints `number`
  * Events `integer`
  * Name `string`
  * PlayerID `integer`
  * PlayerSeasonID `integer`
  * PointsGained `number`
  * PointsLost `number`
  * Season `integer`
  * TotalPoints `number`
  * WorldGolfRank `integer`
  * WorldGolfRankLastWeek `integer`

### PlayerTournament
* PlayerTournament `object`
  * Birdies `number`
  * BogeyFreeRounds `number`
  * Bogeys `number`
  * BounceBackCount `number`
  * ConsecutiveBirdieOrBetterCount `number`
  * Country `string`
  * DoubleBogeys `number`
  * DoubleEagles `number`
  * DraftKingsSalary `integer`
  * Eagles `number`
  * Earnings `number`
  * FanDuelSalary `integer`
  * FantasyDraftSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FedExPoints `integer`
  * HoleInOnes `number`
  * IsAlternate `boolean`
  * MadeCut `number`
  * MadeCutDidNotFinish `boolean`
  * Name `string`
  * OddsToWin `number`
  * OddsToWinDescription `string`
  * Pars `number`
  * PlayerID `integer`
  * PlayerTournamentID `integer`
  * Rank `integer`
  * Rounds `array`
    * items [PlayerRound](#playerround)
  * RoundsUnderSeventy `number`
  * RoundsWithFiveOrMoreBirdiesOrBetter  `number`
  * StreaksOfFiveBirdiesOrBetter `number`
  * StreaksOfFourBirdiesOrBetter `number`
  * StreaksOfThreeBirdiesOrBetter `number`
  * TeeTime `string`
  * TotalScore `number`
  * TotalStrokes `number`
  * TotalThrough `integer`
  * TournamentID `integer`
  * TournamentStatus `string`
  * TripleBogeys `number`
  * Win `number`
  * WorseThanDoubleBogey `number`
  * WorseThanTripleBogey `number`

### PlayerTournamentProjection
* PlayerTournamentProjection `object`
  * Birdies `number`
  * BogeyFreeRounds `number`
  * Bogeys `number`
  * BounceBackCount `number`
  * ConsecutiveBirdieOrBetterCount `number`
  * Country `string`
  * DoubleBogeys `number`
  * DoubleEagles `number`
  * DraftKingsSalary `integer`
  * Eagles `number`
  * Earnings `number`
  * FanDuelSalary `integer`
  * FantasyDraftSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FedExPoints `integer`
  * HoleInOnes `number`
  * IsAlternate `boolean`
  * MadeCut `number`
  * MadeCutDidNotFinish `boolean`
  * Name `string`
  * OddsToWin `number`
  * OddsToWinDescription `string`
  * Pars `number`
  * PlayerID `integer`
  * PlayerTournamentID `integer`
  * Rank `integer`
  * Rounds `array`
    * items [PlayerRound](#playerround)
  * RoundsUnderSeventy `number`
  * RoundsWithFiveOrMoreBirdiesOrBetter  `number`
  * StreaksOfFiveBirdiesOrBetter `number`
  * StreaksOfFourBirdiesOrBetter `number`
  * StreaksOfThreeBirdiesOrBetter `number`
  * TeeTime `string`
  * TotalScore `number`
  * TotalStrokes `number`
  * TotalThrough `integer`
  * TournamentID `integer`
  * TournamentStatus `string`
  * TripleBogeys `number`
  * Win `number`
  * WorseThanDoubleBogey `number`
  * WorseThanTripleBogey `number`

### Round
* Round `object`
  * Day `string`
  * Number `integer`
  * RoundID `integer`

### Tournament
* Tournament `object`
  * Canceled `boolean`
  * City `string`
  * Country `string`
  * Covered `boolean`
  * EndDate `string`
  * Format `string`
  * IsInProgress `boolean`
  * IsOver `boolean`
  * Location `string`
  * Name `string`
  * Par `integer`
  * Purse `number`
  * Rounds `array`
    * items [Round](#round)
  * SportRadarTournamentID `string`
  * StartDate `string`
  * StartDateTime `string`
  * State `string`
  * TimeZone `string`
  * TournamentID `integer`
  * Venue `string`
  * Yards `integer`
  * ZipCode `string`


