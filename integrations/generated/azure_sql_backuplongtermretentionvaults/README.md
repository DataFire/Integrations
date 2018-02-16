# @datafire/azure_sql_backuplongtermretentionvaults

Client library for Azure SQL Server Backup Long Term Retention Vault

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_backuplongtermretentionvaults
```
```js
let azure_sql_backuplongtermretentionvaults = require('@datafire/azure_sql_backuplongtermretentionvaults').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_backuplongtermretentionvaults.BackupLongTermRetentionVaults_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides read and update functionality for Azure SQL Server backup long term retention vault

## Actions

### BackupLongTermRetentionVaults_ListByServer
Gets server backup long term retention vaults in a server


```js
azure_sql_backuplongtermretentionvaults.BackupLongTermRetentionVaults_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [BackupLongTermRetentionVaultListResult](#backuplongtermretentionvaultlistresult)

### BackupLongTermRetentionVaults_Get
Gets a server backup long term retention vault


```js
azure_sql_backuplongtermretentionvaults.BackupLongTermRetentionVaults_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "backupLongTermRetentionVaultName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * backupLongTermRetentionVaultName **required** `string` (values: RegisteredVault): The name of the Azure SQL Server backup LongTermRetention vault

#### Output
* output [BackupLongTermRetentionVault](#backuplongtermretentionvault)

### BackupLongTermRetentionVaults_CreateOrUpdate
Updates a server backup long term retention vault


```js
azure_sql_backuplongtermretentionvaults.BackupLongTermRetentionVaults_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "backupLongTermRetentionVaultName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * backupLongTermRetentionVaultName **required** `string` (values: RegisteredVault): The name of the backup long term retention vault
  * parameters **required** [BackupLongTermRetentionVault](#backuplongtermretentionvault)

#### Output
* output [BackupLongTermRetentionVault](#backuplongtermretentionvault)



## Definitions

### BackupLongTermRetentionVault
* BackupLongTermRetentionVault `object`: A backup long term retention vault
  * location `string`: The geo-location where the resource lives
  * properties [BackupLongTermRetentionVaultProperties](#backuplongtermretentionvaultproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BackupLongTermRetentionVaultListResult
* BackupLongTermRetentionVaultListResult `object`: Represents the response to a list vaults request.
  * value **required** `array`: The list of vaults in the server.
    * items [BackupLongTermRetentionVault](#backuplongtermretentionvault)

### BackupLongTermRetentionVaultProperties
* BackupLongTermRetentionVaultProperties `object`: The properties of a backup long term retention vault.
  * recoveryServicesVaultResourceId **required** `string`: The azure recovery services vault resource id

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


