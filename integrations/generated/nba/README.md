# @datafire/nba

Client library for NBA Stats

## Installation and Usage
```bash
npm install --save @datafire/nba
```
```js
let nba = require('@datafire/nba').create();

nba.playerdashptshotlog.get({}).then(data => {
  console.log(data);
})
```

## Description

The destination for current and historic NBA statistics.

## Actions

### allstarballotpredictor.get



```js
nba.allstarballotpredictor.get({
  "WestPlayer1": "",
  "WestPlayer2": "",
  "WestPlayer3": "",
  "WestPlayer4": "",
  "WestPlayer5": "",
  "EastPlayer1": "",
  "EastPlayer2": "",
  "EastPlayer3": "",
  "EastPlayer4": "",
  "EastPlayer5": ""
}, context)
```

#### Input
* input `object`
  * PointCap `string`
  * WestPlayer1 **required** `string`
  * WestPlayer2 **required** `string`
  * WestPlayer3 **required** `string`
  * WestPlayer4 **required** `string`
  * WestPlayer5 **required** `string`
  * EastPlayer1 **required** `string`
  * EastPlayer2 **required** `string`
  * EastPlayer3 **required** `string`
  * EastPlayer4 **required** `string`
  * EastPlayer5 **required** `string`

#### Output
*Output schema unknown*

### boxscore.get



```js
nba.boxscore.get({}, context)
```

#### Input
* input `object`
  * GameID `string`
  * StartPeriod `string`
  * EndPeriod `string`
  * StartRange `string`
  * EndRange `string`
  * RangeType `string`

#### Output
*Output schema unknown*

### boxscoreadvanced.get



```js
nba.boxscoreadvanced.get({}, context)
```

#### Input
* input `object`
  * GameID `string`
  * StartPeriod `string`
  * EndPeriod `string`
  * StartRange `string`
  * EndRange `string`
  * RangeType `string`

#### Output
*Output schema unknown*

### boxscoreadvancedv2.get



```js
nba.boxscoreadvancedv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": "",
  "StartRange": "",
  "EndRange": "",
  "RangeType": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`
  * StartRange **required** `string`
  * EndRange **required** `string`
  * RangeType **required** `string`

#### Output
*Output schema unknown*

### boxscorefourfactors.get



```js
nba.boxscorefourfactors.get({}, context)
```

#### Input
* input `object`
  * GameID `string`
  * StartPeriod `string`
  * EndPeriod `string`
  * StartRange `string`
  * EndRange `string`
  * RangeType `string`

#### Output
*Output schema unknown*

### boxscorefourfactorsv2.get



```js
nba.boxscorefourfactorsv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": "",
  "StartRange": "",
  "EndRange": "",
  "RangeType": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`
  * StartRange **required** `string`
  * EndRange **required** `string`
  * RangeType **required** `string`

#### Output
*Output schema unknown*

### boxscoremisc.get



```js
nba.boxscoremisc.get({}, context)
```

#### Input
* input `object`
  * GameID `string`
  * StartPeriod `string`
  * EndPeriod `string`
  * StartRange `string`
  * EndRange `string`
  * RangeType `string`

#### Output
*Output schema unknown*

### boxscoremiscv2.get



```js
nba.boxscoremiscv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": "",
  "StartRange": "",
  "EndRange": "",
  "RangeType": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`
  * StartRange **required** `string`
  * EndRange **required** `string`
  * RangeType **required** `string`

#### Output
*Output schema unknown*

### boxscoreplayertrackv2.get



```js
nba.boxscoreplayertrackv2.get({
  "GameID": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`

#### Output
*Output schema unknown*

### boxscorescoring.get



```js
nba.boxscorescoring.get({}, context)
```

#### Input
* input `object`
  * GameID `string`
  * StartPeriod `string`
  * EndPeriod `string`
  * StartRange `string`
  * EndRange `string`
  * RangeType `string`

#### Output
*Output schema unknown*

### boxscorescoringv2.get



```js
nba.boxscorescoringv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": "",
  "StartRange": "",
  "EndRange": "",
  "RangeType": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`
  * StartRange **required** `string`
  * EndRange **required** `string`
  * RangeType **required** `string`

#### Output
*Output schema unknown*

### boxscoresummaryv2.get



```js
nba.boxscoresummaryv2.get({
  "GameID": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`

#### Output
*Output schema unknown*

### boxscoretraditionalv2.get



```js
nba.boxscoretraditionalv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": "",
  "StartRange": "",
  "EndRange": "",
  "RangeType": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`
  * StartRange **required** `string`
  * EndRange **required** `string`
  * RangeType **required** `string`

