# @datafire/azure_sql_geobackuppolicies

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_geobackuppolicies
```
```js
let azure_sql_geobackuppolicies = require('@datafire/azure_sql_geobackuppolicies').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_geobackuppolicies.GeoBackupPolicies_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides read and update functionality for Azure SQL Database geo backup policies.

## Actions

### GeoBackupPolicies_ListByDatabase
Returns a list of geo backup policies.


```js
azure_sql_geobackuppolicies.GeoBackupPolicies_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.

#### Output
* output [GeoBackupPolicyListResult](#geobackuppolicylistresult)

### GeoBackupPolicies_Get
Gets a geo backup policy.


```js
azure_sql_geobackuppolicies.GeoBackupPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "geoBackupPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * geoBackupPolicyName **required** `string` (values: Default): The name of the geo backup policy.

#### Output
* output [GeoBackupPolicy](#geobackuppolicy)

### GeoBackupPolicies_CreateOrUpdate
Updates a database geo backup policy.


```js
azure_sql_geobackuppolicies.GeoBackupPolicies_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "geoBackupPolicyName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * geoBackupPolicyName **required** `string` (values: Default): The name of the geo backup policy.
  * parameters **required** [GeoBackupPolicy](#geobackuppolicy)

#### Output
* output [GeoBackupPolicy](#geobackuppolicy)



## Definitions

### GeoBackupPolicy
* GeoBackupPolicy `object`: A database geo backup policy.
  * kind `string`: Kind of geo backup policy.  This is metadata used for the Azure portal experience.
  * location `string`: Backup policy location.
  * properties **required** [GeoBackupPolicyProperties](#geobackuppolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### GeoBackupPolicyListResult
* GeoBackupPolicyListResult `object`: The response to a list geo backup policies request.
  * value `array`: The list of geo backup policies.
    * items [GeoBackupPolicy](#geobackuppolicy)

### GeoBackupPolicyProperties
* GeoBackupPolicyProperties `object`: The properties of the geo backup policy.
  * state **required** `string` (values: Disabled, Enabled): The state of the geo backup policy.
  * storageType `string`: The storage type of the geo backup policy.


