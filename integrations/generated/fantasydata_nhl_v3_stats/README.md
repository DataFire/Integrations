# @datafire/fantasydata_nhl_v3_stats

Client library for NHL v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nhl_v3_stats
```
```js
let fantasydata_nhl_v3_stats = require('@datafire/fantasydata_nhl_v3_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### TeamsAll
Teams (All)


```js
fantasydata_nhl_v3_stats.TeamsAll({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Team](#team)

### AreGamesInProgress
Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.


```js
fantasydata_nhl_v3_stats.AreGamesInProgress({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `boolean`

### BoxScore
Box Score


```js
fantasydata_nhl_v3_stats.BoxScore({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>

#### Output
* output [BoxScore](#boxscore)

### BoxScoresByDate
Box Scores by Date


```js
fantasydata_nhl_v3_stats.BoxScoresByDate({
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
  * items [BoxScore](#boxscore)

### BoxScoresByDateDelta
Box Scores by Date Delta


```js
fantasydata_nhl_v3_stats.BoxScoresByDateDelta({
  "format": "",
  "date": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### CurrentSeason
Current Season


```js
fantasydata_nhl_v3_stats.CurrentSeason({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output [Season](#season)

### DfsSlatesByDate
DFS Slates by Date


```js
fantasydata_nhl_v3_stats.DfsSlatesByDate({
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

### PlayerDetailsByFreeAgent
Player Details by Free Agent


```js
fantasydata_nhl_v3_stats.PlayerDetailsByFreeAgent({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### Schedules
Schedules


```js
fantasydata_nhl_v3_stats.Schedules({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.

#### Output
* output `array`
  * items [Game](#game)

### GamesByDate
Games by Date


```js
fantasydata_nhl_v3_stats.GamesByDate({
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
  * items [Game](#game)

### LineCombinationsBySeason
Line Combinations by Season


```js
fantasydata_nhl_v3_stats.LineCombinationsBySeason({
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
  * items [TeamLine](#teamline)

### News
News


```js
fantasydata_nhl_v3_stats.News({
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
fantasydata_nhl_v3_stats.NewsByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the news.

#### Output
* output `array`
  * items [News](#news)

### NewsByPlayer
News by Player


```js
fantasydata_nhl_v3_stats.NewsByPlayer({
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

### PlayerDetailsByPlayer
Player Details by Player


```js
fantasydata_nhl_v3_stats.PlayerDetailsByPlayer({
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

### PlayerGameStatsByDate
Player Game Stats by Date


```js
fantasydata_nhl_v3_stats.PlayerGameStatsByDate({
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
  * items [PlayerGame](#playergame)

### PlayerGameStatsByPlayer
Player Game Stats by Player


```js
fantasydata_nhl_v3_stats.PlayerGameStatsByPlayer({
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
* output [PlayerGame](#playergame)

### PlayerSeasonStats
Player Season Stats


```js
fantasydata_nhl_v3_stats.PlayerSeasonStats({
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

### PlayerSeasonStatsByPlayer
Player Season Stats By Player


```js
fantasydata_nhl_v3_stats.PlayerSeasonStatsByPlayer({
  "format": "",
  "season": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output [PlayerSeason](#playerseason)

### PlayerSeasonStatsByTeam
Player Season Stats by Team


```js
fantasydata_nhl_v3_stats.PlayerSeasonStatsByTeam({
  "format": "",
  "season": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season.
  * team **required** `string`: The abbreviation of the requested team.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerDetailsByActive
Player Details by Active


```js
fantasydata_nhl_v3_stats.PlayerDetailsByActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### PlayersByTeam
Players by Team


```js
fantasydata_nhl_v3_stats.PlayersByTeam({
  "format": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * team **required** `string`: The abbreviation of the requested team.

#### Output
* output `array`
  * items [Player](#player)

### Stadiums
Stadiums


```js
fantasydata_nhl_v3_stats.Stadiums({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Stadium](#stadium)

### Standings
Standings


```js
fantasydata_nhl_v3_stats.Standings({
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
  * items [Standing](#standing)

### TeamGameStatsByDate
Team Game Stats by Date


```js
fantasydata_nhl_v3_stats.TeamGameStatsByDate({
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
  * items [TeamGame](#teamgame)

### TeamSeasonStats
Team Season Stats


```js
fantasydata_nhl_v3_stats.TeamSeasonStats({
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
  * items [TeamSeason](#teamseason)

### TeamStatsAllowedByPosition
Team Stats Allowed by Position


```js
fantasydata_nhl_v3_stats.TeamStatsAllowedByPosition({
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
  * items [TeamSeason](#teamseason)

### TeamsActive
Teams (Active)


```js
fantasydata_nhl_v3_stats.TeamsActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Team](#team)



## Definitions

### BoxScore
* BoxScore `object`
  * Game [Game](#game)
  * Periods `array`
    * items [Period](#period)
  * PlayerGames `array`
    * items [PlayerGame](#playergame)
  * ShootoutPlays `array`
    * items [Play](#play)
  * TeamGames `array`
    * items [TeamGame](#teamgame)

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
  * Period `string`
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

### News
* News `object`
  * Content `string`
  * NewsID `integer`
  * PlayerID `integer`
  * Source `string`
  * Team `string`
  * TeamID `integer`
  * TermsOfUse `string`
  * Title `string`
  * Updated `string`
  * Url `string`

### OpponentSeason
* OpponentSeason `object`
  * Assists `number`
  * BenchPenaltyMinutes `number`
  * Blocks `number`
  * EmptyNetGoals `number`
  * FaceoffsLost `number`
  * FaceoffsWon `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * Games `integer`
  * Giveaways `number`
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
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OpponentPosition `string`
  * OpponentStat [OpponentSeason](#opponentseason)
  * OvertimeLosses `integer`
  * PenaltyMinutes `number`
  * PlusMinus `number`
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
  * Wins `integer`

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

### Play
* Play `object`
  * AwayTeamScore `integer`
  * Category `string`
  * ClockMinutes `integer`
  * ClockSeconds `integer`
  * Created `string`
  * Description `string`
  * FirstAssistedByPlayerID `integer`
  * HomeTeamScore `integer`
  * Opponent `string`
  * OpponentID `integer`
  * OpposingPlayerID `integer`
  * PeriodID `integer`
  * PeriodName `string`
  * PlayID `integer`
  * PlayerID `integer`
  * PowerPlayTeam `string`
  * PowerPlayTeamID `integer`
  * SecondAssistedByPlayerID `integer`
  * Sequence `integer`
  * Team `string`
  * TeamID `integer`
  * Type `string`
  * Updated `string`

### Player
* Player `object`
  * BirthCity `string`
  * BirthDate `string`
  * BirthState `string`
  * Catches `string`
  * DepthChartOrder `integer`
  * DepthChartPosition `string`
  * DraftKingsName `string`
  * DraftKingsPlayerID `integer`
  * FanDuelName `string`
  * FanDuelPlayerID `integer`
  * FantasyAlarmPlayerID `integer`
  * FantasyDraftName `string`
  * FantasyDraftPlayerID `integer`
  * FirstName `string`
  * GlobalTeamID `integer`
  * Height `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * Jersey `integer`
  * LastName `string`
  * PhotoUrl `string`
  * PlayerID `integer`
  * Position `string`
  * RotoWirePlayerID `integer`
  * RotoworldPlayerID `integer`
  * Shoots `string`
  * SportRadarPlayerID `string`
  * SportsDirectPlayerID `integer`
  * StatsPlayerID `integer`
  * Status `string`
  * Team `string`
  * TeamID `integer`
  * Weight `integer`
  * XmlTeamPlayerID `integer`
  * YahooName `string`
  * YahooPlayerID `integer`

### PlayerGame
* PlayerGame `object`
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

### PlayerLine
* PlayerLine `object`
  * LineNumber `integer`
  * LineType `string`
  * Name `string`
  * PlayerID `integer`
  * Position `string`
  * Shoots `string`

### PlayerSeason
* PlayerSeason `object`
  * Assists `number`
  * BenchPenaltyMinutes `number`
  * Blocks `number`
  * EmptyNetGoals `number`
  * FaceoffsLost `number`
  * FaceoffsWon `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * Games `integer`
  * Giveaways `number`
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
  * Minutes `integer`
  * Name `string`
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

### Season
* Season `object`
  * ApiSeason `string`
  * Description `string`
  * EndYear `integer`
  * PostSeasonStartDate `string`
  * RegularSeasonStartDate `string`
  * Season `integer`
  * SeasonType `string`
  * StartYear `integer`

### Stadium
* Stadium `object`
  * Active `boolean`
  * Address `string`
  * Capacity `integer`
  * City `string`
  * Country `string`
  * GeoLat `number`
  * GeoLong `number`
  * Name `string`
  * StadiumID `integer`
  * State `string`
  * Zip `string`

### Standing
* Standing `object`
  * City `string`
  * Conference `string`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * Division `string`
  * DivisionLosses `integer`
  * DivisionWins `integer`
  * Key `string`
  * Losses `integer`
  * Name `string`
  * OvertimeLosses `integer`
  * Percentage `number`
  * Season `integer`
  * SeasonType `integer`
  * ShutoutWins `integer`
  * TeamID `integer`
  * Wins `integer`

### Team
* Team `object`
  * Active `boolean`
  * City `string`
  * Conference `string`
  * Division `string`
  * GlobalTeamID `integer`
  * Name `string`
  * PrimaryColor `string`
  * QuaternaryColor `string`
  * SecondaryColor `string`
  * StadiumID `integer`
  * TeamID `integer`
  * TertiaryColor `string`
  * WikipediaLogoUrl `string`
  * WikipediaWordMarkUrl `string`
  * [Key] `string`

### TeamGame
* TeamGame `object`
  * Assists `number`
  * BenchPenaltyMinutes `number`
  * Blocks `number`
  * DateTime `string`
  * Day `string`
  * EmptyNetGoals `number`
  * FaceoffsLost `number`
  * FaceoffsWon `number`
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
  * IsGameOver `boolean`
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * Opponent `string`
  * OpponentID `integer`
  * OvertimeLosses `integer`
  * PenaltyMinutes `number`
  * PlusMinus `number`
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
  * Wins `integer`

### TeamLine
* TeamLine `object`
  * EvenStrengthLines `array`
    * items [PlayerLine](#playerline)
  * FullName `string`
  * Key `string`
  * PowerPlayLines `array`
    * items [PlayerLine](#playerline)
  * TeamID `integer`

### TeamSeason
* TeamSeason `object`
  * Assists `number`
  * BenchPenaltyMinutes `number`
  * Blocks `number`
  * EmptyNetGoals `number`
  * FaceoffsLost `number`
  * FaceoffsWon `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * Games `integer`
  * Giveaways `number`
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
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OpponentPosition `string`
  * OpponentStat [OpponentSeason](#opponentseason)
  * OvertimeLosses `integer`
  * PenaltyMinutes `number`
  * PlusMinus `number`
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
  * Wins `integer`


