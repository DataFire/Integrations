# @datafire/azure_datafactory

Client library for DataFactoryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datafactory
```
```js
let azure_datafactory = require('@datafire/azure_datafactory').create({
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

### Operations_List
Lists the available Azure Data Factory API operations.


```js
azure_datafactory.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version.

#### Output
* output [OperationListResponse](#operationlistresponse)

### Factories_List
Lists factories under the specified subscription.


```js
azure_datafactory.Factories_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * api-version **required** `string`: The API version.

#### Output
* output [FactoryListResponse](#factorylistresponse)

### Factories_ConfigureFactoryRepo
Updates a factory's repo information.


```js
azure_datafactory.Factories_ConfigureFactoryRepo({
  "subscriptionId": "",
  "locationId": "",
  "api-version": "",
  "factoryRepoUpdate": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * locationId **required** `string`: The location identifier.
  * api-version **required** `string`: The API version.
  * factoryRepoUpdate **required** [FactoryRepoUpdate](#factoryrepoupdate)

#### Output
* output [Factory](#factory)

### ExposureControl_GetFeatureValue
Get exposure control feature for specific location.


```js
azure_datafactory.ExposureControl_GetFeatureValue({
  "subscriptionId": "",
  "locationId": "",
  "api-version": "",
  "exposureControlRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * locationId **required** `string`: The location identifier.
  * api-version **required** `string`: The API version.
  * exposureControlRequest **required** [ExposureControlRequest](#exposurecontrolrequest)

#### Output
* output [ExposureControlResponse](#exposurecontrolresponse)

### Factories_ListByResourceGroup
Lists factories.


```js
azure_datafactory.Factories_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [FactoryListResponse](#factorylistresponse)

### Factories_Delete
Deletes a factory.


```js
azure_datafactory.Factories_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Factories_Get
Gets a factory.


```js
azure_datafactory.Factories_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the factory entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [Factory](#factory)

### Factories_Update
Updates a factory.


```js
azure_datafactory.Factories_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "factoryUpdateParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * factoryUpdateParameters **required** [FactoryUpdateParameters](#factoryupdateparameters)

#### Output
* output [Factory](#factory)

### Factories_CreateOrUpdate
Creates or updates a factory.


```js
azure_datafactory.Factories_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "factory": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * factory **required** [Factory](#factory)
  * If-Match `string`: ETag of the factory entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.

#### Output
* output [Factory](#factory)

### DataFlowDebugSession_AddDataFlow
Add a data flow into debug session.


```js
azure_datafactory.DataFlowDebugSession_AddDataFlow({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * request **required** [DataFlowDebugPackage](#dataflowdebugpackage)

#### Output
* output [AddDataFlowToDebugSessionResponse](#adddataflowtodebugsessionresponse)

### DataFlowDebugSession_Create
Creates a data flow debug session.


```js
azure_datafactory.DataFlowDebugSession_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * request **required** [CreateDataFlowDebugSessionRequest](#createdataflowdebugsessionrequest)

#### Output
* output [CreateDataFlowDebugSessionResponse](#createdataflowdebugsessionresponse)

### DataFlows_ListByFactory
Lists data flows.


```js
azure_datafactory.DataFlows_ListByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [DataFlowListResponse](#dataflowlistresponse)

### DataFlows_Delete
Deletes a data flow.


```js
azure_datafactory.DataFlows_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "dataFlowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * dataFlowName **required** `string`: The data flow name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### DataFlows_Get
Gets a data flow.


```js
azure_datafactory.DataFlows_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "dataFlowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * dataFlowName **required** `string`: The data flow name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [DataFlowResource](#dataflowresource)

### DataFlows_CreateOrUpdate
Creates or updates a data flow.


```js
azure_datafactory.DataFlows_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "dataFlowName": "",
  "api-version": "",
  "dataFlow": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * dataFlowName **required** `string`: The data flow name.
  * api-version **required** `string`: The API version.
  * If-Match `string`: ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
  * dataFlow **required** [DataFlowResource](#dataflowresource)

#### Output
* output [DataFlowResource](#dataflowresource)

### Datasets_ListByFactory
Lists datasets.


```js
azure_datafactory.Datasets_ListByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [DatasetListResponse](#datasetlistresponse)

### Datasets_Delete
Deletes a dataset.


```js
azure_datafactory.Datasets_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "datasetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * datasetName **required** `string`: The dataset name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Datasets_Get
Gets a dataset.


```js
azure_datafactory.Datasets_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "datasetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * datasetName **required** `string`: The dataset name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [DatasetResource](#datasetresource)

### Datasets_CreateOrUpdate
Creates or updates a dataset.


```js
azure_datafactory.Datasets_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "datasetName": "",
  "api-version": "",
  "dataset": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * datasetName **required** `string`: The dataset name.
  * api-version **required** `string`: The API version.
  * If-Match `string`: ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
  * dataset **required** [DatasetResource](#datasetresource)

#### Output
* output [DatasetResource](#datasetresource)

### DataFlowDebugSession_Delete
Deletes a data flow debug session.


```js
azure_datafactory.DataFlowDebugSession_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * request **required** [DeleteDataFlowDebugSessionRequest](#deletedataflowdebugsessionrequest)

#### Output
*Output schema unknown*

### DataFlowDebugSession_ExecuteCommand
Execute a data flow debug command.


```js
azure_datafactory.DataFlowDebugSession_ExecuteCommand({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * request **required** [DataFlowDebugCommandRequest](#dataflowdebugcommandrequest)

#### Output
* output [DataFlowDebugCommandResponse](#dataflowdebugcommandresponse)

### Factories_GetDataPlaneAccess
Get Data Plane access.


```js
azure_datafactory.Factories_GetDataPlaneAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "policy": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * policy **required** [UserAccessPolicy](#useraccesspolicy)

#### Output
* output [AccessPolicyResponse](#accesspolicyresponse)

### ExposureControl_GetFeatureValueByFactory
Get exposure control feature for specific factory.


```js
azure_datafactory.ExposureControl_GetFeatureValueByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "exposureControlRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * exposureControlRequest **required** [ExposureControlRequest](#exposurecontrolrequest)

#### Output
* output [ExposureControlResponse](#exposurecontrolresponse)

### Factories_GetGitHubAccessToken
Get GitHub Access Token.


```js
azure_datafactory.Factories_GetGitHubAccessToken({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "gitHubAccessTokenRequest": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * gitHubAccessTokenRequest **required** [GitHubAccessTokenRequest](#githubaccesstokenrequest)

#### Output
* output [GitHubAccessTokenResponse](#githubaccesstokenresponse)

### IntegrationRuntimes_ListByFactory
Lists integration runtimes.


```js
azure_datafactory.IntegrationRuntimes_ListByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationRuntimeListResponse](#integrationruntimelistresponse)

### IntegrationRuntimes_Delete
Deletes an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationRuntimes_Get
Gets an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [IntegrationRuntimeResource](#integrationruntimeresource)

### IntegrationRuntimes_Update
Updates an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": "",
  "updateIntegrationRuntimeRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * updateIntegrationRuntimeRequest **required** [UpdateIntegrationRuntimeRequest](#updateintegrationruntimerequest)

#### Output
* output [IntegrationRuntimeResource](#integrationruntimeresource)

### IntegrationRuntimes_CreateOrUpdate
Creates or updates an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": "",
  "integrationRuntime": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * If-Match `string`: ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
  * integrationRuntime **required** [IntegrationRuntimeResource](#integrationruntimeresource)

#### Output
* output [IntegrationRuntimeResource](#integrationruntimeresource)

### IntegrationRuntimes_GetConnectionInfo
Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.


```js
azure_datafactory.IntegrationRuntimes_GetConnectionInfo({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
* output `object`: Connection information for encrypting the on-premises data source credentials.
  * hostServiceUri `string`: The on-premises integration runtime host URL.
  * identityCertThumbprint `string`: The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation.
  * isIdentityCertExprired `boolean`: Whether the identity certificate is expired.
  * publicKey `string`: The public key for encrypting a credential when transferring the credential to the integration runtime.
  * serviceToken `string`: The token generated in service. Callers use this token to authenticate to integration runtime.
  * version `string`: The integration runtime version.

### IntegrationRuntimeObjectMetadata_Get
Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata list.


```js
azure_datafactory.IntegrationRuntimeObjectMetadata_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * getMetadataRequest [GetSsisObjectMetadataRequest](#getssisobjectmetadatarequest)
  * api-version **required** `string`: The API version.

#### Output
* output `object`: A list of SSIS object metadata.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value `array`: List of SSIS object metadata.
    * items `object`: SSIS object metadata.
      * description `string`: Metadata description.
      * id `integer`: Metadata id.
      * name `string`: Metadata name.
      * type **required** `string` (values: Folder, Project, Package, Environment): The type of SSIS object metadata.

### IntegrationRuntimes_GetStatus
Gets detailed status information for an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_GetStatus({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationRuntimeStatusResponse](#integrationruntimestatusresponse)

### IntegrationRuntimes_CreateLinkedIntegrationRuntime
Create a linked integration runtime entry in a shared integration runtime.


```js
azure_datafactory.IntegrationRuntimes_CreateLinkedIntegrationRuntime({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": "",
  "createLinkedIntegrationRuntimeRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * createLinkedIntegrationRuntimeRequest **required** [CreateLinkedIntegrationRuntimeRequest](#createlinkedintegrationruntimerequest)

#### Output
* output [IntegrationRuntimeStatusResponse](#integrationruntimestatusresponse)

### IntegrationRuntimes_ListAuthKeys
Retrieves the authentication keys for an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_ListAuthKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
* output `object`: The integration runtime authentication keys.
  * authKey1 `string`: The primary integration runtime authentication key.
  * authKey2 `string`: The secondary integration runtime authentication key.

### IntegrationRuntimes_GetMonitoringData
Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime.


```js
azure_datafactory.IntegrationRuntimes_GetMonitoringData({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
* output `object`: Get monitoring data response.
  * name `string`: Integration runtime name.
  * nodes `array`: Integration runtime node monitoring data.
    * items `object`: Monitoring data for integration runtime node.
      * availableMemoryInMB `integer`: Available memory (MB) on the integration runtime node.
      * concurrentJobsLimit `integer`: Maximum concurrent jobs on the integration runtime node.
      * concurrentJobsRunning `integer`: The number of jobs currently running on the integration runtime node.
      * cpuUtilization `integer`: CPU percentage on the integration runtime node.
      * maxConcurrentJobs `integer`: The maximum concurrent jobs in this integration runtime.
      * nodeName `string`: Name of the integration runtime node.
      * receivedBytes `number`: Received bytes on the integration runtime node.
      * sentBytes `number`: Sent bytes on the integration runtime node.

### IntegrationRuntimeNodes_Delete
Deletes a self-hosted integration runtime node.


```js
azure_datafactory.IntegrationRuntimeNodes_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "nodeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * nodeName **required** `string`: The integration runtime node name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationRuntimeNodes_Get
Gets a self-hosted integration runtime node.


```js
azure_datafactory.IntegrationRuntimeNodes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "nodeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * nodeName **required** `string`: The integration runtime node name.
  * api-version **required** `string`: The API version.

#### Output
* output `object`: Properties of Self-hosted integration runtime node.
  * capabilities `object`: The integration runtime capabilities dictionary
  * concurrentJobsLimit `integer`: Maximum concurrent jobs on the integration runtime node.
  * expiryTime `string`: The time at which the integration runtime will expire in ISO8601 format.
  * hostServiceUri `string`: URI for the host machine of the integration runtime.
  * isActiveDispatcher `boolean`: Indicates whether this node is the active dispatcher for integration runtime requests.
  * lastConnectTime `string`: The most recent time at which the integration runtime was connected in ISO8601 format.
  * lastEndUpdateTime `string`: The last time for the integration runtime node update end.
  * lastStartTime `string`: The time the node last started up.
  * lastStartUpdateTime `string`: The last time for the integration runtime node update start.
  * lastStopTime `string`: The integration runtime node last stop time.
  * lastUpdateResult `string` (values: None, Succeed, Fail): The result of the last integration runtime node update.
  * machineName `string`: Machine name of the integration runtime node.
  * maxConcurrentJobs `integer`: The maximum concurrent jobs in this integration runtime.
  * nodeName `string`: Name of the integration runtime node.
  * registerTime `string`: The time at which the integration runtime node was registered in ISO8601 format.
  * status `string` (values: NeedRegistration, Online, Limited, Offline, Upgrading, Initializing, InitializeFailed): Status of the integration runtime node.
  * version `string`: Version of the integration runtime node.
  * versionStatus `string`: Status of the integration runtime node version.

### IntegrationRuntimeNodes_Update
Updates a self-hosted integration runtime node.


```js
azure_datafactory.IntegrationRuntimeNodes_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "nodeName": "",
  "api-version": "",
  "updateIntegrationRuntimeNodeRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * nodeName **required** `string`: The integration runtime node name.
  * api-version **required** `string`: The API version.
  * updateIntegrationRuntimeNodeRequest **required** [UpdateIntegrationRuntimeNodeRequest](#updateintegrationruntimenoderequest)

#### Output
* output `object`: Properties of Self-hosted integration runtime node.
  * capabilities `object`: The integration runtime capabilities dictionary
  * concurrentJobsLimit `integer`: Maximum concurrent jobs on the integration runtime node.
  * expiryTime `string`: The time at which the integration runtime will expire in ISO8601 format.
  * hostServiceUri `string`: URI for the host machine of the integration runtime.
  * isActiveDispatcher `boolean`: Indicates whether this node is the active dispatcher for integration runtime requests.
  * lastConnectTime `string`: The most recent time at which the integration runtime was connected in ISO8601 format.
  * lastEndUpdateTime `string`: The last time for the integration runtime node update end.
  * lastStartTime `string`: The time the node last started up.
  * lastStartUpdateTime `string`: The last time for the integration runtime node update start.
  * lastStopTime `string`: The integration runtime node last stop time.
  * lastUpdateResult `string` (values: None, Succeed, Fail): The result of the last integration runtime node update.
  * machineName `string`: Machine name of the integration runtime node.
  * maxConcurrentJobs `integer`: The maximum concurrent jobs in this integration runtime.
  * nodeName `string`: Name of the integration runtime node.
  * registerTime `string`: The time at which the integration runtime node was registered in ISO8601 format.
  * status `string` (values: NeedRegistration, Online, Limited, Offline, Upgrading, Initializing, InitializeFailed): Status of the integration runtime node.
  * version `string`: Version of the integration runtime node.
  * versionStatus `string`: Status of the integration runtime node version.

### IntegrationRuntimeNodes_GetIpAddress
Get the IP address of self-hosted integration runtime node.


```js
azure_datafactory.IntegrationRuntimeNodes_GetIpAddress({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "nodeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * nodeName **required** `string`: The integration runtime node name.
  * api-version **required** `string`: The API version.

#### Output
* output `object`: The IP address of self-hosted integration runtime node.
  * ipAddress `string`: The IP address of self-hosted integration runtime node.

### IntegrationRuntimeObjectMetadata_Refresh
Refresh a SSIS integration runtime object metadata.


```js
azure_datafactory.IntegrationRuntimeObjectMetadata_Refresh({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
* output [SsisObjectMetadataStatusResponse](#ssisobjectmetadatastatusresponse)

### IntegrationRuntimes_RegenerateAuthKey
Regenerates the authentication key for an integration runtime.


```js
azure_datafactory.IntegrationRuntimes_RegenerateAuthKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": "",
  "regenerateKeyParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * regenerateKeyParameters **required** `object`: Parameters to regenerate the authentication key.
    * keyName `string` (values: authKey1, authKey2): The name of the authentication key to regenerate.

#### Output
* output `object`: The integration runtime authentication keys.
  * authKey1 `string`: The primary integration runtime authentication key.
  * authKey2 `string`: The secondary integration runtime authentication key.

### IntegrationRuntimes_RemoveLinks
Remove all linked integration runtimes under specific data factory in a self-hosted integration runtime.


```js
azure_datafactory.IntegrationRuntimes_RemoveLinks({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": "",
  "linkedIntegrationRuntimeRequest": {
    "factoryName": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * linkedIntegrationRuntimeRequest **required** [LinkedIntegrationRuntimeRequest](#linkedintegrationruntimerequest)

#### Output
*Output schema unknown*

### IntegrationRuntimes_Start
Starts a ManagedReserved type integration runtime.


```js
azure_datafactory.IntegrationRuntimes_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationRuntimeStatusResponse](#integrationruntimestatusresponse)

### IntegrationRuntimes_Stop
Stops a ManagedReserved type integration runtime.


```js
azure_datafactory.IntegrationRuntimes_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationRuntimes_SyncCredentials
Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly.


```js
azure_datafactory.IntegrationRuntimes_SyncCredentials({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationRuntimes_Upgrade
Upgrade self-hosted integration runtime to latest version if availability.


```js
azure_datafactory.IntegrationRuntimes_Upgrade({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### LinkedServices_ListByFactory
Lists linked services.


```js
azure_datafactory.LinkedServices_ListByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [LinkedServiceListResponse](#linkedservicelistresponse)

### LinkedServices_Delete
Deletes a linked service.


```js
azure_datafactory.LinkedServices_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "linkedServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * linkedServiceName **required** `string`: The linked service name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### LinkedServices_Get
Gets a linked service.


```js
azure_datafactory.LinkedServices_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "linkedServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * linkedServiceName **required** `string`: The linked service name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [LinkedServiceResource](#linkedserviceresource)

### LinkedServices_CreateOrUpdate
Creates or updates a linked service.


```js
azure_datafactory.LinkedServices_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "linkedServiceName": "",
  "api-version": "",
  "linkedService": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * linkedServiceName **required** `string`: The linked service name.
  * api-version **required** `string`: The API version.
  * If-Match `string`: ETag of the linkedService entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
  * linkedService **required** [LinkedServiceResource](#linkedserviceresource)

#### Output
* output [LinkedServiceResource](#linkedserviceresource)

### PipelineRuns_Get
Get a pipeline run by its run ID.


```js
azure_datafactory.PipelineRuns_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "runId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * runId **required** `string`: The pipeline run identifier.
  * api-version **required** `string`: The API version.

#### Output
* output [PipelineRun](#pipelinerun)

### PipelineRuns_Cancel
Cancel a pipeline run by its run ID.


```js
azure_datafactory.PipelineRuns_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "runId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * runId **required** `string`: The pipeline run identifier.
  * isRecursive `boolean`: If true, cancel all the Child pipelines that are triggered by the current pipeline.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### ActivityRuns_QueryByPipelineRun
Query activity runs based on input filter conditions.


```js
azure_datafactory.ActivityRuns_QueryByPipelineRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "runId": "",
  "api-version": "",
  "filterParameters": {
    "lastUpdatedAfter": "",
    "lastUpdatedBefore": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * runId **required** `string`: The pipeline run identifier.
  * api-version **required** `string`: The API version.
  * filterParameters **required** [RunFilterParameters](#runfilterparameters)

#### Output
* output [ActivityRunsQueryResponse](#activityrunsqueryresponse)

### Pipelines_ListByFactory
Lists pipelines.


```js
azure_datafactory.Pipelines_ListByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [PipelineListResponse](#pipelinelistresponse)

### Pipelines_Delete
Deletes a pipeline.


```js
azure_datafactory.Pipelines_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "pipelineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * pipelineName **required** `string`: The pipeline name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Pipelines_Get
Gets a pipeline.


```js
azure_datafactory.Pipelines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "pipelineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * pipelineName **required** `string`: The pipeline name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [PipelineResource](#pipelineresource)

### Pipelines_CreateOrUpdate
Creates or updates a pipeline.


```js
azure_datafactory.Pipelines_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "pipelineName": "",
  "api-version": "",
  "pipeline": {
    "properties": {}
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * pipelineName **required** `string`: The pipeline name.
  * api-version **required** `string`: The API version.
  * If-Match `string`: ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
  * pipeline **required** [PipelineResource](#pipelineresource)

#### Output
* output [PipelineResource](#pipelineresource)

### Pipelines_CreateRun
Creates a run of a pipeline.


```js
azure_datafactory.Pipelines_CreateRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "pipelineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * pipelineName **required** `string`: The pipeline name.
  * api-version **required** `string`: The API version.
  * referencePipelineRunId `string`: The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run.
  * isRecovery `boolean`: Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId.
  * startActivityName `string`: In recovery mode, the rerun will start from this activity. If not specified, all activities will run.
  * parameters [ParameterValueSpecification](#parametervaluespecification)

#### Output
* output [CreateRunResponse](#createrunresponse)

### DataFlowDebugSession_QueryByFactory
Query all active data flow debug sessions.


```js
azure_datafactory.DataFlowDebugSession_QueryByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [QueryDataFlowDebugSessionsResponse](#querydataflowdebugsessionsresponse)

### PipelineRuns_QueryByFactory
Query pipeline runs in the factory based on input filter conditions.


```js
azure_datafactory.PipelineRuns_QueryByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "filterParameters": {
    "lastUpdatedAfter": "",
    "lastUpdatedBefore": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * filterParameters **required** [RunFilterParameters](#runfilterparameters)

#### Output
* output [PipelineRunsQueryResponse](#pipelinerunsqueryresponse)

### TriggerRuns_QueryByFactory
Query trigger runs.


```js
azure_datafactory.TriggerRuns_QueryByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": "",
  "filterParameters": {
    "lastUpdatedAfter": "",
    "lastUpdatedBefore": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.
  * filterParameters **required** [RunFilterParameters](#runfilterparameters)

#### Output
* output [TriggerRunsQueryResponse](#triggerrunsqueryresponse)

### Triggers_ListByFactory
Lists triggers.


```js
azure_datafactory.Triggers_ListByFactory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * api-version **required** `string`: The API version.

#### Output
* output [TriggerListResponse](#triggerlistresponse)

### Triggers_Delete
Deletes a trigger.


```js
azure_datafactory.Triggers_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Triggers_Get
Gets a trigger.


```js
azure_datafactory.Triggers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.
  * If-None-Match `string`: ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.

#### Output
* output [TriggerResource](#triggerresource)

### Triggers_CreateOrUpdate
Creates or updates a trigger.


```js
azure_datafactory.Triggers_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": "",
  "trigger": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.
  * If-Match `string`: ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
  * trigger **required** [TriggerResource](#triggerresource)

#### Output
* output [TriggerResource](#triggerresource)

### Triggers_GetEventSubscriptionStatus
Get a trigger's event subscription status.


```js
azure_datafactory.Triggers_GetEventSubscriptionStatus({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [TriggerSubscriptionOperationStatus](#triggersubscriptionoperationstatus)

### RerunTriggers_ListByTrigger
Lists rerun triggers by an original trigger name.


```js
azure_datafactory.RerunTriggers_ListByTrigger({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [RerunTriggerListResponse](#reruntriggerlistresponse)

### RerunTriggers_Create
Creates a rerun trigger.


```js
azure_datafactory.RerunTriggers_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "rerunTriggerName": "",
  "api-version": "",
  "rerunTumblingWindowTriggerActionParameters": {
    "startTime": "",
    "endTime": "",
    "maxConcurrency": 0
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * rerunTriggerName **required** `string`: The rerun trigger name.
  * api-version **required** `string`: The API version.
  * rerunTumblingWindowTriggerActionParameters **required** [RerunTumblingWindowTriggerActionParameters](#reruntumblingwindowtriggeractionparameters)

#### Output
* output [TriggerResource](#triggerresource)

### RerunTriggers_Cancel
Cancels a trigger.


```js
azure_datafactory.RerunTriggers_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "rerunTriggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * rerunTriggerName **required** `string`: The rerun trigger name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### RerunTriggers_Start
Starts a trigger.


```js
azure_datafactory.RerunTriggers_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "rerunTriggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * rerunTriggerName **required** `string`: The rerun trigger name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### RerunTriggers_Stop
Stops a trigger.


```js
azure_datafactory.RerunTriggers_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "rerunTriggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * rerunTriggerName **required** `string`: The rerun trigger name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Triggers_Start
Starts a trigger.


```js
azure_datafactory.Triggers_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Triggers_Stop
Stops a trigger.


```js
azure_datafactory.Triggers_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Triggers_SubscribeToEvents
Subscribe event trigger to events.


```js
azure_datafactory.Triggers_SubscribeToEvents({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [TriggerSubscriptionOperationStatus](#triggersubscriptionoperationstatus)

### TriggerRuns_Rerun
Rerun single trigger instance by runId.


```js
azure_datafactory.TriggerRuns_Rerun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "runId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * runId **required** `string`: The pipeline run identifier.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Triggers_UnsubscribeFromEvents
Unsubscribe event trigger from events.


```js
azure_datafactory.Triggers_UnsubscribeFromEvents({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [TriggerSubscriptionOperationStatus](#triggersubscriptionoperationstatus)



## Definitions

### AccessPolicyResponse
* AccessPolicyResponse `object`: Get Data Plane read only token response definition.
  * accessToken `string`: Data Plane read only access token.
  * dataPlaneUrl `string`: Data Plane service base URL.
  * policy [UserAccessPolicy](#useraccesspolicy)

### ActivityRun
* ActivityRun `object`: Information about an activity run in a pipeline.
  * activityName `string`: The name of the activity.
  * activityRunEnd `string`: The end time of the activity run in 'ISO 8601' format.
  * activityRunId `string`: The id of the activity run.
  * activityRunStart `string`: The start time of the activity run in 'ISO 8601' format.
  * activityType `string`: The type of the activity.
  * durationInMs `integer`: The duration of the activity run.
  * error `object`: The error if any from the activity run.
  * input `object`: The input for the activity.
  * linkedServiceName `string`: The name of the compute linked service.
  * output `object`: The output for the activity.
  * pipelineName `string`: The name of the pipeline.
  * pipelineRunId `string`: The id of the pipeline run.
  * status `string`: The status of the activity run.

### ActivityRunsQueryResponse
* ActivityRunsQueryResponse `object`: A list activity runs.
  * continuationToken `string`: The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
  * value **required** `array`: List of activity runs.
    * items [ActivityRun](#activityrun)

### AddDataFlowToDebugSessionResponse
* AddDataFlowToDebugSessionResponse `object`: Response body structure for starting data flow debug session.
  * jobVersion `string`: The ID of data flow debug job version.

### AzureKeyVaultSecretReference
* AzureKeyVaultSecretReference `object`: Azure Key Vault secret reference.
  * secretName **required** `object`: The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
  * secretVersion `object`: The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
  * store **required** [LinkedServiceReference](#linkedservicereference)
  * type **required** `string`: Type of the secret.

### CloudError
* CloudError `object`: The object that defines the structure of an Azure Data Factory error response.
  * error **required** [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: The object that defines the structure of an Azure Data Factory error.
  * code **required** `string`: Error code.
  * details `array`: Array with additional error details.
    * items [CloudError](#clouderror)
  * message **required** `string`: Error message.
  * target `string`: Property name/path in request associated with error.

### CreateDataFlowDebugSessionRequest
* CreateDataFlowDebugSessionRequest `object`: Request body structure for creating data flow debug session.
  * computeType `string`: Compute type of the cluster. The value will be overwritten by the same setting in integration runtime if provided.
  * coreCount `integer`: Core count of the cluster. The value will be overwritten by the same setting in integration runtime if provided.
  * integrationRuntime [IntegrationRuntimeDebugResource](#integrationruntimedebugresource)
  * timeToLive `integer`: Time to live setting of the cluster in minutes.

### CreateDataFlowDebugSessionResponse
* CreateDataFlowDebugSessionResponse `object`: Response body structure for creating data flow debug session.
  * sessionId `string`: The ID of data flow debug session.
  * status `string`: The state of the debug session.

### CreateLinkedIntegrationRuntimeRequest
* CreateLinkedIntegrationRuntimeRequest `object`: The linked integration runtime information.
  * dataFactoryLocation `string`: The location of the data factory that the linked integration runtime belongs to.
  * dataFactoryName `string`: The name of the data factory that the linked integration runtime belongs to.
  * name `string`: The name of the linked integration runtime.
  * subscriptionId `string`: The ID of the subscription that the linked integration runtime belongs to.

### CreateRunResponse
* CreateRunResponse `object`: Response body with a run identifier.
  * runId **required** `string`: Identifier of a run.

### DataFlowDebugCommandPayload
* DataFlowDebugCommandPayload `object`: Structure of command payload.
  * columns `array`: Array of column names.
    * items `string`
  * expression `string`: The expression which is used for preview.
  * rowLimits `integer`: Row limits for preview response.
  * streamName **required** `string`: The stream name which is used for preview.

### DataFlowDebugCommandRequest
* DataFlowDebugCommandRequest `object`: Request body structure for data flow debug command.
  * command `string` (values: executePreviewQuery, executeStatisticsQuery, executeExpressionQuery): The command type.
  * commandPayload [DataFlowDebugCommandPayload](#dataflowdebugcommandpayload)
  * sessionId `string`: The ID of data flow debug session.

### DataFlowDebugCommandResponse
* DataFlowDebugCommandResponse `object`: Response body structure of data flow result for data preview, statistics or expression preview.
  * data `string`: The result data of data preview, statistics or expression preview.
  * status `string`: The run status of data preview, statistics or expression preview.

### DataFlowDebugPackage
* DataFlowDebugPackage `object`: Request body structure for starting data flow debug session.
  * dataFlow [DataFlowDebugResource](#dataflowdebugresource)
  * datasets `array`: List of datasets.
    * items [DatasetDebugResource](#datasetdebugresource)
  * debugSettings `object`: Data flow debug settings.
    * datasetParameters `object`: Parameters for dataset.
    * parameters [ParameterValueSpecification](#parametervaluespecification)
    * sourceSettings `array`: Source setting for data flow debug.
      * items [DataFlowSourceSetting](#dataflowsourcesetting)
  * linkedServices `array`: List of linked services.
    * items [LinkedServiceDebugResource](#linkedservicedebugresource)
  * sessionId `string`: The ID of data flow debug session.
  * staging [DataFlowStagingInfo](#dataflowstaginginfo)

### DataFlowDebugResource
* DataFlowDebugResource `object`: Data flow debug resource.
  * properties **required** `object`: Azure Data Factory nested object which contains a flow with data movements and transformations.
    * annotations `array`: List of tags that can be used for describing the data flow.
      * items `object`
    * description `string`: The description of the data flow.
    * folder `object`: The folder that this data flow is in. If not specified, Data flow will appear at the root level.
      * name `string`: The name of the folder that this data flow is in.
    * type `string`: Type of data flow.
  * name `string`: The resource name.

### DataFlowDebugSessionInfo
* DataFlowDebugSessionInfo `object`: Data flow debug session info.
  * computeType `string`: Compute type of the cluster.
  * coreCount `integer`: Core count of the cluster.
  * dataFlowName `string`: The name of the data flow.
  * integrationRuntimeName `string`: Attached integration runtime name of data flow debug session.
  * lastActivityTime `string`: Last activity time of data flow debug session.
  * nodeCount `integer`: Node count of the cluster. (deprecated property)
  * sessionId `string`: The ID of data flow debug session.
  * startTime `string`: Start time of data flow debug session.
  * timeToLiveInMinutes `integer`: Compute type of the cluster.

### DataFlowListResponse
* DataFlowListResponse `object`: A list of data flow resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of data flows.
    * items [DataFlowResource](#dataflowresource)

### DataFlowReference
* DataFlowReference `object`: Data flow reference type.
  * datasetParameters `object`: Reference data flow parameters from dataset.
  * referenceName **required** `string`: Reference data flow name.
  * type **required** `string` (values: DataFlowReference): Data flow reference type.

### DataFlowResource
* DataFlowResource `object`: Data flow resource type.
  * properties **required** `object`: Azure Data Factory nested object which contains a flow with data movements and transformations.
    * annotations `array`: List of tags that can be used for describing the data flow.
      * items `object`
    * description `string`: The description of the data flow.
    * folder `object`: The folder that this data flow is in. If not specified, Data flow will appear at the root level.
      * name `string`: The name of the folder that this data flow is in.
    * type `string`: Type of data flow.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### DataFlowSourceSetting
* DataFlowSourceSetting `object`: Definition of data flow source setting for debug.
  * rowLimit `integer`: Defines the row limit of data flow source in debug.
  * sourceName `string`: The data flow source name.

### DataFlowStagingInfo
* DataFlowStagingInfo `object`: Staging info for execute data flow activity.
  * folderPath `string`: Folder path for staging blob.
  * linkedService [LinkedServiceReference](#linkedservicereference)

### DatasetDebugResource
* DatasetDebugResource `object`: Dataset debug resource.
  * properties **required** `object`: The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
    * annotations `array`: List of tags that can be used for describing the Dataset.
      * items `object`
    * description `string`: Dataset description.
    * folder `object`: The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
      * name `string`: The name of the folder that this Dataset is in.
    * linkedServiceName **required** `object`: Linked service reference type.
      * parameters `object`: An object mapping parameter names to argument values.
      * referenceName **required** `string`: Reference LinkedService name.
      * type **required** `string` (values: LinkedServiceReference): Linked service reference type.
    * parameters `object`: Definition of all parameters for an entity.
    * schema `object`: Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
    * structure `object`: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
    * type **required** `string`: Type of dataset.
  * name `string`: The resource name.

### DatasetListResponse
* DatasetListResponse `object`: A list of dataset resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of datasets.
    * items [DatasetResource](#datasetresource)

### DatasetReference
* DatasetReference `object`: Dataset reference type.
  * parameters [ParameterValueSpecification](#parametervaluespecification)
  * referenceName **required** `string`: Reference dataset name.
  * type **required** `string` (values: DatasetReference): Dataset reference type.

### DatasetResource
* DatasetResource `object`: Dataset resource type.
  * properties **required** `object`: The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
    * annotations `array`: List of tags that can be used for describing the Dataset.
      * items `object`
    * description `string`: Dataset description.
    * folder `object`: The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
      * name `string`: The name of the folder that this Dataset is in.
    * linkedServiceName **required** `object`: Linked service reference type.
      * parameters `object`: An object mapping parameter names to argument values.
      * referenceName **required** `string`: Reference LinkedService name.
      * type **required** `string` (values: LinkedServiceReference): Linked service reference type.
    * parameters `object`: Definition of all parameters for an entity.
    * schema `object`: Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
    * structure `object`: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
    * type **required** `string`: Type of dataset.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### DeleteDataFlowDebugSessionRequest
* DeleteDataFlowDebugSessionRequest `object`: Request body structure for deleting data flow debug session.
  * sessionId `string`: The ID of data flow debug session.

### ExposureControlRequest
* ExposureControlRequest `object`: The exposure control request.
  * featureName `string`: The feature name.
  * featureType `string`: The feature type.

### ExposureControlResponse
* ExposureControlResponse `object`: The exposure control response.
  * featureName `string`: The feature name.
  * value `string`: The feature value.

### Expression
* Expression `object`: Azure Data Factory expression definition.
  * type **required** `string` (values: Expression): Expression type.
  * value **required** `string`: Expression value.

### Factory
* Factory `object`: Factory resource type.
  * identity [FactoryIdentity](#factoryidentity)
  * properties [FactoryProperties](#factoryproperties)
  * eTag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### FactoryGitHubConfiguration
* FactoryGitHubConfiguration `object`: Factory's GitHub repo information.
  * hostName `string`: GitHub Enterprise host name. For example: https://github.mydomain.com
  * accountName **required** `string`: Account name.
  * collaborationBranch **required** `string`: Collaboration branch.
  * lastCommitId `string`: Last commit id.
  * repositoryName **required** `string`: Repository name.
  * rootFolder **required** `string`: Root folder.
  * type **required** `string`: Type of repo configuration.

### FactoryIdentity
* FactoryIdentity `object`: Identity properties of the factory resource.
  * principalId `string`: The principal id of the identity.
  * tenantId `string`: The client tenant id of the identity.
  * type **required** `string` (values: SystemAssigned): The identity type. Currently the only supported type is 'SystemAssigned'.

### FactoryListResponse
* FactoryListResponse `object`: A list of factory resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of factories.
    * items [Factory](#factory)

### FactoryProperties
* FactoryProperties `object`: Factory resource properties.
  * createTime `string`: Time the factory was created in ISO8601 format.
  * provisioningState `string`: Factory provisioning state, example Succeeded.
  * repoConfiguration [FactoryRepoConfiguration](#factoryrepoconfiguration)
  * version `string`: Version of the factory.

### FactoryRepoConfiguration
* FactoryRepoConfiguration `object`: Factory's git repo information.
  * accountName **required** `string`: Account name.
  * collaborationBranch **required** `string`: Collaboration branch.
  * lastCommitId `string`: Last commit id.
  * repositoryName **required** `string`: Repository name.
  * rootFolder **required** `string`: Root folder.
  * type **required** `string`: Type of repo configuration.

### FactoryRepoUpdate
* FactoryRepoUpdate `object`: Factory's git repo information.
  * factoryResourceId `string`: The factory resource id.
  * repoConfiguration [FactoryRepoConfiguration](#factoryrepoconfiguration)

### FactoryUpdateParameters
* FactoryUpdateParameters `object`: Parameters for updating a factory resource.
  * identity [FactoryIdentity](#factoryidentity)
  * tags `object`: The resource tags.

### FactoryVSTSConfiguration
* FactoryVSTSConfiguration `object`: Factory's VSTS repo information.
  * projectName **required** `string`: VSTS project name.
  * tenantId `string`: VSTS tenant id.
  * accountName **required** `string`: Account name.
  * collaborationBranch **required** `string`: Collaboration branch.
  * lastCommitId `string`: Last commit id.
  * repositoryName **required** `string`: Repository name.
  * rootFolder **required** `string`: Root folder.
  * type **required** `string`: Type of repo configuration.

### GetDataFactoryOperationStatusResponse
* GetDataFactoryOperationStatusResponse `object`: Response body structure for get data factory operation status.
  * status `string`: Status of the operation.

### GetSsisObjectMetadataRequest
* GetSsisObjectMetadataRequest `object`: The request payload of get SSIS object metadata.
  * metadataPath `string`: Metadata path.

### GitHubAccessTokenRequest
* GitHubAccessTokenRequest `object`: Get GitHub access token request definition.
  * gitHubAccessCode **required** `string`: GitHub access code.
  * gitHubAccessTokenBaseUrl **required** `string`: GitHub access token base URL.
  * gitHubClientId `string`: GitHub application client ID.

### GitHubAccessTokenResponse
* GitHubAccessTokenResponse `object`: Get GitHub access token response definition.
  * gitHubAccessToken `string`: GitHub access token.

### IntegrationRuntimeDebugResource
* IntegrationRuntimeDebugResource `object`: Integration runtime debug resource.
  * properties **required** `object`: Azure Data Factory nested object which serves as a compute resource for activities.
    * description `string`: Integration runtime description.
    * type **required** `string` (values: Managed, SelfHosted): The type of integration runtime.
  * name `string`: The resource name.

### IntegrationRuntimeListResponse
* IntegrationRuntimeListResponse `object`: A list of integration runtime resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of integration runtimes.
    * items [IntegrationRuntimeResource](#integrationruntimeresource)

### IntegrationRuntimeReference
* IntegrationRuntimeReference `object`: Integration runtime reference type.
  * parameters `object`: An object mapping parameter names to argument values.
  * referenceName **required** `string`: Reference integration runtime name.
  * type **required** `string` (values: IntegrationRuntimeReference): Type of integration runtime.

### IntegrationRuntimeResource
* IntegrationRuntimeResource `object`: Integration runtime resource type.
  * properties **required** `object`: Azure Data Factory nested object which serves as a compute resource for activities.
    * description `string`: Integration runtime description.
    * type **required** `string` (values: Managed, SelfHosted): The type of integration runtime.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### IntegrationRuntimeStatusListResponse
* IntegrationRuntimeStatusListResponse `object`: A list of integration runtime status.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of integration runtime status.
    * items [IntegrationRuntimeStatusResponse](#integrationruntimestatusresponse)

### IntegrationRuntimeStatusResponse
* IntegrationRuntimeStatusResponse `object`: Integration runtime status response.
  * name `string`: The integration runtime name.
  * properties **required** `object`: Integration runtime status.
    * dataFactoryName `string`: The data factory name which the integration runtime belong to.
    * state `string` (values: Initial, Stopped, Started, Starting, Stopping, NeedRegistration, Online, Limited, Offline, AccessDenied): The state of integration runtime.
    * type **required** `string` (values: Managed, SelfHosted): The type of integration runtime.

### LinkedIntegrationRuntimeRequest
* LinkedIntegrationRuntimeRequest `object`: Data factory name for linked integration runtime request.
  * factoryName **required** `string`: The data factory name for linked integration runtime.

### LinkedServiceDebugResource
* LinkedServiceDebugResource `object`: Linked service debug resource.
  * properties **required** `object`: The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
    * annotations `array`: List of tags that can be used for describing the linked service.
      * items `object`
    * connectVia `object`: Integration runtime reference type.
      * parameters `object`: An object mapping parameter names to argument values.
      * referenceName **required** `string`: Reference integration runtime name.
      * type **required** `string` (values: IntegrationRuntimeReference): Type of integration runtime.
    * description `string`: Linked service description.
    * parameters `object`: Definition of all parameters for an entity.
    * type **required** `string`: Type of linked service.
  * name `string`: The resource name.

### LinkedServiceListResponse
* LinkedServiceListResponse `object`: A list of linked service resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of linked services.
    * items [LinkedServiceResource](#linkedserviceresource)

### LinkedServiceReference
* LinkedServiceReference `object`: Linked service reference type.
  * parameters `object`: An object mapping parameter names to argument values.
  * referenceName **required** `string`: Reference LinkedService name.
  * type **required** `string` (values: LinkedServiceReference): Linked service reference type.

### LinkedServiceResource
* LinkedServiceResource `object`: Linked service resource type.
  * properties **required** `object`: The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
    * annotations `array`: List of tags that can be used for describing the linked service.
      * items `object`
    * connectVia `object`: Integration runtime reference type.
      * parameters `object`: An object mapping parameter names to argument values.
      * referenceName **required** `string`: Reference integration runtime name.
      * type **required** `string` (values: IntegrationRuntimeReference): Type of integration runtime.
    * description `string`: Linked service description.
    * parameters `object`: Definition of all parameters for an entity.
    * type **required** `string`: Type of linked service.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### Operation
* Operation `object`: Azure Data Factory API operation definition.
  * display `object`: Metadata associated with the operation.
    * description `string`: The description of the operation.
    * operation `string`: The type of operation: get, read, delete, etc.
    * provider `string`: The name of the provider.
    * resource `string`: The name of the resource type on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}
  * origin `string`: The intended executor of the operation.
  * properties [OperationProperties](#operationproperties)

### OperationListResponse
* OperationListResponse `object`: A list of operations that can be performed by the Data Factory service.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value `array`: List of Data Factory operations supported by the Data Factory resource provider.
    * items [Operation](#operation)

### OperationLogSpecification
* OperationLogSpecification `object`: Details about an operation related to logs.
  * blobDuration `string`: Blobs created in the customer storage account, per hour.
  * displayName `string`: Localized display name.
  * name `string`: The name of the log category.

### OperationMetricAvailability
* OperationMetricAvailability `object`: Defines how often data for a metric becomes available.
  * blobDuration `string`: Blob created in the customer storage account, per hour.
  * timeGrain `string`: The granularity for the metric.

### OperationMetricDimension
* OperationMetricDimension `object`: Defines the metric dimension.
  * displayName `string`: The display name of the metric dimension.
  * name `string`: The name of the dimension for the metric.
  * toBeExportedForShoebox `boolean`: Whether the dimension should be exported to Azure Monitor.

### OperationMetricSpecification
* OperationMetricSpecification `object`: Details about an operation related to metrics.
  * aggregationType `string`: The type of metric aggregation.
  * availabilities `array`: Defines how often data for metrics becomes available.
    * items [OperationMetricAvailability](#operationmetricavailability)
  * dimensions `array`: Defines the metric dimension.
    * items [OperationMetricDimension](#operationmetricdimension)
  * displayDescription `string`: The description of the metric.
  * displayName `string`: Localized display name of the metric.
  * enableRegionalMdmAccount `string`: Whether or not the service is using regional MDM accounts.
  * name `string`: The name of the metric.
  * sourceMdmAccount `string`: The name of the MDM account.
  * sourceMdmNamespace `string`: The name of the MDM namespace.
  * unit `string`: The unit that the metric is measured in.

### OperationProperties
* OperationProperties `object`: Additional details about an operation.
  * serviceSpecification [OperationServiceSpecification](#operationservicespecification)

### OperationServiceSpecification
* OperationServiceSpecification `object`: Details about a service operation.
  * logSpecifications `array`: Details about operations related to logs.
    * items [OperationLogSpecification](#operationlogspecification)
  * metricSpecifications `array`: Details about operations related to metrics.
    * items [OperationMetricSpecification](#operationmetricspecification)

### ParameterDefinitionSpecification
* ParameterDefinitionSpecification `object`: Definition of all parameters for an entity.

### ParameterSpecification
* ParameterSpecification `object`: Definition of a single parameter for an entity.
  * defaultValue `object`: Default value of parameter.
  * type **required** `string` (values: Object, String, Int, Float, Bool, Array, SecureString): Parameter type.

### ParameterValueSpecification
* ParameterValueSpecification `object`: An object mapping parameter names to argument values.

### PipelineListResponse
* PipelineListResponse `object`: A list of pipeline resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of pipelines.
    * items [PipelineResource](#pipelineresource)

### PipelineReference
* PipelineReference `object`: Pipeline reference type.
  * name `string`: Reference name.
  * referenceName **required** `string`: Reference pipeline name.
  * type **required** `string` (values: PipelineReference): Pipeline reference type.

### PipelineResource
* PipelineResource `object`: Pipeline resource type.
  * properties **required** `object`: A data factory pipeline.
    * activities `array`: List of activities in pipeline.
      * items `object`: A pipeline activity.
        * dependsOn `array`: Activity depends on condition.
          * items `object`: Activity dependency information.
        * description `string`: Activity description.
        * name **required** `string`: Activity name.
        * type **required** `string`: Type of activity.
        * userProperties `array`: Activity user properties.
          * items `object`: User property.
    * annotations `array`: List of tags that can be used for describing the Pipeline.
      * items `object`
    * concurrency `integer`: The max number of concurrent runs for the pipeline.
    * description `string`: The description of the pipeline.
    * folder `object`: The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
      * name `string`: The name of the folder that this Pipeline is in.
    * parameters `object`: Definition of all parameters for an entity.
    * runDimensions `object`: Dimensions emitted by Pipeline.
    * variables `object`: Definition of variable for a Pipeline.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### PipelineRun
* PipelineRun `object`: Information about a pipeline run.
  * durationInMs `integer`: The duration of a pipeline run.
  * invokedBy [PipelineRunInvokedBy](#pipelineruninvokedby)
  * isLatest `boolean`: Indicates if the recovered pipeline run is the latest in its group.
  * lastUpdated `string`: The last updated timestamp for the pipeline run event in ISO8601 format.
  * message `string`: The message from a pipeline run.
  * parameters `object`: The full or partial list of parameter name, value pair used in the pipeline run.
  * pipelineName `string`: The pipeline name.
  * runDimensions `object`: Run dimensions emitted by Pipeline run.
  * runEnd `string`: The end time of a pipeline run in ISO8601 format.
  * runGroupId `string`: Identifier that correlates all the recovery runs of a pipeline run.
  * runId `string`: Identifier of a run.
  * runStart `string`: The start time of a pipeline run in ISO8601 format.
  * status `string`: The status of a pipeline run.

### PipelineRunInvokedBy
* PipelineRunInvokedBy `object`: Provides entity name and id that started the pipeline run.
  * id `string`: The ID of the entity that started the run.
  * invokedByType `string`: The type of the entity that started the run.
  * name `string`: Name of the entity that started the pipeline run.

### PipelineRunsQueryResponse
* PipelineRunsQueryResponse `object`: A list pipeline runs.
  * continuationToken `string`: The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
  * value **required** `array`: List of pipeline runs.
    * items [PipelineRun](#pipelinerun)

### QueryDataFlowDebugSessionsResponse
* QueryDataFlowDebugSessionsResponse `object`: A list of active debug sessions.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value `array`: Array with all active debug sessions.
    * items [DataFlowDebugSessionInfo](#dataflowdebugsessioninfo)

### RerunTriggerListResponse
* RerunTriggerListResponse `object`: A list of rerun triggers.
  * nextLink `string`: The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
  * value **required** `array`: List of rerun triggers.
    * items [RerunTriggerResource](#reruntriggerresource)

### RerunTriggerResource
* RerunTriggerResource `object`: RerunTrigger resource type.
  * properties **required** `object`: Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
    * typeProperties **required** `object`: Rerun Trigger properties.
      * maxConcurrency **required** `integer`: The max number of parallel time windows (ready for execution) for which a rerun is triggered.
      * parentTrigger `object`: The parent trigger reference.
      * requestedEndTime **required** `string`: The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
      * requestedStartTime **required** `string`: The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
    * annotations `array`: List of tags that can be used for describing the trigger.
      * items `object`
    * description `string`: Trigger description.
    * runtimeState `string` (values: Started, Stopped, Disabled): Enumerates possible state of Triggers.
    * type **required** `string`: Trigger type.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### RerunTumblingWindowTriggerActionParameters
* RerunTumblingWindowTriggerActionParameters `object`: Rerun tumbling window trigger Parameters.
  * endTime **required** `string`: The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
  * maxConcurrency **required** `integer`: The max number of parallel time windows (ready for execution) for which a rerun is triggered.
  * startTime **required** `string`: The start time for the time period for which restatement is initiated. Only UTC time is currently supported.

### Resource
* Resource `object`: Azure Data Factory top-level resource.
  * eTag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### RunFilterParameters
* RunFilterParameters `object`: Query parameters for listing runs.
  * continuationToken `string`: The continuation token for getting the next page of results. Null for first page.
  * filters `array`: List of filters.
    * items [RunQueryFilter](#runqueryfilter)
  * lastUpdatedAfter **required** `string`: The time at or after which the run event was updated in 'ISO 8601' format.
  * lastUpdatedBefore **required** `string`: The time at or before which the run event was updated in 'ISO 8601' format.
  * orderBy `array`: List of OrderBy option.
    * items [RunQueryOrderBy](#runqueryorderby)

### RunQueryFilter
* RunQueryFilter `object`: Query filter option for listing runs.
  * operand **required** `string` (values: PipelineName, Status, RunStart, RunEnd, ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType, TriggerName, TriggerRunTimestamp, RunGroupId, LatestOnly): Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status.
  * operator **required** `string` (values: Equals, NotEquals, In, NotIn): Operator to be used for filter.
  * values **required** `array`: List of filter values.
    * items `string`

### RunQueryOrderBy
* RunQueryOrderBy `object`: An object to provide order by options for listing runs.
  * order **required** `string` (values: ASC, DESC): Sorting order of the parameter.
  * orderBy **required** `string` (values: RunStart, RunEnd, PipelineName, Status, ActivityName, ActivityRunStart, ActivityRunEnd, TriggerName, TriggerRunTimestamp): Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status.

### SecretBase
* SecretBase `object`: The base definition of a secret type.
  * type **required** `string`: Type of the secret.

### SecureString
* SecureString `object`: Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
  * value **required** `string`: Value of secure string.
  * type **required** `string`: Type of the secret.

### SsisObjectMetadataStatusResponse
* SsisObjectMetadataStatusResponse `object`: The status of the operation.
  * error `string`: The operation error message.
  * name `string`: The operation name.
  * properties `string`: The operation properties.
  * status `string`: The status of the operation.

### SubResource
* SubResource `object`: Azure Data Factory nested resource, which belongs to a factory.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### SubResourceDebugResource
* SubResourceDebugResource `object`: Azure Data Factory nested debug resource.
  * name `string`: The resource name.

### TriggerListResponse
* TriggerListResponse `object`: A list of trigger resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of triggers.
    * items [TriggerResource](#triggerresource)

### TriggerPipelineReference
* TriggerPipelineReference `object`: Pipeline that needs to be triggered with the given parameters.
  * parameters [ParameterValueSpecification](#parametervaluespecification)
  * pipelineReference [PipelineReference](#pipelinereference)

### TriggerResource
* TriggerResource `object`: Trigger resource type.
  * properties **required** `object`: Azure data factory nested object which contains information about creating pipeline run
    * annotations `array`: List of tags that can be used for describing the trigger.
      * items `object`
    * description `string`: Trigger description.
    * runtimeState `string` (values: Started, Stopped, Disabled): Enumerates possible state of Triggers.
    * type **required** `string`: Trigger type.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### TriggerRun
* TriggerRun `object`: Trigger runs.
  * dependencyStatus `object`: Status of the upstream pipelines.
  * message `string`: Trigger error message.
  * properties `object`: List of property name and value related to trigger run. Name, value pair depends on type of trigger.
  * runDimension `object`: Run dimension for which trigger was fired.
  * status `string` (values: Succeeded, Failed, Inprogress): Trigger run status.
  * triggerName `string`: Trigger name.
  * triggerRunId `string`: Trigger run id.
  * triggerRunTimestamp `string`: Trigger run start time.
  * triggerType `string`: Trigger type.
  * triggeredPipelines `object`: List of pipeline name and run Id triggered by the trigger run.

### TriggerRunsQueryResponse
* TriggerRunsQueryResponse `object`: A list of trigger runs.
  * continuationToken `string`: The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
  * value **required** `array`: List of trigger runs.
    * items [TriggerRun](#triggerrun)

### TriggerSubscriptionOperationStatus
* TriggerSubscriptionOperationStatus `object`: Defines the response of a trigger subscription operation.
  * status `string` (values: Enabled, Provisioning, Deprovisioning, Disabled, Unknown): Event Subscription Status.
  * triggerName `string`: Trigger name.

### UpdateIntegrationRuntimeNodeRequest
* UpdateIntegrationRuntimeNodeRequest `object`: Update integration runtime node request.
  * concurrentJobsLimit `integer`: The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed.

### UpdateIntegrationRuntimeRequest
* UpdateIntegrationRuntimeRequest `object`: Update integration runtime request.
  * autoUpdate `string` (values: On, Off): The state of integration runtime auto update.
  * updateDelayOffset `string`: The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time.

### UserAccessPolicy
* UserAccessPolicy `object`: Get Data Plane read only token request definition.
  * accessResourcePath `string`: The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource.
  * expireTime `string`: Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours.
  * permissions `string`: The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access.
  * profileName `string`: The name of the profile. Currently only the default is supported. The default value is DefaultProfile.
  * startTime `string`: Start time for the token. If not specified the current time will be used.

### VariableDefinitionSpecification
* VariableDefinitionSpecification `object`: Definition of variable for a Pipeline.

### VariableSpecification
* VariableSpecification `object`: Definition of a single variable for a Pipeline.
  * defaultValue `object`: Default value of variable.
  * type **required** `string` (values: String, Bool, Array): Variable type.


