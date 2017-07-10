# @datafire/azure_arm_storage
The Azure Storage Management API.

## Operation: StorageAccounts_CheckNameAvailability
Checks that the storage account name is valid and is not already in use.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "$ref": "#/definitions/StorageAccountCheckNameAvailabilityParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckNameAvailabilityResult"
}
```
## Operation: StorageAccounts_List
Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.

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
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/StorageAccountListResult"
}
```
## Operation: Usage_List
Gets the current usage count and the limit for the resources under the subscription.

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
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/UsageListResult"
}
```
## Operation: StorageAccounts_ListByResourceGroup
Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/StorageAccountListResult"
}
```
## Operation: StorageAccounts_Delete
Deletes a storage account in Microsoft Azure.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
## Operation: StorageAccounts_GetProperties
Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  ",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/StorageAccount"
}
```
## Operation: StorageAccounts_Update
The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/StorageAccountUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/StorageAccount"
}
```
## Operation: StorageAccounts_Create
Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/StorageAccountCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/StorageAccount"
}
```
## Operation: StorageAccounts_ListAccountSAS
List SAS credentials of a storage account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  ",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/AccountSasParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/ListAccountSasResponse"
}
```
## Operation: StorageAccounts_ListServiceSAS
List service SAS credentials of a specific resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/ServiceSasParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/ListServiceSasResponse"
}
```
## Operation: StorageAccounts_ListKeys
Lists the access keys for the specified storage account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/StorageAccountListKeysResult"
}
```
## Operation: StorageAccounts_RegenerateKey
Regenerates one of the access keys for the specified storage account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the user's subscription. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.",
      "maxLength": 24,
      "minLength": 3
    },
    "regenerateKey": {
      "$ref": "#/definitions/StorageAccountRegenerateKeyParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "regenerateKey",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorageAccountListKeysResult"
}
```
