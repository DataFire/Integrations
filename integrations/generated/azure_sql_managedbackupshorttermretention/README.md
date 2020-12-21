# @datafire/azure_sql_managedbackupshorttermretention

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_managedbackupshorttermretention
```
```js
let azure_sql_managedbackupshorttermretention = require('@datafire/azure_sql_managedbackupshorttermretention').create({
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

### ManagedBackupShortTermRetentionPolicies_ListByDatabase
Gets a managed database's short term retention policy list.


```js
azure_sql_managedbackupshorttermretention.ManagedBackupShortTermRetentionPolicies_ListByDatabase({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedBackupShortTermRetentionPolicyListResult](#managedbackupshorttermretentionpolicylistresult)

### ManagedBackupShortTermRetentionPolicies_Get
Gets a managed database's short term retention policy.


```js
azure_sql_managedbackupshorttermretention.ManagedBackupShortTermRetentionPolicies_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * policyName **required** `string` (values: default): The policy name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedBackupShortTermRetentionPolicy](#managedbackupshorttermretentionpolicy)

### ManagedBackupShortTermRetentionPolicies_Update
Updates a managed database's short term retention policy.


```js
azure_sql_managedbackupshorttermretention.ManagedBackupShortTermRetentionPolicies_Update({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * policyName **required** `string` (values: default): The policy name. Should always be "default".
  * parameters **required** [ManagedBackupShortTermRetentionPolicy](#managedbackupshorttermretentionpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedBackupShortTermRetentionPolicy](#managedbackupshorttermretentionpolicy)

### ManagedBackupShortTermRetentionPolicies_CreateOrUpdate
Updates a managed database's short term retention policy.


```js
azure_sql_managedbackupshorttermretention.ManagedBackupShortTermRetentionPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * policyName **required** `string` (values: default): The policy name. Should always be "default".
  * parameters **required** [ManagedBackupShortTermRetentionPolicy](#managedbackupshorttermretentionpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedBackupShortTermRetentionPolicy](#managedbackupshorttermretentionpolicy)



## Definitions

### ManagedBackupShortTermRetentionPolicy
* ManagedBackupShortTermRetentionPolicy `object`: A short term retention policy.
  * properties [ManagedBackupShortTermRetentionPolicyProperties](#managedbackupshorttermretentionpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedBackupShortTermRetentionPolicyListResult
* ManagedBackupShortTermRetentionPolicyListResult `object`: A list of short term retention policies.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedBackupShortTermRetentionPolicy](#managedbackupshorttermretentionpolicy)

### ManagedBackupShortTermRetentionPolicyProperties
* ManagedBackupShortTermRetentionPolicyProperties `object`: Properties of a short term retention policy
  * retentionDays `integer`: The backup retention period in days. This is how many days Point-in-Time Restore will be supported.

### ProxyResource
* ProxyResource `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


