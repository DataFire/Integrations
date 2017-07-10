# @datafire/peel_ci
The machine learning service APIs utilize hashtags from Twitter to find related, trending shows, related Twitter hashtags in real time and to generate direct tune-in URLs.

## Operation: getRelatedHashtags
Returns any official hashtag and any hashtags which were learned within the most recent time window for the show.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "showID": {
      "type": "string",
      "description": "Unique ID for a show"
    },
    "timeWindow": {
      "type": "string",
      "description": "Time window in seconds (default is 2 hours)"
    }
  },
  "additionalProperties": false,
  "required": [
    "showID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTrendingShows
Gets trending shows.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "string",
      "description": "Number of trending shows (default is 20)"
    },
    "timeWindow": {
      "type": "string",
      "description": "Time window in seconds (default is 2 hours)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getTuneinLinks
Either use <b>tweet</b>, <b>hashtags</b>, or <b>showID</b> as the parameter. The tunein URLs that match best are returned in order of best match.<br/><br/>A <b>tweet</b> in this context is shorthand for text from a social networking conversation, e.g., it could be from Facebook, Twitter, LinkedIn, etc., and be greater than 140 characters.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tweet": {
      "type": "string",
      "description": "Text from a social networking conversation"
    },
    "hashtags": {
      "type": "string",
      "description": "Comma separated list of hashtags and @mentions"
    },
    "showID": {
      "type": "string",
      "description": "Unique ID for a show"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getHealth
Get health of Tune-in service (which includes its uptime).

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getStatuses
For Twitter, statuses are synonymous with tweets.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "showID": {
      "type": "string",
      "description": "Unique ID for a show"
    }
  },
  "additionalProperties": false,
  "required": [
    "showID"
  ]
}
```
### Output Schema
```json
{}
```
