# @datafire/azure_security_autoprovisioningsettings

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_autoprovisioningsettings
```
```js
let azure_security_autoprovisioningsettings = require('@datafire/azure_security_autoprovisioningsettings').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### AutoProvisioningSettings_List
Exposes the auto provisioning settings of the subscriptions


```js
azure_security_autoprovisioningsettings.AutoProvisioningSettings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [AutoProvisioningSettingList](#autoprovisioningsettinglist)

### AutoProvisioningSettings_Get
Details of a specific setting


```js
azure_security_autoprovisioningsettings.AutoProvisioningSettings_Get({
  "api-version": "",
  "subscriptionId": "",
  "settingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * settingName **required** `string`: Auto provisioning setting key

#### Output
* output [AutoProvisioningSetting](#autoprovisioningsetting)

### AutoProvisioningSettings_Create
Details of a specific setting


```js
azure_security_autoprovisioningsettings.AutoProvisioningSettings_Create({
  "api-version": "",
  "subscriptionId": "",
  "settingName": "",
  "setting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * settingName **required** `string`: Auto provisioning setting key
  * setting **required** [AutoProvisioningSetting](#autoprovisioningsetting)

#### Output
* output [AutoProvisioningSetting](#autoprovisioningsetting)



## Definitions

### AutoProvisioningSetting
* AutoProvisioningSetting `object`: Auto provisioning setting
  * properties [AutoProvisioningSettingProperties](#autoprovisioningsettingproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AutoProvisioningSettingList
* AutoProvisioningSettingList `object`: List of all the auto provisioning settings response
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of all the auto provisioning settings
    * items [AutoProvisioningSetting](#autoprovisioningsetting)

### AutoProvisioningSettingProperties
* AutoProvisioningSettingProperties `object`: describes properties of an auto provisioning setting
  * autoProvision **required** `string` (values: On, Off): Describes what kind of security agent provisioning action to take


