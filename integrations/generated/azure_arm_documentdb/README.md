# @datafire/azure_arm_documentdb
Azure DocumentDB Database Service Resource Provider REST API

## Operation: DatabaseAccounts_CheckNameExists
Checks that the Azure DocumentDB account name already exists. A valid account name may contain only lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DatabaseAccounts_List
Lists all the Azure DocumentDB database accounts available under the subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
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
  "$ref": "#/definitions/DatabaseAccountsListResult"
}
```
## Operation: DatabaseAccounts_ListByResourceGroup
Lists all the Azure DocumentDB database accounts available under the given resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
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
  "$ref": "#/definitions/DatabaseAccountsListResult"
}
```
## Operation: DatabaseAccounts_Delete
Deletes an existing Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DatabaseAccounts_Get
Retrieves the properties of an existing Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseAccount"
}
```
## Operation: DatabaseAccounts_Patch
Patches the properties of an existing Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    },
    "updateParameters": {
      "$ref": "#/definitions/DatabaseAccountPatchParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version",
    "updateParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseAccount"
}
```
## Operation: DatabaseAccounts_CreateOrUpdate
Creates or updates an Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    },
    "createUpdateParameters": {
      "$ref": "#/definitions/DatabaseAccountCreateUpdateParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version",
    "createUpdateParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseAccount"
}
```
## Operation: DatabaseAccounts_FailoverPriorityChange
Changes the failover priority for the Azure DocumentDB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    },
    "failoverParameters": {
      "$ref": "#/definitions/FailoverPolicies"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version",
    "failoverParameters"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DatabaseAccounts_ListConnectionStrings
Lists the connection strings for the specified Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseAccountListConnectionStringsResult"
}
```
## Operation: DatabaseAccounts_ListKeys
Lists the access keys for the specified Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseAccountListKeysResult"
}
```
## Operation: DatabaseAccounts_ListReadOnlyKeys
Lists the read-only access keys for the specified Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseAccountListReadOnlyKeysResult"
}
```
## Operation: DatabaseAccounts_RegenerateKey
Regenerates an access key for the specified Azure DocumentDB database account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of an Azure resource group.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "DocumentDB database account name.",
      "maxLength": 50,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2015-04-08."
    },
    "keyToRegenerate": {
      "$ref": "#/definitions/DatabaseAccountRegenerateKeyParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "accountName",
    "api-version",
    "keyToRegenerate"
  ]
}
```
### Output Schema
```json
{}
```
