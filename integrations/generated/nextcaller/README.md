# @datafire/nextcaller
Advanced Caller ID. Obtain name, address, and email of your inbound callers.

## Operation: version.records.get
Returns Nextcaller member detailed info.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "Specifies a api version.",
      "enum": [
        "v2",
        "v3"
      ]
    },
    "phone": {
      "type": "integer",
      "description": "Specifies the caller's phone number.",
      "maximum": 9223372036854776000,
      "minimum": -9223372036854776000
    },
    "format": {
      "type": "string",
      "description": "Specifies a format of response: JSON or XML.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "phone",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.users.nextcaller_id._format_format.post
Allows you to update caller's info on Nextcaller.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string"
    },
    "version": {
      "type": "string",
      "description": "Specifies a api version.",
      "enum": [
        "v2",
        "v3"
      ]
    },
    "nextcaller_id": {
      "type": "string",
      "description": "The ID of the user whose profile you wish to edit"
    },
    "format": {
      "type": "string",
      "description": "Specifies a format of response: JSON or XML.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "version",
    "nextcaller_id",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
