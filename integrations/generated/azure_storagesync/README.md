# @datafire/azure_storagesync

Client library for Microsoft Storage Sync

## Installation and Usage
```bash
npm install --save @datafire/azure_storagesync
```
```js
let azure_storagesync = require('@datafire/azure_storagesync').create({
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

Microsoft Storage Sync Service API

## Actions

### Operations_List
Lists all of the available Storage Sync Rest API operations.


```js
azure_storagesync.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### StorageSyncServices_CheckNameAvailability
Check the give namespace name availability.


```js
azure_storagesync.StorageSyncServices_CheckNameAvailability({
  "locationName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The desired region for the name check.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * parameters **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### StorageSyncServices_ListBySubscription
Get a StorageSyncService list by subscription.


```js
azure_storagesync.StorageSyncServices_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [StorageSyncServiceArray](#storagesyncservicearray)

### OperationStatus_Get
Get Operation status


```js
azure_storagesync.OperationStatus_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "locationName": "",
  "workflowId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * locationName **required** `string`: The desired region to obtain information from.
  * workflowId **required** `string`: workflow Id
  * operationId **required** `string`: operation Id

#### Output
* output [OperationStatus](#operationstatus)

### StorageSyncServices_ListByResourceGroup
Get a StorageSyncService list by Resource group name.


```js
azure_storagesync.StorageSyncServices_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [StorageSyncServiceArray](#storagesyncservicearray)

### StorageSyncServices_Delete
Delete a given StorageSyncService.


```js
azure_storagesync.StorageSyncServices_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.

#### Output
*Output schema unknown*

### StorageSyncServices_Get
Get a given StorageSyncService.


```js
azure_storagesync.StorageSyncServices_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "storageSyncServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [StorageSyncService](#storagesyncservice)

### StorageSyncServices_Update
Patch a given StorageSyncService.


```js
azure_storagesync.StorageSyncServices_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * parameters [StorageSyncServiceUpdateParameters](#storagesyncserviceupdateparameters)

#### Output
* output [StorageSyncService](#storagesyncservice)

### StorageSyncServices_Create
Create a new StorageSyncService.


```js
azure_storagesync.StorageSyncServices_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * parameters **required** [StorageSyncServiceCreateParameters](#storagesyncservicecreateparameters)

#### Output
* output [StorageSyncService](#storagesyncservice)

### RegisteredServers_ListByStorageSyncService
Get a given registered server list.


```js
azure_storagesync.RegisteredServers_ListByStorageSyncService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.

#### Output
* output [RegisteredServerArray](#registeredserverarray)

### RegisteredServers_Delete
Delete the given registered server.


```js
azure_storagesync.RegisteredServers_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "serverId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * serverId **required** `string`: GUID identifying the on-premises server.

#### Output
*Output schema unknown*

### RegisteredServers_Get
Get a given registered server.


```js
azure_storagesync.RegisteredServers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "serverId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * serverId **required** `string`: GUID identifying the on-premises server.

#### Output
* output [RegisteredServer](#registeredserver)

### RegisteredServers_Create
Add a new registered server.


```js
azure_storagesync.RegisteredServers_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "serverId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * serverId **required** `string`: GUID identifying the on-premises server.
  * parameters **required** [RegisteredServerCreateParameters](#registeredservercreateparameters)

#### Output
* output [RegisteredServer](#registeredserver)

### RegisteredServers_triggerRollover
Triggers Server certificate rollover.


```js
azure_storagesync.RegisteredServers_triggerRollover({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "serverId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * serverId **required** `string`: Server Id
  * parameters **required** [TriggerRolloverRequest](#triggerrolloverrequest)

#### Output
*Output schema unknown*

### SyncGroups_ListByStorageSyncService
Get a SyncGroup List.


```js
azure_storagesync.SyncGroups_ListByStorageSyncService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.

#### Output
* output [SyncGroupArray](#syncgrouparray)

### SyncGroups_Delete
Delete a given SyncGroup.


```js
azure_storagesync.SyncGroups_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.

#### Output
*Output schema unknown*

### SyncGroups_Get
Get a given SyncGroup.


```js
azure_storagesync.SyncGroups_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.

#### Output
* output [SyncGroup](#syncgroup)

### SyncGroups_Create
Create a new SyncGroup.


```js
azure_storagesync.SyncGroups_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * parameters **required** [SyncGroupCreateParameters](#syncgroupcreateparameters)

#### Output
* output [SyncGroup](#syncgroup)

### CloudEndpoints_ListBySyncGroup
Get a CloudEndpoint List.


```js
azure_storagesync.CloudEndpoints_ListBySyncGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.

#### Output
* output [CloudEndpointArray](#cloudendpointarray)

### CloudEndpoints_Delete
Delete a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.

#### Output
*Output schema unknown*

### CloudEndpoints_Get
Get a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.

#### Output
* output [CloudEndpoint](#cloudendpoint)

### CloudEndpoints_Create
Create a new CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.
  * parameters **required** [CloudEndpointCreateParameters](#cloudendpointcreateparameters)

#### Output
* output [CloudEndpoint](#cloudendpoint)

### CloudEndpoints_PostBackup
Post Backup a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_PostBackup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.
  * parameters **required** [BackupRequest](#backuprequest)

#### Output
* output [PostBackupResponse](#postbackupresponse)

### CloudEndpoints_PostRestore
Post Restore a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_PostRestore({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.
  * parameters **required** [PostRestoreRequest](#postrestorerequest)

#### Output
*Output schema unknown*

### CloudEndpoints_PreBackup
Pre Backup a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_PreBackup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.
  * parameters **required** [BackupRequest](#backuprequest)

#### Output
*Output schema unknown*

### CloudEndpoints_PreRestore
Pre Restore a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_PreRestore({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.
  * parameters **required** [PreRestoreRequest](#prerestorerequest)

#### Output
*Output schema unknown*

### CloudEndpoints_restoreheartbeat
Restore Heartbeat a given CloudEndpoint.


```js
azure_storagesync.CloudEndpoints_restoreheartbeat({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.

#### Output
*Output schema unknown*

### CloudEndpoints_TriggerChangeDetection
Triggers detection of changes performed on Azure File share connected to the specified Azure File Sync Cloud Endpoint.


```js
azure_storagesync.CloudEndpoints_TriggerChangeDetection({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "cloudEndpointName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * cloudEndpointName **required** `string`: Name of Cloud Endpoint object.
  * parameters **required** [TriggerChangeDetectionParameters](#triggerchangedetectionparameters)

#### Output
*Output schema unknown*

### ServerEndpoints_ListBySyncGroup
Get a ServerEndpoint list.


```js
azure_storagesync.ServerEndpoints_ListBySyncGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.

#### Output
* output [ServerEndpointArray](#serverendpointarray)

### ServerEndpoints_Delete
Delete a given ServerEndpoint.


```js
azure_storagesync.ServerEndpoints_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "serverEndpointName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * serverEndpointName **required** `string`: Name of Server Endpoint object.

#### Output
*Output schema unknown*

### ServerEndpoints_Get
Get a ServerEndpoint.


```js
azure_storagesync.ServerEndpoints_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "serverEndpointName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * serverEndpointName **required** `string`: Name of Server Endpoint object.

#### Output
* output [ServerEndpoint](#serverendpoint)

### ServerEndpoints_Update
Patch a given ServerEndpoint.


```js
azure_storagesync.ServerEndpoints_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "serverEndpointName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * serverEndpointName **required** `string`: Name of Server Endpoint object.
  * parameters [ServerEndpointUpdateParameters](#serverendpointupdateparameters)

#### Output
* output [ServerEndpoint](#serverendpoint)

### ServerEndpoints_Create
Create a new ServerEndpoint.


```js
azure_storagesync.ServerEndpoints_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "serverEndpointName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * serverEndpointName **required** `string`: Name of Server Endpoint object.
  * parameters **required** [ServerEndpointCreateParameters](#serverendpointcreateparameters)

#### Output
* output [ServerEndpoint](#serverendpoint)

### ServerEndpoints_recallAction
Recall a server endpoint.


```js
azure_storagesync.ServerEndpoints_recallAction({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "syncGroupName": "",
  "serverEndpointName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * syncGroupName **required** `string`: Name of Sync Group resource.
  * serverEndpointName **required** `string`: Name of Server Endpoint object.
  * parameters **required** [RecallActionParameters](#recallactionparameters)

#### Output
*Output schema unknown*

### Workflows_ListByStorageSyncService
Get a Workflow List


```js
azure_storagesync.Workflows_ListByStorageSyncService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.

#### Output
* output [WorkflowArray](#workflowarray)

### Workflows_Get
Get Workflows resource


```js
azure_storagesync.Workflows_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "workflowId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * workflowId **required** `string`: workflow Id

#### Output
* output [Workflow](#workflow)

### Workflows_Abort
Abort the given workflow.


```js
azure_storagesync.Workflows_Abort({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "storageSyncServiceName": "",
  "workflowId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * storageSyncServiceName **required** `string`: Name of Storage Sync Service resource.
  * workflowId **required** `string`: workflow Id

#### Output
*Output schema unknown*



## Definitions

### BackupRequest
* BackupRequest `object`: Backup request
  * azureFileShare `string`: Azure File Share.

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Parameters for a check name availability request.
  * name **required** `string`: The name to check for availability
  * type **required** `string` (values: Microsoft.StorageSync/storageSyncServices): The resource type. Must be set to Microsoft.StorageSync/storageSyncServices

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The CheckNameAvailability operation response.
  * message `string`: Gets an error message explaining the Reason value in more detail.
  * nameAvailable `boolean`: Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used.
  * reason `string` (values: Invalid, AlreadyExists): Gets the reason that a Storage Sync Service name could not be used. The Reason element is only returned if NameAvailable is false.

### CloudEndpoint
* CloudEndpoint `object`: Cloud Endpoint object.
  * properties [CloudEndpointProperties](#cloudendpointproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### CloudEndpointArray
* CloudEndpointArray `object`: Array of CloudEndpoint
  * value `array`: Collection of CloudEndpoint.
    * items [CloudEndpoint](#cloudendpoint)

### CloudEndpointCreateParameters
* CloudEndpointCreateParameters `object`: The parameters used when creating a cloud endpoint.
  * properties [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### CloudEndpointCreateParametersProperties
* CloudEndpointCreateParametersProperties `object`: CloudEndpoint Properties object.
  * azureFileShareName `string`: Azure file share name
  * friendlyName `string`: Friendly Name
  * storageAccountResourceId `string`: Storage Account Resource Id
  * storageAccountTenantId `string`: Storage Account Tenant Id

### CloudEndpointProperties
* CloudEndpointProperties `object`: CloudEndpoint Properties object.
  * azureFileShareName `string`: Azure file share name
  * backupEnabled `string`: Backup Enabled
  * friendlyName `string`: Friendly Name
  * lastOperationName `string`: Resource Last Operation Name
  * lastWorkflowId `string`: CloudEndpoint lastWorkflowId
  * partnershipId `string`: Partnership Id
  * provisioningState `string`: CloudEndpoint Provisioning State
  * storageAccountResourceId `string`: Storage Account Resource Id
  * storageAccountTenantId `string`: Storage Account Tenant Id

### FeatureStatus
* FeatureStatus `string` (values: on, off): Type of the Feature Status

### FilesNotSyncingError
* FilesNotSyncingError `object`: Files not syncing error object
  * errorCode `integer`: Error code (HResult)
  * persistentCount `integer`: Count of persistent files not syncing with the specified error code
  * transientCount `integer`: Count of transient files not syncing with the specified error code

### HealthState
* HealthState `string` (values: Healthy, Error, SyncBlockedForRestore, SyncBlockedForChangeDetectionPostRestore, NoActivity): Type of the Health state

### OfflineDataTransferState
* OfflineDataTransferState `string` (values: InProgress, Stopping, NotRunning, Complete): Type of the Health state

### OperationDirection
* OperationDirection `string` (values: do, undo, cancel): Type of the Operation Direction

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by storage sync.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Microsoft StorageSync.
  * resource `string`: Resource on which the operation is performed.

### OperationDisplayResource
* OperationDisplayResource `object`: Operation Display Resource object.
  * description `string`: Operation Display Resource Description.
  * operation `string`: Operation Display Resource Operation.
  * provider `string`: Operation Display Resource Provider.
  * resource `string`: Operation Display Resource.

### OperationEntity
* OperationEntity `object`: The operation supported by storage sync.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.
  * origin `string`: The origin.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of storage sync operations.
  * nextLink `string`: The link used to get the next page of operations.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### OperationStatus
* OperationStatus `object`: Operation status object
  * endTime `string`: End time of the operation
  * error [StorageSyncApiError](#storagesyncapierror)
  * name `string`: Operation Id
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### PhysicalPath
* PhysicalPath `string`: Server folder used for data synchronization

### PostBackupResponse
* PostBackupResponse `object`: Post Backup Response
  * backupMetadata [PostBackupResponseProperties](#postbackupresponseproperties)

### PostBackupResponseProperties
* PostBackupResponseProperties `object`: Post Backup Response Properties object.
  * cloudEndpointName `string`: cloud endpoint Name.

### PostRestoreRequest
* PostRestoreRequest `object`: Post Restore Request
  * azureFileShareUri `string`: Post Restore Azure file share uri.
  * failedFileList `string`: Post Restore Azure failed file list.
  * partition `string`: Post Restore partition.
  * replicaGroup `string`: Post Restore replica group.
  * requestId `string`: Post Restore request id.
  * restoreFileSpec `array`: Post Restore restore file spec array.
    * items [RestoreFileSpec](#restorefilespec)
  * sourceAzureFileShareUri `string`: Post Restore Azure source azure file share uri.
  * status `string`: Post Restore Azure status.

### PreRestoreRequest
* PreRestoreRequest `object`: Pre Restore request object.
  * azureFileShareUri `string`: Pre Restore Azure file share uri.
  * backupMetadataPropertyBag `string`: Pre Restore backup metadata property bag.
  * partition `string`: Pre Restore partition.
  * pauseWaitForSyncDrainTimePeriodInSeconds `integer`: Pre Restore pause wait for sync drain time period in seconds.
  * replicaGroup `string`: Pre Restore replica group.
  * requestId `string`: Pre Restore request id.
  * restoreFileSpec `array`: Pre Restore restore file spec array.
    * items [RestoreFileSpec](#restorefilespec)
  * sourceAzureFileShareUri `string`: Pre Restore Azure source azure file share uri.
  * status `string`: Pre Restore Azure status.

### ProgressType
* ProgressType `string` (values: none, initialize, download, upload, recall): Type of the ProgressType

### RecallActionParameters
* RecallActionParameters `object`: The parameters used when calling recall action on server endpoint.
  * pattern `string`: Pattern of the files.
  * recallPath `string`: Recall path.

### RegisteredServer
* RegisteredServer `object`: Registered Server resource.
  * properties [RegisteredServerProperties](#registeredserverproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### RegisteredServerArray
* RegisteredServerArray `object`: Array of RegisteredServer
  * value `array`: Collection of Registered Server.
    * items [RegisteredServer](#registeredserver)

### RegisteredServerCreateParameters
* RegisteredServerCreateParameters `object`: The parameters used when creating a registered server.
  * properties [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### RegisteredServerCreateParametersProperties
* RegisteredServerCreateParametersProperties `object`
  * agentVersion `string`: Registered Server Agent Version
  * clusterId `string`: Registered Server clusterId
  * clusterName `string`: Registered Server clusterName
  * friendlyName `string`: Friendly Name
  * lastHeartBeat `string`: Registered Server last heart beat
  * serverCertificate `string`: Registered Server Certificate
  * serverId `string`: Registered Server serverId
  * serverOSVersion `string`: Registered Server OS Version
  * serverRole `string`: Registered Server serverRole

### RegisteredServerProperties
* RegisteredServerProperties `object`: RegisteredServer Properties object.
  * agentVersion `string`: Registered Server Agent Version
  * clusterId `string`: Registered Server clusterId
  * clusterName `string`: Registered Server clusterName
  * discoveryEndpointUri `string`: Resource discoveryEndpointUri
  * friendlyName `string`: Friendly Name
  * lastHeartBeat `string`: Registered Server last heart beat
  * lastOperationName `string`: Resource Last Operation Name
  * lastWorkflowId `string`: Registered Server lastWorkflowId
  * managementEndpointUri `string`: Management Endpoint Uri
  * monitoringConfiguration `string`: Monitoring Configuration
  * provisioningState `string`: Registered Server Provisioning State
  * resourceLocation `string`: Resource Location
  * serverCertificate `string`: Registered Server Certificate
  * serverId `string`: Registered Server serverId
  * serverManagementErrorCode `integer`: Registered Server Management Error Code
  * serverOSVersion `string`: Registered Server OS Version
  * serverRole `string`: Registered Server serverRole
  * serviceLocation `string`: Service Location
  * storageSyncServiceUid `string`: Registered Server storageSyncServiceUid

### ResourceId
* ResourceId `string`: Arm resource identifier.

### ResourcesMoveInfo
* ResourcesMoveInfo `object`: Resource Move Info.
  * resources `array`: Collection of Resources.
    * items [ResourceId](#resourceid)
  * targetResourceGroup `string`: Target resource group.

### RestoreFileSpec
* RestoreFileSpec `object`: Restore file spec.
  * isdir `boolean`: Restore file spec isdir
  * path `string`: Restore file spec path

### ServerEndpoint
* ServerEndpoint `object`: Server Endpoint object.
  * properties [ServerEndpointProperties](#serverendpointproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ServerEndpointArray
* ServerEndpointArray `object`: Array of ServerEndpoint
  * value `array`: Collection of ServerEndpoint.
    * items [ServerEndpoint](#serverendpoint)

### ServerEndpointCreateParameters
* ServerEndpointCreateParameters `object`: The parameters used when creating a server endpoint.
  * properties [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ServerEndpointCreateParametersProperties
* ServerEndpointCreateParametersProperties `object`: ServerEndpoint Properties object.
  * cloudTiering [FeatureStatus](#featurestatus)
  * friendlyName `string`: Friendly Name
  * offlineDataTransfer [FeatureStatus](#featurestatus)
  * offlineDataTransferShareName `string`: Offline data transfer share name
  * serverLocalPath [PhysicalPath](#physicalpath)
  * serverResourceId [ResourceId](#resourceid)
  * tierFilesOlderThanDays `integer`: Tier files older than days.
  * volumeFreeSpacePercent `integer`: Level of free space to be maintained by Cloud Tiering if it is enabled.

### ServerEndpointProperties
* ServerEndpointProperties `object`: ServerEndpoint Properties object.
  * cloudTiering [FeatureStatus](#featurestatus)
  * friendlyName `string`: Friendly Name
  * lastOperationName `string`: Resource Last Operation Name
  * lastWorkflowId `string`: ServerEndpoint lastWorkflowId
  * offlineDataTransfer [FeatureStatus](#featurestatus)
  * offlineDataTransferShareName `string`: Offline data transfer share name
  * offlineDataTransferStorageAccountResourceId `string`: Offline data transfer storage account resource ID
  * offlineDataTransferStorageAccountTenantId `string`: Offline data transfer storage account tenant ID
  * provisioningState `string`: ServerEndpoint Provisioning State
  * serverLocalPath [PhysicalPath](#physicalpath)
  * serverResourceId [ResourceId](#resourceid)
  * syncStatus [ServerEndpointSyncStatus](#serverendpointsyncstatus)
  * tierFilesOlderThanDays `integer`: Tier files older than days.
  * volumeFreeSpacePercent `integer`: Level of free space to be maintained by Cloud Tiering if it is enabled.

### ServerEndpointSyncStatus
* ServerEndpointSyncStatus `object`: Server Endpoint sync status
  * combinedHealth [HealthState](#healthstate)
  * downloadActivity [SyncActivityStatus](#syncactivitystatus)
  * downloadHealth [HealthState](#healthstate)
  * downloadStatus [SyncSessionStatus](#syncsessionstatus)
  * lastUpdatedTimestamp `string`: Last Updated Timestamp
  * offlineDataTransferStatus [OfflineDataTransferState](#offlinedatatransferstate)
  * syncActivity [SyncActivityState](#syncactivitystate)
  * totalPersistentFilesNotSyncingCount `integer`: Total count of persistent files not syncing (combined upload + download). Reserved for future use.
  * uploadActivity [SyncActivityStatus](#syncactivitystatus)
  * uploadHealth [HealthState](#healthstate)
  * uploadStatus [SyncSessionStatus](#syncsessionstatus)

### ServerEndpointUpdateParameters
* ServerEndpointUpdateParameters `object`: Parameters for updating an Server Endpoint.
  * properties [ServerEndpointUpdateProperties](#serverendpointupdateproperties)

### ServerEndpointUpdateProperties
* ServerEndpointUpdateProperties `object`: ServerEndpoint Update Properties object.
  * cloudTiering [FeatureStatus](#featurestatus)
  * offlineDataTransfer [FeatureStatus](#featurestatus)
  * offlineDataTransferShareName `string`: Offline data transfer share name
  * tierFilesOlderThanDays `integer`: Tier files older than days.
  * volumeFreeSpacePercent `integer`: Level of free space to be maintained by Cloud Tiering if it is enabled.

### StorageSyncApiError
* StorageSyncApiError `object`: Error type
  * code `string`: Error code of the given entry.
  * details [StorageSyncErrorDetails](#storagesyncerrordetails)
  * message `string`: Error message of the given entry.
  * target `string`: Target of the given error entry.

### StorageSyncError
* StorageSyncError `object`: Error type
  * error [StorageSyncApiError](#storagesyncapierror)
  * innererror [StorageSyncApiError](#storagesyncapierror)

### StorageSyncErrorDetails
* StorageSyncErrorDetails `object`: Error Details object.
  * code `string`: Error code of the given entry.
  * message `string`: Error message of the given entry.
  * target `string`: Target of the given entry.

### StorageSyncService
* StorageSyncService `object`: Storage Sync Service object.
  * properties [StorageSyncServiceProperties](#storagesyncserviceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### StorageSyncServiceArray
* StorageSyncServiceArray `object`: Array of StorageSyncServices
  * value `array`: Collection of StorageSyncServices.
    * items [StorageSyncService](#storagesyncservice)

### StorageSyncServiceCreateParameters
* StorageSyncServiceCreateParameters `object`: The parameters used when creating a storage sync service.
  * location **required** `string`: Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.

### StorageSyncServiceProperties
* StorageSyncServiceProperties `object`: Storage Sync Service Properties object.
  * storageSyncServiceStatus `integer`: Storage Sync service status.
  * storageSyncServiceUid `string`: Storage Sync service Uid

### StorageSyncServiceUpdateParameters
* StorageSyncServiceUpdateParameters `object`: Parameters for updating an Storage sync service.
  * properties [StorageSyncServiceUpdateProperties](#storagesyncserviceupdateproperties)
  * tags `object`: The user-specified tags associated with the storage sync service.

### StorageSyncServiceUpdateProperties
* StorageSyncServiceUpdateProperties `object`: Storage Sync Service Update Properties object.

### SubscriptionState
* SubscriptionState `object`: Subscription State object.
  * istransitioning `boolean`: Is Transitioning
  * properties [SubscriptionStateProperties](#subscriptionstateproperties)
  * state `string` (values: Registered, Unregistered, Warned, Suspended, Deleted): State of Azure Subscription

### SubscriptionStateProperties
* SubscriptionStateProperties `object`: Subscription State properties.

### SyncActivityState
* SyncActivityState `string` (values: Upload, Download, UploadAndDownload): Type of the sync activity state

### SyncActivityStatus
* SyncActivityStatus `object`: Sync Session status object.
  * appliedBytes `integer`: Applied bytes
  * appliedItemCount `integer`: Applied item count.
  * perItemErrorCount `integer`: Per item error count
  * timestamp `string`: Timestamp when properties were updated
  * totalBytes `integer`: Total bytes (if available)
  * totalItemCount `integer`: Total item count (if available)

### SyncGroup
* SyncGroup `object`: Sync Group object.
  * properties [SyncGroupProperties](#syncgroupproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### SyncGroupArray
* SyncGroupArray `object`: Array of SyncGroup
  * value `array`: Collection of SyncGroup.
    * items [SyncGroup](#syncgroup)

### SyncGroupCreateParameters
* SyncGroupCreateParameters `object`: The parameters used when creating a sync group.
  * properties [SyncGroupCreateParametersProperties](#syncgroupcreateparametersproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### SyncGroupCreateParametersProperties
* SyncGroupCreateParametersProperties `object`: Sync Group Create Properties object.

### SyncGroupProperties
* SyncGroupProperties `object`: SyncGroup Properties object.
  * syncGroupStatus `string`: Sync group status
  * uniqueId `string`: Unique Id

### SyncSessionStatus
* SyncSessionStatus `object`: Sync Session status object.
  * filesNotSyncingErrors `array`: Array of per-item errors coming from the last sync session. Reserved for future use.
    * items [FilesNotSyncingError](#filesnotsyncingerror)
  * lastSyncPerItemErrorCount `integer`: Last sync per item error count.
  * lastSyncResult `integer`: Last sync result (HResult)
  * lastSyncSuccessTimestamp `string`: Last sync success timestamp
  * lastSyncTimestamp `string`: Last sync timestamp
  * persistentFilesNotSyncingCount `integer`: Count of persistent files not syncing. Reserved for future use.
  * transientFilesNotSyncingCount `integer`: Count of transient files not syncing. Reserved for future use.

### TagsObject
* TagsObject `object`: Tags object.

### TriggerChangeDetectionParameters
* TriggerChangeDetectionParameters `object`: The parameters used when calling trigger change detection action on cloud endpoint.
  * changeDetectionMode `string` (values: Default, Recursive): Change Detection Mode. Applies to a directory specified in directoryPath parameter.
  * directoryPath `string`: Relative path to a directory Azure File share for which change detection is to be performed.
  * paths `array`: Array of relative paths on the Azure File share to be included in the change detection. Can be files and directories.
    * items `string`

### TriggerRolloverRequest
* TriggerRolloverRequest `object`: Trigger Rollover Request.
  * serverCertificate `string`: Certificate Data

### Workflow
* Workflow `object`: Workflow resource.
  * properties [WorkflowProperties](#workflowproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### WorkflowArray
* WorkflowArray `object`: Array of Workflow
  * value `array`: Collection of workflow items.
    * items [Workflow](#workflow)

### WorkflowProperties
* WorkflowProperties `object`: Workflow Properties object.
  * lastOperationId `string`: workflow last operation identifier.
  * lastStepName `string`: last step name
  * operation [OperationDirection](#operationdirection)
  * status [WorkflowStatus](#workflowstatus)
  * steps `string`: workflow steps

### WorkflowStatus
* WorkflowStatus `string` (values: active, expired, succeeded, aborted, failed): Type of the Workflow Status


