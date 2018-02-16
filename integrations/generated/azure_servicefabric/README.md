# @datafire/azure_servicefabric

Client library for ServiceFabricManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_servicefabric
```
```js
let azure_servicefabric = require('@datafire/azure_servicefabric').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_servicefabric.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Service Fabric Resource Provider API Client

## Actions

### Operations_List
Lists all of the available ServiceFabric Resource Manager REST API operations.


```js
azure_servicefabric.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api

#### Output
* output [OperationListResult](#operationlistresult)

### Clusters_List
List cluster resource



```js
azure_servicefabric.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterListResult](#clusterlistresult)

### ClusterVersions_List
List cluster code versions by location



```js
azure_servicefabric.ClusterVersions_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions, this is different from cluster location
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### ClusterVersions_Get
Get cluster code versions by location



```js
azure_servicefabric.ClusterVersions_Get({
  "location": "",
  "api-version": "",
  "subscriptionId": "",
  "clusterVersion": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions, this is different from cluster location
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier
  * clusterVersion **required** `string`: The cluster code version

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### ClusterVersions_ListByEnvironment
List cluster code versions by environment



```js
azure_servicefabric.ClusterVersions_ListByEnvironment({
  "location": "",
  "environment": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions, this is different from cluster location
  * environment **required** `string` (values: Windows, Linux): Cluster operating system, the default means all
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### ClusterVersions_GetByEnvironment
Get cluster code versions by environment



```js
azure_servicefabric.ClusterVersions_GetByEnvironment({
  "location": "",
  "environment": "",
  "api-version": "",
  "subscriptionId": "",
  "clusterVersion": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions, this is different from cluster location
  * environment **required** `string` (values: Windows, Linux): Cluster operating system, the default means all
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier
  * clusterVersion **required** `string`: The cluster code version

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### Clusters_Delete
Delete cluster resource



```js
azure_servicefabric.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
*Output schema unknown*

### Clusters_Get
Get cluster resource



```js
azure_servicefabric.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Update cluster configuration



```js
azure_servicefabric.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier
  * parameters **required** [ClusterUpdateParameters](#clusterupdateparameters)

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Create cluster resource



```js
azure_servicefabric.Clusters_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier
  * parameters **required** [Cluster](#cluster)

#### Output
* output [Cluster](#cluster)

### ApplicationType_List
Returns all application type names in the specified cluster.


```js
azure_servicefabric.ApplicationType_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the API.

#### Output
* output [ApplicationTypeResourceList](#applicationtyperesourcelist)

### ApplicationType_Delete
Deletes the application type name resource.


```js
azure_servicefabric.ApplicationType_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### ApplicationType_Get
Returns an application type name resource.


```js
azure_servicefabric.ApplicationType_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * api-version **required** `string`: The version of the API.

#### Output
* output [ApplicationTypeResource](#applicationtyperesource)

### ApplicationType_Put
Creates the application type name resource.


```js
azure_servicefabric.ApplicationType_Put({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * api-version **required** `string`: The version of the API.
  * parameters **required** [ApplicationTypeResource](#applicationtyperesource)

#### Output
* output [ApplicationTypeResource](#applicationtyperesource)

### Version_List
Returns all versions for the specified application type.


```js
azure_servicefabric.Version_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * api-version **required** `string`: The version of the API.

#### Output
* output [VersionResourceList](#versionresourcelist)

### Version_Delete
Unprovisions an application type version resource.


```js
azure_servicefabric.Version_Delete({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * version **required** `string`: The application type version.
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### Version_Get
Returns an application type version resource.


```js
azure_servicefabric.Version_Get({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * version **required** `string`: The application type version.
  * api-version **required** `string`: The version of the API.

#### Output
* output [VersionResource](#versionresource)

### Version_Put
Provisions an application type version resource.


```js
azure_servicefabric.Version_Put({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationTypeName **required** `string`: The name of the application type name resource
  * version **required** `string`: The application type version.
  * api-version **required** `string`: The version of the API.
  * parameters **required** [VersionResource](#versionresource)

#### Output
* output [VersionResource](#versionresource)

### Application_List
Returns all application resources in the specified cluster.


```js
azure_servicefabric.Application_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the API.

#### Output
* output [ApplicationResourceList](#applicationresourcelist)

### Application_Delete
Deletes an application resource with the specified name.


```js
azure_servicefabric.Application_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### Application_Get
Returns an application resource with the specified name.


```js
azure_servicefabric.Application_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string`: The version of the API.

#### Output
* output [ApplicationResource](#applicationresource)

### Application_Patch
Updates an application resource with the specified name.


```js
azure_servicefabric.Application_Patch({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string`: The version of the API.
  * parameters **required** [ApplicationResourceUpdate](#applicationresourceupdate)

#### Output
* output [ApplicationResourceUpdate](#applicationresourceupdate)

### Application_Put
Creates or updates an application resource with the specified name.


```js
azure_servicefabric.Application_Put({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string`: The version of the API.
  * parameters **required** [ApplicationResource](#applicationresource)

#### Output
* output [ApplicationResource](#applicationresource)

### Service_List
Returns all service resources in the specified application.


```js
azure_servicefabric.Service_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "applicationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * api-version **required** `string`: The version of the API.

#### Output
* output [ServiceResourceList](#serviceresourcelist)

### Service_Delete
Deletes a service resource with the specified name.


```js
azure_servicefabric.Service_Delete({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### Service_Get
Returns a service resource with the specified name.


```js
azure_servicefabric.Service_Get({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string`: The version of the API.

#### Output
* output [ServiceResource](#serviceresource)

### Service_Patch
Updates a service resource with the specified name.


```js
azure_servicefabric.Service_Patch({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string`: The version of the API.
  * parameters **required** [ServiceResourceUpdate](#serviceresourceupdate)

#### Output
* output [ServiceResourceUpdate](#serviceresourceupdate)

### Service_Put
Creates or updates a service resource with the specified name.


```js
azure_servicefabric.Service_Put({
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
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource
  * applicationName **required** `string`: The name of the application resource.
  * serviceName **required** `string`: The name of the service resource in the format of {applicationName}~{serviceName}.
  * api-version **required** `string`: The version of the API.
  * parameters **required** [ServiceResource](#serviceresource)

#### Output
* output [ServiceResource](#serviceresource)

### Clusters_ListByResourceGroup
List cluster resource by resource group



```js
azure_servicefabric.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterListResult](#clusterlistresult)



## Definitions

### AddOnFeatures
* AddOnFeatures `string` (values: RepairManager, DnsService, BackupRestoreService): Available cluster add-on features

### ApplicationHealthPolicy
* ApplicationHealthPolicy `object`: Defines a health policy used to evaluate the health of an application or one of its children entities.
  * ConsiderWarningAsError `boolean`: Indicates whether warnings are treated with the same severity as errors.
  * DefaultServiceTypeHealthPolicy [ServiceTypeHealthPolicy](#servicetypehealthpolicy)
  * MaxPercentUnhealthyDeployedApplications `integer`: The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
  * ServiceTypeHealthPolicyMap [ServiceTypeHealthPolicyMap](#servicetypehealthpolicymap)

### ApplicationMetricDescription
* ApplicationMetricDescription `object`: Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
  * MaximumCapacity `integer`: The maximum node capacity for Service Fabric application.
  * Name `string`: The name of the metric.
  * ReservationCapacity `integer`: The node reservation capacity for Service Fabric application.
  * TotalApplicationCapacity `integer`: The total metric capacity for Service Fabric application.

### ApplicationMetricDescriptionList
* ApplicationMetricDescriptionList `array`: List of application capacity metric description.
  * items [ApplicationMetricDescription](#applicationmetricdescription)

### ApplicationParameter
* ApplicationParameter `object`: Describes an application parameter override to be applied when creating or upgrading an application.
  * Key **required** `string`: The name of the parameter.
  * Value **required** `string`: The value of the parameter.

### ApplicationParameterList
* ApplicationParameterList `array`: List of application parameters with overridden values from their default values specified in the application manifest.
  * items [ApplicationParameter](#applicationparameter)

### ApplicationProperties
* ApplicationProperties `object`: The application resource properties.
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response
  * typeName [ApplicationTypeName](#applicationtypename)
  * maximumNodes `integer`: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
  * metrics [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * minimumNodes `integer`: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
  * parameters [ApplicationParameterList](#applicationparameterlist)
  * removeApplicationCapacity `boolean`: The version of the application type
  * typeVersion [ApplicationTypeVersion](#applicationtypeversion)
  * upgradePolicy [ApplicationUpgradePolicy](#applicationupgradepolicy)

### ApplicationResource
* ApplicationResource `object`: The application resource.
  * properties [ApplicationProperties](#applicationproperties)
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### ApplicationResourceList
* ApplicationResourceList `object`: The list of application resources.
  * value `array`
    * items [ApplicationResource](#applicationresource)

### ApplicationResourceUpdate
* ApplicationResourceUpdate `object`: The application resource for patch operations.
  * properties [ApplicationUpdateProperties](#applicationupdateproperties)
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### ApplicationTypeName
* ApplicationTypeName `string`: The application type name as defined in the application manifest.

### ApplicationTypeParameterList
* ApplicationTypeParameterList `array`: List of application type parameters that can be overridden when creating or updating the application.
  * items [ApplicationParameter](#applicationparameter)

### ApplicationTypeProperties
* ApplicationTypeProperties `object`: The application type name properties
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response.

### ApplicationTypeResource
* ApplicationTypeResource `object`: The application type name resource
  * properties [ApplicationTypeProperties](#applicationtypeproperties)
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### ApplicationTypeResourceList
* ApplicationTypeResourceList `object`: The list of application type names.
  * value `array`
    * items [ApplicationTypeResource](#applicationtyperesource)

### ApplicationTypeVersion
* ApplicationTypeVersion `string`: The version of the application type as defined in the application manifest.

### ApplicationUpdateProperties
* ApplicationUpdateProperties `object`: The application resource properties for patch operations.
  * maximumNodes `integer`: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
  * metrics [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * minimumNodes `integer`: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
  * parameters [ApplicationParameterList](#applicationparameterlist)
  * removeApplicationCapacity `boolean`: The version of the application type
  * typeVersion [ApplicationTypeVersion](#applicationtypeversion)
  * upgradePolicy [ApplicationUpgradePolicy](#applicationupgradepolicy)

### ApplicationUpgradePolicy
* ApplicationUpgradePolicy `object`: Describes the policy for a monitored application upgrade.
  * applicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * forceRestart [ForceRestart](#forcerestart)
  * rollingUpgradeMonitoringPolicy [RollingUpgradeMonitoringPolicy](#rollingupgrademonitoringpolicy)
  * upgradeReplicaSetCheckTimeout [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### AvailableOperationDisplay
* AvailableOperationDisplay `object`: Operation supported by Service Fabric resource provider
  * description `string`: Operation description
  * operation `string`: The operation that can be performed.
  * provider `string`: The name of the provider.
  * resource `string`: The resource on which the operation is performed

### AzureActiveDirectory
* AzureActiveDirectory `object`: The settings to enable AAD authentication on the cluster.
  * clientApplication `string`: Azure active directory client application id.
  * clusterApplication `string`: Azure active directory cluster application id.
  * tenantId `string`: Azure active directory tenant id.

### CertificateDescription
* CertificateDescription `object`: Describes the certificate details.
  * thumbprint **required** `string`: Thumbprint of the primary certificate.
  * thumbprintSecondary `string`: Thumbprint of the secondary certificate.
  * x509StoreName `string` (values: AddressBook, AuthRoot, CertificateAuthority, Disallowed, My, Root, TrustedPeople, TrustedPublisher): The local certificate store location.

### ClientCertificateCommonName
* ClientCertificateCommonName `object`: Describes the client certificate details using common name.
  * certificateCommonName **required** `string`: The common name of the client certificate.
  * certificateIssuerThumbprint **required** `string`: The issuer thumbprint of the client certificate.
  * isAdmin **required** `boolean`: Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.

### ClientCertificateThumbprint
* ClientCertificateThumbprint `object`: Describes the client certificate details using thumbprint.
  * certificateThumbprint **required** `string`: The thumbprint of the client certificate.
  * isAdmin **required** `boolean`: Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.

### Cluster
* Cluster `object`: The cluster resource
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * tags `object`: Resource tags.
  * type `string`: Azure resource type.
  * properties [ClusterProperties](#clusterproperties)

### ClusterCodeVersionsListResult
* ClusterCodeVersionsListResult `object`: The list results of the ServiceFabric runtime versions.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`
    * items [ClusterCodeVersionsResult](#clustercodeversionsresult)

### ClusterCodeVersionsResult
* ClusterCodeVersionsResult `object`: The result of the ServiceFabric runtime versions
  * id `string`: The identification of the result
  * name `string`: The name of the result
  * properties [ClusterVersionDetails](#clusterversiondetails)
  * type `string`: The result resource type

### ClusterEnvironment
* ClusterEnvironment `string` (values: Windows, Linux): Cluster operating system, the default will be Windows

### ClusterHealthPolicy
* ClusterHealthPolicy `object`: Defines a health policy used to evaluate the health of the cluster or of a cluster node.
  * maxPercentUnhealthyApplications `integer`: The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10. 
  * maxPercentUnhealthyNodes `integer`: The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10. 

### ClusterListResult
* ClusterListResult `object`: Cluster list results
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`
    * items [Cluster](#cluster)

### ClusterProperties
* ClusterProperties `object`: Describes the cluster resource properties.
  * addOnFeatures `array`: The list of add-on features to enable in the cluster.
    * items [AddOnFeatures](#addonfeatures)
  * availableClusterVersions `array`: The Service Fabric runtime versions available for this cluster.
    * items [ClusterVersionDetails](#clusterversiondetails)
  * azureActiveDirectory [AzureActiveDirectory](#azureactivedirectory)
  * certificate [CertificateDescription](#certificatedescription)
  * clientCertificateCommonNames `array`: The list of client certificates referenced by common name that are allowed to manage the cluster.
    * items [ClientCertificateCommonName](#clientcertificatecommonname)
  * clientCertificateThumbprints `array`: The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
    * items [ClientCertificateThumbprint](#clientcertificatethumbprint)
  * clusterCodeVersion `string`: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
  * clusterEndpoint `string`: The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint.
  * clusterId `string`: A service generated unique identifier for the cluster resource.
  * clusterState [ClusterState](#clusterstate)
  * diagnosticsStorageAccountConfig [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig)
  * fabricSettings `array`: The list of custom fabric settings to configure the cluster.
    * items [SettingsSectionDescription](#settingssectiondescription)
  * managementEndpoint **required** `string`: The http management endpoint of the cluster.
  * nodeTypes **required** `array`: The list of node types in the cluster.
    * items [NodeTypeDescription](#nodetypedescription)
  * provisioningState `string` (values: Updating, Succeeded, Failed, Canceled): The provisioning state of the cluster resource.
  * reliabilityLevel [ReliabilityLevel](#reliabilitylevel)
  * reverseProxyCertificate [CertificateDescription](#certificatedescription)
  * upgradeDescription [ClusterUpgradePolicy](#clusterupgradepolicy)
  * upgradeMode [UpgradeMode](#upgrademode)
  * vmImage `string`: The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.

### ClusterPropertiesUpdateParameters
* ClusterPropertiesUpdateParameters `object`: Describes the cluster resource properties that can be updated during PATCH operation.
  * addOnFeatures `array`: The list of add-on features to enable in the cluster.
    * items [AddOnFeatures](#addonfeatures)
  * certificate [CertificateDescription](#certificatedescription)
  * clientCertificateCommonNames `array`: The list of client certificates referenced by common name that are allowed to manage the cluster. This will overwrite the existing list.
    * items [ClientCertificateCommonName](#clientcertificatecommonname)
  * clientCertificateThumbprints `array`: The list of client certificates referenced by thumbprint that are allowed to manage the cluster. This will overwrite the existing list.
    * items [ClientCertificateThumbprint](#clientcertificatethumbprint)
  * clusterCodeVersion `string`: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
  * fabricSettings `array`: The list of custom fabric settings to configure the cluster. This will overwrite the existing list.
    * items [SettingsSectionDescription](#settingssectiondescription)
  * nodeTypes `array`: The list of node types in the cluster. This will overwrite the existing list.
    * items [NodeTypeDescription](#nodetypedescription)
  * reliabilityLevel `string` (values: Bronze, Silver, Gold): The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-capacity).
  * reverseProxyCertificate [CertificateDescription](#certificatedescription)
  * upgradeDescription [ClusterUpgradePolicy](#clusterupgradepolicy)
  * upgradeMode `string` (values: Automatic, Manual): The upgrade mode of the cluster. This indicates if the cluster should be automatically upgraded when new Service Fabric runtime version is available.

### ClusterState
* ClusterState `string` (values: WaitingForNodes, Deploying, BaselineUpgrade, UpdatingUserConfiguration, UpdatingUserCertificate, UpdatingInfrastructure, EnforcingClusterVersion, UpgradeServiceUnreachable, AutoScale, Ready): The current state of the cluster.

### ClusterUpdateParameters
* ClusterUpdateParameters `object`: Cluster update request
  * properties [ClusterPropertiesUpdateParameters](#clusterpropertiesupdateparameters)
  * tags `object`: Cluster update parameters

### ClusterUpgradeDeltaHealthPolicy
* ClusterUpgradeDeltaHealthPolicy `object`: Describes the delta health policies for the cluster upgrade.
  * maxPercentDeltaUnhealthyApplications **required** `integer`: The maximum allowed percentage of applications health degradation allowed during cluster upgrades. The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
  * maxPercentDeltaUnhealthyNodes **required** `integer`: The maximum allowed percentage of nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
  * maxPercentUpgradeDomainDeltaUnhealthyNodes **required** `integer`: The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits. 

### ClusterUpgradePolicy
* ClusterUpgradePolicy `object`: Describes the policy used when upgrading the cluster.
  * deltaHealthPolicy [ClusterUpgradeDeltaHealthPolicy](#clusterupgradedeltahealthpolicy)
  * forceRestart `boolean`: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
  * healthCheckRetryTimeout **required** `string`: The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * healthCheckStableDuration **required** `string`: The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * healthCheckWaitDuration **required** `string`: The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * healthPolicy **required** [ClusterHealthPolicy](#clusterhealthpolicy)
  * upgradeDomainTimeout **required** `string`: The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * upgradeReplicaSetCheckTimeout **required** `string`: The maximum amount of time to block processing of an upgrade domain and revent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * upgradeTimeout **required** `string`: The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.

### ClusterVersionDetails
* ClusterVersionDetails `object`: The detail of the Service Fabric runtime version result
  * codeVersion `string`: The Service Fabric runtime version of the cluster.
  * environment [ClusterEnvironment](#clusterenvironment)
  * supportExpiryUtc `string`: The date of expiry of support of the version.

### CorrelationSchemeList
* CorrelationSchemeList `array`: A list that describes the correlation of the service with other services.
  * items [ServiceCorrelationDescription](#servicecorrelationdescription)

### DiagnosticsStorageAccountConfig
* DiagnosticsStorageAccountConfig `object`: The storage account information for storing Service Fabric diagnostic logs.
  * blobEndpoint **required** `string`: The blob endpoint of the azure storage account.
  * protectedAccountKeyName **required** `string`: The protected diagnostics storage key name.
  * queueEndpoint **required** `string`: The queue endpoint of the azure storage account.
  * storageAccountName **required** `string`: The Azure storage account name.
  * tableEndpoint **required** `string`: The table endpoint of the azure storage account.

### DurabilityLevel
* DurabilityLevel `string` (values: Bronze, Silver, Gold): The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-capacity).

### EndpointRangeDescription
* EndpointRangeDescription `object`: Port range details
  * endPort **required** `integer`: End port of a range of ports
  * startPort **required** `integer`: Starting port of a range of ports

### ErrorModel
* ErrorModel `object`: The error details.
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
* MoveCost `string` (values: Zero, Low, Medium, High): Specifies the move cost for the service. Possible values are the following.

### NamedPartitionSchemeDescription
* NamedPartitionSchemeDescription `object`: Describes the named partition scheme of the service.
  * Count **required** `integer`: The number of partitions.
  * Names **required** `array`: Array of size specified by the ‘Count’ parameter, for the names of the partitions.
    * items `string`
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### NodeTypeDescription
* NodeTypeDescription `object`: Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
  * applicationPorts [EndpointRangeDescription](#endpointrangedescription)
  * capacities `object`: The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
  * clientConnectionEndpointPort **required** `integer`: The TCP cluster management endpoint port.
  * durabilityLevel [DurabilityLevel](#durabilitylevel)
  * ephemeralPorts [EndpointRangeDescription](#endpointrangedescription)
  * httpGatewayEndpointPort **required** `integer`: The HTTP cluster management endpoint port.
  * isPrimary **required** `boolean`: The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
  * name **required** `string`: The name of the node type.
  * placementProperties `object`: The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
  * reverseProxyEndpointPort `integer`: The endpoint used by reverse proxy.
  * vmInstanceCount **required** `integer`: The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.

### OperationListResult
* OperationListResult `object`: Describes the result of the request to list Service Fabric operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Service Fabric operations supported by the Microsoft.ServiceFabric resource provider.
    * items [OperationResult](#operationresult)

### OperationResult
* OperationResult `object`: Available operation list result
  * display [AvailableOperationDisplay](#availableoperationdisplay)
  * name `string`: The name of the operation.
  * nextLink `string`: The URL to use for getting the next set of results.
  * origin `string`: Origin result

### PartitionScheme
* PartitionScheme `string` (values: Invalid, Singleton, UniformInt64Range, Named): Enumerates the ways that a service can be partitioned. Possible values are:

### PartitionSchemeDescription
* PartitionSchemeDescription `object`: Describes how the service is partitioned.
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### ProxyResource
* ProxyResource `object`: The resource model definition for proxy-only resource.
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### ReliabilityLevel
* ReliabilityLevel `string` (values: None, Bronze, Silver, Gold, Platinum): The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-capacity).

### Resource
* Resource `object`: The resource model definition.
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * tags `object`: Resource tags.
  * type `string`: Azure resource type.

### RollingUpgradeMonitoringPolicy
* RollingUpgradeMonitoringPolicy `object`: The policy used for monitoring the application upgrade
  * healthCheckRetryTimeout [HealthCheckRetryTimeout](#healthcheckretrytimeout)
  * healthCheckStableDuration [HealthCheckStableDuration](#healthcheckstableduration)
  * healthCheckWaitDuration [HealthCheckWaitDuration](#healthcheckwaitduration)
  * upgradeDomainTimeout [UpgradeDomainTimeout](#upgradedomaintimeout)
  * upgradeTimeout [UpgradeTimeout](#upgradetimeout)

### ServiceCorrelationDescription
* ServiceCorrelationDescription `object`: Creates a particular correlation between services.
  * Scheme **required** [ServiceCorrelationScheme](#servicecorrelationscheme)
  * ServiceName **required** [ServiceName](#servicename)

### ServiceCorrelationScheme
* ServiceCorrelationScheme `string` (values: Invalid, Affinity, AlignedAffinity, NonAlignedAffinity): The service correlation scheme. Possible values are following.

### ServiceKind
* ServiceKind `string` (values: Invalid, Stateless, Stateful): The kind of service (Stateless or Stateful). Following are the possible values.

### ServiceLoadMetricDescription
* ServiceLoadMetricDescription `object`: Specifies a metric to load balance a service during runtime.
  * DefaultLoad `integer`: Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
  * Name **required** `string`: The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
  * PrimaryDefaultLoad `integer`: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
  * SecondaryDefaultLoad `integer`: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
  * Weight [ServiceLoadMetricWeight](#serviceloadmetricweight)

### ServiceLoadMetricWeight
* ServiceLoadMetricWeight `string` (values: Zero, Low, Medium, High): Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight. Possible values are following.

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

### ServiceProperties
* ServiceProperties `object`: The service resource properties.
  * partitionDescription [PartitionSchemeDescription](#partitionschemedescription)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response
  * serviceKind **required** [ServiceKind](#servicekind)
  * serviceTypeName `string`: The name of the service type
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### ServicePropertiesBase
* ServicePropertiesBase `object`: The common service resource properties.
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### ServiceResource
* ServiceResource `object`: The service resource.
  * properties [ServiceProperties](#serviceproperties)
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### ServiceResourceList
* ServiceResourceList `object`: The list of service resources.
  * value `array`
    * items [ServiceResource](#serviceresource)

### ServiceResourceUpdate
* ServiceResourceUpdate `object`: The service resource for patch operations.
  * properties [ServiceUpdateProperties](#serviceupdateproperties)
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### ServiceTypeDeltaHealthPolicy
* ServiceTypeDeltaHealthPolicy `object`: Service health policy
  * maxPercentDeltaUnhealthyServices `integer`: Maximum percentage of unhealthy services in cluster

### ServiceTypeHealthPolicy
* ServiceTypeHealthPolicy `object`: Represents the health policy used to evaluate the health of services belonging to a service type.
  * MaxPercentUnhealthyPartitionsPerService `integer`: The maximum allowed percentage of unhealthy partitions per service. Allowed values are Byte values from zero to 100
  * MaxPercentUnhealthyReplicasPerPartition `integer`: The maximum allowed percentage of unhealthy replicas per partition. Allowed values are Byte values from zero to 100.
  * MaxPercentUnhealthyServices `integer`: The maximum maximum allowed percentage of unhealthy services. Allowed values are Byte values from zero to 100.

### ServiceTypeHealthPolicyMap
* ServiceTypeHealthPolicyMap `array`: Defines a ServiceTypeHealthPolicy per service type name.
  * items [ServiceTypeHealthPolicyMapItem](#servicetypehealthpolicymapitem)

### ServiceTypeHealthPolicyMapItem
* ServiceTypeHealthPolicyMapItem `object`: Defines an item in ServiceTypeHealthPolicyMap.
  * Key **required** `string`: The key of the service type health policy map item. This is the name of the service type.
  * Value **required** [ServiceTypeHealthPolicy](#servicetypehealthpolicy)

### ServiceUpdateProperties
* ServiceUpdateProperties `object`: The service resource properties for patch operations.
  * serviceKind **required** [ServiceKind](#servicekind)
  * correlationScheme [CorrelationSchemeList](#correlationschemelist)
  * defaultMoveCost [MoveCost](#movecost)
  * placementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * serviceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * servicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### SettingsParameterDescription
* SettingsParameterDescription `object`: Describes a parameter in fabric settings of the cluster.
  * name **required** `string`: The parameter name of fabric setting.
  * value **required** `string`: The parameter value of fabric setting.

### SettingsSectionDescription
* SettingsSectionDescription `object`: Describes a section in the fabric settings of the cluster.
  * name **required** `string`: The section name of the fabric settings.
  * parameters **required** `array`: The collection of parameters in the section.
    * items [SettingsParameterDescription](#settingsparameterdescription)

### SingletonPartitionSchemeDescription
* SingletonPartitionSchemeDescription: Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

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
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### UpgradeDomainTimeout
* UpgradeDomainTimeout `string`: The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### UpgradeMode
* UpgradeMode `string` (values: Automatic, Manual): The upgrade mode of the cluster when new Service Fabric runtime version is available.

### UpgradeReplicaSetCheckTimeout
* UpgradeReplicaSetCheckTimeout `integer`: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).

### UpgradeTimeout
* UpgradeTimeout `string`: The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### VersionProperties
* VersionProperties `object`: The properties of the version resource.
  * appPackageUrl **required** `string`: The URL to the application package
  * defaultParameterList [ApplicationTypeParameterList](#applicationtypeparameterlist)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response

### VersionResource
* VersionResource `object`: A version resource for the specified application type name.
  * properties [VersionProperties](#versionproperties)
  * id `string`: Azure resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### VersionResourceList
* VersionResourceList `object`: The list of version resources for the specified application type name.
  * value `array`
    * items [VersionResource](#versionresource)


