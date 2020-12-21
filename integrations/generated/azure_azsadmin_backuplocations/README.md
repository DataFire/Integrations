# @datafire/azure_azsadmin_backuplocations

Client library for BackupManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_backuplocations
```
```js
let azure_azsadmin_backuplocations = require('@datafire/azure_azsadmin_backuplocations').create({
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

The Admin Backup Management Client.

## Actions

### BackupLocations_List
Returns the list of backup locations.


```js
azure_azsadmin_backuplocations.BackupLocations_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * api-version **required** `string`: Client API version.

#### Output
* output [BackupLocationList](#backuplocationlist)

### BackupLocations_Get
Returns a specific backup location based on name.


```js
azure_azsadmin_backuplocations.BackupLocations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Name of the backup location.
  * api-version **required** `string`: Client API version.

#### Output
* output [BackupLocation](#backuplocation)

### BackupLocations_Update
Update a backup location.


```js
azure_azsadmin_backuplocations.BackupLocations_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": "",
  "backup": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Name of the backup location.
  * api-version **required** `string`: Client API version.
  * backup **required** [BackupLocation](#backuplocation)

#### Output
* output [BackupLocation](#backuplocation)

### BackupLocations_CreateBackup
Back up a specific location.


```js
azure_azsadmin_backuplocations.BackupLocations_CreateBackup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Name of the backup location.
  * api-version **required** `string`: Client API version.

#### Output
* output `object`: Information related to a backup.
  * properties `object`: Properties for a backup.
    * backupInfo `object`: Holds information for a backup.
      * backupDataVersion `string`: Version of the backup data.
      * createdDateTime `string`: Creation time of the backup.
      * deploymentID `string`: Deployment Id of the stamp.
      * encryptionCertThumbprint `string`: The thumbprint of the certificate used to encrypt the backup encryption key.
      * isCloudRecoveryReady `boolean`: True if the backup can be used for cloud recovery scenario.
      * oemVersion `string`: OEM version.
      * roleStatus `array`: object
        * items `object`: Backup status for a role.
          * roleName `string`: Name of the role.
          * status `string` (values: Creating, Queued, Running, Deleted, Failed, PartialSucceeded, Succeeded): Status of an operation.
      * stampVersion `string`: Azure Stack stamp version of the backup.
      * status `string` (values: Creating, Queued, Running, Deleted, Failed, PartialSucceeded, Succeeded): Status of an operation.
      * timeTakenToCreate `string`: Duration to create the backup.
  * id `string`: URI of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.



## Definitions

### BackupLocation
* BackupLocation `object`: Information about the backup location.
  * properties [BackupLocationModel](#backuplocationmodel)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### BackupLocationList
* BackupLocationList `object`: List of backup locations.
  * nextLink `string`: URI to the next page.
  * value `array`: List of backup locations.
    * items [BackupLocation](#backuplocation)

### BackupLocationModel
* BackupLocationModel `object`: Properties of a backup location.
  * externalStoreDefault [ExternalStore](#externalstore)

### ExternalStore
* ExternalStore `object`: Information about an external storage location.
  * availableCapacity `string`: Free space at the backup location.
  * backupFrequencyInHours `integer`: The interval, in hours, for the frequency that the scheduler takes a backup.
  * backupRetentionPeriodInDays `integer`: The retention period, in days, for backs in the storage location.
  * encryptionCertBase64 `string`: The base64 raw data for the backup encryption certificate.
  * encryptionCertThumbprint `string`: The thumbprint of the encryption certificate.
  * isBackupSchedulerEnabled `boolean`: True if the backup scheduler is enabled.
  * lastBackupTime `string`: Time of backup.
  * nextBackupTime `string`: The scheduled time of the next backup.
  * password `string`: Password to access the location.
  * path `string`: Path to the update location
  * userName `string`: Username to access the location.


