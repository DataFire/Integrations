# @datafire/magick_nu
Authentication is required to access all methods of the API. Enter username and password.
                Credentials are automatically set as you type.

## Operation: getStrategiesStrategyIdStrategyId
Get Strategy by ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "strategyId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "strategyId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getStrategiesTemplates
Get all Template Strategies

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: postTradingAccounts
Add a Trading Account

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/TradingAccount"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postUsers
Create a new Tradeworks User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UserDTO"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUsersEmailEmail
Check if email is available

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUsersUsernameUsername
Check if username is available

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
