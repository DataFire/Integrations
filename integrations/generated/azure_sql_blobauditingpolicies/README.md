# @datafire/azure_sql_blobauditingpolicies

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_blobauditingpolicies
```
```js
let azure_sql_blobauditingpolicies = require('@datafire/azure_sql_blobauditingpolicies').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_blobauditingpolicies.DatabaseBlobAuditingPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "blobAuditingPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### DatabaseBlobAuditingPolicies_Get
Gets a database's blob auditing policy.


```js
azure_sql_blobauditingpolicies.DatabaseBlobAuditingPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "blobAuditingPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the blob audit policy is defined.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)

### DatabaseBlobAuditingPolicies_CreateOrUpdate
Creates or updates a database's blob auditing policy.


```js
azure_sql_blobauditingpolicies.DatabaseBlobAuditingPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "blobAuditingPolicyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the blob auditing policy will be defined.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * parameters **required** [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)



## Definitions

### DatabaseBlobAuditingPolicy
* DatabaseBlobAuditingPolicy `object`: A database blob auditing policy.
  * kind `string`: Resource kind.
  * properties [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseBlobAuditingPolicyProperties
* DatabaseBlobAuditingPolicyProperties `object`: Properties of a database blob auditing policy.
  * auditActionsAndGroups `array`: Specifies the Actions and Actions-Groups to audit.
    * items `string`
  * isStorageSecondaryKeyInUse `boolean`: Specifies whether storageAccountAccessKey value is the storage’s secondary key.
  * retentionDays `integer`: Specifies the number of days to keep in the audit logs.
  * state **required** `string` (values: Enabled, Disabled): Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
  * storageAccountAccessKey `string`: Specifies the identifier key of the auditing storage account. If state is Enabled, storageAccountAccessKey is required.
  * storageAccountSubscriptionId `string`: Specifies the blob storage subscription Id.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required.


