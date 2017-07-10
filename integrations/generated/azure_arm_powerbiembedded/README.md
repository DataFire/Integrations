# @datafire/azure_arm_powerbiembedded
Client to manage your Power BI Embedded workspace collections and retrieve workspaces.

## Operation: getAvailableOperations
Indicates which operations can be performed by the Power BI Resource Provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationList"
}
```
## Operation: WorkspaceCollections_checkNameAvailability
Verify the specified Power BI Workspace Collection name is valid and not already in use.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "location": {
      "type": "string",
      "description": "Azure location"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "body": {
      "$ref": "#/definitions/CheckNameRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "location",
    "api-version",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckNameResponse"
}
```
## Operation: WorkspaceCollections_listBySubscription
Retrieves all existing Power BI workspace collections in the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollectionList"
}
```
## Operation: WorkspaceCollections_migrate
Migrates an existing Power BI Workspace Collection to a different resource group and/or subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "body": {
      "$ref": "#/definitions/MigrateWorkspaceCollectionRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WorkspaceCollections_listByResourceGroup
Retrieves all existing Power BI workspace collections in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollectionList"
}
```
## Operation: WorkspaceCollections_delete
Delete a Power BI Workspace Collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WorkspaceCollections_getByName
Retrieves an existing Power BI Workspace Collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollection"
}
```
## Operation: WorkspaceCollections_update
Update an existing Power BI Workspace Collection with the specified properties.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "body": {
      "$ref": "#/definitions/UpdateWorkspaceCollectionRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollection"
}
```
## Operation: WorkspaceCollections_create
Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace Collection contains one or more workspaces, and can be used to provision keys that provide API access to those workspaces.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "body": {
      "$ref": "#/definitions/CreateWorkspaceCollectionRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollection"
}
```
## Operation: WorkspaceCollections_getAccessKeys
Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollectionAccessKeys"
}
```
## Operation: WorkspaceCollections_regenerateKey
Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "body": {
      "$ref": "#/definitions/WorkspaceCollectionAccessKey"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceCollectionAccessKeys"
}
```
## Operation: Workspaces_List
Retrieves all existing Power BI workspaces in the specified workspace collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group"
    },
    "workspaceCollectionName": {
      "type": "string",
      "description": "Power BI Embedded Workspace Collection name"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkspaceList"
}
```
