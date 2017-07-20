# @datafire/rhapsody
Access Rhapsody technologies and content, including metadeta, search and music player.

## Operation: artists.top.get
Returns a list of top artists.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: artists.art.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: artists.art.id.full.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: artists.art.id.albums.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: artists.art.id.recommendations.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: artists.art.id.similar.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: artists.art.id.tracks.top.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.top.get
Returns a list of top albums.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.new.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.alb.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.alb.id.tracks.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.alb.id.similar.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.alb.id.recommendations.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: albums.alb.id.reviews.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: search.typeahead.get
Returns a list of tracks, artists and albums based on the search term for authenticated users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "q": {
      "type": "string",
      "description": "Typeahead search term."
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey",
    "q"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.top.get
Returns a list of top tracks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.tra.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.tra.id.recommendations.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    },
    "limit": {
      "type": "string",
      "description": ""
    },
    "offset": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: genres.get
Returns a list of available genres.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: genres.g.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apikey": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "apikey"
  ]
}
```
### Output Schema
```json
{}
```
