# @datafire/azure_sql_cancelpooloperations

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_cancelpooloperations
```
```js
let azure_sql_cancelpooloperations = require('@datafire/azure_sql_cancelpooloperations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_cancelpooloperations.ElasticPoolOperations_ListByElasticPool({
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ElasticPoolOperations_ListByElasticPool
Gets a list of operations performed on the elastic pool.


```js
azure_sql_cancelpooloperations.ElasticPoolOperations_ListByElasticPool({
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
  * elasticPoolName **required** `string`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ElasticPoolOperationListResult](#elasticpooloperationlistresult)

### ElasticPoolOperations_Cancel
Cancels the asynchronous operation on the elastic pool.


```js
azure_sql_cancelpooloperations.ElasticPoolOperations_Cancel({
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`
  * operationId **required** `string`: The operation identifier.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

### ElasticPoolOperation
* ElasticPoolOperation `object`: A elastic pool operation.
  * properties [ElasticPoolOperationProperties](#elasticpooloperationproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ElasticPoolOperationListResult
* ElasticPoolOperationListResult `object`: The response to a list elastic pool operations request
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ElasticPoolOperation](#elasticpooloperation)

### ElasticPoolOperationProperties
* ElasticPoolOperationProperties `object`: The properties of a elastic pool operation.
  * description `string`: The operation description.
  * elasticPoolName `string`: The name of the elastic pool the operation is being performed on.
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
  * state `string`: The operation state.


