# @datafire/azure_sql_restorepoints

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_restorepoints
```
```js
let azure_sql_restorepoints = require('@datafire/azure_sql_restorepoints').create({
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

### RestorePoints_ListByDatabase
Gets a list of database restore points.


```js
azure_sql_restorepoints.RestorePoints_ListByDatabase({
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
* output [RestorePointListResult](#restorepointlistresult)

### RestorePoints_Create
Creates a restore point for a data warehouse.


```js
azure_sql_restorepoints.RestorePoints_Create({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": {
    "restorePointLabel": ""
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
  * parameters **required** [CreateDatabaseRestorePointDefinition](#createdatabaserestorepointdefinition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [RestorePoint](#restorepoint)

### RestorePoints_Delete
Deletes a restore point.


```js
azure_sql_restorepoints.RestorePoints_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "restorePointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * restorePointName **required** `string`: The name of the restore point.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### RestorePoints_Get
Gets a restore point.


```js
azure_sql_restorepoints.RestorePoints_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "restorePointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * restorePointName **required** `string`: The name of the restore point.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [RestorePoint](#restorepoint)



## Definitions

### CreateDatabaseRestorePointDefinition
* CreateDatabaseRestorePointDefinition `object`: Contains the information necessary to perform a create database restore point operation.
  * restorePointLabel **required** `string`: The restore point label to apply

### RestorePoint
* RestorePoint `object`: Database restore points.
  * location `string`: Resource location.
  * properties [RestorePointProperties](#restorepointproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RestorePointListResult
* RestorePointListResult `object`: A list of long term retention backups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [RestorePoint](#restorepoint)

### RestorePointProperties
* RestorePointProperties `object`: Properties of a database restore point
  * earliestRestoreDate `string`: The earliest time to which this database can be restored
  * restorePointCreationDate `string`: The time the backup was taken
  * restorePointLabel `string`: The label of restore point for backup request by user
  * restorePointType `string` (values: CONTINUOUS, DISCRETE): The type of restore point


