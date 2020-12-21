# @datafire/sportsdata_nfl_v3_stats

Client library for NFL v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_nfl_v3_stats
```
```js
let sportsdata_nfl_v3_stats = require('@datafire/sportsdata_nfl_v3_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NFL rosters, player stats, team stats, and fantasy stats API.

## Actions

### LegacyBoxScoresActive
This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.


```js
sportsdata_nfl_v3_stats.LegacyBoxScoresActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### TeamsAll
Gets all teams, including pro bowl teams.


```js
sportsdata_nfl_v3_stats.TeamsAll({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Team](#team)

### AreGamesInProgress
Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.


```js
sportsdata_nfl_v3_stats.AreGamesInProgress({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `boolean`

### LegacyBoxScore
Legacy Box Score


```js
sportsdata_nfl_v3_stats.LegacyBoxScore({
  "format": "",
  "season": "",
  "week": "",
  "hometeam": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * hometeam **required** `string`: Abbreviation of the home team. Example: <code>WAS</code>.

#### Output
* output [BoxScore](#boxscore)

### BoxScoreByScoreidV
Box Score by ScoreID V3


```js
sportsdata_nfl_v3_stats.BoxScoreByScoreidV({
  "format": "",
  "scoreid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * scoreid **required** `string`: The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>, etc.

#### Output
* output [BoxScoreV3](#boxscorev3)

### BoxScoreV
Box Score V3


```js
sportsdata_nfl_v3_stats.BoxScoreV({
  "format": "",
  "season": "",
  "week": "",
  "hometeam": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
  * hometeam **required** `string`: Abbreviation of a team playing in this game. Example: <code>WAS</code>.

#### Output
* output [BoxScoreV3](#boxscorev3)

### LegacyBoxScores
This method returns all box scores for a given season and week.


```js
sportsdata_nfl_v3_stats.LegacyBoxScores({
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
  * items [BoxScore](#boxscore)

### LegacyBoxScoresDelta
This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.


```js
sportsdata_nfl_v3_stats.LegacyBoxScoresDelta({
  "format": "",
  "season": "",
  "week": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### BoxScoresDeltaV
This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.


```js
sportsdata_nfl_v3_stats.BoxScoresDeltaV({
  "format": "",
  "season": "",
  "week": "",
  "playerstoinclude": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
  * playerstoinclude **required** `string` (values: all, fantasy, idp): The subcategory of players to include in the returned PlayerGame records. Possible values include:<br><br>
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br><code>1</code>,

#### Output
* output `array`
  * items [BoxScoreV3](#boxscorev3)

### ByeWeeks
Get bye weeks for the teams during a specified NFL season. 


```js
sportsdata_nfl_v3_stats.ByeWeeks({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [Bye](#bye)

### SeasonCurrent
Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.


```js
sportsdata_nfl_v3_stats.SeasonCurrent({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### WeekCurrent
Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight EST. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.


```js
sportsdata_nfl_v3_stats.WeekCurrent({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### DailyFantasyPlayers
Daily Fantasy Players


```js
sportsdata_nfl_v3_stats.DailyFantasyPlayers({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: 

#### Output
* output `array`
  * items [DailyFantasyPlayer](#dailyfantasyplayer)

### DailyFantasyScoring
Daily Fantasy Scoring


```js
sportsdata_nfl_v3_stats.DailyFantasyScoring({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the contest for which you're pulling players

#### Output
* output `array`
  * items [DailyFantasyScoring](#dailyfantasyscoring)

### DfsSlatesByDate
DFS Slates by Date


```js
sportsdata_nfl_v3_stats.DfsSlatesByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the slates.

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### DfsSlatesByWeek
DFS Slates by Week


```js
sportsdata_nfl_v3_stats.DfsSlatesByWeek({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### FantasyDefenseGameStats
Fantasy Defense Game Stats


```js
sportsdata_nfl_v3_stats.FantasyDefenseGameStats({
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
  * items [FantasyDefenseGame](#fantasydefensegame)

### FantasyDefenseGameStatsByTeam
Fantasy Defense Game Stats by Team


```js
sportsdata_nfl_v3_stats.FantasyDefenseGameStatsByTeam({
  "format": "",
  "season": "",
  "week": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output [FantasyDefenseGame](#fantasydefensegame)

### FantasyDefenseSeasonStats
Fantasy Defense Season Stats


```js
sportsdata_nfl_v3_stats.FantasyDefenseSeasonStats({
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
  * items [FantasyDefenseSeason](#fantasydefenseseason)

### FantasyDefenseSeasonStatsByTeam
Fantasy Defense Season Stats by Team


```js
sportsdata_nfl_v3_stats.FantasyDefenseSeasonStatsByTeam({
  "format": "",
  "season": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output [FantasyDefenseSeason](#fantasydefenseseason)

### FantasyPlayersWithAdp
This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).


```js
sportsdata_nfl_v3_stats.FantasyPlayersWithAdp({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [FantasyPlayer](#fantasyplayer)

### IdpFantasyPlayersWithAdp
This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.


```js
sportsdata_nfl_v3_stats.IdpFantasyPlayersWithAdp({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [FantasyPlayer](#fantasyplayer)

### LegacyBoxScoresFinal
Legacy Box Scores Final


```js
sportsdata_nfl_v3_stats.LegacyBoxScoresFinal({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### PlayerDetailsByFreeAgents
Player Details by Free Agents


```js
sportsdata_nfl_v3_stats.PlayerDetailsByFreeAgents({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### LeagueLeadersByWeek
League Leaders by Week


```js
sportsdata_nfl_v3_stats.LeagueLeadersByWeek({
  "format": "",
  "season": "",
  "week": "",
  "position": "",
  "column": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): 
  * season **required** `string`: 
  * week **required** `string`: 
  * position **required** `string` (values: ALL, OFFENSE, QB, RB, WR, TE, DEFENSE, DL, LB, DB, K): Playerâ€™s position that you would like to filter by.
  * column **required** `string` (values: FantasyPoints, PassingYards, RushingYards, Receptions, Sacks, Interceptions, Touchdowns): Response member you would like results sorted by.

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### GameStatsBySeasonDeprecatedUseTeamGameStatsInstead
Game stats for a specified season.


```js
sportsdata_nfl_v3_stats.GameStatsBySeasonDeprecatedUseTeamGameStatsInstead({
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
  * items [Game](#game)

### GameStatsByWeekDeprecatedUseTeamGameStatsInstead
Game stats for a specified season and week.


```js
sportsdata_nfl_v3_stats.GameStatsByWeekDeprecatedUseTeamGameStatsInstead({
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

### Injuries
Injuries


```js
sportsdata_nfl_v3_stats.Injuries({
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
  * items [Injury](#injury)

### InjuriesByTeam
Injuries by Team


```js
sportsdata_nfl_v3_stats.InjuriesByTeam({
  "format": "",
  "season": "",
  "week": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output `array`
  * items [Injury](#injury)

### SeasonLastCompleted
Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.


```js
sportsdata_nfl_v3_stats.SeasonLastCompleted({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### WeekLastCompleted

        Number of the last completed week in the current NFL season. This value changes immediately after the last game of the week is completed and the data is available. This usually happens right after the Monday night game.
        Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.
      


```js
sportsdata_nfl_v3_stats.WeekLastCompleted({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### LegacyBoxScoresLive
Legacy Box Scores Live


```js
sportsdata_nfl_v3_stats.LegacyBoxScoresLive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### News
News


```js
sportsdata_nfl_v3_stats.News({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [News](#news)

### NewsByDate
News by Date


```js
sportsdata_nfl_v3_stats.NewsByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the news.

#### Output
* output `array`
  * items [News](#news)

### NewsByPlayer
News by Player


```js
sportsdata_nfl_v3_stats.NewsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: 
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.

#### Output
* output `array`
  * items [News](#news)

### NewsByTeam
News by Team


```js
sportsdata_nfl_v3_stats.NewsByTeam({
  "format": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output `array`
  * items [News](#news)

### PlayerDetailsByPlayer
Player Details by Player


```js
sportsdata_nfl_v3_stats.PlayerDetailsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.

#### Output
* output [PlayerDetail](#playerdetail)

### PlayerGameRedZoneStatsInsideFive
Player Game Red Zone Stats Inside Five


```js
sportsdata_nfl_v3_stats.PlayerGameRedZoneStatsInsideFive({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.

#### Output
* output `array`
  * items [PlayerGameRedZone](#playergameredzone)

### PlayerGameRedZoneStatsInsideTen
Player Game Red Zone Stats Inside Ten


```js
sportsdata_nfl_v3_stats.PlayerGameRedZoneStatsInsideTen({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.

#### Output
* output `array`
  * items [PlayerGameRedZone](#playergameredzone)

### PlayerGameRedZoneStats
Player Game Red Zone Stats


```js
sportsdata_nfl_v3_stats.PlayerGameRedZoneStats({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.

#### Output
* output `array`
  * items [PlayerGameRedZone](#playergameredzone)

### PlayerGameStatsByPlayer
Player Game Stats by Player


```js
sportsdata_nfl_v3_stats.PlayerGameStatsByPlayer({
  "format": "",
  "season": "",
  "week": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.

#### Output
* output [PlayerGame](#playergame)

### PlayerGameLogsBySeason
Player Game Logs By Season


```js
sportsdata_nfl_v3_stats.PlayerGameLogsBySeason({
  "format": "",
  "season": "",
  "playerid": "",
  "numberofgames": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: JSON, XML): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Season to get games from. Example <code>2019POST</code>, <code>2020</code>
  * playerid **required** `string`: Unique FantasyData Player ID. Example:<code>17920</code>.
  * numberofgames **required** `string`: How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### PlayerGameStatsByTeam
Player Game Stats by Team


```js
sportsdata_nfl_v3_stats.PlayerGameStatsByTeam({
  "format": "",
  "season": "",
  "week": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### PlayerGameStatsByWeek
Player Game Stats by Week


```js
sportsdata_nfl_v3_stats.PlayerGameStatsByWeek({
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
  * items [PlayerGame](#playergame)

### PlayerGameStatsByWeekDelta
Player Game Stats by Week Delta


```js
sportsdata_nfl_v3_stats.PlayerGameStatsByWeekDelta({
  "format": "",
  "season": "",
  "week": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### PlayerGameStatsDelta
Player Game Stats Delta


```js
sportsdata_nfl_v3_stats.PlayerGameStatsDelta({
  "format": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * minutes **required** `string`: 

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### FantasyPlayerOwnershipPercentagesSeasonLong
Fantasy Player Ownership Percentages (Season-Long)


```js
sportsdata_nfl_v3_stats.FantasyPlayerOwnershipPercentagesSeasonLong({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season and the season type. If no season type is provided, then the default is regular season.
  * week **required** `string`: Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.

#### Output
* output `array`
  * items [PlayerOwnership](#playerownership)

### PlayerSeasonRedZoneStatsInsideFive
Player Season Red Zone Stats Inside Five


```js
sportsdata_nfl_v3_stats.PlayerSeasonRedZoneStatsInsideFive({
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
  * items [PlayerSeasonRedZone](#playerseasonredzone)

### PlayerSeasonRedZoneStatsInsideTen
Player Season Red Zone Stats Inside Ten


```js
sportsdata_nfl_v3_stats.PlayerSeasonRedZoneStatsInsideTen({
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
  * items [PlayerSeasonRedZone](#playerseasonredzone)

### PlayerSeasonRedZoneStats
Player Season Red Zone Stats


```js
sportsdata_nfl_v3_stats.PlayerSeasonRedZoneStats({
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
  * items [PlayerSeasonRedZone](#playerseasonredzone)

### PlayerSeasonStats
Player Season Stats


```js
sportsdata_nfl_v3_stats.PlayerSeasonStats({
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
  * items [PlayerSeason](#playerseason)

### PlayerSeasonStatsByPlayer
Player Season Stats by Player


```js
sportsdata_nfl_v3_stats.PlayerSeasonStatsByPlayer({
  "format": "",
  "season": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * playerid **required** `string`: Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerSeasonStatsByTeam
Player Season Stats by Team


```js
sportsdata_nfl_v3_stats.PlayerSeasonStatsByTeam({
  "format": "",
  "season": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * team **required** `string`: Abbreviation of the team. Example: <code>WAS</code>.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerSeasonThirdDownStats
Player Season Third Down Stats


```js
sportsdata_nfl_v3_stats.PlayerSeasonThirdDownStats({
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
  * items [PlayerSeasonThirdDown](#playerseasonthirddown)

### PlayerDetailsByAvailable
Player Details by Available


```js
sportsdata_nfl_v3_stats.PlayerDetailsByAvailable({
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
sportsdata_nfl_v3_stats.PlayerDetailsByTeam({
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
  * items [PlayerDetail](#playerdetail)

### ProBowlers
Pro Bowlers


```js
sportsdata_nfl_v3_stats.ProBowlers({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season

#### Output
* output `array`
  * items [PlayerInfo](#playerinfo)

### LegacyBoxScoresDeltaCurrentWeek
Legacy Box Scores Delta (Current Week)


```js
sportsdata_nfl_v3_stats.LegacyBoxScoresDeltaCurrentWeek({
  "format": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### PlayerDetailsByRookieDraftYear
Player Details by Rookie Draft Year


```js
sportsdata_nfl_v3_stats.PlayerDetailsByRookieDraftYear({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc.

#### Output
* output `array`
  * items [Player](#player)

### Schedule
Game schedule for a specified season.


```js
sportsdata_nfl_v3_stats.Schedule({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.

#### Output
* output `array`
  * items [Schedule](#schedule)

### ScoresBySeason
Game scores for a specified season.


```js
sportsdata_nfl_v3_stats.ScoresBySeason({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.

#### Output
* output `array`
  * items [Score](#score)

### ScoresByWeek
Get game scores for a specified week of a season.


```js
sportsdata_nfl_v3_stats.ScoresByWeek({
  "format": "",
  "season": "",
  "week": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * week **required** `string`: 

#### Output
* output `array`
  * items [Score](#score)

### LeagueLeadersBySeason
League Leaders by Season


```js
sportsdata_nfl_v3_stats.LeagueLeadersBySeason({
  "format": "",
  "season": "",
  "position": "",
  "column": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: XML, JSON): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 
  * position **required** `string` (values: ALL, OFFENSE, QB, RB, WR, TE, DEFENSE, DL, LB, DB, K): Playerâ€™s position that you would like to filter by.
  * column **required** `string` (values: FantasyPoints, PassingYards, RushingYards, Receptions, Sacks, Interceptions, Touchdowns): Response member you would like results sorted by.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### BoxScoresVSimulation
Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.


```js
sportsdata_nfl_v3_stats.BoxScoresVSimulation({
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
  * items [BoxScoreV3](#boxscorev3)

### ScoresByWeekSimulation
Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.


```js
sportsdata_nfl_v3_stats.ScoresByWeekSimulation({
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
sportsdata_nfl_v3_stats.Stadiums({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Stadium](#stadium)

### Standings
Standings


```js
sportsdata_nfl_v3_stats.Standings({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [Standing](#standing)

### TeamGameStats
Team Game Stats


```js
sportsdata_nfl_v3_stats.TeamGameStats({
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
sportsdata_nfl_v3_stats.TeamSeasonStats({
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
sportsdata_nfl_v3_stats.TeamsActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Team](#team)

### TeamsBySeason
List of teams playing in a specified season.


```js
sportsdata_nfl_v3_stats.TeamsBySeason({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: 

#### Output
* output `array`
  * items [Team](#team)

### Timeframes
Get detailed information about past, present, and future timeframes.


```js
sportsdata_nfl_v3_stats.Timeframes({
  "format": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * type **required** `string`: The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.

#### Output
* output `array`
  * items [Timeframe](#timeframe)

### SeasonUpcoming
Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.


```js
sportsdata_nfl_v3_stats.SeasonUpcoming({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`

### WeekUpcoming
Number of the upcoming week of the NFL season. This value changes immediately after the final game of the week is completed. We consider upcoming week to be the current week, until current week is over. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.


```js
sportsdata_nfl_v3_stats.WeekUpcoming({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `integer`



## Definitions

### BoxScore
* BoxScore `object`
  * AwayDefense `array`
    * items [PlayerDefense](#playerdefense)
  * AwayFantasyDefense [FantasyDefenseGame](#fantasydefensegame)
  * AwayKickPuntReturns `array`
    * items [PlayerKickPuntReturns](#playerkickpuntreturns)
  * AwayKicking `array`
    * items [PlayerKicking](#playerkicking)
  * AwayPassing `array`
    * items [PlayerPassing](#playerpassing)
  * AwayPunting `array`
    * items [PlayerPunting](#playerpunting)
  * AwayReceiving `array`
    * items [PlayerReceiving](#playerreceiving)
  * AwayRushing `array`
    * items [PlayerRushing](#playerrushing)
  * Game [Game](#game)
  * HomeDefense `array`
    * items [PlayerDefense](#playerdefense)
  * HomeFantasyDefense [FantasyDefenseGame](#fantasydefensegame)
  * HomeKickPuntReturns `array`
    * items [PlayerKickPuntReturns](#playerkickpuntreturns)
  * HomeKicking `array`
    * items [PlayerKicking](#playerkicking)
  * HomePassing `array`
    * items [PlayerPassing](#playerpassing)
  * HomePunting `array`
    * items [PlayerPunting](#playerpunting)
  * HomeReceiving `array`
    * items [PlayerReceiving](#playerreceiving)
  * HomeRushing `array`
    * items [PlayerRushing](#playerrushing)
  * Score [Score](#score)
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * ScoringPlays `array`
    * items [ScoringPlay](#scoringplay)

### BoxScoreV3
* BoxScoreV3 `object`
  * FantasyDefenseGames `array`
    * items [FantasyDefenseGame](#fantasydefensegame)
  * PlayerGames `array`
    * items [PlayerGame](#playergame)
  * Quarters `array`
    * items [Quarter](#quarter)
  * Score [Score](#score)
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * ScoringPlays `array`
    * items [ScoringPlay](#scoringplay)
  * TeamGames `array`
    * items [TeamGame](#teamgame)

### Bye
* Bye `object`
  * Season `integer`
  * Team `string`
  * Week `integer`

### DailyFantasyPlayer
* DailyFantasyPlayer `object`
  * Date `string`
  * DraftKingsSalary `integer`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyDraftSalary `integer`
  * HomeOrAway `string`
  * LastGameFantasyPoints `number`
  * Name `string`
  * Opponent `string`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PlayerID `integer`
  * Position `string`
  * ProjectedFantasyPoints `number`
  * Salary `integer`
  * ShortName `string`
  * Status `string`
  * StatusCode `string`
  * StatusColor `string`
  * Team `string`
  * YahooSalary `integer`

### DailyFantasyScoring
* DailyFantasyScoring `object`
  * Date `string`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * HasStarted `boolean`
  * IsInProgress `boolean`
  * IsOver `boolean`
  * Name `string`
  * PlayerID `integer`
  * Position `string`
  * Team `string`

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
  * SalaryCap `integer`
  * SlateID `integer`
  * SlateRosterSlots `array`
    * items `string`

### DfsSlateGame
* DfsSlateGame `object`
  * Game [Schedule](#schedule)
  * GameID `integer`
  * OperatorGameID `integer`
  * RemovedByOperator `boolean`
  * ScoreID `integer`
  * SlateGameID `integer`
  * SlateID `integer`

### DfsSlatePlayer
* DfsSlatePlayer `object`
  * FantasyDefenseProjectionStatID `integer`
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
  * Team `string`
  * TeamID `integer`

### FantasyDefenseGame
* FantasyDefenseGame `object`
  * AssistedTackles `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * Date `string`
  * DateTime `string`
  * Day `string`
  * DefensiveTouchdowns `number`
  * DraftKingsFantasyPointsAllowed `number`
  * DraftKingsKickerFantasyPointsAllowed `number`
  * DraftKingsPosition `string`
  * DraftKingsQuarterbackFantasyPointsAllowed `number`
  * DraftKingsRunningbackFantasyPointsAllowed `number`
  * DraftKingsSalary `integer`
  * DraftKingsTightEndFantasyPointsAllowed `number`
  * DraftKingsWideReceiverFantasyPointsAllowed `number`
  * FanDuelFantasyPointsAllowed `number`
  * FanDuelKickerFantasyPointsAllowed `number`
  * FanDuelPosition `string`
  * FanDuelQuarterbackFantasyPointsAllowed `number`
  * FanDuelRunningbackFantasyPointsAllowed `number`
  * FanDuelSalary `integer`
  * FanDuelTightEndFantasyPointsAllowed `number`
  * FanDuelWideReceiverFantasyPointsAllowed `number`
  * FantasyDataSalary `integer`
  * FantasyDefenseID `integer`
  * FantasyDraftFantasyPointsAllowed `number`
  * FantasyDraftKickerFantasyPointsAllowed `number`
  * FantasyDraftPosition `string`
  * FantasyDraftQuarterbackFantasyPointsAllowed `number`
  * FantasyDraftRunningbackFantasyPointsAllowed `number`
  * FantasyDraftSalary `integer`
  * FantasyDraftTightEndFantasyPointsAllowed `number`
  * FantasyDraftWideReceiverFantasyPointsAllowed `number`
  * FantasyPoints `number`
  * FantasyPointsAllowed `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FourthDownAttempts `number`
  * FourthDownConversions `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * FumblesForced `number`
  * FumblesRecovered `number`
  * GameKey `string`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * IsGameOver `boolean`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturns `number`
  * KickerFantasyPointsAllowed `number`
  * OffensiveYardsAllowed `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PassesDefended `number`
  * PlayerID `integer`
  * PointsAllowed `number`
  * PointsAllowedByDefenseSpecialTeams `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturns `number`
  * QuarterbackFantasyPointsAllowed `number`
  * QuarterbackHits `number`
  * RunningbackFantasyPointsAllowed `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * ScoreID `integer`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `number`
  * SpecialTeamsTouchdowns `number`
  * Stadium `string`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * ThirdDownAttempts `number`
  * ThirdDownConversions `number`
  * TightEndFantasyPointsAllowed `number`
  * TouchdownsScored `number`
  * TwoPointConversionReturns `number`
  * VictivSalary `integer`
  * Week `integer`
  * WideReceiverFantasyPointsAllowed `number`
  * WindSpeed `integer`
  * YahooFantasyPointsAllowed `number`
  * YahooKickerFantasyPointsAllowed `number`
  * YahooPosition `string`
  * YahooQuarterbackFantasyPointsAllowed `number`
  * YahooRunningbackFantasyPointsAllowed `number`
  * YahooSalary `integer`
  * YahooTightEndFantasyPointsAllowed `number`
  * YahooWideReceiverFantasyPointsAllowed `number`

### FantasyDefenseSeason
* FantasyDefenseSeason `object`
  * AssistedTackles `number`
  * AuctionValue `number`
  * AuctionValuePPR `number`
  * AverageDraftPosition `number`
  * AverageDraftPosition2QB `number`
  * AverageDraftPositionDynasty `number`
  * AverageDraftPositionPPR `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DefensiveTouchdowns `number`
  * DraftKingsFantasyPointsAllowed `number`
  * DraftKingsKickerFantasyPointsAllowed `number`
  * DraftKingsQuarterbackFantasyPointsAllowed `number`
  * DraftKingsRunningbackFantasyPointsAllowed `number`
  * DraftKingsTightEndFantasyPointsAllowed `number`
  * DraftKingsWideReceiverFantasyPointsAllowed `number`
  * FanDuelFantasyPointsAllowed `number`
  * FanDuelKickerFantasyPointsAllowed `number`
  * FanDuelQuarterbackFantasyPointsAllowed `number`
  * FanDuelRunningbackFantasyPointsAllowed `number`
  * FanDuelTightEndFantasyPointsAllowed `number`
  * FanDuelWideReceiverFantasyPointsAllowed `number`
  * FantasyDraftFantasyPointsAllowed `number`
  * FantasyDraftKickerFantasyPointsAllowed `number`
  * FantasyDraftQuarterbackFantasyPointsAllowed `number`
  * FantasyDraftRunningbackFantasyPointsAllowed `number`
  * FantasyDraftTightEndFantasyPointsAllowed `number`
  * FantasyDraftWideReceiverFantasyPointsAllowed `number`
  * FantasyPoints `number`
  * FantasyPointsAllowed `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsYahoo `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FourthDownAttempts `number`
  * FourthDownConversions `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * FumblesForced `number`
  * FumblesRecovered `number`
  * Games `integer`
  * GlobalTeamID `integer`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturns `number`
  * KickerFantasyPointsAllowed `number`
  * OffensiveYardsAllowed `number`
  * PassesDefended `number`
  * PlayerID `integer`
  * PointsAllowed `number`
  * PointsAllowedByDefenseSpecialTeams `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturns `number`
  * QuarterbackFantasyPointsAllowed `number`
  * QuarterbackHits `number`
  * RunningbackFantasyPointsAllowed `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * SoloTackles `number`
  * SpecialTeamsTouchdowns `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * ThirdDownAttempts `number`
  * ThirdDownConversions `number`
  * TightEndFantasyPointsAllowed `number`
  * TouchdownsScored `number`
  * TwoPointConversionReturns `number`
  * WideReceiverFantasyPointsAllowed `number`
  * WindSpeed `integer`
  * YahooFantasyPointsAllowed `number`
  * YahooKickerFantasyPointsAllowed `number`
  * YahooQuarterbackFantasyPointsAllowed `number`
  * YahooRunningbackFantasyPointsAllowed `number`
  * YahooTightEndFantasyPointsAllowed `number`
  * YahooWideReceiverFantasyPointsAllowed `number`

### FantasyPlayer
* FantasyPlayer `object`
  * AuctionValue `integer`
  * AuctionValuePPR `integer`
  * AverageDraftPosition `number`
  * AverageDraftPosition2QB `number`
  * AverageDraftPositionDynasty `number`
  * AverageDraftPositionIDP `integer`
  * AverageDraftPositionPPR `number`
  * AverageDraftPositionRookie `number`
  * ByeWeek `integer`
  * FantasyPlayerKey `string`
  * LastSeasonFantasyPoints `number`
  * Name `string`
  * PlayerID `integer`
  * Position `string`
  * ProjectedFantasyPoints `number`
  * Team `string`

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

### Injury
* Injury `object`
  * BodyPart `string`
  * DeclaredInactive `boolean`
  * InjuryID `integer`
  * Name `string`
  * Number `integer`
  * Opponent `string`
  * OpponentID `integer`
  * PlayerID `integer`
  * Position `string`
  * Practice `string`
  * PracticeDescription `string`
  * Season `integer`
  * SeasonType `integer`
  * Status `string`
  * Team `string`
  * TeamID `integer`
  * Updated `string`
  * Week `integer`

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

### Player
* Player `object`
  * Active `boolean`
  * Age `integer`
  * AverageDraftPosition `number`
  * BirthDate `string`
  * BirthDateString `string`
  * ByeWeek `integer`
  * College `string`
  * CollegeDraftPick `integer`
  * CollegeDraftRound `integer`
  * CollegeDraftTeam `string`
  * CollegeDraftYear `integer`
  * CurrentStatus `string`
  * CurrentTeam `string`
  * DeclaredInactive `boolean`
  * DepthDisplayOrder `integer`
  * DepthOrder `integer`
  * DepthPosition `string`
  * DepthPositionCategory `string`
  * DraftKingsName `string`
  * DraftKingsPlayerID `integer`
  * Experience `integer`
  * ExperienceString `string`
  * FanDuelName `string`
  * FanDuelPlayerID `integer`
  * FantasyAlarmPlayerID `integer`
  * FantasyDraftName `string`
  * FantasyDraftPlayerID `integer`
  * FantasyPosition `string`
  * FantasyPositionDepthOrder `integer`
  * FirstName `string`
  * GlobalTeamID `integer`
  * Height `string`
  * HeightFeet `integer`
  * HeightInches `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryPractice `string`
  * InjuryPracticeDescription `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * IsUndraftedFreeAgent `boolean`
  * LastName `string`
  * Name `string`
  * Number `integer`
  * PhotoUrl `string`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * RotoWirePlayerID `integer`
  * RotoworldPlayerID `integer`
  * ShortName `string`
  * SportRadarPlayerID `string`
  * SportsDirectPlayerID `integer`
  * StatsPlayerID `integer`
  * Status `string`
  * Team `string`
  * TeamID `integer`
  * UpcomingDraftKingsSalary `integer`
  * UpcomingFanDuelSalary `integer`
  * UpcomingGameOpponent `string`
  * UpcomingGameWeek `integer`
  * UpcomingOpponentPositionRank `integer`
  * UpcomingOpponentRank `integer`
  * UpcomingSalary `integer`
  * UpcomingYahooSalary `integer`
  * UsaTodayHeadshotNoBackgroundUpdated `string`
  * UsaTodayHeadshotNoBackgroundUrl `string`
  * UsaTodayHeadshotUpdated `string`
  * UsaTodayHeadshotUrl `string`
  * UsaTodayPlayerID `integer`
  * Weight `integer`
  * XmlTeamPlayerID `integer`
  * YahooName `string`
  * YahooPlayerID `integer`

### PlayerDefense
* PlayerDefense `object`
  * AssistedTackles `integer`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * FumbleReturnTouchdowns `integer`
  * FumblesForced `integer`
  * FumblesRecovered `integer`
  * InterceptionReturnTouchdowns `integer`
  * InterceptionReturnYards `integer`
  * Interceptions `integer`
  * Name `string`
  * Number `integer`
  * PassesDefended `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * QuarterbackHits `integer`
  * SackYards `integer`
  * Sacks `number`
  * Safeties `integer`
  * ShortName `string`
  * SoloTackles `integer`
  * Tackles `integer`
  * TacklesForLoss `integer`
  * Team `string`
  * Updated `string`

### PlayerDetail
* PlayerDetail `object`
  * Active `boolean`
  * Age `integer`
  * AverageDraftPosition `number`
  * BirthDate `string`
  * BirthDateString `string`
  * ByeWeek `integer`
  * College `string`
  * CollegeDraftPick `integer`
  * CollegeDraftRound `integer`
  * CollegeDraftTeam `string`
  * CollegeDraftYear `integer`
  * CurrentStatus `string`
  * CurrentTeam `string`
  * DeclaredInactive `boolean`
  * DepthDisplayOrder `integer`
  * DepthOrder `integer`
  * DepthPosition `string`
  * DepthPositionCategory `string`
  * DraftKingsName `string`
  * DraftKingsPlayerID `integer`
  * Experience `integer`
  * ExperienceString `string`
  * FanDuelName `string`
  * FanDuelPlayerID `integer`
  * FantasyAlarmPlayerID `integer`
  * FantasyDraftName `string`
  * FantasyDraftPlayerID `integer`
  * FantasyPosition `string`
  * FantasyPositionDepthOrder `integer`
  * FirstName `string`
  * GlobalTeamID `integer`
  * Height `string`
  * HeightFeet `integer`
  * HeightInches `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryPractice `string`
  * InjuryPracticeDescription `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * IsUndraftedFreeAgent `boolean`
  * LastName `string`
  * LatestNews `array`
    * items [News](#news)
  * Name `string`
  * Number `integer`
  * PhotoUrl `string`
  * PlayerID `integer`
  * PlayerSeason [PlayerSeason](#playerseason)
  * Position `string`
  * PositionCategory `string`
  * RotoWirePlayerID `integer`
  * RotoworldPlayerID `integer`
  * ShortName `string`
  * SportRadarPlayerID `string`
  * SportsDirectPlayerID `integer`
  * StatsPlayerID `integer`
  * Status `string`
  * Team `string`
  * TeamID `integer`
  * UpcomingDraftKingsSalary `integer`
  * UpcomingFanDuelSalary `integer`
  * UpcomingGameOpponent `string`
  * UpcomingGameWeek `integer`
  * UpcomingOpponentPositionRank `integer`
  * UpcomingOpponentRank `integer`
  * UpcomingSalary `integer`
  * UpcomingYahooSalary `integer`
  * UsaTodayHeadshotNoBackgroundUpdated `string`
  * UsaTodayHeadshotNoBackgroundUrl `string`
  * UsaTodayHeadshotUpdated `string`
  * UsaTodayHeadshotUrl `string`
  * UsaTodayPlayerID `integer`
  * Weight `integer`
  * XmlTeamPlayerID `integer`
  * YahooName `string`
  * YahooPlayerID `integer`

### PlayerGame
* PlayerGame `object`
  * Activated `integer`
  * AssistedTackles `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DateTime `string`
  * Day `string`
  * DeclaredInactive `boolean`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyDraftPosition `string`
  * FantasyDraftSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GameDate `string`
  * GameKey `string`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * Humidity `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryPractice `string`
  * InjuryPracticeDescription `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * IsGameOver `boolean`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveFumbleRecoveryTouchdowns `number`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * PlayingSurface `string`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoreID `integer`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Stadium `string`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * VictivSalary `integer`
  * Week `integer`
  * WindSpeed `integer`
  * YahooPosition `string`
  * YahooSalary `integer`

### PlayerGameRedZone
* PlayerGameRedZone `object`
  * Activated `integer`
  * AssistedTackles `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DateTime `string`
  * Day `string`
  * DeclaredInactive `boolean`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyDataSalary `integer`
  * FantasyDraftPosition `string`
  * FantasyDraftSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GameDate `string`
  * GameKey `string`
  * GlobalGameID `integer`
  * GlobalOpponentID `integer`
  * GlobalTeamID `integer`
  * HomeOrAway `string`
  * Humidity `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryPractice `string`
  * InjuryPracticeDescription `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * IsGameOver `boolean`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveFumbleRecoveryTouchdowns `number`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * Opponent `string`
  * OpponentID `integer`
  * OpponentPositionRank `integer`
  * OpponentRank `integer`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * PlayingSurface `string`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoreID `integer`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Stadium `string`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * VictivSalary `integer`
  * Week `integer`
  * WindSpeed `integer`
  * YahooPosition `string`
  * YahooSalary `integer`

### PlayerInfo
* PlayerInfo `object`
  * Name `string`
  * PlayerID `integer`
  * Position `string`
  * Team `string`
  * TeamID `integer`

### PlayerKickPuntReturns
* PlayerKickPuntReturns `object`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * FumblesLost `integer`
  * KickReturnLong `integer`
  * KickReturnTouchdowns `integer`
  * KickReturnYards `integer`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `integer`
  * Name `string`
  * Number `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * PuntReturnLong `integer`
  * PuntReturnTouchdowns `integer`
  * PuntReturnYards `integer`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `integer`
  * ShortName `string`
  * Team `string`
  * Updated `string`

### PlayerKicking
* PlayerKicking `object`
  * ExtraPointsAttempted `integer`
  * ExtraPointsMade `integer`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalsAttempted `integer`
  * FieldGoalsLongestMade `integer`
  * FieldGoalsMade `integer`
  * FieldGoalsMade0to19 `integer`
  * FieldGoalsMade20to29 `integer`
  * FieldGoalsMade30to39 `integer`
  * FieldGoalsMade40to49 `integer`
  * FieldGoalsMade50Plus `integer`
  * Name `string`
  * Number `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * ShortName `string`
  * Team `string`
  * Updated `string`

### PlayerOwnership
* PlayerOwnership `object`
  * DeltaOwnershipPercentage `number`
  * DeltaStartPercentage `number`
  * Name `string`
  * OwnershipPercentage `number`
  * PlayerID `integer`
  * Position `string`
  * Season `integer`
  * SeasonType `integer`
  * StartPercentage `number`
  * Team `string`
  * TeamID `integer`
  * Week `integer`

### PlayerPassing
* PlayerPassing `object`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * FumblesLost `integer`
  * Name `string`
  * Number `integer`
  * PassingAttempts `integer`
  * PassingCompletionPercentage `number`
  * PassingCompletions `integer`
  * PassingInterceptions `integer`
  * PassingLong `integer`
  * PassingRating `number`
  * PassingSackYards `integer`
  * PassingSacks `integer`
  * PassingTouchdowns `integer`
  * PassingYards `integer`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * ShortName `string`
  * Team `string`
  * TwoPointConversionPasses `integer`
  * Updated `string`

### PlayerPunting
* PlayerPunting `object`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * Name `string`
  * Number `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `integer`
  * PuntTouchbacks `integer`
  * PuntYards `integer`
  * Punts `integer`
  * ShortName `string`
  * Team `string`
  * Updated `string`

### PlayerReceiving
* PlayerReceiving `object`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * FumblesLost `integer`
  * Name `string`
  * Number `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * ReceivingLong `integer`
  * ReceivingTargets `integer`
  * ReceivingTouchdowns `integer`
  * ReceivingYards `integer`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `integer`
  * ShortName `string`
  * Team `string`
  * TwoPointConversionReceptions `integer`
  * Updated `string`

### PlayerRushing
* PlayerRushing `object`
  * FantasyPoints `number`
  * FantasyPosition `string`
  * FumblesLost `integer`
  * Name `string`
  * Number `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * Position `string`
  * PositionCategory `string`
  * RushingAttempts `integer`
  * RushingLong `integer`
  * RushingTouchdowns `integer`
  * RushingYards `integer`
  * RushingYardsPerAttempt `number`
  * ShortName `string`
  * Team `string`
  * TwoPointConversionRuns `integer`
  * Updated `string`

### PlayerSeason
* PlayerSeason `object`
  * Activated `integer`
  * AssistedTackles `number`
  * AuctionValue `number`
  * AuctionValuePPR `number`
  * AverageDraftPosition `number`
  * AverageDraftPosition2QB `number`
  * AverageDraftPositionDynasty `number`
  * AverageDraftPositionPPR `number`
  * AverageDraftPositionRookie `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GlobalTeamID `integer`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerID `integer`
  * PlayerSeasonID `integer`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * WindSpeed `integer`

### PlayerSeasonRedZone
* PlayerSeasonRedZone `object`
  * Activated `integer`
  * AssistedTackles `number`
  * AuctionValue `number`
  * AuctionValuePPR `number`
  * AverageDraftPosition `number`
  * AverageDraftPosition2QB `number`
  * AverageDraftPositionDynasty `number`
  * AverageDraftPositionPPR `number`
  * AverageDraftPositionRookie `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GlobalTeamID `integer`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerID `integer`
  * PlayerSeasonID `integer`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * WindSpeed `integer`

### PlayerSeasonThirdDown
* PlayerSeasonThirdDown `object`
  * Activated `integer`
  * AssistedTackles `number`
  * AuctionValue `number`
  * AuctionValuePPR `number`
  * AverageDraftPosition `number`
  * AverageDraftPosition2QB `number`
  * AverageDraftPositionDynasty `number`
  * AverageDraftPositionPPR `number`
  * AverageDraftPositionRookie `number`
  * BlockedKickReturnTouchdowns `number`
  * BlockedKickReturnYards `number`
  * BlockedKicks `number`
  * DefensiveSnapsPlayed `integer`
  * DefensiveTeamSnaps `integer`
  * DefensiveTouchdowns `number`
  * ExtraPointsAttempted `number`
  * ExtraPointsHadBlocked `number`
  * ExtraPointsMade `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsFantasyDraft `number`
  * FantasyPointsPPR `number`
  * FantasyPointsYahoo `number`
  * FantasyPosition `string`
  * FieldGoalPercentage `number`
  * FieldGoalReturnTouchdowns `number`
  * FieldGoalReturnYards `number`
  * FieldGoalsAttempted `number`
  * FieldGoalsHadBlocked `number`
  * FieldGoalsLongestMade `number`
  * FieldGoalsMade `number`
  * FieldGoalsMade0to19 `number`
  * FieldGoalsMade20to29 `number`
  * FieldGoalsMade30to39 `number`
  * FieldGoalsMade40to49 `number`
  * FieldGoalsMade50Plus `number`
  * FumbleReturnTouchdowns `number`
  * FumbleReturnYards `number`
  * Fumbles `number`
  * FumblesForced `number`
  * FumblesLost `number`
  * FumblesOutOfBounds `number`
  * FumblesOwnRecoveries `number`
  * FumblesRecovered `number`
  * GlobalTeamID `integer`
  * Humidity `integer`
  * InterceptionReturnTouchdowns `number`
  * InterceptionReturnYards `number`
  * Interceptions `number`
  * KickReturnFairCatches `number`
  * KickReturnLong `number`
  * KickReturnTouchdowns `number`
  * KickReturnYards `number`
  * KickReturnYardsPerAttempt `number`
  * KickReturns `number`
  * MiscAssistedTackles `number`
  * MiscFumblesForced `number`
  * MiscFumblesRecovered `number`
  * MiscSoloTackles `number`
  * Name `string`
  * Number `integer`
  * OffensiveSnapsPlayed `integer`
  * OffensiveTeamSnaps `integer`
  * OffensiveTouchdowns `number`
  * PassesDefended `number`
  * PassingAttempts `number`
  * PassingCompletionPercentage `number`
  * PassingCompletions `number`
  * PassingInterceptions `number`
  * PassingLong `number`
  * PassingRating `number`
  * PassingSackYards `number`
  * PassingSacks `number`
  * PassingTouchdowns `number`
  * PassingYards `number`
  * PassingYardsPerAttempt `number`
  * PassingYardsPerCompletion `number`
  * Played `integer`
  * PlayerID `integer`
  * PlayerSeasonID `integer`
  * Position `string`
  * PositionCategory `string`
  * PuntAverage `number`
  * PuntInside20 `number`
  * PuntLong `number`
  * PuntNetAverage `number`
  * PuntNetYards `number`
  * PuntReturnFairCatches `number`
  * PuntReturnLong `number`
  * PuntReturnTouchdowns `number`
  * PuntReturnYards `number`
  * PuntReturnYardsPerAttempt `number`
  * PuntReturns `number`
  * PuntTouchbacks `number`
  * PuntYards `number`
  * Punts `number`
  * PuntsHadBlocked `number`
  * QuarterbackHits `number`
  * ReceivingLong `number`
  * ReceivingTargets `number`
  * ReceivingTouchdowns `number`
  * ReceivingYards `number`
  * ReceivingYardsPerReception `number`
  * ReceivingYardsPerTarget `number`
  * ReceptionPercentage `number`
  * Receptions `number`
  * RushingAttempts `number`
  * RushingLong `number`
  * RushingTouchdowns `number`
  * RushingYards `number`
  * RushingYardsPerAttempt `number`
  * SackYards `number`
  * Sacks `number`
  * Safeties `number`
  * SafetiesAllowed `number`
  * ScoringDetails `array`
    * items [ScoringDetail](#scoringdetail)
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * SoloTackles `number`
  * SpecialTeamsAssistedTackles `number`
  * SpecialTeamsFumblesForced `number`
  * SpecialTeamsFumblesRecovered `number`
  * SpecialTeamsSnapsPlayed `integer`
  * SpecialTeamsSoloTackles `number`
  * SpecialTeamsTeamSnaps `integer`
  * SpecialTeamsTouchdowns `number`
  * Started `integer`
  * Tackles `number`
  * TacklesForLoss `number`
  * Team `string`
  * TeamID `integer`
  * Temperature `integer`
  * Touchdowns `number`
  * TwoPointConversionPasses `number`
  * TwoPointConversionReceptions `number`
  * TwoPointConversionReturns `number`
  * TwoPointConversionRuns `number`
  * WindSpeed `integer`

### Quarter
* Quarter `object`
  * AwayTeamScore `integer`
  * Created `string`
  * Description `string`
  * HomeTeamScore `integer`
  * Name `string`
  * Number `integer`
  * QuarterID `integer`
  * ScoreID `integer`
  * Updated `string`

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
  * Status `string`
  * Week `integer`

### Score
* Score `object`
  * AwayRotationNumber `integer`
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
  * GameEndDateTime `string`
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
  * HomeRotationNumber `integer`
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
  * NeutralVenue `boolean`
  * OverUnder `number`
  * PointSpread `number`
  * PointSpreadAwayTeamMoneyLine `integer`
  * PointSpreadHomeTeamMoneyLine `integer`
  * Possession `string`
  * Quarter `string`
  * QuarterDescription `string`
  * RedZone `string`
  * RefereeID `integer`
  * ScoreID `integer`
  * Season `integer`
  * SeasonType `integer`
  * SportRadarGameID `string`
  * StadiumDetails [Stadium](#stadium)
  * StadiumID `integer`
  * Status `string`
  * TimeRemaining `string`
  * Week `integer`
  * YardLine `integer`
  * YardLineTerritory `string`

### ScoringDetail
* ScoringDetail `object`
  * GameKey `string`
  * Length `integer`
  * PlayerGameID `integer`
  * PlayerID `integer`
  * ScoreID `integer`
  * ScoringDetailID `integer`
  * ScoringType `string`
  * Season `integer`
  * SeasonType `integer`
  * Team `string`
  * Week `integer`

### ScoringPlay
* ScoringPlay `object`
  * AwayScore `integer`
  * AwayTeam `string`
  * Date `string`
  * GameKey `string`
  * HomeScore `integer`
  * HomeTeam `string`
  * PlayDescription `string`
  * Quarter `string`
  * ScoreID `integer`
  * ScoringPlayID `integer`
  * Season `integer`
  * SeasonType `integer`
  * Sequence `integer`
  * Team `string`
  * TimeRemaining `string`
  * Week `integer`

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
  * Type `string`

### Standing
* Standing `object`
  * Conference `string`
  * ConferenceLosses `integer`
  * ConferenceRank `integer`
  * ConferenceTies `integer`
  * ConferenceWins `integer`
  * Division `string`
  * DivisionLosses `integer`
  * DivisionRank `integer`
  * DivisionTies `integer`
  * DivisionWins `integer`
  * GlobalTeamID `integer`
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
  * AverageDraftPosition2QB `number`
  * AverageDraftPositionDynasty `number`
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
  * TeamStatID `integer`
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


