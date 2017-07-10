# @datafire/furkot
Furkot provides Rest API to access user trip data.
Using Furkot API an application can list user trips and display stops for a specific trip.
Furkot API uses OAuth2 protocol to authorize applications to access data on behalf of users.


## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: trip.get
list user's trips

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Trip"
  },
  "type": "array"
}
```
## Operation: trip.trip_id.stop.get
list stops for a trip identified by {trip_id}

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "trip_id": {
      "type": "string",
      "description": "id of the trip"
    }
  },
  "additionalProperties": false,
  "required": [
    "trip_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Step"
  },
  "type": "array"
}
```
