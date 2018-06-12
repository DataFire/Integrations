# @datafire/fantasydata_soccer_v3_scores

Client library for Soccer v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_soccer_v3_scores
```
```js
let fantasydata_soccer_v3_scores = require('@datafire/fantasydata_soccer_v3_scores').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

fantasydata_soccer_v3_scores.MembershipsActive({
  "format": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### MembershipsActive
Memberships (Active)


```js
fantasydata_soccer_v3_scores.MembershipsActive({
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
fantasydata_soccer_v3_scores.AreasCountries({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Area](#area)

### CompetitionFixturesLeagueDetails
Competition Fixtures (League Details)


```js
fantasydata_soccer_v3_scores.CompetitionFixturesLeagueDetails({
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
fantasydata_soccer_v3_scores.CompetitionHierarchyLeagueHierarchy({
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
fantasydata_soccer_v3_scores.CompetitionsLeagues({
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
fantasydata_soccer_v3_scores.GamesByDate({
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
fantasydata_soccer_v3_scores.MembershipsHistorical({
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
fantasydata_soccer_v3_scores.MembershipsByTeamHistorical({
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
fantasydata_soccer_v3_scores.MembershipsByTeamActive({
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
fantasydata_soccer_v3_scores.Player({
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

### Players
Players


```js
fantasydata_soccer_v3_scores.Players({
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
fantasydata_soccer_v3_scores.PlayersByTeam({
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
fantasydata_soccer_v3_scores.Schedule({
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
fantasydata_soccer_v3_scores.SeasonTeams({
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
fantasydata_soccer_v3_scores.Standings({
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
fantasydata_soccer_v3_scores.TeamGameStatsByDate({
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
fantasydata_soccer_v3_scores.TeamSeasonStats({
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
fantasydata_soccer_v3_scores.Teams({
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
fantasydata_soccer_v3_scores.Venues({
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


