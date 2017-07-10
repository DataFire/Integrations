# @datafire/azure_arm_operationalinsights
Azure Log Analytics API reference for LinkTargets, StorageInsightConfigs and SavedSearches.

## Operation: Workspaces_ListLinkTargets
Get a list of workspaces which the current user has administrator privileges and are not associated with an Azure Subscription. The subscriptionId parameter in the Url is ignored.

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
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "items": {
    "$ref": "#/definitions/LinkTarget"
  },
  "type": "array"
}
```
## Operation: SavedSearches_ListByWorkspace
Gets the saved searches for a given Log Analytics Workspace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
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
    "workspaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedSearchesListResult"
}
```
## Operation: SavedSearches_Delete
Deletes the specified saved search in a given workspace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
    },
    "savedSearchName": {
      "type": "string",
      "description": "Name of the saved search."
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
    "workspaceName",
    "savedSearchName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SavedSearches_Get
Gets the specified saved search for a given workspace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
    },
    "savedSearchName": {
      "type": "string",
      "description": "The id of the saved search."
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
    "workspaceName",
    "savedSearchName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedSearch"
}
```
## Operation: SavedSearches_CreateOrUpdate
Creates or updates a saved search for a given workspace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
    },
    "savedSearchName": {
      "type": "string",
      "description": "The id of the saved search."
    },
    "parameters": {
      "$ref": "#/definitions/SavedSearch"
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
    "workspaceName",
    "savedSearchName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedSearch"
}
```
## Operation: SavedSearches_GetResults
Gets the results from a saved search for a given workspace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
    },
    "savedSearchName": {
      "type": "string",
      "description": "The name of the saved search."
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
    "workspaceName",
    "savedSearchName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResultsResponse"
}
```
## Operation: Workspaces_GetSchema
Gets the schema for a given workspace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
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
    "workspaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchGetSchemaResponse"
}
```
## Operation: Workspaces_GetSearchResults
Submit a search for a given workspace. The response will contain an id to track the search. User can use the id to poll the search status and get the full search result later if the search takes long time to finish. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
    },
    "parameters": {
      "$ref": "#/definitions/SearchParameters"
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
    "workspaceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResultsResponse"
}
```
## Operation: Workspaces_UpdateSearchResults
Gets updated search results for a given search query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics workspace name"
    },
    "id": {
      "type": "string",
      "description": "The id of the search that will have results updated. You can get the id from the response of the GetResults call."
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
    "workspaceName",
    "id",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResultsResponse"
}
```
## Operation: StorageInsights_ListByWorkspace
Lists the storage insight instances within a workspace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics Workspace name that will contain the storageInsightsConfigs resource"
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
    "workspaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorageInsightListResult"
}
```
## Operation: StorageInsights_Delete
Deletes a storageInsightsConfigs resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics Workspace name that contains the storageInsightsConfigs resource"
    },
    "storageInsightName": {
      "type": "string",
      "description": "Name of the storageInsightsConfigs resource"
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
    "workspaceName",
    "storageInsightName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: StorageInsights_Get
Gets a storage insight instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics Workspace name that contains the storageInsightsConfigs resource"
    },
    "storageInsightName": {
      "type": "string",
      "description": "Name of the storageInsightsConfigs resource"
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
    "workspaceName",
    "storageInsightName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorageInsight"
}
```
## Operation: StorageInsights_CreateOrUpdate
Create or update a storage insight.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get. The name is case insensitive.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "Log Analytics Workspace name that will contain the storageInsightsConfigs resource"
    },
    "storageInsightName": {
      "type": "string",
      "description": "Name of the storageInsightsConfigs resource"
    },
    "parameters": {
      "$ref": "#/definitions/StorageInsight"
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
    "workspaceName",
    "storageInsightName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorageInsight"
}
```
