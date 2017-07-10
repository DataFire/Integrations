# @datafire/azure_arm_cognitiveservices
Cognitive Services Management Client

## Operation: CognitiveServicesAccounts_List
Returns all the resources of a particular type belonging to a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
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
  "$ref": "#/definitions/CognitiveServicesAccountListResult"
}
```
## Operation: CognitiveServicesAccounts_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccountListResult"
}
```
## Operation: CognitiveServicesAccounts_Delete
Deletes a Cognitive Services account from the resource group. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CognitiveServicesAccounts_GetProperties
Returns a Cognitive Services account specified by the parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccount"
}
```
## Operation: CognitiveServicesAccounts_Update
Updates a Cognitive Services account

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "body": {
      "$ref": "#/definitions/CognitiveServicesAccountUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "body",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccount"
}
```
## Operation: CognitiveServicesAccounts_Create
Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/CognitiveServicesAccountCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccount"
}
```
## Operation: CognitiveServicesAccounts_ListKeys
Lists the account keys for the specified Cognitive Services account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Congitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  ",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccountKeys"
}
```
## Operation: CognitiveServicesAccounts_RegenerateKey
Regenerates the specified account key for the specified Cognitive Services account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  ",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "body": {
      "$ref": "#/definitions/RegenerateKeyParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "body",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccountKeys"
}
```
## Operation: CognitiveServicesAccounts_ListSkus
List available SKUs for the requested Cognitive Services account

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription."
    },
    "accountName": {
      "type": "string",
      "description": "The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  ",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-02-01-preview"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CognitiveServicesAccountEnumerateSkusResult"
}
```
