# @datafire/azure_arm_mediaservices
Media Services resource management APIs.

## Operation: MediaService_CheckNameAvailability
Checks whether the Media Service resource name is available. The name must be globally unique.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "CheckNameAvailabilityInput": {
      "$ref": "#/definitions/CheckNameAvailabilityInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "CheckNameAvailabilityInput"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckNameAvailabilityOutput"
}
```
## Operation: MediaService_ListByResourceGroup
Lists all of the Media Services in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaServiceCollection"
}
```
## Operation: MediaService_Delete
Deletes a Media Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: MediaService_Get
Gets a Media Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaService"
}
```
## Operation: MediaService_Update
Updates a Media Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    },
    "MediaService": {
      "$ref": "#/definitions/MediaService"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName",
    "MediaService"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaService"
}
```
## Operation: MediaService_Create
Creates a Media Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    },
    "MediaService": {
      "$ref": "#/definitions/MediaService"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName",
    "MediaService"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaService"
}
```
## Operation: MediaService_ListKeys
Lists the keys for a Media Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServiceKeys"
}
```
## Operation: MediaService_RegenerateKey
Regenerates a primary or secondary key for a Media Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    },
    "RegenerateKeyInput": {
      "$ref": "#/definitions/RegenerateKeyInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName",
    "RegenerateKeyInput"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegenerateKeyOutput"
}
```
## Operation: MediaService_SyncStorageKeys
Synchronizes storage account keys for a storage account associated with the Media Service account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2015-10-01"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the Azure subscription."
    },
    "mediaServiceName": {
      "type": "string",
      "description": "Name of the Media Service.",
      "pattern": "^[a-z0-9]",
      "maxLength": 24,
      "minLength": 3
    },
    "SyncStorageKeysInput": {
      "$ref": "#/definitions/SyncStorageKeysInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "mediaServiceName",
    "SyncStorageKeysInput"
  ]
}
```
### Output Schema
```json
{}
```
