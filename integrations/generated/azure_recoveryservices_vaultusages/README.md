# @datafire/azure_recoveryservices_vaultusages

Client library for RecoveryServicesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservices_vaultusages
```
```js
let azure_recoveryservices_vaultusages = require('@datafire/azure_recoveryservices_vaultusages').create({
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

### Usages_ListByVaults
Fetches the usages of the vault.


```js
azure_recoveryservices_vaultusages.Usages_ListByVaults({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.

#### Output
* output [VaultUsageList](#vaultusagelist)



## Definitions

### NameInfo
* NameInfo `object`: The name of usage.
  * localizedValue `string`: Localized value of usage.
  * value `string`: Value of usage.

### VaultUsage
* VaultUsage `object`: Usages of a vault.
  * currentValue `integer`: Current value of usage.
  * limit `integer`: Limit of usage.
  * name [NameInfo](#nameinfo)
  * nextResetTime `string`: Next reset time of usage.
  * quotaPeriod `string`: Quota period of usage.
  * unit `string` (values: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond): Unit of the usage.

### VaultUsageList
* VaultUsageList `object`: Usage for vault.
  * value `array`: The list of usages for the given vault.
    * items [VaultUsage](#vaultusage)


