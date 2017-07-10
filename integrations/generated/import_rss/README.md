# @datafire/import_rss


## Operation: extractor.extractorId.runs.get
Get a feed of the runs performed on an extractor

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "The id of the extractor to start get the crawl run data"
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
