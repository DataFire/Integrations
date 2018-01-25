# @datafire/azure_arm_storsimple8000series

Client library for StorSimple8000SeriesManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_storsimple8000series
```
```js
let azure_arm_storsimple8000series = require('@datafire/azure_arm_storsimple8000series').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_storsimple8000series.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Operations_List
Lists all of the available REST API operations of the Microsoft.Storsimple provider


```js
azure_arm_storsimple8000series.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The api version

#### Output
* output [AvailableProviderOperationList](#availableprovideroperationlist)

### Managers_List
Retrieves all the managers in a subscription.


```js
azure_arm_storsimple8000series.Managers_List({
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
azure_arm_storsimple8000series.Managers_ListByResourceGroup({
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
azure_arm_storsimple8000series.Managers_Delete({
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
azure_arm_storsimple8000series.Managers_Get({
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
azure_arm_storsimple8000series.Managers_Update({
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
azure_arm_storsimple8000series.Managers_CreateOrUpdate({
  "parameters": {
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
  * parameters **required** [Manager](#manager)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Manager](#manager)

### AccessControlRecords_ListByManager
Retrieves all the access control records in a manager.


```js
azure_arm_storsimple8000series.AccessControlRecords_ListByManager({
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
azure_arm_storsimple8000series.AccessControlRecords_Delete({
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
azure_arm_storsimple8000series.AccessControlRecords_Get({
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
azure_arm_storsimple8000series.AccessControlRecords_CreateOrUpdate({
  "accessControlRecordName": "",
  "parameters": {
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
  * parameters **required** [AccessControlRecord](#accesscontrolrecord)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AccessControlRecord](#accesscontrolrecord)

### Alerts_ListByManager
Retrieves all the alerts in a manager.


```js
azure_arm_storsimple8000series.Alerts_ListByManager({
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

### BandwidthSettings_ListByManager
Retrieves all the bandwidth setting in a manager.


```js
azure_arm_storsimple8000series.BandwidthSettings_ListByManager({
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
* output [BandwidthSettingList](#bandwidthsettinglist)

### BandwidthSettings_Delete
Deletes the bandwidth setting


```js
azure_arm_storsimple8000series.BandwidthSettings_Delete({
  "bandwidthSettingName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * bandwidthSettingName **required** `string`: The name of the bandwidth setting.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### BandwidthSettings_Get
Returns the properties of the specified bandwidth setting name.


```js
azure_arm_storsimple8000series.BandwidthSettings_Get({
  "bandwidthSettingName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * bandwidthSettingName **required** `string`: The name of bandwidth setting to be fetched.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BandwidthSetting](#bandwidthsetting)

### BandwidthSettings_CreateOrUpdate
Creates or updates the bandwidth setting


```js
azure_arm_storsimple8000series.BandwidthSettings_CreateOrUpdate({
  "bandwidthSettingName": "",
  "parameters": {
    "properties": {
      "schedules": []
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
  * bandwidthSettingName **required** `string`: The bandwidth setting name.
  * parameters **required** [BandwidthSetting](#bandwidthsetting)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BandwidthSetting](#bandwidthsetting)

### Alerts_Clear
Clear the alerts.


```js
azure_arm_storsimple8000series.Alerts_Clear({
  "parameters": {
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
  * parameters **required** [ClearAlertRequest](#clearalertrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### CloudAppliances_ListSupportedConfigurations
Lists supported cloud appliance models and supported configurations.


```js
azure_arm_storsimple8000series.CloudAppliances_ListSupportedConfigurations({
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
* output [CloudApplianceConfigurationList](#cloudapplianceconfigurationlist)

### Devices_Configure
Complete minimal setup before using the device.


```js
azure_arm_storsimple8000series.Devices_Configure({
  "parameters": {
    "properties": {
      "friendlyName": "",
      "currentDeviceName": "",
      "timeZone": ""
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
  * parameters **required** [ConfigureDeviceRequest](#configuredevicerequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_ListByManager
Returns the list of devices for the specified manager.


```js
azure_arm_storsimple8000series.Devices_ListByManager({
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
  * $expand `string`: Specify $expand=details to populate additional fields related to the device or $expand=rolloverdetails to populate additional fields related to the service data encryption key rollover on device

#### Output
* output [DeviceList](#devicelist)

### Devices_Delete
Deletes the device.


```js
azure_arm_storsimple8000series.Devices_Delete({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_Get
Returns the properties of the specified device.


```js
azure_arm_storsimple8000series.Devices_Get({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $expand `string`: Specify $expand=details to populate additional fields related to the device or $expand=rolloverdetails to populate additional fields related to the service data encryption key rollover on device

#### Output
* output [Device](#device)

### Devices_Update
Patches the device.


```js
azure_arm_storsimple8000series.Devices_Update({
  "deviceName": "",
  "parameters": {
    "properties": {}
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * parameters **required** [DevicePatch](#devicepatch)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Device](#device)

### DeviceSettings_GetAlertSettings
Gets the alert settings of the specified device.


```js
azure_arm_storsimple8000series.DeviceSettings_GetAlertSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AlertSettings](#alertsettings)

### DeviceSettings_CreateOrUpdateAlertSettings
Creates or updates the alert settings of the specified device.


```js
azure_arm_storsimple8000series.DeviceSettings_CreateOrUpdateAlertSettings({
  "deviceName": "",
  "parameters": {
    "properties": {
      "emailNotification": ""
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
  * deviceName **required** `string`: The device name
  * parameters **required** [AlertSettings](#alertsettings)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [AlertSettings](#alertsettings)

### Devices_AuthorizeForServiceEncryptionKeyRollover
Authorizes the specified device for service data encryption key rollover.


```js
azure_arm_storsimple8000series.Devices_AuthorizeForServiceEncryptionKeyRollover({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### BackupPolicies_ListByDevice
Gets all the backup policies in a device.


```js
azure_arm_storsimple8000series.BackupPolicies_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupPolicyList](#backuppolicylist)

### BackupPolicies_Delete
Deletes the backup policy.


```js
azure_arm_storsimple8000series.BackupPolicies_Delete({
  "deviceName": "",
  "backupPolicyName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The name of the backup policy.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### BackupPolicies_Get
Gets the properties of the specified backup policy name.


```js
azure_arm_storsimple8000series.BackupPolicies_Get({
  "deviceName": "",
  "backupPolicyName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The name of backup policy to be fetched.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupPolicy](#backuppolicy)

### BackupPolicies_CreateOrUpdate
Creates or updates the backup policy.


```js
azure_arm_storsimple8000series.BackupPolicies_CreateOrUpdate({
  "deviceName": "",
  "backupPolicyName": "",
  "parameters": {
    "properties": {
      "volumeIds": []
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
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The name of the backup policy to be created/updated.
  * parameters **required** [BackupPolicy](#backuppolicy)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupPolicy](#backuppolicy)

### BackupPolicies_BackupNow
Backup the backup policy now.


```js
azure_arm_storsimple8000series.BackupPolicies_BackupNow({
  "deviceName": "",
  "backupPolicyName": "",
  "backupType": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The backup policy name.
  * backupType **required** `string`: The backup Type. This can be cloudSnapshot or localSnapshot.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### BackupSchedules_ListByBackupPolicy
Gets all the backup schedules in a backup policy.


```js
azure_arm_storsimple8000series.BackupSchedules_ListByBackupPolicy({
  "deviceName": "",
  "backupPolicyName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The backup policy name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupScheduleList](#backupschedulelist)

### BackupSchedules_Delete
Deletes the backup schedule.


```js
azure_arm_storsimple8000series.BackupSchedules_Delete({
  "deviceName": "",
  "backupPolicyName": "",
  "backupScheduleName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The backup policy name.
  * backupScheduleName **required** `string`: The name the backup schedule.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### BackupSchedules_Get
Gets the properties of the specified backup schedule name.


```js
azure_arm_storsimple8000series.BackupSchedules_Get({
  "deviceName": "",
  "backupPolicyName": "",
  "backupScheduleName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The backup policy name.
  * backupScheduleName **required** `string`: The name of the backup schedule to be fetched
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupSchedule](#backupschedule)

### BackupSchedules_CreateOrUpdate
Creates or updates the backup schedule.


```js
azure_arm_storsimple8000series.BackupSchedules_CreateOrUpdate({
  "deviceName": "",
  "backupPolicyName": "",
  "backupScheduleName": "",
  "parameters": {
    "properties": {
      "scheduleRecurrence": {
        "recurrenceType": "",
        "recurrenceValue": 0
      },
      "backupType": "",
      "retentionCount": 0,
      "startTime": "",
      "scheduleStatus": ""
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
  * deviceName **required** `string`: The device name
  * backupPolicyName **required** `string`: The backup policy name.
  * backupScheduleName **required** `string`: The backup schedule name.
  * parameters **required** [BackupSchedule](#backupschedule)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [BackupSchedule](#backupschedule)

### Backups_ListByDevice
Retrieves all the backups in a device.


```js
azure_arm_storsimple8000series.Backups_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
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
azure_arm_storsimple8000series.Backups_Delete({
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
  * deviceName **required** `string`: The device name
  * backupName **required** `string`: The backup name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Backups_Clone
Clones the backup element as a new volume.


```js
azure_arm_storsimple8000series.Backups_Clone({
  "deviceName": "",
  "backupName": "",
  "backupElementName": "",
  "parameters": {
    "targetDeviceId": "",
    "targetVolumeName": "",
    "targetAccessControlRecordIds": [],
    "backupElement": {
      "elementId": "",
      "elementName": "",
      "elementType": "",
      "sizeInBytes": 0,
      "volumeName": "",
      "volumeContainerId": ""
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
  * deviceName **required** `string`: The device name
  * backupName **required** `string`: The backup name.
  * backupElementName **required** `string`: The backup element name.
  * parameters **required** [CloneRequest](#clonerequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Backups_Restore
Restores the backup on the device.


```js
azure_arm_storsimple8000series.Backups_Restore({
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
  * deviceName **required** `string`: The device name
  * backupName **required** `string`: The backupSet name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_Deactivate
Deactivates the device.


```js
azure_arm_storsimple8000series.Devices_Deactivate({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### HardwareComponentGroups_ListByDevice
Lists the hardware component groups at device-level.


```js
azure_arm_storsimple8000series.HardwareComponentGroups_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [HardwareComponentGroupList](#hardwarecomponentgrouplist)

### HardwareComponentGroups_ChangeControllerPowerState
Changes the power state of the controller.


```js
azure_arm_storsimple8000series.HardwareComponentGroups_ChangeControllerPowerState({
  "deviceName": "",
  "hardwareComponentGroupName": "",
  "parameters": {
    "properties": {
      "action": "",
      "activeController": "",
      "controller0State": "",
      "controller1State": ""
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
  * deviceName **required** `string`: The device name
  * hardwareComponentGroupName **required** `string`: The hardware component group name.
  * parameters **required** [ControllerPowerStateChangeRequest](#controllerpowerstatechangerequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_InstallUpdates
Downloads and installs the updates on the device.


```js
azure_arm_storsimple8000series.Devices_InstallUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Jobs_ListByDevice
Gets all the jobs for specified device. With optional OData query parameters, a filtered set of jobs is returned.


```js
azure_arm_storsimple8000series.Jobs_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter `string`: OData Filter options

#### Output
* output [JobList](#joblist)

### Jobs_Get
Gets the details of the specified job name.


```js
azure_arm_storsimple8000series.Jobs_Get({
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
  * deviceName **required** `string`: The device name
  * jobName **required** `string`: The job Name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Job](#job)

### Jobs_Cancel
Cancels a job on the device.


```js
azure_arm_storsimple8000series.Jobs_Cancel({
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
  * deviceName **required** `string`: The device name
  * jobName **required** `string`: The jobName.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_ListFailoverSets
Returns all failover sets for a given device and their eligibility for participating in a failover. A failover set refers to a set of volume containers that need to be failed-over as a single unit to maintain data integrity.


```js
azure_arm_storsimple8000series.Devices_ListFailoverSets({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FailoverSetsList](#failoversetslist)

### Devices_ListMetrics
Gets the metrics for the specified device.


```js
azure_arm_storsimple8000series.Devices_ListMetrics({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter **required** `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### Devices_ListMetricDefinition
Gets the metric definitions for the specified device.


```js
azure_arm_storsimple8000series.Devices_ListMetricDefinition({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### DeviceSettings_GetNetworkSettings
Gets the network settings of the specified device.


```js
azure_arm_storsimple8000series.DeviceSettings_GetNetworkSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [NetworkSettings](#networksettings)

### DeviceSettings_UpdateNetworkSettings
Updates the network settings on the specified device.


```js
azure_arm_storsimple8000series.DeviceSettings_UpdateNetworkSettings({
  "deviceName": "",
  "parameters": {
    "properties": {}
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * parameters **required** [NetworkSettingsPatch](#networksettingspatch)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [NetworkSettings](#networksettings)

### Managers_GetDevicePublicEncryptionKey
Returns the public encryption key of the device.


```js
azure_arm_storsimple8000series.Managers_GetDevicePublicEncryptionKey({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [PublicKey](#publickey)

### Devices_ScanForUpdates
Scans for updates on the device.


```js
azure_arm_storsimple8000series.Devices_ScanForUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### DeviceSettings_GetSecuritySettings
Returns the Security properties of the specified device name.


```js
azure_arm_storsimple8000series.DeviceSettings_GetSecuritySettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [SecuritySettings](#securitysettings)

### DeviceSettings_UpdateSecuritySettings
Patch Security properties of the specified device name.


```js
azure_arm_storsimple8000series.DeviceSettings_UpdateSecuritySettings({
  "deviceName": "",
  "parameters": {
    "properties": {}
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * parameters **required** [SecuritySettingsPatch](#securitysettingspatch)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [SecuritySettings](#securitysettings)

### DeviceSettings_SyncRemotemanagementCertificate
sync Remote management Certificate between appliance and Service


```js
azure_arm_storsimple8000series.DeviceSettings_SyncRemotemanagementCertificate({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Alerts_SendTestEmail
Sends a test alert email.


```js
azure_arm_storsimple8000series.Alerts_SendTestEmail({
  "deviceName": "",
  "parameters": {
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
  * deviceName **required** `string`: The device name
  * parameters **required** [SendTestAlertEmailRequest](#sendtestalertemailrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### DeviceSettings_GetTimeSettings
Gets the time settings of the specified device.


```js
azure_arm_storsimple8000series.DeviceSettings_GetTimeSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [TimeSettings](#timesettings)

### DeviceSettings_CreateOrUpdateTimeSettings
Creates or updates the time settings of the specified device.


```js
azure_arm_storsimple8000series.DeviceSettings_CreateOrUpdateTimeSettings({
  "deviceName": "",
  "parameters": {
    "properties": {
      "timeZone": ""
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
  * deviceName **required** `string`: The device name
  * parameters **required** [TimeSettings](#timesettings)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [TimeSettings](#timesettings)

### Devices_GetUpdateSummary
Returns the update summary of the specified device name.


```js
azure_arm_storsimple8000series.Devices_GetUpdateSummary({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Updates](#updates)

### VolumeContainers_ListByDevice
Gets all the volume containers in a device.


```js
azure_arm_storsimple8000series.VolumeContainers_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [VolumeContainerList](#volumecontainerlist)

### VolumeContainers_Delete
Deletes the volume container.


```js
azure_arm_storsimple8000series.VolumeContainers_Delete({
  "deviceName": "",
  "volumeContainerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The name of the volume container.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### VolumeContainers_Get
Gets the properties of the specified volume container name.


```js
azure_arm_storsimple8000series.VolumeContainers_Get({
  "deviceName": "",
  "volumeContainerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The name of the volume container.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [VolumeContainer](#volumecontainer)

### VolumeContainers_CreateOrUpdate
Creates or updates the volume container.


```js
azure_arm_storsimple8000series.VolumeContainers_CreateOrUpdate({
  "deviceName": "",
  "volumeContainerName": "",
  "parameters": {
    "properties": {
      "storageAccountCredentialId": ""
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
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The name of the volume container.
  * parameters **required** [VolumeContainer](#volumecontainer)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [VolumeContainer](#volumecontainer)

### VolumeContainers_ListMetrics
Gets the metrics for the specified volume container.


```js
azure_arm_storsimple8000series.VolumeContainers_ListMetrics({
  "deviceName": "",
  "volumeContainerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter **required** `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### VolumeContainers_ListMetricDefinition
Gets the metric definitions for the specified volume container.


```js
azure_arm_storsimple8000series.VolumeContainers_ListMetricDefinition({
  "deviceName": "",
  "volumeContainerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### Volumes_ListByVolumeContainer
Retrieves all the volumes in a volume container.


```js
azure_arm_storsimple8000series.Volumes_ListByVolumeContainer({
  "deviceName": "",
  "volumeContainerName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [VolumeList](#volumelist)

### Volumes_Delete
Deletes the volume.


```js
azure_arm_storsimple8000series.Volumes_Delete({
  "deviceName": "",
  "volumeContainerName": "",
  "volumeName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * volumeName **required** `string`: The volume name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Volumes_Get
Returns the properties of the specified volume name.


```js
azure_arm_storsimple8000series.Volumes_Get({
  "deviceName": "",
  "volumeContainerName": "",
  "volumeName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * volumeName **required** `string`: The volume name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Volume](#volume)

### Volumes_CreateOrUpdate
Creates or updates the volume.


```js
azure_arm_storsimple8000series.Volumes_CreateOrUpdate({
  "deviceName": "",
  "volumeContainerName": "",
  "volumeName": "",
  "parameters": {
    "properties": {
      "sizeInBytes": 0,
      "volumeType": "",
      "accessControlRecordIds": [],
      "volumeStatus": "",
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
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * volumeName **required** `string`: The volume name.
  * parameters **required** [Volume](#volume)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [Volume](#volume)

### Volumes_ListMetrics
Gets the metrics for the specified volume.


```js
azure_arm_storsimple8000series.Volumes_ListMetrics({
  "deviceName": "",
  "volumeContainerName": "",
  "volumeName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * volumeName **required** `string`: The volume name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter **required** `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### Volumes_ListMetricDefinition
Gets the metric definitions for the specified volume.


```js
azure_arm_storsimple8000series.Volumes_ListMetricDefinition({
  "deviceName": "",
  "volumeContainerName": "",
  "volumeName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * volumeContainerName **required** `string`: The volume container name.
  * volumeName **required** `string`: The volume name.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [MetricDefinitionList](#metricdefinitionlist)

### Volumes_ListByDevice
Retrieves all the volumes in a device.


```js
azure_arm_storsimple8000series.Volumes_ListByDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [VolumeList](#volumelist)

### Devices_Failover
Failovers a set of volume containers from a specified source device to a target device.


```js
azure_arm_storsimple8000series.Devices_Failover({
  "sourceDeviceName": "",
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sourceDeviceName **required** `string`: The source device name on which failover is performed.
  * parameters **required** [FailoverRequest](#failoverrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Devices_ListFailoverTargets
Given a list of volume containers to be failed over from a source device, this method returns the eligibility result, as a failover target, for all devices under that resource.


```js
azure_arm_storsimple8000series.Devices_ListFailoverTargets({
  "sourceDeviceName": "",
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sourceDeviceName **required** `string`: The source device name on which failover is performed.
  * parameters **required** [ListFailoverTargetsRequest](#listfailovertargetsrequest)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [FailoverTargetsList](#failovertargetslist)

### Managers_GetEncryptionSettings
Returns the encryption settings of the manager.


```js
azure_arm_storsimple8000series.Managers_GetEncryptionSettings({
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
azure_arm_storsimple8000series.Managers_DeleteExtendedInfo({
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
azure_arm_storsimple8000series.Managers_GetExtendedInfo({
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
azure_arm_storsimple8000series.Managers_UpdateExtendedInfo({
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ManagerExtendedInfo](#managerextendedinfo)
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
azure_arm_storsimple8000series.Managers_CreateExtendedInfo({
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ManagerExtendedInfo](#managerextendedinfo)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [ManagerExtendedInfo](#managerextendedinfo)

### Managers_ListFeatureSupportStatus
Lists the features and their support status


```js
azure_arm_storsimple8000series.Managers_ListFeatureSupportStatus({
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
* output [FeatureList](#featurelist)

### Jobs_ListByManager
Gets all the jobs for the specified manager. With optional OData query parameters, a filtered set of jobs is returned.


```js
azure_arm_storsimple8000series.Jobs_ListByManager({
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

### Managers_GetActivationKey
Returns the activation key of the manager.


```js
azure_arm_storsimple8000series.Managers_GetActivationKey({
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
* output [Key](#key)

### Managers_GetPublicEncryptionKey
Returns the symmetric encrypted public encryption key of the manager.


```js
azure_arm_storsimple8000series.Managers_GetPublicEncryptionKey({
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

### Managers_ListMetrics
Gets the metrics for the specified manager.


```js
azure_arm_storsimple8000series.Managers_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version
  * $filter **required** `string`: OData Filter options

#### Output
* output [MetricList](#metriclist)

### Managers_ListMetricDefinition
Gets the metric definitions for the specified manager.


```js
azure_arm_storsimple8000series.Managers_ListMetricDefinition({
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

### CloudAppliances_Provision
Provisions cloud appliance.


```js
azure_arm_storsimple8000series.CloudAppliances_Provision({
  "parameters": {
    "name": "",
    "vnetRegion": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [CloudAppliance](#cloudappliance)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### Managers_RegenerateActivationKey
Re-generates and returns the activation key of the manager.


```js
azure_arm_storsimple8000series.Managers_RegenerateActivationKey({
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
* output [Key](#key)

### StorageAccountCredentials_ListByManager
Gets all the storage account credentials in a manager.


```js
azure_arm_storsimple8000series.StorageAccountCredentials_ListByManager({
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
Deletes the storage account credential.


```js
azure_arm_storsimple8000series.StorageAccountCredentials_Delete({
  "storageAccountCredentialName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storageAccountCredentialName **required** `string`: The name of the storage account credential.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
*Output schema unknown*

### StorageAccountCredentials_Get
Gets the properties of the specified storage account credential name.


```js
azure_arm_storsimple8000series.StorageAccountCredentials_Get({
  "storageAccountCredentialName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storageAccountCredentialName **required** `string`: The name of storage account credential to be fetched.
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageAccountCredential](#storageaccountcredential)

### StorageAccountCredentials_CreateOrUpdate
Creates or updates the storage account credential.


```js
azure_arm_storsimple8000series.StorageAccountCredentials_CreateOrUpdate({
  "storageAccountCredentialName": "",
  "parameters": {
    "properties": {
      "endPoint": "",
      "sslStatus": ""
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
  * storageAccountCredentialName **required** `string`: The storage account credential name.
  * parameters **required** [StorageAccountCredential](#storageaccountcredential)
  * subscriptionId **required** `string`: The subscription id
  * resourceGroupName **required** `string`: The resource group name
  * managerName **required** `string`: The manager name
  * api-version **required** `string`: The api version

#### Output
* output [StorageAccountCredential](#storageaccountcredential)



## Definitions

### AccessControlRecord
* AccessControlRecord `object`: The access control record.
  * properties **required** [AccessControlRecordProperties](#accesscontrolrecordproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### AccessControlRecordList
* AccessControlRecordList `object`: The collection of access control records.
  * value **required** `array`: The value.
    * items [AccessControlRecord](#accesscontrolrecord)

### AccessControlRecordProperties
* AccessControlRecordProperties `object`: The properties of access control record.
  * initiatorName **required** `string`: The iSCSI initiator name (IQN).
  * volumeCount `integer`: The number of volumes using the access control record.

### AcsConfiguration
* AcsConfiguration `object`: The ACS configuration.
  * namespace **required** `string`: The namespace.
  * realm **required** `string`: The realm.
  * serviceUrl **required** `string`: The service URL.

### Alert
* Alert `object`: The alert.
  * properties **required** [AlertProperties](#alertproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### AlertErrorDetails
* AlertErrorDetails `object`: The details of the error for which the alert was raised
  * errorCode `string`: The error code
  * errorMessage `string`: The error message
  * occurences `integer`: The number of occurences

### AlertFilter
* AlertFilter `object`: The OData filters to be used for Alert
  * appearedOnTime `string`: Specifies the appeared time (in UTC) of the alerts to be filtered. Only 'Greater-Than' and 'Lesser-Than' operators are supported for this property.
  * severity `string` (values: Informational, Warning, Critical): Specifies the severity of the alerts to be filtered. Only 'Equality' operator is supported for this property.
  * sourceName `string`: Specifies the source name of the alerts to be filtered. Only 'Equality' operator is supported for this property.
  * sourceType `string` (values: Resource, Device): Specifies the source type of the alerts to be filtered. Only 'Equality' operator is supported for this property.
  * status `string` (values: Active, Cleared): Specifies the status of the alerts to be filtered. Only 'Equality' operator is supported for this property.

### AlertList
* AlertList `object`: The collection of alerts.
  * nextLink `string`: The URI of the next page of alerts.
  * value **required** `array`: The value.
    * items [Alert](#alert)

### AlertNotificationProperties
* AlertNotificationProperties `object`: The properties of the alert notification settings.
  * additionalRecipientEmailList `array`: The alert notification email list.
    * items `string`
  * alertNotificationCulture `string`: The alert notification culture.
  * emailNotification **required** `string` (values: Enabled, Disabled): Indicates whether email notification enabled or not.
  * notificationToServiceOwners `string` (values: Enabled, Disabled): The value indicating whether alert notification enabled for admin or not.

### AlertProperties
* AlertProperties `object`: The properties of alert
  * alertType **required** `string`: The type of the alert
  * appearedAtSourceTime **required** `string`: The source time at which the alert was raised
  * appearedAtTime **required** `string`: The UTC time at which the alert was raised
  * clearedAtSourceTime `string`: The source time at which the alert was cleared
  * clearedAtTime `string`: The UTC time at which the alert was cleared
  * detailedInformation `object`: More details about the alert
  * errorDetails [AlertErrorDetails](#alerterrordetails)
  * recommendation `string`: The recommended action for the issue raised in the alert
  * resolutionReason `string`: The reason for resolving the alert
  * scope **required** `string` (values: Resource, Device): The scope of the alert
  * severity **required** `string` (values: Informational, Warning, Critical): The severity of the alert
  * source **required** [AlertSource](#alertsource)
  * status **required** `string` (values: Active, Cleared): The current status of the alert
  * title **required** `string`: The title of the alert

### AlertSettings
* AlertSettings `object`: The alert settings.
  * properties **required** [AlertNotificationProperties](#alertnotificationproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### AlertSource
* AlertSource `object`: The source details at which the alert was raised
  * alertSourceType `string` (values: Resource, Device): The source type of the alert
  * name `string`: The name of the source
  * timeZone `string`: The time zone of the source

### AsymmetricEncryptedSecret
* AsymmetricEncryptedSecret `object`: Represent the secrets intended for encryption with asymmetric key pair.
  * encryptionAlgorithm **required** `string` (values: None, AES256, RSAES_PKCS1_v_1_5): The algorithm used to encrypt "Value".
  * encryptionCertThumbprint `string`: Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null.
  * value **required** `string`: The value of the secret.

### AvailableProviderOperation
* AvailableProviderOperation `object`: Represents available provider operation.
  * display [AvailableProviderOperationDisplay](#availableprovideroperationdisplay)
  * name `string`: The name of the operation being performed on a particular object. Name format: "{resourceProviderNamespace}/{resourceType}/{read|write|delete|action}". Eg. Microsoft.StorSimple/managers/devices/volumeContainers/read, Microsoft.StorSimple/managers/devices/alerts/clearAlerts/action
  * origin `string`: The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is "user,system"
  * properties [AvailableProviderOperationProperties](#availableprovideroperationproperties)

### AvailableProviderOperationDisplay
* AvailableProviderOperationDisplay `object`: Contains the localized display information for this particular operation/action. These value will be used by several clients for (a) custom role definitions for RBAC, (b) complex query filters for the event service and (c) audit history/records for management operations.
  * description `string`: The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise - it will be used in tool tips and detailed views.
  * operation `string`: The localized friendly name for the operation, as it should be shown to the user. It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing and include the entity/resource to which it applies.
  * provider `string`: The localized friendly form of the resource provider name - it is expected to also include the publisher/company responsible. It should use Title Casing and begin with 'Microsoft' for 1st party services.
  * resource `string`: The localized friendly form of the resource type related to this action/operation - it should match the public documentation for the resource provider. It should use Title Casing - for examples, please refer to the 'name' section.

### AvailableProviderOperationList
* AvailableProviderOperationList `object`: List of available provider operations.
  * nextLink `string`: The NextLink.
  * value **required** `array`: The value.
    * items [AvailableProviderOperation](#availableprovideroperation)

### AvailableProviderOperationProperties
* AvailableProviderOperationProperties `object`: Represents properties of AvailableProviderOperation

### Backup
* Backup `object`: The backup.
  * properties **required** [BackupProperties](#backupproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### BackupElement
* BackupElement `object`: The backup element.
  * elementId **required** `string`: The path ID that uniquely identifies the backup element.
  * elementName **required** `string`: The name of the backup element.
  * elementType **required** `string`: The hierarchical type of the backup element.
  * sizeInBytes **required** `integer`: The size in bytes.
  * volumeContainerId **required** `string`: The path ID of the volume container.
  * volumeName **required** `string`: The name of the volume.
  * volumeType `string` (values: Tiered, Archival, LocallyPinned): The volume type.

### BackupFilter
* BackupFilter `object`: The OData filters to be used for backups.
  * backupPolicyId `string`: Specifies the backupPolicyId of the backups to be filtered. Only 'Equality' operator is supported for this property.
  * createdTime `string`: Specifies the creation time of the backups to be filtered. Only 'Greater Than or Equal To' and 'Lesser Than or Equal To' operators are supported for this property.
  * volumeId `string`: Specifies the volumeId of the backups to be filtered. Only 'Equality' operator is supported for this property.

### BackupList
* BackupList `object`: The collection of backups.
  * nextLink `string`: The NextLink.
  * value **required** `array`: The value.
    * items [Backup](#backup)

### BackupPolicy
* BackupPolicy `object`: The backup policy.
  * properties **required** [BackupPolicyProperties](#backuppolicyproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### BackupPolicyList
* BackupPolicyList `object`: The collection of backup policies.
  * value **required** `array`: The value.
    * items [BackupPolicy](#backuppolicy)

### BackupPolicyProperties
* BackupPolicyProperties `object`: The properties of the backup policy.
  * backupPolicyCreationType `string` (values: BySaaS, BySSM): The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
  * lastBackupTime `string`: The time of the last backup for the backup policy.
  * nextBackupTime `string`: The time of the next backup for the backup policy.
  * scheduledBackupStatus `string` (values: Disabled, Enabled): Indicates whether atleast one of the schedules in the backup policy is active or not.
  * schedulesCount `integer`: The count of schedules the backup policy contains.
  * ssmHostName `string`: If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
  * volumeIds **required** `array`: The path IDs of the volumes which are part of the backup policy.
    * items `string`

### BackupProperties
* BackupProperties `object`: The properties of the backup.
  * backupJobCreationType `string` (values: Adhoc, BySchedule, BySSM): The backup job creation type.
  * backupPolicyId `string`: The path ID of the backup policy.
  * backupType `string` (values: LocalSnapshot, CloudSnapshot): The type of the backup.
  * createdOn **required** `string`: The time when the backup was created.
  * elements **required** `array`: The backup elements.
    * items [BackupElement](#backupelement)
  * sizeInBytes **required** `integer`: The backup size in bytes.
  * ssmHostName `string`: The StorSimple Snapshot Manager host name.

### BackupSchedule
* BackupSchedule `object`: The backup schedule.
  * properties **required** [BackupScheduleProperties](#backupscheduleproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### BackupScheduleList
* BackupScheduleList `object`: The backup schedule list.
  * value **required** `array`: The value.
    * items [BackupSchedule](#backupschedule)

### BackupScheduleProperties
* BackupScheduleProperties `object`: The properties of the backup schedule.
  * backupType **required** `string` (values: LocalSnapshot, CloudSnapshot): The type of backup which needs to be taken.
  * lastSuccessfulRun `string`: The last successful backup run which was triggered for the schedule.
  * retentionCount **required** `integer`: The number of backups to be retained.
  * scheduleRecurrence **required** [ScheduleRecurrence](#schedulerecurrence)
  * scheduleStatus **required** `string` (values: Enabled, Disabled): The schedule status.
  * startTime **required** `string`: The start time of the schedule.

### BandwidthRateSettingProperties
* BandwidthRateSettingProperties `object`: The properties of the bandwidth setting.
  * schedules **required** `array`: The schedules.
    * items [BandwidthSchedule](#bandwidthschedule)
  * volumeCount `integer`: The number of volumes that uses the bandwidth setting.

### BandwidthSchedule
* BandwidthSchedule `object`: The schedule for bandwidth setting.
  * days **required** `array`: The days of the week when this schedule is applicable.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * rateInMbps **required** `integer`: The rate in Mbps.
  * start **required** [Time](#time)
  * stop **required** [Time](#time)

### BandwidthSetting
* BandwidthSetting `object`: The bandwidth setting.
  * properties **required** [BandwidthRateSettingProperties](#bandwidthratesettingproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### BandwidthSettingList
* BandwidthSettingList `object`: The collection of bandwidth setting entities.
  * value **required** `array`: The value.
    * items [BandwidthSetting](#bandwidthsetting)

### BaseModel
* BaseModel `object`: Represents the base class for all other ARM object models
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### ChapSettings
* ChapSettings `object`: The Challenge-Handshake Authentication Protocol (CHAP) settings.
  * initiatorSecret [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * initiatorUser `string`: The CHAP initiator user.
  * targetSecret [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * targetUser `string`: The CHAP target user.

### ClearAlertRequest
* ClearAlertRequest `object`: The request for clearing the alert
  * alerts **required** `array`: The list of alert IDs to be cleared
    * items `string`
  * resolutionMessage `string`: The resolution message while clearing the alert

### CloneRequest
* CloneRequest `object`: The clone job request.
  * backupElement **required** [BackupElement](#backupelement)
  * targetAccessControlRecordIds **required** `array`: The list of path IDs of the access control records to be associated to the new cloned volume.
    * items `string`
  * targetDeviceId **required** `string`: The path ID of the device which will act as the clone target.
  * targetVolumeName **required** `string`: The name of the new volume which will be created and the backup will be cloned into.

### CloudAppliance
* CloudAppliance `object`: The cloud appliance.
  * isVnetDnsConfigured `boolean`: Indicates whether virtual network used is configured with DNS or not.
  * isVnetExpressConfigured `boolean`: Indicates whether virtual network used is configured with express route or not.
  * modelNumber `string`: The model number.
  * name **required** `string`: The name.
  * storageAccountName `string`: The name of the storage account.
  * storageAccountType `string`: The type of the storage account.
  * subnetName `string`: The name of the subnet.
  * vmImageName `string`: The name of the virtual machine image.
  * vmType `string`: The type of the virtual machine.
  * vnetName `string`: The name of the virtual network.
  * vnetRegion **required** `string`: The virtual network region.

### CloudApplianceConfiguration
* CloudApplianceConfiguration `object`: The cloud appliance configuration
  * properties **required** [CloudApplianceConfigurationProperties](#cloudapplianceconfigurationproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### CloudApplianceConfigurationList
* CloudApplianceConfigurationList `object`: The cloud appliance configuration list
  * value **required** `array`: The value.
    * items [CloudApplianceConfiguration](#cloudapplianceconfiguration)

### CloudApplianceConfigurationProperties
* CloudApplianceConfigurationProperties `object`: The properties of cloud appliance configuration.
  * acsConfiguration **required** [AcsConfiguration](#acsconfiguration)
  * cloudPlatform **required** `string`: The cloud platform.
  * modelNumber **required** `string`: The model number.
  * supportedRegions **required** `array`: The supported regions.
    * items `string`
  * supportedStorageAccountTypes **required** `array`: The supported storage account types.
    * items `string`
  * supportedVmImages **required** `array`: The supported virtual machine images.
    * items [VmImage](#vmimage)
  * supportedVmTypes **required** `array`: The supported virtual machine types.
    * items `string`

### CloudApplianceSettings
* CloudApplianceSettings `object`: The cloud appliance settings.
  * channelIntegrityKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * serviceDataEncryptionKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

### ConfigureDeviceRequest
* ConfigureDeviceRequest `object`: The mandatory device configuration request.
  * properties **required** [ConfigureDeviceRequestProperties](#configuredevicerequestproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### ConfigureDeviceRequestProperties
* ConfigureDeviceRequestProperties `object`: The properties of the configure device request.
  * currentDeviceName **required** `string`: The current name of the device.
  * dnsSettings [SecondaryDNSSettings](#secondarydnssettings)
  * friendlyName **required** `string`: The friendly name for the device.
  * networkInterfaceData0Settings [NetworkInterfaceData0Settings](#networkinterfacedata0settings)
  * timeZone **required** `string`: The device time zone. For eg: "Pacific Standard Time"

### ControllerPowerStateChangeRequest
* ControllerPowerStateChangeRequest `object`: The controller power state change request.
  * properties **required** [ControllerPowerStateChangeRequestProperties](#controllerpowerstatechangerequestproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### ControllerPowerStateChangeRequestProperties
* ControllerPowerStateChangeRequestProperties `object`: The properties of the controller power state change request.
  * action **required** `string` (values: Start, Restart, Shutdown): The power state that the request is expecting for the controller of the device.
  * activeController **required** `string` (values: Unknown, None, Controller0, Controller1): The active controller that the request is expecting on the device.
  * controller0State **required** `string` (values: NotPresent, PoweredOff, Ok, Recovering, Warning, Failure): The controller 0's status that the request is expecting on the device.
  * controller1State **required** `string` (values: NotPresent, PoweredOff, Ok, Recovering, Warning, Failure): The controller 1's status that the request is expecting on the device.

### DNSSettings
* DNSSettings `object`: The DNS(Domain Name Server) settings of a device.
  * primaryDnsServer `string`: The primary IPv4 DNS server for the device
  * primaryIpv6DnsServer `string`: The primary IPv6 DNS server for the device
  * secondaryDnsServers `array`: The secondary IPv4 DNS server for the device
    * items `string`
  * secondaryIpv6DnsServers `array`: The secondary IPv6 DNS server for the device
    * items `string`

### DataStatistics
* DataStatistics `object`: The additional details related to the data related statistics of a job. Currently applicable only for Backup, Clone and Restore jobs.
  * cloudData `integer`: The number of bytes of data written to cloud, as part of the job.
  * processedData `integer`: The number of bytes of data processed till now, as part of the job.
  * throughput `integer`: The average throughput of data processed(bytes/sec), as part of the job.
  * totalData `integer`: The total bytes of data to be processed, as part of the job.

### Device
* Device `object`: The StorSimple device.
  * properties **required** [DeviceProperties](#deviceproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### DeviceDetails
* DeviceDetails `object`: The additional device details regarding the end point count and volume container count.
  * endpointCount `integer`: The total number of endpoints that are currently on the device ( i.e. number of volumes).
  * volumeContainerCount `integer`: The total number of volume containers on the device.

### DeviceList
* DeviceList `object`: The collection of devices.
  * value **required** `array`: The value.
    * items [Device](#device)

### DevicePatch
* DevicePatch `object`: The device patch.
  * properties **required** [DevicePatchProperties](#devicepatchproperties)

### DevicePatchProperties
* DevicePatchProperties `object`: The properties of the device patch.
  * deviceDescription `string`: Short description given for the device

### DeviceProperties
* DeviceProperties `object`: The properties of the StorSimple device.
  * activationTime **required** `string`: The UTC time at which the device was activated
  * activeController **required** `string` (values: Unknown, None, Controller0, Controller1): The identifier of the active controller of the device.
  * agentGroupVersion `integer`: The device agent group version.
  * availableLocalStorageInBytes `integer`: The storage in bytes that is available locally on the device.
  * availableTieredStorageInBytes `integer`: The storage in bytes that is available on the device for tiered volumes.
  * culture **required** `string`: The language culture setting on the device. For eg: "en-US"
  * details [DeviceDetails](#devicedetails)
  * deviceConfigurationStatus **required** `string` (values: Complete, Pending): The current configuration status of the device.
  * deviceDescription **required** `string`: The device description.
  * deviceLocation `string`: The location of the virtual appliance.
  * deviceSoftwareVersion **required** `string`: The version number of the software running on the device.
  * deviceType **required** `string` (values: Invalid, Series8000VirtualAppliance, Series8000PhysicalAppliance): The type of the device.
  * friendlyName **required** `string`: The friendly name of the device.
  * friendlySoftwareName `string`: The friendly name of the software running on the device.
  * friendlySoftwareVersion **required** `string`: The device friendly software version.
  * modelDescription **required** `string`: The device model.
  * networkInterfaceCardCount `integer`: The number of network interface cards
  * provisionedLocalStorageInBytes `integer`: The storage in bytes used for locally pinned volumes on the device (including additional local reservation).
  * provisionedTieredStorageInBytes `integer`: The storage in bytes that has been provisioned on the device for tiered volumes.
  * provisionedVolumeSizeInBytes `integer`: Total capacity in bytes of tiered and locally pinned volumes on the device
  * rolloverDetails [DeviceRolloverDetails](#devicerolloverdetails)
  * serialNumber **required** `string`: The serial number.
  * status **required** `string` (values: Unknown, Online, Offline, Deactivated, RequiresAttention, MaintenanceMode, Creating, Provisioning, Deactivating, Deleted, ReadyToSetup): The current status of the device.
  * targetIqn **required** `string`: The target IQN.
  * totalTieredStorageInBytes `integer`: The total tiered storage available on the device in bytes.
  * usingStorageInBytes `integer`: The storage in bytes that is currently being used on the device, including both local and cloud.
  * virtualMachineApiType `string` (values: Classic, Arm): The virtual machine API type.

### DeviceRolloverDetails
* DeviceRolloverDetails `object`: The additional device details for the service data encryption key rollover.
  * authorizationEligibility `string` (values: InEligible, Eligible): The eligibility status of device for service data encryption key rollover.
  * authorizationStatus `string` (values: Disabled, Enabled): The authorization status of the device for service data encryption key rollover.
  * inEligibilityReason `string` (values: DeviceNotOnline, NotSupportedAppliance, RolloverPending): The reason for inEligibility of device, in case it's not eligible for service data encryption key rollover.

### DimensionFilter
* DimensionFilter `object`: The dimension filter.
  * name `string`: Specifies the dimension name. E.g., NetworkInterface. Valid values are the ones specified in the field "dimensions" in the ListMetricDefinitions call. Only 'Equality' operator is supported for this property.
  * values `string`: Specifies the dimension value. E.g., Data0. Valid values are the ones returned in the field "dimensions" in the ListMetricDefinitions call. Only 'Equality' operator is supported for this property.

### EncryptionSettings
* EncryptionSettings `object`: The encryption settings.
  * properties **required** [EncryptionSettingsProperties](#encryptionsettingsproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### EncryptionSettingsProperties
* EncryptionSettingsProperties `object`: The properties of encryption settings.
  * encryptionStatus **required** `string` (values: Enabled, Disabled): The encryption status to indicates if encryption is enabled or not.
  * keyRolloverStatus **required** `string` (values: Required, NotRequired): The key rollover status to indicates if key rollover is required or not. If secret's encryption has been upgraded, then it requires key rollover.

### FailoverRequest
* FailoverRequest `object`: The request object for triggering a failover of volume containers, from a source device to a target device.
  * targetDeviceId `string`: The ARM path ID of the device which will act as the failover target.
  * volumeContainers `array`: The list of path IDs of the volume containers which needs to be failed-over to the target device.
    * items `string`

### FailoverSet
* FailoverSet `object`: The failover set on a device.
  * eligibilityResult [FailoverSetEligibilityResult](#failoverseteligibilityresult)
  * volumeContainers `array`: The list of meta data of volume containers, which are part of the failover set.
    * items [VolumeContainerFailoverMetadata](#volumecontainerfailovermetadata)

### FailoverSetEligibilityResult
* FailoverSetEligibilityResult `object`: The eligibility result of failover set, for failover.
  * errorMessage `string`: The error message, if the failover set is not eligible for failover.
  * isEligibleForFailover `boolean`: Represents if this failover set is eligible for failover or not.

### FailoverSetsList
* FailoverSetsList `object`: The list of failover sets.
  * value `array`: The list of failover sets.
    * items [FailoverSet](#failoverset)

### FailoverTarget
* FailoverTarget `object`: Represents the eligibility of a device as a failover target device.
  * availableLocalStorageInBytes `integer`: The amount of free local storage available on the device in bytes.
  * availableTieredStorageInBytes `integer`: The amount of free tiered storage available for the device in bytes.
  * dataContainersCount `integer`: The count of datacontainers on the device.
  * deviceId `string`: The path ID of the device.
  * deviceLocation `string`: The geo location (applicable only for cloud appliances) of the device.
  * deviceSoftwareVersion `string`: The software version of the device.
  * deviceStatus `string` (values: Unknown, Online, Offline, Deactivated, RequiresAttention, MaintenanceMode, Creating, Provisioning, Deactivating, Deleted, ReadyToSetup): The status of the device.
  * eligibilityResult [TargetEligibilityResult](#targeteligibilityresult)
  * friendlyDeviceSoftwareVersion `string`: The friendly name for the current version of software on the device.
  * modelDescription `string`: The model number of the device.
  * volumesCount `integer`: The count of volumes on the device.

### FailoverTargetsList
* FailoverTargetsList `object`: The list of all devices in a resource and their eligibility status as a failover target device.
  * value `array`: The list of all the failover targets.
    * items [FailoverTarget](#failovertarget)

### Feature
* Feature `object`: The feature.
  * name **required** `string`: The name of the feature.
  * status **required** `string` (values: NotAvailable, UnsupportedDeviceVersion, Supported): The feature support status.

### FeatureFilter
* FeatureFilter `object`: The OData filter to be used for features.
  * deviceId `string`: Specifies the device ID for which the features are required. Only 'Equality' operator is supported for this property.

### FeatureList
* FeatureList `object`: The collections of features.
  * value **required** `array`: The value.
    * items [Feature](#feature)

### HardwareComponent
* HardwareComponent `object`: The hardware component.
  * componentId **required** `string`: The component ID.
  * displayName **required** `string`: The display name of the hardware component.
  * status **required** `string` (values: Unknown, NotPresent, PoweredOff, Ok, Recovering, Warning, Failure): The status of the hardware component.
  * statusDisplayName **required** `string`: The display name of the status of hardware component.

### HardwareComponentGroup
* HardwareComponentGroup `object`: The hardware component group.
  * properties **required** [HardwareComponentGroupProperties](#hardwarecomponentgroupproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### HardwareComponentGroupList
* HardwareComponentGroupList `object`: The collection of hardware component groups.
  * value **required** `array`: The value.
    * items [HardwareComponentGroup](#hardwarecomponentgroup)

### HardwareComponentGroupProperties
* HardwareComponentGroupProperties `object`: The properties of hardware component group.
  * components **required** `array`: The list of hardware components.
    * items [HardwareComponent](#hardwarecomponent)
  * displayName **required** `string`: The display name the hardware component group.
  * lastUpdatedTime **required** `string`: The last updated time.

### Job
* Job `object`: The job.
  * endTime `string`: The UTC time at which the job completed.
  * error [JobErrorDetails](#joberrordetails)
  * percentComplete **required** `integer`: The percentage of the job that is already complete.
  * properties [JobProperties](#jobproperties)
  * startTime `string`: The UTC time at which the job was started.
  * status **required** `string` (values: Running, Succeeded, Failed, Canceled): The current status of the job.
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### JobErrorDetails
* JobErrorDetails `object`: The job error details. Contains list of job error items.
  * code **required** `string`: The error code intended for programmatic access.
  * errorDetails `array`: The error details.
    * items [JobErrorItem](#joberroritem)
  * message **required** `string`: The error message intended to describe the error in detail.

### JobErrorItem
* JobErrorItem `object`: The job error items.
  * code **required** `string`: The error code intended for programmatic access.
  * message **required** `string`: The error message intended to describe the error in detail.
  * recommendations `array`: The recommended actions.
    * items `string`

### JobFilter
* JobFilter `object`: The OData filter to be used for jobs.
  * jobType `string`: Specifies the type of the jobs to be filtered. For e.g., "ScheduledBackup", "ManualBackup", "RestoreBackup", "CloneVolume", "FailoverVolumeContainers", "CreateLocallyPinnedVolume", "ModifyVolume", "InstallUpdates", "SupportPackageLogs", or "CreateCloudAppliance". Only 'Equality' operator can be used for this property.
  * startTime `string`: Specifies the start time of the jobs to be filtered.  Only 'Greater Than or Equal To' and 'Lesser Than or Equal To' operators are supported for this property.
  * status `string`: Specifies the status of the jobs to be filtered. For e.g., "Running", "Succeeded", "Failed" or "Canceled". Only 'Equality' operator is supported for this property.

### JobList
* JobList `object`: The collection of jobs.
  * nextLink `string`: The NextLink.
  * value **required** `array`: The value.
    * items [Job](#job)

### JobProperties
* JobProperties `object`: The properties of the job.
  * backupPointInTime `string`: The time of the backup used for the failover.
  * backupType `string` (values: LocalSnapshot, CloudSnapshot): The backup type (CloudSnapshot | LocalSnapshot). Applicable only for backup jobs.
  * dataStats [DataStatistics](#datastatistics)
  * deviceId `string`: The device ID in which the job ran.
  * entityLabel `string`: The entity identifier for which the job ran.
  * entityType `string`: The entity type for which the job ran.
  * isCancellable `boolean`: Represents whether the job is cancellable or not.
  * jobStages `array`: The job stages.
    * items [JobStage](#jobstage)
  * jobType **required** `string` (values: ScheduledBackup, ManualBackup, RestoreBackup, CloneVolume, FailoverVolumeContainers, CreateLocallyPinnedVolume, ModifyVolume, InstallUpdates, SupportPackageLogs, CreateCloudAppliance): The type of the job.
  * sourceDeviceId `string`: The source device ID of the failover job.

### JobStage
* JobStage `object`: The details about the specific stage of a job.
  * detail `string`: The details of the stage.
  * errorCode `string`: The error code of the stage if any.
  * message `string`: The message of the job stage.
  * stageStatus **required** `string` (values: Running, Succeeded, Failed, Canceled): The stage status.

### Key
* Key `object`: The key.
  * activationKey **required** `string`: The activation key for the device.

### ListFailoverTargetsRequest
* ListFailoverTargetsRequest `object`: The request object for fetching the list of failover targets (eligible devices for failover).
  * volumeContainers `array`: The list of path IDs of the volume containers that needs to be failed-over, for which we want to fetch the eligible targets.
    * items `string`

### Manager
* Manager `object`: The StorSimple Manager.
  * etag `string`: The etag of the manager.
  * properties [ManagerProperties](#managerproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The geo location of the resource.
  * name `string`: The resource name.
  * tags `object`: The tags attached to the resource.
  * type `string`: The resource type.

### ManagerExtendedInfo
* ManagerExtendedInfo `object`: The extended info of the manager.
  * etag `string`: The etag of the resource.
  * properties [ManagerExtendedInfoProperties](#managerextendedinfoproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### ManagerExtendedInfoProperties
* ManagerExtendedInfoProperties `object`: The properties of the manager extended info.
  * algorithm **required** `string`: Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
  * encryptionKey `string`: Represents the CEK of the resource.
  * encryptionKeyThumbprint `string`: Represents the Cert thumbprint that was used to encrypt the CEK.
  * integrityKey **required** `string`: Represents the CIK of the resource.
  * portalCertificateThumbprint `string`: Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
  * version `string`: The version of the extended info being persisted.

### ManagerIntrinsicSettings
* ManagerIntrinsicSettings `object`: Intrinsic settings which refers to the type of the Storsimple Manager.
  * type **required** `string` (values: GardaV1, HelsinkiV1): The type of StorSimple Manager.

### ManagerList
* ManagerList `object`: The list of StorSimple Managers.
  * value **required** `array`: The list of storsimple managers.
    * items [Manager](#manager)

### ManagerPatch
* ManagerPatch `object`: The StorSimple Manager patch.
  * tags `object`: The tags attached to the Manager.

### ManagerProperties
* ManagerProperties `object`: The properties of the StorSimple Manager.
  * cisIntrinsicSettings [ManagerIntrinsicSettings](#managerintrinsicsettings)
  * provisioningState `string`: Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
  * sku [ManagerSku](#managersku)

### ManagerSku
* ManagerSku `object`: The Sku.
  * name **required** `string` (values: Standard): Refers to the sku name which should be "Standard"

### MetricAvailablity
* MetricAvailablity `object`: The metric availability.
  * retention `string`: The retention period for the metric at the specified timegrain.
  * timeGrain `string`: The aggregation interval for the metric.

### MetricData
* MetricData `object`: The metric data.
  * average `number`: The average of all samples at the time stamp.
  * count `integer`: The count of all samples at the time stamp.
  * maximum `number`: The maximum of all samples at the time stamp.
  * minimum `number`: The minimum of all samples at the time stamp.
  * sum `number`: The sum of all samples at the time stamp.
  * timeStamp `string`: The time stamp of the metric data.

### MetricDefinition
* MetricDefinition `object`: The monitoring metric definition.
  * category `string`: The category of the metric.
  * dimensions `array`: The available metric dimensions.
    * items [MetricDimension](#metricdimension)
  * metricAvailabilities `array`: The available metric granularities.
    * items [MetricAvailablity](#metricavailablity)
  * name [MetricName](#metricname)
  * primaryAggregationType `string` (values: Average, Last, Maximum, Minimum, None, Total): The metric aggregation type.
  * resourceId `string`: The metric source ID.
  * type `string`: The metric definition type.
  * unit `string` (values: Bytes, BytesPerSecond, Count, CountPerSecond, Percent, Seconds): The metric unit.

### MetricDefinitionList
* MetricDefinitionList `object`: The list of metric definitions.
  * value `array`: The list of metric definitions.
    * items [MetricDefinition](#metricdefinition)

### MetricDimension
* MetricDimension `object`: The metric dimension. It indicates the source of the metric.
  * name `string`: The metric dimension name.
  * value `string`: The metric dimension values.

### MetricFilter
* MetricFilter `object`: The OData filters to be used for metrics.
  * category **required** `string`: Specifies the category of the metrics to be filtered. E.g., "CapacityUtilization". Valid values are the ones returned as the field "category" in the ListMetricDefinitions call. Only 'Equality' operator is supported for this property.
  * dimensions [DimensionFilter](#dimensionfilter)
  * endTime `string`: Specifies the end time of the time range to be queried. Only 'Less Than Or Equal To' operator is supported for this property.
  * name [MetricNameFilter](#metricnamefilter)
  * startTime `string`: Specifies the start time of the time range to be queried. Only 'Greater Than Or Equal To' operator is supported for this property.
  * timeGrain `string`: Specifies the time granularity of the metrics to be returned. E.g., "P1D". Valid values are the ones returned as the field "timeGrain" in the ListMetricDefinitions call. Only 'Equality' operator is supported for this property.

### MetricList
* MetricList `object`: The metric list.
  * value `array`: The value.
    * items [Metrics](#metrics)

### MetricName
* MetricName `object`: The metric name.
  * localizedValue `string`: The localized metric name.
  * value `string`: The metric name.

### MetricNameFilter
* MetricNameFilter `object`: The metric name filter, specifying the name of the metric to be filtered on.
  * value `string`: Specifies the metric name to be filtered on. E.g., CloudStorageUsed. Valid values are the ones returned in the field "name" in the ListMetricDefinitions call. Only 'Equality' operator is supported for this property.

### Metrics
* Metrics `object`: The monitoring metric.
  * dimensions `array`: The metric dimensions.
    * items [MetricDimension](#metricdimension)
  * endTime `string`: The end time of the metric data.
  * name [MetricName](#metricname)
  * primaryAggregation `string` (values: Average, Last, Maximum, Minimum, None, Total): The metric aggregation type.
  * resourceId `string`: The ID of metric source.
  * startTime `string`: The start time of the metric data.
  * timeGrain `string`: The time granularity of the metric data.
  * type `string`: The type of the metric data.
  * unit `string` (values: Bytes, BytesPerSecond, Count, CountPerSecond, Percent, Seconds): The unit of the metric data.
  * values `array`: The list of the metric data.
    * items [MetricData](#metricdata)

### NetworkAdapterList
* NetworkAdapterList `object`: The collection of network adapters on the device.
  * value **required** `array`: The value.
    * items [NetworkAdapters](#networkadapters)

### NetworkAdapters
* NetworkAdapters `object`: Represents the network adapter on device.
  * interfaceId **required** `string` (values: Invalid, Data0, Data1, Data2, Data3, Data4, Data5): The ID of the network adapter.
  * isDefault `boolean`: Value indicating whether this instance is default.
  * iscsiAndCloudStatus **required** `string` (values: Disabled, IscsiEnabled, CloudEnabled, IscsiAndCloudEnabled): Value indicating cloud and ISCSI status of network adapter.
  * mode **required** `string` (values: Invalid, IPV4, IPV6, BOTH): The mode of network adapter, either IPv4, IPv6 or both.
  * netInterfaceStatus **required** `string` (values: Enabled, Disabled): Value indicating status of network adapter.
  * nicIpv4Settings [NicIPv4](#nicipv4)
  * nicIpv6Settings [NicIPv6](#nicipv6)
  * speed `integer`: The speed of the network adapter.

### NetworkInterfaceData0Settings
* NetworkInterfaceData0Settings `object`: The 'Data 0' network interface card settings.
  * controllerOneIp `string`: The controller 1's IPv4 address.
  * controllerZeroIp `string`: The controller 0's IPv4 address.

### NetworkSettings
* NetworkSettings `object`: Represents the network settings of a device.
  * properties **required** [NetworkSettingsProperties](#networksettingsproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### NetworkSettingsPatch
* NetworkSettingsPatch `object`: Represents the patch request for the network settings of a device.
  * properties **required** [NetworkSettingsPatchProperties](#networksettingspatchproperties)

### NetworkSettingsPatchProperties
* NetworkSettingsPatchProperties `object`: The properties of the network settings patch.
  * dnsSettings [DNSSettings](#dnssettings)
  * networkAdapters [NetworkAdapterList](#networkadapterlist)

### NetworkSettingsProperties
* NetworkSettingsProperties `object`: The properties of the network settings of device.
  * dnsSettings **required** [DNSSettings](#dnssettings)
  * networkAdapters **required** [NetworkAdapterList](#networkadapterlist)
  * webproxySettings **required** [WebproxySettings](#webproxysettings)

### NicIPv4
* NicIPv4 `object`: Details related to the IPv4 address configuration.
  * controller0Ipv4Address `string`: The IPv4 address of Controller0.
  * controller1Ipv4Address `string`: The IPv4 address of Controller1.
  * ipv4Address `string`: The IPv4 address of the network adapter.
  * ipv4Gateway `string`: The IPv4 gateway of the network adapter.
  * ipv4Netmask `string`: The IPv4 netmask of the network adapter.

### NicIPv6
* NicIPv6 `object`: Details related to the IPv6 address configuration.
  * controller0Ipv6Address `string`: The IPv6 address of Controller0.
  * controller1Ipv6Address `string`: The IPv6 address of Controller1.
  * ipv6Address `string`: The IPv6 address of the network adapter.
  * ipv6Gateway `string`: The IPv6 gateway of the network adapter.
  * ipv6Prefix `string`: The IPv6 prefix of the network adapter.

### PublicKey
* PublicKey `object`: The public key.
  * key **required** `string`: The key.

### RemoteManagementSettings
* RemoteManagementSettings `object`: The settings for remote management of a device.
  * remoteManagementCertificate `string`: The remote management certificates.
  * remoteManagementMode **required** `string` (values: Unknown, Disabled, HttpsEnabled, HttpsAndHttpEnabled): The remote management mode.

### RemoteManagementSettingsPatch
* RemoteManagementSettingsPatch `object`: The settings for updating remote management mode of the device.
  * remoteManagementMode **required** `string` (values: Unknown, Disabled, HttpsEnabled, HttpsAndHttpEnabled): The remote management mode.

### Resource
* Resource `object`: The Azure Resource.
  * id `string`: The resource ID.
  * location **required** `string`: The geo location of the resource.
  * name `string`: The resource name.
  * tags `object`: The tags attached to the resource.
  * type `string`: The resource type.

### ScheduleRecurrence
* ScheduleRecurrence `object`: The schedule recurrence.
  * recurrenceType **required** `string` (values: Minutes, Hourly, Daily, Weekly): The recurrence type.
  * recurrenceValue **required** `integer`: The recurrence value.
  * weeklyDaysList `array`: The week days list. Applicable only for schedules of recurrence type 'weekly'.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

### SecondaryDNSSettings
* SecondaryDNSSettings `object`: The secondary DNS settings.
  * secondaryDnsServers `array`: The list of secondary DNS Server IP addresses.
    * items `string`

### SecuritySettings
* SecuritySettings `object`: The security settings of a device.
  * properties **required** [SecuritySettingsProperties](#securitysettingsproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### SecuritySettingsPatch
* SecuritySettingsPatch `object`: Represents the patch request for the security settings of a device.
  * properties **required** [SecuritySettingsPatchProperties](#securitysettingspatchproperties)

### SecuritySettingsPatchProperties
* SecuritySettingsPatchProperties `object`: The properties of the security settings patch.
  * chapSettings [ChapSettings](#chapsettings)
  * cloudApplianceSettings [CloudApplianceSettings](#cloudappliancesettings)
  * deviceAdminPassword [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * remoteManagementSettings [RemoteManagementSettingsPatch](#remotemanagementsettingspatch)
  * snapshotPassword [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

### SecuritySettingsProperties
* SecuritySettingsProperties `object`: The properties of security settings of a device.
  * chapSettings **required** [ChapSettings](#chapsettings)
  * remoteManagementSettings **required** [RemoteManagementSettings](#remotemanagementsettings)

### SendTestAlertEmailRequest
* SendTestAlertEmailRequest `object`: The request for sending test alert email
  * emailList **required** `array`: The list of email IDs to send the test alert email
    * items `string`

### StorageAccountCredential
* StorageAccountCredential `object`: The storage account credential.
  * properties **required** [StorageAccountCredentialProperties](#storageaccountcredentialproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### StorageAccountCredentialList
* StorageAccountCredentialList `object`: The collection of storage account credential entities.
  * value **required** `array`: The value.
    * items [StorageAccountCredential](#storageaccountcredential)

### StorageAccountCredentialProperties
* StorageAccountCredentialProperties `object`: The storage account credential properties.
  * accessKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * endPoint **required** `string`: The storage endpoint
  * sslStatus **required** `string` (values: Enabled, Disabled): Signifies whether SSL needs to be enabled or not.
  * volumesCount `integer`: The count of volumes using this storage account credential.

### SymmetricEncryptedSecret
* SymmetricEncryptedSecret `object`: Represents the secrets encrypted using Symmetric Encryption Key.
  * encryptionAlgorithm **required** `string` (values: None, AES256, RSAES_PKCS1_v_1_5): The algorithm used to encrypt the "Value".
  * value **required** `string`: The value of the secret itself. If the secret is in plaintext or null then EncryptionAlgorithm will be none.
  * valueCertificateThumbprint `string`: The thumbprint of the cert that was used to encrypt "Value".

### TargetEligibilityErrorMessage
* TargetEligibilityErrorMessage `object`: The error/warning message due to which the device is ineligible as a failover target device.
  * message `string`: The localized error message stating the reason why the device is not eligible as a target device.
  * resolution `string`: The localized resolution message for the error.
  * resultCode `string` (values: TargetAndSourceCannotBeSameError, TargetIsNotOnlineError, TargetSourceIncompatibleVersionError, LocalToTieredVolumesConversionWarning, TargetInsufficientCapacityError, TargetInsufficientLocalVolumeMemoryError, TargetInsufficientTieredVolumeMemoryError): The result code for the error, due to which the device does not qualify as a failover target device.

### TargetEligibilityResult
* TargetEligibilityResult `object`: The eligibility result of device, as a failover target device.
  * eligibilityStatus `string` (values: NotEligible, Eligible): The eligibility status of device, as a failover target device.
  * messages `array`: The list of error messages, if a device does not qualify as a failover target device.
    * items [TargetEligibilityErrorMessage](#targeteligibilityerrormessage)

### Time
* Time `object`: The time.
  * hours **required** `integer`: The hour.
  * minutes **required** `integer`: The minute.
  * seconds **required** `integer`: The second.

### TimeSettings
* TimeSettings `object`: The time settings of a device.
  * properties **required** [TimeSettingsProperties](#timesettingsproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### TimeSettingsProperties
* TimeSettingsProperties `object`: The properties of time settings of a device.
  * primaryTimeServer `string`: The primary Network Time Protocol (NTP) server name, like 'time.windows.com'.
  * secondaryTimeServer `array`: The secondary Network Time Protocol (NTP) server name, like 'time.contoso.com'. It's optional.
    * items `string`
  * timeZone **required** `string`: The timezone of device, like '(UTC -06:00) Central America'

### Updates
* Updates `object`: The updates profile of a device.
  * properties **required** [UpdatesProperties](#updatesproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### UpdatesProperties
* UpdatesProperties `object`: The properties of the updates profile.
  * isUpdateInProgress `boolean`: Indicates whether an update is in progress or not.
  * lastUpdatedTime `string`: The time when the last update was completed.
  * maintenanceModeUpdatesAvailable `boolean`: Set to 'true' if maintenance mode update available.
  * regularUpdatesAvailable `boolean`: Set to 'true' if regular updates are available for the device.

### VmImage
* VmImage `object`: The virtual machine image.
  * name **required** `string`: The name.
  * offer **required** `string`: The offer.
  * publisher **required** `string`: The publisher.
  * sku **required** `string`: The SKU.
  * version **required** `string`: The version.

### Volume
* Volume `object`: The volume.
  * properties **required** [VolumeProperties](#volumeproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### VolumeContainer
* VolumeContainer `object`: The volume container.
  * properties **required** [VolumeContainerProperties](#volumecontainerproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * kind `string` (values: Series8000): The Kind of the object. Currently only Series8000 is supported
  * name `string`: The name of the object.
  * type `string`: The hierarchical type of the object.

### VolumeContainerFailoverMetadata
* VolumeContainerFailoverMetadata `object`: The metadata of the volume container, that is being considered as part of a failover set.
  * volumeContainerId `string`: The path ID of the volume container.
  * volumes `array`: The list of metadata of volumes inside the volume container, which contains valid cloud snapshots.
    * items [VolumeFailoverMetadata](#volumefailovermetadata)

### VolumeContainerList
* VolumeContainerList `object`: The collection of volume container entities.
  * value **required** `array`: The value.
    * items [VolumeContainer](#volumecontainer)

### VolumeContainerProperties
* VolumeContainerProperties `object`: The properties of volume container.
  * bandWidthRateInMbps `integer`: The bandwidth-rate set on the volume container.
  * bandwidthSettingId `string`: The ID of the bandwidth setting associated with the volume container.
  * encryptionKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * encryptionStatus `string` (values: Enabled, Disabled): The flag to denote whether encryption is enabled or not.
  * ownerShipStatus `string` (values: Owned, NotOwned): The owner ship status of the volume container. Only when the status is "NotOwned", the delete operation on the volume container is permitted.
  * storageAccountCredentialId **required** `string`: The path ID of storage account associated with the volume container.
  * totalCloudStorageUsageInBytes `integer`: The total cloud storage for the volume container.
  * volumeCount `integer`: The number of volumes in the volume Container.

### VolumeFailoverMetadata
* VolumeFailoverMetadata `object`: The metadata of a volume that has valid cloud snapshot.
  * backupCreatedDate `string`: The date at which the snapshot was taken.
  * backupElementId `string`: The path ID of the backup-element for this volume, inside the backup set.
  * backupId `string`: The path ID of the backup set.
  * backupPolicyId `string`: The path ID of the backup policy using which the snapshot was taken.
  * sizeInBytes `integer`: The size of the volume in bytes at the time the snapshot was taken.
  * volumeId `string`: The path ID of the volume.
  * volumeType `string` (values: Tiered, Archival, LocallyPinned): The type of the volume.

### VolumeList
* VolumeList `object`: The collection of volumes.
  * value **required** `array`: The value.
    * items [Volume](#volume)

### VolumeProperties
* VolumeProperties `object`: The properties of volume.
  * accessControlRecordIds **required** `array`: The IDs of the access control records, associated with the volume.
    * items `string`
  * backupPolicyIds `array`: The IDs of the backup policies, in which this volume is part of.
    * items `string`
  * backupStatus `string` (values: Enabled, Disabled): The backup status of the volume.
  * monitoringStatus **required** `string` (values: Enabled, Disabled): The monitoring status of the volume.
  * operationStatus `string` (values: None, Updating, Deleting, Restoring): The operation status on the volume.
  * sizeInBytes **required** `integer`: The size of the volume in bytes.
  * volumeContainerId `string`: The ID of the volume container, in which this volume is created.
  * volumeStatus **required** `string` (values: Online, Offline): The volume status.
  * volumeType **required** `string` (values: Tiered, Archival, LocallyPinned): The type of the volume.

### WebproxySettings
* WebproxySettings `object`: The web proxy settings on the device.
  * authentication **required** `string` (values: Invalid, None, Basic, NTLM): The authentication type.
  * connectionUri `string`: The connection URI.
  * username **required** `string`: The webproxy username.


