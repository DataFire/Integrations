# @datafire/wavecell
This API allows Wavecell customers to originate request to send SMS messages anywhere in the World. The messages can be send individually or as a bulk request.

## Operation: SmsV1StatusGet


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: SendManyMessages


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subAccountId": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/BulkSmsRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BulkSmsResponse"
}
```
## Operation: SendManyMessagesInCompactForm


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subAccountId": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/BulkSmsRequestCompact"
    }
  },
  "additionalProperties": false,
  "required": [
    "subAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BulkSmsResponse"
}
```
## Operation: SendSingleMessage


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subAccountId": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/SmsRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SmsResponse"
}
```
