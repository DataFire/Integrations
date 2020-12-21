# @datafire/fantasydata_cbb_v3_stats

Client library for CBB v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_cbb_v3_stats
```
```js
let fantasydata_cbb_v3_stats = require('@datafire/fantasydata_cbb_v3_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### AreGamesInProgress
Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.


```js
fantasydata_cbb_v3_stats.AreGamesInProgress({
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
fantasydata_cbb_v3_stats.BoxScore({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: The GameID of an CBB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>

#### Output
* output [BoxScore](#boxscore)

### BoxScoresByDate
Box Scores by Date


```js
fantasydata_cbb_v3_stats.BoxScoresByDate({
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
fantasydata_cbb_v3_stats.BoxScoresByDateDelta({
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
fantasydata_cbb_v3_stats.CurrentSeason({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output [Season](#season)

### Schedules
Schedules


```js
fantasydata_cbb_v3_stats.Schedules({
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
fantasydata_cbb_v3_stats.GamesByDate({
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

### LeagueHierarchy
League Hierarchy


```js
fantasydata_cbb_v3_stats.LeagueHierarchy({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Conference](#conference)

### PlayerDetailsByPlayer
Player Details by Player


```js
fantasydata_cbb_v3_stats.PlayerDetailsByPlayer({
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

### ProjectedPlayerGameStatsByDate
Projected Player Game Stats by Date


```js
fantasydata_cbb_v3_stats.ProjectedPlayerGameStatsByDate({
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

### ProjectedPlayerGameStatsByPlayer
Projected Player Game Stats by Player


```js
fantasydata_cbb_v3_stats.ProjectedPlayerGameStatsByPlayer({
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

### PlayerGameStatsByDate
Player Game Stats by Date


```js
fantasydata_cbb_v3_stats.PlayerGameStatsByDate({
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
fantasydata_cbb_v3_stats.PlayerGameStatsByPlayer({
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
fantasydata_cbb_v3_stats.PlayerSeasonStats({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerSeasonStatsByPlayer
Player Season Stats By Player


```js
fantasydata_cbb_v3_stats.PlayerSeasonStatsByPlayer({
  "format": "",
  "season": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output [PlayerSeason](#playerseason)

### PlayerSeasonStatsByTeam
Player Season Stats by Team


```js
fantasydata_cbb_v3_stats.PlayerSeasonStatsByTeam({
  "format": "",
  "season": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
  * team **required** `string`: The abbreviation of the requested team.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerDetailsByActive
Player Details by Active


```js
fantasydata_cbb_v3_stats.PlayerDetailsByActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### PlayerDetailsByTeam
Player Details by Team


```js
fantasydata_cbb_v3_stats.PlayerDetailsByTeam({
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

### TeamGameStatsByDate
Team Game Stats by Date


```js
fantasydata_cbb_v3_stats.TeamGameStatsByDate({
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
fantasydata_cbb_v3_stats.TeamSeasonStats({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.

#### Output
* output `array`
  * items [TeamSeason](#teamseason)

### TournamentHierarchy
Tournament Hierarchy


```js
fantasydata_cbb_v3_stats.TournamentHierarchy({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.

#### Output
* output [Tournament](#tournament)

### Teams
Teams


```js
fantasydata_cbb_v3_stats.Teams({
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
  * TeamGames `array`
    * items [TeamGame](#teamgame)

### Conference
* Conference `object`
  * ConferenceID `integer`
  * Name `string`
  * Teams `array`
    * items [Team](#team)

### Game
* Game `object`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamPreviousGameID `integer`
  * AwayTeamPreviousGlobalGameID `integer`
  * AwayTeamScore `integer`
  * AwayTeamSeed `integer`
  * Bracket `string`
  * DateTime `string`
  * Day `string`
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * HomeTeamPreviousGameID `integer`
  * HomeTeamPreviousGlobalGameID `integer`
  * HomeTeamScore `integer`
  * HomeTeamSeed `integer`
  * OverUnder `number`
  * Period `string`
  * PointSpread `number`
  * Round `integer`
  * Season `integer`
  * SeasonType `integer`
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * TournamentDisplayOrder `integer`
  * TournamentDisplayOrderForHomeTeam `string`
  * TournamentID `integer`
  * Updated `string`

### Period
* Period `object`
  * AwayScore `integer`
  * GameID `integer`
  * HomeScore `integer`
  * Name `string`
  * Number `integer`
  * PeriodID `integer`
  * Type `string`

### Player
* Player `object`
  * BirthCity `string`
  * BirthState `string`
  * Class `string`
  * FantasyAlarmPlayerID `integer`
  * FirstName `string`
  * GlobalTeamID `integer`
  * Height `integer`
  * HighSchool `string`
  * Jersey `integer`
  * LastName `string`
  * PlayerID `integer`
  * Position `string`
  * RotoWirePlayerID `integer`
  * RotoworldPlayerID `integer`
  * SportRadarPlayerID `string`
  * Team `string`
  * TeamID `integer`
  * Weight `integer`

### PlayerGame
* PlayerGame `object`
  * Assists `integer`
  * AssistsPercentage `number`
  * BlockedShots `integer`
  * BlocksPercentage `number`
  * DateTime `string`
  * Day `string`
  * DefensiveRebounds `integer`
  * DefensiveReboundsPercentage `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * EffectiveFieldGoalsPercentage `number`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsYahoo `number`
  * FieldGoalsAttempted `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsPercentage `number`
  * FreeThrowsAttempted `integer`
  * FreeThrowsMade `integer`
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
  * IsGameOver `boolean`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `integer`
  * OffensiveReboundsPercentage `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PersonalFouls `integer`
  * PlayerEfficiencyRating `number`
  * PlayerID `integer`
  * Points `integer`
  * Position `string`
  * Rebounds `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Steals `integer`
  * StealsPercentage `number`
  * Team `string`
  * TeamID `integer`
  * ThreePointersAttempted `integer`
  * ThreePointersMade `integer`
  * ThreePointersPercentage `number`
  * TotalReboundsPercentage `number`
  * TrueShootingAttempts `number`
  * TrueShootingPercentage `number`
  * TurnOversPercentage `number`
  * Turnovers `integer`
  * TwoPointersAttempted `integer`
  * TwoPointersMade `integer`
  * TwoPointersPercentage `number`
  * Updated `string`
  * UsageRatePercentage `number`
  * YahooPosition `string`
  * YahooSalary `integer`

### PlayerGameProjection
* PlayerGameProjection `object`
  * Assists `integer`
  * AssistsPercentage `number`
  * BlockedShots `integer`
  * BlocksPercentage `number`
  * DateTime `string`
  * Day `string`
  * DefensiveRebounds `integer`
  * DefensiveReboundsPercentage `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * EffectiveFieldGoalsPercentage `number`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsYahoo `number`
  * FieldGoalsAttempted `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsPercentage `number`
  * FreeThrowsAttempted `integer`
  * FreeThrowsMade `integer`
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
  * IsGameOver `boolean`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `integer`
  * OffensiveReboundsPercentage `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PersonalFouls `integer`
  * PlayerEfficiencyRating `number`
  * PlayerID `integer`
  * Points `integer`
  * Position `string`
  * Rebounds `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Steals `integer`
  * StealsPercentage `number`
  * Team `string`
  * TeamID `integer`
  * ThreePointersAttempted `integer`
  * ThreePointersMade `integer`
  * ThreePointersPercentage `number`
  * TotalReboundsPercentage `number`
  * TrueShootingAttempts `number`
  * TrueShootingPercentage `number`
  * TurnOversPercentage `number`
  * Turnovers `integer`
  * TwoPointersAttempted `integer`
  * TwoPointersMade `integer`
  * TwoPointersPercentage `number`
  * Updated `string`
  * UsageRatePercentage `number`
  * YahooPosition `string`
  * YahooSalary `integer`

### PlayerSeason
* PlayerSeason `object`
  * Assists `integer`
  * AssistsPercentage `number`
  * BlockedShots `integer`
  * BlocksPercentage `number`
  * DefensiveRebounds `integer`
  * DefensiveReboundsPercentage `number`
  * EffectiveFieldGoalsPercentage `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsYahoo `number`
  * FieldGoalsAttempted `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsPercentage `number`
  * FreeThrowsAttempted `integer`
  * FreeThrowsMade `integer`
  * FreeThrowsPercentage `number`
  * Games `integer`
  * GlobalTeamID `integer`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `integer`
  * OffensiveReboundsPercentage `number`
  * PersonalFouls `integer`
  * PlayerEfficiencyRating `number`
  * PlayerID `integer`
  * Points `integer`
  * Position `string`
  * Rebounds `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Steals `integer`
  * StealsPercentage `number`
  * Team `string`
  * TeamID `integer`
  * ThreePointersAttempted `integer`
  * ThreePointersMade `integer`
  * ThreePointersPercentage `number`
  * TotalReboundsPercentage `number`
  * TrueShootingAttempts `number`
  * TrueShootingPercentage `number`
  * TurnOversPercentage `number`
  * Turnovers `integer`
  * TwoPointersAttempted `integer`
  * TwoPointersMade `integer`
  * TwoPointersPercentage `number`
  * Updated `string`
  * UsageRatePercentage `number`

### Season
* Season `object`
  * Description `string`
  * EndYear `integer`
  * PostSeasonStartDate `string`
  * RegularSeasonStartDate `string`
  * Season `integer`
  * StartYear `integer`

### Team
* Team `object`
  * Active `boolean`
  * ApRank `integer`
  * Conference `string`
  * ConferenceID `integer`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * GlobalTeamID `integer`
  * Losses `integer`
  * Name `string`
  * School `string`
  * TeamID `integer`
  * TeamLogoUrl `string`
  * Wins `integer`
  * [Key] `string`

### TeamGame
* TeamGame `object`
  * Assists `integer`
  * AssistsPercentage `number`
  * BlockedShots `integer`
  * BlocksPercentage `number`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * DateTime `string`
  * Day `string`
  * DefensiveRebounds `integer`
  * DefensiveReboundsPercentage `number`
  * EffectiveFieldGoalsPercentage `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsYahoo `number`
  * FieldGoalsAttempted `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsPercentage `number`
  * FreeThrowsAttempted `integer`
  * FreeThrowsMade `integer`
  * FreeThrowsPercentage `number`
  * GameID `integer`
  * Games `integer`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * IsGameOver `boolean`
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `integer`
  * OffensiveReboundsPercentage `number`
  * Opponent `string`
  * OpponentID `integer`
  * PersonalFouls `integer`
  * PlayerEfficiencyRating `number`
  * Points `integer`
  * Possessions `number`
  * Rebounds `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Steals `integer`
  * StealsPercentage `number`
  * Team `string`
  * TeamID `integer`
  * ThreePointersAttempted `integer`
  * ThreePointersMade `integer`
  * ThreePointersPercentage `number`
  * TotalReboundsPercentage `number`
  * TrueShootingAttempts `number`
  * TrueShootingPercentage `number`
  * TurnOversPercentage `number`
  * Turnovers `integer`
  * TwoPointersAttempted `integer`
  * TwoPointersMade `integer`
  * TwoPointersPercentage `number`
  * Updated `string`
  * UsageRatePercentage `number`
  * Wins `integer`

### TeamSeason
* TeamSeason `object`
  * Assists `integer`
  * AssistsPercentage `number`
  * BlockedShots `integer`
  * BlocksPercentage `number`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * DefensiveRebounds `integer`
  * DefensiveReboundsPercentage `number`
  * EffectiveFieldGoalsPercentage `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsYahoo `number`
  * FieldGoalsAttempted `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsPercentage `number`
  * FreeThrowsAttempted `integer`
  * FreeThrowsMade `integer`
  * FreeThrowsPercentage `number`
  * Games `integer`
  * GlobalTeamID `integer`
  * Losses `integer`
  * Minutes `integer`
  * Name `string`
  * OffensiveRebounds `integer`
  * OffensiveReboundsPercentage `number`
  * PersonalFouls `integer`
  * PlayerEfficiencyRating `number`
  * Points `integer`
  * Possessions `number`
  * Rebounds `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Steals `integer`
  * StealsPercentage `number`
  * Team `string`
  * TeamID `integer`
  * ThreePointersAttempted `integer`
  * ThreePointersMade `integer`
  * ThreePointersPercentage `number`
  * TotalReboundsPercentage `number`
  * TrueShootingAttempts `number`
  * TrueShootingPercentage `number`
  * TurnOversPercentage `number`
  * Turnovers `integer`
  * TwoPointersAttempted `integer`
  * TwoPointersMade `integer`
  * TwoPointersPercentage `number`
  * Updated `string`
  * UsageRatePercentage `number`
  * Wins `integer`

### Tournament
* Tournament `object`
  * Games `array`
    * items [Game](#game)
  * Location `string`
  * Name `string`
  * Season `integer`
  * TournamentID `integer`


