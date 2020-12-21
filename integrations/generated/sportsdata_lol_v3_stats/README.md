# @datafire/sportsdata_lol_v3_stats

Client library for LoL v3 Stats

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_lol_v3_stats
```
```js
let sportsdata_lol_v3_stats = require('@datafire/sportsdata_lol_v3_stats').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

LoL v3 Stats

## Actions

### MembershipsActive
Memberships (Active)


```js
sportsdata_lol_v3_stats.MembershipsActive({
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
sportsdata_lol_v3_stats.AreasCountries({
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
Games by Date


```js
sportsdata_lol_v3_stats.BoxScore({
  "format": "",
  "gameid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * gameid **required** `string`: Unique FantasyData Game ID. 

#### Output
* output `array`
  * items [BoxScore](#boxscore)

### BoxScoresByDate
Games by Date


```js
sportsdata_lol_v3_stats.BoxScoresByDate({
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

### Champions
Areas (Countries)


```js
sportsdata_lol_v3_stats.Champions({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Champion](#champion)

### CompetitionFixturesLeagueDetails
Competition Fixtures (League Details)


```js
sportsdata_lol_v3_stats.CompetitionFixturesLeagueDetails({
  "format": "",
  "competitionid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * competitionid **required** `string`: A LoL competition/league unique CompetitionId. Possible values include: <code>100000019</code>, etc.

#### Output
* output [CompetitionDetail](#competitiondetail)

### CompetitionsLeagues
Competitions (Leagues)


```js
sportsdata_lol_v3_stats.CompetitionsLeagues({
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
sportsdata_lol_v3_stats.GamesByDate({
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
sportsdata_lol_v3_stats.MembershipsHistorical({
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
sportsdata_lol_v3_stats.MembershipsByTeamHistorical({
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

### Items
Competitions (Leagues)


```js
sportsdata_lol_v3_stats.Items({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Item](#item)

### MembershipsByTeamActive
Memberships by Team (Active)


```js
sportsdata_lol_v3_stats.MembershipsByTeamActive({
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
sportsdata_lol_v3_stats.Player({
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
sportsdata_lol_v3_stats.Players({
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
sportsdata_lol_v3_stats.PlayersByTeam({
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
sportsdata_lol_v3_stats.Schedule({
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
sportsdata_lol_v3_stats.SeasonTeams({
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

### Spells
Areas (Countries)


```js
sportsdata_lol_v3_stats.Spells({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Spell](#spell)

### Standings
Standings


```js
sportsdata_lol_v3_stats.Standings({
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
sportsdata_lol_v3_stats.Teams({
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
sportsdata_lol_v3_stats.Venues({
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

### BoxScore
* BoxScore `object`
  * Game [Game](#game)
  * Matches `array`
    * items [Match](#match)
  * PlayerGames `array`
    * items [PlayerGame](#playergame)
  * TeamGames `array`
    * items [TeamGame](#teamgame)

### Champion
* Champion `object`
  * Armor `number`
  * ArmorPerLevel `number`
  * Attack `number`
  * AttackDamage `number`
  * AttackDamagePerLevel `number`
  * AttackRange `number`
  * AttackSpeedOffset `number`
  * ChampionId `integer`
  * Defense `number`
  * Difficulty `number`
  * Hp `number`
  * HpRegen `number`
  * HpRegenPerLevel `number`
  * HpUpPerLevel `number`
  * Magic `number`
  * MoveSpeed `number`
  * Mp `number`
  * MpRegen `number`
  * MpRegenPerLevel `number`
  * MpUpPerLevel `number`
  * Name `string`
  * SpellBlock `number`
  * SpellBlockPerLevel `number`
  * Title `string`

### ChampionInfo
* ChampionInfo `object`
  * ChampionId `integer`
  * Name `string`
  * Title `string`

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

### Item
* Item `object`
  * GoldBase `integer`
  * GoldSell `integer`
  * GoldTotal `integer`
  * ItemId `integer`
  * Name `string`

### Match
* Match `object`
  * GameId `integer`
  * GameVersion `string`
  * MapName `string`
  * MatchBans `array`
    * items [MatchBan](#matchban)
  * Number `integer`
  * PlayerMatches `array`
    * items [PlayerMatch](#playermatch)
  * TeamMatches `array`
    * items [TeamMatch](#teammatch)
  * WinningTeamId `integer`

### MatchBan
* MatchBan `object`
  * Champion [ChampionInfo](#championinfo)
  * ChampionId `integer`
  * MatchId `integer`
  * TeamId `integer`

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

### PlayerGame
* PlayerGame `object`
  * Assists `number`
  * CombatPlayerScore `number`
  * DateTime `string`
  * Day `string`
  * Deaths `number`
  * DoubleKills `number`
  * FantasyPoints `number`
  * GameId `integer`
  * Games `integer`
  * GoldEarned `number`
  * GoldSpent `number`
  * InhibitorKills `number`
  * IsClosed `boolean`
  * KillingSpree `number`
  * Kills `number`
  * LargestCriticalStrike `number`
  * LargestKillingSpree `number`
  * LargestMultiKill `number`
  * LongestTimeSpentLiving `number`
  * MagicDamageDealt `number`
  * MagicDamageDealtToChampions `number`
  * MagicDamageTaken `number`
  * MatchName `string`
  * Matches `integer`
  * Name `string`
  * NeutralMinionsKIlled `number`
  * NeutralMinionsKIlledTeamJungle `number`
  * NeutralMinionsKilledEnemyJungle `number`
  * ObjectivePlayerScore `number`
  * Opponent `string`
  * OpponentId `integer`
  * PentaKills `number`
  * PhysicalDamageDealt `number`
  * PhysicalDamageDealtToChampions `number`
  * PhysicalDamageTaken `number`
  * PlayerId `integer`
  * Position `string`
  * QuadraKills `number`
  * SightWardsBoughtInGame `number`
  * Team `string`
  * TeamId `integer`
  * TenKillsOrAssists `number`
  * TotalDamageDealt `number`
  * TotalDamageDealtToChampions `number`
  * TotalDamageTaken `number`
  * TotalHeal `number`
  * TotalMinionsKilled `number`
  * TotalPlayerScore `number`
  * TotalTimeCrowdControlDealt `number`
  * TotalUnitsHealed `number`
  * TripleKills `number`
  * TrueDamageDealt `number`
  * TrueDamageDealtToChampions `number`
  * TrueDamageTaken `number`
  * TurretKills `number`
  * UnrealKills `number`
  * Updated `string`
  * VisionWardsBoughtInGame `number`
  * WardsKilled `number`
  * WardsPlaced `number`

### PlayerMatch
* PlayerMatch `object`
  * Assists `number`
  * Champion [ChampionInfo](#championinfo)
  * ChampionId `integer`
  * ChampionLevel `integer`
  * CombatPlayerScore `number`
  * DateTime `string`
  * Day `string`
  * Deaths `number`
  * DoubleKills `number`
  * FantasyPoints `number`
  * GameId `integer`
  * Games `integer`
  * GoldEarned `number`
  * GoldSpent `number`
  * InhibitorKills `number`
  * IsClosed `boolean`
  * Items `array`
    * items [Item](#item)
  * KillingSpree `number`
  * Kills `number`
  * Lane `string`
  * LargestCriticalStrike `number`
  * LargestKillingSpree `number`
  * LargestMultiKill `number`
  * LongestTimeSpentLiving `number`
  * MagicDamageDealt `number`
  * MagicDamageDealtToChampions `number`
  * MagicDamageTaken `number`
  * MatchId `integer`
  * MatchName `string`
  * Matches `integer`
  * Name `string`
  * NeutralMinionsKIlled `number`
  * NeutralMinionsKIlledTeamJungle `number`
  * NeutralMinionsKilledEnemyJungle `number`
  * ObjectivePlayerScore `number`
  * Opponent `string`
  * OpponentId `integer`
  * PentaKills `number`
  * PhysicalDamageDealt `number`
  * PhysicalDamageDealtToChampions `number`
  * PhysicalDamageTaken `number`
  * PlayerId `integer`
  * Position `string`
  * QuadraKills `number`
  * Role `string`
  * SightWardsBoughtInGame `number`
  * Spells `array`
    * items [Spell](#spell)
  * Team `string`
  * TeamId `integer`
  * TenKillsOrAssists `number`
  * TotalDamageDealt `number`
  * TotalDamageDealtToChampions `number`
  * TotalDamageTaken `number`
  * TotalHeal `number`
  * TotalMinionsKilled `number`
  * TotalPlayerScore `number`
  * TotalTimeCrowdControlDealt `number`
  * TotalUnitsHealed `number`
  * TripleKills `number`
  * TrueDamageDealt `number`
  * TrueDamageDealtToChampions `number`
  * TrueDamageTaken `number`
  * TurretKills `number`
  * UnrealKills `number`
  * Updated `string`
  * VisionWardsBoughtInGame `number`
  * WardsKilled `number`
  * WardsPlaced `number`

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

### Spell
* Spell `object`
  * Name `string`
  * SpellId `integer`

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

### TeamGame
* TeamGame `object`
  * Assists `number`
  * CombatPlayerScore `number`
  * DateTime `string`
  * Day `string`
  * Deaths `number`
  * DoubleKills `number`
  * FantasyPoints `number`
  * FirstBaron `number`
  * FirstBlood `number`
  * FirstDragon `number`
  * FirstInhibitor `number`
  * FirstRiftHerald `number`
  * FirstTower `number`
  * GameId `integer`
  * Games `integer`
  * GoldEarned `number`
  * GoldSpent `number`
  * InhibitorKills `number`
  * IsClosed `boolean`
  * KillingSpree `number`
  * Kills `number`
  * LargestCriticalStrike `number`
  * LargestKillingSpree `number`
  * LargestMultiKill `number`
  * LongestTimeSpentLiving `number`
  * MagicDamageDealt `number`
  * MagicDamageDealtToChampions `number`
  * MagicDamageTaken `number`
  * MatchName `string`
  * Matches `integer`
  * Name `string`
  * NeutralMinionsKIlled `number`
  * NeutralMinionsKIlledTeamJungle `number`
  * NeutralMinionsKilledEnemyJungle `number`
  * ObjectivePlayerScore `number`
  * Opponent `string`
  * OpponentId `integer`
  * PentaKills `number`
  * PhysicalDamageDealt `number`
  * PhysicalDamageDealtToChampions `number`
  * PhysicalDamageTaken `number`
  * PlayerId `integer`
  * Position `string`
  * QuadraKills `number`
  * SightWardsBoughtInGame `number`
  * Team `string`
  * TeamId `integer`
  * TenKillsOrAssists `number`
  * TotalDamageDealt `number`
  * TotalDamageDealtToChampions `number`
  * TotalDamageTaken `number`
  * TotalHeal `number`
  * TotalMinionsKilled `number`
  * TotalPlayerScore `number`
  * TotalTimeCrowdControlDealt `number`
  * TotalUnitsHealed `number`
  * TripleKills `number`
  * TrueDamageDealt `number`
  * TrueDamageDealtToChampions `number`
  * TrueDamageTaken `number`
  * TurretKills `number`
  * UnrealKills `number`
  * Updated `string`
  * VisionWardsBoughtInGame `number`
  * WardsKilled `number`
  * WardsPlaced `number`

### TeamMatch
* TeamMatch `object`
  * Assists `number`
  * CombatPlayerScore `number`
  * DateTime `string`
  * Day `string`
  * Deaths `number`
  * DoubleKills `number`
  * FantasyPoints `number`
  * FirstBaron `number`
  * FirstBlood `number`
  * FirstDragon `number`
  * FirstInhibitor `number`
  * FirstRiftHerald `number`
  * FirstTower `number`
  * GameId `integer`
  * Games `integer`
  * GoldEarned `number`
  * GoldSpent `number`
  * InhibitorKills `number`
  * IsClosed `boolean`
  * KillingSpree `number`
  * Kills `number`
  * LargestCriticalStrike `number`
  * LargestKillingSpree `number`
  * LargestMultiKill `number`
  * LongestTimeSpentLiving `number`
  * MagicDamageDealt `number`
  * MagicDamageDealtToChampions `number`
  * MagicDamageTaken `number`
  * MatchName `string`
  * Matches `integer`
  * Name `string`
  * NeutralMinionsKIlled `number`
  * NeutralMinionsKIlledTeamJungle `number`
  * NeutralMinionsKilledEnemyJungle `number`
  * ObjectivePlayerScore `number`
  * Opponent `string`
  * OpponentId `integer`
  * PentaKills `number`
  * PhysicalDamageDealt `number`
  * PhysicalDamageDealtToChampions `number`
  * PhysicalDamageTaken `number`
  * PlayerId `integer`
  * Position `string`
  * QuadraKills `number`
  * SightWardsBoughtInGame `number`
  * Team `string`
  * TeamId `integer`
  * TenKillsOrAssists `number`
  * TotalDamageDealt `number`
  * TotalDamageDealtToChampions `number`
  * TotalDamageTaken `number`
  * TotalHeal `number`
  * TotalMinionsKilled `number`
  * TotalPlayerScore `number`
  * TotalTimeCrowdControlDealt `number`
  * TotalUnitsHealed `number`
  * TripleKills `number`
  * TrueDamageDealt `number`
  * TrueDamageDealtToChampions `number`
  * TrueDamageTaken `number`
  * TurretKills `number`
  * UnrealKills `number`
  * Updated `string`
  * VisionWardsBoughtInGame `number`
  * WardsKilled `number`
  * WardsPlaced `number`

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


