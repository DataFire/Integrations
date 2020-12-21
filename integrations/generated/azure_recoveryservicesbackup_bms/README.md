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

.then(data => {
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

### ProtectionIntent_Delete
Used to remove intent from an item


```js
azure_recoveryservicesbackup_bms.ProtectionIntent_Delete({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "intentObjectName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the intent.
  * intentObjectName **required** `string`: Intent to be deleted.

#### Output
*Output schema unknown*

### ProtectionIntent_Get
Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
call the GetItemOperationResult API.


```js
azure_recoveryservicesbackup_bms.ProtectionIntent_Get({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "intentObjectName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * vaultName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name associated with the backed up item.
  * intentObjectName **required** `string`: Backed up item name whose details are to be fetched.

#### Output
* output [ProtectionIntentResource](#protectionintentresource)

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

### BackupProtectionIntent_List
Provides a pageable list of all intents that are present within a vault.


```js
azure_recoveryservicesbackup_bms.BackupProtectionIntent_List({
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
* output [ProtectionIntentResourceList](#protectionintentresourcelist)

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

### AzureBackupGoalFeatureSupportRequest
* AzureBackupGoalFeatureSupportRequest `object`: Azure backup goal feature specific request.
  * featureType `string`: backup support feature type.

### AzureIaaSVMErrorInfo
* AzureIaaSVMErrorInfo `object`: Azure IaaS VM workload-specific error information.
  * errorCode `integer`: Error code.
  * errorString `string`: Localized error string.
  * errorTitle `string`: Title: Typically, the entity that the error pertains to.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

### AzureIaaSVMJob
* AzureIaaSVMJob `object`: Azure IaaS VM workload-specific job object.
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
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### AzureIaaSVMJobExtendedInfo
* AzureIaaSVMJobExtendedInfo `object`: Azure IaaS VM workload-specific additional information for job.
  * dynamicErrorMessage `string`: Non localized error message on job execution.
  * estimatedRemainingDuration `string`: Time remaining for execution of this job.
  * internalPropertyBag `object`: Job internal properties.
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
  * taskExecutionDetails `string`: Details about execution of the task.
  * taskId `string`: The task display name.

### AzureRecoveryServiceVaultProtectionIntent
* AzureRecoveryServiceVaultProtectionIntent `object`: Azure Recovery Services Vault specific protection intent item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup management for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

### AzureResourceProtectionIntent
* AzureResourceProtectionIntent `object`: IaaS VM specific backup protection intent item.
  * friendlyName `string`: Friendly name of the VM represented by this backup item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup management for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

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
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
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

### AzureWorkloadAutoProtectionIntent
* AzureWorkloadAutoProtectionIntent `object`: Azure Recovery Services Vault specific protection intent item.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup management for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

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
  * workloadType `string`: Workload type of the job
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
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

### AzureWorkloadSQLAutoProtectionIntent
* AzureWorkloadSQLAutoProtectionIntent `object`: Azure Workload SQL Auto Protection intent item.
  * workloadItemType `string` (values: Invalid, SQLInstance, SQLDataBase, SAPHanaSystem, SAPHanaDatabase, SAPAseSystem, SAPAseDatabase): Workload item type of the item for which intent is to be set
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup management for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

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
  * resourceType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare, SAPHanaDatabase, SAPAseDatabase): Container Type - VM, SQLPaaS, DPM, AzureFileShare...

### BackupStatusResponse
* BackupStatusResponse `object`: BackupStatus response.
  * containerName `string`: Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;csname;vmname.
  * errorCode `string`: ErrorCode in case of intent failed
  * errorMessage `string`: ErrorMessage in case of intent failed.
  * fabricName `string` (values: Invalid, Azure): Specifies the fabric name - Azure or AD
  * policyName `string`: Specifies the policy name which is used for protection
  * protectedItemName `string`: Specifies the product specific ds name. E.g. vm;iaasvmcontainer;csname;vmname.
  * protectionStatus `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Specifies whether the container is registered or not
  * registrationStatus `string`: Container registration status
  * vaultId `string`: Specifies the arm resource id of the vault

### DpmErrorInfo
* DpmErrorInfo `object`: DPM workload-specific error information.
  * errorString `string`: Localized error string.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

### DpmJob
* DpmJob `object`: DPM workload-specific job object.
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
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
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

### FeatureSupportRequest
* FeatureSupportRequest `object`: Base class for feature request
  * featureType `string`: backup support feature type.

### InstantRPAdditionalDetails
* InstantRPAdditionalDetails `object`
  * azureBackupRGNamePrefix `string`
  * azureBackupRGNameSuffix `string`

### Job
* Job `object`: Defines workload agnostic properties for a job.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### JobResource
* JobResource `object`: Defines workload agnostic properties for a job.
  * properties [Job](#job)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### MabErrorInfo
* MabErrorInfo `object`: MAB workload-specific error information.
  * errorString `string`: Localized error string.
  * recommendations `array`: List of localized recommendations.
    * items `string`

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
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare, SAPHanaDatabase, SAPAseDatabase): Workload type of backup item.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
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

### NameInfo
* NameInfo `object`: The name of usage.
  * localizedValue `string`: Localized value of usage.
  * value `string`: Value of usage.

### PreValidateEnableBackupRequest
* PreValidateEnableBackupRequest `object`: Contract to validate if backup can be enabled on the given resource in a given vault and given configuration.
  * properties `string`: Configuration of VM if any needs to be validated like OS type etc
  * resourceId `string`: ARM Virtual Machine Id
  * resourceType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource, SQLDataBase, AzureFileShare, SAPHanaDatabase, SAPAseDatabase): ProtectedItem Type- VM, SqlDataBase, AzureFileShare etc
  * vaultId `string`: ARM id of the Recovery Services Vault

### PreValidateEnableBackupResponse
* PreValidateEnableBackupResponse `object`: Response contract for enable backup validation request
  * containerName `string`: Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;rgname;vmname. This is required
  * errorCode `string`: Response error code
  * errorMessage `string`: Response error message
  * protectedItemName `string`: Specifies the product specific ds name. E.g. vm;iaasvmcontainer;rgname;vmname. This is required for portal
  * recommendation `string`: Recommended action for user
  * status `string` (values: Invalid, Succeeded, Failed): Validation Status

### ProtectionIntent
* ProtectionIntent `object`: Base class for backup ProtectionIntent.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Type of backup management for the backed up item.
  * itemId `string`: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
  * policyId `string`: ID of the backup policy with which this item is backed up.
  * protectionIntentItemType `string`: backup protectionIntent type.
  * protectionState `string` (values: Invalid, NotProtected, Protecting, Protected, ProtectionFailed): Backup state of this backup item.
  * sourceResourceId `string`: ARM ID of the resource to be backed up.

### ProtectionIntentQueryObject
* ProtectionIntentQueryObject `object`: Filters to list protection intent.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql, AzureStorage, AzureWorkload, DefaultBackup): Backup management type for the backed up item
  * itemName `string`: Item name of the intent
  * itemType `string` (values: Invalid, SQLInstance, SQLAvailabilityGroupContainer): Type of workload this item represents
  * parentName `string`: Parent name of the intent

### ProtectionIntentResource
* ProtectionIntentResource `object`: Base class for backup ProtectionIntent.
  * properties [ProtectionIntent](#protectionintent)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * location `string`: Resource location.
  * name `string`: Resource name associated with the resource.
  * tags `object`: Resource tags.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ProtectionIntentResourceList
* ProtectionIntentResourceList `object`: List of ProtectionIntent resources
  * value `array`: List of resources.
    * items [ProtectionIntentResource](#protectionintentresource)
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


