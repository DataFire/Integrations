# @datafire/deutschebahn_fasta
A RESTful webservice to retrieve data about the operational state of public elevators and escalators in german railway stations operated by DB Station&Service AG. 
Note: Production and sandbox environments use the same production backend server. 

## Operation: findDisruptions
Returns information about disruptions of facilities filtered by parameters.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "type": {
      "type": "array",
      "description": "type of the facility to filter by",
      "uniqueItems": true
    },
    "equipmentnumber": {
      "type": "integer",
      "format": "int64",
      "description": "equipmentnumber of the facility to fetch",
      "minimum": 1
    },
    "stationnumber": {
      "type": "integer",
      "format": "int64",
      "description": "stationnumber of the station to fetch",
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/disruption"
  },
  "type": "array"
}
```
## Operation: findDisruptionByDisruptionNumber
Returns information about a specific disruption of a facility

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "disruptionnumber": {
      "type": "integer",
      "format": "int64",
      "description": "disruptionnumber of the disruption to fetch",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "disruptionnumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/disruption"
}
```
## Operation: findFacilities
Access to public facilities (escalators and elevators) in railway stations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "type": {
      "type": "array",
      "description": "type of the facility to filter by",
      "uniqueItems": true
    },
    "state": {
      "type": "array",
      "description": "the state of the facility to filter by",
      "uniqueItems": true
    },
    "equipmentnumbers": {
      "type": "array",
      "description": "equipmentnumbers of the facility to filter by",
      "uniqueItems": true
    },
    "stationnumber": {
      "type": "integer",
      "format": "int64",
      "description": "station number to filter by",
      "minimum": 1
    },
    "area": {
      "type": "array",
      "description": "Geo coordinate rectangle in WGS84-format to filter by. Parameters must be 4 numbers exactly as follows: longitudeWest, latitudeSouth, longitudeEast, latitudeNorth.",
      "maxItems": 4,
      "minItems": 4,
      "uniqueItems": false
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/facility"
  },
  "type": "array"
}
```
## Operation: getFacilityByEquipmentNumber
Returns the facility identified by its equipmentnumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "equipmentnumber": {
      "type": "integer",
      "format": "int64",
      "description": "equipmentnumber of the facility to fetch",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "equipmentnumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/facility"
}
```
## Operation: findStationByStationNumber
Returns information about the station and its facilities identified by a stationnumber.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stationnumber": {
      "type": "integer",
      "format": "int64",
      "description": "stationnumber of the station to fetch",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "stationnumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/station"
}
```
