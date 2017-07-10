# @datafire/azure_arm_containerregistry


## Operation: Registries_CheckNameAvailability
Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 60 characters in length.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "registryNameCheckRequest": {
      "$ref": "#/definitions/RegistryNameCheckRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "registryNameCheckRequest"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistryNameStatus"
}
```
## Operation: Registries_List
Lists all the available container registries under the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
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
  "$ref": "#/definitions/RegistryListResult"
}
```
## Operation: Registries_ListByResourceGroup
Lists all the available container registries under the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistryListResult"
}
```
## Operation: Registries_Delete
Deletes a container registry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    },
    "registryName": {
      "type": "string",
      "description": "The name of the container registry."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "registryName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Registries_GetProperties
Gets the properties of the specified container registry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    },
    "registryName": {
      "type": "string",
      "description": "The name of the container registry."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "registryName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Registry"
}
```
## Operation: Registries_Update
Updates a container registry with the specified parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    },
    "registryName": {
      "type": "string",
      "description": "The name of the container registry."
    },
    "registryUpdateParameters": {
      "$ref": "#/definitions/RegistryUpdateParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "registryName",
    "registryUpdateParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Registry"
}
```
## Operation: Registries_CreateOrUpdate
Creates or updates a container registry with the specified parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    },
    "registryName": {
      "type": "string",
      "description": "The name of the container registry."
    },
    "registry": {
      "$ref": "#/definitions/Registry"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "registryName",
    "registry"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Registry"
}
```
## Operation: Registries_GetCredentials
Gets the administrator login credentials for the specified container registry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    },
    "registryName": {
      "type": "string",
      "description": "The name of the container registry."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "registryName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistryCredentials"
}
```
## Operation: Registries_RegenerateCredentials
Regenerates the administrator login credentials for the specified container registry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Microsoft Azure subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the container registry belongs."
    },
    "registryName": {
      "type": "string",
      "description": "The name of the container registry."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "registryName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistryCredentials"
}
```
