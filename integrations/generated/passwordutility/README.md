# @datafire/passwordutility
Validate and generate passwords using open source tools

## Operation: Password_Generate


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "length": {
      "type": "integer",
      "format": "int32"
    },
    "upperCase": {
      "type": "boolean"
    },
    "digits": {
      "type": "boolean"
    },
    "specialCharacters": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "length"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Password_Validate


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "password": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
