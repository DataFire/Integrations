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

.then(data => {
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
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_ListByResourceGroup
Lists the HDInsight clusters in a resource group.


```js
azure_hdinsight_cluster.Clusters_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_Delete
Deletes the specified HDInsight cluster.


```js
azure_hdinsight_cluster.Clusters_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
*Output schema unknown*

### Clusters_Get
Gets the specified cluster.


```js
azure_hdinsight_cluster.Clusters_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Patch HDInsight cluster with the specified parameters.


```js
azure_hdinsight_cluster.Clusters_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [ClusterPatchParameters](#clusterpatchparameters)

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Creates a new HDInsight cluster with the specified parameters.


```js
azure_hdinsight_cluster.Clusters_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [ClusterCreateParametersExtended](#clustercreateparametersextended)

#### Output
* output [Cluster](#cluster)

### Clusters_GetGatewaySettings
Gets the gateway settings for the specified cluster.


```js
azure_hdinsight_cluster.Clusters_GetGatewaySettings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [GatewaySettings](#gatewaysettings)

### Clusters_Resize
Resizes the specified HDInsight cluster to the specified size.


```js
azure_hdinsight_cluster.Clusters_Resize({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "roleName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * roleName **required** `string` (values: workernode): The constant value for the roleName
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [ClusterResizeParameters](#clusterresizeparameters)

#### Output
*Output schema unknown*

### Clusters_RotateDiskEncryptionKey
Rotate disk encryption key of the specified HDInsight cluster.


```js
azure_hdinsight_cluster.Clusters_RotateDiskEncryptionKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [ClusterDiskEncryptionParameters](#clusterdiskencryptionparameters)

#### Output
*Output schema unknown*

### Clusters_UpdateGatewaySettings
Configures the gateway settings on the specified cluster.


```js
azure_hdinsight_cluster.Clusters_UpdateGatewaySettings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [UpdateGatewaySettingsParameters](#updategatewaysettingsparameters)

#### Output
*Output schema unknown*



## Definitions

### Autoscale
* Autoscale `object`: The autoscale request parameters
  * capacity [AutoscaleCapacity](#autoscalecapacity)
  * recurrence [AutoscaleRecurrence](#autoscalerecurrence)

### AutoscaleCapacity
* AutoscaleCapacity `object`: The load-based autoscale request parameters
  * maxInstanceCount `integer`: The maximum instance count of the cluster
  * minInstanceCount `integer`: The minimum instance count of the cluster

### AutoscaleRecurrence
* AutoscaleRecurrence `object`: Schedule-based autoscale request parameters
  * schedule `array`: Array of schedule-based autoscale rules
    * items [AutoscaleSchedule](#autoscaleschedule)
  * timeZone `string`: The time zone for the autoscale schedule times

### AutoscaleSchedule
* AutoscaleSchedule `object`: Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity
  * days `array`: Days of the week for a schedule-based autoscale rule
    * items `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)
  * timeAndCapacity [AutoscaleTimeAndCapacity](#autoscaletimeandcapacity)

### AutoscaleTimeAndCapacity
* AutoscaleTimeAndCapacity `object`: Time and capacity request parameters
  * maxInstanceCount `integer`: The maximum instance count of the cluster
  * minInstanceCount `integer`: The minimum instance count of the cluster
  * time `string`: 24-hour time in the form xx:xx

### ClientGroupInfo
* ClientGroupInfo `object`: The information of AAD security group.
  * groupId `string`: The AAD security group id.
  * groupName `string`: The AAD security group name.

### Cluster
* Cluster `object`: The HDInsight cluster.
  * etag `string`: The ETag for the resource
  * identity [ClusterIdentity](#clusteridentity)
  * properties [ClusterGetProperties](#clustergetproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ClusterCreateParametersExtended
* ClusterCreateParametersExtended `object`: The CreateCluster request parameters.
  * identity [ClusterIdentity](#clusteridentity)
  * location `string`: The location of the cluster.
  * properties [ClusterCreateProperties](#clustercreateproperties)
  * tags `object`: The resource tags.

### ClusterCreateProperties
* ClusterCreateProperties `object`: The cluster create parameters.
  * clusterDefinition [ClusterDefinition](#clusterdefinition)
  * clusterVersion `string`: The version of the cluster.
  * computeProfile [ComputeProfile](#computeprofile)
  * diskEncryptionProperties [DiskEncryptionProperties](#diskencryptionproperties)
  * kafkaRestProperties [KafkaRestProperties](#kafkarestproperties)
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

### ClusterDiskEncryptionParameters
* ClusterDiskEncryptionParameters `object`: The Disk Encryption Cluster request parameters.
  * keyName `string`: Key name that is used for enabling disk encryption.
  * keyVersion `string`: Specific key version that is used for enabling disk encryption.
  * vaultUri `string`: Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net

### ClusterGetProperties
* ClusterGetProperties `object`: The properties of cluster.
  * clusterDefinition **required** [ClusterDefinition](#clusterdefinition)
  * clusterState `string`: The state of the cluster.
  * clusterVersion `string`: The version of the cluster.
  * computeProfile [ComputeProfile](#computeprofile)
  * connectivityEndpoints `array`: The list of connectivity endpoints.
    * items [ConnectivityEndpoint](#connectivityendpoint)
  * createdDate `string`: The date on which the cluster was created.
  * diskEncryptionProperties [DiskEncryptionProperties](#diskencryptionproperties)
  * errors `array`: The list of errors.
    * items [Errors](#errors)
  * kafkaRestProperties [KafkaRestProperties](#kafkarestproperties)
  * osType `string` (values: Windows, Linux): The type of operating system.
  * provisioningState `string` (values: InProgress, Failed, Succeeded, Canceled, Deleting): The provisioning state, which only appears in the response.
  * quotaInfo [QuotaInfo](#quotainfo)
  * securityProfile [SecurityProfile](#securityprofile)
  * tier `string` (values: Standard, Premium): The cluster tier.

### ClusterIdentity
* ClusterIdentity `object`: Identity for the cluster.
  * principalId `string`: The principal id of cluster identity. This property will only be provided for a system assigned identity.
  * tenantId `string`: The tenant id associated with the cluster. This property will only be provided for a system assigned identity.
  * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
  * userAssignedIdentities `object`: The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

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

### DiskEncryptionProperties
* DiskEncryptionProperties `object`: The disk encryption properties
  * encryptionAlgorithm `string` (values: RSA-OAEP, RSA-OAEP-256, RSA1_5): Algorithm identifier for encryption, default RSA-OAEP.
  * keyName `string`: Key name that is used for enabling disk encryption.
  * keyVersion `string`: Specific key version that is used for enabling disk encryption.
  * msiResourceId `string`: Resource ID of Managed Identity that is used to access the key vault.
  * vaultUri `string`: Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net

### Errors
* Errors `object`: The error message associated with the cluster creation.
  * code `string`: The error code.
  * message `string`: The error message.

### ExecuteScriptActionParameters
* ExecuteScriptActionParameters `object`: The parameters for the script actions to execute on a running cluster.
  * persistOnSuccess **required** `boolean`: Gets or sets if the scripts needs to be persisted.
  * scriptActions `array`: The list of run time script actions.
    * items [RuntimeScriptAction](#runtimescriptaction)

### GatewaySettings
* GatewaySettings `object`: Gateway settings.
  * restAuthCredential.isEnabled `string`: Indicates whether or not the gateway settings based authorization is enabled.
  * restAuthCredential.password `string`: The gateway settings user password.
  * restAuthCredential.username `string`: The gateway settings user name.

### HardwareProfile
* HardwareProfile `object`: The hardware profile.
  * vmSize `string`: The size of the VM

### KafkaRestProperties
* KafkaRestProperties `object`: The kafka rest proxy configuration which contains AAD security group information.
  * clientGroupInfo [ClientGroupInfo](#clientgroupinfo)

### LinuxOperatingSystemProfile
* LinuxOperatingSystemProfile `object`: The ssh username, password, and ssh public key.
  * password `string`: The password.
  * sshProfile [SshProfile](#sshprofile)
  * username `string`: The username.

### OperationResource
* OperationResource `object`: The azure async operation response.
  * error [Errors](#errors)
  * status `string` (values: InProgress, Succeeded, Failed): The async operation state.

### OsProfile
* OsProfile `object`: The Linux operation systems profile.
  * linuxOperatingSystemProfile [LinuxOperatingSystemProfile](#linuxoperatingsystemprofile)

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
  * autoscale [Autoscale](#autoscale)
  * dataDisksGroups `array`: The data disks groups for the role.
    * items [DataDisksGroups](#datadisksgroups)
  * hardwareProfile [HardwareProfile](#hardwareprofile)
  * minInstanceCount `integer`: The minimum instance count of the cluster.
  * name `string`: The name of the role.
  * osProfile [OsProfile](#osprofile)
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
  * aaddsResourceId `string`: The resource ID of the user's Azure Active Directory Domain Service.
  * clusterUsersGroupDNs `array`: Optional. The Distinguished Names for cluster user groups
    * items `string`
  * directoryType `string` (values: ActiveDirectory): The directory type.
  * domain `string`: The organization's active directory domain.
  * domainUserPassword `string`: The domain admin password.
  * domainUsername `string`: The domain user account that will have admin privileges on the cluster.
  * ldapsUrls `array`: The LDAPS protocol URLs to communicate with the Active Directory.
    * items `string`
  * msiResourceId `string`: User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS.
  * organizationalUnitDN `string`: The organizational unit within the Active Directory to place the cluster and service accounts.

### SshProfile
* SshProfile `object`: The list of SSH public keys.
  * publicKeys `array`: The list of SSH public keys.
    * items [SshPublicKey](#sshpublickey)

### SshPublicKey
* SshPublicKey `object`: The SSH public key for the cluster nodes.
  * certificateData `string`: The certificate for SSH.

### StorageAccount
* StorageAccount `object`: The storage Account.
  * container `string`: The container in the storage account, only to be specified for WASB storage accounts.
  * fileSystem `string`: The filesystem, only to be specified for Azure Data Lake Storage Gen 2.
  * isDefault `boolean`: Whether or not the storage account is the default storage account.
  * key `string`: The storage account access key.
  * msiResourceId `string`: The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2.
  * name `string`: The name of the storage account.
  * resourceId `string`: The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2.

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

### UpdateGatewaySettingsParameters
* UpdateGatewaySettingsParameters `object`: The update gateway settings request parameters.
  * restAuthCredential.isEnabled `boolean`: Indicates whether or not the gateway settings based authorization is enabled.
  * restAuthCredential.password `string`: The gateway settings user password.
  * restAuthCredential.username `string`: The gateway settings user name.

### VirtualNetworkProfile
* VirtualNetworkProfile `object`: The virtual network properties.
  * id `string`: The ID of the virtual network.
  * subnet `string`: The name of the subnet.


