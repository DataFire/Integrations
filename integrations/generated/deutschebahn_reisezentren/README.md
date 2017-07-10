# @datafire/deutschebahn_reisezentren
This REST-API enables you to query information about travel centers in Germany.

## Operation: reisezentren.get
Get all station infos

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
  "$ref": "#/definitions/TravelCenterList"
}
```
## Operation: reisezentren.loc.lat.lon.get
Get information about a station near a location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lat": {
      "type": "number",
      "format": "float",
      "description": "Latitude"
    },
    "lon": {
      "type": "number",
      "format": "float",
      "description": "Longitude"
    }
  },
  "additionalProperties": false,
  "required": [
    "lat",
    "lon"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TravelCenter"
}
```
## Operation: reisezentren.id.get
Get information about a specific station

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Station id"
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
  "$ref": "#/definitions/TravelCenter"
}
```
