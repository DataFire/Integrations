# @datafire/azure_sql_serveroperations

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_serveroperations
```
```js
let azure_sql_serveroperations = require('@datafire/azure_sql_serveroperations').create({
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

### ServerOperations_ListByServer
Gets a list of operations performed on the server.


```js
azure_sql_serveroperations.ServerOperations_ListByServer({
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
* output [ServerOperationListResult](#serveroperationlistresult)



## Definitions

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

### ServerOperation
* ServerOperation `object`: A server operation.
  * properties [ServerOperationProperties](#serveroperationproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerOperationListResult
* ServerOperationListResult `object`: The response to a list server operations request
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ServerOperation](#serveroperation)

### ServerOperationProperties
* ServerOperationProperties `object`: The properties of a server operation.
  * description `string`: The operation description.
  * errorCode `integer`: The operation error code.
  * errorDescription `string`: The operation error description.
  * errorSeverity `integer`: The operation error severity.
  * estimatedCompletionTime `string`: The estimated completion time of the operation.
  * isCancellable `boolean`: Whether the operation can be cancelled.
  * isUserError `boolean`: Whether or not the error is a user error.
  * operation `string`: The name of operation.
  * operationFriendlyName `string`: The friendly name of operation.
  * percentComplete `integer`: The percentage of the operation completed.
  * serverName `string`: The name of the server.
  * startTime `string`: The operation start time.
  * state `string` (values: Pending, InProgress, Succeeded, Failed, CancelInProgress, Cancelled): The operation state.


