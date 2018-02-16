# @datafire/azure_hdinsight_cluster

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_cluster
```
```js
let azure_hdinsight_cluster = require('@datafire/azure_hdinsight_cluster').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_hdinsight_cluster.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The HDInsight Management Client.

## Actions

### Clusters_List
Lists all the HDInsight clusters under the subscription.


```js
azure_hdinsight_cluster.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_ListByResourceGroup
Lists the HDInsight clusters in a resource group.


```js
azure_hdinsight_cluster.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_Delete
Deletes the specified HDInsight cluster.


```js
azure_hdinsight_cluster.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Clusters_Get
Gets the specified cluster.


```js
azure_hdinsight_cluster.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Patch HDInsight cluster with the specified parameters.


```js
azure_hdinsight_cluster.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [ClusterPatchParameters](#clusterpatchparameters)
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Creates a new HDInsight cluster with the specified parameters.


```js
azure_hdinsight_cluster.Clusters_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [ClusterCreateParametersExtended](#clustercreateparametersextended)
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cluster](#cluster)

### Clusters_Resize
Resizes the specified HDInsight cluster to the specified size.


```js
azure_hdinsight_cluster.Clusters_Resize({
  "resourceGroupName": "",
  "clusterName": "",
  "roleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * roleName **required** `string` (values: workernode): The constant value for the roleName
  * parameters **required** [ClusterResizeParameters](#clusterresizeparameters)
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### Cluster
* Cluster `object`: The HDInsight cluster.
  * etag `string`: The ETag for the resource
  * properties [ClusterGetProperties](#clustergetproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ClusterCreateParametersExtended
* ClusterCreateParametersExtended `object`: The CreateCluster request parameters.
  * location `string`: The location of the cluster.
  * properties [ClusterCreateProperties](#clustercreateproperties)
  * tags `object`: The resource tags.

### ClusterCreateProperties
* ClusterCreateProperties `object`: The cluster create parameters.
  * clusterDefinition [ClusterDefinition](#clusterdefinition)
  * clusterVersion `string`: The version of the cluster.
  * computeProfile [ComputeProfile](#computeprofile)
  * osType `string` (values: Windows, Linux): The type of operating system.
  * securityProfile [SecurityProfile](#securityprofile)
  * storageProfile [StorageProfile](#storageprofile)
  * tier `string` (values: Standard, Premium): The cluster tier.

### ClusterDefinition
* ClusterDefinition `object`: The cluster definition.
  * blueprint `string`: The link to the blueprint.
  * componentVersion `object`: The versions of different services in the cluster.
  * configurations `object`: The cluster configurations.
  * kind `string`: The type of cluster.

### ClusterGetProperties
* ClusterGetProperties `object`: The properties of cluster.
  * clusterDefinition **required** [ClusterDefinition](#clusterdefinition)
  * clusterState `string`: The state of the cluster.
  * clusterVersion `string`: The version of the cluster.
  * computeProfile [ComputeProfile](#computeprofile)
  * connectivityEndpoints `array`: The list of connectivity endpoints.
    * items [ConnectivityEndpoint](#connectivityendpoint)
  * createdDate `string`: The date on which the cluster was created.
  * errors `array`: The list of errors.
    * items [errors](#errors)
  * osType `string` (values: Windows, Linux): The type of operating system.
  * provisioningState `string` (values: InProgress, Failed, Succeeded, Canceled, Deleting): The provisioning state, which only appears in the response.
  * quotaInfo [QuotaInfo](#quotainfo)
  * securityProfile [SecurityProfile](#securityprofile)
  * tier `string` (values: Standard, Premium): The cluster tier.

### ClusterListPersistedScriptActionsResult
* ClusterListPersistedScriptActionsResult `object`: The ListPersistedScriptActions operation response.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of Persisted Script Actions.
    * items [RuntimeScriptAction](#runtimescriptaction)

### ClusterListResult
* ClusterListResult `object`: The List Cluster operation response.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of Clusters.
    * items [Cluster](#cluster)

### ClusterListRuntimeScriptActionDetailResult
* ClusterListRuntimeScriptActionDetailResult `object`: The list runtime script action detail response.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`
    * items [RuntimeScriptActionDetail](#runtimescriptactiondetail)

### ClusterPatchParameters
* ClusterPatchParameters `object`: The PatchCluster request parameters
  * tags `object`: The resource tags.

### ClusterResizeParameters
* ClusterResizeParameters `object`: The Resize Cluster request parameters.
  * targetInstanceCount `integer`: The target instance count for the operation.

### ComputeProfile
* ComputeProfile `object`: Describes the compute profile.
  * roles `array`: The list of roles in the cluster.
    * items [Role](#role)

### ConnectivityEndpoint
* ConnectivityEndpoint `object`: The connectivity properties
  * location `string`: The location of the endpoint.
  * name `string`: The name of the endpoint.
  * port `integer`: The port to connect to.
  * protocol `string`: The protocol of the endpoint.

### DataDisksGroups
* DataDisksGroups `object`: The data disks groups for the role.
  * diskSizeGB `integer`: ReadOnly. The DiskSize in GB. Do not set this value.
  * disksPerNode `integer`: The number of disks per node.
  * storageAccountType `string`: ReadOnly. The storage account type. Do not set this value.

### ExecuteScriptActionParameters
* ExecuteScriptActionParameters `object`: The parameters for the script actions to execute on a running cluster.
  * persistOnSuccess **required** `boolean`: Gets or sets if the scripts needs to be persisted.
  * scriptActions `array`: The list of run time script actions.
    * items [RuntimeScriptAction](#runtimescriptaction)

### HardwareProfile
* HardwareProfile `object`: The hardware profile.
  * vmSize `string`: The size of the VM

### Operation
* Operation `object`: The HDInsight REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: The operation type: read, write, delete, etc.
    * provider `string`: The service provider: Microsoft.HDInsight
    * resource `string`: The resource on which the operation is performed: Cluster, Capabilities, etc.
  * name `string`: The operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list HDInsight operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The URL to get the next set of operation list results if there are any.
  * value `array`: The list of HDInsight operations supported by the HDInsight resource provider.
    * items [Operation](#operation)

### OperationResource
* OperationResource `object`: The azure async operation response.
  * error [errors](#errors)
  * status `string` (values: InProgress, Succeeded, Failed): The async operation state.

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### QuotaInfo
* QuotaInfo `object`: The quota properties for the cluster.
  * coresUsed `integer`: The cores used by the cluster.

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Role
* Role `object`: Describes a role on the cluster.
  * dataDisksGroups `array`: The data disks groups for the role.
    * items [DataDisksGroups](#datadisksgroups)
  * hardwareProfile [HardwareProfile](#hardwareprofile)
  * minInstanceCount `integer`: The minimum instance count of the cluster.
  * name `string`: The name of the role.
  * osProfile `object`: The Linux operation systems profile.
    * linuxOperatingSystemProfile `object`: The ssh username, password, and ssh public key.
      * password `string`: The password.
      * sshProfile `object`: The list of SSH public keys.
        * publicKeys `array`: The list of SSH public keys.
          * items `object`: The SSH public key for the cluster nodes.
            * certificateData `string`: The certificate for SSH.
      * username `string`: The username.
  * scriptActions `array`: The list of script actions on the role.
    * items `object`: Describes a script action on role on the cluster.
      * name **required** `string`: The name of the script action.
      * parameters **required** `string`: The parameters for the script provided.
      * uri **required** `string`: The URI to the script.
  * targetInstanceCount `integer`: The instance count of the cluster.
  * virtualNetworkProfile [VirtualNetworkProfile](#virtualnetworkprofile)

### RuntimeScriptAction
* RuntimeScriptAction `object`: Describes a script action on a running cluster.
  * applicationName `string`: The application name of the script action, if any.
  * name **required** `string`: The name of the script action.
  * parameters `string`: The parameters for the script
  * roles **required** `array`: The list of roles where script will be executed.
    * items `string`
  * uri **required** `string`: The URI to the script.

### RuntimeScriptActionDetail
* RuntimeScriptActionDetail: The execution details of a script action.
  * applicationName `string`: The application name of the script action, if any.
  * name **required** `string`: The name of the script action.
  * parameters `string`: The parameters for the script
  * roles **required** `array`: The list of roles where script will be executed.
    * items `string`
  * uri **required** `string`: The URI to the script.
  * debugInformation `string`: The script action execution debug information.
  * endTime `string`: The end time of script action execution.
  * executionSummary `array`: The summary of script action execution result.
    * items [ScriptActionExecutionSummary](#scriptactionexecutionsummary)
  * operation `string`: The reason why the script action was executed.
  * scriptExecutionId `integer`: The execution id of the script action.
  * startTime `string`: The start time of script action execution.
  * status `string`: The current execution status of the script action.

### ScriptActionExecutionSummary
* ScriptActionExecutionSummary `object`: The execution summary of a script action.
  * instanceCount `integer`: The instance count for a given script action execution status.
  * status `string`: The status of script action execution.

### SecurityProfile
* SecurityProfile `object`: The security profile which contains Ssh public key for the HDInsight cluster.
  * clusterUsersGroupDNs `array`: Optional. The Distinguished Names for cluster user groups
    * items `string`
  * directoryType `string` (values: ActiveDirectory): The directory type.
  * domain `string`: The organization's active directory domain.
  * domainUserPassword `string`: The domain admin password.
  * domainUsername `string`: The domain user account that will have admin privileges on the cluster.
  * ldapsUrls `array`: The LDAPS protocol URLs to communicate with the Active Directory.
    * items `string`
  * organizationalUnitDN `string`: The organizational unit within the Active Directory to place the cluster and service accounts.

### StorageAccount
* StorageAccount `object`: The storage Account.
  * container `string`: The container in the storage account.
  * isDefault `boolean`: Whether or not the storage account is the default storage account.
  * key `string`: The storage account access key.
  * name `string`: The name of the storage account.

### StorageProfile
* StorageProfile `object`: The storage profile.
  * storageaccounts `array`: The list of storage accounts in the cluster.
    * items [StorageAccount](#storageaccount)

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### VirtualNetworkProfile
* VirtualNetworkProfile `object`: The virtual network properties.
  * id `string`: The ID of the virtual network.
  * subnet `string`: The name of the subnet.

### errors
* errors `object`: The error message associated with the cluster creation.
  * code `string`: The error code.
  * message `string`: The error message.


