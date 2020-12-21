# @datafire/azure_sql_recoverablemanageddatabases

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_recoverablemanageddatabases
```
```js
let azure_sql_recoverablemanageddatabases = require('@datafire/azure_sql_recoverablemanageddatabases').create({
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

### RecoverableManagedDatabases_ListByInstance
Gets a list of recoverable managed databases.


```js
azure_sql_recoverablemanageddatabases.RecoverableManagedDatabases_ListByInstance({
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
* output [RecoverableManagedDatabaseListResult](#recoverablemanageddatabaselistresult)

### RecoverableManagedDatabases_Get
Gets a recoverable managed database.


```js
azure_sql_recoverablemanageddatabases.RecoverableManagedDatabases_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "recoverableDatabaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * recoverableDatabaseName **required** `string`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [RecoverableManagedDatabase](#recoverablemanageddatabase)



## Definitions

### ProxyResource
* ProxyResource `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecoverableManagedDatabase
* RecoverableManagedDatabase `object`: A recoverable managed database resource.
  * properties [RecoverableManagedDatabaseProperties](#recoverablemanageddatabaseproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecoverableManagedDatabaseListResult
* RecoverableManagedDatabaseListResult `object`: A list of recoverable managed databases.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [RecoverableManagedDatabase](#recoverablemanageddatabase)

### RecoverableManagedDatabaseProperties
* RecoverableManagedDatabaseProperties `object`: The recoverable managed database's properties.
  * lastAvailableBackupDate `string`: The last available backup date.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


