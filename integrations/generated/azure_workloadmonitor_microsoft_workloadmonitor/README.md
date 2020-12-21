# @datafire/azure_workloadmonitor_microsoft_workloadmonitor

Client library for Workload Monitor

## Installation and Usage
```bash
npm install --save @datafire/azure_workloadmonitor_microsoft_workloadmonitor
```
```js
let azure_workloadmonitor_microsoft_workloadmonitor = require('@datafire/azure_workloadmonitor_microsoft_workloadmonitor').create({
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

APIs for workload monitoring

## Actions

### Operations_List
Gets the details of all operations possible on the resource provider.


```js
azure_workloadmonitor_microsoft_workloadmonitor.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [OperationListResult](#operationlistresult)

### ComponentsSummary_List
Get subscription wide details of components.


```js
azure_workloadmonitor_microsoft_workloadmonitor.ComponentsSummary_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $select `string`: Properties to be returned in the response.
  * $filter `string`: Filter to be applied on the operation.
  * $apply `string`: Apply aggregation.
  * $orderby `string`: Sort the result on one or more properties.
  * $expand `string`: Include properties inline in the response.
  * $top `string`: Limit the result to the specified number of rows.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [ComponentsCollection](#componentscollection)

### MonitorInstancesSummary_List
Get subscription wide health instances.


```js
azure_workloadmonitor_microsoft_workloadmonitor.MonitorInstancesSummary_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $select `string`: Properties to be returned in the response.
  * $filter `string`: Filter to be applied on the operation.
  * $apply `string`: Apply aggregation.
  * $orderby `string`: Sort the result on one or more properties.
  * $expand `string`: Include properties inline in the response.
  * $top `string`: Limit the result to the specified number of rows.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [MonitorInstancesCollection](#monitorinstancescollection)

### Components_ListByResource
Get list of components for a resource.


```js
azure_workloadmonitor_microsoft_workloadmonitor.Components_ListByResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $select `string`: Properties to be returned in the response.
  * $filter `string`: Filter to be applied on the operation.
  * $apply `string`: Apply aggregation.
  * $orderby `string`: Sort the result on one or more properties.
  * $expand `string`: Include properties inline in the response.
  * $top `string`: Limit the result to the specified number of rows.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [ComponentsCollection](#componentscollection)

### Components_Get
Get details of a component.


```js
azure_workloadmonitor_microsoft_workloadmonitor.Components_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "componentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * componentId **required** `string`: Component Id.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $select `string`: Properties to be returned in the response.
  * $expand `string`: Include properties inline in the response.

#### Output
* output [Component](#component)

### MonitorInstances_ListByResource
Get list of monitor instances for a resource.


```js
azure_workloadmonitor_microsoft_workloadmonitor.MonitorInstances_ListByResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $select `string`: Properties to be returned in the response.
  * $filter `string`: Filter to be applied on the operation.
  * $apply `string`: Apply aggregation.
  * $orderby `string`: Sort the result on one or more properties.
  * $expand `string`: Include properties inline in the response.
  * $top `string`: Limit the result to the specified number of rows.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [MonitorInstancesCollection](#monitorinstancescollection)

### MonitorInstances_Get
Get details of a monitorInstance.


```js
azure_workloadmonitor_microsoft_workloadmonitor.MonitorInstances_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "monitorInstanceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * monitorInstanceId **required** `string`: MonitorInstance Id.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $select `string`: Properties to be returned in the response.
  * $expand `string`: Include properties inline in the response.

#### Output
* output [MonitorInstance](#monitorinstance)

### Monitors_ListByResource
Get list of a monitors of a resource.


```js
azure_workloadmonitor_microsoft_workloadmonitor.Monitors_ListByResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $filter `string`: Filter to be applied on the operation.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [MonitorsCollection](#monitorscollection)

### Monitors_Get
Get details of a single monitor.


```js
azure_workloadmonitor_microsoft_workloadmonitor.Monitors_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "monitorId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * monitorId **required** `string`: Monitor Id.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.

#### Output
* output [Monitor](#monitor)

### Monitors_Update
Update a Monitor's configuration.


```js
azure_workloadmonitor_microsoft_workloadmonitor.Monitors_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "monitorId": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * monitorId **required** `string`: Monitor Id.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * body **required** [Monitor](#monitor)

#### Output
* output [Monitor](#monitor)

### NotificationSettings_ListByResource
Get list of notification settings for a resource.


```js
azure_workloadmonitor_microsoft_workloadmonitor.NotificationSettings_ListByResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * $skiptoken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [NotificationSettingsCollection](#notificationsettingscollection)

### NotificationSettings_Get
Get a of notification setting for a resource.


```js
azure_workloadmonitor_microsoft_workloadmonitor.NotificationSettings_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "notificationSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * notificationSettingName **required** `string` (values: default): Default string modeled as parameter for URL to work correctly.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.

#### Output
* output [NotificationSetting](#notificationsetting)

### NotificationSettings_Update
Update notification settings for a resource.


```js
azure_workloadmonitor_microsoft_workloadmonitor.NotificationSettings_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "notificationSettingName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * notificationSettingName **required** `string` (values: default): Default string modeled as parameter for URL to work correctly.
  * api-version **required** `string` (values: 2018-08-31-preview): The API version to use for this operation.
  * body **required** [NotificationSetting](#notificationsetting)

#### Output
* output [NotificationSetting](#notificationsetting)



## Definitions

### Component
* Component `object`: Model for component.
  * etag `string`: For optimistic concurrency control.
  * properties [ComponentProperties](#componentproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ComponentProperties
* ComponentProperties `object`: Model for properties of a component.
  * aggregateProperties `object`: Properties requested in aggregation queries.
  * children `array`: component children.
    * items [Component](#component)
  * componentName `string`: Name of the component.
  * componentTypeGroupCategory `string`: Component type group category. Classification of component type groups into a logical category. e.g. Network, Disk, Memory, CPU.
  * componentTypeId `string`: ID of the component type.
  * componentTypeName `string`: Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc.
  * healthState `string` (values: Error, Warning, Success, Unknown, Uninitialized): Health state of the component.
  * healthStateCategory `string` (values: Identity, CustomGroup): Category of component's health state.
  * healthStateChangesEndTime `string`: End time for health state changes.
  * healthStateChangesStartTime `string`: Start time for health state changes.
  * lastHealthStateChangeTime `string`: Time of last health state change.
  * solutionId `string`: ID of the OMS solution this component belong to.
  * vmId `string`: ID of the VM this component belongs to.
  * vmName `string`: Name of the VM this component belongs to.
  * vmTags `object`: Tags on the VM this component belongs to.
  * workloadType `string` (values: BaseOS, SQL, IIS, Apache): Type of the workload.
  * workspaceId `string`: ID of the workspace.

### ComponentsCollection
* ComponentsCollection `object`: Model for collection of components.
  * nextLink `string`: URL to the next set of results.
  * value `array`: Collection of components.
    * items [Component](#component)

### ErrorFieldContract
* ErrorFieldContract `object`: Error field contract.
  * code `string`: Property level error code.
  * message `string`: Human-readable representation of property-level error.
  * target `string`: Property name.

### ErrorResponse
* ErrorResponse `object`: Error body contract.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * details `array`: The list of invalid fields send in request, in case of validation error.
    * items [ErrorFieldContract](#errorfieldcontract)
  * message `string`: Human-readable representation of the error.

### HealthStateChange
* HealthStateChange `object`: Model for health state change
  * healthState `string` (values: Error, Warning, Success, Unknown, Uninitialized): Health state of monitor instance.
  * healthStateChangeTime `string`: Time at which this Health state was reached.

### Monitor
* Monitor `object`: Model for Monitor
  * etag `string`: For optimistic concurrency control.
  * properties [MonitorProperties](#monitorproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### MonitorCriteria
* MonitorCriteria `object`: Criteria for monitor configuration
  * comparisonOperator `string` (values: Equals, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual, NotEquals): Comparison enum on threshold of this criteria
  * healthState `string` (values: Error, Warning, Success, Unknown, Uninitialized): Target health state of the criteria
  * threshold `number`: Threshold value for this criteria

### MonitorInstance
* MonitorInstance `object`: Model for monitor instance.
  * etag `string`: For optimistic concurrency control.
  * properties [MonitorInstanceProperties](#monitorinstanceproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### MonitorInstanceProperties
* MonitorInstanceProperties `object`: Model for properties of a monitor instance.
  * aggregateProperties `object`: Properties requested in aggregation queries.
  * alertGeneration `string` (values: Enabled, Disabled): Generates alert or not.
  * children `array`: Health instance children.
    * items [MonitorInstance](#monitorinstance)
  * componentId `string`: ID of the component.
  * componentName `string`: Name of the component.
  * componentTypeId `string`: ID of the component type.
  * componentTypeName `string`: Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc.
  * healthState `string` (values: Error, Warning, Success, Unknown, Uninitialized): Health state of monitor instance.
  * healthStateCategory `string` (values: Identity, CustomGroup): Category of monitor instance's health state.
  * healthStateChanges `array`: Health state changes.
    * items [HealthStateChange](#healthstatechange)
  * healthStateChangesEndTime `string`: End time for health state changes.
  * healthStateChangesStartTime `string`: Start time for health state changes.
  * lastHealthStateChangeTime `string`: Time of last health state change.
  * monitorCategory `string` (values: AvailabilityHealth, Configuration, EntityHealth, PerformanceHealth, Security): Monitor type category. Indicates the attribute of the component that the health criteria monitors such as Performance, Availability, etc.
  * monitorId `string`: ID of the monitor instance.
  * monitorName `string`: Name of the monitor.
  * monitorType `string` (values: Aggregate, Dependency, Unit): Type of the monitor. The qualifier for the health criteria depending on the functionality it performs such as Unit, Aggregate, Dependency.
  * solutionId `string`: ID of the OMS solution this health instance belong to.
  * workloadType `string` (values: BaseOS, SQL, IIS, Apache): Type of the workload.
  * workspaceId `string`: ID of the workspace.

### MonitorInstancesCollection
* MonitorInstancesCollection `object`: Model for collection of health instances.
  * nextLink `string`: URL to the next set of results.
  * value `array`: Collection of health instances.
    * items [MonitorInstance](#monitorinstance)

### MonitorProperties
* MonitorProperties `object`: Model for properties of a Monitor.
  * alertGeneration `string` (values: Enabled, Disabled): Generates alerts or not
  * componentTypeDisplayName `string`: Component Type Display Name of the monitor
  * componentTypeId `string`: Component Type Id of monitor
  * componentTypeName `string`: Component Type Name of monitor
  * criteria `array`: Collection of MonitorCriteria. For PATCH calls, instead of partial list, complete list of expected criteria should be passed for proper updating.
    * items [MonitorCriteria](#monitorcriteria)
  * description `string`: Description of the monitor
  * documentationURL `string`: URL pointing to the documentation of the monitor
  * frequency `integer`: Frequency at which monitor condition is evaluated
  * lookbackDuration `integer`: The duration in minutes in the past during which the monitor is evaluated
  * monitorCategory `string` (values: AvailabilityHealth, Configuration, EntityHealth, PerformanceHealth, Security): Category of the monitor
  * monitorDisplayName `string`: User friendly display name of the monitor
  * monitorId `string`: ID of the monitor
  * monitorName `string`: Name of the monitor
  * monitorState `string` (values: Enabled, Disabled): Is the monitor state enabled or disabled
  * monitorType `string` (values: Aggregate, Dependency, Unit): Type of the monitor
  * parentMonitorDisplayName `string`: User friendly display name of the parent monitor
  * parentMonitorName `string`: Name of the parent monitor
  * signalName `string`: Name of the signal on which this monitor is configured.
  * signalType `string`: Type of the signal on which this monitor is configured.

### MonitorsCollection
* MonitorsCollection `object`: Model for collection of Monitor.
  * nextLink `string`: URL for next set of results.
  * value `array`: Collection of Monitor.
    * items [Monitor](#monitor)

### NotificationSetting
* NotificationSetting `object`: Model for NotificationSetting.
  * etag `string`: For optimistic concurrency control.
  * properties [NotificationSettingProperties](#notificationsettingproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### NotificationSettingProperties
* NotificationSettingProperties `object`: Model for properties of a NotificationSetting.
  * actionGroupResourceIds `array`: List of action group resource ids to be notified
    * items `string`

### NotificationSettingsCollection
* NotificationSettingsCollection `object`: Model for collection of notificationSettings.
  * nextLink `string`: URL to the next set of results.
  * value `array`
    * items [NotificationSetting](#notificationsetting)

### Operation
* Operation `object`: Operation supported by the resource provider.
  * display [OperationProperties](#operationproperties)
  * name `string`: The name of the resource operation.
  * origin `string`: The origin of the operation.

### OperationListResult
* OperationListResult `object`: Container for a list of operations supported by the resource provider.
  * nextLink `string`: URL to the next set of results.
  * value `array`: List of operations.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Properties of an operation supported by the resource provider.
  * description `string`: The description of the resource provider.
  * operation `string`: This operation name.
  * provider `string`: The provider name.
  * resource `string`: The resource name.


