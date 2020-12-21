# @datafire/sportsdata_lol_v3_projections

Client library for LoL v3 Projections

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_lol_v3_projections
```
```js
let sportsdata_lol_v3_projections = require('@datafire/sportsdata_lol_v3_projections').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

LoL v3 Projections

## Actions

### DfsSlatesByDate
Dfs Slates By Date


```js
sportsdata_lol_v3_projections.DfsSlatesByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the game(s).

#### Output
* output `array`
  * items [DfsSlate](#dfsslate)

### ProjectedPlayerGameStatsByDate
Projected Player Game Stats by Date


```js
sportsdata_lol_v3_projections.ProjectedPlayerGameStatsByDate({
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
  * items [PlayerGameProjection](#playergameprojection)

### ProjectedPlayerGameStatsByPlayer
Projected Player Game Stats by Date


```js
sportsdata_lol_v3_projections.ProjectedPlayerGameStatsByPlayer({
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
  * items [PlayerGameProjection](#playergameprojection)



## Definitions

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
  * VideoGameId `integer`

### DfsSlateGame
* DfsSlateGame `object`
  * Game [Game](#game)
  * GameID `integer`
  * OperatorGameID `integer`
  * RemovedByOperator `boolean`
  * SlateGameID `integer`
  * SlateID `integer`

### DfsSlatePlayer
* DfsSlatePlayer `object`
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

### PlayerGameProjection
* PlayerGameProjection `object`
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


