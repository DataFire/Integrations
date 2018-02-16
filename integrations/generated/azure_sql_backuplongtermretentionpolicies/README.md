# @datafire/azure_sql_backuplongtermretentionpolicies

Client library for Azure SQL Database Backup Long Term Retention Policy

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_backuplongtermretentionpolicies
```
```js
let azure_sql_backuplongtermretentionpolicies = require('@datafire/azure_sql_backuplongtermretentionpolicies').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_backuplongtermretentionpolicies.BackupLongTermRetentionPolicies_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides read and update functionality for Azure SQL Database backup long term retention policy

## Actions

### BackupLongTermRetentionPolicies_ListByDatabase
Returns a database backup long term retention policy


```js
azure_sql_backuplongtermretentionpolicies.BackupLongTermRetentionPolicies_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.

#### Output
* output [BackupLongTermRetentionPolicyListResult](#backuplongtermretentionpolicylistresult)

### BackupLongTermRetentionPolicies_Get
Returns a database backup long term retention policy


```js
azure_sql_backuplongtermretentionpolicies.BackupLongTermRetentionPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "backupLongTermRetentionPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * backupLongTermRetentionPolicyName **required** `string` (values: Default): The name of the backup long term retention policy

#### Output
* output [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)

### BackupLongTermRetentionPolicies_CreateOrUpdate
Creates or updates a database backup long term retention policy


```js
azure_sql_backuplongtermretentionpolicies.BackupLongTermRetentionPolicies_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "backupLongTermRetentionPolicyName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database
  * backupLongTermRetentionPolicyName **required** `string` (values: Default): The name of the backup long term retention policy
  * parameters **required** [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)

#### Output
* output [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)



## Definitions

### BackupLongTermRetentionPolicy
* BackupLongTermRetentionPolicy `object`: A backup long term retention policy
  * location `string`: The geo-location where the resource lives
  * properties [BackupLongTermRetentionPolicyProperties](#backuplongtermretentionpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BackupLongTermRetentionPolicyListResult
* BackupLongTermRetentionPolicyListResult `object`: Represents the response to a list long-term retention policies request.
  * value **required** `array`: The list of long-term retention policies in the database.
    * items [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)

### BackupLongTermRetentionPolicyProperties
* BackupLongTermRetentionPolicyProperties `object`: The properties of a backup long term retention policy
  * recoveryServicesBackupPolicyResourceId **required** `string`: The azure recovery services backup protection policy resource id
  * state **required** `string` (values: Disabled, Enabled): The status of the backup long term retention policy

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


