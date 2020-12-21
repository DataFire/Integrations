# @datafire/azure_sql_serverautomatictuning

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_serverautomatictuning
```
```js
let azure_sql_serverautomatictuning = require('@datafire/azure_sql_serverautomatictuning').create({
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

### ServerAutomaticTuning_Get
Retrieves server automatic tuning options.


```js
azure_sql_serverautomatictuning.ServerAutomaticTuning_Get({
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
* output [ServerAutomaticTuning](#serverautomatictuning)

### ServerAutomaticTuning_Update
Update automatic tuning options on server.


```js
azure_sql_serverautomatictuning.ServerAutomaticTuning_Update({
  "resourceGroupName": "",
  "serverName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [ServerAutomaticTuning](#serverautomatictuning)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerAutomaticTuning](#serverautomatictuning)



## Definitions

### AutomaticTuningServerOptions
* AutomaticTuningServerOptions `object`: Automatic tuning properties for individual advisors.
  * actualState `string` (values: Off, On): Automatic tuning option actual state.
  * desiredState `string` (values: Off, On, Default): Automatic tuning option desired state.
  * reasonCode `integer`: Reason code if desired and actual state are different.
  * reasonDesc `string` (values: Default, Disabled, AutoConfigured): Reason description if desired and actual state are different.

### AutomaticTuningServerProperties
* AutomaticTuningServerProperties `object`: Server-level Automatic Tuning properties.
  * actualState `string` (values: Custom, Auto, Unspecified): Automatic tuning actual state.
  * desiredState `string` (values: Custom, Auto, Unspecified): Automatic tuning desired state.
  * options `object`: Automatic tuning options definition.

### ServerAutomaticTuning
* ServerAutomaticTuning `object`: Server-level Automatic Tuning.
  * properties [AutomaticTuningServerProperties](#automatictuningserverproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


