# @datafire/azure_machinelearningservices_artifact

Client library for Artifact

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_artifact
```
```js
let azure_machinelearningservices_artifact = require('@datafire/azure_machinelearningservices_artifact').create({
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



## Actions

### Artifacts_BatchGetById
Get Batch Artifacts by the specific Ids.


```js
azure_machinelearningservices_artifact.Artifacts_BatchGetById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "artifactIds": {
    "artifactIds": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * artifactIds **required** [ArtifactIdList](#artifactidlist)

#### Output
* output [BatchArtifactContentInformationResult](#batchartifactcontentinformationresult)

### Artifacts_Create
Create an Artifact.


```js
azure_machinelearningservices_artifact.Artifacts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "artifact": {
    "origin": "",
    "container": "",
    "path": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * artifact **required** [Artifact](#artifact)

#### Output
* output [Artifact](#artifact)

### Artifacts_Register
Create an Artifact for an existing dataPath.


```js
azure_machinelearningservices_artifact.Artifacts_Register({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "artifact": {
    "origin": "",
    "container": "",
    "path": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * artifact **required** [Artifact](#artifact)

#### Output
* output [Artifact](#artifact)

### Artifacts_BatchGetStorageById
Get Batch Artifacts storage by specific Ids.


```js
azure_machinelearningservices_artifact.Artifacts_BatchGetStorageById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "artifactIds": {
    "artifactIds": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * artifactIds **required** [ArtifactIdList](#artifactidlist)

#### Output
* output [BatchArtifactContentInformationResult](#batchartifactcontentinformationresult)

### Artifacts_ListInContainer
Get Artifacts metadata in a specific container or path.


```js
azure_machinelearningservices_artifact.Artifacts_ListInContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.
  * continuationToken `string`: The continuation token.

#### Output
* output [PaginatedArtifactList](#paginatedartifactlist)

### Artifacts_DeleteMetaDataInContainer
Delete Artifact Metadata in a specific container.


```js
azure_machinelearningservices_artifact.Artifacts_DeleteMetaDataInContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * hardDelete `boolean`: If set to true. The delete cannot be revert at later time.

#### Output
*Output schema unknown*

### Artifacts_BatchIngestFromSas
Ingest Batch Artifacts using shared access signature.


```js
azure_machinelearningservices_artifact.Artifacts_BatchIngestFromSas({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": "",
  "artifactContainerSas": {
    "containerSas": "",
    "containerUri": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * artifactContainerSas **required** [ArtifactContainerSas](#artifactcontainersas)

#### Output
* output [PaginatedArtifactList](#paginatedartifactlist)

### Artifacts_BatchCreateEmptyArtifacts
Create a Batch of empty Artifacts from the supplied paths.


```js
azure_machinelearningservices_artifact.Artifacts_BatchCreateEmptyArtifacts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": "",
  "artifactPaths": {
    "paths": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * artifactPaths **required** [ArtifactPathList](#artifactpathlist)

#### Output
* output [BatchArtifactContentInformationResult](#batchartifactcontentinformationresult)

### Artifacts_DeleteBatchMetaData
Delete a Batch of Artifact Metadata.


```js
azure_machinelearningservices_artifact.Artifacts_DeleteBatchMetaData({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": "",
  "artifactPaths": {
    "paths": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * artifactPaths **required** [ArtifactPathList](#artifactpathlist)
  * hardDelete `boolean`: If set to true, the delete cannot be reverted at a later time.

#### Output
*Output schema unknown*

### Artifacts_Download
Get Artifact content of a specific Id.


```js
azure_machinelearningservices_artifact.Artifacts_Download({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.

#### Output
* output `file`

### Artifacts_Upload
Upload content to an Artifact.


```js
azure_machinelearningservices_artifact.Artifacts_Upload({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.
  * index `integer`: The index.
  * append `boolean`: Whether or not to append the content or replace it.
  * allowOverwrite `boolean`: whether to allow overwrite if Artifact Content exist already. when set to true, Overwrite happens if Artifact Content already exists
  * content **required** `string`

#### Output
* output [Artifact](#artifact)

### Artifacts_GetContentInformation
Get content information of an Artifact.


```js
azure_machinelearningservices_artifact.Artifacts_GetContentInformation({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.

#### Output
* output [ArtifactContentInformation](#artifactcontentinformation)

### Artifacts_GetStorageContentInformation
Get storage content information of an Artifact.


```js
azure_machinelearningservices_artifact.Artifacts_GetStorageContentInformation({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.

#### Output
* output [ArtifactContentInformation](#artifactcontentinformation)

### Artifacts_DeleteMetaData
Delete an Artifact Metadata.


```js
azure_machinelearningservices_artifact.Artifacts_DeleteMetaData({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.
  * hardDelete `boolean`: If set to true. The delete cannot be revert at later time.

#### Output
*Output schema unknown*

### Artifacts_Get
Get Artifact metadata for a specific Id.


```js
azure_machinelearningservices_artifact.Artifacts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path **required** `string`: The Artifact Path.

#### Output
* output [Artifact](#artifact)

### Artifacts_ListSasByPrefix
Get shared access signature for an Artifact in specific path.


```js
azure_machinelearningservices_artifact.Artifacts_ListSasByPrefix({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.
  * continuationToken `string`: The continuation token.

#### Output
* output [PaginatedArtifactContentInformationList](#paginatedartifactcontentinformationlist)

### Artifacts_ListStorageUriByPrefix
Get storage Uri for Artifacts in a specific path.


```js
azure_machinelearningservices_artifact.Artifacts_ListStorageUriByPrefix({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.
  * continuationToken `string`: The continuation token.

#### Output
* output [PaginatedArtifactContentInformationList](#paginatedartifactcontentinformationlist)

### Artifacts_GetSas
Get writable shared access signature for a specific Artifact.


```js
azure_machinelearningservices_artifact.Artifacts_GetSas({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "origin": "",
  "container": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * origin **required** `string`: The origin of the Artifact.
  * container **required** `string`: The container name.
  * path `string`: The Artifact Path.

#### Output
* output [ArtifactContentInformation](#artifactcontentinformation)



## Definitions

### Artifact
* Artifact `object`: Details of an Artifact.
  * artifactId `string`: The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}.
  * container **required** `string`: The name of container. Artifacts can be grouped by container.
  * createdTime `string`: The Date and Time at which the Artifact is created. The DateTime is in UTC.
  * dataPath [DataPath](#datapath)
  * etag `string`: The Etag of the Artifact.
  * origin **required** `string`: The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset' and 'Unknown'.
  * path **required** `string`: The path to the Artifact in a container.

### ArtifactContainerSas
* ArtifactContainerSas `object`: Details of the Artifact Container's shared access signature.
  * artifactPrefix `string`: The Prefix to the Artifact in the Blob.
  * containerSas **required** `string`: The shared access signature of the Container.
  * containerUri **required** `string`: The URI of the Container.
  * prefix `string`: The Prefix to the Blobs in the Container.

### ArtifactContentInformation
* ArtifactContentInformation `object`: Details of an Artifact Content Information.
  * container `string`: The name of container. Artifacts can be grouped by container.
  * contentUri `string`: The URI of the content.
  * origin `string`: The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset', 'ComputeRecord', 'Metric', and 'Unknown'.
  * path `string`: The path to the Artifact in a container.

### ArtifactIdList
* ArtifactIdList `object`: Contains list of Artifact Ids.
  * artifactIds **required** `array`: List of Artifacts Ids.
    * items `string`

### ArtifactPath
* ArtifactPath `object`: Details of an Artifact Path.
  * path **required** `string`: The path to the Artifact in a container.

### ArtifactPathList
* ArtifactPathList `object`: Contains list of Artifact Paths.
  * paths **required** `array`: List of Artifact Paths.
    * items [ArtifactPath](#artifactpath)

### BatchArtifactContentInformationResult
* BatchArtifactContentInformationResult `object`: Results of the Batch Artifact Content Information request.
  * artifactContentInformation `object`: Artifact Content Information details of the Artifact Ids requested.
  * artifacts `object`: Artifact details of the Artifact Ids requested.
  * errors `object`: Errors occurred while fetching the requested Artifact Ids.

### DataPath
* DataPath `object`
  * dataStoreName `string`
  * relativePath `string`
  * sqlDataPath [SqlDataPath](#sqldatapath)

### ErrorDetails
* ErrorDetails `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the error (e.g., the name of the property in error).

### ErrorResponse
* ErrorResponse `object`: The error response.
  * correlation `object`: Dictionary containing correlation details for the error.
  * environment `string`: The hosting environment.
  * error [RootError](#rooterror)
  * location `string`: The Azure region.
  * time `string`: The time in UTC.

### InnerErrorResponse
* InnerErrorResponse `object`: A nested structure of errors.
  * code `string`: The error code.
  * innerError [InnerErrorResponse](#innererrorresponse)

### PaginatedArtifactContentInformationList
* PaginatedArtifactContentInformationList `object`: A paginated list of ArtifactContentInformations.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type ArtifactContentInformation.
    * items [ArtifactContentInformation](#artifactcontentinformation)

### PaginatedArtifactList
* PaginatedArtifactList `object`: A paginated list of Artifacts.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type Artifact.
    * items [Artifact](#artifact)

### RootError
* RootError `object`: The root error.
  * code `string`: The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled.
  * details `array`: The related errors that occurred during the request.
    * items [ErrorDetails](#errordetails)
  * innerError [InnerErrorResponse](#innererrorresponse)
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the error (e.g., the name of the property in error).

### SqlDataPath
* SqlDataPath `object`
  * sqlQuery `string`
  * sqlStoredProcedureName `string`
  * sqlStoredProcedureParams `array`
    * items [StoredProcedureParameter](#storedprocedureparameter)
  * sqlTableName `string`

### StoredProcedureParameter
* StoredProcedureParameter `object`
  * name `string`
  * type `string` (values: String, Int, Decimal, Guid, Boolean, Date)
  * value `string`


