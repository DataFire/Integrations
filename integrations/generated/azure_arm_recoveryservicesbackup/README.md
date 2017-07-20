# @datafire/azure_arm_recoveryservicesbackup

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_recoveryservicesbackup
```

```js
let datafire = require('datafire');
let azure_arm_recoveryservicesbackup = require('@datafire/azure_arm_recoveryservicesbackup').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_recoveryservicesbackup: account,
  }
})


azure_arm_recoveryservicesbackup.BackupEngines_Get({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### BackupEngines_Get
The backup management servers registered to a Recovery Services vault. This returns a pageable list of servers.


```js
azure_arm_recoveryservicesbackup.BackupEngines_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - Use this filter to choose the specific backup management server. backupManagementType { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }.
* $skipToken (string) - The Skip Token filter.

### ProtectionContainerRefreshOperationResults_Get
Provides the result of the refresh operation triggered by the BeginRefresh operation.


```js
azure_arm_recoveryservicesbackup.ProtectionContainerRefreshOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the container.
* operationId (string) **required** - The operation ID used for this GET operation.

### ProtectionContainers_Get
Gets details of the specific container registered to your Recovery Services vault.


```js
azure_arm_recoveryservicesbackup.ProtectionContainers_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the container.
* containerName (string) **required** - The container name used for this GET operation.

### ProtectionContainerOperationResults_Get
Gets the result of any operation on the container.


```js
azure_arm_recoveryservicesbackup.ProtectionContainerOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the container.
* containerName (string) **required** - The container name used for this GET operation.
* operationId (string) **required** - The operation ID used for this GET operation.

### ProtectedItems_Delete
Used to disable the backup job for an item within a container. This is an asynchronous operation. To learn the status of the request, call the GetItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.ProtectedItems_Delete({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** -  The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The backup item to be deleted.

### ProtectedItems_Get
Provides the details of the backup item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.ProtectedItems_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The backup item name used in this GET operation.
* $filter (string) - expand eq {extendedinfo}. This filter enables you to choose (or filter) specific items in the list of backup items.

### ProtectedItems_CreateOrUpdate
This operation enables an item to be backed up, or modifies the existing backup policy information for an item that has been backed up. This is an asynchronous operation. To learn the status of the operation, call the GetItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.ProtectedItems_CreateOrUpdate({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The name of the backup item.
* resourceProtectedItem (undefined) **required** - The base class for backup items.

### Backups_Trigger
Triggers the backup job for the specified backup item. This is an asynchronous operation. To know the status of the operation, call GetProtectedItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.Backups_Trigger({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The name of backup item used in this POST operation.
* resourceBackupRequest (undefined) **required** - Base class for the backup request. Workload-specific backup requests are derived from this class.

### ProtectedItemOperationResults_Get
Gets the result of any operation on the backup item.


```js
azure_arm_recoveryservicesbackup.ProtectedItemOperationResults_Get({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The name of backup item used in this GET operation.
* operationId (string) **required** - The OperationID used in this GET operation.

### ProtectedItemOperationStatuses_Get
Gets the status of an operation such as triggering a backup or restore. The status can be: In progress, Completed, or Failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations create jobs. This method returns the list of jobs associated with the operation.


```js
azure_arm_recoveryservicesbackup.ProtectedItemOperationStatuses_Get({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The name of backup item used in this GET operation.
* operationId (string) **required** - The OperationID used in this GET operation.

### RecoveryPoints_List
Lists the recovery points, or backup copies, for the specified backup item.


```js
azure_arm_recoveryservicesbackup.RecoveryPoints_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "containerName": "",
  "protectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup item.
* containerName (string) **required** - The container name associated with the backup item.
* protectedItemName (string) **required** - The name of backup item used in this GET operation.
* $filter (string) - startDate eq {yyyy-mm-dd hh:mm:ss PM} and endDate { yyyy-mm-dd hh:mm:ss PM}.

### RecoveryPoints_Get
Provides the backup data for the RecoveryPointID. This is an asynchronous operation. To learn the status of the operation, call the GetProtectedItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.RecoveryPoints_Get({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with backup item.
* containerName (string) **required** - The container name associated with backup item.
* protectedItemName (string) **required** - The name of the backup item used in this GET operation.
* recoveryPointId (string) **required** - The RecoveryPointID associated with this GET operation.

### ItemLevelRecoveryConnections_Provision
Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens File Explorer which displays the recoverable files and folders. This is an asynchronous operation. To get the provisioning status, call GetProtectedItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.ItemLevelRecoveryConnections_Provision({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup items.
* containerName (string) **required** - The container name associated with the backup items.
* protectedItemName (string) **required** - The name of the backup item whose files or folders are to be restored.
* recoveryPointId (string) **required** - The recovery point ID for backup data. The iSCSI connection will be provisioned for this backup data.
* resourceILRRequest (undefined) **required** - The parameters to restore files or folders.

### Restores_Trigger
Restores the specified backup data. This is an asynchronous operation. To know the status of this API call, use GetProtectedItemOperationResult API.


```js
azure_arm_recoveryservicesbackup.Restores_Trigger({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup items.
* containerName (string) **required** - The container name associated with the backup items.
* protectedItemName (string) **required** - The backup item to be restored.
* recoveryPointId (string) **required** - The recovery point ID for the backup data to be restored.
* resourceRestoreRequest (undefined) **required** - The base class for a restore request. Workload-specific restore requests are derived from this class.

### ItemLevelRecoveryConnections_Revoke
Revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer displaying all recoverable files and folders. This is an asynchronous operation.


```js
azure_arm_recoveryservicesbackup.ItemLevelRecoveryConnections_Revoke({
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

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the backup items. The value allowed is Azure.
* containerName (string) **required** - The container name associated with the backup items.
* protectedItemName (string) **required** - The name of the backup items whose files or folders will be restored.
* recoveryPointId (string) **required** - The string that identifies the recovery point. The iSCSI connection will be revoked for this protected data.

### ProtectionContainers_Refresh
Discovers the containers in the subscription that can be protected in a Recovery Services vault. This is an asynchronous operation. To learn the status of the operation, use the GetRefreshOperationResult API.


```js
azure_arm_recoveryservicesbackup.ProtectionContainers_Refresh({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* fabricName (string) **required** - The fabric name associated with the container.

### Jobs_List
Provides a pageable list of jobs.


```js
azure_arm_recoveryservicesbackup.Jobs_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - The following equation can be used to filter the list of jobs based on status, type, start date, and end date. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }.
* $skipToken (string) - The Skip Token filter.

### ExportJobsOperationResults_Get
Gets the result of the operation triggered by the ExportJob API.


```js
azure_arm_recoveryservicesbackup.ExportJobsOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* operationId (string) **required** - The ID associated with the export job.

### JobDetails_Get
Gets extended information associated with the job.


```js
azure_arm_recoveryservicesbackup.JobDetails_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* jobName (string) **required** - Name of the job associated with this GET operation.

### JobCancellations_Trigger
Cancels the job. This is an asynchronous operation. To know the status of the cancellation, call the GetCancelOperationResult API.


```js
azure_arm_recoveryservicesbackup.JobCancellations_Trigger({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* jobName (string) **required** - Name of the job to cancel.

### JobOperationResults_Get
Gets the result of the operation.


```js
azure_arm_recoveryservicesbackup.JobOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* jobName (string) **required** - Job name associated with this GET operation.
* operationId (string) **required** - OperationID associated with this GET operation.

### Jobs_Export
Exports all jobs for a given Shared Access Signatures (SAS) URL. The SAS URL expires within 15 minutes of its creation.


```js
azure_arm_recoveryservicesbackup.Jobs_Export({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - The OData filter options. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }.

### BackupOperationResults_Get
Provides the status of the delete operations, for example, deleting a backup item. Once the operation starts, the response status code is Accepted. The response status code remains in this state until the operation reaches completion. On successful completion, the status code changes to OK. This method expects OperationID as an argument. OperationID is part of the Location header of the operation response.


```js
azure_arm_recoveryservicesbackup.BackupOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* operationId (string) **required** - The ID of the operation.

### BackupOperationStatuses_Get
Gets the status of an operation such as triggering a backup or restore. The status can be In progress, Completed or Failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs when the operation is complete.


```js
azure_arm_recoveryservicesbackup.BackupOperationStatuses_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* operationId (string) **required** - The ID of the operation.

### ProtectionPolicies_List
Lists the backup policies associated with the Recovery Services vault. The API provides parameters to Get scoped results.


```js
azure_arm_recoveryservicesbackup.ProtectionPolicies_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - The following equation can be used to filter the list of backup policies. backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql}.

### ProtectionPolicies_Delete
Deletes the specified backup policy from your Recovery Services vault. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.


```js
azure_arm_recoveryservicesbackup.ProtectionPolicies_Delete({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* policyName (string) **required** - The name of the backup policy to be deleted.

### ProtectionPolicies_Get
Gets the details of the backup policy associated with the Recovery Services vault. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.


```js
azure_arm_recoveryservicesbackup.ProtectionPolicies_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* policyName (string) **required** - The backup policy name used in this GET operation.

### ProtectionPolicies_CreateOrUpdate
Creates or modifies a backup policy. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.


```js
azure_arm_recoveryservicesbackup.ProtectionPolicies_CreateOrUpdate({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "resourceProtectionPolicy": null
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* policyName (string) **required** - The backup policy to be created.
* resourceProtectionPolicy (undefined) **required** - The base class for backup policy. Workload-specific backup policies are derived from this class.

### ProtectionPolicyOperationResults_Get
Provides the result of an operation.


```js
azure_arm_recoveryservicesbackup.ProtectionPolicyOperationResults_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* policyName (string) **required** - The backup policy name used in this GET operation.
* operationId (string) **required** - The ID associated with this GET operation.

### ProtectionPolicyOperationStatuses_Get
Provides the status of the asynchronous operations like backup or restore. The status can be: in progress, completed, or failed. You can refer to the Operation Status enumeration for the possible states of an operation. Some operations create jobs. This method returns the list of jobs associated with the operation.


```js
azure_arm_recoveryservicesbackup.ProtectionPolicyOperationStatuses_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "operationId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* policyName (string) **required** - The backup policy name used in this GET operation.
* operationId (string) **required** - The ID associated with this GET operation.

### ProtectableItems_List
Based on the query filter and the pagination parameters, this operation provides a pageable list of objects within the subscription that can be protected.


```js
azure_arm_recoveryservicesbackup.ProtectableItems_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - Using the following query filters, you can sort a specific backup item based on: type of backup item, status, name of the item, and more.  providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and status eq { NotProtected , Protecting , Protected } and friendlyName {name} and skipToken eq {string which provides the next set of list} and topToken eq {int} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }.
* $skipToken (string) - The Skip Token filter.

### ProtectedItems_List
Provides a pageable list of all items in a subscription, that can be protected.


```js
azure_arm_recoveryservicesbackup.ProtectedItems_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) -  itemType eq { VM , FileFolder , AzureSqlDb , SQLDB , Exchange , Sharepoint , DPMUnknown } and providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and policyName eq {policyname} and containerName eq {containername} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }.
* $skipToken (string) -  The Skip Token filter.

### ProtectionContainers_List
Lists the containers registered to the Recovery Services vault.


```js
azure_arm_recoveryservicesbackup.ProtectionContainers_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* vaultName (string) **required** - The name of the Recovery Services vault.
* resourceGroupName (string) **required** - The name of the resource group associated with the Recovery Services vault.
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - The following equation is used to sort or filter the containers registered to the vault. providerType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql} and status eq {Unknown, NotRegistered, Registered, Registering} and friendlyName eq {containername} and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql}.

