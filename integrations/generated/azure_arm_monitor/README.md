# @datafire/azure_arm_monitor


## Operation: AutoscaleSettings_ListByResourceGroup
Lists the autoscale settings for a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
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
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AutoscaleSettingResourceCollection"
}
```
## Operation: AutoscaleSettings_Delete
Deletes and autoscale setting

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "autoscaleSettingName": {
      "type": "string",
      "description": "The autoscale setting name."
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
    "resourceGroupName",
    "autoscaleSettingName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: AutoscaleSettings_Get
Gets an autoscale setting

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "autoscaleSettingName": {
      "type": "string",
      "description": "The autoscale setting name."
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
    "resourceGroupName",
    "autoscaleSettingName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AutoscaleSettingResource"
}
```
## Operation: AutoscaleSettings_CreateOrUpdate
Creates or updates an autoscale setting.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "autoscaleSettingName": {
      "type": "string",
      "description": "The autoscale setting name."
    },
    "parameters": {
      "$ref": "#/definitions/AutoscaleSettingResource"
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
    "resourceGroupName",
    "autoscaleSettingName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AutoscaleSettingResource"
}
```
