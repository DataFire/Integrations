# @datafire/azure_sql_serviceobjectives

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_serviceobjectives
```
```js
let azure_sql_serviceobjectives = require('@datafire/azure_sql_serviceobjectives').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_serviceobjectives.ServiceObjectives_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides create, read, update and delete functionality for Azure SQL Database resources including servers, databases, elastic pools, recommendations, operations, and usage metrics.

## Actions

### ServiceObjectives_ListByServer
Returns database service objectives.


```js
azure_sql_serviceobjectives.ServiceObjectives_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [ServiceObjectiveListResult](#serviceobjectivelistresult)

### ServiceObjectives_Get
Gets a database service objective.


```js
azure_sql_serviceobjectives.ServiceObjectives_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "serviceObjectiveName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * serviceObjectiveName **required** `string`: The name of the service objective to retrieve.

#### Output
* output [ServiceObjective](#serviceobjective)



## Definitions

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServiceObjective
* ServiceObjective `object`: Represents a database service objective.
  * properties [ServiceObjectiveProperties](#serviceobjectiveproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServiceObjectiveListResult
* ServiceObjectiveListResult `object`: Represents the response to a get database service objectives request.
  * value **required** `array`: The list of database service objectives.
    * items [ServiceObjective](#serviceobjective)

### ServiceObjectiveProperties
* ServiceObjectiveProperties `object`: Represents the properties of a database service objective.
  * description `string`: The description for the service level objective.
  * enabled `boolean`: Gets whether the service level objective is enabled.
  * isDefault `boolean`: Gets whether the service level objective is the default service objective.
  * isSystem `boolean`: Gets whether the service level objective is a system service objective.
  * serviceObjectiveName `string`: The name for the service objective.


