# @datafire/sportsdata_cfb_v3_scores

Client library for CFB v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_cfb_v3_scores
```
```js
let sportsdata_cfb_v3_scores = require('@datafire/sportsdata_cfb_v3_scores').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

CFB schedules, scores, team stats, odds, weather, and news API.

## Actions

### AreGamesInProgress
Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.


```js
sportsdata_cfb_v3_scores.AreGamesInProgress({
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
sportsdata_cfb_v3_scores.CurrentSeason({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `integer`

### CurrentSeasonDetails
Current Season Details


```js
sportsdata_cfb_v3_scores.CurrentSeasonDetails({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output [Season](#season)

### CurrentSeasontype
Current SeasonType


```js
sportsdata_cfb_v3_scores.CurrentSeasontype({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `string`

### CurrentWeek
Current Week


```js
sportsdata_cfb_v3_scores.CurrentWeek({
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
sportsdata_cfb_v3_scores.Schedules({
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
sportsdata_cfb_v3_scores.GamesByDate({
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
sportsdata_cfb_v3_scores.GamesByWeek({
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
sportsdata_cfb_v3_scores.ConferenceHierarchyWithTeams({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>xml</code> or <code>json</code>.

#### Output
* output `array`
  * items [Conference](#conference)

### PlayerDetailsByPlayer
Player Details By Player


```js
sportsdata_cfb_v3_scores.PlayerDetailsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: 

#### Output
* output `array`
  * items [Player](#player)

### PlayerDetailsByActive
Player Details By Active


```js
sportsdata_cfb_v3_scores.PlayerDetailsByActive({
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
sportsdata_cfb_v3_scores.PlayerDetailsByTeam({
  "format": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * team **required** `string`: 

#### Output
* output `array`
  * items [Player](#player)

### Stadiums
Stadiums


```js
sportsdata_cfb_v3_scores.Stadiums({
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
sportsdata_cfb_v3_scores.TeamGameStatsByWeek({
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
sportsdata_cfb_v3_scores.TeamSeasonStatsStandings({
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
sportsdata_cfb_v3_scores.Teams({
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
  * ConferenceName `string`
  * DivisionName `string`
  * Name `string`
  * Teams `array`
    * items [Team](#team)

### Game
* Game `object`
  * AwayRotationNumber `integer`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * AwayTeamName `string`
  * AwayTeamScore `integer`
  * Channel `string`
  * Created `string`
  * DateTime `string`
  * Day `string`
  * Distance `integer`
  * Down `integer`
  * GameEndDateTime `string`
  * GameID `integer`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeRotationNumber `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * HomeTeamName `string`
  * HomeTeamScore `integer`
  * IsClosed `boolean`
  * NeutralVenue `boolean`
  * OverUnder `number`
  * Period `string`
  * Periods `array`
    * items [Period](#period)
  * PointSpread `number`
  * Possession `string`
  * Season `integer`
  * SeasonType `integer`
  * Stadium [Stadium](#stadium)
  * StadiumID `integer`
  * Status `string`
  * TimeRemainingMinutes `integer`
  * TimeRemainingSeconds `integer`
  * Title `string`
  * Updated `string`
  * Week `integer`
  * YardLine `integer`
  * YardLineTerritory `string`

### Period
* Period `object`
  * AwayScore `integer`
  * GameID `integer`
  * HomeScore `integer`
  * Name `string`
  * Number `integer`
  * PeriodID `integer`

### Player
* Player `object`
  * BirthCity `string`
  * BirthState `string`
  * Class `string`
  * Created `string`
  * FirstName `string`
  * GlobalTeamID `integer`
  * Height `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * Jersey `integer`
  * LastName `string`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * Team `string`
  * TeamID `integer`
  * Updated `string`
  * Weight `integer`

### Season
* Season `object`
  * ApiSeason `string`
  * ApiWeek `integer`
  * Description `string`
  * EndYear `integer`
  * Season `integer`
  * StartYear `integer`

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
  * Conference `string`
  * ConferenceID `integer`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * GlobalTeamID `integer`
  * Losses `integer`
  * Name `string`
  * PlayoffRank `integer`
  * RankSeason `integer`
  * RankSeasonType `integer`
  * RankWeek `integer`
  * School `string`
  * ShortDisplayName `string`
  * StadiumID `integer`
  * TeamID `integer`
  * TeamLogoUrl `string`
  * Wins `integer`
  * [Key] `string`

### TeamGame
* TeamGame `object`
  * AssistedTackles `number`
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
  * FumbleReturnTouchdowns `number`
  * Fumbles `number`
  * FumblesLost `number`
  * FumblesRecovered `number`
  * GameID `integer`
  * Games `integer`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
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
  * PassesDefended `number`
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
  * QuarterbackHurries `number`
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
  * Sacks `number`
  * Score `integer`
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `number`
  * StatID `integer`
  * TacklesForLoss `number`
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
  * AssistedTackles `number`
  * ConferenceLosses `integer`
  * ConferencePointsAgainst `integer`
  * ConferencePointsFor `integer`
  * ConferenceRank `integer`
  * ConferenceWins `integer`
  * Created `string`
  * DivisionRank `integer`
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
  * FumbleReturnTouchdowns `number`
  * Fumbles `number`
  * FumblesLost `number`
  * FumblesRecovered `number`
  * Games `integer`
  * GlobalTeamID `integer`
  * HomeLosses `integer`
  * HomeWins `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * Losses `integer`
  * Name `string`
  * OpponentScore `integer`
  * PassesDefended `number`
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
  * QuarterbackHurries `number`
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
  * Sacks `number`
  * Score `integer`
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `number`
  * StatID `integer`
  * Streak `integer`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * ThirdDownAttempts `integer`
  * ThirdDownConversions `integer`
  * TimeOfPossessionMinutes `integer`
  * TimeOfPossessionSeconds `integer`
  * Updated `string`
  * Wins `integer`


