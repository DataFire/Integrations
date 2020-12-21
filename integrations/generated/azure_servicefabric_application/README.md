# @datafire/azure_servicefabric_application

Client library for ServiceFabricManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_servicefabric_application
```
```js
let azure_servicefabric_application = require('@datafire/azure_servicefabric_application').create({
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

Azure Service Fabric Resource Provider API Client

## Actions

### Operations_List
Get the list of available Service Fabric resource provider API operations.


```js
azure_servicefabric_application.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Service Fabric resource provider API

#### Output
* output [OperationListResult](#operationlistresult)

### ApplicationTypes_List
Gets all application type name resources created or in the process of being created in the Service Fabric cluster resource.


```js
azure_servicefabric_application.ApplicationTypes_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ApplicationTypeResourceList](#applicationtyperesourcelist)

### ApplicationTypes_Delete
Delete a Service Fabric application type name resource with the specified name.


```js
azure_servicefabric_application.ApplicationTypes_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
*Output schema unknown*

### ApplicationTypes_Get
Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.


```js
azure_servicefabric_application.ApplicationTypes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ApplicationTypeResource](#applicationtyperesource)

### ApplicationTypes_Create
Create or update a Service Fabric application type name resource with the specified name.


```js
azure_servicefabric_application.ApplicationTypes_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * parameters **required** [ApplicationTypeResource](#applicationtyperesource)

#### Output
* output [ApplicationTypeResource](#applicationtyperesource)

### ApplicationTypeVersions_List
Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.


```js
azure_servicefabric_application.ApplicationTypeVersions_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ApplicationTypeVersionResourceList](#applicationtypeversionresourcelist)

### ApplicationTypeVersions_Delete
Delete a Service Fabric application type version resource with the specified name.


```js
azure_servicefabric_application.ApplicationTypeVersions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * version **required** `string`: The application type version.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
*Output schema unknown*

### ApplicationTypeVersions_Get
Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.


```js
azure_servicefabric_application.ApplicationTypeVersions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * version **required** `string`: The application type version.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ApplicationTypeVersionResource](#applicationtypeversionresource)

### ApplicationTypeVersions_Create
Create or update a Service Fabric application type version resource with the specified name.


```js
azure_servicefabric_application.ApplicationTypeVersions_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "version": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationTypeName **required** `string`: The name of the application type name resource.
  * version **required** `string`: The application type version.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * parameters **required** [ApplicationTypeVersionResource](#applicationtypeversionresource)

#### Output
* output [ApplicationTypeVersionResource](#applicationtypeversionresource)

### Applications_List
Gets all application resources created or in the process of being created in the Service Fabric cluster resource.


```js
azure_servicefabric_application.Applications_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ApplicationResourceList](#applicationresourcelist)

### Applications_Delete
Delete a Service Fabric application resource with the specified name.


```js
azure_servicefabric_application.Applications_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
*Output schema unknown*

### Applications_Get
Get a Service Fabric application resource created or in the process of being created in the Service Fabric cluster resource.


```js
azure_servicefabric_application.Applications_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ApplicationResource](#applicationresource)

### Applications_Update
Update a Service Fabric application resource with the specified name.


```js
azure_servicefabric_application.Applications_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * parameters **required** [ApplicationResourceUpdate](#applicationresourceupdate)

#### Output
* output [ApplicationResource](#applicationresource)

### Applications_Create
Create or update a Service Fabric application resource with the specified name.


```js
azure_servicefabric_application.Applications_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * parameters **required** [ApplicationResource](#applicationresource)

#### Output
* output [ApplicationResource](#applicationresource)

### Services_List
Gets all service resources created or in the process of being created in the Service Fabric application resource.


```js
azure_servicefabric_application.Services_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ServiceResourceList](#serviceresourcelist)

### Services_Delete
Delete a Service Fabric service resource with the specified name.


```js
azure_servicefabric_application.Services_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
*Output schema unknown*

### Services_Get
Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.


```js
azure_servicefabric_application.Services_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.

#### Output
* output [ServiceResource](#serviceresource)

### Services_Update
Update a Service Fabric service resource with the specified name.


```js
azure_servicefabric_application.Services_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "serviceName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * parameters **required** [ServiceResourceUpdate](#serviceresourceupdate)

#### Output
* output [ServiceResource](#serviceresource)

### Services_Create
Create or update a Service Fabric service resource with the specified name.


```js
azure_servicefabric_application.Services_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "serviceName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * parameters **required** [ServiceResource](#serviceresource)

#### Output
* output [ServiceResource](#serviceresource)



## Definitions

### ApplicationMetricDescription
* ApplicationMetricDescription `object`: Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
  * maximumCapacity `integer`: The maximum node capacity for Service Fabric application.
  * name `string`: The name of the metric.
  * reservationCapacity `integer`: The node reservation capacity for Service Fabric application.
  * totalApplicationCapacity `integer`: The total metric capacity for Service Fabric application.

### ApplicationMetricDescriptionList
* ApplicationMetricDescriptionList `array`: List of application capacity metric description.
  * items [ApplicationMetricDescription](#applicationmetricdescription)

### ApplicationParameterList
* ApplicationParameterList `object`: List of application parameters with overridden values from their default values specified in the application manifest.

### ApplicationResource
* ApplicationResource `object`: The application resource.
  * properties [ApplicationResourceProperties](#applicationresourceproperties)
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ApplicationResourceList
* ApplicationResourceList `object`: The list of application resources.
  * nextLink `string`: URL to get the next set of application list results if there are any.
  * value `array`
    * items [ApplicationResource](#applicationresource)

### ApplicationResourceProperties
* ApplicationResourceProperties `object`: The application resource properties.
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response
  * typeName [ApplicationTypeName](#applicationtypename)
  * maximumNodes `integer`: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
  * metrics [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * minimumNodes `integer`: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
  * parameters [ApplicationParameterList](#applicationparameterlist)
  * removeApplicationCapacity `boolean`: Remove the current application capacity settings.
  * typeVersion [ApplicationTypeVersion](#applicationtypeversion)
  * upgradePolicy [ApplicationUpgradePolicy](#applicationupgradepolicy)

### ApplicationResourceUpdate
* ApplicationResourceUpdate `object`: The application resource for patch operations.
  * properties [ApplicationResourceUpdateProperties](#applicationresourceupdateproperties)
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ApplicationResourceUpdateProperties
* ApplicationResourceUpdateProperties `object`: The application resource properties for patch operations.
  * maximumNodes `integer`: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
  * metrics [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * minimumNodes `integer`: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
  * parameters [ApplicationParameterList](#applicationparameterlist)
  * removeApplicationCapacity `boolean`: Remove the current application capacity settings.
  * typeVersion [ApplicationTypeVersion](#applicationtypeversion)
  * upgradePolicy [ApplicationUpgradePolicy](#applicationupgradepolicy)

### ApplicationTypeName
* ApplicationTypeName `string`: The application type name as defined in the application manifest.

### ApplicationTypeParameterList
* ApplicationTypeParameterList `object`: List of application type parameters that can be overridden when creating or updating the application.

### ApplicationTypeResource
* ApplicationTypeResource `object`: The application type name resource
  * properties [ApplicationTypeResourceProperties](#applicationtyperesourceproperties)
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ApplicationTypeResourceList
* ApplicationTypeResourceList `object`: The list of application type names.
  * nextLink `string`: URL to get the next set of application type list results if there are any.
  * value `array`
    * items [ApplicationTypeResource](#applicationtyperesource)

### ApplicationTypeResourceProperties
* ApplicationTypeResourceProperties `object`: The application type name properties
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response.

### ApplicationTypeVersion
* ApplicationTypeVersion `string`: The version of the application type as defined in the application manifest.

### ApplicationTypeVersionResource
* ApplicationTypeVersionResource `object`: An application type version resource for the specified application type name resource.
  * properties [ApplicationTypeVersionResourceProperties](#applicationtypeversionresourceproperties)
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ApplicationTypeVersionResourceList
* ApplicationTypeVersionResourceList `object`: The list of application type version resources for the specified application type name resource.
  * nextLink `string`: URL to get the next set of application type version list results if there are any.
  * value `array`
    * items [ApplicationTypeVersionResource](#applicationtypeversionresource)

### ApplicationTypeVersionResourceProperties
* ApplicationTypeVersionResourceProperties `object`: The properties of the application type version resource.
  * appPackageUrl **required** `string`: The URL to the application package
  * defaultParameterList [ApplicationTypeParameterList](#applicationtypeparameterlist)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response

### ApplicationUpgradePolicy
* ApplicationUpgradePolicy `object`: Describes the policy for a monitored application upgrade.
  * applicationHealthPolicy [ArmApplicationHealthPolicy](#armapplicationhealthpolicy)
  * forceRestart [ForceRestart](#forcerestart)
  * rollingUpgradeMonitoringPolicy [ArmRollingUpgradeMonitoringPolicy](#armrollingupgrademonitoringpolicy)
  * upgradeReplicaSetCheckTimeout `string`: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).

### ArmApplicationHealthPolicy
* ArmApplicationHealthPolicy `object`: Defines a health policy used to evaluate the health of an application or one of its children entities.
  * considerWarningAsError `boolean`: Indicates whether warnings are treated with the same severity as errors.
  * defaultServiceTypeHealthPolicy [ArmServiceTypeHealthPolicy](#armservicetypehealthpolicy)
  * maxPercentUnhealthyDeployedApplications `integer`: The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
  * serviceTypeHealthPolicyMap [ArmServiceTypeHealthPolicyMap](#armservicetypehealthpolicymap)

### ArmRollingUpgradeMonitoringPolicy
* ArmRollingUpgradeMonitoringPolicy `object`: The policy used for monitoring the application upgrade
  * failureAction `string` (values: Rollback, Manual): The activation Mode of the service package
  * healthCheckRetryTimeout [HealthCheckRetryTimeout](#healthcheckretrytimeout)
  * healthCheckStableDuration [HealthCheckStableDuration](#healthcheckstableduration)
  * healthCheckWaitDuration [HealthCheckWaitDuration](#healthcheckwaitduration)
  * upgradeDomainTimeout [UpgradeDomainTimeout](#upgradedomaintimeout)
  * upgradeTimeout [UpgradeTimeout](#upgradetimeout)

### ArmServiceTypeHealthPolicy
* ArmServiceTypeHealthPolicy `object`: Represents the health policy used to evaluate the health of services belonging to a service type.
  * maxPercentUnhealthyPartitionsPerService `integer`: The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.
  * maxPercentUnhealthyReplicasPerPartition `integer`: The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.
  * maxPercentUnhealthyServices `integer`: The maximum percentage of services allowed to be unhealthy before your application is considered in error.

### ArmServiceTypeHealthPolicyMap
* ArmServiceTypeHealthPolicyMap `object`: Defines a ServiceTypeHealthPolicy per service type name.

### AvailableOperationDisplay
* AvailableOperationDisplay `object`: Operation supported by the Service Fabric resource provider
  * description `string`: Operation description
  * operation `string`: The operation that can be performed.
  * provider `string`: The name of the provider.
  * resource `string`: The resource on which the operation is performed

### CorrelationSchemeList
* CorrelationSchemeList `array`: A list that describes the correlation of the service with other services.
  * items [ServiceCorrelationDescription](#servicecorrelationdescription)

### ErrorModel
* ErrorModel `object`: The structure of the error.
  * error [ErrorModelError](#errormodelerror)

### ErrorModelError
* ErrorModelError `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.

### ForceRestart
* ForceRestart `boolean`: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).

### HealthCheckRetryTimeout
* HealthCheckRetryTimeout `string`: The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### HealthCheckStableDuration
* HealthCheckStableDuration `string`: The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### HealthCheckWaitDuration
* HealthCheckWaitDuration `string`: The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### MoveCost
* MoveCost `string` (values: Zero, Low, Medium, High): Specifies the move cost for the service.

### NamedPartitionSchemeDescription
* NamedPartitionSchemeDescription `object`: Describes the named partition scheme of the service.
  * Count **required** `integer`: The number of partitions.
  * Names **required** `array`: Array of size specified by the ‘Count’ parameter, for the names of the partitions.
    * items `string`
  * partitionScheme **required** [PartitionScheme](#partitionscheme)

### OperationListResult
* OperationListResult `object`: Describes the result of the request to list Service Fabric resource provider operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Service Fabric resource provider.
    * items [OperationResult](#operationresult)

### OperationResult
* OperationResult `object`: Available operation list result
  * display [AvailableOperationDisplay](#availableoperationdisplay)
  * name `string`: The name of the operation.
  * nextLink `string`: The URL to use for getting the next set of results.
  * origin `string`: Origin result

### PartitionScheme
* PartitionScheme `string` (values: Invalid, Singleton, UniformInt64Range, Named): Enumerates the ways that a service can be partitioned.

### PartitionSchemeDescription
* PartitionSchemeDescription `object`: Describes how the service is partitioned.
  * partitionScheme **required** [PartitionScheme](#partitionscheme)

### ProxyResource
* ProxyResource `object`: The resource model definition for proxy-only resource.
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ServiceCorrelationDescription
* ServiceCorrelationDescription `object`: Creates a particular correlation between services.
  * scheme **required** [ServiceCorrelationScheme](#servicecorrelationscheme)
  * serviceName **required** [ServiceName](#servicename)

### ServiceCorrelationScheme
* ServiceCorrelationScheme `string` (values: Invalid, Affinity, AlignedAffinity, NonAlignedAffinity): The service correlation scheme.

### ServiceKind
* ServiceKind `string` (values: Invalid, Stateless, Stateful): The kind of service (Stateless or Stateful).

### ServiceLoadMetricDescription
* ServiceLoadMetricDescription `object`: Specifies a metric to load balance a service during runtime.
  * defaultLoad `integer`: Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
  * name **required** `string`: The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
  * primaryDefaultLoad `integer`: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
  * secondaryDefaultLoad `integer`: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
  * weight [ServiceLoadMetricWeight](#serviceloadmetricweight)

### ServiceLoadMetricWeight
* ServiceLoadMetricWeight `string` (values: Zero, Low, Medium, High): Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight.

### ServiceLoadMetricsList
* ServiceLoadMetricsList `array`: The service load metrics is given as an array of ServiceLoadMetricDescription objects.
  * items [ServiceLoadMetricDescription](#serviceloadmetricdescription)

### ServiceName
* ServiceName `string`: The full name of the service with 'fabric:' URI scheme.

### ServicePlacementPoliciesList
* ServicePlacementPoliciesList `array`: A list that describes the correlation of the service with other services.
  * items [ServicePlacementPolicyDescription](#serviceplacementpolicydescription)

### ServicePlacementPolicyDescription
* ServicePlacementPolicyDescription `object`: Describes the policy to be used for placement of a Service Fabric service.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

### ServicePlacementPolicyType
* ServicePlacementPolicyType `string` (values: Invalid, InvalidDomain, RequiredDomain, PreferredPrimaryDomain, RequiredDomainDistribution, NonPartiallyPlaceService): The type of placement policy for a service fabric service. Following are the possible values.

### ServiceResource
* ServiceResource `object`: The service resource.
  * properties [ServiceResourceProperties](#serviceresourceproperties)
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ServiceResourceList
* ServiceResourceList `object`: The list of service resources.
  * nextLink `string`: URL to get the next set of service list results if there are any.
  * value `array`
    * items [ServiceResource](#serviceresource)

### ServiceResourceProperties
* ServiceResourceProperties `object`: The service resource properties.
  * partitionDescription [PartitionSchemeDescription](#partitionschemedescription)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response
  * serviceKind **required** [ServiceKind](#servicekind)
  * servicePackageActivationMode `string` (values: SharedProcess, ExclusiveProcess): The activation Mode of the service package
  * serviceTypeName `string`: The name of the service type
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### ServiceResourcePropertiesBase
* ServiceResourcePropertiesBase `object`: The common service resource properties.
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### ServiceResourceUpdate
* ServiceResourceUpdate `object`: The service resource for patch operations.
  * properties [ServiceResourceUpdateProperties](#serviceresourceupdateproperties)
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ServiceResourceUpdateProperties
* ServiceResourceUpdateProperties `object`: The service resource properties for patch operations.
  * serviceKind **required** [ServiceKind](#servicekind)
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### SingletonPartitionSchemeDescription
* SingletonPartitionSchemeDescription: Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
  * partitionScheme **required** [PartitionScheme](#partitionscheme)

### StatefulServiceProperties
* StatefulServiceProperties `object`: The properties of a stateful service resource.
  * hasPersistedState `boolean`: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
  * minReplicaSetSize `integer`: The minimum replica set size as a number.
  * quorumLossWaitDuration `string`: The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s).
  * replicaRestartWaitDuration `string`: The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s).
  * standByReplicaKeepDuration `string`: The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s).
  * targetReplicaSetSize `integer`: The target replica set size as a number.
  * partitionDescription [PartitionSchemeDescription](#partitionschemedescription)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response
  * serviceKind **required** [ServiceKind](#servicekind)
  * servicePackageActivationMode `string` (values: SharedProcess, ExclusiveProcess): The activation Mode of the service package
  * serviceTypeName `string`: The name of the service type
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StatefulServiceUpdateProperties
* StatefulServiceUpdateProperties `object`: The properties of a stateful service resource for patch operations.
  * minReplicaSetSize `integer`: The minimum replica set size as a number.
  * quorumLossWaitDuration `string`: The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s).
  * replicaRestartWaitDuration `string`: The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s).
  * standByReplicaKeepDuration `string`: The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s).
  * targetReplicaSetSize `integer`: The target replica set size as a number.
  * serviceKind **required** [ServiceKind](#servicekind)
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StatelessServiceProperties
* StatelessServiceProperties `object`: The properties of a stateless service resource.
  * instanceCount `integer`: The instance count.
  * partitionDescription [PartitionSchemeDescription](#partitionschemedescription)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response
  * serviceKind **required** [ServiceKind](#servicekind)
  * servicePackageActivationMode `string` (values: SharedProcess, ExclusiveProcess): The activation Mode of the service package
  * serviceTypeName `string`: The name of the service type
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StatelessServiceUpdateProperties
* StatelessServiceUpdateProperties `object`: The properties of a stateless service resource for patch operations.
  * instanceCount `integer`: The instance count.
  * serviceKind **required** [ServiceKind](#servicekind)
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### UniformInt64RangePartitionSchemeDescription
* UniformInt64RangePartitionSchemeDescription `object`: Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
  * Count **required** `integer`: The number of partitions.
  * HighKey **required** `string`: String indicating the upper bound of the partition key range that
  * LowKey **required** `string`: String indicating the lower bound of the partition key range that
  * partitionScheme **required** [PartitionScheme](#partitionscheme)

### UpgradeDomainTimeout
* UpgradeDomainTimeout `string`: The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### UpgradeTimeout
* UpgradeTimeout `string`: The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.


