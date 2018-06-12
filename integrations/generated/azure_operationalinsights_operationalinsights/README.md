# @datafire/azure_operationalinsights_operationalinsights

Client library for Azure Log Analytics

## Installation and Usage
```bash
npm install --save @datafire/azure_operationalinsights_operationalinsights
```
```js
let azure_operationalinsights_operationalinsights = require('@datafire/azure_operationalinsights_operationalinsights').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_operationalinsights_operationalinsights.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Log Analytics API reference

## Actions

### Operations_List
Lists all of the available OperationalInsights Rest API operations.


```js
azure_operationalinsights_operationalinsights.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Workspaces_List
Gets the workspaces in a subscription.


```js
azure_operationalinsights_operationalinsights.Workspaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_ListByResourceGroup
Gets workspaces in a resource group.


```js
azure_operationalinsights_operationalinsights.Workspaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_Delete
Deletes a workspace instance.


```js
azure_operationalinsights_operationalinsights.Workspaces_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the workspace.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Workspaces_Get
Gets a workspace instance.


```js
azure_operationalinsights_operationalinsights.Workspaces_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the workspace.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Workspace](#workspace)

### Workspaces_Update
Updates a workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_Update({
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the workspace.
  * workspaceName **required** `string`: The name of the workspace.
  * parameters **required** [Workspace](#workspace)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Workspace](#workspace)

### Workspaces_CreateOrUpdate
Create or update a workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_CreateOrUpdate({
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the workspace.
  * workspaceName **required** `string`: The name of the workspace.
  * parameters **required** [Workspace](#workspace)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Workspace](#workspace)

### DataSources_ListByWorkspace
Gets the first page of data source instances in a workspace with the link to the next page.


```js
azure_operationalinsights_operationalinsights.DataSources_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: The workspace that contains the data sources.
  * $filter **required** `string`: The filter to apply on the operation.
  * $skiptoken `string`: Starting point of the collection of data source instances.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DataSourceListResult](#datasourcelistresult)

### DataSources_Delete
Deletes a data source instance.


```js
azure_operationalinsights_operationalinsights.DataSources_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "dataSourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that contains the datasource.
  * dataSourceName **required** `string`: Name of the datasource.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DataSources_Get
Gets a datasource instance.


```js
azure_operationalinsights_operationalinsights.DataSources_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "dataSourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that contains the datasource.
  * dataSourceName **required** `string`: Name of the datasource
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DataSource](#datasource)

### DataSources_CreateOrUpdate
Create or update a data source.


```js
azure_operationalinsights_operationalinsights.DataSources_CreateOrUpdate({
  "resourceGroupName": "",
  "workspaceName": "",
  "dataSourceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that will contain the datasource
  * dataSourceName **required** `string`: The name of the datasource resource.
  * parameters **required** [DataSource](#datasource)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DataSource](#datasource)

### Workspaces_ListIntelligencePacks
Lists all the intelligence packs possible and whether they are enabled or disabled for a given workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_ListIntelligencePacks({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [IntelligencePack](#intelligencepack)

### Workspaces_DisableIntelligencePack
Disables an intelligence pack for a given workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_DisableIntelligencePack({
  "resourceGroupName": "",
  "workspaceName": "",
  "intelligencePackName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace.
  * intelligencePackName **required** `string`: The name of the intelligence pack to be disabled.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Workspaces_EnableIntelligencePack
Enables an intelligence pack for a given workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_EnableIntelligencePack({
  "resourceGroupName": "",
  "workspaceName": "",
  "intelligencePackName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace.
  * intelligencePackName **required** `string`: The name of the intelligence pack to be enabled.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LinkedServices_ListByWorkspace
Gets the linked services instances in a workspace.


```js
azure_operationalinsights_operationalinsights.LinkedServices_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that contains the linked services.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LinkedServiceListResult](#linkedservicelistresult)

### LinkedServices_Delete
Deletes a linked service instance.


```js
azure_operationalinsights_operationalinsights.LinkedServices_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "linkedServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that contains the linkedServices resource
  * linkedServiceName **required** `string`: Name of the linked service.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LinkedServices_Get
Gets a linked service instance.


```js
azure_operationalinsights_operationalinsights.LinkedServices_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "linkedServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that contains the linkedServices resource
  * linkedServiceName **required** `string`: Name of the linked service.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LinkedService](#linkedservice)

### LinkedServices_CreateOrUpdate
Create or update a linked service.


```js
azure_operationalinsights_operationalinsights.LinkedServices_CreateOrUpdate({
  "resourceGroupName": "",
  "workspaceName": "",
  "linkedServiceName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace that will contain the linkedServices resource
  * linkedServiceName **required** `string`: Name of the linkedServices resource
  * parameters **required** [LinkedService](#linkedservice)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [LinkedService](#linkedservice)

### Workspaces_ListManagementGroups
Gets a list of management groups connected to a workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_ListManagementGroups({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WorkspaceListManagementGroupsResult](#workspacelistmanagementgroupsresult)

### Workspaces_GetSharedKeys
Gets the shared keys for a workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_GetSharedKeys({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics Workspace.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedKeys](#sharedkeys)

### Workspaces_ListUsages
Gets a list of usage metrics for a workspace.


```js
azure_operationalinsights_operationalinsights.Workspaces_ListUsages({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WorkspaceListUsagesResult](#workspacelistusagesresult)



## Definitions

### DataSource
* DataSource `object`: Datasources under OMS Workspace.
  * eTag `string`: The ETag of the data source.
  * kind **required** [DataSourceKind](#datasourcekind)
  * properties **required** [Object](#object)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### DataSourceFilter
* DataSourceFilter `object`: DataSource filter. Right now, only filter by kind is supported.
  * kind [DataSourceKind](#datasourcekind)

### DataSourceKind
* DataSourceKind `string` (values: AzureActivityLog, ChangeTrackingPath, ChangeTrackingDefaultPath, ChangeTrackingDefaultRegistry, ChangeTrackingCustomRegistry, CustomLog, CustomLogCollection, GenericDataSource, IISLogs, LinuxPerformanceObject, LinuxPerformanceCollection, LinuxSyslog, LinuxSyslogCollection, WindowsEvent, WindowsPerformanceCounter): The kind of the DataSource.

### DataSourceListResult
* DataSourceListResult `object`: The list data source by workspace operation response.
  * nextLink `string`: The link (url) to the next page of datasources.
  * value `array`: A list of datasources.
    * items [DataSource](#datasource)

### IntelligencePack
* IntelligencePack `object`: Intelligence Pack containing a string name and boolean indicating if it's enabled.
  * displayName `string`: The display name of the intelligence pack.
  * enabled `boolean`: The enabled boolean for the intelligence pack.
  * name `string`: The name of the intelligence pack.

### LinkedService
* LinkedService `object`: The top level Linked service resource container.
  * properties **required** [LinkedServiceProperties](#linkedserviceproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### LinkedServiceListResult
* LinkedServiceListResult `object`: The list linked service operation response.
  * value `array`: Gets or sets a list of linked service instances.
    * items [LinkedService](#linkedservice)

### LinkedServiceProperties
* LinkedServiceProperties `object`: Linked service properties.
  * resourceId **required** `string`: The resource id of the resource that will be linked to the workspace.

### ManagementGroup
* ManagementGroup `object`: A management group that is connected to a workspace
  * properties [ManagementGroupProperties](#managementgroupproperties)

### ManagementGroupProperties
* ManagementGroupProperties `object`: Management group properties.
  * created `string`: The datetime that the management group was created.
  * dataReceived `string`: The last datetime that the management group received data.
  * id `string`: The unique ID of the management group.
  * isGateway `boolean`: Gets or sets a value indicating whether the management group is a gateway.
  * name `string`: The name of the management group.
  * serverCount `integer`: The number of servers connected to the management group.
  * sku `string`: The SKU of System Center that is managing the management group.
  * version `string`: The version of System Center that is managing the management group.

### MetricName
* MetricName `object`: The name of a metric.
  * localizedValue `string`: The localized name of the metric.
  * value `string`: The system name of the metric.

### Object
* Object `object`: JSON object

### Operation
* Operation `object`: Supported operation of OperationalInsights resource provider.
  * display `object`: Display metadata associated with the operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft OperationsManagement.
    * resource `string`: Resource on which the operation is performed etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list solution operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of solution operations supported by the OperationsManagement resource provider.
    * items [Operation](#operation)

### ProxyResource
* ProxyResource `object`: Common properties of proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### Resource
* Resource `object`: The resource definition.
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SharedKeys
* SharedKeys `object`: The shared keys for a workspace.
  * primarySharedKey `string`: The primary shared key of a workspace.
  * secondarySharedKey `string`: The secondary shared key of a workspace.

### Sku
* Sku `object`: The SKU (tier) of a workspace.
  * name **required** `string` (values: Free, Standard, Premium, Unlimited, PerNode, PerGB2018, Standalone): The name of the SKU.

### UsageMetric
* UsageMetric `object`: A metric describing the usage of a resource.
  * currentValue `number`: The current value of the metric.
  * limit `number`: The quota limit for the metric.
  * name [MetricName](#metricname)
  * nextResetTime `string`: The time that the metric's value will reset.
  * quotaPeriod `string`: The quota period that determines the length of time between value resets.
  * unit `string`: The units used for the metric.

### Workspace
* Workspace `object`: The top level Workspace resource container.
  * eTag `string`: The ETag of the workspace.
  * properties [WorkspaceProperties](#workspaceproperties)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### WorkspaceListManagementGroupsResult
* WorkspaceListManagementGroupsResult `object`: The list workspace managmement groups operation response.
  * value `array`: Gets or sets a list of management groups attached to the workspace.
    * items [ManagementGroup](#managementgroup)

### WorkspaceListResult
* WorkspaceListResult `object`: The list workspaces operation response.
  * value `array`: A list of workspaces.
    * items [Workspace](#workspace)

### WorkspaceListUsagesResult
* WorkspaceListUsagesResult `object`: The list workspace usages operation response.
  * value `array`: Gets or sets a list of usage metrics for a workspace.
    * items [UsageMetric](#usagemetric)

### WorkspaceProperties
* WorkspaceProperties `object`: Workspace properties.
  * customerId `string`: The ID associated with the workspace.  Setting this value at creation time allows the workspace being created to be linked to an existing workspace.
  * portalUrl `string`: The URL of the Operational Insights portal for this workspace.  This value is set on the service side and read-only on the client side.
  * provisioningState `string` (values: Creating, Succeeded, Failed, Canceled, Deleting, ProvisioningAccount): The provisioning state of the workspace.
  * retentionInDays `integer`: The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus. 
  * sku [Sku](#sku)
  * source `string`: The source of the workspace.  Source defines where the workspace was created. 'Azure' implies it was created in Azure.  'External' implies it was created via the Operational Insights Portal. This value is set on the service side and read-only on the client side.


