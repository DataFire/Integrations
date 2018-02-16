# @datafire/azure_recoveryservicesbackup_jobs

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicesbackup_jobs
```
```js
let azure_recoveryservicesbackup_jobs = require('@datafire/azure_recoveryservicesbackup_jobs').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservicesbackup_jobs.BackupJobs_List({
  "api-version": "",
  "vaultName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### BackupJobs_List
Provides a pageable list of jobs.


```js
azure_recoveryservicesbackup_jobs.BackupJobs_List({
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

### JobDetails_Get
Gets exteded information associated with the job.


```js
azure_recoveryservicesbackup_jobs.JobDetails_Get({
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



## Definitions

### AzureIaaSVMErrorInfo
* AzureIaaSVMErrorInfo `object`: Azure IaaS VM workload-specific error information.
  * errorCode `integer`: Error code.
  * errorString `string`: Localized error string.
  * errorTitle `string`: Title: Typically, the entity that the error pertains to.
  * recommendations `array`: List of localized recommendations for above error code.
    * items `string`

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
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type to execute the current job.
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
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type to execute the current job.
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

### Job
* Job `object`: Defines workload agnostic properties for a job.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type to execute the current job.
  * endTime `string`: The end time.
  * entityFriendlyName `string`: Friendly name of the entity on which the current job is executing.
  * jobType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * operation `string`: The operation name.
  * startTime `string`: The start time.
  * status `string`: Job status.

### JobQueryObject
* JobQueryObject `object`: Filters to list the jobs.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Type of backup managmenent for the job.
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
  * mabServerType `string` (values: Invalid, Unknown, IaasVMContainer, IaasVMServiceContainer, DPMContainer, AzureBackupServerContainer, MABContainer, Cluster, AzureSqlContainer, Windows, VCenter): Server type of MAB container.
  * workloadType `string` (values: Invalid, VM, FileFolder, AzureSqlDb, SQLDB, Exchange, Sharepoint, VMwareVM, SystemState, Client, GenericDataSource): Workload type of backup item.
  * activityId `string`: ActivityId of job.
  * backupManagementType `string` (values: Invalid, AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql): Backup management type to execute the current job.
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

### Object
* Object `object`: Base of all objects.

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


