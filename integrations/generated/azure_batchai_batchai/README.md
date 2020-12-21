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

.then(data => {
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

### Usages_List
Gets the current usage information as well as limits for Batch AI resources for given subscription.


```js
azure_batchai_batchai.Usages_List({
  "api-version": "",
  "subscriptionId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.
  * location **required** `string`: The location for which resource usage is queried.

#### Output
* output [ListUsagesResult](#listusagesresult)

### Workspaces_List
Gets a list of Workspaces associated with the given subscription.


```js
azure_batchai_batchai.Workspaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_ListByResourceGroup
Gets a list of Workspaces within the specified resource group.


```js
azure_batchai_batchai.Workspaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_Delete
Deletes a Workspace.


```js
azure_batchai_batchai.Workspaces_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### Workspaces_Get
Gets information about a Workspace.


```js
azure_batchai_batchai.Workspaces_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Workspace](#workspace)

### Workspaces_Update
Updates properties of a Workspace.


```js
azure_batchai_batchai.Workspaces_Update({
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [WorkspaceUpdateParameters](#workspaceupdateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Workspace](#workspace)

### Workspaces_Create
Creates a Workspace.


```js
azure_batchai_batchai.Workspaces_Create({
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [WorkspaceCreateParameters](#workspacecreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Workspace](#workspace)

### Clusters_ListByWorkspace
Gets information about Clusters associated with the given Workspace.


```js
azure_batchai_batchai.Clusters_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
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
  "workspaceName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### Clusters_Get
Gets information about a Cluster.


```js
azure_batchai_batchai.Clusters_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Updates properties of a Cluster.


```js
azure_batchai_batchai.Clusters_Update({
  "resourceGroupName": "",
  "workspaceName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [ClusterUpdateParameters](#clusterupdateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Creates a Cluster in the given Workspace.


```js
azure_batchai_batchai.Clusters_Create({
  "resourceGroupName": "",
  "workspaceName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [ClusterCreateParameters](#clustercreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Cluster](#cluster)

### Clusters_ListRemoteLoginInformation
Get the IP address, port of all the compute nodes in the Cluster.


```js
azure_batchai_batchai.Clusters_ListRemoteLoginInformation({
  "resourceGroupName": "",
  "workspaceName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * clusterName **required** `string`: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [RemoteLoginInformationListResult](#remotelogininformationlistresult)

### Experiments_ListByWorkspace
Gets a list of Experiments within the specified Workspace.


```js
azure_batchai_batchai.Experiments_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [ExperimentListResult](#experimentlistresult)

### Experiments_Delete
Deletes an Experiment.


```js
azure_batchai_batchai.Experiments_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### Experiments_Get
Gets information about an Experiment.


```js
azure_batchai_batchai.Experiments_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Experiment](#experiment)

### Experiments_Create
Creates an Experiment.


```js
azure_batchai_batchai.Experiments_Create({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Experiment](#experiment)

### Jobs_ListByExperiment
Gets a list of Jobs within the specified Experiment.


```js
azure_batchai_batchai.Jobs_ListByExperiment({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [JobListResult](#joblistresult)

### Jobs_Delete
Deletes a Job.


```js
azure_batchai_batchai.Jobs_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### Jobs_Get
Gets information about a Job.


```js
azure_batchai_batchai.Jobs_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Job](#job)

### Jobs_Create
Creates a Job in the given Experiment.


```js
azure_batchai_batchai.Jobs_Create({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "jobName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [JobCreateParameters](#jobcreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [Job](#job)

### Jobs_ListOutputFiles
List all directories and files inside the given directory of the Job's output directory (if the output directory is on Azure File Share or Azure Storage Container).


```js
azure_batchai_batchai.Jobs_ListOutputFiles({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "jobName": "",
  "outputdirectoryid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * outputdirectoryid **required** `string`: Id of the job output directory. This is the OutputDirectory-->id parameter that is given by the user during Create Job.
  * directory `string`: The path to the directory.
  * linkexpiryinminutes `integer`: The number of minutes after which the download link will expire.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileListResult](#filelistresult)

### Jobs_ListRemoteLoginInformation
Gets a list of currently existing nodes which were used for the Job execution. The returned information contains the node ID, its public IP and SSH port.


```js
azure_batchai_batchai.Jobs_ListRemoteLoginInformation({
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
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
  "workspaceName": "",
  "experimentName": "",
  "jobName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * experimentName **required** `string`: The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * jobName **required** `string`: The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### FileServers_ListByWorkspace
Gets a list of File Servers associated with the specified workspace.


```js
azure_batchai_batchai.FileServers_ListByWorkspace({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServerListResult](#fileserverlistresult)

### FileServers_Delete
Deletes a File Server.


```js
azure_batchai_batchai.FileServers_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "fileServerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * fileServerName **required** `string`: The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
*Output schema unknown*

### FileServers_Get
Gets information about a File Server.


```js
azure_batchai_batchai.FileServers_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "fileServerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * fileServerName **required** `string`: The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServer](#fileserver)

### FileServers_Create
Creates a File Server in the given workspace.


```js
azure_batchai_batchai.FileServers_Create({
  "resourceGroupName": "",
  "workspaceName": "",
  "fileServerName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * workspaceName **required** `string`: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * fileServerName **required** `string`: The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
  * parameters **required** [FileServerCreateParameters](#fileservercreateparameters)
  * api-version **required** `string`: Specifies the version of API used for this request.
  * subscriptionId **required** `string`: The subscriptionID for the Azure user.

#### Output
* output [FileServer](#fileserver)



## Definitions

### AppInsightsReference
* AppInsightsReference `object`: Azure Application Insights information for performance counters reporting.
  * component **required** [ResourceId](#resourceid)
  * instrumentationKey `string`: Value of the Azure Application Insights instrumentation key.
  * instrumentationKeySecretReference [KeyVaultSecretReference](#keyvaultsecretreference)

### AutoScaleSettings
* AutoScaleSettings `object`: Auto-scale settings for the cluster. The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the number of queued and running jobs assigned to the cluster.
  * initialNodeCount `integer`: The number of compute nodes to allocate on cluster creation. Note that this value is used only during cluster creation. Default: 0.
  * maximumNodeCount **required** `integer`: The maximum number of compute nodes the cluster can have.
  * minimumNodeCount **required** `integer`: The minimum number of compute nodes the Batch AI service will try to allocate for the cluster. Note, the actual number of nodes can be less than the specified value if the subscription has not enough quota to fulfill the request.

### AzureBlobFileSystemReference
* AzureBlobFileSystemReference `object`: Azure Blob Storage Container mounting configuration.
  * accountName **required** `string`: Name of the Azure storage account.
  * containerName **required** `string`: Name of the Azure Blob Storage container to mount on the cluster.
  * credentials **required** [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo)
  * mountOptions `string`: Mount options for mounting blobfuse file system.
  * relativeMountPath **required** `string`: The relative path on the compute node where the Azure File container will be mounted. Note that all cluster level containers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level containers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

### AzureFileShareReference
* AzureFileShareReference `object`: Azure File Share mounting configuration.
  * accountName **required** `string`: Name of the Azure storage account.
  * azureFileUrl **required** `string`: URL to access the Azure File.
  * credentials **required** [AzureStorageCredentialsInfo](#azurestoragecredentialsinfo)
  * directoryMode `string`: File mode for directories on the mounted file share. Default value: 0777.
  * fileMode `string`: File mode for files on the mounted file share. Default value: 0777.
  * relativeMountPath **required** `string`: The relative path on the compute node where the Azure File share will be mounted. Note that all cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file shares will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

### AzureStorageCredentialsInfo
* AzureStorageCredentialsInfo `object`: Azure storage account credentials.
  * accountKey `string`: Storage account key. One of accountKey or accountKeySecretReference must be specified.
  * accountKeySecretReference [KeyVaultSecretReference](#keyvaultsecretreference)

### BatchAIError
* BatchAIError `object`: An error response from the Batch AI service.
  * code `string`: An identifier of the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [NameValuePair](#namevaluepair)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.

### CNTKsettings
* CNTKsettings `object`: CNTK (aka Microsoft Cognitive Toolkit) job settings.
  * commandLineArgs `string`: Command line arguments that need to be passed to the python script or cntk executable.
  * configFilePath `string`: Specifies the path of the BrainScript config file. This property can be specified only if the languageType is 'BrainScript'.
  * languageType `string`: The language to use for launching CNTK (aka Microsoft Cognitive Toolkit) job. Valid values are 'BrainScript' or 'Python'.
  * processCount `integer`: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: The path to the Python interpreter. This property can be specified only if the languageType is 'Python'.
  * pythonScriptFilePath `string`: Python script to execute. This property can be specified only if the languageType is 'Python'.

### Caffe2Settings
* Caffe2Settings `object`: Caffe2 job settings.
  * commandLineArgs `string`: Command line arguments that need to be passed to the python script.
  * pythonInterpreterPath `string`: The path to the Python interpreter.
  * pythonScriptFilePath **required** `string`: The python script to execute.

### CaffeSettings
* CaffeSettings `object`: Caffe job settings.
  * commandLineArgs `string`: Command line arguments that need to be passed to the Caffe job.
  * configFilePath `string`: Path of the config file for the job. This property cannot be specified if pythonScriptFilePath is specified.
  * processCount `integer`: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: The path to the Python interpreter. The property can be specified only if the pythonScriptFilePath is specified.
  * pythonScriptFilePath `string`: Python script to execute. This property cannot be specified if configFilePath is specified.

### ChainerSettings
* ChainerSettings `object`: Chainer job settings.
  * commandLineArgs `string`: Command line arguments that need to be passed to the python script.
  * processCount `integer`: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: The path to the Python interpreter.
  * pythonScriptFilePath **required** `string`: The python script to execute.

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
* Cluster `object`: Information about a Cluster.
  * properties [ClusterProperties](#clusterproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ClusterBaseProperties
* ClusterBaseProperties `object`: The properties of a Cluster.
  * nodeSetup [NodeSetup](#nodesetup)
  * scaleSettings [ScaleSettings](#scalesettings)
  * subnet [ResourceId](#resourceid)
  * userAccountSettings **required** [UserAccountSettings](#useraccountsettings)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmPriority `string` (values: dedicated, lowpriority): VM priority. Allowed values are: dedicated (default) and lowpriority.
  * vmSize **required** `string`: The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace see Sizes for Virtual Machines (Linux). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### ClusterCreateParameters
* ClusterCreateParameters `object`: Cluster creation operation.
  * properties [ClusterBaseProperties](#clusterbaseproperties)

### ClusterListResult
* ClusterListResult `object`: Values returned by the List Clusters operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned Clusters.
    * items [Cluster](#cluster)

### ClusterProperties
* ClusterProperties `object`: Cluster properties.
  * allocationState `string` (values: steady, resizing): Allocation state of the cluster. Possible values are: steady - Indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing - Indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
  * allocationStateTransitionTime `string`: The time at which the cluster entered its current allocation state.
  * creationTime `string`: The time when the cluster was created.
  * currentNodeCount `integer`: The number of compute nodes currently assigned to the cluster.
  * errors `array`: Collection of errors encountered by various compute nodes during node setup.
    * items [BatchAIError](#batchaierror)
  * nodeSetup [NodeSetup](#nodesetup)
  * nodeStateCounts [NodeStateCounts](#nodestatecounts)
  * provisioningState `string` (values: creating, succeeded, failed, deleting): Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
  * provisioningStateTransitionTime `string`: Time when the provisioning state was changed.
  * scaleSettings [ScaleSettings](#scalesettings)
  * subnet [ResourceId](#resourceid)
  * userAccountSettings [UserAccountSettings](#useraccountsettings)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmPriority `string` (values: dedicated, lowpriority): VM priority of cluster nodes.
  * vmSize `string`: The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size.

### ClusterUpdateParameters
* ClusterUpdateParameters `object`: Cluster update parameters.
  * properties [ClusterUpdateProperties](#clusterupdateproperties)

### ClusterUpdateProperties
* ClusterUpdateProperties `object`: The properties of a Cluster that need to be updated.
  * scaleSettings [ScaleSettings](#scalesettings)

### ContainerSettings
* ContainerSettings `object`: Docker container settings.
  * imageSourceRegistry **required** [ImageSourceRegistry](#imagesourceregistry)
  * shmSize `string`: Size of /dev/shm. Please refer to docker documentation for supported argument formats.

### CustomMpiSettings
* CustomMpiSettings `object`: Custom MPI job settings.
  * commandLine **required** `string`: The command line to be executed by mpi runtime on each compute node.
  * processCount `integer`: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property

### CustomToolkitSettings
* CustomToolkitSettings `object`: Custom tool kit job settings.
  * commandLine `string`: The command line to execute on the master node.

### DataDisks
* DataDisks `object`: Data disks settings.
  * cachingType `string` (values: none, readonly, readwrite): Caching type for the disks. Available values are none (default), readonly, readwrite. Caching type can be set only for VM sizes supporting premium storage.
  * diskCount **required** `integer`: Number of data disks attached to the File Server. If multiple disks attached, they will be configured in RAID level 0.
  * diskSizeInGB **required** `integer`: Disk size in GB for the blank data disks.
  * storageAccountType **required** `string` (values: Standard_LRS, Premium_LRS): Type of storage account to be used on the disk. Possible values are: Standard_LRS or Premium_LRS. Premium storage account type can only be used with VM sizes supporting premium storage.

### DeallocationOption
* Deallocation options. `string` (values: requeue, terminate, waitforjobcompletion): Actions which should be performed when compute nodes are removed from the cluster. Possible values are: requeue (default) - Terminate running jobs and requeue them so the jobs will run again. Remove compute nodes as soon as jobs have been terminated; terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. waitforjobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed.

### EnvironmentVariable
* EnvironmentVariable `object`: An environment variable definition.
  * name **required** `string`: The name of the environment variable.
  * value **required** `string`: The value of the environment variable.

### EnvironmentVariableWithSecretValue
* EnvironmentVariableWithSecretValue `object`: An environment variable with secret value definition.
  * name **required** `string`: The name of the environment variable to store the secret value.
  * value `string`: The value of the environment variable. This value will never be reported back by Batch AI.
  * valueSecretReference [KeyVaultSecretReference](#keyvaultsecretreference)

### Experiment
* Experiment `object`: Experiment information.
  * properties [ExperimentProperties](#experimentproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ExperimentListResult
* ExperimentListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of experiments.
    * items [Experiment](#experiment)

### ExperimentProperties
* ExperimentProperties `object`: Experiment properties.
  * creationTime `string`: Time when the Experiment was created.
  * provisioningState `string` (values: creating, deleting, succeeded, failed): The provisioned state of the experiment
  * provisioningStateTransitionTime `string`: The time at which the experiment entered its current provisioning state.

### File
* File `object`: Properties of the file or directory.
  * downloadUrl `string`: URL to download the corresponding file. The downloadUrl is not returned for directories.
  * fileType `string` (values: file, directory): Type of the file. Possible values are file and directory.
  * name `string`: Name of the file.
  * properties [FileProperties](#fileproperties)

### FileListResult
* FileListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned job directories and files.
    * items [File](#file)

### FileProperties
* FileProperties `object`: File properties.
  * contentLength `integer`: The file of the size.
  * lastModified `string`: The time at which the file was last modified.

### FileServer
* FileServer `object`: File Server information.
  * properties [FileServerProperties](#fileserverproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### FileServerBaseProperties
* FileServerBaseProperties `object`: The properties of a file server.
  * dataDisks **required** [DataDisks](#datadisks)
  * sshConfiguration **required** [SshConfiguration](#sshconfiguration)
  * subnet [ResourceId](#resourceid)
  * vmSize **required** `string`: The size of the virtual machine for the File Server. For information about available VM sizes from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).

### FileServerCreateParameters
* FileServerCreateParameters `object`: File Server creation parameters.
  * properties [FileServerBaseProperties](#fileserverbaseproperties)

### FileServerListResult
* FileServerListResult `object`: Values returned by the File Server List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of File Servers.
    * items [FileServer](#fileserver)

### FileServerProperties
* FileServerProperties `object`: File Server properties.
  * creationTime `string`: Time when the FileServer was created.
  * dataDisks [DataDisks](#datadisks)
  * mountSettings [MountSettings](#mountsettings)
  * provisioningState `string` (values: creating, updating, deleting, succeeded, failed): Provisioning state of the File Server. Possible values: creating - The File Server is getting created; updating - The File Server creation has been accepted and it is getting updated; deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted; failed - The File Server creation has failed with the specified error code. Details about the error code are specified in the message field; succeeded - The File Server creation has succeeded.
  * provisioningStateTransitionTime `string`: Time when the provisioning state was changed.
  * sshConfiguration [SshConfiguration](#sshconfiguration)
  * subnet [ResourceId](#resourceid)
  * vmSize `string`: VM size of the File Server.

### FileServerReference
* FileServerReference `object`: File Server mounting configuration.
  * fileServer **required** [ResourceId](#resourceid)
  * mountOptions `string`: Mount options to be passed to mount command.
  * relativeMountPath **required** `string`: The relative path on the compute node where the File Server will be mounted. Note that all cluster level file servers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file servers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
  * sourceDirectory `string`: File Server directory that needs to be mounted. If this property is not specified, the entire File Server will be mounted.

### HorovodSettings
* HorovodSettings `object`: Specifies the settings for Horovod job.
  * commandLineArgs `string`: Command line arguments that need to be passed to the python script.
  * processCount `integer`: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: The path to the Python interpreter.
  * pythonScriptFilePath **required** `string`: The python script to execute.

### ImageReference
* ImageReference `object`: The OS image reference.
  * offer **required** `string`: Offer of the image.
  * publisher **required** `string`: Publisher of the image.
  * sku **required** `string`: SKU of the image.
  * version `string`: Version of the image.
  * virtualMachineImageId `string`: The ARM resource identifier of the virtual machine image for the compute nodes. This is of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}. The virtual machine image must be in the same region and subscription as the cluster. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. Note, you need to provide publisher, offer and sku of the base OS image of which the custom image has been derived from.

### ImageSourceRegistry
* ImageSourceRegistry `object`: Information about docker image for the job.
  * credentials [PrivateRegistryCredentials](#privateregistrycredentials)
  * image **required** `string`: The name of the image in the image repository.
  * serverUrl `string`: URL for image repository.

### InputDirectory
* InputDirectory `object`: Input directory for the job.
  * id **required** `string`: The ID for the input directory. The job can use AZ_BATCHAI_INPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
  * path **required** `string`: The path to the input directory.

### Job
* Job `object`: Information about a Job.
  * properties [JobProperties](#jobproperties)
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### JobBaseProperties
* JobBaseProperties `object`: The properties of a Batch AI Job.
  * caffe2Settings [Caffe2Settings](#caffe2settings)
  * caffeSettings [CaffeSettings](#caffesettings)
  * chainerSettings [ChainerSettings](#chainersettings)
  * cluster **required** [ResourceId](#resourceid)
  * cntkSettings [CNTKsettings](#cntksettings)
  * constraints `object`: Constraints associated with the Job.
    * maxWallClockTime `string`: Max time the job can run. Default value: 1 week.
  * containerSettings [ContainerSettings](#containersettings)
  * customMpiSettings [CustomMpiSettings](#custommpisettings)
  * customToolkitSettings [CustomToolkitSettings](#customtoolkitsettings)
  * environmentVariables `array`: A list of user defined environment variables which will be setup for the job.
    * items [EnvironmentVariable](#environmentvariable)
  * horovodSettings [HorovodSettings](#horovodsettings)
  * inputDirectories `array`: A list of input directories for the job.
    * items [InputDirectory](#inputdirectory)
  * jobPreparation [JobPreparation](#jobpreparation)
  * mountVolumes [MountVolumes](#mountvolumes)
  * nodeCount **required** `integer`: Number of compute nodes to run the job on. The job will be gang scheduled on that many compute nodes.
  * outputDirectories `array`: A list of output directories for the job.
    * items [OutputDirectory](#outputdirectory)
  * pyTorchSettings [PyTorchSettings](#pytorchsettings)
  * schedulingPriority `string` (values: low, normal, high): Scheduling priority associated with the job. Possible values: low, normal, high.
  * secrets `array`: A list of user defined environment variables with secret values which will be setup for the job. Server will never report values of these variables back.
    * items [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)
  * stdOutErrPathPrefix **required** `string`: The path where the Batch AI service will store stdout, stderror and execution log of the job.
  * tensorFlowSettings [TensorFlowSettings](#tensorflowsettings)

### JobCreateParameters
* JobCreateParameters `object`: Job creation parameters.
  * properties [JobBaseProperties](#jobbaseproperties)

### JobListResult
* JobListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of jobs.
    * items [Job](#job)

### JobPreparation
* JobPreparation `object`: Job preparation settings.
  * commandLine **required** `string`: The command line to execute. If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.

### JobProperties
* JobProperties `object`: Job properties.
  * caffe2Settings [Caffe2Settings](#caffe2settings)
  * caffeSettings [CaffeSettings](#caffesettings)
  * chainerSettings [ChainerSettings](#chainersettings)
  * cluster [ResourceId](#resourceid)
  * cntkSettings [CNTKsettings](#cntksettings)
  * constraints `object`: Constraints associated with the Job.
    * maxWallClockTime `string`: Max time the job can run. Default value: 1 week.
  * containerSettings [ContainerSettings](#containersettings)
  * creationTime `string`: The creation time of the job.
  * customMpiSettings [CustomMpiSettings](#custommpisettings)
  * customToolkitSettings [CustomToolkitSettings](#customtoolkitsettings)
  * environmentVariables `array`: A collection of user defined environment variables to be setup for the job.
    * items [EnvironmentVariable](#environmentvariable)
  * executionInfo `object`: Information about the execution of a job.
    * endTime `string`: The time at which the job completed. This property is only returned if the job is in completed state.
    * errors `array`: A collection of errors encountered by the service during job execution.
      * items [BatchAIError](#batchaierror)
    * exitCode `integer`: The exit code of the job. This property is only returned if the job is in completed state.
    * startTime `string`: The time at which the job started running. 'Running' corresponds to the running state. If the job has been restarted or retried, this is the most recent time at which the job started running. This property is present only for job that are in the running or completed state.
  * executionState `string` (values: queued, running, terminating, succeeded, failed): The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job.
  * executionStateTransitionTime `string`: The time at which the job entered its current execution state.
  * horovodSettings [HorovodSettings](#horovodsettings)
  * inputDirectories `array`: A list of input directories for the job.
    * items [InputDirectory](#inputdirectory)
  * jobOutputDirectoryPathSegment `string`: A segment of job's output directories path created by Batch AI. Batch AI creates job's output directories under an unique path to avoid conflicts between jobs. This value contains a path segment generated by Batch AI to make the path unique and can be used to find the output directory on the node or mounted filesystem.
  * jobPreparation [JobPreparation](#jobpreparation)
  * mountVolumes [MountVolumes](#mountvolumes)
  * nodeCount `integer`: The job will be gang scheduled on that many compute nodes
  * outputDirectories `array`: A list of output directories for the job.
    * items [OutputDirectory](#outputdirectory)
  * provisioningState `string` (values: creating, deleting, succeeded, failed): The provisioned state of the Batch AI job
  * provisioningStateTransitionTime `string`: The time at which the job entered its current provisioning state.
  * pyTorchSettings [PyTorchSettings](#pytorchsettings)
  * schedulingPriority `string` (values: low, normal, high): Scheduling priority associated with the job.
  * secrets `array`: A collection of user defined environment variables with secret values to be setup for the job. Server will never report values of these variables back.
    * items [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)
  * stdOutErrPathPrefix `string`: The path where the Batch AI service stores stdout, stderror and execution log of the job.
  * tensorFlowSettings [TensorFlowSettings](#tensorflowsettings)
  * toolType [ToolType](#tooltype)

### KeyVaultSecretReference
* KeyVaultSecretReference `object`: Key Vault Secret reference.
  * secretUrl **required** `string`: The URL referencing a secret in the Key Vault.
  * sourceVault **required** [ResourceId](#resourceid)

### ListUsagesResult
* ListUsagesResult `object`: The List Usages operation response.
  * nextLink `string`: The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information.
  * value `array`: The list of compute resource usages.
    * items [Usage](#usage)

### ManualScaleSettings
* ManualScaleSettings `object`: Manual scale settings for the cluster.
  * nodeDeallocationOption [DeallocationOption](#deallocationoption)
  * targetNodeCount **required** `integer`: The desired number of compute nodes in the Cluster. Default is 0.

### MountSettings
* MountSettings `object`: File Server mount Information.
  * fileServerInternalIP `string`: Internal IP address of the File Server which can be used to access the File Server from within the subnet.
  * fileServerPublicIP `string`: Public IP address of the File Server which can be used to SSH to the node from outside of the subnet.
  * mountPoint `string`: Path where the data disks are mounted on the File Server.

### MountVolumes
* MountVolumes `object`: Details of volumes to mount on the cluster.
  * azureBlobFileSystems `array`: A collection of Azure Blob Containers that are to be mounted to the cluster nodes.
    * items [AzureBlobFileSystemReference](#azureblobfilesystemreference)
  * azureFileShares `array`: A collection of Azure File Shares that are to be mounted to the cluster nodes.
    * items [AzureFileShareReference](#azurefilesharereference)
  * fileServers `array`: A collection of Batch AI File Servers that are to be mounted to the cluster nodes.
    * items [FileServerReference](#fileserverreference)
  * unmanagedFileSystems `array`: A collection of unmanaged file systems that are to be mounted to the cluster nodes.
    * items [UnmanagedFileSystemReference](#unmanagedfilesystemreference)

### NameValuePair
* NameValuePair `object`: Name-value pair.
  * name `string`: The name in the name-value pair.
  * value `string`: The value in the name-value pair.

### NodeSetup
* NodeSetup `object`: Node setup settings.
  * mountVolumes [MountVolumes](#mountvolumes)
  * performanceCountersSettings [PerformanceCountersSettings](#performancecounterssettings)
  * setupTask [SetupTask](#setuptask)

### NodeStateCounts
* NodeStateCounts `object`: Counts of various compute node states on the cluster.
  * idleNodeCount `integer`: Number of compute nodes in idle state.
  * leavingNodeCount `integer`: Number of compute nodes which are leaving the cluster.
  * preparingNodeCount `integer`: Number of compute nodes which are being prepared.
  * runningNodeCount `integer`: Number of compute nodes which are running jobs.
  * unusableNodeCount `integer`: Number of compute nodes which are in unusable state.

### Operation
* A REST API operation. `object`: Details of a REST API operation
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
  * id **required** `string`: The ID of the output directory. The job can use AZ_BATCHAI_OUTPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
  * pathPrefix **required** `string`: The prefix path where the output directory will be created. Note, this is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. The full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.
  * pathSuffix `string`: The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.

### PerformanceCountersSettings
* PerformanceCountersSettings `object`: Performance counters reporting settings.
  * appInsightsReference **required** [AppInsightsReference](#appinsightsreference)

### PrivateRegistryCredentials
* PrivateRegistryCredentials `object`: Credentials to access a container image in a private repository.
  * password `string`: User password to login to the docker repository. One of password or passwordSecretReference must be specified.
  * passwordSecretReference [KeyVaultSecretReference](#keyvaultsecretreference)
  * username **required** `string`: User name to login to the repository.

### ProxyResource
* ProxyResource `object`: A definition of an Azure proxy resource.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PyTorchSettings
* PyTorchSettings `object`: pyTorch job settings.
  * commandLineArgs `string`: Command line arguments that need to be passed to the python script.
  * communicationBackend `string`: Type of the communication backend for distributed jobs. Valid values are 'TCP', 'Gloo' or 'MPI'. Not required for non-distributed jobs.
  * processCount `integer`: Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
  * pythonInterpreterPath `string`: The path to the Python interpreter.
  * pythonScriptFilePath **required** `string`: The python script to execute.

### RemoteLoginInformation
* RemoteLoginInformation `object`: Login details to SSH to a compute node in cluster.
  * ipAddress `string`: Public IP address of the compute node.
  * nodeId `string`: ID of the compute node.
  * port `number`: SSH port number of the node.

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
  * commandLine **required** `string`: The command line to be executed on each cluster's node after it being allocated or rebooted. The command is executed in a bash subshell as a root.
  * environmentVariables `array`: A collection of user defined environment variables to be set for setup task.
    * items [EnvironmentVariable](#environmentvariable)
  * secrets `array`: A collection of user defined environment variables with secret values to be set for the setup task. Server will never report values of these variables back.
    * items [EnvironmentVariableWithSecretValue](#environmentvariablewithsecretvalue)
  * stdOutErrPathPrefix **required** `string`: The prefix of a path where the Batch AI service will upload the stdout, stderr and execution log of the setup task.
  * stdOutErrPathSuffix `string`: A path segment appended by Batch AI to stdOutErrPathPrefix to form a path where stdout, stderr and execution log of the setup task will be uploaded. Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. The full path can be obtained by concatenation of stdOutErrPathPrefix and stdOutErrPathSuffix.

### SshConfiguration
* SshConfiguration `object`: SSH configuration.
  * publicIPsToAllow `array`: List of source IP ranges to allow SSH connection from. The default value is '*' (all source IPs are allowed). Maximum number of IP ranges that can be specified is 400.
    * items `string`
  * userAccountSettings **required** [UserAccountSettings](#useraccountsettings)

### TensorFlowSettings
* TensorFlowSettings `object`: TensorFlow job settings.
  * masterCommandLineArgs `string`: Command line arguments that need to be passed to the python script for the master task.
  * parameterServerCommandLineArgs `string`: Command line arguments that need to be passed to the python script for the parameter server. Optional for single process jobs.
  * parameterServerCount `integer`: The number of parameter server tasks. If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training. This property can be specified only for distributed TensorFlow training.
  * pythonInterpreterPath `string`: The path to the Python interpreter.
  * pythonScriptFilePath **required** `string`: The python script to execute.
  * workerCommandLineArgs `string`: Command line arguments that need to be passed to the python script for the worker task. Optional for single process jobs.
  * workerCount `integer`: The number of worker tasks. If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training.

### ToolType
* Toolkit type. `string` (values: cntk, tensorflow, caffe, caffe2, chainer, horovod, custommpi, custom): The toolkit type of the job.

### UnmanagedFileSystemReference
* UnmanagedFileSystemReference `object`: Unmanaged file system mounting configuration.
  * mountCommand **required** `string`: Mount command line. Note, Batch AI will append mount path to the command on its own.
  * relativeMountPath **required** `string`: The relative path on the compute node where the unmanaged file system will be mounted. Note that all cluster level unmanaged file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level unmanaged file systems will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.

### Usage
* Usage `object`: Describes Batch AI Resource Usage.
  * currentValue `integer`: The current usage of the resource.
  * limit `integer`: The maximum permitted usage of the resource.
  * name [UsageName](#usagename)
  * unit `string` (values: Count): An enum describing the unit of usage measurement.

### UsageName
* UsageName `object`: The Usage Names.
  * localizedValue `string`: The localized name of the resource.
  * value `string`: The name of the resource.

### UserAccountSettings
* UserAccountSettings `object`: Settings for user account that gets created on each on the nodes of a cluster.
  * adminUserName **required** `string`: Name of the administrator user account which can be used to SSH to nodes.
  * adminUserPassword `string`: Password of the administrator user account.
  * adminUserSshPublicKey `string`: SSH public key of the administrator user account.

### VirtualMachineConfiguration
* VirtualMachineConfiguration `object`: VM configuration.
  * imageReference [ImageReference](#imagereference)

### Workspace
* Workspace `object`: Batch AI Workspace information.
  * properties [WorkspaceProperties](#workspaceproperties)
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### WorkspaceCreateParameters
* WorkspaceCreateParameters `object`: Workspace creation parameters.
  * location **required** `string`: The region in which to create the Workspace.
  * tags `object`: The user specified tags associated with the Workspace.

### WorkspaceListResult
* WorkspaceListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of workspaces.
    * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: Workspace specific properties.
  * creationTime `string`: Time when the Workspace was created.
  * provisioningState `string` (values: creating, deleting, succeeded, failed): The provisioned state of the Workspace
  * provisioningStateTransitionTime `string`: The time at which the workspace entered its current provisioning state.

### WorkspaceUpdateParameters
* WorkspaceUpdateParameters `object`: Workspace update parameters.
  * tags `object`: The user specified tags associated with the Workspace.


