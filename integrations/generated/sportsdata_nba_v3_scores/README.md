# @datafire/sportsdata_nba_v3_scores

Client library for NBA v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_nba_v3_scores
```
```js
let sportsdata_nba_v3_scores = require('@datafire/sportsdata_nba_v3_scores').create({
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
sportsdata_nba_v3_scores.TeamsAll({
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
sportsdata_nba_v3_scores.AreGamesInProgress({
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
sportsdata_nba_v3_scores.CurrentSeason({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output [Season](#season)

### PlayerDetailsByFreeAgent
Player Details by Free Agent


```js
sportsdata_nba_v3_scores.PlayerDetailsByFreeAgent({
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
sportsdata_nba_v3_scores.Schedules({
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
sportsdata_nba_v3_scores.GamesByDate({
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
sportsdata_nba_v3_scores.News({
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
sportsdata_nba_v3_scores.NewsByDate({
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
sportsdata_nba_v3_scores.NewsByPlayer({
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
sportsdata_nba_v3_scores.PlayerDetailsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: Unique FantasyData Player ID. Example:<code>20000571</code>.

#### Output
* output [Player](#player)

### PlayerDetailsByActive
Player Details by Active


```js
sportsdata_nba_v3_scores.PlayerDetailsByActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### Stadiums
Stadiums


```js
sportsdata_nba_v3_scores.Stadiums({
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
sportsdata_nba_v3_scores.Standings({
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
sportsdata_nba_v3_scores.TeamGameStatsByDate({
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
sportsdata_nba_v3_scores.TeamSeasonStats({
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
sportsdata_nba_v3_scores.TeamsActive({
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

### Game
* Game `object`
  * Attendance `integer`
  * AwayRotationNumber `integer`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamScore `integer`
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
  * HomeTeamScore `integer`
  * IsClosed `boolean`
  * LastPlay `string`
  * NeutralVenue `boolean`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Quarter `string`
  * Quarters `array`
    * items [Quarter](#quarter)
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
  * OriginalSource `string`
  * OriginalSourceUrl `string`
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
  * LineupConfirmed `boolean`
  * LineupStatus `string`
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
  * NbaDotComPlayerID `integer`
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
  * UsaTodayHeadshotNoBackgroundUpdated `string`
  * UsaTodayHeadshotNoBackgroundUrl `string`
  * UsaTodayHeadshotUpdated `string`
  * UsaTodayHeadshotUrl `string`
  * UsaTodayPlayerID `integer`
  * Weight `integer`
  * XmlTeamPlayerID `integer`
  * YahooName `string`
  * YahooPlayerID `integer`

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
  * ConferenceRank `integer`
  * ConferenceWins `integer`
  * Division `string`
  * DivisionLosses `integer`
  * DivisionRank `integer`
  * DivisionWins `integer`
  * GamesBack `number`
  * GlobalTeamID `integer`
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
  * NbaDotComTeamID `integer`
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
  * LineupConfirmed `boolean`
  * LineupStatus `string`
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
  * LineupConfirmed `boolean`
  * LineupStatus `string`
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


