# @datafire/azure_servicefabric

Client library for Service Fabric Client APIs

## Installation and Usage
```bash
npm install --save @datafire/azure_servicefabric
```
```js
let azure_servicefabric = require('@datafire/azure_servicefabric').create();

.then(data => {
  console.log(data);
});
```

## Description

Service Fabric REST Client APIs allows management of Service Fabric clusters, applications and services.

## Actions

### CancelRepairTask
This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.CancelRepairTask({
  "api-version": "",
  "RepairTaskCancelDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * RepairTaskCancelDescription **required** [RepairTaskCancelDescription](#repairtaskcanceldescription)

#### Output
* output [RepairTaskUpdateInfo](#repairtaskupdateinfo)

### CreateRepairTask
For clusters that have the Repair Manager Service configured,
this API provides a way to create repair tasks that run automatically or manually.
For repair tasks that run automatically, an appropriate repair executor
must be running for each repair action to run automatically.
These are currently only available in specially-configured Azure Cloud Services.

To create a manual repair task, provide the set of impacted node names and the
expected impact. When the state of the created repair task changes to approved,
you can safely perform repair actions on those nodes.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.CreateRepairTask({
  "api-version": "",
  "RepairTask": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * RepairTask **required** [RepairTask](#repairtask)

#### Output
* output [RepairTaskUpdateInfo](#repairtaskupdateinfo)

### DeleteRepairTask
This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.DeleteRepairTask({
  "api-version": "",
  "RepairTaskDeleteDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * RepairTaskDeleteDescription **required** [RepairTaskDeleteDescription](#repairtaskdeletedescription)

#### Output
*Output schema unknown*

### ForceApproveRepairTask
This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.ForceApproveRepairTask({
  "api-version": "",
  "RepairTaskApproveDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * RepairTaskApproveDescription **required** [RepairTaskApproveDescription](#repairtaskapprovedescription)

#### Output
* output [RepairTaskUpdateInfo](#repairtaskupdateinfo)

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [AadMetadataObject](#aadmetadataobject)

### GetClusterConfiguration
The cluster configuration contains properties of the cluster that include different node types on the cluster,
security configurations, fault, and upgrade domain topologies, etc.


```js
azure_servicefabric.GetClusterConfiguration({
  "api-version": "",
  "ConfigurationApiVersion": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ConfigurationApiVersion **required** `string`: The API version of the Standalone cluster json configuration.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterConfiguration](#clusterconfiguration)

### GetClusterConfigurationUpgradeStatus
Get the cluster configuration upgrade status details of a Service Fabric standalone cluster.


```js
azure_servicefabric.GetClusterConfigurationUpgradeStatus({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterConfigurationUpgradeStatusInfo](#clusterconfigurationupgradestatusinfo)

### GetClusterHealth
Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state.
Similarly, use NodesHealthStateFilter and ApplicationsHealthStateFilter to filter the collection of nodes and applications returned based on their aggregated health state.


```js
azure_servicefabric.GetClusterHealth({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * NodesHealthStateFilter `integer`: Allows filtering of the node health state objects returned in the result of cluster health query
  * ApplicationsHealthStateFilter `integer`: Allows filtering of the application health state objects returned in the result of cluster health
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * IncludeSystemApplicationHealthStatistics `boolean`: Indicates whether the health statistics should include the fabric:/System application health statistics. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterHealth](#clusterhealth)

### GetClusterHealthUsingPolicy
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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * NodesHealthStateFilter `integer`: Allows filtering of the node health state objects returned in the result of cluster health query
  * ApplicationsHealthStateFilter `integer`: Allows filtering of the application health state objects returned in the result of cluster health
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * IncludeSystemApplicationHealthStatistics `boolean`: Indicates whether the health statistics should include the fabric:/System application health statistics. False by default.
  * ClusterHealthPolicies [ClusterHealthPolicies](#clusterhealthpolicies)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ClusterHealthChunkQueryDescription [ClusterHealthChunkQueryDescription](#clusterhealthchunkquerydescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterHealthChunk](#clusterhealthchunk)

### GetClusterManifest
Get the Service Fabric cluster manifest. The cluster manifest contains properties of the cluster that include different node types on the cluster,
security configurations, fault, and upgrade domain topologies, etc.

These properties are specified as part of the ClusterConfig.JSON file while deploying a stand-alone cluster. However, most of the information in the cluster manifest
is generated internally by service fabric during cluster deployment in other deployment scenarios (e.g. when using Azure portal).

The contents of the cluster manifest are for informational purposes only and users are not expected to take a dependency on the format of the file contents or its interpretation.


```js
azure_servicefabric.GetClusterManifest({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterManifest](#clustermanifest)

### GetClusterVersion
If a cluster upgrade is happening, then this API will return the lowest (older) version of the current and target cluster runtime versions.


```js
azure_servicefabric.GetClusterVersion({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterVersion](#clusterversion)

### GetClusterLoad
Retrieves the load information of a Service Fabric cluster for all the metrics that have load or capacity defined.


```js
azure_servicefabric.GetClusterLoad({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ClusterLoadInfo](#clusterloadinfo)

### GetProvisionedFabricCodeVersionInfoList
Gets a list of information about fabric code versions that are provisioned in the cluster. The parameter CodeVersion can be used to optionally filter the output to only that particular version.


```js
azure_servicefabric.GetProvisionedFabricCodeVersionInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * CodeVersion `string`: The product version of Service Fabric.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ConfigVersion `string`: The config version of Service Fabric.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [FabricConfigVersionInfoList](#fabricconfigversioninfolist)

### GetRepairTaskList
This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.GetRepairTaskList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * TaskIdFilter `string`: The repair task ID prefix to be matched.
  * StateFilter `integer`: A bitwise-OR of the following values, specifying which task states should be included in the result list.
  * ExecutorFilter `string`: The name of the repair executor whose claimed tasks should be included in the list.

#### Output
* output [RepairTaskList](#repairtasklist)

### GetUpgradeOrchestrationServiceState
Get the service state of Service Fabric Upgrade Orchestration Service. This API is internally used for support purposes.


```js
azure_servicefabric.GetUpgradeOrchestrationServiceState({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [UpgradeOrchestrationServiceState](#upgradeorchestrationservicestate)

### GetClusterUpgradeProgress
Gets the current progress of the ongoing cluster upgrade. If no upgrade is currently in progress, get the last state of the previous cluster upgrade.


```js
azure_servicefabric.GetClusterUpgradeProgress({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * Command **required** `string`: The text of the command to be invoked. The content of the command is infrastructure-specific.
  * ServiceId `string`: The identity of the infrastructure service. This is the full name of the infrastructure service without the 'fabric:' URI scheme. This parameter required only for the cluster that has more than one instance of infrastructure service running.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [InfrastructureServiceResponse](#infrastructureserviceresponse)

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * Command **required** `string`: The text of the command to be invoked. The content of the command is infrastructure-specific.
  * ServiceId `string`: The identity of the infrastructure service. This is the full name of the infrastructure service without the 'fabric:' URI scheme. This parameter required only for the cluster that has more than one instance of infrastructure service running.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [InfrastructureServiceResponse](#infrastructureserviceresponse)

### ResumeClusterUpgrade
Make the cluster code or configuration upgrade move on to the next upgrade domain if appropriate.


```js
azure_servicefabric.ResumeClusterUpgrade({
  "api-version": "",
  "ResumeClusterUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ResumeClusterUpgradeDescription **required** [ResumeClusterUpgradeDescription](#resumeclusterupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ProvisionCluster
Validate and provision the code or configuration packages of a Service Fabric cluster.


```js
azure_servicefabric.ProvisionCluster({
  "api-version": "",
  "ProvisionFabricDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ProvisionFabricDescription **required** [ProvisionFabricDescription](#provisionfabricdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RecoverAllPartitions
This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverAllPartitions({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RecoverSystemPartitions
Indicates to the Service Fabric cluster that it should attempt to recover the system services that are currently stuck in quorum loss. This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverSystemPartitions({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RollbackClusterUpgrade
Roll back the code or configuration upgrade of a Service Fabric cluster.


```js
azure_servicefabric.RollbackClusterUpgrade({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### SetUpgradeOrchestrationServiceState
Update the service state of Service Fabric Upgrade Orchestration Service. This API is internally used for support purposes.


```js
azure_servicefabric.SetUpgradeOrchestrationServiceState({
  "api-version": "",
  "UpgradeOrchestrationServiceState": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * UpgradeOrchestrationServiceState **required** [UpgradeOrchestrationServiceState](#upgradeorchestrationservicestate)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [UpgradeOrchestrationServiceStateSummary](#upgradeorchestrationservicestatesummary)

### StartClusterConfigurationUpgrade
Validate the supplied configuration upgrade parameters and start upgrading the cluster configuration if the parameters are valid.


```js
azure_servicefabric.StartClusterConfigurationUpgrade({
  "api-version": "",
  "ClusterConfigurationUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ClusterConfigurationUpgradeDescription **required** [ClusterConfigurationUpgradeDescription](#clusterconfigurationupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ToggleVerboseServicePlacementHealthReporting
If verbosity is set to true, then detailed health reports will be generated when replicas cannot be placed or dropped.
If verbosity is set to false, then no health reports will be generated when replicas cannot be placed or dropped.


```js
azure_servicefabric.ToggleVerboseServicePlacementHealthReporting({
  "api-version": "",
  "Enabled": true
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * Enabled **required** `boolean`: The verbosity of service placement health reporting.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### UnprovisionCluster
It is supported to unprovision code and configuration separately.


```js
azure_servicefabric.UnprovisionCluster({
  "api-version": "",
  "UnprovisionFabricDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * UnprovisionFabricDescription **required** [UnprovisionFabricDescription](#unprovisionfabricdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### UpdateRepairExecutionState
This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.UpdateRepairExecutionState({
  "api-version": "",
  "RepairTask": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * RepairTask **required** [RepairTask](#repairtask)

#### Output
* output [RepairTaskUpdateInfo](#repairtaskupdateinfo)

### UpdateRepairTaskHealthPolicy
This API supports the Service Fabric platform; it is not meant to be used directly from your code.


```js
azure_servicefabric.UpdateRepairTaskHealthPolicy({
  "api-version": "",
  "RepairTaskUpdateHealthPolicyDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * RepairTaskUpdateHealthPolicyDescription **required** [RepairTaskUpdateHealthPolicyDescription](#repairtaskupdatehealthpolicydescription)

#### Output
* output [RepairTaskUpdateInfo](#repairtaskupdateinfo)

### UpdateClusterUpgrade
Update the upgrade parameters used during a Service Fabric cluster upgrade.


```js
azure_servicefabric.UpdateClusterUpgrade({
  "api-version": "",
  "UpdateClusterUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * UpdateClusterUpgradeDescription **required** [UpdateClusterUpgradeDescription](#updateclusterupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartClusterUpgrade
Validate the supplied upgrade parameters and start upgrading the code or configuration version of a Service Fabric cluster if the parameters are valid.


```js
azure_servicefabric.StartClusterUpgrade({
  "api-version": "",
  "StartClusterUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * StartClusterUpgradeDescription **required** [StartClusterUpgradeDescription](#startclusterupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationTypeInfoList
Returns the information about the application types that are provisioned or in the process of being provisioned in the Service Fabric cluster. Each version of an application type is returned as one application type. The response includes the name, version, status, and other details about the application type. This is a paged query, meaning that if not all of the application types fit in a page, one page of results is returned as well as a continuation token, which can be used to get the next page. For example, if there are 10 application types but a page only fits the first three application types, or if max results is set to 3, then three is returned. To access the rest of the results, retrieve subsequent pages by using the returned continuation token in the next query. An empty continuation token is returned if there are no subsequent pages.


```js
azure_servicefabric.GetApplicationTypeInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ApplicationTypeDefinitionKindFilter `integer`: Used to filter on ApplicationTypeDefinitionKind which is the mechanism used to define a Service Fabric application type.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedApplicationTypeInfoList](#pagedapplicationtypeinfolist)

### ProvisionApplicationType
Provisions a Service Fabric application type with the cluster. The provision is required before any new applications can be instantiated.
The provision operation can be performed either on the application package specified by the relativePathInImageStore, or by using the URI of the external '.sfpkg'.


```js
azure_servicefabric.ProvisionApplicationType({
  "api-version": "",
  "ProvisionApplicationTypeDescriptionBaseRequiredBodyParam": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * ProvisionApplicationTypeDescriptionBaseRequiredBodyParam **required** [ProvisionApplicationTypeDescriptionBase](#provisionapplicationtypedescriptionbase)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationTypeInfoListByName
Returns the information about the application types that are provisioned or in the process of being provisioned in the Service Fabric cluster. These results are of application types whose name match exactly the one specified as the parameter, and which comply with the given query parameters. All versions of the application type matching the application type name are returned, with each version returned as one application type. The response includes the name, version, status, and other details about the application type. This is a paged query, meaning that if not all of the application types fit in a page, one page of results is returned as well as a continuation token, which can be used to get the next page. For example, if there are 10 application types but a page only fits the first three application types, or if max results is set to 3, then three is returned. To access the rest of the results, retrieve subsequent pages by using the returned continuation token in the next query. An empty continuation token is returned if there are no subsequent pages.


```js
azure_servicefabric.GetApplicationTypeInfoListByName({
  "api-version": "",
  "applicationTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion `string`: The version of the application type.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedApplicationTypeInfoList](#pagedapplicationtypeinfolist)

### GetApplicationManifest
The response contains the application manifest XML as a string.


```js
azure_servicefabric.GetApplicationManifest({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeVersion": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * ServiceManifestName **required** `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceTypeManifest](#servicetypemanifest)

### GetServiceTypeInfoList
Gets the list containing the information about service types that are supported by a provisioned application type in a Service Fabric cluster. The provided application type must exist. Otherwise, a 404 status is returned.


```js
azure_servicefabric.GetServiceTypeInfoList({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeVersion": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceTypeInfoList](#servicetypeinfolist)

### GetServiceTypeInfoByName
Gets the information about a specific service type that is supported by a provisioned application type in a Service Fabric cluster. The provided application type must exist. Otherwise, a 404 status is returned. A 204 response is returned if the specified service type is not found in the cluster.


```js
azure_servicefabric.GetServiceTypeInfoByName({
  "api-version": "",
  "applicationTypeName": "",
  "ApplicationTypeVersion": "",
  "serviceTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationTypeName **required** `string`: The name of the application type.
  * ApplicationTypeVersion **required** `string`: The version of the application type.
  * serviceTypeName **required** `string`: Specifies the name of a Service Fabric service type.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceTypeInfo](#servicetypeinfo)

### UnprovisionApplicationType
This operation can only be performed if all application instances of the application type have been deleted. Once the application type is unregistered, no new application instances can be created for this particular application type.


```js
azure_servicefabric.UnprovisionApplicationType({
  "api-version": "",
  "applicationTypeName": "",
  "UnprovisionApplicationTypeDescriptionInfo": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationTypeName **required** `string`: The name of the application type.
  * UnprovisionApplicationTypeDescriptionInfo **required** [UnprovisionApplicationTypeDescriptionInfo](#unprovisionapplicationtypedescriptioninfo)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationInfoList
Gets the information about the applications that were created or in the process of being created in the Service Fabric cluster and match the specified filters. The response includes the name, type, status, parameters, and other details about the application. If the applications do not fit in a page, one page of results is returned as well as a continuation token, which can be used to get the next page. Filters ApplicationTypeName and ApplicationDefinitionKindFilter cannot be specified at the same time.


```js
azure_servicefabric.GetApplicationInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.1): The version of the API. This parameter is required and its value must be '6.1'.
  * ApplicationDefinitionKindFilter `integer`: Used to filter on ApplicationDefinitionKind, which is the mechanism used to define a Service Fabric application.
  * ApplicationTypeName `string`: The application type name used to filter the applications to query for. This value should not contain the application type version.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedApplicationInfoList](#pagedapplicationinfolist)

### CreateApplication
Creates a Service Fabric application using the specified description.


```js
azure_servicefabric.CreateApplication({
  "api-version": "",
  "ApplicationDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ApplicationDescription **required** [ApplicationDescription](#applicationdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationInfo
Returns the information about the application that was created or in the process of being created in the Service Fabric cluster and whose name matches the one specified as the parameter. The response includes the name, type, status, parameters, and other details about the application.


```js
azure_servicefabric.GetApplicationInfo({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ExcludeApplicationParameters `boolean`: The flag that specifies whether application parameters will be excluded from the result.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationInfo](#applicationinfo)

### DeleteApplication
An application must be created before it can be deleted. Deleting an application will delete all services that are part of that application. By default, Service Fabric will try to close service replicas in a graceful manner and then delete the service. However, if a service is having issues closing the replica gracefully, the delete operation may take a long time or get stuck. Use the optional ForceRemove flag to skip the graceful close sequence and forcefully delete the application and all of its services.


```js
azure_servicefabric.DeleteApplication({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ForceRemove `boolean`: Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DisableApplicationBackup
Disables periodic backup of Service Fabric application which was previously enabled.


```js
azure_servicefabric.DisableApplicationBackup({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * DisableBackupDescription [DisableBackupDescription](#disablebackupdescription)

#### Output
*Output schema unknown*

### EnableApplicationBackup
Enables periodic backup of stateful partitions which are part of this Service Fabric application. Each partition is backed up individually as per the specified backup policy description. 
Note only C# based Reliable Actor and Reliable Stateful services are currently supported for periodic backup.


```js
azure_servicefabric.EnableApplicationBackup({
  "applicationId": "",
  "EnableBackupDescription": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * EnableBackupDescription **required** [EnableBackupDescription](#enablebackupdescription)
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationBackupConfigurationInfo
Gets the Service Fabric backup configuration information for the application and the services and partitions under this application.


```js
azure_servicefabric.GetApplicationBackupConfigurationInfo({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedBackupConfigurationInfoList](#pagedbackupconfigurationinfolist)

### GetApplicationBackupList
Returns a list of backups available for every partition in this Service Fabric application. The server enumerates all the backups available at the backup location configured in the backup policy. It also allows filtering of the result based on start and end datetime or just fetching the latest available backup for every partition.


```js
azure_servicefabric.GetApplicationBackupList({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * Latest `boolean`: Specifies whether to get only the most recent backup available for a partition for the specified time range.
  * StartDateTimeFilter `string`: Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated.
  * EndDateTimeFilter `string`: Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.

#### Output
* output [PagedBackupInfoList](#pagedbackupinfolist)

### GetApplicationHealth
Returns the heath state of the service fabric application. The response reports either Ok, Error or Warning health state. If the entity is not found in the health store, it will return Error.


```js
azure_servicefabric.GetApplicationHealth({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedApplicationsHealthStateFilter `integer`: Allows filtering of the deployed applications health state objects returned in the result of application health query based on their health state.
  * ServicesHealthStateFilter `integer`: Allows filtering of the services health state objects returned in the result of services health query based on their health state.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedApplicationsHealthStateFilter `integer`: Allows filtering of the deployed applications health state objects returned in the result of application health query based on their health state.
  * ServicesHealthStateFilter `integer`: Allows filtering of the services health state objects returned in the result of services health query based on their health state.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationHealth](#applicationhealth)

### GetApplicationLoadInfo
Returns the load information about the application that was created or in the process of being created in the Service Fabric cluster and whose name matches the one specified as the parameter. The response includes the name, minimum nodes, maximum nodes, the number of nodes the application is occupying currently, and application load metric information about the application.


```js
azure_servicefabric.GetApplicationLoadInfo({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationLoadInfo](#applicationloadinfo)

### GetServiceInfoList
Returns the information about all services belonging to the application specified by the application ID.


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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedServiceInfoList](#pagedserviceinfolist)

### CreateService
This api allows creating a new Service Fabric stateless or stateful service under a specified Service Fabric application. The description for creating the service includes partitioning information and optional properties for placement and load balancing. Some of the properties can later be modified using `UpdateService` API.


```js
azure_servicefabric.CreateService({
  "api-version": "",
  "applicationId": "",
  "ServiceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceDescription **required** [ServiceDescription](#servicedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### CreateServiceFromTemplate
Creates a Service Fabric service from the service template defined in the application manifest. A service template contains the properties that will be same for the service instance of the same type. The API allows overriding the properties that are usually different for different services of the same service type.


```js
azure_servicefabric.CreateServiceFromTemplate({
  "api-version": "",
  "applicationId": "",
  "ServiceFromTemplateDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceFromTemplateDescription **required** [ServiceFromTemplateDescription](#servicefromtemplatedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetServiceInfo
Returns the information about the specified service belonging to the specified Service Fabric application.


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
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationUpgradeProgressInfo](#applicationupgradeprogressinfo)

### ResumeApplicationUpgrade
Resumes an unmonitored manual Service Fabric application upgrade. Service Fabric upgrades one upgrade domain at a time. For unmonitored manual upgrades, after Service Fabric finishes an upgrade domain, it waits for you to call this API before proceeding to the next upgrade domain.


```js
azure_servicefabric.ResumeApplicationUpgrade({
  "api-version": "",
  "applicationId": "",
  "ResumeApplicationUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ResumeApplicationUpgradeDescription **required** [ResumeApplicationUpgradeDescription](#resumeapplicationupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ReportApplicationHealth
Reports health state of the specified Service Fabric application. The report must contain the information about the source of the health report and property on which it is reported.
The report is sent to a Service Fabric gateway Application, which forwards to the health store.
The report may be accepted by the gateway, but rejected by the health store after extra validation.
For example, the health store may reject the report because of an invalid parameter, like a stale sequence number.
To see whether the report was applied in the health store, get application health and check that the report appears in the HealthEvents section.


```js
azure_servicefabric.ReportApplicationHealth({
  "api-version": "",
  "applicationId": "",
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ResumeApplicationBackup
The previously suspended Service Fabric application resumes taking periodic backup as per the backup policy currently configured for the same.


```js
azure_servicefabric.ResumeApplicationBackup({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RollbackApplicationUpgrade
Starts rolling back the current application upgrade to the previous version. This API can only be used to roll back the current in-progress upgrade that is rolling forward to new version. If the application is not currently being upgraded use StartApplicationUpgrade API to upgrade it to desired version, including rolling back to a previous version.


```js
azure_servicefabric.RollbackApplicationUpgrade({
  "api-version": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### SuspendApplicationBackup
The application which is configured to take periodic backups, is suspended for taking further backups till it is resumed again. This operation applies to the entire application's hierarchy. It means all the services and partitions under this application are now suspended for backup.


```js
azure_servicefabric.SuspendApplicationBackup({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### UpdateApplicationUpgrade
Updates the parameters of an ongoing application upgrade from the ones specified at the time of starting the application upgrade. This may be required to mitigate stuck application upgrades due to incorrect parameters or issues in the application to make progress.


```js
azure_servicefabric.UpdateApplicationUpgrade({
  "api-version": "",
  "applicationId": "",
  "ApplicationUpgradeUpdateDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ApplicationUpgradeUpdateDescription **required** [ApplicationUpgradeUpdateDescription](#applicationupgradeupdatedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartApplicationUpgrade
Validates the supplied application upgrade parameters and starts upgrading the application if the parameters are valid.


```js
azure_servicefabric.StartApplicationUpgrade({
  "api-version": "",
  "applicationId": "",
  "ApplicationUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ApplicationUpgradeDescription **required** [ApplicationUpgradeDescription](#applicationupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetBackupsFromBackupLocation
Gets the list of backups available for the specified backed up entity (Application, Service or Partition) at the specified backup location (FileShare or Azure Blob Storage).


```js
azure_servicefabric.GetBackupsFromBackupLocation({
  "api-version": "",
  "GetBackupByStorageQueryDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * GetBackupByStorageQueryDescription **required** [GetBackupByStorageQueryDescription](#getbackupbystoragequerydescription)

#### Output
* output [PagedBackupInfoList](#pagedbackupinfolist)

### GetBackupPolicyList
Get a list of all the backup policies configured.


```js
azure_servicefabric.GetBackupPolicyList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedBackupPolicyDescriptionList](#pagedbackuppolicydescriptionlist)

### CreateBackupPolicy
Creates a backup policy which can be associated later with a Service Fabric application, service or a partition for periodic backup.


```js
azure_servicefabric.CreateBackupPolicy({
  "BackupPolicyDescription": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * BackupPolicyDescription **required** [BackupPolicyDescription](#backuppolicydescription)
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetBackupPolicyByName
Gets a particular backup policy identified by {backupPolicyName}


```js
azure_servicefabric.GetBackupPolicyByName({
  "backupPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * backupPolicyName **required** `string`: The name of the backup policy.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [BackupPolicyDescription](#backuppolicydescription)

### DeleteBackupPolicy
Deletes an existing backup policy. A backup policy must be created before it can be deleted. A currently active backup policy, associated with any Service Fabric application, service or partition, cannot be deleted without first deleting the mapping.


```js
azure_servicefabric.DeleteBackupPolicy({
  "backupPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * backupPolicyName **required** `string`: The name of the backup policy.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetAllEntitiesBackedUpByPolicy
Returns a list of Service Fabric application, service or partition which are associated with this backup policy.


```js
azure_servicefabric.GetAllEntitiesBackedUpByPolicy({
  "backupPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * backupPolicyName **required** `string`: The name of the backup policy.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedBackupEntityList](#pagedbackupentitylist)

### UpdateBackupPolicy
Updates the backup policy identified by {backupPolicyName}


```js
azure_servicefabric.UpdateBackupPolicy({
  "BackupPolicyDescription": null,
  "backupPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * BackupPolicyDescription **required** [BackupPolicyDescription](#backuppolicydescription)
  * backupPolicyName **required** `string`: The name of the backup policy.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetComposeDeploymentStatusList
Gets the status about the compose deployments that were created or in the process of being created in the Service Fabric cluster. The response includes the name, status, and other details about the compose deployments. If the list of deployments do not fit in a page, one page of results is returned as well as a continuation token, which can be used to get the next page.


```js
azure_servicefabric.GetComposeDeploymentStatusList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0-preview): The version of the API. This parameter is required and its value must be '"6.0-preview'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedComposeDeploymentStatusInfoList](#pagedcomposedeploymentstatusinfolist)

### CreateComposeDeployment
Compose is a file format that describes multi-container applications. This API allows deploying container based applications defined in compose format in a Service Fabric cluster. Once the deployment is created, its status can be tracked via the `GetComposeDeploymentStatus` API.


```js
azure_servicefabric.CreateComposeDeployment({
  "api-version": "",
  "CreateComposeDeploymentDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0-preview): The version of the API. This parameter is required and its value must be '"6.0-preview'.
  * CreateComposeDeploymentDescription **required** [CreateComposeDeploymentDescription](#createcomposedeploymentdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetComposeDeploymentStatus
Returns the status of the compose deployment that was created or in the process of being created in the Service Fabric cluster and whose name matches the one specified as the parameter. The response includes the name, status, and other details about the deployment.


```js
azure_servicefabric.GetComposeDeploymentStatus({
  "api-version": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0-preview): The version of the API. This parameter is required and its value must be '"6.0-preview'.
  * deploymentName **required** `string`: The identity of the deployment.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ComposeDeploymentStatusInfo](#composedeploymentstatusinfo)

### RemoveComposeDeployment
Deletes an existing Service Fabric compose deployment.


```js
azure_servicefabric.RemoveComposeDeployment({
  "api-version": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0-preview): The version of the API. This parameter is required and its value must be '"6.0-preview'.
  * deploymentName **required** `string`: The identity of the deployment.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetComposeDeploymentUpgradeProgress
Returns the information about the state of the compose deployment upgrade along with details to aid debugging application health issues.


```js
azure_servicefabric.GetComposeDeploymentUpgradeProgress({
  "api-version": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0-preview): The version of the API. This parameter is required and its value must be '"6.0-preview'.
  * deploymentName **required** `string`: The identity of the deployment.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ComposeDeploymentUpgradeProgressInfo](#composedeploymentupgradeprogressinfo)

### StartRollbackComposeDeploymentUpgrade
Rollback a service fabric compose deployment upgrade.


```js
azure_servicefabric.StartRollbackComposeDeploymentUpgrade({
  "api-version": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * deploymentName **required** `string`: The identity of the deployment.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartComposeDeploymentUpgrade
Validates the supplied upgrade parameters and starts upgrading the deployment if the parameters are valid.


```js
azure_servicefabric.StartComposeDeploymentUpgrade({
  "api-version": "",
  "deploymentName": "",
  "ComposeDeploymentUpgradeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0-preview): The version of the API. This parameter is required and its value must be '"6.0-preview'.
  * deploymentName **required** `string`: The identity of the deployment.
  * ComposeDeploymentUpgradeDescription **required** [ComposeDeploymentUpgradeDescription](#composedeploymentupgradedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationsEventList
The response is list of ApplicationEvent objects.


```js
azure_servicefabric.GetApplicationsEventList({
  "api-version": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ApplicationEventList](#applicationeventlist)

### GetApplicationEventList
The response is list of ApplicationEvent objects.


```js
azure_servicefabric.GetApplicationEventList({
  "api-version": "",
  "applicationId": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ApplicationEventList](#applicationeventlist)

### GetClusterEventList
The response is list of ClusterEvent objects.


```js
azure_servicefabric.GetClusterEventList({
  "api-version": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ClusterEventList](#clustereventlist)

### GetContainersEventList
The response is list of ContainerInstanceEvent objects.


```js
azure_servicefabric.GetContainersEventList({
  "api-version": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2-preview): The version of the API. This parameter is required and its value must be '6.2-preview'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ContainerInstanceEventList](#containerinstanceeventlist)

### GetCorrelatedEventList
The response is list of FabricEvents.


```js
azure_servicefabric.GetCorrelatedEventList({
  "api-version": "",
  "eventInstanceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * eventInstanceId **required** `string`: The EventInstanceId.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [EventList](#eventlist)

### GetNodesEventList
The response is list of NodeEvent objects.


```js
azure_servicefabric.GetNodesEventList({
  "api-version": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [NodeEventList](#nodeeventlist)

### GetNodeEventList
The response is list of NodeEvent objects.


```js
azure_servicefabric.GetNodeEventList({
  "api-version": "",
  "nodeName": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [NodeEventList](#nodeeventlist)

### GetPartitionsEventList
The response is list of PartitionEvent objects.


```js
azure_servicefabric.GetPartitionsEventList({
  "api-version": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [PartitionEventList](#partitioneventlist)

### GetPartitionEventList
The response is list of PartitionEvent objects.


```js
azure_servicefabric.GetPartitionEventList({
  "api-version": "",
  "partitionId": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [PartitionEventList](#partitioneventlist)

### GetPartitionReplicasEventList
The response is list of ReplicaEvent objects.


```js
azure_servicefabric.GetPartitionReplicasEventList({
  "api-version": "",
  "partitionId": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ReplicaEventList](#replicaeventlist)

### GetPartitionReplicaEventList
The response is list of ReplicaEvent objects.


```js
azure_servicefabric.GetPartitionReplicaEventList({
  "api-version": "",
  "partitionId": "",
  "replicaId": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ReplicaEventList](#replicaeventlist)

### GetServicesEventList
The response is list of ServiceEvent objects.


```js
azure_servicefabric.GetServicesEventList({
  "api-version": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ServiceEventList](#serviceeventlist)

### GetServiceEventList
The response is list of ServiceEvent objects.


```js
azure_servicefabric.GetServiceEventList({
  "api-version": "",
  "serviceId": "",
  "StartTimeUtc": "",
  "EndTimeUtc": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * StartTimeUtc **required** `string`: The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EndTimeUtc **required** `string`: The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
  * EventsTypesFilter `string`: This is a comma separated string specifying the types of FabricEvents that should only be included in the response.
  * ExcludeAnalysisEvents `boolean`: This param disables the retrieval of AnalysisEvents if true is passed.
  * SkipCorrelationLookup `boolean`: This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated.

#### Output
* output [ServiceEventList](#serviceeventlist)

### GetFaultOperationList
Gets the list of user-induced fault operations filtered by provided input.


```js
azure_servicefabric.GetFaultOperationList({
  "api-version": "",
  "TypeFilter": 0,
  "StateFilter": 0
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * TypeFilter **required** `integer`: Used to filter on OperationType for user-induced operations.
  * StateFilter **required** `integer`: Used to filter on OperationState's for user-induced operations.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [OperationStatusList](#operationstatuslist)

### CancelOperation
The following APIs start fault operations that may be cancelled by using CancelOperation: StartDataLoss, StartQuorumLoss, StartPartitionRestart, StartNodeTransition.

If force is false, then the specified user-induced operation will be gracefully stopped and cleaned up.  If force is true, the command will be aborted, and some internal state
may be left behind.  Specifying force as true should be used with care.  Calling this API with force set to true is not allowed until this API has already
been called on the same test command with force set to false first, or unless the test command already has an OperationState of OperationState.RollingBack.
Clarification: OperationState.RollingBack means that the system will be/is cleaning up internal system state caused by executing the command.  It will not restore data if the
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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * Force **required** `boolean`: Indicates whether to gracefully roll back and clean up internal system state modified by executing the user-induced operation.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * NodeTransitionType **required** `string` (values: Invalid, Start, Stop): Indicates the type of transition to perform.  NodeTransitionType.Start will start a stopped node.  NodeTransitionType.Stop will stop a node that is up.
  * NodeInstanceId **required** `string`: The node instance ID of the target node.  This can be determined through GetNodeInfo API.
  * StopDurationInSeconds **required** `integer`: The duration, in seconds, to keep the node stopped.  The minimum value is 600, the maximum is 14400.  After this time expires, the node will automatically come back up.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionRestartProgress](#partitionrestartprogress)

### StartDataLoss
This API will induce data loss for the specified partition. It will trigger a call to the OnDataLoss API of the partition.
Actual data loss will depend on the specified DataLossMode.

- PartialDataLoss - Only a quorum of replicas are removed and OnDataLoss is triggered for the partition but actual data loss depends on the presence of in-flight replication.
- FullDataLoss - All replicas are removed hence all data is lost and OnDataLoss is triggered.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * DataLossMode **required** `string` (values: Invalid, PartialDataLoss, FullDataLoss): This enum is passed to the StartDataLoss API to indicate what type of data loss to induce.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StartQuorumLoss
This API is useful for a temporary quorum loss situation on your service.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * QuorumLossMode **required** `string` (values: Invalid, QuorumReplicas, AllReplicas): This enum is passed to the StartQuorumLoss API to indicate what type of quorum loss to induce.
  * QuorumLossDuration **required** `integer`: The amount of time for which the partition will be kept in quorum loss.  This must be specified in seconds.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * partitionId **required** `string`: The identity of the partition.
  * OperationId **required** `string`: A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
  * RestartPartitionMode **required** `string` (values: Invalid, AllReplicasOrInstances, OnlyActiveSecondaries): Describe which partitions to restart.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ImageStoreContent](#imagestorecontent)

### CommitImageStoreUploadSession
When all file chunks have been uploaded, the upload session needs to be committed explicitly to complete the upload. Image store preserves the upload session until the expiration time, which is 30 minutes after the last chunk received. 


```js
azure_servicefabric.CommitImageStoreUploadSession({
  "api-version": "",
  "session-id": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * session-id **required** `string`: A GUID generated by the user for a file uploading. It identifies an image store upload session which keeps track of all file chunks until it is committed.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### CopyImageStoreContent
Copies the image store content from the source image store relative path to the destination image store relative path.


```js
azure_servicefabric.CopyImageStoreContent({
  "api-version": "",
  "ImageStoreCopyDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ImageStoreCopyDescription **required** [ImageStoreCopyDescription](#imagestorecopydescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeleteImageStoreUploadSession
The DELETE request will cause the existing upload session to expire and remove any previously uploaded file chunks.


```js
azure_servicefabric.DeleteImageStoreUploadSession({
  "api-version": "",
  "session-id": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * session-id **required** `string`: A GUID generated by the user for a file uploading. It identifies an image store upload session which keeps track of all file chunks until it is committed.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetImageStoreRootFolderSize
Returns the total size of files at the root and children folders in image store.


```js
azure_servicefabric.GetImageStoreRootFolderSize({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.5): The version of the API. This parameter is required and its value must be '6.5'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [FolderSizeInfo](#foldersizeinfo)

### GetImageStoreUploadSessionById
Gets the image store upload session identified by the given ID. User can query the upload session at any time during uploading. 


```js
azure_servicefabric.GetImageStoreUploadSessionById({
  "api-version": "",
  "session-id": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * session-id **required** `string`: A GUID generated by the user for a file uploading. It identifies an image store upload session which keeps track of all file chunks until it is committed.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [UploadSession](#uploadsession)

### DeleteImageStoreContent
Deletes existing image store content being found within the given image store relative path. This command can be used to delete uploaded application packages once they are provisioned.


```js
azure_servicefabric.DeleteImageStoreContent({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetImageStoreContent
Returns the information about the image store content at the specified contentPath. The contentPath is relative to the root of the image store.


```js
azure_servicefabric.GetImageStoreContent({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ImageStoreContent](#imagestorecontent)

### UploadFile
Uploads contents of the file to the image store. Use this API if the file is small enough to upload again if the connection fails. The file's data needs to be added to the request body. The contents will be uploaded to the specified path. Image store service uses a mark file to indicate the availability of the folder. The mark file is an empty file named "_.dir". The mark file is generated by the image store service when all files in a folder are uploaded. When using File-by-File approach to upload application package in REST, the image store service isn't aware of the file hierarchy of the application package; you need to create a mark file per folder and upload it last, to let the image store service know that the folder is complete.


```js
azure_servicefabric.UploadFile({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetImageStoreFolderSize
Gets the total size of file under a image store folder, specified by contentPath. The contentPath is relative to the root of the image store.


```js
azure_servicefabric.GetImageStoreFolderSize({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.5): The version of the API. This parameter is required and its value must be '6.5'.
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [FolderSizeInfo](#foldersizeinfo)

### GetImageStoreUploadSessionByPath
Gets the image store upload session associated with the given image store relative path. User can query the upload session at any time during uploading. 


```js
azure_servicefabric.GetImageStoreUploadSessionByPath({
  "api-version": "",
  "contentPath": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [UploadSession](#uploadsession)

### UploadFileChunk
Uploads a file chunk to the image store with the specified upload session ID and image store relative path. This API allows user to resume the file upload operation. user doesn't have to restart the file upload from scratch whenever there is a network interruption. Use this option if the file size is large.

To perform a resumable file upload, user need to break the file into multiple chunks and upload these chunks to the image store one-by-one. Chunks don't have to be uploaded in order. If the file represented by the image store relative path already exists, it will be overwritten when the upload session commits.


```js
azure_servicefabric.UploadFileChunk({
  "api-version": "",
  "contentPath": "",
  "session-id": "",
  "Content-Range": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * contentPath **required** `string`: Relative path to file or folder in the image store from its root.
  * session-id **required** `string`: A GUID generated by the user for a file uploading. It identifies an image store upload session which keeps track of all file chunks until it is committed.
  * Content-Range **required** `string`: When uploading file chunks to the image store, the Content-Range header field need to be configured and sent with a request. The format should looks like "bytes {First-Byte-Position}-{Last-Byte-Position}/{File-Length}". For example, Content-Range:bytes 300-5000/20000 indicates that user is sending bytes 300 through 5,000 and the total file length is 20,000 bytes.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### CreateName
Creates the specified Service Fabric name.


```js
azure_servicefabric.CreateName({
  "api-version": "",
  "NameDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * NameDescription **required** [NameDescription](#namedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeleteName
Deletes the specified Service Fabric name. A name must be created before it can be deleted. Deleting a name with child properties will fail.


```js
azure_servicefabric.DeleteName({
  "api-version": "",
  "nameId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetNameExistsInfo
Returns whether the specified Service Fabric name exists.


```js
azure_servicefabric.GetNameExistsInfo({
  "api-version": "",
  "nameId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetPropertyInfoList
A Service Fabric name can have one or more named properties that store custom information. This operation gets the information about these properties in a paged list. The information includes name, value, and metadata about each of the properties.


```js
azure_servicefabric.GetPropertyInfoList({
  "api-version": "",
  "nameId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * IncludeValues `boolean`: Allows specifying whether to include the values of the properties returned. True if values should be returned with the metadata; False to return only property metadata.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedPropertyInfoList](#pagedpropertyinfolist)

### SubmitPropertyBatch
Submits a batch of property operations. Either all or none of the operations will be committed.


```js
azure_servicefabric.SubmitPropertyBatch({
  "api-version": "",
  "nameId": "",
  "PropertyBatchDescriptionList": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * PropertyBatchDescriptionList **required** [PropertyBatchDescriptionList](#propertybatchdescriptionlist)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [SuccessfulPropertyBatchInfo](#successfulpropertybatchinfo)

### DeleteProperty
Deletes the specified Service Fabric property under a given name. A property must be created before it can be deleted.


```js
azure_servicefabric.DeleteProperty({
  "api-version": "",
  "nameId": "",
  "PropertyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * PropertyName **required** `string`: Specifies the name of the property to get.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetPropertyInfo
Gets the specified Service Fabric property under a given name. This will always return both value and metadata.


```js
azure_servicefabric.GetPropertyInfo({
  "api-version": "",
  "nameId": "",
  "PropertyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * PropertyName **required** `string`: Specifies the name of the property to get.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PropertyInfo](#propertyinfo)

### PutProperty
Creates or updates the specified Service Fabric property under a given name.


```js
azure_servicefabric.PutProperty({
  "api-version": "",
  "nameId": "",
  "PropertyDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * PropertyDescription **required** [PropertyDescription](#propertydescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetSubNameInfoList
Enumerates all the Service Fabric names under a given name. If the subnames do not fit in a page, one page of results is returned as well as a continuation token, which can be used to get the next page. Querying a name that doesn't exist will fail.


```js
azure_servicefabric.GetSubNameInfoList({
  "api-version": "",
  "nameId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nameId **required** `string`: The Service Fabric name, without the 'fabric:' URI scheme.
  * Recursive `boolean`: Allows specifying that the search performed should be recursive.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedSubNameInfoList](#pagedsubnameinfolist)

### GetNodeInfoList
The response includes the name, status, ID, health, uptime, and other details about the nodes.


```js
azure_servicefabric.GetNodeInfoList({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.3): The version of the API. This parameter is required and its value must be '6.3'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * NodeStatusFilter `string` (values: default, all, up, down, enabling, disabling, disabled, unknown, removed): Allows filtering the nodes based on the NodeStatus. Only the nodes that are matching the specified filter value will be returned. The filter value can be one of the following.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedNodeInfoList](#pagednodeinfolist)

### GetNodeInfo
The response includes the name, status, ID, health, uptime, and other details about the node.


```js
azure_servicefabric.GetNodeInfo({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeInfo](#nodeinfo)

### EnableNode
Activates a Service Fabric cluster node that is currently deactivated. Once activated, the node will again become a viable target for placing new replicas, and any deactivated replicas remaining on the node will be reactivated.


```js
azure_servicefabric.EnableNode({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DisableNode
Deactivate a Service Fabric cluster node with the specified deactivation intent. Once the deactivation is in progress, the deactivation intent can be increased, but not decreased (for example, a node that is deactivated with the Pause intent can be deactivated further with Restart, but not the other way around. Nodes may be reactivated using the Activate a node operation any time after they are deactivated. If the deactivation is not complete, this will cancel the deactivation. A node that goes down and comes back up while deactivated will still need to be reactivated before services will be placed on that node.


```js
azure_servicefabric.DisableNode({
  "api-version": "",
  "nodeName": "",
  "DeactivationIntentDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * DeactivationIntentDescription **required** [DeactivationIntentDescription](#deactivationintentdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeployServicePackageToNode
This API provides a way to download code packages including the container images on a specific node outside of the normal application deployment and upgrade path. This is useful for the large code packages and container images to be present on the node before the actual application deployment and upgrade, thus significantly reducing the total time required for the deployment or upgrade.


```js
azure_servicefabric.DeployServicePackageToNode({
  "api-version": "",
  "nodeName": "",
  "DeployServicePackageToNodeDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * DeployServicePackageToNodeDescription **required** [DeployServicePackageToNodeDescription](#deployservicepackagetonodedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedApplicationInfoList
Gets the list of applications deployed on a Service Fabric node. The results do not include information about deployed system applications unless explicitly queried for by ID. Results encompass deployed applications in active, activating, and downloading states. This query requires that the node name corresponds to a node on the cluster. The query fails if the provided node name does not point to any active Service Fabric nodes on the cluster.


```js
azure_servicefabric.GetDeployedApplicationInfoList({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.1): The version of the API. This parameter is required and its value must be '6.1'.
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * IncludeHealthState `boolean`: Include the health state of an entity.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.

#### Output
* output [PagedDeployedApplicationInfoList](#pageddeployedapplicationinfolist)

### GetDeployedApplicationInfo
This query returns system application information if the application ID provided is for system application. Results encompass deployed applications in active, activating, and downloading states. This query requires that the node name corresponds to a node on the cluster. The query fails if the provided node name does not point to any active Service Fabric nodes on the cluster.


```js
azure_servicefabric.GetDeployedApplicationInfo({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.1): The version of the API. This parameter is required and its value must be '6.1'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * IncludeHealthState `boolean`: Include the health state of an entity.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceManifestName `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * CodePackageName `string`: The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedCodePackageInfoList](#deployedcodepackageinfolist)

### InvokeContainerApi
Invoke container API on a container deployed on a Service Fabric node for the given code package.


```js
azure_servicefabric.InvokeContainerApi({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "ServiceManifestName": "",
  "CodePackageName": "",
  "CodePackageInstanceId": "",
  "ContainerApiRequestBody": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceManifestName **required** `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * CodePackageName **required** `string`: The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster.
  * CodePackageInstanceId **required** `string`: ID that uniquely identifies a code package instance deployed on a service fabric node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * ContainerApiRequestBody **required** [ContainerApiRequestBody](#containerapirequestbody)

#### Output
* output [ContainerApiResponse](#containerapiresponse)

### GetContainerLogsDeployedOnNode
Gets the container logs for container deployed on a Service Fabric node for the given code package.


```js
azure_servicefabric.GetContainerLogsDeployedOnNode({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "ServiceManifestName": "",
  "CodePackageName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceManifestName **required** `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * CodePackageName **required** `string`: The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster.
  * Tail `string`: Number of lines to show from the end of the logs. Default is 100. 'all' to show the complete logs.
  * Previous `boolean`: Specifies whether to get container logs from exited/dead containers of the code package instance.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ContainerLogs](#containerlogs)

### RestartDeployedCodePackage
Restarts a code package deployed on a Service Fabric node in a cluster. This aborts the code package process, which will restart all the user service replicas hosted in that process.


```js
azure_servicefabric.RestartDeployedCodePackage({
  "api-version": "",
  "nodeName": "",
  "applicationId": "",
  "RestartDeployedCodePackageDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * RestartDeployedCodePackageDescription **required** [RestartDeployedCodePackageDescription](#restartdeployedcodepackagedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedServicePackagesHealthStateFilter `integer`: Allows filtering of the deployed service package health state objects returned in the result of deployed application health query based on their health state.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * DeployedServicePackagesHealthStateFilter `integer`: Allows filtering of the deployed service package health state objects returned in the result of deployed application health query based on their health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedApplicationHealth](#deployedapplicationhealth)

### GetDeployedServiceReplicaInfoList
Gets the list containing the information about replicas deployed on a Service Fabric node. The information include partition ID, replica ID, status of the replica, name of the service, name of the service type, and other information. Use PartitionId or ServiceManifestName query parameters to return information about the deployed replicas matching the specified values for those parameters.


```js
azure_servicefabric.GetDeployedServiceReplicaInfoList({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * PartitionId `string`: The identity of the partition.
  * ServiceManifestName `string`: The name of a service manifest registered as part of an application type in a Service Fabric cluster.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServicePackageInfoList](#deployedservicepackageinfolist)

### GetDeployedServicePackageHealth
Gets the information about health of a service package for a specific application deployed on a Service Fabric node. Use EventsHealthStateFilter to optionally filter for the collection of HealthEvent objects reported on the deployed service package based on health state.


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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServicePackageHealth](#deployedservicepackagehealth)

### GetDeployedServicePackageHealthUsingPolicy
Gets the information about health of a service package for a specific application deployed on a Service Fabric node. using the specified policy. Use EventsHealthStateFilter to optionally filter for the collection of HealthEvent objects reported on the deployed service package based on health state. Use ApplicationHealthPolicy to optionally override the health policies used to evaluate the health. This API only uses 'ConsiderWarningAsError' field of the ApplicationHealthPolicy. The rest of the fields are ignored while evaluating the health of the deployed service package.


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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * servicePackageName **required** `string`: The name of the service package.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedServiceTypeInfoList
Gets the list containing the information about service types from the applications deployed on a node in a Service Fabric cluster. The response includes the name of the service type, its registration status, the code package that registered it and activation ID of the service package.


```js
azure_servicefabric.GetDeployedServiceTypeInfoList({
  "api-version": "",
  "nodeName": "",
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * ServiceManifestName `string`: The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceTypeInfoList](#deployedservicetypeinfolist)

### GetDeployedServiceTypeInfoByName
Gets the list containing the information about a specific service type from the applications deployed on a node in a Service Fabric cluster. The response includes the name of the service type, its registration status, the code package that registered it and activation ID of the service package. Each entry represents one activation of a service type, differentiated by the activation ID.


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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * serviceTypeName **required** `string`: Specifies the name of a Service Fabric service type.
  * ServiceManifestName `string`: The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceTypeInfoList](#deployedservicetypeinfolist)

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * applicationId **required** `string`: The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeHealth](#nodehealth)

### GetNodeLoadInfo
Retrieves the load information of a Service Fabric node for all the metrics that have load or capacity defined.


```js
azure_servicefabric.GetNodeLoadInfo({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [NodeLoadInfo](#nodeloadinfo)

### GetDeployedServiceReplicaDetailInfoByPartitionId
Gets the details of the replica deployed on a Service Fabric node. The information includes service kind, service name, current service operation, current service operation start date time, partition ID, replica/instance ID, reported load, and other information.


```js
azure_servicefabric.GetDeployedServiceReplicaDetailInfoByPartitionId({
  "api-version": "",
  "nodeName": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [DeployedServiceReplicaDetailInfo](#deployedservicereplicadetailinfo)

### RemoveReplica
This API simulates a Service Fabric replica failure by removing a replica from a Service Fabric cluster. The removal closes the replica, transitions the replica to the role None, and then removes all of the state information of the replica from the cluster. This API tests the replica state removal path, and simulates the report fault permanent path through client APIs. Warning - There are no safety checks performed when this API is used. Incorrect use of this API can lead to data loss for stateful services. In addition, the forceRemove flag impacts all other replicas hosted in the same process.


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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * ForceRemove `boolean`: Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetDeployedServiceReplicaDetailInfo
Gets the details of the replica deployed on a Service Fabric node. The information includes service kind, service name, current service operation, current service operation start date time, partition ID, replica/instance ID, reported load, and other information.


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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RemoveNodeState
This implies that it is not possible to recover the persisted state of that node. This generally happens if a hard disk has been wiped clean, or if a hard disk crashes. The node has to be down for this operation to be successful. This operation lets Service Fabric know that the replicas on that node no longer exist, and that Service Fabric should stop waiting for those replicas to come back up. Do not run this cmdlet if the state on the node has not been removed and the node can come back up with its state intact. Starting from Service Fabric 6.5, in order to use this API for seed nodes, please change the seed nodes to regular (non-seed) nodes and then invoke this API to remove the node state. If the cluster is running on Azure, after the seed node goes down, Service Fabric will try to change it to a non-seed node automatically. To make this happen, make sure the number of non-seed nodes in the primary node type is no less than the number of Down seed nodes. If necessary, add more nodes to the primary node type to achieve this. For standalone cluster, if the Down seed node is not expected to come back up with its state intact, please remove the node from the cluster, see https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-windows-server-add-remove-nodes


```js
azure_servicefabric.RemoveNodeState({
  "api-version": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * nodeName **required** `string`: The name of the node.
  * RestartNodeDescription **required** [RestartNodeDescription](#restartnodedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetPartitionInfo
Gets the information about the specified partition. The response includes the partition ID, partitioning scheme information, keys supported by the partition, status, health, and other details about the partition.


```js
azure_servicefabric.GetPartitionInfo({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServicePartitionInfo](#servicepartitioninfo)

### BackupPartition
Creates a backup of the stateful persisted partition's state. In case the partition is already being periodically backed up, then by default the new backup is created at the same backup storage. One can also override the same by specifying the backup storage details as part of the request body. Once the backup is initiated, its progress can be tracked using the GetBackupProgress operation. 
In case, the operation times out, specify a greater backup timeout value in the query parameter.


```js
azure_servicefabric.BackupPartition({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * BackupPartitionDescription [BackupPartitionDescription](#backuppartitiondescription)
  * BackupTimeout `integer`: Specifies the maximum amount of time, in minutes, to wait for the backup operation to complete. Post that, the operation completes with timeout error. However, in certain corner cases it could be that though the operation returns back timeout, the backup actually goes through. In case of timeout error, its recommended to invoke this operation again with a greater timeout value. The default value for the same is 10 minutes.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DisablePartitionBackup
Disables periodic backup of partition which was previously enabled. Backup must be explicitly enabled before it can be disabled. 
In case the backup is enabled for the Service Fabric application or service, which this partition is part of, this partition would continue to be periodically backed up as per the policy mapped at the higher level entity.


```js
azure_servicefabric.DisablePartitionBackup({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * DisableBackupDescription [DisableBackupDescription](#disablebackupdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### EnablePartitionBackup
Enables periodic backup of stateful persisted partition. Each partition is backed up as per the specified backup policy description. In case the application or service, which is partition is part of, is already enabled for backup then this operation would override the policy being used to take the periodic backup of this partition.
Note only C# based Reliable Actor and Reliable Stateful services are currently supported for periodic backup.


```js
azure_servicefabric.EnablePartitionBackup({
  "partitionId": "",
  "EnableBackupDescription": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * EnableBackupDescription **required** [EnableBackupDescription](#enablebackupdescription)
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetPartitionBackupConfigurationInfo
Gets the Service Fabric Backup configuration information for the specified partition.


```js
azure_servicefabric.GetPartitionBackupConfigurationInfo({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionBackupConfigurationInfo](#partitionbackupconfigurationinfo)

### GetPartitionBackupProgress
Returns information about the state of the latest backup along with details or failure reason in case of completion.


```js
azure_servicefabric.GetPartitionBackupProgress({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [BackupProgressInfo](#backupprogressinfo)

### GetPartitionBackupList
Returns a list of backups available for the specified partition. The server enumerates all the backups available in the backup store configured in the backup policy. It also allows filtering of the result based on start and end datetime or just fetching the latest available backup for the partition.


```js
azure_servicefabric.GetPartitionBackupList({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * Latest `boolean`: Specifies whether to get only the most recent backup available for a partition for the specified time range.
  * StartDateTimeFilter `string`: Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated.
  * EndDateTimeFilter `string`: Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup.

#### Output
* output [PagedBackupInfoList](#pagedbackupinfolist)

### GetPartitionHealth
Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state.
Use ReplicasHealthStateFilter to filter the collection of ReplicaHealthState objects on the partition.
If you specify a partition that does not exist in the health store, this request returns an error.


```js
azure_servicefabric.GetPartitionHealth({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ReplicasHealthStateFilter `integer`: Allows filtering the collection of ReplicaHealthState objects on the partition. The value can be obtained from members or bitwise operations on members of HealthStateFilter. Only replicas that match the filter will be returned. All replicas will be used to evaluate the aggregated health state. If not specified, all entries will be returned.The state values are flag-based enumeration, so the value could be a combination of these values obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) will be returned. The possible values for this parameter include integer value of one of the following health states.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionHealth](#partitionhealth)

### GetPartitionHealthUsingPolicy
Gets the health information of the specified partition.
If the application health policy is specified, the health evaluation uses it to get the aggregated health state.
If the policy is not specified, the health evaluation uses the application health policy defined in the application manifest, or the default health policy, if no policy is defined in the manifest.
Use EventsHealthStateFilter to filter the collection of health events reported on the partition based on the health state.
Use ReplicasHealthStateFilter to filter the collection of ReplicaHealthState objects on the partition. Use ApplicationHealthPolicy in the POST body to override the health policies used to evaluate the health.
If you specify a partition that does not exist in the health store, this request returns an error.


```js
azure_servicefabric.GetPartitionHealthUsingPolicy({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ReplicasHealthStateFilter `integer`: Allows filtering the collection of ReplicaHealthState objects on the partition. The value can be obtained from members or bitwise operations on members of HealthStateFilter. Only replicas that match the filter will be returned. All replicas will be used to evaluate the aggregated health state. If not specified, all entries will be returned.The state values are flag-based enumeration, so the value could be a combination of these values obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) will be returned. The possible values for this parameter include integer value of one of the following health states.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionHealth](#partitionhealth)

### GetPartitionLoadInformation
Returns information about the load of a specified partition.
The response includes a list of load reports for a Service Fabric partition.
Each report includes the load metric name, value, and last reported time in UTC.


```js
azure_servicefabric.GetPartitionLoadInformation({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PartitionLoadInformation](#partitionloadinformation)

### GetReplicaInfoList
The GetReplicas endpoint returns information about the replicas of the specified partition. The response includes the ID, role, status, health, node name, uptime, and other details about the replica.


```js
azure_servicefabric.GetReplicaInfoList({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedReplicaInfoList](#pagedreplicainfolist)

### GetReplicaInfo
The response includes the ID, role, status, health, node name, uptime, and other details about the replica.


```js
azure_servicefabric.GetReplicaInfo({
  "api-version": "",
  "partitionId": "",
  "replicaId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * replicaId **required** `string`: The identifier of the replica.
  * ServiceKind **required** `string` (values: Stateless, Stateful): The kind of service replica (Stateless or Stateful) for which the health is being reported. Following are the possible values.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetPartitionRestoreProgress
Returns information about the state of the latest restore operation along with details or failure reason in case of completion.


```js
azure_servicefabric.GetPartitionRestoreProgress({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [RestoreProgressInfo](#restoreprogressinfo)

### GetServiceNameInfo
Gets name of the service for the specified partition. A 404 error is returned if the partition ID does not exist in the cluster.


```js
azure_servicefabric.GetServiceNameInfo({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceNameInfo](#servicenameinfo)

### MovePrimaryReplica
This command moves the primary replica of a partition of a stateful service, respecting all constraints.
If NodeName parameter is specified, primary will be moved to the specified node (if constraints allow it).
If NodeName parameter is not specified, primary replica will be moved to a random node in the cluster.
If IgnoreConstraints parameter is specified and set to true, then primary will be moved regardless of the constraints.


```js
azure_servicefabric.MovePrimaryReplica({
  "api-version": "",
  "partitionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.5): The version of the API. This parameter is required and its value must be '6.5'.
  * partitionId **required** `string`: The identity of the partition.
  * NodeName `string`: The name of the node.
  * IgnoreConstraints `boolean`: Ignore constraints when moving a replica. If this parameter is not specified, all constraints are honored.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### MoveSecondaryReplica
This command moves the secondary replica of a partition of a stateful service, respecting all constraints.
CurrentNodeName parameter must be specified to identify the replica that is moved.
Source node name must be specified, but new node name can be omitted, and in that case replica is moved to a random node.
If IgnoreConstraints parameter is specified and set to true, then secondary will be moved regardless of the constraints.


```js
azure_servicefabric.MoveSecondaryReplica({
  "api-version": "",
  "partitionId": "",
  "CurrentNodeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.5): The version of the API. This parameter is required and its value must be '6.5'.
  * partitionId **required** `string`: The identity of the partition.
  * CurrentNodeName **required** `string`: The name of the source node for secondary replica move.
  * NewNodeName `string`: The name of the target node for secondary replica move. If not specified, replica is moved to a random node.
  * IgnoreConstraints `boolean`: Ignore constraints when moving a replica. If this parameter is not specified, all constraints are honored.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RecoverPartition
This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverPartition({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * partitionId **required** `string`: The identity of the partition.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### RestorePartition
Restores the state of a of the stateful persisted partition using the specified backup point. In case the partition is already being periodically backed up, then by default the backup point is looked for in the storage specified in backup policy. One can also override the same by specifying the backup storage details as part of the restore partition description in body. Once the restore is initiated, its progress can be tracked using the GetRestoreProgress operation. 
In case, the operation times out, specify a greater restore timeout value in the query parameter.


```js
azure_servicefabric.RestorePartition({
  "partitionId": "",
  "RestorePartitionDescription": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * RestorePartitionDescription **required** [RestorePartitionDescription](#restorepartitiondescription)
  * RestoreTimeout `integer`: Specifies the maximum amount of time to wait, in minutes, for the restore operation to complete. Post that, the operation returns back with timeout error. However, in certain corner cases it could be that the restore operation goes through even though it completes with timeout. In case of timeout error, its recommended to invoke this operation again with a greater timeout value. the default value for the same is 10 minutes.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ResumePartitionBackup
The previously suspended partition resumes taking periodic backup as per the backup policy currently configured for the same.


```js
azure_servicefabric.ResumePartitionBackup({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### SuspendPartitionBackup
The partition which is configured to take periodic backups, is suspended for taking further backups till it is resumed again.


```js
azure_servicefabric.SuspendPartitionBackup({
  "partitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partitionId **required** `string`: The identity of the partition.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### MeshApplication_List
Gets the information about all application resources in a given resource group. The information include the description and other properties of the Application.


```js
azure_servicefabric.MeshApplication_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.

#### Output
* output [PagedApplicationResourceDescriptionList](#pagedapplicationresourcedescriptionlist)

### MeshApplication_Delete
Deletes the Application resource identified by the name.


```js
azure_servicefabric.MeshApplication_Delete({
  "api-version": "",
  "applicationResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.

#### Output
*Output schema unknown*

### MeshApplication_Get
Gets the information about the Application resource with the given name. The information include the description and other properties of the Application.


```js
azure_servicefabric.MeshApplication_Get({
  "api-version": "",
  "applicationResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.

#### Output
* output [ApplicationResourceDescription](#applicationresourcedescription)

### MeshApplication_CreateOrUpdate
Creates a Application resource with the specified name, description and properties. If Application resource with the same name exists, then it is updated with the specified description and properties.


```js
azure_servicefabric.MeshApplication_CreateOrUpdate({
  "api-version": "",
  "applicationResourceName": "",
  "applicationResourceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.
  * applicationResourceDescription **required** [ApplicationResourceDescription](#applicationresourcedescription)

#### Output
* output [ApplicationResourceDescription](#applicationresourcedescription)

### MeshService_List
Gets the information about all services of an application resource. The information include the description and other properties of the Service.


```js
azure_servicefabric.MeshService_List({
  "api-version": "",
  "applicationResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.

#### Output
* output [PagedServiceResourceDescriptionList](#pagedserviceresourcedescriptionlist)

### MeshService_Get
Gets the information about the Service resource with the given name. The information include the description and other properties of the Service.


```js
azure_servicefabric.MeshService_Get({
  "api-version": "",
  "applicationResourceName": "",
  "serviceResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.

#### Output
* output [ServiceResourceDescription](#serviceresourcedescription)

### MeshServiceReplica_List
Gets the information about all replicas of a service. The information include the description and other properties of the service replica.


```js
azure_servicefabric.MeshServiceReplica_List({
  "api-version": "",
  "applicationResourceName": "",
  "serviceResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.

#### Output
* output [PagedServiceReplicaDescriptionList](#pagedservicereplicadescriptionlist)

### MeshServiceReplica_Get
Gets the information about the service replica with the given name. The information include the description and other properties of the service replica.


```js
azure_servicefabric.MeshServiceReplica_Get({
  "api-version": "",
  "applicationResourceName": "",
  "serviceResourceName": "",
  "replicaName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.
  * replicaName **required** `string`: Service Fabric replica name.

#### Output
* output [ServiceReplicaDescription](#servicereplicadescription)

### MeshCodePackage_GetContainerLogs
Gets the logs for the container of the specified code package of the service replica.


```js
azure_servicefabric.MeshCodePackage_GetContainerLogs({
  "api-version": "",
  "applicationResourceName": "",
  "serviceResourceName": "",
  "replicaName": "",
  "codePackageName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.
  * replicaName **required** `string`: Service Fabric replica name.
  * codePackageName **required** `string`: The name of code package of the service.
  * Tail `string`: Number of lines to show from the end of the logs. Default is 100. 'all' to show the complete logs.

#### Output
* output [ContainerLogs](#containerlogs)

### MeshGateway_List
Gets the information about all gateway resources in a given resource group. The information include the description and other properties of the Gateway.


```js
azure_servicefabric.MeshGateway_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.

#### Output
* output [PagedGatewayResourceDescriptionList](#pagedgatewayresourcedescriptionlist)

### MeshGateway_Delete
Deletes the Gateway resource identified by the name.


```js
azure_servicefabric.MeshGateway_Delete({
  "api-version": "",
  "gatewayResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * gatewayResourceName **required** `string`: The identity of the gateway.

#### Output
*Output schema unknown*

### MeshGateway_Get
Gets the information about the Gateway resource with the given name. The information include the description and other properties of the Gateway.


```js
azure_servicefabric.MeshGateway_Get({
  "api-version": "",
  "gatewayResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * gatewayResourceName **required** `string`: The identity of the gateway.

#### Output
* output [GatewayResourceDescription](#gatewayresourcedescription)

### MeshGateway_CreateOrUpdate
Creates a Gateway resource with the specified name, description and properties. If Gateway resource with the same name exists, then it is updated with the specified description and properties. Use Gateway resource to provide public connectivity to application services.


```js
azure_servicefabric.MeshGateway_CreateOrUpdate({
  "api-version": "",
  "gatewayResourceName": "",
  "gatewayResourceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * gatewayResourceName **required** `string`: The identity of the gateway.
  * gatewayResourceDescription **required** [GatewayResourceDescription](#gatewayresourcedescription)

#### Output
* output [GatewayResourceDescription](#gatewayresourcedescription)

### MeshNetwork_List
Gets the information about all network resources in a given resource group. The information include the description and other properties of the Network.


```js
azure_servicefabric.MeshNetwork_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.

#### Output
* output [PagedNetworkResourceDescriptionList](#pagednetworkresourcedescriptionlist)

### MeshNetwork_Delete
Deletes the Network resource identified by the name.


```js
azure_servicefabric.MeshNetwork_Delete({
  "api-version": "",
  "networkResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * networkResourceName **required** `string`: The identity of the network.

#### Output
*Output schema unknown*

### MeshNetwork_Get
Gets the information about the Network resource with the given name. The information include the description and other properties of the Network.


```js
azure_servicefabric.MeshNetwork_Get({
  "api-version": "",
  "networkResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * networkResourceName **required** `string`: The identity of the network.

#### Output
* output [NetworkResourceDescription](#networkresourcedescription)

### MeshNetwork_CreateOrUpdate
Creates a Network resource with the specified name, description and properties. If Network resource with the same name exists, then it is updated with the specified description and properties. Network resource provides connectivity between application services.


```js
azure_servicefabric.MeshNetwork_CreateOrUpdate({
  "api-version": "",
  "networkResourceName": "",
  "networkResourceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * networkResourceName **required** `string`: The identity of the network.
  * networkResourceDescription **required** [NetworkResourceDescription](#networkresourcedescription)

#### Output
* output [NetworkResourceDescription](#networkresourcedescription)

### MeshSecret_List
Gets the information about all secret resources in a given resource group. The information include the description and other properties of the Secret.


```js
azure_servicefabric.MeshSecret_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.

#### Output
* output [PagedSecretResourceDescriptionList](#pagedsecretresourcedescriptionlist)

### MeshSecret_Delete
Deletes the specified Secret resource and all of its named values.


```js
azure_servicefabric.MeshSecret_Delete({
  "api-version": "",
  "secretResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.

#### Output
*Output schema unknown*

### MeshSecret_Get
Gets the information about the Secret resource with the given name. The information include the description and other properties of the Secret.


```js
azure_servicefabric.MeshSecret_Get({
  "api-version": "",
  "secretResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.

#### Output
* output [SecretResourceDescription](#secretresourcedescription)

### MeshSecret_CreateOrUpdate
Creates a Secret resource with the specified name, description and properties. If Secret resource with the same name exists, then it is updated with the specified description and properties. Once created, the kind and contentType of a secret resource cannot be updated.


```js
azure_servicefabric.MeshSecret_CreateOrUpdate({
  "api-version": "",
  "secretResourceName": "",
  "secretResourceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretResourceDescription **required** [SecretResourceDescription](#secretresourcedescription)

#### Output
* output [SecretResourceDescription](#secretresourcedescription)

### MeshSecretValue_List
Gets information about all secret value resources of the specified secret resource. The information includes the names of the secret value resources, but not the actual values.


```js
azure_servicefabric.MeshSecretValue_List({
  "api-version": "",
  "secretResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.

#### Output
* output [PagedSecretValueResourceDescriptionList](#pagedsecretvalueresourcedescriptionlist)

### MeshSecretValue_Delete
Deletes the secret value resource identified by the name. The name of the resource is typically the version associated with that value. Deletion will fail if the specified value is in use.


```js
azure_servicefabric.MeshSecretValue_Delete({
  "api-version": "",
  "secretResourceName": "",
  "secretValueResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.

#### Output
*Output schema unknown*

### MeshSecretValue_Get
Get the information about the specified named secret value resources. The information does not include the actual value of the secret.


```js
azure_servicefabric.MeshSecretValue_Get({
  "api-version": "",
  "secretResourceName": "",
  "secretValueResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.

#### Output
* output [SecretValueResourceDescription](#secretvalueresourcedescription)

### MeshSecretValue_AddValue
Creates a new value of the specified secret resource. The name of the value is typically the version identifier. Once created the value cannot be changed.


```js
azure_servicefabric.MeshSecretValue_AddValue({
  "api-version": "",
  "secretResourceName": "",
  "secretValueResourceName": "",
  "secretValueResourceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.
  * secretValueResourceDescription **required** [SecretValueResourceDescription](#secretvalueresourcedescription)

#### Output
* output [SecretValueResourceDescription](#secretvalueresourcedescription)

### MeshSecretValue_Show
Lists the decrypted value of the specified named value of the secret resource. This is a privileged operation.


```js
azure_servicefabric.MeshSecretValue_Show({
  "api-version": "",
  "secretResourceName": "",
  "secretValueResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.

#### Output
* output [SecretValue](#secretvalue)

### MeshVolume_List
Gets the information about all volume resources in a given resource group. The information include the description and other properties of the Volume.


```js
azure_servicefabric.MeshVolume_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.

#### Output
* output [PagedVolumeResourceDescriptionList](#pagedvolumeresourcedescriptionlist)

### MeshVolume_Delete
Deletes the Volume resource identified by the name.


```js
azure_servicefabric.MeshVolume_Delete({
  "api-version": "",
  "volumeResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * volumeResourceName **required** `string`: The identity of the volume.

#### Output
*Output schema unknown*

### MeshVolume_Get
Gets the information about the Volume resource with the given name. The information include the description and other properties of the Volume.


```js
azure_servicefabric.MeshVolume_Get({
  "api-version": "",
  "volumeResourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * volumeResourceName **required** `string`: The identity of the volume.

#### Output
* output [VolumeResourceDescription](#volumeresourcedescription)

### MeshVolume_CreateOrUpdate
Creates a Volume resource with the specified name, description and properties. If Volume resource with the same name exists, then it is updated with the specified description and properties.


```js
azure_servicefabric.MeshVolume_CreateOrUpdate({
  "api-version": "",
  "volumeResourceName": "",
  "volumeResourceDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4-preview): The version of the API. This parameter is required and its value must be '6.4-preview'.
  * volumeResourceName **required** `string`: The identity of the volume.
  * volumeResourceDescription **required** [VolumeResourceDescription](#volumeresourcedescription)

#### Output
* output [VolumeResourceDescription](#volumeresourcedescription)

### RecoverServicePartitions
Indicates to the Service Fabric cluster that it should attempt to recover the specified service that is currently stuck in quorum loss. This operation should only be performed if it is known that the replicas that are down cannot be recovered. Incorrect use of this API can cause potential data loss.


```js
azure_servicefabric.RecoverServicePartitions({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DeleteService
A service must be created before it can be deleted. By default, Service Fabric will try to close service replicas in a graceful manner and then delete the service. However, if the service is having issues closing the replica gracefully, the delete operation may take a long time or get stuck. Use the optional ForceRemove flag to skip the graceful close sequence and forcefully delete the service.


```js
azure_servicefabric.DeleteService({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * ForceRemove `boolean`: Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### DisableServiceBackup
Disables periodic backup of Service Fabric service which was previously enabled. Backup must be explicitly enabled before it can be disabled.
In case the backup is enabled for the Service Fabric application, which this service is part of, this service would continue to be periodically backed up as per the policy mapped at the application level.


```js
azure_servicefabric.DisableServiceBackup({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * DisableBackupDescription [DisableBackupDescription](#disablebackupdescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### EnableServiceBackup
Enables periodic backup of stateful partitions which are part of this Service Fabric service. Each partition is backed up individually as per the specified backup policy description. In case the application, which the service is part of, is already enabled for backup then this operation would override the policy being used to take the periodic backup for this service and its partitions (unless explicitly overridden at the partition level).
Note only C# based Reliable Actor and Reliable Stateful services are currently supported for periodic backup.


```js
azure_servicefabric.EnableServiceBackup({
  "serviceId": "",
  "EnableBackupDescription": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * EnableBackupDescription **required** [EnableBackupDescription](#enablebackupdescription)
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetApplicationNameInfo
Gets the name of the application for the specified service. A 404 FABRIC_E_SERVICE_DOES_NOT_EXIST error is returned if a service with the provided service ID does not exist.


```js
azure_servicefabric.GetApplicationNameInfo({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ApplicationNameInfo](#applicationnameinfo)

### GetServiceBackupConfigurationInfo
Gets the Service Fabric backup configuration information for the service and the partitions under this service.


```js
azure_servicefabric.GetServiceBackupConfigurationInfo({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedBackupConfigurationInfoList](#pagedbackupconfigurationinfolist)

### GetServiceBackupList
Returns a list of backups available for every partition in this Service Fabric service. The server enumerates all the backups available in the backup store configured in the backup policy. It also allows filtering of the result based on start and end datetime or just fetching the latest available backup for every partition.


```js
azure_servicefabric.GetServiceBackupList({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * Latest `boolean`: Specifies whether to get only the most recent backup available for a partition for the specified time range.
  * StartDateTimeFilter `string`: Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated.
  * EndDateTimeFilter `string`: Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.

#### Output
* output [PagedBackupInfoList](#pagedbackupinfolist)

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
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceDescription](#servicedescription)

### GetServiceHealth
Gets the health information of the specified service.
Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state.
Use PartitionsHealthStateFilter to filter the collection of partitions returned.
If you specify a service that does not exist in the health store, this request returns an error.


```js
azure_servicefabric.GetServiceHealth({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * PartitionsHealthStateFilter `integer`: Allows filtering of the partitions health state objects returned in the result of service health query based on their health state.
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceHealth](#servicehealth)

### GetServiceHealthUsingPolicy
Gets the health information of the specified service.
If the application health policy is specified, the health evaluation uses it to get the aggregated health state.
If the policy is not specified, the health evaluation uses the application health policy defined in the application manifest, or the default health policy, if no policy is defined in the manifest.
Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state.
Use PartitionsHealthStateFilter to filter the collection of partitions returned.
If you specify a service that does not exist in the health store, this request returns an error.


```js
azure_servicefabric.GetServiceHealthUsingPolicy({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * EventsHealthStateFilter `integer`: Allows filtering the collection of HealthEvent objects returned based on health state.
  * PartitionsHealthStateFilter `integer`: Allows filtering of the partitions health state objects returned in the result of service health query based on their health state.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ExcludeHealthStatistics `boolean`: Indicates whether the health statistics should be returned as part of the query result. False by default.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ServiceHealth](#servicehealth)

### GetPartitionInfoList
The response includes the partition ID, partitioning scheme information, keys supported by the partition, status, health, and other details about the partition.


```js
azure_servicefabric.GetPartitionInfoList({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [PagedServicePartitionInfoList](#pagedservicepartitioninfolist)

### GetUnplacedReplicaInformation
Returns the information about the unplaced replicas of the service.
If PartitionId is specified, then result will contain information only about unplaced replicas for that partition.
If PartitionId is not specified, then result will contain information about unplaced replicas for all partitions of that service.
If OnlyQueryPrimaries is set to true, then result will contain information only about primary replicas, and will ignore unplaced secondary replicas.


```js
azure_servicefabric.GetUnplacedReplicaInformation({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * PartitionId `string`: The identity of the partition.
  * OnlyQueryPrimaries `boolean`: Indicates that unplaced replica information will be queries only for primary replicas.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [UnplacedReplicaInformation](#unplacedreplicainformation)

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
  "HealthInformation": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * HealthInformation **required** [HealthInformation](#healthinformation)
  * Immediate `boolean`: A flag that indicates whether the report should be sent immediately.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### ResolveService
Resolve a Service Fabric service partition to get the endpoints of the service replicas.


```js
azure_servicefabric.ResolveService({
  "api-version": "",
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * PartitionKeyType `integer`: Key type for the partition. This parameter is required if the partition scheme for the service is Int64Range or Named. The possible values are following.
  * PartitionKeyValue `string`: Partition key. This is required if the partition scheme for the service is Int64Range or Named. 
  * PreviousRspVersion `string`: The value in the Version field of the response that was received previously. This is required if the user knows that the result that was gotten previously is stale.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ResolvedServicePartition](#resolvedservicepartition)

### ResumeServiceBackup
The previously suspended Service Fabric service resumes taking periodic backup as per the backup policy currently configured for the same.


```js
azure_servicefabric.ResumeServiceBackup({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### SuspendServiceBackup
The service which is configured to take periodic backups, is suspended for taking further backups till it is resumed again. This operation applies to the entire service's hierarchy. It means all the partitions under this service are now suspended for backup.


```js
azure_servicefabric.SuspendServiceBackup({
  "serviceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * api-version **required** `string` (values: 6.4): The version of the API. This parameter is required and its value must be '6.4'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### UpdateService
This API allows updating properties of a running Service Fabric service. The set of properties that can be updated are a subset of the properties that were specified at the time of creating the service. The current set of properties can be obtained using `GetServiceDescription` API. Note that updating the properties of a running service is different than upgrading your application using `StartApplicationUpgrade` API. The upgrade is a long running background operation that involves moving the application from one version to another, one upgrade domain at a time, whereas update applies the new properties immediately to the service.


```js
azure_servicefabric.UpdateService({
  "api-version": "",
  "serviceId": "",
  "ServiceUpdateDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * serviceId **required** `string`: The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme.
  * ServiceUpdateDescription **required** [ServiceUpdateDescription](#serviceupdatedescription)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetChaos
Get the status of Chaos indicating whether or not Chaos is running, the Chaos parameters used for running Chaos and the status of the Chaos Schedule.


```js
azure_servicefabric.GetChaos({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [Chaos](#chaos)

### StartChaos
If Chaos is not already running in the cluster, it starts Chaos with the passed in Chaos parameters.
If Chaos is already running when this call is made, the call fails with the error code FABRIC_E_CHAOS_ALREADY_RUNNING.
Refer to the article [Induce controlled Chaos in Service Fabric clusters](https://docs.microsoft.com/azure/service-fabric/service-fabric-controlled-chaos) for more details.


```js
azure_servicefabric.StartChaos({
  "api-version": "",
  "ChaosParameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * ChaosParameters **required** [ChaosParameters](#chaosparameters)
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### StopChaos
Stops Chaos from executing new faults. In-flight faults will continue to execute until they are complete. The current Chaos Schedule is put into a stopped state.
Once a schedule is stopped, it will stay in the stopped state and not be used to Chaos Schedule new runs of Chaos. A new Chaos Schedule must be set in order to resume scheduling.


```js
azure_servicefabric.StopChaos({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.0): The version of the API. This parameter is required and its value must be '6.0'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
*Output schema unknown*

### GetChaosEvents
To get the next segment of the Chaos events, you can specify the ContinuationToken. To get the start of a new segment of Chaos events, you can specify the time range
through StartTimeUtc and EndTimeUtc. You cannot specify both the ContinuationToken and the time range in the same call.
When there are more than 100 Chaos events, the Chaos events are returned in multiple segments where a segment contains no more than 100 Chaos events and to get the next segment you make a call to this API with the continuation token.


```js
azure_servicefabric.GetChaosEvents({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded.
  * StartTimeUtc `string`: The Windows file time representing the start time of the time range for which a Chaos report is to be generated. Consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/library/system.datetime.tofiletimeutc(v=vs.110).aspx) for details.
  * EndTimeUtc `string`: The Windows file time representing the end time of the time range for which a Chaos report is to be generated. Consult [DateTime.ToFileTimeUtc Method](https://msdn.microsoft.com/library/system.datetime.tofiletimeutc(v=vs.110).aspx) for details.
  * MaxResults `integer`: The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ChaosEventsSegment](#chaoseventssegment)

### GetChaosSchedule
Gets the version of the Chaos Schedule in use and the Chaos Schedule that defines when and how to run Chaos.


```js
azure_servicefabric.GetChaosSchedule({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.

#### Output
* output [ChaosScheduleDescription](#chaosscheduledescription)

### PostChaosSchedule
Chaos will automatically schedule runs based on the Chaos Schedule.
The Chaos Schedule will be updated if the provided version matches the version on the server.
When updating the Chaos Schedule, the version on the server is incremented by 1.
The version on the server will wrap back to 0 after reaching a large number.
If Chaos is running when this call is made, the call will fail.


```js
azure_servicefabric.PostChaosSchedule({
  "api-version": "",
  "ChaosSchedule": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 6.2): The version of the API. This parameter is required and its value must be '6.2'.
  * timeout `integer`: The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds.
  * ChaosSchedule **required** [ChaosScheduleDescription](#chaosscheduledescription)

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

### AddRemoveIncrementalNamedPartitionScalingMechanism
* AddRemoveIncrementalNamedPartitionScalingMechanism `object`: Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1''N-1'
  * MaxPartitionCount **required** `integer`: Maximum number of named partitions of the service.
  * MinPartitionCount **required** `integer`: Minimum number of named partitions of the service.
  * ScaleIncrement **required** `integer`: The number of instances to add or remove during a scaling operation.
  * Kind **required** [ScalingMechanismKind](#scalingmechanismkind)

### AddRemoveReplicaScalingMechanism
* AddRemoveReplicaScalingMechanism `object`: Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).
  * maxCount **required** `integer`: Maximum number of containers (scale up won't be performed above this number).
  * minCount **required** `integer`: Minimum number of containers (scale down won't be performed below this number).
  * scaleIncrement **required** `integer`: Each time auto scaling is performed, this number of containers will be added or removed.
  * kind **required** [AutoScalingMechanismKind](#autoscalingmechanismkind)

### AnalysisEventMetadata
* AnalysisEventMetadata `object`: Metadata about an Analysis Event.
  * Delay `string`: The analysis delay.
  * Duration `string`: The duration of analysis.

### ApplicationBackupConfigurationInfo
* ApplicationBackupConfigurationInfo `object`: Backup configuration information for a specific Service Fabric application specifying what backup policy is being applied and suspend description, if any.
  * ApplicationName [ApplicationName](#applicationname)
  * Kind **required** [BackupEntityKind](#backupentitykind)
  * PolicyInheritedFrom [BackupPolicyScope](#backuppolicyscope)
  * PolicyName `string`: The name of the backup policy which is applicable to this Service Fabric application or service or partition.
  * SuspensionInfo [BackupSuspensionInfo](#backupsuspensioninfo)

### ApplicationBackupEntity
* ApplicationBackupEntity `object`: Identifies the Service Fabric application which is being backed up.
  * ApplicationName [ApplicationName](#applicationname)
  * EntityKind **required** [BackupEntityKind](#backupentitykind)

### ApplicationCapacityDescription
* ApplicationCapacityDescription `object`: Describes capacity information for services of this application. This description can be used for describing the following.
  * ApplicationMetrics [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * MaximumNodes `integer`: The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
  * MinimumNodes `integer`: The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.

### ApplicationContainerInstanceExitedEvent
* ApplicationContainerInstanceExitedEvent `object`: Container Exited event.
  * CodePackageName **required** `string`: Name of Code package.
  * ContainerName **required** `string`: Name of Container.
  * EntryPointType **required** `string`: Type of EntryPoint.
  * ExitCode **required** `integer`: Exit code of process.
  * HostId **required** `string`: Host Id.
  * ImageName **required** `string`: Name of Container image.
  * IsExclusive **required** `boolean`: Indicates IsExclusive flag.
  * ServiceName **required** `string`: Name of Service.
  * ServicePackageActivationId **required** `string`: Activation Id of Service package.
  * ServicePackageName **required** `string`: Name of Service package.
  * StartTime **required** `string`: Start time of process.
  * UnexpectedTermination **required** `boolean`: Indicates if termination is unexpected.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationCreatedEvent
* ApplicationCreatedEvent `object`: Application Created event.
  * ApplicationDefinitionKind **required** `string`: Application definition kind.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Application type version.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationDefinitionKind
* ApplicationDefinitionKind `string` (values: Invalid, ServiceFabricApplicationDescription, Compose): The mechanism used to define a Service Fabric application.

### ApplicationDeletedEvent
* ApplicationDeletedEvent `object`: Application Deleted event.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Application type version.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationDescription
* ApplicationDescription `object`: Describes a Service Fabric application.
  * ApplicationCapacity [ApplicationCapacityDescription](#applicationcapacitydescription)
  * ManagedApplicationIdentity [ManagedApplicationIdentityDescription](#managedapplicationidentitydescription)
  * Name **required** [ApplicationName](#applicationname)
  * ParameterList [ApplicationParameterList](#applicationparameterlist)
  * TypeName **required** [ApplicationTypeName](#applicationtypename)
  * TypeVersion **required** [ApplicationTypeVersion](#applicationtypeversion)

### ApplicationEvent
* ApplicationEvent `object`: Represents the base for all Application Events.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationEventList
* ApplicationEventList `array`: A list of ApplicationEvent objects.
  * items [ApplicationEvent](#applicationevent)

### ApplicationHealth
* ApplicationHealth `object`: Represents the health of the application. Contains the application aggregated health state and the service and deployed application health states.
  * DeployedApplicationHealthStates `array`: Deployed application health states as found in the health store.
    * items [DeployedApplicationHealthState](#deployedapplicationhealthstate)
  * Name [ApplicationName](#applicationname)
  * ServiceHealthStates `array`: Service health states as found in the health store.
    * items [ServiceHealthState](#servicehealthstate)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ApplicationHealthEvaluation
* ApplicationHealthEvaluation `object`: Represents health evaluation for an application, containing information about the data and the algorithm used by the health store to evaluate health.
  * ApplicationName [ApplicationName](#applicationname)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

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
  * Key **required** [ApplicationName](#applicationname)
  * Value **required** [ApplicationHealthPolicy](#applicationhealthpolicy)

### ApplicationHealthReportExpiredEvent
* ApplicationHealthReportExpiredEvent `object`: Application Health Report Expired event.
  * ApplicationInstanceId **required** `integer`: Id of Application instance.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationHealthState
* ApplicationHealthState `object`: Represents the health state of an application, which contains the application identifier and the aggregated health state.
  * Name [ApplicationName](#applicationname)
  * AggregatedHealthState [HealthState](#healthstate)

### ApplicationHealthStateChunk
* ApplicationHealthStateChunk `object`: Represents the health state chunk of a application.
  * ApplicationName [ApplicationName](#applicationname)
  * ApplicationTypeName [ApplicationTypeName](#applicationtypename)
  * DeployedApplicationHealthStateChunks [DeployedApplicationHealthStateChunkList](#deployedapplicationhealthstatechunklist)
  * ServiceHealthStateChunks [ServiceHealthStateChunkList](#servicehealthstatechunklist)
  * HealthState [HealthState](#healthstate)

### ApplicationHealthStateChunkList
* ApplicationHealthStateChunkList `object`: The list of application health state chunks in the cluster that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of application health state chunks that respect the input filters in the chunk query.
    * items [ApplicationHealthStateChunk](#applicationhealthstatechunk)
  * TotalCount `integer`: Total number of entity health state objects that match the specified filters from the cluster health chunk query description.

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
* ApplicationId `string`: The identity of the application. This is an encoded representation of the application name. This is used in the REST APIs to identify the application resource.

### ApplicationInfo
* ApplicationInfo `object`: Information about a Service Fabric application.
  * ApplicationDefinitionKind [ApplicationDefinitionKind](#applicationdefinitionkind)
  * HealthState [HealthState](#healthstate)
  * Id [ApplicationId](#applicationid)
  * Name [ApplicationName](#applicationname)
  * Parameters [ApplicationParameterList](#applicationparameterlist)
  * Status [ApplicationStatus](#applicationstatus)
  * TypeName [ApplicationTypeName](#applicationtypename)
  * TypeVersion [ApplicationTypeVersion](#applicationtypeversion)

### ApplicationLoadInfo
* ApplicationLoadInfo `object`: Load Information about a Service Fabric application.
  * ApplicationLoadMetricInformation [ApplicationMetricDescriptionList](#applicationmetricdescriptionlist)
  * Id [ApplicationId](#applicationid)
  * MaximumNodes `integer`: The maximum number of nodes where this application can be instantiated.
  * MinimumNodes `integer`: The minimum number of nodes for this application.
  * NodeCount `integer`: The number of nodes on which this application is instantiated.

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

### ApplicationNewHealthReportEvent
* ApplicationNewHealthReportEvent `object`: Application Health Report Created event.
  * ApplicationInstanceId **required** `integer`: Id of Application instance.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationPackageCleanupPolicy
* ApplicationPackageCleanupPolicy `string` (values: Invalid, Default, Automatic, Manual): The kind of action that needs to be taken for cleaning up the application package after successful provision.

### ApplicationParameter
* ApplicationParameter `object`: Describes an application parameter override to be applied when creating or upgrading an application.
  * Key **required** `string`: The name of the parameter.
  * Value **required** `string`: The value of the parameter.

### ApplicationParameterList
* ApplicationParameterList `array`: List of application parameters with overridden values from their default values specified in the application manifest.
  * items [ApplicationParameter](#applicationparameter)

### ApplicationProcessExitedEvent
* ApplicationProcessExitedEvent `object`: Process Exited event.
  * CodePackageName **required** `string`: Name of Code package.
  * EntryPointType **required** `string`: Type of EntryPoint.
  * ExeName **required** `string`: Name of executable.
  * ExitCode **required** `integer`: Exit code of process.
  * HostId **required** `string`: Host Id.
  * IsExclusive **required** `boolean`: Indicates IsExclusive flag.
  * ProcessId **required** `integer`: Process Id.
  * ServiceName **required** `string`: Name of Service.
  * ServicePackageActivationId **required** `string`: Activation Id of Service package.
  * ServicePackageName **required** `string`: Name of Service package.
  * StartTime **required** `string`: Start time of process.
  * UnexpectedTermination **required** `boolean`: Indicates if termination is unexpected.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationProperties
* ApplicationProperties `object`: Describes properties of a application resource.
  * debugParams `string`: Internal - used by Visual Studio to setup the debugging session on the local development environment.
  * description `string`: User readable description of the application.
  * diagnostics [DiagnosticsDescription](#diagnosticsdescription)
  * healthState [HealthState](#healthstate)
  * serviceNames `array`: Names of the services in the application.
    * items `string`
  * services `array`: Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
    * items [ServiceResourceDescription](#serviceresourcedescription)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the application.
  * unhealthyEvaluation `string`: When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.

### ApplicationResourceDescription
* ApplicationResourceDescription `object`: This type describes a application resource.
  * identity [IdentityDescription](#identitydescription)
  * name **required** [ApplicationResourceName](#applicationresourcename)
  * properties **required** [ApplicationProperties](#applicationproperties)

### ApplicationResourceName
* ApplicationResourceName `string`: Name of the Application resource.

### ApplicationScopedVolume
* ApplicationScopedVolume `object`: Describes a volume whose lifetime is scoped to the application's lifetime.
  * creationParameters **required** [ApplicationScopedVolumeCreationParameters](#applicationscopedvolumecreationparameters)
  * destinationPath **required** `string`: The path within the container at which the volume should be mounted. Only valid path characters are allowed.
  * name **required** `string`: Name of the volume being referenced.
  * readOnly `boolean`: The flag indicating whether the volume is read only. Default is 'false'.

### ApplicationScopedVolumeCreationParameters
* ApplicationScopedVolumeCreationParameters `object`: Describes parameters for creating application-scoped volumes.
  * description `string`: User readable description of the volume.
  * kind **required** [ApplicationScopedVolumeKind](#applicationscopedvolumekind)

### ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk
* ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk `object`: Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks
  * sizeDisk **required** `string` (values: Small, Medium, Large): Volume size
  * description `string`: User readable description of the volume.
  * kind **required** [ApplicationScopedVolumeKind](#applicationscopedvolumekind)

### ApplicationScopedVolumeKind
* ApplicationScopedVolumeKind `string` (values: ServiceFabricVolumeDisk): Specifies the application-scoped volume kind.

### ApplicationStatus
* ApplicationStatus `string` (values: Invalid, Ready, Upgrading, Creating, Deleting, Failed): The status of the application.

### ApplicationTypeApplicationsHealthEvaluation
* ApplicationTypeApplicationsHealthEvaluation `object`: Represents health evaluation for applications of a particular application type. The application type applications evaluation can be returned when cluster health evaluation returns unhealthy aggregated health state, either Error or Warning. It contains health evaluations for each unhealthy application of the included application type that impacted current aggregated health state.
  * ApplicationTypeName [ApplicationTypeName](#applicationtypename)
  * MaxPercentUnhealthyApplications `integer`: Maximum allowed percentage of unhealthy applications for the application type, specified as an entry in ApplicationTypeHealthPolicyMap.
  * TotalCount `integer`: Total number of applications of the application type found in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### ApplicationTypeDefinitionKind
* ApplicationTypeDefinitionKind `string` (values: Invalid, ServiceFabricApplicationPackage, Compose): The mechanism used to define a Service Fabric application type.

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

### ApplicationTypeInfo
* ApplicationTypeInfo `object`: Information about an application type.
  * ApplicationTypeDefinitionKind [ApplicationTypeDefinitionKind](#applicationtypedefinitionkind)
  * DefaultParameterList [ApplicationTypeParameterList](#applicationtypeparameterlist)
  * Name [ApplicationTypeName](#applicationtypename)
  * Status [ApplicationTypeStatus](#applicationtypestatus)
  * StatusDetails `string`: Additional detailed information about the status of the application type.
  * Version [ApplicationTypeVersion](#applicationtypeversion)

### ApplicationTypeManifest
* ApplicationTypeManifest `object`: Contains the manifest describing an application type registered in a Service Fabric cluster.
  * Manifest `string`: The XML manifest as a string.

### ApplicationTypeName
* ApplicationTypeName `string`: The application type name as defined in the application manifest.

### ApplicationTypeParameterList
* ApplicationTypeParameterList `array`: List of application type parameters that can be overridden when creating or updating the application.
  * items [ApplicationParameter](#applicationparameter)

### ApplicationTypeStatus
* ApplicationTypeStatus `string` (values: Invalid, Provisioning, Available, Unprovisioning, Failed): The status of the application type.

### ApplicationTypeVersion
* ApplicationTypeVersion `string`: The version of the application type as defined in the application manifest.

### ApplicationUnhealthyEvaluations
* ApplicationUnhealthyEvaluations `array`: List of health evaluations that resulted in the current aggregated health state.
  * items [HealthEvaluationWrapper](#healthevaluationwrapper)

### ApplicationUpgradeCompletedEvent
* ApplicationUpgradeCompletedEvent `object`: Application Upgrade Completed event.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Application type version.
  * OverallUpgradeElapsedTimeInMs **required** `number`: Overall upgrade time in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationUpgradeDescription
* ApplicationUpgradeDescription `object`: Describes the parameters for an application upgrade. Note that upgrade description replaces the existing application description. This means that if the parameters are not specified, the existing parameters on the applications will be overwritten with the empty parameters list. This would result in the application using the default value of the parameters from the application manifest. If you do not want to change any existing parameter values, please get the application parameters first using the GetApplicationInfo query and then supply those values as Parameters in this ApplicationUpgradeDescription.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ForceRestart [ForceRestart](#forcerestart)
  * MonitoringPolicy [MonitoringPolicyDescription](#monitoringpolicydescription)
  * Name **required** [TargetApplicationName](#targetapplicationname)
  * Parameters [ApplicationParameterList](#applicationparameterlist)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * SortOrder [UpgradeSortOrder](#upgradesortorder)
  * TargetApplicationTypeVersion **required** [TargetApplicationTypeVersion](#targetapplicationtypeversion)
  * UpgradeKind **required** [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### ApplicationUpgradeDomainCompletedEvent
* ApplicationUpgradeDomainCompletedEvent `object`: Application Upgrade Domain Completed event.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Target Application type version.
  * CurrentApplicationTypeVersion **required** `string`: Current Application type version.
  * UpgradeDomainElapsedTimeInMs **required** `number`: Upgrade time of domain in milli-seconds.
  * UpgradeDomains **required** `string`: Upgrade domains.
  * UpgradeState **required** `string`: State of upgrade.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

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

### ApplicationUpgradeRollbackCompletedEvent
* ApplicationUpgradeRollbackCompletedEvent `object`: Application Upgrade Rollback Completed event.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Application type version.
  * FailureReason **required** `string`: Describes reason of failure.
  * OverallUpgradeElapsedTimeInMs **required** `number`: Overall upgrade time in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationUpgradeRollbackStartedEvent
* ApplicationUpgradeRollbackStartedEvent `object`: Application Upgrade Rollback Started event.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Target Application type version.
  * CurrentApplicationTypeVersion **required** `string`: Current Application type version.
  * FailureReason **required** `string`: Describes reason of failure.
  * OverallUpgradeElapsedTimeInMs **required** `number`: Overall upgrade time in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationUpgradeStartedEvent
* ApplicationUpgradeStartedEvent `object`: Application Upgrade Started event.
  * ApplicationTypeName **required** `string`: Application type name.
  * ApplicationTypeVersion **required** `string`: Target Application type version.
  * CurrentApplicationTypeVersion **required** `string`: Current Application type version.
  * FailureAction **required** `string`: Action if failed.
  * RollingUpgradeMode **required** `string`: Mode of upgrade.
  * UpgradeType **required** `string`: Type of upgrade.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ApplicationUpgradeUpdateDescription
* ApplicationUpgradeUpdateDescription `object`: Describes the parameters for updating an ongoing application upgrade.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * Name **required** [ApplicationName](#applicationname)
  * UpdateDescription [RollingUpgradeUpdateDescription](#rollingupgradeupdatedescription)
  * UpgradeKind **required** [UpgradeKind](#upgradekind)

### ApplicationsHealthEvaluation
* ApplicationsHealthEvaluation `object`: Represents health evaluation for applications, containing health evaluations for each unhealthy application that impacted current aggregated health state.
  * MaxPercentUnhealthyApplications `integer`: Maximum allowed percentage of unhealthy applications from the ClusterHealthPolicy.
  * TotalCount `integer`: Total number of applications from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### AutoScalingMechanism
* AutoScalingMechanism `object`: Describes the mechanism for performing auto scaling operation. Derived classes will describe the actual mechanism.
  * kind **required** [AutoScalingMechanismKind](#autoscalingmechanismkind)

### AutoScalingMechanismKind
* AutoScalingMechanismKind `string` (values: AddRemoveReplica): Enumerates the mechanisms for auto scaling.

### AutoScalingMetric
* AutoScalingMetric `object`: Describes the metric that is used for triggering auto scaling operation. Derived classes will describe resources or metrics.
  * kind **required** [AutoScalingMetricKind](#autoscalingmetrickind)

### AutoScalingMetricKind
* AutoScalingMetricKind `string` (values: Resource): Enumerates the metrics that are used for triggering auto scaling.

### AutoScalingPolicy
* AutoScalingPolicy `object`: Describes the auto scaling policy
  * mechanism **required** [AutoScalingMechanism](#autoscalingmechanism)
  * name **required** `string`: The name of the auto scaling policy.
  * trigger **required** [AutoScalingTrigger](#autoscalingtrigger)

### AutoScalingResourceMetric
* AutoScalingResourceMetric `object`: Describes the resource that is used for triggering auto scaling.
  * name **required** [AutoScalingResourceMetricName](#autoscalingresourcemetricname)
  * kind **required** [AutoScalingMetricKind](#autoscalingmetrickind)

### AutoScalingResourceMetricName
* AutoScalingResourceMetricName `string` (values: cpu, memoryInGB): Enumerates the resources that are used for triggering auto scaling.

### AutoScalingTrigger
* AutoScalingTrigger `object`: Describes the trigger for performing auto scaling operation.
  * kind **required** [AutoScalingTriggerKind](#autoscalingtriggerkind)

### AutoScalingTriggerKind
* AutoScalingTriggerKind `string` (values: AverageLoad): Enumerates the triggers for auto scaling.

### AverageLoadScalingTrigger
* AverageLoadScalingTrigger `object`: Describes the average load trigger used for auto scaling.
  * lowerLoadThreshold **required** `number`: Lower load threshold (if average load is below this threshold, service will scale down).
  * metric **required** [AutoScalingMetric](#autoscalingmetric)
  * scaleIntervalInSeconds **required** `integer`: Scale interval that indicates how often will this trigger be checked.
  * upperLoadThreshold **required** `number`: Upper load threshold (if average load is above this threshold, service will scale up).
  * kind **required** [AutoScalingTriggerKind](#autoscalingtriggerkind)

### AveragePartitionLoadScalingTrigger
* AveragePartitionLoadScalingTrigger `object`: Represents a scaling trigger related to an average load of a metric/resource of a partition.
  * LowerLoadThreshold **required** `string`: The lower limit of the load below which a scale in operation should be performed.
  * MetricName **required** `string`: The name of the metric for which usage should be tracked.
  * ScaleIntervalInSeconds **required** `integer`: The period in seconds on which a decision is made whether to scale or not.
  * UpperLoadThreshold **required** `string`: The upper limit of the load beyond which a scale out operation should be performed.
  * Kind **required** [ScalingTriggerKind](#scalingtriggerkind)

### AverageServiceLoadScalingTrigger
* AverageServiceLoadScalingTrigger `object`: Represents a scaling policy related to an average load of a metric/resource of a service.
  * LowerLoadThreshold **required** `string`: The lower limit of the load below which a scale in operation should be performed.
  * MetricName **required** `string`: The name of the metric for which usage should be tracked.
  * ScaleIntervalInSeconds **required** `integer`: The period in seconds on which a decision is made whether to scale or not.
  * UpperLoadThreshold **required** `string`: The upper limit of the load beyond which a scale out operation should be performed.
  * Kind **required** [ScalingTriggerKind](#scalingtriggerkind)

### AzureBlobBackupStorageDescription
* AzureBlobBackupStorageDescription `object`: Describes the parameters for Azure blob store used for storing and enumerating backups.
  * ConnectionString **required** `string`: The connection string to connect to the Azure blob store.
  * ContainerName **required** `string`: The name of the container in the blob store to store and enumerate backups from.
  * FriendlyName `string`: Friendly name for this backup storage.
  * StorageKind **required** [BackupStorageKind](#backupstoragekind)

### AzureInternalMonitoringPipelineSinkDescription
* AzureInternalMonitoringPipelineSinkDescription `object`: Diagnostics settings for Geneva.
  * accountName `string`: Azure Internal monitoring pipeline account.
  * autoKeyConfigUrl `string`: Azure Internal monitoring pipeline autokey associated with the certificate.
  * fluentdConfigUrl `string`: Azure Internal monitoring agent fluentd configuration.
  * maConfigUrl `string`: Azure Internal monitoring agent configuration.
  * namespace `string`: Azure Internal monitoring pipeline account namespace.
  * description `string`: A description of the sink.
  * kind **required** [DiagnosticsSinkKind](#diagnosticssinkkind)
  * name `string`: Name of the sink. This value is referenced by DiagnosticsReferenceDescription

### BackupConfigurationInfo
* BackupConfigurationInfo `object`: Describes the backup configuration information.
  * Kind **required** [BackupEntityKind](#backupentitykind)
  * PolicyInheritedFrom [BackupPolicyScope](#backuppolicyscope)
  * PolicyName `string`: The name of the backup policy which is applicable to this Service Fabric application or service or partition.
  * SuspensionInfo [BackupSuspensionInfo](#backupsuspensioninfo)

### BackupEntity
* BackupEntity `object`: Describes the Service Fabric entity that is configured for backup.
  * EntityKind **required** [BackupEntityKind](#backupentitykind)

### BackupEntityKind
* BackupEntityKind `string` (values: Invalid, Partition, Service, Application): The entity type of a Service Fabric entity such as Application, Service or a Partition where periodic backups can be enabled.

### BackupInfo
* BackupInfo `object`: Represents a backup point which can be used to trigger a restore.
  * ApplicationName `string`: Name of the Service Fabric application this partition backup belongs to.
  * BackupChainId `string`: Unique backup chain ID. All backups part of the same chain has the same backup chain id. A backup chain is comprised of 1 full backup and multiple incremental backups.
  * BackupId `string`: Unique backup ID .
  * BackupLocation `string`: Location of the backup, relative to the backup store.
  * BackupType [BackupType](#backuptype)
  * CreationTimeUtc `string`: The date time when this backup was taken.
  * EpochOfLastBackupRecord [Epoch](#epoch)
  * FailureError [FabricErrorError](#fabricerrorerror)
  * LsnOfLastBackupRecord `string`: LSN of the last record in this backup.
  * PartitionInformation [PartitionInformation](#partitioninformation)
  * ServiceManifestVersion `string`: Manifest Version of the service this partition backup belongs to.
  * ServiceName `string`: Name of the Service Fabric service this partition backup belongs to.

### BackupPartitionDescription
* BackupPartitionDescription `object`: Describes the parameters for triggering partition's backup.
  * BackupStorage [BackupStorageDescription](#backupstoragedescription)

### BackupPolicyDescription
* BackupPolicyDescription `object`: Describes a backup policy for configuring periodic backup.
  * AutoRestoreOnDataLoss **required** `boolean`: Specifies whether to trigger restore automatically using the latest available backup in case the partition experiences a data loss event.
  * MaxIncrementalBackups **required** `integer`: Defines the maximum number of incremental backups to be taken between two full backups. This is just the upper limit. A full backup may be taken before specified number of incremental backups are completed in one of the following conditions
  * Name **required** `string`: The unique name identifying this backup policy.
  * RetentionPolicy [RetentionPolicyDescription](#retentionpolicydescription)
  * Schedule **required** [BackupScheduleDescription](#backupscheduledescription)
  * Storage **required** [BackupStorageDescription](#backupstoragedescription)

### BackupPolicyScope
* BackupPolicyScope `string` (values: Invalid, Partition, Service, Application): Specifies the scope at which the backup policy is applied.

### BackupProgressInfo
* BackupProgressInfo `object`: Describes the progress of a partition's backup.
  * BackupId `string`: Unique ID of the newly created backup.
  * BackupLocation `string`: Location, relative to the backup store, of the newly created backup.
  * BackupState [BackupState](#backupstate)
  * EpochOfLastBackupRecord [Epoch](#epoch)
  * FailureError [FabricErrorError](#fabricerrorerror)
  * LsnOfLastBackupRecord `string`: The LSN of last record included in backup.
  * TimeStampUtc `string`: TimeStamp in UTC when operation succeeded or failed.

### BackupScheduleDescription
* BackupScheduleDescription `object`: Describes the backup schedule parameters.
  * ScheduleKind **required** [BackupScheduleKind](#backupschedulekind)

### BackupScheduleFrequencyType
* BackupScheduleFrequencyType `string` (values: Invalid, Daily, Weekly): Describes the frequency with which to run the time based backup schedule.

### BackupScheduleKind
* BackupScheduleKind `string` (values: Invalid, TimeBased, FrequencyBased): The kind of backup schedule, time based or frequency based.

### BackupState
* BackupState `string` (values: Invalid, Accepted, BackupInProgress, Success, Failure, Timeout): Represents the current state of the partition backup operation.

### BackupStorageDescription
* BackupStorageDescription `object`: Describes the parameters for the backup storage.
  * FriendlyName `string`: Friendly name for this backup storage.
  * StorageKind **required** [BackupStorageKind](#backupstoragekind)

### BackupStorageKind
* BackupStorageKind `string` (values: Invalid, FileShare, AzureBlobStore): The kind of backup storage, where backups are saved.

### BackupSuspensionInfo
* BackupSuspensionInfo `object`: Describes the backup suspension details.
  * IsSuspended `boolean`: Indicates whether periodic backup is suspended at this level or not.
  * SuspensionInheritedFrom [BackupSuspensionScope](#backupsuspensionscope)

### BackupSuspensionScope
* BackupSuspensionScope `string` (values: Invalid, Partition, Service, Application): Specifies the scope at which the backup suspension was applied.

### BackupType
* BackupType `string` (values: Invalid, Full, Incremental): Describes the type of backup, whether its full or incremental.

### BasicRetentionPolicyDescription
* BasicRetentionPolicyDescription `object`: Describes basic retention policy.
  * MinimumNumberOfBackups `integer`: It is the minimum number of backups to be retained at any point of time. If specified with a non zero value, backups will not be deleted even if the backups have gone past retention duration and have number of backups less than or equal to it.
  * RetentionDuration **required** `string`: It is the minimum duration for which a backup created, will remain stored in the storage and might get deleted after that span of time. It should be specified in ISO8601 format.
  * RetentionPolicyType **required** [RetentionPolicyType](#retentionpolicytype)

### BinaryPropertyValue
* BinaryPropertyValue `object`: Describes a Service Fabric property value of type Binary.
  * Data **required** [ByteArray](#bytearray)
  * Kind **required** [PropertyValueKind](#propertyvaluekind)

### ByteArray
* ByteArray `array`: Array of bytes to be sent as an integer array. Each element of array is a number between 0 and 255.
  * items `integer`

### Chaos
* Chaos `object`: Contains a description of Chaos.
  * ChaosParameters [ChaosParameters](#chaosparameters)
  * ScheduleStatus [ChaosScheduleStatus](#chaosschedulestatus)
  * Status [ChaosStatus](#chaosstatus)

### ChaosCodePackageRestartScheduledEvent
* ChaosCodePackageRestartScheduledEvent `object`: Chaos Restart Code Package Fault Scheduled event.
  * CodePackageName **required** `string`: Code package name.
  * FaultGroupId **required** `string`: Id of fault group.
  * FaultId **required** `string`: Id of fault.
  * NodeName **required** [NodeName](#nodename)
  * ServiceManifestName **required** `string`: Service manifest name.
  * ServicePackageActivationId **required** `string`: Id of Service package activation.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosContext
* ChaosContext `object`: Describes a map, which is a collection of (string, string) type key-value pairs. The map can be used to record information about
  * Map [ChaosContextMap](#chaoscontextmap)

### ChaosContextMap


### ChaosEvent
* ChaosEvent `object`: Represents an event generated during a Chaos run.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.

### ChaosEventHistory
* ChaosEventHistory `array`: An list of Chaos events that were generated during the time range passed into the GetChaosReport API call.
  * items [ChaosEventWrapper](#chaoseventwrapper)

### ChaosEventKind
* ChaosEventKind `string` (values: Invalid, Started, ExecutingFaults, Waiting, ValidationFailed, TestError, Stopped): The kind of Chaos event.

### ChaosEventWrapper
* ChaosEventWrapper `object`: Wrapper object for Chaos event.
  * ChaosEvent [ChaosEvent](#chaosevent)

### ChaosEventsSegment
* ChaosEventsSegment `object`: Contains the list of Chaos events and the continuation token to get the next segment.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * History [ChaosEventHistory](#chaoseventhistory)

### ChaosNodeRestartScheduledEvent
* ChaosNodeRestartScheduledEvent `object`: Chaos Restart Node Fault Scheduled event.
  * FaultGroupId **required** `string`: Id of fault group.
  * FaultId **required** `string`: Id of fault.
  * NodeInstanceId **required** `integer`: Id of Node instance.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosParameters
* ChaosParameters `object`: Defines all the parameters to configure a Chaos run.
  * ChaosTargetFilter [ChaosTargetFilter](#chaostargetfilter)
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * Context [ChaosContext](#chaoscontext)
  * EnableMoveReplicaFaults `boolean`: Enables or disables the move primary and move secondary faults.
  * MaxClusterStabilizationTimeoutInSeconds `integer`: The maximum amount of time to wait for all cluster entities to become stable and healthy. Chaos executes in iterations and at the start of each iteration it validates the health of cluster entities.
  * MaxConcurrentFaults `integer`: MaxConcurrentFaults is the maximum number of concurrent faults induced per iteration.
  * TimeToRunInSeconds `string`: Total time (in seconds) for which Chaos will run before automatically stopping. The maximum allowed value is 4,294,967,295 (System.UInt32.MaxValue).
  * WaitTimeBetweenFaultsInSeconds `integer`: Wait time (in seconds) between consecutive faults within a single iteration.
  * WaitTimeBetweenIterationsInSeconds `integer`: Time-separation (in seconds) between two consecutive iterations of Chaos.

### ChaosParametersDictionaryItem
* ChaosParametersDictionaryItem `object`: Defines an item in ChaosParametersDictionary of the Chaos Schedule.
  * Key **required** `string`: The key identifying the Chaos Parameter in the dictionary. This key is referenced by Chaos Schedule Jobs.
  * Value **required** [ChaosParameters](#chaosparameters)

### ChaosPartitionPrimaryMoveScheduledEvent
* ChaosPartitionPrimaryMoveScheduledEvent `object`: Chaos Move Primary Fault Scheduled event.
  * FaultGroupId **required** `string`: Id of fault group.
  * FaultId **required** `string`: Id of fault.
  * ForcedMove **required** `boolean`: Indicates a forced move.
  * NodeTo **required** [NodeName](#nodename)
  * ServiceName **required** `string`: Service name.
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosPartitionSecondaryMoveScheduledEvent
* ChaosPartitionSecondaryMoveScheduledEvent `object`: Chaos Move Secondary Fault Scheduled event.
  * DestinationNode **required** [NodeName](#nodename)
  * FaultGroupId **required** `string`: Id of fault group.
  * FaultId **required** `string`: Id of fault.
  * ForcedMove **required** `boolean`: Indicates a forced move.
  * ServiceName **required** `string`: Service name.
  * SourceNode **required** [NodeName](#nodename)
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosReplicaRemovalScheduledEvent
* ChaosReplicaRemovalScheduledEvent `object`: Chaos Remove Replica Fault Scheduled event.
  * FaultGroupId **required** `string`: Id of fault group.
  * FaultId **required** `string`: Id of fault.
  * ServiceUri **required** `string`: Service name.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosReplicaRestartScheduledEvent
* ChaosReplicaRestartScheduledEvent `object`: Chaos Restart Replica Fault Scheduled event.
  * FaultGroupId **required** `string`: Id of fault group.
  * FaultId **required** `string`: Id of fault.
  * ServiceUri **required** `string`: Service name.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosSchedule
* ChaosSchedule `object`: Defines the schedule used by Chaos.
  * ChaosParametersDictionary `array`: A mapping of string names to Chaos Parameters to be referenced by Chaos Schedule Jobs.
    * items [ChaosParametersDictionaryItem](#chaosparametersdictionaryitem)
  * ExpiryDate `string`: The date and time Chaos will continue to use this schedule until.
  * Jobs `array`: A list of all Chaos Schedule Jobs that will be automated by the schedule.
    * items [ChaosScheduleJob](#chaosschedulejob)
  * StartDate `string`: The date and time Chaos will start using this schedule.

### ChaosScheduleDescription
* ChaosScheduleDescription `object`: Defines the Chaos Schedule used by Chaos and the version of the Chaos Schedule. The version value wraps back to 0 after surpassing 2,147,483,647.
  * Schedule [ChaosSchedule](#chaosschedule)
  * Version `integer`: The version number of the Schedule.

### ChaosScheduleJob
* ChaosScheduleJob `object`: Defines a repetition rule and parameters of Chaos to be used with the Chaos Schedule.
  * ChaosParameters `string`: A reference to which Chaos Parameters of the Chaos Schedule to use.
  * Days [ChaosScheduleJobActiveDaysOfWeek](#chaosschedulejobactivedaysofweek)
  * Times `array`: A list of Time Ranges that specify when during active days that this job will run. The times are interpreted as UTC.
    * items [TimeRange](#timerange)

### ChaosScheduleJobActiveDaysOfWeek
* ChaosScheduleJobActiveDaysOfWeek `object`: Defines the days of the week that a Chaos Schedule Job will run for.
  * Friday `boolean`: Indicates if the Chaos Schedule Job will run on Friday
  * Monday `boolean`: Indicates if the Chaos Schedule Job will run on Monday
  * Saturday `boolean`: Indicates if the Chaos Schedule Job will run on Saturday
  * Sunday `boolean`: Indicates if the Chaos Schedule Job will run on Sunday
  * Thursday `boolean`: Indicates if the Chaos Schedule Job will run on Thursday
  * Tuesday `boolean`: Indicates if the Chaos Schedule Job will run on Tuesday
  * Wednesday `boolean`: Indicates if the Chaos Schedule Job will run on Wednesday

### ChaosScheduleStatus
* ChaosScheduleStatus `string` (values: Invalid, Stopped, Active, Expired, Pending): Current status of the schedule.

### ChaosStartedEvent
* ChaosStartedEvent `object`: Chaos Started event.
  * ChaosContext **required** `string`: Chaos Context.
  * ClusterHealthPolicy **required** `string`: Health policy.
  * IncludedApplicationList **required** `string`: List of included Applications.
  * IncludedNodeTypeList **required** `string`: List of included Node types.
  * MaxClusterStabilizationTimeoutInSeconds **required** `number`: Maximum timeout for cluster stabilization in seconds.
  * MaxConcurrentFaults **required** `integer`: Maximum number of concurrent faults.
  * MoveReplicaFaultEnabled **required** `boolean`: Indicates MoveReplica fault is enabled.
  * TimeToRunInSeconds **required** `number`: Time to run in seconds.
  * WaitTimeBetweenFaultsInSeconds **required** `number`: Wait time between faults in seconds.
  * WaitTimeBetweenIterationsInSeconds **required** `number`: Wait time between iterations in seconds.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosStatus
* ChaosStatus `string` (values: Invalid, Running, Stopped): Current status of the Chaos run.

### ChaosStoppedEvent
* ChaosStoppedEvent `object`: Chaos Stopped event.
  * Reason **required** `string`: Describes reason.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ChaosTargetFilter
* ChaosTargetFilter `object`: Defines all filters for targeted Chaos faults, for example, faulting only certain node types or faulting only certain applications.
  * ApplicationInclusionList `array`: A list of application URIs to include in Chaos faults.
    * items [ApplicationName](#applicationname)
  * NodeTypeInclusionList `array`: A list of node types to include in Chaos faults.
    * items [NodeType](#nodetype)

### CheckExistsPropertyBatchOperation
* CheckExistsPropertyBatchOperation `object`: Represents a PropertyBatchOperation that compares the Boolean existence of a property with the Exists argument.
  * Exists **required** `boolean`: Whether or not the property should exist for the operation to pass.
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### CheckSequencePropertyBatchOperation
* CheckSequencePropertyBatchOperation `object`: Compares the Sequence Number of a property with the SequenceNumber argument.
  * SequenceNumber **required** `string`: The expected sequence number.
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### CheckValuePropertyBatchOperation
* CheckValuePropertyBatchOperation `object`: Represents a PropertyBatchOperation that compares the value of the property with the expected value.
  * Value **required** [PropertyValue](#propertyvalue)
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### ClusterConfiguration
* ClusterConfiguration `object`: Information about the standalone cluster configuration.
  * ClusterConfiguration `string`: The contents of the cluster configuration file.

### ClusterConfigurationUpgradeDescription
* ClusterConfigurationUpgradeDescription `object`: Describes the parameters for a standalone cluster configuration upgrade.
  * ApplicationHealthPolicies [ApplicationHealthPolicies](#applicationhealthpolicies)
  * ClusterConfig **required** `string`: The cluster configuration as a JSON string. For example, [this file](https://github.com/Azure-Samples/service-fabric-dotnet-standalone-cluster-configuration/blob/master/Samples/ClusterConfig.Unsecure.DevCluster.json) contains JSON describing the [nodes and other properties of the cluster](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-manifest).
  * HealthCheckRetryTimeout `string`: The length of time between attempts to perform health checks if the application or cluster is not healthy.
  * HealthCheckStableDurationInSeconds `string`: The length of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain.
  * HealthCheckWaitDurationInSeconds `string`: The length of time to wait after completing an upgrade domain before starting the health checks process.
  * MaxPercentDeltaUnhealthyNodes `integer`: The maximum allowed percentage of delta health degradation during the upgrade. Allowed values are integer values from zero to 100.
  * MaxPercentUnhealthyApplications `integer`: The maximum allowed percentage of unhealthy applications during the upgrade. Allowed values are integer values from zero to 100.
  * MaxPercentUnhealthyNodes `integer`: The maximum allowed percentage of unhealthy nodes during the upgrade. Allowed values are integer values from zero to 100.
  * MaxPercentUpgradeDomainDeltaUnhealthyNodes `integer`: The maximum allowed percentage of upgrade domain delta health degradation during the upgrade. Allowed values are integer values from zero to 100.
  * UpgradeDomainTimeoutInSeconds `string`: The timeout for the upgrade domain.
  * UpgradeTimeoutInSeconds `string`: The upgrade timeout.

### ClusterConfigurationUpgradeStatusInfo
* ClusterConfigurationUpgradeStatusInfo `object`: Information about a standalone cluster configuration upgrade status.
  * ConfigVersion `string`: The cluster configuration version.
  * Details `string`: The cluster upgrade status details.
  * ProgressStatus `integer`: The cluster manifest version.
  * UpgradeState [UpgradeState](#upgradestate)

### ClusterEvent
* ClusterEvent: Represents the base for all Cluster Events.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ClusterEventList
* ClusterEventList `array`: A list of ClusterEvent objects.
  * items [ClusterEvent](#clusterevent)

### ClusterFabricCodeVersionString
* ClusterFabricCodeVersionString `string`: The ServiceFabric code version of the cluster.

### ClusterFabricConfigVersionString
* ClusterFabricConfigVersionString `string`: The cluster configuration version (specified in the cluster manifest).

### ClusterHealth
* ClusterHealth `object`: Represents the health of the cluster.
  * ApplicationHealthStates `array`: Cluster application health states as found in the health store.
    * items [ApplicationHealthState](#applicationhealthstate)
  * NodeHealthStates `array`: Cluster node health states as found in the health store.
    * items [NodeHealthState](#nodehealthstate)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

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

### ClusterHealthReportExpiredEvent
* ClusterHealthReportExpiredEvent `object`: Cluster Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ClusterLoadInfo
* ClusterLoadInfo `object`: Information about load in a Service Fabric cluster. It holds a summary of all metrics and their load in a cluster.
  * LastBalancingEndTimeUtc `string`: The end time of last resource balancing run.
  * LastBalancingStartTimeUtc `string`: The starting time of last resource balancing run.
  * LoadMetricInformation `array`: List that contains metrics and their load information in this cluster.
    * items [LoadMetricInformation](#loadmetricinformation)

### ClusterManifest
* ClusterManifest `object`: Information about the cluster manifest.
  * Manifest `string`: The contents of the cluster manifest file.

### ClusterNewHealthReportEvent
* ClusterNewHealthReportEvent `object`: Cluster Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ClusterUpgradeCompletedEvent
* ClusterUpgradeCompletedEvent `object`: Cluster Upgrade Completed event.
  * OverallUpgradeElapsedTimeInMs **required** `number`: Overall duration of upgrade in milli-seconds.
  * TargetClusterVersion **required** `string`: Target Cluster version.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

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
  * SortOrder [UpgradeSortOrder](#upgradesortorder)
  * UpgradeKind [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### ClusterUpgradeDomainCompletedEvent
* ClusterUpgradeDomainCompletedEvent `object`: Cluster Upgrade Domain Completed event.
  * TargetClusterVersion **required** `string`: Target Cluster version.
  * UpgradeDomainElapsedTimeInMs **required** `number`: Duration of domain upgrade in milli-seconds.
  * UpgradeDomains **required** `string`: Upgrade domains.
  * UpgradeState **required** `string`: State of upgrade.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

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

### ClusterUpgradeRollbackCompletedEvent
* ClusterUpgradeRollbackCompletedEvent `object`: Cluster Upgrade Rollback Completed event.
  * FailureReason **required** `string`: Describes failure.
  * OverallUpgradeElapsedTimeInMs **required** `number`: Overall duration of upgrade in milli-seconds.
  * TargetClusterVersion **required** `string`: Target Cluster version.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ClusterUpgradeRollbackStartedEvent
* ClusterUpgradeRollbackStartedEvent `object`: Cluster Upgrade Rollback Started event.
  * FailureReason **required** `string`: Describes failure.
  * OverallUpgradeElapsedTimeInMs **required** `number`: Overall duration of upgrade in milli-seconds.
  * TargetClusterVersion **required** `string`: Target Cluster version.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ClusterUpgradeStartedEvent
* ClusterUpgradeStartedEvent `object`: Cluster Upgrade Started event.
  * CurrentClusterVersion **required** `string`: Current Cluster version.
  * FailureAction **required** `string`: Action if failed.
  * RollingUpgradeMode **required** `string`: Mode of upgrade.
  * TargetClusterVersion **required** `string`: Target Cluster version.
  * UpgradeType **required** `string`: Type of upgrade.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ClusterVersion
* ClusterVersion `object`: The cluster version.
  * Version `string`: The Service Fabric cluster runtime version.

### CodePackageEntryPoint
* CodePackageEntryPoint `object`: Information about setup or main entry point of a code package deployed on a Service Fabric node.
  * CodePackageEntryPointStatistics [CodePackageEntryPointStatistics](#codepackageentrypointstatistics)
  * EntryPointLocation `string`: The location of entry point executable on the node.
  * InstanceId [CodePackageInstanceId](#codepackageinstanceid)
  * NextActivationTime `string`: The time (in UTC) when the entry point executable will be run next.
  * ProcessId `string`: The process ID of the entry point.
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

### CodePackageInstanceId
* CodePackageInstanceId `string`: The instance ID for current running entry point. For a code package setup entry point (if specified) runs first and after it finishes main entry point is started. Each time entry point executable is run, its instance id will change.

### CodePackageName
* CodePackageName `string`: The name of the code package defined in the service manifest.

### ComposeDeploymentStatus
* ComposeDeploymentStatus `string` (values: Invalid, Provisioning, Creating, Ready, Unprovisioning, Deleting, Failed, Upgrading): The status of the compose deployment.

### ComposeDeploymentStatusInfo
* ComposeDeploymentStatusInfo `object`: Information about a Service Fabric compose deployment.
  * ApplicationName [ApplicationName](#applicationname)
  * Name [DeploymentName](#deploymentname)
  * Status [ComposeDeploymentStatus](#composedeploymentstatus)
  * StatusDetails `string`: The status details of compose deployment including failure message.

### ComposeDeploymentUpgradeDescription
* ComposeDeploymentUpgradeDescription `object`: Describes the parameters for a compose deployment upgrade.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ComposeFileContent **required** `string`: The content of the compose file that describes the deployment to create.
  * DeploymentName **required** [DeploymentName](#deploymentname)
  * ForceRestart [ForceRestart](#forcerestart)
  * MonitoringPolicy [MonitoringPolicyDescription](#monitoringpolicydescription)
  * RegistryCredential [RegistryCredential](#registrycredential)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * UpgradeKind **required** [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### ComposeDeploymentUpgradeProgressInfo
* ComposeDeploymentUpgradeProgressInfo `object`: Describes the parameters for a compose deployment upgrade.
  * ApplicationHealthPolicy [ApplicationHealthPolicy](#applicationhealthpolicy)
  * ApplicationName [TargetApplicationName](#targetapplicationname)
  * ApplicationUnhealthyEvaluations [ApplicationUnhealthyEvaluations](#applicationunhealthyevaluations)
  * ApplicationUpgradeStatusDetails `string`: Additional details of application upgrade including failure message.
  * CurrentUpgradeDomainDuration [CurrentUpgradeDomainDuration](#currentupgradedomainduration)
  * CurrentUpgradeDomainProgress [CurrentUpgradeDomainProgressInfo](#currentupgradedomainprogressinfo)
  * DeploymentName [TargetDeploymentName](#targetdeploymentname)
  * FailureReason [FailureReason](#failurereason)
  * FailureTimestampUtc `string`: The estimated UTC datetime when the upgrade failed and FailureAction was executed.
  * ForceRestart [ForceRestart](#forcerestart)
  * MonitoringPolicy [MonitoringPolicyDescription](#monitoringpolicydescription)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * StartTimestampUtc `string`: The estimated UTC datetime when the upgrade started.
  * TargetApplicationTypeVersion [TargetApplicationTypeVersion](#targetapplicationtypeversion)
  * UpgradeDomainProgressAtFailure [FailureUpgradeDomainProgressInfo](#failureupgradedomainprogressinfo)
  * UpgradeDuration [UpgradeDuration](#upgradeduration)
  * UpgradeKind [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)
  * UpgradeState [ComposeDeploymentUpgradeState](#composedeploymentupgradestate)
  * UpgradeStatusDetails `string`: Additional detailed information about the status of the pending upgrade.

### ComposeDeploymentUpgradeState
* ComposeDeploymentUpgradeState `string` (values: Invalid, ProvisioningTarget, RollingForwardInProgress, RollingForwardPending, UnprovisioningCurrent, RollingForwardCompleted, RollingBackInProgress, UnprovisioningTarget, RollingBackCompleted, Failed): The state of the compose deployment upgrade.

### ContainerApiRequestBody
* ContainerApiRequestBody `object`: parameters for making container API call.
  * Body `string`: HTTP request body of container REST API
  * Content-Type `string`: Content type of container REST API request, defaults to "application/json"
  * HttpVerb `string`: HTTP verb of container REST API, defaults to "GET"
  * UriPath **required** `string`: URI path of container REST API

### ContainerApiResponse
* ContainerApiResponse `object`: Response body that wraps container API result.
  * ContainerApiResult **required** [ContainerApiResult](#containerapiresult)

### ContainerApiResult
* ContainerApiResult `object`: Container API result.
  * Body `string`: container API result body
  * Content-Encoding `string`: HTTP content encoding
  * Content-Type `string`: HTTP content type
  * Status **required** `integer`: HTTP status code returned by the target container API

### ContainerCodePackageProperties
* ContainerCodePackageProperties `object`: Describes a container and its runtime properties.
  * commands `array`: Command array to execute within the container in exec form.
    * items `string`
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * endpoints `array`: The endpoints exposed by this container.
    * items [EndpointProperties](#endpointproperties)
  * entrypoint `string`: Override for the default entry point in the container.
  * environmentVariables `array`: The environment variables to set in this container
    * items [EnvironmentVariable](#environmentvariable)
  * image **required** `string`: The Container image to use.
  * imageRegistryCredential [ImageRegistryCredential](#imageregistrycredential)
  * instanceView [ContainerInstanceView](#containerinstanceview)
  * labels `array`: The labels to set in this container.
    * items [ContainerLabel](#containerlabel)
  * name **required** `string`: The name of the code package.
  * reliableCollectionsRefs `array`: A list of ReliableCollection resources used by this particular code package. Please refer to ReliableCollectionsRef for more details.
    * items [ReliableCollectionsRef](#reliablecollectionsref)
  * resources **required** [ResourceRequirements](#resourcerequirements)
  * settings `array`: The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
    * items [Setting](#setting)
  * volumeRefs `array`: Volumes to be attached to the container. The lifetime of these volumes is independent of the application's lifetime.
    * items [VolumeReference](#volumereference)
  * volumes `array`: Volumes to be attached to the container. The lifetime of these volumes is scoped to the application's lifetime.
    * items [ApplicationScopedVolume](#applicationscopedvolume)

### ContainerEvent
* ContainerEvent `object`: A container event.
  * count `integer`: The count of the event.
  * firstTimestamp `string`: Date/time of the first event.
  * lastTimestamp `string`: Date/time of the last event.
  * message `string`: The event message
  * name `string`: The name of the container event.
  * type `string`: The event type.

### ContainerInstanceEvent
* ContainerInstanceEvent: Represents the base for all Container Events.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ContainerInstanceEventList
* ContainerInstanceEventList `array`: A list of ContainerInstanceEvent objects.
  * items [ContainerInstanceEvent](#containerinstanceevent)

### ContainerInstanceView
* ContainerInstanceView `object`: Runtime information of a container instance.
  * currentState [ContainerState](#containerstate)
  * events `array`: The events of this container instance.
    * items [ContainerEvent](#containerevent)
  * previousState [ContainerState](#containerstate)
  * restartCount `integer`: The number of times the container has been restarted.

### ContainerLabel
* ContainerLabel `object`: Describes a container label.
  * name **required** `string`: The name of the container label.
  * value **required** `string`: The value of the container label.

### ContainerLogs
* ContainerLogs `object`: Container logs.
  * Content `string`: Container logs.

### ContainerState
* ContainerState `object`: The container state.
  * detailStatus `string`: Human-readable status of this state.
  * exitCode `string`: The container exit code.
  * finishTime `string`: Date/time when the container state finished.
  * startTime `string`: Date/time when the container state started.
  * state `string`: The state of this container

### ContinuationToken
* ContinuationToken `string`: The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token is not included in the response.

### CorrelationSchemeList
* CorrelationSchemeList `array`: A list that describes the correlation of the service with other services.
  * items [ServiceCorrelationDescription](#servicecorrelationdescription)

### CreateComposeDeploymentDescription
* CreateComposeDeploymentDescription `object`: Defines description for creating a Service Fabric compose deployment.
  * ComposeFileContent **required** `string`: The content of the compose file that describes the deployment to create.
  * DeploymentName **required** [DeploymentName](#deploymentname)
  * RegistryCredential [RegistryCredential](#registrycredential)

### CurrentUpgradeDomainDuration
* CurrentUpgradeDomainDuration `string`: The estimated amount of time spent processing current Upgrade Domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### CurrentUpgradeDomainProgressInfo
* CurrentUpgradeDomainProgressInfo `object`: Information about the current in-progress upgrade domain.
  * DomainName [UpgradeDomainName](#upgradedomainname)
  * NodeUpgradeProgressList [NodeUpgradeProgressInfoList](#nodeupgradeprogressinfolist)

### DayOfWeek
* DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): Describes the days in a week.

### DayOfWeekList
* DayOfWeekList `array`: List of days of a week when to trigger the periodic backup. This is valid only when the backup schedule frequency type is weekly.
  * items [DayOfWeek](#dayofweek)

### DeactivationIntentDescription
* DeactivationIntentDescription `object`: Describes the intent or reason for deactivating the node.
  * DeactivationIntent `string` (values: Pause, Restart, RemoveData): Describes the intent or reason for deactivating the node. The possible values are following.

### DeletePropertyBatchOperation
* DeletePropertyBatchOperation: Represents a PropertyBatchOperation that deletes a specified property if it exists.
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### DeltaHealthEvaluationBool
* DeltaHealthEvaluationBool `boolean`: When true, enables delta health evaluation rather than absolute health evaluation after completion of each upgrade domain.

### DeltaNodesCheckHealthEvaluation
* DeltaNodesCheckHealthEvaluation `object`: Represents health evaluation for delta nodes, containing health evaluations for each unhealthy node that impacted current aggregated health state.
  * BaselineErrorCount `integer`: Number of nodes with aggregated heath state Error in the health store at the beginning of the cluster upgrade.
  * BaselineTotalCount `integer`: Total number of nodes in the health store at the beginning of the cluster upgrade.
  * MaxPercentDeltaUnhealthyNodes `integer`: Maximum allowed percentage of delta unhealthy nodes from the ClusterUpgradeHealthPolicy.
  * TotalCount `integer`: Total number of nodes in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### DeployServicePackageToNodeDescription
* DeployServicePackageToNodeDescription `object`: Defines description for downloading packages associated with a service manifest to image cache on a Service Fabric node.
  * ApplicationTypeName **required** [ApplicationTypeName](#applicationtypename)
  * ApplicationTypeVersion **required** [ApplicationTypeVersion](#applicationtypeversion)
  * NodeName **required** [NodeName](#nodename)
  * PackageSharingPolicy [PackageSharingPolicyInfoList](#packagesharingpolicyinfolist)
  * ServiceManifestName **required** [ServiceManifestName](#servicemanifestname)

### DeployedApplicationHealth
* DeployedApplicationHealth `object`: Information about the health of an application deployed on a Service Fabric node.
  * DeployedServicePackageHealthStates [DeployedServicePackageHealthStateList](#deployedservicepackagehealthstatelist)
  * Name [ApplicationName](#applicationname)
  * NodeName [NodeName](#nodename)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployedApplicationHealthEvaluation
* DeployedApplicationHealthEvaluation `object`: Represents health evaluation for a deployed application, containing information about the data and the algorithm used by the health store to evaluate health.
  * ApplicationName [ApplicationName](#applicationname)
  * NodeName [NodeName](#nodename)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### DeployedApplicationHealthReportExpiredEvent
* DeployedApplicationHealthReportExpiredEvent `object`: Deployed Application Health Report Expired event.
  * ApplicationInstanceId **required** `integer`: Id of Application instance.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * NodeName **required** [NodeName](#nodename)
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### DeployedApplicationHealthState
* DeployedApplicationHealthState `object`: Represents the health state of a deployed application, which contains the entity identifier and the aggregated health state.
  * ApplicationName [ApplicationName](#applicationname)
  * NodeName [NodeName](#nodename)
  * AggregatedHealthState [HealthState](#healthstate)

### DeployedApplicationHealthStateChunk
* DeployedApplicationHealthStateChunk `object`: Represents the health state chunk of a deployed application, which contains the node where the application is deployed, the aggregated health state and any deployed service packages that respect the chunk query description filters.
  * DeployedServicePackageHealthStateChunks [DeployedServicePackageHealthStateChunkList](#deployedservicepackagehealthstatechunklist)
  * NodeName `string`: The name of node where the application is deployed.
  * HealthState [HealthState](#healthstate)

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
  * HealthState [HealthState](#healthstate)
  * Id [ApplicationId](#applicationid)
  * LogDirectory `string`: The log directory of the application on the node. The log directory can be used to store application logs.
  * Name [ApplicationName](#applicationname)
  * Status [DeployedApplicationStatus](#deployedapplicationstatus)
  * TempDirectory `string`: The temp directory of the application on the node. The code packages belonging to the application are forked with this directory set as their temporary directory.
  * TypeName [ApplicationTypeName](#applicationtypename)
  * WorkDirectory `string`: The work directory of the application on the node. The work directory can be used to store application data.

### DeployedApplicationInfoList
* DeployedApplicationInfoList `array`: List of deployed application information.
  * items [DeployedApplicationInfo](#deployedapplicationinfo)

### DeployedApplicationNewHealthReportEvent
* DeployedApplicationNewHealthReportEvent `object`: Deployed Application Health Report Created event.
  * ApplicationInstanceId **required** `integer`: Id of Application instance.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * NodeName **required** [NodeName](#nodename)
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### DeployedApplicationStatus
* DeployedApplicationStatus `string` (values: Invalid, Downloading, Activating, Active, Upgrading, Deactivating): The status of the application deployed on the node. Following are the possible values.

### DeployedApplicationsHealthEvaluation
* DeployedApplicationsHealthEvaluation `object`: Represents health evaluation for deployed applications, containing health evaluations for each unhealthy deployed application that impacted current aggregated health state.
  * MaxPercentUnhealthyDeployedApplications `integer`: Maximum allowed percentage of unhealthy deployed applications from the ApplicationHealthPolicy.
  * TotalCount `integer`: Total number of deployed applications of the application in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### DeployedCodePackageInfo
* DeployedCodePackageInfo `object`: Information about code package deployed on a Service Fabric node.
  * HostIsolationMode [HostIsolationMode](#hostisolationmode)
  * HostType [HostType](#hosttype)
  * MainEntryPoint [CodePackageEntryPoint](#codepackageentrypoint)
  * Name [CodePackageName](#codepackagename)
  * RunFrequencyInterval `string`: The interval at which code package is run. This is used for periodic code package.
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * SetupEntryPoint [CodePackageEntryPoint](#codepackageentrypoint)
  * Status [DeploymentStatus](#deploymentstatus)
  * Version `string`: The version of the code package specified in service manifest.

### DeployedCodePackageInfoList
* DeployedCodePackageInfoList `array`: List of deployed code package information.
  * items [DeployedCodePackageInfo](#deployedcodepackageinfo)

### DeployedServicePackageHealth
* DeployedServicePackageHealth `object`: Information about the health of a service package for a specific application deployed on a Service Fabric node.
  * ApplicationName [ApplicationName](#applicationname)
  * NodeName [NodeName](#nodename)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### DeployedServicePackageHealthEvaluation
* DeployedServicePackageHealthEvaluation `object`: Represents health evaluation for a deployed service package, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * ApplicationName [ApplicationName](#applicationname)
  * NodeName [NodeName](#nodename)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### DeployedServicePackageHealthReportExpiredEvent
* DeployedServicePackageHealthReportExpiredEvent `object`: Deployed Service Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * NodeName **required** [NodeName](#nodename)
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * ServiceManifest **required** `string`: Service manifest name.
  * ServicePackageActivationId **required** `string`: Id of Service package activation.
  * ServicePackageInstanceId **required** `integer`: Id of Service package instance.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### DeployedServicePackageHealthState
* DeployedServicePackageHealthState `object`: Represents the health state of a deployed service package, containing the entity identifier and the aggregated health state.
  * ApplicationName [ApplicationName](#applicationname)
  * NodeName [NodeName](#nodename)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * AggregatedHealthState [HealthState](#healthstate)

### DeployedServicePackageHealthStateChunk
* DeployedServicePackageHealthStateChunk `object`: Represents the health state chunk of a deployed service package, which contains the service manifest name and the service package aggregated health state.
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * HealthState [HealthState](#healthstate)

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
  * Name [ServiceManifestName](#servicemanifestname)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * Status [DeploymentStatus](#deploymentstatus)
  * Version `string`: The version of the service package specified in service manifest.

### DeployedServicePackageInfoList
* DeployedServicePackageInfoList `array`: List of deployed service package information.
  * items [DeployedServicePackageInfo](#deployedservicepackageinfo)

### DeployedServicePackageNewHealthReportEvent
* DeployedServicePackageNewHealthReportEvent `object`: Deployed Service Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * NodeName **required** [NodeName](#nodename)
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * ServiceManifestName **required** `string`: Service manifest name.
  * ServicePackageActivationId **required** `string`: Id of Service package activation.
  * ServicePackageInstanceId **required** `integer`: Id of Service package instance.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ApplicationId **required** [ApplicationId](#applicationid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### DeployedServicePackagesHealthEvaluation
* DeployedServicePackagesHealthEvaluation `object`: Represents health evaluation for deployed service packages, containing health evaluations for each unhealthy deployed service package that impacted current aggregated health state. Can be returned when evaluating deployed application health and the aggregated health state is either Error or Warning.
  * TotalCount `integer`: Total number of deployed service packages of the deployed application in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### DeployedServiceReplicaDetailInfo
* DeployedServiceReplicaDetailInfo `object`: Information about a Service Fabric service replica deployed on a node.
  * CurrentServiceOperation [ServiceOperationName](#serviceoperationname)
  * CurrentServiceOperationStartTimeUtc `string`: The start time of the current service operation in UTC format.
  * PartitionId [PartitionId](#partitionid)
  * ReportedLoad [LoadMetricReportInfoList](#loadmetricreportinfolist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceName [ServiceName](#servicename)

### DeployedServiceReplicaInfo
* DeployedServiceReplicaInfo `object`: Information about a Service Fabric service replica deployed on a node.
  * Address `string`: The last address returned by the replica in Open or ChangeRole.
  * CodePackageName [CodePackageName](#codepackagename)
  * HostProcessId `string`: Host process ID of the process that is hosting the replica. This will be zero if the replica is down. In hyper-v containers this host process ID will be from different kernel.
  * PartitionId [PartitionId](#partitionid)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServiceName [ServiceName](#servicename)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName [ServiceTypeName](#servicetypename)

### DeployedServiceReplicaInfoList
* DeployedServiceReplicaInfoList `array`: List of deployed service replica information.
  * items [DeployedServiceReplicaInfo](#deployedservicereplicainfo)

### DeployedServiceTypeInfo
* DeployedServiceTypeInfo `object`: Information about service type deployed on a node, information such as the status of the service type registration on a node.
  * CodePackageName [CodePackageName](#codepackagename)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName [ServiceTypeName](#servicetypename)
  * Status [ServiceTypeRegistrationStatus](#servicetyperegistrationstatus)

### DeployedServiceTypeInfoList
* DeployedServiceTypeInfoList `array`: List of information about service type deployed on a node.
  * items [DeployedServiceTypeInfo](#deployedservicetypeinfo)

### DeployedStatefulServiceReplicaDetailInfo
* DeployedStatefulServiceReplicaDetailInfo `object`: Information about a stateful replica running in a code package. Note DeployedServiceReplicaQueryResult will contain duplicate data like ServiceKind, ServiceName, PartitionId and replicaId.
  * CurrentReplicatorOperation [ReplicatorOperationName](#replicatoroperationname)
  * DeployedServiceReplicaQueryResult [DeployedStatefulServiceReplicaInfo](#deployedstatefulservicereplicainfo)
  * ReadStatus [PartitionAccessStatus](#partitionaccessstatus)
  * ReplicaId [ReplicaId](#replicaid)
  * ReplicaStatus [KeyValueStoreReplicaStatus](#keyvaluestorereplicastatus)
  * ReplicatorStatus [ReplicatorStatus](#replicatorstatus)
  * WriteStatus [PartitionAccessStatus](#partitionaccessstatus)
  * CurrentServiceOperation [ServiceOperationName](#serviceoperationname)
  * CurrentServiceOperationStartTimeUtc `string`: The start time of the current service operation in UTC format.
  * PartitionId [PartitionId](#partitionid)
  * ReportedLoad [LoadMetricReportInfoList](#loadmetricreportinfolist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceName [ServiceName](#servicename)

### DeployedStatefulServiceReplicaInfo
* DeployedStatefulServiceReplicaInfo `object`: Information about a stateful service replica deployed on a node.
  * ReconfigurationInformation [ReconfigurationInformation](#reconfigurationinformation)
  * ReplicaId [ReplicaId](#replicaid)
  * ReplicaRole [ReplicaRole](#replicarole)
  * Address `string`: The last address returned by the replica in Open or ChangeRole.
  * CodePackageName [CodePackageName](#codepackagename)
  * HostProcessId `string`: Host process ID of the process that is hosting the replica. This will be zero if the replica is down. In hyper-v containers this host process ID will be from different kernel.
  * PartitionId [PartitionId](#partitionid)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServiceName [ServiceName](#servicename)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName [ServiceTypeName](#servicetypename)

### DeployedStatelessServiceInstanceDetailInfo
* DeployedStatelessServiceInstanceDetailInfo `object`: Information about a stateless instance running in a code package. Note that DeployedServiceReplicaQueryResult will contain duplicate data like ServiceKind, ServiceName, PartitionId and InstanceId.
  * DeployedServiceReplicaQueryResult [DeployedStatelessServiceInstanceInfo](#deployedstatelessserviceinstanceinfo)
  * InstanceId [InstanceId](#instanceid)
  * CurrentServiceOperation [ServiceOperationName](#serviceoperationname)
  * CurrentServiceOperationStartTimeUtc `string`: The start time of the current service operation in UTC format.
  * PartitionId [PartitionId](#partitionid)
  * ReportedLoad [LoadMetricReportInfoList](#loadmetricreportinfolist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceName [ServiceName](#servicename)

### DeployedStatelessServiceInstanceInfo
* DeployedStatelessServiceInstanceInfo `object`: Information about a stateless service instance deployed on a node.
  * InstanceId [InstanceId](#instanceid)
  * Address `string`: The last address returned by the replica in Open or ChangeRole.
  * CodePackageName [CodePackageName](#codepackagename)
  * HostProcessId `string`: Host process ID of the process that is hosting the replica. This will be zero if the replica is down. In hyper-v containers this host process ID will be from different kernel.
  * PartitionId [PartitionId](#partitionid)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServiceName [ServiceName](#servicename)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)
  * ServiceTypeName [ServiceTypeName](#servicetypename)

### DeploymentName
* DeploymentName `string`: The name of the deployment.

### DeploymentStatus
* DeploymentStatus `string` (values: Invalid, Downloading, Activating, Active, Upgrading, Deactivating): Specifies the status of a deployed application or service package on a Service Fabric node.

### DiagnosticsDescription
* DiagnosticsDescription `object`: Describes the diagnostics options available
  * defaultSinkRefs `array`: The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level.
    * items `string`
  * enabled `boolean`: Status of whether or not sinks are enabled.
  * sinks `array`: List of supported sinks that can be referenced.
    * items [DiagnosticsSinkProperties](#diagnosticssinkproperties)

### DiagnosticsRef
* DiagnosticsRef `object`: Reference to sinks in DiagnosticsDescription.
  * enabled `boolean`: Status of whether or not sinks are enabled.
  * sinkRefs `array`: List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription.
    * items `string`

### DiagnosticsSinkKind
* DiagnosticsSinkKind `string` (values: Invalid, AzureInternalMonitoringPipeline): The kind of DiagnosticsSink.

### DiagnosticsSinkProperties
* DiagnosticsSinkProperties `object`: Properties of a DiagnosticsSink.
  * description `string`: A description of the sink.
  * kind **required** [DiagnosticsSinkKind](#diagnosticssinkkind)
  * name `string`: Name of the sink. This value is referenced by DiagnosticsReferenceDescription

### DisableBackupDescription
* DisableBackupDescription `object`: It describes the body parameters while disabling backup of a backup entity(Application/Service/Partition).
  * CleanBackup **required** `boolean`: Boolean flag to delete backups. It can be set to true for deleting all the backups which were created for the backup entity that is getting disabled for backup.

### DoublePropertyValue
* DoublePropertyValue `object`: Describes a Service Fabric property value of type Double.
  * Data **required** `number`: The data of the property value.
  * Kind **required** [PropertyValueKind](#propertyvaluekind)

### EnableBackupDescription
* EnableBackupDescription `object`: Specifies the parameters needed to enable periodic backup.
  * BackupPolicyName **required** `string`: Name of the backup policy to be used for enabling periodic backups.

### EndpointProperties
* EndpointProperties `object`: Describes a container endpoint.
  * name **required** `string`: The name of the endpoint.
  * port `integer`: Port used by the container.

### EndpointRef
* EndpointRef `object`: Describes a reference to a service endpoint.
  * name `string`: Name of the endpoint.

### EnsureAvailabilitySafetyCheck
* EnsureAvailabilitySafetyCheck: Safety check that waits to ensure the availability of the partition. It waits until there are replicas available such that bringing down this replica will not cause availability loss for the partition.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### EnsurePartitionQuorumSafetyCheck
* EnsurePartitionQuorumSafetyCheck: Safety check that ensures that a quorum of replicas are not lost for a partition.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### EntityHealth
* EntityHealth `object`: Health information common to all entities in the cluster. It contains the aggregated health state, health events and unhealthy evaluation.
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
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

### EntityKind
* EntityKind `string` (values: Invalid, Node, Partition, Service, Application, Replica, DeployedApplication, DeployedServicePackage, Cluster): The entity type of a Service Fabric entity such as Cluster, Node, Application, Service, Partition, Replica etc.

### EntityKindHealthStateCount
* EntityKindHealthStateCount `object`: Represents health state count for entities of the specified entity kind.
  * EntityKind [EntityKind](#entitykind)
  * HealthStateCount [HealthStateCount](#healthstatecount)

### EntryPointStatus
* EntryPointStatus `string` (values: Invalid, Pending, Starting, Started, Stopping, Stopped): Specifies the status of the code package entry point deployed on a Service Fabric node.

### EnvironmentVariable
* EnvironmentVariable `object`: Describes an environment variable for the container.
  * name `string`: The name of the environment variable.
  * value `string`: The value of the environment variable.

### Epoch
* Epoch `object`: An Epoch is a configuration number for the partition as a whole. When the configuration of the replica set changes, for example when the Primary replica changes, the operations that are replicated from the new Primary replica are said to be a new Epoch from the ones which were sent by the old Primary replica.
  * ConfigurationVersion `string`: The current configuration number of this Epoch. The configuration number is an increasing value that is updated whenever the configuration of this replica set changes.
  * DataLossVersion `string`: The current data loss number of this Epoch. The data loss number property is an increasing value which is updated whenever data loss is suspected, as when loss of a quorum of replicas in the replica set that includes the Primary replica.

### EventHealthEvaluation
* EventHealthEvaluation `object`: Represents health evaluation of a HealthEvent that was reported on the entity.
  * ConsiderWarningAsError `boolean`: Indicates whether warnings are treated with the same severity as errors. The field is specified in the health policy used to evaluate the entity.
  * UnhealthyEvent [HealthEvent](#healthevent)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### EventList
* EventList `array`: A list of FabricEvent objects.
  * items [FabricEvent](#fabricevent)

### ExecutingFaultsChaosEvent
* ExecutingFaultsChaosEvent `object`: Describes a Chaos event that gets generated when Chaos has decided on the faults for an iteration. This Chaos event contains the details of the faults as a list of strings.
  * Faults `array`: List of string description of the faults that Chaos decided to execute in an iteration.
    * items `string`
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.

### ExternalStoreProvisionApplicationTypeDescription
* ExternalStoreProvisionApplicationTypeDescription `object`: Describes the operation to register or provision an application type using an application package from an external store instead of a package uploaded to the Service Fabric image store.
  * ApplicationPackageDownloadUri **required** `string`: The path to the '.sfpkg' application package from where the application package can be downloaded using HTTP or HTTPS protocols. The application package can be stored in an external store that provides GET operation to download the file. Supported protocols are HTTP and HTTPS, and the path must allow READ access.
  * ApplicationTypeName **required** `string`: The application type name represents the name of the application type found in the application manifest.
  * ApplicationTypeVersion **required** `string`: The application type version represents the version of the application type found in the application manifest.
  * Async **required** `boolean`: Indicates whether or not provisioning should occur asynchronously. When set to true, the provision operation returns when the request is accepted by the system, and the provision operation continues without any timeout limit. The default value is false. For large application packages, we recommend setting the value to true.
  * Kind **required** [ProvisionApplicationTypeKind](#provisionapplicationtypekind)

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
  * Error **required** [FabricErrorError](#fabricerrorerror)

### FabricErrorCodes
* FabricErrorCodes `string` (values: FABRIC_E_INVALID_PARTITION_KEY, FABRIC_E_IMAGEBUILDER_VALIDATION_ERROR, FABRIC_E_INVALID_ADDRESS, FABRIC_E_APPLICATION_NOT_UPGRADING, FABRIC_E_APPLICATION_UPGRADE_VALIDATION_ERROR, FABRIC_E_FABRIC_NOT_UPGRADING, FABRIC_E_FABRIC_UPGRADE_VALIDATION_ERROR, FABRIC_E_INVALID_CONFIGURATION, FABRIC_E_INVALID_NAME_URI, FABRIC_E_PATH_TOO_LONG, FABRIC_E_KEY_TOO_LARGE, FABRIC_E_SERVICE_AFFINITY_CHAIN_NOT_SUPPORTED, FABRIC_E_INVALID_ATOMIC_GROUP, FABRIC_E_VALUE_EMPTY, FABRIC_E_NODE_NOT_FOUND, FABRIC_E_APPLICATION_TYPE_NOT_FOUND, FABRIC_E_APPLICATION_NOT_FOUND, FABRIC_E_SERVICE_TYPE_NOT_FOUND, FABRIC_E_SERVICE_DOES_NOT_EXIST, FABRIC_E_SERVICE_TYPE_TEMPLATE_NOT_FOUND, FABRIC_E_CONFIGURATION_SECTION_NOT_FOUND, FABRIC_E_PARTITION_NOT_FOUND, FABRIC_E_REPLICA_DOES_NOT_EXIST, FABRIC_E_SERVICE_GROUP_DOES_NOT_EXIST, FABRIC_E_CONFIGURATION_PARAMETER_NOT_FOUND, FABRIC_E_DIRECTORY_NOT_FOUND, FABRIC_E_FABRIC_VERSION_NOT_FOUND, FABRIC_E_FILE_NOT_FOUND, FABRIC_E_NAME_DOES_NOT_EXIST, FABRIC_E_PROPERTY_DOES_NOT_EXIST, FABRIC_E_ENUMERATION_COMPLETED, FABRIC_E_SERVICE_MANIFEST_NOT_FOUND, FABRIC_E_KEY_NOT_FOUND, FABRIC_E_HEALTH_ENTITY_NOT_FOUND, FABRIC_E_APPLICATION_TYPE_ALREADY_EXISTS, FABRIC_E_APPLICATION_ALREADY_EXISTS, FABRIC_E_APPLICATION_ALREADY_IN_TARGET_VERSION, FABRIC_E_APPLICATION_TYPE_PROVISION_IN_PROGRESS, FABRIC_E_APPLICATION_UPGRADE_IN_PROGRESS, FABRIC_E_SERVICE_ALREADY_EXISTS, FABRIC_E_SERVICE_GROUP_ALREADY_EXISTS, FABRIC_E_APPLICATION_TYPE_IN_USE, FABRIC_E_FABRIC_ALREADY_IN_TARGET_VERSION, FABRIC_E_FABRIC_VERSION_ALREADY_EXISTS, FABRIC_E_FABRIC_VERSION_IN_USE, FABRIC_E_FABRIC_UPGRADE_IN_PROGRESS, FABRIC_E_NAME_ALREADY_EXISTS, FABRIC_E_NAME_NOT_EMPTY, FABRIC_E_PROPERTY_CHECK_FAILED, FABRIC_E_SERVICE_METADATA_MISMATCH, FABRIC_E_SERVICE_TYPE_MISMATCH, FABRIC_E_HEALTH_STALE_REPORT, FABRIC_E_SEQUENCE_NUMBER_CHECK_FAILED, FABRIC_E_NODE_HAS_NOT_STOPPED_YET, FABRIC_E_INSTANCE_ID_MISMATCH, FABRIC_E_VALUE_TOO_LARGE, FABRIC_E_NO_WRITE_QUORUM, FABRIC_E_NOT_PRIMARY, FABRIC_E_NOT_READY, FABRIC_E_RECONFIGURATION_PENDING, FABRIC_E_SERVICE_OFFLINE, E_ABORT, FABRIC_E_COMMUNICATION_ERROR, FABRIC_E_OPERATION_NOT_COMPLETE, FABRIC_E_TIMEOUT, FABRIC_E_NODE_IS_UP, E_FAIL, FABRIC_E_BACKUP_IS_ENABLED, FABRIC_E_RESTORE_SOURCE_TARGET_PARTITION_MISMATCH, FABRIC_E_INVALID_FOR_STATELESS_SERVICES, FABRIC_E_BACKUP_NOT_ENABLED, FABRIC_E_BACKUP_POLICY_NOT_EXISTING, FABRIC_E_FAULT_ANALYSIS_SERVICE_NOT_EXISTING, FABRIC_E_BACKUP_IN_PROGRESS, FABRIC_E_RESTORE_IN_PROGRESS, FABRIC_E_BACKUP_POLICY_ALREADY_EXISTING, FABRIC_E_INVALID_SERVICE_SCALING_POLICY, E_INVALIDARG, FABRIC_E_SINGLE_INSTANCE_APPLICATION_ALREADY_EXISTS, FABRIC_E_SINGLE_INSTANCE_APPLICATION_NOT_FOUND, FABRIC_E_VOLUME_ALREADY_EXISTS, FABRIC_E_VOLUME_NOT_FOUND, SerializationError, FABRIC_E_IMAGEBUILDER_RESERVED_DIRECTORY_ERROR): Defines the fabric error codes that be returned as part of the error object in response to Service Fabric API operations that are not successful. Following are the error code values that can be returned for a specific HTTP status code.

### FabricErrorError
* FabricErrorError `object`: Error object containing error code and error message.
  * Code **required** [FabricErrorCodes](#fabricerrorcodes)
  * Message `string`: Error message.

### FabricEvent
* FabricEvent `object`: Represents the base for all Fabric Events.
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### FabricEventKind
* FabricEventKind `string` (values: ClusterEvent, ContainerInstanceEvent, NodeEvent, ApplicationEvent, ServiceEvent, PartitionEvent, ReplicaEvent, PartitionAnalysisEvent, ApplicationCreated, ApplicationDeleted, ApplicationNewHealthReport, ApplicationHealthReportExpired, ApplicationUpgradeCompleted, ApplicationUpgradeDomainCompleted, ApplicationUpgradeRollbackCompleted, ApplicationUpgradeRollbackStarted, ApplicationUpgradeStarted, DeployedApplicationNewHealthReport, DeployedApplicationHealthReportExpired, ApplicationProcessExited, ApplicationContainerInstanceExited, NodeAborted, NodeAddedToCluster, NodeClosed, NodeDeactivateCompleted, NodeDeactivateStarted, NodeDown, NodeNewHealthReport, NodeHealthReportExpired, NodeOpenSucceeded, NodeOpenFailed, NodeRemovedFromCluster, NodeUp, PartitionNewHealthReport, PartitionHealthReportExpired, PartitionReconfigured, PartitionPrimaryMoveAnalysis, ServiceCreated, ServiceDeleted, ServiceNewHealthReport, ServiceHealthReportExpired, DeployedServicePackageNewHealthReport, DeployedServicePackageHealthReportExpired, StatefulReplicaNewHealthReport, StatefulReplicaHealthReportExpired, StatelessReplicaNewHealthReport, StatelessReplicaHealthReportExpired, ClusterNewHealthReport, ClusterHealthReportExpired, ClusterUpgradeCompleted, ClusterUpgradeDomainCompleted, ClusterUpgradeRollbackCompleted, ClusterUpgradeRollbackStarted, ClusterUpgradeStarted, ChaosStopped, ChaosStarted, ChaosCodePackageRestartScheduled, ChaosReplicaRemovalScheduled, ChaosPartitionSecondaryMoveScheduled, ChaosPartitionPrimaryMoveScheduled, ChaosReplicaRestartScheduled, ChaosNodeRestartScheduled): The kind of FabricEvent.

### FabricName
* FabricName `string`: The Service Fabric name, including the 'fabric:' URI scheme.

### FabricReplicaStatus
* FabricReplicaStatus `string` (values: Invalid, Down, Up): Specifies the status of the replica.

### FailedPropertyBatchInfo
* FailedPropertyBatchInfo `object`: Derived from PropertyBatchInfo. Represents the property batch failing. Contains information about the specific batch failure.
  * ErrorMessage `string`: The error message of the failed operation. Describes the exception thrown due to the first unsuccessful operation in the property batch.
  * OperationIndex `integer`: The index of the unsuccessful operation in the property batch.
  * Kind **required** [PropertyBatchInfoKind](#propertybatchinfokind)

### FailedUpgradeDomainProgressObject
* FailedUpgradeDomainProgressObject `object`: The detailed upgrade progress for nodes in the current upgrade domain at the point of failure.
  * DomainName [UpgradeDomainName](#upgradedomainname)
  * NodeUpgradeProgressList [NodeUpgradeProgressInfoList](#nodeupgradeprogressinfolist)

### FailureAction
* FailureAction `string` (values: Invalid, Rollback, Manual): The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations.

### FailureReason
* FailureReason `string` (values: None, Interrupted, HealthCheck, UpgradeDomainTimeout, OverallUpgradeTimeout): The cause of an upgrade failure that resulted in FailureAction being executed.

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

### FileShareBackupStorageDescription
* FileShareBackupStorageDescription `object`: Describes the parameters for file share storage used for storing or enumerating backups.
  * Path **required** `string`: UNC path of the file share where to store or enumerate backups from.
  * PrimaryPassword `string`: Primary password to access the share location.
  * PrimaryUserName `string`: Primary user name to access the file share.
  * SecondaryPassword `string`: Secondary password to access the share location
  * SecondaryUserName `string`: Secondary user name to access the file share.
  * FriendlyName `string`: Friendly name for this backup storage.
  * StorageKind **required** [BackupStorageKind](#backupstoragekind)

### FileVersion
* FileVersion `object`: Information about the version of image store file.
  * EpochConfigurationNumber `string`: The epoch configuration version number of the image store replica when this file entry was created or updated.
  * EpochDataLossNumber `string`: The epoch data loss number of image store replica when this file entry was updated or created.
  * VersionNumber `string`: The current image store version number for the file is used in image store for checking whether it need to be updated.

### FolderInfo
* FolderInfo `object`: Information about a image store folder. It includes how many files this folder contains and its image store relative path.
  * FileCount `string`: The number of files from within the image store folder.
  * StoreRelativePath [ImageStoreRelativePath](#imagestorerelativepath)

### FolderSizeInfo
* FolderSizeInfo `object`: Information of a image store folder size
  * FolderSize `string`: The size of folder in bytes.
  * StoreRelativePath [ImageStoreRelativePath](#imagestorerelativepath)

### ForceRestart
* ForceRestart `boolean`: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).

### FrequencyBasedBackupScheduleDescription
* FrequencyBasedBackupScheduleDescription `object`: Describes the frequency based backup schedule.
  * Interval **required** `string`: Defines the interval with which backups are periodically taken. It should be specified in ISO8601 format. Timespan in seconds is not supported and will be ignored while creating the policy.
  * ScheduleKind **required** [BackupScheduleKind](#backupschedulekind)

### GatewayDestination
* GatewayDestination `object`: Describes destination endpoint for routing traffic.
  * applicationName **required** `string`: Name of the service fabric Mesh application.
  * endpointName **required** `string`: name of the endpoint in the service.
  * serviceName **required** `string`: service that contains the endpoint.

### GatewayProperties
* GatewayProperties `object`: Describes properties of a gateway resource.
  * description `string`: User readable description of the gateway.
  * destinationNetwork **required** [NetworkRef](#networkref)
  * http `array`: Configuration for http connectivity for this gateway.
    * items [HttpConfig](#httpconfig)
  * ipAddress `string`: IP address of the gateway. This is populated in the response and is ignored for incoming requests.
  * sourceNetwork **required** [NetworkRef](#networkref)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the gateway.
  * tcp `array`: Configuration for tcp connectivity for this gateway.
    * items [TcpConfig](#tcpconfig)

### GatewayResourceDescription
* GatewayResourceDescription `object`: This type describes a gateway resource.
  * name **required** [GatewayResourceName](#gatewayresourcename)
  * properties **required** [GatewayProperties](#gatewayproperties)

### GatewayResourceName
* GatewayResourceName `string`: Name of the Gateway resource.

### GetBackupByStorageQueryDescription
* GetBackupByStorageQueryDescription `object`: Describes additional filters to be applied, while listing backups, and backup storage details from where to fetch the backups.
  * BackupEntity **required** [BackupEntity](#backupentity)
  * EndDateTimeFilter `string`: Specifies the end date time in ISO8601 till which to enumerate backups. If not specified, backups are enumerated till the end.
  * Latest `boolean`: If specified as true, gets the most recent backup (within the specified time range) for every partition under the specified backup entity.
  * StartDateTimeFilter `string`: Specifies the start date time in ISO8601 from which to enumerate backups. If not specified, backups are enumerated from the beginning.
  * Storage **required** [BackupStorageDescription](#backupstoragedescription)

### GetPropertyBatchOperation
* GetPropertyBatchOperation `object`: Represents a PropertyBatchOperation that gets the specified property if it exists.
  * IncludeValue `boolean`: Whether or not to return the property value with the metadata.
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### GuidPropertyValue
* GuidPropertyValue `object`: Describes a Service Fabric property value of type Guid.
  * Data **required** `string`: The data of the property value.
  * Kind **required** [PropertyValueKind](#propertyvaluekind)

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
* HealthEvaluationKind `string` (values: Invalid, Event, Replicas, Partitions, DeployedServicePackages, DeployedApplications, Services, Nodes, Applications, SystemApplication, UpgradeDomainDeployedApplications, UpgradeDomainNodes, Replica, Partition, DeployedServicePackage, DeployedApplication, Service, Node, Application, DeltaNodesCheck, UpgradeDomainDeltaNodesCheck, ApplicationTypeApplications): The health manager in the cluster performs health evaluations in determining the aggregated health state of an entity. This enumeration provides information on the kind of evaluation that was performed. Following are the possible values.

### HealthEvaluationWrapper
* HealthEvaluationWrapper `object`: Wrapper object for health evaluation.
  * HealthEvaluation [HealthEvaluation](#healthevaluation)

### HealthEvent
* HealthEvent `object`: Represents health information reported on a health entity, such as cluster, application or node, with additional metadata added by the Health Manager.
  * IsExpired `boolean`: Returns true if the health event is expired, otherwise false.
  * LastErrorTransitionAt `string`: If the current health state is 'Error', this property returns the time at which the health report was first reported with 'Error'. For periodic reporting, many reports with the same state may have been generated however, this property returns only the date and time at the first 'Error' health report was received.
  * LastModifiedUtcTimestamp `string`: The date and time when the health report was last modified by the health store.
  * LastOkTransitionAt `string`: If the current health state is 'Ok', this property returns the time at which the health report was first reported with 'Ok'.
  * LastWarningTransitionAt `string`: If the current health state is 'Warning', this property returns the time at which the health report was first reported with 'Warning'. For periodic reporting, many reports with the same state may have been generated however, this property returns only the date and time at the first 'Warning' health report was received.
  * SourceUtcTimestamp `string`: The date and time when the health report was sent by the source.
  * Description `string`: The description of the health information. It represents free text used to add human readable information about the report.
  * HealthState **required** [HealthState](#healthstate)
  * Property **required** `string`: The property of the health information. An entity can have health reports for different properties.
  * RemoveWhenExpired `boolean`: Value that indicates whether the report is removed from health store when it expires.
  * SequenceNumber `string`: The sequence number for this health report as a numeric string.
  * SourceId **required** `string`: The source name that identifies the client/watchdog/system component that generated the health information.
  * TimeToLiveInMilliSeconds `string`: The duration for which this health report is valid. This field uses ISO8601 format for specifying the duration.

### HealthInformation
* HealthInformation `object`: Represents common health report information. It is included in all health reports sent to health store and in all health events returned by health queries.
  * Description `string`: The description of the health information. It represents free text used to add human readable information about the report.
  * HealthState **required** [HealthState](#healthstate)
  * Property **required** `string`: The property of the health information. An entity can have health reports for different properties.
  * RemoveWhenExpired `boolean`: Value that indicates whether the report is removed from health store when it expires.
  * SequenceNumber `string`: The sequence number for this health report as a numeric string.
  * SourceId **required** `string`: The source name that identifies the client/watchdog/system component that generated the health information.
  * TimeToLiveInMilliSeconds `string`: The duration for which this health report is valid. This field uses ISO8601 format for specifying the duration.

### HealthState
* HealthState `string` (values: Invalid, Ok, Warning, Error, Unknown): The health state of a Service Fabric entity such as Cluster, Node, Application, Service, Partition, Replica etc.

### HealthStateCount
* HealthStateCount `object`: Represents information about how many health entities are in Ok, Warning and Error health state.
  * ErrorCount `integer`: The number of health entities with aggregated health state Error.
  * OkCount `integer`: The number of health entities with aggregated health state Ok.
  * WarningCount `integer`: The number of health entities with aggregated health state Warning.

### HealthStatistics
* HealthStatistics `object`: The health statistics of an entity, returned as part of the health query result when the query description is configured to include statistics.
  * HealthStateCountList `array`: List of health state counts per entity kind, which keeps track of how many children of the queried entity are in Ok, Warning and Error state.
    * items [EntityKindHealthStateCount](#entitykindhealthstatecount)

### HostIsolationMode
* HostIsolationMode `string` (values: None, Process, HyperV): Specifies the isolation mode of main entry point of a code package when it's host type is ContainerHost. This is specified as part of container host policies in application manifest while importing service manifest.

### HostType
* HostType `string` (values: Invalid, ExeHost, ContainerHost): Specifies the type of host for main entry point of a code package as specified in service manifest.

### HttpConfig
* HttpConfig `object`: Describes the http configuration for external connectivity for this network.
  * hosts **required** `array`: description for routing.
    * items [HttpHostConfig](#httphostconfig)
  * name **required** `string`: http gateway config name.
  * port **required** `integer`: Specifies the port at which the service endpoint below needs to be exposed.

### HttpHostConfig
* HttpHostConfig `object`: Describes the hostname properties for http routing.
  * name **required** `string`: http hostname config name.
  * routes **required** `array`: Route information to use for routing. Routes are processed in the order they are specified. Specify routes that are more specific before routes that can handle general cases.
    * items [HttpRouteConfig](#httprouteconfig)

### HttpRouteConfig
* HttpRouteConfig `object`: Describes the hostname properties for http routing.
  * destination **required** [GatewayDestination](#gatewaydestination)
  * match **required** [HttpRouteMatchRule](#httproutematchrule)
  * name **required** `string`: http route name.

### HttpRouteMatchHeader
* HttpRouteMatchHeader `object`: Describes header information for http route matching.
  * name **required** `string`: Name of header to match in request.
  * type `string` (values: exact): how to match header value
  * value `string`: Value of header to match in request.

### HttpRouteMatchPath
* HttpRouteMatchPath `object`: Path to match for routing.
  * rewrite `string`: replacement string for matched part of the Uri.
  * type **required** `string` (values: prefix): how to match value in the Uri
  * value **required** `string`: Uri path to match for request.

### HttpRouteMatchRule
* HttpRouteMatchRule `object`: Describes a rule for http route matching.
  * headers `array`: headers and their values to match in request.
    * items [HttpRouteMatchHeader](#httproutematchheader)
  * path **required** [HttpRouteMatchPath](#httproutematchpath)

### IdentityDescription
* IdentityDescription `object`: Information describing the identities associated with this application.
  * principalId `string`: the object identifier of the Service Principal of the identity associated with this resource.
  * tenantId `string`: the identifier of the tenant containing the application's identity.
  * tokenServiceEndpoint `string`: the endpoint for the token service managing this identity
  * type **required** `string`: the types of identities associated with this resource; currently restricted to 'SystemAssigned and UserAssigned'
  * userAssignedIdentities [UserAssignedIdentityMap](#userassignedidentitymap)

### IdentityItemDescription
* IdentityItemDescription `object`: Describes a single user-assigned identity associated with the application.
  * clientId `string`: the client identifier of the Service Principal which this identity represents.
  * principalId `string`: the object identifier of the Service Principal which this identity represents.

### ImageRegistryCredential
* ImageRegistryCredential `object`: Image registry credential.
  * password `string`: The password for the private registry. The password is required for create or update operations, however it is not returned in the get or list operations.
  * server **required** `string`: Docker image registry server, without protocol such as `http` and `https`.
  * username **required** `string`: The username for the private registry.

### ImageStoreContent
* ImageStoreContent `object`: Information about the image store content.
  * StoreFiles `array`: The list of image store file info objects represents files found under the given image store relative path.
    * items [FileInfo](#fileinfo)
  * StoreFolders `array`: The list of image store folder info objects represents subfolders found under the given image store relative path.
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

### InfrastructureServiceResponse
* InfrastructureServiceResponse `string`: This is a weakly-typed response stream to the client. It contains the JSON response from the infrastructure service without deserialization.

### InlinedValueSecretResourceProperties
* InlinedValueSecretResourceProperties: Describes the properties of a secret resource whose value is provided explicitly as plaintext. The secret resource may have multiple values, each being uniquely versioned. The secret value of each version is stored encrypted, and delivered as plaintext into the context of applications referencing it.
  * contentType `string`: The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
  * description `string`: User readable description of the secret.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the secret.
  * kind **required** [SecretKind](#secretkind)

### InstanceId
* InstanceId `string`: Id of a stateless service instance. InstanceId is used by Service Fabric to uniquely identify an instance of a partition of a stateless service. It is unique within a partition and does not change for the lifetime of the instance. If the instance has failed over on the same or different node, it will get a different value for the InstanceId.

### Int64PropertyValue
* Int64PropertyValue `object`: Describes a Service Fabric property value of type Int64.
  * Data **required** `string`: The data of the property value.
  * Kind **required** [PropertyValueKind](#propertyvaluekind)

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
* KeyValueStoreReplicaStatus `object`: Key value store related information for the replica.
  * CopyNotificationCurrentKeyFilter `string`: Value indicating the latest key-prefix filter applied to enumeration during the callback. Null if there is no pending callback.
  * CopyNotificationCurrentProgress `string`: Value indicating the latest number of keys enumerated during the callback. 0 if there is no pending callback.
  * DatabaseLogicalSizeEstimate `string`: Value indicating the estimated size of the underlying database.
  * DatabaseRowCountEstimate `string`: Value indicating the estimated number of rows in the underlying database.
  * StatusDetails `string`: Value indicating the current status details of the replica.
  * Kind **required** [ReplicaKind](#replicakind)

### LoadMetricInformation
* LoadMetricInformation `object`: Represents data structure that contains load information for a certain metric in a cluster.
  * Action `string`: The current action being taken with regard to this metric
  * ActivityThreshold `string`: The Activity Threshold specified for this metric in the system Cluster Manifest.
  * BalancingThreshold `string`: The balancing threshold for a certain metric.
  * BufferedClusterCapacityRemaining `string`: Remaining capacity in the cluster excluding the reserved space.
  * ClusterBufferedCapacity `string`: Remaining capacity in the cluster excluding the reserved space. In future releases of Service Fabric this parameter will be deprecated in favor of BufferedClusterCapacityRemaining.
  * ClusterCapacity `string`: The total cluster capacity for a given metric
  * ClusterCapacityRemaining `string`: The remaining capacity for the metric in the cluster.
  * ClusterLoad `string`: The total cluster load. In future releases of Service Fabric this parameter will be deprecated in favor of CurrentClusterLoad.
  * ClusterRemainingBufferedCapacity `string`: The remaining percentage of cluster total capacity for this metric.
  * ClusterRemainingCapacity `string`: The remaining capacity for the metric in the cluster. In future releases of Service Fabric this parameter will be deprecated in favor of ClusterCapacityRemaining.
  * CurrentClusterLoad `string`: The total cluster load.
  * DeviationAfter `string`: The standard average deviation of the metrics after resource balancer run.
  * DeviationBefore `string`: The standard average deviation of the metrics before resource balancer run.
  * IsBalancedAfter `boolean`: Value that indicates whether the metrics is balanced or not after resource balancer run.
  * IsBalancedBefore `boolean`: Value that indicates whether the metrics is balanced or not before resource balancer run
  * IsClusterCapacityViolation `boolean`: Indicates that the metric is currently over capacity in the cluster.
  * MaxNodeLoadNodeId [NodeId](#nodeid)
  * MaxNodeLoadValue `string`: The maximum load on any node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of MaximumNodeLoad.
  * MaximumNodeLoad `string`: The maximum load on any node for this metric.
  * MinNodeLoadNodeId [NodeId](#nodeid)
  * MinNodeLoadValue `string`: The minimum load on any node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of MinimumNodeLoad.
  * MinimumNodeLoad `string`: The minimum load on any node for this metric.
  * Name `string`: Name of the metric for which this load information is provided.
  * NodeBufferPercentage `string`: The reserved percentage of total node capacity for this metric.
  * PlannedLoadRemoval `string`: This value represents the load of the replicas that are planned to be removed in the future within the cluster.

### LoadMetricReport
* LoadMetricReport `object`: Represents the load metric report which contains the time metric was reported, its name and value.
  * CurrentValue `string`: The value of the load metric.
  * LastReportedUtc `string`: Gets the UTC time when the load was reported.
  * Name `string`: The name of the load metric.
  * Value `string`: The value of the load metric. In future releases of Service Fabric this parameter will be deprecated in favor of CurrentValue.

### LoadMetricReportInfo
* LoadMetricReportInfo `object`: Information about load reported by replica.
  * CurrentValue `string`: The double value of the load for the metric.
  * LastReportedUtc `string`: The UTC time when the load is reported.
  * Name `string`: The name of the metric.
  * Value `integer`: The value of the load for the metric. In future releases of Service Fabric this parameter will be deprecated in favor of CurrentValue.

### LoadMetricReportInfoList
* LoadMetricReportInfoList `array`: List of load reported by replica.
  * items [LoadMetricReportInfo](#loadmetricreportinfo)

### LocalNetworkResourceProperties
* LocalNetworkResourceProperties `object`: Information about a Service Fabric container network local to a single Service Fabric cluster.
  * networkAddressPrefix [NetworkAddressPrefix](#networkaddressprefix)
  * description `string`: User readable description of the network.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the network.
  * kind **required** [NetworkKind](#networkkind)

### ManagedApplicationIdentity
* ManagedApplicationIdentity `object`: Describes a managed application identity.
  * Name **required** `string`: The name of the identity.
  * PrincipalId `string`: The identity's PrincipalId.

### ManagedApplicationIdentityDescription
* ManagedApplicationIdentityDescription `object`: Managed application identity description.
  * ManagedIdentities [ManagedApplicationIdentityList](#managedapplicationidentitylist)
  * TokenServiceEndpoint `string`: Token service endpoint.

### ManagedApplicationIdentityList
* ManagedApplicationIdentityList `array`: A list of managed application identity objects.
  * items [ManagedApplicationIdentity](#managedapplicationidentity)

### MonitoringPolicyDescription
* MonitoringPolicyDescription `object`: Describes the parameters for monitoring an upgrade in Monitored mode.
  * FailureAction [FailureAction](#failureaction)
  * HealthCheckRetryTimeoutInMilliseconds [HealthCheckRetryTimeout](#healthcheckretrytimeout)
  * HealthCheckStableDurationInMilliseconds [HealthCheckStableDuration](#healthcheckstableduration)
  * HealthCheckWaitDurationInMilliseconds [HealthCheckWaitDuration](#healthcheckwaitduration)
  * UpgradeDomainTimeoutInMilliseconds [UpgradeDomainTimeout](#upgradedomaintimeout)
  * UpgradeTimeoutInMilliseconds [UpgradeTimeout](#upgradetimeout)

### MoveCost
* MoveCost `string` (values: Zero, Low, Medium, High): Specifies the move cost for the service.

### NameDescription
* NameDescription `object`: Describes a Service Fabric name.
  * Name **required** [FabricName](#fabricname)

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

### NetworkAddressPrefix
* NetworkAddressPrefix `string`: Address space for a container network. This is expressed in CIDR notation.

### NetworkKind
* NetworkKind `string` (values: Local): The type of a Service Fabric container network.

### NetworkRef
* NetworkRef `object`: Describes a network reference in a service.
  * endpointRefs `array`: A list of endpoints that are exposed on this network.
    * items [EndpointRef](#endpointref)
  * name `string`: Name of the network

### NetworkResourceDescription
* NetworkResourceDescription `object`: This type describes a network resource.
  * name **required** [NetworkResourceName](#networkresourcename)
  * properties **required** [NetworkResourceProperties](#networkresourceproperties)

### NetworkResourceName
* NetworkResourceName `string`: Name of the Network resource.

### NetworkResourceProperties
* NetworkResourceProperties `object`: Describes properties of a network resource.
  * description `string`: User readable description of the network.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the network.
  * kind **required** [NetworkKind](#networkkind)

### NetworkResourcePropertiesBase
* NetworkResourcePropertiesBase `object`: This type describes the properties of a network resource, including its kind.
  * kind **required** [NetworkKind](#networkkind)

### NextUpgradeDomain
* NextUpgradeDomain `string`: The name of the next upgrade domain to be processed.

### NodeAbortedEvent
* NodeAbortedEvent `object`: Node Aborted event.
  * FaultDomain **required** `string`: Fault domain of Node.
  * Hostname **required** `string`: Name of Host.
  * IpAddressOrFQDN **required** `string`: IP address or FQDN.
  * IsSeedNode **required** `boolean`: Indicates if it is seed node.
  * NodeId **required** `string`: Id of Node.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeVersion **required** `string`: Version of Node.
  * UpgradeDomain **required** `string`: Upgrade domain of Node.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeAddedToClusterEvent
* NodeAddedToClusterEvent `object`: Node Added event.
  * FabricVersion **required** `string`: Fabric version.
  * IpAddressOrFQDN **required** `string`: IP address or FQDN.
  * NodeCapacities **required** `string`: Capacities.
  * NodeId **required** `string`: Id of Node.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeType **required** `string`: Type of Node.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeClosedEvent
* NodeClosedEvent `object`: Node Closed event.
  * Error **required** `string`: Describes error.
  * NodeId **required** `string`: Id of Node.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeDeactivateCompletedEvent
* NodeDeactivateCompletedEvent `object`: Node Deactivate Completed event.
  * BatchIdsWithDeactivateIntent **required** `string`: Batch Ids.
  * EffectiveDeactivateIntent **required** `string`: Describes deactivate intent.
  * NodeInstance **required** `integer`: Id of Node instance.
  * StartTime **required** `string`: Start time.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeDeactivateStartedEvent
* NodeDeactivateStartedEvent `object`: Node Deactivate Started event.
  * BatchId **required** `string`: Batch Id.
  * DeactivateIntent **required** `string`: Describes deactivate intent.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

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

### NodeDownEvent
* NodeDownEvent `object`: Node Down event.
  * LastNodeUpAt **required** `string`: Time when Node was last up.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeEvent
* NodeEvent `object`: Represents the base for all Node Events.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeEventList
* NodeEventList `array`: A list of NodeEvent objects.
  * items [NodeEvent](#nodeevent)

### NodeHealth
* NodeHealth `object`: Information about the health of a Service Fabric node.
  * Name [NodeName](#nodename)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### NodeHealthEvaluation
* NodeHealthEvaluation `object`: Represents health evaluation for a node, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * NodeName [NodeName](#nodename)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### NodeHealthReportExpiredEvent
* NodeHealthReportExpiredEvent `object`: Node Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * NodeInstanceId **required** `integer`: Id of Node instance.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeHealthState
* NodeHealthState `object`: Represents the health state of a node, which contains the node identifier and its aggregated health state.
  * Id [NodeId](#nodeid)
  * Name [NodeName](#nodename)
  * AggregatedHealthState [HealthState](#healthstate)

### NodeHealthStateChunk
* NodeHealthStateChunk `object`: Represents the health state chunk of a node, which contains the node name and its aggregated health state.
  * NodeName [NodeName](#nodename)
  * HealthState [HealthState](#healthstate)

### NodeHealthStateChunkList
* NodeHealthStateChunkList `object`: The list of node health state chunks in the cluster that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of node health state chunks that respect the input filters in the chunk query.
    * items [NodeHealthStateChunk](#nodehealthstatechunk)
  * TotalCount `integer`: Total number of entity health state objects that match the specified filters from the cluster health chunk query description.

### NodeHealthStateFilter
* NodeHealthStateFilter `object`: Defines matching criteria to determine whether a node should be included in the returned cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the nodes. It allows selecting nodes if they match the desired health states.
  * NodeNameFilter `string`: Name of the node that matches the filter. The filter is applied only to the specified node, if it exists.

### NodeId
* NodeId `object`: An internal ID used by Service Fabric to uniquely identify a node. Node Id is deterministically generated from node name.
  * Id `string`: Value of the node Id. This is a 128 bit integer.

### NodeIdList
* NodeIdList `array`: A list of NodeIds.
  * items [NodeId](#nodeid)

### NodeImpact
* NodeImpact `object`: Describes the expected impact of a repair to a particular node.
  * ImpactLevel `string` (values: Invalid, None, Restart, RemoveData, RemoveNode): The level of impact expected.
  * NodeName **required** `string`: The name of the impacted node.

### NodeInfo
* NodeInfo `object`: Information about a node in Service Fabric cluster.
  * CodeVersion `string`: The version of Service Fabric binaries that the node is running.
  * ConfigVersion `string`: The version of Service Fabric cluster manifest that the node is using.
  * FaultDomain `string`: The fault domain of the node.
  * HealthState [HealthState](#healthstate)
  * Id [NodeId](#nodeid)
  * InstanceId `string`: The ID representing the node instance. While the ID of the node is deterministically generated from the node name and remains same across restarts, the InstanceId changes every time node restarts.
  * IpAddressOrFQDN `string`: The IP address or fully qualified domain name of the node.
  * IsSeedNode `boolean`: Indicates if the node is a seed node or not. Returns true if the node is a seed node, otherwise false. A quorum of seed nodes are required for proper operation of Service Fabric cluster.
  * IsStopped `boolean`: Indicates if the node is stopped by calling stop node API or not. Returns true if the node is stopped, otherwise false.
  * Name [NodeName](#nodename)
  * NodeDeactivationInfo [NodeDeactivationInfo](#nodedeactivationinfo)
  * NodeDownAt `string`: Date time in UTC when the node went down. If node has never been down then this value will be zero date time.
  * NodeDownTimeInSeconds `string`: Time in seconds since the node has been in NodeStatus Down. Value zero indicates node is not NodeStatus Down.
  * NodeStatus [NodeStatus](#nodestatus)
  * NodeUpAt `string`: Date time in UTC when the node came up. If the node has never been up then this value will be zero date time.
  * NodeUpTimeInSeconds `string`: Time in seconds since the node has been in NodeStatus Up. Value zero indicates that the node is not Up.
  * Type `string`: The type of the node.
  * UpgradeDomain `string`: The upgrade domain of the node.

### NodeLoadInfo
* NodeLoadInfo `object`: Information about load on a Service Fabric node. It holds a summary of all metrics and their load on a node.
  * NodeLoadMetricInformation `array`: List that contains metrics and their load information on this node.
    * items [NodeLoadMetricInformation](#nodeloadmetricinformation)
  * NodeName [NodeName](#nodename)

### NodeLoadMetricInformation
* NodeLoadMetricInformation `object`: Represents data structure that contains load information for a certain metric on a node.
  * BufferedNodeCapacityRemaining `string`: The remaining capacity which is not reserved by NodeBufferPercentage for this metric on the node.
  * CurrentNodeLoad `string`: Current load on the node for this metric.
  * IsCapacityViolation `boolean`: Indicates if there is a capacity violation for this metric on the node.
  * Name `string`: Name of the metric for which this load information is provided.
  * NodeBufferedCapacity `string`: The value that indicates the reserved capacity for this metric on the node.
  * NodeCapacity `string`: Total capacity on the node for this metric.
  * NodeCapacityRemaining `string`: The remaining capacity on the node for the metric.
  * NodeLoad `string`: Current load on the node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of CurrentNodeLoad.
  * NodeRemainingBufferedCapacity `string`: The remaining reserved capacity for this metric on the node. In future releases of Service Fabric this parameter will be deprecated in favor of BufferedNodeCapacityRemaining.
  * NodeRemainingCapacity `string`: The remaining capacity on the node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of NodeCapacityRemaining.
  * PlannedNodeLoadRemoval `string`: This value represents the load of the replicas that are planned to be removed in the future.

### NodeName
* NodeName `string`: The name of a Service Fabric node.

### NodeNewHealthReportEvent
* NodeNewHealthReportEvent `object`: Node Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * NodeInstanceId **required** `integer`: Id of Node instance.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeOpenFailedEvent
* NodeOpenFailedEvent `object`: Node Open Failed event.
  * Error **required** `string`: Describes the error.
  * FaultDomain **required** `string`: Fault domain of Node.
  * Hostname **required** `string`: Name of Host.
  * IpAddressOrFQDN **required** `string`: IP address or FQDN.
  * IsSeedNode **required** `boolean`: Indicates if it is seed node.
  * NodeId **required** `string`: Id of Node.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeVersion **required** `string`: Version of Node.
  * UpgradeDomain **required** `string`: Upgrade domain of Node.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeOpenSucceededEvent
* NodeOpenSucceededEvent `object`: Node Opened Succeeded event.
  * FaultDomain **required** `string`: Fault domain of Node.
  * Hostname **required** `string`: Name of Host.
  * IpAddressOrFQDN **required** `string`: IP address or FQDN.
  * IsSeedNode **required** `boolean`: Indicates if it is seed node.
  * NodeId **required** `string`: Id of Node.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeVersion **required** `string`: Version of Node.
  * UpgradeDomain **required** `string`: Upgrade domain of Node.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeRemovedFromClusterEvent
* NodeRemovedFromClusterEvent `object`: Node Removed event.
  * FabricVersion **required** `string`: Fabric version.
  * IpAddressOrFQDN **required** `string`: IP address or FQDN.
  * NodeCapacities **required** `string`: Capacities.
  * NodeId **required** `string`: Id of Node.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeType **required** `string`: Type of Node.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### NodeRepairImpactDescription
* NodeRepairImpactDescription `object`: Describes the expected impact of a repair on a set of nodes.
  * NodeImpactList `array`: The list of nodes impacted by a repair action and their respective expected impact.
    * items [NodeImpact](#nodeimpact)
  * Kind **required** [RepairImpactKind](#repairimpactkind)

### NodeRepairTargetDescription
* NodeRepairTargetDescription `object`: Describes the list of nodes targeted by a repair action.
  * NodeNames `array`: The list of nodes targeted by a repair action.
    * items `string`
  * Kind **required** [RepairTargetKind](#repairtargetkind)

### NodeResult
* NodeResult `object`: Contains information about a node that was targeted by a user-induced operation.
  * NodeInstanceId `string`: The node instance id.
  * NodeName [NodeName](#nodename)

### NodeStatus
* NodeStatus `string` (values: Invalid, Up, Down, Enabling, Disabling, Disabled, Unknown, Removed): The status of the node.

### NodeTransitionProgress
* NodeTransitionProgress `object`: Information about an NodeTransition operation.  This class contains an OperationState and a NodeTransitionResult.  The NodeTransitionResult is not valid until OperationState
  * NodeTransitionResult [NodeTransitionResult](#nodetransitionresult)
  * State [OperationState](#operationstate)

### NodeTransitionResult
* NodeTransitionResult `object`: Represents information about an operation in a terminal state (Completed or Faulted).
  * ErrorCode `integer`: If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason.
  * NodeResult [NodeResult](#noderesult)

### NodeType
* NodeType `string`: The type name of a Service Fabric node.

### NodeUpEvent
* NodeUpEvent `object`: Node Up event.
  * LastNodeDownAt **required** `string`: Time when Node was last down.
  * NodeInstance **required** `integer`: Id of Node instance.
  * NodeName **required** [NodeName](#nodename)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

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
* NodesHealthEvaluation `object`: Represents health evaluation for nodes, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned when evaluating cluster health and the aggregated health state is either Error or Warning.
  * MaxPercentUnhealthyNodes `integer`: Maximum allowed percentage of unhealthy nodes from the ClusterHealthPolicy.
  * TotalCount `integer`: Total number of nodes found in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### OperatingSystemType
* OperatingSystemType `string` (values: Linux, Windows): The operation system required by the code in service.

### OperationId
* OperationId `string`: A GUID that identifies a call to this API.  This is also passed into the corresponding GetProgress API.

### OperationState
* OperationState `string` (values: Invalid, Running, RollingBack, Completed, Faulted, Cancelled, ForceCancelled): The state of the operation.

### OperationStatus
* OperationStatus `object`: Contains the OperationId, OperationState, and OperationType for user-induced operations.
  * OperationId [OperationId](#operationid)
  * State [OperationState](#operationstate)
  * Type [OperationType](#operationtype)

### OperationStatusList
* OperationStatusList `array`: A list of OperationStatus objects.
  * items [OperationStatus](#operationstatus)

### OperationType
* OperationType `string` (values: Invalid, PartitionDataLoss, PartitionQuorumLoss, PartitionRestart, NodeTransition): The type of the operation.

### PackageSharingPolicyInfo
* PackageSharingPolicyInfo `object`: Represents a policy for the package sharing.
  * PackageSharingScope [PackageSharingPolicyScope](#packagesharingpolicyscope)
  * SharedPackageName `string`: The name of code, configuration or data package that should be shared.

### PackageSharingPolicyInfoList
* PackageSharingPolicyInfoList `array`: List of package sharing policy information.
  * items [PackageSharingPolicyInfo](#packagesharingpolicyinfo)

### PackageSharingPolicyScope
* PackageSharingPolicyScope `string` (values: None, All, Code, Config, Data): Represents the scope for PackageSharingPolicy. This is specified during DeployServicePackageToNode operation.

### PagedApplicationInfoList
* PagedApplicationInfoList `object`: The list of applications in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of application information.
    * items [ApplicationInfo](#applicationinfo)

### PagedApplicationResourceDescriptionList
* PagedApplicationResourceDescriptionList `object`: The list of application resources. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [ApplicationResourceDescription](#applicationresourcedescription)

### PagedApplicationTypeInfoList
* PagedApplicationTypeInfoList `object`: The list of application types that are provisioned or being provisioned in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of application type information.
    * items [ApplicationTypeInfo](#applicationtypeinfo)

### PagedBackupConfigurationInfoList
* PagedBackupConfigurationInfoList `object`: The list of backup configuration information. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of backup configuration information.
    * items [BackupConfigurationInfo](#backupconfigurationinfo)

### PagedBackupEntityList
* PagedBackupEntityList `object`: The list of backup entities that are being periodically backed. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of backup entity information.
    * items [BackupEntity](#backupentity)

### PagedBackupInfoList
* PagedBackupInfoList `object`: The list of backups. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of backup information.
    * items [BackupInfo](#backupinfo)

### PagedBackupPolicyDescriptionList
* PagedBackupPolicyDescriptionList `object`: The list of backup policies configured in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: The list of backup policies information.
    * items [BackupPolicyDescription](#backuppolicydescription)

### PagedComposeDeploymentStatusInfoList
* PagedComposeDeploymentStatusInfoList `object`: The list of compose deployments in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of compose deployment status information.
    * items [ComposeDeploymentStatusInfo](#composedeploymentstatusinfo)

### PagedDeployedApplicationInfoList
* PagedDeployedApplicationInfoList `object`: The list of deployed applications in activating, downloading, or active states on a node.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of deployed application information.
    * items [DeployedApplicationInfo](#deployedapplicationinfo)

### PagedGatewayResourceDescriptionList
* PagedGatewayResourceDescriptionList `object`: The list of gateway resources. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [GatewayResourceDescription](#gatewayresourcedescription)

### PagedNetworkResourceDescriptionList
* PagedNetworkResourceDescriptionList `object`: The list of network resources. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [NetworkResourceDescription](#networkresourcedescription)

### PagedNodeInfoList
* PagedNodeInfoList `object`: The list of nodes in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of node information.
    * items [NodeInfo](#nodeinfo)

### PagedPropertyInfoList
* PagedPropertyInfoList `object`: The paged list of Service Fabric properties under a given name. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * IsConsistent `boolean`: Indicates whether any property under the given name has been modified during the enumeration. If there was a modification, this property value is false.
  * Properties `array`: List of property information.
    * items [PropertyInfo](#propertyinfo)

### PagedReplicaInfoList
* PagedReplicaInfoList `object`: The list of replicas in the cluster for a given partition. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of replica information.
    * items [ReplicaInfo](#replicainfo)

### PagedSecretResourceDescriptionList
* PagedSecretResourceDescriptionList `object`: The list of secret resources. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [SecretResourceDescription](#secretresourcedescription)

### PagedSecretValueResourceDescriptionList
* PagedSecretValueResourceDescriptionList `object`: The list of values of a secret resource, paged if the number of results exceeds the limits of a single message. The next set of results can be obtained by executing the same query with the continuation token provided in the previous page.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [SecretValueResourceDescription](#secretvalueresourcedescription)

### PagedServiceInfoList
* PagedServiceInfoList `object`: The list of services in the cluster for an application. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of service information.
    * items [ServiceInfo](#serviceinfo)

### PagedServicePartitionInfoList
* PagedServicePartitionInfoList `object`: The list of partition in the cluster for a service. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of service partition information.
    * items [ServicePartitionInfo](#servicepartitioninfo)

### PagedServiceReplicaDescriptionList
* PagedServiceReplicaDescriptionList `object`: The list of service resource replicas in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: List of service resource replica description.
    * items [ServiceReplicaDescription](#servicereplicadescription)

### PagedServiceResourceDescriptionList
* PagedServiceResourceDescriptionList `object`: The list of service resources. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [ServiceResourceDescription](#serviceresourcedescription)

### PagedSubNameInfoList
* PagedSubNameInfoList `object`: A paged list of Service Fabric names. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * IsConsistent `boolean`: Indicates whether any name under the given name has been modified during the enumeration. If there was a modification, this property value is false.
  * SubNames `array`: List of the child names.
    * items [FabricName](#fabricname)

### PagedVolumeResourceDescriptionList
* PagedVolumeResourceDescriptionList `object`: The list of volume resources. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * Items `array`: One page of the list.
    * items [VolumeResourceDescription](#volumeresourcedescription)

### PartitionAccessStatus
* PartitionAccessStatus `string` (values: Invalid, Granted, ReconfigurationPending, NotPrimary, NoWriteQuorum): Specifies the access status of the partition.

### PartitionAnalysisEvent
* PartitionAnalysisEvent `object`: Represents the base for all Partition Analysis Events.
  * Metadata **required** [AnalysisEventMetadata](#analysiseventmetadata)
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### PartitionBackupConfigurationInfo
* PartitionBackupConfigurationInfo `object`: Backup configuration information, for a specific partition, specifying what backup policy is being applied and suspend description, if any.
  * PartitionId [PartitionId](#partitionid)
  * ServiceName [ServiceName](#servicename)
  * Kind **required** [BackupEntityKind](#backupentitykind)
  * PolicyInheritedFrom [BackupPolicyScope](#backuppolicyscope)
  * PolicyName `string`: The name of the backup policy which is applicable to this Service Fabric application or service or partition.
  * SuspensionInfo [BackupSuspensionInfo](#backupsuspensioninfo)

### PartitionBackupEntity
* PartitionBackupEntity `object`: Identifies the Service Fabric stateful partition which is being backed up.
  * PartitionId [PartitionId](#partitionid)
  * ServiceName [ServiceName](#servicename)
  * EntityKind **required** [BackupEntityKind](#backupentitykind)

### PartitionDataLossProgress
* PartitionDataLossProgress `object`: Information about a partition data loss user-induced operation.
  * InvokeDataLossResult [InvokeDataLossResult](#invokedatalossresult)
  * State [OperationState](#operationstate)

### PartitionEvent
* PartitionEvent `object`: Represents the base for all Partition Events.
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### PartitionEventList
* PartitionEventList `array`: A list of PartitionEvent objects.
  * items [PartitionEvent](#partitionevent)

### PartitionHealth
* PartitionHealth `object`: Information about the health of a Service Fabric partition.
  * PartitionId [PartitionId](#partitionid)
  * ReplicaHealthStates `array`: The list of replica health states associated with the partition.
    * items [ReplicaHealthState](#replicahealthstate)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### PartitionHealthEvaluation
* PartitionHealthEvaluation `object`: Represents health evaluation for a partition, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * PartitionId [PartitionId](#partitionid)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### PartitionHealthReportExpiredEvent
* PartitionHealthReportExpiredEvent `object`: Partition Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### PartitionHealthState
* PartitionHealthState `object`: Represents the health state of a partition, which contains the partition identifier and its aggregated health state.
  * PartitionId [PartitionId](#partitionid)
  * AggregatedHealthState [HealthState](#healthstate)

### PartitionHealthStateChunk
* PartitionHealthStateChunk `object`: Represents the health state chunk of a partition, which contains the partition ID, its aggregated health state and any replicas that respect the filters in the cluster health chunk query description.
  * PartitionId [PartitionId](#partitionid)
  * ReplicaHealthStateChunks [ReplicaHealthStateChunkList](#replicahealthstatechunklist)
  * HealthState [HealthState](#healthstate)

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
* PartitionId `string`: An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different.

### PartitionInformation
* PartitionInformation `object`: Information about the partition identity, partitioning scheme and keys supported by it.
  * Id [PartitionId](#partitionid)
  * ServicePartitionKind **required** [ServicePartitionKind](#servicepartitionkind)

### PartitionInstanceCountScaleMechanism
* PartitionInstanceCountScaleMechanism `object`: Represents a scaling mechanism for adding or removing instances of stateless service partition.
  * MaxInstanceCount **required** `integer`: Maximum number of instances of the partition.
  * MinInstanceCount **required** `integer`: Minimum number of instances of the partition.
  * ScaleIncrement **required** `integer`: The number of instances to add or remove during a scaling operation.
  * Kind **required** [ScalingMechanismKind](#scalingmechanismkind)

### PartitionLoadInformation
* PartitionLoadInformation `object`: Represents load information for a partition, which contains the primary and secondary reported load metrics.
  * PartitionId [PartitionId](#partitionid)
  * PrimaryLoadMetricReports `array`: Array of load reports from the primary replica for this partition.
    * items [LoadMetricReport](#loadmetricreport)
  * SecondaryLoadMetricReports `array`: Array of aggregated load reports from all secondary replicas for this partition.
    * items [LoadMetricReport](#loadmetricreport)

### PartitionNewHealthReportEvent
* PartitionNewHealthReportEvent `object`: Partition Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### PartitionPrimaryMoveAnalysisEvent
* PartitionPrimaryMoveAnalysisEvent `object`: Partition Primary Move Analysis event.
  * CurrentNode **required** [NodeName](#nodename)
  * MoveReason **required** `string`: Move reason.
  * PreviousNode **required** [NodeName](#nodename)
  * RelevantTraces **required** `string`: Relevant traces.
  * WhenMoveCompleted **required** `string`: Time when the move was completed.
  * Metadata **required** [AnalysisEventMetadata](#analysiseventmetadata)
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### PartitionQuorumLossProgress
* PartitionQuorumLossProgress `object`: Information about a partition quorum loss user-induced operation.
  * InvokeQuorumLossResult [InvokeQuorumLossResult](#invokequorumlossresult)
  * State [OperationState](#operationstate)

### PartitionReconfiguredEvent
* PartitionReconfiguredEvent `object`: Partition Reconfiguration event.
  * CcEpochConfigVersion **required** `integer`: CcEpochConfig version.
  * CcEpochDataLossVersion **required** `integer`: CcEpochDataLoss version.
  * NodeInstanceId **required** `string`: Id of Node instance.
  * NodeName **required** [NodeName](#nodename)
  * Phase0DurationMs **required** `number`: Duration of Phase0 in milli-seconds.
  * Phase1DurationMs **required** `number`: Duration of Phase1 in milli-seconds.
  * Phase2DurationMs **required** `number`: Duration of Phase2 in milli-seconds.
  * Phase3DurationMs **required** `number`: Duration of Phase3 in milli-seconds.
  * Phase4DurationMs **required** `number`: Duration of Phase4 in milli-seconds.
  * ReconfigType **required** `string`: Type of reconfiguration.
  * Result **required** `string`: Describes reconfiguration result.
  * ServiceType **required** `string`: Type of Service.
  * TotalDurationMs **required** `number`: Total duration in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### PartitionRestartProgress
* PartitionRestartProgress `object`: Information about a partition restart user-induced operation.
  * RestartPartitionResult [RestartPartitionResult](#restartpartitionresult)
  * State [OperationState](#operationstate)

### PartitionSafetyCheck
* PartitionSafetyCheck `object`: Represents a safety check for the service partition being performed by service fabric before continuing with operations.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### PartitionScheme
* PartitionScheme `string` (values: Invalid, Singleton, UniformInt64Range, Named): Enumerates the ways that a service can be partitioned.

### PartitionSchemeDescription
* PartitionSchemeDescription `object`: Describes how the service is partitioned.
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### PartitionsHealthEvaluation
* PartitionsHealthEvaluation `object`: Represents health evaluation for the partitions of a service, containing health evaluations for each unhealthy partition that impacts current aggregated health state. Can be returned when evaluating service health and the aggregated health state is either Error or Warning.
  * MaxPercentUnhealthyPartitionsPerService `integer`: Maximum allowed percentage of unhealthy partitions per service from the ServiceTypeHealthPolicy.
  * TotalCount `integer`: Total number of partitions of the service from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### PrimaryReplicatorStatus
* PrimaryReplicatorStatus `object`: Provides statistics about the Service Fabric Replicator, when it is functioning in a Primary role.
  * RemoteReplicators [RemoteReplicatorStatusList](#remotereplicatorstatuslist)
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * Kind **required** [ReplicaRole](#replicarole)

### PropertyBatchDescriptionList
* PropertyBatchDescriptionList `object`: Describes a list of property batch operations to be executed. Either all or none of the operations will be committed.
  * Operations `array`: A list of the property batch operations to be executed.
    * items [PropertyBatchOperation](#propertybatchoperation)

### PropertyBatchInfo
* PropertyBatchInfo `object`: Information about the results of a property batch.
  * Kind **required** [PropertyBatchInfoKind](#propertybatchinfokind)

### PropertyBatchInfoKind
* PropertyBatchInfoKind `string` (values: Invalid, Successful, Failed): The kind of property batch info, determined by the results of a property batch. The following are the possible values.

### PropertyBatchOperation
* PropertyBatchOperation `object`: Represents the base type for property operations that can be put into a batch and submitted.
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### PropertyBatchOperationKind
* PropertyBatchOperationKind `string` (values: Invalid, Put, Get, CheckExists, CheckSequence, Delete, CheckValue): The kind of property batch operation, determined by the operation to be performed. The following are the possible values.

### PropertyCustomTypeId
* PropertyCustomTypeId `string`: The property's custom type ID. Using this property, the user is able to tag the type of the value of the property.

### PropertyDescription
* PropertyDescription `object`: Description of a Service Fabric property.
  * CustomTypeId [PropertyCustomTypeId](#propertycustomtypeid)
  * PropertyName **required** [PropertyName](#propertyname)
  * Value **required** [PropertyValue](#propertyvalue)

### PropertyInfo
* PropertyInfo `object`: Information about a Service Fabric property.
  * Metadata **required** [PropertyMetadata](#propertymetadata)
  * Name **required** [PropertyName](#propertyname)
  * Value [PropertyValue](#propertyvalue)

### PropertyMetadata
* PropertyMetadata `object`: The metadata associated with a property, including the property's name.
  * CustomTypeId [PropertyCustomTypeId](#propertycustomtypeid)
  * LastModifiedUtcTimestamp `string`: Represents when the Property was last modified. Only write operations will cause this field to be updated.
  * Parent [FabricName](#fabricname)
  * SequenceNumber `string`: The version of the property. Every time a property is modified, its sequence number is increased.
  * SizeInBytes `integer`: The length of the serialized property value.
  * TypeId [PropertyValueKind](#propertyvaluekind)

### PropertyName
* PropertyName `string`: The name of the Service Fabric property.

### PropertyValue
* PropertyValue `object`: Describes a Service Fabric property value.
  * Kind **required** [PropertyValueKind](#propertyvaluekind)

### PropertyValueKind
* PropertyValueKind `string` (values: Invalid, Binary, Int64, Double, String, Guid): The kind of property, determined by the type of data. Following are the possible values.

### ProvisionApplicationTypeDescription
* ProvisionApplicationTypeDescription `object`: Describes the operation to register or provision an application type using an application package uploaded to the Service Fabric image store.
  * ApplicationPackageCleanupPolicy [ApplicationPackageCleanupPolicy](#applicationpackagecleanuppolicy)
  * ApplicationTypeBuildPath **required** `string`: The relative path for the application package in the image store specified during the prior upload operation.
  * Async **required** `boolean`: Indicates whether or not provisioning should occur asynchronously. When set to true, the provision operation returns when the request is accepted by the system, and the provision operation continues without any timeout limit. The default value is false. For large application packages, we recommend setting the value to true.
  * Kind **required** [ProvisionApplicationTypeKind](#provisionapplicationtypekind)

### ProvisionApplicationTypeDescriptionBase
* ProvisionApplicationTypeDescriptionBase `object`: Represents the type of registration or provision requested, and if the operation needs to be asynchronous or not. Supported types of provision operations are from either image store or external store.
  * Async **required** `boolean`: Indicates whether or not provisioning should occur asynchronously. When set to true, the provision operation returns when the request is accepted by the system, and the provision operation continues without any timeout limit. The default value is false. For large application packages, we recommend setting the value to true.
  * Kind **required** [ProvisionApplicationTypeKind](#provisionapplicationtypekind)

### ProvisionApplicationTypeKind
* ProvisionApplicationTypeKind `string` (values: Invalid, ImageStorePath, ExternalStore): The kind of application type registration or provision requested. The application package can be registered or provisioned either from the image store or from an external store. Following are the kinds of the application type provision.

### ProvisionFabricDescription
* ProvisionFabricDescription `object`: Describes the parameters for provisioning a cluster.
  * ClusterManifestFilePath `string`: The cluster manifest file path.
  * CodeFilePath `string`: The cluster code package file path.

### PutPropertyBatchOperation
* PutPropertyBatchOperation `object`: Puts the specified property under the specified name.
  * CustomTypeId [PropertyCustomTypeId](#propertycustomtypeid)
  * Value **required** [PropertyValue](#propertyvalue)
  * Kind **required** [PropertyBatchOperationKind](#propertybatchoperationkind)
  * PropertyName **required** [PropertyName](#propertyname)

### ReconfigurationInformation
* ReconfigurationInformation `object`: Information about current reconfiguration like phase, type, previous configuration role of replica and reconfiguration start date time.
  * PreviousConfigurationRole [ReplicaRole](#replicarole)
  * ReconfigurationPhase [ReconfigurationPhase](#reconfigurationphase)
  * ReconfigurationStartTimeUtc `string`: Start time (in UTC) of the ongoing reconfiguration. If no reconfiguration is taking place then this value will be zero date-time.
  * ReconfigurationType [ReconfigurationType](#reconfigurationtype)

### ReconfigurationPhase
* ReconfigurationPhase `string` (values: Unknown, None, Phase0, Phase1, Phase2, Phase3, Phase4, AbortPhaseZero): The reconfiguration phase of a replica of a stateful service.

### ReconfigurationType
* ReconfigurationType `string` (values: Unknown, SwapPrimary, Failover, Other): The type of reconfiguration for replica of a stateful service.

### RegistryCredential
* RegistryCredential `object`: Credential information to connect to container registry.
  * PasswordEncrypted `boolean`: Indicates that supplied container registry password is encrypted.
  * RegistryPassword `string`: The password for supplied username to connect to container registry.
  * RegistryUserName `string`: The user name to connect to container registry.

### ReliableCollectionsRef
* ReliableCollectionsRef `object`: Specifying this parameter adds support for reliable collections
  * doNotPersistState `boolean`: False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache.
  * name **required** `string`: Name of ReliableCollection resource. Right now it's not used and you can use any string.

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
  * ReplicaId [ReplicaId](#replicaid)

### RemoteReplicatorStatusList
* RemoteReplicatorStatusList `array`: List of remote replicator status
  * items [RemoteReplicatorStatus](#remotereplicatorstatus)

### RepairImpactDescriptionBase
* RepairImpactDescriptionBase `object`: Describes the expected impact of executing a repair task.
  * Kind **required** [RepairImpactKind](#repairimpactkind)

### RepairImpactKind
* RepairImpactKind `string` (values: Invalid, Node): Specifies the kind of the impact. This type supports the Service Fabric platform; it is not meant to be used directly from your code.'

### RepairTargetDescriptionBase
* RepairTargetDescriptionBase `object`: Describes the entities targeted by a repair action.
  * Kind **required** [RepairTargetKind](#repairtargetkind)

### RepairTargetKind
* RepairTargetKind `string` (values: Invalid, Node): Specifies the kind of the repair target. This type supports the Service Fabric platform; it is not meant to be used directly from your code.'

### RepairTask
* RepairTask `object`: Represents a repair task, which includes information about what kind of repair was requested, what its progress is, and what its final result was.
  * Action **required** `string`: The requested repair action. Must be specified when the repair task is created, and is immutable once set.
  * Description `string`: A description of the purpose of the repair task, or other informational details.
  * Executor `string`: The name of the repair executor. Must be specified in Claimed and later states, and is immutable once set.
  * ExecutorData `string`: A data string that the repair executor can use to store its internal state.
  * Flags `integer`: A bitwise-OR of the following values, which gives additional details about the status of the repair task.
  * History [RepairTaskHistory](#repairtaskhistory)
  * Impact [RepairImpactDescriptionBase](#repairimpactdescriptionbase)
  * PerformPreparingHealthCheck `boolean`: A value to determine if health checks will be performed when the repair task enters the Preparing state.
  * PerformRestoringHealthCheck `boolean`: A value to determine if health checks will be performed when the repair task enters the Restoring state.
  * PreparingHealthCheckState [RepairTaskHealthCheckState](#repairtaskhealthcheckstate)
  * RestoringHealthCheckState [RepairTaskHealthCheckState](#repairtaskhealthcheckstate)
  * ResultCode `integer`: A numeric value providing additional details about the result of the repair task execution.
  * ResultDetails `string`: A string providing additional details about the result of the repair task execution.
  * ResultStatus `string` (values: Invalid, Succeeded, Cancelled, Interrupted, Failed, Pending): A value describing the overall result of the repair task execution. Must be specified in the Restoring and later states, and is immutable once set.
  * State **required** `string` (values: Invalid, Created, Claimed, Preparing, Approved, Executing, Restoring, Completed): The workflow state of the repair task. Valid initial states are Created, Claimed, and Preparing.
  * Target [RepairTargetDescriptionBase](#repairtargetdescriptionbase)
  * TaskId **required** `string`: The ID of the repair task.
  * Version `string`: The version of the repair task.

### RepairTaskApproveDescription
* RepairTaskApproveDescription `object`: Describes a request for forced approval of a repair task.
  * TaskId **required** `string`: The ID of the repair task.
  * Version `string`: The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current version of the repair task. If zero, then no version check is performed.

### RepairTaskCancelDescription
* RepairTaskCancelDescription `object`: Describes a request to cancel a repair task.
  * RequestAbort `boolean`: _True_ if the repair should be stopped as soon as possible even if it has already started executing. _False_ if the repair should be cancelled only if execution has not yet started.
  * TaskId **required** `string`: The ID of the repair task.
  * Version `string`: The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current version of the repair task. If zero, then no version check is performed.

### RepairTaskDeleteDescription
* RepairTaskDeleteDescription `object`: Describes a request to delete a completed repair task.
  * TaskId **required** `string`: The ID of the completed repair task to be deleted.
  * Version `string`: The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current version of the repair task. If zero, then no version check is performed.

### RepairTaskHealthCheckState
* RepairTaskHealthCheckState `string` (values: NotStarted, InProgress, Succeeded, Skipped, TimedOut): Specifies the workflow state of a repair task's health check. This type supports the Service Fabric platform; it is not meant to be used directly from your code.

### RepairTaskHistory
* RepairTaskHistory `object`: A record of the times when the repair task entered each state.
  * ApprovedUtcTimestamp `string`: The time when the repair task entered the Approved state
  * ClaimedUtcTimestamp `string`: The time when the repair task entered the Claimed state.
  * CompletedUtcTimestamp `string`: The time when the repair task entered the Completed state
  * CreatedUtcTimestamp `string`: The time when the repair task entered the Created state.
  * ExecutingUtcTimestamp `string`: The time when the repair task entered the Executing state
  * PreparingHealthCheckEndUtcTimestamp `string`: The time when the repair task completed the health check in the Preparing state.
  * PreparingHealthCheckStartUtcTimestamp `string`: The time when the repair task started the health check in the Preparing state.
  * PreparingUtcTimestamp `string`: The time when the repair task entered the Preparing state.
  * RestoringHealthCheckEndUtcTimestamp `string`: The time when the repair task completed the health check in the Restoring state.
  * RestoringHealthCheckStartUtcTimestamp `string`: The time when the repair task started the health check in the Restoring state.
  * RestoringUtcTimestamp `string`: The time when the repair task entered the Restoring state

### RepairTaskList
* RepairTaskList `array`: A list of repair tasks.
  * items [RepairTask](#repairtask)

### RepairTaskUpdateHealthPolicyDescription
* RepairTaskUpdateHealthPolicyDescription `object`: Describes a request to update the health policy of a repair task.
  * PerformPreparingHealthCheck `boolean`: A boolean indicating if health check is to be performed in the Preparing stage of the repair task. If not specified the existing value should not be altered. Otherwise, specify the desired new value.
  * PerformRestoringHealthCheck `boolean`: A boolean indicating if health check is to be performed in the Restoring stage of the repair task. If not specified the existing value should not be altered. Otherwise, specify the desired new value.
  * TaskId **required** `string`: The ID of the repair task to be updated.
  * Version `string`: The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current value of the repair task. If zero, then no version check is performed.

### RepairTaskUpdateInfo
* RepairTaskUpdateInfo `object`: Describes the result of an operation that created or updated a repair task.
  * Version **required** `string`: The new version of the repair task.

### ReplicaEvent
* ReplicaEvent `object`: Represents the base for all Replica Events.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ReplicaEventList
* ReplicaEventList `array`: A list of ReplicaEvent objects.
  * items [ReplicaEvent](#replicaevent)

### ReplicaHealth
* ReplicaHealth `object`: Represents a base class for stateful service replica or stateless service instance health.
  * PartitionId [PartitionId](#partitionid)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ReplicaHealthEvaluation
* ReplicaHealthEvaluation `object`: Represents health evaluation for a replica, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * PartitionId [PartitionId](#partitionid)
  * ReplicaOrInstanceId [ReplicaOrInstanceId](#replicaorinstanceid)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### ReplicaHealthState
* ReplicaHealthState `object`: Represents a base class for stateful service replica or stateless service instance health state.
  * PartitionId [PartitionId](#partitionid)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * AggregatedHealthState [HealthState](#healthstate)

### ReplicaHealthStateChunk
* ReplicaHealthStateChunk `object`: Represents the health state chunk of a stateful service replica or a stateless service instance.
  * ReplicaOrInstanceId [ReplicaOrInstanceId](#replicaorinstanceid)
  * HealthState [HealthState](#healthstate)

### ReplicaHealthStateChunkList
* ReplicaHealthStateChunkList `object`: The list of replica health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.
  * Items `array`: The list of replica health state chunks that respect the input filters in the chunk query.
    * items [ReplicaHealthStateChunk](#replicahealthstatechunk)

### ReplicaHealthStateFilter
* ReplicaHealthStateFilter `object`: Defines matching criteria to determine whether a replica should be included as a child of a partition in the cluster health chunk.
  * HealthStateFilter `integer`: The filter for the health state of the replicas. It allows selecting replicas if they match the desired health states.
  * ReplicaOrInstanceIdFilter `string`: Id of the stateful service replica or stateless service instance that matches the filter. The filter is applied only to the specified replica, if it exists.

### ReplicaId
* ReplicaId `string`: Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id.

### ReplicaId_Integer
* ReplicaId_Integer `integer`: Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id.

### ReplicaInfo
* ReplicaInfo `object`: Information about the identity, status, health, node name, uptime, and other details about the replica.
  * Address `string`: The address the replica is listening on.
  * HealthState [HealthState](#healthstate)
  * LastInBuildDurationInSeconds `string`: The last in build duration of the replica in seconds.
  * NodeName [NodeName](#nodename)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### ReplicaKind
* ReplicaKind `string` (values: Invalid, KeyValueStore): The role of a replica of a stateful service.

### ReplicaOrInstanceId
* ReplicaOrInstanceId `string`: Id of a stateful service replica or a stateless service instance. This ID is used in the queries that apply to both stateful and stateless services. It is used by Service Fabric to uniquely identify a replica of a partition of a stateful service or an instance of a stateless service partition. It is unique within a partition and does not change for the lifetime of the replica or the instance. If a stateful replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the ID. If a stateless instance is failed over on the same or different node it will get a different value for the ID.

### ReplicaRole
* ReplicaRole `string` (values: Unknown, None, Primary, IdleSecondary, ActiveSecondary): The role of a replica of a stateful service.

### ReplicaStatus
* ReplicaStatus `string` (values: Invalid, InBuild, Standby, Ready, Down, Dropped): The status of a replica of a service.

### ReplicaStatusBase
* ReplicaStatusBase `object`: Information about the replica.
  * Kind **required** [ReplicaKind](#replicakind)

### ReplicasHealthEvaluation
* ReplicasHealthEvaluation `object`: Represents health evaluation for replicas, containing health evaluations for each unhealthy replica that impacted current aggregated health state. Can be returned when evaluating partition health and the aggregated health state is either Error or Warning.
  * MaxPercentUnhealthyReplicasPerPartition `integer`: Maximum allowed percentage of unhealthy replicas per partition from the ApplicationHealthPolicy.
  * TotalCount `integer`: Total number of replicas in the partition from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### ReplicatorOperationName
* ReplicatorOperationName `string` (values: Invalid, None, Open, ChangeRole, UpdateEpoch, Close, Abort, OnDataLoss, WaitForCatchup, Build): Specifies the operation currently being executed by the Replicator.

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

### ResourceLimits
* ResourceLimits `object`: This type describes the resource limits for a given container. It describes the most amount of resources a container is allowed to use before being restarted.
  * cpu `number`: CPU limits in cores. At present, only full cores are supported.
  * memoryInGB `number`: The memory limit in GB.

### ResourceRequests
* ResourceRequests `object`: This type describes the requested resources for a given container. It describes the least amount of resources required for the container. A container can consume more than requested resources up to the specified limits before being restarted. Currently, the requested resources are treated as limits.
  * cpu **required** `number`: Requested number of CPU cores. At present, only full cores are supported.
  * memoryInGB **required** `number`: The memory request in GB for this container.

### ResourceRequirements
* ResourceRequirements `object`: This type describes the resource requirements for a container or a service.
  * limits [ResourceLimits](#resourcelimits)
  * requests **required** [ResourceRequests](#resourcerequests)

### ResourceStatus
* ResourceStatus `string` (values: Unknown, Ready, Upgrading, Creating, Deleting, Failed): Status of the resource.

### RestartDeployedCodePackageDescription
* RestartDeployedCodePackageDescription `object`: Defines description for restarting a deployed code package on Service Fabric node.
  * CodePackageInstanceId **required** [CodePackageInstanceId](#codepackageinstanceid)
  * CodePackageName **required** [CodePackageName](#codepackagename)
  * ServiceManifestName **required** [ServiceManifestName](#servicemanifestname)
  * ServicePackageActivationId [ServicePackageActivationId](#servicepackageactivationid)

### RestartNodeDescription
* RestartNodeDescription `object`: Describes the parameters to restart a Service Fabric node.
  * CreateFabricDump `string` (values: False, True): Specify True to create a dump of the fabric node process. This is case-sensitive.
  * NodeInstanceId **required** `string`: The instance ID of the target node. If instance ID is specified the node is restarted only if it matches with the current instance of the node. A default value of "0" would match any instance ID. The instance ID can be obtained using get node query.

### RestartPartitionResult
* RestartPartitionResult `object`: Represents information about an operation in a terminal state (Completed or Faulted).
  * ErrorCode `integer`: If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason.
  * SelectedPartition [SelectedPartition](#selectedpartition)

### RestorePartitionDescription
* RestorePartitionDescription `object`: Specifies the parameters needed to trigger a restore of a specific partition.
  * BackupId **required** `string`: Unique backup ID.
  * BackupLocation **required** `string`: Location of the backup relative to the backup storage specified/ configured.
  * BackupStorage [BackupStorageDescription](#backupstoragedescription)

### RestoreProgressInfo
* RestoreProgressInfo `object`: Describes the progress of a restore operation on a partition.
  * FailureError [FabricErrorError](#fabricerrorerror)
  * RestoreState [RestoreState](#restorestate)
  * RestoredEpoch [Epoch](#epoch)
  * RestoredLsn `string`: Restored LSN.
  * TimeStampUtc `string`: Timestamp when operation succeeded or failed.

### RestoreState
* RestoreState `string` (values: Invalid, Accepted, RestoreInProgress, Success, Failure, Timeout): Represents the current state of the partition restore operation.

### ResumeApplicationUpgradeDescription
* ResumeApplicationUpgradeDescription `object`: Describes the parameters for resuming an unmonitored manual Service Fabric application upgrade
  * UpgradeDomainName **required** `string`: The name of the upgrade domain in which to resume the upgrade.

### ResumeClusterUpgradeDescription
* ResumeClusterUpgradeDescription `object`: Describes the parameters for resuming a cluster upgrade.
  * UpgradeDomain **required** `string`: The next upgrade domain for this cluster upgrade.

### RetentionPolicyDescription
* RetentionPolicyDescription `object`: Describes the retention policy configured.
  * RetentionPolicyType **required** [RetentionPolicyType](#retentionpolicytype)

### RetentionPolicyType
* RetentionPolicyType `string` (values: Basic, Invalid): The type of retention policy. Currently only "Basic" retention policy is supported.

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
* SafetyCheck `object`: Represents a safety check performed by service fabric before continuing with the operations. These checks ensure the availability of the service and the reliability of the state.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### SafetyCheckInfoList
* SafetyCheckInfoList `array`: List of pending safety checks
  * items [SafetyCheckWrapper](#safetycheckwrapper)

### SafetyCheckKind
* SafetyCheckKind `string` (values: Invalid, EnsureSeedNodeQuorum, EnsurePartitionQuorum, WaitForPrimaryPlacement, WaitForPrimarySwap, WaitForReconfiguration, WaitForInbuildReplica, EnsureAvailability): The kind of safety check performed by service fabric before continuing with the operations. These checks ensure the availability of the service and the reliability of the state. Following are the kinds of safety checks.

### SafetyCheckWrapper
* SafetyCheckWrapper `object`: A wrapper for the safety check object. Safety checks are performed by service fabric before continuing with the operations. These checks ensure the availability of the service and the reliability of the state.
  * SafetyCheck [SafetyCheck](#safetycheck)

### ScalingMechanismDescription
* ScalingMechanismDescription `object`: Describes the mechanism for performing a scaling operation.
  * Kind **required** [ScalingMechanismKind](#scalingmechanismkind)

### ScalingMechanismKind
* ScalingMechanismKind `string` (values: Invalid, PartitionInstanceCount, AddRemoveIncrementalNamedPartition): Enumerates the ways that a service can be scaled.

### ScalingPolicyDescription
* ScalingPolicyDescription `object`: Describes how the scaling should be performed
  * ScalingMechanism **required** [ScalingMechanismDescription](#scalingmechanismdescription)
  * ScalingTrigger **required** [ScalingTriggerDescription](#scalingtriggerdescription)

### ScalingPolicyDescriptionList
* ScalingPolicyDescriptionList `array`: A list that describes the scaling policies.
  * items [ScalingPolicyDescription](#scalingpolicydescription)

### ScalingTriggerDescription
* ScalingTriggerDescription `object`: Describes the trigger for performing a scaling operation.
  * Kind **required** [ScalingTriggerKind](#scalingtriggerkind)

### ScalingTriggerKind
* ScalingTriggerKind `string` (values: Invalid, AveragePartitionLoad, AverageServiceLoad): Enumerates the ways that a service can be scaled.

### SecondaryActiveReplicatorStatus
* SecondaryActiveReplicatorStatus: Status of the secondary replicator when it is in active mode and is part of the replica set.
  * CopyQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * IsInBuild `boolean`: Value that indicates whether the replica is currently being built.
  * LastAcknowledgementSentTimeUtc `string`: The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator.
  * LastCopyOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a copy operation was received from the primary.
  * LastReplicationOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a replication operation was received from the primary.
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * Kind **required** [ReplicaRole](#replicarole)

### SecondaryIdleReplicatorStatus
* SecondaryIdleReplicatorStatus: Status of the secondary replicator when it is in idle mode and is being built by the primary.
  * CopyQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * IsInBuild `boolean`: Value that indicates whether the replica is currently being built.
  * LastAcknowledgementSentTimeUtc `string`: The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator.
  * LastCopyOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a copy operation was received from the primary.
  * LastReplicationOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a replication operation was received from the primary.
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * Kind **required** [ReplicaRole](#replicarole)

### SecondaryReplicatorStatus
* SecondaryReplicatorStatus `object`: Provides statistics about the Service Fabric Replicator, when it is functioning in a ActiveSecondary role.
  * CopyQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * IsInBuild `boolean`: Value that indicates whether the replica is currently being built.
  * LastAcknowledgementSentTimeUtc `string`: The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator.
  * LastCopyOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a copy operation was received from the primary.
  * LastReplicationOperationReceivedTimeUtc `string`: The last time-stamp (UTC) at which a replication operation was received from the primary.
  * ReplicationQueueStatus [ReplicatorQueueStatus](#replicatorqueuestatus)
  * Kind **required** [ReplicaRole](#replicarole)

### SecretKind
* SecretKind `string` (values: inlinedValue): Describes the kind of secret.

### SecretResourceDescription
* SecretResourceDescription `object`: This type describes a secret resource.
  * name **required** [SecretResourceName](#secretresourcename)
  * properties **required** [SecretResourceProperties](#secretresourceproperties)

### SecretResourceName
* SecretResourceName `string`: Name of the Secret resource.

### SecretResourceProperties
* SecretResourceProperties `object`: Describes the properties of a secret resource.
  * contentType `string`: The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
  * description `string`: User readable description of the secret.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the secret.
  * kind **required** [SecretKind](#secretkind)

### SecretResourcePropertiesBase
* SecretResourcePropertiesBase `object`: This type describes the properties of a secret resource, including its kind.
  * kind **required** [SecretKind](#secretkind)

### SecretValue
* SecretValue `object`: This type represents the unencrypted value of the secret.
  * value `string`: The actual value of the secret.

### SecretValueProperties
* SecretValueProperties `object`: This type describes properties of secret value resource.
  * value `string`: The actual value of the secret.

### SecretValueResourceDescription
* SecretValueResourceDescription `object`: This type describes a value of a secret resource. The name of this resource is the version identifier corresponding to this secret value.
  * name **required** `string`: Version identifier of the secret value.
  * properties **required** [SecretValueResourceProperties](#secretvalueresourceproperties)

### SecretValueResourceProperties
* SecretValueResourceProperties: This type describes properties of a secret value resource.
  * value `string`: The actual value of the secret.

### SeedNodeSafetyCheck
* SeedNodeSafetyCheck: Represents a safety check for the seed nodes being performed by service fabric before continuing with node level operations.
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### SelectedPartition
* SelectedPartition `object`: This class returns information about the partition that the user-induced operation acted upon.
  * PartitionId [PartitionId](#partitionid)
  * ServiceName [ServiceName](#servicename)

### ServiceBackupConfigurationInfo
* ServiceBackupConfigurationInfo `object`: Backup configuration information for a specific Service Fabric service specifying what backup policy is being applied and suspend description, if any.
  * ServiceName [ServiceName](#servicename)
  * Kind **required** [BackupEntityKind](#backupentitykind)
  * PolicyInheritedFrom [BackupPolicyScope](#backuppolicyscope)
  * PolicyName `string`: The name of the backup policy which is applicable to this Service Fabric application or service or partition.
  * SuspensionInfo [BackupSuspensionInfo](#backupsuspensioninfo)

### ServiceBackupEntity
* ServiceBackupEntity `object`: Identifies the Service Fabric stateful service which is being backed up.
  * ServiceName [ServiceName](#servicename)
  * EntityKind **required** [BackupEntityKind](#backupentitykind)

### ServiceCorrelationDescription
* ServiceCorrelationDescription `object`: Creates a particular correlation between services.
  * Scheme **required** [ServiceCorrelationScheme](#servicecorrelationscheme)
  * ServiceName **required** [ServiceName](#servicename)

### ServiceCorrelationScheme
* ServiceCorrelationScheme `string` (values: Invalid, Affinity, AlignedAffinity, NonAlignedAffinity): The service correlation scheme.

### ServiceCreatedEvent
* ServiceCreatedEvent `object`: Service Created event.
  * ApplicationName **required** `string`: Application name.
  * ApplicationTypeName **required** `string`: Application type name.
  * IsStateful **required** `boolean`: Indicates if Service is stateful.
  * MinReplicaSetSize **required** `integer`: Minimum size of replicas set.
  * PartitionCount **required** `integer`: Number of partitions.
  * PartitionId **required** [PartitionId](#partitionid)
  * ServiceInstance **required** `integer`: Id of Service instance.
  * ServicePackageVersion **required** `string`: Version of Service package.
  * ServiceTypeName **required** `string`: Service type name.
  * TargetReplicaSetSize **required** `integer`: Size of target replicas set.
  * ServiceId **required** [ServiceId](#serviceid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ServiceDeletedEvent
* ServiceDeletedEvent `object`: Service Deleted event.
  * ApplicationName **required** `string`: Application name.
  * ApplicationTypeName **required** `string`: Application type name.
  * IsStateful **required** `boolean`: Indicates if Service is stateful.
  * MinReplicaSetSize **required** `integer`: Minimum size of replicas set.
  * PartitionCount **required** `integer`: Number of partitions.
  * ServiceInstance **required** `integer`: Id of Service instance.
  * ServicePackageVersion **required** `string`: Version of Service package.
  * ServiceTypeName **required** `string`: Service type name.
  * TargetReplicaSetSize **required** `integer`: Size of target replicas set.
  * ServiceId **required** [ServiceId](#serviceid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ServiceDescription
* ServiceDescription `object`: A ServiceDescription contains all of the information necessary to create a service.
  * ApplicationName [ApplicationName](#applicationname)
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * InitializationData [ByteArray](#bytearray)
  * IsDefaultMoveCostSpecified `boolean`: Indicates if the DefaultMoveCost property is specified.
  * PartitionDescription **required** [PartitionSchemeDescription](#partitionschemedescription)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ScalingPolicies [ScalingPolicyDescriptionList](#scalingpolicydescriptionlist)
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * ServiceName **required** [ServiceName](#servicename)
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)
  * ServiceTypeName **required** [ServiceTypeName](#servicetypename)

### ServiceEndpointRole
* ServiceEndpointRole `string` (values: Invalid, Stateless, StatefulPrimary, StatefulSecondary): The role of the replica where the endpoint is reported.

### ServiceEvent
* ServiceEvent `object`: Represents the base for all Service Events.
  * ServiceId **required** [ServiceId](#serviceid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ServiceEventList
* ServiceEventList `array`: A list of ServiceEvent objects.
  * items [ServiceEvent](#serviceevent)

### ServiceFromTemplateDescription
* ServiceFromTemplateDescription `object`: Defines description for creating a Service Fabric service from a template defined in the application manifest.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * InitializationData [ByteArray](#bytearray)
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceName **required** [ServiceName](#servicename)
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServiceTypeName **required** [ServiceTypeName](#servicetypename)

### ServiceHealth
* ServiceHealth `object`: Information about the health of a Service Fabric service.
  * Name [ServiceName](#servicename)
  * PartitionHealthStates `array`: The list of partition health states associated with the service.
    * items [PartitionHealthState](#partitionhealthstate)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### ServiceHealthEvaluation
* ServiceHealthEvaluation `object`: Represents health evaluation for a service, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.
  * ServiceName [ServiceName](#servicename)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### ServiceHealthReportExpiredEvent
* ServiceHealthReportExpiredEvent `object`: Service Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * InstanceId **required** `integer`: Id of Service instance.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ServiceId **required** [ServiceId](#serviceid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ServiceHealthState
* ServiceHealthState `object`: Represents the health state of a service, which contains the service identifier and its aggregated health state.
  * ServiceName [ServiceName](#servicename)
  * AggregatedHealthState [HealthState](#healthstate)

### ServiceHealthStateChunk
* ServiceHealthStateChunk `object`: Represents the health state chunk of a service, which contains the service name, its aggregated health state and any partitions that respect the filters in the cluster health chunk query description.
  * PartitionHealthStateChunks [PartitionHealthStateChunkList](#partitionhealthstatechunklist)
  * ServiceName [ServiceName](#servicename)
  * HealthState [HealthState](#healthstate)

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
* ServiceId `string`: The identity of the service. This ID is an encoded representation of the service name. This is used in the REST APIs to identify the service resource.

### ServiceIdentity
* ServiceIdentity `object`: Map service identity friendly name to an application identity.
  * identityRef `string`: The application identity name.
  * name `string`: The identity friendly name.

### ServiceInfo
* ServiceInfo `object`: Information about a Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * Id [ServiceId](#serviceid)
  * IsServiceGroup `boolean`: Whether the service is in a service group.
  * ManifestVersion `string`: The version of the service manifest.
  * Name [ServiceName](#servicename)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceStatus [ServiceStatus](#servicestatus)
  * TypeName [ServiceTypeName](#servicetypename)

### ServiceKind
* ServiceKind `string` (values: Invalid, Stateless, Stateful): The kind of service (Stateless or Stateful).

### ServiceLoadMetricDescription
* ServiceLoadMetricDescription `object`: Specifies a metric to load balance a service during runtime.
  * DefaultLoad `integer`: Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
  * Name **required** `string`: The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case-sensitive.
  * PrimaryDefaultLoad `integer`: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
  * SecondaryDefaultLoad `integer`: Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
  * Weight [ServiceLoadMetricWeight](#serviceloadmetricweight)

### ServiceLoadMetricWeight
* ServiceLoadMetricWeight `string` (values: Zero, Low, Medium, High): Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight.

### ServiceLoadMetricsList
* ServiceLoadMetricsList `array`: The service load metrics is given as an array of ServiceLoadMetricDescription objects.
  * items [ServiceLoadMetricDescription](#serviceloadmetricdescription)

### ServiceManifestName
* ServiceManifestName `string`: The name of the service manifest.

### ServiceName
* ServiceName `string`: The full name of the service with 'fabric:' URI scheme.

### ServiceNameInfo
* ServiceNameInfo `object`: Information about the service name.
  * Id [ServiceId](#serviceid)
  * Name [ServiceName](#servicename)

### ServiceNewHealthReportEvent
* ServiceNewHealthReportEvent `object`: Service Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * InstanceId **required** `integer`: Id of Service instance.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * ServiceId **required** [ServiceId](#serviceid)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### ServiceOperationName
* ServiceOperationName `string` (values: Unknown, None, Open, ChangeRole, Close, Abort): Specifies the current active life-cycle operation on a stateful service replica or stateless service instance.

### ServicePackageActivationId
* ServicePackageActivationId `string`: The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service

### ServicePackageActivationMode
* ServicePackageActivationMode `string` (values: SharedProcess, ExclusiveProcess): The activation mode of service package to be used for a Service Fabric service. This is specified at the time of creating the Service.

### ServicePartitionInfo
* ServicePartitionInfo `object`: Information about a partition of a Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * PartitionInformation [PartitionInformation](#partitioninformation)
  * PartitionStatus [ServicePartitionStatus](#servicepartitionstatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### ServicePartitionKind
* ServicePartitionKind `string` (values: Invalid, Singleton, Int64Range, Named): The kind of partitioning scheme used to partition the service.

### ServicePartitionStatus
* ServicePartitionStatus `string` (values: Invalid, Ready, NotReady, InQuorumLoss, Reconfiguring, Deleting): The status of the service fabric service partition.

### ServicePlacementInvalidDomainPolicyDescription
* ServicePlacementInvalidDomainPolicyDescription `object`: Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
  * DomainName `string`: The name of the domain that should not be used for placement.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

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
* ServicePlacementPolicyType `string` (values: Invalid, InvalidDomain, RequireDomain, PreferPrimaryDomain, RequireDomainDistribution, NonPartiallyPlaceService): The type of placement policy for a service fabric service. Following are the possible values.

### ServicePlacementPreferPrimaryDomainPolicyDescription
* ServicePlacementPreferPrimaryDomainPolicyDescription `object`: Describes the policy to be used for placement of a Service Fabric service where the service's Primary replicas should optimally be placed in a particular domain.
  * DomainName `string`: The name of the domain that should used for placement as per this policy.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

### ServicePlacementRequireDomainDistributionPolicyDescription
* ServicePlacementRequireDomainDistributionPolicyDescription `object`: Describes the policy to be used for placement of a Service Fabric service where two replicas from the same partition should never be placed in the same fault or upgrade domain.
  * DomainName `string`: The name of the domain that should used for placement as per this policy.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

### ServicePlacementRequiredDomainPolicyDescription
* ServicePlacementRequiredDomainPolicyDescription `object`: Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain
  * DomainName `string`: The name of the domain that should used for placement as per this policy.
  * Type **required** [ServicePlacementPolicyType](#serviceplacementpolicytype)

### ServiceProperties
* ServiceProperties `object`: Describes properties of a service resource.
  * autoScalingPolicies `array`: Auto scaling policies
    * items [AutoScalingPolicy](#autoscalingpolicy)
  * description `string`: User readable description of the service.
  * healthState [HealthState](#healthstate)
  * identityRefs `array`: The service identity list.
    * items [ServiceIdentity](#serviceidentity)
  * replicaCount `integer`: The number of replicas of the service to create. Defaults to 1 if not specified.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the service.
  * unhealthyEvaluation `string`: When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.

### ServiceReplicaDescription
* ServiceReplicaDescription `object`: Describes a replica of a service resource.
  * replicaName **required** `string`: Name of the replica.
  * codePackages **required** `array`: Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
    * items [ContainerCodePackageProperties](#containercodepackageproperties)
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * networkRefs `array`: The names of the private networks that this service needs to be part of.
    * items [NetworkRef](#networkref)
  * osType **required** [OperatingSystemType](#operatingsystemtype)

### ServiceReplicaProperties
* ServiceReplicaProperties `object`: Describes the properties of a service replica.
  * codePackages **required** `array`: Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
    * items [ContainerCodePackageProperties](#containercodepackageproperties)
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * networkRefs `array`: The names of the private networks that this service needs to be part of.
    * items [NetworkRef](#networkref)
  * osType **required** [OperatingSystemType](#operatingsystemtype)

### ServiceResourceDescription
* ServiceResourceDescription `object`: This type describes a service resource.
  * name **required** [ServiceResourceName](#serviceresourcename)
  * properties **required** [ServiceResourceProperties](#serviceresourceproperties)

### ServiceResourceName
* ServiceResourceName `string`: Name of the Service resource.

### ServiceResourceProperties
* ServiceResourceProperties: This type describes properties of a service resource.
  * codePackages **required** `array`: Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
    * items [ContainerCodePackageProperties](#containercodepackageproperties)
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * networkRefs `array`: The names of the private networks that this service needs to be part of.
    * items [NetworkRef](#networkref)
  * osType **required** [OperatingSystemType](#operatingsystemtype)
  * autoScalingPolicies `array`: Auto scaling policies
    * items [AutoScalingPolicy](#autoscalingpolicy)
  * description `string`: User readable description of the service.
  * healthState [HealthState](#healthstate)
  * identityRefs `array`: The service identity list.
    * items [ServiceIdentity](#serviceidentity)
  * replicaCount `integer`: The number of replicas of the service to create. Defaults to 1 if not specified.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the service.
  * unhealthyEvaluation `string`: When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.

### ServiceStatus
* ServiceStatus `string` (values: Unknown, Active, Upgrading, Deleting, Creating, Failed): The status of the application.

### ServiceTypeDescription
* ServiceTypeDescription `object`: Describes a service type defined in the service manifest of a provisioned application type. The properties the ones defined in the service manifest.
  * Extensions [ServiceTypeExtensionDescriptionList](#servicetypeextensiondescriptionlist)
  * IsStateful `boolean`: Indicates whether the service type is a stateful service type or a stateless service type. This property is true if the service type is a stateful service type, false otherwise.
  * Kind **required** [ServiceKind](#servicekind)
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraint to be used when instantiating this service in a Service Fabric cluster.
  * ServicePlacementPolicies [ServicePlacementPolicyDescriptionList](#serviceplacementpolicydescriptionlist)
  * ServiceTypeName [ServiceTypeName](#servicetypename)

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
  * MaxPercentUnhealthyServices `integer`: The maximum allowed percentage of unhealthy services. Allowed values are Byte values from zero to 100.

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
  * ServiceManifestName [ServiceManifestName](#servicemanifestname)
  * ServiceManifestVersion `string`: The version of the service manifest in which this service type is defined.
  * ServiceTypeDescription [ServiceTypeDescription](#servicetypedescription)

### ServiceTypeInfoList
* ServiceTypeInfoList `array`: List of service type information.
  * items [ServiceTypeInfo](#servicetypeinfo)

### ServiceTypeManifest
* ServiceTypeManifest `object`: Contains the manifest describing a service type registered as part of an application in a Service Fabric cluster.
  * Manifest `string`: The XML manifest as a string.

### ServiceTypeName
* ServiceTypeName `string`: Name of the service type as specified in the service manifest.

### ServiceTypeRegistrationStatus
* ServiceTypeRegistrationStatus `string` (values: Invalid, Disabled, Enabled, Registered): The status of the service type registration on the node.

### ServiceUpdateDescription
* ServiceUpdateDescription `object`: A ServiceUpdateDescription contains all of the information necessary to update a service.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * Flags `string`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ScalingPolicies [ScalingPolicyDescriptionList](#scalingpolicydescriptionlist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### ServicesHealthEvaluation
* ServicesHealthEvaluation `object`: Represents health evaluation for services of a certain service type belonging to an application, containing health evaluations for each unhealthy service that impacted current aggregated health state. Can be returned when evaluating application health and the aggregated health state is either Error or Warning.
  * MaxPercentUnhealthyServices `integer`: Maximum allowed percentage of unhealthy services from the ServiceTypeHealthPolicy.
  * ServiceTypeName `string`: Name of the service type of the services.
  * TotalCount `integer`: Total number of services of the current service type in the application from the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### Setting
* Setting `object`: Describes a setting for the container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
  * name `string`: The name of the setting.
  * value `string`: The value of the setting.

### SingletonPartitionInformation
* SingletonPartitionInformation: Information about a partition that is singleton. The services with singleton partitioning scheme are effectively non-partitioned. They only have one partition.
  * Id [PartitionId](#partitionid)
  * ServicePartitionKind **required** [ServicePartitionKind](#servicepartitionkind)

### SingletonPartitionSchemeDescription
* SingletonPartitionSchemeDescription: Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### StartClusterUpgradeDescription
* StartClusterUpgradeDescription `object`: Describes the parameters for starting a cluster upgrade.
  * ApplicationHealthPolicyMap [ApplicationHealthPolicies](#applicationhealthpolicies)
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * ClusterUpgradeHealthPolicy [ClusterUpgradeHealthPolicyObject](#clusterupgradehealthpolicyobject)
  * CodeVersion `string`: The cluster code version.
  * ConfigVersion `string`: The cluster configuration version.
  * EnableDeltaHealthEvaluation `boolean`: When true, enables delta health evaluation rather than absolute health evaluation after completion of each upgrade domain.
  * ForceRestart [ForceRestart](#forcerestart)
  * MonitoringPolicy [MonitoringPolicyDescription](#monitoringpolicydescription)
  * RollingUpgradeMode [UpgradeMode](#upgrademode)
  * SortOrder [UpgradeSortOrder](#upgradesortorder)
  * UpgradeKind [UpgradeKind](#upgradekind)
  * UpgradeReplicaSetCheckTimeoutInSeconds [UpgradeReplicaSetCheckTimeout](#upgradereplicasetchecktimeout)

### StartedChaosEvent
* StartedChaosEvent `object`: Describes a Chaos event that gets generated when Chaos is started.
  * ChaosParameters [ChaosParameters](#chaosparameters)
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.

### StatefulReplicaHealthReportExpiredEvent
* StatefulReplicaHealthReportExpiredEvent `object`: Stateful Replica Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * ReplicaInstanceId **required** `integer`: Id of Replica instance.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### StatefulReplicaNewHealthReportEvent
* StatefulReplicaNewHealthReportEvent `object`: Stateful Replica Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * ReplicaInstanceId **required** `integer`: Id of Replica instance.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### StatefulServiceDescription
* StatefulServiceDescription `object`: Describes a stateful service.
  * Flags `integer`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * HasPersistedState **required** `boolean`: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
  * MinReplicaSetSize **required** `integer`: The minimum replica set size as a number.
  * QuorumLossWaitDurationSeconds `integer`: The maximum duration, in seconds, for which a partition is allowed to be in a state of quorum loss.
  * ReplicaRestartWaitDurationSeconds `integer`: The duration, in seconds, between when a replica goes down and when a new replica is created.
  * StandByReplicaKeepDurationSeconds `integer`: The definition on how long StandBy replicas should be maintained before being removed.
  * TargetReplicaSetSize **required** `integer`: The target replica set size as a number.
  * ApplicationName [ApplicationName](#applicationname)
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * InitializationData [ByteArray](#bytearray)
  * IsDefaultMoveCostSpecified `boolean`: Indicates if the DefaultMoveCost property is specified.
  * PartitionDescription **required** [PartitionSchemeDescription](#partitionschemedescription)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ScalingPolicies [ScalingPolicyDescriptionList](#scalingpolicydescriptionlist)
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * ServiceName **required** [ServiceName](#servicename)
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)
  * ServiceTypeName **required** [ServiceTypeName](#servicetypename)

### StatefulServiceInfo
* StatefulServiceInfo `object`: Information about a stateful Service Fabric service.
  * HasPersistedState `boolean`: Whether the service has persisted state.
  * HealthState [HealthState](#healthstate)
  * Id [ServiceId](#serviceid)
  * IsServiceGroup `boolean`: Whether the service is in a service group.
  * ManifestVersion `string`: The version of the service manifest.
  * Name [ServiceName](#servicename)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceStatus [ServiceStatus](#servicestatus)
  * TypeName [ServiceTypeName](#servicetypename)

### StatefulServicePartitionInfo
* StatefulServicePartitionInfo `object`: Information about a partition of a stateful Service Fabric service..
  * LastQuorumLossDuration `string`: The duration for which this partition was in quorum loss. If the partition is currently in quorum loss, it returns the duration since it has been in that state. This field is using ISO8601 format for specifying the duration.
  * MinReplicaSetSize `integer`: The minimum replica set size as a number.
  * PrimaryEpoch [Epoch](#epoch)
  * TargetReplicaSetSize `integer`: The target replica set size as a number.
  * HealthState [HealthState](#healthstate)
  * PartitionInformation [PartitionInformation](#partitioninformation)
  * PartitionStatus [ServicePartitionStatus](#servicepartitionstatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### StatefulServiceReplicaHealth
* StatefulServiceReplicaHealth `object`: Represents the health of the stateful service replica.
  * ReplicaId [ReplicaId](#replicaid)
  * PartitionId [PartitionId](#partitionid)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### StatefulServiceReplicaHealthState
* StatefulServiceReplicaHealthState `object`: Represents the health state of the stateful service replica, which contains the replica ID and the aggregated health state.
  * ReplicaId [ReplicaId](#replicaid)
  * PartitionId [PartitionId](#partitionid)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * AggregatedHealthState [HealthState](#healthstate)

### StatefulServiceReplicaInfo
* StatefulServiceReplicaInfo `object`: Represents a stateful service replica. This includes information about the identity, role, status, health, node name, uptime, and other details about the replica.
  * ReplicaId [ReplicaId](#replicaid)
  * ReplicaRole [ReplicaRole](#replicarole)
  * Address `string`: The address the replica is listening on.
  * HealthState [HealthState](#healthstate)
  * LastInBuildDurationInSeconds `string`: The last in build duration of the replica in seconds.
  * NodeName [NodeName](#nodename)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

### StatefulServiceTypeDescription
* StatefulServiceTypeDescription `object`: Describes a stateful service type defined in the service manifest of a provisioned application type.
  * HasPersistedState `boolean`: A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
  * Extensions [ServiceTypeExtensionDescriptionList](#servicetypeextensiondescriptionlist)
  * IsStateful `boolean`: Indicates whether the service type is a stateful service type or a stateless service type. This property is true if the service type is a stateful service type, false otherwise.
  * Kind **required** [ServiceKind](#servicekind)
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraint to be used when instantiating this service in a Service Fabric cluster.
  * ServicePlacementPolicies [ServicePlacementPolicyDescriptionList](#serviceplacementpolicydescriptionlist)
  * ServiceTypeName [ServiceTypeName](#servicetypename)

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
  * ScalingPolicies [ScalingPolicyDescriptionList](#scalingpolicydescriptionlist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StatelessReplicaHealthReportExpiredEvent
* StatelessReplicaHealthReportExpiredEvent `object`: Stateless Replica Health Report Expired event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### StatelessReplicaNewHealthReportEvent
* StatelessReplicaNewHealthReportEvent `object`: Stateless Replica Health Report Created event.
  * Description **required** `string`: Description of report.
  * HealthState **required** `string`: Describes the property health state.
  * Property **required** `string`: Describes the property.
  * RemoveWhenExpired **required** `boolean`: Indicates the removal when it expires.
  * SequenceNumber **required** `integer`: Sequence number of report.
  * SourceId **required** `string`: Id of report source.
  * SourceUtcTimestamp **required** `string`: Source time.
  * TimeToLiveMs **required** `integer`: Time to live in milli-seconds.
  * PartitionId **required** [PartitionId](#partitionid)
  * ReplicaId **required** [ReplicaId_Integer](#replicaid_integer)
  * Category `string`: The category of event.
  * EventInstanceId **required** `string`: The identifier for the FabricEvent instance.
  * HasCorrelatedEvents `boolean`: Shows there is existing related events available.
  * Kind **required** [FabricEventKind](#fabriceventkind)
  * TimeStamp **required** `string`: The time event was logged.

### StatelessServiceDescription
* StatelessServiceDescription `object`: Describes a stateless service.
  * InstanceCount **required** `integer`: The instance count.
  * ApplicationName [ApplicationName](#applicationname)
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * InitializationData [ByteArray](#bytearray)
  * IsDefaultMoveCostSpecified `boolean`: Indicates if the DefaultMoveCost property is specified.
  * PartitionDescription **required** [PartitionSchemeDescription](#partitionschemedescription)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ScalingPolicies [ScalingPolicyDescriptionList](#scalingpolicydescriptionlist)
  * ServiceDnsName `string`: The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster.
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceLoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * ServiceName **required** [ServiceName](#servicename)
  * ServicePackageActivationMode [ServicePackageActivationMode](#servicepackageactivationmode)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)
  * ServiceTypeName **required** [ServiceTypeName](#servicetypename)

### StatelessServiceInfo
* StatelessServiceInfo: Information about a stateless Service Fabric service.
  * HealthState [HealthState](#healthstate)
  * Id [ServiceId](#serviceid)
  * IsServiceGroup `boolean`: Whether the service is in a service group.
  * ManifestVersion `string`: The version of the service manifest.
  * Name [ServiceName](#servicename)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServiceStatus [ServiceStatus](#servicestatus)
  * TypeName [ServiceTypeName](#servicetypename)

### StatelessServiceInstanceHealth
* StatelessServiceInstanceHealth `object`: Represents the health of the stateless service instance.
  * InstanceId [InstanceId](#instanceid)
  * PartitionId [PartitionId](#partitionid)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * AggregatedHealthState [HealthState](#healthstate)
  * HealthEvents `array`: The list of health events reported on the entity.
    * items [HealthEvent](#healthevent)
  * HealthStatistics [HealthStatistics](#healthstatistics)
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)

### StatelessServiceInstanceHealthState
* StatelessServiceInstanceHealthState `object`: Represents the health state of the stateless service instance, which contains the instance ID and the aggregated health state.
  * ReplicaId [ReplicaId](#replicaid)
  * PartitionId [PartitionId](#partitionid)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * AggregatedHealthState [HealthState](#healthstate)

### StatelessServiceInstanceInfo
* StatelessServiceInstanceInfo `object`: Represents a stateless service instance. This includes information about the identity, status, health, node name, uptime, and other details about the instance.
  * InstanceId [InstanceId](#instanceid)
  * Address `string`: The address the replica is listening on.
  * HealthState [HealthState](#healthstate)
  * LastInBuildDurationInSeconds `string`: The last in build duration of the replica in seconds.
  * NodeName [NodeName](#nodename)
  * ReplicaStatus [ReplicaStatus](#replicastatus)
  * ServiceKind **required** [ServiceKind](#servicekind)

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
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraint to be used when instantiating this service in a Service Fabric cluster.
  * ServicePlacementPolicies [ServicePlacementPolicyDescriptionList](#serviceplacementpolicydescriptionlist)
  * ServiceTypeName [ServiceTypeName](#servicetypename)

### StatelessServiceUpdateDescription
* StatelessServiceUpdateDescription `object`: Describes an update for a stateless service.
  * InstanceCount `integer`: The instance count.
  * CorrelationScheme [CorrelationSchemeList](#correlationschemelist)
  * DefaultMoveCost [MoveCost](#movecost)
  * Flags `string`: Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified.
  * LoadMetrics [ServiceLoadMetricsList](#serviceloadmetricslist)
  * PlacementConstraints `string`: The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
  * ScalingPolicies [ScalingPolicyDescriptionList](#scalingpolicydescriptionlist)
  * ServiceKind **required** [ServiceKind](#servicekind)
  * ServicePlacementPolicies [ServicePlacementPoliciesList](#serviceplacementpolicieslist)

### StoppedChaosEvent
* StoppedChaosEvent `object`: Describes a Chaos event that gets generated when Chaos stops because either the user issued a stop or the time to run was up.
  * Reason `string`: Describes why Chaos stopped. Chaos can stop because of StopChaos API call or the timeToRun provided in ChaosParameters is over.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.

### StringPropertyValue
* StringPropertyValue `object`: Describes a Service Fabric property value of type String.
  * Data **required** `string`: The data of the property value.
  * Kind **required** [PropertyValueKind](#propertyvaluekind)

### SuccessfulPropertyBatchInfo
* SuccessfulPropertyBatchInfo `object`: Derived from PropertyBatchInfo. Represents the property batch succeeding. Contains the results of any "Get" operations in the batch.
  * Kind **required** [PropertyBatchInfoKind](#propertybatchinfokind)

### SystemApplicationHealthEvaluation
* SystemApplicationHealthEvaluation `object`: Represents health evaluation for the fabric:/System application, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state of the cluster is either Error or Warning.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### TargetApplicationName
* TargetApplicationName `string`: The name of the target application, including the 'fabric:' URI scheme.

### TargetApplicationTypeVersion
* TargetApplicationTypeVersion `string`: The target application type version (found in the application manifest) for the application upgrade.

### TargetDeploymentName
* TargetDeploymentName `string`: The name of the target deployment.

### TcpConfig
* TcpConfig `object`: Describes the tcp configuration for external connectivity for this network.
  * destination **required** [GatewayDestination](#gatewaydestination)
  * name **required** `string`: tcp gateway config name.
  * port **required** `integer`: Specifies the port at which the service endpoint below needs to be exposed.

### TestErrorChaosEvent
* TestErrorChaosEvent `object`: Describes a Chaos event that gets generated when an unexpected event occurs in the Chaos engine.
  * Reason `string`: Describes why TestErrorChaosEvent was generated. For example, Chaos tries to fault a partition but finds that the partition is no longer fault tolerant, then a TestErrorEvent gets generated with the reason stating that the partition is not fault tolerant.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.

### TimeBasedBackupScheduleDescription
* TimeBasedBackupScheduleDescription `object`: Describes the time based backup schedule.
  * RunDays [DayOfWeekList](#dayofweeklist)
  * RunTimes **required** [TimeList](#timelist)
  * ScheduleFrequencyType **required** [BackupScheduleFrequencyType](#backupschedulefrequencytype)
  * ScheduleKind **required** [BackupScheduleKind](#backupschedulekind)

### TimeList
* TimeList `array`: Represents the list of exact time during the day in ISO8601 format. Like '19:00:00' will represent '7PM' during the day. Date specified along with time will be ignored.
  * items `string`

### TimeOfDay
* TimeOfDay `object`: Defines an hour and minute of the day specified in 24 hour time.
  * Hour `integer`: Represents the hour of the day. Value must be between 0 and 23 inclusive.
  * Minute `integer`: Represents the minute of the hour. Value must be between 0 to 59 inclusive.

### TimeRange
* TimeRange `object`: Defines a time range in a 24 hour day specified by a start and end time.
  * EndTime [TimeOfDay](#timeofday)
  * StartTime [TimeOfDay](#timeofday)

### UnhealthyEvaluations
* UnhealthyEvaluations `array`: List of health evaluations that resulted in the current aggregated health state.
  * items [HealthEvaluationWrapper](#healthevaluationwrapper)

### UniformInt64RangePartitionSchemeDescription
* UniformInt64RangePartitionSchemeDescription `object`: Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
  * Count **required** `integer`: The number of partitions.
  * HighKey **required** `string`: String indicating the upper bound of the partition key range that
  * LowKey **required** `string`: String indicating the lower bound of the partition key range that
  * PartitionScheme **required** [PartitionScheme](#partitionscheme)

### UnplacedReplicaInformation
* UnplacedReplicaInformation `object`: Contains information for an unplaced replica.
  * PartitionId [PartitionId](#partitionid)
  * ServiceName [ServiceName](#servicename)
  * UnplacedReplicaDetails `array`: List of reasons due to which a replica cannot be placed.
    * items `string`

### UnprovisionApplicationTypeDescriptionInfo
* UnprovisionApplicationTypeDescriptionInfo `object`: Describes the operation to unregister or unprovision an application type and its version that was registered with the Service Fabric.
  * ApplicationTypeVersion **required** [ApplicationTypeVersion](#applicationtypeversion)
  * Async `boolean`: The flag indicating whether or not unprovision should occur asynchronously. When set to true, the unprovision operation returns when the request is accepted by the system, and the unprovision operation continues without any timeout limit. The default value is false. However, we recommend setting it to true for large application packages that were provisioned.

### UnprovisionFabricDescription
* UnprovisionFabricDescription `object`: Describes the parameters for unprovisioning a cluster.
  * CodeVersion `string`: The cluster code package version.
  * ConfigVersion `string`: The cluster manifest version.

### UpdateClusterUpgradeDescription
* UpdateClusterUpgradeDescription `object`: Parameters for updating a cluster upgrade.
  * ApplicationHealthPolicyMap [ApplicationHealthPolicies](#applicationhealthpolicies)
  * ClusterHealthPolicy [ClusterHealthPolicy](#clusterhealthpolicy)
  * ClusterUpgradeHealthPolicy [ClusterUpgradeHealthPolicyObject](#clusterupgradehealthpolicyobject)
  * EnableDeltaHealthEvaluation [DeltaHealthEvaluationBool](#deltahealthevaluationbool)
  * UpdateDescription [RollingUpgradeUpdateDescription](#rollingupgradeupdatedescription)
  * UpgradeKind [UpgradeType](#upgradetype)

### UpgradeDomainDeltaNodesCheckHealthEvaluation
* UpgradeDomainDeltaNodesCheckHealthEvaluation `object`: Represents health evaluation for delta unhealthy cluster nodes in an upgrade domain, containing health evaluations for each unhealthy node that impacted current aggregated health state.
  * BaselineErrorCount `integer`: Number of upgrade domain nodes with aggregated heath state Error in the health store at the beginning of the cluster upgrade.
  * BaselineTotalCount `integer`: Total number of upgrade domain nodes in the health store at the beginning of the cluster upgrade.
  * MaxPercentDeltaUnhealthyNodes `integer`: Maximum allowed percentage of upgrade domain delta unhealthy nodes from the ClusterUpgradeHealthPolicy.
  * TotalCount `integer`: Total number of upgrade domain nodes in the health store.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * UpgradeDomainName `string`: Name of the upgrade domain where nodes health is currently evaluated.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

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
* UpgradeDomainNodesHealthEvaluation `object`: Represents health evaluation for cluster nodes in an upgrade domain, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned when evaluating cluster health during cluster upgrade and the aggregated health state is either Error or Warning.
  * MaxPercentUnhealthyNodes `integer`: Maximum allowed percentage of unhealthy nodes from the ClusterHealthPolicy.
  * TotalCount `integer`: Total number of nodes in the current upgrade domain.
  * UnhealthyEvaluations [UnhealthyEvaluations](#unhealthyevaluations)
  * UpgradeDomainName `string`: Name of the upgrade domain where nodes health is currently evaluated.
  * AggregatedHealthState [HealthState](#healthstate)
  * Description `string`: Description of the health evaluation, which represents a summary of the evaluation process.
  * Kind **required** [HealthEvaluationKind](#healthevaluationkind)

### UpgradeDomainState
* UpgradeDomainState `string` (values: Invalid, Pending, InProgress, Completed): The state of the upgrade domain.

### UpgradeDomainTimeout
* UpgradeDomainTimeout `string`: The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### UpgradeDuration
* UpgradeDuration `string`: The estimated amount of time that the overall upgrade elapsed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### UpgradeDurationString
* UpgradeDurationString `string`: The estimated elapsed time spent processing the current overall upgrade.

### UpgradeFailureTimeUTCString
* UpgradeFailureTimeUTCString `string`: The failure time of the upgrade in UTC.

### UpgradeKind
* UpgradeKind `string` (values: Invalid, Rolling): The kind of upgrade out of the following possible values.

### UpgradeMode
* UpgradeMode `string` (values: Invalid, UnmonitoredAuto, UnmonitoredManual, Monitored): The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored.

### UpgradeOrchestrationServiceState
* UpgradeOrchestrationServiceState `object`: Service state of Service Fabric Upgrade Orchestration Service.
  * ServiceState `string`: The state of Service Fabric Upgrade Orchestration Service.

### UpgradeOrchestrationServiceStateSummary
* UpgradeOrchestrationServiceStateSummary `object`: Service state summary of Service Fabric Upgrade Orchestration Service.
  * CurrentCodeVersion `string`: The current code version of the cluster.
  * CurrentManifestVersion `string`: The current manifest version of the cluster.
  * PendingUpgradeType `string`: The type of the pending upgrade of the cluster.
  * TargetCodeVersion `string`: The target code version of  the cluster.
  * TargetManifestVersion `string`: The target manifest version of the cluster.

### UpgradeReplicaSetCheckTimeout
* UpgradeReplicaSetCheckTimeout `integer`: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).

### UpgradeSortOrder
* UpgradeSortOrder `string` (values: Invalid, Default, Numeric, Lexicographical, ReverseNumeric, ReverseLexicographical): Defines the order in which an upgrade proceeds through the cluster.

### UpgradeStartTimeUTCString
* UpgradeStartTimeUTCString `string`: The start time of the upgrade in UTC.

### UpgradeState
* UpgradeState `string` (values: Invalid, RollingBackInProgress, RollingBackCompleted, RollingForwardPending, RollingForwardInProgress, RollingForwardCompleted, Failed): The state of the upgrade domain.

### UpgradeTimeout
* UpgradeTimeout `string`: The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.

### UpgradeType
* UpgradeType `string` (values: Invalid, Rolling, Rolling_ForceRestart): The type of upgrade out of the following possible values.

### UploadChunkRange
* UploadChunkRange `object`: Information about which portion of the file to upload.
  * EndPosition `string`: The end position of the portion of the file. It's represented by the number of bytes.
  * StartPosition `string`: The start position of the portion of the file. It's represented by the number of bytes.

### UploadSession
* UploadSession `object`: Information about a image store upload session
  * UploadSessions `array`: When querying upload session by upload session ID, the result contains only one upload session. When querying upload session by image store relative path, the result might contain multiple upload sessions.
    * items [UploadSessionInfo](#uploadsessioninfo)

### UploadSessionInfo
* UploadSessionInfo `object`: Information about an image store upload session. A session is associated with a relative path in the image store.
  * ExpectedRanges `array`: List of chunk ranges that image store has not received yet.
    * items [UploadChunkRange](#uploadchunkrange)
  * FileSize `string`: The size in bytes of the uploading file.
  * ModifiedDate `string`: The date and time when the upload session was last modified.
  * SessionId `string`: A unique ID of the upload session. A session ID can be reused only if the session was committed or removed.
  * StoreRelativePath `string`: The remote location within image store. This path is relative to the image store root.

### UserAssignedIdentityMap
* UserAssignedIdentityMap `object`: Defines a map that contains user assigned identities.

### ValidationFailedChaosEvent
* ValidationFailedChaosEvent `object`: Chaos event corresponding to a failure during validation.
  * Reason `string`: Describes why the ValidationFailedChaosEvent was generated. This may happen because more than MaxPercentUnhealthyNodes are unhealthy for more than MaxClusterStabilizationTimeout. This reason will be in the Reason property of the ValidationFailedChaosEvent as a string.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.

### VolumeProperties
* VolumeProperties `object`: Describes properties of a volume resource.
  * azureFileParameters [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile)
  * description `string`: User readable description of the volume.
  * provider **required** [VolumeProvider](#volumeprovider)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the volume.

### VolumeProvider
* VolumeProvider `string` (values: SFAzureFile): Describes the provider of the volume resource.

### VolumeProviderParametersAzureFile
* VolumeProviderParametersAzureFile `object`: This type describes a volume provided by an Azure Files file share.
  * accountKey `string`: Access key of the Azure storage account for the File Share.
  * accountName **required** `string`: Name of the Azure storage account for the File Share.
  * shareName **required** `string`: Name of the Azure Files file share that provides storage for the volume.

### VolumeReference
* VolumeReference `object`: Describes a reference to a volume resource.
  * destinationPath **required** `string`: The path within the container at which the volume should be mounted. Only valid path characters are allowed.
  * name **required** `string`: Name of the volume being referenced.
  * readOnly `boolean`: The flag indicating whether the volume is read only. Default is 'false'.

### VolumeResourceDescription
* VolumeResourceDescription `object`: This type describes a volume resource.
  * name **required** [VolumeResourceName](#volumeresourcename)
  * properties **required** [VolumeProperties](#volumeproperties)

### VolumeResourceName
* VolumeResourceName `string`: Name of the Volume resource.

### WaitForInbuildReplicaSafetyCheck
* WaitForInbuildReplicaSafetyCheck: Safety check that waits for the replica build operation to finish. This indicates that there is a replica that is going through the copy or is providing data for building another replica. Bring the node down will abort this copy operation which are typically expensive involving data movements.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### WaitForPrimaryPlacementSafetyCheck
* WaitForPrimaryPlacementSafetyCheck: Safety check that waits for the primary replica that was moved out of the node due to upgrade to be placed back again on that node.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### WaitForPrimarySwapSafetyCheck
* WaitForPrimarySwapSafetyCheck: Safety check that waits for the primary replica to be moved out of the node before starting an upgrade to ensure the availability of the primary replica for the partition.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### WaitForReconfigurationSafetyCheck
* WaitForReconfigurationSafetyCheck: Safety check that waits for the current reconfiguration of the partition to be completed before starting an upgrade.
  * PartitionId [PartitionId](#partitionid)
  * Kind **required** [SafetyCheckKind](#safetycheckkind)

### WaitingChaosEvent
* WaitingChaosEvent `object`: Describes a Chaos event that gets generated when Chaos is waiting for the cluster to become ready for faulting, for example, Chaos may be waiting for the on-going upgrade to finish.
  * Reason `string`: Describes why the WaitingChaosEvent was generated, for example, due to a cluster upgrade.
  * Kind **required** [ChaosEventKind](#chaoseventkind)
  * TimeStampUtc **required** `string`: The UTC timestamp when this Chaos event was generated.


