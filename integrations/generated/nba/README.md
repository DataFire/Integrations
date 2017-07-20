# @datafire/nba

Client library for NBA Stats

## Installation and Usage
```bash
npm install --save datafire @datafire/nba
```

```js
let datafire = require('datafire');
let nba = require('@datafire/nba').actions;
let context = new datafire.Context();

nba.playerdashptshotlog.get({}, context).then(data => {
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

#### Parameters
* PointCap (string)
* WestPlayer1 (string) **required**
* WestPlayer2 (string) **required**
* WestPlayer3 (string) **required**
* WestPlayer4 (string) **required**
* WestPlayer5 (string) **required**
* EastPlayer1 (string) **required**
* EastPlayer2 (string) **required**
* EastPlayer3 (string) **required**
* EastPlayer4 (string) **required**
* EastPlayer5 (string) **required**

### boxscore.get



```js
nba.boxscore.get({}, context)
```

#### Parameters
* GameID (string)
* StartPeriod (string)
* EndPeriod (string)
* StartRange (string)
* EndRange (string)
* RangeType (string)

### boxscoreadvanced.get



```js
nba.boxscoreadvanced.get({}, context)
```

#### Parameters
* GameID (string)
* StartPeriod (string)
* EndPeriod (string)
* StartRange (string)
* EndRange (string)
* RangeType (string)

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

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**
* StartRange (string) **required**
* EndRange (string) **required**
* RangeType (string) **required**

### boxscorefourfactors.get



```js
nba.boxscorefourfactors.get({}, context)
```

#### Parameters
* GameID (string)
* StartPeriod (string)
* EndPeriod (string)
* StartRange (string)
* EndRange (string)
* RangeType (string)

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

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**
* StartRange (string) **required**
* EndRange (string) **required**
* RangeType (string) **required**

### boxscoremisc.get



```js
nba.boxscoremisc.get({}, context)
```

#### Parameters
* GameID (string)
* StartPeriod (string)
* EndPeriod (string)
* StartRange (string)
* EndRange (string)
* RangeType (string)

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

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**
* StartRange (string) **required**
* EndRange (string) **required**
* RangeType (string) **required**

### boxscoreplayertrackv2.get



```js
nba.boxscoreplayertrackv2.get({
  "GameID": ""
}, context)
```

#### Parameters
* GameID (string) **required**

### boxscorescoring.get



```js
nba.boxscorescoring.get({}, context)
```

#### Parameters
* GameID (string)
* StartPeriod (string)
* EndPeriod (string)
* StartRange (string)
* EndRange (string)
* RangeType (string)

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

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**
* StartRange (string) **required**
* EndRange (string) **required**
* RangeType (string) **required**

### boxscoresummaryv2.get



```js
nba.boxscoresummaryv2.get({
  "GameID": ""
}, context)
```

#### Parameters
* GameID (string) **required**

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

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**
* StartRange (string) **required**
* EndRange (string) **required**
* RangeType (string) **required**

### boxscoreusage.get



```js
nba.boxscoreusage.get({}, context)
```

#### Parameters
* GameID (string)
* StartPeriod (string)
* EndPeriod (string)
* StartRange (string)
* EndRange (string)
* RangeType (string)

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

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**
* StartRange (string) **required**
* EndRange (string) **required**
* RangeType (string) **required**

### commonTeamYears.get



```js
nba.commonTeamYears.get({
  "LeagueID": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**

### commonallplayers.get



```js
nba.commonallplayers.get({
  "LeagueID": "",
  "Season": "",
  "IsOnlyCurrentSeason": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* Season (string) **required**
* IsOnlyCurrentSeason (string) **required**

### commonplayerinfo.get



```js
nba.commonplayerinfo.get({
  "PlayerID": ""
}, context)
```

#### Parameters
* PlayerID (string) **required**

### commonplayoffseries.get



```js
nba.commonplayoffseries.get({
  "LeagueID": "",
  "Season": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* Season (string) **required**

### commonteamroster.get



```js
nba.commonteamroster.get({
  "Season": "",
  "TeamID": ""
}, context)
```

#### Parameters
* Season (string) **required**
* TeamID (string) **required**

### draftcombinedrillresults.get



```js
nba.draftcombinedrillresults.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonYear (string) **required**

### draftcombinenonstationaryshooting.get



```js
nba.draftcombinenonstationaryshooting.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonYear (string) **required**

### draftcombineplayeranthro.get



```js
nba.draftcombineplayeranthro.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonYear (string) **required**

### draftcombinespotshooting.get



```js
nba.draftcombinespotshooting.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonYear (string) **required**

### draftcombinestats.get



```js
nba.draftcombinestats.get({
  "LeagueID": "",
  "SeasonYear": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonYear (string) **required**

### drafthistory.get



```js
nba.drafthistory.get({
  "LeagueID": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**

### franchisehistory.get



```js
nba.franchisehistory.get({
  "LeagueID": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**

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

#### Parameters
* StatCategory (string) **required**
* LeagueID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerOrTeam (string) **required**
* Game (string)
* Player (string)
* PlayerScope (string) **required**
* GameScope (string) **required**

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

#### Parameters
* StatType (string) **required**
* LeagueID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerOrTeam (string) **required**
* Game (string)
* Player (string)
* PlayerScope (string) **required**
* GameScope (string) **required**

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

#### Parameters
* Stat (string) **required**
* LeagueID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerOrTeam (string) **required**
* Game (string)
* Player (string)
* PlayerScope (string) **required**
* GameScope (string) **required**

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

#### Parameters
* GroupQuantity (string) **required**
* SeasonType (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### leaguedashplayerbiostats.get



```js
nba.leaguedashplayerbiostats.get({
  "PerMode": "",
  "LeagueID": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Parameters
* PerMode (string) **required**
* LeagueID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**

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

#### Parameters
* ClutchTime (string) **required**
* AheadBehind (string) **required**
* PointDiff (string) **required**
* GameScope (string) **required**
* PlayerExperience (string) **required**
* PlayerPosition (string) **required**
* StarterBench (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### leaguedashplayerptshot.get



```js
nba.leaguedashplayerptshot.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**
* DistanceRange (string) **required**
* GameScope (string) **required**
* PlayerExperience (string) **required**
* PlayerPosition (string) **required**
* StarterBench (string) **required**

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

#### Parameters
* GameScope (string) **required**
* PlayerExperience (string) **required**
* PlayerPosition (string) **required**
* StarterBench (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* LeagueID (string) **required**
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* DefenseCategory (string) **required**

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

#### Parameters
* LeagueID (string) **required**
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* DefenseCategory (string) **required**

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

#### Parameters
* ClutchTime (string) **required**
* AheadBehind (string) **required**
* PointDiff (string) **required**
* GameScope (string) **required**
* PlayerExperience (string) **required**
* PlayerPosition (string) **required**
* StarterBench (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### leaguedashteamptshot.get



```js
nba.leaguedashteamptshot.get({
  "LeagueID": "",
  "PerMode": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**
* DistanceRange (string) **required**
* GameScope (string) **required**
* PlayerExperience (string) **required**
* PlayerPosition (string) **required**
* StarterBench (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* LeagueID (string) **required**
* PerMode (string) **required**
* StatCategory (string)
* Season (string) **required**
* SeasonType (string) **required**
* Scope (string) **required**

### playbyplay.get



```js
nba.playbyplay.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": ""
}, context)
```

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**

### playbyplayv2.get



```js
nba.playbyplayv2.get({
  "GameID": "",
  "StartPeriod": "",
  "EndPeriod": ""
}, context)
```

#### Parameters
* GameID (string) **required**
* StartPeriod (string) **required**
* EndPeriod (string) **required**

### playercareerstats.get



```js
nba.playercareerstats.get({
  "PerMode": "",
  "PlayerID": ""
}, context)
```

#### Parameters
* PerMode (string) **required**
* PlayerID (string) **required**

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

#### Parameters
* PlayerIDList (string) **required**
* VsPlayerIDList (string) **required**
* SeasonType (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### playerdashptreboundlogs.get



```js
nba.playerdashptreboundlogs.get({}, context)
```

#### Parameters
* Season (string)
* SeasonType (string)
* PlayerID (string)
* TeamID (string)
* Outcome (string)
* Location (string)
* Month (string)
* SeasonSegment (string)
* DateFrom (string)
* DateTo (string)
* OpponentTeamID (string)
* VsConference (string)
* VsDivision (string)
* GameSegment (string)
* Period (string)
* LastNGames (string)

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### playerdashptshotlog.get



```js
nba.playerdashptshotlog.get({}, context)
```

#### Parameters
* LeagueID (string)
* Season (string)
* SeasonType (string)
* PlayerID (string)
* TeamID (string)

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* PlayerID (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### playergamelog.get



```js
nba.playergamelog.get({
  "PlayerID": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Parameters
* PlayerID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**

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

#### Parameters
* LeagueID (string) **required**
* PlayerID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* GraphStartSeason (string) **required**
* GraphEndSeason (string) **required**
* GraphStat (string) **required**

### playerprofilev2.get



```js
nba.playerprofilev2.get({
  "PerMode": "",
  "PlayerID": ""
}, context)
```

#### Parameters
* PerMode (string) **required**
* PlayerID (string) **required**

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

#### Parameters
* PlayerTeamID (string) **required**
* PlayerID1 (string) **required**
* PlayerID2 (string) **required**
* PlayerID3 (string) **required**
* PlayerID4 (string) **required**
* PlayerID5 (string) **required**
* VsTeamID (string) **required**
* VsPlayerID1 (string) **required**
* VsPlayerID2 (string) **required**
* VsPlayerID3 (string) **required**
* VsPlayerID4 (string) **required**
* VsPlayerID5 (string) **required**
* SeasonType (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* PlayerID (string) **required**
* VsPlayerID (string) **required**
* SeasonType (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### playoffpicture.get



```js
nba.playoffpicture.get({
  "LeagueID": "",
  "SeasonID": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonID (string) **required**

### scoreboard.get



```js
nba.scoreboard.get({
  "GameDate": "",
  "LeagueID": "",
  "DayOffset": ""
}, context)
```

#### Parameters
* GameDate (string) **required**
* LeagueID (string) **required**
* DayOffset (string) **required**

### scoreboardV2.get



```js
nba.scoreboardV2.get({
  "GameDate": "",
  "LeagueID": "",
  "DayOffset": ""
}, context)
```

#### Parameters
* GameDate (string) **required**
* LeagueID (string) **required**
* DayOffset (string) **required**

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

#### Parameters
* SeasonType (string) **required**
* TeamID (string) **required**
* PlayerID (string) **required**
* GameID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* Position (string) **required**
* RookieYear (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**
* ContextMeasure (string) **required**

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

#### Parameters
* LeagueID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**
* GameID (string) **required**
* GROUP_ID (string) **required**
* ContextMeasure (string) **required**
* ContextFilter (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* SeasonType (string) **required**
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* GroupQuantity (string) **required**
* GameID (string) **required**
* SeasonType (string) **required**
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* PerMode (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* TeamID (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### teamgamelog.get



```js
nba.teamgamelog.get({
  "TeamID": "",
  "Season": "",
  "SeasonType": ""
}, context)
```

#### Parameters
* TeamID (string) **required**
* Season (string) **required**
* SeasonType (string) **required**

### teaminfocommon.get



```js
nba.teaminfocommon.get({
  "Season": "",
  "TeamID": "",
  "LeagueID": "",
  "SeasonType": ""
}, context)
```

#### Parameters
* Season (string) **required**
* TeamID (string) **required**
* LeagueID (string) **required**
* SeasonType (string) **required**

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

#### Parameters
* SeasonType (string) **required**
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* SeasonType (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

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

#### Parameters
* TeamID (string) **required**
* VsPlayerID (string) **required**
* SeasonType (string) **required**
* MeasureType (string) **required**
* PerMode (string) **required**
* PlusMinus (string) **required**
* PaceAdjust (string) **required**
* Rank (string) **required**
* Season (string) **required**
* Outcome (string) **required**
* Location (string) **required**
* Month (string) **required**
* SeasonSegment (string) **required**
* DateFrom (string) **required**
* DateTo (string) **required**
* OpponentTeamID (string) **required**
* VsConference (string) **required**
* VsDivision (string) **required**
* GameSegment (string) **required**
* Period (string) **required**
* LastNGames (string) **required**

### teamyearbyyearstats.get



```js
nba.teamyearbyyearstats.get({
  "LeagueID": "",
  "SeasonType": "",
  "PerMode": "",
  "TeamID": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* SeasonType (string) **required**
* PerMode (string) **required**
* TeamID (string) **required**

### videoStatus.get



```js
nba.videoStatus.get({
  "LeagueID": "",
  "GameDate": ""
}, context)
```

#### Parameters
* LeagueID (string) **required**
* GameDate (string) **required**

