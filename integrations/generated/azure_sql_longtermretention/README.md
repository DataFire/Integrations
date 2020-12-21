# @datafire/azure_sql_longtermretention

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_longtermretention
```
```js
let azure_sql_longtermretention = require('@datafire/azure_sql_longtermretention').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### LongTermRetentionBackups_ListByLocation
Lists the long term retention backups for a given location.


```js
azure_sql_longtermretention.LongTermRetentionBackups_ListByLocation({
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The location of the database
  * onlyLatestPerDatabase `boolean`: Whether or not to only get the latest backup for each database.
  * databaseState `string` (values: All, Live, Deleted): Whether to query against just live databases, just deleted databases, or all databases.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackupListResult](#longtermretentionbackuplistresult)

### LongTermRetentionBackups_ListByServer
Lists the long term retention backups for a given server.


```js
azure_sql_longtermretention.LongTermRetentionBackups_ListByServer({
  "locationName": "",
  "longTermRetentionServerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The location of the database
  * longTermRetentionServerName **required** `string`: The name of the server
  * onlyLatestPerDatabase `boolean`: Whether or not to only get the latest backup for each database.
  * databaseState `string` (values: All, Live, Deleted): Whether to query against just live databases, just deleted databases, or all databases.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackupListResult](#longtermretentionbackuplistresult)

### LongTermRetentionBackups_ListByDatabase
Lists all long term retention backups for a database.


```js
azure_sql_longtermretention.LongTermRetentionBackups_ListByDatabase({
  "locationName": "",
  "longTermRetentionServerName": "",
  "longTermRetentionDatabaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The location of the database
  * longTermRetentionServerName **required** `string`: The name of the server
  * longTermRetentionDatabaseName **required** `string`: The name of the database
  * onlyLatestPerDatabase `boolean`: Whether or not to only get the latest backup for each database.
  * databaseState `string` (values: All, Live, Deleted): Whether to query against just live databases, just deleted databases, or all databases.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackupListResult](#longtermretentionbackuplistresult)

### LongTermRetentionBackups_Delete
Deletes a long term retention backup.


```js
azure_sql_longtermretention.LongTermRetentionBackups_Delete({
  "locationName": "",
  "longTermRetentionServerName": "",
  "longTermRetentionDatabaseName": "",
  "backupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The location of the database
  * longTermRetentionServerName **required** `string`: The name of the server
  * longTermRetentionDatabaseName **required** `string`: The name of the database
  * backupName **required** `string`: The backup name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### LongTermRetentionBackups_Get
Gets a long term retention backup.


```js
azure_sql_longtermretention.LongTermRetentionBackups_Get({
  "locationName": "",
  "longTermRetentionServerName": "",
  "longTermRetentionDatabaseName": "",
  "backupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The location of the database.
  * longTermRetentionServerName **required** `string`: The name of the server
  * longTermRetentionDatabaseName **required** `string`: The name of the database
  * backupName **required** `string`: The backup name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackup](#longtermretentionbackup)

### LongTermRetentionBackups_ListByResourceGroupLocation
Lists the long term retention backups for a given location.


```js
azure_sql_longtermretention.LongTermRetentionBackups_ListByResourceGroupLocation({
  "resourceGroupName": "",
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The location of the database
  * onlyLatestPerDatabase `boolean`: Whether or not to only get the latest backup for each database.
  * databaseState `string` (values: All, Live, Deleted): Whether to query against just live databases, just deleted databases, or all databases.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackupListResult](#longtermretentionbackuplistresult)

### LongTermRetentionBackups_ListByResourceGroupServer
Lists the long term retention backups for a given server.


```js
azure_sql_longtermretention.LongTermRetentionBackups_ListByResourceGroupServer({
  "resourceGroupName": "",
  "locationName": "",
  "longTermRetentionServerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The location of the database
  * longTermRetentionServerName **required** `string`: The name of the server
  * onlyLatestPerDatabase `boolean`: Whether or not to only get the latest backup for each database.
  * databaseState `string` (values: All, Live, Deleted): Whether to query against just live databases, just deleted databases, or all databases.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackupListResult](#longtermretentionbackuplistresult)

### LongTermRetentionBackups_ListByResourceGroupDatabase
Lists all long term retention backups for a database.


```js
azure_sql_longtermretention.LongTermRetentionBackups_ListByResourceGroupDatabase({
  "resourceGroupName": "",
  "locationName": "",
  "longTermRetentionServerName": "",
  "longTermRetentionDatabaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The location of the database
  * longTermRetentionServerName **required** `string`: The name of the server
  * longTermRetentionDatabaseName **required** `string`: The name of the database
  * onlyLatestPerDatabase `boolean`: Whether or not to only get the latest backup for each database.
  * databaseState `string` (values: All, Live, Deleted): Whether to query against just live databases, just deleted databases, or all databases.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackupListResult](#longtermretentionbackuplistresult)

### LongTermRetentionBackups_DeleteByResourceGroup
Deletes a long term retention backup.


```js
azure_sql_longtermretention.LongTermRetentionBackups_DeleteByResourceGroup({
  "resourceGroupName": "",
  "locationName": "",
  "longTermRetentionServerName": "",
  "longTermRetentionDatabaseName": "",
  "backupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The location of the database
  * longTermRetentionServerName **required** `string`: The name of the server
  * longTermRetentionDatabaseName **required** `string`: The name of the database
  * backupName **required** `string`: The backup name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### LongTermRetentionBackups_GetByResourceGroup
Gets a long term retention backup.


```js
azure_sql_longtermretention.LongTermRetentionBackups_GetByResourceGroup({
  "resourceGroupName": "",
  "locationName": "",
  "longTermRetentionServerName": "",
  "longTermRetentionDatabaseName": "",
  "backupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The location of the database.
  * longTermRetentionServerName **required** `string`: The name of the server
  * longTermRetentionDatabaseName **required** `string`: The name of the database
  * backupName **required** `string`: The backup name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LongTermRetentionBackup](#longtermretentionbackup)

### BackupLongTermRetentionPolicies_ListByDatabase
Gets a database's long term retention policy.


```js
azure_sql_longtermretention.BackupLongTermRetentionPolicies_ListByDatabase({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)

### BackupLongTermRetentionPolicies_Get
Gets a database's long term retention policy.


```js
azure_sql_longtermretention.BackupLongTermRetentionPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * policyName **required** `string` (values: default): The policy name. Should always be Default.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)

### BackupLongTermRetentionPolicies_CreateOrUpdate
Sets a database's long term retention policy.


```js
azure_sql_longtermretention.BackupLongTermRetentionPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "policyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * policyName **required** `string` (values: default): The policy name. Should always be Default.
  * parameters **required** [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [BackupLongTermRetentionPolicy](#backuplongtermretentionpolicy)



## Definitions

### BackupLongTermRetentionPolicy
* BackupLongTermRetentionPolicy `object`: A long term retention policy.
  * properties [LongTermRetentionPolicyProperties](#longtermretentionpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### LongTermRetentionBackup
* LongTermRetentionBackup `object`: A long term retention backup.
  * properties [LongTermRetentionBackupProperties](#longtermretentionbackupproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### LongTermRetentionBackupListResult
* LongTermRetentionBackupListResult `object`: A list of long term retention backups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [LongTermRetentionBackup](#longtermretentionbackup)

### LongTermRetentionBackupProperties
* LongTermRetentionBackupProperties `object`: Properties of a long term retention backup
  * backupExpirationTime `string`: The time the long term retention backup will expire.
  * backupTime `string`: The time the backup was taken
  * databaseDeletionTime `string`: The delete time of the database
  * databaseName `string`: The name of the database the backup belong to
  * serverCreateTime `string`: The create time of the server.
  * serverName `string`: The server name that the backup database belong to.

### LongTermRetentionPolicyProperties
* LongTermRetentionPolicyProperties `object`: Properties of a long term retention policy
  * monthlyRetention `string`: The monthly retention policy for an LTR backup in an ISO 8601 format.
  * weekOfYear `integer`: The week of year to take the yearly backup in an ISO 8601 format.
  * weeklyRetention `string`: The weekly retention policy for an LTR backup in an ISO 8601 format.
  * yearlyRetention `string`: The yearly retention policy for an LTR backup in an ISO 8601 format.


