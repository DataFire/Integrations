# @datafire/azure_sql_syncmembers

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_syncmembers
```
```js
let azure_sql_syncmembers = require('@datafire/azure_sql_syncmembers').create({
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

### SyncMembers_ListBySyncGroup
Lists sync members in the given sync group.


```js
azure_sql_syncmembers.SyncMembers_ListBySyncGroup({
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
* output [SyncMemberListResult](#syncmemberlistresult)

### SyncMembers_Delete
Deletes a sync member.


```js
azure_sql_syncmembers.SyncMembers_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "syncMemberName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group on which the sync member is hosted.
  * syncMemberName **required** `string`: The name of the sync member.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SyncMembers_Get
Gets a sync member.


```js
azure_sql_syncmembers.SyncMembers_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "syncMemberName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group on which the sync member is hosted.
  * syncMemberName **required** `string`: The name of the sync member.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncMember](#syncmember)

### SyncMembers_Update
Updates an existing sync member.


```js
azure_sql_syncmembers.SyncMembers_Update({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "syncMemberName": "",
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
  * syncGroupName **required** `string`: The name of the sync group on which the sync member is hosted.
  * syncMemberName **required** `string`: The name of the sync member.
  * parameters **required** [SyncMember](#syncmember)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncMember](#syncmember)

### SyncMembers_CreateOrUpdate
Creates or updates a sync member.


```js
azure_sql_syncmembers.SyncMembers_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "syncMemberName": "",
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
  * syncGroupName **required** `string`: The name of the sync group on which the sync member is hosted.
  * syncMemberName **required** `string`: The name of the sync member.
  * parameters **required** [SyncMember](#syncmember)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncMember](#syncmember)

### SyncMembers_RefreshMemberSchema
Refreshes a sync member database schema.


```js
azure_sql_syncmembers.SyncMembers_RefreshMemberSchema({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "syncMemberName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group on which the sync member is hosted.
  * syncMemberName **required** `string`: The name of the sync member.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SyncMembers_ListMemberSchemas
Gets a sync member database schema.


```js
azure_sql_syncmembers.SyncMembers_ListMemberSchemas({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "syncGroupName": "",
  "syncMemberName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database on which the sync group is hosted.
  * syncGroupName **required** `string`: The name of the sync group on which the sync member is hosted.
  * syncMemberName **required** `string`: The name of the sync member.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncFullSchemaPropertiesListResult](#syncfullschemapropertieslistresult)



## Definitions

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

### SyncMember
* SyncMember `object`: An Azure SQL Database sync member.
  * properties [SyncMemberProperties](#syncmemberproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SyncMemberListResult
* SyncMemberListResult `object`: A list of Azure SQL Database sync members.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncMember](#syncmember)

### SyncMemberProperties
* SyncMemberProperties `object`: Properties of a sync member.
  * databaseName `string`: Database name of the member database in the sync member.
  * databaseType `string` (values: AzureSqlDatabase, SqlServerDatabase): Database type of the sync member.
  * password `string`: Password of the member database in the sync member.
  * serverName `string`: Server name of the member database in the sync member
  * sqlServerDatabaseId `string`: SQL Server database id of the sync member.
  * syncAgentId `string`: ARM resource id of the sync agent in the sync member.
  * syncDirection `string` (values: Bidirectional, OneWayMemberToHub, OneWayHubToMember): Sync direction of the sync member.
  * syncState `string` (values: SyncInProgress, SyncSucceeded, SyncFailed, DisabledTombstoneCleanup, DisabledBackupRestore, SyncSucceededWithWarnings, SyncCancelling, SyncCancelled, UnProvisioned, Provisioning, Provisioned, ProvisionFailed, DeProvisioning, DeProvisioned, DeProvisionFailed, Reprovisioning, ReprovisionFailed, UnReprovisioned): Sync state of the sync member.
  * userName `string`: User name of the member database in the sync member.


