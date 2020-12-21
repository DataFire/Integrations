# @datafire/azure_security_advancedthreatprotectionsettings

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_advancedthreatprotectionsettings
```
```js
let azure_security_advancedthreatprotectionsettings = require('@datafire/azure_security_advancedthreatprotectionsettings').create({
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

### AdvancedThreatProtection_Get
Gets the Advanced Threat Protection settings for the specified resource.


```js
azure_security_advancedthreatprotectionsettings.AdvancedThreatProtection_Get({
  "api-version": "",
  "resourceId": "",
  "settingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * settingName **required** `string` (values: current): Advanced Threat Protection setting name.

#### Output
* output [AdvancedThreatProtectionSetting](#advancedthreatprotectionsetting)

### AdvancedThreatProtection_Create
Creates or updates the Advanced Threat Protection settings on a specified resource.


```js
azure_security_advancedthreatprotectionsettings.AdvancedThreatProtection_Create({
  "api-version": "",
  "resourceId": "",
  "settingName": "",
  "advancedThreatProtectionSetting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * settingName **required** `string` (values: current): Advanced Threat Protection setting name.
  * advancedThreatProtectionSetting **required** [AdvancedThreatProtectionSetting](#advancedthreatprotectionsetting)

#### Output
* output [AdvancedThreatProtectionSetting](#advancedthreatprotectionsetting)



## Definitions

### AdvancedThreatProtectionProperties
* AdvancedThreatProtectionProperties `object`: The Advanced Threat Protection settings.
  * isEnabled `boolean`: Indicates whether Advanced Threat Protection is enabled.

### AdvancedThreatProtectionSetting
* AdvancedThreatProtectionSetting `object`: The Advanced Threat Protection resource.
  * properties [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type


