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

azure_applicationinsights_components_api.Components_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.

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
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.

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
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
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
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
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
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
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
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * InsightProperties **required** [ApplicationInsightsComponent](#applicationinsightscomponent)

#### Output
* output [ApplicationInsightsComponent](#applicationinsightscomponent)



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
  * nextLink `string`: The URI to get the next set of Application Insights component defintions if too many components where returned in the result set.
  * value **required** `array`: List of Application Insights component definitions.
    * items [ApplicationInsightsComponent](#applicationinsightscomponent)

### ApplicationInsightsComponentProperties
* ApplicationInsightsComponentProperties `object`: Properties that define an Application Insights component resource.
  * AppId `string`: Application Insights Unique ID for your Application.
  * ApplicationId `string`: The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
  * Application_Type **required** `string` (values: web, other): Type of application being monitored.
  * CreationDate `string`: Creation Date for the Application Insights component, in ISO 8601 format.
  * Flow_Type `string` (values: Bluefield): Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
  * HockeyAppId `string`: The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
  * HockeyAppToken `string`: Token used to authenticate communications with between Application Insights and HockeyApp.
  * InstrumentationKey `string`: Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
  * Request_Source `string` (values: rest): Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
  * SamplingPercentage `number`: Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
  * TenantId `string`: Azure Tenant Id.
  * provisioningState `string`: Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on a WebTest instance.


