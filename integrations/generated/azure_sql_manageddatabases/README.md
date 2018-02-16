# @datafire/azure_sql_manageddatabases

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_manageddatabases
```
```js
let azure_sql_manageddatabases = require('@datafire/azure_sql_manageddatabases').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_manageddatabases.ManagedDatabases_CompleteRestore({
  "locationName": "",
  "operationId": "",
  "parameters": {
    "lastBackupName": ""
  },
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ManagedDatabases_CompleteRestore
Completes the restore operation on a managed database.


```js
azure_sql_manageddatabases.ManagedDatabases_CompleteRestore({
  "locationName": "",
  "operationId": "",
  "parameters": {
    "lastBackupName": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The name of the region where the resource is located.
  * operationId **required** `string`: Management operation id that this request tries to complete.
  * parameters **required** [CompleteManagedDatabaseRestoreDefinition](#completemanageddatabaserestoredefinition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedDatabases_ListByInstance
Gets a list of managed databases.


```js
azure_sql_manageddatabases.ManagedDatabases_ListByInstance({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabaseListResult](#manageddatabaselistresult)

### ManagedDatabases_Delete
Deletes the managed database.


```js
azure_sql_manageddatabases.ManagedDatabases_Delete({
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
*Output schema unknown*

### ManagedDatabases_Get
Gets a managed database.


```js
azure_sql_manageddatabases.ManagedDatabases_Get({
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
* output [ManagedDatabase](#manageddatabase)

### ManagedDatabases_Update
Updates an existing database.


```js
azure_sql_manageddatabases.ManagedDatabases_Update({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
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
  * parameters **required** [ManagedDatabaseUpdate](#manageddatabaseupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabase](#manageddatabase)

### ManagedDatabases_CreateOrUpdate
Creates a new database or updates an existing database.


```js
azure_sql_manageddatabases.ManagedDatabases_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * parameters **required** [ManagedDatabase](#manageddatabase)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabase](#manageddatabase)



## Definitions

### CompleteManagedDatabaseRestoreDefinition
* CompleteManagedDatabaseRestoreDefinition `object`: Contains the information necessary to perform a complete managed database restore operation.
  * lastBackupName **required** `string`: The last backup name to apply

### Error
* Error `object`: An error response.
  * error [ErrorProperties](#errorproperties)

### ErrorProperties
* ErrorProperties `object`: An error response.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [Error](#error)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### ManagedDatabase
* ManagedDatabase `object`: A managed database resource.
  * properties [ManagedDatabaseProperties](#manageddatabaseproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedDatabaseListResult
* ManagedDatabaseListResult `object`: A list of managed databases.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedDatabase](#manageddatabase)

### ManagedDatabaseProperties
* ManagedDatabaseProperties `object`: The managed database's properties.
  * catalogCollation `string` (values: DATABASE_DEFAULT, SQL_Latin1_General_CP1_CI_AS): Collation of the metadata catalog.
  * collation `string`: Collation of the managed database.
  * createMode `string` (values: Default, RestoreExternalBackup, PointInTimeRestore): Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified.
  * creationDate `string`: Creation date of the database.
  * defaultSecondaryLocation `string`: Geo paired region.
  * restorePointInTime `string`: Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
  * sourceDatabaseId `string`: The resource identifier of the source database associated with create operation of this database.
  * status `string` (values: Online, Offline, Shutdown, Creating, Inaccessible): Status for the database.
  * storageContainerSasToken `string`: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
  * storageContainerUri `string`: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

### ManagedDatabaseUpdate
* ManagedDatabaseUpdate `object`: An managed database update.
  * properties [ManagedDatabaseProperties](#manageddatabaseproperties)
  * tags `object`: Resource tags.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


