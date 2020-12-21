# @datafire/azure_sql_renamedatabase

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_renamedatabase
```
```js
let azure_sql_renamedatabase = require('@datafire/azure_sql_renamedatabase').create({
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

### Databases_Rename
Renames a database.


```js
azure_sql_renamedatabase.Databases_Rename({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": {
    "id": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to rename.
  * parameters **required** [ResourceMoveDefinition](#resourcemovedefinition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

### ResourceMoveDefinition
* ResourceMoveDefinition `object`: Contains the information necessary to perform a resource move (rename).
  * id **required** `string`: The target ID for the resource


