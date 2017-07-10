# @datafire/azure_arm_recoveryservicesbackup


## Operation: BackupEngines_Get
The backup management servers registered to a Recovery Services vault. This returns a pageable list of servers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "Use this filter to choose the specific backup management server. backupManagementType { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }."
    },
    "$skipToken": {
      "type": "string",
      "description": "The Skip Token filter."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupEngineBaseResourceList"
}
```
## Operation: ProtectionContainerRefreshOperationResults_Get
Provides the result of the refresh operation triggered by the BeginRefresh operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the container."
    },
    "operationId": {
      "type": "string",
      "description": "The operation ID used for this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "operationId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProtectionContainers_Get
Gets details of the specific container registered to your Recovery Services vault.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the container."
    },
    "containerName": {
      "type": "string",
      "description": "The container name used for this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionContainerResource"
}
```
## Operation: ProtectionContainerOperationResults_Get
Gets the result of any operation on the container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the container."
    },
    "containerName": {
      "type": "string",
      "description": "The container name used for this GET operation."
    },
    "operationId": {
      "type": "string",
      "description": "The operation ID used for this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionContainerResource"
}
```
## Operation: ProtectedItems_Delete
Used to disable the backup job for an item within a container. This is an asynchronous operation. To learn the status of the request, call the GetItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": " The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The backup item to be deleted."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProtectedItems_Get
Provides the details of the backup item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The backup item name used in this GET operation."
    },
    "$filter": {
      "type": "string",
      "description": "expand eq {extendedinfo}. This filter enables you to choose (or filter) specific items in the list of backup items."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectedItemResource"
}
```
## Operation: ProtectedItems_CreateOrUpdate
This operation enables an item to be backed up, or modifies the existing backup policy information for an item that has been backed up. This is an asynchronous operation. To learn the status of the operation, call the GetItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of the backup item."
    },
    "resourceProtectedItem": {
      "$ref": "#/definitions/ProtectedItemResource"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "resourceProtectedItem"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Backups_Trigger
Triggers the backup job for the specified backup item. This is an asynchronous operation. To know the status of the operation, call GetProtectedItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of backup item used in this POST operation."
    },
    "resourceBackupRequest": {
      "$ref": "#/definitions/BackupRequestResource"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "resourceBackupRequest"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProtectedItemOperationResults_Get
Gets the result of any operation on the backup item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of backup item used in this GET operation."
    },
    "operationId": {
      "type": "string",
      "description": "The OperationID used in this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectedItemResource"
}
```
## Operation: ProtectedItemOperationStatuses_Get
Gets the status of an operation such as triggering a backup or restore. The status can be: In progress, Completed, or Failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations create jobs. This method returns the list of jobs associated with the operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of backup item used in this GET operation."
    },
    "operationId": {
      "type": "string",
      "description": "The OperationID used in this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatus"
}
```
## Operation: RecoveryPoints_List
Lists the recovery points, or backup copies, for the specified backup item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of backup item used in this GET operation."
    },
    "$filter": {
      "type": "string",
      "description": "startDate eq {yyyy-mm-dd hh:mm:ss PM} and endDate { yyyy-mm-dd hh:mm:ss PM}."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecoveryPointResourceList"
}
```
## Operation: RecoveryPoints_Get
Provides the backup data for the RecoveryPointID. This is an asynchronous operation. To learn the status of the operation, call the GetProtectedItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with backup item."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with backup item."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of the backup item used in this GET operation."
    },
    "recoveryPointId": {
      "type": "string",
      "description": "The RecoveryPointID associated with this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "recoveryPointId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecoveryPointResource"
}
```
## Operation: ItemLevelRecoveryConnections_Provision
Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens File Explorer which displays the recoverable files and folders. This is an asynchronous operation. To get the provisioning status, call GetProtectedItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup items."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup items."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of the backup item whose files or folders are to be restored."
    },
    "recoveryPointId": {
      "type": "string",
      "description": "The recovery point ID for backup data. The iSCSI connection will be provisioned for this backup data."
    },
    "resourceILRRequest": {
      "$ref": "#/definitions/ILRRequestResource"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "recoveryPointId",
    "resourceILRRequest"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Restores_Trigger
Restores the specified backup data. This is an asynchronous operation. To know the status of this API call, use GetProtectedItemOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup items."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup items."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The backup item to be restored."
    },
    "recoveryPointId": {
      "type": "string",
      "description": "The recovery point ID for the backup data to be restored."
    },
    "resourceRestoreRequest": {
      "$ref": "#/definitions/RestoreRequestResource"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "recoveryPointId",
    "resourceRestoreRequest"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ItemLevelRecoveryConnections_Revoke
Revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer displaying all recoverable files and folders. This is an asynchronous operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the backup items. The value allowed is Azure."
    },
    "containerName": {
      "type": "string",
      "description": "The container name associated with the backup items."
    },
    "protectedItemName": {
      "type": "string",
      "description": "The name of the backup items whose files or folders will be restored."
    },
    "recoveryPointId": {
      "type": "string",
      "description": "The string that identifies the recovery point. The iSCSI connection will be revoked for this protected data."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName",
    "containerName",
    "protectedItemName",
    "recoveryPointId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProtectionContainers_Refresh
Discovers the containers in the subscription that can be protected in a Recovery Services vault. This is an asynchronous operation. To learn the status of the operation, use the GetRefreshOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "fabricName": {
      "type": "string",
      "description": "The fabric name associated with the container."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "fabricName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Jobs_List
Provides a pageable list of jobs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "The following equation can be used to filter the list of jobs based on status, type, start date, and end date. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }."
    },
    "$skipToken": {
      "type": "string",
      "description": "The Skip Token filter."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobResourceList"
}
```
## Operation: ExportJobsOperationResults_Get
Gets the result of the operation triggered by the ExportJob API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "operationId": {
      "type": "string",
      "description": "The ID associated with the export job."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationResultInfoBaseResource"
}
```
## Operation: JobDetails_Get
Gets extended information associated with the job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "jobName": {
      "type": "string",
      "description": "Name of the job associated with this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "jobName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobResource"
}
```
## Operation: JobCancellations_Trigger
Cancels the job. This is an asynchronous operation. To know the status of the cancellation, call the GetCancelOperationResult API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "jobName": {
      "type": "string",
      "description": "Name of the job to cancel."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "jobName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: JobOperationResults_Get
Gets the result of the operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "jobName": {
      "type": "string",
      "description": "Job name associated with this GET operation."
    },
    "operationId": {
      "type": "string",
      "description": "OperationID associated with this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "jobName",
    "operationId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Jobs_Export
Exports all jobs for a given Shared Access Signatures (SAS) URL. The SAS URL expires within 15 minutes of its creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "The OData filter options. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: BackupOperationResults_Get
Provides the status of the delete operations, for example, deleting a backup item. Once the operation starts, the response status code is Accepted. The response status code remains in this state until the operation reaches completion. On successful completion, the status code changes to OK. This method expects OperationID as an argument. OperationID is part of the Location header of the operation response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "operationId": {
      "type": "string",
      "description": "The ID of the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "operationId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: BackupOperationStatuses_Get
Gets the status of an operation such as triggering a backup or restore. The status can be In progress, Completed or Failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs when the operation is complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "operationId": {
      "type": "string",
      "description": "The ID of the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatus"
}
```
## Operation: ProtectionPolicies_List
Lists the backup policies associated with the Recovery Services vault. The API provides parameters to Get scoped results.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "The following equation can be used to filter the list of backup policies. backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql}."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionPolicyResourceList"
}
```
## Operation: ProtectionPolicies_Delete
Deletes the specified backup policy from your Recovery Services vault. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "policyName": {
      "type": "string",
      "description": "The name of the backup policy to be deleted."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "policyName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProtectionPolicies_Get
Gets the details of the backup policy associated with the Recovery Services vault. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "policyName": {
      "type": "string",
      "description": "The backup policy name used in this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "policyName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionPolicyResource"
}
```
## Operation: ProtectionPolicies_CreateOrUpdate
Creates or modifies a backup policy. This is an asynchronous operation. Use the GetPolicyOperationResult API to Get the operation status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "policyName": {
      "type": "string",
      "description": "The backup policy to be created."
    },
    "resourceProtectionPolicy": {
      "$ref": "#/definitions/ProtectionPolicyResource"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "policyName",
    "resourceProtectionPolicy"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionPolicyResource"
}
```
## Operation: ProtectionPolicyOperationResults_Get
Provides the result of an operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "policyName": {
      "type": "string",
      "description": "The backup policy name used in this GET operation."
    },
    "operationId": {
      "type": "string",
      "description": "The ID associated with this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "policyName",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionPolicyResource"
}
```
## Operation: ProtectionPolicyOperationStatuses_Get
Provides the status of the asynchronous operations like backup or restore. The status can be: in progress, completed, or failed. You can refer to the Operation Status enumeration for the possible states of an operation. Some operations create jobs. This method returns the list of jobs associated with the operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "policyName": {
      "type": "string",
      "description": "The backup policy name used in this GET operation."
    },
    "operationId": {
      "type": "string",
      "description": "The ID associated with this GET operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId",
    "policyName",
    "operationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatus"
}
```
## Operation: ProtectableItems_List
Based on the query filter and the pagination parameters, this operation provides a pageable list of objects within the subscription that can be protected.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "Using the following query filters, you can sort a specific backup item based on: type of backup item, status, name of the item, and more.  providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and status eq { NotProtected , Protecting , Protected } and friendlyName {name} and skipToken eq {string which provides the next set of list} and topToken eq {int} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }."
    },
    "$skipToken": {
      "type": "string",
      "description": "The Skip Token filter."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkloadProtectableItemResourceList"
}
```
## Operation: ProtectedItems_List
Provides a pageable list of all items in a subscription, that can be protected.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": " itemType eq { VM , FileFolder , AzureSqlDb , SQLDB , Exchange , Sharepoint , DPMUnknown } and providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and policyName eq {policyname} and containerName eq {containername} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }."
    },
    "$skipToken": {
      "type": "string",
      "description": " The Skip Token filter."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectedItemResourceList"
}
```
## Operation: ProtectionContainers_List
Lists the containers registered to the Recovery Services vault.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "vaultName": {
      "type": "string",
      "description": "The name of the Recovery Services vault."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group associated with the Recovery Services vault."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "The following equation is used to sort or filter the containers registered to the vault. providerType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql} and status eq {Unknown, NotRegistered, Registered, Registering} and friendlyName eq {containername} and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql}."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "vaultName",
    "resourceGroupName",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProtectionContainerResourceList"
}
```
