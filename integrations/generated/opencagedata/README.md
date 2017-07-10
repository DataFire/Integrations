# @datafire/opencagedata
Worldwide forward and reverse geocoding

## Operation: vversion.format.get
geocode a query

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "integer",
      "description": "API version."
    },
    "format": {
      "type": "string",
      "description": "format of the response. One of 'json', 'xml' or 'map'."
    },
    "q": {
      "type": "string",
      "description": "string or lat,lng to be geocoded."
    },
    "key": {
      "type": "string",
      "description": "an application key."
    },
    "add_request": {
      "type": "boolean",
      "description": "if true the request is included in the response."
    },
    "bounds": {
      "type": "string",
      "description": "four coordinate points forming the south-west and north-east corners of a bounding box (min long, min lat, max long, max lat)."
    },
    "countrycode": {
      "type": "string",
      "description": "two letter code ISO 3166-1 Alpha 2 code to limit results to that country."
    },
    "jsonp": {
      "type": "string",
      "description": "wraps the returned JSON with a function name."
    },
    "language": {
      "type": "string",
      "description": "an IETF format language code (ex: 'es' or 'pt-BR')."
    },
    "limit": {
      "type": "integer",
      "description": "maximum number of results to return. Default is 10. Maximum is 100."
    },
    "min_confidence": {
      "type": "integer",
      "description": "integer from 1-10. Only results with at least this confidence are returned."
    },
    "no_annotations": {
      "type": "boolean",
      "description": "when true annotations are not added to results."
    },
    "no_dedupe": {
      "type": "boolean",
      "description": "when true results are not deduplicated."
    },
    "no_record": {
      "type": "boolean",
      "description": "when true query content is not logged."
    },
    "pretty": {
      "type": "boolean",
      "description": "when true results are pretty printed. Useful for debugging."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "format",
    "q",
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
