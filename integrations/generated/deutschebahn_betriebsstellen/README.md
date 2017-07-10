# @datafire/deutschebahn_betriebsstellen
This REST-API enables you to query station and stop infos

## Operation: betriebsstellen.get
Get all station and stop infos

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "A station name or part of it"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StationList"
}
```
## Operation: betriebsstellen.abbrev.get
Get information about a specific station or stop by abbrevation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "abbrev": {
      "type": "string",
      "description": "Station or stop abbrevation"
    }
  },
  "additionalProperties": false,
  "required": [
    "abbrev"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Station"
}
```
