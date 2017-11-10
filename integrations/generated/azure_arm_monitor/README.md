# @datafire/azure_arm_monitor

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_monitor
```

```js
let datafire = require('datafire');
let azure_arm_monitor = require('@datafire/azure_arm_monitor').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_monitor.AutoscaleSettings_ListByResourceGroup({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### AutoscaleSettings_ListByResourceGroup
Lists the autoscale settings for a resource group


```js
azure_arm_monitor.AutoscaleSettings_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

### AutoscaleSettings_Delete
Deletes and autoscale setting


```js
azure_arm_monitor.AutoscaleSettings_Delete({
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* autoscaleSettingName (string) **required** - The autoscale setting name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

### AutoscaleSettings_Get
Gets an autoscale setting


```js
azure_arm_monitor.AutoscaleSettings_Get({
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* autoscaleSettingName (string) **required** - The autoscale setting name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

### AutoscaleSettings_Update
Updates an existing AutoscaleSettingsResource. To update other fields use the CreateOrUpdate method.


```js
azure_arm_monitor.AutoscaleSettings_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "api-version": "",
  "autoscaleSettingResource": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The Azure subscription Id.
* resourceGroupName (string) **required** - The name of the resource group.
* autoscaleSettingName (string) **required** - The autoscale setting name.
* api-version (string) **required** - Client Api Version.
* autoscaleSettingResource (undefined) **required** - The autoscale setting object for patch operations.

### AutoscaleSettings_CreateOrUpdate
Creates or updates an autoscale setting.


```js
azure_arm_monitor.AutoscaleSettings_CreateOrUpdate({
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "parameters": {
    "properties": null
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* autoscaleSettingName (string) **required** - The autoscale setting name.
* parameters (object) **required** - The autoscale setting resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

