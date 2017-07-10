# @datafire/neowsapp
A web service for near earth objects. All the data is from the  <a href="http://neo.jpl.nasa.gov/" target="_blank">NASA JPL Asteroid team</a>. 

 

NeoWs is proud to power AsteroidTracker on <a href="https://itunes.apple.com/us/app/asteroid-tracker/id689684901?mt=8" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.vitruviussoftware.bunifish.asteroidtracker&feature" target="_blank">Android</a> as well as related apps. 

 Get <a href="http://apps.getpebble.com/en_US/application/55bc4913d1690c372900000f" target="_blank">Asteroid Today on Pebble</a> 

Follow us on <a href="https://twitter.com/AsteroidTracker" target="_blank">Twitter</a>

## Operation: retrieveNearEarthObjectFeed
Get a list of Near Earth Objects within a date range, The max range in one query is 7 days

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_date": {
      "type": "string",
      "description": "Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)"
    },
    "end_date": {
      "type": "string",
      "description": "End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date"
    },
    "detailed": {
      "type": "boolean",
      "description": "detailed"
    }
  },
  "additionalProperties": false,
  "required": [
    "end_date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NearEarthObjectList"
}
```
## Operation: retrieveNEOFeedToday
Get a list of Near Earth Objects for today

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "detailed": {
      "type": "boolean",
      "description": "detailed"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NearEarthObjectList"
}
```
## Operation: browseNearEarthObjects
Retieve a paginated list of Near Earth Objects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page"
    },
    "size": {
      "type": "integer",
      "format": "int32",
      "description": "size"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NearEarthObject"
}
```
## Operation: retrieveNearEarthObjectById
Retieve a Near Earth Objects with a given id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "asteroid_id": {
      "type": "string",
      "description": "ID of Near Earth Object - (ex: 3729835)"
    }
  },
  "additionalProperties": false,
  "required": [
    "asteroid_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NearEarthObject"
}
```
## Operation: retrieveCurrentNeoStatistics
retrieveCurrentNeoStatistics

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Statistics"
}
```
