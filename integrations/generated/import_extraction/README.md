# @datafire/import_extraction


## Operation: extractor.extractorId.get
Query by extractor endpoint, adhoc runs only.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "extractorId"
    },
    "url": {
      "type": "string",
      "description": "url"
    }
  },
  "additionalProperties": false,
  "required": [
    "extractorId",
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QueryResponse"
}
```
