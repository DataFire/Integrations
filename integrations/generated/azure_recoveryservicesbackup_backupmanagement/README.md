# @datafire/azure_recoveryservicesbackup_backupmanagement

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicesbackup_backupmanagement
```
```js
let azure_recoveryservicesbackup_backupmanagement = require('@datafire/azure_recoveryservicesbackup_backupmanagement').create({
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

### BackupEngines_List
Backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.


```js
azure_recoveryservicesbackup_backupmanagement.BackupEngines_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.
  * $skipToken `string`: skipToken Filter.

#### Output
* output [BackupEngineBaseResourceList](#backupenginebaseresourcelist)

### BackupEngines_Get
Returns backup management server registered to Recovery Services Vault.


```js
azure_recoveryservicesbackup_backupmanagement.BackupEngines_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "backupEngineName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * backupEngineName **required** `string`: Name of the backup management server.
  * $filter `string`: OData filter options.
  * $skipToken `string`: skipToken Filter.

#### Output
* output [BackupEngineBaseResource](#backupenginebaseresource)

### ProtectionContainerRefreshOperationResults_Get
Provides the result of the refresh operation triggered by the BeginRefresh operation.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionContainerRefreshOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the container.
  * operationId **required** `string`: Operation ID associated with the operation whose result needs to be fetched.

#### Output
*Output schema unknown*

### ProtectionContainers_Get
Gets details of the specific container registered to your Recovery Services Vault.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionContainers_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Name of the fabric where the container belongs.
  * containerName **required** `string`: Name of the container whose details need to be fetched.

#### Output
* output [ProtectionContainerResource](#protectioncontainerresource)

### ProtectionContainerOperationResults_Get
Fetches the result of any operation on the container.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionContainerOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the container.
  * containerName **required** `string`: Container name whose information should be fetched.
  * operationId **required** `string`: Operation ID which represents the operation whose result needs to be fetched.

#### Output
* output [ProtectionContainerResource](#protectioncontainerresource)

### ProtectedItems_Delete
Used to disable backup of an item within a container. This is an asynchronous operation. To know the status of the request, call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectedItems_Delete({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up item.
  * containerName **required** `string`: Container name associated with the backed up item.
  * protectedItemName **required** `string`: Backed up item to be deleted.

#### Output
*Output schema unknown*

### ProtectedItems_Get
Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectedItems_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up item.
  * containerName **required** `string`: Container name associated with the backed up item.
  * protectedItemName **required** `string`: Backed up item name whose details are to be fetched.
  * $filter `string`: OData filter options.

#### Output
* output [ProtectedItemResource](#protecteditemresource)

### ProtectedItems_CreateOrUpdate
Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectedItems_CreateOrUpdate({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backup item.
  * containerName **required** `string`: Container name associated with the backup item.
  * protectedItemName **required** `string`: Item name to be backed up.
  * parameters **required** [ProtectedItemResource](#protecteditemresource)

#### Output
*Output schema unknown*

### Backups_Trigger
Triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the operation, call GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.Backups_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backup item.
  * containerName **required** `string`: Container name associated with the backup item.
  * protectedItemName **required** `string`: Backup item for which backup needs to be triggered.
  * parameters **required** [BackupRequestResource](#backuprequestresource)

#### Output
*Output schema unknown*

### ProtectedItemOperationResults_Get
Fetches the result of any operation on the backup item.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectedItemOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backup item.
  * containerName **required** `string`: Container name associated with the backup item.
  * protectedItemName **required** `string`: Backup item name whose details are to be fetched.
  * operationId **required** `string`: OperationID which represents the operation whose result needs to be fetched.

#### Output
* output [ProtectedItemResource](#protecteditemresource)

### ProtectedItemOperationStatuses_Get
Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed or failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations create jobs. This method returns the list of jobs associated with the operation.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectedItemOperationStatuses_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backup item.
  * containerName **required** `string`: Container name associated with the backup item.
  * protectedItemName **required** `string`: Backup item name whose details are to be fetched.
  * operationId **required** `string`: OperationID represents the operation whose status needs to be fetched.

#### Output
* output [OperationStatus](#operationstatus)

### RecoveryPoints_List
Lists the backup copies for the backed up item.


```js
azure_recoveryservicesbackup_backupmanagement.RecoveryPoints_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up item.
  * containerName **required** `string`: Container name associated with the backed up item.
  * protectedItemName **required** `string`: Backed up item whose backup copies are to be fetched.
  * $filter `string`: OData filter options.

#### Output
* output [RecoveryPointResourceList](#recoverypointresourcelist)

### RecoveryPoints_Get
Provides the information of the backed up data identified using RecoveryPointID. This is an asynchronous operation. To know the status of the operation, call the GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.RecoveryPoints_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "recoveryPointId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with backed up item.
  * containerName **required** `string`: Container name associated with backed up item.
  * protectedItemName **required** `string`: Backed up item name whose backup data needs to be fetched.
  * recoveryPointId **required** `string`: RecoveryPointID represents the backed up data to be fetched.

#### Output
* output [RecoveryPointResource](#recoverypointresource)

### ItemLevelRecoveryConnections_Provision
Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens a file explorer displaying all the recoverable files and folders. This is an asynchronous operation. To know the status of provisioning, call GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ItemLevelRecoveryConnections_Provision({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "recoveryPointId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up items.
  * containerName **required** `string`: Container name associated with the backed up items.
  * protectedItemName **required** `string`: Backed up item name whose files/folders are to be restored.
  * recoveryPointId **required** `string`: Recovery point ID which represents backed up data. iSCSI connection will be provisioned for this backed up data.
  * parameters **required** [ILRRequestResource](#ilrrequestresource)

#### Output
*Output schema unknown*

### Restores_Trigger
Restores the specified backed up data. This is an asynchronous operation. To know the status of this API call, use GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.Restores_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "recoveryPointId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up items.
  * containerName **required** `string`: Container name associated with the backed up items.
  * protectedItemName **required** `string`: Backed up item to be restored.
  * recoveryPointId **required** `string`: Recovery point ID which represents the backed up data to be restored.
  * parameters **required** [RestoreRequestResource](#restorerequestresource)

#### Output
*Output schema unknown*

### ItemLevelRecoveryConnections_Revoke
Revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer displaying all recoverable files and folders. This is an asynchronous operation.


```js
azure_recoveryservicesbackup_backupmanagement.ItemLevelRecoveryConnections_Revoke({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "recoveryPointId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up items.
  * containerName **required** `string`: Container name associated with the backed up items.
  * protectedItemName **required** `string`: Backed up item name whose files/folders are to be restored.
  * recoveryPointId **required** `string`: Recovery point ID which represents backed up data. iSCSI connection will be revoked for this backed up data.

#### Output
*Output schema unknown*

### ProtectionContainers_Refresh
Discovers all the containers in the subscription that can be backed up to Recovery Services Vault. This is an asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionContainers_Refresh({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated the container.

#### Output
*Output schema unknown*

### ExportJobsOperationResults_Get
Gets the operation result of operation triggered by Export Jobs API. If the operation is successful, then it also contains URL of a Blob and a SAS key to access the same. The blob contains exported jobs in JSON serialized format.


```js
azure_recoveryservicesbackup_backupmanagement.ExportJobsOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * operationId **required** `string`: OperationID which represents the export job.

#### Output
* output [OperationResultInfoBaseResource](#operationresultinfobaseresource)

### JobCancellations_Trigger
Cancels a job. This is an asynchronous operation. To know the status of the cancellation, call GetCancelOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.JobCancellations_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobName **required** `string`: Name of the job to cancel.

#### Output
*Output schema unknown*

### JobOperationResults_Get
Fetches the result of any operation.
            the operation.


```js
azure_recoveryservicesbackup_backupmanagement.JobOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobName **required** `string`: Job name whose operation result has to be fetched.
  * operationId **required** `string`: OperationID which represents the operation whose result has to be fetched.

#### Output
*Output schema unknown*

### Jobs_Export
Triggers export of jobs specified by filters and returns an OperationID to track.


```js
azure_recoveryservicesbackup_backupmanagement.Jobs_Export({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.

#### Output
*Output schema unknown*

### BackupOperationResults_Get
Provides the status of the delete operations such as deleting backed up item. Once the operation has started, the status code in the response would be Accepted. It will continue to be in this state till it reaches completion. On successful completion, the status code will be OK. This method expects OperationID as an argument. OperationID is part of the Location header of the operation response.


```js
azure_recoveryservicesbackup_backupmanagement.BackupOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * operationId **required** `string`: OperationID which represents the operation.

#### Output
*Output schema unknown*

### BackupOperationStatuses_Get
Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed or failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs when the operation is complete.


```js
azure_recoveryservicesbackup_backupmanagement.BackupOperationStatuses_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * operationId **required** `string`: OperationID which represents the operation.

#### Output
* output [OperationStatus](#operationstatus)

### BackupPolicies_List
Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch scoped results.


```js
azure_recoveryservicesbackup_backupmanagement.BackupPolicies_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.

#### Output
* output [ProtectionPolicyResourceList](#protectionpolicyresourcelist)

### ProtectionPolicies_Delete
Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous operation. Status of the operation can be fetched using GetPolicyOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionPolicies_Delete({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Backup policy to be deleted.

#### Output
*Output schema unknown*

### ProtectionPolicies_Get
Provides the details of the backup policies associated to Recovery Services Vault. This is an asynchronous operation. Status of the operation can be fetched using GetPolicyOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionPolicies_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Backup policy information to be fetched.

#### Output
* output [ProtectionPolicyResource](#protectionpolicyresource)

### ProtectionPolicies_CreateOrUpdate
Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched using GetPolicyOperationResult API.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionPolicies_CreateOrUpdate({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Backup policy to be created.
  * parameters **required** [ProtectionPolicyResource](#protectionpolicyresource)

#### Output
* output [ProtectionPolicyResource](#protectionpolicyresource)

### ProtectionPolicyOperationResults_Get
Provides the result of an operation.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionPolicyOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Backup policy name whose operation's result needs to be fetched.
  * operationId **required** `string`: Operation ID which represents the operation whose result needs to be fetched.

#### Output
* output [ProtectionPolicyResource](#protectionpolicyresource)

### ProtectionPolicyOperationStatuses_Get
Provides the status of the asynchronous operations like backup, restore. The status can be in progress, completed or failed. You can refer to the Operation Status enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs associated with operation.


```js
azure_recoveryservicesbackup_backupmanagement.ProtectionPolicyOperationStatuses_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Backup policy name whose operation's status needs to be fetched.
  * operationId **required** `string`: Operation ID which represents an operation whose status needs to be fetched.

#### Output
* output [OperationStatus](#operationstatus)

### BackupProtectableItems_List
Provides a pageable list of protectable objects within your subscription according to the query filter and the pagination parameters.


```js
azure_recoveryservicesbackup_backupmanagement.BackupProtectableItems_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.
  * $skipToken `string`: skipToken Filter.

#### Output
* output [WorkloadProtectableItemResourceList](#workloadprotectableitemresourcelist)

### BackupProtectedItems_List
Provides a pageable list of all items that are backed up within a vault.


```js
azure_recoveryservicesbackup_backupmanagement.BackupProtectedItems_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.
  * $skipToken `string`: skipToken Filter.

#### Output
* output [ProtectedItemResourceList](#protecteditemresourcelist)

### BackupProtectionContainers_List
Lists the containers registered to Recovery Services Vault.


```js
azure_recoveryservicesbackup_backupmanagement.BackupProtectionContainers_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.

#### Output
* output [ProtectionContainerResourceList](#protectioncontainerresourcelist)

### SecurityPINs_Get
Get the security PIN.


```js
azure_recoveryservicesbackup_backupmanagement.SecurityPINs_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [TokenInformation](#tokeninformation)

### BackupUsageSummaries_List
Fetches the backup management usage summaries of the vault.


```js
azure_recoveryservicesbackup_backupmanagement.BackupUsageSummaries_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.
  * $skipToken `string`: skipToken Filter.

#### Output
* output [BackupManagementUsageList](#backupmanagementusagelist)

### BackupResourceVaultConfigs_Get
Fetches resource vault config.


```js
azure_recoveryservicesbackup_backupmanagement.BackupResourceVaultConfigs_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [BackupResourceVaultConfigResource](#backupresourcevaultconfigresource)

### BackupResourceVaultConfigs_Update
Updates vault security config.


```js
azure_recoveryservicesbackup_backupmanagement.BackupResourceVaultConfigs_Update({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * parameters **required** [BackupResourceVaultConfigResource](#backupresourcevaultconfigresource)

#### Output
* output [BackupResourceVaultConfigResource](#backupresourcevaultconfigresource)

### BackupResourceStorageConfigs_Get
Fetches resource storage config.


```js
azure_recoveryservicesbackup_backupmanagement.BackupResourceStorageConfigs_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [BackupResourceConfigResource](#backupresourceconfigresource)

### BackupResourceStorageConfigs_Update
Updates vault storage model type.


```js
azure_recoveryservicesbackup_backupmanagement.BackupResourceStorageConfigs_Update({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
*Output schema unknown*



## Definitions

### AzureBackupServerContainer
* AzureBackupServerContainer `object`: AzureBackupServer (DPMVenus) workload-specific protection container.
  * DPMServers `array`: List of BackupEngines protecting the container
    * items `string`
  * UpgradeAvailable `boolean`: To check if upgrade available
  * canReRegister `boolean`: Specifies whether the container is re-registrable.
  * containerId `string`: ID of container.
  * dpmAgentVersion `string`: Backup engine Agent version
  * extendedInfo [DPMContainerExtendedInfo](#dpmcontainerextendedinfo)
  * protectedItemCount `integer`: Number of protected items in the BackupEngine
  * protectionStatus `string`: Protection status of the container.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### AzureBackupServerEngine
* AzureBackupServerEngine `object`: Backup engine type when Azure Backup Server is used to manage the backups.
  * azureBackupAgentVersion `string`: Backup agent version
  * backupEngineId `string`: ID of the backup engine.
  * backupEngineState `string`: Status of the backup engine with the Recovery Services Vault. = {Active/Deleting/DeleteFailed}
  * backupEngineType `string` (values: Invalid, DpmBackupEngine, AzureBackupServerEngine): Type of the backup engine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup management for the backup engine.
  * canReRegister `boolean`: Flag indicating if the backup engine be registered, once already registered.
  * dpmVersion `string`: Backup engine version
  * extendedInfo [BackupEngineExtendedInfo](#backupengineextendedinfo)
  * friendlyName `string`: Friendly name of the backup engine.
  * healthStatus `string`: Backup status of the backup engine.
  * isAzureBackupAgentUpgradeAvailable `boolean`: To check if backup agent upgrade available
  * isDPMUpgradeAvailable `boolean`: To check if backup engine upgrade available
  * registrationStatus `string`: Registration status of the backup engine with the Recovery Services Vault.

### AzureIaaSClassicComputeVMContainer
* AzureIaaSClassicComputeVMContainer `object`: IaaS VM workload-specific backup item representing a classic virtual machine.
  * resourceGroup `string`: Resource group name of Recovery Services Vault.
  * virtualMachineId `string`: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
  * virtualMachineVersion `string`: Specifies whether the container represents a Classic or an Azure Resource Manager VM.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### AzureIaaSClassicComputeVMProtectableItem
* AzureIaaSClassicComputeVMProtectableItem `object`: IaaS VM workload-specific backup item representing the Classic Compute VM.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine.
  * backupManagementType `string`: Type of backup managemenent to backup an item.
  * friendlyName `string`: Friendly name of the backup item.
  * protectableItemType `string`: Type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): State of the back up item.

### AzureIaaSClassicComputeVMProtectedItem
* AzureIaaSClassicComputeVMProtectedItem `object`: IaaS VM workload-specific backup item representing the Classic Compute VM.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * healthDetails `array`: Health details on this backup item.
    * items [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health status of protected item
  * lastBackupStatus `string`: Last backup operation status. Possible values: Healthy, Unhealthy.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectedItemDataId `string`: Data ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### AzureIaaSComputeVMContainer
* AzureIaaSComputeVMContainer `object`: IaaS VM workload-specific backup item representing an Azure Resource Manager virtual machine.
  * resourceGroup `string`: Resource group name of Recovery Services Vault.
  * virtualMachineId `string`: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
  * virtualMachineVersion `string`: Specifies whether the container represents a Classic or an Azure Resource Manager VM.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### AzureIaaSComputeVMProtectableItem
* AzureIaaSComputeVMProtectableItem `object`: IaaS VM workload-specific backup item representing the Azure Resource Manager VM.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine.
  * backupManagementType `string`: Type of backup managemenent to backup an item.
  * friendlyName `string`: Friendly name of the backup item.
  * protectableItemType `string`: Type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): State of the back up item.

### AzureIaaSComputeVMProtectedItem
* AzureIaaSComputeVMProtectedItem `object`: IaaS VM workload-specific backup item representing the Azure Resource Manager VM.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * healthDetails `array`: Health details on this backup item.
    * items [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health status of protected item
  * lastBackupStatus `string`: Last backup operation status. Possible values: Healthy, Unhealthy.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectedItemDataId `string`: Data ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### AzureIaaSVMHealthDetails
* AzureIaaSVMHealthDetails `object`: Azure IaaS VM workload-specific Health Details.
  * code `integer`: Health Code
  * message `string`: Health Message
  * recommendations `array`: Health Recommended Actions
    * items `string`
  * title `string`: Health Title

### AzureIaaSVMProtectedItem
* AzureIaaSVMProtectedItem `object`: IaaS VM workload-specific backup item.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * healthDetails `array`: Health details on this backup item.
    * items [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health status of protected item
  * lastBackupStatus `string`: Last backup operation status. Possible values: Healthy, Unhealthy.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectedItemDataId `string`: Data ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### AzureIaaSVMProtectedItemExtendedInfo
* AzureIaaSVMProtectedItemExtendedInfo `object`: Additional information on Azure IaaS VM specific backup item.
  * oldestRecoveryPoint `string`: The oldest backup copy available for this backup item.
  * policyInconsistent `boolean`: Specifies if backup policy associated with the backup item is inconsistent.
  * recoveryPointCount `integer`: Number of backup copies available for this backup item.

### AzureIaaSVMProtectionPolicy
* AzureIaaSVMProtectionPolicy `object`: IaaS VM workload-specific backup policy.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * schedulePolicy [SchedulePolicy](#schedulepolicy)
  * timeZone `string`: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### AzureSqlContainer
* AzureSqlContainer `object`: Azure Sql workload-specific container.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### AzureSqlProtectedItem
* AzureSqlProtectedItem `object`: Azure SQL workload-specific backup item.
  * extendedInfo [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
  * protectedItemDataId `string`: Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of the backed up item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### AzureSqlProtectedItemExtendedInfo
* AzureSqlProtectedItemExtendedInfo `object`: Additional information on Azure Sql specific protected item.
  * oldestRecoveryPoint `string`: The oldest backup copy available for this item in the service.
  * policyState `string`: State of the backup policy associated with this backup item.
  * recoveryPointCount `integer`: Number of available backup copies associated with this backup item.

### AzureSqlProtectionPolicy
* AzureSqlProtectionPolicy `object`: Azure SQL workload-specific backup policy.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### BEKDetails
* BEKDetails `object`: BEK is bitlocker encrpytion key.
  * secretData `string`: BEK data.
  * secretUrl `string`: Secret is BEK.
  * secretVaultId `string`: ID of the Key Vault where this Secret is stored.

### BMSBackupEngineQueryObject
* BMSBackupEngineQueryObject `object`: Query parameters to fetch list of backup engines.
  * expand `string`: attribute to add extended info

### BMSBackupEnginesQueryObject
* BMSBackupEnginesQueryObject `object`: Query parameters to fetch list of backup engines.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type for the backup engine.
  * expand `string`: Attribute to add extended info.
  * friendlyName `string`: Friendly name of the backup engine.

### BMSBackupSummariesQueryObject
* BMSBackupSummariesQueryObject `object`: Query parameters to fetch backup summaries.
  * type `string` (values: Invalid, BackupProtectedItemCountSummary, BackupProtectionContainerCountSummary): Backup management type for this container.

### BMSContainerQueryObject
* BMSContainerQueryObject `object`: The query filters that can be used with the list containers API.
  * backupEngineName `string`: Backup engine name
  * backupManagementType **required** `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type for this container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of container for filter
  * friendlyName `string`: Friendly name of this container.
  * status `string`: Status of registration of this container with the Recovery Services Vault.

### BMSPOQueryObject
* BMSPOQueryObject `object`: Filters to list items that can be backed up.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type.
  * friendlyName `string`: Friendly name.
  * status `string`: Backup status query parameter.

### BMSRPQueryObject
* BMSRPQueryObject `object`: Filters to list backup copies.
  * endDate `string`: Backup copies created before this time.
  * startDate `string`: Backup copies created after this time.

### BackupEngineBase
* BackupEngineBase `object`: The base backup engine class. All workload specific backup engines derive from this class.
  * azureBackupAgentVersion `string`: Backup agent version
  * backupEngineId `string`: ID of the backup engine.
  * backupEngineState `string`: Status of the backup engine with the Recovery Services Vault. = {Active/Deleting/DeleteFailed}
  * backupEngineType `string` (values: Invalid, DpmBackupEngine, AzureBackupServerEngine): Type of the backup engine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup management for the backup engine.
  * canReRegister `boolean`: Flag indicating if the backup engine be registered, once already registered.
  * dpmVersion `string`: Backup engine version
  * extendedInfo [BackupEngineExtendedInfo](#backupengineextendedinfo)
  * friendlyName `string`: Friendly name of the backup engine.
  * healthStatus `string`: Backup status of the backup engine.
  * isAzureBackupAgentUpgradeAvailable `boolean`: To check if backup agent upgrade available
  * isDPMUpgradeAvailable `boolean`: To check if backup engine upgrade available
  * registrationStatus `string`: Registration status of the backup engine with the Recovery Services Vault.

### BackupEngineBaseResource
* BackupEngineBaseResource `object`: The base backup engine class. All workload specific backup engines derive from this class.
  * properties [BackupEngineBase](#backupenginebase)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### BackupEngineBaseResourceList
* BackupEngineBaseResourceList `object`: List of BackupEngineBase resources
  * value `array`: List of resources.
    * items [BackupEngineBaseResource](#backupenginebaseresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### BackupEngineExtendedInfo
* BackupEngineExtendedInfo `object`: Additional information on backup engine.
  * availableDiskSpace `number`: Diskspace currently available in the backup engine.
  * azureProtectedInstances `integer`: Protected instances in the backup engine.
  * databaseName `string`: Database name of backup engine.
  * diskCount `integer`: Number of disks in the backup engine.
  * protectedItemsCount `integer`: Number of protected items in the backup engine.
  * protectedServersCount `integer`: Number of protected servers in the backup engine.
  * refreshedAt `string`: Last refresh time in the backup engine.
  * usedDiskSpace `number`: Diskspace used in the backup engine.

### BackupManagementUsage
* BackupManagementUsage `object`: Backup management usages of a vault.
  * currentValue `integer`: Current value of usage.
  * limit `integer`: Limit of usage.
  * name [NameInfo](#nameinfo)
  * nextResetTime `string`: Next reset time of usage.
  * quotaPeriod `string`: Quota period of usage.
  * unit `string` (values: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond): Unit of the usage.

### BackupManagementUsageList
* BackupManagementUsageList `object`: Backup management usage for vault.
  * value `array`: The list of backup management usages for the given vault.
    * items [BackupManagementUsage](#backupmanagementusage)

### BackupRequest
* BackupRequest `object`: Base class for backup request. Workload-specific backup requests are derived from this class.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### BackupRequestResource
* BackupRequestResource `object`: Base class for backup request. Workload-specific backup requests are derived from this class.
  * properties [BackupRequest](#backuprequest)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### BackupResourceConfig
* BackupResourceConfig `object`: The resource storage details.
  * storageType `string` (values: Invalid, GeoRedundant, LocallyRedundant): Storage type.
  * storageTypeState `string` (values: Invalid, Locked, Unlocked): Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

### BackupResourceConfigResource
* BackupResourceConfigResource `object`: The resource storage details.
  * properties [BackupResourceConfig](#backupresourceconfig)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### BackupResourceVaultConfig
* BackupResourceVaultConfig `object`: Backup resource vault config details.
  * enhancedSecurityState `string` (values: Invalid, Enabled, Disabled): Enabled or Disabled.
  * storageType `string` (values: Invalid, GeoRedundant, LocallyRedundant): Storage type.
  * storageTypeState `string` (values: Invalid, Locked, Unlocked): Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

### BackupResourceVaultConfigResource
* BackupResourceVaultConfigResource `object`: Backup resource vault config details.
  * properties [BackupResourceVaultConfig](#backupresourcevaultconfig)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ClientScriptForConnect
* ClientScriptForConnect `object`: Client script details for file / folder restore.
  * osType `string`: OS type - Windows, Linux etc. for which this file / folder restore client script works.
  * scriptContent `string`: File content of the client script for file / folder restore.
  * scriptExtension `string`: File extension of the client script for file / folder restore - .ps1 , .sh , etc.
  * scriptNameSuffix `string`: Mandator suffix that should be added to the name of script that is given for download to user.
  * url `string`: URL of Executable from where to source the content. If this is not null then ScriptContent should not be used

### DPMContainerExtendedInfo
* DPMContainerExtendedInfo `object`: Additional information of the DPMContainer.
  * lastRefreshedAt `string`: Last refresh time of the DPMContainer.

### DPMProtectedItem
* DPMProtectedItem `object`: Additional information on Backup engine specific backup item.
  * backupEngineName `string`: Backup Management server protecting this backup item
  * extendedInfo [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the managed item
  * isScheduledForDeferredDelete `boolean`: To check if backup item is scheduled for deferred delete
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Protection state of the backupengine
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### DPMProtectedItemExtendedInfo
* DPMProtectedItemExtendedInfo `object`: Additional information of DPM Protected item.
  * diskStorageUsedInBytes `string`: Used Disk storage in bytes.
  * isCollocated `boolean`: To check if backup item is collocated.
  * isPresentOnCloud `boolean`: To check if backup item is cloud protected.
  * lastBackupStatus `string`: Last backup status information on backup item.
  * lastRefreshedAt `string`: Last refresh time on backup item.
  * oldestRecoveryPoint `string`: Oldest cloud recovery point time.
  * onPremiseLatestRecoveryPoint `string`: latest disk recovery point time.
  * onPremiseOldestRecoveryPoint `string`: Oldest disk recovery point time.
  * onPremiseRecoveryPointCount `integer`: disk recovery point count.
  * protectableObjectLoadPath `object`: Attribute to provide information on various DBs.
  * protected `boolean`: To check if backup item is disk protected.
  * protectionGroupName `string`: Protection group name of the backup item.
  * recoveryPointCount `integer`: cloud recovery point count.
  * totalDiskStorageSizeInBytes `string`: total Disk storage in bytes.

### DailyRetentionFormat
* DailyRetentionFormat `object`: Daily retention format.
  * daysOfTheMonth `array`: List of days of the month.
    * items [Day](#day)

### DailyRetentionSchedule
* DailyRetentionSchedule `object`: Daily retention schedule.
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionTimes `array`: Retention times of retention policy.
    * items `string`

### Day
* Day `object`: Day of the week.
  * date `integer`: Date of the month
  * isLast `boolean`: Whether Date is last date of month

### DpmBackupEngine
* DpmBackupEngine `object`: Data Protection Manager (DPM) specific backup engine.
  * azureBackupAgentVersion `string`: Backup agent version
  * backupEngineId `string`: ID of the backup engine.
  * backupEngineState `string`: Status of the backup engine with the Recovery Services Vault. = {Active/Deleting/DeleteFailed}
  * backupEngineType `string` (values: Invalid, DpmBackupEngine, AzureBackupServerEngine): Type of the backup engine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup management for the backup engine.
  * canReRegister `boolean`: Flag indicating if the backup engine be registered, once already registered.
  * dpmVersion `string`: Backup engine version
  * extendedInfo [BackupEngineExtendedInfo](#backupengineextendedinfo)
  * friendlyName `string`: Friendly name of the backup engine.
  * healthStatus `string`: Backup status of the backup engine.
  * isAzureBackupAgentUpgradeAvailable `boolean`: To check if backup agent upgrade available
  * isDPMUpgradeAvailable `boolean`: To check if backup engine upgrade available
  * registrationStatus `string`: Registration status of the backup engine with the Recovery Services Vault.

### DpmContainer
* DpmContainer `object`: DPM workload-specific protection container.
  * DPMServers `array`: List of BackupEngines protecting the container
    * items `string`
  * UpgradeAvailable `boolean`: To check if upgrade available
  * canReRegister `boolean`: Specifies whether the container is re-registrable.
  * containerId `string`: ID of container.
  * dpmAgentVersion `string`: Backup engine Agent version
  * extendedInfo [DPMContainerExtendedInfo](#dpmcontainerextendedinfo)
  * protectedItemCount `integer`: Number of protected items in the BackupEngine
  * protectionStatus `string`: Protection status of the container.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### EncryptionDetails
* EncryptionDetails `object`: Details needed if the VM was encrypted at the time of backup.
  * encryptionEnabled `boolean`: Identifies whether this backup copy represents an encrypted VM at the time of backup.
  * kekUrl `string`: Key Url.
  * kekVaultId `string`: ID of Key Vault where KEK is stored.
  * secretKeyUrl `string`: Secret Url.
  * secretKeyVaultId `string`: ID of Key Vault where Secret is stored.

### ExportJobsOperationResultInfo
* ExportJobsOperationResultInfo `object`: This class is used to send blob details after exporting jobs.
  * blobSasKey `string`: SAS key to access the blob. It expires in 15 mins.
  * blobUrl `string`: URL of the blob into which the serialized string of list of jobs is exported.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### GenericRecoveryPoint
* GenericRecoveryPoint `object`: Generic backup copy.
  * friendlyName `string`: Friendly name of the backup copy.
  * recoveryPointAdditionalInfo `string`: Additional information associated with this backup copy.
  * recoveryPointTime `string`: Time at which this backup copy was created.
  * recoveryPointType `string`: Type of the backup copy.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### GetProtectedItemQueryObject
* GetProtectedItemQueryObject `object`: Filters to list backup items.
  * expand `string`: Specifies if the additional information should be provided for this item.

### ILRRequest
* ILRRequest `object`: Parameters to restore file/folders API.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### ILRRequestResource
* ILRRequestResource `object`: Parameters to restore file/folders API.
  * properties [ILRRequest](#ilrrequest)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### IaaSVMContainer
* IaaSVMContainer `object`: IaaS VM workload-specific container.
  * resourceGroup `string`: Resource group name of Recovery Services Vault.
  * virtualMachineId `string`: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
  * virtualMachineVersion `string`: Specifies whether the container represents a Classic or an Azure Resource Manager VM.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### IaaSVMProtectableItem
* IaaSVMProtectableItem `object`: IaaS VM workload-specific backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine.
  * backupManagementType `string`: Type of backup managemenent to backup an item.
  * friendlyName `string`: Friendly name of the backup item.
  * protectableItemType `string`: Type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): State of the back up item.

### IaasVMBackupRequest
* IaasVMBackupRequest `object`: IaaS VM workload-specific backup request.
  * recoveryPointExpiryTimeInUTC `string`: Backup copy will expire after the time specified (UTC).
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### IaasVMILRRegistrationRequest
* IaasVMILRRegistrationRequest `object`: Restore files/folders from a backup copy of IaaS VM.
  * initiatorName `string`: iSCSI initiator name.
  * recoveryPointId `string`: ID of the IaaS VM backup copy from where the files/folders have to be restored.
  * renewExistingRegistration `boolean`: Whether to renew existing registration with the iSCSI server.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine whose the files / folders have to be restored.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### IaasVMRecoveryPoint
* IaasVMRecoveryPoint `object`: IaaS VM workload specific backup copy.
  * isInstantILRSessionActive `boolean`: Is the session to recover items from this backup copy still active.
  * isManagedVirtualMachine `boolean`: Whether VM is with Managed Disks
  * isSourceVMEncrypted `boolean`: Identifies whether the VM was encrypted when the backup copy is created.
  * keyAndSecret [KeyAndSecretDetails](#keyandsecretdetails)
  * originalStorageAccountOption `boolean`: Original SA Option
  * recoveryPointAdditionalInfo `string`: Additional information associated with this backup copy.
  * recoveryPointTierDetails `array`: Recovery point tier information.
    * items [RecoveryPointTierInformation](#recoverypointtierinformation)
  * recoveryPointTime `string`: Time at which this backup copy was created.
  * recoveryPointType `string`: Type of the backup copy.
  * sourceVMStorageType `string`: Storage type of the VM whose backup copy is created.
  * virtualMachineSize `string`: Virtual Machine Size
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### IaasVMRestoreRequest
* IaasVMRestoreRequest `object`: IaaS VM workload-specific restore.
  * affinityGroup `string`: Affinity group associated to VM to be restored. Used only for Classic Compute Virtual Machines.
  * createNewCloudService `boolean`: Should a new cloud service be created while restoring the VM. If this is false, VM will be restored to the same cloud service as it was at the time of backup.
  * encryptionDetails [EncryptionDetails](#encryptiondetails)
  * originalStorageAccountOption `boolean`
  * recoveryPointId `string`: ID of the backup copy to be recovered.
  * recoveryType `string` (values: Invalid, OriginalLocation, AlternateLocation, RestoreDisks): Type of this recovery.
  * region `string`: Region in which the virtual machine is restored.
  * sourceResourceId `string`: Fully qualified ARM ID of the VM which is being recovered.
  * storageAccountId `string`: Fully qualified ARM ID of the storage account to which the VM has to be restored.
  * subnetId `string`: Subnet ID, is the subnet ID associated with the to be restored VM. For Classic VMs it would be {VnetID}/Subnet/{SubnetName} and, for the Azure Resource Manager VMs it would be ARM resource ID used to represent the subnet.
  * targetDomainNameId `string`: Fully qualified ARM ID of the domain name to be associated to the VM being restored. This applies only to Classic Virtual Machines.
  * targetResourceGroupId `string`: This is the ARM Id of the resource group that you want to create for this Virtual machine and other artifacts.
  * targetVirtualMachineId `string`: This is the complete ARM Id of the VM that will be created.
  * virtualNetworkId `string`: This is the virtual network Id of the vnet that will be attached to the virtual machine.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### InstantItemRecoveryTarget
* InstantItemRecoveryTarget `object`: Target details for file / folder restore.
  * clientScripts `array`: List of client scripts.
    * items [ClientScriptForConnect](#clientscriptforconnect)

### JobQueryObject
* JobQueryObject `object`: Filters to list the jobs.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managmenent for the job.
  * endTime `string`: Job has ended at this time. Value is in UTC.
  * jobId `string`: JobID represents the job uniquely.
  * operation `string` (values: Invalid, Register, UnRegister, ConfigureBackup, Backup, Restore, DisableBackup, DeleteBackupData): Type of operation.
  * startTime `string`: Job has started at this time. Value is in UTC.
  * status `string` (values: Invalid, InProgress, Completed, Failed, CompletedWithWarnings, Cancelled, Cancelling): Status of the job.

### KEKDetails
* KEKDetails `object`: KEK is encryption key for BEK.
  * keyBackupData `string`: KEK data.
  * keyUrl `string`: Key is KEK.
  * keyVaultId `string`: Key Vault ID where this Key is stored.

### KeyAndSecretDetails
* KeyAndSecretDetails `object`: BEK is bitlocker key.
  * bekDetails [BEKDetails](#bekdetails)
  * kekDetails [KEKDetails](#kekdetails)

### LongTermRetentionPolicy
* LongTermRetentionPolicy `object`: Long term retention policy.
  * dailySchedule [DailyRetentionSchedule](#dailyretentionschedule)
  * monthlySchedule [MonthlyRetentionSchedule](#monthlyretentionschedule)
  * weeklySchedule [WeeklyRetentionSchedule](#weeklyretentionschedule)
  * yearlySchedule [YearlyRetentionSchedule](#yearlyretentionschedule)
  * retentionPolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### LongTermSchedulePolicy
* LongTermSchedulePolicy `object`: Long term policy schedule.
  * schedulePolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### MabContainer
* MabContainer `object`: Container with items backed up using MAB backup engine.
  * agentVersion `string`: Agent version of this container.
  * canReRegister `boolean`: Can the container be registered one more time.
  * containerId `integer`: ContainerID represents the container.
  * extendedInfo [MabContainerExtendedInfo](#mabcontainerextendedinfo)
  * protectedItemCount `integer`: Number of items backed up in this container.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### MabContainerExtendedInfo
* MabContainerExtendedInfo `object`: Additional information of the container.
  * backupItemType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of backup items associated with this container.
  * backupItems `array`: List of backup items associated with this container.
    * items `string`
  * lastBackupStatus `string`: Latest backup status of this container.
  * lastRefreshedAt `string`: Time stamp when this container was refreshed.
  * policyName `string`: Backup policy associated with this container.

### MabFileFolderProtectedItem
* MabFileFolderProtectedItem `object`: MAB workload-specific backup item.
  * computerName `string`: Name of the computer associated with this backup item.
  * deferredDeleteSyncTimeInUTC `integer`: Sync time for deferred deletion.
  * extendedInfo [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of this backup item.
  * isScheduledForDeferredDelete `boolean`: Specifies if the item is scheduled for deferred deletion.
  * lastBackupStatus `string`: Status of last backup operation.
  * protectionState `string`: Protected, ProtectionStopped, IRPending or ProtectionError
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### MabFileFolderProtectedItemExtendedInfo
* MabFileFolderProtectedItemExtendedInfo `object`: Additional information on the backed up item.
  * lastRefreshedAt `string`: Last time when the agent data synced to service.
  * oldestRecoveryPoint `string`: The oldest backup copy available.
  * recoveryPointCount `integer`: Number of backup copies associated with the backup item.

### MabProtectionPolicy
* MabProtectionPolicy `object`: Mab container-specific backup policy.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * schedulePolicy [SchedulePolicy](#schedulepolicy)
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### MonthlyRetentionSchedule
* MonthlyRetentionSchedule `object`: Monthly retention schedule.
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionScheduleDaily [DailyRetentionFormat](#dailyretentionformat)
  * retentionScheduleFormatType `string` (values: Invalid, Daily, Weekly): Retention schedule format type for monthly retention policy.
  * retentionScheduleWeekly [WeeklyRetentionFormat](#weeklyretentionformat)
  * retentionTimes `array`: Retention times of retention policy.
    * items `string`

### NameInfo
* NameInfo `object`: The name of usage.
  * localizedValue `string`: Localized value of usage.
  * value `string`: Value of usage.

### Object
* Object `object`: Base of all objects.

### OperationResultInfo
* OperationResultInfo `object`: Operation result info.
  * jobList `array`: List of jobs created by this operation.
    * items `string`
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### OperationResultInfoBase
* OperationResultInfoBase `object`: Base class for operation result info.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### OperationResultInfoBaseResource
* OperationResultInfoBaseResource `object`: Base class for operation result info.
  * operation [OperationResultInfoBase](#operationresultinfobase)
  * Headers `object`: HTTP headers associated with this operation.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): HTTP Status Code of the operation.

### OperationStatus
* OperationStatus `object`: Operation status.
  * endTime `string`: Operation end time. Format: ISO-8601.
  * error [OperationStatusError](#operationstatuserror)
  * id `string`: ID of the operation.
  * name `string`: Name of the operation.
  * properties [OperationStatusExtendedInfo](#operationstatusextendedinfo)
  * startTime `string`: Operation start time. Format: ISO-8601.
  * status `string` (values: Invalid, InProgress, Succeeded, Failed, Canceled): Operation status.

### OperationStatusError
* OperationStatusError `object`: Error information associated with operation status call.
  * code `string`: Error code of the operation failure.
  * message `string`: Error message displayed if the operation failure.

### OperationStatusExtendedInfo
* OperationStatusExtendedInfo `object`: Base class for additional information of operation status.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### OperationStatusJobExtendedInfo
* OperationStatusJobExtendedInfo `object`: Operation status job extended info.
  * jobId `string`: ID of the job created for this protected item.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### OperationStatusJobsExtendedInfo
* OperationStatusJobsExtendedInfo `object`: Operation status extended info for list of jobs.
  * failedJobsError `object`: Stores all the failed jobs along with the corresponding error codes.
  * jobIds `array`: IDs of the jobs created for the protected item.
    * items `string`
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### OperationStatusProvisionILRExtendedInfo
* OperationStatusProvisionILRExtendedInfo `object`: Operation status extended info for ILR provision action.
  * recoveryTarget [InstantItemRecoveryTarget](#instantitemrecoverytarget)
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### OperationWorkerResponse
* OperationWorkerResponse `object`: This is the base class for operation result responses.
  * Headers `object`: HTTP headers associated with this operation.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): HTTP Status Code of the operation.

### ProtectedItem
* ProtectedItem `object`: Base class for backup items.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the backed up item.
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.

### ProtectedItemQueryObject
* ProtectedItemQueryObject `object`: Filters to list backup items.
  * backupEngineName `string`: Backup Engine name
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type for the backed up item.
  * containerName `string`: Name of the container.
  * friendlyName `string`: Friendly name of protected item
  * healthState `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health State for the backed up item.
  * itemType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Type of workload this item represents.
  * policyName `string`: Backup policy name associated with the backup item.

### ProtectedItemResource
* ProtectedItemResource `object`: Base class for backup items.
  * properties [ProtectedItem](#protecteditem)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectedItemResourceList
* ProtectedItemResourceList `object`: List of ProtectedItem resources
  * value `array`: List of resources.
    * items [ProtectedItemResource](#protecteditemresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### ProtectionContainer
* ProtectionContainer `object`: Base class for container with backup items. Containers with specific workloads are derived from this class.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managemenent for the container.
  * containerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: Status of health of the container.
  * protectableObjectType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Type of the protectable object associated with this container.
  * registrationStatus `string`: Status of registration of the container with the Recovery Services Vault.

### ProtectionContainerResource
* ProtectionContainerResource `object`: Base class for container with backup items. Containers with specific workloads are derived from this class.
  * properties [ProtectionContainer](#protectioncontainer)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectionContainerResourceList
* ProtectionContainerResourceList `object`: List of ProtectionContainer resources
  * value `array`: List of resources.
    * items [ProtectionContainerResource](#protectioncontainerresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### ProtectionPolicy
* ProtectionPolicy `object`: Base class for backup policy. Workload-specific backup policies are derived from this class.
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### ProtectionPolicyQueryObject
* ProtectionPolicyQueryObject `object`: Filters the list backup policies API.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type for the backup policy.

### ProtectionPolicyResource
* ProtectionPolicyResource `object`: Base class for backup policy. Workload-specific backup policies are derived from this class.
  * properties [ProtectionPolicy](#protectionpolicy)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectionPolicyResourceList
* ProtectionPolicyResourceList `object`: List of ProtectionPolicy resources
  * value `array`: List of resources.
    * items [ProtectionPolicyResource](#protectionpolicyresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### RecoveryPoint
* RecoveryPoint `object`: Base class for backup copies. Workload-specific backup copies are derived from this class.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### RecoveryPointResource
* RecoveryPointResource `object`: Base class for backup copies. Workload-specific backup copies are derived from this class.
  * properties [RecoveryPoint](#recoverypoint)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### RecoveryPointResourceList
* RecoveryPointResourceList `object`: List of RecoveryPoint resources
  * value `array`: List of resources.
    * items [RecoveryPointResource](#recoverypointresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### RecoveryPointTierInformation
* RecoveryPointTierInformation `object`: Recovery point tier information.
  * status `string` (values: Invalid, Valid, Disabled, Deleted): Recovery point tier status.
  * type `string` (values: Invalid, InstantRP, HardenedRP): Recovery point tier type.

### Resource
* Resource `object`: ARM Resource.
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ResourceList
* ResourceList `object`: Base for all lists of resources.
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### RestoreRequest
* RestoreRequest `object`: Base class for restore request. Workload-specific restore requests are derived from this class.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### RestoreRequestResource
* RestoreRequestResource `object`: Base class for restore request. Workload-specific restore requests are derived from this class.
  * properties [RestoreRequest](#restorerequest)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### RetentionDuration
* RetentionDuration `object`: Retention duration.
  * count `integer`: Count of duration types. Retention duration is obtained by the counting the duration type Count times. 
  * durationType `string` (values: Invalid, Days, Weeks, Months, Years): Retention duration type of retention policy.

### RetentionPolicy
* RetentionPolicy `object`: Base class for retention policy.
  * retentionPolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### SchedulePolicy
* SchedulePolicy `object`: Base class for backup schedule.
  * schedulePolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### SimpleRetentionPolicy
* SimpleRetentionPolicy `object`: Simple policy retention.
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionPolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### SimpleSchedulePolicy
* SimpleSchedulePolicy `object`: Simple policy schedule.
  * scheduleRunDays `array`: List of days of week this schedule has to be run.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * scheduleRunFrequency `string` (values: Invalid, Daily, Weekly): Frequency of the schedule operation of this policy.
  * scheduleRunTimes `array`: List of times of day this schedule has to be run.
    * items `string`
  * scheduleWeeklyFrequency `integer`: At every number weeks this schedule has to be run.
  * schedulePolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### TokenInformation
* TokenInformation `object`: The token information details.
  * expiryTimeInUtcTicks `integer`: Expiry time of token.
  * securityPIN `string`: Security PIN
  * token `string`: Token value.

### WeeklyRetentionFormat
* WeeklyRetentionFormat `object`: Weekly retention format.
  * daysOfTheWeek `array`: List of days of the week.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * weeksOfTheMonth `array`: List of weeks of month.
    * items `string` (values: First, Second, Third, Fourth, Last)

### WeeklyRetentionSchedule
* WeeklyRetentionSchedule `object`: Weekly retention schedule.
  * daysOfTheWeek `array`: List of days of week for weekly retention policy.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionTimes `array`: Retention times of retention policy.
    * items `string`

### WorkloadProtectableItem
* WorkloadProtectableItem `object`: Base class for backup item. Workload-specific backup items are derived from this class.
  * backupManagementType `string`: Type of backup managemenent to backup an item.
  * friendlyName `string`: Friendly name of the backup item.
  * protectableItemType `string`: Type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): State of the back up item.

### WorkloadProtectableItemResource
* WorkloadProtectableItemResource `object`: Base class for backup item. Workload-specific backup items are derived from this class.
  * properties [WorkloadProtectableItem](#workloadprotectableitem)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### WorkloadProtectableItemResourceList
* WorkloadProtectableItemResourceList `object`: List of WorkloadProtectableItem resources
  * value `array`: List of resources.
    * items [WorkloadProtectableItemResource](#workloadprotectableitemresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### YearlyRetentionSchedule
* YearlyRetentionSchedule `object`: Yearly retention schedule.
  * monthsOfYear `array`: List of months of year of yearly retention policy.
    * items `string` (values: Invalid, January, February, March, April, May, June, July, August, September, October, November, December)
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionScheduleDaily [DailyRetentionFormat](#dailyretentionformat)
  * retentionScheduleFormatType `string` (values: Invalid, Daily, Weekly): Retention schedule format for yearly retention policy.
  * retentionScheduleWeekly [WeeklyRetentionFormat](#weeklyretentionformat)
  * retentionTimes `array`: Retention times of retention policy.
    * items `string`


