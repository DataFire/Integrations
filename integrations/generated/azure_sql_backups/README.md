# @datafire/azure_sql_backups

Client library for Azure SQL Database Backup

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_backups
```
```js
let azure_sql_backups = require('@datafire/azure_sql_backups').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_backups.RestorePoints_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides read functionality for Azure SQL Database Backups

## Actions

### RestorePoints_ListByDatabase
Gets a list of database restore points.


```js
azure_sql_backups.RestorePoints_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to get available restore points.

#### Output
* output [RestorePointListResult](#restorepointlistresult)

### RecoverableDatabases_ListByServer
Gets a list of recoverable databases


```js
azure_sql_backups.RecoverableDatabases_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [RecoverableDatabaseListResult](#recoverabledatabaselistresult)

### RecoverableDatabases_Get
Gets a recoverable database, which is a resource representing a database's geo backup


```js
azure_sql_backups.RecoverableDatabases_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database

#### Output
* output [RecoverableDatabase](#recoverabledatabase)

### RestorableDroppedDatabases_ListByServer
Gets a list of deleted databases that can be restored


```js
azure_sql_backups.RestorableDroppedDatabases_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [RestorableDroppedDatabaseListResult](#restorabledroppeddatabaselistresult)

### RestorableDroppedDatabases_Get
Gets a deleted database that can be restored


```js
azure_sql_backups.RestorableDroppedDatabases_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "restorableDroppededDatabaseId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * restorableDroppededDatabaseId **required** `string`: The id of the deleted database in the form of databaseName,deletionTimeInFileTimeFormat

#### Output
* output [RestorableDroppedDatabase](#restorabledroppeddatabase)



## Definitions

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecoverableDatabase
* RecoverableDatabase `object`: A recoverable database
  * properties [RecoverableDatabaseProperties](#recoverabledatabaseproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecoverableDatabaseListResult
* RecoverableDatabaseListResult `object`: The response to a list recoverable databases request
  * value **required** `array`: A list of recoverable databases
    * items [RecoverableDatabase](#recoverabledatabase)

### RecoverableDatabaseProperties
* RecoverableDatabaseProperties `object`: The properties of a recoverable database
  * edition `string`: The edition of the database
  * elasticPoolName `string`: The elastic pool name of the database
  * lastAvailableBackupDate `string`: The last available backup date of the database (ISO8601 format)
  * serviceLevelObjective `string`: The service level objective name of the database

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RestorableDroppedDatabase
* RestorableDroppedDatabase `object`: A restorable dropped database
  * location `string`: The geo-location where the resource lives
  * properties [RestorableDroppedDatabaseProperties](#restorabledroppeddatabaseproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RestorableDroppedDatabaseListResult
* RestorableDroppedDatabaseListResult `object`: The response to a list restorable dropped databases request
  * value **required** `array`: A list of restorable dropped databases
    * items [RestorableDroppedDatabase](#restorabledroppeddatabase)

### RestorableDroppedDatabaseProperties
* RestorableDroppedDatabaseProperties `object`: The properties of a restorable dropped database
  * creationDate `string`: The creation date of the database (ISO8601 format)
  * databaseName `string`: The name of the database
  * deletionDate `string`: The deletion date of the database (ISO8601 format)
  * earliestRestoreDate `string`: The earliest restore date of the database (ISO8601 format)
  * edition `string`: The edition of the database
  * elasticPoolName `string`: The elastic pool name of the database
  * maxSizeBytes `string`: The max size in bytes of the database
  * serviceLevelObjective `string`: The service level objective name of the database

### RestorePoint
* RestorePoint `object`: A database restore point.
  * properties [RestorePointProperties](#restorepointproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RestorePointListResult
* RestorePointListResult `object`: The response to a list database restore points request.
  * value **required** `array`: The list of database restore points.
    * items [RestorePoint](#restorepoint)

### RestorePointProperties
* RestorePointProperties `object`: Represents the properties of a database restore point.
  * earliestRestoreDate `string`: Earliest restore time (ISO8601 format). Populated when restorePointType = DISCRETE. Null otherwise.
  * restorePointCreationDate `string`: Restore point creation time (ISO8601 format). Populated when restorePointType = CONTINUOUS. Null otherwise.
  * restorePointType `string` (values: DISCRETE, CONTINUOUS): The restore point type of the database restore point.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


