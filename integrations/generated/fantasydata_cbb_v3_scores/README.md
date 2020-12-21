# @datafire/fantasydata_cbb_v3_scores

Client library for CBB v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_cbb_v3_scores
```
```js
let fantasydata_cbb_v3_scores = require('@datafire/fantasydata_cbb_v3_scores').create({
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
fantasydata_cbb_v3_scores.AreGamesInProgress({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `boolean`

### CurrentSeason
Current Season


```js
fantasydata_cbb_v3_scores.CurrentSeason({
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
fantasydata_cbb_v3_scores.Schedules({
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
fantasydata_cbb_v3_scores.GamesByDate({
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
fantasydata_cbb_v3_scores.LeagueHierarchy({
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
fantasydata_cbb_v3_scores.PlayerDetailsByPlayer({
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

### PlayerDetailsByActive
Player Details by Active


```js
fantasydata_cbb_v3_scores.PlayerDetailsByActive({
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
fantasydata_cbb_v3_scores.PlayerDetailsByTeam({
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
fantasydata_cbb_v3_scores.TeamGameStatsByDate({
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
fantasydata_cbb_v3_scores.TeamSeasonStats({
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
fantasydata_cbb_v3_scores.TournamentHierarchy({
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
fantasydata_cbb_v3_scores.Teams({
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


