# @datafire/azure_arm_operationalinsights

Client library for Azure Log Analytics

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_operationalinsights
```
```js
let azure_arm_operationalinsights = require('@datafire/azure_arm_operationalinsights').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_operationalinsights.Workspaces_ListLinkTargets({}).then(data => {
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

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [LinkTarget](#linktarget)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SavedSearchesListResult](#savedsearcheslistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * savedSearchName **required** `string`: Name of the saved search.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * savedSearchName **required** `string`: The id of the saved search.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SavedSearch](#savedsearch)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * savedSearchName **required** `string`: The id of the saved search.
  * parameters **required** [SavedSearch](#savedsearch)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SavedSearch](#savedsearch)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * savedSearchName **required** `string`: The name of the saved search.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SearchResultsResponse](#searchresultsresponse)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SearchGetSchemaResponse](#searchgetschemaresponse)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * parameters **required** [SearchParameters](#searchparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SearchResultsResponse](#searchresultsresponse)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics workspace name
  * id **required** `string`: The id of the search that will have results updated. You can get the id from the response of the GetResults call.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SearchResultsResponse](#searchresultsresponse)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics Workspace name that will contain the storageInsightsConfigs resource
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [StorageInsightListResult](#storageinsightlistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics Workspace name that contains the storageInsightsConfigs resource
  * storageInsightName **required** `string`: Name of the storageInsightsConfigs resource
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics Workspace name that contains the storageInsightsConfigs resource
  * storageInsightName **required** `string`: Name of the storageInsightsConfigs resource
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [StorageInsight](#storageinsight)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Log Analytics Workspace name that will contain the storageInsightsConfigs resource
  * storageInsightName **required** `string`: Name of the storageInsightsConfigs resource
  * parameters **required** [StorageInsight](#storageinsight)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [StorageInsight](#storageinsight)



## Definitions

### CoreSummary
* CoreSummary `object`: The core summary of a search.
  * NumberOfDocuments **required** `integer`: The number of documents of a core summary.
  * Status `string`: The status of a core summary.

### LinkTarget
* LinkTarget `object`: Metadata for a workspace that isn't linked to an Azure subscription.
  * accountName `string`: The display name of the workspace.
  * customerId `string`: The GUID that uniquely identifies the workspace. 
  * location `string`: The location of the workspace.
  * workspaceName `string`: The DNS valid workspace name.

### ProxyResource
* ProxyResource `object`: Common properties of proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### Resource
* Resource `object`: The resource definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SavedSearch
* SavedSearch `object`: Value object for saved search results.
  * etag `string`: The etag of the saved search.
  * id `string`: The id of the saved search.
  * properties **required** [SavedSearchProperties](#savedsearchproperties)

### SavedSearchProperties
* SavedSearchProperties `object`: Value object for saved search results.
  * Category **required** `string`: The category of the saved search. This helps the user to find a saved search faster. 
  * DisplayName **required** `string`: Saved search display name.
  * Query **required** `string`: The query expression for the saved search. Please see https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-search-reference for reference.
  * Tags `array`: The tags attached to the saved search.
    * items [Tag](#tag)
  * Version **required** `integer`: The version number of the query lanuage. Only verion 1 is allowed here.

### SavedSearchesListResult
* SavedSearchesListResult `object`: The saved search operation response.
  * __metadata [SearchMetadata](#searchmetadata)
  * value `array`: The array of result values.
    * items [SavedSearch](#savedsearch)

### SearchError
* SearchError `object`: Details for a search error.
  * message `string`: The error message.
  * type `string`: The error type.

### SearchGetSchemaResponse
* SearchGetSchemaResponse `object`: The get schema operation response.
  * __metadata [SearchMetadata](#searchmetadata)
  * value `array`: The array of result values.
    * items [SearchSchemaValue](#searchschemavalue)

### SearchHighlight
* SearchHighlight `object`: Highlight details.
  * post `string`: The string that is put after a matched result.
  * pre `string`: The string that is put before a matched result.

### SearchMetadata
* SearchMetadata `object`: Metadata for search results.
  * CoreSummaries `array`: The core summaries.
    * items [CoreSummary](#coresummary)
  * ETag `string`: The ETag of the search results.
  * LastUpdated `string`: The time of last update.
  * RequestId `string`: The request id of the search.
  * StartTime `string`: The start time for the search.
  * Status `string`: The status of the search results.
  * aggregatedGroupingFields `string`: The aggregated grouping fields.
  * aggregatedValueField `string`: The aggregated value field.
  * id `string`: The id of the search results request.
  * max `integer`: The max of all aggregates returned in the result set.
  * requestTime `integer`: The request time.
  * resultType `string`: The search result type.
  * schema [SearchMetadataSchema](#searchmetadataschema)
  * sort `array`: How the results are sorted.
    * items [SearchSort](#searchsort)
  * sum `integer`: The sum of all aggregates returned in the result set.
  * top `integer`: The number of top search results.
  * total `integer`: The total number of search results.

### SearchMetadataSchema
* SearchMetadataSchema `object`: Schema metadata for search.
  * name `string`: The name of the metadata schema.
  * version `integer`: The version of the metadata schema.

### SearchParameters
* SearchParameters `object`: Parameters specifying the search query and range.
  * end `string`: The end date filter, so the only query results returned are before this date.
  * highlight [SearchHighlight](#searchhighlight)
  * query **required** `string`: The query to search.
  * start `string`: The start date filter, so the only query results returned are after this date.
  * top `integer`: The number to get from the top.

### SearchResultsResponse
* SearchResultsResponse `object`: The get search result operation response.
  * __metadata [SearchMetadata](#searchmetadata)
  * error [SearchError](#searcherror)
  * id `string`: The id of the search, which includes the full url.
  * value `array`: The array of result values.
    * items `object`

### SearchSchemaValue
* SearchSchemaValue `object`: Value object for schema results.
  * displayName `string`: The display name of the schema.
  * facet **required** `boolean`: The boolean that indicates whether or not the field is a facet.
  * indexed **required** `boolean`: The boolean that indicates the field is searchable as free text.
  * name `string`: The name of the schema.
  * ownerType `array`: The array of workflows containing the field.
    * items `string`
  * stored **required** `boolean`: The boolean that indicates whether or not the field is stored.
  * type `string`: The type.

### SearchSort
* SearchSort `object`: The sort parameters for search.
  * name `string`: The name of the field the search query is sorted on.
  * order `string` (values: asc, desc): The sort order of the search.

### StorageAccount
* StorageAccount `object`: Describes a storage account connection.
  * id **required** `string`: The Azure Resource Manager ID of the storage account resource.
  * key **required** `string`: The storage account key.

### StorageInsight
* StorageInsight `object`: The top level storage insight resource container.
  * eTag `string`: The ETag of the storage insight.
  * properties [StorageInsightProperties](#storageinsightproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### StorageInsightListResult
* StorageInsightListResult `object`: The list storage insights operation response.
  * @odata.nextLink `string`: The link (url) to the next page of results.
  * value `array`: Gets or sets a list of storage insight instances.
    * items [StorageInsight](#storageinsight)

### StorageInsightProperties
* StorageInsightProperties `object`: Storage insight properties.
  * containers `array`: The names of the blob containers that the workspace should read
    * items `string`
  * status [StorageInsightStatus](#storageinsightstatus)
  * storageAccount **required** [StorageAccount](#storageaccount)
  * tables `array`: The names of the Azure tables that the workspace should read
    * items `string`

### StorageInsightStatus
* StorageInsightStatus `object`: The status of the storage insight.
  * description `string`: Description of the state of the storage insight.
  * state **required** `string` (values: OK, ERROR): The state of the storage insight connection to the workspace

### Tag
* Tag `object`: A tag of a saved search.
  * Name **required** `string`: The tag name.
  * Value **required** `string`: The tag value.