#### Output
*Output schema unknown*

### boxscoreusage.get



```js
nba.boxscoreusage.get({}, context)
```

#### Input
* input `object`
  * GameID `string`
  * StartPeriod `string`
  * EndPeriod `string`
  * StartRange `string`
  * EndRange `string`
  * RangeType `string`

#### Output
*Output schema unknown*

### boxscoreusagev2.get



```js
nba.boxscoreusagev2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": "",
  "StartRange": "",
  "EndRange": "",
  "RangeType": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`
  * StartRange **required** `string`
  * EndRange **required** `string`
  * RangeType **required** `string`

#### Output
*Output schema unknown*

### commonTeamYears.get



```js
nba.commonTeamYears.get({
  "LeagueID": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`

#### Output
*Output schema unknown*

### commonallplayers.get



```js
nba.commonallplayers.get({
  "LeagueID": "",
  "Season": "",
  "IsOnlyCurrentSeason": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * Season **required** `string`
  * IsOnlyCurrentSeason **required** `string`

#### Output
*Output schema unknown*

### commonplayerinfo.get



```js
nba.commonplayerinfo.get({
  "PlayerID": ""
}, context)
```

#### Input
* input `object`
  * PlayerID **required** `string`

#### Output
*Output schema unknown*

### commonplayoffseries.get



```js
nba.commonplayoffseries.get({
  "LeagueID": "",
  "Season": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * Season **required** `string`

#### Output
*Output schema unknown*

### commonteamroster.get



```js
nba.commonteamroster.get({
  "Season": "",
  "TeamID": ""
}, context)
```

#### Input
* input `object`
  * Season **required** `string`
  * TeamID **required** `string`

#### Output
*Output schema unknown*

### draftcombinedrillresults.get



```js
nba.draftcombinedrillresults.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonYear **required** `string`

#### Output
*Output schema unknown*

### draftcombinenonstationaryshooting.get



```js
nba.draftcombinenonstationaryshooting.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonYear **required** `string`

#### Output
*Output schema unknown*

### draftcombineplayeranthro.get



```js
nba.draftcombineplayeranthro.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonYear **required** `string`

#### Output
*Output schema unknown*

### draftcombinespotshooting.get



```js
nba.draftcombinespotshooting.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonYear **required** `string`

#### Output
*Output schema unknown*

### draftcombinestats.get



```js
nba.draftcombinestats.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonYear **required** `string`

#### Output
*Output schema unknown*

### drafthistory.get



```js
nba.drafthistory.get({
  "LeagueID": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`

#### Output
*Output schema unknown*

### franchisehistory.get



```js
nba.franchisehistory.get({
  "LeagueID": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`

#### Output
*Output schema unknown*

### homepageleaders.get



```js
nba.homepageleaders.get({
  "StatCategory": "",
  "LeagueID": "",
  "Season": "",
  "SeasonType": "",
  "PlayerOrTeam": "",
  "PlayerScope": "",
  "GameScope": ""
}, context)
```

#### Input
* input `object`
  * StatCategory **required** `string`
  * LeagueID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerOrTeam **required** `string`
  * Game `string`
  * Player `string`
  * PlayerScope **required** `string`
  * GameScope **required** `string`

#### Output
*Output schema unknown*

### homepagev2.get



```js
nba.homepagev2.get({
  "StatType": "",
  "LeagueID": "",
  "Season": "",
  "SeasonType": "",
  "PlayerOrTeam": "",
  "PlayerScope": "",
  "GameScope": ""
}, context)
```

#### Input
* input `object`
  * StatType **required** `string`
  * LeagueID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerOrTeam **required** `string`
  * Game `string`
  * Player `string`
  * PlayerScope **required** `string`
  * GameScope **required** `string`

#### Output
*Output schema unknown*

### leaderstiles.get



```js
nba.leaderstiles.get({
  "Stat": "",
  "LeagueID": "",
  "Season": "",
  "SeasonType": "",
  "PlayerOrTeam": "",
  "PlayerScope": "",
  "GameScope": ""
}, context)
```

#### Input
* input `object`
  * Stat **required** `string`
  * LeagueID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerOrTeam **required** `string`
  * Game `string`
  * Player `string`
  * PlayerScope **required** `string`
  * GameScope **required** `string`

#### Output
*Output schema unknown*

### leaguedashlineups.get



```js
nba.leaguedashlineups.get({
  "GroupQuantity": "",
  "SeasonType": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * GroupQuantity **required** `string`
  * SeasonType **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### leaguedashplayerbiostats.get



```js
nba.leaguedashplayerbiostats.get({
  "PerMode": "",
  "LeagueID": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * LeagueID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`

#### Output
*Output schema unknown*

### leaguedashplayerclutch.get



```js
nba.leaguedashplayerclutch.get({
  "ClutchTime": "",
  "AheadBehind": "",
  "PointDiff": "",
  "GameScope": "",
  "PlayerExperience": "",
  "PlayerPosition": "",
  "StarterBench": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * ClutchTime **required** `string`
  * AheadBehind **required** `string`
  * PointDiff **required** `string`
  * GameScope **required** `string`
  * PlayerExperience **required** `string`
  * PlayerPosition **required** `string`
  * StarterBench **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### leaguedashplayerptshot.get



```js
nba.leaguedashplayerptshot.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`

#### Output
*Output schema unknown*

### leaguedashplayershotlocations.get



```js
nba.leaguedashplayershotlocations.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": "",
  "DistanceRange": "",
  "GameScope": "",
  "PlayerExperience": "",
  "PlayerPosition": "",
  "StarterBench": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`
  * DistanceRange **required** `string`
  * GameScope **required** `string`
  * PlayerExperience **required** `string`
  * PlayerPosition **required** `string`
  * StarterBench **required** `string`

#### Output
*Output schema unknown*

### leaguedashplayerstats.get



```js
nba.leaguedashplayerstats.get({
  "GameScope": "",
  "PlayerExperience": "",
  "PlayerPosition": "",
  "StarterBench": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * GameScope **required** `string`
  * PlayerExperience **required** `string`
  * PlayerPosition **required** `string`
  * StarterBench **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### leaguedashptdefend.get



```js
nba.leaguedashptdefend.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "DefenseCategory": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * DefenseCategory **required** `string`

#### Output
*Output schema unknown*

### leaguedashptteamdefend.get



```js
nba.leaguedashptteamdefend.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "DefenseCategory": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * DefenseCategory **required** `string`

#### Output
*Output schema unknown*

### leaguedashteamclutch.get



```js
nba.leaguedashteamclutch.get({
  "ClutchTime": "",
  "AheadBehind": "",
  "PointDiff": "",
  "GameScope": "",
  "PlayerExperience": "",
  "PlayerPosition": "",
  "StarterBench": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * ClutchTime **required** `string`
  * AheadBehind **required** `string`
  * PointDiff **required** `string`
  * GameScope **required** `string`
  * PlayerExperience **required** `string`
  * PlayerPosition **required** `string`
  * StarterBench **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### leaguedashteamptshot.get



```js
nba.leaguedashteamptshot.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`

#### Output
*Output schema unknown*

### leaguedashteamshotlocations.get



```js
nba.leaguedashteamshotlocations.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": "",
  "DistanceRange": "",
  "GameScope": "",
  "PlayerExperience": "",
  "PlayerPosition": "",
  "StarterBench": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`
  * DistanceRange **required** `string`
  * GameScope **required** `string`
  * PlayerExperience **required** `string`
  * PlayerPosition **required** `string`
  * StarterBench **required** `string`

#### Output
*Output schema unknown*

### leaguedashteamstats.get



```js
nba.leaguedashteamstats.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### leagueleaders.get



```js
nba.leagueleaders.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "Scope": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * PerMode **required** `string`
  * StatCategory `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Scope **required** `string`

#### Output
*Output schema unknown*

### playbyplay.get



```js
nba.playbyplay.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`

#### Output
*Output schema unknown*

### playbyplayv2.get



```js
nba.playbyplayv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": ""
}, context)
```

#### Input
* input `object`
  * GameID **required** `string`
  * StartPeriod **required** `string`
  * EndPeriod **required** `string`

#### Output
*Output schema unknown*

### playercareerstats.get



```js
nba.playercareerstats.get({
  "PerMode": "",
  "PlayerID": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * PlayerID **required** `string`

#### Output
*Output schema unknown*

### playercompare.get



```js
nba.playercompare.get({
  "PlayerIDList": "",
  "VsPlayerIDList": "",
  "SeasonType": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PlayerIDList **required** `string`
  * VsPlayerIDList **required** `string`
  * SeasonType **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbyclutch.get



```js
nba.playerdashboardbyclutch.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbygamesplits.get



```js
nba.playerdashboardbygamesplits.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbygeneralsplits.get



```js
nba.playerdashboardbygeneralsplits.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbylastngames.get



```js
nba.playerdashboardbylastngames.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbyopponent.get



```js
nba.playerdashboardbyopponent.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbyshootingsplits.get



```js
nba.playerdashboardbyshootingsplits.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbyteamperformance.get



```js
nba.playerdashboardbyteamperformance.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashboardbyyearoveryear.get



```js
nba.playerdashboardbyyearoveryear.get({
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashptpass.get



```js
nba.playerdashptpass.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashptreb.get



```js
nba.playerdashptreb.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashptreboundlogs.get



```js
nba.playerdashptreboundlogs.get({}, context)
```

#### Input
* input `object`
  * Season `string`
  * SeasonType `string`
  * PlayerID `string`
  * TeamID `string`
  * Outcome `string`
  * Location `string`
  * Month `string`
  * SeasonSegment `string`
  * DateFrom `string`
  * DateTo `string`
  * OpponentTeamID `string`
  * VsConference `string`
  * VsDivision `string`
  * GameSegment `string`
  * Period `string`
  * LastNGames `string`

#### Output
*Output schema unknown*

### playerdashptshotdefend.get



```js
nba.playerdashptshotdefend.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playerdashptshotlog.get



```js
nba.playerdashptshotlog.get({}, context)
```

#### Input
* input `object`
  * LeagueID `string`
  * Season `string`
  * SeasonType `string`
  * PlayerID `string`
  * TeamID `string`

#### Output
*Output schema unknown*

### playerdashptshots.get



```js
nba.playerdashptshots.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "PlayerID": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * PlayerID **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playergamelog.get



```js
nba.playergamelog.get({
  "PlayerID": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Input
* input `object`
  * PlayerID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`

#### Output
*Output schema unknown*

### playerprofile.get



```js
nba.playerprofile.get({
  "LeagueID": "",
  "PlayerID": "",
  "Season": "",
  "SeasonType": "",
  "GraphStartSeason": "",
  "GraphEndSeason": "",
  "GraphStat": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * PlayerID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * GraphStartSeason **required** `string`
  * GraphEndSeason **required** `string`
  * GraphStat **required** `string`

#### Output
*Output schema unknown*

### playerprofilev2.get



```js
nba.playerprofilev2.get({
  "PerMode": "",
  "PlayerID": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * PlayerID **required** `string`

#### Output
*Output schema unknown*

### playersvsplayers.get



```js
nba.playersvsplayers.get({
  "PlayerTeamID": "",
  "PlayerID1": "",
  "PlayerID2": "",
  "PlayerID3": "",
  "PlayerID4": "",
  "PlayerID5": "",
  "VsTeamID": "",
  "VsPlayerID1": "",
  "VsPlayerID2": "",
  "VsPlayerID3": "",
  "VsPlayerID4": "",
  "VsPlayerID5": "",
  "SeasonType": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PlayerTeamID **required** `string`
  * PlayerID1 **required** `string`
  * PlayerID2 **required** `string`
  * PlayerID3 **required** `string`
  * PlayerID4 **required** `string`
  * PlayerID5 **required** `string`
  * VsTeamID **required** `string`
  * VsPlayerID1 **required** `string`
  * VsPlayerID2 **required** `string`
  * VsPlayerID3 **required** `string`
  * VsPlayerID4 **required** `string`
  * VsPlayerID5 **required** `string`
  * SeasonType **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playervsplayer.get



```js
nba.playervsplayer.get({
  "PlayerID": "",
  "VsPlayerID": "",
  "SeasonType": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PlayerID **required** `string`
  * VsPlayerID **required** `string`
  * SeasonType **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### playoffpicture.get



```js
nba.playoffpicture.get({
  "LeagueID": "",
  "SeasonID": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonID **required** `string`

#### Output
*Output schema unknown*

### scoreboard.get



```js
nba.scoreboard.get({
  "GameDate": "",
  "LeagueID": "",
  "DayOffset": ""
}, context)
```

#### Input
* input `object`
  * GameDate **required** `string`
  * LeagueID **required** `string`
  * DayOffset **required** `string`

#### Output
*Output schema unknown*

### scoreboardV2.get



```js
nba.scoreboardV2.get({
  "GameDate": "",
  "LeagueID": "",
  "DayOffset": ""
}, context)
```

#### Input
* input `object`
  * GameDate **required** `string`
  * LeagueID **required** `string`
  * DayOffset **required** `string`

#### Output
*Output schema unknown*

### shotchartdetail.get



```js
nba.shotchartdetail.get({
  "SeasonType": "",
  "TeamID": "",
  "PlayerID": "",
  "GameID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "Position": "",
  "RookieYear": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": "",
  "ContextMeasure": ""
}, context)
```

#### Input
* input `object`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * PlayerID **required** `string`
  * GameID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * Position **required** `string`
  * RookieYear **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`
  * ContextMeasure **required** `string`

#### Output
*Output schema unknown*

### shotchartlineupdetail.get



```js
nba.shotchartlineupdetail.get({
  "LeagueID": "",
  "Season": "",
  "SeasonType": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": "",
  "GameID": "",
  "GROUP_ID": "",
  "ContextMeasure": "",
  "ContextFilter": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`
  * GameID **required** `string`
  * GROUP_ID **required** `string`
  * ContextMeasure **required** `string`
  * ContextFilter **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbyclutch.get



```js
nba.teamdashboardbyclutch.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbygamesplits.get



```js
nba.teamdashboardbygamesplits.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbygeneralsplits.get



```js
nba.teamdashboardbygeneralsplits.get({
  "SeasonType": "",
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbylastngames.get



```js
nba.teamdashboardbylastngames.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbyopponent.get



```js
nba.teamdashboardbyopponent.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbyshootingsplits.get



```js
nba.teamdashboardbyshootingsplits.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbyteamperformance.get



```js
nba.teamdashboardbyteamperformance.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashboardbyyearoveryear.get



```js
nba.teamdashboardbyyearoveryear.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashlineups.get



```js
nba.teamdashlineups.get({
  "GroupQuantity": "",
  "GameID": "",
  "SeasonType": "",
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * GroupQuantity **required** `string`
  * GameID **required** `string`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashptpass.get



```js
nba.teamdashptpass.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashptreb.get



```js
nba.teamdashptreb.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamdashptshots.get



```js
nba.teamdashptshots.get({
  "PerMode": "",
  "Season": "",
  "SeasonType": "",
  "TeamID": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * PerMode **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamgamelog.get



```js
nba.teamgamelog.get({
  "TeamID": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`

#### Output
*Output schema unknown*

### teaminfocommon.get



```js
nba.teaminfocommon.get({
  "Season": "",
  "TeamID": "",
  "LeagueID": "",
  "SeasonType": ""
}, context)
```

#### Input
* input `object`
  * Season **required** `string`
  * TeamID **required** `string`
  * LeagueID **required** `string`
  * SeasonType **required** `string`

#### Output
*Output schema unknown*

### teamplayerdashboard.get



```js
nba.teamplayerdashboard.get({
  "SeasonType": "",
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * SeasonType **required** `string`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamplayeronoffdetails.get



```js
nba.teamplayeronoffdetails.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamplayeronoffsummary.get



```js
nba.teamplayeronoffsummary.get({
  "TeamID": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "SeasonType": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * SeasonType **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamvsplayer.get



```js
nba.teamvsplayer.get({
  "TeamID": "",
  "VsPlayerID": "",
  "SeasonType": "",
  "MeasureType": "",
  "PerMode": "",
  "PlusMinus": "",
  "PaceAdjust": "",
  "Rank": "",
  "Season": "",
  "Outcome": "",
  "Location": "",
  "Month": "",
  "SeasonSegment": "",
  "DateFrom": "",
  "DateTo": "",
  "OpponentTeamID": "",
  "VsConference": "",
  "VsDivision": "",
  "GameSegment": "",
  "Period": "",
  "LastNGames": ""
}, context)
```

#### Input
* input `object`
  * TeamID **required** `string`
  * VsPlayerID **required** `string`
  * SeasonType **required** `string`
  * MeasureType **required** `string`
  * PerMode **required** `string`
  * PlusMinus **required** `string`
  * PaceAdjust **required** `string`
  * Rank **required** `string`
  * Season **required** `string`
  * Outcome **required** `string`
  * Location **required** `string`
  * Month **required** `string`
  * SeasonSegment **required** `string`
  * DateFrom **required** `string`
  * DateTo **required** `string`
  * OpponentTeamID **required** `string`
  * VsConference **required** `string`
  * VsDivision **required** `string`
  * GameSegment **required** `string`
  * Period **required** `string`
  * LastNGames **required** `string`

#### Output
*Output schema unknown*

### teamyearbyyearstats.get



```js
nba.teamyearbyyearstats.get({
  "LeagueID": "",
  "SeasonType": "",
  "PerMode": "",
  "TeamID": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * SeasonType **required** `string`
  * PerMode **required** `string`
  * TeamID **required** `string`

#### Output
*Output schema unknown*

### videoStatus.get



```js
nba.videoStatus.get({
  "LeagueID": "",
  "GameDate": ""
}, context)
```

#### Input
* input `object`
  * LeagueID **required** `string`
  * GameDate **required** `string`

#### Output
*Output schema unknown*



## Definitions

** No definitions **
