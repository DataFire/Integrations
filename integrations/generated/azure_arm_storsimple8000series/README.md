# @datafire/azure_arm_storsimple8000series

Client library for StorSimple8000SeriesManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_storsimple8000series
```

```js
let datafire = require('datafire');
let azure_arm_storsimple8000series = require('@datafire/azure_arm_storsimple8000series').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_storsimple8000series.Operations_List({}).then(data => {
  console.log(data);
})
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

#### Parameters
* api-version (string) **required** - The api version

### Managers_List
Retrieves all the managers in a subscription.


```js
azure_arm_storsimple8000series.Managers_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id
* api-version (string) **required** - The api version

### Managers_ListByResourceGroup
Retrieves all the managers in a resource group.


```js
azure_arm_storsimple8000series.Managers_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* parameters (object) **required** - The StorSimple Manager patch.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* parameters (object) **required** - The StorSimple Manager.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* accessControlRecordName (string) **required** - The name of the access control record to delete.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* accessControlRecordName (string) **required** - Name of access control record to be fetched.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* accessControlRecordName (string) **required** - The name of the access control record.
* parameters (object) **required** - The access control record.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) - OData Filter options

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* bandwidthSettingName (string) **required** - The name of the bandwidth setting.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* bandwidthSettingName (string) **required** - The name of bandwidth setting to be fetched.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* bandwidthSettingName (string) **required** - The bandwidth setting name.
* parameters (object) **required** - The bandwidth setting.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* parameters (object) **required** - The request for clearing the alert
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* parameters (object) **required** - The mandatory device configuration request.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $expand (string) - Specify $expand=details to populate additional fields related to the device or $expand=rolloverdetails to populate additional fields related to the service data encryption key rollover on device

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $expand (string) - Specify $expand=details to populate additional fields related to the device or $expand=rolloverdetails to populate additional fields related to the service data encryption key rollover on device

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

#### Parameters
* deviceName (string) **required** - The device name
* parameters (object) **required** - The device patch.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* parameters (object) **required** - The alert settings.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The name of the backup policy.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The name of backup policy to be fetched.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The name of the backup policy to be created/updated.
* parameters (object) **required** - The backup policy.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The backup policy name.
* backupType (string) **required** - The backup Type. This can be cloudSnapshot or localSnapshot.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The backup policy name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The backup policy name.
* backupScheduleName (string) **required** - The name the backup schedule.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The backup policy name.
* backupScheduleName (string) **required** - The name of the backup schedule to be fetched
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupPolicyName (string) **required** - The backup policy name.
* backupScheduleName (string) **required** - The backup schedule name.
* parameters (object) **required** - The backup schedule.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) - OData Filter options

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

#### Parameters
* deviceName (string) **required** - The device name
* backupName (string) **required** - The backup name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupName (string) **required** - The backup name.
* backupElementName (string) **required** - The backup element name.
* parameters (object) **required** - The clone job request.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* backupName (string) **required** - The backupSet name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* hardwareComponentGroupName (string) **required** - The hardware component group name.
* parameters (object) **required** - The controller power state change request.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) - OData Filter options

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

#### Parameters
* deviceName (string) **required** - The device name
* jobName (string) **required** - The job Name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* jobName (string) **required** - The jobName.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) **required** - OData Filter options

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* parameters (object) **required** - Represents the patch request for the network settings of a device.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* parameters (object) **required** - Represents the patch request for the security settings of a device.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* parameters (object) **required** - The request for sending test alert email
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* parameters (object) **required** - The time settings of a device.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The name of the volume container.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The name of the volume container.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The name of the volume container.
* parameters (object) **required** - The volume container.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) **required** - OData Filter options

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* volumeName (string) **required** - The volume name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* volumeName (string) **required** - The volume name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* volumeName (string) **required** - The volume name.
* parameters (object) **required** - The volume.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* volumeName (string) **required** - The volume name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) **required** - OData Filter options

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

#### Parameters
* deviceName (string) **required** - The device name
* volumeContainerName (string) **required** - The volume container name.
* volumeName (string) **required** - The volume name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* deviceName (string) **required** - The device name
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* sourceDeviceName (string) **required** - The source device name on which failover is performed.
* parameters (object) **required** - The request object for triggering a failover of volume containers, from a source device to a target device.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* sourceDeviceName (string) **required** - The source device name on which failover is performed.
* parameters (object) **required** - The request object for fetching the list of failover targets (eligible devices for failover).
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* parameters (object) **required** - The extended info of the manager.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* If-Match (string) **required** - Pass the ETag of ExtendedInfo fetched from GET call

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

#### Parameters
* parameters (object) **required** - The extended info of the manager.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) - OData Filter options

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) - OData Filter options

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $filter (string) **required** - OData Filter options

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* parameters (object) **required** - The cloud appliance.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* storageAccountCredentialName (string) **required** - The name of the storage account credential.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* storageAccountCredentialName (string) **required** - The name of storage account credential to be fetched.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

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

#### Parameters
* storageAccountCredentialName (string) **required** - The storage account credential name.
* parameters (object) **required** - The storage account credential.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version

