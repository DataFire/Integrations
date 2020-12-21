# @datafire/azure_machinelearningservices_machinelearningservices

Client library for Azure Machine Learning Workspaces

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_machinelearningservices
```
```js
let azure_machinelearningservices_machinelearningservices = require('@datafire/azure_machinelearningservices_machinelearningservices').create({
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

These APIs allow end users to operate on Azure Machine Learning Workspace resources.

## Actions

### Operations_List
Lists all of the available Azure Machine Learning Workspaces REST API operations.


```js
azure_machinelearningservices_machinelearningservices.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.

#### Output
* output [OperationListResult](#operationlistresult)

### Quotas_List
Gets the currently assigned Workspace Quotas based on VMFamily.


```js
azure_machinelearningservices_machinelearningservices.Quotas_List({
  "api-version": "",
  "subscriptionId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * location **required** `string`: The location for which resource usage is queried.

#### Output
* output [ListWorkspaceQuotas](#listworkspacequotas)

### Quotas_Update
Update quota for each VM family in workspace.


```js
azure_machinelearningservices_machinelearningservices.Quotas_Update({
  "location": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for update quota is queried.
  * parameters **required** [QuotaUpdateParameters](#quotaupdateparameters)
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.

#### Output
* output [UpdateWorkspaceQuotasResult](#updateworkspacequotasresult)

### Usages_List
Gets the current usage information as well as limits for AML resources for given subscription and location.


```js
azure_machinelearningservices_machinelearningservices.Usages_List({
  "api-version": "",
  "subscriptionId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * expandChildren `string`: Specifies if detailed usages of child resources are required.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * location **required** `string`: The location for which resource usage is queried.

#### Output
* output [ListUsagesResult](#listusagesresult)

### VirtualMachineSizes_List
Returns supported VM Sizes in a location


```js
azure_machinelearningservices_machinelearningservices.VirtualMachineSizes_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location upon which virtual-machine-sizes is queried.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.

#### Output
* output [VirtualMachineSizeListResult](#virtualmachinesizelistresult)

### Workspaces_ListBySubscription
Lists all the available machine learning workspaces under the specified subscription.


```js
azure_machinelearningservices_machinelearningservices.Workspaces_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * $skiptoken `string`: Continuation token for pagination.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_ListByResourceGroup
Lists all the available machine learning workspaces under the specified resource group.


```js
azure_machinelearningservices_machinelearningservices.Workspaces_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * $skiptoken `string`: Continuation token for pagination.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_Delete
Deletes a machine learning workspace.


```js
azure_machinelearningservices_machinelearningservices.Workspaces_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.

#### Output
*Output schema unknown*

### Workspaces_Get
Gets the properties of the specified machine learning workspace.


```js
azure_machinelearningservices_machinelearningservices.Workspaces_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.

#### Output
* output [Workspace](#workspace)

### Workspaces_Update
Updates a machine learning workspace with the specified parameters.


```js
azure_machinelearningservices_machinelearningservices.Workspaces_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * parameters **required** [WorkspaceUpdateParameters](#workspaceupdateparameters)

#### Output
* output [Workspace](#workspace)

### Workspaces_CreateOrUpdate
Creates or updates a workspace with the specified parameters.


```js
azure_machinelearningservices_machinelearningservices.Workspaces_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * parameters **required** [Workspace](#workspace)

#### Output
* output [Workspace](#workspace)

### MachineLearningCompute_ListByWorkspace
Gets computes in specified workspace.


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_ListByWorkspace({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * $skiptoken `string`: Continuation token for pagination.

#### Output
* output [PaginatedComputeResourcesList](#paginatedcomputeresourceslist)

### MachineLearningCompute_Delete
Deletes specified Machine Learning compute.


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "computeName": "",
  "api-version": "",
  "underlyingResourceAction": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * computeName **required** `string`: Name of the Azure Machine Learning compute.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * underlyingResourceAction **required** `string` (values: Delete, Detach): Delete the underlying compute if 'Delete', or detach the underlying compute from workspace if 'Detach'.

#### Output
*Output schema unknown*

### MachineLearningCompute_Get
Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "computeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * computeName **required** `string`: Name of the Azure Machine Learning compute.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.

#### Output
* output [ComputeResource](#computeresource)

### MachineLearningCompute_Update
Updates properties of a compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation.


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "computeName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * computeName **required** `string`: Name of the Azure Machine Learning compute.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * parameters **required** [ClusterUpdateParameters](#clusterupdateparameters)

#### Output
* output [ComputeResource](#computeresource)

### MachineLearningCompute_CreateOrUpdate
Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "computeName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * computeName **required** `string`: Name of the Azure Machine Learning compute.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * parameters **required** [ComputeResource](#computeresource)

#### Output
* output [ComputeResource](#computeresource)

### MachineLearningCompute_ListKeys
Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_ListKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "computeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * computeName **required** `string`: Name of the Azure Machine Learning compute.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.

#### Output
* output [ComputeSecrets](#computesecrets)

### MachineLearningCompute_ListNodes
Get the details (e.g IP address, port etc) of all the compute nodes in the compute.


```js
azure_machinelearningservices_machinelearningservices.MachineLearningCompute_ListNodes({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "computeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.
  * computeName **required** `string`: Name of the Azure Machine Learning compute.
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.

#### Output
* output [AmlComputeNodesInformation](#amlcomputenodesinformation)

### Workspaces_ListKeys
Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry


```js
azure_machinelearningservices_machinelearningservices.Workspaces_ListKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.

#### Output
* output [ListWorkspaceKeysResult](#listworkspacekeysresult)

### Workspaces_ResyncKeys
Resync all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry


```js
azure_machinelearningservices_machinelearningservices.Workspaces_ResyncKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of Azure Machine Learning resource provider API.
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Name of the resource group in which workspace is located.
  * workspaceName **required** `string`: Name of Azure Machine Learning workspace.

#### Output
*Output schema unknown*



## Definitions

### AKS
* AKS: A Machine Learning compute based on AKS.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute
  * properties `object`: AKS properties
    * agentCount `integer`: Number of agents
    * agentVMSize `string`: Agent virtual machine size
    * aksNetworkingConfiguration [AksNetworkingConfiguration](#aksnetworkingconfiguration)
    * clusterFqdn `string`: Cluster full qualified domain name
    * sslConfiguration [SslConfiguration](#sslconfiguration)
    * systemServices `array`: System services
      * items [SystemService](#systemservice)

### AksComputeSecrets
* AksComputeSecrets: Secrets related to a Machine Learning compute based on AKS.
  * computeType **required** [ComputeType](#computetype)
  * adminKubeConfig `string`: Content of kubeconfig file that can be used to connect to the Kubernetes cluster.
  * imagePullSecretName `string`: Image registry pull secret.
  * userKubeConfig `string`: Content of kubeconfig file that can be used to connect to the Kubernetes cluster.

### AksNetworkingConfiguration
* AksNetworkingConfiguration `object`: Advance configuration for AKS networking
  * dnsServiceIP `string`: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
  * dockerBridgeCidr `string`: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
  * serviceCidr `string`: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
  * subnetId `string`: Virtual network subnet resource ID the compute nodes belong to

### AmlCompute
* AmlCompute: An Azure Machine Learning compute.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute
  * properties `object`: AML Compute properties
    * allocationState `string` (values: Steady, Resizing): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
    * allocationStateTransitionTime `string`: The time at which the compute entered its current allocation state.
    * currentNodeCount `integer`: The number of compute nodes currently assigned to the compute.
    * errors `array`: Collection of errors encountered by various compute nodes during node setup.
      * items [MachineLearningServiceError](#machinelearningserviceerror)
    * nodeStateCounts [NodeStateCounts](#nodestatecounts)
    * remoteLoginPortPublicAccess `string` (values: Enabled, Disabled, NotSpecified): State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
    * scaleSettings [ScaleSettings](#scalesettings)
    * subnet [ResourceId](#resourceid)
    * targetNodeCount `integer`: The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
    * userAccountCredentials [UserAccountCredentials](#useraccountcredentials)
    * vmPriority `string` (values: Dedicated, LowPriority): Virtual Machine priority
    * vmSize `string`: Virtual Machine Size

### AmlComputeNodeInformation
* AmlComputeNodeInformation `object`: Compute node information related to a AmlCompute.
  * nodeId `string`: ID of the compute node.
  * nodeState `string` (values: idle, running, preparing, unusable, leaving, preempted): State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
  * port `number`: SSH port number of the node.
  * privateIpAddress `string`: Private IP address of the compute node.
  * publicIpAddress `string`: Public IP address of the compute node.
  * runId `string`: ID of the Experiment running on the node, if any else null.

### AmlComputeNodesInformation
* AmlComputeNodesInformation: Compute node information related to a AmlCompute.
  * computeType **required** [ComputeType](#computetype)
  * nextLink `string`: The continuation token.
  * nodes `array`: The collection of returned AmlCompute nodes details.
    * items [AmlComputeNodeInformation](#amlcomputenodeinformation)

### ClusterUpdateParameters
* ClusterUpdateParameters `object`: AmlCompute update parameters.
  * properties [ClusterUpdateProperties](#clusterupdateproperties)

### ClusterUpdateProperties
* ClusterUpdateProperties `object`: The properties of a amlCompute that need to be updated.
  * scaleSettings [ScaleSettings](#scalesettings)

### Compute
* Compute `object`: Machine Learning compute object.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute

### ComputeNodesInformation
* ComputeNodesInformation `object`: Compute nodes information related to a Machine Learning compute. Might differ for every type of compute.
  * computeType **required** [ComputeType](#computetype)
  * nextLink `string`: The continuation token.

### ComputeResource
* ComputeResource `object`: Machine Learning compute object wrapped into ARM resource envelope.
  * id `string`: Specifies the resource ID.
  * identity [Identity](#identity)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.
  * properties [Compute](#compute)

### ComputeSecrets
* ComputeSecrets `object`: Secrets related to a Machine Learning compute. Might differ for every type of compute.
  * computeType **required** [ComputeType](#computetype)

### ComputeType
* ComputeType `string` (values: AKS, AmlCompute, DataFactory, VirtualMachine, HDInsight, Databricks, DataLakeAnalytics): The type of compute

### DataFactory
* DataFactory: A DataFactory compute.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute

### DataLakeAnalytics
* DataLakeAnalytics: A DataLakeAnalytics compute.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute
  * properties `object`
    * dataLakeStoreAccountName `string`: DataLake Store Account Name

### Databricks
* Databricks: A DataFactory compute.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute
  * properties `object`
    * databricksAccessToken `string`: Databricks access token

### DatabricksComputeSecrets
* DatabricksComputeSecrets: Secrets related to a Machine Learning compute based on Databricks.
  * computeType **required** [ComputeType](#computetype)
  * databricksAccessToken `string`: access token for databricks account.

### ErrorDetail
* ErrorDetail `object`: Error detail information.
  * code **required** `string`: Error code.
  * message **required** `string`: Error message.

### ErrorResponse
* ErrorResponse `object`: Error response information.
  * code `string`: Error code.
  * details `array`: An array of error detail objects.
    * items [ErrorDetail](#errordetail)
  * message `string`: Error message.

### HDInsight
* HDInsight: A HDInsight compute.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute
  * properties `object`
    * address `string`: Public IP address of the master node of the cluster.
    * administratorAccount [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
    * sshPort `integer`: Port open for ssh connections on the master node of the cluster.

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type `string` (values: SystemAssigned): The identity type.

### ListUsagesResult
* ListUsagesResult `object`: The List Usages operation response.
  * nextLink `string`: The URI to fetch the next page of AML resource usage information. Call ListNext() with this to fetch the next page of AML resource usage information.
  * value `array`: The list of AML resource usages.
    * items [Usage](#usage)

### ListWorkspaceKeysResult
* ListWorkspaceKeysResult `object`
  * appInsightsInstrumentationKey `string`
  * containerRegistryCredentials [RegistryListCredentialsResult](#registrylistcredentialsresult)
  * userStorageKey `string`
  * userStorageResourceId `string`

### ListWorkspaceQuotas
* ListWorkspaceQuotas `object`: The List WorkspaceQuotasByVMFamily operation response.
  * nextLink `string`: The URI to fetch the next page of workspace quota information by VM Family. Call ListNext() with this to fetch the next page of Workspace Quota information.
  * value `array`: The list of Workspace Quotas by VM Family
    * items [ResourceQuota](#resourcequota)

### MachineLearningServiceError
* MachineLearningServiceError `object`: Wrapper for error response to follow ARM guidelines.
  * error [ErrorResponse](#errorresponse)

### NodeStateCounts
* NodeStateCounts `object`: Counts of various compute node states on the amlCompute.
  * idleNodeCount `integer`: Number of compute nodes in idle state.
  * leavingNodeCount `integer`: Number of compute nodes which are leaving the amlCompute.
  * preemptedNodeCount `integer`: Number of compute nodes which are in preempted state.
  * preparingNodeCount `integer`: Number of compute nodes which are being prepared.
  * runningNodeCount `integer`: Number of compute nodes which are running jobs.
  * unusableNodeCount `integer`: Number of compute nodes which are in unusable state.

### Operation
* Operation `object`: Azure Machine Learning workspace REST API operation
  * display `object`: Display name of operation
    * description `string`: The description for the operation.
    * operation `string`: The operation that users can perform.
    * provider `string`: The resource provider name: Microsoft.MachineLearningExperimentation
    * resource `string`: The resource on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: An array of operations supported by the resource provider.
  * value `array`: List of AML workspace operations supported by the AML workspace resource provider.
    * items [Operation](#operation)

### PaginatedComputeResourcesList
* PaginatedComputeResourcesList `object`: Paginated list of Machine Learning compute objects wrapped in ARM resource envelope.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of Machine Learning compute objects wrapped in ARM resource envelope.
    * items [ComputeResource](#computeresource)

### Password
* Password `object`
  * name `string`
  * value `string`

### QuotaBaseProperties
* QuotaBaseProperties `object`: The properties for Quota update or retrieval.
  * id `string`: Specifies the resource ID.
  * limit `integer`: The maximum permitted quota of the resource.
  * type `string`: Specifies the resource type.
  * unit `string` (values: Count): An enum describing the unit of quota measurement.

### QuotaUpdateParameters
* QuotaUpdateParameters `object`: Quota update parameters.
  * value `array`: The list for update quota.
    * items [QuotaBaseProperties](#quotabaseproperties)

### RegistryListCredentialsResult
* RegistryListCredentialsResult `object`
  * location `string`
  * passwords `array`
    * items [Password](#password)
  * username `string`

### Resource
* Resource `object`: Azure Resource Manager resource envelope.
  * id `string`: Specifies the resource ID.
  * identity [Identity](#identity)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### ResourceId
* ResourceId `object`: Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
  * id **required** `string`: The ID of the resource

### ResourceName
* ResourceName `object`: The Resource Name.
  * localizedValue `string`: The localized name of the resource.
  * value `string`: The name of the resource.

### ResourceQuota
* ResourceQuota `object`: The quota assigned to a resource.
  * id `string`: Specifies the resource ID.
  * limit `integer`: The maximum permitted quota of the resource.
  * name [ResourceName](#resourcename)
  * type `string`: Specifies the resource type.
  * unit `string` (values: Count): An enum describing the unit of quota measurement.

### ScaleSettings
* ScaleSettings `object`: scale settings for AML Compute
  * maxNodeCount **required** `integer`: Max number of nodes to use
  * minNodeCount `integer`: Min number of nodes to use
  * nodeIdleTimeBeforeScaleDown `string`: Node Idle Time before scaling down amlCompute

### ServicePrincipalCredentials
* ServicePrincipalCredentials `object`: Service principal credentials.
  * clientId **required** `string`: Client Id
  * clientSecret **required** `string`: Client secret

### SslConfiguration
* SslConfiguration `object`: The ssl configuration for scoring
  * cert `string`: Cert data
  * cname `string`: CNAME of the cert
  * key `string`: Key data
  * status `string` (values: Disabled, Enabled): Enable or disable ssl for scoring

### SystemService
* SystemService `object`: A system service running on a compute.
  * publicIpAddress `string`: Public IP address
  * systemServiceType `string`: The type of this system service.
  * version `string`: The version for this type.

### UpdateWorkspaceQuotas
* UpdateWorkspaceQuotas `object`: The properties for update Quota response.
  * id `string`: Specifies the resource ID.
  * limit `integer`: The maximum permitted quota of the resource.
  * status `string` (values: Undefined, Success, Failure, InvalidQuotaBelowClusterMinimum, InvalidQuotaExceedsSubscriptionLimit, InvalidVMFamilyName): Status of update workspace quota.
  * type `string`: Specifies the resource type.
  * unit `string` (values: Count): An enum describing the unit of quota measurement.

### UpdateWorkspaceQuotasResult
* UpdateWorkspaceQuotasResult `object`: The result of update workspace quota.
  * nextLink `string`: The URI to fetch the next page of workspace quota update result. Call ListNext() with this to fetch the next page of Workspace Quota update result.
  * value `array`: The list of workspace quota update result.
    * items [UpdateWorkspaceQuotas](#updateworkspacequotas)

### Usage
* Usage `object`: Describes AML Resource Usage.
  * currentValue `integer`: The current usage of the resource.
  * id `string`: Specifies the resource ID.
  * limit `integer`: The maximum permitted usage of the resource.
  * name [UsageName](#usagename)
  * type `string`: Specifies the resource type.
  * unit `string` (values: Count): An enum describing the unit of usage measurement.

### UsageName
* UsageName `object`: The Usage Names.
  * localizedValue `string`: The localized name of the resource.
  * value `string`: The name of the resource.

### UserAccountCredentials
* UserAccountCredentials `object`: Settings for user account that gets created on each on the nodes of a compute.
  * adminUserName **required** `string`: Name of the administrator user account which can be used to SSH to nodes.
  * adminUserPassword `string`: Password of the administrator user account.
  * adminUserSshPublicKey `string`: SSH public key of the administrator user account.

### VirtualMachine
* VirtualMachine: A Machine Learning compute based on Azure Virtual Machines.
  * computeLocation `string`: Location for the underlying compute
  * computeType **required** [ComputeType](#computetype)
  * createdOn `string`: The date and time when the compute was created.
  * description `string`: The description of the Machine Learning compute.
  * isAttachedCompute `boolean`: Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
  * modifiedOn `string`: The date and time when the compute was last modified.
  * provisioningErrors `array`: Errors during provisioning
    * items [MachineLearningServiceError](#machinelearningserviceerror)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * resourceId `string`: ARM resource id of the underlying compute
  * properties `object`
    * address `string`: Public IP address of the virtual machine.
    * administratorAccount [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
    * sshPort `integer`: Port open for ssh connections.
    * virtualMachineSize `string`: Virtual Machine size

### VirtualMachineSecrets
* VirtualMachineSecrets: Secrets related to a Machine Learning compute based on AKS.
  * computeType **required** [ComputeType](#computetype)
  * administratorAccount [VirtualMachineSshCredentials](#virtualmachinesshcredentials)

### VirtualMachineSize
* VirtualMachineSize `object`: Describes the properties of a VM size.
  * family `string`: The family name of the virtual machine size.
  * gpus `integer`: The number of gPUs supported by the virtual machine size.
  * lowPriorityCapable `boolean`: Specifies if the virtual machine size supports low priority VMs.
  * maxResourceVolumeMB `integer`: The resource volume size, in MB, allowed by the virtual machine size.
  * memoryGB `number`: The amount of memory, in GB, supported by the virtual machine size.
  * name `string`: The name of the virtual machine size.
  * osVhdSizeMB `integer`: The OS VHD disk size, in MB, allowed by the virtual machine size.
  * premiumIO `boolean`: Specifies if the virtual machine size supports premium IO.
  * vCPUs `integer`: The number of vCPUs supported by the virtual machine size.

### VirtualMachineSizeListResult
* VirtualMachineSizeListResult `object`: The List Virtual Machine size operation response.
  * amlCompute `array`: The list of virtual machine sizes supported by AmlCompute.
    * items [VirtualMachineSize](#virtualmachinesize)

### VirtualMachineSshCredentials
* VirtualMachineSshCredentials `object`: Admin credentials for virtual machine
  * password `string`: Password of admin account
  * privateKeyData `string`: Private key data
  * publicKeyData `string`: Public key data
  * username `string`: Username of admin account

### Workspace
* Workspace `object`: An object that represents a machine learning workspace.
  * properties [WorkspaceProperties](#workspaceproperties)
  * id `string`: Specifies the resource ID.
  * identity [Identity](#identity)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### WorkspaceListResult
* WorkspaceListResult `object`: The result of a request to list machine learning workspaces.
  * nextLink `string`: The URI that can be used to request the next list of machine learning workspaces.
  * value `array`: The list of machine learning workspaces. Since this list may be incomplete, the nextLink field should be used to request the next list of machine learning workspaces.
    * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: The properties of a machine learning workspace.
  * applicationInsights `string`: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
  * containerRegistry `string`: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
  * creationTime `string`: The creation time of the machine learning workspace in ISO8601 format.
  * description `string`: The description of this workspace.
  * discoveryUrl `string`: Url for the discovery service to identify regional endpoints for machine learning experimentation services
  * friendlyName `string`: The friendly name for this workspace. This name in mutable
  * keyVault `string`: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
  * storageAccount `string`: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
  * workspaceId `string`: The immutable id associated with this workspace.

### WorkspacePropertiesUpdateParameters
* WorkspacePropertiesUpdateParameters `object`: The parameters for updating the properties of a machine learning workspace.
  * description `string`: The description of this workspace.
  * friendlyName `string`: The friendly name for this workspace.

### WorkspaceUpdateParameters
* WorkspaceUpdateParameters `object`: The parameters for updating a machine learning workspace.
  * properties [WorkspacePropertiesUpdateParameters](#workspacepropertiesupdateparameters)
  * tags `object`: The resource tags for the machine learning workspace.


