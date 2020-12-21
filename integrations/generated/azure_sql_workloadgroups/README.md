# @datafire/azure_sql_workloadgroups

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_workloadgroups
```
```js
let azure_sql_workloadgroups = require('@datafire/azure_sql_workloadgroups').create({
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

### WorkloadGroups_ListByDatabase
Gets the list of workload groups


```js
azure_sql_workloadgroups.WorkloadGroups_ListByDatabase({
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
* output [WorkloadGroupListResult](#workloadgrouplistresult)

### WorkloadGroups_Delete
Deletes a workload group.


```js
azure_sql_workloadgroups.WorkloadGroups_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * workloadGroupName **required** `string`: The name of the workload group to delete.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### WorkloadGroups_Get
Gets a workload group


```js
azure_sql_workloadgroups.WorkloadGroups_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * workloadGroupName **required** `string`: The name of the workload group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [WorkloadGroup](#workloadgroup)

### WorkloadGroups_CreateOrUpdate
Creates or updates a workload group.


```js
azure_sql_workloadgroups.WorkloadGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * workloadGroupName **required** `string`: The name of the workload group.
  * parameters **required** [WorkloadGroup](#workloadgroup)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [WorkloadGroup](#workloadgroup)



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

### WorkloadGroup
* WorkloadGroup `object`: Workload group operations for a data warehouse
  * properties [WorkloadGroupProperties](#workloadgroupproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### WorkloadGroupListResult
* WorkloadGroupListResult `object`: A list of workload groups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [WorkloadGroup](#workloadgroup)

### WorkloadGroupProperties
* WorkloadGroupProperties `object`: Workload group definition. For more information look at sys.workload_management_workload_groups (DMV).
  * importance `string`: The workload group importance level.
  * maxResourcePercent **required** `integer`: The workload group cap percentage resource.
  * maxResourcePercentPerRequest `number`: The workload group request maximum grant percentage.
  * minResourcePercent **required** `integer`: The workload group minimum percentage resource.
  * minResourcePercentPerRequest **required** `number`: The workload group request minimum grant percentage.
  * queryExecutionTimeout `integer`: The workload group query execution timeout.


