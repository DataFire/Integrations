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

.then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

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
Deletes a managed database.


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

### ManagedDatabases_CompleteRestore
Completes the restore operation on a managed database.


```js
azure_sql_manageddatabases.ManagedDatabases_CompleteRestore({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "parameters": {
    "lastBackupName": ""
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
  * parameters **required** [CompleteDatabaseRestoreDefinition](#completedatabaserestoredefinition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedDatabaseRestoreDetails_Get
Gets managed database restore details.


```js
azure_sql_manageddatabases.ManagedDatabaseRestoreDetails_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "restoreDetailsName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * restoreDetailsName **required** `string` (values: Default): The name of the restore details to retrieve.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabaseRestoreDetailsResult](#manageddatabaserestoredetailsresult)



## Definitions

### CompleteDatabaseRestoreDefinition
* CompleteDatabaseRestoreDefinition `object`: Contains the information necessary to perform a complete database restore operation.
  * lastBackupName **required** `string`: The last backup name to apply

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
  * createMode `string` (values: Default, RestoreExternalBackup, PointInTimeRestore, Recovery): Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore.
  * creationDate `string`: Creation date of the database.
  * defaultSecondaryLocation `string`: Geo paired region.
  * earliestRestorePoint `string`: Earliest restore point in time for point in time restore.
  * failoverGroupId `string`: Instance Failover Group resource identifier that this managed database belongs to.
  * recoverableDatabaseId `string`: The resource identifier of the recoverable database associated with create operation of this database.
  * restorableDroppedDatabaseId `string`: The restorable dropped database resource id to restore when creating this database.
  * restorePointInTime `string`: Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
  * sourceDatabaseId `string`: The resource identifier of the source database associated with create operation of this database.
  * status `string` (values: Online, Offline, Shutdown, Creating, Inaccessible, Restoring, Updating): Status of the database.
  * storageContainerSasToken `string`: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
  * storageContainerUri `string`: Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.

### ManagedDatabaseRestoreDetailsProperties
* ManagedDatabaseRestoreDetailsProperties `object`: The managed database's restore details properties.
  * blockReason `string`: The reason why restore is in Blocked state.
  * currentRestoringFileName `string`: Current restoring file name.
  * lastRestoredFileName `string`: Last restored file name.
  * lastRestoredFileTime `string`: Last restored file time.
  * lastUploadedFileName `string`: Last uploaded file name.
  * lastUploadedFileTime `string`: Last uploaded file time.
  * numberOfFilesDetected `integer`: Number of files detected.
  * percentCompleted `number`: Percent completed.
  * status `string`: Restore status.
  * unrestorableFiles `array`: List of unrestorable files.
    * items `string`

### ManagedDatabaseRestoreDetailsResult
* ManagedDatabaseRestoreDetailsResult `object`: A managed database restore details.
  * properties [ManagedDatabaseRestoreDetailsProperties](#manageddatabaserestoredetailsproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedDatabaseUpdate
* ManagedDatabaseUpdate `object`: An managed database update.
  * properties [ManagedDatabaseProperties](#manageddatabaseproperties)
  * tags `object`: Resource tags.

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

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


