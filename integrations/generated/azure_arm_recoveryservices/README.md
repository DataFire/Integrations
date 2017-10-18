# @datafire/azure_arm_recoveryservices

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_recoveryservices
```

```js
let datafire = require('datafire');
let azure_arm_recoveryservices = require('@datafire/azure_arm_recoveryservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_recoveryservices.BackupVaultConfigs_Get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### BackupVaultConfigs_Get
Fetches vault config.


```js
azure_arm_recoveryservices.BackupVaultConfigs_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription Id.
* api-version (string) **required** - Client Api Version.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* vaultName (string) **required** - The name of the recovery services vault.

### BackupVaultConfigs_Update
Updates vault config model type.


```js
azure_arm_recoveryservices.BackupVaultConfigs_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "backupVaultConfig": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription Id.
* api-version (string) **required** - Client Api Version.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* vaultName (string) **required** - The name of the recovery services vault.
* backupVaultConfig (undefined) **required** - Backup vault config details.

### BackupStorageConfigs_Get
Fetches resource storage config.


```js
azure_arm_recoveryservices.BackupStorageConfigs_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription Id.
* api-version (string) **required** - Client Api Version.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* vaultName (string) **required** - The name of the recovery services vault.

### BackupStorageConfigs_Update
Updates vault storage model type.


```js
azure_arm_recoveryservices.BackupStorageConfigs_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "backupStorageConfig": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription Id.
* api-version (string) **required** - Client Api Version.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* vaultName (string) **required** - The name of the recovery services vault.
* backupStorageConfig (undefined) **required** - The backup storage config.

