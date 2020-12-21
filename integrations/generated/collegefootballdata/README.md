# @datafire/collegefootballdata

Client library for College Football Data API

## Installation and Usage
```bash
npm install --save @datafire/collegefootballdata
```
```js
let collegefootballdata = require('@datafire/collegefootballdata').create();

.then(data => {
  console.log(data);
});
```

## Description

This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.

## Actions

### getCoaches
Coaching history


```js
collegefootballdata.getCoaches({}, context)
```

#### Input
* input `object`
  * firstName `string`: First name filter
  * lastName `string`: Last name filter
  * team `string`: Team name filter
  * year `integer`: Year filter
  * minYear `integer`: Minimum year filter (inclusive)
  * maxYear `integer`: Maximum year filter (inclusive)

#### Output
* output `array`
  * items `object`
    * first_name `string`
    * last_name `string`
    * seasons `array`
      * items [TeamSeason](#teamseason)

### getConferences
Get conference list


```js
collegefootballdata.getConferences(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Conference](#conference)

### getDrvies
Get game drives


```js
collegefootballdata.getDrvies({
  "year": 0
}, context)
```

#### Input
* input `object`
  * seasonType `string`: Season type filter
  * year **required** `integer`: Year filter
  * week `integer`: Week filter
  * team `string`: Team filter
  * offense `string`: Offensive team filter
  * defense `string`: Defensive team filter
  * conference `string`: Conference filter
  * offenseConference `string`: Offensive conference filter
  * defenseConference `string`: Defensive conference filter

#### Output
* output `array`
  * items [Drive](#drive)

### getAdvancedBoxScore
Get advanced box score data


```js
collegefootballdata.getAdvancedBoxScore({
  "gameId": 0
}, context)
```

#### Input
* input `object`
  * gameId **required** `integer`: Game id parameters

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### getGames
Get game results


```js
collegefootballdata.getGames({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year/season filter for games
  * week `integer`: Week filter
  * seasonType `string`: Season type filter (regular or postseason)
  * team `string`: Team
  * home `string`: Home team filter
  * away `string`: Away team filter
  * conference `string`: Conference abbreviation filter
  * id `integer`: id filter for querying a single game

#### Output
* output `array`
  * items [Game](#game)

### getGameMedia
Game media information (TV, radio, etc)


```js
collegefootballdata.getGameMedia({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year filter
  * week `integer`: Week filter
  * seasonType `string`: Season type filter (regular, postseason, or both)
  * team `string`: Team filter
  * conference `string`: Conference filter
  * mediaType `string`: Media type filter (tv, radio, web, ppv, or mobile)

#### Output
* output `array`
  * items [GameMedia](#gamemedia)

### getPlayerGameStats
Player stats broken down by game


```js
collegefootballdata.getPlayerGameStats({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year/season filter for games
  * week `integer`: Week filter
  * seasonType `string`: Season type filter (regular or postseason)
  * team `string`: Team filter
  * conference `string`: Conference abbreviation filter
  * category `string`: Category filter (e.g defensive)
  * gameId `integer`: Game id filter

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### getTeamGameStats
Team stats broken down by game


```js
collegefootballdata.getTeamGameStats({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year/season filter for games
  * week `integer`: Week filter
  * seasonType `string`: Season type filter (regular or postseason)
  * team `string`: Team filter
  * conference `string`: Conference abbreviation filter
  * gameId `integer`: Game id filter

#### Output
* output `array`
  * items [TeamGame](#teamgame)

### getLines
Closing betting lines


```js
collegefootballdata.getLines({}, context)
```

#### Input
* input `object`
  * gameId `integer`: Game id filter
  * year `integer`: Year/season filter for games
  * week `integer`: Week filter
  * seasonType `string`: Season type filter (regular or postseason)
  * team `string`: Team
  * home `string`: Home team filter
  * away `string`: Away team filter
  * conference `string`: Conference abbreviation filter

#### Output
* output `array`
  * items [GameLines](#gamelines)

### getWinProbabilityData
Win probability data


```js
collegefootballdata.getWinProbabilityData({
  "gameId": 0
}, context)
```

#### Input
* input `object`
  * gameId **required** `integer`: Game id filter

#### Output
* output `array`
  * items [PlayWP](#playwp)

### getPregameWinProbabilities
Pregame win probabilities


```js
collegefootballdata.getPregameWinProbabilities({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter
  * week `integer`: Week filter
  * team `string`: Team filter
  * seasonType `string`: regular or postseason

#### Output
* output `array`
  * items [PregameWP](#pregamewp)

### getPlayStatTypes
Type of play stats


```js
collegefootballdata.getPlayStatTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PlayStatType](#playstattype)

### getPlayStats
Gets player stats associated by play (limit 1000)


```js
collegefootballdata.getPlayStats({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter
  * week `integer`: Week filter
  * team `string`: Team filter
  * gameId `integer`: gameId filter (from /games endpoint)
  * athleteId `integer`: athleteId filter (from /roster endpoint)
  * statTypeId `integer`: statTypeId filter (from /play/stat/types endpoint)
  * seasonType `string`: regular, postseason, or both

#### Output
* output `array`
  * items [PlayStat](#playstat)

### getPlayTypes
Types of plays


```js
collegefootballdata.getPlayTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PlayType](#playtype)

### getReturningProduction
Returning production metrics


```js
collegefootballdata.getReturningProduction({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter
  * team `string`: Team filter
  * conference `string`: Conference abbreviation filter

#### Output
* output `array`
  * items [ReturningProduction](#returningproduction)

### playerSearch
Search for players


```js
collegefootballdata.playerSearch({
  "searchTerm": ""
}, context)
```

#### Input
* input `object`
  * searchTerm **required** `string`: Term to search on
  * position `string`: Position abbreviation filter
  * team `string`: Team filter
  * year `integer`: Year filter

#### Output
* output `array`
  * items [PlayerSearchResult](#playersearchresult)

### getPlayerUsage
Player usage metrics by season


```js
collegefootballdata.getPlayerUsage({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year filter
  * team `string`: Team filter
  * conference `string`: Conference abbreviation filter
  * position `string`: Position abbreviation filter
  * playerId `integer`: Player id filter
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations

#### Output
* output `array`
  * items [PlayerUsage](#playerusage)

### getPlays
Get play data and results. Requires either a week or team to be specified.


```js
collegefootballdata.getPlays({
  "year": 0,
  "week": 0
}, context)
```

#### Input
* input `object`
  * seasonType `string`: Season type filter
  * year **required** `integer`: Year filter
  * week **required** `integer`: Week filter (required if team, offense, or defense, not specified)
  * team `string`: Team filter
  * offense `string`: Offensive team filter
  * defense `string`: Defensive team filter
  * conference `string`: Conference filter
  * offenseConference `string`: Offensive conference filter
  * defenseConference `string`: Defensive conference filter
  * playType `integer`: Play type filter

#### Output
* output `array`
  * items [Play](#play)

### getGamePPA
Predicted Points Added (PPA) by game


```js
collegefootballdata.getGamePPA({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year filter
  * week `integer`: Week filter
  * team `string`: Team filter
  * conference `string`: Conference filter
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations

#### Output
* output `array`
  * items [GamePPA](#gameppa)

### getPlayerGamePPA
Predicted Points Added (PPA) by player game


```js
collegefootballdata.getPlayerGamePPA({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter
  * week `integer`: Week filter
  * team `string`: Team filter
  * position `string`: Position abbreviation filter
  * playerId `integer`: Player id filter
  * threshold `string`: Minimum play threshold filter
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations

#### Output
* output `array`
  * items [PlayerGamePPA](#playergameppa)

### getPlayerSeasonPPA
Predicted Points Added (PPA) by player season


```js
collegefootballdata.getPlayerSeasonPPA({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter
  * team `string`: Team filter
  * conference `string`: Conference abbreviation filter
  * position `string`: Position abbreviation filter
  * playerId `integer`: Player id filter
  * threshold `string`: Minimum play threshold filter
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations

#### Output
* output `array`
  * items [PlayerSeasonPPA](#playerseasonppa)

### getPredictedPoints
Predicted Points


```js
collegefootballdata.getPredictedPoints({
  "down": 0,
  "distance": 0
}, context)
```

#### Input
* input `object`
  * down **required** `integer`: Down filter
  * distance **required** `integer`: Distance filter

#### Output
* output `array`
  * items [PredictedPoints](#predictedpoints)

### getTeamPPA
Predicted Points Added (PPA)


```js
collegefootballdata.getTeamPPA({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter (required if team not specified)
  * team `string`: Team filter (required if year not specified)
  * conference `string`: Conference filter
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations

#### Output
* output `array`
  * items [TeamPPA](#teamppa)

### getRankings
Poll rankings


```js
collegefootballdata.getRankings({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year/season filter for games
  * week `integer`: Week filter
  * seasonType `string`: Season type filter (regular or postseason)

#### Output
* output `array`
  * items [RankingWeek](#rankingweek)

### getSPRatings
SP+ rating data


```js
collegefootballdata.getSPRatings({}, context)
```

#### Input
* input `object`
  * year `integer`: Season filter (required if team not specified)
  * team `string`: Team filter (required if year not specified)

#### Output
* output `array`
  * items [TeamSPRating](#teamsprating)

### getConferenceSPRatings
Get average SP+ historical rating data by conference


```js
collegefootballdata.getConferenceSPRatings({}, context)
```

#### Input
* input `object`
  * year `integer`: Season filter
  * conference `string`: Conference abbreviation filter

#### Output
* output `array`
  * items [ConferenceSPRating](#conferencesprating)

### getSRSRatings
SRS rating data (requires either a year or team specified)


```js
collegefootballdata.getSRSRatings({}, context)
```

#### Input
* input `object`
  * year `integer`: Season filter (required if team not specified)
  * team `string`: Team filter (required if year not specified)
  * conference `string`: Conference filter

#### Output
* output `array`
  * items [TeamSRSRating](#teamsrsrating)

### getTeamRecords
Get team records by year


```js
collegefootballdata.getTeamRecords({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter
  * team `string`: Team filter
  * conference `string`: Conference filter

#### Output
* output `array`
  * items [TeamRecord](#teamrecord)

### getRecruitingGroups
Gets a list of aggregated statistics by team and position grouping


```js
collegefootballdata.getRecruitingGroups({}, context)
```

#### Input
* input `object`
  * startYear `integer`: Starting year
  * endYear `integer`: Ending year
  * team `string`: Team filter
  * conference `string`: conference filter

#### Output
* output `array`
  * items [PositionGroupRecruitingRating](#positiongrouprecruitingrating)

### getRecruitingPlayers
Get player recruiting rankings and data. Requires either a year or team to be specified.


```js
collegefootballdata.getRecruitingPlayers({}, context)
```

#### Input
* input `object`
  * year `integer`: Recruiting class year (required if team no specified)
  * classification `string`: Type of recruit (HighSchool, JUCO, PrepSchool)
  * position `string`: Position abbreviation filter
  * state `string`: State or province abbreviation filter
  * team `string`: Committed team filter (required if year not specified)

#### Output
* output `array`
  * items [Recruit](#recruit)

### getRecruitingTeams
Team recruiting rankings


```js
collegefootballdata.getRecruitingTeams({}, context)
```

#### Input
* input `object`
  * year `integer`: Recruiting class year
  * team `string`: Team filter

#### Output
* output `array`
  * items [TeamRecruitingRank](#teamrecruitingrank)

### getRoster
Roster data


```js
collegefootballdata.getRoster({
  "team": ""
}, context)
```

#### Input
* input `object`
  * team **required** `string`: Team name
  * year `integer`: Season year

#### Output
* output `array`
  * items [Player](#player)

### getStatCategories
Stat category list


```js
collegefootballdata.getStatCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### getAdvancedTeamGameStats
Advanced team game stats


```js
collegefootballdata.getAdvancedTeamGameStats({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter (required if no team specified)
  * week `integer`: Week filter
  * team `string`: Team filter (required if no year specified)
  * opponent `string`: Opponent filter
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations
  * seasonType `string`: Season type filter (regular, postseason, or both)

#### Output
* output `array`
  * items [AdvancedGameStat](#advancedgamestat)

### getPlayerSeasonStats
Season player stats


```js
collegefootballdata.getPlayerSeasonStats({
  "year": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year filter
  * team `string`: Team filter
  * conference `string`: Conference abbreviation filter
  * startWeek `integer`: Start week filter
  * endWeek `integer`: Start week filter
  * seasonType `string`: Season type filter (regular, postseason, or both)
  * category `string`: Stat category filter (e.g. passing)

#### Output
* output `array`
  * items [PlayerSeasonStat](#playerseasonstat)

### getTeamSeasonStats
Team season stats


```js
collegefootballdata.getTeamSeasonStats({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter (required if no team specified)
  * team `string`: Team filter (required if no year specified)
  * conference `string`: Conference abbreviation filter
  * startWeek `integer`: Starting week filter
  * endWeek `integer`: Starting week filter

#### Output
* output `array`
  * items [TeamSeasonStat](#teamseasonstat)

### getAdvancedTeamSeasonStats
Advanced team season stats


```js
collegefootballdata.getAdvancedTeamSeasonStats({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter (required if no team specified)
  * team `string`: Team filter (required if no year specified)
  * excludeGarbageTime `boolean`: Filter to remove garbage time plays from calculations
  * startWeek `integer`: Starting week filter
  * endWeek `integer`: Starting week filter

#### Output
* output `array`
  * items [AdvancedSeasonStat](#advancedseasonstat)

### getTalent
Team talent composite


```js
collegefootballdata.getTalent({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter

#### Output
* output `array`
  * items [TeamTalent](#teamtalent)

### getTeams
Get team information


```js
collegefootballdata.getTeams({}, context)
```

#### Input
* input `object`
  * conference `string`: Conference abbreviation filter

#### Output
* output `array`
  * items [Team](#team)

### getFbsTeams
Information on major division teams


```js
collegefootballdata.getFbsTeams({}, context)
```

#### Input
* input `object`
  * year `integer`: Year filter

#### Output
* output `array`
  * items [Team](#team)

### getTeamMatchup
Matchup history


```js
collegefootballdata.getTeamMatchup({
  "team1": "",
  "team2": ""
}, context)
```

#### Input
* input `object`
  * team1 **required** `string`: First team
  * team2 **required** `string`: Second team
  * minYear `integer`: Minimum year
  * maxYear `integer`: Maximum year

#### Output
* output `array`
  * items [TeamMatchup](#teammatchup)

### getVenues
Venues


```js
collegefootballdata.getVenues(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Venue](#venue)



## Definitions

### AdvancedGameStat
* AdvancedGameStat `object`
  * defense `object`
    * drives `integer`
    * explosiveness `number`
    * lineYards `number`
    * lineYardsTotal `number`
    * openFieldYards `number`
    * openFieldYardsTotal `integer`
    * passingDowns `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
    * passingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
      * totalPPA `number`
    * plays `integer`
    * powerSuccess `number`
    * ppa `number`
    * rushingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
      * totalPPA `number`
    * secondLevelYards `number`
    * secondLevelYardsTotal `integer`
    * standardDowns `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
    * stuffRate `number`
    * successRate `number`
    * totalPPA `number`
  * gameId `integer`
  * offense `object`
    * drives `integer`
    * explosiveness `number`
    * lineYards `number`
    * lineYardsTotal `number`
    * openFieldYards `number`
    * openFieldYardsTotal `integer`
    * passingDowns `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
    * passingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
      * totalPPA `number`
    * plays `integer`
    * powerSuccess `number`
    * ppa `number`
    * rushingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
      * totalPPA `number`
    * secondLevelYards `number`
    * secondLevelYardsTotal `integer`
    * standardDowns `object`
      * explosiveness `number`
      * ppa `number`
      * successRate `number`
    * stuffRate `number`
    * successRate `number`
    * totalPPA `number`
  * opponent `string`
  * season `integer`
  * team `string`
  * week `integer`

### AdvancedSeasonStat
* AdvancedSeasonStat `object`
  * conference `string`
  * defense `object`
    * drives `integer`
    * explosiveness `number`
    * fieldPosition `object`
      * averagePredictedPoints `number`
      * averageStart `number`
    * havoc `object`
      * db `number`
      * frontSeven `number`
      * total `number`
    * lineYards `number`
    * lineYardsTotal `number`
    * openFieldYards `number`
    * openFieldYardsTotal `integer`
    * passingDowns `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
    * passingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
      * totalPPA `number`
    * plays `integer`
    * pointsPerOpportunity `number`
    * powerSuccess `number`
    * ppa `number`
    * rushingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
      * totalPPA `number`
    * secondLevelYards `number`
    * secondLevelYardsTotal `integer`
    * standardDowns `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
    * stuffRate `number`
    * successRate `number`
    * totalPPA `number`
  * offense `object`
    * drives `integer`
    * explosiveness `number`
    * fieldPosition `object`
      * averagePredictedPoints `number`
      * averageStart `number`
    * havoc `object`
      * db `number`
      * frontSeven `number`
      * total `number`
    * lineYards `number`
    * lineYardsTotal `number`
    * openFieldYards `number`
    * openFieldYardsTotal `integer`
    * passingDowns `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
    * passingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
      * totalPPA `number`
    * plays `integer`
    * pointsPerOpportunity `number`
    * powerSuccess `number`
    * ppa `number`
    * rushingPlays `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
      * totalPPA `number`
    * secondLevelYards `number`
    * secondLevelYardsTotal `integer`
    * standardDowns `object`
      * explosiveness `number`
      * ppa `number`
      * rate `number`
      * successRate `number`
    * stuffRate `number`
    * successRate `number`
    * totalPPA `number`
  * season `integer`
  * team `string`

### BoxScore
* BoxScore `object`
  * players `object`
    * ppa `array`
      * items `object`
        * average `object`
          * passing `number`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * rushing `number`
          * total `number`
        * cumulative `object`
          * passing `number`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * rushing `number`
          * total `number`
        * player `string`
        * position `string`
        * team `string`
    * usage `array`
      * items `object`
        * passing `number`
        * player `string`
        * position `string`
        * quarter1 `number`
        * quarter2 `number`
        * quarter3 `number`
        * quarter4 `number`
        * rushing `number`
        * team `string`
        * total `number`
  * teams `object`
    * explosiveness `array`
      * items `object`
        * overall `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * team `string`
    * fieldPosition `array`
      * items `object`
        * averageStart `number`
        * averageStartingPredictedPoints `number`
        * team `string`
    * havoc `array`
      * items `object`
        * db `number`
        * frontSeven `number`
        * team `string`
        * total `number`
    * ppa `array`
      * items `object`
        * overall `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * passing `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * rushing `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * team `string`
    * rushing `array`
      * items `object`
        * lineYards `number`
        * lineYardsAverage `number`
        * openFieldYards `integer`
        * openFieldYardsAverage `number`
        * powerSuccess `number`
        * secondLevelYards `integer`
        * secondLevelYardsAverage `number`
        * stuffRate `number`
        * team `string`
    * scoringOpportunities `array`
      * items `object`
        * opportunities `integer`
        * points `integer`
        * pointsPerOpportunity `number`
        * team `string`
    * successRates `array`
      * items `object`
        * overall `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * passingDowns `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * standardDowns `object`
          * quarter1 `number`
          * quarter2 `number`
          * quarter3 `number`
          * quarter4 `number`
          * total `number`
        * team `string`

### Conference
* Conference `object`
  * abbreviation `string`
  * id `integer`
  * name `string`
  * short_name `string`

### ConferenceSPRating
* ConferenceSPRating `object`
  * conference `string`
  * defense `object`
    * explosiveness `number`
    * havoc `object`
      * db `number`
      * frontSeven `number`
      * total `number`
    * pasing `number`
    * passingDowns `number`
    * rating `number`
    * rushing `number`
    * standardDowns `number`
    * success `number`
  * offense `object`
    * explosiveness `number`
    * pace `number`
    * passing `number`
    * passingDowns `number`
    * rating `number`
    * runRate `number`
    * rushing `number`
    * standardDowns `number`
    * success `number`
  * rating `number`
  * secondOrderWins `number`
  * sos `number`
  * specialTeams `object`
    * rating `number`
  * year `integer`

### Drive
* Drive `object`
  * defense `string`
  * defense_conference `string`
  * drive_number `integer`
  * drive_result `string`
  * end_period `integer`
  * end_time `object`
    * minutes `integer`
    * seconds `integer`
  * end_yardline `integer`
  * end_yards_to_goal `integer`
  * game_id `integer`
  * id `integer`
  * offense `string`
  * offense_conference `string`
  * plays `integer`
  * scoring `boolean`
  * start_period `integer`
  * start_time `object`
    * minutes `integer`
    * seconds `integer`
  * start_yardline `integer`
  * start_yards_to_goal `integer`
  * yards `integer`

### Game
* Game `object`
  * attendance `integer`
  * away_conference `string`
  * away_id `integer`
  * away_line_scores `array`
    * items `integer`
  * away_points `integer`
  * away_post_win_prob `number`
  * away_team `string`
  * conference_game `boolean`
  * excitement_index `number`
  * home_conference `string`
  * home_id `integer`
  * home_line_scores `array`
    * items `integer`
  * home_points `integer`
  * home_post_win_prob `number`
  * home_team `string`
  * id `integer`
  * neutral_site `boolean`
  * season `integer`
  * season_type `string`
  * start_date `string`
  * start_time_tbd `boolean`
  * venue `string`
  * venue_id `integer`
  * week `integer`

### GameLines
* GameLines `object`
  * awayConference `string`
  * awayScore `integer`
  * awayTeam `string`
  * homeConference `string`
  * homeScore `integer`
  * homeTeam `string`
  * id `integer`
  * lines `array`
    * items `object`
      * formattedSpread `string`
      * overUnder `number`
      * provider `string`
      * spread `number`
  * season `integer`
  * seasonType `string`
  * week `integer`

### GameMedia
* GameMedia `object`
  * awayConference `string`
  * awayTeam `string`
  * homeConference `string`
  * homeTeam `string`
  * id `integer`
  * isStartTimeTBD `boolean`
  * mediaType `string`
  * outlet `string`
  * season `integer`
  * seasonType `string`
  * startTime `string`
  * week `integer`

### GamePPA
* GamePPA `object`
  * conference `string`
  * defense `object`
    * firstDown `number`
    * overall `number`
    * passing `number`
    * rushing `number`
    * secondDown `number`
    * thirdDown `number`
  * id `integer`
  * offense `object`
    * firstDown `number`
    * overall `number`
    * passing `number`
    * rushing `number`
    * secondDown `number`
    * thirdDown `number`
  * opponnent `string`
  * season `integer`
  * team `string`
  * week `integer`

### Play
* Play `object`
  * away `string`
  * clock `object`
    * minutes `integer`
    * seconds `integer`
  * defense `string`
  * defense_conference `string`
  * defense_score `integer`
  * defense_timeouts `integer`
  * distance `integer`
  * down `integer`
  * drive_id `integer`
  * drive_number `integer`
  * game_id `integer`
  * home `string`
  * id `integer`
  * offense `string`
  * offense_conference `string`
  * offense_score `integer`
  * offense_timeouts `integer`
  * period `integer`
  * play_number `integer`
  * play_text `string`
  * play_type `string`
  * ppa `number`
  * scoring `boolean`
  * yard_line `integer`
  * yards_gained `integer`
  * yards_to_goal `integer`

### PlayStat
* PlayStat `object`
  * athleteId `integer`
  * athleteName `string`
  * clock `object`
    * minutes `integer`
    * seconds `integer`
  * distance `integer`
  * down `integer`
  * driveId `integer`
  * gameId `integer`
  * opponent `string`
  * opponentScore `integer`
  * period `integer`
  * playId `integer`
  * season `integer`
  * stat `integer`
  * statType `string`
  * teamScore `integer`
  * week `integer`
  * yardsToGoal `integer`

### PlayStatType
* PlayStatType `object`
  * id `integer`
  * name `string`

### PlayType
* PlayType `object`
  * abbreviation `string`
  * id `integer`
  * text `string`

### PlayWP
* PlayWP `object`
  * away `string`
  * awayId `integer`
  * awayScore `integer`
  * distance `integer`
  * down `integer`
  * gamesId `integer`
  * home `string`
  * homeBall `boolean`
  * homeId `integer`
  * homeScore `integer`
  * homeWinProb `number`
  * playId `integer`
  * playNumber `integer`
  * playText `string`
  * spread `number`
  * timeRemaining `integer`
  * yardLine `integer`

### Player
* Player `object`
  * city `string`
  * country `string`
  * first_name `string`
  * height `integer`
  * id `integer`
  * jersey `integer`
  * last_name `string`
  * position `string`
  * state `string`
  * weight `integer`
  * year `integer`

### PlayerGame
* PlayerGame `object`
  * id `integer`
  * teams `array`
    * items `object`
      * categories `array`
        * items `object`
          * name `string`
          * types `array`
      * homeAway `boolean`
      * points `integer`
      * school `object`
        * conference `string`
        * name `string`

### PlayerGamePPA
* PlayerGamePPA `object`
  * averagePPA `object`
    * all `number`
    * pass `number`
    * rush `number`
  * name `string`
  * opponent `string`
  * position `string`
  * season `integer`
  * team `string`
  * week `integer`

### PlayerSearchResult
* PlayerSearchResult `object`
  * firstName `string`
  * height `integer`
  * hometown `string`
  * id `integer`
  * jersey `integer`
  * lastName `string`
  * name `string`
  * position `string`
  * team `string`
  * teamColor `string`
  * teamColorSecondary `string`
  * weight `integer`

### PlayerSeasonPPA
* PlayerSeasonPPA `object`
  * averagePPA `object`
    * all `number`
    * firstDown `number`
    * pass `number`
    * passingDowns `number`
    * rush `number`
    * secondDown `number`
    * standardDowns `number`
    * thirdDown `number`
  * conference `string`
  * id `integer`
  * name `string`
  * position `string`
  * season `integer`
  * team `string`
  * totalPPA `object`
    * all `number`
    * firstDown `number`
    * pass `number`
    * passingDowns `number`
    * rush `number`
    * secondDown `number`
    * standardDowns `number`
    * thirdDown `number`

### PlayerSeasonStat
* PlayerSeasonStat `object`
  * category `string`
  * conference `string`
  * player `string`
  * playerId `integer`
  * season `integer`
  * stat `number`
  * statType `string`
  * team `string`

### PlayerUsage
* PlayerUsage `object`
  * conference `string`
  * id `integer`
  * name `string`
  * position `string`
  * season `integer`
  * team `string`
  * usage `object`
    * firstDown `number`
    * overall `number`
    * pass `number`
    * passingDowns `number`
    * rush `number`
    * secondDown `number`
    * standardDowns `number`
    * thirdDown `number`

### PositionGroupRecruitingRating
* PositionGroupRecruitingRating `object`
  * averageRating `number`
  * averageStars `number`
  * commits `number`
  * conference `string`
  * positiionGroup `string`
  * team `string`
  * totalRating `number`

### PredictedPoints
* PredictedPoints `object`
  * predictedPoints `number`
  * yardLine `integer`

### PregameWP
* PregameWP `object`
  * awayTeam `string`
  * gameId `integer`
  * homeTeam `string`
  * homeWinProb `number`
  * season `integer`
  * seasonType `string`
  * spread `number`
  * week `integer`

### RankingWeek
* RankingWeek `object`
  * polls `array`
    * items `object`
      * poll `string`
      * ranks `array`
        * items `object`
          * conference `string`
          * firstPlaceVotes `integer`
          * points `integer`
          * rank `integer`
          * school `string`
  * season `integer`
  * seasonType `string`
  * week `integer`

### Recruit
* Recruit `object`
  * city `string`
  * committedTo `string`
  * country `string`
  * height `integer`
  * name `string`
  * position `string`
  * ranking `integer`
  * rating `number`
  * recruitType `string`
  * school `string`
  * stars `integer`
  * stateProvince `string`
  * weight `integer`
  * year `integer`

### ReturningProduction
* ReturningProduction `object`
  * conference `string`
  * passingUsage `number`
  * percentPPA `number`
  * percentPassingPPA `number`
  * percentReceivingPPA `number`
  * percentRushingPPA `number`
  * receivingUsage `number`
  * rushingUsage `number`
  * season `integer`
  * team `string`
  * totalPPA `number`
  * totalPassingPPA `number`
  * totalReceivingPPA `number`
  * totalRushingPPA `number`
  * usage `number`

### Team
* Team `object`
  * abbreviation `string`
  * alt_color `string`
  * alt_name_1 `string`
  * alt_name_2 `string`
  * alt_name_3 `string`
  * color `string`
  * conference `string`
  * division `string`
  * id `integer`
  * logos `array`
    * items `string`
  * mascot `string`
  * school `string`

### TeamGame
* TeamGame `object`
  * id `integer`
  * teams `array`
    * items `object`
      * conference `string`
      * homeAway `boolean`
      * points `integer`
      * school `string`
      * stats `array`
        * items `object`
          * category `string`
          * stat `string`

### TeamMatchup
* TeamMatchup `object`
  * endYear `integer`
  * games `array`
    * items `object`
      * awayScore `integer`
      * awayTeam `string`
      * date `string`
      * homeScore `integer`
      * homeTeam `string`
      * neutralSite `boolean`
      * season `integer`
      * season_type `string`
      * venue `string`
      * week `integer`
      * winner `string`
  * startYear `integer`
  * team1 `string`
  * team1Wins `integer`
  * team2 `string`
  * team2Wins `integer`
  * ties `integer`

### TeamPPA
* TeamPPA `object`
  * conference `string`
  * defense `object`
    * cumulative `object`
      * passing `number`
      * rushing `number`
      * total `number`
    * firstDown `number`
    * overall `number`
    * passing `number`
    * rushing `number`
    * secondDown `number`
    * thirdDown `number`
  * offense `object`
    * cumulative `object`
      * passing `number`
      * rushing `number`
      * total `number`
    * firstDown `number`
    * overall `number`
    * passing `number`
    * rushing `number`
    * secondDown `number`
    * thirdDown `number`
  * season `integer`
  * team `string`

### TeamRecord
* TeamRecord `object`
  * awayGames `object`
    * games `integer`
    * losses `integer`
    * ties `integer`
    * wins `integer`
  * conference `string`
  * conferenceGames `object`
    * games `integer`
    * losses `integer`
    * ties `integer`
    * wins `integer`
  * division `string`
  * homeGames `object`
    * games `integer`
    * losses `integer`
    * ties `integer`
    * wins `integer`
  * team `string`
  * total `object`
    * games `integer`
    * losses `integer`
    * ties `integer`
    * wins `integer`
  * year `integer`

### TeamRecruitingRank
* TeamRecruitingRank `object`
  * points `number`
  * rank `integer`
  * team `string`
  * year `integer`

### TeamSPRating
* TeamSPRating `object`
  * conference `string`
  * defense `object`
    * explosiveness `number`
    * havoc `object`
      * db `number`
      * frontSeven `number`
      * total `number`
    * pasing `number`
    * passingDowns `number`
    * rating `number`
    * rushing `number`
    * standardDowns `number`
    * success `number`
  * offense `object`
    * explosiveness `number`
    * pace `number`
    * passing `number`
    * passingDowns `number`
    * rating `number`
    * runRate `number`
    * rushing `number`
    * standardDowns `number`
    * success `number`
  * rating `number`
  * secondOrderWins `number`
  * sos `number`
  * specialTeams `object`
    * rating `number`
  * team `string`
  * year `integer`

### TeamSRSRating
* TeamSRSRating `object`
  * conference `string`
  * division `string`
  * rating `number`
  * team `string`
  * year `integer`

### TeamSeason
* TeamSeason `object`
  * games `integer`
  * losses `integer`
  * postseason_rank `integer`: Final ranking in the AP poll
  * preseason_rank `integer`: Rank in the AP preseason poll
  * school `string`
  * sp_defense `number`: Final SP+ defensive rating
  * sp_offense `number`: Final SP+ offensive rating
  * sp_overall `number`: Final overall SP+ rating
  * srs `number`: Final SRS rankings
  * ties `integer`
  * wins `integer`
  * year `string`

### TeamSeasonStat
* TeamSeasonStat `object`
  * conference `string`
  * season `integer`
  * statName `string`
  * statValue `integer`
  * team `string`

### TeamTalent
* TeamTalent `object`
  * school `string`
  * talent `number`
  * year `integer`

### Venue
* Venue `object`
  * capacity `integer`
  * city `string`
  * country_code `string`
  * dome `boolean`
  * elevation `integer`
  * grass `boolean`
  * id `integer`
  * location `object`
    * x `number`
    * y `number`
  * name `string`
  * state `string`
  * timezone `string`
  * year `integer`
  * zip `string`


