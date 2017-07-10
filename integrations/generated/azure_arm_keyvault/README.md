# @datafire/azure_arm_keyvault
The Azure management API provides a RESTful set of web services that interact with Azure Key Vault.

## Operation: Vaults_ListByResourceGroup
The List operation gets information about the vaults associated with the subscription and within the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Resource Group to which the vault belongs."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/VaultListResult"
}
```
## Operation: Vaults_Delete
Deletes the specified Azure key vault.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Resource Group to which the vault belongs."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the vault to delete"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vaultName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Vaults_Get
Gets the specified Azure key vault.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Resource Group to which the vault belongs."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the vault."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vaultName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Vault"
}
```
## Operation: Vaults_CreateOrUpdate
Create or update a key vault in the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Resource Group to which the server belongs."
    },
    "vaultName": {
      "type": "string",
      "description": "Name of the vault",
      "pattern": "^[a-zA-Z0-9-]{3,24}$"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/VaultCreateOrUpdateParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vaultName",
    "api-version",
    "parameters",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Vault"
}
```
## Operation: Vaults_List
The List operation gets information about the vaults associated with the subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation.",
      "enum": [
        "resourceType eq 'Microsoft.KeyVault/vaults'"
      ]
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return."
    },
    "api-version": {
      "type": "string",
      "description": "Azure Resource Manager Api Version.",
      "enum": [
        "2015-11-01"
      ]
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "$filter",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceListResult"
}
```
