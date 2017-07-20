# @datafire/azure_arm_operationalinsights

Client library for Azure Log Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_operationalinsights
```

```js
let datafire = require('datafire');
let azure_arm_operationalinsights = require('@datafire/azure_arm_operationalinsights').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_operationalinsights: account,
  }
})


azure_arm_operationalinsights.Workspaces_ListLinkTargets({}, context).then(data => {
  console.log(data);
})
```

## Description
Azure Log Analytics API reference for LinkTargets, StorageInsightConfigs and SavedSearches.

## Actions
### Workspaces_ListLinkTargets
Get a list of workspaces which the current user has administrator privileges and are not associated with an Azure Subscription. The subscriptionId parameter in the Url is ignored.


```js
azure_arm_operationalinsights.Workspaces_ListLinkTargets({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### SavedSearches_ListByWorkspace
Gets the saved searches for a given Log Analytics Workspace


```js
azure_arm_operationalinsights.SavedSearches_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### SavedSearches_Delete
Deletes the specified saved search in a given workspace.


```js
azure_arm_operationalinsights.SavedSearches_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "savedSearchName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* savedSearchName (string) **required** - Name of the saved search.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### SavedSearches_Get
Gets the specified saved search for a given workspace.


```js
azure_arm_operationalinsights.SavedSearches_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "savedSearchName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* savedSearchName (string) **required** - The id of the saved search.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### SavedSearches_CreateOrUpdate
Creates or updates a saved search for a given workspace.


```js
azure_arm_operationalinsights.SavedSearches_CreateOrUpdate({
  "resourceGroupName": "",
  "workspaceName": "",
  "savedSearchName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* savedSearchName (string) **required** - The id of the saved search.
* parameters (undefined) **required** - Value object for saved search results.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### SavedSearches_GetResults
Gets the results from a saved search for a given workspace.


```js
azure_arm_operationalinsights.SavedSearches_GetResults({
  "resourceGroupName": "",
  "workspaceName": "",
  "savedSearchName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* savedSearchName (string) **required** - The name of the saved search.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Workspaces_GetSchema
Gets the schema for a given workspace.


```js
azure_arm_operationalinsights.Workspaces_GetSchema({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Workspaces_GetSearchResults
Submit a search for a given workspace. The response will contain an id to track the search. User can use the id to poll the search status and get the full search result later if the search takes long time to finish. 


```js
azure_arm_operationalinsights.Workspaces_GetSearchResults({
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* parameters (undefined) **required** - Parameters specifying the search query and range.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Workspaces_UpdateSearchResults
Gets updated search results for a given search query.


```js
azure_arm_operationalinsights.Workspaces_UpdateSearchResults({
  "resourceGroupName": "",
  "workspaceName": "",
  "id": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics workspace name
* id (string) **required** - The id of the search that will have results updated. You can get the id from the response of the GetResults call.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageInsights_ListByWorkspace
Lists the storage insight instances within a workspace


```js
azure_arm_operationalinsights.StorageInsights_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics Workspace name that will contain the storageInsightsConfigs resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageInsights_Delete
Deletes a storageInsightsConfigs resource


```js
azure_arm_operationalinsights.StorageInsights_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "storageInsightName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics Workspace name that contains the storageInsightsConfigs resource
* storageInsightName (string) **required** - Name of the storageInsightsConfigs resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageInsights_Get
Gets a storage insight instance.


```js
azure_arm_operationalinsights.StorageInsights_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "storageInsightName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics Workspace name that contains the storageInsightsConfigs resource
* storageInsightName (string) **required** - Name of the storageInsightsConfigs resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageInsights_CreateOrUpdate
Create or update a storage insight.


```js
azure_arm_operationalinsights.StorageInsights_CreateOrUpdate({
  "resourceGroupName": "",
  "workspaceName": "",
  "storageInsightName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get. The name is case insensitive.
* workspaceName (string) **required** - Log Analytics Workspace name that will contain the storageInsightsConfigs resource
* storageInsightName (string) **required** - Name of the storageInsightsConfigs resource
* parameters (undefined) **required** - The top level storage insight resource container.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

