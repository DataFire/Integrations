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

azure_sql_databases.Databases_ListByServer({
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

### Databases_Export
Exports a database.


```js
azure_sql_databases.Databases_Export({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": {
    "storageKeyType": "",
    "storageKey": "",
    "storageUri": "",
    "administratorLogin": "",
    "administratorLoginPassword": ""
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
  * parameters **required** [ImportExportDatabaseDefinition](#importexportdatabasedefinition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ImportExportOperationResult](#importexportoperationresult)

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
  * properties [DatabaseProperties](#databaseproperties)
  * sku `object`: The resource model definition representing SKU
    * capacity `integer`: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU. Ex - P3. It is typically a letter+number code
    * size `string`: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
    * tier `string`: This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
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

### DatabaseOperation
* DatabaseOperation `object`: A database operation.
  * properties [DatabaseOperationProperties](#databaseoperationproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseOperationListResult
* DatabaseOperationListResult `object`: The response to a list database operations request
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [DatabaseOperation](#databaseoperation)

### DatabaseOperationProperties
* DatabaseOperationProperties `object`: The properties of a database operation.
  * databaseName `string`: The name of the database the operation is being performed on.
  * errorCode `integer`: The operation error code.
  * errorDescription `string`: The operation error description.
  * errorSeverity `integer`: The operation error severity.
  * isUserError `boolean`: Whether or not the error is a user error.
  * operation `string`: The name of operation.
  * operationFriendlyName `string`: The friendly name of operation.
  * percentComplete `integer`: The percentage of the operation completed.
  * serverName `string`: The name of the server.
  * startTime `string`: The operation start time.
  * state `string` (values: Pending, InProgress, Succeeded, Failed, CancelInProgress, Cancelled): The operation state.

### DatabaseProperties
* DatabaseProperties `object`: The database's properties.
  * catalogCollation `string` (values: DATABASE_DEFAULT, SQL_Latin1_General_CP1_CI_AS): Collation of the metadata catalog.
  * collation `string`: The collation of the database.
  * createMode `string` (values: Default, Copy, Secondary, OnlineSecondary, PointInTimeRestore, Restore, Recovery, RestoreExternalBackup, RestoreExternalBackupSecondary, RestoreLongTermRetentionBackup): Specifies the mode of database creation.
  * creationDate `string`: The creation date of the database (ISO8601 format).
  * currentServiceObjectiveName `string`: The current service level objective name of the database.
  * databaseId `string`: The ID of the database.
  * defaultSecondaryLocation `string`: The default secondary region for this database.
  * elasticPoolId `string`: The resource identifier of the elastic pool containing this database.
  * failoverGroupId `string`: Failover Group resource identifier that this database belongs to.
  * longTermRetentionBackupResourceId `string`: The resource identifier of the long term retention backup associated with create operation of this database.
  * maxSizeBytes `integer`: The max size of the database expressed in bytes.
  * recoverableDatabaseId `string`: The resource identifier of the recoverable database associated with create operation of this database.
  * recoveryServicesRecoveryPointId `string`: The resource identifier of the recovery point associated with create operation of this database.
  * restorableDroppedDatabaseId `string`: The resource identifier of the restorable dropped database associated with create operation of this database.
  * restorePointInTime `string`: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
  * sampleName `string` (values: AdventureWorksLT, WideWorldImportersStd, WideWorldImportersFull): The name of the sample schema to apply when creating this database.
  * sourceDatabaseDeletionDate `string`: Specifies the time that the database was deleted.
  * sourceDatabaseId `string`: The resource identifier of the source database associated with create operation of this database.
  * status `string` (values: Online, Restoring, RecoveryPending, Recovering, Suspect, Offline, Standby, Shutdown, EmergencyMode, AutoClosed, Copying, Creating, Inaccessible, OfflineSecondary, Pausing, Paused, Resuming, Scaling): The status of the database.
  * zoneRedundant `boolean`: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

### DatabaseUpdate
* DatabaseUpdate `object`: A database resource.
  * properties [DatabaseProperties](#databaseproperties)
  * sku `object`: The resource model definition representing SKU
    * capacity `integer`: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU. Ex - P3. It is typically a letter+number code
    * size `string`: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
    * tier `string`: This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
  * tags `object`: Resource tags.

### ImportExportDatabaseDefinition
* ImportExportDatabaseDefinition `object`: Contains the information necessary to perform import/export operation.
  * administratorLogin **required** `string`: Administrator login name.
  * administratorLoginPassword **required** `string`: Administrator login password.
  * authenticationType `string`: Authentication type.
  * databaseName `string`: Name of the import database.
  * edition `string`: Edition of the import database.
  * maxSizeBytes `string`: Max size in bytes for the import database.
  * serviceObjectiveName `string`: Service level objective name of the import database.
  * storageKey **required** `string`: Storage key.
  * storageKeyType **required** `string`: Storage key type.
  * storageUri **required** `string`: Storage Uri.

### ImportExportOperationResult
* ImportExportOperationResult `object`: An ImportExport operation result resource.
  * properties [ImportExportOperationResultProperties](#importexportoperationresultproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ImportExportOperationResultProperties
* ImportExportOperationResultProperties `object`: Contains the operation result properties for import/export operation.
  * blobUri `string`: Blob Uri.
  * databaseName `string`: Database name.
  * errorMessage `string`: Error message.
  * lastModifiedTime `string`: Last modified time.
  * queuedTime `string`: Queued time.
  * requestId `string`: Request Id.
  * requestType `string`: Request type.
  * serverName `string`: Server name.
  * status `string`: Operation status.


