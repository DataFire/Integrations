# @datafire/deutschebahn_fahrplan
A RESTful webservice to request a railway journey - FREE plan with restricted access (max. 10 requests per minute). Please ignore the message in the API Console about the access token.

Register to use an less restricted version, which requires an access token.

## Operation: arrivalBoard.id.get
Get arrival board at a given location at a given daten and time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Id of location. Use attribute 'id' from the result of 'location'"
    },
    "date": {
      "type": "string",
      "description": "Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoardResponse"
}
```
## Operation: departureBoard.id.get
Get departure board at a given location at a given daten and time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Id of a location. Use attribute 'id' from the result of 'location'"
    },
    "date": {
      "type": "string",
      "description": "Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoardResponse"
}
```
## Operation: journeyDetails.id.get
Retrieve details of a journey. The id of journey should come from an arrival board or a departure board.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Id of a journey. Use attribute 'detailsId' from the result of  'arrivalBoard' or 'departureBoard'"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JourneyResponse"
}
```
## Operation: location.name.get
Get information about locations matching the given name or name fragment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name or name fragment of a location"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocationResponse"
}
```
