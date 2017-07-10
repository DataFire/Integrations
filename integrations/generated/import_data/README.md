# @datafire/import_data


## Operation: extractor.extractorId.csv.latest.get
Get the latest crawl run results as a csv

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "the id of the extractor to start get the latest crawl run data"
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
## Operation: extractor.extractorId.json.latest.get
Get the latest crawl run results as json

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "The id of the extractor to start get the latest crawl run data"
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
