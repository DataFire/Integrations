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

azure_datafactory.Operations_List({
  "api-version": ""
}).then(data => {
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

#### Output
* output [Factory](#factory)

### Factories_CancelPipelineRun
Cancel a pipeline run by its run ID.


```js
azure_datafactory.Factories_CancelPipelineRun({
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
*Output schema unknown*

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
* output [IntegrationRuntimeStatusResponse](#integrationruntimestatusresponse)

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
      * cpuUtilization `number`: CPU percentage on the integration runtime node.
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
  * lastUpdateResult `string` (values: Succeed, Fail): The result of the last integration runtime node update.
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

### IntegrationRuntimes_RemoveNode
Remove a node from integration runtime.


```js
azure_datafactory.IntegrationRuntimes_RemoveNode({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "integrationRuntimeName": "",
  "api-version": "",
  "removeNodeParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * integrationRuntimeName **required** `string`: The integration runtime name.
  * api-version **required** `string`: The API version.
  * removeNodeParameters **required** `object`: Request to remove a node.
    * nodeName `string`: The name of the node to be removed.

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
Upgrade self-hosted integration runtime to latest version if availably.


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
  * filterParameters **required** [PipelineRunFilterParameters](#pipelinerunfilterparameters)

#### Output
* output [PipelineRunQueryResponse](#pipelinerunqueryresponse)

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

### ActivityRuns_ListByPipelineRun
List activity runs based on input filter conditions.


```js
azure_datafactory.ActivityRuns_ListByPipelineRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "runId": "",
  "api-version": "",
  "startTime": "",
  "endTime": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * runId **required** `string`: The pipeline run identifier.
  * api-version **required** `string`: The API version.
  * startTime **required** `string`: The start time of activity runs in ISO8601 format.
  * endTime **required** `string`: The end time of activity runs in ISO8601 format.
  * status `string`: The status of the pipeline run.
  * activityName `string`: The name of the activity.
  * linkedServiceName `string`: The linked service name.

#### Output
* output [ActivityRunsListResponse](#activityrunslistresponse)

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
  * parameters [ParameterValueSpecification](#parametervaluespecification)

#### Output
* output [CreateRunResponse](#createrunresponse)

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

### Triggers_ListRuns
List trigger runs.


```js
azure_datafactory.Triggers_ListRuns({
  "subscriptionId": "",
  "resourceGroupName": "",
  "factoryName": "",
  "triggerName": "",
  "api-version": "",
  "startTime": "",
  "endTime": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The resource group name.
  * factoryName **required** `string`: The factory name.
  * triggerName **required** `string`: The trigger name.
  * api-version **required** `string`: The API version.
  * startTime **required** `string`: Start time for trigger runs.
  * endTime **required** `string`: End time for trigger runs.

#### Output
* output [TriggerRunListResponse](#triggerrunlistresponse)



## Definitions

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

### ActivityRunsListResponse
* ActivityRunsListResponse `object`: A list activity runs.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of activity runs.
    * items [ActivityRun](#activityrun)

### AzureKeyVaultSecretReference
* AzureKeyVaultSecretReference `object`: Azure Key Vault secret reference.
  * secretName **required** `object`: The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
  * secretVersion `object`: The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
  * store **required** [LinkedServiceReference](#linkedservicereference)
  * type **required** `string`: Type of the secret.

### CreateRunResponse
* CreateRunResponse `object`: Response body with a run identifier.
  * runId **required** `string`: Identifier of a run.

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
    * description `string`: Dataset description.
    * linkedServiceName **required** `object`: Linked service reference type.
      * referenceName **required** `string`: Reference LinkedService name.
      * type **required** `string` (values: LinkedServiceReference): Linked service reference type.
    * parameters `object`: Definition of all parameters for an entity.
    * structure `object`: Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
    * type **required** `string`: Type of dataset.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### ErrorResponse
* ErrorResponse `object`: The object that defines the structure of an Azure Data Factory response.
  * code **required** `string`: Error code.
  * details `array`: Array with additional error details.
    * items [ErrorResponse](#errorresponse)
  * message **required** `string`: Error message.
  * target `string`: Property name/path in request associated with error.

### Expression
* Expression `object`: Azure Data Factory expression definition.
  * type **required** `string` (values: Expression): Expression type.
  * value **required** `string`: Expression value.

### Factory
* Factory `object`: Factory resource type.
  * identity [FactoryIdentity](#factoryidentity)
  * properties [FactoryProperties](#factoryproperties)
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

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
  * version `string`: Version of the factory.

### FactoryUpdateParameters
* FactoryUpdateParameters `object`: Parameters for updating a factory resource.
  * identity [FactoryIdentity](#factoryidentity)
  * tags `object`: The resource tags.

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
    * state `string` (values: Initial, Stopped, Started, Starting, Stopping, NeedRegistration, Online, Limited, Offline): The state of integration runtime.
    * type `string` (values: Managed, SelfHosted): The type of integration runtime.

### LinkedServiceListResponse
* LinkedServiceListResponse `object`: A list of linked service resources.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of linked services.
    * items [LinkedServiceResource](#linkedserviceresource)

### LinkedServiceReference
* LinkedServiceReference `object`: Linked service reference type.
  * referenceName **required** `string`: Reference LinkedService name.
  * type **required** `string` (values: LinkedServiceReference): Linked service reference type.

### LinkedServiceResource
* LinkedServiceResource `object`: Linked service resource type.
  * properties **required** `object`: The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
    * connectVia `object`: Integration runtime reference type.
      * parameters `object`: An object mapping parameter names to argument values.
      * referenceName **required** `string`: Reference integration runtime name.
      * type **required** `string` (values: IntegrationRuntimeReference): Type of integration runtime.
    * description `string`: Linked service description.
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

### OperationMetricSpecification
* OperationMetricSpecification `object`: Details about an operation related to metrics.
  * aggregationType `string`: The type of metric aggregation.
  * availabilities `array`: Defines how often data for metrics becomes available.
    * items [OperationMetricAvailability](#operationmetricavailability)
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
  * type **required** `string` (values: Object, String, Int, Float, Bool, Array): Parameter type.

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
            * activity **required** `string`: Activity name.
            * dependencyConditions **required** `array`: Match-Condition for the dependency.
              * items `string` (values: Succeeded, Failed, Skipped, Completed)
        * description `string`: Activity description.
        * name **required** `string`: Activity name.
        * type **required** `string`: Type of activity.
    * concurrency `integer`: The max number of concurrent runs for the pipeline.
    * description `string`: The description of the pipeline.
    * parameters `object`: Definition of all parameters for an entity.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### PipelineRun
* PipelineRun `object`: Information about a pipeline run.
  * durationInMs `integer`: The duration of a pipeline run.
  * invokedBy [PipelineRunInvokedBy](#pipelineruninvokedby)
  * lastUpdated `string`: The last updated timestamp for the pipeline run event in ISO8601 format.
  * message `string`: The message from a pipeline run.
  * parameters `object`: The full or partial list of parameter name, value pair used in the pipeline run.
  * pipelineName `string`: The pipeline name.
  * runEnd `string`: The end time of a pipeline run in ISO8601 format.
  * runId `string`: Identifier of a run.
  * runStart `string`: The start time of a pipeline run in ISO8601 format.
  * status `string`: The status of a pipeline run.

### PipelineRunFilterParameters
* PipelineRunFilterParameters `object`: Query parameters for listing pipeline runs.
  * continuationToken `string`: The continuation token for getting the next page of results. Null for first page.
  * filters `array`: List of filters.
    * items [PipelineRunQueryFilter](#pipelinerunqueryfilter)
  * lastUpdatedAfter **required** `string`: The time at or after which the pipeline run event was updated in 'ISO 8601' format.
  * lastUpdatedBefore **required** `string`: The time at or before which the pipeline run event was updated in 'ISO 8601' format.
  * orderBy `array`: List of OrderBy option.
    * items [PipelineRunQueryOrderBy](#pipelinerunqueryorderby)

### PipelineRunInvokedBy
* PipelineRunInvokedBy `object`: Provides entity name and id that started the pipeline run.
  * id `string`: The ID of the entity that started the run.
  * name `string`: Name of the entity that started the pipeline run.

### PipelineRunQueryFilter
* PipelineRunQueryFilter `object`: Query filter option for listing pipeline runs.
  * operand **required** `string` (values: PipelineName, Status, RunStart, RunEnd): Parameter name to be used for filter.
  * operator **required** `string` (values: Equals, NotEquals, In, NotIn): Operator to be used for filter.
  * values **required** `array`: List of filter values.
    * items `string`

### PipelineRunQueryOrderBy
* PipelineRunQueryOrderBy `object`: An object to provide order by options for listing pipeline runs.
  * order **required** `string` (values: ASC, DESC): Sorting order of the parameter.
  * orderBy **required** `string` (values: RunStart, RunEnd): Parameter name to be used for order by.

### PipelineRunQueryResponse
* PipelineRunQueryResponse `object`: A list pipeline runs.
  * continuationToken `string`: The continuation token for getting the next page of results, if any remaining results exist, null otherwise.
  * value **required** `array`: List of pipeline runs.
    * items [PipelineRun](#pipelinerun)

### Resource
* Resource `object`: Azure Data Factory top-level resource.
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### SecretBase
* SecretBase `object`: The base definition of a secret type.
  * type **required** `string`: Type of the secret.

### SecureString
* SecureString `object`: Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
  * value **required** `string`: Value of secure string.
  * type **required** `string`: Type of the secret.

### SubResource
* SubResource `object`: Azure Data Factory nested resource, which belongs to a factory.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

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
    * description `string`: Trigger description.
    * runtimeState `string` (values: Started, Stopped, Disabled): Enumerates possible state of Triggers.
    * type **required** `string`: Trigger type.
  * etag `string`: Etag identifies change in the resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### TriggerRun
* TriggerRun `object`: Trigger runs.
  * message `string`: Trigger error message.
  * properties `object`: List of property name and value related to trigger run. Name, value pair depends on type of trigger.
  * status `string` (values: Succeeded, Failed, Inprogress): Trigger run status.
  * triggerName `string`: Trigger name.
  * triggerRunId `string`: Trigger run id.
  * triggerRunTimestamp `string`: Trigger run start time.
  * triggerType `string`: Trigger type.
  * triggeredPipelines `object`: List of pipeline name and run Id triggered by the trigger run.

### TriggerRunListResponse
* TriggerRunListResponse `object`: A list of trigger runs.
  * nextLink `string`: The link to the next page of results, if any remaining results exist.
  * value **required** `array`: List of trigger runs.
    * items [TriggerRun](#triggerrun)

### UpdateIntegrationRuntimeNodeRequest
* UpdateIntegrationRuntimeNodeRequest `object`: Update integration runtime node request.
  * concurrentJobsLimit `integer`: The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed.

### UpdateIntegrationRuntimeRequest
* UpdateIntegrationRuntimeRequest `object`: Update integration runtime request.
  * autoUpdate `string` (values: On, Off): The state of integration runtime auto update.
  * updateDelayOffset `string`: The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time.


