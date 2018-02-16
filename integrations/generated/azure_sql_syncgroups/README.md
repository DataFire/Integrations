# @datafire/azure_sql_syncgroups

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_syncgroups
```
```js
let azure_sql_syncgroups = require('@datafire/azure_sql_syncgroups').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_syncgroups.SyncGroups_ListSyncDatabaseIds({
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### SyncGroups_ListSyncDatabaseIds
Gets a collection of sync database ids.


```js
azure_sql_syncgroups.SyncGroups_ListSyncDatabaseIds({
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The name of the region where the resource is located.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncDatabaseIdListResult](#syncdatabaseidlistresult)

### SyncGroups_ListByDatabase
Lists sync groups under a hub database.


```js
azure_sql_syncgroups.SyncGroups_ListByDatabase({
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
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncGroupListResult](#syncgrouplistresult)

### SyncGroups_Delete
Deletes a sync group.


```js
azure_sql_syncgroups.SyncGroups_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SyncGroups_Get
Gets a sync group.


```js
azure_sql_syncgroups.SyncGroups_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncGroup](#syncgroup)

### SyncGroups_Update
Updates a sync group.


```js
azure_sql_syncgroups.SyncGroups_Update({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * parameters **required** [SyncGroup](#syncgroup)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncGroup](#syncgroup)

### SyncGroups_CreateOrUpdate
Creates or updates a sync group.


```js
azure_sql_syncgroups.SyncGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * parameters **required** [SyncGroup](#syncgroup)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncGroup](#syncgroup)

### SyncGroups_CancelSync
Cancels a sync group synchronization.


```js
azure_sql_syncgroups.SyncGroups_CancelSync({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SyncGroups_ListHubSchemas
Gets a collection of hub database schemas.


```js
azure_sql_syncgroups.SyncGroups_ListHubSchemas({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncFullSchemaPropertiesListResult](#syncfullschemapropertieslistresult)

### SyncGroups_ListLogs
Gets a collection of sync group logs.


```js
azure_sql_syncgroups.SyncGroups_ListLogs({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "startTime": "",
  "endTime": "",
  "type": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * startTime **required** `string`: Get logs generated after this time.
  * endTime **required** `string`: Get logs generated before this time.
  * type **required** `string` (values: All, Error, Warning, Success): The types of logs to retrieve.
  * continuationToken `string`: The continuation token for this operation.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncGroupLogListResult](#syncgrouploglistresult)

### SyncGroups_RefreshHubSchema
Refreshes a hub database schema.


```js
azure_sql_syncgroups.SyncGroups_RefreshHubSchema({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SyncGroups_TriggerSync
Triggers a sync group synchronization.


```js
azure_sql_syncgroups.SyncGroups_TriggerSync({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

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

### SyncDatabaseIdListResult
* SyncDatabaseIdListResult `object`: A list of sync database ID properties.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncDatabaseIdProperties](#syncdatabaseidproperties)

### SyncDatabaseIdProperties
* SyncDatabaseIdProperties `object`: Properties of the sync database id.
  * id `string`: ARM resource id of sync database.

### SyncFullSchemaProperties
* SyncFullSchemaProperties `object`: Properties of the database full schema.
  * lastUpdateTime `string`: Last update time of the database schema.
  * tables `array`: List of tables in the database full schema.
    * items [SyncFullSchemaTable](#syncfullschematable)

### SyncFullSchemaPropertiesListResult
* SyncFullSchemaPropertiesListResult `object`: A list of sync schema properties.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncFullSchemaProperties](#syncfullschemaproperties)

### SyncFullSchemaTable
* SyncFullSchemaTable `object`: Properties of the table in the database full schema.
  * columns `array`: List of columns in the table of database full schema.
    * items [SyncFullSchemaTableColumn](#syncfullschematablecolumn)
  * errorId `string`: Error id of the table.
  * hasError `boolean`: If there is error in the table.
  * name `string`: Name of the table.
  * quotedName `string`: Quoted name of the table.

### SyncFullSchemaTableColumn
* SyncFullSchemaTableColumn `object`: Properties of the column in the table of database full schema.
  * dataSize `string`: Data size of the column.
  * dataType `string`: Data type of the column.
  * errorId `string`: Error id of the column.
  * hasError `boolean`: If there is error in the table.
  * isPrimaryKey `boolean`: If it is the primary key of the table.
  * name `string`: Name of the column.
  * quotedName `string`: Quoted name of the column.

### SyncGroup
* SyncGroup `object`: An Azure SQL Database sync group.
  * properties [SyncGroupProperties](#syncgroupproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SyncGroupListResult
* SyncGroupListResult `object`: A list of sync groups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncGroup](#syncgroup)

### SyncGroupLogListResult
* SyncGroupLogListResult `object`: A list of sync group log properties.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncGroupLogProperties](#syncgrouplogproperties)

### SyncGroupLogProperties
* SyncGroupLogProperties `object`: Properties of an Azure SQL Database sync group log.
  * details `string`: Details of the sync group log.
  * operationStatus `string`: OperationStatus of the sync group log.
  * source `string`: Source of the sync group log.
  * timestamp `string`: Timestamp of the sync group log.
  * tracingId `string`: TracingId of the sync group log.
  * type `string` (values: All, Error, Warning, Success): Type of the sync group log.

### SyncGroupProperties
* SyncGroupProperties `object`: Properties of a sync group.
  * conflictResolutionPolicy `string` (values: HubWin, MemberWin): Conflict resolution policy of the sync group.
  * hubDatabasePassword `string`: Password for the sync group hub database credential.
  * hubDatabaseUserName `string`: User name for the sync group hub database credential.
  * interval `integer`: Sync interval of the sync group.
  * lastSyncTime `string`: Last sync time of the sync group.
  * schema [SyncGroupSchema](#syncgroupschema)
  * syncDatabaseId `string`: ARM resource id of the sync database in the sync group.
  * syncState `string` (values: NotReady, Error, Warning, Progressing, Good): Sync state of the sync group.

### SyncGroupSchema
* SyncGroupSchema `object`: Properties of sync group schema.
  * masterSyncMemberName `string`: Name of master sync member where the schema is from.
  * tables `array`: List of tables in sync group schema.
    * items [SyncGroupSchemaTable](#syncgroupschematable)

### SyncGroupSchemaTable
* SyncGroupSchemaTable `object`: Properties of table in sync group schema.
  * columns `array`: List of columns in sync group schema.
    * items [SyncGroupSchemaTableColumn](#syncgroupschematablecolumn)
  * quotedName `string`: Quoted name of sync group schema table.

### SyncGroupSchemaTableColumn
* SyncGroupSchemaTableColumn `object`: Properties of column in sync group table.
  * dataSize `string`: Data size of the column.
  * dataType `string`: Data type of the column.
  * quotedName `string`: Quoted name of sync group table column.


