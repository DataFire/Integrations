# @datafire/fantasydata_nba_v3_stats

Client library for NBA v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nba_v3_stats
```
```js
let fantasydata_nba_v3_stats = require('@datafire/fantasydata_nba_v3_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

fantasydata_nba_v3_stats.AllStars({
  "format": "",
  "season": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AllStars
All-Stars


```js
fantasydata_nba_v3_stats.AllStars({
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
  * items [PlayerInfo](#playerinfo)

### TeamsAll
Teams (All)


```js
fantasydata_nba_v3_stats.TeamsAll({
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
fantasydata_nba_v3_stats.AreGamesInProgress({
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
fantasydata_nba_v3_stats.BoxScore({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: The GameID of an NBA game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code>, <code>16905</code>, etc.

#### Output
* output [BoxScore](#boxscore)

### BoxScoresByDate
Box Scores by Date


```js
fantasydata_nba_v3_stats.BoxScoresByDate({
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
fantasydata_nba_v3_stats.BoxScoresByDateDelta({
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
fantasydata_nba_v3_stats.CurrentSeason({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Season](#season)

### DfsSlatesByDate
DFS Slates by Date


```js
fantasydata_nba_v3_stats.DfsSlatesByDate({
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
fantasydata_nba_v3_stats.PlayerDetailsByFreeAgent({
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
fantasydata_nba_v3_stats.Schedules({
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
fantasydata_nba_v3_stats.GamesByDate({
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

### News
News


```js
fantasydata_nba_v3_stats.News({
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
fantasydata_nba_v3_stats.NewsByDate({
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
fantasydata_nba_v3_stats.NewsByPlayer({
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
fantasydata_nba_v3_stats.PlayerDetailsByPlayer({
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
fantasydata_nba_v3_stats.PlayerGameStatsByDate({
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
fantasydata_nba_v3_stats.PlayerGameStatsByPlayer({
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
fantasydata_nba_v3_stats.PlayerSeasonStats({
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
fantasydata_nba_v3_stats.PlayerSeasonStatsByPlayer({
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
fantasydata_nba_v3_stats.PlayerSeasonStatsByTeam({
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
fantasydata_nba_v3_stats.PlayerDetailsByActive({
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
fantasydata_nba_v3_stats.PlayersByTeam({
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
fantasydata_nba_v3_stats.Stadiums({
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
fantasydata_nba_v3_stats.Standings({
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
fantasydata_nba_v3_stats.TeamGameStatsByDate({
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
fantasydata_nba_v3_stats.TeamSeasonStats({
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
fantasydata_nba_v3_stats.TeamStatsAllowedByPosition({
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
fantasydata_nba_v3_stats.TeamsActive({
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
  * PlayerGames `array`
    * items [PlayerGame](#playergame)
  * Quarters `array`
    * items [Quarter](#quarter)
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

### News
* News `object`
  * Author `string`
  * Categories `string`
  * Content `string`
  * NewsID `integer`
  * PlayerID `integer`
  * PlayerID2 `integer`
  * Source `string`
  * Team `string`
  * Team2 `string`
  * TeamID `integer`
  * TeamID2 `integer`
  * TermsOfUse `string`
  * TimeAgo `string`
  * Title `string`
  * Updated `string`
  * Url `string`

### OpponentSeason
* OpponentSeason `object`
  * Assists `number`
  * AssistsPercentage `number`
  * BlockedShots `number`
  * BlocksPercentage `number`
  * DefensiveRebounds `number`
  * DefensiveReboundsPercentage `number`
  * DoubleDoubles `number`
  * EffectiveFieldGoalsPercentage `number`
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
  * Games `integer`
  * GlobalTeamID `integer`
  * IsClosed `boolean`
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `number`
  * OffensiveReboundsPercentage `number`
  * OpponentPosition `string`
  * OpponentStat [OpponentSeason](#opponentseason)
  * PersonalFouls `number`
  * PlayerEfficiencyRating `number`
  * PlusMinus `number`
  * Points `number`
  * Possessions `number`
  * Rebounds `number`
  * Season `integer`
  * SeasonType `integer`
  * Seconds `integer`
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
  * Wins `integer`

### Player
* Player `object`
  * BirthCity `string`
  * BirthCountry `string`
  * BirthDate `string`
  * BirthState `string`
  * College `string`
  * DepthChartOrder `integer`
  * DepthChartPosition `string`
  * DraftKingsName `string`
  * DraftKingsPlayerID `integer`
  * Experience `integer`
  * FanDuelName `string`
  * FanDuelPlayerID `integer`
  * FantasyAlarmPlayerID `integer`
  * FantasyDraftName `string`
  * FantasyDraftPlayerID `integer`
  * FirstName `string`
  * GlobalTeamID `integer`
  * Height `integer`
  * HighSchool `string`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * Jersey `integer`
  * LastName `string`
  * PhotoUrl `string`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * RotoWirePlayerID `integer`
  * RotoworldPlayerID `integer`
  * Salary `integer`
  * SportRadarPlayerID `string`
  * SportsDataID `string`
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

### PlayerInfo
* PlayerInfo `object`
  * Name `string`
  * PlayerID `integer`
  * Position `string`
  * Team `string`
  * TeamID `integer`

### PlayerSeason
* PlayerSeason `object`
  * Assists `number`
  * AssistsPercentage `number`
  * BlockedShots `number`
  * BlocksPercentage `number`
  * DefensiveRebounds `number`
  * DefensiveReboundsPercentage `number`
  * DoubleDoubles `number`
  * EffectiveFieldGoalsPercentage `number`
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
  * Games `integer`
  * GlobalTeamID `integer`
  * IsClosed `boolean`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `number`
  * OffensiveReboundsPercentage `number`
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

### Quarter
* Quarter `object`
  * AwayScore `integer`
  * GameID `integer`
  * HomeScore `integer`
  * Name `string`
  * Number `integer`
  * QuarterID `integer`

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
  * AwayLosses `integer`
  * AwayWins `integer`
  * City `string`
  * Conference `string`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * Division `string`
  * DivisionLosses `integer`
  * DivisionWins `integer`
  * GamesBack `number`
  * HomeLosses `integer`
  * HomeWins `integer`
  * Key `string`
  * LastTenLosses `integer`
  * LastTenWins `integer`
  * Losses `integer`
  * Name `string`
  * Percentage `number`
  * PointsPerGameAgainst `number`
  * PointsPerGameFor `number`
  * Season `integer`
  * SeasonType `integer`
  * Streak `integer`
  * StreakDescription `string`
  * TeamID `integer`
  * Wins `integer`

### Team
* Team `object`
  * Active `boolean`
  * City `string`
  * Conference `string`
  * Division `string`
  * GlobalTeamID `integer`
  * LeagueID `integer`
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
  * AssistsPercentage `number`
  * BlockedShots `number`
  * BlocksPercentage `number`
  * DateTime `string`
  * Day `string`
  * DefensiveRebounds `number`
  * DefensiveReboundsPercentage `number`
  * DoubleDoubles `number`
  * EffectiveFieldGoalsPercentage `number`
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
  * IsClosed `boolean`
  * IsGameOver `boolean`
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `number`
  * OffensiveReboundsPercentage `number`
  * Opponent `string`
  * OpponentID `integer`
  * PersonalFouls `number`
  * PlayerEfficiencyRating `number`
  * PlusMinus `number`
  * Points `number`
  * Possessions `number`
  * Rebounds `number`
  * Season `integer`
  * SeasonType `integer`
  * Seconds `integer`
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
  * Wins `integer`

### TeamSeason
* TeamSeason `object`
  * Assists `number`
  * AssistsPercentage `number`
  * BlockedShots `number`
  * BlocksPercentage `number`
  * DefensiveRebounds `number`
  * DefensiveReboundsPercentage `number`
  * DoubleDoubles `number`
  * EffectiveFieldGoalsPercentage `number`
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
  * Games `integer`
  * GlobalTeamID `integer`
  * IsClosed `boolean`
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `number`
  * OffensiveReboundsPercentage `number`
  * OpponentPosition `string`
  * OpponentStat [OpponentSeason](#opponentseason)
  * PersonalFouls `number`
  * PlayerEfficiencyRating `number`
  * PlusMinus `number`
  * Points `number`
  * Possessions `number`
  * Rebounds `number`
  * Season `integer`
  * SeasonType `integer`
  * Seconds `integer`
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
  * Wins `integer`


