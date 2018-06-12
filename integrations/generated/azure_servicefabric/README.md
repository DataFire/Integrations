# @datafire/azure_servicefabric

Client library for Service Fabric Client APIs

## Installation and Usage
```bash
npm install --save @datafire/azure_servicefabric
```
```js
let azure_servicefabric = require('@datafire/azure_servicefabric').create();

azure_servicefabric.GetAadMetadata({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Service Fabric REST Client APIs allows management of Service Fabric clusters, applications and services.

## Actions

### GetAadMetadata
Gets the Azure Active Directory metadata used for secured connection to cluster.
This API is not supposed to be called separately. It provides information needed to set up an Azure Active Directory secured connection with a Service Fabric cluster.



```js
azure_servicefabric.GetAadMetadata({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 1.0): The version of the API. This is a required parameter and it's value must be "1.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [AadMetadataObject](#aadmetadataobject)

### GetClusterHealth
Gets the health of a Service Fabric cluster.
Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state.
Similarly, use NodesHealthStateFilter and ApplicationsHealthStateFilter to filter the collection of nodes and applications returned based on their aggregated health state.



```js
azure_servicefabric.GetClusterHealth({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * NodesHealthStateFilter `integer`: Allows filtering of the node health state objects returned in the result of cluster health query 
  * ApplicationsHealthStateFilter `integer`: Allows filtering of the application health state objects returned in the result of cluster health 
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterHealth](#clusterhealth)

### GetClusterHealthUsingPolicy
Gets the health of a Service Fabric cluster.
Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state.
Similarly, use NodesHealthStateFilter and ApplicationsHealthStateFilter to filter the collection of nodes and applications returned based on their aggregated health state.
Use ClusterHealthPolicies to override the health policies used to evaluate the health. 



```js
azure_servicefabric.GetClusterHealthUsingPolicy({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * NodesHealthStateFilter `integer`: Allows filtering of the node health state objects returned in the result of cluster health query 
  * ApplicationsHealthStateFilter `integer`: Allows filtering of the application health state objects returned in the result of cluster health 
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ClusterHealthPolicies [ClusterHealthPolicies](#clusterhealthpolicies)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterHealth](#clusterhealth)

### GetClusterHealthChunk
Gets the health of a Service Fabric cluster using health chunks. Includes the aggregated health state of the cluster, but none of the cluster entities.
To expand the cluster health and get the health state of all or some of the entities, use the POST URI and specify the cluster health chunk query description.



```js
azure_servicefabric.GetClusterHealthChunk({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterHealthChunk](#clusterhealthchunk)

### GetClusterHealthChunkUsingPolicyAndAdvancedFilters
Gets the health of a Service Fabric cluster using health chunks. The health evaluation is done based on the input cluster health chunk query description.
The query description allows users to specify health policies for evaluating the cluster and its children.
Users can specify very flexible filters to select which cluster entities to return. The selection can be done based on the entities health state and based on the hierarchy.
The query can return multi-level children of the entities based on the specified filters. For example, it can return one application with a specified name, and for this application, return
only services that are in Error or Warning, and all partitions and replicas for one of these services.



```js
azure_servicefabric.GetClusterHealthChunkUsingPolicyAndAdvancedFilters({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ClusterHealthChunkQueryDescription [ClusterHealthChunkQueryDescription](#clusterhealthchunkquerydescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterHealthChunk](#clusterhealthchunk)

### GetClusterManifest
Get the Service Fabric cluster manifest. The cluster manifest contains properties of the cluster that include different node types on the cluster,
security configurations, fault and upgrade domain topologies etc.

These properties are specified as part of the ClusterConfig.JSON file while deploying a stand alone cluster. However, most of the information in the cluster manifest
is generated internally by service fabric during cluster deployment in other deployment scenarios (for e.g when using azuer portal).

The contents of the cluster manifest are for informational purposes only and users are not expected to take a dependency on the format of the file contents or its interpretation.



```js
azure_servicefabric.GetClusterManifest({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterManifest](#clustermanifest)

### GetProvisionedFabricCodeVersionInfoList
Gets a list of information about fabric code versions that are provisioned in the cluster. The parameter CodeVersion can be used to optionally filter the output to only that particular version.


```js
azure_servicefabric.GetProvisionedFabricCodeVersionInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * CodeVersion `string`: The product version of Service Fabric.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [FabricCodeVersionInfoList](#fabriccodeversioninfolist)

### GetProvisionedFabricConfigVersionInfoList
Gets a list of information about fabric config versions that are provisioned in the cluster. The parameter ConfigVersion can be used to optionally filter the output to only that particular version.


```js
azure_servicefabric.GetProvisionedFabricConfigVersionInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ConfigVersion `string`: The config version of Service Fabric.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [FabricConfigVersionInfoList](#fabricconfigversioninfolist)

### GetClusterUpgradeProgress
Gets the current progress of the ongoing cluster upgrade. If no upgrade is currently in progress, gets the last state of the previous cluster upgrade.


```js
azure_servicefabric.GetClusterUpgradeProgress({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterUpgradeProgressObject](#clusterupgradeprogressobject)

### InvokeInfrastructureCommand
For clusters that have one or more instances of the Infrastructure Service configured,
this API provides a way to send infrastructure-specific commands to a particular
instance of the Infrastructure Service.

Available commands and their corresponding response formats vary depending upon
the infrastructure on which the cluster is running.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.



```js
azure_servicefabric.InvokeInfrastructureCommand({
  "api-version": "",
  "Command": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * Command **required** `string`: The text of the command to be invoked. The content of the command is infrastructure-specific.
  * ServiceId `string`: The identity of the infrastructure service. This is  the full name of the infrastructure service without the 'fabric:' URI scheme. This parameter required only for the cluster that have more than one instance of infrastructure service running.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output `file`

### InvokeInfrastructureQuery
For clusters that have one or more instances of the Infrastructure Service configured,
this API provides a way to send infrastructure-specific queries to a particular
instance of the Infrastructure Service.

Available commands and their corresponding response formats vary depending upon
the infrastructure on which the cluster is running.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.



```js
azure_servicefabric.InvokeInfrastructureQuery({
  "api-version": "",
  "Command": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * Command **required** `string`: The text of the command to be invoked. The content of the command is infrastructure-specific.
  * ServiceId `string`: The identity of the infrastructure service. This is  the full name of the infrastructure service without the 'fabric:' URI scheme. This parameter required only for the cluster that have more than one instance of infrastructure service running.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output `file`

### RecoverAllPartitions
Indicates to the Service Fabric cluster that it should attempt to recover any services (including system services) which are currently stuck in quorum loss. This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverAllPartitions({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RecoverSystemPartitions
Indicates to the Service Fabric cluster that it should attempt to recover the system services which are currently stuck in quorum loss. This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverSystemPartitions({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ReportClusterHealth
Sends a health report on a Service Fabric cluster. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway node, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, run GetClusterHealth and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportClusterHealth({
  "api-version": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationTypeInfoList
Returns the information about the application types that are provisioned or in the process of being provisioned in the Service Fabric cluster. Each version of an application type is returned as one application type. The response includes the name, version, status and other details about the application type. This is a paged query, meaning that if not all of the application types fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page. For example, if there are 10 application types but a page only fits the first 3 application types, or if max results is set to 3, then 3 is returned. To access the rest of the results, retrieve subsequent pages by using the returned continuation token in the next query. An empty continuation token is returned if there are no subsequent pages.


```js
azure_servicefabric.GetApplicationTypeInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 4.0): The version of the API. This is a required parameter and it's value must be "4.0".
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedApplicationTypeInfoList](#pagedapplicationtypeinfolist)

### ProvisionApplicationType
Provisions or registers a Service Fabric application type with the cluster. This is required before any new applications can be instantiated.


```js
azure_servicefabric.ProvisionApplicationType({
  "api-version": "",
  "ApplicationTypeImageStorePath": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ApplicationTypeImageStorePath **required** [ApplicationTypeImageStorePath](#applicationtypeimagestorepath)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationTypeInfoListByName
Returns the information about the application types that are provisioned or in the process of being provisioned in the Service Fabric cluster. These results are of application types whose name match exactly the one specified as the parameter, and which comply with the given query parameters. All versions of the application type matching the application type name are returned, with each version returned as one application type. The response includes the name, version, status and other details about the application type. This is a paged query, meaning that if not all of the application types fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page. For example, if there are 10 application types but a page only fits the first 3 application types, or if max results is set to 3, then 3 is returned. To access the rest of the results, retrieve subsequent pages by using the returned continuation token in the next query. An empty continuation token is returned if there are no subsequent pages.


```js
azure_servicefabric.GetApplicationTypeInfoListByName({
  "api-version": "",
  "applicationTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 4.0): The version of the API. This is a required parameter and it's value must be "4.0".
  * applicationTypeName **required** `string`: The name of the application type.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedApplicationTypeInfoList](#pagedapplicationtypeinfolist)

### GetApplicationManifest
Gets the manifest describing an application type. The response contains the application manifest XML as a string.


```js
azure_servicefabric.GetApplicationManifest({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeVersion": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationTypeManifest](#applicationtypemanifest)

### GetServiceManifest
Gets the manifest describing a service type. The response contains the service manifest XML as a string.


```js
azure_servicefabric.GetServiceManifest({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeVersion": "",
  "ServiceManifestName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * ServiceManifestName **required** `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceTypeManifest](#servicetypemanifest)

### GetServiceTypeInfoList
Gets the list containing the information about service types that are supported by a provisioned application type in a Service Fabric cluster. The response includes the name of the service type, the name and version of the service manifest the type is defined in, kind (stateless or stateless) of the service type and other information about it.


```js
azure_servicefabric.GetServiceTypeInfoList({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeVersion": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceTypeInfoList](#servicetypeinfolist)

### UnprovisionApplicationType
Removes or unregisters a Service Fabric application type from the cluster. This operation can only be performed if all application instance of the application type has been deleted. Once the application type is unregistered, no new application instance can be created for this particular application type.


```js
azure_servicefabric.UnprovisionApplicationType({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeImageStoreVersion": {
    "ApplicationTypeVersion": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeImageStoreVersion **required** [ApplicationTypeImageStoreVersion](#applicationtypeimagestoreversion)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationInfoList
Gets the information about the applications that were created or in the process of being created in the Service Fabric cluster and match filters specified as the parameter. The response includes the name, type, status, parameters and other details about the application. If the applications do not fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page.


```js
azure_servicefabric.GetApplicationInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ApplicationTypeName `string`: The application type name used to filter the applications to query for. This value should not contain the application type version.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedApplicationInfoList](#pagedapplicationinfolist)

### CreateApplication
Creates a Service Fabric application using the specified description.


```js
azure_servicefabric.CreateApplication({
  "api-version": "",
  "ApplicationDescription": {
    "Name": "",
    "TypeName": "",
    "TypeVersion": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ApplicationDescription **required** [ApplicationDescription](#applicationdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationInfo
Returns the information about the application that was created or in the process of being created in the Service Fabric cluster and whose name matches the one specified as the parameter. The response includes the name, type, status, parameters and other details about the application.


```js
azure_servicefabric.GetApplicationInfo({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationInfo](#applicationinfo)

### DeleteApplication
Deletes an existing Service Fabric application. An application must be created before it can be deleted. Deleting an application will delete all services that are part of that application. By default Service Fabric will try to close service replicas in a graceful manner and then delete the service. However if service is having issues closing the replica gracefully, the delete operation may take a long time or get stuck. Use the optional ForceRemove flag to skip the graceful close sequence and forcefully delete the application and all of the its services.


```js
azure_servicefabric.DeleteApplication({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ForceRemove `boolean`: Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationHealth
Returns the heath state of the service fabric application. The response reports either Ok, Error or Warning health state. If the entity is not found in the helath store, it will return Error.


```js
azure_servicefabric.GetApplicationHealth({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedApplicationsHealthStateFilter `integer`: Allows filtering of the deployed applications health state objects returned in the result of application health query based on their health state.
  * ServicesHealthStateFilter `integer`: Allows filtering of the services health state objects returned in the result of services health query based on their health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationHealth](#applicationhealth)

### GetApplicationHealthUsingPolicy
Gets the health of a Service Fabric application. Use EventsHealthStateFilter to filter the collection of health events reported on the node based on the health state. Use ClusterHealthPolicies to override the health policies used to evaluate the health.


```js
azure_servicefabric.GetApplicationHealthUsingPolicy({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedApplicationsHealthStateFilter `integer`: Allows filtering of the deployed applications health state objects returned in the result of application health query based on their health state.
  * ServicesHealthStateFilter `integer`: Allows filtering of the services health state objects returned in the result of services health query based on their health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationHealth](#applicationhealth)

### GetServiceInfoList
Returns the information about all services belonging to the application specified by the application id.


```js
azure_servicefabric.GetServiceInfoList({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceTypeName `string`: The service type name used to filter the services to query for.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedServiceInfoList](#pagedserviceinfolist)

### CreateService
Creates the specified service.


```js
azure_servicefabric.CreateService({
  "applicationId": "",
  "api-version": "",
  "ServiceDescription": {
    "ServiceKind": "",
    "ServiceName": "",
    "ServiceTypeName": "",
    "PartitionDescription": {
      "PartitionScheme": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ServiceDescription **required** [ServiceDescription](#servicedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### CreateServiceFromTemplate
Creates a Service Fabric service from the service template defined in the application manifest.


```js
azure_servicefabric.CreateServiceFromTemplate({
  "applicationId": "",
  "api-version": "",
  "ServiceFromTemplateDescription": {
    "ApplicationName": "",
    "ServiceName": "",
    "ServiceTypeName": ""
  }
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ServiceFromTemplateDescription **required** [ServiceFromTemplateDescription](#servicefromtemplatedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetServiceInfo
Returns the information about specified service belonging to the specified Service Fabric application.


```js
azure_servicefabric.GetServiceInfo({
  "applicationId": "",
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceInfo](#serviceinfo)

### GetApplicationUpgrade
Returns information about the state of the latest application upgrade along with details to aid debugging application health issues.


```js
azure_servicefabric.GetApplicationUpgrade({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationUpgradeProgressInfo](#applicationupgradeprogressinfo)

### ResumeApplicationUpgrade
Resumes an unmonitored manual Service Fabric application upgrade. Service Fabric upgrades one upgrade domain at a time. For unmonitored manual upgrades, after Service Fabric finishes an upgrade domain, it waits for you to call this API before proceeding to the next upgrade domain.


```js
azure_servicefabric.ResumeApplicationUpgrade({
  "api-version": "",
  "applicationId": "",
  "ResumeApplicationUpgradeDescription": {
    "UpgradeDomainName": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ResumeApplicationUpgradeDescription **required** [ResumeApplicationUpgradeDescription](#resumeapplicationupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ReportApplicationHealth
Reports health state of the specified Service Fabric application. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Application, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, run GetApplicationHealth and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportApplicationHealth({
  "api-version": "",
  "applicationId": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RollbackApplicationUpgrade
Starts rolling back the current application upgrade to the previous version. This API can only be used to rollback the current in-progress upgrade that is rolling forward to new version. If the application is not currently being upgraded use StartApplicationUpgrade API to upgrade it to desired version including rolling back to a previous version.


```js
azure_servicefabric.RollbackApplicationUpgrade({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### UpdateApplicationUpgrade
Updates the parameters of an ongoing application upgrade from the ones specified at the time of starting the application upgrade. This may be required to mitigate stuck application upgrades due to incorrect parameters or issues in the application to make progress.


```js
azure_servicefabric.UpdateApplicationUpgrade({
  "api-version": "",
  "applicationId": "",
  "ApplicationUpgradeUpdateDescription": {
    "Name": "",
    "UpgradeKind": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ApplicationUpgradeUpdateDescription **required** [ApplicationUpgradeUpdateDescription](#applicationupgradeupdatedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartApplicationUpgrade
Validates the supplied application upgrade parameters and starts upgrading the application if the parameters are valid.


```js
azure_servicefabric.StartApplicationUpgrade({
  "api-version": "",
  "applicationId": "",
  "ApplicationUpgradeDescription": {
    "Name": "",
    "TargetApplicationTypeVersion": "",
    "UpgradeKind": "",
    "Parameters": []
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ApplicationUpgradeDescription **required** [ApplicationUpgradeDescription](#applicationupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetComposeApplicationStatusList
Gets the status about the compose applications that were created or in the process of being created in the Service Fabric cluster. The response includes the name, status and other details about the compose application. If the applications do not fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page.


```js
azure_servicefabric.GetComposeApplicationStatusList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 4.0-preview): The version of the API. This is a required parameter and it's value must be "4.0-preview".
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedComposeApplicationStatusInfoList](#pagedcomposeapplicationstatusinfolist)

### CreateComposeApplication
Creates a Service Fabric compose application.


```js
azure_servicefabric.CreateComposeApplication({
  "api-version": "",
  "CreateComposeApplicationDescription": {
    "ApplicationName": "",
    "ComposeFileContent": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 4.0-preview): The version of the API. This is a required parameter and it's value must be "4.0-preview".
  * CreateComposeApplicationDescription **required** [CreateComposeApplicationDescription](#createcomposeapplicationdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetComposeApplicationStatus
Returns the status of compose application that was created or in the process of being created in the Service Fabric cluster and whose name matches the one specified as the parameter. The response includes the name, status and other details about the application.


```js
azure_servicefabric.GetComposeApplicationStatus({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 4.0-preview): The version of the API. This is a required parameter and it's value must be "4.0-preview".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ComposeApplicationStatusInfo](#composeapplicationstatusinfo)

### RemoveComposeApplication
Deletes an existing Service Fabric compose application. An application must be created before it can be deleted.


```js
azure_servicefabric.RemoveComposeApplication({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 4.0-preview): The version of the API. This is a required parameter and it's value must be "4.0-preview".
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetFaultOperationList
Gets the a list of user-induced fault operations filtered by provided input.


```js
azure_servicefabric.GetFaultOperationList({
  "api-version": "",
  "TypeFilter": 0,
  "StateFilter": 0
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * TypeFilter **required** `integer`: Used to filter on OperationType for user-induced operations.
  * StateFilter **required** `integer`: Used to filter on OperationState's for user-induced operations.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [OperationStatusList](#operationstatuslist)

### CancelOperation
The following is a list of APIs that start fault operations that may be cancelled using CancelOperation -
- StartDataLoss
- StartQuorumLoss
- StartPartitionRestart
- StartNodeTransition

If force is false, then the specified user-induced operation will be gracefully stopped and cleaned up.  If force is true, the command will be aborted, and some internal state
may be left behind.  Specifying force as true should be used with care.  Calling this API with force set to true is not allowed until this API has already
been called on the same test command with force set to false first, or unless the test command already has an OperationState of OperationState.RollingBack.
Clarification: OperationState.RollingBack means that the system will/is be cleaning up internal system state caused by executing the command.  It will not restore data if the
test command was to cause data loss.  For example, if you call StartDataLoss then call this API, the system will only clean up internal state from running the command.  
It will not restore the target partition's data, if the command progressed far enough to cause data loss.

Important note:  if this API is invoked with force==true, internal state may be left behind. 



```js
azure_servicefabric.CancelOperation({
  "api-version": "",
  "OperationId": "",
  "Force": true
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * Force **required** `boolean`: Indicates whether to gracefully rollback and clean up internal system state modified by executing the user-induced operation.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetNodeTransitionProgress
Gets the progress of an operation started with StartNodeTransition using the provided OperationId.



```js
azure_servicefabric.GetNodeTransitionProgress({
  "api-version": "",
  "nodeName": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeTransitionProgress](#nodetransitionprogress)

### StartNodeTransition
Starts or stops a cluster node.  A cluster node is a process, not the OS instance itself.  To start a node, pass in "Start" for the NodeTransitionType parameter.      
To stop a node, pass in "Stop" for the NodeTransitionType parameter.  This API starts the operation - when the API returns the node may not have finished transitioning yet.
Call GetNodeTransitionProgress with the same OperationId to get the progress of the operation.



```js
azure_servicefabric.StartNodeTransition({
  "api-version": "",
  "nodeName": "",
  "OperationId": "",
  "NodeTransitionType": "",
  "NodeInstanceId": "",
  "StopDurationInSeconds": 0
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * NodeTransitionType **required** `string` (values: Invalid, Start, Stop): Indicates the type of transition to perform.  NodeTransitionType.Start will start a stopped node.  NodeTransitionType.Stop will stop a node that is up.      
  * NodeInstanceId **required** `string`: The node instance ID of the target node.  This can be determined through GetNodeInfo API.
  * StopDurationInSeconds **required** `integer`: The duration, in seconds, to keep the node stopped.  The minimum value is 600, the maximum is 14400.  After this time expires, the node will automatically come back up.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDataLossProgress
Gets the progress of a data loss operation started with StartDataLoss, using the OperationId.



```js
azure_servicefabric.GetDataLossProgress({
  "api-version": "",
  "serviceId": "",
  "partitionId": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionDataLossProgress](#partitiondatalossprogress)

### GetQuorumLossProgress
Gets the progress of a quorum loss operation started with StartQuorumLoss, using the provided OperationId.  



```js
azure_servicefabric.GetQuorumLossProgress({
  "api-version": "",
  "serviceId": "",
  "partitionId": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionQuorumLossProgress](#partitionquorumlossprogress)

### GetPartitionRestartProgress
Gets the progress of a PartitionRestart started with StartPartitionRestart using the provided OperationId.



```js
azure_servicefabric.GetPartitionRestartProgress({
  "api-version": "",
  "serviceId": "",
  "partitionId": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionRestartProgress](#partitionrestartprogress)

### StartDataLoss
This API will induce data loss for the specified partition. It will trigger a call to the OnDataLoss API of the partition.
Actual data loss will depend on the specified DataLossMode
PartialDataLoss - Only a quorum of replicas are removed and OnDataLoss is triggered for the partition but actual data loss depends on the presence of in-flight replication.
FullDataLoss - All replicas are removed hence all data is lost and OnDataLoss is triggered.            

This API should only be called with a stateful service as the target.

Calling this API with a system service as the target is not advised.

Note:  Once this API has been called, it cannot be reversed. Calling CancelOperation will only stop execution and clean up internal system state.
It will not restore data if the command has progressed far enough to cause data loss.

Call the GetDataLossProgress API with the same OperationId to return information on the operation started with this API.               



```js
azure_servicefabric.StartDataLoss({
  "api-version": "",
  "serviceId": "",
  "partitionId": "",
  "OperationId": "",
  "DataLossMode": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * DataLossMode **required** `string` (values: Invalid, PartialDataLoss, FullDataLoss): This enum is passed to the StartDataLoss API to indicate what type of data loss to induce.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartQuorumLoss
Induces quorum loss for a given stateful service partition.  This API is useful for a temporary quorum loss situation on your service.

Call the GetQuorumLossProgress API with the same OperationId to return information on the operation started with this API.

This can only be called on stateful persisted (HasPersistedState==true) services.  Do not use this API on stateless services or stateful in-memory only services.



```js
azure_servicefabric.StartQuorumLoss({
  "api-version": "",
  "serviceId": "",
  "partitionId": "",
  "OperationId": "",
  "QuorumLossMode": "",
  "QuorumLossDuration": 0
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * QuorumLossMode **required** `string` (values: Invalid, QuorumReplicas, AllReplicas): This enum is passed to the StartQuorumLoss API to indicate what type of quorum loss to induce.
  * QuorumLossDuration **required** `integer`: The amount of time for which the partition will be kept in quorum loss.  This must be specified in seconds.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartPartitionRestart
This API is useful for testing failover.
      
If used to target a stateless service partition, RestartPartitionMode must be AllReplicasOrInstances. 

Call the GetPartitionRestartProgress API using the same OperationId to get the progress.     



```js
azure_servicefabric.StartPartitionRestart({
  "api-version": "",
  "serviceId": "",
  "partitionId": "",
  "OperationId": "",
  "RestartPartitionMode": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * RestartPartitionMode **required** `string` (values: Invalid, AllReplicasOrInstances, OnlyActiveSecondaries): - Invalid - Reserved.  Do not pass into API.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetImageStoreRootContent
Returns the information about the image store content at the root of the image store.


```js
azure_servicefabric.GetImageStoreRootContent({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ImageStoreContent](#imagestorecontent)

### CopyImageStoreContent
Copies the image store content from the source image store relative path to the destination image store relative path.


```js
azure_servicefabric.CopyImageStoreContent({
  "api-version": "",
  "ImageStoreCopyDescription": {
    "RemoteSource": "",
    "RemoteDestination": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ImageStoreCopyDescription **required** [ImageStoreCopyDescription](#imagestorecopydescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeleteImageStoreContent
Deletes existing image store content being found within the given image store relative path. This can be used to delete uploaded application packages once they are provisioned.


```js
azure_servicefabric.DeleteImageStoreContent({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetImageStoreContent
Returns the information about the image store content at the specified contentPath relative to the root of the image store.


```js
azure_servicefabric.GetImageStoreContent({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ImageStoreContent](#imagestorecontent)

### UploadFile
Uploads contents of the file to the image store. Use this API if the file is small enough to upload again if the connection fails. The file's data needs to be added to the request body. The contents will be uploaded to the specified path.


```js
azure_servicefabric.UploadFile({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetNodeInfoList
The Nodes endpoint returns information about the nodes in the Service Fabric Cluster. The respons include the name, status, id, health, uptime and other details about the node.


```js
azure_servicefabric.GetNodeInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * NodeStatusFilter `string` (values: default, all, up, down, enabling, disabling, disabled, unknown, removed): Allows filtering the nodes based on the NodeStatus. Only the nodes that are matching the specified filter value will be returned. The filter value can be one of the following.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedNodeInfoList](#pagednodeinfolist)

### GetNodeInfo
Gets the information about a specific node in the Service Fabric Cluster.The respons include the name, status, id, health, uptime and other details about the node.


```js
azure_servicefabric.GetNodeInfo({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeInfo](#nodeinfo)

### EnableNode
Activates a Service Fabric cluster node which is currently deactivated. Once activated, the node will again become a viable target for placing new replicas, and any deactivated replicas remaining on the node will be reactivated.


```js
azure_servicefabric.EnableNode({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DisableNode
Deactivate a Service Fabric cluster node with the specified deactivation intent. Once the deactivation is in progress, the deactivation intent can be increased, but not decreased (for example, a node which is was deactivated with the Pause intent can be deactivated further with Restart, but not the other way around. Nodes may be reactivated using the Activate a node operation any time after they are deactivated. If the deactivation is not complete this will cancel the deactivation. A node which goes down and comes back up while deactivated will still need to be reactivated before services will be placed on that node.


```js
azure_servicefabric.DisableNode({
  "api-version": "",
  "nodeName": "",
  "DeactivationIntentDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * DeactivationIntentDescription **required** [DeactivationIntentDescription](#deactivationintentdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeployedServicePackageToNode
Downloads packages associated with specified service manifest to image cache on specified node.



```js
azure_servicefabric.DeployedServicePackageToNode({
  "api-version": "",
  "nodeName": "",
  "DeployServicePackageToNodeDescription": {
    "ServiceManifestName": "",
    "ApplicationTypeName": "",
    "ApplicationTypeVersion": "",
    "NodeName": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * DeployServicePackageToNodeDescription **required** [DeployServicePackageToNodeDescription](#deployservicepackagetonodedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedApplicationInfoList
Gets the list of applications deployed on a Service Fabric node.


```js
azure_servicefabric.GetDeployedApplicationInfoList({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedApplicationInfoList](#deployedapplicationinfolist)

### GetDeployedApplicationInfo
Gets the information about an application deployed on a Service Fabric node.


```js
azure_servicefabric.GetDeployedApplicationInfo({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedApplicationInfo](#deployedapplicationinfo)

### GetDeployedCodePackageInfoList
Gets the list of code packages deployed on a Service Fabric node for the given application.


```js
azure_servicefabric.GetDeployedCodePackageInfoList({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceManifestName `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * CodePackageName `string`: The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedCodePackageInfoList](#deployedcodepackageinfolist)

### RestartDeployedCodePackage
Restarts a code package deployed on a Service Fabric node in a cluster. This aborts the code package process, which will restart all the user service replicas hosted in that process.


```js
azure_servicefabric.RestartDeployedCodePackage({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "RestartDeployedCodePackageDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * RestartDeployedCodePackageDescription **required** [RestartDeployedCodePackageDescription](#restartdeployedcodepackagedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedApplicationHealth
Gets the information about health of an application deployed on a Service Fabric node. Use EventsHealthStateFilter to optionally filter for the collection of HealthEvent objects reported on the deployed application based on health state. Use DeployedServicePackagesHealthStateFilter to optionally filter for DeployedServicePackageHealth children based on health state.


```js
azure_servicefabric.GetDeployedApplicationHealth({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedServicePackagesHealthStateFilter `integer`: Allows filtering of the deployed service package health state objects returned in the result of deployed application health query based on their health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedApplicationHealth](#deployedapplicationhealth)

### GetDeployedApplicationHealthUsingPolicy
Gets the information about health of an application deployed on a Service Fabric node using the specified policy. Use EventsHealthStateFilter to optionally filter for the collection of HealthEvent objects reported on the deployed application based on health state. Use DeployedServicePackagesHealthStateFilter to optionally filter for DeployedServicePackageHealth children based on health state. Use ApplicationHealthPolicy to optionally override the health policies used to evaluate the health. This API only uses 'ConsiderWarningAsError' field of the ApplicationHealthPolicy. The rest of the fields are ignored while evaluating the health of the deployed application.



```js
azure_servicefabric.GetDeployedApplicationHealthUsingPolicy({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedServicePackagesHealthStateFilter `integer`: Allows filtering of the deployed service package health state objects returned in the result of deployed application health query based on their health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedApplicationHealth](#deployedapplicationhealth)

### GetDeployedServiceReplicaInfoList
Gets the list containing the information about replicas deployed on a Service Fabric node. The information include partition id, replica id, status of the replica, name of the service, name of the service type and other information. Use PartitionId or ServiceManifestName query parameters to return information about the deployed replicas matching the specified values for those parameters.


```js
azure_servicefabric.GetDeployedServiceReplicaInfoList({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * PartitionId `string`: The identity of the partition.
  * ServiceManifestName `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceReplicaInfoList](#deployedservicereplicainfolist)

### GetDeployedServicePackageInfoList
Returns the information about the service packages deployed on a Service Fabric node for the given application.


```js
azure_servicefabric.GetDeployedServicePackageInfoList({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServicePackageInfoList](#deployedservicepackageinfolist)

### GetDeployedServicePackageInfoListByName
Returns the information about the service packages deployed on a Service Fabric node for the given application. These results are of service packages whose name match exactly the service package name specified as the parameter.


```js
azure_servicefabric.GetDeployedServicePackageInfoListByName({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "servicePackageName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedServicePackageHealth
Gets the information about health of service package for a specific application deployed on a Service Fabric node. Use EventsHealthStateFilter to optionally filter for the collection of HealthEvent objects reported on the deployed service package based on health state.


```js
azure_servicefabric.GetDeployedServicePackageHealth({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "servicePackageName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServicePackageHealth](#deployedservicepackagehealth)

### GetDeployedServicePackageHealthUsingPolicy
Gets the information about health of an service package for a specific application deployed on a Service Fabric node. using the specified policy. Use EventsHealthStateFilter to optionally filter for the collection of HealthEvent objects reported on the deployed service package based on health state. Use ApplicationHealthPolicy to optionally override the health policies used to evaluate the health. This API only uses 'ConsiderWarningAsError' field of the ApplicationHealthPolicy. The rest of the fields are ignored while evaluating the health of the deployed service package.



```js
azure_servicefabric.GetDeployedServicePackageHealthUsingPolicy({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "servicePackageName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServicePackageHealth](#deployedservicepackagehealth)

### ReportDeployedServicePackageHealth
Reports health state of the service package of the application deployed on a Service Fabric node. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Service, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, get deployed service package health and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportDeployedServicePackageHealth({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "servicePackageName": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedServiceTypeInfoList
Gets the list containing the information about service types from the applications deployed on a node in a Service Fabric cluster. The response includes the name of the service type, its registration status, the code package that registered it and activation id of the service package.


```js
azure_servicefabric.GetDeployedServiceTypeInfoList({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceManifestName `string`: The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceTypeInfoList](#deployedservicetypeinfolist)

### GetDeployedServiceTypeInfoByName
Gets the information about a specified service type of the application deployed on a node in a Service Fabric cluster. The response includes the name of the service type, its registration status, the code package that registered it and activation id of the service package.


```js
azure_servicefabric.GetDeployedServiceTypeInfoByName({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "serviceTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * serviceTypeName **required** `string`: Specifies the name of a Service Fabric service type.
  * ServiceManifestName `string`: The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceTypeInfo](#deployedservicetypeinfo)

### ReportDeployedApplicationHealth
Reports health state of the application deployed on a Service Fabric node. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Service, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, get deployed application health and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportDeployedApplicationHealth({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetNodeHealth
Gets the health of a Service Fabric node. Use EventsHealthStateFilter to filter the collection of health events reported on the node based on the health state. If the node that you specify by name does not exist in the health store, this returns an error.


```js
azure_servicefabric.GetNodeHealth({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeHealth](#nodehealth)

### GetNodeHealthUsingPolicy
Gets the health of a Service Fabric node. Use EventsHealthStateFilter to filter the collection of health events reported on the node based on the health state. Use ClusterHealthPolicy in the POST body to override the health policies used to evaluate the health. If the node that you specify by name does not exist in the health store, this returns an error.


```js
azure_servicefabric.GetNodeHealthUsingPolicy({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeHealth](#nodehealth)

### GetNodeLoadInfo
Gets the load information of a Service Fabric node.


```js
azure_servicefabric.GetNodeLoadInfo({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeLoadInfo](#nodeloadinfo)

### RemoveReplica
This API simulates a Service Fabric replica failure by removing a replica from a Service Fabric cluster. The removal closes the replica, transitions the replica to the role None, and then removes all of the state information of the replica from the cluster. This API tests the replica state removal path, and simulates the report fault permanent path through client APIs. Warning - There are no safety checks performed when this API is used. Incorrect use of this API can lead to data loss for stateful services.In addition, the forceRemove flag impacts all other replicas hosted in the same process.


```js
azure_servicefabric.RemoveReplica({
  "api-version": "",
  "nodeName": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * ForceRemove `boolean`: Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedServiceReplicaDetailInfo
Gets the details of the replica deployed on a Service Fabric node. The information include service kind, service name, current service operation, current service operation start date time, partition id, replica/instance id, reported load and other information.


```js
azure_servicefabric.GetDeployedServiceReplicaDetailInfo({
  "api-version": "",
  "nodeName": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceReplicaDetailInfo](#deployedservicereplicadetailinfo)

### RestartReplica
Restarts a service replica of a persisted service running on a node. Warning - There are no safety checks performed when this API is used. Incorrect use of this API can lead to availability loss for stateful services.


```js
azure_servicefabric.RestartReplica({
  "api-version": "",
  "nodeName": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RemoveNodeState
Notifies Service Fabric that the persisted state on a node has been permanently removed or lost.  This implies that it is not possible to recover the persisted state of that node. This generally happens if a hard disk has been wiped clean, or if a hard disk crashes. The node has to be down for this operation to be successful. This operation lets Service Fabric know that the replicas on that node no longer exist, and that Service Fabric should stop waiting for those replicas to come back up. Do not run this cmdlet if the state on the node has not been removed and the node can comes back up with its state intact.


```js
azure_servicefabric.RemoveNodeState({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ReportNodeHealth
Reports health state of the specified Service Fabric node. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway node, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, run GetNodeHealth and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportNodeHealth({
  "api-version": "",
  "nodeName": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RestartNode
Restarts a Service Fabric cluster node that is already started.


```js
azure_servicefabric.RestartNode({
  "api-version": "",
  "nodeName": "",
  "RestartNodeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * RestartNodeDescription **required** [RestartNodeDescription](#restartnodedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartNode
Starts a Service Fabric cluster node that is already stopped.


```js
azure_servicefabric.StartNode({
  "api-version": "",
  "nodeName": "",
  "StartNodeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * StartNodeDescription **required** [StartNodeDescription](#startnodedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StopNode
Stops a Service Fabric cluster node that is in a started state. The node will stay down until start node is called.


```js
azure_servicefabric.StopNode({
  "api-version": "",
  "nodeName": "",
  "StopNodeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * nodeName **required** `string`: The name of the node.
  * StopNodeDescription **required** [StopNodeDescription](#stopnodedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetPartitionInfo
The Partitions endpoint returns information about the specified partition. The response include the partition id, partitioning scheme information, keys supported by the partition, status, health and other details about the partition.


```js
azure_servicefabric.GetPartitionInfo({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServicePartitionInfo](#servicepartitioninfo)

### GetPartitionHealth
Gets the health information of the specified partition.
Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state.
Use ReplicasHealthStateFilter to filter the collection of ReplicaHealthState objects on the partition.
If you specify a partition that does not exist in the health store, this cmdlet returns an error.



```js
azure_servicefabric.GetPartitionHealth({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ReplicasHealthStateFilter `integer`: Allows filtering the collection of ReplicaHealthState objects on the partition. The value can be obtained from members or bitwise operations on members of HealthStateFilter. Only replicas that match the filter will be returned. All replicas will be used to evaluate the aggregated health state. If not specified, all entries will be returned.The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) will be returned. The possible values for this parameter include integer value of one of the following health states.    
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionHealth](#partitionhealth)

### GetPartitionHealthUsingPolicy
Gets the health information of the specified partition.
If the application health policy is specified, the health evaluation uses it to get the aggregated health state.
If the policy is not specified, the health evaluation uses the application health policy defined in the application manifest, or the default health policy, if no policy is defined in the manifest.
Use EventsHealthStateFilter to filter the collection of health events reported on the partition based on the health state.
Use ReplicasHealthStateFilter to filter the collection of ReplicaHealthState objects on the partition. Use ApplicationHealthPolicy in the POST body to override the health policies used to evaluate the health.
If you specify a partition that does not exist in the health store, this cmdlet returns an error.



```js
azure_servicefabric.GetPartitionHealthUsingPolicy({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ReplicasHealthStateFilter `integer`: Allows filtering the collection of ReplicaHealthState objects on the partition. The value can be obtained from members or bitwise operations on members of HealthStateFilter. Only replicas that match the filter will be returned. All replicas will be used to evaluate the aggregated health state. If not specified, all entries will be returned.The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) will be returned. The possible values for this parameter include integer value of one of the following health states.    
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionHealth](#partitionhealth)

### GetPartitionLoadInformation
Returns information about the specified partition. 
The response includes a list of load information. 
Each information includes load metric name, value and last reported time in UTC.



```js
azure_servicefabric.GetPartitionLoadInformation({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionLoadInformation](#partitionloadinformation)

### GetReplicaInfoList
The GetReplicas endpoint returns information about the replicas of the specified partition. The respons include the id, role, status, health, node name, uptime, and other details about the replica.


```js
azure_servicefabric.GetReplicaInfoList({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedReplicaInfoList](#pagedreplicainfolist)

### GetReplicaInfo
The respons include the id, role, status, health, node name, uptime, and other details about the replica.


```js
azure_servicefabric.GetReplicaInfo({
  "api-version": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ReplicaInfo](#replicainfo)

### GetReplicaHealth
Gets the health of a Service Fabric replica.
Use EventsHealthStateFilter to filter the collection of health events reported on the replica based on the health state.



```js
azure_servicefabric.GetReplicaHealth({
  "api-version": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ReplicaHealth](#replicahealth)

### GetReplicaHealthUsingPolicy
Gets the health of a Service Fabric stateful service replica or stateless service instance.
Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state.
Use ApplicationHealthPolicy to optionally override the health policies used to evaluate the health. This API only uses 'ConsiderWarningAsError' field of the ApplicationHealthPolicy. The rest of the fields are ignored while evaluating the health of the replica.



```js
azure_servicefabric.GetReplicaHealthUsingPolicy({
  "api-version": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ReplicaHealth](#replicahealth)

### ReportReplicaHealth
Reports health state of the specified Service Fabric replica. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Replica, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, run GetReplicaHealth and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportReplicaHealth({
  "api-version": "",
  "partitionId": "",
  "replicaId": "",
  "ServiceKind": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * ServiceKind **required** `string` (values: Stateless, Stateful): The kind of service replica (Stateless or Stateful) for which the health is being reported. Following are the possible values.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetServiceNameInfo
The GetServiceName endpoint returns the name of the service for the specified partition.


```js
azure_servicefabric.GetServiceNameInfo({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceNameInfo](#servicenameinfo)

### RecoverPartition
Indicates to the Service Fabric cluster that it should attempt to recover a specific partition which is currently stuck in quorum loss. This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverPartition({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ReportPartitionHealth
Reports health state of the specified Service Fabric partition. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Partition, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, run GetPartitionHealth and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportPartitionHealth({
  "api-version": "",
  "partitionId": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * partitionId **required** `string`: The identity of the partition.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ResetPartitionLoad
Resets the current load of a Service Fabric partition to the default load for the service.


```js
azure_servicefabric.ResetPartitionLoad({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RecoverServicePartitions
Indicates to the Service Fabric cluster that it should attempt to recover the specified service which is currently stuck in quorum loss. This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverServicePartitions({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeleteService
Deletes an existing Service Fabric service. A service must be created before it can be deleted. By default Service Fabric will try to close service replicas in a graceful manner and then delete the service. However if service is having issues closing the replica gracefully, the delete operation may take a long time or get stuck. Use the optional ForceRemove flag to skip the graceful close sequence and forcefully delete the service.


```js
azure_servicefabric.DeleteService({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * ForceRemove `boolean`: Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationNameInfo
The GetApplicationName endpoint returns the name of the application for the specified service.


```js
azure_servicefabric.GetApplicationNameInfo({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationNameInfo](#applicationnameinfo)

### GetServiceDescription
Gets the description of an existing Service Fabric service. A service must be created before its description can be obtained.


```js
azure_servicefabric.GetServiceDescription({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceDescription](#servicedescription)

### GetServiceHealth
Gets the health information of the specified service.
Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state.
Use PartitionsHealthStateFilter to filter the collection of partitions returned.
If you specify a service that does not exist in the health store, this cmdlet returns an error.



```js
azure_servicefabric.GetServiceHealth({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * PartitionsHealthStateFilter `integer`: Allows filtering of the partitions health state objects returned in the result of service health query based on their health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceHealth](#servicehealth)

### GetServiceHealthUsingPolicy
Gets the health information of the specified service.
If the application health policy is specified, the health evaluation uses it to get the aggregated health state.
If the policy is not specified, the health evaluation uses the application health policy defined in the application manifest, or the default health policy, if no policy is defined in the manifest.
Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state.
Use PartitionsHealthStateFilter to filter the collection of partitions returned.
If you specify a service that does not exist in the health store, this cmdlet returns an error.



```js
azure_servicefabric.GetServiceHealthUsingPolicy({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * PartitionsHealthStateFilter `integer`: Allows filtering of the partitions health state objects returned in the result of service health query based on their health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceHealth](#servicehealth)

### GetPartitionInfoList
Gets the list of partitions of a Service Fabric service. The response include the partition id, partitioning scheme information, keys supported by the partition, status, health and other details about the partition.


```js
azure_servicefabric.GetPartitionInfoList({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedServicePartitionInfoList](#pagedservicepartitioninfolist)

### ReportServiceHealth
Reports health state of the specified Service Fabric service. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Service, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, run GetServiceHealth and check that the report appears in the HealthEvents section.



```js
azure_servicefabric.ReportServiceHealth({
  "api-version": "",
  "serviceId": "",
  "HealthInformation": {
    "SourceId": "",
    "Property": "",
    "HealthState": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ResolveService
Resolve a Service Fabric service partition, to get the endpoints of the service replicas.


```js
azure_servicefabric.ResolveService({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * PartitionKeyType `integer`: Key type for the partition. This parameter is required if the partition scheme for the service is Int64Range or Named. The possible values are following.
  * PartitionKeyValue `string`: Partition key. This is required if the partition scheme for the service is Int64Range or Named.
  * PreviousRspVersion `string`: The value in the Version field of the response that was received previously. This is required if the user knows that the result that was got previously is stale.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ResolvedServicePartition](#resolvedservicepartition)

### UpdateService
Updates the specified service using the given update description.


```js
azure_servicefabric.UpdateService({
  "api-version": "",
  "serviceId": "",
  "ServiceUpdateDescription": {
    "ServiceKind": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * serviceId **required** `string`: The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme.
  * ServiceUpdateDescription **required** [ServiceUpdateDescription](#serviceupdatedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetChaosReport
You can either specify the ContinuationToken to get the next segment of the Chaos report or you can specify the time-range
through StartTimeUtc and EndTimeUtc, but you cannot specify both the ContinuationToken and the time-range in the same call.
When there are more than 100 Chaos events, the Chaos report is returned in segments where a segment contains no more than 100 Chaos events.



```js
azure_servicefabric.GetChaosReport({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * StartTimeUtc `string`: The count of ticks representing the start time of the time range for which a Chaos report is to be generated. Please consult [DateTime.Ticks Property](https://msdn.microsoft.com/en-us/library/system.datetime.ticks%28v=vs.110%29) for details about tick.
  * EndTimeUtc `string`: The count of ticks representing the end time of the time range for which a Chaos report is to be generated. Please consult [DateTime.Ticks Property](https://msdn.microsoft.com/en-us/library/system.datetime.ticks%28v=vs.110%29) for details about tick.
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ChaosReport](#chaosreport)

### StartChaos
If Chaos is not already running in the cluster, it starts Chaos with the passed in Chaos parameters.
If Chaos is already running when this call is made, the call fails with the error code FABRIC_E_CHAOS_ALREADY_RUNNING.
Please refer to the article [Induce controlled Chaos in Service Fabric clusters](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-controlled-chaos) for more details.



```js
azure_servicefabric.StartChaos({
  "api-version": "",
  "ChaosParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * ChaosParameters **required** [ChaosParameters](#chaosparameters)
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StopChaos
Stops Chaos from scheduling further faults; but, the in-flight faults are not affected.


```js
azure_servicefabric.StopChaos({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 3.0): The version of the API. This is a required parameter and it's value must be "3.0".
  * timeout `integer`: The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*



## Definitions

### AadMetadata
* AadMetadata `object`: Azure Active Directory metadata used for secured connection to cluster.
  * authority `string`: The AAD authority url.
  * client `string`: The AAD client application Id.
  * cluster `string`: The AAD cluster application Id.
  * login `string`: The AAD login url.
  * redirect `string`: The client application redirect address.
  * tenant `string`: The AAD tenant Id.

### AadMetadataObject
* AadMetadataObject `object`: Azure Active Directory metadata object used for secured connection to cluster.
  * metadata [AadMetadata](#aadmetadata)
  * type `string`: The client authentication method.

### ApplicationCapacityDescription
* ApplicationCapacityDescription `object`: Describes capacity information for services of this application. This description can be used for describing the following.
  * ApplicationMetrics [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * MaximumNodes `integer`: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
  * MinimumNodes `integer`: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.

### ApplicationDescription
* ApplicationDescription `object`: Describes a Service Fabric application.
  * ApplicationCapacity [ApplicationCapacityDescription](#applicationcapacitydescription)
  * Name **required** [ApplicationName](#applicationname)
  * ParameterList [ApplicationParameterList](#applicationparameterlist)
  * TypeName **required** [ApplicationTypeName](#applicationtypename)
  * TypeVersion **required** [ApplicationTypeVersion](#applicationtypeversion)

### ApplicationHealth
* ApplicationHealth: Represents the health of the application. Contains the application aggregated health state and the service and deployed application health states.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * DeployedApplicationHealthStates `array`: Deployed application health states as found in the health store.
    * items [DeployedApplicationHealthState](#deployedapplicationhealthstate)
  * Name `string`
  * ServiceHealthStates `array`: Service health states as found in the health store.
    * items [ServiceHealthState](#servicehealthstate)

### ApplicationHealthEvaluation
* ApplicationHealthEvaluation: Represents health evaluation for an application, containing information about the data and the algorithm used by the health store to evaluate health.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * ApplicationName `string`: Full name of the application.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ApplicationHealthPolicies
* ApplicationHealthPolicies `object`: Defines the application health policy map used to evaluate the health of an application or one of its children entities.
  * ApplicationHealthPolicyMap [ApplicationHealthPolicyMap](#applicationhealthpolicymap)

### ApplicationHealthPolicy
* ApplicationHealthPolicy `object`: Defines a health policy used to evaluate the health of an application or one of its children entities.
  * ConsiderWarningAsError `boolean`: Indicates whether warnings are treated with the same severity as errors.
  * DefaultServiceTypeHealthPolicy [ServiceTypeHealthPolicy](#servicetypehealthpolicy)
  * MaxPercentUnhealthyDeployedApplications `integer`: The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.        
  * ServiceTypeHealthPolicyMap [ServiceTypeHealthPolicyMap](#servicetypehealthpolicymap)

### ApplicationHealthPolicyMap
* ApplicationHealthPolicyMap `array`: Defines a map that contains specific application health policies for different applications.
  * items [ApplicationHealthPolicyMapItem](#applicationhealthpolicymapitem)

### ApplicationHealthPolicyMapItem
* ApplicationHealthPolicyMapItem `object`: Defines an item in ApplicationHealthPolicyMap.
  * Key **required** `string`: The key of the application health policy map item. This is the name of the application.
  * Value **required** [ApplicationHealthPolicy](#applicationhealthpolicy)

### ApplicationHealthState
* ApplicationHealthState: Represents the health state of an application, which contains the application identifier and the aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Name `string`: Full name of the application.

### ApplicationHealthStateChunk
* ApplicationHealthStateChunk: Represents the health state chunk of a application.
  * HealthState [HealthState](#healthstate)
  * ApplicationName `string`: The name of the application.
  * ApplicationTypeName `string`: The application type name for the application.
  * DeployedApplicationHealthStateChunks [DeployedApplicationHealthStateChunkList](#deployedapplicationhealthstatechunklist)
  * ServiceHealthStateChunks [ServiceHealthStateChunkList](#servicehealthstatechunklist)

### ApplicationHealthStateChunkList
* ApplicationHealthStateChunkList `object`: The list of application health state chunks in the cluster that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * TotalCount `integer`: Total number of entity health state objects that match the specified filters from the cluster health chunk query description.
  * Items `array`: The list of application health state chunks that respect the input filters in the chunk query.
    * items [ApplicationHealthStateChunk](#applicationhealthstatechunk)

### ApplicationHealthStateFilter
* ApplicationHealthStateFilter `object`: Defines matching criteria to determine whether a application should be included in the cluster health chunk.
  * ApplicationNameFilter `string`: The name of the application that matches the filter, as a fabric uri. The filter is applied only to the specified application, if it exists.
  * ApplicationTypeNameFilter `string`: The name of the application type that matches the filter.
  * DeployedApplicationFilters `array`: Defines a list of filters that specify which deployed applications to be included in the returned cluster health chunk as children of the application. The deployed applications are returned only if the parent application matches a filter.
    * items [DeployedApplicationHealthStateFilter](#deployedapplicationhealthstatefilter)
  * HealthStateFilter `integer`: The filter for the health state of the applications. It allows selecting applications if they match the desired health states.
  * ServiceFilters `array`: Defines a list of filters that specify which services to be included in the returned cluster health chunk as children of the application. The services are returned only if the parent application matches a filter.
    * items [ServiceHealthStateFilter](#servicehealthstatefilter)

### ApplicationId
* ApplicationId `string`: The identity of the application. This is same as application name without the 'fabric:' URI scheme. This is used in the REST APIs to identify the application resource.

### ApplicationInfo
* ApplicationInfo `object`: Information about a Service Fabric application.
  * HealthState [HealthState](#healthstate)
  * Id [ApplicationId](#applicationid)
  * Name `string`: The Uniform Resource Identifier(URI) of the application.
  * Parameters [ApplicationParameterList](#applicationparameterlist)
  * Status [ApplicationStatus](#applicationstatus)
  * TypeName `string`: The Name of the application type as specified in the Application Manifest.
  * TypeVersion `string`: The version of the application type as specified in the Application Manifest.

### ApplicationMetricDescription
* ApplicationMetricDescription `object`: Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
  * MaximumCapacity `integer`: The maximum node capacity for Service Fabric application. 
  * Name `string`: The name of the metric.
  * ReservationCapacity `integer`: The node reservation capacity for Service Fabric application. 
  * TotalApplicationCapacity `integer`: The total metric capacity for Service Fabric application. 

### ApplicationMetricDescriptionList
* ApplicationMetricDescriptionList `array`: List of application capacity metric description.
  * items [ApplicationMetricDescription](#applicationmetricdescription)

### ApplicationName
* ApplicationName `string`: The name of the application, including the 'fabric:' URI scheme.

### ApplicationNameInfo
* ApplicationNameInfo `object`: Information about the application name.
  * Id [ApplicationId](#applicationid)
  * Name [ApplicationName](#applicationname)

### ApplicationParameter
* ApplicationParameter `object`: Describes an application parameter override to be applied when creating or upgrading an application.
  * Key **required** `string`: The name of the parameter.
  * Value **required** `string`: The value of the parameter.

### ApplicationParameterList
* ApplicationParameterList `array`: List of application parameters with overridden values from their default values specified in the application manifest.
  * items [ApplicationParameter](#applicationparameter)

### ApplicationStatus
* ApplicationStatus `string` (values: Invalid, Ready, Upgrading, Creating, Deleting, Failed): The status of the application. Possible values are.

### ApplicationTypeApplicationsHealthEvaluation
* ApplicationTypeApplicationsHealthEvaluation: Represents health evaluation for applications of a particular application type. The application type applications evaluation can be returned when cluster health evaluation returns unhealthy aggregated health state, either Error or Warning. It contains health evaluations for each unhealthy application of the included application type that impacted current aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * ApplicationTypeName `string`: Name of the application type.
  * MaxPercentUnhealthyApplications `integer`: Maximum allowed percentage of unhealthy applications for the application type, specified as an entry in ApplicationTypeHealthPolicyMap.
  * TotalCount `integer`: Total number of applications of the application type found in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ApplicationTypeHealthPolicyMap
* ApplicationTypeHealthPolicyMap `array`: Defines a map with max percentage unhealthy applications for specific application types.
  * items [ApplicationTypeHealthPolicyMapItem](#applicationtypehealthpolicymapitem)

### ApplicationTypeHealthPolicyMapItem
* ApplicationTypeHealthPolicyMapItem `object`: Defines an item in ApplicationTypeHealthPolicyMap.
  * Key **required** `string`: The key of the application type health policy map item. This is the name of the application type.
  * Value **required** `integer`: The value of the application type health policy map item.

### ApplicationTypeImageStorePath
* ApplicationTypeImageStorePath `object`: Path description for the application package in the image store specified during the prior copy operation.
  * ApplicationTypeBuildPath **required** `string`: The relative image store path to the application package.

### ApplicationTypeImageStoreVersion
* ApplicationTypeImageStoreVersion `object`: A version description for the application type
  * ApplicationTypeVersion **required** `string`: The application type version.

### ApplicationTypeInfo
* ApplicationTypeInfo `object`: Information about an application type.
  * DefaultParameterList [ApplicationTypeParameterList](#applicationtypeparameterlist)
  * Name `string`: The name of the application type.
  * Status [ApplicationTypeStatus](#applicationtypestatus)
  * Version `string`: The version of the application type.

### ApplicationTypeManifest
* ApplicationTypeManifest `object`: Contains the manifest describing an application type registered in a Service Fabric cluster.
  * Manifest `string`: The XML manifest as a string.

### ApplicationTypeName
* ApplicationTypeName `string`: The application type name found in the application manifest.

### ApplicationTypeParameterList
* ApplicationTypeParameterList `array`: List of application type parameters that can be overridden when creating or updating the application.
  * items [ApplicationParameter](#applicationparameter)

### ApplicationTypeStatus
* ApplicationTypeStatus `string` (values: Invalid, Provisioning, Available, Unprovisioning, Failed): The status of the application type. Possible values are following.

### ApplicationTypeVersion
* ApplicationTypeVersion `string`: The version of the application type as defined in the application manifest.

### ApplicationUpgradeDescription
* ApplicationUpgradeDescription `object`: Describes the parameters for an application upgrade. Please note that upgrade description replaces the existing application description. This means that if the parameters are not specified, the existing parameters on the applications will be overwritten with the empty parameters list. This would results in application using the default value of the parameters from the application manifest. If you do not want to change any existing parameter values, please get the application parameters first using the GetApplicationInfo query and then supply those values as Parameters in this ApplicationUpgradeDescription.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ForceRestart [ForceRestart](#forcerestart)
  * MonitoringPolicy [MonitoringPolicyDescription](#monitoringpolicydescription)
  * Name **required** [TargetApplicationName](#targetapplicationname)
  * Parameters **required** [ApplicationParameterList](#applicationparameterlist)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * TargetApplicationTypeVersion **required** [TargetApplicationTypeVersion](#targetapplicationtypeversion)
  * UpgradeKind **required** [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### ApplicationUpgradeProgressInfo
* ApplicationUpgradeProgressInfo `object`: Describes the parameters for an application upgrade.
  * CurrentUpgradeDomainProgress [CurrentUpgradeDomainProgressInfo](#currentupgradedomainprogressinfo)
  * FailureReason [FailureReason](#failurereason)
  * FailureTimestampUtc `string`: The estimated UTC datetime when the upgrade failed and FailureAction was executed.
  * Name [TargetApplicationName](#targetapplicationname)
  * NextUpgradeDomain [NextUpgradeDomain](#nextupgradedomain)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * StartTimestampUtc `string`: The estimated UTC datetime when the upgrade started.
  * TargetApplicationTypeVersion [TargetApplicationTypeVersion](#targetapplicationtypeversion)
  * TypeName [ApplicationTypeName](#applicationtypename)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * UpgradeDescription [ApplicationUpgradeDescription](#applicationupgradedescription)
  * UpgradeDomainDurationInMilliseconds `string`: The estimated total amount of time spent processing the current upgrade domain.
  * UpgradeDomainProgressAtFailure [FailureUpgradeDomainProgressInfo](#failureupgradedomainprogressinfo)
  * UpgradeDomains [UpgradeDomainInfoList](#upgradedomaininfolist)
  * UpgradeDurationInMilliseconds `string`: The estimated total amount of time spent processing the overall upgrade.
  * UpgradeState [UpgradeState](#upgradestate)
  * UpgradeStatusDetails `string`: Additional detailed information about the status of the pending upgrade.

### ApplicationUpgradeUpdateDescription
* ApplicationUpgradeUpdateDescription `object`: Describes the parameters for updating an ongoing application upgrade.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * Name **required** [ApplicationName](#applicationname)
  * UpdateDescription [RollingUpgradeUpdateDescription](#rollingupgradeupdatedescription)
  * UpgradeKind **required** [UpgradeKind](#upgradekind)

### ApplicationsHealthEvaluation
* ApplicationsHealthEvaluation: Represents health evaluation for applications, containing health evaluations for each unhealthy application that impacted current aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyApplications `integer`: Maximum allowed percentage of unhealthy applications from the ClusterHealthPolicy.
  * TotalCount `integer`: Total number of applications from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ByteArray
* ByteArray `array`: Array of bytes to be sent as an integer array. Each element of array is a number between 0 and 255.
  * items `integer`

### ChaosContext
* ChaosContext `object`: Describes a map, which is a collection of (string, string) type key-value pairs. The map can be used to record information about
  * Map [ChaosContextMap](#chaoscontextmap)

### ChaosContextMap
* ChaosContextMap `object`: Describes a map that contains a collection of ChaosContextMapItem's.

### ChaosContextMapItem
* ChaosContextMapItem `object`: Describes an item in the ChaosContextMap in ChaosParameters.
  * Key **required** `string`: The key for a ChaosContextMapItem.
  * Value **required** `string`: The value for a ChaosContextMapItem.

### ChaosEvent
* ChaosEvent `object`: Represents an event generated during a Chaos run.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`

### ChaosEventHistory
* ChaosEventHistory `array`
  * items [ChaosEventWrapper](#chaoseventwrapper)

### ChaosEventKind
* ChaosEventKind `string` (values: Invalid, Started, ExecutingFaults, Waiting, ValidationFailed, TestError, Stopped): The kind of Chaos event.

### ChaosEventWrapper
* ChaosEventWrapper `object`: Wrapper object for Chaos event.
  * ChaosEvent [ChaosEvent](#chaosevent)

### ChaosParameters
* ChaosParameters `object`: Defines all the parameters to configure a Chaos run.
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * Context [ChaosContext](#chaoscontext)
  * EnableMoveReplicaFaults `boolean`: Enables or disables the move primary and move secondary faults.
  * MaxClusterStabilizationTimeoutInSeconds `integer`: The maximum amount of time to wait for all cluster entities to become stable and healthy. Chaos executes in iterations and at the start of each iteration it validates the health of cluster entities. 
  * MaxConcurrentFaults `integer`: MaxConcurrentFaults is the maximum number of concurrent faults induced per iteration.
  * TimeToRunInSeconds `string`: Total time (in seconds) for which Chaos will run before automatically stopping. The maximum allowed value is 4,294,967,295 (System.UInt32.MaxValue). 
  * WaitTimeBetweenFaultsInSeconds `integer`: Wait time (in seconds) between consecutive faults within a single iteration.
  * WaitTimeBetweenIterationsInSeconds `integer`: Time-separation (in seconds) between two consecutive iterations of Chaos.

### ChaosReport
* ChaosReport `object`: Contains detailed Chaos report.
  * ChaosParameters [ChaosParameters](#chaosparameters)
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * History [ChaosEventHistory](#chaoseventhistory)
  * Status `string` (values: Invalid, Running, Stopped): Current status of the Chaos run.

### ClusterFabricCodeVersionString
* ClusterFabricCodeVersionString `string`: The ServiceFabric code version of the cluster.

### ClusterFabricConfigVersionString
* ClusterFabricConfigVersionString `string`: The cluster configuration version (specified in the cluster manifest).

### ClusterHealth
* ClusterHealth: Represents the health of the cluster.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * ApplicationHealthStates `array`: Cluster application health states as found in the health store.
    * items [ApplicationHealthState](#applicationhealthstate)
  * NodeHealthStates `array`: Cluster node health states as found in the health store.
    * items [NodeHealthState](#nodehealthstate)

### ClusterHealthChunk
* ClusterHealthChunk `object`: Represents the health chunk of the cluster.
  * ApplicationHealthStateChunks [ApplicationHealthStateChunkList](#applicationhealthstatechunklist)
  * HealthState [HealthState](#healthstate)
  * NodeHealthStateChunks [NodeHealthStateChunkList](#nodehealthstatechunklist)

### ClusterHealthChunkQueryDescription
* ClusterHealthChunkQueryDescription `object`: The cluster health chunk query description, which can specify the health policies to evaluate cluster health and very expressive filters to select which cluster entities to include in response.
  * ApplicationFilters `array`: Defines a list of filters that specify which applications to be included in the returned cluster health chunk.
    * items [ApplicationHealthStateFilter](#applicationhealthstatefilter)
  * ApplicationHealthPolicies [ApplicationHealthPolicies](#applicationhealthpolicies)
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * NodeFilters `array`: Defines a list of filters that specify which nodes to be included in the returned cluster health chunk.
    * items [NodeHealthStateFilter](#nodehealthstatefilter)

### ClusterHealthPolicies
* ClusterHealthPolicies `object`: Health policies to evaluate cluster health.
  * ApplicationHealthPolicyMap [ApplicationHealthPolicyMap](#applicationhealthpolicymap)
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)

### ClusterHealthPolicy
* ClusterHealthPolicy `object`: Defines a health policy used to evaluate the health of the cluster or of a cluster node.
  * ApplicationTypeHealthPolicyMap [ApplicationTypeHealthPolicyMap](#applicationtypehealthpolicymap)
  * ConsiderWarningAsError `boolean`: Indicates whether warnings are treated with the same severity as errors.
  * MaxPercentUnhealthyApplications `integer`: The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10. 
  * MaxPercentUnhealthyNodes `integer`: The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10. 

### ClusterManifest
* ClusterManifest `object`: Information about the cluster manifest.
  * Manifest `string`: The contents of the cluster manifest file.

### ClusterUpgradeDescriptionObject
* ClusterUpgradeDescriptionObject `object`: Represents a ServiceFabric cluster upgrade
  * ApplicationHealthPolicyMap [ApplicationHealthPolicyMap](#applicationhealthpolicymap)
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * ClusterUpgradeHealthPolicy [ClusterUpgradeHealthPolicyObject](#clusterupgradehealthpolicyobject)
  * CodeVersion [ClusterFabricCodeVersionString](#clusterfabriccodeversionstring)
  * ConfigVersion [ClusterFabricConfigVersionString](#clusterfabricconfigversionstring)
  * EnableDeltaHealthEvaluation [DeltaHealthEvaluationBool](#deltahealthevaluationbool)
  * ForceRestart [ForceRestart](#forcerestart)
  * MonitoringPolicy [MonitoringPolicyDescription](#monitoringpolicydescription)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * UpgradeKind [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### ClusterUpgradeHealthPolicyObject
* ClusterUpgradeHealthPolicyObject `object`: Defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
  * MaxPercentDeltaUnhealthyNodes `integer`: The maximum allowed percentage of nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. The default value is 10%.
  * MaxPercentUpgradeDomainDeltaUnhealthyNodes `integer`: The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits. The default value is 15%.

### ClusterUpgradeProgressObject
* ClusterUpgradeProgressObject `object`: Information about a cluster upgrade.
  * CodeVersion [ClusterFabricCodeVersionString](#clusterfabriccodeversionstring)
  * ConfigVersion [ClusterFabricConfigVersionString](#clusterfabricconfigversionstring)
  * CurrentUpgradeDomainProgress [CurrentUpgradeDomainProgressInfo](#currentupgradedomainprogressinfo)
  * FailureReason [FailureReason](#failurereason)
  * FailureTimestampUtc [UpgradeFailureTimeUTCString](#upgradefailuretimeutcstring)
  * NextUpgradeDomain [NextUpgradeDomain](#nextupgradedomain)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * StartTimestampUtc [UpgradeStartTimeUTCString](#upgradestarttimeutcstring)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * UpgradeDescription [ClusterUpgradeDescriptionObject](#clusterupgradedescriptionobject)
  * UpgradeDomainDurationInMilliseconds [UpgradeDomainDurationString](#upgradedomaindurationstring)
  * UpgradeDomainProgressAtFailure [FailedUpgradeDomainProgressObject](#failedupgradedomainprogressobject)
  * UpgradeDomains [UpgradeDomainInfoList](#upgradedomaininfolist)
  * UpgradeDurationInMilliseconds [UpgradeDurationString](#upgradedurationstring)
  * UpgradeState [UpgradeState](#upgradestate)

### CodePackageEntryPoint
* CodePackageEntryPoint `object`: Information about setup or main entry point of a code package deployed on a Service Fabric node.
  * CodePackageEntryPointStatistics [CodePackageEntryPointStatistics](#codepackageentrypointstatistics)
  * EntryPointLocation `string`: The location of entry point executable on the node.
  * InstanceId [InstanceId](#instanceid)
  * NextActivationTime `string`: The time (in UTC) when the entry point executable will be run next.
  * ProcessId `string`: The process id of the entry point.
  * RunAsUserName `string`: The user name under which entry point executable is run on the node.
  * Status [EntryPointStatus](#entrypointstatus)

### CodePackageEntryPointStatistics
* CodePackageEntryPointStatistics `object`: Statistics about setup or main entry point  of a code package deployed on a Service Fabric node.
  * ActivationCount `string`: Number of times the entry point has run.
  * ActivationFailureCount `string`: Number of times the entry point failed to run.
  * ContinuousActivationFailureCount `string`: Number of times the entry point continuously failed to run.
  * ContinuousExitFailureCount `string`: Number of times the entry point continuously failed to exit gracefully.
  * ExitCount `string`: Number of times the entry point finished running.
  * ExitFailureCount `string`: Number of times the entry point failed to exit gracefully.
  * LastActivationTime `string`: The last time (in UTC) when Service Fabric attempted to run the entry point.
  * LastExitCode `string`: The last exit code of the entry point.
  * LastExitTime `string`: The last time (in UTC) when the entry point finished running.
  * LastSuccessfulActivationTime `string`: The last time (in UTC) when the entry point ran successfully.
  * LastSuccessfulExitTime `string`: The last time (in UTC) when the entry point finished running gracefully.

### ComposeApplicationStatus
* ComposeApplicationStatus `string` (values: Invalid, Provisioning, Creating, Created, Unprovisioning, Deleting, Failed): The status of the compose application. Possible values are.

### ComposeApplicationStatusInfo
* ComposeApplicationStatusInfo `object`: Information about a Service Fabric compose application.
  * Name [ApplicationName](#applicationname)
  * Status [ComposeApplicationStatus](#composeapplicationstatus)
  * StatusDetails `string`: The status details of compose application including failure message.

### ContinuationToken
* ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token is not included in the response.

### CorrelationSchemeList
* CorrelationSchemeList `array`: A list that describes the correlation of the service with other services.
  * items [ServiceCorrelationDescription](#servicecorrelationdescription)

### CreateComposeApplicationDescription
* CreateComposeApplicationDescription `object`: Defines description for creating a Service Fabric compose application.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ComposeFileContent **required** `string`: The content of the compose file that describes application to create.
  * RepositoryCredential [RepositoryCredential](#repositorycredential)

### CurrentUpgradeDomainProgressInfo
* CurrentUpgradeDomainProgressInfo `object`: Information about the current in-progress upgrade domain.
  * DomainName [UpgradeDomainName](#upgradedomainname)
  * NodeUpgradeProgressList [NodeUpgradeProgressInfoList](#nodeupgradeprogressinfolist)

### DeactivationIntentDescription
* DeactivationIntentDescription `object`: Describes the intent or reason for deactivating the node.
  * DeactivationIntent `string` (values: Pause, Restart, RemoveData): Describes the intent or reason for deactivating the node. The possible values are following.

### DeltaHealthEvaluationBool
* DeltaHealthEvaluationBool `boolean`: When true, enables delta health evaluation rather than absolute health evaluation after completion of each upgrade domain.

### DeltaNodesCheckHealthEvaluation
* DeltaNodesCheckHealthEvaluation: Represents health evaluation for delta nodes, containing health evaluations for each unhealthy node that impacted current aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * BaselineErrorCount `integer`: Number of nodes with aggregated heath state Error in the health store at the beginning of the cluster upgrade.
  * BaselineTotalCount `integer`: Total number of nodes in the health store at the beginning of the cluster upgrade.
  * MaxPercentDeltaUnhealthyNodes `integer`: Maximum allowed percentage of delta unhealthy nodes from the ClusterUpgradeHealthPolicy.
  * TotalCount `integer`: Total number of nodes in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployServicePackageToNodeDescription
* DeployServicePackageToNodeDescription `object`: Defines description for downloading packages associated with a service manifest to image cache on a Service Fabric node.
  * ApplicationTypeName **required** [ApplicationTypeName](#applicationtypename)
  * ApplicationTypeVersion **required** [ApplicationTypeVersion](#applicationtypeversion)
  * NodeName **required** [NodeName](#nodename)
  * PackageSharingPolicy [PackageSharingPolicyInfoList](#packagesharingpolicyinfolist)
  * ServiceManifestName **required** `string`: The name of service manifest whose packages need to be downloaded.

### DeployedApplicationHealth
* DeployedApplicationHealth: Information about the health of an application deployed on a Service Fabric node.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * DeployedServicePackageHealthStates [DeployedServicePackageHealthStateList](#deployedservicepackagehealthstatelist)
  * Name `string`: Name of the application deployed on the node whose health information is described by this object.
  * NodeName `string`: Name of the node where this application is deployed.

### DeployedApplicationHealthEvaluation
* DeployedApplicationHealthEvaluation: Represents health evaluation for a deployed application, containing information about the data and the algorithm used by the health store to evaluate health. 
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * ApplicationName `string`: Full name of the application.
  * NodeName `string`: Name of the node where the application is deployed to.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployedApplicationHealthState
* DeployedApplicationHealthState: Represents the health state of a deployed application, which contains the entity identifier and the aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * ApplicationName `string`: Full name of the application.
  * NodeName `string`: Name of the node on which the service package is deployed.

### DeployedApplicationHealthStateChunk
* DeployedApplicationHealthStateChunk: Represents the health state chunk of a deployed application, which contains the node where the application is deployed, the aggregated health state and any deployed service packages that respect the chunk query description filters.
  * HealthState [HealthState](#healthstate)
  * DeployedServicePackageHealthStateChunks [DeployedServicePackageHealthStateChunkList](#deployedservicepackagehealthstatechunklist)
  * NodeName `string`: The name of node where the application is deployed.

### DeployedApplicationHealthStateChunkList
* DeployedApplicationHealthStateChunkList `object`: The list of deployed application health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of deployed application health state chunks that respect the input filters in the chunk query.
    * items [DeployedApplicationHealthStateChunk](#deployedapplicationhealthstatechunk)

### DeployedApplicationHealthStateFilter
* DeployedApplicationHealthStateFilter `object`: Defines matching criteria to determine whether a deployed application should be included as a child of an application in the cluster health chunk.
  * DeployedServicePackageFilters `array`: Defines a list of filters that specify which deployed service packages to be included in the returned cluster health chunk as children of the parent deployed application. The deployed service packages are returned only if the parent deployed application matches a filter.
    * items [DeployedServicePackageHealthStateFilter](#deployedservicepackagehealthstatefilter)
  * HealthStateFilter `integer`: The filter for the health state of the deployed applications. It allows selecting deployed applications if they match the desired health states.
  * NodeNameFilter `string`: The name of the node where the application is deployed in order to match the filter.

### DeployedApplicationInfo
* DeployedApplicationInfo `object`: Information about application deployed on the node.
  * Id [ApplicationId](#applicationid)
  * LogDirectory `string`: The log directory of the application on the node. The log directory can be used to store application logs.
  * Name `string`: The name of the application.
  * Status [DeployedApplicationStatus](#deployedapplicationstatus)
  * TempDirectory `string`: The temp directory of the application on the node. The code packages belonging to the application are forked with this directory set as their temporary directory.
  * TypeName `string`: The name of the application type.
  * WorkDirectory `string`: The work directory of the application on the node. The work directory can be used to store application data.

### DeployedApplicationInfoList
* DeployedApplicationInfoList `array`: List of deployed application information.
  * items [DeployedApplicationInfo](#deployedapplicationinfo)

### DeployedApplicationStatus
* DeployedApplicationStatus `string` (values: Invalid, Downloading, Activating, Active, Upgrading, Deactivating): The status of the application deployed on the node. Following are the possible values.

### DeployedApplicationsHealthEvaluation
* DeployedApplicationsHealthEvaluation: Represents health evaluation for deployed applications, containing health evaluations for each unhealthy deployed application that impacted current aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyDeployedApplications `integer`: Maximum allowed percentage of unhealthy deployed applications from the ApplicationHealthPolicy.
  * TotalCount `integer`: Total number of deployed applications of the application in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployedCodePackageInfo
* DeployedCodePackageInfo `object`: Information about code package deployed on a Service Fabric node.
  * HostIsolationMode [HostIsolationMode](#hostisolationmode)
  * HostType [HostType](#hosttype)
  * MainEntryPoint [CodePackageEntryPoint](#codepackageentrypoint)
  * Name `string`: The name of the code package.
  * RunFrequencyInterval `string`: The interval at which code package is run. This is used for periodic code package.
  * ServiceManifestName `string`: The name of service manifest that specified this code package.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * SetupEntryPoint [CodePackageEntryPoint](#codepackageentrypoint)
  * Status [DeploymentStatus](#deploymentstatus)
  * Version `string`: The version of the code package specified in service manifest.

### DeployedCodePackageInfoList
* DeployedCodePackageInfoList `array`: List of deployed code package information.
  * items [DeployedCodePackageInfo](#deployedcodepackageinfo)

### DeployedServicePackageHealth
* DeployedServicePackageHealth: Information about the health of a service package for a specific application deployed on a Service Fabric node.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * ApplicationName `string`: Name of the application.
  * NodeName `string`: Name of the node where this service package is deployed.
  * ServiceManifestName `string`: Name of the service manifest.

### DeployedServicePackageHealthEvaluation
* DeployedServicePackageHealthEvaluation: Represents health evaluation for a deployed service package, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * ApplicationName `string`: Full name of the application.
  * NodeName `string`: Name of the node.
  * ServiceManifestName `string`: Name of the service manifest.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployedServicePackageHealthState
* DeployedServicePackageHealthState: Represents the health state of a deployed service package, containing the entity identifier and the aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * ApplicationName `string`: Full name of the application.
  * NodeName `string`: Name of the node on which the service package is deployed.
  * ServiceManifestName `string`: Name of the manifest describing the service package.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)

### DeployedServicePackageHealthStateChunk
* DeployedServicePackageHealthStateChunk: Represents the health state chunk of a deployed service package, which contains the service manifest name and the service package aggregated health state.
  * HealthState [HealthState](#healthstate)
  * ServiceManifestName `string`: The name of the service manifest.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)

### DeployedServicePackageHealthStateChunkList
* DeployedServicePackageHealthStateChunkList `object`: The list of deployed service package health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of deployed service package health state chunks that respect the input filters in the chunk query.
    * items [DeployedServicePackageHealthStateChunk](#deployedservicepackagehealthstatechunk)

### DeployedServicePackageHealthStateFilter
* DeployedServicePackageHealthStateFilter `object`: Defines matching criteria to determine whether a deployed service package should be included as a child of a deployed application in the cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the deployed service packages. It allows selecting deployed service packages if they match the desired health states.
  * ServiceManifestNameFilter `string`: The name of the service manifest which identifies the deployed service packages that matches the filter.
  * ServicePackageActivationIdFilter `string`: The activation ID of a deployed service package that matches the filter.

### DeployedServicePackageHealthStateList
* DeployedServicePackageHealthStateList `array`: List of health states for a service package deployed on a Service Fabric node.
  * items [DeployedServicePackageHealthState](#deployedservicepackagehealthstate)

### DeployedServicePackageInfo
* DeployedServicePackageInfo `object`: Information about service package deployed on a Service Fabric node.
  * Name `string`: The name of the service package.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * Status [DeploymentStatus](#deploymentstatus)
  * Version `string`: The version of the service package specified in service manifest.

### DeployedServicePackageInfoList
* DeployedServicePackageInfoList `array`: List of deployed service package information.
  * items [DeployedServicePackageInfo](#deployedservicepackageinfo)

### DeployedServicePackagesHealthEvaluation
* DeployedServicePackagesHealthEvaluation: Represents health evaluation for deployed service packages, containing health evaluations for each unhealthy deployed service package that impacted current aggregated health state. Can be returned when evaluating deployed application health and the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * TotalCount `integer`: Total number of deployed service packages of the deployed application in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployedServiceReplicaDetailInfo
* DeployedServiceReplicaDetailInfo `object`: Information about a Service Fabric service replica deployed on a node.
  * CurrentServiceOperation [ServiceOperationName](#serviceoperationname)
  * CurrentServiceOperationStartTimeUtc `string`: The start time of the current service operation in UTC format.
  * PartitionId [PartitionId](#partitionid)
  * ReportedLoad [LoadMetricReportInfoList](#loadmetricreportinfolist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceName `string`: Full hierarchical name of the service in URI format starting with `fabric:`.

### DeployedServiceReplicaInfo
* DeployedServiceReplicaInfo `object`: Information about a Service Fabric service replica deployed on a node.
  * Address `string`: The last address returned by the replica in Open or ChangeRole.
  * CodePackageName `string`: The name of the code package that hosts this replica.
  * PartitionID [PartitionId](#partitionid)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceManifestName `string`: The name of the service manifest in which this service type is defined.
  * ServiceName `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName `string`: Name of the service type as specified in the service manifest.

### DeployedServiceReplicaInfoList
* DeployedServiceReplicaInfoList `array`: List of deployed service replica information.
  * items [DeployedServiceReplicaInfo](#deployedservicereplicainfo)

### DeployedServiceTypeInfo
* DeployedServiceTypeInfo `object`: Information about service type deployed on a node, information such as the status of the service type registration on a node.
  * CodePackageName `string`: The name of the code package that registered the service type.
  * ServiceManifestName `string`: The name of the service manifest in which this service type is defined.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName `string`: The name of the service type defined in the service manifest.
  * Status [ServiceTypeRegistrationStatus](#servicetyperegistrationstatus)

### DeployedServiceTypeInfoList
* DeployedServiceTypeInfoList `array`: List of information about service type deployed on a node.
  * items [DeployedServiceTypeInfo](#deployedservicetypeinfo)

### DeployedStatefulServiceReplicaDetailInfo
* DeployedStatefulServiceReplicaDetailInfo: Information about a stateful replica running in a code package.
  * CurrentServiceOperation [ServiceOperationName](#serviceoperationname)
  * CurrentServiceOperationStartTimeUtc `string`: The start time of the current service operation in UTC format.
  * PartitionId [PartitionId](#partitionid)
  * ReportedLoad [LoadMetricReportInfoList](#loadmetricreportinfolist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceName `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * CurrentReplicatorOperation [ReplicatorOperationName](#replicatoroperationname)
  * ReadStatus [PartitionAccessStatus](#partitionaccessstatus)
  * ReplicaId `string`: Id of the stateful service replica.
  * ReplicaStatus [KeyValueStoreReplicaStatus](#keyvaluestorereplicastatus)
  * ReplicatorStatus [ReplicatorStatus](#replicatorstatus)
  * WriteStatus [PartitionAccessStatus](#partitionaccessstatus)

### DeployedStatefulServiceReplicaInfo
* DeployedStatefulServiceReplicaInfo: Information about a stateful service replica deployed on a node.
  * Address `string`: The last address returned by the replica in Open or ChangeRole.
  * CodePackageName `string`: The name of the code package that hosts this replica.
  * PartitionID [PartitionId](#partitionid)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceManifestName `string`: The name of the service manifest in which this service type is defined.
  * ServiceName `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName `string`: Name of the service type as specified in the service manifest.
  * ReplicaId `string`: Id of the stateful service replica.
  * ReplicaRole [ReplicaRole](#replicarole)

### DeployedStatelessServiceInstanceDetailInfo
* DeployedStatelessServiceInstanceDetailInfo: Information about a stateless instance running in a code package.
  * CurrentServiceOperation [ServiceOperationName](#serviceoperationname)
  * CurrentServiceOperationStartTimeUtc `string`: The start time of the current service operation in UTC format.
  * PartitionId [PartitionId](#partitionid)
  * ReportedLoad [LoadMetricReportInfoList](#loadmetricreportinfolist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceName `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * InstanceId `string`: Id of the stateless service instance.

### DeployedStatelessServiceInstanceInfo
* DeployedStatelessServiceInstanceInfo: Information about a stateless service instance deployed on a node.
  * Address `string`: The last address returned by the replica in Open or ChangeRole.
  * CodePackageName `string`: The name of the code package that hosts this replica.
  * PartitionID [PartitionId](#partitionid)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceManifestName `string`: The name of the service manifest in which this service type is defined.
  * ServiceName `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName `string`: Name of the service type as specified in the service manifest.
  * InstanceId `string`: Id of the stateless service instance.

### DeploymentStatus
* DeploymentStatus `string` (values: Invalid, Downloading, Activating, Active, Upgrading, Deactivating): Specifies the status of a deployed application or service package on a Service Fabric node. Possible values are following.

### EnsureAvailabilitySafetyCheck
* EnsureAvailabilitySafetyCheck: Safety check that waits for ensures the avaiability of the partition. It waits until there are replicas avaiabile such that bring down this replica will not cause avaiability loss for the partition.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### EnsurePartitionQurumSafetyCheck
* EnsurePartitionQurumSafetyCheck: Safety check that ensures that a quorum of replicas are not lost for a partition.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### EntityHealth
* EntityHealth `object`: Health information common to all entities in the cluster. It contains the aggregated health state, health events and unhealthy evaluation.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### EntityHealthState
* EntityHealthState `object`: A base type for the health state of various entities in the cluster. It contains the aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)

### EntityHealthStateChunk
* EntityHealthStateChunk `object`: A base type for the health state chunk of various entities in the cluster. It contains the aggregated health state.
  * HealthState [HealthState](#healthstate)

### EntityHealthStateChunkList
* EntityHealthStateChunkList `object`: A base type for the list of health state chunks found in the cluster. It contains the total number of health states that match the input filters.
  * TotalCount `integer`: Total number of entity health state objects that match the specified filters from the cluster health chunk query description.

### EntryPointStatus
* EntryPointStatus `string` (values: Invalid, Pending, Starting, Started, Stopping, Stopped): Specifies the status of the code package entry point deployed on a Service Fabric node. Possible values are following.

### Epoch
* Epoch `object`: An Epoch is a configuration number for the partition as a whole. When the configuration of the replica set changes, for example when the Primary replica changes, the operations that are replicated from the new Primary replica are said to be a new Epoch from the ones which were sent by the old Primary replica.
  * ConfigurationVersion `string`: The current configuration number of this Epoch. The configuration number is an increasing value that is updated whenever the configuration of this replica set changes.
  * DataLossVersion `string`: The current dataloss number of this Epoch. The data loss number property is an increasing value which is updated whenever data loss is suspected, as when loss of a quorum of replicas in the replica set that includes the Primary replica.

### EventHealthEvaluation
* EventHealthEvaluation: Represents health evaluation of a HealthEvent that was reported on the entity.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * ConsiderWarningAsError `boolean`: Indicates whether warnings are treated with the same severity as errors. The field is specified in the health policy used to evaluate the entity.
  * UnhealthyEvent [HealthEvent](#healthevent)

### ExecutingFaultsChaosEvent
* ExecutingFaultsChaosEvent: Describes a Chaos event that gets generated when Chaos has decided on the faults for an iteration. This Chaos event contains the details of the faults as a list of strings.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`
  * Faults `array`
    * items `string`

### FabricCodeVersionInfo
* FabricCodeVersionInfo `object`: Information about a Service Fabric code version.
  * CodeVersion `string`: The product version of Service Fabric.

### FabricCodeVersionInfoList
* FabricCodeVersionInfoList `array`: List of all Service Fabric code versions.
  * items [FabricCodeVersionInfo](#fabriccodeversioninfo)

### FabricConfigVersionInfo
* FabricConfigVersionInfo `object`: Information about a Service Fabric config version.
  * ConfigVersion `string`: The config version of Service Fabric.

### FabricConfigVersionInfoList
* FabricConfigVersionInfoList `array`: List of all Service Fabric config versions.
  * items [FabricConfigVersionInfo](#fabricconfigversioninfo)

### FabricError
* FabricError `object`: The REST API operations for Service Fabric return standard HTTP status codes. This type defines the additional information returned from the Service Fabric API operations that are not successful.
  * Error **required** [FabricError_Error](#fabricerror_error)

### FabricErrorCodes
* FabricErrorCodes `string` (values: FABRIC_E_INVALID_PARTITION_KEY, FABRIC_E_IMAGEBUILDER_VALIDATION_ERROR, FABRIC_E_INVALID_ADDRESS, FABRIC_E_APPLICATION_NOT_UPGRADING, FABRIC_E_APPLICATION_UPGRADE_VALIDATION_ERROR, FABRIC_E_FABRIC_NOT_UPGRADING, FABRIC_E_FABRIC_UPGRADE_VALIDATION_ERROR, FABRIC_E_INVALID_CONFIGURATION, FABRIC_E_INVALID_NAME_URI, FABRIC_E_PATH_TOO_LONG, FABRIC_E_KEY_TOO_LARGE, FABRIC_E_SERVICE_AFFINITY_CHAIN_NOT_SUPPORTED, FABRIC_E_INVALID_ATOMIC_GROUP, FABRIC_E_VALUE_EMPTY, FABRIC_E_NODE_NOT_FOUND, FABRIC_E_APPLICATION_TYPE_NOT_FOUND, FABRIC_E_APPLICATION_NOT_FOUND, FABRIC_E_SERVICE_TYPE_NOT_FOUND, FABRIC_E_SERVICE_DOES_NOT_EXIST, FABRIC_E_SERVICE_TYPE_TEMPLATE_NOT_FOUND, FABRIC_E_CONFIGURATION_SECTION_NOT_FOUND, FABRIC_E_PARTITION_NOT_FOUND, FABRIC_E_REPLICA_DOES_NOT_EXIST, FABRIC_E_SERVICE_GROUP_DOES_NOT_EXIST, FABRIC_E_CONFIGURATION_PARAMETER_NOT_FOUND, FABRIC_E_DIRECTORY_NOT_FOUND, FABRIC_E_FABRIC_VERSION_NOT_FOUND, FABRIC_E_FILE_NOT_FOUND, FABRIC_E_NAME_DOES_NOT_EXIST, FABRIC_E_PROPERTY_DOES_NOT_EXIST, FABRIC_E_ENUMERATION_COMPLETED, FABRIC_E_SERVICE_MANIFEST_NOT_FOUND, FABRIC_E_KEY_NOT_FOUND, FABRIC_E_HEALTH_ENTITY_NOT_FOUND, FABRIC_E_APPLICATION_TYPE_ALREADY_EXISTS, FABRIC_E_APPLICATION_ALREADY_EXISTS, FABRIC_E_APPLICATION_ALREADY_IN_TARGET_VERSION, FABRIC_E_APPLICATION_TYPE_PROVISION_IN_PROGRESS, FABRIC_E_APPLICATION_UPGRADE_IN_PROGRESS, FABRIC_E_SERVICE_ALREADY_EXISTS, FABRIC_E_SERVICE_GROUP_ALREADY_EXISTS, FABRIC_E_APPLICATION_TYPE_IN_USE, FABRIC_E_FABRIC_ALREADY_IN_TARGET_VERSION, FABRIC_E_FABRIC_VERSION_ALREADY_EXISTS, FABRIC_E_FABRIC_VERSION_IN_USE, FABRIC_E_FABRIC_UPGRADE_IN_PROGRESS, FABRIC_E_NAME_ALREADY_EXISTS, FABRIC_E_NAME_NOT_EMPTY, FABRIC_E_PROPERTY_CHECK_FAILED, FABRIC_E_SERVICE_METADATA_MISMATCH, FABRIC_E_SERVICE_TYPE_MISMATCH, FABRIC_E_HEALTH_STALE_REPORT, FABRIC_E_SEQUENCE_NUMBER_CHECK_FAILED, FABRIC_E_NODE_HAS_NOT_STOPPED_YET, FABRIC_E_INSTANCE_ID_MISMATCH, FABRIC_E_VALUE_TOO_LARGE, FABRIC_E_NO_WRITE_QUORUM, FABRIC_E_NOT_PRIMARY, FABRIC_E_NOT_READY, FABRIC_E_RECONFIGURATION_PENDING, FABRIC_E_SERVICE_OFFLINE, E_ABORT, FABRIC_E_COMMUNICATION_ERROR, FABRIC_E_OPERATION_NOT_COMPLETE, FABRIC_E_TIMEOUT, FABRIC_E_NODE_IS_UP): Defines the fabric error codes that be returned as part of the error object in response to Service Fabric API operations that are not successful. Following are the error code values that can be returned for a specific HTTP status code.

### FabricError_Error
* FabricError_Error `object`: Error object containing error code and error message.
  * Code **required** [FabricErrorCodes](#fabricerrorcodes)
  * Message `string`: Error message.

### FabricReplicaStatus
* FabricReplicaStatus `string` (values: Invalid, Down, Up): Specifies the status of the replica. Possible values are following.

### FailedUpgradeDomainProgressObject
* FailedUpgradeDomainProgressObject `object`: The detailed upgrade progress for nodes in the current upgrade domain at the point of failure.
  * DomainName [UpgradeDomainName](#upgradedomainname)
  * NodeUpgradeProgressList [NodeUpgradeProgressInfoList](#nodeupgradeprogressinfolist)

### FailureAction
* FailureAction `string` (values: Invalid, Rollback, Manual): The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations.

### FailureReason
* FailureReason `string` (values: None, Interrupted, HealthCheck, UpgradeDomainTimeout, UpgradeTimeout): The cause of an upgrade failure that resulted in FailureAction being executed.

### FailureUpgradeDomainProgressInfo
* FailureUpgradeDomainProgressInfo `object`: Information about the upgrade domain progress at the time of upgrade failure.
  * DomainName [UpgradeDomainName](#upgradedomainname)
  * NodeUpgradeProgressList [NodeUpgradeProgressInfoList](#nodeupgradeprogressinfolist)

### FileInfo
* FileInfo `object`: Information about a image store file.
  * FileSize `string`: The size of file in bytes.
  * FileVersion [FileVersion](#fileversion)
  * ModifiedDate `string`: The date and time when the image store file was last modified.
  * StoreRelativePath `string`: The file path relative to the image store root path.

### FileVersion
* FileVersion `object`: Information about the version of image store file.
  * EpochDataLossNumber `string`: The epoch data loss number of image store file is used to indicate the status of data loss.
  * VersionNumber `string`: The current iamge store version number for the file is used in image store for checking whether it need to be updated.

### FolderInfo
* FolderInfo `object`: Information about a image store folder. It inclues how many files this folder contains and its image store relative path.
  * FileCount `string`: The number of files from within the image store folder.
  * StoreRelativePath [ImageStoreRelativePath](#imagestorerelativepath)

### ForceRestart
* ForceRestart `boolean`: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).

### HealthCheckRetryTimeout
* HealthCheckRetryTimeout `string`: The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### HealthCheckStableDuration
* HealthCheckStableDuration `string`: The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### HealthCheckWaitDuration
* HealthCheckWaitDuration `string`: The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### HealthEvaluation
* HealthEvaluation `object`: Represents a health evaluation which describes the data and the algorithm used by health manager to evaluate the health of an entity.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### HealthEvaluationKind
* HealthEvaluationKind `string` (values: Invalid, Event, Replicas, Partitions, DeployedServicePackages, DeployedApplications, Services, Nodes, Applications, SystemApplication, UpgradeDomainDeployedApplications, UpgradeDomainNodes, Replica, Partition, DeployedServicePackage, DeployedApplication, Service, Node, Application, DeltaNodesCheck, UpgradeDomainDeltaNodesCheck, ApplicationTypeApplications): The health manager in the cluster performs health evalautions in determining the aggregated health state of an entity. This enumeration provides information on the kind of evaluation that was performed. Following are the possible values.

### HealthEvaluationWrapper
* HealthEvaluationWrapper `object`: Wrapper object for health evaluation.
  * HealthEvaluation [HealthEvaluation](#healthevaluation)

### HealthEvent
* HealthEvent: Represents health information reported on a health entity, such as cluster, application or node, with additional metadata added by the Health Manager.
  * Description `string`: The description of the health information. It represents free text used to add human readable information about the report.
  * HealthState **required** [HealthState](#healthstate)
  * Property **required** `string`: The property of the health information. An entity can have health reports for different properties.
  * RemoveWhenExpired `boolean`: Value that indicates whether the report is removed from health store when it expires.
  * SequenceNumber `string`: The sequence number for this health report as a numeric string.
  * SourceId **required** `string`: The source name which identifies the client/watchdog/system component which generated the health information.
  * TimeToLiveInMilliSeconds `string`: The duration for which this health report is valid. This field is using ISO8601 format for specifying the duration.
  * IsExpired `boolean`: Returns true if the health event is expired, otherwise false.
  * LastErrorTransitionAt `string`: If the current health state is 'Error', this property returns the time at which the health report was first reported with 'Error'. For periodic reporting, many reports with the same state may have been generated however, this property returns only the date and time at the first 'Error' health report was received.
  * LastModifiedUtcTimestamp `string`: The date and time when the health report was last modified by the health store.
  * LastOkTransitionAt `string`: If the current health state is 'Ok', this property returns the time at which the health report was first reported with 'Ok'.
  * LastWarningTransitionAt `string`: If the current health state is 'Warning', this property returns the time at which the health report was first reported with 'Warning'. For periodic reporting, many reports with the same state may have been generated however, this property returns only the date and time at the first 'Warning' health report was received.
  * SourceUtcTimestamp `string`: The date and time when the health report was sent by the source.

### HealthInformation
* HealthInformation `object`: Represents common health report information. It is included in all health reports sent to health store and in all health events returned by health queries.
  * Description `string`: The description of the health information. It represents free text used to add human readable information about the report.
  * HealthState **required** [HealthState](#healthstate)
  * Property **required** `string`: The property of the health information. An entity can have health reports for different properties.
  * RemoveWhenExpired `boolean`: Value that indicates whether the report is removed from health store when it expires.
  * SequenceNumber `string`: The sequence number for this health report as a numeric string.
  * SourceId **required** `string`: The source name which identifies the client/watchdog/system component which generated the health information.
  * TimeToLiveInMilliSeconds `string`: The duration for which this health report is valid. This field is using ISO8601 format for specifying the duration.

### HealthState
* HealthState `string` (values: Invalid, Ok, Warning, Error, Unknown): The health state of a Service Fabric entity such as Cluster, Node, Application, Service, Partition, Replica etc.

### HostIsolationMode
* HostIsolationMode `string` (values: None, Process, HyperV): Specifies the isolation mode of main entry point of a code package when it's host type is ContainerHost. This is specified as part of container host policies in application manifest while importing service manifest. Possible values are following.

### HostType
* HostType `string` (values: Invalid, ExeHost, ContainerHost): Specifies the type of host for main entry point of a code package as specified in service manifest. Possible values are following.

### ImageStoreContent
* ImageStoreContent `object`: Information about the image store content.
  * StoreFiles `array`: The list of image store file info objects represents files found under the given image store relative path.
    * items [FileInfo](#fileinfo)
  * StoreFolders `array`: The list of image store folder info objectes represents subfolders found under the given image store relative path.
    * items [FolderInfo](#folderinfo)

### ImageStoreCopyDescription
* ImageStoreCopyDescription `object`: Information about how to copy image store content from one image store relative path to another image store relative path.
  * CheckMarkFile `boolean`: Indicates whether to check mark file during copying. The property is true if checking mark file is required, false otherwise. The mark file is used to check whether the folder is well constructed. If the property is true and mark file does not exist, the copy is skipped.
  * RemoteDestination **required** `string`: The relative path of destination image store content to be copied to.
  * RemoteSource **required** `string`: The relative path of source image store content to be copied from.
  * SkipFiles `array`: The list of the file names to be skipped for copying.
    * items `string`

### ImageStoreRelativePath
* ImageStoreRelativePath `string`: The remote location within image store. This path is relative to the image store root.

### InstanceId
* InstanceId `string`: The instance id for current running entry point. For a code package setup entry point (if specified) runs first and after it finishes main entry point is started. Each time entry point executable is run, its instance id will change.

### Int64RangePartitionInformation
* Int64RangePartitionInformation `object`: Describes the partition information for the integer range that is based on partition schemes.
  * HighKey `string`: Specifies the maximum key value handled by this partition.
  * LowKey `string`: Specifies the minimum key value handled by this partition.
  * Id [PartitionId](#partitionid)
  * ServicePartitionKind **required** [ServicePartitionKind](#servicepartitionkind)

### InvokeDataLossResult
* InvokeDataLossResult `object`: Represents information about an operation in a terminal state (Completed or Faulted).
  * ErrorCode `integer`: If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason.
  * SelectedPartition [SelectedPartition](#selectedpartition)

### InvokeQuorumLossResult
* InvokeQuorumLossResult `object`: Represents information about an operation in a terminal state (Completed or Faulted).
  * ErrorCode `integer`: If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason.
  * SelectedPartition [SelectedPartition](#selectedpartition)

### KeyValueStoreReplicaStatus
* KeyValueStoreReplicaStatus: Key value store related information for the replica.
  * Kind **required** [ReplicaKind](#replicakind)
  * CopyNotificationCurrentKeyFilter `string`: Value indicating the latest key-prefix filter applied to enumeration during the callback. Null if there is no pending callback.
  * CopyNotificationCurrentProgress `string`: Value indicating the latest number of keys enumerated during the callback. 0 if there is no pending callback.
  * DatabaseLogicalSizeEstimate `string`: Value indicating the estimated size of the underlying database.
  * DatabaseRowCountEstimate `string`: Value indicating the estimated number of rows in the underlying database.
  * StatusDetails `string`: Value indicating the current status details of the replica.

### LoadMetricReport
* LoadMetricReport `object`: Represents the load metric report which contains the time metric was reported, its name and value.
  * LastReportedUtc `string`: Gets the UTC time when the load was reported.
  * Name `string`: The name of the load metric.
  * Value `string`: The value of the load metric.

### LoadMetricReportInfo
* LoadMetricReportInfo `object`: Information about load reported by replica.
  * LastReportedUtc `string`: The UTC time when the load is reported.
  * Name `string`: The name of the metric.
  * Value `integer`: The value of the load for the metric..

### LoadMetricReportInfoList
* LoadMetricReportInfoList `array`: List of load reported by replica.
  * items [LoadMetricReportInfo](#loadmetricreportinfo)

### MonitoringPolicyDescription
* MonitoringPolicyDescription `object`: Describes the parameters for monitoring an upgrade in Monitored mode.
  * FailureAction [FailureAction](#failureaction)
  * HealthCheckRetryTimeoutInMilliseconds [HealthCheckRetryTimeout](#healthcheckretrytimeout)
  * HealthCheckStableDurationInMilliseconds [HealthCheckStableDuration](#healthcheckstableduration)
  * HealthCheckWaitDurationInMilliseconds [HealthCheckWaitDuration](#healthcheckwaitduration)
  * UpgradeDomainTimeoutInMilliseconds [UpgradeDomainTimeout](#upgradedomaintimeout)
  * UpgradeTimeoutInMilliseconds [UpgradeTimeout](#upgradetimeout)

### MoveCost
* MoveCost `string` (values: Zero, Low, Medium, High): Specifies the move cost for the service. Possible values are the following.

### NamedPartitionInformation
* NamedPartitionInformation `object`: Describes the partition information for the name as a string that is based on partition schemes.
  * Name `string`: Name of the partition.
  * Id [PartitionId](#partitionid)
  * ServicePartitionKind **required** [ServicePartitionKind](#servicepartitionkind)

### NamedPartitionSchemeDescription
* NamedPartitionSchemeDescription `object`: Describes the named partition scheme of the service.
  * Count **required** `integer`: The number of partitions.
  * Names **required** `array`: Array of size specified by the ‘Count’ parameter, for the names of the partitions.
    * items `string`
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### NextUpgradeDomain
* NextUpgradeDomain `string`: The name of the next upgrade domain to be processed.

### NodeDeactivationInfo
* NodeDeactivationInfo `object`: Information about the node deactivation. This information is valid for a node that is undergoing deactivation or has already been deactivated.
  * NodeDeactivationIntent [NodeDeactivationIntent](#nodedeactivationintent)
  * NodeDeactivationStatus [NodeDeactivationStatus](#nodedeactivationstatus)
  * NodeDeactivationTask [NodeDeactivationTaskList](#nodedeactivationtasklist)
  * PendingSafetyChecks [SafetyCheckInfoList](#safetycheckinfolist)

### NodeDeactivationIntent
* NodeDeactivationIntent `string` (values: Invalid, Pause, Restart, RemoveData, RemoveNode): The intent or the reason for deactivating the node. Following are the possible values for it.

### NodeDeactivationStatus
* NodeDeactivationStatus `string` (values: None, SafetyCheckInProgress, SafetyCheckComplete, Completed): The status of node deactivation operation. Following are the possible values.

### NodeDeactivationTask
* NodeDeactivationTask `object`: The task representing the deactivation operation on the node.
  * NodeDeactivationIntent [NodeDeactivationIntent](#nodedeactivationintent)
  * NodeDeactivationTaskId [NodeDeactivationTaskId](#nodedeactivationtaskid)

### NodeDeactivationTaskId
* NodeDeactivationTaskId `object`: Identity of the task related to deactivation operation on the node.
  * Id `string`: Value of the task id.
  * NodeDeactivationTaskType [NodeDeactivationTaskType](#nodedeactivationtasktype)

### NodeDeactivationTaskList
* NodeDeactivationTaskList `array`: List of tasks representing the deactivation operation on the node.
  * items [NodeDeactivationTask](#nodedeactivationtask)

### NodeDeactivationTaskType
* NodeDeactivationTaskType `string` (values: Invalid, Infrastructure, Repair, Client): The type of the task that performed the node deactivation. Following are the possible values.

### NodeHealth
* NodeHealth: Information about the health of a Service Fabric node.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * Name `string`: Name of the node whose health information is described by this object.

### NodeHealthEvaluation
* NodeHealthEvaluation: Represents health evaluation for a node, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * NodeName `string`: Name of the node.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### NodeHealthState
* NodeHealthState: Represents the health state of a node, which contains the node identifier and its aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Id [NodeId](#nodeid)
  * Name `string`: The name of the node.

### NodeHealthStateChunk
* NodeHealthStateChunk: Represents the health state chunk of a node, which contains the node name and its aggregated health state.
  * HealthState [HealthState](#healthstate)
  * NodeName `string`: The name of the node.

### NodeHealthStateChunkList
* NodeHealthStateChunkList `object`: The list of node health state chunks in the cluster that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * TotalCount `integer`: Total number of entity health state objects that match the specified filters from the cluster health chunk query description.
  * Items `array`: The list of node health state chunks that respect the input filters in the chunk query.
    * items [NodeHealthStateChunk](#nodehealthstatechunk)

### NodeHealthStateFilter
* NodeHealthStateFilter `object`: Defines matching criteria to determine whether a node should be included in the returned cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the nodes. It allows selecting nodes if they match the desired health states.
  * NodeNameFilter `string`: Name of the node that matches the filter. The filter is applied only to the specified node, if it exists.

### NodeId
* NodeId `object`: An internal ID used by Service Fabric to uniquely identify a node. Node Id is deterministically generated from node name.
  * Id `string`: Value of the node Id. This is a 128 bit integer.

### NodeInfo
* NodeInfo `object`: Information about a node in Service Fabric cluster.
  * CodeVersion `string`: The version of Service Fabric binaries that the node is running.
  * ConfigVersion `string`: The version of Service Fabric cluster manifest that the node is using.
  * FaultDomain `string`: The fault domain of the node.
  * HealthState [HealthState](#healthstate)
  * Id [NodeId](#nodeid)
  * InstanceId `string`: The id representing the node instance. While the Id of the node is deterministically generated from the node name and remains same across restarts, the InstanceId changes every time node restarts.
  * IpAddressOrFQDN `string`: The IP address or fully qualified domain name of the node.
  * IsSeedNode `boolean`: Indicates if the node is a seed node or not. Returns true if the node is a seed node, otherwise false. A quorum of seed nodes are required for proper operation of Service Fabric cluster.
  * IsStopped `boolean`: Indicates if the node is stopped by calling stop node API or not. Returns true if the node is stopped, otherwise false.
  * Name `string`: The name of the node.
  * NodeDeactivationInfo [NodeDeactivationInfo](#nodedeactivationinfo)
  * NodeDownTimeInSeconds `string`: Time in seconds since the node has been in NodeStatus Down. Value zero indicates node is not NodeStatus Down.
  * NodeStatus [NodeStatus](#nodestatus)
  * NodeUpTimeInSeconds `string`: Time in seconds since the node has been in NodeStatus Up. Value ero indicates that the node is not Up.
  * Type `string`: The type of the node.
  * UpgradeDomain `string`: The upgrade domain of the node.

### NodeLoadInfo
* NodeLoadInfo `object`: Information about load on a Service Fabric node. It holds a summary of all metrics and their load on a node.
  * NodeLoadMetricInformation `array`: List that contains metrics and their load information on this node.
    * items [NodeLoadMetricInformation](#nodeloadmetricinformation)
  * NodeName `string`: Name of the node for which the load information is provided by this object.

### NodeLoadMetricInformation
* NodeLoadMetricInformation `object`: Represents data structure that contains load information for a certain metric on a node.
  * IsCapacityViolation `boolean`: Indicates if there is a capacity violation for this metric on the node.
  * Name `string`: Name of the metric for which this load information is provided.
  * NodeBufferedCapacity `string`: The value that indicates the reserved capacity for this metric on the node.
  * NodeCapacity `string`: Total capacity on the node for this metric.
  * NodeLoad `string`: Current load on the node for this metric.
  * NodeRemainingBufferedCapacity `string`: The remaining reserved capacity for this metric on the node.
  * NodeRemainingCapacity `string`: The remaining capacity on the node for this metric.

### NodeName
* NodeName `string`: The friendly name of the node

### NodeResult
* NodeResult `object`: Contains information about a node that was targeted by a user-induced operation.
  * NodeInstanceId `string`: The node instance id.
  * NodeName `string`: The node name

### NodeStatus
* NodeStatus `string` (values: Invalid, Up, Down, Enabling, Disabling, Disabled, Unknown, Removed): The status of the node. Possible values are following.

### NodeTransitionProgress
* NodeTransitionProgress `object`: Information about an NodeTransition operation.  This class contains an OperationState and a NodeTransitionResult.  The NodeTransitionResult is not valid until OperationState
  * NodeTransitionResult [NodeTransitionResult](#nodetransitionresult)
  * State [OperationState](#operationstate)

### NodeTransitionResult
* NodeTransitionResult `object`: Represents information about an operation in a terminal state (Completed or Faulted).
  * ErrorCode `integer`: If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason.
  * NodeResult [NodeResult](#noderesult)

### NodeUpgradePhase
* NodeUpgradePhase `string` (values: Invalid, PreUpgradeSafetyCheck, Upgrading, PostUpgradeSafetyCheck): The state of the upgrading node.

### NodeUpgradeProgressInfo
* NodeUpgradeProgressInfo `object`: Information about the upgrading node and its status
  * NodeName [NodeName](#nodename)
  * PendingSafetyChecks [SafetyCheckInfoList](#safetycheckinfolist)
  * UpgradePhase [NodeUpgradePhase](#nodeupgradephase)

### NodeUpgradeProgressInfoList
* NodeUpgradeProgressInfoList `array`: List of upgrading nodes and their statuses
  * items [NodeUpgradeProgressInfo](#nodeupgradeprogressinfo)

### NodesHealthEvaluation
* NodesHealthEvaluation: Represents health evaluation for nodes, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned when evaluating cluster health and the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyNodes `integer`: Maximum allowed percentage of unhealthy nodes from the ClusterHealthPolicy.
  * TotalCount `integer`: Total number of nodes found in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### OperationId
* OperationId `string`: A GUID that identifies a call to this API.  This is also passed into the corresponding GetProgress API.

### OperationState
* OperationState `string` (values: Invalid, Running, RollingBack, Completed, Faulted, Cancelled, ForceCancelled): - Invalid - The operation state is invalid.

### OperationStatus
* OperationStatus `object`: Contains the OperationId, OperationState, and OperationType for user-induced operations.
  * OperationId [OperationId](#operationid)
  * State [OperationState](#operationstate)
  * Type [OperationType](#operationtype)

### OperationStatusList
* OperationStatusList `array`: A list of OperationStatus objects.
  * items [OperationStatus](#operationstatus)

### OperationType
* OperationType `string` (values: Invalid, PartitionDataLoss, PartitionQuorumLoss, PartitionRestart, NodeTransition): - Invalid - The operation state is invalid.

### PackageSharingPolicyInfo
* PackageSharingPolicyInfo `object`: Represents a policy for the package sharing.
  * PackageSharingScope [PackageSharingPolicyScope](#packagesharingpolicyscope)
  * SharedPackageName `string`: The name of code, configuration or data package that should be shared.

### PackageSharingPolicyInfoList
* PackageSharingPolicyInfoList `array`: List of package sharing policy information.
  * items [PackageSharingPolicyInfo](#packagesharingpolicyinfo)

### PackageSharingPolicyScope
* PackageSharingPolicyScope `string` (values: None, All, Code, Config, Data): Represents the scope for PackageSharingPolicy. This is specified during DeployServicePackageToNode operation. Possible values are following.

### PagedApplicationInfoList
* PagedApplicationInfoList `object`: The list of applications in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [ApplicationInfo](#applicationinfo)

### PagedApplicationTypeInfoList
* PagedApplicationTypeInfoList `object`: The list of application types that are provisioned or being provisioned in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [ApplicationTypeInfo](#applicationtypeinfo)

### PagedComposeApplicationStatusInfoList
* PagedComposeApplicationStatusInfoList `object`: The list of compose applications in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [ComposeApplicationStatusInfo](#composeapplicationstatusinfo)

### PagedNodeInfoList
* PagedNodeInfoList `object`: The list of nodes in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [NodeInfo](#nodeinfo)

### PagedReplicaInfoList
* PagedReplicaInfoList `object`: The list of replicas in the cluster for a given partition. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [ReplicaInfo](#replicainfo)

### PagedServiceInfoList
* PagedServiceInfoList `object`: The list of services in the cluster for an application. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [ServiceInfo](#serviceinfo)

### PagedServicePartitionInfoList
* PagedServicePartitionInfoList `object`: The list of partition in the cluster for a service. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`
    * items [ServicePartitionInfo](#servicepartitioninfo)

### PartitionAccessStatus
* PartitionAccessStatus `string` (values: Invalid, Granted, ReconfigurationPending, NotPrimary, NoWriteQuorum): Specifies the access status of the partition. Possible values are following.

### PartitionDataLossProgress
* PartitionDataLossProgress `object`: Information about a partition data loss user-induced operation.
  * InvokeDataLossResult [InvokeDataLossResult](#invokedatalossresult)
  * State [OperationState](#operationstate)

### PartitionHealth
* PartitionHealth: Information about the health of a Service Fabric partition.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * PartitionId `string`: ID of the partition whose health information is described by this object.
  * ReplicaHealthStates `array`: The list of replica health states associated with the partition.
    * items [ReplicaHealthState](#replicahealthstate)

### PartitionHealthEvaluation
* PartitionHealthEvaluation: Represents health evaluation for a partition, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * PartitionId `string`: Id of the partition.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### PartitionHealthState
* PartitionHealthState: Represents the health state of a partition, which contains the partition identifier and its aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * PartitionId `string`: The ID of the partition.

### PartitionHealthStateChunk
* PartitionHealthStateChunk: Represents the health state chunk of a partition, which contains the partition id, its aggregated health state and any replicas that respect the filters in the cluster health chunk query description.
  * HealthState [HealthState](#healthstate)
  * PartitionId `string`: The ID of the partition.
  * ReplicaHealthStateChunks [ReplicaHealthStateChunkList](#replicahealthstatechunklist)

### PartitionHealthStateChunkList
* PartitionHealthStateChunkList `object`: The list of partition health state chunks that respect the input filters in the chunk query description.
  * Items `array`: The list of partition health state chunks that respect the input filters in the chunk query.
    * items [PartitionHealthStateChunk](#partitionhealthstatechunk)

### PartitionHealthStateFilter
* PartitionHealthStateFilter `object`: Defines matching criteria to determine whether a partition should be included as a child of a service in the cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the partitions. It allows selecting partitions if they match the desired health states.
  * PartitionIdFilter `string`: ID of the partition that matches the filter. The filter is applied only to the specified partition, if it exists.
  * ReplicaFilters `array`: Defines a list of filters that specify which replicas to be included in the returned cluster health chunk as children of the parent partition. The replicas are returned only if the parent partition matches a filter.
    * items [ReplicaHealthStateFilter](#replicahealthstatefilter)

### PartitionId
* PartitionId `string`: An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different.

### PartitionInformation
* PartitionInformation `object`: Information about the partition identity, partitioning scheme and keys supported by it.
  * Id [PartitionId](#partitionid)
  * ServicePartitionKind **required** [ServicePartitionKind](#servicepartitionkind)

### PartitionLoadInformation
* PartitionLoadInformation `object`: Represents load information for a partition, which contains the primary and secondary reported load metrics.
  * PartitionId `string`: Id of the partition.
  * PrimaryLoadMetricReports `array`: Array of load reports from the primary replica for this partition.
    * items [LoadMetricReport](#loadmetricreport)
  * SecondaryLoadMetricReports `array`: Array of aggregated load reports from all secondary replicas for this partition.
    * items [LoadMetricReport](#loadmetricreport)

### PartitionQuorumLossProgress
* PartitionQuorumLossProgress `object`: Information about a partition quorum loss user-induced operation.
  * InvokeQuorumLossResult [InvokeQuorumLossResult](#invokequorumlossresult)
  * State [OperationState](#operationstate)

### PartitionRestartProgress
* PartitionRestartProgress `object`: Information about a partition restart user-induced operation.
  * RestartPartitionResult [RestartPartitionResult](#restartpartitionresult)
  * State [OperationState](#operationstate)

### PartitionSafetyCheck
* PartitionSafetyCheck: Represents a safety check for the service partition being performed by service fabric before continuing with operations.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### PartitionScheme
* PartitionScheme `string` (values: Invalid, Singleton, UniformInt64Range, Named): Enumerates the ways that a service can be partitioned. Possible values are:

### PartitionSchemeDescription
* PartitionSchemeDescription `object`: Describes how the service is partitioned.
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### PartitionsHealthEvaluation
* PartitionsHealthEvaluation: Represents health evaluation for the partitions of a service, containing health evaluations for each unhealthy partition that impacts current aggregated health state. Can be returned when evaluating service health and the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyPartitionsPerService `integer`: Maximum allowed percentage of unhealthy partitions per service from the ServiceTypeHealthPolicy.
  * TotalCount `integer`: Total number of partitions of the service from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### PrimaryReplicatorStatus
* PrimaryReplicatorStatus `object`
  * Kind **required** [ReplicaRole](#replicarole)
  * RemoteReplicators [RemoteReplicatorStatusList](#remotereplicatorstatuslist)
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)

### RemoteReplicatorAcknowledgementDetail
* RemoteReplicatorAcknowledgementDetail `object`: Provides various statistics of the acknowledgements that are being received from the remote replicator.
  * AverageApplyDuration `string`: Represents the average duration it takes for the remote replicator to apply an operation. This usually entails writing the operation to disk.
  * AverageReceiveDuration `string`: Represents the average duration it takes for the remote replicator to receive an operation.
  * NotReceivedCount `string`: Represents the number of operations not yet received by a remote replicator.
  * ReceivedAndNotAppliedCount `string`: Represents the number of operations received and not yet applied by a remote replicator.

### RemoteReplicatorAcknowledgementStatus
* RemoteReplicatorAcknowledgementStatus `object`: Provides details about the remote replicators from the primary replicator's point of view.
  * CopyStreamAcknowledgementDetail [RemoteReplicatorAcknowledgementDetail](#remotereplicatoracknowledgementdetail)
  * ReplicationStreamAcknowledgementDetail [RemoteReplicatorAcknowledgementDetail](#remotereplicatoracknowledgementdetail)

### RemoteReplicatorStatus
* RemoteReplicatorStatus `object`: Represents the state of the secondary replicator from the primary replicator’s point of view. 
  * IsInBuild `boolean`: A value that indicates whether the secondary replica is in the process of being built.
  * LastAcknowledgementProcessedTimeUtc `string`: The last timestamp (in UTC) when an acknowledgement from the secondary replicator was processed on the primary.
  * LastAppliedCopySequenceNumber `string`: The highest copy operation sequence number that the secondary has applied to its state.
  * LastAppliedReplicationSequenceNumber `string`: The highest replication operation sequence number that the secondary has applied to its state.
  * LastReceivedCopySequenceNumber `string`: The highest copy operation sequence number that the secondary has received from the primary.
  * LastReceivedReplicationSequenceNumber `string`: The highest replication operation sequence number that the secondary has received from the primary.
  * RemoteReplicatorAcknowledgementStatus [RemoteReplicatorAcknowledgementStatus](#remotereplicatoracknowledgementstatus)
  * ReplicaId `string`: Represents the replica id of the remote secondary replicator.

### RemoteReplicatorStatusList
* RemoteReplicatorStatusList `array`: List of remote replicator status
  * items [RemoteReplicatorStatus](#remotereplicatorstatus)

### ReplicaHealth
* ReplicaHealth: Represents a base class for stateful service replica or stateless service instance health.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * PartitionId `string`: Id of the partition to which this replica belongs.
  * ServiceKind **required** [ServiceKind](#servicekind)

### ReplicaHealthEvaluation
* ReplicaHealthEvaluation: Represents health evaluation for a replica, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * PartitionId `string`: Id of the partition to which the replica belongs.
  * ReplicaOrInstanceId `string`: Id of the stateful service replica or the stateless service instance.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ReplicaHealthState
* ReplicaHealthState `object`: Represents a base class for stateful service replica or stateless service instance health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * PartitionId `string`: The ID of the partition to which this replica belongs.
  * ServiceKind [ServiceKind](#servicekind)

### ReplicaHealthStateChunk
* ReplicaHealthStateChunk: Represents the health state chunk of a stateful service replica or a stateless service instance.
  * HealthState [HealthState](#healthstate)
  * ReplicaOrInstanceId `string`: The ID of the stateful service replica or the stateless service instance.

### ReplicaHealthStateChunkList
* ReplicaHealthStateChunkList `object`: The list of replica health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of replica health state chunks that respect the input filters in the chunk query.
    * items [ReplicaHealthStateChunk](#replicahealthstatechunk)

### ReplicaHealthStateFilter
* ReplicaHealthStateFilter `object`: Defines matching criteria to determine whether a replica should be included as a child of a partition in the cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the replicas. It allows selecting replicas if they match the desired health states.
  * ReplicaOrInstanceIdFilter `string`: Id of the stateful service replica or stateles service instance that matches the filter. The filter is applied only to the specified replica, if it exists.

### ReplicaId
* ReplicaId `string`: An internal ID used by Service Fabric to uniquely identify a replica of a partition. The replica ID is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different replica ID.

### ReplicaInfo
* ReplicaInfo `object`: Information about the identity, status, health, node name, uptime, and other details about the replica.
  * Address `string`: The address the replica is listening on.
  * HealthState [HealthState](#healthstate)
  * LastInBuildDurationInSeconds `string`: The last in build duration of the replica in seconds.
  * NodeName `string`: The name of the node.
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### ReplicaKind
* ReplicaKind `string` (values: Invalid, KeyValueStore): The role of a replica of a stateful service. Possible values are following.

### ReplicaRole
* ReplicaRole `string` (values: Unknown, None, Primary, IdleSecondary, ActiveSecondary): The role of a replica of a stateful service. Possible values are following.

### ReplicaStatus
* ReplicaStatus `string` (values: Invalid, InBuild, Standby, Ready, Down, Dropped): The status of a replica of a service. Possible values are following.

### ReplicaStatusBase
* ReplicaStatusBase `object`: Information about the replica.
  * Kind **required** [ReplicaKind](#replicakind)

### ReplicasHealthEvaluation
* ReplicasHealthEvaluation: Represents health evaluation for replicas, containing health evaluations for each unhealthy replica that impacted current aggregated health state. Can be returned when evaluating partition health and the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyReplicasPerPartition `integer`: Maximum allowed percentage of unhealthy replicas per partition from the ApplicationHealthPolicy.
  * TotalCount `integer`: Total number of replicas in the partition from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ReplicatorOperationName
* ReplicatorOperationName `string` (values: Invalid, None, Open, ChangeRole, UpdateEpoch, Close, Abort, OnDataLoss, WaitForCatchup, Build): Specifies the operation currently being executed by the Replicator. Possible values are following.

### ReplicatorQueueStatus
* ReplicatorQueueStatus `object`: Provides various statistics of the queue used in the service fabric replicator.
  * CommittedSequenceNumber `string`: On a primary replicator, this is semantically the highest sequence number of the operation for which a write quorum of the secondary replicas have sent an acknowledgement.
  * CompletedSequenceNumber `string`: On a primary replicator, this is semantically the highest sequence number of the operation for which all the secondary replicas have sent an acknowledgement.
  * FirstSequenceNumber `string`: On a primary replicator, this is semantically the sequence number of the operation for which all the secondary replicas have sent an acknowledgement.
  * LastSequenceNumber `string`: Represents the latest sequence number of the operation that is available in the queue.
  * QueueMemorySize `string`: Represents the virtual memory consumed by the queue in bytes.
  * QueueUtilizationPercentage `integer`: Represents the utilization of the queue. A value of 0 indicates that the queue is empty and a value of 100 indicates the queue is full.

### ReplicatorStatus
* ReplicatorStatus `object`: Represents a base class for primary or secondary replicator status.
  * Kind **required** [ReplicaRole](#replicarole)

### RepositoryCredential
* RepositoryCredential `object`: Credential information to connect to container repository.
  * PasswordEncrypted `boolean`: Indicates that supplied container repository password is encrypted.
  * RepositoryPassword `string`: The password for supplied username to connect to container repository.
  * RepositoryUserName `string`: The user name to connect to container repository.

### ResolvedServiceEndpoint
* ResolvedServiceEndpoint `object`: Endpoint of a resolved service partition.
  * Address `string`: The address of the endpoint. If the endpoint has multiple listeners the address is a JSON object with one property per listener with the value as the address of that listener.
  * Kind [ServiceEndpointRole](#serviceendpointrole)

### ResolvedServiceEndpointList
* ResolvedServiceEndpointList `array`: List of resolved service endpoints of a service partition.
  * items [ResolvedServiceEndpoint](#resolvedserviceendpoint)

### ResolvedServicePartition
* ResolvedServicePartition `object`: Information about a service partition and its associated endpoints.
  * Endpoints **required** [ResolvedServiceEndpointList](#resolvedserviceendpointlist)
  * Name **required** [ServiceName](#servicename)
  * PartitionInformation **required** [PartitionInformation](#partitioninformation)
  * Version **required** `string`: The version of this resolved service partition result. This version should be passed in the next time the ResolveService call is made via the PreviousRspVersion query parameter.

### RestartDeployedCodePackageDescription
* RestartDeployedCodePackageDescription `object`: Defines description for restarting a deloyed code package on Service Fabric node.
  * CodePackageInstanceId [InstanceId](#instanceid)
  * CodePackageName `string`: The name of the code package.
  * ServiceManifestName `string`: The name of service manifest that specified this code package.
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)

### RestartNodeDescription
* RestartNodeDescription `object`: Describes the parameters to restart a Service Fabric node.
  * CreateFabricDump `string` (values: False, True): Specify True to create a dump of the fabric node process. This is case sensitive.
  * NodeInstanceId **required** `string`: The instance id of the target node. If instance id is specified the node is restarted only if it matches with the current instance of the node. A default value of "0" would match any instance id. The instance id can be obtained using get node query.

### RestartPartitionResult
* RestartPartitionResult `object`: Represents information about an operation in a terminal state (Completed or Faulted).
  * ErrorCode `integer`: If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason.
  * SelectedPartition [SelectedPartition](#selectedpartition)

### ResumeApplicationUpgradeDescription
* ResumeApplicationUpgradeDescription `object`: Describes the parameters for resuming an unmonitored manual Service Fabric application upgrade
  * UpgradeDomainName **required** `string`: The name of the upgrade domain in which to resume the upgrade.

### RollingUpgradeUpdateDescription
* RollingUpgradeUpdateDescription `object`: Describes the parameters for updating a rolling upgrade of application or cluster.
  * FailureAction [FailureAction](#failureaction)
  * ForceRestart [ForceRestart](#forcerestart)
  * HealthCheckRetryTimeoutInMilliseconds [HealthCheckRetryTimeout](#healthcheckretrytimeout)
  * HealthCheckStableDurationInMilliseconds [HealthCheckStableDuration](#healthcheckstableduration)
  * HealthCheckWaitDurationInMilliseconds [HealthCheckWaitDuration](#healthcheckwaitduration)
  * ReplicaSetCheckTimeoutInMilliseconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)
  * RollingUpgradeMode **required** [UpgradeMode](#upgrademode)
  * UpgradeDomainTimeoutInMilliseconds [UpgradeDomainTimeout](#upgradedomaintimeout)
  * UpgradeTimeoutInMilliseconds [UpgradeTimeout](#upgradetimeout)

### SafetyCheck
* SafetyCheck `object`: Represents a safety check performed by service fabric before continuing with the operations. These checks ensure the avaiability of the service and the reliability of the state.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### SafetyCheckInfoList
* SafetyCheckInfoList `array`: List of pending safety checks
  * items [SafetyCheckWrapper](#safetycheckwrapper)

### SafetyCheckKind
* SafetyCheckKind `string` (values: Invalid, EnsureSeedNodeQuorum, EnsurePartitionQuorum, WaitForPrimaryPlacement, WaitForPrimarySwap, WaitForReconfiguration, WaitForInbuildReplica, EnsureAvailability): The kind of safety check performed by service fabric before continuing with the operations. These checks ensure the avaiability of the service and the reliability of the state. Following are the kinds of safety checks.

### SafetyCheckWrapper
* SafetyCheckWrapper `object`: A wrapper for the safety check object. Safety checks are performed by service fabric before continuing with the operations. These checks ensure the avaiability of the service and the reliability of the state.
  * SafetyCheck [SafetyCheck](#safetycheck)

### SecondaryActiveReplicatorStatus
* SecondaryActiveReplicatorStatus: Status of the secondary replicator when it is in active mode and is part of the replica set.
  * Kind **required** [ReplicaRole](#replicarole)
  * CopyQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * IsInBuild `boolean`: Value that indicates whether the replica is currently being built.
  * LastAcknowledgementSentTimeUtc `string`: The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator.
  * LastCopyOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a copy operation was received from the primary.
  * LastReplicationOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a replication operation was received from the primary.
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)

### SecondaryIdleReplicatorStatus
* SecondaryIdleReplicatorStatus: Status of the secondary replicator when it is in idle mode and is being built by the primary.
  * Kind **required** [ReplicaRole](#replicarole)
  * CopyQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * IsInBuild `boolean`: Value that indicates whether the replica is currently being built.
  * LastAcknowledgementSentTimeUtc `string`: The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator.
  * LastCopyOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a copy operation was received from the primary.
  * LastReplicationOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a replication operation was received from the primary.
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)

### SecondaryReplicatorStatus
* SecondaryReplicatorStatus `object`
  * Kind **required** [ReplicaRole](#replicarole)
  * CopyQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * IsInBuild `boolean`: Value that indicates whether the replica is currently being built.
  * LastAcknowledgementSentTimeUtc `string`: The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator.
  * LastCopyOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a copy operation was received from the primary.
  * LastReplicationOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a replication operation was received from the primary.
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)

### SeedNodeSafetyCheck
* SeedNodeSafetyCheck: Represents a safety check for the seed nodes being performed by service fabric before continuing with node level operations.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### SelectedPartition
* SelectedPartition `object`: This class returns information about the partition that the user-induced operation acted upon.
  * PartitionId [PartitionId](#partitionid)
  * ServiceName `string`: The name of the service the partition belongs to.

### ServiceCorrelationDescription
* ServiceCorrelationDescription `object`: Creates a particular correlation between services.
  * Scheme **required** [ServiceCorrelationScheme](#servicecorrelationscheme)
  * ServiceName **required** `string`: The name of the service that the correlation relationship is established with.

### ServiceCorrelationScheme
* ServiceCorrelationScheme `string` (values: Invalid, Affinity, AlignedAffinity, NonAlignedAffinity): The service correlation scheme. Possible values are following.

### ServiceDescription
* ServiceDescription `object`: A ServiceDescription contains all of the information necessary to create a service.
  * ApplicationName `string`: The application name.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * InitializationData [ByteArray](#bytearray)
  * IsDefaultMoveCostSpecified `boolean`: Indicates if the DefaultMoveCost property is specified.
  * PartitionDescription **required** [PartitionSchemeDescription](#partitionschemedescription)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * ServiceName **required** `string`: The service name.
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)
  * ServiceTypeName **required** `string`: The service type name.

### ServiceEndpointRole
* ServiceEndpointRole `string` (values: Invalid, Stateless, StatefulPrimary, StatefulSecondary): The role of the replica where the endpoint is reported. Possible values are following.

### ServiceFromTemplateDescription
* ServiceFromTemplateDescription `object`: Defines description for creating a Service Fabric service from a template defined in the application manifest.
  * ApplicationName **required** `string`: Full name of the application.
  * InitializationData [ByteArray](#bytearray)
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceName **required** `string`: Full name of the service.
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServiceTypeName **required** `string`: The name of the Service Fabric service type.

### ServiceHealth
* ServiceHealth: Information about the health of a Service Fabric service.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * Name `string`: The name of the service whose health information is described by this object.
  * PartitionHealthStates `array`: The list of partition health states associated with the service.
    * items [PartitionHealthState](#partitionhealthstate)

### ServiceHealthEvaluation
* ServiceHealthEvaluation: Represents health evaluation for a service, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * ServiceName `string`: Full name of the service.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ServiceHealthState
* ServiceHealthState: Represents the health state of a service, which contains the service identifier and its aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * ServiceName `string`: Full name of the service.

### ServiceHealthStateChunk
* ServiceHealthStateChunk: Represents the health state chunk of a service, which contains the service name, its aggregated health state and any partitions that respect the filters in the cluster health chunk query description.
  * HealthState [HealthState](#healthstate)
  * PartitionHealthStateChunks [PartitionHealthStateChunkList](#partitionhealthstatechunklist)
  * ServiceName `string`: The name of the service.

### ServiceHealthStateChunkList
* ServiceHealthStateChunkList `object`: The list of service health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of service health state chunks that respect the input filters in the chunk query.
    * items [ServiceHealthStateChunk](#servicehealthstatechunk)

### ServiceHealthStateFilter
* ServiceHealthStateFilter `object`: Defines matching criteria to determine whether a service should be included as a child of an application in the cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the services. It allows selecting services if they match the desired health states.
  * PartitionFilters `array`: Defines a list of filters that specify which partitions to be included in the returned cluster health chunk as children of the service. The partitions are returned only if the parent service matches a filter.
    * items [PartitionHealthStateFilter](#partitionhealthstatefilter)
  * ServiceNameFilter `string`: The name of the service that matches the filter. The filter is applied only to the specified service, if it exists.

### ServiceId
* ServiceId `string`: The identity of the service. This is same as service name without the 'fabric:' URI scheme. This is used in the REST APIs to identify the service resource.

### ServiceInfo
* ServiceInfo `object`: Information about a Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * Id [ServiceId](#serviceid)
  * IsServiceGroup `boolean`: Whether the service is in a service group.
  * ManifestVersion `string`: The version of the service manifest.
  * Name `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceStatus [ServiceStatus](#servicestatus)
  * TypeName `string`: The name of the service type as specified in the service manifest.

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

### ServiceNameInfo
* ServiceNameInfo `object`: Information about the service name.
  * Id [ServiceId](#serviceid)
  * Name `string`: The name of the service.

### ServiceOperationName
* ServiceOperationName `string` (values: Unknown, None, Open, ChangeRole, Close, Abort): Specifies the current active life-cycle operation on a stateful service replica or stateless service instance. Possible values are following.

### ServicePackageActivationId
* ServicePackageActivationId `string`: The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service

### ServicePackageActivationMode
* ServicePackageActivationMode `string` (values: SharedProcess, ExclusiveProcess): The activation mode of service package to be used for a Service Fabric service. This is specified at the time of creating the Service. Possible values are following.

### ServicePartitionInfo
* ServicePartitionInfo `object`: Information about a partition of a Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * PartitionInformation [PartitionInformation](#partitioninformation)
  * PartitionStatus [ServicePartitionStatus](#servicepartitionstatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### ServicePartitionKind
* ServicePartitionKind `string` (values: Invalid, Singleton, Int64Range, Named): The kind of partitioning scheme used to partition the service. Possible values are following.

### ServicePartitionStatus
* ServicePartitionStatus `string` (values: Invalid, Ready, NotReady, InQuorumLoss, Reconfiguring, Deleting): The status of the service fabric service partition. Possible values are following.

### ServicePlacementInvalidDomainPolicyDescription
* ServicePlacementInvalidDomainPolicyDescription: Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)
  * DomainName `string`: The name of the domain that should not be used for placement.

### ServicePlacementNonPartiallyPlaceServicePolicyDescription
* ServicePlacementNonPartiallyPlaceServicePolicyDescription: Describes the policy to be used for placement of a Service Fabric service where all replicas must be able to be placed in order for any replicas to be created.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

### ServicePlacementPoliciesList
* ServicePlacementPoliciesList `array`: A list that describes the correlation of the service with other services.
  * items [ServicePlacementPolicyDescription](#serviceplacementpolicydescription)

### ServicePlacementPolicyDescription
* ServicePlacementPolicyDescription `object`: Describes the policy to be used for placement of a Service Fabric service.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

### ServicePlacementPolicyDescriptionList
* ServicePlacementPolicyDescriptionList `array`: List of service placement policy descriptions.
  * items [ServicePlacementPolicyDescription](#serviceplacementpolicydescription)

### ServicePlacementPolicyType
* ServicePlacementPolicyType `string` (values: Invalid, InvalidDomain, RequiredDomain, PreferredPrimaryDomain, RequiredDomainDistribution, NonPartiallyPlaceService): The type of placement policy for a service fabric service. Following are the possible values.

### ServicePlacementPreferPrimaryDomainPolicyDescription
* ServicePlacementPreferPrimaryDomainPolicyDescription: Describes the policy to be used for placement of a Service Fabric service where the service's Primary replicas should optimally be placed in a particular domain.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)
  * DomainName `string`: The name of the domain that should used for placement as per this policy.

### ServicePlacementRequireDomainDistributionPolicyDescription
* ServicePlacementRequireDomainDistributionPolicyDescription: Describes the policy to be used for placement of a Service Fabric service where two replicas from the same partition should never be placed in the same fault or upgrade domain.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)
  * DomainName `string`: The name of the domain that should used for placement as per this policy.

### ServicePlacementRequiredDomainPolicyDescription
* ServicePlacementRequiredDomainPolicyDescription: Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)
  * DomainName `string`: The name of the domain that should used for placement as per this policy.

### ServiceStatus
* ServiceStatus `string` (values: Unknown, Active, Upgrading, Deleting, Creating, Failed): The status of the application. Possible values are:

### ServiceTypeDescription
* ServiceTypeDescription `object`: Describes a service type defined in the service manifest of a provisioned application type. The properties the the ones defined in the service manifest.
  * Extensions [ServiceTypeExtensionDescriptionList](#servicetypeextensiondescriptionlist)
  * IsStateful `boolean`: Indicates whether the service type is a stateful service type or a stateless service type. This property is true if the service type is a stateful service type, false otherwise.
  * Kind **required** [ServiceKind](#servicekind)
  * PlacementConstraints `string`: The placement constraint to be used when instantiating this service in a Service Fabric cluster.
  * ServicePlacementPolicies [ServicePlacementPolicyDescriptionList](#serviceplacementpolicydescriptionlist)
  * ServiceTypeName `string`: Name of the service type.

### ServiceTypeExtensionDescription
* ServiceTypeExtensionDescription `object`: Describes extension of a service type defined in the service manifest.
  * Key `string`: The name of the extension.
  * Value `string`: The extension value.

### ServiceTypeExtensionDescriptionList
* ServiceTypeExtensionDescriptionList `array`: List of service type extensions.
  * items [ServiceTypeExtensionDescription](#servicetypeextensiondescription)

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

### ServiceTypeInfo
* ServiceTypeInfo `object`: Information about a service type that is defined in a service manifest of a provisioned application type.
  * IsServiceGroup `boolean`: Indicates whether the service is a service group. If it is, the property value is true otherwise false.
  * ServiceManifestName `string`: The name of the service manifest in which this service type is defined.
  * ServiceManifestVersion `string`: The version of the service manifest in which this service type is defined.
  * ServiceTypeDescription [ServiceTypeDescription](#servicetypedescription)

### ServiceTypeInfoList
* ServiceTypeInfoList `array`: List of service type information.
  * items [ServiceTypeInfo](#servicetypeinfo)

### ServiceTypeManifest
* ServiceTypeManifest `object`: Contains the manifest describing a service type registered as part of an application in a Service Fabric cluster.
  * Manifest `string`: The XML manifest as a string.

### ServiceTypeRegistrationStatus
* ServiceTypeRegistrationStatus `string` (values: Invalid, Disabled, Enabled, Registered): The status of the service type registration on the node. Possible values are following.

### ServiceUpdateDescription
* ServiceUpdateDescription `object`: A ServiceUpdateDescription contains all of the information necessary to update a service.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * Flags `string`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### ServicesHealthEvaluation
* ServicesHealthEvaluation: Represents health evaluation for services of a certain service type belonging to an application, containing health evaluations for each unhealthy service that impacted current aggregated health state. Can be returned when evaluating application health and the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyServices `integer`: Maximum allowed percentage of unhealthy services from the ServiceTypeHealthPolicy.
  * ServiceTypeName `string`: Name of the service type of the services.
  * TotalCount `integer`: Total number of services of the current service type in the application from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### SingletonPartitionInformation
* SingletonPartitionInformation: Information about a partition that is singleton. The services with singletone partitioning scheme are effectively non-partitioned. They only have one partition.
  * Id [PartitionId](#partitionid)
  * ServicePartitionKind **required** [ServicePartitionKind](#servicepartitionkind)

### SingletonPartitionSchemeDescription
* SingletonPartitionSchemeDescription: Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### StartNodeDescription
* StartNodeDescription `object`: Describes the parameter for starting a stopped Service Fabric node.
  * NodeInstanceId **required** `string`: The instance id of the node that is stopped. If instance id is specified the node is started only if it matches with the current instance of the stopped node. A default value of "0" would match any instance id. The instance id can be obtained using get node query.

### StartedChaosEvent
* StartedChaosEvent: Describes a Chaos event that gets generated when Chaos is started.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`
  * ChaosParameters [ChaosParameters](#chaosparameters)

### StatefulServiceDescription
* StatefulServiceDescription `object`: Describes a stateful service.
  * Flags `integer`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * HasPersistedState **required** `boolean`: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
  * MinReplicaSetSize **required** `integer`: The minimum replica set size as a number.
  * QuorumLossWaitDurationSeconds `integer`: The maximum duration, in seconds, for which a partition is allowed to be in a state of quorum loss.
  * ReplicaRestartWaitDurationSeconds `integer`: The duration, in seconds, between when a replica goes down and when a new replica is created.
  * StandByReplicaKeepDurationSeconds `integer`: The definition on how long StandBy replicas should be maintained before being removed.
  * TargetReplicaSetSize **required** `integer`: The target replica set size as a number.
  * ApplicationName `string`: The application name.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * InitializationData [ByteArray](#bytearray)
  * IsDefaultMoveCostSpecified `boolean`: Indicates if the DefaultMoveCost property is specified.
  * PartitionDescription **required** [PartitionSchemeDescription](#partitionschemedescription)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * ServiceName **required** `string`: The service name.
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)
  * ServiceTypeName **required** `string`: The service type name.

### StatefulServiceInfo
* StatefulServiceInfo: Information about a stateful Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * Id [ServiceId](#serviceid)
  * IsServiceGroup `boolean`: Whether the service is in a service group.
  * ManifestVersion `string`: The version of the service manifest.
  * Name `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceStatus [ServiceStatus](#servicestatus)
  * TypeName `string`: The name of the service type as specified in the service manifest.
  * HasPersistedState `boolean`: Whether the service has persisted state.

### StatefulServicePartitionInfo
* StatefulServicePartitionInfo `object`: Information about a partition of a stateful Service Fabric service..
  * CurrentConfigurationEpoch [Epoch](#epoch)
  * LastQuorumLossDuration `string`: The duration for which this partition was in quorum loss. If the partition is currently in quorum loss, it returns the duration since it has been in that state. This field is using ISO8601 format for specifying the duration.
  * MinReplicaSetSize `integer`: The minimum replica set size as a number.
  * TargetReplicaSetSize `integer`: The target replica set size as a number.
  * HealthState [HealthState](#healthstate)
  * PartitionInformation [PartitionInformation](#partitioninformation)
  * PartitionStatus [ServicePartitionStatus](#servicepartitionstatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### StatefulServiceReplicaHealth
* StatefulServiceReplicaHealth: Represents the health of the stateful service replica.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * PartitionId `string`: Id of the partition to which this replica belongs.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ReplicaId `string`: Id of the stateful service replica.

### StatefulServiceReplicaHealthState
* StatefulServiceReplicaHealthState: Represents the health state of the stateful service replica, which contains the replica id and the aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * PartitionId `string`: The ID of the partition to which this replica belongs.
  * ServiceKind [ServiceKind](#servicekind)
  * ReplicaId `string`: The ID of the stateful service replica.

### StatefulServiceReplicaInfo
* StatefulServiceReplicaInfo: Represents a stateful service replica. This includes information about the identity, role, status, health, node name, uptime, and other details about the replica.
  * Address `string`: The address the replica is listening on.
  * HealthState [HealthState](#healthstate)
  * LastInBuildDurationInSeconds `string`: The last in build duration of the replica in seconds.
  * NodeName `string`: The name of the node.
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ReplicaId [ReplicaId](#replicaid)
  * ReplicaRole [ReplicaRole](#replicarole)

### StatefulServiceTypeDescription
* StatefulServiceTypeDescription `object`: Describes a stateful service type defined in the service manifest of a provisioned application type.
  * HasPersistedState `boolean`: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
  * Extensions [ServiceTypeExtensionDescriptionList](#servicetypeextensiondescriptionlist)
  * IsStateful `boolean`: Indicates whether the service type is a stateful service type or a stateless service type. This property is true if the service type is a stateful service type, false otherwise.
  * Kind **required** [ServiceKind](#servicekind)
  * PlacementConstraints `string`: The placement constraint to be used when instantiating this service in a Service Fabric cluster.
  * ServicePlacementPolicies [ServicePlacementPolicyDescriptionList](#serviceplacementpolicydescriptionlist)
  * ServiceTypeName `string`: Name of the service type.

### StatefulServiceUpdateDescription
* StatefulServiceUpdateDescription `object`: Describes an update for a stateful service.
  * MinReplicaSetSize `integer`: The minimum replica set size as a number.
  * QuorumLossWaitDurationSeconds `string`: The maximum duration, in seconds, for which a partition is allowed to be in a state of quorum loss.
  * ReplicaRestartWaitDurationSeconds `string`: The duration, in seconds, between when a replica goes down and when a new replica is created.
  * StandByReplicaKeepDurationSeconds `string`: The definition on how long StandBy replicas should be maintained before being removed.
  * TargetReplicaSetSize `integer`: The target replica set size as a number.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * Flags `string`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StatelessServiceDescription
* StatelessServiceDescription `object`: Describes a stateless service.
  * InstanceCount **required** `integer`: The instance count.
  * ApplicationName `string`: The application name.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * InitializationData [ByteArray](#bytearray)
  * IsDefaultMoveCostSpecified `boolean`: Indicates if the DefaultMoveCost property is specified.
  * PartitionDescription **required** [PartitionSchemeDescription](#partitionschemedescription)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * ServiceName **required** `string`: The service name.
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)
  * ServiceTypeName **required** `string`: The service type name.

### StatelessServiceInfo
* StatelessServiceInfo: Information about a stateless Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * Id [ServiceId](#serviceid)
  * IsServiceGroup `boolean`: Whether the service is in a service group.
  * ManifestVersion `string`: The version of the service manifest.
  * Name `string`: Full hierarchical name of the service in URI format starting with `fabric:`.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceStatus [ServiceStatus](#servicestatus)
  * TypeName `string`: The name of the service type as specified in the service manifest.

### StatelessServiceInstanceHealth
* StatelessServiceInstanceHealth: Represents the health of the statelss service instance.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * PartitionId `string`: Id of the partition to which this replica belongs.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * InstanceId `string`: Id of the stateless service instance.

### StatelessServiceInstanceHealthState
* StatelessServiceInstanceHealthState: Represents the health state of the stateless service instance, which contains the instance id and the aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * PartitionId `string`: The ID of the partition to which this replica belongs.
  * ServiceKind [ServiceKind](#servicekind)
  * ReplicaId `string`: Id of the stateless service instance on the wire this field is called ReplicaId.

### StatelessServiceInstanceInfo
* StatelessServiceInstanceInfo: Represents a stateless service instance. This includes information about the identity, status, health, node name, uptime, and other details about the instance.
  * Address `string`: The address the replica is listening on.
  * HealthState [HealthState](#healthstate)
  * LastInBuildDurationInSeconds `string`: The last in build duration of the replica in seconds.
  * NodeName `string`: The name of the node.
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * InstanceId `string`: Id of the stateless service instance.

### StatelessServicePartitionInfo
* StatelessServicePartitionInfo `object`: Information about a partition of a stateless Service Fabric service.
  * InstanceCount `integer`: Number of instances of this partition.
  * HealthState [HealthState](#healthstate)
  * PartitionInformation [PartitionInformation](#partitioninformation)
  * PartitionStatus [ServicePartitionStatus](#servicepartitionstatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### StatelessServiceTypeDescription
* StatelessServiceTypeDescription `object`: Describes a stateless service type defined in the service manifest of a provisioned application type.
  * UseImplicitHost `boolean`: A flag indicating if this type is not implemented and hosted by a user service process, but is implicitly hosted by a system created process. This value is true for services using the guest executable services, false otherwise.
  * Extensions [ServiceTypeExtensionDescriptionList](#servicetypeextensiondescriptionlist)
  * IsStateful `boolean`: Indicates whether the service type is a stateful service type or a stateless service type. This property is true if the service type is a stateful service type, false otherwise.
  * Kind **required** [ServiceKind](#servicekind)
  * PlacementConstraints `string`: The placement constraint to be used when instantiating this service in a Service Fabric cluster.
  * ServicePlacementPolicies [ServicePlacementPolicyDescriptionList](#serviceplacementpolicydescriptionlist)
  * ServiceTypeName `string`: Name of the service type.

### StatelessServiceUpdateDescription
* StatelessServiceUpdateDescription `object`: Describes an update for a stateless service.
  * InstanceCount `integer`: The instance count.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * Flags `string`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StopNodeDescription
* StopNodeDescription `object`: Describes the parameter for stopping a Service Fabric node.
  * NodeInstanceId **required** `string`: The instance id of the target node. If instance id is specified the node is stopped only if it matches with the current instance of the node. A default value of "0" would match any instance id. The instance id can be obtained using get node query.

### StoppedChaosEvent
* StoppedChaosEvent: Describes a Chaos event that gets generated when Chaos stops because either the user issued a stop or the time to run was up.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`
  * Reason `string`

### SystemApplicationHealthEvaluation
* SystemApplicationHealthEvaluation: Represents health evaluation for the fabric:/System application, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state of the cluster is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### TargetApplicationName
* TargetApplicationName `string`: The name of the target application, including the 'fabric:' URI scheme.

### TargetApplicationTypeVersion
* TargetApplicationTypeVersion `string`: The target application type version (found in the application manifest) for the application upgrade.

### TestErrorChaosEvent
* TestErrorChaosEvent: Describes a Chaos event that gets generated when an unexpected event occurs in the Chaos engine.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`
  * Reason `string`

### UnhealthyEvaluations
* UnhealthyEvaluations `array`: List of health evaluations that resulted in the current aggregated health state.
  * items [HealthEvaluationWrapper](#healthevaluationwrapper)

### UniformInt64RangePartitionSchemeDescription
* UniformInt64RangePartitionSchemeDescription `object`: Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
  * Count **required** `integer`: The number of partitions.
  * HighKey **required** `string`: String indicating the upper bound of the partition key range that 
  * LowKey **required** `string`: String indicating the lower bound of the partition key range that 
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### UpgradeDomainDeltaNodesCheckHealthEvaluation
* UpgradeDomainDeltaNodesCheckHealthEvaluation: Represents health evaluation for delta unhealthy cluster nodes in an upgrade domain, containing health evaluations for each unhealthy node that impacted current aggregated health state.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * BaselineErrorCount `integer`: Number of upgrade domain nodes with aggregated heath state Error in the health store at the beginning of the cluster upgrade.
  * BaselineTotalCount `integer`: Total number of upgrade domain nodes in the health store at the beginning of the cluster upgrade.
  * MaxPercentDeltaUnhealthyNodes `integer`: Maximum allowed percentage of upgrade domain delta unhealthy nodes from the ClusterUpgradeHealthPolicy.
  * TotalCount `integer`: Total number of upgrade domain nodes in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * UpgradeDomainName `string`: Name of the upgrade domain where nodes health is currently evaluated.

### UpgradeDomainDurationString
* UpgradeDomainDurationString `string`: The estimated elapsed time spent processing the current upgrade domain.

### UpgradeDomainInfo
* UpgradeDomainInfo `object`: Information about an upgrade domain.
  * Name [UpgradeDomainName](#upgradedomainname)
  * State [UpgradeDomainState](#upgradedomainstate)

### UpgradeDomainInfoList
* UpgradeDomainInfoList `array`: List of upgrade domains and their statuses.
  * items [UpgradeDomainInfo](#upgradedomaininfo)

### UpgradeDomainName
* UpgradeDomainName `string`: The name of the upgrade domain

### UpgradeDomainNodesHealthEvaluation
* UpgradeDomainNodesHealthEvaluation: Represents health evaluation for cluster nodes in an upgrade domain, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned when evaluating cluster health during cluster upgrade and the aggregated health state is either Error or Warning.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)
  * MaxPercentUnhealthyNodes `integer`: Maximum allowed percentage of unhealthy nodes from the ClusterHealthPolicy.
  * TotalCount `integer`: Total number of nodes in the current upgrade domain.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * UpgradeDomainName `string`: Name of the upgrade domain where nodes health is currently evaluated.

### UpgradeDomainState
* UpgradeDomainState `string` (values: Invalid, Pending, InProgress, Completed): The state of the upgrade domain.

### UpgradeDomainTimeout
* UpgradeDomainTimeout `string`: The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### UpgradeDurationString
* UpgradeDurationString `string`: The estimated elapsed time spent processing the current overall upgrade.

### UpgradeFailureTimeUTCString
* UpgradeFailureTimeUTCString `string`: The failure time of the upgrade in UTC.

### UpgradeKind
* UpgradeKind `string` (values: Invalid, Rolling): The kind of upgrade out of the following possible values.

### UpgradeMode
* UpgradeMode `string` (values: Invalid, UnmonitoredAuto, UnmonitoredManual, Monitored): The mode used to monitor health during a rolling upgrade.

### UpgradeReplicaSetCheckTimeout
* UpgradeReplicaSetCheckTimeout `integer`: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).

### UpgradeStartTimeUTCString
* UpgradeStartTimeUTCString `string`: The start time of the upgrade in UTC.

### UpgradeState
* UpgradeState `string` (values: Invalid, RollingBackInProgress, RollingBackCompleted, RollingForwardPending, RollingForwardInProgress, RollingForwardCompleted, Failed): The state of the upgrade domain.

### UpgradeTimeout
* UpgradeTimeout `string`: The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### ValidationFailedChaosEvent
* ValidationFailedChaosEvent: Chaos event corresponding to a failure during validation.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`
  * Reason `string`

### WaitForInbuildReplicaSafetyCheck
* WaitForInbuildReplicaSafetyCheck: Safety check that waits for the replica build operation to finish. This indiciates that there is a replica that is going through the copy or is providing data for building another replica. Bring the node down will abort this copy operation which are typoically expensive involving data movements.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### WaitForPrimaryPlacementSafetyCheck
* WaitForPrimaryPlacementSafetyCheck: Safety check that waits for the primary replica that was moved out of the node due to upgrade to be placed back again on that node.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### WaitForPrimarySwapSafetyCheck
* WaitForPrimarySwapSafetyCheck: Safety check that waits for the primary replica to be moved out of the node before starting an upgrade to ensure the avaiability of the primary replica for the partition.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### WaitForReconfigurationSafetyCheck
* WaitForReconfigurationSafetyCheck: Safety check that waits for the current reconfiguration of the partition to be completed before starting an upgrade.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)
  * PartitionId `string`: Id of the partition which is undergoing the safety check.

### WaitingChaosEvent
* WaitingChaosEvent: Describes a Chaos event that gets generated when Chaos is waiting for the cluster to become ready for faulting, for example, Chaos may be waiting for the on-going upgrade to finish.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`
  * Reason `string`


