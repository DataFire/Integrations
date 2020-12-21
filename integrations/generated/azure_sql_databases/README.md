# @datafire/azure_sql_databases

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_databases
```
```js
let azure_sql_databases = require('@datafire/azure_sql_databases').create({
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

### Databases_ListByServer
Gets a list of databases.


```js
azure_sql_databases.Databases_ListByServer({
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
* output [DatabaseListResult](#databaselistresult)

### Databases_Delete
Deletes the database.


```js
azure_sql_databases.Databases_Delete({
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
*Output schema unknown*

### Databases_Get
Gets a database.


```js
azure_sql_databases.Databases_Get({
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
* output [Database](#database)

### Databases_Update
Updates an existing database.


```js
azure_sql_databases.Databases_Update({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
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
  * parameters **required** [DatabaseUpdate](#databaseupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Database](#database)

### Databases_CreateOrUpdate
Creates a new database or updates an existing database.


```js
azure_sql_databases.Databases_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * parameters **required** [Database](#database)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Database](#database)

### Databases_Rename
Renames a database.


```js
azure_sql_databases.Databases_Rename({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": {
    "id": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to rename.
  * parameters **required** [ResourceMoveDefinition](#resourcemovedefinition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### Databases_Pause
Pauses a database.


```js
azure_sql_databases.Databases_Pause({
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
  * databaseName **required** `string`: The name of the database to be paused.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Database](#database)

### Databases_Resume
Resumes a database.


```js
azure_sql_databases.Databases_Resume({
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
  * databaseName **required** `string`: The name of the database to be resumed.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Database](#database)

### Databases_UpgradeDataWarehouse
Upgrades a data warehouse.


```js
azure_sql_databases.Databases_UpgradeDataWarehouse({
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
  * databaseName **required** `string`: The name of the database to be upgraded.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### Databases_ListByElasticPool
Gets a list of databases in an elastic pool.


```js
azure_sql_databases.Databases_ListByElasticPool({
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseListResult](#databaselistresult)



## Definitions

### Database
* Database `object`: A database resource.
  * kind `string`: Kind of database. This is metadata used for the Azure portal experience.
  * managedBy `string`: Resource that manages the database.
  * properties [DatabaseProperties](#databaseproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseListResult
* DatabaseListResult `object`: A list of databases.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Database](#database)

### DatabaseProperties
* DatabaseProperties `object`: The database's properties.
  * autoPauseDelay `integer`: Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
  * catalogCollation `string` (values: DATABASE_DEFAULT, SQL_Latin1_General_CP1_CI_AS): Collation of the metadata catalog.
  * collation `string`: The collation of the database.
  * createMode `string` (values: Default, Copy, Secondary, PointInTimeRestore, Restore, Recovery, RestoreExternalBackup, RestoreExternalBackupSecondary, RestoreLongTermRetentionBackup, OnlineSecondary): Specifies the mode of database creation.
  * creationDate `string`: The creation date of the database (ISO8601 format).
  * currentServiceObjectiveName `string`: The current service level objective name of the database.
  * currentSku [Sku](#sku)
  * databaseId `string`: The ID of the database.
  * defaultSecondaryLocation `string`: The default secondary region for this database.
  * earliestRestoreDate `string`: This records the earliest start date and time that restore is available for this database (ISO8601 format).
  * elasticPoolId `string`: The resource identifier of the elastic pool containing this database.
  * failoverGroupId `string`: Failover Group resource identifier that this database belongs to.
  * licenseType `string` (values: LicenseIncluded, BasePrice): The license type to apply for this database.
  * longTermRetentionBackupResourceId `string`: The resource identifier of the long term retention backup associated with create operation of this database.
  * maxLogSizeBytes `integer`: The max log size for this database.
  * maxSizeBytes `integer`: The max size of the database expressed in bytes.
  * minCapacity `number`: Minimal capacity that database will always have allocated, if not paused
  * pausedDate `string`: The date when database was paused by user configuration or action (ISO8601 format). Null if the database is ready.
  * readReplicaCount `integer`: The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases.
  * readScale `string` (values: Enabled, Disabled): If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases.
  * recoverableDatabaseId `string`: The resource identifier of the recoverable database associated with create operation of this database.
  * recoveryServicesRecoveryPointId `string`: The resource identifier of the recovery point associated with create operation of this database.
  * requestedServiceObjectiveName `string`: The requested service level objective name of the database.
  * restorableDroppedDatabaseId `string`: The resource identifier of the restorable dropped database associated with create operation of this database.
  * restorePointInTime `string`: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
  * resumedDate `string`: The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
  * sampleName `string` (values: AdventureWorksLT, WideWorldImportersStd, WideWorldImportersFull): The name of the sample schema to apply when creating this database.
  * sourceDatabaseDeletionDate `string`: Specifies the time that the database was deleted.
  * sourceDatabaseId `string`: The resource identifier of the source database associated with create operation of this database.
  * status `string` (values: Online, Restoring, RecoveryPending, Recovering, Suspect, Offline, Standby, Shutdown, EmergencyMode, AutoClosed, Copying, Creating, Inaccessible, OfflineSecondary, Pausing, Paused, Resuming, Scaling, OfflineChangingDwPerformanceTiers, OnlineChangingDwPerformanceTiers, Disabled): The status of the database.
  * zoneRedundant `boolean`: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

### DatabaseUpdate
* DatabaseUpdate `object`: A database resource.
  * properties [DatabaseProperties](#databaseproperties)
  * sku [Sku](#sku)
  * tags `object`: Resource tags.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceMoveDefinition
* ResourceMoveDefinition `object`: Contains the information necessary to perform a resource move (rename).
  * id **required** `string`: The target ID for the resource

### Sku
* Sku `object`: An ARM Resource SKU.
  * capacity `integer`: Capacity of the particular SKU.
  * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
  * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
  * size `string`: Size of the particular SKU
  * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


