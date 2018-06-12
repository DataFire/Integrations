# @datafire/azure_recoveryservicesbackup_bms

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicesbackup_bms
```
```js
let azure_recoveryservicesbackup_bms = require('@datafire/azure_recoveryservicesbackup_bms').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservicesbackup_bms.ProtectionIntent_Validate({
  "api-version": "",
  "azureRegion": "",
  "subscriptionId": "",
  "parameters": {}
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ProtectionIntent_Validate
It will validate followings
            1. Vault capacity
            2. VM is already protected
            3. Any VM related configuration passed in properties.


```js
azure_recoveryservicesbackup_bms.ProtectionIntent_Validate({
  "api-version": "",
  "azureRegion": "",
  "subscriptionId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * azureRegion **required** `string`: Azure region to hit Api
  * subscriptionId **required** `string`: The subscription Id.
  * parameters **required** [PreValidateEnableBackupRequest](#prevalidateenablebackuprequest)

#### Output
* output [PreValidateEnableBackupResponse](#prevalidateenablebackupresponse)

### BackupStatus_Get
Get the container backup status


```js
azure_recoveryservicesbackup_bms.BackupStatus_Get({
  "api-version": "",
  "azureRegion": "",
  "subscriptionId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * azureRegion **required** `string`: Azure region to hit Api
  * subscriptionId **required** `string`: The subscription Id.
  * parameters **required** [BackupStatusRequest](#backupstatusrequest)

#### Output
* output [BackupStatusResponse](#backupstatusresponse)

### FeatureSupport_Validate
It will validate if given feature with resource properties is supported in service


```js
azure_recoveryservicesbackup_bms.FeatureSupport_Validate({
  "api-version": "",
  "azureRegion": "",
  "subscriptionId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * azureRegion **required** `string`: Azure region to hit Api
  * subscriptionId **required** `string`: The subscription Id.
  * parameters **required** [FeatureSupportRequest](#featuresupportrequest)

#### Output
* output [AzureVMResourceFeatureSupportResponse](#azurevmresourcefeaturesupportresponse)

### ProtectionIntent_CreateOrUpdate
Create Intent for Enabling backup of an item. This is a synchronous operation.


```js
azure_recoveryservicesbackup_bms.ProtectionIntent_CreateOrUpdate({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "intentObjectName": "",
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
  * intentObjectName **required** `string`: Intent object name.
  * parameters **required** [ProtectionIntentResource](#protectionintentresource)

#### Output
* output [ProtectionIntentResource](#protectionintentresource)

### BackupJobs_List
Provides a pageable list of jobs.


```js
azure_recoveryservicesbackup_bms.BackupJobs_List({
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
* output [JobResourceList](#jobresourcelist)

### ExportJobsOperationResults_Get
Gets the operation result of operation triggered by Export Jobs API. If the operation is successful, then it also contains URL of a Blob and a SAS key to access the same. The blob contains exported jobs in JSON serialized format.


```js
azure_recoveryservicesbackup_bms.ExportJobsOperationResults_Get({
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

### JobDetails_Get
Gets exteded information associated with the job.


```js
azure_recoveryservicesbackup_bms.JobDetails_Get({
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
  * jobName **required** `string`: Name of the job whose details are to be fetched.

#### Output
* output [JobResource](#jobresource)

### Jobs_Export
Triggers export of jobs specified by filters and returns an OperationID to track.


```js
azure_recoveryservicesbackup_bms.Jobs_Export({
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

### BackupPolicies_List
Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch scoped results.


```js
azure_recoveryservicesbackup_bms.BackupPolicies_List({
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

### BackupProtectedItems_List
Provides a pageable list of all items that are backed up within a vault.


```js
azure_recoveryservicesbackup_bms.BackupProtectedItems_List({
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

### BackupUsageSummaries_List
Fetches the backup management usage summaries of the vault.


```js
azure_recoveryservicesbackup_bms.BackupUsageSummaries_List({
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



## Definitions

### AzureFileShareProtectionPolicy
* AzureFileShareProtectionPolicy `object`: AzureStorage backup policy.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * schedulePolicy [SchedulePolicy](#schedulepolicy)
  * timeZone `string`: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
  * workLoadType `string`: Type of workload for the backup management
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### AzureFileshareProtectedItem
* AzureFileshareProtectedItem `object`: Azure File Share workload-specific backup item.
  * extendedInfo [AzureFileshareProtectedItemExtendedInfo](#azurefileshareprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the fileshare represented by this backup item.
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): backups running status for this backup item.
  * lastBackupStatus `string`: Last backup operation status. Possible values: Healthy, Unhealthy.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### AzureFileshareProtectedItemExtendedInfo
* AzureFileshareProtectedItemExtendedInfo `object`: Additional information about Azure File Share backup item.
  * oldestRecoveryPoint `string`: The oldest backup copy available for this item in the service.
  * policyState `string`: Indicates consistency of policy object and policy applied to this backup item.
  * recoveryPointCount `integer`: Number of available backup copies associated with this backup item.

### AzureIaaSClassicComputeVMProtectedItem
* AzureIaaSClassicComputeVMProtectedItem `object`: IaaS VM workload-specific backup item representing the Classic Compute VM.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * healthDetails `array`: Health details on this backup item.
    * items [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health status of protected item
  * lastBackupStatus `string`: Last backup operation status.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectedItemDataId `string`: Data ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### AzureIaaSComputeVMProtectedItem
* AzureIaaSComputeVMProtectedItem `object`: IaaS VM workload-specific backup item representing the Azure Resource Manager VM.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * healthDetails `array`: Health details on this backup item.
    * items [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health status of protected item
  * lastBackupStatus `string`: Last backup operation status.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectedItemDataId `string`: Data ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### AzureIaaSVMErrorInfo
* AzureIaaSVMErrorInfo `object`: Azure IaaS VM workload-specific error information.
  * errorCode `integer`: Error code.
  * errorString `string`: Localized error string.
  * errorTitle `string`: Title: Typically, the entity that the error pertains to.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

### AzureIaaSVMHealthDetails
* AzureIaaSVMHealthDetails `object`: Azure IaaS VM workload-specific Health Details.
  * code `integer`: Health Code
  * message `string`: Health Message
  * recommendations `array`: Health Recommended Actions
    * items `string`
  * title `string`: Health Title

### AzureIaaSVMJob
* AzureIaaSVMJob `object`: Azure IaaS VM workload-specifc job object.
  * actionsInfo `array`: Gets or sets the state/actions applicable on this job like cancel/retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * duration `string`: Time elapsed during the execution of this job.
  * errorDetails `array`: Error details on execution of this job.
    * items [AzureIaaSVMErrorInfo](#azureiaasvmerrorinfo)
  * extendedInfo [AzureIaaSVMJobExtendedInfo](#azureiaasvmjobextendedinfo)
  * virtualMachineVersion `string`: Specifies whether the backup item is a Classic or an Azure Resource Manager VM.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### AzureIaaSVMJobExtendedInfo
* AzureIaaSVMJobExtendedInfo `object`: Azure IaaS VM workload-specific additional information for job.
  * dynamicErrorMessage `string`: Non localized error message on job execution.
  * progressPercentage `number`: Indicates progress of the job. Null if it has not started or completed.
  * propertyBag `object`: Job properties.
  * tasksList `array`: List of tasks associated with this job.
    * items [AzureIaaSVMJobTaskDetails](#azureiaasvmjobtaskdetails)

### AzureIaaSVMJobTaskDetails
* AzureIaaSVMJobTaskDetails `object`: Azure IaaS VM workload-specific job task details.
  * duration `string`: Time elapsed for task.
  * endTime `string`: The end time.
  * instanceId `string`: The instanceId.
  * progressPercentage `number`: Progress of the task.
  * startTime `string`: The start time.
  * status `string`: The status.
  * taskId `string`: The task display name.

### AzureIaaSVMProtectedItem
* AzureIaaSVMProtectedItem `object`: IaaS VM workload-specific backup item.
  * extendedInfo [AzureIaaSVMProtectedItemExtendedInfo](#azureiaasvmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * healthDetails `array`: Health details on this backup item.
    * items [AzureIaaSVMHealthDetails](#azureiaasvmhealthdetails)
  * healthStatus `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health status of protected item
  * lastBackupStatus `string`: Last backup operation status.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * protectedItemDataId `string`: Data ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * virtualMachineId `string`: Fully qualified ARM ID of the virtual machine represented by this item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

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

### AzureResourceProtectionIntent
* AzureResourceProtectionIntent `object`: IaaS VM specific backup protection intent item.
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

### AzureSqlProtectedItem
* AzureSqlProtectedItem `object`: Azure SQL workload-specific backup item.
  * extendedInfo [AzureSqlProtectedItemExtendedInfo](#azuresqlprotecteditemextendedinfo)
  * protectedItemDataId `string`: Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of the backed up item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

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

### AzureStorageErrorInfo
* AzureStorageErrorInfo `object`: Azure storage specific error information
  * errorCode `integer`: Error code.
  * errorString `string`: Localized error string.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

### AzureStorageJob
* AzureStorageJob `object`: Azure storage specific job.
  * actionsInfo `array`: Gets or sets the state/actions applicable on this job like cancel/retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * duration `string`: Time elapsed during the execution of this job.
  * errorDetails `array`: Error details on execution of this job.
    * items [AzureStorageErrorInfo](#azurestorageerrorinfo)
  * extendedInfo [AzureStorageJobExtendedInfo](#azurestoragejobextendedinfo)
  * storageAccountName `string`: Specifies friendly name of the storage account.
  * storageAccountVersion `string`: Specifies whether the Storage account is a Classic or an Azure Resource Manager Storage account.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### AzureStorageJobExtendedInfo
* AzureStorageJobExtendedInfo `object`: Azure Storage workload-specific additional information for job.
  * dynamicErrorMessage `string`: Non localized error message on job execution.
  * propertyBag `object`: Job properties.
  * tasksList `array`: List of tasks for this job
    * items [AzureStorageJobTaskDetails](#azurestoragejobtaskdetails)

### AzureStorageJobTaskDetails
* AzureStorageJobTaskDetails `object`: Azure storage workload specific job task details.
  * status `string`: The status.
  * taskId `string`: The task display name.

### AzureVMResourceFeatureSupportRequest
* AzureVMResourceFeatureSupportRequest `object`: AzureResource(IaaS VM) Specific feature support request
  * vmSize `string`: Size of the resource: VM size(A/D series etc) in case of IaasVM
  * vmSku `string`: SKUs (Premium/Managed etc) in case of IaasVM
  * featureType `string`: backup support feature type.

### AzureVMResourceFeatureSupportResponse
* AzureVMResourceFeatureSupportResponse `object`: Response for feature support requests for Azure IaasVm
  * supportStatus `string` (values: Invalid, Supported, DefaultOFF, DefaultON, NotSupported): Support status of feature

### AzureVmWorkloadProtectedItemExtendedInfo
* AzureVmWorkloadProtectedItemExtendedInfo `object`: Additional information on Azure Workload for SQL specific backup item.
  * oldestRecoveryPoint `string`: The oldest backup copy available for this backup item.
  * policyState `string`: Indicates consistency of policy object and policy applied to this backup item.
  * recoveryPointCount `integer`: Number of backup copies available for this backup item.

### AzureVmWorkloadProtectionPolicy
* AzureVmWorkloadProtectionPolicy `object`: Azure VM (Mercury) workload-specific backup policy.
  * settings [Settings](#settings)
  * subProtectionPolicy `array`: List of sub-protection policies which includes schedule and retention
    * items [SubProtectionPolicy](#subprotectionpolicy)
  * workLoadType `string`: Type of workload for the backup management
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### AzureVmWorkloadSQLDatabaseProtectedItem
* AzureVmWorkloadSQLDatabaseProtectedItem `object`: Azure VM workload-specific protected item representing SQL Database.
  * extendedInfo [AzureVmWorkloadProtectedItemExtendedInfo](#azurevmworkloadprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the DB represented by this backup item.
  * lastBackupErrorDetail [ErrorDetail](#errordetail)
  * lastBackupStatus `string` (values: Invalid, Healthy, Unhealthy, IRPending): Last backup operation status. Possible values: Healthy, Unhealthy.
  * lastBackupTime `string`: Timestamp of the last backup operation on this backup item.
  * parentName `string`: Parent name of the DB such as Instance or Availability Group.
  * parentType `string`: Parent type of DB, SQLAG or StandAlone
  * protectedItemDataSourceId `string`: Data ID of the protected item.
  * protectedItemHealthStatus `string` (values: Invalid, Healthy, Unhealthy, NotReachable, IRPending): Health status of the backup item, evaluated based on last heartbeat received
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * protectionStatus `string`: Backup status of this backup item.
  * serverName `string`: Host/Cluster Name for instance or AG
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### AzureWorkloadErrorInfo
* AzureWorkloadErrorInfo `object`: Azure storage specific error information
  * additionalDetails `string`: Additional details for above error code.
  * errorCode `integer`: Error code.
  * errorString `string`: Localized error string.
  * errorTitle `string`: Title: Typically, the entity that the error pertains to.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

### AzureWorkloadJob
* AzureWorkloadJob `object`: Azure storage specific job.
  * actionsInfo `array`: Gets or sets the state/actions applicable on this job like cancel/retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * duration `string`: Time elapsed during the execution of this job.
  * errorDetails `array`: Error details on execution of this job.
    * items [AzureWorkloadErrorInfo](#azureworkloaderrorinfo)
  * extendedInfo [AzureWorkloadJobExtendedInfo](#azureworkloadjobextendedinfo)
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### AzureWorkloadJobExtendedInfo
* AzureWorkloadJobExtendedInfo `object`: Azure VM workload-specific additional information for job.
  * dynamicErrorMessage `string`: Non localized error message on job execution.
  * propertyBag `object`: Job properties.
  * tasksList `array`: List of tasks for this job
    * items [AzureWorkloadJobTaskDetails](#azureworkloadjobtaskdetails)

### AzureWorkloadJobTaskDetails
* AzureWorkloadJobTaskDetails `object`: Azure VM workload specific job task details.
  * status `string`: The status.
  * taskId `string`: The task display name.

### BMSBackupSummariesQueryObject
* BMSBackupSummariesQueryObject `object`: Query parameters to fetch backup summaries.
  * type `string` (values: Invalid, BackupProtectedItemCountSummary, BackupProtectionContainerCountSummary): Backup management type for this container.

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

### BackupStatusRequest
* BackupStatusRequest `object`: BackupStatus request.
  * poLogicalName `string`: Protectable Item Logical Name
  * resourceId `string`: Entire ARM resource id of the resource
  * resourceType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Container Type - VM, SQLPaaS, DPM, AzureFileShare...

### BackupStatusResponse
* BackupStatusResponse `object`: BackupStatus response.
  * containerName `string`: Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;csname;vmname. This is required for portal
  * errorCode `string`: ErrorCode in case of intent failed
  * errorMessage `string`: ErrorMessage in case of intent failed.
  * fabricName `string` (values: Invalid, Azure): Specifies the fabric name - Azure or AAD
  * policyName `string`: Specifies the policy name which is used for protection
  * protectedItemName `string`: Specifies the product specific ds name. E.g. vm;iaasvmcontainer;csname;vmname. This is required for portal
  * protectionStatus `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Specifies whether the container is registered or not
  * registrationStatus `string`: Container registration status
  * vaultId `string`: Specifies the arm resource id of the vault

### DPMProtectedItem
* DPMProtectedItem `object`: Additional information on Backup engine specific backup item.
  * backupEngineName `string`: Backup Management server protecting this backup item
  * extendedInfo [DPMProtectedItemExtendedInfo](#dpmprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of the managed item
  * isScheduledForDeferredDelete `boolean`: To check if backup item is scheduled for deferred delete
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Protection state of the backupengine
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

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

### DpmErrorInfo
* DpmErrorInfo `object`: DPM workload-specific error information.
  * errorString `string`: Localized error string.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

### DpmJob
* DpmJob `object`: DPM workload-specifc job object.
  * actionsInfo `array`: The state/actions applicable on this job like cancel/retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * containerName `string`: Name of cluster/server protecting current backup item, if any.
  * containerType `string`: Type of container.
  * dpmServerName `string`: DPM server name managing the backup item or backup job.
  * duration `string`: Time elapsed for job.
  * errorDetails `array`: The errors.
    * items [DpmErrorInfo](#dpmerrorinfo)
  * extendedInfo [DpmJobExtendedInfo](#dpmjobextendedinfo)
  * workloadType `string`: Type of backup item.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### DpmJobExtendedInfo
* DpmJobExtendedInfo `object`: Additional information on the DPM workload-specific job.
  * dynamicErrorMessage `string`: Non localized error message on job execution.
  * propertyBag `object`: The job properties.
  * tasksList `array`: List of tasks associated with this job.
    * items [DpmJobTaskDetails](#dpmjobtaskdetails)

### DpmJobTaskDetails
* DpmJobTaskDetails `object`: DPM workload-specific job task details.
  * duration `string`: Time elapsed for task.
  * endTime `string`: The end time.
  * startTime `string`: The start time.
  * status `string`: The status.
  * taskId `string`: The task display name.

### ErrorDetail
* ErrorDetail `object`: Error Detail class which encapsulates Code, Message and Recommendations.
  * code `string`: Error code.
  * message `string`: Error Message related to the Code.
  * recommendations `array`: List of recommendation strings.
    * items `string`

### ExportJobsOperationResultInfo
* ExportJobsOperationResultInfo `object`: This class is used to send blob details after exporting jobs.
  * blobSasKey `string`: SAS key to access the blob. It expires in 15 mins.
  * blobUrl `string`: URL of the blob into which the serialized string of list of jobs is exported.
  * objectType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

### FeatureSupportRequest
* FeatureSupportRequest `object`: Base class for feature request
  * featureType `string`: backup support feature type.

### GenericProtectedItem
* GenericProtectedItem `object`: Base class for backup items.
  * fabricName `string`: Name of this backup item's fabric.
  * friendlyName `string`: Friendly name of the container.
  * policyState `string`: Indicates consistency of policy object and policy applied to this backup item.
  * protectedItemId `integer`: Data Plane Service ID of the protected item.
  * protectionState `string` (values: Invalid, IRPending, Protected, ProtectionError, ProtectionStopped, ProtectionPaused): Backup state of this backup item.
  * sourceAssociations `object`: Loosely coupled (type, value) associations (example - parent of a protected item)
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### GenericProtectionPolicy
* GenericProtectionPolicy `object`: Azure VM (Mercury) workload-specific backup policy.
  * fabricName `string`: Name of this policy's fabric.
  * subProtectionPolicy `array`: List of sub-protection policies which includes schedule and retention
    * items [SubProtectionPolicy](#subprotectionpolicy)
  * timeZone `string`: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### Job
* Job `object`: Defines workload agnostic properties for a job.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### JobQueryObject
* JobQueryObject `object`: Filters to list the jobs.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managmenent for the job.
  * endTime `string`: Job has ended at this time. Value is in UTC.
  * jobId `string`: JobID represents the job uniquely.
  * operation `string` (values: Invalid, Register, UnRegister, ConfigureBackup, Backup, Restore, DisableBackup, DeleteBackupData): Type of operation.
  * startTime `string`: Job has started at this time. Value is in UTC.
  * status `string` (values: Invalid, InProgress, Completed, Failed, CompletedWithWarnings, Cancelled, Cancelling): Status of the job.

### JobResource
* JobResource `object`: Defines workload agnostic properties for a job.
  * properties [Job](#job)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### JobResourceList
* JobResourceList `object`: List of Job resources
  * value `array`: List of resources.
    * items [JobResource](#jobresource)
  * nextLink `string`: The uri to fetch the next page of resources. Call ListNext() fetches next page of resources.

### LogSchedulePolicy
* LogSchedulePolicy `object`: Log policy schedule.
  * scheduleFrequencyInMins `integer`: Frequency of the log schedule operation of this policy in minutes.
  * schedulePolicyType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.

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

### MabErrorInfo
* MabErrorInfo `object`: MAB workload-specific error information.
  * errorString `string`: Localized error string.
  * recommendations `array`: List of localized recommendations.
    * items `string`

### MabFileFolderProtectedItem
* MabFileFolderProtectedItem `object`: MAB workload-specific backup item.
  * computerName `string`: Name of the computer associated with this backup item.
  * deferredDeleteSyncTimeInUTC `integer`: Sync time for deferred deletion.
  * extendedInfo [MabFileFolderProtectedItemExtendedInfo](#mabfilefolderprotecteditemextendedinfo)
  * friendlyName `string`: Friendly name of this backup item.
  * isScheduledForDeferredDelete `boolean`: Specifies if the item is scheduled for deferred deletion.
  * lastBackupStatus `string`: Status of last backup operation.
  * protectionState `string`: Protected, ProtectionStopped, IRPending or ProtectionError
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### MabFileFolderProtectedItemExtendedInfo
* MabFileFolderProtectedItemExtendedInfo `object`: Additional information on the backed up item.
  * lastRefreshedAt `string`: Last time when the agent data synced to service.
  * oldestRecoveryPoint `string`: The oldest backup copy available.
  * recoveryPointCount `integer`: Number of backup copies associated with the backup item.

### MabJob
* MabJob `object`: MAB workload-specific job.
  * actionsInfo `array`: The state/actions applicable on jobs like cancel/retry.
    * items `string` (values: Invalid, Cancellable, Retriable)
  * duration `string`: Time taken by job to run.
  * errorDetails `array`: The errors.
    * items [MabErrorInfo](#maberrorinfo)
  * extendedInfo [MabJobExtendedInfo](#mabjobextendedinfo)
  * mabServerName `string`: Name of server protecting the DS.
  * mabServerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter, VMAppContainer, SQLAGWorkLoadContainer, StorageContainer, GenericContainer): Server type of MAB container.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Workload type of backup item.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### MabJobExtendedInfo
* MabJobExtendedInfo `object`: Additional information for the MAB workload-specific job.
  * dynamicErrorMessage `string`: Non localized error message specific to this job.
  * propertyBag `object`: The job properties.
  * tasksList `array`: List of tasks for this job.
    * items [MabJobTaskDetails](#mabjobtaskdetails)

### MabJobTaskDetails
* MabJobTaskDetails `object`: MAB workload-specific job task details.
  * duration `string`: Time elapsed for task.
  * endTime `string`: The end time.
  * startTime `string`: The start time.
  * status `string`: The status.
  * taskId `string`: The task display name.

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
  * headers `object`: HTTP headers associated with this operation.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): HTTP Status Code of the operation.

### OperationWorkerResponse
* OperationWorkerResponse `object`: This is the base class for operation result responses.
  * headers `object`: HTTP headers associated with this operation.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): HTTP Status Code of the operation.

### PreValidateEnableBackupRequest
* PreValidateEnableBackupRequest `object`: Contract to validate if backup can be enabled on the given resource in a given vault and given configuration.
  * properties `string`: Configuration of VM if any needs to be validated like OS type etc
  * resourceId `string`: Entire ARM VM Id
  * resourceType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Container Type - VM, SQLPaaS, DPM etc
  * vaultId `string`: Entire vault id of the resource

### PreValidateEnableBackupResponse
* PreValidateEnableBackupResponse `object`: Response contract for enable backup validation request
  * containerName `string`: Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;rgname;vmname. This is required for portal
  * errorCode `string`: Response error code
  * errorMessage `string`: Response error message
  * protectedItemName `string`: Specifies the product specific ds name. E.g. vm;iaasvmcontainer;rgname;vmname. This is required for portal
  * recommendation `string`: Recommended action for user
  * status `string` (values: Invalid, Succeeded, Failed): Validation Status

### ProtectedItem
* ProtectedItem `object`: Base class for backup items.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * backupSetName `string`: Name of the backup set the backup item belongs to
  * containerName `string`: Unique name of container
  * lastRecoveryPoint `string`: Timestamp when the last (latest) backup copy was created for this backup item.
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectedItemType `string`: backup item type.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.

### ProtectedItemQueryObject
* ProtectedItemQueryObject `object`: Filters to list backup items.
  * backupEngineName `string`: Backup Engine name
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type for the backed up item.
  * backupSetName `string`: Name of the backup set.
  * containerName `string`: Name of the container.
  * fabricName `string`: Name of the fabric.
  * friendlyName `string`: Friendly name of protected item
  * healthState `string` (values: Passed, ActionRequired, ActionSuggested, Invalid): Health State for the backed up item.
  * itemType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare): Type of workload this item represents.
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

### ProtectionIntent
* ProtectionIntent `object`: Base class for backup ProtectionIntent.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup managemenent for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

### ProtectionIntentResource
* ProtectionIntentResource `object`: Base class for backup ProtectionIntent.
  * properties [ProtectionIntent](#protectionintent)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectionPolicy
* ProtectionPolicy `object`: Base class for backup policy. Workload-specific backup policies are derived from this class.
  * backupManagementType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * protectedItemsCount `integer`: Number of items associated with this policy.

### ProtectionPolicyQueryObject
* ProtectionPolicyQueryObject `object`: Filters the list backup policies API.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type for the backup policy.
  * fabricName `string`: Fabric name for filter

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

### Settings
* Settings `object`: Common settings field for backup management
  * issqlcompression `boolean`: SQL compression flag
  * timeZone `string`: TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".

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

### SubProtectionPolicy
* SubProtectionPolicy `object`: Sub-protection policy which includes schedule and retention
  * policyType `string`: Type of backup policy type
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * schedulePolicy [SchedulePolicy](#schedulepolicy)

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


