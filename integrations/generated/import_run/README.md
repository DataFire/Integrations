# @datafire/import_run


## Operation: extractor.extractorId.cancel.post
Cancel an existing crawl.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "extractorId"
    }
  },
  "additionalProperties": false,
  "required": [
    "extractorId"
  ]
}
```
### Output Schema
```json
{
  "additionalProperties": {
    "type": "string"
  },
  "type": "object"
}
```
## Operation: extractor.extractorId.start.post
Launch a crawl from an extractor that a user owns.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "the id of the extractor to start crawling with"
    },
    "loginSessionId": {
      "type": "string",
      "description": "The loginSessionId required for authenticated extractors. Only required when running authenticated extractors."
    }
  },
  "additionalProperties": false,
  "required": [
    "extractorId"
  ]
}
```
### Output Schema
```json
{
  "additionalProperties": {
    "type": "string"
  },
  "type": "object"
}
```
