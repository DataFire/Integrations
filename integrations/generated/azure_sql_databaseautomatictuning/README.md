# @datafire/azure_sql_databaseautomatictuning

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_databaseautomatictuning
```
```js
let azure_sql_databaseautomatictuning = require('@datafire/azure_sql_databaseautomatictuning').create({
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

### DatabaseAutomaticTuning_Get
Gets a database's automatic tuning.


```js
azure_sql_databaseautomatictuning.DatabaseAutomaticTuning_Get({
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
* output [DatabaseAutomaticTuning](#databaseautomatictuning)

### DatabaseAutomaticTuning_Update
Update automatic tuning properties for target database.


```js
azure_sql_databaseautomatictuning.DatabaseAutomaticTuning_Update({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
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
  * parameters **required** [DatabaseAutomaticTuning](#databaseautomatictuning)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseAutomaticTuning](#databaseautomatictuning)



## Definitions

### AutomaticTuningOptions
* AutomaticTuningOptions `object`: Automatic tuning properties for individual advisors.
  * actualState `string` (values: Off, On): Automatic tuning option actual state.
  * desiredState `string` (values: Off, On, Default): Automatic tuning option desired state.
  * reasonCode `integer`: Reason code if desired and actual state are different.
  * reasonDesc `string` (values: Default, Disabled, AutoConfigured, InheritedFromServer, QueryStoreOff, QueryStoreReadOnly, NotSupported): Reason description if desired and actual state are different.

### DatabaseAutomaticTuning
* DatabaseAutomaticTuning `object`: Database-level Automatic Tuning.
  * properties [DatabaseAutomaticTuningProperties](#databaseautomatictuningproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseAutomaticTuningProperties
* DatabaseAutomaticTuningProperties `object`: Database-level Automatic Tuning properties.
  * actualState `string` (values: Inherit, Custom, Auto, Unspecified): Automatic tuning actual state.
  * desiredState `string` (values: Inherit, Custom, Auto, Unspecified): Automatic tuning desired state.
  * options `object`: Automatic tuning options definition.


