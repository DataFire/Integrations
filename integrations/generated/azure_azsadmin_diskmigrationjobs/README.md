# @datafire/azure_azsadmin_diskmigrationjobs

Client library for ComputeDiskAdminManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_diskmigrationjobs
```
```js
let azure_azsadmin_diskmigrationjobs = require('@datafire/azure_azsadmin_diskmigrationjobs').create({
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

The Admin Compute Disk Management Client.

## Actions

### DiskMigrationJobs_List
Returns a list of disk migration jobs.


```js
azure_azsadmin_diskmigrationjobs.DiskMigrationJobs_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * status `string`: The parameters of disk migration job status.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`: List of disk migration jobs.
  * nextLink `string`: URI to the next page.
  * value `array`: List of disk migration jobs.
    * items `object`: Disk migration job.
      * properties `object`: Disk migration job properties.
        * creationTime `string`: The job creation time.
        * endTime `string`: The job end time.
        * migrationId `string`: The disk migration id.
        * startTime `string`: The job start time.
        * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
        * subtasks `array`: List of disk migration tasks.
          * items `object`: Disk migration child task.
        * targetShare `string`: The target share of migration job.
      * id `string`: ID of the resource.
      * location `string`: Location of the resource.
      * name `string`: Name of the resource.
      * type `string`: Type of Resource.

### DiskMigrationJobs_Get
Returns the requested disk migration job.


```js
azure_azsadmin_diskmigrationjobs.DiskMigrationJobs_Get({
  "subscriptionId": "",
  "location": "",
  "migrationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * migrationId **required** `string`: The migration job guid name.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`: Disk migration job.
  * properties `object`: Disk migration job properties.
    * creationTime `string`: The job creation time.
    * endTime `string`: The job end time.
    * migrationId `string`: The disk migration id.
    * startTime `string`: The job start time.
    * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
    * subtasks `array`: List of disk migration tasks.
      * items `object`: Disk migration child task.
        * migrationSubTaskId `string`: The id of migration child task.
        * properties `object`: Disk migration child task properties.
          * diskId `string`: The id of disk.
          * endTime `string`: The task end time.
          * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
          * reason `string`: The reason of task failure.
          * sourceShare `string`: The source share of migration task.
          * startTime `string`: The task start time.
          * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
          * targetShare `string`: The target share of migration task.
    * targetShare `string`: The target share of migration job.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### DiskMigrationJobs_Create
Create a disk migration job.


```js
azure_azsadmin_diskmigrationjobs.DiskMigrationJobs_Create({
  "subscriptionId": "",
  "location": "",
  "migrationId": "",
  "targetShare": "",
  "disks": [],
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * migrationId **required** `string`: The migration job guid name.
  * targetShare **required** `string`: The target share name.
  * disks **required** `array`: List of disks.
    * items `object`: Managed Disk.
      * properties `object`: Managed disk properties.
        * actualSizeGB `integer`: The actual size of disk in GB.
        * diskId `string`: The disk id.
        * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
        * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
        * managedBy `string`: Compute resource Uri which owns this disk.
        * provisionSizeGB `integer`: The provision size of disk in GB.
        * sharePath `string`: The disk share path.
        * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
        * userResourceId `string`: The disk resource Uri from user view.
      * id `string`: ID of the resource.
      * location `string`: Location of the resource.
      * name `string`: Name of the resource.
      * type `string`: Type of Resource.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`: Disk migration job.
  * properties `object`: Disk migration job properties.
    * creationTime `string`: The job creation time.
    * endTime `string`: The job end time.
    * migrationId `string`: The disk migration id.
    * startTime `string`: The job start time.
    * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
    * subtasks `array`: List of disk migration tasks.
      * items `object`: Disk migration child task.
        * migrationSubTaskId `string`: The id of migration child task.
        * properties `object`: Disk migration child task properties.
          * diskId `string`: The id of disk.
          * endTime `string`: The task end time.
          * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
          * reason `string`: The reason of task failure.
          * sourceShare `string`: The source share of migration task.
          * startTime `string`: The task start time.
          * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
          * targetShare `string`: The target share of migration task.
    * targetShare `string`: The target share of migration job.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### DiskMigrationJobs_Cancel
Cancel a disk migration job.


```js
azure_azsadmin_diskmigrationjobs.DiskMigrationJobs_Cancel({
  "subscriptionId": "",
  "location": "",
  "migrationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * migrationId **required** `string`: The migration job guid name.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`: Disk migration job.
  * properties `object`: Disk migration job properties.
    * creationTime `string`: The job creation time.
    * endTime `string`: The job end time.
    * migrationId `string`: The disk migration id.
    * startTime `string`: The job start time.
    * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
    * subtasks `array`: List of disk migration tasks.
      * items `object`: Disk migration child task.
        * migrationSubTaskId `string`: The id of migration child task.
        * properties `object`: Disk migration child task properties.
          * diskId `string`: The id of disk.
          * endTime `string`: The task end time.
          * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
          * reason `string`: The reason of task failure.
          * sourceShare `string`: The source share of migration task.
          * startTime `string`: The task start time.
          * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
          * targetShare `string`: The target share of migration task.
    * targetShare `string`: The target share of migration job.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.



## Definitions

### DiskListInput
* DiskListInput `array`: List of disks.
  * items `object`: Managed Disk.
    * properties `object`: Managed disk properties.
      * actualSizeGB `integer`: The actual size of disk in GB.
      * diskId `string`: The disk id.
      * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
      * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
      * managedBy `string`: Compute resource Uri which owns this disk.
      * provisionSizeGB `integer`: The provision size of disk in GB.
      * sharePath `string`: The disk share path.
      * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
      * userResourceId `string`: The disk resource Uri from user view.
    * id `string`: ID of the resource.
    * location `string`: Location of the resource.
    * name `string`: Name of the resource.
    * type `string`: Type of Resource.

### DiskMigrationJob
* DiskMigrationJob `object`: Disk migration job.
  * properties `object`: Disk migration job properties.
    * creationTime `string`: The job creation time.
    * endTime `string`: The job end time.
    * migrationId `string`: The disk migration id.
    * startTime `string`: The job start time.
    * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
    * subtasks `array`: List of disk migration tasks.
      * items `object`: Disk migration child task.
        * migrationSubTaskId `string`: The id of migration child task.
        * properties `object`: Disk migration child task properties.
          * diskId `string`: The id of disk.
          * endTime `string`: The task end time.
          * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
          * reason `string`: The reason of task failure.
          * sourceShare `string`: The source share of migration task.
          * startTime `string`: The task start time.
          * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
          * targetShare `string`: The target share of migration task.
    * targetShare `string`: The target share of migration job.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### DiskMigrationJobList
* DiskMigrationJobList `object`: List of disk migration jobs.
  * nextLink `string`: URI to the next page.
  * value `array`: List of disk migration jobs.
    * items `object`: Disk migration job.
      * properties `object`: Disk migration job properties.
        * creationTime `string`: The job creation time.
        * endTime `string`: The job end time.
        * migrationId `string`: The disk migration id.
        * startTime `string`: The job start time.
        * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
        * subtasks `array`: List of disk migration tasks.
          * items `object`: Disk migration child task.
        * targetShare `string`: The target share of migration job.
      * id `string`: ID of the resource.
      * location `string`: Location of the resource.
      * name `string`: Name of the resource.
      * type `string`: Type of Resource.

### DiskMigrationJobProperties
* DiskMigrationJobProperties `object`: Disk migration job properties.
  * creationTime `string`: The job creation time.
  * endTime `string`: The job end time.
  * migrationId `string`: The disk migration id.
  * startTime `string`: The job start time.
  * status `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.
  * subtasks `array`: List of disk migration tasks.
    * items `object`: Disk migration child task.
      * migrationSubTaskId `string`: The id of migration child task.
      * properties `object`: Disk migration child task properties.
        * diskId `string`: The id of disk.
        * endTime `string`: The task end time.
        * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
        * reason `string`: The reason of task failure.
        * sourceShare `string`: The source share of migration task.
        * startTime `string`: The task start time.
        * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
        * targetShare `string`: The target share of migration task.
  * targetShare `string`: The target share of migration job.

### MigrationJobStatus
* MigrationJobStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending): Migration job status.

### MigrationSubTask
* MigrationSubTask `object`: Disk migration child task.
  * migrationSubTaskId `string`: The id of migration child task.
  * properties `object`: Disk migration child task properties.
    * diskId `string`: The id of disk.
    * endTime `string`: The task end time.
    * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
    * reason `string`: The reason of task failure.
    * sourceShare `string`: The source share of migration task.
    * startTime `string`: The task start time.
    * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
    * targetShare `string`: The target share of migration task.

### MigrationSubTaskList
* MigrationSubTaskList `array`: List of disk migration tasks.
  * items `object`: Disk migration child task.
    * migrationSubTaskId `string`: The id of migration child task.
    * properties `object`: Disk migration child task properties.
      * diskId `string`: The id of disk.
      * endTime `string`: The task end time.
      * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
      * reason `string`: The reason of task failure.
      * sourceShare `string`: The source share of migration task.
      * startTime `string`: The task start time.
      * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
      * targetShare `string`: The target share of migration task.

### MigrationSubTaskProperties
* MigrationSubTaskProperties `object`: Disk migration child task properties.
  * diskId `string`: The id of disk.
  * endTime `string`: The task end time.
  * migrationSubtaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.
  * reason `string`: The reason of task failure.
  * sourceShare `string`: The source share of migration task.
  * startTime `string`: The task start time.
  * targetDiskStateForMigration `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
  * targetShare `string`: The target share of migration task.

### MigrationSubTaskStatus
* MigrationSubTaskStatus `string` (values: Undefined, Running, Succeeded, Failed, Canceled, Pending, Skipped): Migration child task status.


