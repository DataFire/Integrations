# @datafire/nba
The destination for current and historic NBA statistics.

## Operation: allstarballotpredictor.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PointCap": {
      "type": "string"
    },
    "WestPlayer1": {
      "type": "string"
    },
    "WestPlayer2": {
      "type": "string"
    },
    "WestPlayer3": {
      "type": "string"
    },
    "WestPlayer4": {
      "type": "string"
    },
    "WestPlayer5": {
      "type": "string"
    },
    "EastPlayer1": {
      "type": "string"
    },
    "EastPlayer2": {
      "type": "string"
    },
    "EastPlayer3": {
      "type": "string"
    },
    "EastPlayer4": {
      "type": "string"
    },
    "EastPlayer5": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "WestPlayer1",
    "WestPlayer2",
    "WestPlayer3",
    "WestPlayer4",
    "WestPlayer5",
    "EastPlayer1",
    "EastPlayer2",
    "EastPlayer3",
    "EastPlayer4",
    "EastPlayer5"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscore.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: boxscoreadvanced.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: boxscoreadvancedv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod",
    "StartRange",
    "EndRange",
    "RangeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscorefourfactors.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: boxscorefourfactorsv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod",
    "StartRange",
    "EndRange",
    "RangeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscoremisc.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: boxscoremiscv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod",
    "StartRange",
    "EndRange",
    "RangeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscoreplayertrackv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscorescoring.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: boxscorescoringv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod",
    "StartRange",
    "EndRange",
    "RangeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscoresummaryv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscoretraditionalv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod",
    "StartRange",
    "EndRange",
    "RangeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: boxscoreusage.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: boxscoreusagev2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    },
    "StartRange": {
      "type": "string"
    },
    "EndRange": {
      "type": "string"
    },
    "RangeType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod",
    "StartRange",
    "EndRange",
    "RangeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: commonTeamYears.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: commonallplayers.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "IsOnlyCurrentSeason": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "Season",
    "IsOnlyCurrentSeason"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: commonplayerinfo.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PlayerID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PlayerID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: commonplayoffseries.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "Season"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: commonteamroster.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Season": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Season",
    "TeamID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: draftcombinedrillresults.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonYear": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonYear"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: draftcombinenonstationaryshooting.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonYear": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonYear"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: draftcombineplayeranthro.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonYear": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonYear"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: draftcombinespotshooting.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonYear": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonYear"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: draftcombinestats.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonYear": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonYear"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: drafthistory.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: franchisehistory.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepageleaders.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "StatCategory": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerOrTeam": {
      "type": "string"
    },
    "Game": {
      "type": "string"
    },
    "Player": {
      "type": "string"
    },
    "PlayerScope": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "StatCategory",
    "LeagueID",
    "Season",
    "SeasonType",
    "PlayerOrTeam",
    "PlayerScope",
    "GameScope"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepagev2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "StatType": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerOrTeam": {
      "type": "string"
    },
    "Game": {
      "type": "string"
    },
    "Player": {
      "type": "string"
    },
    "PlayerScope": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "StatType",
    "LeagueID",
    "Season",
    "SeasonType",
    "PlayerOrTeam",
    "PlayerScope",
    "GameScope"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaderstiles.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Stat": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerOrTeam": {
      "type": "string"
    },
    "Game": {
      "type": "string"
    },
    "Player": {
      "type": "string"
    },
    "PlayerScope": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Stat",
    "LeagueID",
    "Season",
    "SeasonType",
    "PlayerOrTeam",
    "PlayerScope",
    "GameScope"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashlineups.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GroupQuantity": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GroupQuantity",
    "SeasonType",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashplayerbiostats.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "LeagueID",
    "Season",
    "SeasonType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashplayerclutch.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ClutchTime": {
      "type": "string"
    },
    "AheadBehind": {
      "type": "string"
    },
    "PointDiff": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    },
    "PlayerExperience": {
      "type": "string"
    },
    "PlayerPosition": {
      "type": "string"
    },
    "StarterBench": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ClutchTime",
    "AheadBehind",
    "PointDiff",
    "GameScope",
    "PlayerExperience",
    "PlayerPosition",
    "StarterBench",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashplayerptshot.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "PerMode",
    "Season",
    "SeasonType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashplayershotlocations.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    },
    "DistanceRange": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    },
    "PlayerExperience": {
      "type": "string"
    },
    "PlayerPosition": {
      "type": "string"
    },
    "StarterBench": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames",
    "DistanceRange",
    "GameScope",
    "PlayerExperience",
    "PlayerPosition",
    "StarterBench"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashplayerstats.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameScope": {
      "type": "string"
    },
    "PlayerExperience": {
      "type": "string"
    },
    "PlayerPosition": {
      "type": "string"
    },
    "StarterBench": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameScope",
    "PlayerExperience",
    "PlayerPosition",
    "StarterBench",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashptdefend.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "DefenseCategory": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "PerMode",
    "Season",
    "SeasonType",
    "DefenseCategory"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashptteamdefend.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "DefenseCategory": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "PerMode",
    "Season",
    "SeasonType",
    "DefenseCategory"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashteamclutch.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ClutchTime": {
      "type": "string"
    },
    "AheadBehind": {
      "type": "string"
    },
    "PointDiff": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    },
    "PlayerExperience": {
      "type": "string"
    },
    "PlayerPosition": {
      "type": "string"
    },
    "StarterBench": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ClutchTime",
    "AheadBehind",
    "PointDiff",
    "GameScope",
    "PlayerExperience",
    "PlayerPosition",
    "StarterBench",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashteamptshot.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "PerMode",
    "Season",
    "SeasonType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashteamshotlocations.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    },
    "DistanceRange": {
      "type": "string"
    },
    "GameScope": {
      "type": "string"
    },
    "PlayerExperience": {
      "type": "string"
    },
    "PlayerPosition": {
      "type": "string"
    },
    "StarterBench": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames",
    "DistanceRange",
    "GameScope",
    "PlayerExperience",
    "PlayerPosition",
    "StarterBench"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leaguedashteamstats.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: leagueleaders.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "StatCategory": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Scope": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "PerMode",
    "Season",
    "SeasonType",
    "Scope"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playbyplay.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playbyplayv2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameID": {
      "type": "string"
    },
    "StartPeriod": {
      "type": "string"
    },
    "EndPeriod": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameID",
    "StartPeriod",
    "EndPeriod"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playercareerstats.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "PlayerID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playercompare.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PlayerIDList": {
      "type": "string"
    },
    "VsPlayerIDList": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PlayerIDList",
    "VsPlayerIDList",
    "SeasonType",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbyclutch.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbygamesplits.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbygeneralsplits.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbylastngames.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbyopponent.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbyshootingsplits.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbyteamperformance.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashboardbyyearoveryear.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "PlayerID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashptpass.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "PlayerID",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashptreb.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "PlayerID",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashptreboundlogs.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: playerdashptshotdefend.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "PlayerID",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerdashptshotlog.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: playerdashptshots.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "PlayerID",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playergamelog.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PlayerID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PlayerID",
    "Season",
    "SeasonType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerprofile.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "GraphStartSeason": {
      "type": "string"
    },
    "GraphEndSeason": {
      "type": "string"
    },
    "GraphStat": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "PlayerID",
    "Season",
    "SeasonType",
    "GraphStartSeason",
    "GraphEndSeason",
    "GraphStat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playerprofilev2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "PlayerID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playersvsplayers.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PlayerTeamID": {
      "type": "string"
    },
    "PlayerID1": {
      "type": "string"
    },
    "PlayerID2": {
      "type": "string"
    },
    "PlayerID3": {
      "type": "string"
    },
    "PlayerID4": {
      "type": "string"
    },
    "PlayerID5": {
      "type": "string"
    },
    "VsTeamID": {
      "type": "string"
    },
    "VsPlayerID1": {
      "type": "string"
    },
    "VsPlayerID2": {
      "type": "string"
    },
    "VsPlayerID3": {
      "type": "string"
    },
    "VsPlayerID4": {
      "type": "string"
    },
    "VsPlayerID5": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PlayerTeamID",
    "PlayerID1",
    "PlayerID2",
    "PlayerID3",
    "PlayerID4",
    "PlayerID5",
    "VsTeamID",
    "VsPlayerID1",
    "VsPlayerID2",
    "VsPlayerID3",
    "VsPlayerID4",
    "VsPlayerID5",
    "SeasonType",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playervsplayer.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PlayerID": {
      "type": "string"
    },
    "VsPlayerID": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PlayerID",
    "VsPlayerID",
    "SeasonType",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playoffpicture.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: scoreboard.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameDate": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "DayOffset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameDate",
    "LeagueID",
    "DayOffset"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: scoreboardV2.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GameDate": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "DayOffset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GameDate",
    "LeagueID",
    "DayOffset"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shotchartdetail.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "PlayerID": {
      "type": "string"
    },
    "GameID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "Position": {
      "type": "string"
    },
    "RookieYear": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    },
    "ContextMeasure": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "SeasonType",
    "TeamID",
    "PlayerID",
    "GameID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "Position",
    "RookieYear",
    "GameSegment",
    "Period",
    "LastNGames",
    "ContextMeasure"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shotchartlineupdetail.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    },
    "GameID": {
      "type": "string"
    },
    "GROUP_ID": {
      "type": "string"
    },
    "ContextMeasure": {
      "type": "string"
    },
    "ContextFilter": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "Season",
    "SeasonType",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames",
    "GameID",
    "GROUP_ID",
    "ContextMeasure",
    "ContextFilter"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbyclutch.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbygamesplits.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbygeneralsplits.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "SeasonType",
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbylastngames.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbyopponent.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbyshootingsplits.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbyteamperformance.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashboardbyyearoveryear.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashlineups.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GroupQuantity": {
      "type": "string"
    },
    "GameID": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GroupQuantity",
    "GameID",
    "SeasonType",
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashptpass.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashptreb.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdashptshots.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PerMode": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "PerMode",
    "Season",
    "SeasonType",
    "TeamID",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamgamelog.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "Season",
    "SeasonType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teaminfocommon.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Season": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "LeagueID": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Season",
    "TeamID",
    "LeagueID",
    "SeasonType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamplayerdashboard.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "SeasonType": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "SeasonType",
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamplayeronoffdetails.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamplayeronoffsummary.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "SeasonType",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamvsplayer.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TeamID": {
      "type": "string"
    },
    "VsPlayerID": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "MeasureType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "PlusMinus": {
      "type": "string"
    },
    "PaceAdjust": {
      "type": "string"
    },
    "Rank": {
      "type": "string"
    },
    "Season": {
      "type": "string"
    },
    "Outcome": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "SeasonSegment": {
      "type": "string"
    },
    "DateFrom": {
      "type": "string"
    },
    "DateTo": {
      "type": "string"
    },
    "OpponentTeamID": {
      "type": "string"
    },
    "VsConference": {
      "type": "string"
    },
    "VsDivision": {
      "type": "string"
    },
    "GameSegment": {
      "type": "string"
    },
    "Period": {
      "type": "string"
    },
    "LastNGames": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TeamID",
    "VsPlayerID",
    "SeasonType",
    "MeasureType",
    "PerMode",
    "PlusMinus",
    "PaceAdjust",
    "Rank",
    "Season",
    "Outcome",
    "Location",
    "Month",
    "SeasonSegment",
    "DateFrom",
    "DateTo",
    "OpponentTeamID",
    "VsConference",
    "VsDivision",
    "GameSegment",
    "Period",
    "LastNGames"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamyearbyyearstats.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "SeasonType": {
      "type": "string"
    },
    "PerMode": {
      "type": "string"
    },
    "TeamID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "SeasonType",
    "PerMode",
    "TeamID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: videoStatus.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "LeagueID": {
      "type": "string"
    },
    "GameDate": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "LeagueID",
    "GameDate"
  ]
}
```
### Output Schema
```json
{}
```
