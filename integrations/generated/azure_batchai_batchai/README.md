# @datafire/azure_batchai_batchai

Client library for BatchAI

## Installation and Usage
```bash
npm install --save @datafire/azure_batchai_batchai
```
```js
let azure_batchai_batchai = require('@datafire/azure_batchai_batchai').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_batchai_batchai.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure BatchAI Management API.

## Actions

### Operations_List
Lists available operations for the Microsoft.BatchAI provider.


```js
azure_batchai_batchai.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Specifies the version of API used for this request.

#### Output
* output [OperationListResult](#operationlistresult)

### Clusters_List
Gets information about the Clusters associated with the subscription.


```js
azure_batchai_batchai.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.. Used to filter results that are returned in the GET respnose.
  * $select `string`: An OData $select clause. Used to select the properties to be returned in the GET respnose.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [ClusterListResult](#clusterlistresult)

### FileServers_List
To list all the file servers available under the given subscription (and across all resource groups within that subscription)


```js
azure_batchai_batchai.FileServers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.. Used to filter results that are returned in the GET respnose.
  * $select `string`: An OData $select clause. Used to select the properties to be returned in the GET respnose.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServerListResult](#fileserverlistresult)

### Jobs_List
Gets information about the jobs associated with the subscription.


```js
azure_batchai_batchai.Jobs_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.. Used to filter results that are returned in the GET respnose.
  * $select `string`: An OData $select clause. Used to select the properties to be returned in the GET respnose.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [JobListResult](#joblistresult)

### Clusters_ListByResourceGroup
Gets information about the Clusters associated within the specified resource group.


```js
azure_batchai_batchai.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * $filter `string`: An OData $filter clause.. Used to filter results that are returned in the GET respnose.
  * $select `string`: An OData $select clause. Used to select the properties to be returned in the GET respnose.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_Delete
Deletes a Cluster.


```js
azure_batchai_batchai.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### Clusters_Get
Gets information about the specified Cluster.


```js
azure_batchai_batchai.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Update the properties of a given cluster.


```js
azure_batchai_batchai.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [ClusterUpdateParameters](#clusterupdateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Adds a cluster. A cluster is a collection of compute nodes. Multiple jobs can be run on the same cluster.


```js
azure_batchai_batchai.Clusters_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [ClusterCreateParameters](#clustercreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Cluster](#cluster)

### Clusters_ListRemoteLoginInformation
Get the IP address, port of all the compute nodes in the cluster.


```js
azure_batchai_batchai.Clusters_ListRemoteLoginInformation({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [RemoteLoginInformationListResult](#remotelogininformationlistresult)

### FileServers_ListByResourceGroup
Gets a formatted list of file servers and their properties associated within the specified resource group.


```js
azure_batchai_batchai.FileServers_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * $filter `string`: An OData $filter clause.. Used to filter results that are returned in the GET respnose.
  * $select `string`: An OData $select clause. Used to select the properties to be returned in the GET respnose.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServerListResult](#fileserverlistresult)

### FileServers_Delete
Delete a file Server.


```js
azure_batchai_batchai.FileServers_Delete({
  "resourceGroupName": "",
  "fileServerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * fileServerName **required** `string`: The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### FileServers_Get
Gets information about the specified Cluster.


```js
azure_batchai_batchai.FileServers_Get({
  "resourceGroupName": "",
  "fileServerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * fileServerName **required** `string`: The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServer](#fileserver)

### FileServers_Create
Creates a file server.


```js
azure_batchai_batchai.FileServers_Create({
  "resourceGroupName": "",
  "fileServerName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * fileServerName **required** `string`: The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [FileServerCreateParameters](#fileservercreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServer](#fileserver)

### Jobs_ListByResourceGroup
Gets information about the Batch AI jobs associated within the specified resource group.


```js
azure_batchai_batchai.Jobs_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * $filter `string`: An OData $filter clause.. Used to filter results that are returned in the GET respnose.
  * $select `string`: An OData $select clause. Used to select the properties to be returned in the GET respnose.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [JobListResult](#joblistresult)

### Jobs_Delete
Deletes the specified Batch AI job.


```js
azure_batchai_batchai.Jobs_Delete({
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### Jobs_Get
Gets information about the specified Batch AI job.


```js
azure_batchai_batchai.Jobs_Get({
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Job](#job)

### Jobs_Create
Adds a Job that gets executed on a cluster.


```js
azure_batchai_batchai.Jobs_Create({
  "resourceGroupName": "",
  "jobName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [JobCreateParameters](#jobcreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Job](#job)

### Jobs_ListOutputFiles
List all files inside the given output directory (Only if the output directory is on Azure File Share or Azure Storage container).


```js
azure_batchai_batchai.Jobs_ListOutputFiles({
  "resourceGroupName": "",
  "jobName": "",
  "outputdirectoryid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * outputdirectoryid **required** `string`: Id of the job output directory. This is the OutputDirectory-->id parameter that is given by the user during Create Job.
  * linkexpiryinminutes `integer`: The number of minutes after which the download link will expire.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileListResult](#filelistresult)

### Jobs_ListRemoteLoginInformation
Gets the IP address and port information of all the compute nodes which are used for job execution.


```js
azure_batchai_batchai.Jobs_ListRemoteLoginInformation({
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [RemoteLoginInformationListResult](#remotelogininformationlistresult)

### Jobs_Terminate
Terminates a job.


```js
azure_batchai_batchai.Jobs_Terminate({
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*



## Definitions

### AutoScaleSettings
* AutoScaleSettings `object`: The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the pending and running jobs on the cluster.
  * initialNodeCount `integer`
  * maximumNodeCount **required** `integer`
  * minimumNodeCount **required** `integer`

### AzureBlobFileSystemReference
* AzureBlobFileSystemReference `object`: Provides required information, for the service to be able to mount Azure Blob Storage container on the cluster nodes.
  * accountName **required** `string`
  * containerName **required** `string`
  * credentials **required** [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo)
  * mountOptions `string`
  * relativeMountPath **required** `string`: Note that all blob file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.

### AzureFileShareReference
* AzureFileShareReference `object`: Details of the Azure File Share to mount on the cluster.
  * accountName **required** `string`
  * azureFileUrl **required** `string`
  * credentials **required** [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo)
  * directoryMode `string`: Default value is 0777. Valid only if OS is linux.
  * fileMode `string`: Default value is 0777. Valid only if OS is linux.
  * relativeMountPath **required** `string`: Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.

### AzureStorageCredentialsInfo
* AzureStorageCredentialsInfo `object`: Credentials to access Azure File Share.
  * accountKey `string`: One of accountKey or accountKeySecretReference must be specified.
  * accountKeySecretReference [KeyVaultSecretReference](#keyvaultsecretreference)

### BatchAIError
* BatchAIError `object`: An error response from the Batch AI service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [NameValuePair](#namevaluepair)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.

### CNTKsettings
* CNTKsettings `object`: Specifies the settings for CNTK (aka Microsoft Cognitive Toolkit) job.
  * commandLineArgs `string`
  * configFilePath `string`: This property can be specified only if the languageType is 'BrainScript'.
  * languageType `string`: Valid values are 'BrainScript' or 'Python'.
  * processCount `integer`: The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: This property can be specified only if the languageType is 'Python'.
  * pythonScriptFilePath `string`: This property can be specified only if the languageType is 'Python'.

### Caffe2Settings
* Caffe2Settings `object`: Specifies the settings for Caffe2 job.
  * commandLineArgs `string`
  * pythonInterpreterPath `string`
  * pythonScriptFilePath **required** `string`

### CaffeSettings
* CaffeSettings `object`: Specifies the settings for Caffe job.
  * commandLineArgs `string`
  * configFilePath `string`: This property cannot be specified if pythonScriptFilePath is specified.
  * processCount `integer`: The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: This property can be specified only if the pythonScriptFilePath is specified.
  * pythonScriptFilePath `string`: This property cannot be specified if configFilePath is specified.

### ChainerSettings
* ChainerSettings `object`: Specifies the settings for Chainer job.
  * commandLineArgs `string`
  * processCount `integer`: The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`
  * pythonScriptFilePath **required** `string`

### CloudError
* CloudError `object`: An error response from the Batch AI service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch AI service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### Cluster
* Cluster `object`: Contains information about a Cluster.
  * properties [ClusterProperties](#clusterproperties)
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### ClusterBaseProperties
* ClusterBaseProperties `object`: The properties of a Cluster.
  * nodeSetup [NodeSetup](#nodesetup)
  * scaleSettings [ScaleSettings](#scalesettings)
  * subnet [ResourceId](#resourceid)
  * userAccountSettings **required** [UserAccountSettings](#useraccountsettings)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmPriority `string` (values: dedicated, lowpriority): Default is dedicated.
  * vmSize **required** `string`: All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### ClusterCreateParameters
* ClusterCreateParameters `object`: Parameters supplied to the Create operation.
  * location **required** `string`: The region in which to create the cluster.
  * properties [ClusterBaseProperties](#clusterbaseproperties)
  * tags `object`: The user specified tags associated with the Cluster.

### ClusterListResult
* ClusterListResult `object`: Values returned by the List Clusters operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned Clusters.
    * items [Cluster](#cluster)

### ClusterProperties
* ClusterProperties `object`: Job specific properties.
  * allocationState `string` (values: steady, resizing): Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
  * allocationStateTransitionTime `string`
  * creationTime `string`
  * currentNodeCount `integer`
  * errors `array`: This element contains all the errors encountered by various compute nodes during node setup.
    * items [BatchAIError](#batchaierror)
  * nodeSetup [NodeSetup](#nodesetup)
  * nodeStateCounts [NodeStateCounts](#nodestatecounts)
  * provisioningState `string` (values: creating, succeeded, failed, deleting): Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
  * provisioningStateTransitionTime `string`
  * scaleSettings [ScaleSettings](#scalesettings)
  * subnet [ResourceId](#resourceid)
  * userAccountSettings [UserAccountSettings](#useraccountsettings)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmPriority `string` (values: dedicated, lowpriority): The default value is dedicated. The node can get preempted while the task is running if lowpriority is choosen. This is best suited if the workload is checkpointing and can be restarted.
  * vmSize `string`: All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### ClusterUpdateParameters
* ClusterUpdateParameters `object`: Parameters supplied to the Update operation.
  * properties [ClusterUpdateProperties](#clusterupdateproperties)
  * tags `object`: The user specified tags associated with the Cluster.

### ClusterUpdateProperties
* ClusterUpdateProperties `object`: The properties of a Cluster that need to be updated.
  * scaleSettings [ScaleSettings](#scalesettings)

### ContainerSettings
* ContainerSettings `object`: Settings for the container to be downloaded.
  * imageSourceRegistry **required** [ImageSourceRegistry](#imagesourceregistry)

### CustomToolkitSettings
* CustomToolkitSettings `object`: Specifies the settings for a custom tool kit job.
  * commandLine `string`

### DataDisks
* DataDisks `object`: Settings for the data disk which would be created for the File Server.
  * cachingType `string` (values: none, readonly, readwrite)
  * diskCount **required** `integer`
  * diskSizeInGB **required** `integer`
  * storageAccountType **required** `string` (values: Standard_LRS, Premium_LRS)

### DeallocationOption
* Specifies when compute nodes may be removed from the cluster, if the cluster size is decreasing. `string` (values: requeue, terminate, waitforjobcompletion, unknown): Possible values are: requeue - Terminate running jobs and requeue them. The jobs will run again. Remove compute nodes as soon as jobs have been terminated. terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. jobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed. The default value is requeue.

### EnvironmentSetting
* EnvironmentSetting `object`: A collection of environment variables to set.
  * name **required** `string`
  * value `string`

### File
* File `object`: Properties of the file.
  * downloadUrl **required** `string`: This will be returned only if the model has been archived. During job run, this won't be returned and customers can use SSH tunneling to download. Users can use Get Remote Login Information API to get the IP address and port information of all the compute nodes running the job.
  * name **required** `string`: file name
  * properties [FileProperties](#fileproperties)

### FileListResult
* FileListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned job files.
    * items [File](#file)

### FileProperties
* FileProperties `object`: File specific properties.
  * contentLength `integer`: The file size.
  * lastModified `string`: The time at which the file was last modified.

### FileServer
* FileServer `object`: Contains information about the File Server.
  * properties [FileServerProperties](#fileserverproperties)
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### FileServerBaseProperties
* FileServerBaseProperties `object`: The properties of a file server.
  * dataDisks **required** [DataDisks](#datadisks)
  * sshConfiguration **required** [SshConfiguration](#sshconfiguration)
  * subnet [ResourceId](#resourceid)
  * vmSize **required** `string`: For information about available VM sizes for fileservers from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).

### FileServerCreateParameters
* FileServerCreateParameters `object`: Parameters supplied to the Create operation.
  * location **required** `string`: The region in which to create the File Server.
  * properties [FileServerBaseProperties](#fileserverbaseproperties)
  * tags `object`: The user specified tags associated with the File Server.

### FileServerListResult
* FileServerListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of File Servers.
    * items [FileServer](#fileserver)

### FileServerProperties
* FileServerProperties `object`: File server specific properties.
  * creationTime `string`
  * dataDisks [DataDisks](#datadisks)
  * mountSettings [MountSettings](#mountsettings)
  * provisioningState `string` (values: creating, updating, deleting, succeeded, failed): Possible values: creating - The File Server is getting created. updating - The File Server creation has been accepted and it is getting updated. deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted. failed - The File Server creation has failed with the specified errorCode. Details about the error code are specified in the message field. succeeded - The File Server creation has succeeded.
  * provisioningStateTransitionTime `string`
  * sshConfiguration [SshConfiguration](#sshconfiguration)
  * subnet [ResourceId](#resourceid)
  * vmSize `string`: For information about available VM sizes for File Server from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).

### FileServerReference
* FileServerReference `object`: Provides required information, for the service to be able to mount Azure FileShare on the cluster nodes.
  * fileServer **required** [ResourceId](#resourceid)
  * mountOptions `string`
  * relativeMountPath **required** `string`: Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.
  * sourceDirectory `string`: If this property is not specified, the entire File Server will be mounted.

### ImageReference
* ImageReference `object`: The image reference.
  * offer **required** `string`
  * publisher **required** `string`
  * sku **required** `string`
  * version `string`

### ImageSourceRegistry
* ImageSourceRegistry `object`: Details of the container image such as name, URL and credentials.
  * credentials [PrivateRegistryCredentials](#privateregistrycredentials)
  * image **required** `string`
  * serverUrl `string`

### InputDirectory
* InputDirectory `object`: Input directory for the job.
  * id **required** `string`: It will be available for the job as an environment variable under AZ_BATCHAI_INPUT_id. The service will also provide the following  environment variable: AZ_BATCHAI_PREV_OUTPUT_Name. The value of the variable will be populated if the job is being retried after a previous failure, otherwise it will be set to nothing.
  * path **required** `string`

### Job
* Job `object`: Contains information about the job.
  * properties [JobProperties](#jobproperties)
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### JobBaseProperties
* JobBaseProperties `object`: The properties of a Batch AI job.
  * caffe2Settings [Caffe2Settings](#caffe2settings)
  * caffeSettings [CaffeSettings](#caffesettings)
  * chainerSettings [ChainerSettings](#chainersettings)
  * cluster **required** [ResourceId](#resourceid)
  * cntkSettings [CNTKsettings](#cntksettings)
  * constraints `object`: Constraints associated with the Job.
    * maxWallClockTime `string`: Default Value = 1 week.
  * containerSettings [ContainerSettings](#containersettings)
  * customToolkitSettings [CustomToolkitSettings](#customtoolkitsettings)
  * environmentVariables `array`: Batch AI service sets the following environment variables for all jobs: AZ_BATCHAI_INPUT_id, AZ_BATCHAI_OUTPUT_id, AZ_BATCHAI_NUM_GPUS_PER_NODE. For distributed TensorFlow jobs, following additional environment variables are set by the Batch AI Service: AZ_BATCHAI_PS_HOSTS, AZ_BATCHAI_WORKER_HOSTS
    * items [EnvironmentSetting](#environmentsetting)
  * experimentName `string`: Describe the experiment information of the job
  * inputDirectories `array`
    * items [InputDirectory](#inputdirectory)
  * jobPreparation [JobPreparation](#jobpreparation)
  * nodeCount **required** `integer`: The job will be gang scheduled on that many compute nodes
  * outputDirectories `array`
    * items [OutputDirectory](#outputdirectory)
  * priority `integer`: Priority associated with the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
  * stdOutErrPathPrefix **required** `string`: The path where the Batch AI service will upload stdout and stderror of the job.
  * tensorFlowSettings [TensorFlowSettings](#tensorflowsettings)

### JobCreateParameters
* JobCreateParameters `object`: Parameters supplied to the Create operation.
  * location **required** `string`: The region in which to create the job.
  * properties [JobBaseProperties](#jobbaseproperties)
  * tags `object`: The user specified tags associated with the job.

### JobListResult
* JobListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of jobs.
    * items [Job](#job)

### JobPreparation
* JobPreparation `object`: Specifies the settings for job preparation.
  * commandLine **required** `string`: If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.

### JobProperties
* JobProperties `object`: Job specific properties.
  * caffeSettings [CaffeSettings](#caffesettings)
  * chainerSettings [ChainerSettings](#chainersettings)
  * cluster [ResourceId](#resourceid)
  * cntkSettings [CNTKsettings](#cntksettings)
  * constraints `object`: Constraints associated with the Job.
    * maxWallClockTime `string`: Default Value = 1 week.
  * containerSettings [ContainerSettings](#containersettings)
  * creationTime `string`: The creation time of the job.
  * customToolkitSettings [CustomToolkitSettings](#customtoolkitsettings)
  * environmentVariables `array`: Batch AI services sets the following environment variables for all jobs: AZ_BATCHAI_INPUT_id, AZ_BATCHAI_OUTPUT_id, AZ_BATCHAI_NUM_GPUS_PER_NODE, For distributed TensorFlow jobs, following additional environment variables are set by the Batch AI Service: AZ_BATCHAI_PS_HOSTS, AZ_BATCHAI_WORKER_HOSTS.
    * items [EnvironmentSetting](#environmentsetting)
  * executionInfo `object`: Contains information about the execution of a job in the Azure Batch service.
    * endTime `string`: This property is only returned if the job is in completed state.
    * errors `array`
      * items [BatchAIError](#batchaierror)
    * exitCode `integer`: This property is only returned if the job is in completed state.
    * startTime **required** `string`: 'Running' corresponds to the running state. If the job has been restarted or retried, this is the most recent time at which the job started running. This property is present only for job that are in the running or completed state.
  * executionState `string` (values: queued, running, terminating, succeeded, failed): The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running succesfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job.
  * executionStateTransitionTime `string`: The time at which the job entered its current execution state.
  * experimentName `string`: Describe the experiment information of the job
  * inputDirectories `array`
    * items [InputDirectory](#inputdirectory)
  * jobPreparation [JobPreparation](#jobpreparation)
  * nodeCount `integer`: The job will be gang scheduled on that many compute nodes
  * outputDirectories `array`
    * items [OutputDirectory](#outputdirectory)
  * priority `integer`: Priority associated with the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
  * provisioningState `string` (values: creating, deleting, succeeded, failed): The provisioned state of the Batch AI job
  * provisioningStateTransitionTime `string`: The time at which the job entered its current provisioning state.
  * stdOutErrPathPrefix `string`: The path where the Batch AI service will upload stdout and stderror of the job.
  * tensorFlowSettings [TensorFlowSettings](#tensorflowsettings)
  * toolType [ToolType](#tooltype)

### KeyVaultKeyReference
* KeyVaultKeyReference `object`: Describes a reference to Key Vault Key.
  * keyUrl **required** `string`
  * sourceVault **required** [ResourceId](#resourceid)

### KeyVaultSecretReference
* KeyVaultSecretReference `object`: Describes a reference to Key Vault Secret.
  * secretUrl **required** `string`
  * sourceVault **required** [ResourceId](#resourceid)

### LocalDataVolume
* LocalDataVolume `object`: Represents mapping of host directories to directories in the container.
  * hostPath **required** `string`
  * localPath **required** `string`

### ManualScaleSettings
* ManualScaleSettings `object`: Manual scale settings for the cluster.
  * nodeDeallocationOption [DeallocationOption](#deallocationoption)
  * targetNodeCount **required** `integer`: Default is 0. If autoScaleSettings are not specified, then the Cluster starts with this target.

### MountSettings
* MountSettings `object`: Details of the File Server.
  * fileServerInternalIP `string`
  * fileServerPublicIP `string`
  * fileServerType `string` (values: nfs, glusterfs)
  * mountPoint `string`

### MountVolumes
* MountVolumes `object`: Details of volumes to mount on the cluster.
  * azureBlobFileSystems `array`: References to Azure Blob FUSE that are to be mounted to the cluster nodes.
    * items [AzureBlobFileSystemReference](#azureblobfilesystemreference)
  * azureFileShares `array`: References to Azure File Shares that are to be mounted to the cluster nodes.
    * items [AzureFileShareReference](#azurefilesharereference)
  * fileServers `array`
    * items [FileServerReference](#fileserverreference)
  * unmanagedFileSystems `array`
    * items [UnmanagedFileSystemReference](#unmanagedfilesystemreference)

### NameValuePair
* NameValuePair `object`: Represents a name-value pair.
  * name `string`
  * value `string`

### NodeSetup
* NodeSetup `object`: Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
  * mountVolumes [MountVolumes](#mountvolumes)
  * setupTask [SetupTask](#setuptask)

### NodeStateCounts
* NodeStateCounts `object`: Counts of various compute node states on the cluster.
  * idleNodeCount **required** `integer`
  * leavingNodeCount **required** `integer`
  * preparingNodeCount **required** `integer`
  * runningNodeCount **required** `integer`
  * unusableNodeCount **required** `integer`

### Operation
* A REST API operation `object`: Details of a REST API operation
  * display `object`: The object that describes the operation.
    * description `string`
    * operation `string`: For example: read, write, delete, or listKeys/action
    * provider `string`
    * resource `string`
  * name `string`: This is of the format {provider}/{resource}/{operation}
  * origin `string`
  * properties `object`

### OperationListResult
* Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results. `object`: Contains the list of all operations supported by BatchAI resource provider
  * nextLink `string`
  * value `array`
    * items [Operation](#operation)

### OutputDirectory
* OutputDirectory `object`: Output directory for the job.
  * createNew `boolean`: Default is true. If false, then the directory is not created and can be any directory path that the user specifies.
  * id **required** `string`: It will be available for the job as an environment variable under AZ_BATCHAI_OUTPUT_id.
  * pathPrefix **required** `string`: NOTE: This is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs.
  * pathSuffix `string`: The suffix path where the output directory will be created.
  * type `string` (values: model, logs, summary, custom): Default value is Custom. The possible values are Model, Logs, Summary, and Custom. Users can use multiple enums for a single directory. Eg. outPutType='Model,Logs, Summary'

### PrivateRegistryCredentials
* PrivateRegistryCredentials `object`: Credentials to access a container image in a private repository.
  * password `string`: One of password or passwordSecretReference must be specified.
  * passwordSecretReference [KeyVaultSecretReference](#keyvaultsecretreference)
  * username **required** `string`

### RemoteLoginInformation
* RemoteLoginInformation `object`: Contains remote login details to SSH/RDP to a compute node in cluster.
  * ipAddress **required** `string`: ip address
  * nodeId **required** `string`: Id of the compute node
  * port **required** `number`

### RemoteLoginInformationListResult
* RemoteLoginInformationListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned remote login details.
    * items [RemoteLoginInformation](#remotelogininformation)

### Resource
* Resource `object`: A definition of an Azure resource.
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### ResourceId
* ResourceId `object`: Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
  * id **required** `string`: The ID of the resource

### ScaleSettings
* ScaleSettings `object`: At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
  * autoScale [AutoScaleSettings](#autoscalesettings)
  * manual [ManualScaleSettings](#manualscalesettings)

### SetupTask
* SetupTask `object`: Specifies a setup task which can be used to customize the compute nodes of the cluster.
  * commandLine **required** `string`
  * environmentVariables `array`
    * items [EnvironmentSetting](#environmentsetting)
  * runElevated `boolean`
  * stdOutErrPathPrefix **required** `string`: The path where the Batch AI service will upload the stdout and stderror of setup task.

### SshConfiguration
* SshConfiguration `object`: SSH configuration settings for the VM
  * publicIPsToAllow `array`: Default value is '*' can be used to match all source IPs. Maximum number of publicIPs that can be specified are 400.
    * items `string`
  * userAccountSettings **required** [UserAccountSettings](#useraccountsettings)

### TensorFlowSettings
* TensorFlowSettings `object`: Specifies the settings for TensorFlow job.
  * masterCommandLineArgs **required** `string`
  * parameterServerCommandLineArgs `string`: This property is optional for single machine training.
  * parameterServerCount `integer`: If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training (This property is not applicable for single machine training). This property can be specified only for distributed TensorFlow training.
  * pythonInterpreterPath `string`
  * pythonScriptFilePath **required** `string`
  * workerCommandLineArgs `string`: This property is optional for single machine training.
  * workerCount `integer`: If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training

### ToolType
* ToolType `string` (values: cntk, tensorflow, caffe, caffe2, chainer, custom): The toolkit type of this job.

### UnmanagedFileSystemReference
* UnmanagedFileSystemReference `object`: Details of the file system to mount on the compute cluster nodes.
  * mountCommand **required** `string`
  * relativeMountPath **required** `string`: Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location.

### UserAccountSettings
* UserAccountSettings `object`: Settings for user account that gets created on each on the nodes of a cluster.
  * adminUserName **required** `string`
  * adminUserPassword `string`
  * adminUserSshPublicKey `string`

### VirtualMachineConfiguration
* VirtualMachineConfiguration `object`: Settings for OS image.
  * imageReference [ImageReference](#imagereference)


