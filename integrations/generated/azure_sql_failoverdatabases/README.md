# @datafire/azure_sql_failoverdatabases

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_failoverdatabases
```
```js
let azure_sql_failoverdatabases = require('@datafire/azure_sql_failoverdatabases').create({
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

### Databases_Failover
Failovers a database.


```js
azure_sql_failoverdatabases.Databases_Failover({
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
  * databaseName **required** `string`: The name of the database to failover.
  * replicaType `string` (values: Primary, ReadableSecondary): The type of replica to be failed over.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
