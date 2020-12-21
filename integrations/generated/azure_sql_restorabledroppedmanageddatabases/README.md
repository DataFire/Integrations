# @datafire/azure_sql_restorabledroppedmanageddatabases

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_restorabledroppedmanageddatabases
```
```js
let azure_sql_restorabledroppedmanageddatabases = require('@datafire/azure_sql_restorabledroppedmanageddatabases').create({
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

### RestorableDroppedManagedDatabases_ListByInstance
Gets a list of restorable dropped managed databases.


```js
azure_sql_restorabledroppedmanageddatabases.RestorableDroppedManagedDatabases_ListByInstance({
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
* output [RestorableDroppedManagedDatabaseListResult](#restorabledroppedmanageddatabaselistresult)

### RestorableDroppedManagedDatabases_Get
Gets a restorable dropped managed database.


```js
azure_sql_restorabledroppedmanageddatabases.RestorableDroppedManagedDatabases_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "restorableDroppedDatabaseId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * restorableDroppedDatabaseId **required** `string`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [RestorableDroppedManagedDatabase](#restorabledroppedmanageddatabase)



## Definitions

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RestorableDroppedManagedDatabase
* RestorableDroppedManagedDatabase `object`: A restorable dropped managed database resource.
  * properties [RestorableDroppedManagedDatabaseProperties](#restorabledroppedmanageddatabaseproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RestorableDroppedManagedDatabaseListResult
* RestorableDroppedManagedDatabaseListResult `object`: A list of restorable dropped managed databases.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [RestorableDroppedManagedDatabase](#restorabledroppedmanageddatabase)

### RestorableDroppedManagedDatabaseProperties
* RestorableDroppedManagedDatabaseProperties `object`: The restorable dropped managed database's properties.
  * creationDate `string`: The creation date of the database (ISO8601 format).
  * databaseName `string`: The name of the database.
  * deletionDate `string`: The deletion date of the database (ISO8601 format).
  * earliestRestoreDate `string`: The earliest restore date of the database (ISO8601 format).

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


