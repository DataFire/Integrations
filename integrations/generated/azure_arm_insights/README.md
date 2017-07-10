# @datafire/azure_arm_insights


## Operation: LogProfiles_List
List the log profiles.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription Id."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogProfileCollection"
}
```
## Operation: LogProfiles_Delete
Deletes the log profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "logProfileName": {
      "type": "string",
      "description": "The name of the log profile."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription Id."
    }
  },
  "additionalProperties": false,
  "required": [
    "logProfileName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: LogProfiles_Get
Gets the log profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "logProfileName": {
      "type": "string",
      "description": "The name of the log profile."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription Id."
    }
  },
  "additionalProperties": false,
  "required": [
    "logProfileName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogProfileResource"
}
```
## Operation: LogProfiles_CreateOrUpdate
Create or update a log profile in Azure Monitoring REST API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "logProfileName": {
      "type": "string",
      "description": "The name of the log profile."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/LogProfileResource"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription Id."
    }
  },
  "additionalProperties": false,
  "required": [
    "logProfileName",
    "api-version",
    "parameters",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogProfileResource"
}
```
