# @datafire/import_schedule


## Operation: extractor.get
Get the list of schedules for all your extractors

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Schedule"
}
```
## Operation: extractor.post
Schedule and extractor to run at a specific time

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Schedule Request Body": {
      "$ref": "#/definitions/ScheduleRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Schedule Request Body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Schedule"
}
```
## Operation: extractor.extractorId.delete
Delete an existing schedule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "the id of the extractor with a schedule"
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
{}
```
## Operation: extractor.extractorId.get
Get the schedule of a particular extractor

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extractorId": {
      "type": "string",
      "description": "the id of the extractor with a schedule"
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
  "$ref": "#/definitions/Schedule"
}
```
