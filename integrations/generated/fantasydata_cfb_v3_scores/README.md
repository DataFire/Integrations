# @datafire/fantasydata_cfb_v3_scores

Client library for CFB v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_cfb_v3_scores
```
```js
let fantasydata_cfb_v3_scores = require('@datafire/fantasydata_cfb_v3_scores').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

fantasydata_cfb_v3_scores.AreGamesInProgress({
  "format": ""
}).then(data => {
  console.log(data);
});
```

## Description

CFB schedules, scores, team stats, odds, weather, and news API.

## Actions

### AreGamesInProgress
Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.


```js
fantasydata_cfb_v3_scores.AreGamesInProgress({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `boolean`

### CurrentSeason
Current Season


```js
fantasydata_cfb_v3_scores.CurrentSeason({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `integer`

### CurrentWeek
Current Week


```js
fantasydata_cfb_v3_scores.CurrentWeek({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `integer`

### Schedules
Schedules


```js
fantasydata_cfb_v3_scores.Schedules({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.

#### Output
* output `array`
  * items [Game](#game)

### GamesByDate
Games by Date


```js
fantasydata_cfb_v3_scores.GamesByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
  * date **required** `string`: 

#### Output
* output `array`
  * items [Game](#game)

### GamesByWeek
Games by Week


```js
fantasydata_cfb_v3_scores.GamesByWeek({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [Game](#game)

### ConferenceHierarchyWithTeams
Conference Hierarchy (with Teams)


```js
fantasydata_cfb_v3_scores.ConferenceHierarchyWithTeams({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `array`
  * items [Conference](#conference)

### Stadiums
Stadiums


```js
fantasydata_cfb_v3_scores.Stadiums({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `array`
  * items [Stadium](#stadium)

### TeamGameStatsByWeek
Team Game Stats by Week


```js
fantasydata_cfb_v3_scores.TeamGameStatsByWeek({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [TeamGame](#teamgame)

### TeamSeasonStatsStandings
Team Season Stats & Standings


```js
fantasydata_cfb_v3_scores.TeamSeasonStatsStandings({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.

#### Output
* output `array`
  * items [TeamSeason](#teamseason)

### Teams
Teams


```js
fantasydata_cfb_v3_scores.Teams({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

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
  * AwayTeamName `string`
  * AwayTeamScore `integer`
  * Created `string`
  * DateTime `string`
  * Day `string`
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * HomeTeamName `string`
  * HomeTeamScore `integer`
  * OverUnder `number`
  * Period `string`
  * PointSpread `number`
  * Season `integer`
  * SeasonType `integer`
  * Stadium [Stadium](#stadium)
  * StadiumID `integer`
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Updated `string`
  * Week `integer`

### Stadium
* Stadium `object`
  * Active `boolean`
  * City `string`
  * Dome `boolean`
  * Name `string`
  * StadiumID `integer`
  * State `string`

### Team
* Team `object`
  * Active `boolean`
  * ApRank `integer`
  * CoachesRank `integer`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * GlobalTeamID `integer`
  * Losses `integer`
  * Name `string`
  * PlayoffRank `integer`
  * School `string`
  * StadiumID `integer`
  * TeamID `integer`
  * TeamLogoUrl `string`
  * Wins `integer`
  * [Key] `string`

### TeamGame
* TeamGame `object`
  * Created `string`
  * DateTime `string`
  * Day `string`
  * ExtraPointsAttempted `number`
  * ExtraPointsMade `number`
  * FantasyPoints `number`
  * FieldGoalPercentage `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FirstDowns `integer`
  * FourthDownAttempts `integer`
  * FourthDownConversions `integer`
  * GameID `integer`
  * Games `integer`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * IsGameOver `boolean`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * Name `string`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentScore `integer`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingRating `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Penalties `integer`
  * PenaltyYards `integer`
  * PuntAverage `number`
  * PuntLong `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntYards `number`
  * Punts `number`
  * ReceivingLong `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * Score `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Team `string`
  * TeamID `integer`
  * ThirdDownAttempts `integer`
  * ThirdDownConversions `integer`
  * TimeOfPossessionMinutes `integer`
  * TimeOfPossessionSeconds `integer`
  * Updated `string`
  * Week `integer`

### TeamSeason
* TeamSeason `object`
  * ConferenceLosses `integer`
  * ConferencePointsAgainst `integer`
  * ConferencePointsFor `integer`
  * ConferenceWins `integer`
  * Created `string`
  * ExtraPointsAttempted `number`
  * ExtraPointsMade `number`
  * FantasyPoints `number`
  * FieldGoalPercentage `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FirstDowns `integer`
  * FourthDownAttempts `integer`
  * FourthDownConversions `integer`
  * Games `integer`
  * GlobalTeamID `integer`
  * HomeLosses `integer`
  * HomeWins `integer`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * Losses `integer`
  * Name `string`
  * OpponentScore `integer`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingRating `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Penalties `integer`
  * PenaltyYards `integer`
  * PointsAgainst `integer`
  * PointsFor `integer`
  * PuntAverage `number`
  * PuntLong `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntYards `number`
  * Punts `number`
  * ReceivingLong `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * Receptions `number`
  * RoadLosses `integer`
  * RoadWins `integer`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * Score `integer`
  * Season `integer`
  * SeasonType `integer`
  * StatID `integer`
  * Streak `integer`
  * Team `string`
  * TeamID `integer`
  * ThirdDownAttempts `integer`
  * ThirdDownConversions `integer`
  * TimeOfPossessionMinutes `integer`
  * TimeOfPossessionSeconds `integer`
  * Updated `string`
  * Wins `integer`


