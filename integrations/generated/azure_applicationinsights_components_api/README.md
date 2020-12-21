# @datafire/azure_applicationinsights_components_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_components_api
```
```js
let azure_applicationinsights_components_api = require('@datafire/azure_applicationinsights_components_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for Components.

## Actions

### Components_List
Gets a list of all Application Insights components within a subscription.


```js
azure_applicationinsights_components_api.Components_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationInsightsComponentListResult](#applicationinsightscomponentlistresult)

### Components_ListByResourceGroup
Gets a list of Application Insights components within a resource group.


```js
azure_applicationinsights_components_api.Components_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationInsightsComponentListResult](#applicationinsightscomponentlistresult)

### Components_Delete
Deletes an Application Insights component.


```js
azure_applicationinsights_components_api.Components_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
*Output schema unknown*

### Components_Get
Returns an Application Insights component.


```js
azure_applicationinsights_components_api.Components_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponent](#applicationinsightscomponent)

### Components_UpdateTags
Updates an existing component's tags. To update other fields use the CreateOrUpdate method.


```js
azure_applicationinsights_components_api.Components_UpdateTags({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "ComponentTags": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * ComponentTags **required** [TagsResource](#tagsresource)

#### Output
* output [ApplicationInsightsComponent](#applicationinsightscomponent)

### Components_CreateOrUpdate
Creates (or updates) an Application Insights component. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.


```js
azure_applicationinsights_components_api.Components_CreateOrUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "InsightProperties": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * InsightProperties **required** [ApplicationInsightsComponent](#applicationinsightscomponent)

#### Output
* output [ApplicationInsightsComponent](#applicationinsightscomponent)

### Components_GetPurgeStatus
Get status for an ongoing purge operation.


```js
azure_applicationinsights_components_api.Components_GetPurgeStatus({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "purgeId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * purgeId **required** `string`: In a purge status request, this is the Id of the operation the status of which is returned.

#### Output
* output [ComponentPurgeStatusResponse](#componentpurgestatusresponse)

### Components_Purge
Purges data in an Application Insights component by a set of user-defined filters.

In order to manage system resources, purge requests are throttled at 50 requests per hour. You should batch the execution of purge requests by sending a single command whose predicate includes all user identities that require purging. Use the in operator to specify multiple identities. You should run the query prior to using for a purge request to verify that the results are expected.


```js
azure_applicationinsights_components_api.Components_Purge({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * body **required** [ComponentPurgeBody](#componentpurgebody)

#### Output
* output [ComponentPurgeResponse](#componentpurgeresponse)



## Definitions

### ApplicationInsightsComponent
* ApplicationInsightsComponent `object`: An Application Insights component definition.
  * kind **required** `string`: The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
  * properties [ApplicationInsightsComponentProperties](#applicationinsightscomponentproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ApplicationInsightsComponentListResult
* ApplicationInsightsComponentListResult `object`: Describes the list of Application Insights Resources.
  * nextLink `string`: The URI to get the next set of Application Insights component definitions if too many components where returned in the result set.
  * value **required** `array`: List of Application Insights component definitions.
    * items [ApplicationInsightsComponent](#applicationinsightscomponent)

### ApplicationInsightsComponentProperties
* ApplicationInsightsComponentProperties `object`: Properties that define an Application Insights component resource.
  * AppId `string`: Application Insights Unique ID for your Application.
  * ApplicationId `string`: The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
  * Application_Type **required** `string` (values: web, other): Type of application being monitored.
  * ConnectionString `string`: Application Insights component connection string.
  * CreationDate `string`: Creation Date for the Application Insights component, in ISO 8601 format.
  * DisableIpMasking `boolean`: Disable IP masking.
  * Flow_Type `string` (values: Bluefield): Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
  * HockeyAppId `string`: The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
  * HockeyAppToken `string`: Token used to authenticate communications with between Application Insights and HockeyApp.
  * ImmediatePurgeDataOn30Days `boolean`: Purge data immediately after 30 days.
  * InstrumentationKey `string`: Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
  * Request_Source `string` (values: rest): Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
  * RetentionInDays `integer`: Retention period in days.
  * SamplingPercentage `number`: Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
  * TenantId `string`: Azure Tenant Id.
  * provisioningState `string`: Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.

### ComponentPurgeBody
* ComponentPurgeBody `object`: Describes the body of a purge request for an App Insights component
  * filters **required** `array`: The set of columns and filters (queries) to run over them to purge the resulting data.
    * items [ComponentPurgeBodyFilters](#componentpurgebodyfilters)
  * table **required** `string`: Table from which to purge data.

### ComponentPurgeBodyFilters
* ComponentPurgeBodyFilters `object`: User-defined filters to return data which will be purged from the table.
  * column `string`: The column of the table over which the given query should run
  * key `string`: When filtering over custom dimensions, this key will be used as the name of the custom dimension.
  * operator `string`: A query operator to evaluate over the provided column and value(s). Supported operators are ==, =~, in, in~, >, >=, <, <=, between, and have the same behavior as they would in a KQL query.

### ComponentPurgeResponse
* ComponentPurgeResponse `object`: Response containing operationId for a specific purge action.
  * operationId **required** `string`: Id to use when querying for status for a particular purge operation.

### ComponentPurgeStatusResponse
* ComponentPurgeStatusResponse `object`: Response containing status for a specific purge operation.
  * status **required** `string` (values: pending, completed): Status of the operation represented by the requested Id.

### ComponentsResource
* ComponentsResource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on a WebTest instance.


