# @datafire/fantasydata_nhl_v3_scores

Client library for NHL v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nhl_v3_scores
```
```js
let fantasydata_nhl_v3_scores = require('@datafire/fantasydata_nhl_v3_scores').create({
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
fantasydata_nhl_v3_scores.TeamsAll({
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
fantasydata_nhl_v3_scores.AreGamesInProgress({
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
fantasydata_nhl_v3_scores.CurrentSeason({
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
fantasydata_nhl_v3_scores.PlayerDetailsByFreeAgent({
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
fantasydata_nhl_v3_scores.Schedules({
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
fantasydata_nhl_v3_scores.GamesByDate({
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
fantasydata_nhl_v3_scores.News({
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
fantasydata_nhl_v3_scores.NewsByDate({
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
fantasydata_nhl_v3_scores.NewsByPlayer({
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
fantasydata_nhl_v3_scores.PlayerDetailsByPlayer({
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
fantasydata_nhl_v3_scores.PlayerDetailsByActive({
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
fantasydata_nhl_v3_scores.PlayersByTeam({
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
fantasydata_nhl_v3_scores.Stadiums({
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
fantasydata_nhl_v3_scores.Standings({
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
fantasydata_nhl_v3_scores.TeamGameStatsByDate({
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
fantasydata_nhl_v3_scores.TeamSeasonStats({
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
fantasydata_nhl_v3_scores.TeamsActive({
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


