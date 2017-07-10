# @datafire/azure_arm_analysisservices
The Azure Analysis Services Web API provides a RESTful set of web services that enables users to create, retrieve, update, and delete Analysis Services servers

## Operation: Servers_List
Lists all the Analysis Services servers for the given subscription.

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
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/AnalysisServicesServers"
}
```
## Operation: Servers_ListByResourceGroup
Gets all the Analysis Services servers for the given resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/AnalysisServicesServers"
}
```
## Operation: Servers_Delete
Deletes the specified Analysis Services server.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "serverName": {
      "type": "string",
      "description": "The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.",
      "pattern": "^[a-z][a-z0-9]*$",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serverName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Servers_GetDetails
Gets details about the specified Analysis Services server.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "serverName": {
      "type": "string",
      "description": "The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.",
      "pattern": "^[a-z][a-z0-9]*$",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serverName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AnalysisServicesServer"
}
```
## Operation: Servers_Update
Updates the current state of the specified Analysis Services server.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "serverName": {
      "type": "string",
      "description": "The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.",
      "pattern": "^[a-z][a-z0-9]*$",
      "maxLength": 63,
      "minLength": 3
    },
    "serverUpdateParameters": {
      "$ref": "#/definitions/AnalysisServicesServerUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serverName",
    "serverUpdateParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AnalysisServicesServer"
}
```
## Operation: Servers_Create
Provisions the specified Analysis Services server based on the configuration specified in the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "serverName": {
      "type": "string",
      "description": "The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.",
      "pattern": "^[a-z][a-z0-9]*$",
      "maxLength": 63,
      "minLength": 3
    },
    "serverParameters": {
      "$ref": "#/definitions/AnalysisServicesServer"
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serverName",
    "serverParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AnalysisServicesServer"
}
```
## Operation: Servers_Resume
Resumes operation of the specified Analysis Services server instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "serverName": {
      "type": "string",
      "description": "The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.",
      "pattern": "^[a-z][a-z0-9]*$",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serverName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Servers_Suspend
Supends operation of the specified Analysis Services server instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "serverName": {
      "type": "string",
      "description": "The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.",
      "pattern": "^[a-z][a-z0-9]*$",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serverName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
