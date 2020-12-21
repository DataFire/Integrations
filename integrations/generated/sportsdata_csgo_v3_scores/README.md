# @datafire/sportsdata_csgo_v3_scores

Client library for CS:GO v3 Scores

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_csgo_v3_scores
```
```js
let sportsdata_csgo_v3_scores = require('@datafire/sportsdata_csgo_v3_scores').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

CS:GO v3 Scores

## Actions

### MembershipsActive
Memberships (Active)


```js
sportsdata_csgo_v3_scores.MembershipsActive({
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
sportsdata_csgo_v3_scores.AreasCountries({
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
sportsdata_csgo_v3_scores.CompetitionFixturesLeagueDetails({
  "format": "",
  "competitionid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competitionid **required** `string`: A CS:GO competition/league unique CompetitionId. Possible values include: <code>100000009</code>, etc.

#### Output
* output [CompetitionDetail](#competitiondetail)

### CompetitionsLeagues
Competitions (Leagues)


```js
sportsdata_csgo_v3_scores.CompetitionsLeagues({
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
sportsdata_csgo_v3_scores.GamesByDate({
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
sportsdata_csgo_v3_scores.MembershipsHistorical({
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
sportsdata_csgo_v3_scores.MembershipsByTeamHistorical({
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
sportsdata_csgo_v3_scores.MembershipsByTeamActive({
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
sportsdata_csgo_v3_scores.Player({
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
sportsdata_csgo_v3_scores.Players({
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
sportsdata_csgo_v3_scores.PlayersByTeam({
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
sportsdata_csgo_v3_scores.Schedule({
  "format": "",
  "roundid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. 

#### Output
* output `array`
  * items [Game](#game)

### SeasonTeams
Season Teams


```js
sportsdata_csgo_v3_scores.SeasonTeams({
  "format": "",
  "seasonid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * seasonid **required** `string`: Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. 

#### Output
* output `array`
  * items [SeasonTeam](#seasonteam)

### Standings
Schedule


```js
sportsdata_csgo_v3_scores.Standings({
  "format": "",
  "roundid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * roundid **required** `string`: Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. 

#### Output
* output `array`
  * items [Standing](#standing)

### Teams
Teams


```js
sportsdata_csgo_v3_scores.Teams({
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
sportsdata_csgo_v3_scores.Venues({
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
  * PlayerStatsCoverage `boolean`
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
  * PlayerStatsCoverage `boolean`
  * Seasons `array`
    * items [Season](#season)
  * Teams `array`
    * items [TeamDetail](#teamdetail)
  * Type `string`

### Game
* Game `object`
  * BestOf `string`
  * DateTime `string`
  * Day `string`
  * DrawMoneyLine `integer`
  * GameId `integer`
  * Group `string`
  * IsClosed `boolean`
  * PointSpread `number`
  * RoundId `integer`
  * Season `integer`
  * SeasonType `integer`
  * Status `string`
  * TeamAId `integer`
  * TeamAKey `string`
  * TeamAMoneyLine `integer`
  * TeamAName `string`
  * TeamAPointSpreadPayout `integer`
  * TeamAScore `integer`
  * TeamBId `integer`
  * TeamBKey `string`
  * TeamBMoneyLine `integer`
  * TeamBName `string`
  * TeamBPointSpreadPayout `integer`
  * TeamBScore `integer`
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
  * FirstName `string`
  * Gender `string`
  * LastName `string`
  * MatchName `string`
  * Nationality `string`
  * PlayerId `integer`
  * Position `string`
  * Updated `string`

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
  * Games `integer`
  * Group `string`
  * Losses `integer`
  * Name `string`
  * Points `integer`
  * RoundId `integer`
  * ScoreAgainst `integer`
  * ScoreDifference `integer`
  * ScoreFor `integer`
  * StandingId `integer`
  * TeamId `integer`
  * Wins `integer`
  * [Order] `integer`

### Team
* Team `object`
  * Active `boolean`
  * AreaId `integer`
  * AreaName `string`
  * Email `string`
  * Facebook `string`
  * Founded `integer`
  * Gender `string`
  * Instagram `string`
  * Name `string`
  * PrimaryColor `string`
  * QuaternaryColor `string`
  * SecondaryColor `string`
  * ShortName `string`
  * TeamId `integer`
  * TertiaryColor `string`
  * Twitter `string`
  * Type `string`
  * Website `string`
  * YouTube `string`
  * [Key] `string`

### TeamDetail
* TeamDetail `object`
  * Active `boolean`
  * AreaId `integer`
  * AreaName `string`
  * Email `string`
  * Facebook `string`
  * Founded `integer`
  * Gender `string`
  * Instagram `string`
  * Name `string`
  * Players `array`
    * items [Player](#player)
  * PrimaryColor `string`
  * QuaternaryColor `string`
  * SecondaryColor `string`
  * ShortName `string`
  * TeamId `integer`
  * TertiaryColor `string`
  * Twitter `string`
  * Type `string`
  * Website `string`
  * YouTube `string`
  * [Key] `string`

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
  * VenueId `integer`
  * Zip `string`
  * [Open] `boolean`


