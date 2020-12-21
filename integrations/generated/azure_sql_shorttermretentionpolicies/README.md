# @datafire/azure_sql_shorttermretentionpolicies

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_shorttermretentionpolicies
```
```js
let azure_sql_shorttermretentionpolicies = require('@datafire/azure_sql_shorttermretentionpolicies').create({
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

### BackupShortTermRetentionPolicies_ListByDatabase
Gets a database's short term retention policy.


```js
azure_sql_shorttermretentionpolicies.BackupShortTermRetentionPolicies_ListByDatabase({
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
* output [BackupShortTermRetentionPolicyListResult](#backupshorttermretentionpolicylistresult)

### BackupShortTermRetentionPolicies_Get
Gets a database's short term retention policy.


```js
azure_sql_shorttermretentionpolicies.BackupShortTermRetentionPolicies_Get({
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
  * policyName **required** `string` (values: default): The policy name. Should always be "default".
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [BackupShortTermRetentionPolicy](#backupshorttermretentionpolicy)

### BackupShortTermRetentionPolicies_Update
Updates a database's short term retention policy.


```js
azure_sql_shorttermretentionpolicies.BackupShortTermRetentionPolicies_Update({
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
  * policyName **required** `string` (values: default): The policy name. Should always be "default".
  * parameters **required** [BackupShortTermRetentionPolicy](#backupshorttermretentionpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [BackupShortTermRetentionPolicy](#backupshorttermretentionpolicy)

### BackupShortTermRetentionPolicies_CreateOrUpdate
Updates a database's short term retention policy.


```js
azure_sql_shorttermretentionpolicies.BackupShortTermRetentionPolicies_CreateOrUpdate({
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
  * policyName **required** `string` (values: default): The policy name. Should always be "default".
  * parameters **required** [BackupShortTermRetentionPolicy](#backupshorttermretentionpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [BackupShortTermRetentionPolicy](#backupshorttermretentionpolicy)



## Definitions

### BackupShortTermRetentionPolicy
* BackupShortTermRetentionPolicy `object`: A short term retention policy.
  * properties [BackupShortTermRetentionPolicyProperties](#backupshorttermretentionpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BackupShortTermRetentionPolicyListResult
* BackupShortTermRetentionPolicyListResult `object`: A list of short term retention policies.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [BackupShortTermRetentionPolicy](#backupshorttermretentionpolicy)

### BackupShortTermRetentionPolicyProperties
* BackupShortTermRetentionPolicyProperties `object`: Properties of a short term retention policy
  * retentionDays `integer`: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.


