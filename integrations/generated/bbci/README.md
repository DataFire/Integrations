# @datafire/bbci
The definitive iPlayer API.

## Operation: atoz.letter.programmes.get
Get the Programmes whose title begins with the given initial character.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "letter": {
      "type": "string",
      "description": "Letter to search by, a to z or the string '0-9'",
      "pattern": "[a-z](0-9)"
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    },
    "initial_child_count": {
      "type": "integer",
      "description": "The depth to return child entities.",
      "maximum": 5,
      "minimum": 1
    },
    "sort": {
      "type": "string",
      "description": "The sort order of the results.",
      "enum": [
        "title"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Whether to sort ascending or descending",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "letter",
    "rights",
    "page",
    "per_page",
    "initial_child_count",
    "sort",
    "sort_direction",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Categories_
Get the list of all the categories in TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "lang"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: categories.category.get
Get sub-categories

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "description": "The category identifier to return results from."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "lang"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: categories.category.episodes.get
Get the list of all the episodes for a given category in TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "description": "The category identifier to return results from."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    },
    "sort": {
      "type": "string",
      "description": "The sort order of the results.",
      "enum": [
        "recent",
        "popular"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "lang",
    "rights",
    "availability",
    "page",
    "per_page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: categories.category.highlights.get
Get the editorial highlights of a given category in TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "description": "The category identifier to return results from."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "lang",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: categories.category.programmes.get
Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "description": "The category identifier to return results from."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "lang",
    "rights",
    "availability",
    "page",
    "per_page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Channels_
Get the list of all the channels TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "region": {
      "type": "string",
      "description": "The region to get the channels for."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "lang"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: channels.channel.broadcasts.get
Get broadcasts by channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "The channel identifier to limit results to."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    },
    "from": {
      "type": "string",
      "description": "Time to return results from, e.g. -3h"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "lang",
    "rights",
    "availability",
    "per_page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: channels.channel.highlights.get
Get the editorial highlights of a given channel in TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "The channel identifier to limit results to."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "live": {
      "type": "boolean",
      "description": "Whether to include live programmes"
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "lang",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: channels.channel.programmes.get
Get programmes by channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "The channel identifier to limit results to."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "lang",
    "rights",
    "availability",
    "page",
    "per_page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: channels.channel.schedule.date.get
Get schedule by channel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "The channel identifier to limit results to."
    },
    "date": {
      "type": "string",
      "description": "The date to return the schedule for, yyyy-mm-dd format"
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "date",
    "lang",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Clips_
Get Clips

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: episodes.pid.get
Get the episode for a given episode identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Onward_Journey
Get Onward Journey (next programme)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: getPostRolls
Get Follow-ups (post-rolls)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: episodes.pid.prerolls.get
Get Trailers (pre-rolls)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: episodes.pid.recommendations.get
Get programme recommendations

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability",
    "page",
    "per_page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: groups.popular.episodes.get
Get programmes popular

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    },
    "initial_child_count": {
      "type": "integer",
      "description": "The depth to return child entities.",
      "maximum": 5,
      "minimum": 1
    },
    "sort": {
      "type": "string",
      "description": "The sort order of the results."
    },
    "sort_direction": {
      "type": "string",
      "description": "Whether to sort ascending or descending",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "rights",
    "page",
    "per_page",
    "initial_child_count",
    "sort",
    "sort_direction",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: groups.pid.episodes.get
Get episodes by group, brand or series

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page index."
    },
    "per_page": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results to return."
    },
    "initial_child_count": {
      "type": "integer",
      "description": "The depth to return child entities.",
      "maximum": 5,
      "minimum": 1
    },
    "sort": {
      "type": "string",
      "description": "The sort order of the results."
    },
    "sort_direction": {
      "type": "string",
      "description": "Whether to sort ascending or descending",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "page",
    "per_page",
    "initial_child_count",
    "sort",
    "sort_direction",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: home.highlights.get
Get programme highlights

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Request additional data in the output",
      "enum": [
        "live",
        "promotions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: programmes.pid.get
Get the programme for a given programme identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "initial_child_count": {
      "type": "integer",
      "description": "The depth to return child entities.",
      "maximum": 5,
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability",
    "initial_child_count"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: programmes.pid.episodes.get
Get the child episodes belonging to a given programme identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string",
      "description": "The programme identifier.",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    },
    "initial_child_count": {
      "type": "integer",
      "description": "The depth to return child entities.",
      "maximum": 5,
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "pid",
    "rights",
    "availability",
    "initial_child_count"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Regions_
Get the list of all the regions TV & iPlayer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "lang"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Schema_
Get schema

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Search_
Search

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "The term to search for."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "q",
    "lang",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: search_suggest.get
Search-suggest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "The term to search for."
    },
    "lang": {
      "type": "string",
      "description": "The language for any applicable localised strings.",
      "enum": [
        "en",
        "cy",
        "ga",
        "gd",
        "pi"
      ]
    },
    "rights": {
      "type": "string",
      "description": "The rights group to limit results to.",
      "enum": [
        "mobile",
        "tv",
        "web"
      ]
    },
    "availability": {
      "type": "string",
      "description": "Whether to return all, or available programmes",
      "enum": [
        "all",
        "available"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "q",
    "lang",
    "rights",
    "availability"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: Get_Status_
Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: user.purchases.get
Get user store purchases

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identity_cookie": {
      "type": "number",
      "format": "double",
      "description": "The BBC-id cookie value"
    }
  },
  "additionalProperties": false,
  "required": [
    "identity_cookie"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: user.recommendations.get
Get user store recommendations

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identity_cookie": {
      "type": "number",
      "format": "double",
      "description": "The BBC-id cookie value"
    }
  },
  "additionalProperties": false,
  "required": [
    "identity_cookie"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
## Operation: user.watching.get
Get user watching

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identity_cookie": {
      "type": "number",
      "format": "double",
      "description": "The BBC-id cookie value"
    }
  },
  "additionalProperties": false,
  "required": [
    "identity_cookie"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ibl"
}
```
