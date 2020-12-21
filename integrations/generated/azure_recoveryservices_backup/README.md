# @datafire/azure_recoveryservices_backup

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservices_backup
```
```js
let azure_recoveryservices_backup = require('@datafire/azure_recoveryservices_backup').create({
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

### BackupVaultConfigs_Get
Fetches vault config.


```js
azure_recoveryservices_backup.BackupVaultConfigs_Get({
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
* output [BackupVaultConfig](#backupvaultconfig)

### BackupVaultConfigs_Update
Updates vault config model type.


```js
azure_recoveryservices_backup.BackupVaultConfigs_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "backupVaultConfig": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * backupVaultConfig **required** [BackupVaultConfig](#backupvaultconfig)

#### Output
* output [BackupVaultConfig](#backupvaultconfig)

### BackupStorageConfigs_Get
Fetches resource storage config.


```js
azure_recoveryservices_backup.BackupStorageConfigs_Get({
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
* output [BackupStorageConfig](#backupstorageconfig)

### BackupStorageConfigs_Update
Updates vault storage model type.


```js
azure_recoveryservices_backup.BackupStorageConfigs_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "backupStorageConfig": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * backupStorageConfig **required** [BackupStorageConfig](#backupstorageconfig)

#### Output
*Output schema unknown*



## Definitions

### BackupStorageConfig
* BackupStorageConfig `object`: The backup storage config.
  * properties [BackupStorageConfigProperties](#backupstorageconfigproperties)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### BackupStorageConfigProperties
* BackupStorageConfigProperties `object`: The backup storage config.
  * storageModelType `string` (values: Invalid, GeoRedundant, LocallyRedundant): Storage model type.
  * storageType `string` (values: Invalid, GeoRedundant, LocallyRedundant): Storage type.
  * storageTypeState `string` (values: Invalid, Locked, Unlocked): Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

### BackupVaultConfig
* BackupVaultConfig `object`: Backup vault config details.
  * properties [BackupVaultConfigProperties](#backupvaultconfigproperties)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### BackupVaultConfigProperties
* BackupVaultConfigProperties `object`: Backup vault config details.
  * enhancedSecurityState `string` (values: Invalid, Enabled, Disabled): Enabled or Disabled.
  * storageType `string` (values: Invalid, GeoRedundant, LocallyRedundant): Storage type.
  * storageTypeState `string` (values: Invalid, Locked, Unlocked): Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.


