# @datafire/azure_azsadmin_backups

Client library for BackupManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_backups
```
```js
let azure_azsadmin_backups = require('@datafire/azure_azsadmin_backups').create({
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

### Backups_List
Returns a list of backups from a location.


```js
azure_azsadmin_backups.Backups_List({
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
* output [BackupList](#backuplist)

### Backups_Get
Returns a backup from a location based on name.


```js
azure_azsadmin_backups.Backups_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "backup": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Name of the backup location.
  * backup **required** `string`: Name of the backup.
  * api-version **required** `string`: Client API version.

#### Output
* output [Backup](#backup)

### Backups_Restore
Restore a backup.


```js
azure_azsadmin_backups.Backups_Restore({
  "subscriptionId": "",
  "location": "",
  "resourceGroupName": "",
  "backup": "",
  "api-version": "",
  "restoreOptions": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Name of the backup location.
  * resourceGroupName **required** `string`: Name of the resource group.
  * backup **required** `string`: Name of the backup.
  * api-version **required** `string`: Client API version.
  * restoreOptions **required** [RestoreOptions](#restoreoptions)

#### Output
*Output schema unknown*



## Definitions

### Backup
* Backup `object`: Information related to a backup.
  * properties [BackupModel](#backupmodel)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### BackupInfo
* BackupInfo `object`: Holds information for a backup.
  * backupDataVersion `string`: Version of the backup data.
  * createdDateTime `string`: Creation time of the backup.
  * deploymentID `string`: Deployment Id of the stamp.
  * encryptionCertThumbprint `string`: The thumbprint of the certificate used to encrypt the backup encryption key.
  * isCloudRecoveryReady `boolean`: True if the backup can be used for cloud recovery scenario.
  * oemVersion `string`: OEM version.
  * roleStatus [RoleOperationStatusList](#roleoperationstatuslist)
  * stampVersion `string`: Azure Stack stamp version of the backup.
  * status [OperationStatus](#operationstatus)
  * timeTakenToCreate `string`: Duration to create the backup.

### BackupList
* BackupList `object`: List of backups.
  * nextLink `string`: URI to the next page.
  * value `array`: List of backups.
    * items [Backup](#backup)

### BackupModel
* BackupModel `object`: Properties for a backup.
  * backupInfo [BackupInfo](#backupinfo)

### OperationStatus
* OperationStatus `string` (values: Creating, Queued, Running, Deleted, Failed, PartialSucceeded, Succeeded): Status of an operation.

### RestoreOptions
* RestoreOptions `object`: Properties for restore options.
  * decryptionCertBase64 `string`: The certificate file raw data in Base64 string. This should be the .pfx file with the private key.
  * decryptionCertPassword `string`: The password for the decryption certificate.
  * roleName `string`: The Azure Stack role name for restore, set it to empty for all infrastructure role

### RoleOperationStatus
* RoleOperationStatus `object`: Backup status for a role.
  * roleName `string`: Name of the role.
  * status [OperationStatus](#operationstatus)

### RoleOperationStatusList
* RoleOperationStatusList `array`: object
  * items [RoleOperationStatus](#roleoperationstatus)


