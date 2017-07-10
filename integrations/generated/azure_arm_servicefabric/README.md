# @datafire/azure_arm_servicefabric


## Operation: Operations_List
Lists all of the available ServiceFabric REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
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
  "$ref": "#/definitions/OperationListResult"
}
```
## Operation: Clusters_List
List cluster resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
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
  "$ref": "#/definitions/ClusterListResult"
}
```
## Operation: ClusterVersions_List
List cluster code versions by location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The location for the cluster code versions, this is different from cluster location"
    },
    "environment": {
      "type": "string",
      "description": "Cluster operating system, the default means all",
      "enum": [
        "Default",
        "Windows",
        "Linux"
      ]
    },
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "environment",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClusterCodeVersionsListResult"
}
```
## Operation: Clusters_Delete
Delete cluster resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the resource belongs or get created"
    },
    "clusterName": {
      "type": "string",
      "description": "The name of the cluster resource"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "clusterName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Clusters_Get
Get cluster resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the resource belongs or get created"
    },
    "clusterName": {
      "type": "string",
      "description": "The name of the cluster resource"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "clusterName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Cluster"
}
```
## Operation: Clusters_Update
Update cluster configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the resource belongs or get created"
    },
    "clusterName": {
      "type": "string",
      "description": "The name of the cluster resource"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "parameters": {
      "$ref": "#/definitions/ClusterUpdateParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "clusterName",
    "api-version",
    "parameters",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Cluster"
}
```
## Operation: Clusters_Create
Create cluster resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the resource belongs or get created"
    },
    "clusterName": {
      "type": "string",
      "description": "The name of the cluster resource"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "parameters": {
      "$ref": "#/definitions/Cluster"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "clusterName",
    "api-version",
    "parameters",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Cluster"
}
```
## Operation: Clusters_ListByResourceGroup
List cluster resource by resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to which the resource belongs or get created"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the ServiceFabric resouce provider api"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The customer subscription identifier"
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
  "$ref": "#/definitions/ClusterListResult"
}
```
