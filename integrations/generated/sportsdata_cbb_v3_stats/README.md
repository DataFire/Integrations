# @datafire/sportsdata_cbb_v3_stats

Client library for CBB v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_cbb_v3_stats
```
```js
let sportsdata_cbb_v3_stats = require('@datafire/sportsdata_cbb_v3_stats').create({
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
sportsdata_cbb_v3_stats.AreGamesInProgress({
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
sportsdata_cbb_v3_stats.BoxScore({
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
sportsdata_cbb_v3_stats.BoxScoresByDate({
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
sportsdata_cbb_v3_stats.BoxScoresByDateDelta({
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
sportsdata_cbb_v3_stats.CurrentSeason({
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
sportsdata_cbb_v3_stats.Schedules({
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
sportsdata_cbb_v3_stats.GamesByDate({
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
sportsdata_cbb_v3_stats.LeagueHierarchy({
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
sportsdata_cbb_v3_stats.PlayerDetailsByPlayer({
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
sportsdata_cbb_v3_stats.ProjectedPlayerGameStatsByDate({
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
sportsdata_cbb_v3_stats.ProjectedPlayerGameStatsByPlayer({
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
sportsdata_cbb_v3_stats.PlayerGameStatsByDate({
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
sportsdata_cbb_v3_stats.PlayerGameStatsByPlayer({
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

### PlayerGameLogsBySeason
Player Game Logs By Season


```js
sportsdata_cbb_v3_stats.PlayerGameLogsBySeason({
  "format": "",
  "season": "",
  "playerid": "",
  "numberofgames": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Season to get games from. Example <code>2019POST</code>, <code>2020</code>
  * playerid **required** `string`: Unique FantasyData Player ID.Example:<code>60008094</code>.
  * numberofgames **required** `string`: How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### PlayerSeasonStats
Player Season Stats


```js
sportsdata_cbb_v3_stats.PlayerSeasonStats({
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
sportsdata_cbb_v3_stats.PlayerSeasonStatsByPlayer({
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
sportsdata_cbb_v3_stats.PlayerSeasonStatsByTeam({
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
sportsdata_cbb_v3_stats.PlayerDetailsByActive({
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
sportsdata_cbb_v3_stats.PlayerDetailsByTeam({
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
sportsdata_cbb_v3_stats.Stadiums({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Stadium](#stadium)

### TeamGameStatsByDate
Team Game Stats by Date


```js
sportsdata_cbb_v3_stats.TeamGameStatsByDate({
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
sportsdata_cbb_v3_stats.TeamSeasonStats({
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
sportsdata_cbb_v3_stats.TournamentHierarchy({
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
sportsdata_cbb_v3_stats.Teams({
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
  * AwayRotationNumber `integer`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamPreviousGameID `integer`
  * AwayTeamPreviousGlobalGameID `integer`
  * AwayTeamScore `integer`
  * AwayTeamSeed `integer`
  * BottomTeamPreviousGameId `integer`
  * Bracket `string`
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
  * HomeTeamPreviousGameID `integer`
  * HomeTeamPreviousGlobalGameID `integer`
  * HomeTeamScore `integer`
  * HomeTeamSeed `integer`
  * IsClosed `boolean`
  * NeutralVenue `boolean`
  * OverUnder `number`
  * Period `string`
  * Periods `array`
    * items [Period](#period)
  * PointSpread `number`
  * Round `integer`
  * Season `integer`
  * SeasonType `integer`
  * Stadium [Stadium](#stadium)
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * TopTeamPreviousGameId `integer`
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
  * ApiSeason `string`
  * Description `string`
  * EndYear `integer`
  * PostSeasonStartDate `string`
  * RegularSeasonStartDate `string`
  * Season `integer`
  * StartYear `integer`

### Stadium
* Stadium `object`
  * Active `boolean`
  * Address `string`
  * Capacity `integer`
  * City `string`
  * Country `string`
  * Name `string`
  * StadiumID `integer`
  * State `string`
  * Zip `string`

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
  * ShortDisplayName `string`
  * Stadium [Stadium](#stadium)
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
  * LeftBottomBracketConference `string`
  * LeftTopBracketConference `string`
  * Location `string`
  * Name `string`
  * RightBottomBracketConference `string`
  * RightTopBracketConference `string`
  * Season `integer`
  * TournamentID `integer`


