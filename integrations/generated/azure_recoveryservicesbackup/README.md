# @datafire/azure_recoveryservicesbackup

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicesbackup
```
```js
let azure_recoveryservicesbackup = require('@datafire/azure_recoveryservicesbackup').create({
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

### BackupEngines_Get
The backup management servers registered to a Recovery Services vault. This returns a pageable list of servers.


```js
azure_recoveryservicesbackup.BackupEngines_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`: Use this filter to choose the specific backup management server. backupManagementType { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }.
  * $skipToken `string`: The Skip Token filter.

#### Output
* output [BackupEngineBaseResourceList](#backupenginebaseresourcelist)

### ProtectionContainerRefreshOperationResults_Get
Provides the result of the refresh operation triggered by the BeginRefresh operation.


```js
azure_recoveryservicesbackup.ProtectionContainerRefreshOperationResults_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the container.
  * operationId **required** `string`: The operation ID used for this GET operation.

#### Output
*Output schema unknown*

### ProtectionContainers_Get
Gets details of the specific container registered to your Recovery Services vault.


```js
azure_recoveryservicesbackup.ProtectionContainers_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the container.
  * containerName **required** `string`: The container name used for this GET operation.

#### Output
* output [ProtectionContainerResource](#protectioncontainerresource)

### ProtectionContainerOperationResults_Get
Gets the result of any operation on the container.


```js
azure_recoveryservicesbackup.ProtectionContainerOperationResults_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the container.
  * containerName **required** `string`: The container name used for this GET operation.
  * operationId **required** `string`: The operation ID used for this GET operation.

#### Output
* output [ProtectionContainerResource](#protectioncontainerresource)

### ProtectedItems_Delete
Used to disable the backup job for an item within a container. This is an asynchronous operation. To learn the status of the request, call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup.ProtectedItems_Delete({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`:  The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The backup item to be deleted.

#### Output
*Output schema unknown*

### ProtectedItems_Get
Provides the details of the backup item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup.ProtectedItems_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The backup item name used in this GET operation.
  * $filter `string`: expand eq {extendedInfo}. This filter enables you to choose (or filter) specific items in the list of backup items.

#### Output
* output [ProtectedItemResource](#protecteditemresource)

### ProtectedItems_CreateOrUpdate
This operation enables an item to be backed up, or modifies the existing backup policy information for an item that has been backed up. This is an asynchronous operation. To learn the status of the operation, call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup.ProtectedItems_CreateOrUpdate({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "resourceProtectedItem": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The name of the backup item.
  * resourceProtectedItem **required** [ProtectedItemResource](#protecteditemresource)

#### Output
*Output schema unknown*

### Backups_Trigger
Triggers the backup job for the specified backup item. This is an asynchronous operation. To know the status of the operation, call GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup.Backups_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "resourceBackupRequest": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The name of backup item used in this POST operation.
  * resourceBackupRequest **required** [BackupRequestResource](#backuprequestresource)

#### Output
*Output schema unknown*

### ProtectedItemOperationResults_Get
Gets the result of any operation on the backup item.


```js
azure_recoveryservicesbackup.ProtectedItemOperationResults_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The name of backup item used in this GET operation.
  * operationId **required** `string`: The OperationID used in this GET operation.

#### Output
* output [ProtectedItemResource](#protecteditemresource)

### ProtectedItemOperationStatuses_Get
Gets the status of an operation such as triggering a backup or restore. The status can be: In progress, Completed, or Failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations create jobs. This method returns the list of jobs associated with the operation.


```js
azure_recoveryservicesbackup.ProtectedItemOperationStatuses_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The name of backup item used in this GET operation.
  * operationId **required** `string`: The OperationID used in this GET operation.

#### Output
* output [OperationStatus](#operationstatus)

### RecoveryPoints_List
Lists the recovery points, or backup copies, for the specified backup item.


```js
azure_recoveryservicesbackup.RecoveryPoints_List({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup item.
  * containerName **required** `string`: The container name associated with the backup item.
  * protectedItemName **required** `string`: The name of backup item used in this GET operation.
  * $filter `string`: startDate eq {yyyy-mm-dd hh:mm:ss PM} and endDate { yyyy-mm-dd hh:mm:ss PM}.

#### Output
* output [RecoveryPointResourceList](#recoverypointresourcelist)

### RecoveryPoints_Get
Provides the backup data for the RecoveryPointID. This is an asynchronous operation. To learn the status of the operation, call the GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup.RecoveryPoints_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with backup item.
  * containerName **required** `string`: The container name associated with backup item.
  * protectedItemName **required** `string`: The name of the backup item used in this GET operation.
  * recoveryPointId **required** `string`: The RecoveryPointID associated with this GET operation.

#### Output
* output [RecoveryPointResource](#recoverypointresource)

### ItemLevelRecoveryConnections_Provision
Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens File Explorer which displays the recoverable files and folders. This is an asynchronous operation. To get the provisioning status, call GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup.ItemLevelRecoveryConnections_Provision({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "recoveryPointId": "",
  "resourceILRRequest": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup items.
  * containerName **required** `string`: The container name associated with the backup items.
  * protectedItemName **required** `string`: The name of the backup item whose files or folders are to be restored.
  * recoveryPointId **required** `string`: The recovery point ID for backup data. The iSCSI connection will be provisioned for this backup data.
  * resourceILRRequest **required** [ILRRequestResource](#ilrrequestresource)

#### Output
*Output schema unknown*

### Restores_Trigger
Restores the specified backup data. This is an asynchronous operation. To know the status of this API call, use GetProtectedItemOperationResult API.


```js
azure_recoveryservicesbackup.Restores_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": "",
  "recoveryPointId": "",
  "resourceRestoreRequest": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup items.
  * containerName **required** `string`: The container name associated with the backup items.
  * protectedItemName **required** `string`: The backup item to be restored.
  * recoveryPointId **required** `string`: The recovery point ID for the backup data to be restored.
  * resourceRestoreRequest **required** [RestoreRequestResource](#restorerequestresource)

#### Output
*Output schema unknown*

### ItemLevelRecoveryConnections_Revoke
Revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer displaying all recoverable files and folders. This is an asynchronous operation.


```js
azure_recoveryservicesbackup.ItemLevelRecoveryConnections_Revoke({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the backup items. The value allowed is Azure.
  * containerName **required** `string`: The container name associated with the backup items.
  * protectedItemName **required** `string`: The name of the backup items whose files or folders will be restored.
  * recoveryPointId **required** `string`: The string that identifies the recovery point. The iSCSI connection will be revoked for this protected data.

#### Output
*Output schema unknown*

### ProtectionContainers_Refresh
Discovers the containers in the subscription that can be protected in a Recovery Services vault. This is an asynchronous operation. To learn the status of the operation, use the GetRefreshOperationResult API.


```js
azure_recoveryservicesbackup.ProtectionContainers_Refresh({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * fabricName **required** `string`: The fabric name associated with the container.

#### Output
*Output schema unknown*

### Jobs_List
Provides a pageable list of jobs.


```js
azure_recoveryservicesbackup.Jobs_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`: The following equation can be used to filter the list of jobs based on status, type, start date, and end date. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }.
  * $skipToken `string`: The Skip Token filter.

#### Output
* output [JobResourceList](#jobresourcelist)

### ExportJobsOperationResults_Get
Gets the result of the operation triggered by the ExportJob API.


```js
azure_recoveryservicesbackup.ExportJobsOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * operationId **required** `string`: The ID associated with the export job.

#### Output
* output [OperationResultInfoBaseResource](#operationresultinfobaseresource)

### JobDetails_Get
Gets extended information associated with the job.


```js
azure_recoveryservicesbackup.JobDetails_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * jobName **required** `string`: Name of the job associated with this GET operation.

#### Output
* output [JobResource](#jobresource)

### JobCancellations_Trigger
Cancels the job. This is an asynchronous operation. To know the status of the cancellation, call the GetCancelOperationResult API.


```js
azure_recoveryservicesbackup.JobCancellations_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * jobName **required** `string`: Name of the job to cancel.

#### Output
*Output schema unknown*

### JobOperationResults_Get
Gets the result of the operation.


```js
azure_recoveryservicesbackup.JobOperationResults_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * jobName **required** `string`: Job name associated with this GET operation.
  * operationId **required** `string`: OperationID associated with this GET operation.

#### Output
*Output schema unknown*

### Jobs_Export
Exports all jobs for a given Shared Access Signatures (SAS) URL. The SAS URL expires within 15 minutes of its creation.


```js
azure_recoveryservicesbackup.Jobs_Export({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`: The OData filter options. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }.

#### Output
*Output schema unknown*

### BackupOperationResults_Get
Provides the status of the delete operations, for example, deleting a backup item. Once the operation starts, the response status code is Accepted. The response status code remains in this state until the operation reaches completion. On successful completion, the status code changes to OK. This method expects OperationID as an argument. OperationID is part of the Location header of the operation response.


```js
azure_recoveryservicesbackup.BackupOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * operationId **required** `string`: The ID of the operation.

#### Output
*Output schema unknown*

### BackupOperationStatuses_Get
Gets the status of an operation such as triggering a backup or restore. The status can be In progress, Completed or Failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs when the operation is complete.


```js
azure_recoveryservicesbackup.BackupOperationStatuses_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * operationId **required** `string`: The ID of the operation.

#### Output
* output [OperationStatus](#operationstatus)

### ProtectionPolicies_List
Lists the backup policies associated with the Recovery Services vault. The API provides parameters to Get scoped results.


```js
azure_recoveryservicesbackup.ProtectionPolicies_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`: The following equation can be used to filter the list of backup policies. backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql}.

#### Output
* output [ProtectionPolicyResourceList](#protectionpolicyresourcelist)

### ProtectionPolicies_Delete
Deletes the specified backup policy from your Recovery Services vault. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.


```js
azure_recoveryservicesbackup.ProtectionPolicies_Delete({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * policyName **required** `string`: The name of the backup policy to be deleted.

#### Output
*Output schema unknown*

### ProtectionPolicies_Get
Gets the details of the backup policy associated with the Recovery Services vault. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.


```js
azure_recoveryservicesbackup.ProtectionPolicies_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * policyName **required** `string`: The backup policy name used in this GET operation.

#### Output
* output [ProtectionPolicyResource](#protectionpolicyresource)

### ProtectionPolicies_CreateOrUpdate
Creates or modifies a backup policy. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.


```js
azure_recoveryservicesbackup.ProtectionPolicies_CreateOrUpdate({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "resourceProtectionPolicy": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * policyName **required** `string`: The backup policy to be created.
  * resourceProtectionPolicy **required** [ProtectionPolicyResource](#protectionpolicyresource)

#### Output
* output [ProtectionPolicyResource](#protectionpolicyresource)

### ProtectionPolicyOperationResults_Get
Provides the result of an operation.


```js
azure_recoveryservicesbackup.ProtectionPolicyOperationResults_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * policyName **required** `string`: The backup policy name used in this GET operation.
  * operationId **required** `string`: The ID associated with this GET operation.

#### Output
* output [ProtectionPolicyResource](#protectionpolicyresource)

### ProtectionPolicyOperationStatuses_Get
Provides the status of the asynchronous operations like backup or restore. The status can be: in progress, completed, or failed. You can refer to the Operation Status enumeration for the possible states of an operation. Some operations create jobs. This method returns the list of jobs associated with the operation.


```js
azure_recoveryservicesbackup.ProtectionPolicyOperationStatuses_Get({
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
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * policyName **required** `string`: The backup policy name used in this GET operation.
  * operationId **required** `string`: The ID associated with this GET operation.

#### Output
* output [OperationStatus](#operationstatus)

### ProtectableItems_List
Based on the query filter and the pagination parameters, this operation provides a pageable list of objects within the subscription that can be protected.


```js
azure_recoveryservicesbackup.ProtectableItems_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`: Using the following query filters, you can sort a specific backup item based on: type of backup item, status, name of the item, and more.  providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and status eq { NotProtected , Protecting , Protected } and friendlyName {name} and skipToken eq {string which provides the next set of list} and topToken eq {int} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }.
  * $skipToken `string`: The Skip Token filter.

#### Output
* output [WorkloadProtectableItemResourceList](#workloadprotectableitemresourcelist)

### ProtectedItems_List
Provides a pageable list of all items in a subscription, that can be protected.


```js
azure_recoveryservicesbackup.ProtectedItems_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`:  itemType eq { VM , FileFolder , AzureSqlDb , SQLDB , Exchange , Sharepoint , DPMUnknown } and providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and policyName eq {policyName} and containerName eq {containername} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }.
  * $skipToken `string`:  The Skip Token filter.

#### Output
* output [ProtectedItemResourceList](#protecteditemresourcelist)

### ProtectionContainers_List
Lists the containers registered to the Recovery Services vault.


```js
azure_recoveryservicesbackup.ProtectionContainers_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * subscriptionId **required** `string`: The subscription ID.
  * $filter `string`: The following equation is used to sort or filter the containers registered to the vault. providerType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql} and status eq {Unknown, NotRegistered, Registered, Registering} and friendlyName eq {containername} and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql}.

#### Output
* output [ProtectionContainerResourceList](#protectioncontainerresourcelist)



## Definitions

### AzureBackupServerEngine
* AzureBackupServerEngine `object`: The backup engine type when Azure Backup Server is used to manage the backups.
  * backupEngineId `string`: The ID of the backup engine.
  * backupEngineType `string`: The type of the backup engine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The type of backup management associated with the backup engine.
  * canReRegister `boolean`: The flag indicating whether the backup engine be registered again, once the engine has been initially registered.
  * friendlyName `string`: The friendly name of the backup engine.
  * healthStatus `string`: The backup status of the backup engine.
  * registrationStatus `string`: The status of the backup engine registration with the Recovery Services vault.

### AzureIaaSClassicComputeVMContainer
* AzureIaaSClassicComputeVMContainer `object`: IaaS VM workload-specific backup item representing a classic-deployed virtual machine.
  * resourceGroup `string`: The resource group name associated with the Recovery Services vault.
  * virtualMachineId `string`: The fully qualified Resource Manager URL of the virtual machine represented by this Azure IaaS VM container.
  * virtualMachineVersion `string`: Specifies whether the container represents a classic or a Resource Manager-deployed virtual machine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the container.
  * containerType `string`: The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: The status of the container's health.
  * protectableObjectType `string`: The protectable object type associated with the container.
  * registrationStatus `string`: The container's registration status with the Recovery Services vault.

### AzureIaaSClassicComputeVMProtectableItem
* AzureIaaSClassicComputeVMProtectableItem `object`: IaaS VM workload-specific backup item representing a classic VM.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the virtual machine.
  * backupManagementType `string`: The backup management type.
  * friendlyName `string`: The friendly name of the backup item.
  * protectableItemType `string`: The type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): The state of the back up item.

### AzureIaaSClassicComputeVMProtectedItem
* AzureIaaSClassicComputeVMProtectedItem `object`: IaaS VM workload-specific backup item representing the classic VM.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: The friendly name of the VM represented by this backup item.
  * lastBackupStatus `string`: The last backup operation status. The possible values are: Healthy or Unhealthy.
  * lastBackupTime `string`: The timestamp of the last backup operation for this backup item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): The backup state of this backup item.
  * protectionStatus `string`: The backup status of this backup item.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup item.
  * lastRecoveryPoint `string`: The timestamp when the most recent backup copy was created for this backup item.
  * policyId `string`: The ID of the backup policy associated with this backup item.
  * protectedItemType `string`: The backup item type.
  * sourceResourceId `string`: The ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type for this item.

### AzureIaaSComputeVMContainer
* AzureIaaSComputeVMContainer `object`: IaaS VM workload-specific backup item representing a Resource Manager-deployed virtual machine.
  * resourceGroup `string`: The resource group name associated with the Recovery Services vault.
  * virtualMachineId `string`: The fully qualified Resource Manager URL of the virtual machine represented by this Azure IaaS VM container.
  * virtualMachineVersion `string`: Specifies whether the container represents a classic or a Resource Manager-deployed virtual machine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the container.
  * containerType `string`: The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: The status of the container's health.
  * protectableObjectType `string`: The protectable object type associated with the container.
  * registrationStatus `string`: The container's registration status with the Recovery Services vault.

### AzureIaaSComputeVMProtectableItem
* AzureIaaSComputeVMProtectableItem `object`: IaaS VM workload-specific backup item representing a Resource Manager VM.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the virtual machine.
  * backupManagementType `string`: The backup management type.
  * friendlyName `string`: The friendly name of the backup item.
  * protectableItemType `string`: The type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): The state of the back up item.

### AzureIaaSComputeVMProtectedItem
* AzureIaaSComputeVMProtectedItem `object`: IaaS VM workload-specific backup item representing the Resource Manager VM.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: The friendly name of the VM represented by this backup item.
  * lastBackupStatus `string`: The last backup operation status. The possible values are: Healthy or Unhealthy.
  * lastBackupTime `string`: The timestamp of the last backup operation for this backup item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): The backup state of this backup item.
  * protectionStatus `string`: The backup status of this backup item.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup item.
  * lastRecoveryPoint `string`: The timestamp when the most recent backup copy was created for this backup item.
  * policyId `string`: The ID of the backup policy associated with this backup item.
  * protectedItemType `string`: The backup item type.
  * sourceResourceId `string`: The ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type for this item.

### AzureIaaSVMErrorInfo
* AzureIaaSVMErrorInfo `object`: Azure IaaS VM workload-specific error information.
  * errorCode `integer`: Error code.
  * errorString `string`: Localized error string.
  * errorTitle `string`: Title: typically, the entity associated the error.
  * recommendations `array`: List of localized recommendations for the error string.
    * items `string`

### AzureIaaSVMJob
* AzureIaaSVMJob `object`: The Azure IaaS VM workload-specific job object.
  * actionsInfo `array`: Gets or sets the state, or actions, applicable on this job. Examples of the actions are: Cancel or Retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * duration `string`: The time that elapsed during the execution of this job.
  * errorDetails `array`: Error details about this job.
    * items [AzureIaaSVMErrorInfo](#azureiaasvmerrorinfo)
  * extendedInfo [AzureIaaSVMJobExtendedInfo](#azureiaasvmjobextendedinfo)
  * virtualMachineVersion `string`: Specifies whether the backup item is a Classic VM or a Resource Manager VM.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: The friendly name of the entity on which the current job is executing.
  * jobType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: The job status.

### AzureIaaSVMJobExtendedInfo
* AzureIaaSVMJobExtendedInfo `object`: Additional information for the Azure IaaS VM workload-specific job.
  * dynamicErrorMessage `string`: Non-localized error message for job execution.
  * progressPercentage `number`: Indicates progress of the job. Null if it has not started or completed.
  * propertyBag `object`: Job properties.
  * tasksList `array`: List of tasks associated with this job.
    * items [AzureIaaSVMJobTaskDetails](#azureiaasvmjobtaskdetails)

### AzureIaaSVMJobTaskDetails
* AzureIaaSVMJobTaskDetails `object`: Azure IaaS VM workload-specific job task details.
  * duration `string`: The time elapsed for the task.
  * endTime `string`: The end time.
  * instanceId `string`: The instance ID.
  * progressPercentage `number`: The progress of the task, as a percentage.
  * startTime `string`: The start time.
  * status `string`: The status.
  * taskId `string`: The task display name.

### AzureIaaSVMProtectedItem
* AzureIaaSVMProtectedItem `object`: This Azure VM workload-specific (also known as IaaS VM workload-specific) backup item has been backed up.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: The friendly name of the VM represented by this backup item.
  * lastBackupStatus `string`: The last backup operation status. The possible values are: Healthy or Unhealthy.
  * lastBackupTime `string`: The timestamp of the last backup operation for this backup item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): The backup state of this backup item.
  * protectionStatus `string`: The backup status of this backup item.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup item.
  * lastRecoveryPoint `string`: The timestamp when the most recent backup copy was created for this backup item.
  * policyId `string`: The ID of the backup policy associated with this backup item.
  * protectedItemType `string`: The backup item type.
  * sourceResourceId `string`: The ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type for this item.

### AzureIaaSVMProtectedItemExtendedInfo
* AzureIaaSVMProtectedItemExtendedInfo `object`: Additional information for the Azure VM (also known as IaaS VM)-specific backup item.
  * oldestRecoveryPoint `string`: The oldest backup copy available for this backup item.
  * policyInconsistent `boolean`: Specifies if the backup policy associated with the backup item is inconsistent.
  * recoveryPointCount `integer`: The number of backup copies available for this backup item.

### AzureIaaSVMProtectionPolicy
* AzureIaaSVMProtectionPolicy `object`: Azure VM (also known as IaaS VM) workload-specific backup policy.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * schedulePolicy [SchedulePolicy](#schedulepolicy)
  * backupManagementType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
  * protectedItemsCount `integer`: The number of items associated with this policy.

### AzureSqlContainer
* AzureSqlContainer `object`: Azure SQL workload-specific container.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the container.
  * containerType `string`: The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: The status of the container's health.
  * protectableObjectType `string`: The protectable object type associated with the container.
  * registrationStatus `string`: The container's registration status with the Recovery Services vault.

### AzureSqlProtectedItem
* AzureSqlProtectedItem `object`: This is an Azure SQL workload-specific backup item.
  * extendedInfo [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
  * protectedItemDataId `string`: The internal ID of a backup item. The internal ID is used by the Azure SQL Backup engine to contact Recovery Services.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): The backup state of the backup item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup item.
  * lastRecoveryPoint `string`: The timestamp when the most recent backup copy was created for this backup item.
  * policyId `string`: The ID of the backup policy associated with this backup item.
  * protectedItemType `string`: The backup item type.
  * sourceResourceId `string`: The ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type for this item.

### AzureSqlProtectedItemExtendedInfo
* AzureSqlProtectedItemExtendedInfo `object`: Additional information for the Azure SQL specific backup item.
  * oldestRecoveryPoint `string`: The oldest backup copy available for this item in the service.
  * policyState `string`: The state of the backup policy associated with this backup item.
  * recoveryPointCount `integer`: The number of available backup copies for this backup item.

### AzureSqlProtectionPolicy
* AzureSqlProtectionPolicy `object`:  The Azure SQL workload-specific backup policy.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * backupManagementType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
  * protectedItemsCount `integer`: The number of items associated with this policy.

### BEKDetails
* BEKDetails `object`: BEK is Bitlocker Encryption Key.
  * secretData `string`: Bitlocker Encryption Key (BEK) data.
  * secretUrl `string`: Secret refers to Bitlocker Encryption Key (BEK). The Secret can be unlocked by the key (or KEK).
  * secretVaultId `string`: ID of the Key Vault where this Secret is stored.

### BMSBackupEngineQueryObject
* BMSBackupEngineQueryObject `object`: The query parameters used to GET the list of backup engines.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup engine.

### BMSContainerQueryObject
* BMSContainerQueryObject `object`: The query filters that can be used with the list containers API.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for this container.
  * friendlyName `string`: The friendly name of the container.
  * status `string`: The status of the container's registration with the Recovery Services vault.

### BMSPOQueryObject
* BMSPOQueryObject `object`: Filters the list of backup items.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type.
  * friendlyName `string`: The friendly name for the item.
  * status `string`: The backup status query parameter.

### BMSRPQueryObject
* BMSRPQueryObject `object`: Filters the list of backup copies based on the property.
  * endDate `string`: Use backup copies created before this time.
  * startDate `string`: Use backup copies created after this time.

### BackupEngineBase
* BackupEngineBase `object`: The base backup engine class. All workload-specific backup engines derive from this class.
  * backupEngineId `string`: The ID of the backup engine.
  * backupEngineType `string`: The type of the backup engine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The type of backup management associated with the backup engine.
  * canReRegister `boolean`: The flag indicating whether the backup engine be registered again, once the engine has been initially registered.
  * friendlyName `string`: The friendly name of the backup engine.
  * healthStatus `string`: The backup status of the backup engine.
  * registrationStatus `string`: The status of the backup engine registration with the Recovery Services vault.

### BackupEngineBaseResource
* BackupEngineBaseResource `object`: The base backup engine class. All workload-specific backup engines derive from this class.
  * properties [BackupEngineBase](#backupenginebase)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### BackupEngineBaseResourceList
* BackupEngineBaseResourceList `object`: List of BackupEngineBase resources
  * value `array`: List of resources.
    * items [BackupEngineBaseResource](#backupenginebaseresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### BackupRequest
* BackupRequest `object`: The base class for a backup request. Workload-specific backup requests are derived from this class.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### BackupRequestResource
* BackupRequestResource `object`: Base class for the backup request. Workload-specific backup requests are derived from this class.
  * properties [BackupRequest](#backuprequest)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ClientScriptForConnect
* ClientScriptForConnect `object`: Client script details for the file or folder restore.
  * osType `string`: The operating system platform ("Windows" or "Linux") for which this file or folder restore client script works.
  * scriptContent `string`: File content of the client script for file or folder restore.
  * scriptExtension `string`: File extension of the client script for the file or folder restore. Some examples of the extension are: .ps1 and .sh.

### DailyRetentionFormat
* DailyRetentionFormat `object`: Daily retention format.
  * daysOfTheMonth `array`: List of days of the month.
    * items [Day](#day)

### DailyRetentionSchedule
* DailyRetentionSchedule `object`: Daily retention schedule.
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionTimes `array`: The retention times of retention policy.
    * items `string`

### Day
* Day `object`: Day of the week.
  * date `integer`
  * isLast `boolean`

### DpmBackupEngine
* DpmBackupEngine `object`: The backup engine type when Data Protection Manager (DPM) is used to manage backups.
  * backupEngineId `string`: The ID of the backup engine.
  * backupEngineType `string`: The type of the backup engine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The type of backup management associated with the backup engine.
  * canReRegister `boolean`: The flag indicating whether the backup engine be registered again, once the engine has been initially registered.
  * friendlyName `string`: The friendly name of the backup engine.
  * healthStatus `string`: The backup status of the backup engine.
  * registrationStatus `string`: The status of the backup engine registration with the Recovery Services vault.

### DpmErrorInfo
* DpmErrorInfo `object`: DPM workload-specific error information.
  * errorString `string`: Localized error string.
  * recommendations `array`: The list of localized recommendations for the error string.
    * items `string`

### DpmJob
* DpmJob `object`: The DPM workload-specific job object.
  * actionsInfo `array`: The state or actions applicable on this job, such as Cancel or Retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * containerName `string`: The name of the cluster or server protecting the current backup item, if any.
  * containerType `string`: The type of container.
  * dpmServerName `string`: DPM server name managing the backup item or backup job.
  * duration `string`: The time elapsed for the job.
  * errorDetails `array`: The errors.
    * items [DpmErrorInfo](#dpmerrorinfo)
  * extendedInfo [DpmJobExtendedInfo](#dpmjobextendedinfo)
  * workloadType `string`: The type of backup item.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: The friendly name of the entity on which the current job is executing.
  * jobType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: The job status.

### DpmJobExtendedInfo
* DpmJobExtendedInfo `object`: Additional information on the DPM workload-specific job.
  * dynamicErrorMessage `string`: Non-localized error message on job execution.
  * propertyBag `object`: The job properties.
  * tasksList `array`: List of tasks associated with this job.
    * items [DpmJobTaskDetails](#dpmjobtaskdetails)

### DpmJobTaskDetails
* DpmJobTaskDetails `object`: DPM workload-specific job task details.
  * duration `string`: The time elapsed for task.
  * endTime `string`: The end time.
  * startTime `string`: The start time.
  * status `string`: The status.
  * taskId `string`: The task display name.

### EncryptionDetails
* EncryptionDetails `object`: Details needed if the VM was encrypted at the time of backup.
  * encryptionEnabled `boolean`: Identifies whether the backup copy represents an encrypted VM at the time of backup.
  * kekUrl `string`: URL of the Key Encryption Key (KEK).
  * kekVaultId `string`: The ID of Key Vault where the Key Encryption Key (KEK) is stored.
  * secretKeyUrl `string`: URL of the Bitlocker Encryption Key (BEK).
  * secretKeyVaultId `string`: The ID of Key Vault where the Bitlocker Encryption Key (BEK), or Secret, is stored.

### ExportJobsOperationResultInfo
* ExportJobsOperationResultInfo `object`: This class is used to send blob details after exporting jobs.
  * blobSasKey `string`: The Shared Access Signatures (SAS) key used to access the blob. The key expires after 15 minutes.
  * blobUrl `string`: The URL of the blob. The serialized string, which is the list of jobs, is exported to this URL.
  * objectType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.

### GenericRecoveryPoint
* GenericRecoveryPoint `object`: Generic backup copy.
  * friendlyName `string`: Friendly name of the backup copy.
  * recoveryPointAdditionalInfo `string`: Additional information associated with this backup copy.
  * recoveryPointTime `string`: The time when this backup copy was created.
  * recoveryPointType `string`: Type of the backup copy.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### GetProtectedItemQueryObject
* GetProtectedItemQueryObject `object`: This object filters the list of backup items.
  * expand `string`: Specifies if the additional information should be provided for this item.

### ILRRequest
* ILRRequest `object`: Parameters to restore file or folders API.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### ILRRequestResource
* ILRRequestResource `object`: The parameters to restore files or folders.
  * properties [ILRRequest](#ilrrequest)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### IaaSVMContainer
* IaaSVMContainer `object`: IaaS VM workload-specific container.
  * resourceGroup `string`: The resource group name associated with the Recovery Services vault.
  * virtualMachineId `string`: The fully qualified Resource Manager URL of the virtual machine represented by this Azure IaaS VM container.
  * virtualMachineVersion `string`: Specifies whether the container represents a classic or a Resource Manager-deployed virtual machine.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the container.
  * containerType `string`: The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: The status of the container's health.
  * protectableObjectType `string`: The protectable object type associated with the container.
  * registrationStatus `string`: The container's registration status with the Recovery Services vault.

### IaaSVMProtectableItem
* IaaSVMProtectableItem `object`: This Azure VM workload-specific (also known as IaaS VM workload-specific) backup item can be backed up.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the virtual machine.
  * backupManagementType `string`: The backup management type.
  * friendlyName `string`: The friendly name of the backup item.
  * protectableItemType `string`: The type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): The state of the back up item.

### IaasVMBackupRequest
* IaasVMBackupRequest `object`: This is an Azure VM (also known as IaaS VM) workload-specific backup request.
  * recoveryPointExpiryTimeInUTC `string`: The backup copy will expire after the time specified. The time is in UTC format.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### IaasVMILRRegistrationRequest
* IaasVMILRRegistrationRequest `object`: Restore files or folders from a backup copy, or recovery point, of an IaaS (or Azure) VM.
  * initiatorName `string`: The iSCSI initiator name.
  * recoveryPointId `string`: The ID of the IaaS VM recovery point used to restore the files or folders.
  * renewExistingRegistration `boolean`: Whether to renew the existing registration with the iSCSI server.
  * virtualMachineId `string`: The fully qualified Resource Manager ID of the VM used to restore the files or folders.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### IaasVMRecoveryPoint
* IaasVMRecoveryPoint `object`: Azure VM (also known as IaaS VM) workload-specific backup copy.
  * isInstantILRSessionActive `boolean`: Answer to the question - Is the session to recover items from this backup copy still active.
  * isSourceVMEncrypted `boolean`: Identifies whether the VM was encrypted when the backup copy is created.
  * keyAndSecret [KeyAndSecretDetails](#keyandsecretdetails)
  * recoveryPointAdditionalInfo `string`: Additional information associated with this backup copy.
  * recoveryPointTime `string`: The date and time when the backup copy was created.
  * recoveryPointType `string`: Type of the backup copy.
  * sourceVMStorageType `string`: The storage type for the VM whose backup copy was created.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### IaasVMRestoreRequest
* IaasVMRestoreRequest `object`: IaaS VM workload-specific restore.
  * affinityGroup `string`: The affinity group associated with the VM to be restored. Affinity groups are used only for Classic-deployed virtual machines.
  * createNewCloudService `boolean`: Asks the question if a new cloud service should be created while restoring the VM. If the answer is false, the VM is restored to the same cloud service.
  * encryptionDetails [EncryptionDetails](#encryptiondetails)
  * recoveryPointId `string`: The ID of the backup copy to be recovered.
  * recoveryType `string` (values: Invalid, OriginalLocation, AlternateLocation, RestoreDisks): The type of this recovery.
  * region `string`: The region where the virtual machine is restored.
  * sourceResourceId `string`: The fully qualified Resource Manager ID of the VM being recovered.
  * storageAccountId `string`: The fully qualified Resource Manager ID of the storage account where the VM will be restored.
  * subnetId `string`: Subnet ID is the identifier for the VM to be restored. For Classic VMs the subnet ID would be {VnetID}/Subnet/{SubnetName}, and for the Resource Manager VMs, the subnet ID would be the Resource Manager resource ID used to represent the subnet.
  * targetDomainNameId `string`: The fully qualified Resource Manager ID of the domain name to be associated with the VM being restored. Use the Resource Manager ID to identify the domain, only for Classic-deployed virtual machines.
  * targetResourceGroupId `string`: The Resource Manager ID of the resource group you're creating for this VM and other artifacts.
  * targetVirtualMachineId `string`: The complete Resource Manager ID of the VM that will be created.
  * virtualNetworkId `string`: This is the virtual network ID of the vnet that is attached to the virtual machine.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### InstantItemRecoveryTarget
* InstantItemRecoveryTarget `object`: Target details for the file or folder restore.
  * clientScripts `array`: List of client scripts.
    * items [ClientScriptForConnect](#clientscriptforconnect)

### Job
* Job `object`: Defines workload-agnostic properties for a job.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: The friendly name of the entity on which the current job is executing.
  * jobType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: The job status.

### JobQueryObject
* JobQueryObject `object`: The filters to list the jobs.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup management for the job.
  * endTime `string`: The time when the job ends. The value is in UTC.
  * jobId `string`: The ID of the job. Each jobID is unique.
  * operation `string` (values: Invalid, ConfigureBackup, Backup, Restore, DisableBackup, DeleteBackupData): The type of operation.
  * startTime `string`: The time when the job starts. The value is in UTC.
  * status `string` (values: Invalid, InProgress, Completed, Failed, CompletedWithWarnings, Cancelled, Cancelling): Status of the job.

### JobResource
* JobResource `object`: Defines the workload-agnostic properties for a job.
  * properties [Job](#job)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### JobResourceList
* JobResourceList `object`: List of Job resources.
  * value `array`: List of resources.
    * items [JobResource](#jobresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### KEKDetails
* KEKDetails `object`: The Key Encryption Key (KEK) is the encryption key for the Bitlocker Encryption Key (BEK).
  * keyBackupData `string`: Key Backup Data refers to Key Encryption Key (KEK) data.
  * keyUrl `string`: Key refers to the Key Encryption Key (KEK). The KEK is the Key to unlock the Secret.
  * keyVaultId `string`: Key Vault ID identifies where the KEK is stored.

### KeyAndSecretDetails
* KeyAndSecretDetails `object`: BEK stands for Bitlocker Encryption Key.
  * bekDetails [BEKDetails](#bekdetails)
  * kekDetails [KEKDetails](#kekdetails)

### LongTermRetentionPolicy
* LongTermRetentionPolicy `object`: Long-term retention policy.
  * dailySchedule [DailyRetentionSchedule](#dailyretentionschedule)
  * monthlySchedule [MonthlyRetentionSchedule](#monthlyretentionschedule)
  * weeklySchedule [WeeklyRetentionSchedule](#weeklyretentionschedule)
  * yearlySchedule [YearlyRetentionSchedule](#yearlyretentionschedule)
  * retentionPolicyType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### LongTermSchedulePolicy
* LongTermSchedulePolicy `object`: Long-term policy schedule.
  * schedulePolicyType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### MabContainer
* MabContainer `object`: The container associated with items backed up using Azure Backup Server.
  * agentVersion `string`: The version of the agent used with this container.
  * canReRegister `boolean`: The container can be registered one more time.
  * containerId `integer`: The ID for the container.
  * extendedInfo [MabContainerExtendedInfo](#mabcontainerextendedinfo)
  * protectedItemCount `integer`: The number of backup items in the container.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the container.
  * containerType `string`: The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: The status of the container's health.
  * protectableObjectType `string`: The protectable object type associated with the container.
  * registrationStatus `string`: The container's registration status with the Recovery Services vault.

### MabContainerExtendedInfo
* MabContainerExtendedInfo `object`: Additional information for the container.
  * backupItemType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The type of backup items associated with this container.
  * backupItems `array`: The list of backup items associated with this container.
    * items `string`
  * lastBackupStatus `string`: The latest backup status of this container.
  * lastRefreshedAt `string`: The time stamp when this container was refreshed.
  * policyName `string`: The backup policy associated with this container.

### MabErrorInfo
* MabErrorInfo `object`: Azure Backup Server workload-specific error information.
  * errorString `string`: Localized error string.
  * recommendations `array`: List of localized recommendations.
    * items `string`

### MabFileFolderProtectedItem
* MabFileFolderProtectedItem `object`: This is a file or folder workload-specific backup item.
  * computerName `string`: The name of the computer associated with this backup item.
  * extendedInfo [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
  * friendlyName `string`: The friendly name of this backup item.
  * isScheduledForDeferredDelete `boolean`
  * lastBackupStatus `string`: The status of last backup operation.
  * protectionState `string`: The states for this property are: Protected, ProtectionStopped, IRPending, or ProtectionError.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup item.
  * lastRecoveryPoint `string`: The timestamp when the most recent backup copy was created for this backup item.
  * policyId `string`: The ID of the backup policy associated with this backup item.
  * protectedItemType `string`: The backup item type.
  * sourceResourceId `string`: The ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type for this item.

### MabFileFolderProtectedItemExtendedInfo
* MabFileFolderProtectedItemExtendedInfo `object`: Additional information for the backup item.
  * lastRefreshedAt `string`: The last day and time the agent synced with the service.
  * oldestRecoveryPoint `string`: The oldest backup copy available.
  * recoveryPointCount `integer`: The number of backup copies associated with the backup item.

### MabJob
* MabJob `object`: The Azure Backup Server workload-specific job.
  * actionsInfo `array`: The state or actions applicable on jobs such as Cancel or Retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * duration `string`: The time required for the job to run.
  * errorDetails `array`: The errors.
    * items [MabErrorInfo](#maberrorinfo)
  * extendedInfo [MabJobExtendedInfo](#mabjobextendedinfo)
  * mabServerName `string`: The name of server protecting the data store.
  * mabServerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, DPMVenusContainer, MABContainer, ClusterResource, AzureSqlContainer, WindowsServer, Windows): Server type of the Azure Backup Server container.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): Workload type of backup item.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: The friendly name of the entity on which the current job is executing.
  * jobType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: The job status.

### MabJobExtendedInfo
* MabJobExtendedInfo `object`: Additional information for the Azure Backup Server workload-specific job.
  * dynamicErrorMessage `string`: Non-localized error message specific to this job.
  * propertyBag `object`: The job properties.
  * tasksList `array`: List of tasks for this job.
    * items [MabJobTaskDetails](#mabjobtaskdetails)

### MabJobTaskDetails
* MabJobTaskDetails `object`: Azure Backup Server workload-specific job task details.
  * duration `string`: Time elapsed for task.
  * endTime `string`: The end time.
  * startTime `string`: The start time.
  * status `string`: The status.
  * taskId `string`: The task display name.

### MabProtectionPolicy
* MabProtectionPolicy `object`: The backup policy for the file or folder container.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * schedulePolicy [SchedulePolicy](#schedulepolicy)
  * backupManagementType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
  * protectedItemsCount `integer`: The number of items associated with this policy.

### MonthlyRetentionSchedule
* MonthlyRetentionSchedule `object`: The monthly retention schedule.
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionScheduleDaily [DailyRetentionFormat](#dailyretentionformat)
  * retentionScheduleFormatType `string` (values: Invalid, Daily, Weekly): Retention schedule format type for monthly retention policy.
  * retentionScheduleWeekly [WeeklyRetentionFormat](#weeklyretentionformat)
  * retentionTimes `array`: Retention times of the retention policy.
    * items `string`

### Object
* Object `object`: Base of all objects.

### OperationResultInfo
* OperationResultInfo `object`: Information about the result of the operation.
  * jobList `array`: List of jobs created by this operation.
    * items `string`
  * objectType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.

### OperationResultInfoBase
* OperationResultInfoBase `object`: The base class for operation result information.
  * objectType `string`: This property is the discriminator for deciding between the specific types in the polymorphic chain of types.

### OperationResultInfoBaseResource
* OperationResultInfoBaseResource `object`: Base class for operation result information.
  * properties [OperationResultInfoBase](#operationresultinfobase)
  * Headers `object`: The HTTP headers associated with this operation.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): The HTTP status code of the operation.

### OperationStatus
* OperationStatus `object`: Operation status.
  * endTime `string`: The operation end time. The format of the time is ISO-8601.
  * error [OperationStatusError](#operationstatuserror)
  * id `string`: ID of the operation.
  * name `string`: Name of the operation.
  * properties [OperationStatusExtendedInfo](#operationstatusextendedinfo)
  * startTime `string`: The operation start time. The format of the time is ISO-8601.
  * status `string` (values: Invalid, InProgress, Succeeded, Failed, Canceled): Operation status.

### OperationStatusError
* OperationStatusError `object`: Error information associated with the operation status call.
  * code `string`: The error code for the failed operation.
  * message `string`: The error message for the failed operation.

### OperationStatusExtendedInfo
* OperationStatusExtendedInfo `object`: The base class for additional information about the operation status.
  * objectType `string`: This property is used as the discriminator for deciding between types, in the polymorphic chain of types.

### OperationStatusJobExtendedInfo
* OperationStatusJobExtendedInfo `object`: Extended information about the operation status job.
  * jobId `string`: ID of the job created for this backup item.
  * objectType `string`: This property is used as the discriminator for deciding between types, in the polymorphic chain of types.

### OperationStatusJobsExtendedInfo
* OperationStatusJobsExtendedInfo `object`: Operation status extended info for the job list.
  * failedJobsError `object`: Stores all the failed jobs along with the corresponding error codes.
  * jobIds `array`: IDs of the jobs created for the backup item.
    * items `string`
  * objectType `string`: This property is used as the discriminator for deciding between types, in the polymorphic chain of types.

### OperationStatusProvisionILRExtendedInfo
* OperationStatusProvisionILRExtendedInfo `object`: Extended information about the Item Level Recovery (ILR) provision action, operation status.
  * recoveryTarget [InstantItemRecoveryTarget](#instantitemrecoverytarget)
  * objectType `string`: This property is used as the discriminator for deciding between types, in the polymorphic chain of types.

### OperationWorkerResponse
* OperationWorkerResponse `object`: The base class for operation result responses.
  * Headers `object`: The HTTP headers associated with this operation.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): The HTTP status code of the operation.

### ProtectedItem
* ProtectedItem `object`: The base class for backup items.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup item.
  * lastRecoveryPoint `string`: The timestamp when the most recent backup copy was created for this backup item.
  * policyId `string`: The ID of the backup policy associated with this backup item.
  * protectedItemType `string`: The backup item type.
  * sourceResourceId `string`: The ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type for this item.

### ProtectedItemQueryObject
* ProtectedItemQueryObject `object`: Filters the list of backup items.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with an item.
  * containerName `string`: The name of the container.
  * itemType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, DPMUnknown): The workload type associated with an item.
  * policyName `string`: The name of the backup policy associated with the item.

### ProtectedItemResource
* ProtectedItemResource `object`: The base class for backup items.
  * properties [ProtectedItem](#protecteditem)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectedItemResourceList
* ProtectedItemResourceList `object`: The list of ProtectedItem resources.
  * value `array`: The list of resources.
    * items [ProtectedItemResource](#protecteditemresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### ProtectionContainer
* ProtectionContainer `object`: The base class for a container with backup items. Containers with specific workloads are derived from this class.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type for the container.
  * containerType `string`: The type assigned to the container. The values to use for each of these properties are:<br/> 1. Compute Azure VM is Microsoft.Compute/virtualMachines<br/> 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines<br/> 3. Windows machines (like Azure Backup Server and DPM) is Windows<br/> 4. Azure SQL instance is AzureSqlContainer.
  * friendlyName `string`: Friendly name of the container.
  * healthStatus `string`: The status of the container's health.
  * protectableObjectType `string`: The protectable object type associated with the container.
  * registrationStatus `string`: The container's registration status with the Recovery Services vault.

### ProtectionContainerResource
* ProtectionContainerResource `object`: Base class for a container with backup items. Containers with specific workloads are derived from this class.
  * properties [ProtectionContainer](#protectioncontainer)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectionContainerResourceList
* ProtectionContainerResourceList `object`: The list of ProtectionContainer resources.
  * value `array`: The list of resources.
    * items [ProtectionContainerResource](#protectioncontainerresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### ProtectionPolicy
* ProtectionPolicy `object`: The base class for a backup policy. Workload-specific backup policies are derived from this class.
  * backupManagementType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
  * protectedItemsCount `integer`: The number of items associated with this policy.

### ProtectionPolicyQueryObject
* ProtectionPolicyQueryObject `object`: This object filters the list of backup policies.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): The backup management type associated with the backup policy.

### ProtectionPolicyResource
* ProtectionPolicyResource `object`: The base class for backup policy. Workload-specific backup policies are derived from this class.
  * properties [ProtectionPolicy](#protectionpolicy)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectionPolicyResourceList
* ProtectionPolicyResourceList `object`: The list of ProtectionPolicy resources.
  * value `array`: The list of resources.
    * items [ProtectionPolicyResource](#protectionpolicyresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### RecoveryPoint
* RecoveryPoint `object`: The base class for backup copies. Workload-specific backup copies are derived from this class.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### RecoveryPointResource
* RecoveryPointResource `object`: The base class for backup copies. Workload-specific backup copies are derived from this class.
  * properties [RecoveryPoint](#recoverypoint)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### RecoveryPointResourceList
* RecoveryPointResourceList `object`: The list of RecoveryPoint resources.
  * value `array`: The list of resources.
    * items [RecoveryPointResource](#recoverypointresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### Resource
* Resource `object`: Base for all resources.
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ResourceList
* ResourceList `object`: Base for all lists of resources.
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### RestoreRequest
* RestoreRequest `object`: The base class for restore requests. Workload-specific restore requests are derived from this class.
  * objectType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### RestoreRequestResource
* RestoreRequestResource `object`: The base class for a restore request. Workload-specific restore requests are derived from this class.
  * properties [RestoreRequest](#restorerequest)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### RetentionDuration
* RetentionDuration `object`: Retention duration.
  * count `integer`: Count of the duration types. Retention duration is determined by the combining the Count times and durationType. 
  * durationType `string` (values: Invalid, Days, Weeks, Months, Years): The retention duration type of the retention policy.

### RetentionPolicy
* RetentionPolicy `object`: The base class for retention policy.
  * retentionPolicyType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### SchedulePolicy
* SchedulePolicy `object`: The base class for backup schedules.
  * schedulePolicyType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### SimpleRetentionPolicy
* SimpleRetentionPolicy `object`: Simple policy retention.
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionPolicyType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### SimpleSchedulePolicy
* SimpleSchedulePolicy `object`: Simple policy schedule.
  * scheduleRunDays `array`: This list is the days of the week when the schedule runs.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * scheduleRunFrequency `string` (values: Invalid, Daily, Weekly): Defines the frequency interval (daily or weekly) for the schedule policy.
  * scheduleRunTimes `array`: List of times, during a day, when the schedule runs.
    * items `string`
  * scheduleWeeklyFrequency `integer`: The number of times per week the schedule runs.
  * schedulePolicyType `string`: This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.

### WeeklyRetentionFormat
* WeeklyRetentionFormat `object`: Weekly retention format.
  * daysOfTheWeek `array`: List of days of the week.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * weeksOfTheMonth `array`: List of weeks of the month.
    * items `string` (values: First, Second, Third, Fourth, Last)

### WeeklyRetentionSchedule
* WeeklyRetentionSchedule `object`: Weekly retention schedule.
  * daysOfTheWeek `array`: List of the days of the week for the weekly retention policy.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionTimes `array`: Retention times of the retention policy.
    * items `string`

### WorkloadProtectableItem
* WorkloadProtectableItem `object`: The base class for backup item. Workload-specific backup items are derived from this class.
  * backupManagementType `string`: The backup management type.
  * friendlyName `string`: The friendly name of the backup item.
  * protectableItemType `string`: The type of the backup item.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected): The state of the back up item.

### WorkloadProtectableItemResource
* WorkloadProtectableItemResource `object`: The base class for the backup item. Workload-specific backup items are derived from this class.
  * properties [WorkloadProtectableItem](#workloadprotectableitem)
  * eTag `string`: Optional ETag.
  * id `string`: Resource ID represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### WorkloadProtectableItemResourceList
* WorkloadProtectableItemResourceList `object`: The list of WorkloadProtectableItem resources.
  * value `array`: List of resources.
    * items [WorkloadProtectableItemResource](#workloadprotectableitemresource)
  * nextLink `string`: The URI to GET the next page of resources. Call ListNext() gets the next page of resources.

### YearlyRetentionSchedule
* YearlyRetentionSchedule `object`: Yearly retention schedule.
  * monthsOfYear `array`: List of the months of year for the yearly retention policy.
    * items `string` (values: Invalid, January, February, March, April, May, June, July, August, September, October, November, December)
  * retentionDuration [RetentionDuration](#retentionduration)
  * retentionScheduleDaily [DailyRetentionFormat](#dailyretentionformat)
  * retentionScheduleFormatType `string` (values: Invalid, Daily, Weekly): Retention schedule format for the yearly retention policy.
  * retentionScheduleWeekly [WeeklyRetentionFormat](#weeklyretentionformat)
  * retentionTimes `array`: Retention times for the retention policy.
    * items `string`


