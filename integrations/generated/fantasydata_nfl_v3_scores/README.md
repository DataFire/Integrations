# @datafire/fantasydata_nfl_v3_scores

Client library for NFL v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nfl_v3_scores
```
```js
let fantasydata_nfl_v3_scores = require('@datafire/fantasydata_nfl_v3_scores').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NFL schedules, scores, odds, weather, and news API.

## Actions

### TeamsAll
Gets all teams, including pro bowl teams.


```js
fantasydata_nfl_v3_scores.TeamsAll({
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
fantasydata_nfl_v3_scores.AreGamesInProgress({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `boolean`

### ByeWeeks
Get bye weeks for the teams during a specified NFL season. 


```js
fantasydata_nfl_v3_scores.ByeWeeks({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [Bye](#bye)

### SeasonCurrent
Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.


```js
fantasydata_nfl_v3_scores.SeasonCurrent({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### WeekCurrent
Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight EST. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.


```js
fantasydata_nfl_v3_scores.WeekCurrent({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### GameStatsBySeasonDeprecatedUseTeamGameStatsInstead
Game Stats by Season (Deprecated, use Team Game Stats instead)


```js
fantasydata_nfl_v3_scores.GameStatsBySeasonDeprecatedUseTeamGameStatsInstead({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.

#### Output
* output `array`
  * items [Game](#game)

### GameStatsByWeekDeprecatedUseTeamGameStatsInstead
Game Stats by Week (Deprecated, use Team Game Stats instead)


```js
fantasydata_nfl_v3_scores.GameStatsByWeekDeprecatedUseTeamGameStatsInstead({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [Game](#game)

### SeasonLastCompleted
Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.


```js
fantasydata_nfl_v3_scores.SeasonLastCompleted({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### WeekLastCompleted

Number of the last completed week in the current NFL season. This value changes immediately after the last game of the week is completed and the data is available. This usually happens right after the Monday night game.
Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.


```js
fantasydata_nfl_v3_scores.WeekLastCompleted({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### News
News


```js
fantasydata_nfl_v3_scores.News({
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
fantasydata_nfl_v3_scores.NewsByDate({
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
fantasydata_nfl_v3_scores.NewsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): 
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.

#### Output
* output `array`
  * items [News](#news)

### NewsByTeam
News by Team


```js
fantasydata_nfl_v3_scores.NewsByTeam({
  "format": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output `array`
  * items [News](#news)

### XPing
Ping NFL API


```js
fantasydata_nfl_v3_scores.XPing({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `null`

### Schedule
Game schedule for a specified season.


```js
fantasydata_nfl_v3_scores.Schedule({
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
  * items [Schedule](#schedule)

### ScoresBySeason
Game scores for a specified season.


```js
fantasydata_nfl_v3_scores.ScoresBySeason({
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
  * items [Score](#score)

### ScoresByWeek
Get game scores for a specified week of a season.


```js
fantasydata_nfl_v3_scores.ScoresByWeek({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [Score](#score)

### ScoresByWeekSimulation
Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.


```js
fantasydata_nfl_v3_scores.ScoresByWeekSimulation({
  "format": "",
  "numberofplays": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * numberofplays **required** `string`: The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.

#### Output
* output `array`
  * items [Score](#score)

### Stadiums
This method returns all stadiums.


```js
fantasydata_nfl_v3_scores.Stadiums({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Stadium](#stadium)

### Standings
Standings


```js
fantasydata_nfl_v3_scores.Standings({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [Standing](#standing)

### TeamGameStats
Team Game Stats


```js
fantasydata_nfl_v3_scores.TeamGameStats({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [TeamGame](#teamgame)

### TeamSeasonStats
Team Season Stats


```js
fantasydata_nfl_v3_scores.TeamSeasonStats({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [TeamSeason](#teamseason)

### TeamsActive
Gets all active teams.


```js
fantasydata_nfl_v3_scores.TeamsActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Team](#team)

### TeamsBySeason
List of teams playing in a specified season.


```js
fantasydata_nfl_v3_scores.TeamsBySeason({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [Team](#team)

### Timeframes
Get detailed information about past, present, and future timeframes.


```js
fantasydata_nfl_v3_scores.Timeframes({
  "format": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * type **required** `string` (values: current, upcoming, completed, recent, all): The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.

#### Output
* output `array`
  * items [Timeframe](#timeframe)

### SeasonUpcoming
Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.


```js
fantasydata_nfl_v3_scores.SeasonUpcoming({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### WeekUpcoming
Number of the upcoming week of the NFL season. This value changes immediately after the final game of the week is completed. We consider upcoming week to be the current week, until current week is over. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.


```js
fantasydata_nfl_v3_scores.WeekUpcoming({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`



## Definitions

### Bye
* Bye `object`
  * Season `integer`
  * Team `string`
  * Week `integer`

### Game
* Game `object`
  * AwayAssistedTackles `integer`
  * AwayBlockedKickReturnTouchdowns `integer`
  * AwayBlockedKickReturnYards `integer`
  * AwayBlockedKicks `integer`
  * AwayCompletionPercentage `number`
  * AwayExtraPointKickingAttempts `integer`
  * AwayExtraPointKickingConversions `integer`
  * AwayExtraPointPassingAttempts `integer`
  * AwayExtraPointPassingConversions `integer`
  * AwayExtraPointRushingAttempts `integer`
  * AwayExtraPointRushingConversions `integer`
  * AwayExtraPointsHadBlocked `integer`
  * AwayFieldGoalAttempts `integer`
  * AwayFieldGoalReturnTouchdowns `integer`
  * AwayFieldGoalReturnYards `integer`
  * AwayFieldGoalsHadBlocked `integer`
  * AwayFieldGoalsMade `integer`
  * AwayFirstDowns `integer`
  * AwayFirstDownsByPassing `integer`
  * AwayFirstDownsByPenalty `integer`
  * AwayFirstDownsByRushing `integer`
  * AwayFourthDownAttempts `integer`
  * AwayFourthDownConversions `integer`
  * AwayFourthDownPercentage `number`
  * AwayFumbleReturnTouchdowns `integer`
  * AwayFumbleReturnYards `integer`
  * AwayFumbles `integer`
  * AwayFumblesForced `integer`
  * AwayFumblesLost `integer`
  * AwayFumblesRecovered `integer`
  * AwayGiveaways `integer`
  * AwayGoalToGoAttempts `integer`
  * AwayGoalToGoConversions `integer`
  * AwayInterceptionReturnTouchdowns `integer`
  * AwayInterceptionReturnYards `integer`
  * AwayInterceptionReturns `integer`
  * AwayKickReturnLong `integer`
  * AwayKickReturnTouchdowns `integer`
  * AwayKickReturnYards `integer`
  * AwayKickReturns `integer`
  * AwayKickoffTouchbacks `integer`
  * AwayKickoffs `integer`
  * AwayKickoffsInEndZone `integer`
  * AwayOffensivePlays `integer`
  * AwayOffensiveYards `integer`
  * AwayOffensiveYardsPerPlay `number`
  * AwayPasserRating `number`
  * AwayPassesDefended `integer`
  * AwayPassingAttempts `integer`
  * AwayPassingCompletions `integer`
  * AwayPassingInterceptions `integer`
  * AwayPassingTouchdowns `integer`
  * AwayPassingYards `integer`
  * AwayPassingYardsPerAttempt `number`
  * AwayPassingYardsPerCompletion `number`
  * AwayPenalties `integer`
  * AwayPenaltyYards `integer`
  * AwayPuntAverage `number`
  * AwayPuntNetAverage `number`
  * AwayPuntNetYards `integer`
  * AwayPuntReturnLong `integer`
  * AwayPuntReturnTouchdowns `integer`
  * AwayPuntReturnYards `integer`
  * AwayPuntReturns `integer`
  * AwayPuntYards `integer`
  * AwayPunts `integer`
  * AwayPuntsHadBlocked `integer`
  * AwayQuarterbackHits `integer`
  * AwayRedZoneAttempts `integer`
  * AwayRedZoneConversions `integer`
  * AwayReturnYards `integer`
  * AwayRushingAttempts `integer`
  * AwayRushingTouchdowns `integer`
  * AwayRushingYards `integer`
  * AwayRushingYardsPerAttempt `number`
  * AwaySackYards `integer`
  * AwaySacks `integer`
  * AwaySafeties `integer`
  * AwayScore `integer`
  * AwayScoreOvertime `integer`
  * AwayScoreQuarter1 `integer`
  * AwayScoreQuarter2 `integer`
  * AwayScoreQuarter3 `integer`
  * AwayScoreQuarter4 `integer`
  * AwaySoloTackles `integer`
  * AwayTacklesForLoss `integer`
  * AwayTakeaways `integer`
  * AwayTeam `string`
  * AwayThirdDownAttempts `integer`
  * AwayThirdDownConversions `integer`
  * AwayThirdDownPercentage `number`
  * AwayTimeOfPossession `string`
  * AwayTimesSacked `integer`
  * AwayTimesSackedYards `integer`
  * AwayTouchdowns `integer`
  * AwayTurnoverDifferential `integer`
  * AwayTwoPointConversionReturns `integer`
  * Date `string`
  * GameID `integer`
  * GameKey `string`
  * HomeAssistedTackles `integer`
  * HomeBlockedKickReturnTouchdowns `integer`
  * HomeBlockedKickReturnYards `integer`
  * HomeBlockedKicks `integer`
  * HomeCompletionPercentage `number`
  * HomeExtraPointKickingAttempts `integer`
  * HomeExtraPointKickingConversions `integer`
  * HomeExtraPointPassingAttempts `integer`
  * HomeExtraPointPassingConversions `integer`
  * HomeExtraPointRushingAttempts `integer`
  * HomeExtraPointRushingConversions `integer`
  * HomeExtraPointsHadBlocked `integer`
  * HomeFieldGoalAttempts `integer`
  * HomeFieldGoalReturnTouchdowns `integer`
  * HomeFieldGoalReturnYards `integer`
  * HomeFieldGoalsHadBlocked `integer`
  * HomeFieldGoalsMade `integer`
  * HomeFirstDowns `integer`
  * HomeFirstDownsByPassing `integer`
  * HomeFirstDownsByPenalty `integer`
  * HomeFirstDownsByRushing `integer`
  * HomeFourthDownAttempts `integer`
  * HomeFourthDownConversions `integer`
  * HomeFourthDownPercentage `number`
  * HomeFumbleReturnTouchdowns `integer`
  * HomeFumbleReturnYards `integer`
  * HomeFumbles `integer`
  * HomeFumblesForced `integer`
  * HomeFumblesLost `integer`
  * HomeFumblesRecovered `integer`
  * HomeGiveaways `integer`
  * HomeGoalToGoAttempts `integer`
  * HomeGoalToGoConversions `integer`
  * HomeInterceptionReturnTouchdowns `integer`
  * HomeInterceptionReturnYards `integer`
  * HomeInterceptionReturns `integer`
  * HomeKickReturnLong `integer`
  * HomeKickReturnTouchdowns `integer`
  * HomeKickReturnYards `integer`
  * HomeKickReturns `integer`
  * HomeKickoffTouchbacks `integer`
  * HomeKickoffs `integer`
  * HomeKickoffsInEndZone `integer`
  * HomeOffensivePlays `integer`
  * HomeOffensiveYards `integer`
  * HomeOffensiveYardsPerPlay `number`
  * HomePasserRating `number`
  * HomePassesDefended `integer`
  * HomePassingAttempts `integer`
  * HomePassingCompletions `integer`
  * HomePassingInterceptions `integer`
  * HomePassingTouchdowns `integer`
  * HomePassingYards `integer`
  * HomePassingYardsPerAttempt `number`
  * HomePassingYardsPerCompletion `number`
  * HomePenalties `integer`
  * HomePenaltyYards `integer`
  * HomePuntAverage `number`
  * HomePuntNetAverage `number`
  * HomePuntNetYards `integer`
  * HomePuntReturnLong `integer`
  * HomePuntReturnTouchdowns `integer`
  * HomePuntReturnYards `integer`
  * HomePuntReturns `integer`
  * HomePuntYards `integer`
  * HomePunts `integer`
  * HomePuntsHadBlocked `integer`
  * HomeQuarterbackHits `integer`
  * HomeRedZoneAttempts `integer`
  * HomeRedZoneConversions `integer`
  * HomeReturnYards `integer`
  * HomeRushingAttempts `integer`
  * HomeRushingTouchdowns `integer`
  * HomeRushingYards `integer`
  * HomeRushingYardsPerAttempt `number`
  * HomeSackYards `integer`
  * HomeSacks `integer`
  * HomeSafeties `integer`
  * HomeScore `integer`
  * HomeScoreOvertime `integer`
  * HomeScoreQuarter1 `integer`
  * HomeScoreQuarter2 `integer`
  * HomeScoreQuarter3 `integer`
  * HomeScoreQuarter4 `integer`
  * HomeSoloTackles `integer`
  * HomeTacklesForLoss `integer`
  * HomeTakeaways `integer`
  * HomeTeam `string`
  * HomeThirdDownAttempts `integer`
  * HomeThirdDownConversions `integer`
  * HomeThirdDownPercentage `number`
  * HomeTimeOfPossession `string`
  * HomeTimesSacked `integer`
  * HomeTimesSackedYards `integer`
  * HomeTouchdowns `integer`
  * HomeTurnoverDifferential `integer`
  * HomeTwoPointConversionReturns `integer`
  * Humidity `integer`
  * IsGameOver `boolean`
  * OverUnder `number`
  * PlayingSurface `string`
  * PointSpread `number`
  * ScoreID `integer`
  * Season `integer`
  * SeasonType `integer`
  * Stadium `string`
  * StadiumDetails [Stadium](#stadium)
  * StadiumID `integer`
  * Temperature `integer`
  * TotalScore `integer`
  * Week `integer`
  * WindSpeed `integer`

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

### Schedule
* Schedule `object`
  * AwayTeam `string`
  * AwayTeamMoneyLine `integer`
  * Canceled `boolean`
  * Channel `string`
  * Date `string`
  * DateTime `string`
  * Day `string`
  * ForecastDescription `string`
  * ForecastTempHigh `integer`
  * ForecastTempLow `integer`
  * ForecastWindChill `integer`
  * ForecastWindSpeed `integer`
  * GameKey `string`
  * GeoLat `number`
  * GeoLong `number`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * HomeTeam `string`
  * HomeTeamMoneyLine `integer`
  * OverUnder `number`
  * PointSpread `number`
  * ScoreID `integer`
  * Season `integer`
  * SeasonType `integer`
  * StadiumDetails [Stadium](#stadium)
  * StadiumID `integer`
  * Week `integer`

### Score
* Score `object`
  * AwayScore `integer`
  * AwayScoreOvertime `integer`
  * AwayScoreQuarter1 `integer`
  * AwayScoreQuarter2 `integer`
  * AwayScoreQuarter3 `integer`
  * AwayScoreQuarter4 `integer`
  * AwayTeam `string`
  * AwayTeamID `integer`
  * AwayTeamMoneyLine `integer`
  * Canceled `boolean`
  * Channel `string`
  * Closed `boolean`
  * Date `string`
  * DateTime `string`
  * Day `string`
  * Distance `string`
  * Down `integer`
  * DownAndDistance `string`
  * ForecastDescription `string`
  * ForecastTempHigh `integer`
  * ForecastTempLow `integer`
  * ForecastWindChill `integer`
  * ForecastWindSpeed `integer`
  * GameKey `string`
  * GeoLat `number`
  * GeoLong `number`
  * GlobalAwayTeamID `integer`
  * GlobalGameID `integer`
  * GlobalHomeTeamID `integer`
  * Has1stQuarterStarted `boolean`
  * Has2ndQuarterStarted `boolean`
  * Has3rdQuarterStarted `boolean`
  * Has4thQuarterStarted `boolean`
  * HasStarted `boolean`
  * HomeScore `integer`
  * HomeScoreOvertime `integer`
  * HomeScoreQuarter1 `integer`
  * HomeScoreQuarter2 `integer`
  * HomeScoreQuarter3 `integer`
  * HomeScoreQuarter4 `integer`
  * HomeTeam `string`
  * HomeTeamID `integer`
  * HomeTeamMoneyLine `integer`
  * IsInProgress `boolean`
  * IsOver `boolean`
  * IsOvertime `boolean`
  * LastPlay `string`
  * LastUpdated `string`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Possession `string`
  * Quarter `string`
  * QuarterDescription `string`
  * RedZone `string`
  * ScoreID `integer`
  * Season `integer`
  * SeasonType `integer`
  * StadiumDetails [Stadium](#stadium)
  * StadiumID `integer`
  * TimeRemaining `string`
  * Week `integer`
  * YardLine `integer`
  * YardLineTerritory `string`

### Stadium
* Stadium `object`
  * Capacity `integer`
  * City `string`
  * Country `string`
  * GeoLat `number`
  * GeoLong `number`
  * Name `string`
  * PlayingSurface `string`
  * StadiumID `integer`
  * State `string`

### Standing
* Standing `object`
  * Conference `string`
  * ConferenceLosses `integer`
  * ConferenceWins `integer`
  * Division `string`
  * DivisionLosses `integer`
  * DivisionWins `integer`
  * Losses `integer`
  * Name `string`
  * NetPoints `integer`
  * Percentage `number`
  * PointsAgainst `integer`
  * PointsFor `integer`
  * Season `integer`
  * SeasonType `integer`
  * Team `string`
  * TeamID `integer`
  * Ties `integer`
  * Touchdowns `integer`
  * Wins `integer`

### Team
* Team `object`
  * AverageDraftPosition `number`
  * AverageDraftPositionPPR `number`
  * ByeWeek `integer`
  * City `string`
  * Conference `string`
  * DefensiveCoordinator `string`
  * DefensiveScheme `string`
  * Division `string`
  * DraftKingsName `string`
  * DraftKingsPlayerID `integer`
  * FanDuelName `string`
  * FanDuelPlayerID `integer`
  * FantasyDraftName `string`
  * FantasyDraftPlayerID `integer`
  * FullName `string`
  * GlobalTeamID `integer`
  * HeadCoach `string`
  * Key `string`
  * Name `string`
  * OffensiveCoordinator `string`
  * OffensiveScheme `string`
  * PlayerID `integer`
  * PrimaryColor `string`
  * QuaternaryColor `string`
  * SecondaryColor `string`
  * SpecialTeamsCoach `string`
  * StadiumDetails [Stadium](#stadium)
  * StadiumID `integer`
  * TeamID `integer`
  * TertiaryColor `string`
  * UpcomingDraftKingsSalary `integer`
  * UpcomingFanDuelSalary `integer`
  * UpcomingOpponent `string`
  * UpcomingOpponentPositionRank `integer`
  * UpcomingOpponentRank `integer`
  * UpcomingSalary `integer`
  * UpcomingYahooSalary `integer`
  * WikipediaLogoUrl `string`
  * WikipediaWordMarkUrl `string`
  * YahooName `string`
  * YahooPlayerID `integer`

### TeamGame
* TeamGame `object`
  * AssistedTackles `integer`
  * BlockedKickReturnTouchdowns `integer`
  * BlockedKickReturnYards `integer`
  * BlockedKicks `integer`
  * CompletionPercentage `number`
  * Date `string`
  * DateTime `string`
  * Day `string`
  * DayOfWeek `string`
  * ExtraPointKickingAttempts `integer`
  * ExtraPointKickingConversions `integer`
  * ExtraPointPassingAttempts `integer`
  * ExtraPointPassingConversions `integer`
  * ExtraPointPercentage `number`
  * ExtraPointRushingAttempts `integer`
  * ExtraPointRushingConversions `integer`
  * ExtraPointsHadBlocked `integer`
  * FieldGoalAttempts `integer`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `integer`
  * FieldGoalReturnYards `integer`
  * FieldGoalsHadBlocked `integer`
  * FieldGoalsMade `integer`
  * FirstDowns `integer`
  * FirstDownsByPassing `integer`
  * FirstDownsByPenalty `integer`
  * FirstDownsByRushing `integer`
  * FourthDownAttempts `integer`
  * FourthDownConversions `integer`
  * FourthDownPercentage `number`
  * FumbleReturnTouchdowns `integer`
  * FumbleReturnYards `integer`
  * Fumbles `integer`
  * FumblesForced `integer`
  * FumblesLost `integer`
  * FumblesRecovered `integer`
  * GameKey `string`
  * Giveaways `integer`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * GoalToGoAttempts `integer`
  * GoalToGoConversions `integer`
  * GoalToGoPercentage `number`
  * HomeOrAway `string`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `integer`
  * InterceptionReturnYards `integer`
  * InterceptionReturns `integer`
  * IsGameOver `boolean`
  * KickReturnAverage `number`
  * KickReturnLong `integer`
  * KickReturnTouchdowns `integer`
  * KickReturnYardDifferential `integer`
  * KickReturnYards `integer`
  * KickReturns `integer`
  * KickoffTouchbacks `integer`
  * Kickoffs `integer`
  * KickoffsInEndZone `integer`
  * OffensivePlays `integer`
  * OffensiveYards `integer`
  * OffensiveYardsPerPlay `number`
  * Opponent `string`
  * OpponentAssistedTackles `integer`
  * OpponentBlockedKickReturnTouchdowns `integer`
  * OpponentBlockedKickReturnYards `integer`
  * OpponentBlockedKicks `integer`
  * OpponentCompletionPercentage `number`
  * OpponentExtraPointKickingAttempts `integer`
  * OpponentExtraPointKickingConversions `integer`
  * OpponentExtraPointPassingAttempts `integer`
  * OpponentExtraPointPassingConversions `integer`
  * OpponentExtraPointPercentage `number`
  * OpponentExtraPointRushingAttempts `integer`
  * OpponentExtraPointRushingConversions `integer`
  * OpponentExtraPointsHadBlocked `integer`
  * OpponentFieldGoalAttempts `integer`
  * OpponentFieldGoalPercentage `number`
  * OpponentFieldGoalReturnTouchdowns `integer`
  * OpponentFieldGoalReturnYards `integer`
  * OpponentFieldGoalsHadBlocked `integer`
  * OpponentFieldGoalsMade `integer`
  * OpponentFirstDowns `integer`
  * OpponentFirstDownsByPassing `integer`
  * OpponentFirstDownsByPenalty `integer`
  * OpponentFirstDownsByRushing `integer`
  * OpponentFourthDownAttempts `integer`
  * OpponentFourthDownConversions `integer`
  * OpponentFourthDownPercentage `number`
  * OpponentFumbleReturnTouchdowns `integer`
  * OpponentFumbleReturnYards `integer`
  * OpponentFumbles `integer`
  * OpponentFumblesForced `integer`
  * OpponentFumblesLost `integer`
  * OpponentFumblesRecovered `integer`
  * OpponentGiveaways `integer`
  * OpponentGoalToGoAttempts `integer`
  * OpponentGoalToGoConversions `integer`
  * OpponentGoalToGoPercentage `number`
  * OpponentID `integer`
  * OpponentInterceptionReturnTouchdowns `integer`
  * OpponentInterceptionReturnYards `integer`
  * OpponentInterceptionReturns `integer`
  * OpponentKickReturnAverage `number`
  * OpponentKickReturnLong `integer`
  * OpponentKickReturnTouchdowns `integer`
  * OpponentKickReturnYards `integer`
  * OpponentKickReturns `integer`
  * OpponentKickoffTouchbacks `integer`
  * OpponentKickoffs `integer`
  * OpponentKickoffsInEndZone `integer`
  * OpponentOffensivePlays `integer`
  * OpponentOffensiveYards `integer`
  * OpponentOffensiveYardsPerPlay `number`
  * OpponentPasserRating `number`
  * OpponentPassesDefended `integer`
  * OpponentPassingAttempts `integer`
  * OpponentPassingCompletions `integer`
  * OpponentPassingDropbacks `integer`
  * OpponentPassingInterceptionPercentage `number`
  * OpponentPassingInterceptions `integer`
  * OpponentPassingTouchdowns `integer`
  * OpponentPassingYards `integer`
  * OpponentPassingYardsPerAttempt `number`
  * OpponentPassingYardsPerCompletion `number`
  * OpponentPenalties `integer`
  * OpponentPenaltyYards `integer`
  * OpponentPuntAverage `number`
  * OpponentPuntNetAverage `number`
  * OpponentPuntNetYards `integer`
  * OpponentPuntReturnAverage `number`
  * OpponentPuntReturnLong `integer`
  * OpponentPuntReturnTouchdowns `integer`
  * OpponentPuntReturnYards `integer`
  * OpponentPuntReturns `integer`
  * OpponentPuntYards `integer`
  * OpponentPunts `integer`
  * OpponentPuntsHadBlocked `integer`
  * OpponentQuarterbackHits `integer`
  * OpponentQuarterbackHitsDifferential `integer`
  * OpponentQuarterbackHitsPercentage `number`
  * OpponentQuarterbackSacksDifferential `integer`
  * OpponentRedZoneAttempts `integer`
  * OpponentRedZoneConversions `integer`
  * OpponentRedZonePercentage `number`
  * OpponentReturnYards `integer`
  * OpponentRushingAttempts `integer`
  * OpponentRushingTouchdowns `integer`
  * OpponentRushingYards `integer`
  * OpponentRushingYardsPerAttempt `number`
  * OpponentSackYards `integer`
  * OpponentSacks `integer`
  * OpponentSafeties `integer`
  * OpponentScore `integer`
  * OpponentScoreOvertime `integer`
  * OpponentScoreQuarter1 `integer`
  * OpponentScoreQuarter2 `integer`
  * OpponentScoreQuarter3 `integer`
  * OpponentScoreQuarter4 `integer`
  * OpponentSoloTackles `integer`
  * OpponentTacklesForLoss `integer`
  * OpponentTacklesForLossDifferential `integer`
  * OpponentTacklesForLossPercentage `number`
  * OpponentTakeaways `integer`
  * OpponentThirdDownAttempts `integer`
  * OpponentThirdDownConversions `integer`
  * OpponentThirdDownPercentage `number`
  * OpponentTimeOfPossession `string`
  * OpponentTimeOfPossessionMinutes `integer`
  * OpponentTimeOfPossessionSeconds `integer`
  * OpponentTimesSacked `integer`
  * OpponentTimesSackedPercentage `number`
  * OpponentTimesSackedYards `integer`
  * OpponentTouchdowns `integer`
  * OpponentTurnoverDifferential `integer`
  * OpponentTwoPointConversionReturns `integer`
  * OverUnder `number`
  * PasserRating `number`
  * PassesDefended `integer`
  * PassingAttempts `integer`
  * PassingCompletions `integer`
  * PassingDropbacks `integer`
  * PassingInterceptionPercentage `number`
  * PassingInterceptions `integer`
  * PassingTouchdowns `integer`
  * PassingYards `integer`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Penalties `integer`
  * PenaltyYardDifferential `integer`
  * PenaltyYards `integer`
  * PlayingSurface `string`
  * PointDifferential `integer`
  * PointSpread `number`
  * PuntAverage `number`
  * PuntNetAverage `number`
  * PuntNetYards `integer`
  * PuntReturnAverage `number`
  * PuntReturnLong `integer`
  * PuntReturnTouchdowns `integer`
  * PuntReturnYardDifferential `integer`
  * PuntReturnYards `integer`
  * PuntReturns `integer`
  * PuntYards `integer`
  * Punts `integer`
  * PuntsHadBlocked `integer`
  * QuarterbackHits `integer`
  * QuarterbackHitsDifferential `integer`
  * QuarterbackHitsPercentage `number`
  * QuarterbackSacksDifferential `integer`
  * RedZoneAttempts `integer`
  * RedZoneConversions `integer`
  * RedZonePercentage `number`
  * ReturnYards `integer`
  * RushingAttempts `integer`
  * RushingTouchdowns `integer`
  * RushingYards `integer`
  * RushingYardsPerAttempt `number`
  * SackYards `integer`
  * Sacks `integer`
  * Safeties `integer`
  * Score `integer`
  * ScoreID `integer`
  * ScoreOvertime `integer`
  * ScoreQuarter1 `integer`
  * ScoreQuarter2 `integer`
  * ScoreQuarter3 `integer`
  * ScoreQuarter4 `integer`
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `integer`
  * Stadium `string`
  * TacklesForLoss `integer`
  * TacklesForLossDifferential `integer`
  * TacklesForLossPercentage `number`
  * Takeaways `integer`
  * Team `string`
  * TeamGameID `integer`
  * TeamID `integer`
  * TeamName `string`
  * Temperature `integer`
  * ThirdDownAttempts `integer`
  * ThirdDownConversions `integer`
  * ThirdDownPercentage `number`
  * TimeOfPossession `string`
  * TimeOfPossessionMinutes `integer`
  * TimeOfPossessionSeconds `integer`
  * TimesSacked `integer`
  * TimesSackedPercentage `number`
  * TimesSackedYards `integer`
  * TotalScore `integer`
  * Touchdowns `integer`
  * TurnoverDifferential `integer`
  * TwoPointConversionReturns `integer`
  * Week `integer`
  * WindSpeed `integer`

### TeamSeason
* TeamSeason `object`
  * AssistedTackles `integer`
  * BlockedKickReturnTouchdowns `integer`
  * BlockedKickReturnYards `integer`
  * BlockedKicks `integer`
  * CompletionPercentage `number`
  * ExtraPointKickingAttempts `integer`
  * ExtraPointKickingConversions `integer`
  * ExtraPointPassingAttempts `integer`
  * ExtraPointPassingConversions `integer`
  * ExtraPointPercentage `number`
  * ExtraPointRushingAttempts `integer`
  * ExtraPointRushingConversions `integer`
  * ExtraPointsHadBlocked `integer`
  * FieldGoalAttempts `integer`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `integer`
  * FieldGoalReturnYards `integer`
  * FieldGoalsHadBlocked `integer`
  * FieldGoalsMade `integer`
  * FirstDowns `integer`
  * FirstDownsByPassing `integer`
  * FirstDownsByPenalty `integer`
  * FirstDownsByRushing `integer`
  * FourthDownAttempts `integer`
  * FourthDownConversions `integer`
  * FourthDownPercentage `number`
  * FumbleReturnTouchdowns `integer`
  * FumbleReturnYards `integer`
  * Fumbles `integer`
  * FumblesForced `integer`
  * FumblesLost `integer`
  * FumblesRecovered `integer`
  * Games `integer`
  * Giveaways `integer`
  * GlobalTeamID `integer`
  * GoalToGoAttempts `integer`
  * GoalToGoConversions `integer`
  * GoalToGoPercentage `number`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `integer`
  * InterceptionReturnYards `integer`
  * InterceptionReturns `integer`
  * KickReturnAverage `number`
  * KickReturnLong `integer`
  * KickReturnTouchdowns `integer`
  * KickReturnYardDifferential `integer`
  * KickReturnYards `integer`
  * KickReturns `integer`
  * KickoffTouchbacks `integer`
  * Kickoffs `integer`
  * KickoffsInEndZone `integer`
  * OffensivePlays `integer`
  * OffensiveYards `integer`
  * OffensiveYardsPerPlay `number`
  * OpponentAssistedTackles `integer`
  * OpponentBlockedKickReturnTouchdowns `integer`
  * OpponentBlockedKickReturnYards `integer`
  * OpponentBlockedKicks `integer`
  * OpponentCompletionPercentage `number`
  * OpponentExtraPointKickingAttempts `integer`
  * OpponentExtraPointKickingConversions `integer`
  * OpponentExtraPointPassingAttempts `integer`
  * OpponentExtraPointPassingConversions `integer`
  * OpponentExtraPointPercentage `number`
  * OpponentExtraPointRushingAttempts `integer`
  * OpponentExtraPointRushingConversions `integer`
  * OpponentExtraPointsHadBlocked `integer`
  * OpponentFieldGoalAttempts `integer`
  * OpponentFieldGoalPercentage `number`
  * OpponentFieldGoalReturnTouchdowns `integer`
  * OpponentFieldGoalReturnYards `integer`
  * OpponentFieldGoalsHadBlocked `integer`
  * OpponentFieldGoalsMade `integer`
  * OpponentFirstDowns `integer`
  * OpponentFirstDownsByPassing `integer`
  * OpponentFirstDownsByPenalty `integer`
  * OpponentFirstDownsByRushing `integer`
  * OpponentFourthDownAttempts `integer`
  * OpponentFourthDownConversions `integer`
  * OpponentFourthDownPercentage `number`
  * OpponentFumbleReturnTouchdowns `integer`
  * OpponentFumbleReturnYards `integer`
  * OpponentFumbles `integer`
  * OpponentFumblesForced `integer`
  * OpponentFumblesLost `integer`
  * OpponentFumblesRecovered `integer`
  * OpponentGiveaways `integer`
  * OpponentGoalToGoAttempts `integer`
  * OpponentGoalToGoConversions `integer`
  * OpponentGoalToGoPercentage `number`
  * OpponentInterceptionReturnTouchdowns `integer`
  * OpponentInterceptionReturnYards `integer`
  * OpponentInterceptionReturns `integer`
  * OpponentKickReturnAverage `number`
  * OpponentKickReturnLong `integer`
  * OpponentKickReturnTouchdowns `integer`
  * OpponentKickReturnYards `integer`
  * OpponentKickReturns `integer`
  * OpponentKickoffTouchbacks `integer`
  * OpponentKickoffs `integer`
  * OpponentKickoffsInEndZone `integer`
  * OpponentOffensivePlays `integer`
  * OpponentOffensiveYards `integer`
  * OpponentOffensiveYardsPerPlay `number`
  * OpponentPasserRating `number`
  * OpponentPassesDefended `integer`
  * OpponentPassingAttempts `integer`
  * OpponentPassingCompletions `integer`
  * OpponentPassingDropbacks `integer`
  * OpponentPassingInterceptionPercentage `number`
  * OpponentPassingInterceptions `integer`
  * OpponentPassingTouchdowns `integer`
  * OpponentPassingYards `integer`
  * OpponentPassingYardsPerAttempt `number`
  * OpponentPassingYardsPerCompletion `number`
  * OpponentPenalties `integer`
  * OpponentPenaltyYards `integer`
  * OpponentPuntAverage `number`
  * OpponentPuntNetAverage `number`
  * OpponentPuntNetYards `integer`
  * OpponentPuntReturnAverage `number`
  * OpponentPuntReturnLong `integer`
  * OpponentPuntReturnTouchdowns `integer`
  * OpponentPuntReturnYards `integer`
  * OpponentPuntReturns `integer`
  * OpponentPuntYards `integer`
  * OpponentPunts `integer`
  * OpponentPuntsHadBlocked `integer`
  * OpponentQuarterbackHits `integer`
  * OpponentQuarterbackHitsDifferential `integer`
  * OpponentQuarterbackHitsPercentage `number`
  * OpponentQuarterbackSacksDifferential `integer`
  * OpponentRedZoneAttempts `integer`
  * OpponentRedZoneConversions `integer`
  * OpponentRedZonePercentage `number`
  * OpponentReturnYards `integer`
  * OpponentRushingAttempts `integer`
  * OpponentRushingTouchdowns `integer`
  * OpponentRushingYards `integer`
  * OpponentRushingYardsPerAttempt `number`
  * OpponentSackYards `integer`
  * OpponentSacks `integer`
  * OpponentSafeties `integer`
  * OpponentScore `integer`
  * OpponentScoreOvertime `integer`
  * OpponentScoreQuarter1 `integer`
  * OpponentScoreQuarter2 `integer`
  * OpponentScoreQuarter3 `integer`
  * OpponentScoreQuarter4 `integer`
  * OpponentSoloTackles `integer`
  * OpponentTacklesForLoss `integer`
  * OpponentTacklesForLossDifferential `integer`
  * OpponentTacklesForLossPercentage `number`
  * OpponentTakeaways `integer`
  * OpponentThirdDownAttempts `integer`
  * OpponentThirdDownConversions `integer`
  * OpponentThirdDownPercentage `number`
  * OpponentTimeOfPossession `string`
  * OpponentTimesSacked `integer`
  * OpponentTimesSackedPercentage `number`
  * OpponentTimesSackedYards `integer`
  * OpponentTouchdowns `integer`
  * OpponentTurnoverDifferential `integer`
  * OpponentTwoPointConversionReturns `integer`
  * OverUnder `number`
  * PasserRating `number`
  * PassesDefended `integer`
  * PassingAttempts `integer`
  * PassingCompletions `integer`
  * PassingDropbacks `integer`
  * PassingInterceptionPercentage `number`
  * PassingInterceptions `integer`
  * PassingTouchdowns `integer`
  * PassingYards `integer`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Penalties `integer`
  * PenaltyYardDifferential `integer`
  * PenaltyYards `integer`
  * PointDifferential `integer`
  * PointSpread `number`
  * PuntAverage `number`
  * PuntNetAverage `number`
  * PuntNetYards `integer`
  * PuntReturnAverage `number`
  * PuntReturnLong `integer`
  * PuntReturnTouchdowns `integer`
  * PuntReturnYardDifferential `integer`
  * PuntReturnYards `integer`
  * PuntReturns `integer`
  * PuntYards `integer`
  * Punts `integer`
  * PuntsHadBlocked `integer`
  * QuarterbackHits `integer`
  * QuarterbackHitsDifferential `integer`
  * QuarterbackHitsPercentage `number`
  * QuarterbackSacksDifferential `integer`
  * RedZoneAttempts `integer`
  * RedZoneConversions `integer`
  * RedZonePercentage `number`
  * ReturnYards `integer`
  * RushingAttempts `integer`
  * RushingTouchdowns `integer`
  * RushingYards `integer`
  * RushingYardsPerAttempt `number`
  * SackYards `integer`
  * Sacks `integer`
  * Safeties `integer`
  * Score `integer`
  * ScoreOvertime `integer`
  * ScoreQuarter1 `integer`
  * ScoreQuarter2 `integer`
  * ScoreQuarter3 `integer`
  * ScoreQuarter4 `integer`
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `integer`
  * TacklesForLoss `integer`
  * TacklesForLossDifferential `integer`
  * TacklesForLossPercentage `number`
  * Takeaways `integer`
  * Team `string`
  * TeamID `integer`
  * TeamName `string`
  * TeamSeasonID `integer`
  * Temperature `integer`
  * ThirdDownAttempts `integer`
  * ThirdDownConversions `integer`
  * ThirdDownPercentage `number`
  * TimeOfPossession `string`
  * TimesSacked `integer`
  * TimesSackedPercentage `number`
  * TimesSackedYards `integer`
  * TotalScore `integer`
  * Touchdowns `integer`
  * TurnoverDifferential `integer`
  * TwoPointConversionReturns `integer`
  * WindSpeed `integer`

### Timeframe
* Timeframe `object`
  * ApiSeason `string`
  * ApiWeek `string`
  * EndDate `string`
  * FirstGameEnd `string`
  * FirstGameStart `string`
  * HasEnded `boolean`
  * HasFirstGameEnded `boolean`
  * HasFirstGameStarted `boolean`
  * HasGames `boolean`
  * HasLastGameEnded `boolean`
  * HasStarted `boolean`
  * LastGameEnd `string`
  * Name `string`
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * StartDate `string`
  * Week `integer`


