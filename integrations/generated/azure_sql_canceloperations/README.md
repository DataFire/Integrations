# @datafire/azure_sql_canceloperations

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_canceloperations
```
```js
let azure_sql_canceloperations = require('@datafire/azure_sql_canceloperations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_canceloperations.DatabaseOperations_ListByDatabase({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### DatabaseOperations_ListByDatabase
Gets a list of operations performed on the database.


```js
azure_sql_canceloperations.DatabaseOperations_ListByDatabase({
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
* output [DatabaseOperationListResult](#databaseoperationlistresult)

### DatabaseOperations_Cancel
Cancels the asynchronous operation on the database.


```js
azure_sql_canceloperations.DatabaseOperations_Cancel({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * operationId **required** `string`: The operation identifier.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

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


