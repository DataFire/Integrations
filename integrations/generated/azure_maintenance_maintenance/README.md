# @datafire/azure_maintenance_maintenance

Client library for MaintenanceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_maintenance_maintenance
```
```js
let azure_maintenance_maintenance = require('@datafire/azure_maintenance_maintenance').create({
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

Azure Maintenance Management Client

## Actions

### Operations_List
List the available operations supported by the Microsoft.Maintenance resource provider


```js
azure_maintenance_maintenance.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationsListResult](#operationslistresult)

### MaintenanceConfigurations_List
Get Configuration records within a subscription


```js
azure_maintenance_maintenance.MaintenanceConfigurations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ListMaintenanceConfigurationsResult](#listmaintenanceconfigurationsresult)

### MaintenanceConfigurations_Delete
Delete Configuration record


```js
azure_maintenance_maintenance.MaintenanceConfigurations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource Group Name
  * resourceName **required** `string`: Resource Identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [MaintenanceConfiguration](#maintenanceconfiguration)

### MaintenanceConfigurations_Get
Get Configuration record


```js
azure_maintenance_maintenance.MaintenanceConfigurations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource Group Name
  * resourceName **required** `string`: Resource Identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [MaintenanceConfiguration](#maintenanceconfiguration)

### MaintenanceConfigurations_Update
Patch configuration record


```js
azure_maintenance_maintenance.MaintenanceConfigurations_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "configuration": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource Group Name
  * resourceName **required** `string`: Resource Identifier
  * configuration **required** [MaintenanceConfiguration](#maintenanceconfiguration)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [MaintenanceConfiguration](#maintenanceconfiguration)

### MaintenanceConfigurations_CreateOrUpdate
Create or Update configuration record


```js
azure_maintenance_maintenance.MaintenanceConfigurations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "configuration": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource Group Name
  * resourceName **required** `string`: Resource Identifier
  * configuration **required** [MaintenanceConfiguration](#maintenanceconfiguration)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [MaintenanceConfiguration](#maintenanceconfiguration)

### ApplyUpdates_CreateOrUpdateParent
Apply maintenance updates to resource with parent


```js
azure_maintenance_maintenance.ApplyUpdates_CreateOrUpdateParent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceParentType": "",
  "resourceParentName": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceParentType **required** `string`: Resource parent type
  * resourceParentName **required** `string`: Resource parent identifier
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ApplyUpdate](#applyupdate)

### ApplyUpdates_GetParent
Track maintenance updates to resource with parent


```js
azure_maintenance_maintenance.ApplyUpdates_GetParent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceParentType": "",
  "resourceParentName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "applyUpdateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * resourceParentType **required** `string`: Resource parent type
  * resourceParentName **required** `string`: Resource parent identifier
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * applyUpdateName **required** `string`: applyUpdate Id
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ApplyUpdate](#applyupdate)

### ConfigurationAssignments_ListParent
List configurationAssignments for resource.


```js
azure_maintenance_maintenance.ConfigurationAssignments_ListParent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceParentType": "",
  "resourceParentName": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceParentType **required** `string`: Resource parent type
  * resourceParentName **required** `string`: Resource parent identifier
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ListConfigurationAssignmentsResult](#listconfigurationassignmentsresult)

### ConfigurationAssignments_DeleteParent
Unregister configuration for resource.


```js
azure_maintenance_maintenance.ConfigurationAssignments_DeleteParent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceParentType": "",
  "resourceParentName": "",
  "resourceType": "",
  "resourceName": "",
  "configurationAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceParentType **required** `string`: Resource parent type
  * resourceParentName **required** `string`: Resource parent identifier
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * configurationAssignmentName **required** `string`: Unique configuration assignment name
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ConfigurationAssignment](#configurationassignment)

### ConfigurationAssignments_CreateOrUpdateParent
Register configuration for resource.


```js
azure_maintenance_maintenance.ConfigurationAssignments_CreateOrUpdateParent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceParentType": "",
  "resourceParentName": "",
  "resourceType": "",
  "resourceName": "",
  "configurationAssignmentName": "",
  "configurationAssignment": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceParentType **required** `string`: Resource parent type
  * resourceParentName **required** `string`: Resource parent identifier
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * configurationAssignmentName **required** `string`: Configuration assignment name
  * configurationAssignment **required** [ConfigurationAssignment](#configurationassignment)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ConfigurationAssignment](#configurationassignment)

### Updates_ListParent
Get updates to resources.


```js
azure_maintenance_maintenance.Updates_ListParent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceParentType": "",
  "resourceParentName": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceParentType **required** `string`: Resource parent type
  * resourceParentName **required** `string`: Resource parent identifier
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ListUpdatesResult](#listupdatesresult)

### ApplyUpdates_CreateOrUpdate
Apply maintenance updates to resource


```js
azure_maintenance_maintenance.ApplyUpdates_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ApplyUpdate](#applyupdate)

### ApplyUpdates_Get
Track maintenance updates to resource


```js
azure_maintenance_maintenance.ApplyUpdates_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "applyUpdateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * applyUpdateName **required** `string`: applyUpdate Id
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ApplyUpdate](#applyupdate)

### ConfigurationAssignments_List
List configurationAssignments for resource.


```js
azure_maintenance_maintenance.ConfigurationAssignments_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ListConfigurationAssignmentsResult](#listconfigurationassignmentsresult)

### ConfigurationAssignments_Delete
Unregister configuration for resource.


```js
azure_maintenance_maintenance.ConfigurationAssignments_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "configurationAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * configurationAssignmentName **required** `string`: Unique configuration assignment name
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ConfigurationAssignment](#configurationassignment)

### ConfigurationAssignments_CreateOrUpdate
Register configuration for resource.


```js
azure_maintenance_maintenance.ConfigurationAssignments_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "configurationAssignmentName": "",
  "configurationAssignment": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * configurationAssignmentName **required** `string`: Configuration assignment name
  * configurationAssignment **required** [ConfigurationAssignment](#configurationassignment)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ConfigurationAssignment](#configurationassignment)

### Updates_List
Get updates to resources.


```js
azure_maintenance_maintenance.Updates_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name
  * providerName **required** `string`: Resource provider name
  * resourceType **required** `string`: Resource type
  * resourceName **required** `string`: Resource identifier
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ListUpdatesResult](#listupdatesresult)



## Definitions

### ApplyUpdate
* ApplyUpdate `object`: Apply Update request
  * properties [ApplyUpdateProperties](#applyupdateproperties)
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### ApplyUpdateProperties
* ApplyUpdateProperties `object`: Properties for apply update
  * lastUpdateTime `string`: Last Update time
  * resourceId `string`: The resourceId
  * status `string` (values: Pending, InProgress, Completed, RetryNow, RetryLater): The status

### ConfigurationAssignment
* ConfigurationAssignment `object`: Configuration Assignment
  * location `string`: Location of the resource
  * properties [ConfigurationAssignmentProperties](#configurationassignmentproperties)
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### ConfigurationAssignmentProperties
* ConfigurationAssignmentProperties `object`: Properties for configuration assignment
  * maintenanceConfigurationId `string`: The maintenance configuration Id
  * resourceId `string`: The unique resourceId

### ErrorDetails
* ErrorDetails `object`: An error response details received from the Azure Maintenance service.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * message `string`: Human-readable representation of the error.

### ListConfigurationAssignmentsResult
* ListConfigurationAssignmentsResult `object`: Response for ConfigurationAssignments list
  * value `array`: The list of configuration Assignments
    * items [ConfigurationAssignment](#configurationassignment)

### ListMaintenanceConfigurationsResult
* ListMaintenanceConfigurationsResult `object`: Response for MaintenanceConfigurations list
  * value `array`: The list of maintenance Configurations
    * items [MaintenanceConfiguration](#maintenanceconfiguration)

### ListUpdatesResult
* ListUpdatesResult `object`: Response for Updates list
  * value `array`: The pending updates
    * items [Update](#update)

### MaintenanceConfiguration
* MaintenanceConfiguration `object`: Maintenance configuration record type
  * location `string`: Gets or sets location of the resource
  * properties [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties)
  * tags `object`: Gets or sets tags of the resource
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### MaintenanceConfigurationProperties
* MaintenanceConfigurationProperties `object`: Properties for maintenance configuration
  * extensionProperties `object`: Gets or sets extensionProperties of the maintenanceConfiguration
  * maintenanceScope `string` (values: All, Host, Resource, InResource): Gets or sets maintenanceScope of the configuration
  * namespace `string`: Gets or sets namespace of the resource

### MaintenanceError
* MaintenanceError `object`: An error response received from the Azure Maintenance service.
  * error [ErrorDetails](#errordetails)

### Operation
* Operation `object`: Represents an operation returned by the GetOperations request
  * display [OperationInfo](#operationinfo)
  * name `string`: Name of the operation
  * origin `string`: Origin of the operation
  * properties `object`: Properties of the operation

### OperationInfo
* OperationInfo `object`: Information about an operation
  * description `string`: Description of the operation
  * operation `string`: Name of the operation
  * provider `string`: Name of the provider
  * resource `string`: Name of the resource type

### OperationsListResult
* OperationsListResult `object`: Result of the List Operations operation
  * value `array`: A collection of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Definition of a Resource
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### Update
* Update `object`: Maintenance update on a resource
  * impactDurationInSec `integer`: Duration of impact in seconds
  * impactType `string` (values: None, Freeze, Restart, Redeploy): The impact type
  * maintenanceScope `string` (values: All, Host, Resource, InResource): The impact area
  * notBefore `string`: Time when Azure will start force updates if not self-updated by customer before this time
  * properties [UpdateProperties](#updateproperties)
  * status `string` (values: Pending, InProgress, Completed, RetryNow, RetryLater): The status

### UpdateProperties
* UpdateProperties `object`: Properties for update
  * resourceId `string`: The resourceId


