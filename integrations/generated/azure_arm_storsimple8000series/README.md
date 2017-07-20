# @datafire/azure_arm_storsimple8000series

Client library for StorSimple8000SeriesManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_storsimple8000series
```

```js
let datafire = require('datafire');
let azure_arm_storsimple8000series = require('@datafire/azure_arm_storsimple8000series').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_storsimple8000series: account,
  }
})

azure_arm_storsimple8000series.Operations_List({}, context).then(data => {
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

### Managers_CreateOrUpdate
Creates or updates the manager.


```js
azure_arm_storsimple8000series.Managers_CreateOrUpdate({
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "managerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* parameters (object) **required** - The StorSimple Manager
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
* parameters (object) **required** - Mandatory device configuration request
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
* $expand (string) - Specify $expand=details to populate additional fields related to the device.

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
* deviceName (string) **required** - The device name.
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
* deviceName (string) **required** - The device name.
* subscriptionId (string) **required** - The subscription id
* resourceGroupName (string) **required** - The resource group name
* managerName (string) **required** - The manager name
* api-version (string) **required** - The api version
* $expand (string) - Specify $expand=details to populate additional fields related to the device.

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
* deviceName (string) **required** - The device Name.
* parameters (object) **required** - Represents the patch request for the device.
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
* deviceName (string) **required** - The device name.
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
* deviceName (string) **required** - The device name.
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

### Managers_GetPrivateEncryptionKey
Returns the symmetric encrypted private encryption key of the manager.


```js
azure_arm_storsimple8000series.Managers_GetPrivateEncryptionKey({
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

