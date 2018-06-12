# @datafire/azure_sql_tableauditing

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_tableauditing
```
```js
let azure_sql_tableauditing = require('@datafire/azure_sql_tableauditing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_tableauditing.ServerTableAuditingPolicies_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ServerTableAuditingPolicies_ListByServer
Lists a servers's table auditing policies. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.ServerTableAuditingPolicies_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerTableAuditingPolicyListResult](#servertableauditingpolicylistresult)

### ServerTableAuditingPolicies_Get
Gets a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.ServerTableAuditingPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "tableAuditingPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * tableAuditingPolicyName **required** `string` (values: default): The name of the table auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerTableAuditingPolicy](#servertableauditingpolicy)

### ServerTableAuditingPolicies_CreateOrUpdate
Creates or updates a servers's table auditing policy. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.ServerTableAuditingPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "tableAuditingPolicyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * tableAuditingPolicyName **required** `string` (values: default): The name of the table auditing policy.
  * parameters **required** [ServerTableAuditingPolicy](#servertableauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerTableAuditingPolicy](#servertableauditingpolicy)

### DatabaseTableAuditingPolicies_ListByDatabase
Lists a database's table auditing policies. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.DatabaseTableAuditingPolicies_ListByDatabase({
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
  * databaseName **required** `string`: The name of the database for which the table audit policy is defined.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseTableAuditingPolicyListResult](#databasetableauditingpolicylistresult)

### DatabaseTableAuditingPolicies_Get
Gets a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.DatabaseTableAuditingPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "tableAuditingPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the table audit policy is defined.
  * tableAuditingPolicyName **required** `string` (values: default): The name of the table auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseTableAuditingPolicy](#databasetableauditingpolicy)

### DatabaseTableAuditingPolicies_CreateOrUpdate
Creates or updates a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.DatabaseTableAuditingPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "tableAuditingPolicyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the table auditing policy will be defined.
  * tableAuditingPolicyName **required** `string` (values: default): The name of the table auditing policy.
  * parameters **required** [DatabaseTableAuditingPolicy](#databasetableauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseTableAuditingPolicy](#databasetableauditingpolicy)

### DatabaseConnectionPolicies_Get
Gets a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.DatabaseConnectionPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "connectionPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the connection policy is defined.
  * connectionPolicyName **required** `string` (values: default): The name of the connection policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseConnectionPolicy](#databaseconnectionpolicy)

### DatabaseConnectionPolicies_CreateOrUpdate
Creates or updates a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.


```js
azure_sql_tableauditing.DatabaseConnectionPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "connectionPolicyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the connection policy will be defined.
  * connectionPolicyName **required** `string` (values: default): The name of the connection policy.
  * parameters **required** [DatabaseConnectionPolicy](#databaseconnectionpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseConnectionPolicy](#databaseconnectionpolicy)



## Definitions

### DatabaseConnectionPolicy
* DatabaseConnectionPolicy `object`: A database connection policy.
  * kind `string`: Resource kind.
  * location `string`: Resource location.
  * properties [DatabaseConnectionPolicyProperties](#databaseconnectionpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseConnectionPolicyProperties
* DatabaseConnectionPolicyProperties `object`: Properties of a database connection policy.
  * proxyDnsName `string`: The fully qualified host name of the auditing proxy.
  * proxyPort `string`: The port number of the auditing proxy.
  * redirectionState `string`: The state of proxy redirection.
  * securityEnabledAccess `string`: The state of security access.
  * state `string`: The connection policy state.
  * useServerDefault `string`: Whether server default is enabled or disabled.
  * visibility `string`: The visibility of the auditing proxy.

### DatabaseTableAuditingPolicy
* DatabaseTableAuditingPolicy `object`: A database table auditing policy.
  * kind `string`: Resource kind.
  * location `string`: Resource location.
  * properties [DatabaseTableAuditingPolicyProperties](#databasetableauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseTableAuditingPolicyListResult
* DatabaseTableAuditingPolicyListResult `object`: Represents the response to a list database table auditing policies request.
  * value **required** `array`: The list of database table auditing policies.
    * items [DatabaseTableAuditingPolicy](#databasetableauditingpolicy)

### DatabaseTableAuditingPolicyProperties
* DatabaseTableAuditingPolicyProperties `object`: Properties of a database table auditing policy.
  * useServerDefault `string`: Whether server default is enabled or disabled.
  * auditLogsTableName `string`: The audit logs table name.
  * auditingState `string`: The state of the policy.
  * eventTypesToAudit `string`: Comma-separated list of event types to audit.
  * fullAuditLogsTableName `string`: The full audit logs table name.
  * retentionDays `string`: The number of days to keep in the audit logs.
  * storageAccountKey `string`: The key of the auditing storage account.
  * storageAccountName `string`: The table storage account name
  * storageAccountResourceGroupName `string`: The table storage account resource group name
  * storageAccountSecondaryKey `string`: The secondary key of the auditing storage account.
  * storageAccountSubscriptionId `string`: The table storage subscription Id.
  * storageTableEndpoint `string`: The storage table endpoint.

### ServerTableAuditingPolicy
* ServerTableAuditingPolicy `object`: A server table auditing policy.
  * kind `string`: Resource kind.
  * location `string`: Resource location.
  * properties [ServerTableAuditingPolicyProperties](#servertableauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerTableAuditingPolicyListResult
* ServerTableAuditingPolicyListResult `object`: Represents the response to a list server table auditing policies request.
  * value **required** `array`: The list of server table auditing policies.
    * items [ServerTableAuditingPolicy](#servertableauditingpolicy)

### ServerTableAuditingPolicyProperties
* ServerTableAuditingPolicyProperties: Properties of a server table auditing policy.
  * auditLogsTableName `string`: The audit logs table name.
  * auditingState `string`: The state of the policy.
  * eventTypesToAudit `string`: Comma-separated list of event types to audit.
  * fullAuditLogsTableName `string`: The full audit logs table name.
  * retentionDays `string`: The number of days to keep in the audit logs.
  * storageAccountKey `string`: The key of the auditing storage account.
  * storageAccountName `string`: The table storage account name
  * storageAccountResourceGroupName `string`: The table storage account resource group name
  * storageAccountSecondaryKey `string`: The secondary key of the auditing storage account.
  * storageAccountSubscriptionId `string`: The table storage subscription Id.
  * storageTableEndpoint `string`: The storage table endpoint.

### TableAuditingPolicyProperties
* TableAuditingPolicyProperties `object`: Properties of a table auditing policy.
  * auditLogsTableName `string`: The audit logs table name.
  * auditingState `string`: The state of the policy.
  * eventTypesToAudit `string`: Comma-separated list of event types to audit.
  * fullAuditLogsTableName `string`: The full audit logs table name.
  * retentionDays `string`: The number of days to keep in the audit logs.
  * storageAccountKey `string`: The key of the auditing storage account.
  * storageAccountName `string`: The table storage account name
  * storageAccountResourceGroupName `string`: The table storage account resource group name
  * storageAccountSecondaryKey `string`: The secondary key of the auditing storage account.
  * storageAccountSubscriptionId `string`: The table storage subscription Id.
  * storageTableEndpoint `string`: The storage table endpoint.


