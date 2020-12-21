# @datafire/azure_storsimple1200series_storsimple

Client library for StorSimpleManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_storsimple1200series_storsimple
```
```js
let azure_storsimple1200series_storsimple = require('@datafire/azure_storsimple1200series_storsimple').create({
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

### AvailableProviderOperations_List
List of AvailableProviderOperations


```js
azure_storsimple1200series_storsimple.AvailableProviderOperations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The api version

#### Output
* output [AvailableProviderOperations](#availableprovideroperations)

### Managers_List
Retrieves all the managers in a subscription.


```js
azure_storsimple1200series_storsimple.Managers_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * api-version **required** `string`: The api version

#### Output
* output [ManagerList](#managerlist)

### Managers_ListByResourceGroup
Retrieves all the managers in a resource group.


```js
azure_storsimple1200series_storsimple.Managers_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * api-version **required** `string`: The api version

#### Output
* output [ManagerList](#managerlist)

### Managers_Delete
Deletes the manager.


```js
azure_storsimple1200series_storsimple.Managers_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Managers_Get
Returns the properties of the specified manager name.


```js
azure_storsimple1200series_storsimple.Managers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Manager](#manager)

### Managers_Update
Updates the StorSimple Manager.


```js
azure_storsimple1200series_storsimple.Managers_Update({
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ManagerPatch](#managerpatch)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Manager](#manager)

### Managers_CreateOrUpdate
Creates or updates the manager.


```js
azure_storsimple1200series_storsimple.Managers_CreateOrUpdate({
  "Manager": {
    "location": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * Manager **required** [Manager](#manager)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Manager](#manager)

### AccessControlRecords_ListByManager
Retrieves all the access control records in a manager.


```js
azure_storsimple1200series_storsimple.AccessControlRecords_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AccessControlRecordList](#accesscontrolrecordlist)

### AccessControlRecords_Delete
Deletes the access control record.


```js
azure_storsimple1200series_storsimple.AccessControlRecords_Delete({
  "accessControlRecordName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * accessControlRecordName **required** `string`: The name of the access control record to delete.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### AccessControlRecords_Get
Returns the properties of the specified access control record name.


```js
azure_storsimple1200series_storsimple.AccessControlRecords_Get({
  "accessControlRecordName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * accessControlRecordName **required** `string`: Name of access control record to be fetched.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AccessControlRecord](#accesscontrolrecord)

### AccessControlRecords_CreateOrUpdate
Creates or Updates an access control record.


```js
azure_storsimple1200series_storsimple.AccessControlRecords_CreateOrUpdate({
  "accessControlRecordName": "",
  "accessControlRecord": {
    "properties": {
      "initiatorName": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * accessControlRecordName **required** `string`: The name of the access control record.
  * accessControlRecord **required** [AccessControlRecord](#accesscontrolrecord)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AccessControlRecord](#accesscontrolrecord)

### Alerts_ListByManager
Retrieves all the alerts in a manager.


```js
azure_storsimple1200series_storsimple.Alerts_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [AlertList](#alertlist)

### Backups_ListByManager
Retrieves all the backups in a manager.


```js
azure_storsimple1200series_storsimple.Backups_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [BackupList](#backuplist)

### Managers_UploadRegistrationCertificate
Upload Vault Cred Certificate.
Returns UploadCertificateResponse


```js
azure_storsimple1200series_storsimple.Managers_UploadRegistrationCertificate({
  "certificateName": "",
  "uploadCertificateRequestrequest": {
    "properties": {
      "certificate": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificateName **required** `string`: Certificate Name
  * uploadCertificateRequestrequest **required** [UploadCertificateRequest](#uploadcertificaterequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [UploadCertificateResponse](#uploadcertificateresponse)

### Alerts_Clear
Clear the alerts.


```js
azure_storsimple1200series_storsimple.Alerts_Clear({
  "request": {
    "alerts": []
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * request **required** [ClearAlertRequest](#clearalertrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_ListByManager
Retrieves all the devices in a manager.


```js
azure_storsimple1200series_storsimple.Devices_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $expand `string`: Specify $expand=details to populate additional fields related to the device.

#### Output
* output [DeviceList](#devicelist)

### Devices_Delete
Deletes the device.


```js
azure_storsimple1200series_storsimple.Devices_Delete({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_Get
Returns the properties of the specified device name.


```js
azure_storsimple1200series_storsimple.Devices_Get({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $expand `string`: Specify $expand=details to populate additional fields related to the device.

#### Output
* output [Device](#device)

### Devices_Patch
Patches the device.


```js
azure_storsimple1200series_storsimple.Devices_Patch({
  "deviceName": "",
  "devicePatch": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device Name.
  * devicePatch **required** [DevicePatch](#devicepatch)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Device](#device)

### Devices_GetAlertSettings
Returns the alert settings of the specified device name.


```js
azure_storsimple1200series_storsimple.Devices_GetAlertSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AlertSettings](#alertsettings)

### Devices_CreateOrUpdateAlertSettings
Creates or updates the alert settings


```js
azure_storsimple1200series_storsimple.Devices_CreateOrUpdateAlertSettings({
  "deviceName": "",
  "alertSettings": {
    "properties": {
      "emailNotification": "",
      "notificationToServiceOwners": "",
      "alertNotificationCulture": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * alertSettings **required** [AlertSettings](#alertsettings)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AlertSettings](#alertsettings)

### BackupScheduleGroups_ListByDevice
Retrieves all the backup schedule groups in a device.


```js
azure_storsimple1200series_storsimple.BackupScheduleGroups_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupScheduleGroupList](#backupschedulegrouplist)

### BackupScheduleGroups_Delete
Deletes the backup schedule group.


```js
azure_storsimple1200series_storsimple.BackupScheduleGroups_Delete({
  "deviceName": "",
  "scheduleGroupName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * scheduleGroupName **required** `string`: The name of the schedule group.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### BackupScheduleGroups_Get
Returns the properties of the specified backup schedule group name.


```js
azure_storsimple1200series_storsimple.BackupScheduleGroups_Get({
  "deviceName": "",
  "scheduleGroupName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * scheduleGroupName **required** `string`: The name of the schedule group.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupScheduleGroup](#backupschedulegroup)

### BackupScheduleGroups_CreateOrUpdate
Creates or Updates the backup schedule Group.


```js
azure_storsimple1200series_storsimple.BackupScheduleGroups_CreateOrUpdate({
  "deviceName": "",
  "scheduleGroupName": "",
  "scheduleGroup": {
    "properties": {
      "startTime": {
        "hour": 0,
        "minute": 0
      }
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * scheduleGroupName **required** `string`: The name of the schedule group.
  * scheduleGroup **required** [BackupScheduleGroup](#backupschedulegroup)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupScheduleGroup](#backupschedulegroup)

### Backups_ListByDevice
Retrieves all the backups in a device. Can be used to get the backups for failover also.


```js
azure_storsimple1200series_storsimple.Backups_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * forFailover `boolean`: Set to true if you need backups which can be used for failover.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [BackupList](#backuplist)

### Backups_Delete
Deletes the backup.


```js
azure_storsimple1200series_storsimple.Backups_Delete({
  "deviceName": "",
  "backupName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * backupName **required** `string`: The backup name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Backups_Clone
Clones the given backup element to a new disk or share with given details.


```js
azure_storsimple1200series_storsimple.Backups_Clone({
  "deviceName": "",
  "backupName": "",
  "elementName": "",
  "cloneRequest": {
    "properties": {
      "targetDeviceId": "",
      "targetAccessPointId": "",
      "newEndpointName": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * backupName **required** `string`: The backup name.
  * elementName **required** `string`: The backup element name.
  * cloneRequest **required** [CloneRequest](#clonerequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### ChapSettings_ListByDevice
Retrieves all the chap settings in a device.


```js
azure_storsimple1200series_storsimple.ChapSettings_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ChapSettingsList](#chapsettingslist)

### ChapSettings_Delete
Deletes the chap setting.


```js
azure_storsimple1200series_storsimple.ChapSettings_Delete({
  "deviceName": "",
  "chapUserName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * chapUserName **required** `string`: The chap user name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### ChapSettings_Get
Returns the properties of the specified chap setting name.


```js
azure_storsimple1200series_storsimple.ChapSettings_Get({
  "deviceName": "",
  "chapUserName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * chapUserName **required** `string`: The user name of chap to be fetched.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ChapSettings](#chapsettings)

### ChapSettings_CreateOrUpdate
Creates or updates the chap setting.


```js
azure_storsimple1200series_storsimple.ChapSettings_CreateOrUpdate({
  "deviceName": "",
  "chapUserName": "",
  "chapSetting": {
    "properties": {
      "password": {
        "value": "",
        "encryptionAlgorithm": ""
      }
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * chapUserName **required** `string`: The chap user name.
  * chapSetting **required** [ChapSettings](#chapsettings)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ChapSettings](#chapsettings)

### Devices_Deactivate
Deactivates the device.


```js
azure_storsimple1200series_storsimple.Devices_Deactivate({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### IscsiDisks_ListByDevice
Retrieves all the iSCSI disks in a device.


```js
azure_storsimple1200series_storsimple.IscsiDisks_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIDiskList](#iscsidisklist)

### Devices_DownloadUpdates
Downloads updates on the device.


```js
azure_storsimple1200series_storsimple.Devices_DownloadUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_Failover
Fails over the device to another device.


```js
azure_storsimple1200series_storsimple.Devices_Failover({
  "deviceName": "",
  "failoverRequest": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * failoverRequest **required** [FailoverRequest](#failoverrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_ListFailoverTarget
Retrieves all the devices which can be used as failover targets for the given device.


```js
azure_storsimple1200series_storsimple.Devices_ListFailoverTarget({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $expand `string`: Specify $expand=details to populate additional fields related to the device.

#### Output
* output [DeviceList](#devicelist)

### FileServers_ListByDevice
Retrieves all the file servers in a device.


```js
azure_storsimple1200series_storsimple.FileServers_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileServerList](#fileserverlist)

### FileServers_Delete
Deletes the file server.


```js
azure_storsimple1200series_storsimple.FileServers_Delete({
  "deviceName": "",
  "fileServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### FileServers_Get
Returns the properties of the specified file server name.


```js
azure_storsimple1200series_storsimple.FileServers_Get({
  "deviceName": "",
  "fileServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileServer](#fileserver)

### FileServers_CreateOrUpdate
Creates or updates the file server.


```js
azure_storsimple1200series_storsimple.FileServers_CreateOrUpdate({
  "deviceName": "",
  "fileServerName": "",
  "fileServer": {
    "properties": {
      "domainName": "",
      "storageDomainId": "",
      "backupScheduleGroupId": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * fileServer **required** [FileServer](#fileserver)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileServer](#fileserver)

### FileServers_BackupNow
Backup the file server now.


```js
azure_storsimple1200series_storsimple.FileServers_BackupNow({
  "deviceName": "",
  "fileServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### FileServers_ListMetrics
Gets the file server metrics.


```js
azure_storsimple1200series_storsimple.FileServers_ListMetrics({
  "deviceName": "",
  "fileServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * fileServerName **required** `string`: The name of the file server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### FileServers_ListMetricDefinition
Retrieves metric definitions of all metrics aggregated at the file server.


```js
azure_storsimple1200series_storsimple.FileServers_ListMetricDefinition({
  "deviceName": "",
  "fileServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the device.
  * fileServerName **required** `string`: The name of the file server.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### FileShares_ListByFileServer
Retrieves all the file shares in a file server.


```js
azure_storsimple1200series_storsimple.FileShares_ListByFileServer({
  "deviceName": "",
  "fileServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileShareList](#filesharelist)

### FileShares_Delete
Deletes the file share.


```js
azure_storsimple1200series_storsimple.FileShares_Delete({
  "deviceName": "",
  "fileServerName": "",
  "shareName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * shareName **required** `string`: The file share Name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### FileShares_Get
Returns the properties of the specified file share name.


```js
azure_storsimple1200series_storsimple.FileShares_Get({
  "deviceName": "",
  "fileServerName": "",
  "shareName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * shareName **required** `string`: The file share name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileShare](#fileshare)

### FileShares_CreateOrUpdate
Creates or updates the file share.


```js
azure_storsimple1200series_storsimple.FileShares_CreateOrUpdate({
  "deviceName": "",
  "fileServerName": "",
  "shareName": "",
  "fileShare": {
    "properties": {
      "shareStatus": "",
      "dataPolicy": "",
      "adminUser": "",
      "provisionedCapacityInBytes": 0,
      "monitoringStatus": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * shareName **required** `string`: The file share name.
  * fileShare **required** [FileShare](#fileshare)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileShare](#fileshare)

### FileShares_ListMetrics
Gets the file share metrics


```js
azure_storsimple1200series_storsimple.FileShares_ListMetrics({
  "deviceName": "",
  "fileServerName": "",
  "shareName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * shareName **required** `string`: The file share name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### FileShares_ListMetricDefinition
Retrieves metric definitions of all metrics aggregated at the file share.


```js
azure_storsimple1200series_storsimple.FileShares_ListMetricDefinition({
  "deviceName": "",
  "fileServerName": "",
  "shareName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * fileServerName **required** `string`: The file server name.
  * shareName **required** `string`: The file share name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### Devices_InstallUpdates
Installs the updates on the device.


```js
azure_storsimple1200series_storsimple.Devices_InstallUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### IscsiServers_ListByDevice
Retrieves all the iSCSI in a device.


```js
azure_storsimple1200series_storsimple.IscsiServers_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIServerList](#iscsiserverlist)

### IscsiServers_Delete
Deletes the iSCSI server.


```js
azure_storsimple1200series_storsimple.IscsiServers_Delete({
  "deviceName": "",
  "iscsiServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### IscsiServers_Get
Returns the properties of the specified iSCSI server name.


```js
azure_storsimple1200series_storsimple.IscsiServers_Get({
  "deviceName": "",
  "iscsiServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIServer](#iscsiserver)

### IscsiServers_CreateOrUpdate
Creates or updates the iSCSI server.


```js
azure_storsimple1200series_storsimple.IscsiServers_CreateOrUpdate({
  "deviceName": "",
  "iscsiServerName": "",
  "iscsiServer": {
    "properties": {
      "storageDomainId": "",
      "backupScheduleGroupId": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * iscsiServer **required** [ISCSIServer](#iscsiserver)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIServer](#iscsiserver)

### IscsiServers_BackupNow
Backup the iSCSI server now.


```js
azure_storsimple1200series_storsimple.IscsiServers_BackupNow({
  "deviceName": "",
  "iscsiServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### IscsiDisks_ListByIscsiServer
Retrieves all the disks in a iSCSI server.


```js
azure_storsimple1200series_storsimple.IscsiDisks_ListByIscsiServer({
  "deviceName": "",
  "iscsiServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIDiskList](#iscsidisklist)

### IscsiDisks_Delete
Deletes the iSCSI disk.


```js
azure_storsimple1200series_storsimple.IscsiDisks_Delete({
  "deviceName": "",
  "iscsiServerName": "",
  "diskName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * diskName **required** `string`: The disk name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### IscsiDisks_Get
Returns the properties of the specified iSCSI disk name.


```js
azure_storsimple1200series_storsimple.IscsiDisks_Get({
  "deviceName": "",
  "iscsiServerName": "",
  "diskName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * diskName **required** `string`: The disk name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIDisk](#iscsidisk)

### IscsiDisks_CreateOrUpdate
Creates or updates the iSCSI disk.


```js
azure_storsimple1200series_storsimple.IscsiDisks_CreateOrUpdate({
  "deviceName": "",
  "iscsiServerName": "",
  "diskName": "",
  "iscsiDisk": {
    "properties": {
      "diskStatus": "",
      "accessControlRecords": [],
      "dataPolicy": "",
      "provisionedCapacityInBytes": 0,
      "monitoringStatus": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * diskName **required** `string`: The disk name.
  * iscsiDisk **required** [ISCSIDisk](#iscsidisk)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIDisk](#iscsidisk)

### IscsiDisks_ListMetrics
Gets the iSCSI disk metrics


```js
azure_storsimple1200series_storsimple.IscsiDisks_ListMetrics({
  "deviceName": "",
  "iscsiServerName": "",
  "diskName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * diskName **required** `string`: The iSCSI disk name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### IscsiDisks_ListMetricDefinition
Retrieves metric definitions for all metric aggregated at the iSCSI disk.


```js
azure_storsimple1200series_storsimple.IscsiDisks_ListMetricDefinition({
  "deviceName": "",
  "iscsiServerName": "",
  "diskName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * diskName **required** `string`: The iSCSI disk name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### IscsiServers_ListMetrics
Gets the iSCSI server metrics


```js
azure_storsimple1200series_storsimple.IscsiServers_ListMetrics({
  "deviceName": "",
  "iscsiServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### IscsiServers_ListMetricDefinition
Retrieves metric definitions for all metrics aggregated at iSCSI server.


```js
azure_storsimple1200series_storsimple.IscsiServers_ListMetricDefinition({
  "deviceName": "",
  "iscsiServerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * iscsiServerName **required** `string`: The iSCSI server name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### Jobs_ListByDevice
Retrieves all the jobs in a device.


```js
azure_storsimple1200series_storsimple.Jobs_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [JobList](#joblist)

### Jobs_Get
Returns the properties of the specified job name.


```js
azure_storsimple1200series_storsimple.Jobs_Get({
  "deviceName": "",
  "jobName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * jobName **required** `string`: The job name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Job](#job)

### Devices_ListMetrics
Retrieves the device metrics.


```js
azure_storsimple1200series_storsimple.Devices_ListMetrics({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the appliance.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### Devices_ListMetricDefinition
Retrieves metric definition of all metrics aggregated at device.


```js
azure_storsimple1200series_storsimple.Devices_ListMetricDefinition({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The name of the appliance.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### Devices_GetNetworkSettings
Returns the network settings of the specified device name.


```js
azure_storsimple1200series_storsimple.Devices_GetNetworkSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [NetworkSettings](#networksettings)

### Devices_ScanForUpdates
Scans for updates on the device.


```js
azure_storsimple1200series_storsimple.Devices_ScanForUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_CreateOrUpdateSecuritySettings
Creates or updates the security settings.


```js
azure_storsimple1200series_storsimple.Devices_CreateOrUpdateSecuritySettings({
  "deviceName": "",
  "securitySettings": {
    "properties": {
      "deviceAdminPassword": {
        "value": "",
        "encryptionAlgorithm": ""
      }
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * securitySettings **required** [SecuritySettings](#securitysettings)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Alerts_SendTestEmail
Sends a test alert email.


```js
azure_storsimple1200series_storsimple.Alerts_SendTestEmail({
  "deviceName": "",
  "request": {
    "emailList": []
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * request **required** [SendTestAlertEmailRequest](#sendtestalertemailrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### FileShares_ListByDevice
Retrieves all the file shares in a device.


```js
azure_storsimple1200series_storsimple.FileShares_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileShareList](#filesharelist)

### Devices_GetTimeSettings
Returns the time settings of the specified device name.


```js
azure_storsimple1200series_storsimple.Devices_GetTimeSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [TimeSettings](#timesettings)

### Devices_GetUpdateSummary
Returns the update summary of the specified device name.


```js
azure_storsimple1200series_storsimple.Devices_GetUpdateSummary({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Updates](#updates)

### Managers_GetEncryptionSettings
Returns the encryption settings of the manager.


```js
azure_storsimple1200series_storsimple.Managers_GetEncryptionSettings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [EncryptionSettings](#encryptionsettings)

### Managers_DeleteExtendedInfo
Deletes the extended info of the manager.


```js
azure_storsimple1200series_storsimple.Managers_DeleteExtendedInfo({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Managers_GetExtendedInfo
Returns the extended information of the specified manager name.


```js
azure_storsimple1200series_storsimple.Managers_GetExtendedInfo({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ManagerExtendedInfo](#managerextendedinfo)

### Managers_UpdateExtendedInfo
Updates the extended info of the manager.


```js
azure_storsimple1200series_storsimple.Managers_UpdateExtendedInfo({
  "ManagerExtendedInfo": {
    "properties": {
      "integrityKey": "",
      "algorithm": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * ManagerExtendedInfo **required** [ManagerExtendedInfo](#managerextendedinfo)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * If-Match **required** `string`: Pass the ETag of ExtendedInfo fetched from GET call

#### Output
* output [ManagerExtendedInfo](#managerextendedinfo)

### Managers_CreateExtendedInfo
Creates the extended info of the manager.


```js
azure_storsimple1200series_storsimple.Managers_CreateExtendedInfo({
  "ManagerExtendedInfo": {
    "properties": {
      "integrityKey": "",
      "algorithm": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * ManagerExtendedInfo **required** [ManagerExtendedInfo](#managerextendedinfo)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ManagerExtendedInfo](#managerextendedinfo)

### FileServers_ListByManager
Retrieves all the file servers in a manager.


```js
azure_storsimple1200series_storsimple.FileServers_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FileServerList](#fileserverlist)

### Managers_GetEncryptionKey
Returns the symmetric encryption key of the manager.


```js
azure_storsimple1200series_storsimple.Managers_GetEncryptionKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [SymmetricEncryptedSecret](#symmetricencryptedsecret)

### IscsiServers_ListByManager
Retrieves all the iSCSI servers in a manager.


```js
azure_storsimple1200series_storsimple.IscsiServers_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ISCSIServerList](#iscsiserverlist)

### Jobs_ListByManager
Retrieves all the jobs in a manager.


```js
azure_storsimple1200series_storsimple.Jobs_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [JobList](#joblist)

### Managers_ListMetrics
Gets the  manager metrics


```js
azure_storsimple1200series_storsimple.Managers_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### Managers_ListMetricDefinition
Retrieves metric definition of all metrics aggregated at manager.


```js
azure_storsimple1200series_storsimple.Managers_ListMetricDefinition({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### StorageAccountCredentials_ListByManager
Retrieves all the storage account credentials in a manager.


```js
azure_storsimple1200series_storsimple.StorageAccountCredentials_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageAccountCredentialList](#storageaccountcredentiallist)

### StorageAccountCredentials_Delete
Deletes the storage account credential


```js
azure_storsimple1200series_storsimple.StorageAccountCredentials_Delete({
  "credentialName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * credentialName **required** `string`: The name of the storage account credential.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### StorageAccountCredentials_Get
Returns the properties of the specified storage account credential name.


```js
azure_storsimple1200series_storsimple.StorageAccountCredentials_Get({
  "credentialName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * credentialName **required** `string`: The name of storage account credential to be fetched.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageAccountCredential](#storageaccountcredential)

### StorageAccountCredentials_CreateOrUpdate
Creates or updates the storage account credential


```js
azure_storsimple1200series_storsimple.StorageAccountCredentials_CreateOrUpdate({
  "credentialName": "",
  "storageAccount": {
    "properties": {
      "cloudType": "",
      "endPoint": "",
      "login": "",
      "enableSSL": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * credentialName **required** `string`: The credential name.
  * storageAccount **required** [StorageAccountCredential](#storageaccountcredential)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageAccountCredential](#storageaccountcredential)

### StorageDomains_ListByManager
Retrieves all the storage domains in a manager.


```js
azure_storsimple1200series_storsimple.StorageDomains_ListByManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageDomainList](#storagedomainlist)

### StorageDomains_Delete
Deletes the storage domain.


```js
azure_storsimple1200series_storsimple.StorageDomains_Delete({
  "storageDomainName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storageDomainName **required** `string`: The storage domain name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### StorageDomains_Get
Returns the properties of the specified storage domain name.


```js
azure_storsimple1200series_storsimple.StorageDomains_Get({
  "storageDomainName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storageDomainName **required** `string`: The storage domain name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageDomain](#storagedomain)

### StorageDomains_CreateOrUpdate
Creates or updates the storage domain.


```js
azure_storsimple1200series_storsimple.StorageDomains_CreateOrUpdate({
  "storageDomainName": "",
  "storageDomain": {
    "properties": {
      "storageAccountCredentialIds": [],
      "encryptionStatus": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storageDomainName **required** `string`: The storage domain name.
  * storageDomain **required** [StorageDomain](#storagedomain)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageDomain](#storagedomain)



## Definitions

### AccessControlRecord
* AccessControlRecord `object`: The access control record
  * properties **required** [AccessControlRecordProperties](#accesscontrolrecordproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### AccessControlRecordList
* AccessControlRecordList `object`: Collection of AccessControlRecords
  * value **required** `array`: The value.
    * items [AccessControlRecord](#accesscontrolrecord)

### AccessControlRecordProperties
* AccessControlRecordProperties `object`: Properties of access control record
  * initiatorName **required** `string`: The Iscsi initiator name (IQN)

### Alert
* Alert `object`: Alert class
  * properties **required** [AlertProperties](#alertproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### AlertErrorDetails
* AlertErrorDetails `object`: Error details for the alert
  * errorCode `string`: Error code.
  * errorMessage `string`: Error Message
  * occurences `integer`: Number of occurrences.

### AlertFilter
* AlertFilter `object`: Filters that can be specified on the alert
  * appearedOnTime `string`: UTC time on which the alert appeared
  * severity `string` (values: Informational, Warning, Critical): Severity of the alert
  * sourceName `string`: Source name of the alert
  * sourceType `string` (values: Resource, Device): Source of the alert
  * status `string` (values: Active, Cleared): Status of the alert

### AlertList
* AlertList `object`: Collection of Alerts
  * nextLink `string`: Id of the next page of alerts
  * value **required** `array`: The value.
    * items [Alert](#alert)

### AlertProperties
* AlertProperties `object`: Properties of alert
  * alertType **required** `string`: Type of the alert
  * appearedAtSourceTime **required** `string`: UTC time at which the alert appeared on the source
  * appearedAtTime **required** `string`: UTC time at which the alert appeared
  * clearedAtSourceTime `string`: UTC time at which the alert was cleared on the source
  * clearedAtTime `string`: UTC time at which the alert got cleared
  * detailedInformation `object`: Other information about the alert
  * errorDetails [AlertErrorDetails](#alerterrordetails)
  * recommendation `string`: Recommendation for acting on the alert
  * resolutionReason `string`: Reason for resolving the alert
  * scope **required** `string` (values: Resource, Device): Device or Resource alert
  * severity **required** `string` (values: Informational, Warning, Critical): Severity of the alert
  * source **required** [AlertSource](#alertsource)
  * status **required** `string` (values: Active, Cleared): Current status of the alert
  * title **required** `string`: Title of the alert

### AlertSettings
* AlertSettings `object`: AlertSettings on the device which represents how alerts will be processed
  * properties **required** [AlertSettingsProperties](#alertsettingsproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### AlertSettingsProperties
* AlertSettingsProperties `object`: Class containing the properties of AlertSettings
  * additionalRecipientEmailList `array`: List of email addresses (apart from admin/co-admin of subscription) to whom the alert emails need to be sent
    * items `string`
  * alertNotificationCulture **required** `string`: Culture setting to be used while building alert emails. For eg: "en-US"
  * emailNotification **required** `string` (values: Enabled, Disabled): Value indicating whether user/admins will receive emails when an alert condition occurs on the system
  * notificationToServiceOwners **required** `string` (values: Enabled, Disabled): Value indicating whether service owners will receive emails when an alert condition occurs on the system. Applicable only if emailNotification flag is Enabled.

### AlertSource
* AlertSource `object`: source at which the alert can be raised
  * alertSourceType `string` (values: Resource, Device): Source type of the alert.
  * name `string`: Name of the source.
  * timeZone `string`: The time zone.

### AsymmetricEncryptedSecret
* AsymmetricEncryptedSecret `object`: This class can be used as the Type for any secret entity represented as Password, CertThumbprint, Algorithm. This class is intended to be used when the secret is encrypted with an asymmetric key pair. The encryptionAlgorithm field is mainly for future usage to potentially allow different entities encrypted using different algorithms.
  * encryptionAlgorithm **required** `string` (values: None, AES256, RSAES_PKCS1_v_1_5): Algorithm used to encrypt "Value"
  * encryptionCertificateThumbprint `string`: Thumbprint certificate that was used to encrypt "Value"
  * value **required** `string`: The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null.

### AvailableProviderOperation
* AvailableProviderOperation `object`: Class represents provider operation
  * display [AvailableProviderOperationDisplay](#availableprovideroperationdisplay)
  * name `string`: Gets or sets the name of the operation being performed on this particular object
  * origin `string`: Gets or sets Origin
  * properties [AvailableProviderOperationProperties](#availableprovideroperationproperties)

### AvailableProviderOperationDisplay
* AvailableProviderOperationDisplay `object`: Contains the localized display information for this particular operation / action. 
  * description `string`: Gets or sets Description
  * operation `string`: Gets or sets Operation
  * provider `string`: Gets or sets Provider
  * resource `string`: Gets or sets Resource

### AvailableProviderOperationProperties
* AvailableProviderOperationProperties `object`: Class represents Properties in AvailableProviderOperations

### AvailableProviderOperations
* AvailableProviderOperations `object`: Class for set of operations used for discovery of available provider operations.
  * nextLink `string`: The NextLink.
  * value **required** `array`: The value.
    * items [AvailableProviderOperation](#availableprovideroperation)

### Backup
* Backup `object`: The backup.
  * properties **required** [BackupProperties](#backupproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### BackupElement
* BackupElement `object`: Class represents BackupElement
  * properties **required** [BackupElementProperties](#backupelementproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### BackupElementProperties
* BackupElementProperties `object`: The backup element properties
  * dataPolicy **required** `string` (values: Invalid, Local, Tiered, Cloud): The data policy of backed up endpoint.
  * endpointName **required** `string`: The name of the endpoint.
  * sizeInBytes **required** `integer`: The size in bytes.

### BackupFilter
* BackupFilter `object`: Backup OData filter class
  * createdTime `string`: Gets or sets CreatedTime
  * initiatedBy `string` (values: Manual, Scheduled): Gets or sets InitiatedBy

### BackupList
* BackupList `object`: Collection of backups
  * nextLink `string`: The NextLink.
  * value **required** `array`: The value.
    * items [Backup](#backup)

### BackupProperties
* BackupProperties `object`: Class represents Backup properties
  * createdTime `string`: The time when the backup was created.
  * deviceId **required** `string`: The Device Identifier.
  * elements **required** `array`: The backup elements.
    * items [BackupElement](#backupelement)
  * expirationTime `string`: The time when the backup will expire.
  * initiatedBy **required** `string` (values: Manual, Scheduled): Indicates how the backup was initiated "Manual | Scheduled".
  * sizeInBytes **required** `integer`: The backup size in bytes.
  * targetId `string`: The path id of the target FileServer or IscsiServer for which the backup was taken.
  * targetType `string`: Type of target, FileServer or IscsiServer

### BackupScheduleGroup
* BackupScheduleGroup `object`: The Backup Schedule Group
  * properties **required** [BackupScheduleGroupProperties](#backupschedulegroupproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### BackupScheduleGroupList
* BackupScheduleGroupList `object`: The list response of backup schedule groups
  * value **required** `array`: The value.
    * items [BackupScheduleGroup](#backupschedulegroup)

### BackupScheduleGroupProperties
* BackupScheduleGroupProperties `object`: The Backup Schedule Group Properties
  * startTime **required** [Time](#time)

### BaseModel
* BaseModel `object`: Base class for models
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### ChapProperties
* ChapProperties `object`: Chap properties
  * password **required** [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

### ChapSettings
* ChapSettings `object`: Challenge-Handshake Authentication Protocol (CHAP) setting
  * properties **required** [ChapProperties](#chapproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### ChapSettingsList
* ChapSettingsList `object`: Collection of Chap setting entities
  * value **required** `array`: The chap settings entity collection
    * items [ChapSettings](#chapsettings)

### ClearAlertRequest
* ClearAlertRequest `object`: Request for clearing the alert
  * alerts **required** `array`: List of alert Ids to be cleared
    * items `string`
  * resolutionMessage `string`: Resolution message while clearing the request

### CloneRequest
* CloneRequest `object`: Clone Job Request Model.
  * properties **required** [CloneRequestProperties](#clonerequestproperties)

### CloneRequestProperties
* CloneRequestProperties `object`: Properties of CloneRequest
  * disk [ISCSIDisk](#iscsidisk)
  * newEndpointName **required** `string`: Name of new endpoint which will created as part of clone job.
  * share [FileShare](#fileshare)
  * targetAccessPointId **required** `string`: Access point Id on which clone job will performed.
  * targetDeviceId **required** `string`: DeviceId of the device which will act as the Clone target

### Device
* Device `object`: Represents a StorSimple device object along with its properties
  * properties [DeviceProperties](#deviceproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### DeviceDetails
* DeviceDetails `object`: Class containing more granular details about the device
  * availableLocalStorageInBytes `integer`: Local pending storage available on the device in bytes
  * availableStorageInBytes `integer`: Total pending available storage on the device in bytes
  * endpointCount `integer`: Total number of endpoints that are currently on the device ( i.e. number of shares on FileServer or number of volumes on IscsiServer)
  * provisionedLocalStorageInBytes `integer`: Storage in bytes that has been provisioned locally on the device
  * provisionedStorageInBytes `integer`: Storage in bytes that has been provisioned on the device including both local and cloud
  * totalBackupSizeInBytes `integer`: Total size taken up by backups in bytes
  * totalLocalStorageInBytes `integer`: Total local storage capacity in device in bytes.
  * totalStorageInBytes `integer`: Total storage available on the device in bytes.
  * usingLocalStorageInBytes `integer`: Local Storage that is being currently used in bytes
  * usingStorageInBytes `integer`: Storage that is being currently used in bytes including both local and cloud

### DeviceList
* DeviceList `object`: Collection of Devices
  * value **required** `array`: The value.
    * items [Device](#device)

### DevicePatch
* DevicePatch `object`: Class that represents the Input for the PATCH call on Device. Currently the only patchable property on device is "DeviceDescription"
  * deviceDescription `string`: Short description given for the device

### DeviceProperties
* DeviceProperties `object`: Encases all the properties of the Device
  * activationTime `string`: The UTC time at which the device was activated
  * allowedDeviceOperations `array`: Operations that are allowed on the device based on its current state
    * items `string` (values: None, Delete, DeleteWithWarning, DRSource, DRTarget, Browsable, ReadOnlyForDR, Deactivate)
  * culture `string`: Language culture setting on the device. For eg: "en-US"
  * details [DeviceDetails](#devicedetails)
  * deviceCapabilities `array`: Device can be configured either as FileServer or IscsiServer
    * items `string` (values: Invalid, FileServer, IscsiServer)
  * deviceConfigurationStatus `string` (values: Complete, Pending): "Complete" if the device has been successfully registered as File/IscsiServer and the creation of share/volume is complete, "Pending" if the device is only registered but the creation of share/volume is complete is still pending
  * deviceDescription `string`: Short description given for the device
  * deviceSoftwareVersion `string`: Version number of the software running on the device
  * domainName `string`: Fully qualified name of the domain to which the device is attached
  * friendlySoftwareName `string`: Friendly name for the software version
  * modelDescription `string`: Name of the device model
  * status `string` (values: Unknown, Online, Offline, RequiresAttention, MaintenanceMode, Creating, Provisioning, Deleted, ReadyToSetup, Deactivated, Deactivating): Current status of the device
  * type `string` (values: Invalid, Appliance, VirtualAppliance, Series9000OnPremVirtualAppliance, Series9000VirtualAppliance, Series9000PhysicalAppliance): Type of the device

### EncryptionSettings
* EncryptionSettings `object`: The EncryptionSettings
  * properties **required** [EncryptionSettingsProperties](#encryptionsettingsproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### EncryptionSettingsProperties
* EncryptionSettingsProperties `object`: The properties of EncryptionSettings
  * encryptionStatus **required** `string` (values: Enabled, Disabled): The encryption status which indicates if encryption is enabled or not.
  * keyRolloverStatus **required** `string` (values: Required, NotRequired): The key rollover status which indicates if key rollover is required or not. If secrets encryption has been upgraded, then it requires key rollover.

### Error
* Error `object`
  * errorCode **required** `string`
  * message **required** [Message](#message)
  * values `array`
    * items [Item](#item)

### FailoverRequest
* FailoverRequest `object`: The Failover request object.
  * accesspointIds `array`
    * items `string`
  * keepSourceDevice `boolean`
  * skipValidation `boolean`
  * targetDeviceId `string`

### FileServer
* FileServer `object`: The file server.
  * properties **required** [FileServerProperties](#fileserverproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### FileServerList
* FileServerList `object`: Collection of file servers
  * value **required** `array`: The value.
    * items [FileServer](#fileserver)

### FileServerProperties
* FileServerProperties `object`: The file server properties.
  * backupScheduleGroupId **required** `string`: The backup policy id.
  * description `string`: The description of the file server
  * domainName **required** `string`: Domain of the file server
  * storageDomainId **required** `string`: The storage domain id.

### FileShare
* FileShare `object`: The File Share.
  * properties **required** [FileShareProperties](#fileshareproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### FileShareList
* FileShareList `object`: Collection of file shares
  * value **required** `array`: The value.
    * items [FileShare](#fileshare)

### FileShareProperties
* FileShareProperties `object`: The File Share.
  * adminUser **required** `string`: The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
  * dataPolicy **required** `string` (values: Invalid, Local, Tiered, Cloud): The data policy
  * description `string`: Description for file share
  * localUsedCapacityInBytes `integer`: The local used capacity in Bytes.
  * monitoringStatus **required** `string` (values: Enabled, Disabled): The monitoring status
  * provisionedCapacityInBytes **required** `integer`: The total provisioned capacity in Bytes
  * shareStatus **required** `string` (values: Online, Offline): The Share Status
  * usedCapacityInBytes `integer`: The used capacity in Bytes.

### IPConfig
* IPConfig `object`: Details related to the IP address configuration
  * gateway **required** `string`: The gateway of the network adapter.
  * ipAddress **required** `string`: The IP address of the network adapter, either ipv4 or ipv6.
  * prefixLength `integer`: The prefix length of the network adapter.

### ISCSIDisk
* ISCSIDisk `object`: The iSCSI disk.
  * properties **required** [ISCSIDiskProperties](#iscsidiskproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### ISCSIDiskList
* ISCSIDiskList `object`: Collection of Iscsi disk
  * value **required** `array`: The value.
    * items [ISCSIDisk](#iscsidisk)

### ISCSIDiskProperties
* ISCSIDiskProperties `object`: The iSCSI disk properties.
  * accessControlRecords **required** `array`: The access control records.
    * items `string`
  * dataPolicy **required** `string` (values: Invalid, Local, Tiered, Cloud): The data policy.
  * description `string`: The description.
  * diskStatus **required** `string` (values: Online, Offline): The disk status.
  * localUsedCapacityInBytes `integer`: The local used capacity in bytes.
  * monitoringStatus **required** `string` (values: Enabled, Disabled): The monitoring.
  * provisionedCapacityInBytes **required** `integer`: The provisioned capacity in bytes.
  * usedCapacityInBytes `integer`: The used capacity in bytes.

### ISCSIServer
* ISCSIServer `object`: The iSCSI server.
  * properties **required** [ISCSIServerProperties](#iscsiserverproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### ISCSIServerList
* ISCSIServerList `object`: Collection of Iscsi servers
  * value **required** `array`: The value.
    * items [ISCSIServer](#iscsiserver)

### ISCSIServerProperties
* ISCSIServerProperties `object`: The iSCSI server properties.
  * backupScheduleGroupId **required** `string`: The backup policy id.
  * chapId `string`: The chap id.
  * description `string`: The description.
  * reverseChapId `string`: The reverse chap id.
  * storageDomainId **required** `string`: The storage domain id.

### Item
* Item `object`
  * key **required** `string`
  * value **required** `string`

### Job
* Job `object`: The Job.
  * endTime `string`: The UTC time at which the job completed
  * error [JobErrorDetails](#joberrordetails)
  * percentComplete **required** `integer`: The percentage of the job that is already complete
  * properties [JobProperties](#jobproperties)
  * startTime `string`: The UTC time at which the job was started
  * status **required** `string` (values: Invalid, Running, Succeeded, Failed, Canceled, Paused, Scheduled): Current status of the job
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### JobErrorDetails
* JobErrorDetails `object`: The job error information containing List of JobErrorItem.
  * code **required** `string`: The code intended for programmatic access
  * errorDetails `array`: The error details.
    * items [JobErrorItem](#joberroritem)
  * message **required** `string`: The message intended to describe the error in detail

### JobErrorItem
* JobErrorItem `object`: The job error items.
  * code **required** `string`: The code intended for programmatic access
  * message **required** `string`: The message intended to describe the error in detail
  * recommendations `array`: The recommended actions.
    * items `string`

### JobFilter
* JobFilter `object`: Filters that can be specified for the job
  * jobType **required** `string` (values: Backup, Clone, Failover, DownloadUpdates, InstallUpdates): The job type.
  * startTime `string`: The start time of the job.
  * status **required** `string` (values: Invalid, Running, Succeeded, Failed, Canceled, Paused, Scheduled): The job status.

### JobList
* JobList `object`: Collection of jobs
  * nextLink `string`: The NextLink.
  * value **required** `array`: The value.
    * items [Job](#job)

### JobProperties
* JobProperties `object`: properties for the job
  * backupPointInTime `string`: The time of the backup used for the failover.
  * deviceId `string`: The device id in which the job is currently running
  * downloadProgress [UpdateDownloadProgress](#updatedownloadprogress)
  * entityId `string`: The entity identifier for which the job ran.
  * entityType `string`: The entity type for which the job ran.
  * installProgress [UpdateInstallProgress](#updateinstallprogress)
  * isCancellable `boolean`: Represents whether the job is cancellable or not
  * jobStages `array`: The job stages.
    * items [JobStage](#jobstage)
  * jobType **required** `string` (values: Backup, Clone, Failover, DownloadUpdates, InstallUpdates): Type of the job
  * sourceDeviceId `string`: The source device identifier of the failover job.
  * stats [JobStats](#jobstats)
  * targetId `string`: Id of the object that is created by the job
  * targetType `string` (values: FileServer, DiskServer): The target type of the backup.

### JobStage
* JobStage `object`: Contains details about the multiple job stages of a job
  * detail `string`: The details of the stage.
  * errorCode `string`: The error code of the stage if any.
  * message `string`: The message of the job stage.
  * stageStatus **required** `string` (values: Invalid, Running, Succeeded, Failed, Canceled, Paused, Scheduled): The stage status.

### JobStats
* JobStats `object`: Stats that are available for all jobs in common
  * completedWorkItemCount `integer`: Completed work item count.
  * estimatedTimeRemaining `integer`: The estimated time remaining.
  * totalWorkItemCount `integer`: Total work item count.

### Manager
* Manager `object`: The StorSimple Manager
  * etag `string`: ETag of the Manager
  * properties [ManagerProperties](#managerproperties)
  * id `string`: The Resource Id
  * location **required** `string`: The Geo location of the Manager
  * name `string`: The Resource Name
  * tags `object`: Tags attached to the Manager
  * type `string`: The Resource type

### ManagerExtendedInfo
* ManagerExtendedInfo `object`: The extended info of the manager.
  * etag `string`: ETag of the Resource
  * properties **required** [ManagerExtendedInfoProperties](#managerextendedinfoproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### ManagerExtendedInfoProperties
* ManagerExtendedInfoProperties `object`: Properties of the ManagerExtendedInfo
  * algorithm **required** `string`: Represents the encryption algorithm used to encrypt the other keys. None - if EncryptionKey is saved in plain text format. AlgorithmName - if encryption is used
  * encryptionKey `string`: Represents the CEK of the resource
  * encryptionKeyThumbprint `string`: Represents the Cert thumbprint that was used to encrypt the CEK
  * integrityKey **required** `string`: Represents the CIK of the resource
  * portalCertificateThumbprint `string`: Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
  * version `string`: Represents the version of the ExtendedInfo object being persisted

### ManagerIntrinsicSettings
* ManagerIntrinsicSettings `object`: Intrinsic settings which refers to the type of the StorSimple manager
  * type **required** `string` (values: GardaV1, HelsinkiV1): Refers to the type of the StorSimple Manager

### ManagerList
* ManagerList `object`: List of StorSimple Managers under a particular resourceGroup
  * value **required** `array`: List of Managers
    * items [Manager](#manager)

### ManagerPatch
* ManagerPatch `object`: The StorSimple Manager patch.
  * tags `object`: The tags attached to the StorSimple Manager.

### ManagerProperties
* ManagerProperties `object`: The properties of the Manager
  * cisIntrinsicSettings [ManagerIntrinsicSettings](#managerintrinsicsettings)
  * provisioningState `string`: Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created
  * sku [ManagerSku](#managersku)

### ManagerSku
* ManagerSku `object`: The Sku.
  * name **required** `string` (values: Standard): Refers to the sku name which should be "Standard"

### Message
* Message `object`
  * language `string`
  * value `string`

### MetricAvailablity
* MetricAvailablity `object`: Metric availability specifies the time grain (aggregation interval or frequency) and the retention period for that time grain
  * retention **required** `string`: The retention period for the metric at the specified timegrain
  * timeGrain **required** `string`: The time grain, specifies the aggregation interval for the metric.

### MetricData
* MetricData `object`: The metric data.
  * average **required** `number`: The average of all sample for the given instance
  * count **required** `integer`: The count of samples of the metric data available for the given instance
  * maximum **required** `number`: The maximum of all samples available
  * minimum **required** `number`: The minimum of all samples available
  * sum **required** `number`: The sum of all the samples available in the given instance of time for the specific metric data
  * timeStamp **required** `string`: The time when the metric data is fetched

### MetricDefinition
* MetricDefinition `object`: Monitoring metric definition represents the metadata of the metrics.
  * dimensions **required** `array`: The supported dimensions
    * items [MetricDimension](#metricdimension)
  * metricAvailabilities **required** `array`: The available metric granularities
    * items [MetricAvailablity](#metricavailablity)
  * name **required** [MetricName](#metricname)
  * primaryAggregationType **required** `string` (values: Average, Last, Maximum, Minimum, None, Total): The metric aggregation type
  * resourceId **required** `string`: The metric source id
  * type **required** `string`: The metric definition type
  * unit **required** `string` (values: Bytes, BytesPerSecond, Count, CountPerSecond, Percent, Seconds): The metric unit

### MetricDefinitionList
* MetricDefinitionList `object`: List of metric definition
  * value **required** `array`: The list of metric definition
    * items [MetricDefinition](#metricdefinition)

### MetricDimension
* MetricDimension `object`: Metric dimension
  * name **required** `string`: Metric dimension name
  * value **required** `string`: Metric dimension values

### MetricFilter
* MetricFilter `object`: class representing the filters to be passed while fetching metrics
  * endTime `string`: endtime for fetching metrics
  * name [MetricNameFilter](#metricnamefilter)
  * startTime `string`: starttime for fetching metrics
  * timeGrain `string`: timegrain of the metrics

### MetricList
* MetricList `object`: Collection of metrics
  * value **required** `array`: The value.
    * items [Metrics](#metrics)

### MetricName
* MetricName `object`: The name of the metric
  * localizedValue **required** `string`: Localized name of the metric
  * value **required** `string`: Name of the metric

### MetricNameFilter
* MetricNameFilter `object`: Class representing the name filter to be passed while fetching metrics
  * value `string`: The value.

### Metrics
* Metrics `object`: Monitoring metric
  * dimensions **required** `array`: The Metric dimension which indicates the source of the metric
    * items [MetricDimension](#metricdimension)
  * endTime **required** `string`: The metric end time
  * name **required** [MetricName](#metricname)
  * primaryAggregation **required** `string` (values: Average, Last, Maximum, Minimum, None, Total): The metric aggregation type
  * resourceId **required** `string`: The id of metric source
  * startTime **required** `string`: The metric start time
  * timeGrain **required** `string`: The time grain, time grain indicates frequency of the metric data
  * type **required** `string`: The Type of the metric data
  * unit **required** `string` (values: Bytes, BytesPerSecond, Count, CountPerSecond, Percent, Seconds): The unit of the metric data
  * values **required** `array`: The metric data
    * items [MetricData](#metricdata)

### NetworkAdapter
* NetworkAdapter `object`: Represents a networkAdapter in a particular node.
  * dhcpStatus **required** `string` (values: Enabled, Disabled): Represents state of DHCP.
  * iPv4Info [IPConfig](#ipconfig)
  * iPv6Info [IPConfig](#ipconfig)
  * linkSpeed `integer`: The speed of the network adapter.
  * networkAdapterName **required** `string`: The name of the network adapter.

### NetworkSettings
* NetworkSettings `object`: The NetworkSettings of a device
  * properties **required** [NetworkSettingsProperties](#networksettingsproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### NetworkSettingsProperties
* NetworkSettingsProperties `object`: The properties of NetworkSettings
  * nodeNetworks **required** `array`: The NetworkAdapters under each node of the device.
    * items [NodeNetwork](#nodenetwork)
  * primaryDnsServer **required** `string`: The Primary DNS server for the device
  * secondaryDnsServer `string`: The secondary DNS server for the device

### NodeNetwork
* NodeNetwork `object`: Represents a single node in a device.
  * networkAdapters **required** `array`: The array of network adapters in the node.
    * items [NetworkAdapter](#networkadapter)

### RawCertificateData
* RawCertificateData `object`: Raw Certificate Data From IDM
  * authType `string` (values: Invalid, AccessControlService, AzureActiveDirectory): Specify the Authentication type
  * certificate **required** `string`: Gets or sets the base64 encoded certificate raw data string

### Resource
* Resource `object`: The Azure Resource.
  * id `string`: The Resource Id
  * location **required** `string`: The Geo location of the Manager
  * name `string`: The Resource Name
  * tags `object`: Tags attached to the Manager
  * type `string`: The Resource type

### ResourceCertificateAndAADDetails
* ResourceCertificateAndAADDetails `object`: Resource Certificate And AAD Details from IDM
  * aadAuthority **required** `string`: AAD tenant authority
  * aadTenantId **required** `string`: AAD tenant Id
  * authType `string` (values: Invalid, AccessControlService, AzureActiveDirectory): Specify the Authentication type
  * azureManagementEndpointAudience **required** `string`: Azure Management Endpoint Audience
  * certificate **required** `string`: Gets or sets the base64 encoded certificate raw data string
  * friendlyName **required** `string`: Certificate friendly name
  * issuer **required** `string`: Certificate issuer
  * resourceId **required** `integer`: Gets or Sets the ResourceId
  * servicePrincipalClientId **required** `string`: AAD service principal clientId
  * servicePrincipalObjectId **required** `string`: AAD service principal ObjectId
  * subject **required** `string`: Certificate Subject Name
  * thumbprint **required** `string`: Certificate thumbprint
  * validFrom **required** `string`: Certificate Validity start Date time
  * validTo **required** `string`: Certificate Validity End Date time

### SecuritySettings
* SecuritySettings `object`: The SecuritySettings of a device
  * properties **required** [SecuritySettingsProperties](#securitysettingsproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### SecuritySettingsProperties
* SecuritySettingsProperties `object`: The properties of SecuritySettings
  * deviceAdminPassword **required** [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

### SendTestAlertEmailRequest
* SendTestAlertEmailRequest `object`: Request for sending test alert email
  * emailList **required** `array`: List of emails to send the test alerts
    * items `string`

### StorageAccountCredential
* StorageAccountCredential `object`: The storage account credential
  * properties **required** [StorageAccountCredentialProperties](#storageaccountcredentialproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### StorageAccountCredentialList
* StorageAccountCredentialList `object`: Collection of Storage account credential entities
  * value **required** `array`: The value.
    * items [StorageAccountCredential](#storageaccountcredential)

### StorageAccountCredentialProperties
* StorageAccountCredentialProperties `object`: Storage account properties
  * accessKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * cloudType **required** `string` (values: Azure, S3, S3_RRS, OpenStack, HP): The cloud service provider
  * enableSSL **required** `string` (values: Enabled, Disabled): SSL needs to be enabled or not
  * endPoint **required** `string`: The storage endpoint
  * location `string`: The storage account's geo location
  * login **required** `string`: The storage account login

### StorageDomain
* StorageDomain `object`: The storage domain.
  * properties **required** [StorageDomainProperties](#storagedomainproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### StorageDomainList
* StorageDomainList `object`: Collection of storage domains
  * value **required** `array`: The value.
    * items [StorageDomain](#storagedomain)

### StorageDomainProperties
* StorageDomainProperties `object`: The storage domain properties.
  * encryptionKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * encryptionStatus **required** `string` (values: Enabled, Disabled): The encryption status "Enabled | Disabled".
  * storageAccountCredentialIds **required** `array`: The storage account credentials.
    * items `string`

### SymmetricEncryptedSecret
* SymmetricEncryptedSecret `object`: This class can be used as the Type for any secret entity represented as Value, ValueCertificateThumbprint, EncryptionAlgorithm. In this case, "Value" is a secret and the "valueThumbprint" represents the certificate thumbprint of the value. The algorithm field is mainly for future usage to potentially allow different entities encrypted using different algorithms.
  * encryptionAlgorithm **required** `string` (values: None, AES256, RSAES_PKCS1_v_1_5): Algorithm used to encrypt "Value"
  * value **required** `string`: The value of the secret itself. If the secret is in plaintext or null then EncryptionAlgorithm will be none
  * valueCertificateThumbprint `string`: Thumbprint cert that was used to encrypt "Value"

### Time
* Time `object`: The Time.
  * hour **required** `integer`: The hour.
  * minute **required** `integer`: The minute.

### TimeSettings
* TimeSettings `object`: The TimeSettings of a device
  * properties **required** [TimeSettingsProperties](#timesettingsproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### TimeSettingsProperties
* TimeSettingsProperties `object`: The properties of TimeSettings
  * primaryTimeServer **required** `string`: The primary Network Time Protocol (NTP) server name, like 'time.windows.com'.
  * secondaryTimeServer `string`: The secondary Network Time Protocol (NTP) server name, like 'time.contoso.com'. It's optional.
  * timeZone **required** `string`: The timezone of device, like '(UTC -06:00) Central America'

### UpdateDownloadProgress
* UpdateDownloadProgress `object`: details available during the download
  * downloadPhase `string` (values: Unknown, Initializing, Downloading, Verifying): The download phase.
  * numberOfUpdatesDownloaded `integer`: Number of updates downloaded.
  * numberOfUpdatesToDownload `integer`: Number of updates to download.
  * percentComplete `integer`: Percentage of completion.
  * totalBytesDownloaded `number`: Total bytes downloaded.
  * totalBytesToDownload `number`: Total bytes to download.

### UpdateInstallProgress
* UpdateInstallProgress `object`: Class representing the progress during installation of updates
  * numberOfUpdatesInstalled `integer`: Number of updates installed.
  * numberOfUpdatesToInstall `integer`: Number of updates to install.
  * percentComplete `integer`: Percentage of completion.

### Updates
* Updates `object`: The updates profile
  * properties [UpdatesProperties](#updatesproperties)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.

### UpdatesProperties
* UpdatesProperties `object`: Properties of the update profile
  * deviceLastScannedTime `string`: The last time when the device did an update scan.
  * deviceVersion `string`: The current Device version.
  * inProgressDownloadJobId `string`: If a download is in progress, this field contains the JobId of that particular download job
  * inProgressDownloadJobStartedTime `string`: The time when the currently running download (if any) started
  * inProgressInstallJobId `string`: If an install is in progress, this field contains the JobId of that particular install job
  * inProgressInstallJobStartedTime `string`: The time when the currently running install (if any) started
  * inProgressScanStartedTime `string`: The time when the currently running scan (if any) started
  * lastCompletedDownloadJobTime `string`: The time when the last Download job was completed (success|cancelled|failed) on the device.
  * lastCompletedInstallJobTime `string`: The time when the last Install job was completed (success|cancelled|failed) on the device.
  * lastCompletedScanTime `string`: The time when the last scan job was completed (success|cancelled|failed) on the device.
  * rebootRequiredForInstall `boolean`: Set to true if RegularUpdatesAvailable is true and if at least one of the updateItems detected has needs a reboot to install.
  * regularUpdatesAvailable `boolean`: Set to true if regular updates were detected for the current version of the device.
  * status `string` (values: Idle, Scanning, Downloading, Installing): The current update operation.
  * totalItemsPendingForDownload `integer`: The total number of items pending for download.
  * totalItemsPendingForInstall `integer`: The total number of items pending for install.

### UploadCertificateRequest
* UploadCertificateRequest `object`: Upload Certificate Request to IDM
  * contractVersion `string` (values: InvalidVersion, V2011_09, V2012_02, V2012_05, V2012_12, V2013_04, V2013_10, V2013_11, V2014_04, V2014_06, V2014_07, V2014_09, V2014_10, V2014_12, V2015_01, V2015_02, V2015_04, V2015_05, V2015_06, V2015_07, V2015_08, V2015_10, V2015_12, V2016_01, V2016_02, V2016_04, V2016_05, V2016_07, V2016_08): Gets ContractVersion
  * properties **required** [RawCertificateData](#rawcertificatedata)

### UploadCertificateResponse
* UploadCertificateResponse `object`: Upload Certificate Response from IDM
  * properties **required** [ResourceCertificateAndAADDetails](#resourcecertificateandaaddetails)
  * id `string`: The identifier.
  * name `string`: The name.
  * type `string`: The type.


