# @datafire/azure_sql_blobauditing

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_blobauditing
```
```js
let azure_sql_blobauditing = require('@datafire/azure_sql_blobauditing').create({
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

### ServerBlobAuditingPolicies_ListByServer
Lists auditing settings of a server.


```js
azure_sql_blobauditing.ServerBlobAuditingPolicies_ListByServer({
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
* output [ServerBlobAuditingPolicyListResult](#serverblobauditingpolicylistresult)

### ServerBlobAuditingPolicies_Get
Gets a server's blob auditing policy.


```js
azure_sql_blobauditing.ServerBlobAuditingPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "blobAuditingPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerBlobAuditingPolicy](#serverblobauditingpolicy)

### ServerBlobAuditingPolicies_CreateOrUpdate
Creates or updates a server's blob auditing policy.


```js
azure_sql_blobauditing.ServerBlobAuditingPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
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
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * parameters **required** [ServerBlobAuditingPolicy](#serverblobauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerBlobAuditingPolicy](#serverblobauditingpolicy)

### DatabaseBlobAuditingPolicies_ListByDatabase
Lists auditing settings of a database.


```js
azure_sql_blobauditing.DatabaseBlobAuditingPolicies_ListByDatabase({
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
* output [DatabaseBlobAuditingPolicyListResult](#databaseblobauditingpolicylistresult)

### DatabaseBlobAuditingPolicies_Get
Gets a database's blob auditing policy.


```js
azure_sql_blobauditing.DatabaseBlobAuditingPolicies_Get({
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
  * databaseName **required** `string`: The name of the database.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)

### DatabaseBlobAuditingPolicies_CreateOrUpdate
Creates or updates a database's blob auditing policy.


```js
azure_sql_blobauditing.DatabaseBlobAuditingPolicies_CreateOrUpdate({
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
  * databaseName **required** `string`: The name of the database.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * parameters **required** [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)

### ExtendedDatabaseBlobAuditingPolicies_Get
Gets an extended database's blob auditing policy.


```js
azure_sql_blobauditing.ExtendedDatabaseBlobAuditingPolicies_Get({
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
  * databaseName **required** `string`: The name of the database.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ExtendedDatabaseBlobAuditingPolicy](#extendeddatabaseblobauditingpolicy)

### ExtendedDatabaseBlobAuditingPolicies_CreateOrUpdate
Creates or updates an extended database's blob auditing policy.


```js
azure_sql_blobauditing.ExtendedDatabaseBlobAuditingPolicies_CreateOrUpdate({
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
  * databaseName **required** `string`: The name of the database.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * parameters **required** [ExtendedDatabaseBlobAuditingPolicy](#extendeddatabaseblobauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ExtendedDatabaseBlobAuditingPolicy](#extendeddatabaseblobauditingpolicy)

### ExtendedServerBlobAuditingPolicies_Get
Gets an extended server's blob auditing policy.


```js
azure_sql_blobauditing.ExtendedServerBlobAuditingPolicies_Get({
  "resourceGroupName": "",
  "serverName": "",
  "blobAuditingPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ExtendedServerBlobAuditingPolicy](#extendedserverblobauditingpolicy)

### ExtendedServerBlobAuditingPolicies_CreateOrUpdate
Creates or updates an extended server's blob auditing policy.


```js
azure_sql_blobauditing.ExtendedServerBlobAuditingPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
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
  * blobAuditingPolicyName **required** `string` (values: default): The name of the blob auditing policy.
  * parameters **required** [ExtendedServerBlobAuditingPolicy](#extendedserverblobauditingpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ExtendedServerBlobAuditingPolicy](#extendedserverblobauditingpolicy)



## Definitions

### DatabaseBlobAuditingPolicy
* DatabaseBlobAuditingPolicy `object`: A database blob auditing policy.
  * kind `string`: Resource kind.
  * properties [DatabaseBlobAuditingPolicyProperties](#databaseblobauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseBlobAuditingPolicyListResult
* DatabaseBlobAuditingPolicyListResult `object`: A list of database auditing settings.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [DatabaseBlobAuditingPolicy](#databaseblobauditingpolicy)

### DatabaseBlobAuditingPolicyProperties
* DatabaseBlobAuditingPolicyProperties `object`: Properties of a database blob auditing policy.
  * auditActionsAndGroups `array`: Specifies the Actions-Groups and Actions to audit.
    * items `string`
  * isAzureMonitorTargetEnabled `boolean`: Specifies whether audit events are sent to Azure Monitor. 
  * isStorageSecondaryKeyInUse `boolean`: Specifies whether storageAccountAccessKey value is the storage's secondary key.
  * queueDelayMs `integer`: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
  * retentionDays `integer`: Specifies the number of days to keep in the audit logs in the storage account.
  * state **required** `string` (values: Enabled, Disabled): Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
  * storageAccountAccessKey `string`: Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required.
  * storageAccountSubscriptionId `string`: Specifies the blob storage subscription Id.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

### ExtendedDatabaseBlobAuditingPolicy
* ExtendedDatabaseBlobAuditingPolicy `object`: An extended database blob auditing policy.
  * properties [ExtendedDatabaseBlobAuditingPolicyProperties](#extendeddatabaseblobauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ExtendedDatabaseBlobAuditingPolicyProperties
* ExtendedDatabaseBlobAuditingPolicyProperties `object`: Properties of an extended database blob auditing policy.
  * auditActionsAndGroups `array`: Specifies the Actions-Groups and Actions to audit.
    * items `string`
  * isAzureMonitorTargetEnabled `boolean`: Specifies whether audit events are sent to Azure Monitor. 
  * isStorageSecondaryKeyInUse `boolean`: Specifies whether storageAccountAccessKey value is the storage's secondary key.
  * predicateExpression `string`: Specifies condition of where clause when creating an audit.
  * queueDelayMs `integer`: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
  * retentionDays `integer`: Specifies the number of days to keep in the audit logs in the storage account.
  * state **required** `string` (values: Enabled, Disabled): Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
  * storageAccountAccessKey `string`: Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required.
  * storageAccountSubscriptionId `string`: Specifies the blob storage subscription Id.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

### ExtendedServerBlobAuditingPolicy
* ExtendedServerBlobAuditingPolicy `object`: An extended server blob auditing policy.
  * properties [ExtendedServerBlobAuditingPolicyProperties](#extendedserverblobauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ExtendedServerBlobAuditingPolicyProperties
* ExtendedServerBlobAuditingPolicyProperties `object`: Properties of an extended server blob auditing policy.
  * auditActionsAndGroups `array`: Specifies the Actions-Groups and Actions to audit.
    * items `string`
  * isAzureMonitorTargetEnabled `boolean`: Specifies whether audit events are sent to Azure Monitor. 
  * isStorageSecondaryKeyInUse `boolean`: Specifies whether storageAccountAccessKey value is the storage's secondary key.
  * predicateExpression `string`: Specifies condition of where clause when creating an audit.
  * queueDelayMs `integer`: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
  * retentionDays `integer`: Specifies the number of days to keep in the audit logs in the storage account.
  * state **required** `string` (values: Enabled, Disabled): Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
  * storageAccountAccessKey `string`: Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required.
  * storageAccountSubscriptionId `string`: Specifies the blob storage subscription Id.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

### ServerBlobAuditingPolicy
* ServerBlobAuditingPolicy `object`: A server blob auditing policy.
  * properties [ServerBlobAuditingPolicyProperties](#serverblobauditingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerBlobAuditingPolicyListResult
* ServerBlobAuditingPolicyListResult `object`: A list of server auditing settings.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ServerBlobAuditingPolicy](#serverblobauditingpolicy)

### ServerBlobAuditingPolicyProperties
* ServerBlobAuditingPolicyProperties `object`: Properties of a server blob auditing policy.
  * auditActionsAndGroups `array`: Specifies the Actions-Groups and Actions to audit.
    * items `string`
  * isAzureMonitorTargetEnabled `boolean`: Specifies whether audit events are sent to Azure Monitor. 
  * isStorageSecondaryKeyInUse `boolean`: Specifies whether storageAccountAccessKey value is the storage's secondary key.
  * queueDelayMs `integer`: Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
  * retentionDays `integer`: Specifies the number of days to keep in the audit logs in the storage account.
  * state **required** `string` (values: Enabled, Disabled): Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
  * storageAccountAccessKey `string`: Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required.
  * storageAccountSubscriptionId `string`: Specifies the blob storage subscription Id.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.


