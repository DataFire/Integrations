# @datafire/fantasydata_soccer_v3_stats

Client library for Soccer v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_soccer_v3_stats
```
```js
let fantasydata_soccer_v3_stats = require('@datafire/fantasydata_soccer_v3_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### MembershipsActive
Memberships (Active)


```js
fantasydata_soccer_v3_stats.MembershipsActive({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Membership](#membership)

### AreasCountries
Areas (Countries)


```js
fantasydata_soccer_v3_stats.AreasCountries({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Area](#area)

### BoxScore
Box Score


```js
fantasydata_soccer_v3_stats.BoxScore({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: The GameID of a Soccer game.  GameIDs can be found in the Games API.  Valid entries are <code>702</code>, <code>1274</code>, etc.

#### Output
* output [BoxScore](#boxscore)

### BoxScoresByDate
Box Scores by Date


```js
fantasydata_soccer_v3_stats.BoxScoresByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### BoxScoresByDateByCompetition
Box Scores by Date by Competition


```js
fantasydata_soccer_v3_stats.BoxScoresByDateByCompetition({
  "format": "",
  "competition": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competition **required** `string`: An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### BoxScoresByDateDelta
Box Scores by Date Delta


```js
fantasydata_soccer_v3_stats.BoxScoresByDateDelta({
  "format": "",
  "date": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### BoxScoresDeltaByDateByCompetition
Box Scores Delta by Date by Competition


```js
fantasydata_soccer_v3_stats.BoxScoresDeltaByDateByCompetition({
  "format": "",
  "competition": "",
  "date": "",
  "minutes": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competition **required** `string`: An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
  * date **required** `string`: The date of the game(s).
  * minutes **required** `string`: Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### CompetitionFixturesLeagueDetails
Competition Fixtures (League Details)


```js
fantasydata_soccer_v3_stats.CompetitionFixturesLeagueDetails({
  "format": "",
  "competition": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competition **required** `string`: An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.

#### Output
* output [CompetitionDetail](#competitiondetail)

### CompetitionHierarchyLeagueHierarchy
Competition Hierarchy (League Hierarchy)


```js
fantasydata_soccer_v3_stats.CompetitionHierarchyLeagueHierarchy({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Area](#area)

### CompetitionsLeagues
Competitions (Leagues)


```js
fantasydata_soccer_v3_stats.CompetitionsLeagues({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Competition](#competition)

### GamesByDate
Games by Date


```js
fantasydata_soccer_v3_stats.GamesByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [Game](#game)

### MembershipsHistorical
Memberships (Historical)


```js
fantasydata_soccer_v3_stats.MembershipsHistorical({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Membership](#membership)

### MembershipsByTeamHistorical
Memberships by Team (Historical)


```js
fantasydata_soccer_v3_stats.MembershipsByTeamHistorical({
  "format": "",
  "teamid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * teamid **required** `string`: Unique FantasyData Team ID. 

#### Output
* output `array`
  * items [Membership](#membership)

### MembershipsByTeamActive
Memberships by Team (Active)


```js
fantasydata_soccer_v3_stats.MembershipsByTeamActive({
  "format": "",
  "teamid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * teamid **required** `string`: Unique FantasyData Team ID. 

#### Output
* output `array`
  * items [Membership](#membership)

### Player
Player


```js
fantasydata_soccer_v3_stats.Player({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output [Player](#player)

### PlayerGameStatsByDate
Player Game Stats by Date


```js
fantasydata_soccer_v3_stats.PlayerGameStatsByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### PlayerGameStatsByPlayer
Player Game Stats by Player


```js
fantasydata_soccer_v3_stats.PlayerGameStatsByPlayer({
  "format": "",
  "date": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output `array`
  * items [PlayerGame](#playergame)

### PlayerSeasonStats
Player Season Stats


```js
fantasydata_soccer_v3_stats.PlayerSeasonStats({
  "format": "",
  "roundid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerSeasonStatsByPlayer
Player Season Stats by Player


```js
fantasydata_soccer_v3_stats.PlayerSeasonStatsByPlayer({
  "format": "",
  "roundid": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### PlayerSeasonStatsByTeam
Player Season Stats by Team


```js
fantasydata_soccer_v3_stats.PlayerSeasonStatsByTeam({
  "format": "",
  "roundid": "",
  "team": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 
  * team **required** `string`: Unique FantasyData Team ID. 

#### Output
* output `array`
  * items [PlayerSeason](#playerseason)

### Players
Players


```js
fantasydata_soccer_v3_stats.Players({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Player](#player)

### PlayersByTeam
Players by Team


```js
fantasydata_soccer_v3_stats.PlayersByTeam({
  "format": "",
  "teamid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * teamid **required** `string`: Unique FantasyData Team ID. 

#### Output
* output `array`
  * items [Player](#player)

### Schedule
Schedule


```js
fantasydata_soccer_v3_stats.Schedule({
  "format": "",
  "roundid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 

#### Output
* output `array`
  * items [Game](#game)

### SeasonTeams
Season Teams


```js
fantasydata_soccer_v3_stats.SeasonTeams({
  "format": "",
  "seasonid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * seasonid **required** `string`: Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). 

#### Output
* output `array`
  * items [SeasonTeam](#seasonteam)

### Standings
Standings


```js
fantasydata_soccer_v3_stats.Standings({
  "format": "",
  "roundid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 

#### Output
* output `array`
  * items [Standing](#standing)

### TeamGameStatsByDate
Team Game Stats by Date


```js
fantasydata_soccer_v3_stats.TeamGameStatsByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [TeamGame](#teamgame)

### TeamSeasonStats
Team Season Stats


```js
fantasydata_soccer_v3_stats.TeamSeasonStats({
  "format": "",
  "roundid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 

#### Output
* output `array`
  * items [TeamSeason](#teamseason)

### Teams
Teams


```js
fantasydata_soccer_v3_stats.Teams({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Team](#team)

### Venues
Venues


```js
fantasydata_soccer_v3_stats.Venues({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Venue](#venue)



## Definitions

### Area
* Area `object`
  * AreaId `integer`
  * Competitions `array`
    * items [Competition](#competition)
  * CountryCode `string`
  * Name `string`

### Booking
* Booking `object`
  * BookingId `integer`
  * GameId `integer`
  * GameMinute `integer`
  * GameMinuteExtra `integer`
  * Name `string`
  * PlayerId `integer`
  * TeamId `integer`
  * Type `string`

### BoxScore
* BoxScore `object`
  * AdditionalAssistantReferee1 [Referee](#referee)
  * AdditionalAssistantReferee2 [Referee](#referee)
  * AssistantReferee1 [Referee](#referee)
  * AssistantReferee2 [Referee](#referee)
  * AwayTeamCoach [Coach](#coach)
  * Bookings `array`
    * items [Booking](#booking)
  * FourthReferee [Referee](#referee)
  * Game [Game](#game)
  * Goals `array`
    * items [Goal](#goal)
  * HomeTeamCoach [Coach](#coach)
  * Lineups `array`
    * items [Lineup](#lineup)
  * MainReferee [Referee](#referee)
  * PenaltyShootouts `array`
    * items [PenaltyShootout](#penaltyshootout)
  * PlayerGames `array`
    * items [PlayerGame](#playergame)
  * TeamGames `array`
    * items [TeamGame](#teamgame)

### Coach
* Coach `object`
  * CoachId `integer`
  * FirstName `string`
  * LastName `string`
  * Nationality `string`
  * ShortName `string`

### Competition
* Competition `object`
  * AreaId `integer`
  * AreaName `string`
  * CompetitionId `integer`
  * Format `string`
  * Gender `string`
  * Name `string`
  * Seasons `array`
    * items [Season](#season)
  * Type `string`

### CompetitionDetail
* CompetitionDetail `object`
  * AreaId `integer`
  * AreaName `string`
  * CompetitionId `integer`
  * CurrentSeason [Season](#season)
  * Format `string`
  * Games `array`
    * items [Game](#game)
  * Gender `string`
  * Name `string`
  * Seasons `array`
    * items [Season](#season)
  * Teams `array`
    * items [TeamDetail](#teamdetail)
  * Type `string`

### Game
* Game `object`
  * Attendance `integer`
  * AwayTeamCountryCode `string`
  * AwayTeamId `integer`
  * AwayTeamKey `string`
  * AwayTeamMoneyLine `integer`
  * AwayTeamName `string`
  * AwayTeamPointSpreadPayout `integer`
  * AwayTeamScore `integer`
  * AwayTeamScoreExtraTime `integer`
  * AwayTeamScorePenalty `integer`
  * AwayTeamScorePeriod1 `integer`
  * AwayTeamScorePeriod2 `integer`
  * Clock `integer`
  * DateTime `string`
  * Day `string`
  * DrawMoneyLine `integer`
  * GameId `integer`
  * GlobalAwayTeamId `integer`
  * GlobalGameId `integer`
  * GlobalHomeTeamId `integer`
  * Group `string`
  * HomeTeamCountryCode `string`
  * HomeTeamId `integer`
  * HomeTeamKey `string`
  * HomeTeamMoneyLine `integer`
  * HomeTeamName `string`
  * HomeTeamPointSpreadPayout `integer`
  * HomeTeamScore `integer`
  * HomeTeamScoreExtraTime `integer`
  * HomeTeamScorePenalty `integer`
  * HomeTeamScorePeriod1 `integer`
  * HomeTeamScorePeriod2 `integer`
  * OverPayout `integer`
  * OverUnder `number`
  * Period `string`
  * PointSpread `number`
  * RoundId `integer`
  * Season `integer`
  * SeasonType `integer`
  * Status `string`
  * UnderPayout `integer`
  * Updated `string`
  * UpdatedUtc `string`
  * VenueId `integer`
  * VenueType `string`
  * Week `integer`
  * Winner `string`

### Goal
* Goal `object`
  * AssistedByPlayerId1 `integer`
  * AssistedByPlayerId2 `integer`
  * AssistedByPlayerName1 `string`
  * AssistedByPlayerName2 `string`
  * GameId `integer`
  * GameMinute `integer`
  * GameMinuteExtra `integer`
  * GoalId `integer`
  * Name `string`
  * PlayerId `integer`
  * TeamId `integer`
  * Type `string`

### Lineup
* Lineup `object`
  * GameId `integer`
  * GameMinute `integer`
  * GameMinuteExtra `integer`
  * LineupId `integer`
  * Name `string`
  * PitchPositionHorizontal `integer`
  * PitchPositionVertical `integer`
  * PlayerId `integer`
  * Position `string`
  * ReplacedPlayerId `integer`
  * ReplacedPlayerName `string`
  * TeamId `integer`
  * Type `string`

### Membership
* Membership `object`
  * Active `boolean`
  * EndDate `string`
  * MembershipId `integer`
  * PlayerId `integer`
  * PlayerName `string`
  * StartDate `string`
  * TeamArea `string`
  * TeamId `integer`
  * TeamName `string`
  * Updated `string`

### PenaltyShootout
* PenaltyShootout `object`
  * GameId `integer`
  * Name `string`
  * Order `integer`
  * PenaltyShootoutId `integer`
  * PlayerId `integer`
  * Position `string`
  * TeamId `integer`
  * Type `string`

### Player
* Player `object`
  * BirthCity `string`
  * BirthCountry `string`
  * BirthDate `string`
  * CommonName `string`
  * DraftKingsPosition `string`
  * FirstName `string`
  * Foot `string`
  * Gender `string`
  * Height `integer`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * Jersey `integer`
  * LastName `string`
  * Nationality `string`
  * PhotoUrl `string`
  * PlayerId `integer`
  * Position `string`
  * PositionCategory `string`
  * RotoWirePlayerID `integer`
  * ShortName `string`
  * Updated `string`
  * Weight `integer`

### PlayerGame
* PlayerGame `object`
  * Assists `number`
  * BlockedShots `number`
  * Captain `boolean`
  * CornersWon `number`
  * Crosses `number`
  * DateTime `string`
  * Day `string`
  * DefenderCleanSheets `number`
  * DraftKingsPosition `string`
  * DraftKingsSalary `integer`
  * FanDuelPosition `string`
  * FanDuelSalary `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsMondogoal `number`
  * FantasyPointsYahoo `number`
  * Fouled `number`
  * Fouls `number`
  * GameId `integer`
  * Games `integer`
  * GlobalGameId `integer`
  * GlobalOpponentId `integer`
  * GlobalTeamId `integer`
  * GoalkeeperCleanSheets `number`
  * GoalkeeperGoalsAgainst `number`
  * GoalkeeperSaves `number`
  * GoalkeeperSingleGoalAgainst `number`
  * GoalkeeperWins `number`
  * Goals `number`
  * HomeOrAway `string`
  * InjuryBodyPart `string`
  * InjuryNotes `string`
  * InjuryStartDate `string`
  * InjuryStatus `string`
  * Interceptions `number`
  * IsGameOver `boolean`
  * Jersey `integer`
  * LastManTackle `number`
  * Minutes `number`
  * MondogoalPosition `string`
  * MondogoalSalary `integer`
  * Name `string`
  * Offsides `number`
  * Opponent `string`
  * OpponentId `integer`
  * OpponentScore `number`
  * OwnGoals `number`
  * Passes `number`
  * PassesCompleted `number`
  * PenaltiesConceded `number`
  * PenaltiesWon `number`
  * PenaltyKickGoals `number`
  * PenaltyKickMisses `number`
  * PenaltyKickSaves `number`
  * PlayerId `integer`
  * Position `string`
  * PositionCategory `string`
  * RedCards `number`
  * RoundId `integer`
  * Score `number`
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * Shots `number`
  * ShotsOnGoal `number`
  * Started `integer`
  * StatId `integer`
  * Suspension `boolean`
  * SuspensionReason `string`
  * TacklesWon `number`
  * Team `string`
  * TeamId `integer`
  * Touches `number`
  * Updated `string`
  * UpdatedUtc `string`
  * YahooPosition `string`
  * YahooSalary `integer`
  * YellowCards `number`
  * YellowRedCards `number`

### PlayerSeason
* PlayerSeason `object`
  * Assists `number`
  * BlockedShots `number`
  * CornersWon `number`
  * Crosses `number`
  * DefenderCleanSheets `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsMondogoal `number`
  * FantasyPointsYahoo `number`
  * Fouled `number`
  * Fouls `number`
  * Games `integer`
  * GlobalTeamId `integer`
  * GoalkeeperCleanSheets `number`
  * GoalkeeperGoalsAgainst `number`
  * GoalkeeperSaves `number`
  * GoalkeeperSingleGoalAgainst `number`
  * GoalkeeperWins `number`
  * Goals `number`
  * Interceptions `number`
  * LastManTackle `number`
  * Minutes `number`
  * Name `string`
  * Offsides `number`
  * OpponentScore `number`
  * OwnGoals `number`
  * Passes `number`
  * PassesCompleted `number`
  * PenaltiesConceded `number`
  * PenaltiesWon `number`
  * PenaltyKickGoals `number`
  * PenaltyKickMisses `number`
  * PenaltyKickSaves `number`
  * PlayerId `integer`
  * Position `string`
  * PositionCategory `string`
  * RedCards `number`
  * RoundId `integer`
  * Score `number`
  * Season `integer`
  * SeasonType `integer`
  * ShortName `string`
  * Shots `number`
  * ShotsOnGoal `number`
  * Started `integer`
  * StatId `integer`
  * TacklesWon `number`
  * Team `string`
  * TeamId `integer`
  * Touches `number`
  * Updated `string`
  * UpdatedUtc `string`
  * YellowCards `number`
  * YellowRedCards `number`

### Referee
* Referee `object`
  * FirstName `string`
  * LastName `string`
  * Nationality `string`
  * RefereeId `integer`
  * ShortName `string`

### Round
* Round `object`
  * CurrentRound `boolean`
  * CurrentWeek `integer`
  * EndDate `string`
  * Name `string`
  * RoundId `integer`
  * Season `integer`
  * SeasonId `integer`
  * SeasonType `integer`
  * StartDate `string`
  * Type `string`

### Season
* Season `object`
  * CompetitionId `integer`
  * CompetitionName `string`
  * CurrentSeason `boolean`
  * EndDate `string`
  * Name `string`
  * Rounds `array`
    * items [Round](#round)
  * Season `integer`
  * SeasonId `integer`
  * StartDate `string`

### SeasonTeam
* SeasonTeam `object`
  * Active `boolean`
  * Gender `string`
  * SeasonId `integer`
  * SeasonTeamId `integer`
  * Team [Team](#team)
  * TeamId `integer`
  * TeamName `string`
  * Type `string`

### Standing
* Standing `object`
  * Draws `integer`
  * Games `integer`
  * GoalsAgainst `integer`
  * GoalsDifferential `integer`
  * GoalsScored `integer`
  * Losses `integer`
  * Name `string`
  * Points `integer`
  * RoundId `integer`
  * Scope `string`
  * ShortName `string`
  * StandingId `integer`
  * TeamId `integer`
  * Wins `integer`
  * [Order] `integer`

### Team
* Team `object`
  * Active `boolean`
  * Address `string`
  * AreaId `integer`
  * AreaName `string`
  * City `string`
  * ClubColor1 `string`
  * ClubColor2 `string`
  * ClubColor3 `string`
  * Email `string`
  * Fax `string`
  * Founded `integer`
  * FullName `string`
  * Gender `string`
  * GlobalTeamId `integer`
  * Name `string`
  * Nickname1 `string`
  * Nickname2 `string`
  * Nickname3 `string`
  * Phone `string`
  * TeamId `integer`
  * Type `string`
  * VenueId `integer`
  * VenueName `string`
  * Website `string`
  * WikipediaLogoUrl `string`
  * WikipediaWordMarkUrl `string`
  * Zip `string`
  * [Key] `string`

### TeamDetail
* TeamDetail `object`
  * Active `boolean`
  * Address `string`
  * AreaId `integer`
  * AreaName `string`
  * City `string`
  * ClubColor1 `string`
  * ClubColor2 `string`
  * ClubColor3 `string`
  * Email `string`
  * Fax `string`
  * Founded `integer`
  * FullName `string`
  * Gender `string`
  * GlobalTeamId `integer`
  * Name `string`
  * Nickname1 `string`
  * Nickname2 `string`
  * Nickname3 `string`
  * Phone `string`
  * Players `array`
    * items [Player](#player)
  * TeamId `integer`
  * Type `string`
  * VenueId `integer`
  * VenueName `string`
  * Website `string`
  * WikipediaLogoUrl `string`
  * WikipediaWordMarkUrl `string`
  * Zip `string`
  * [Key] `string`

### TeamGame
* TeamGame `object`
  * Assists `number`
  * BlockedShots `number`
  * CornersWon `number`
  * Crosses `number`
  * DateTime `string`
  * Day `string`
  * DefenderCleanSheets `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsMondogoal `number`
  * FantasyPointsYahoo `number`
  * Fouled `number`
  * Fouls `number`
  * GameId `integer`
  * Games `integer`
  * GlobalGameId `integer`
  * GlobalOpponentId `integer`
  * GlobalTeamId `integer`
  * GoalkeeperCleanSheets `number`
  * GoalkeeperGoalsAgainst `number`
  * GoalkeeperSaves `number`
  * GoalkeeperSingleGoalAgainst `number`
  * GoalkeeperWins `number`
  * Goals `number`
  * HomeOrAway `string`
  * Interceptions `number`
  * IsGameOver `boolean`
  * LastManTackle `number`
  * Minutes `number`
  * Name `string`
  * Offsides `number`
  * Opponent `string`
  * OpponentId `integer`
  * OpponentScore `number`
  * OwnGoals `number`
  * Passes `number`
  * PassesCompleted `number`
  * PenaltiesConceded `number`
  * PenaltiesWon `number`
  * PenaltyKickGoals `number`
  * PenaltyKickMisses `number`
  * PenaltyKickSaves `number`
  * RedCards `number`
  * RoundId `integer`
  * Score `number`
  * Season `integer`
  * SeasonType `integer`
  * Shots `number`
  * ShotsOnGoal `number`
  * StatId `integer`
  * TacklesWon `number`
  * Team `string`
  * TeamId `integer`
  * Touches `number`
  * Updated `string`
  * UpdatedUtc `string`
  * YellowCards `number`
  * YellowRedCards `number`

### TeamSeason
* TeamSeason `object`
  * Assists `number`
  * BlockedShots `number`
  * CornersWon `number`
  * Crosses `number`
  * DefenderCleanSheets `number`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FantasyPointsFanDuel `number`
  * FantasyPointsMondogoal `number`
  * FantasyPointsYahoo `number`
  * Fouled `number`
  * Fouls `number`
  * Games `integer`
  * GlobalTeamId `integer`
  * GoalkeeperCleanSheets `number`
  * GoalkeeperGoalsAgainst `number`
  * GoalkeeperSaves `number`
  * GoalkeeperSingleGoalAgainst `number`
  * GoalkeeperWins `number`
  * Goals `number`
  * Interceptions `number`
  * LastManTackle `number`
  * Minutes `number`
  * Name `string`
  * Offsides `number`
  * OpponentScore `number`
  * OwnGoals `number`
  * Passes `number`
  * PassesCompleted `number`
  * PenaltiesConceded `number`
  * PenaltiesWon `number`
  * PenaltyKickGoals `number`
  * PenaltyKickMisses `number`
  * PenaltyKickSaves `number`
  * RedCards `number`
  * RoundId `integer`
  * Score `number`
  * Season `integer`
  * SeasonType `integer`
  * Shots `number`
  * ShotsOnGoal `number`
  * StatId `integer`
  * TacklesWon `number`
  * Team `string`
  * TeamId `integer`
  * Touches `number`
  * Updated `string`
  * UpdatedUtc `string`
  * YellowCards `number`
  * YellowRedCards `number`

### Venue
* Venue `object`
  * Address `string`
  * Capacity `integer`
  * City `string`
  * Country `string`
  * GeoLat `number`
  * GeoLong `number`
  * Name `string`
  * Nickname1 `string`
  * Nickname2 `string`
  * Opened `integer`
  * Surface `string`
  * VenueId `integer`
  * Zip `string`
  * [Open] `boolean`


