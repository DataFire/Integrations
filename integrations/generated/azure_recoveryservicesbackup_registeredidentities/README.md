# @datafire/azure_recoveryservicesbackup_registeredidentities

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicesbackup_registeredidentities
```
```js
let azure_recoveryservicesbackup_registeredidentities = require('@datafire/azure_recoveryservicesbackup_registeredidentities').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservicesbackup_registeredidentities.ProtectionContainers_Unregister({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "identityName": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ProtectionContainers_Unregister
Unregisters the given container from your Recovery Services vault.


```js
azure_recoveryservicesbackup_registeredidentities.ProtectionContainers_Unregister({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "identityName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group associated with the Recovery Services vault.
  * vaultName **required** `string`: The name of the Recovery Services vault.
  * api-version **required** `string`: Client API version.
  * identityName **required** `string`: Name of the protection container to unregister.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
