# @datafire/citycontext
City Context provides a straightforward API to access UK Open Data: crime statistics, schools, demographics and more.

## Operation: byPoint
Query by coordinates (SRID 4326 - decimal degrees)

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
    },
    "school_search_radius": {
      "type": "integer",
      "description": "Search radius for schools, in metres, between 100 and 4000"
    },
    "park_search_radius": {
      "type": "integer",
      "description": "Search radius for parks, in metres, between 100 and 2000"
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
  "$ref": "#/definitions/PointInfo"
}
```
## Operation: byPostcode
Query by postcode

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "postcode": {
      "type": "string",
      "description": "Postcode"
    },
    "school_search_radius": {
      "type": "integer",
      "description": "Search radius for schools, in metres, between 100 and 4000"
    },
    "park_search_radius": {
      "type": "integer",
      "description": "Search radius for parks, in metres, between 100 and 2000"
    }
  },
  "additionalProperties": false,
  "required": [
    "postcode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PointInfo"
}
```
## Operation: usage
Get usage in current month

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Usage"
}
```
