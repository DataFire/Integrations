# @datafire/azure_applicationinsights_componentcontinuousexport_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_componentcontinuousexport_api
```
```js
let azure_applicationinsights_componentcontinuousexport_api = require('@datafire/azure_applicationinsights_componentcontinuousexport_api').create({
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

Azure Application Insights client for Continuous Export of a component.

## Actions

### ExportConfigurations_List
Gets a list of Continuous Export configuration of an Application Insights component.


```js
azure_applicationinsights_componentcontinuousexport_api.ExportConfigurations_List({
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
* output [ApplicationInsightsComponentExportConfigurationListResult](#applicationinsightscomponentexportconfigurationlistresult)

### ExportConfigurations_Create
Create a Continuous Export configuration of an Application Insights component.


```js
azure_applicationinsights_componentcontinuousexport_api.ExportConfigurations_Create({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "ExportProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * ExportProperties **required** [ApplicationInsightsComponentExportRequest](#applicationinsightscomponentexportrequest)

#### Output
* output [ApplicationInsightsComponentExportConfigurationListResult](#applicationinsightscomponentexportconfigurationlistresult)

### ExportConfigurations_Delete
Delete a Continuous Export configuration of an Application Insights component.


```js
azure_applicationinsights_componentcontinuousexport_api.ExportConfigurations_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "exportId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * exportId **required** `string`: The Continuous Export configuration ID. This is unique within a Application Insights component.

#### Output
* output [ApplicationInsightsComponentExportConfiguration](#applicationinsightscomponentexportconfiguration)

### ExportConfigurations_Get
Get the Continuous Export configuration for this export id.


```js
azure_applicationinsights_componentcontinuousexport_api.ExportConfigurations_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "exportId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * exportId **required** `string`: The Continuous Export configuration ID. This is unique within a Application Insights component.

#### Output
* output [ApplicationInsightsComponentExportConfiguration](#applicationinsightscomponentexportconfiguration)

### ExportConfigurations_Update
Update the Continuous Export configuration for this export id.


```js
azure_applicationinsights_componentcontinuousexport_api.ExportConfigurations_Update({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "exportId": "",
  "ExportProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * exportId **required** `string`: The Continuous Export configuration ID. This is unique within a Application Insights component.
  * ExportProperties **required** [ApplicationInsightsComponentExportRequest](#applicationinsightscomponentexportrequest)

#### Output
* output [ApplicationInsightsComponentExportConfiguration](#applicationinsightscomponentexportconfiguration)



## Definitions

### ApplicationInsightsComponentExportConfiguration
* ApplicationInsightsComponentExportConfiguration `object`: Properties that define a Continuous Export configuration.
  * ApplicationName `string`: The name of the Application Insights component.
  * ContainerName `string`: The name of the destination storage container.
  * DestinationAccountId `string`: The name of destination account.
  * DestinationStorageLocationId `string`: The destination account location ID.
  * DestinationStorageSubscriptionId `string`: The destination storage account subscription ID.
  * DestinationType `string`: The destination type.
  * ExportId `string`: The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
  * ExportStatus `string`: This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
  * InstrumentationKey `string`: The instrumentation key of the Application Insights component.
  * IsUserEnabled `string`: This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
  * LastGapTime `string`: The last time the Continuous Export configuration started failing.
  * LastSuccessTime `string`: The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
  * LastUserUpdate `string`: Last time the Continuous Export configuration was updated.
  * NotificationQueueEnabled `string`: Deprecated
  * PermanentErrorReason `string`: This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
  * RecordTypes `string`: This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
  * ResourceGroup `string`: The resource group of the Application Insights component.
  * StorageName `string`: The name of the destination storage account.
  * SubscriptionId `string`: The subscription of the Application Insights component.

### ApplicationInsightsComponentExportConfigurationListResult
* ApplicationInsightsComponentExportConfigurationListResult `array`: A list of Continuous Export configurations.
  * items [ApplicationInsightsComponentExportConfiguration](#applicationinsightscomponentexportconfiguration)

### ApplicationInsightsComponentExportRequest
* ApplicationInsightsComponentExportRequest `object`: An Application Insights component Continuous Export configuration request definition.
  * DestinationAccountId `string`: The name of destination storage account.
  * DestinationAddress `string`: The SAS URL for the destination storage container. It must grant write permission.
  * DestinationStorageLocationId `string`: The location ID of the destination storage container.
  * DestinationStorageSubscriptionId `string`: The subscription ID of the destination storage container.
  * DestinationType `string`: The Continuous Export destination type. This has to be 'Blob'.
  * IsEnabled `string`: Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
  * NotificationQueueEnabled `string`: Deprecated
  * NotificationQueueUri `string`: Deprecated
  * RecordTypes `string`: The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.


