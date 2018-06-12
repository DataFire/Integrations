# @datafire/azure_sql_datawarehouseuseractivities

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_datawarehouseuseractivities
```
```js
let azure_sql_datawarehouseuseractivities = require('@datafire/azure_sql_datawarehouseuseractivities').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_datawarehouseuseractivities.DataWarehouseUserActivities_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataWarehouseUserActivityName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### DataWarehouseUserActivities_Get
Gets the user activities of a data warehouse which includes running and suspended queries


```js
azure_sql_datawarehouseuseractivities.DataWarehouseUserActivities_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataWarehouseUserActivityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * dataWarehouseUserActivityName **required** `string` (values: current): The activity name of the data warehouse. 
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DataWarehouseUserActivities](#datawarehouseuseractivities)



## Definitions

### DataWarehouseUserActivities
* DataWarehouseUserActivities `object`: User activities of a data warehouse
  * properties [DataWarehouseUserActivitiesProperties](#datawarehouseuseractivitiesproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DataWarehouseUserActivitiesProperties
* DataWarehouseUserActivitiesProperties `object`: User activities of a data warehouse. This currently includes the count of running or suspended queries. For more information, please view the sys.dm_pdw_exec_requests dynamic management view (DMV).
  * activeQueriesCount `integer`: Count of running and suspended queries.


