# @datafire/azure_sql_elasticpools

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_elasticpools
```
```js
let azure_sql_elasticpools = require('@datafire/azure_sql_elasticpools').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_elasticpools.ElasticPools_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides create, read, update and delete functionality for Azure SQL Database elastic pools.

## Actions

### ElasticPools_ListByServer
Returns a list of elastic pools in a server.


```js
azure_sql_elasticpools.ElasticPools_ListByServer({
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
* output [ElasticPoolListResult](#elasticpoollistresult)

### ElasticPools_Delete
Deletes the elastic pool.


```js
azure_sql_elasticpools.ElasticPools_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool to be deleted.

#### Output
*Output schema unknown*

### ElasticPools_Get
Gets an elastic pool.


```js
azure_sql_elasticpools.ElasticPools_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool to be retrieved.

#### Output
* output [ElasticPool](#elasticpool)

### ElasticPools_Update
Updates an existing elastic pool.


```js
azure_sql_elasticpools.ElasticPools_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool to be updated.
  * parameters **required** [ElasticPoolUpdate](#elasticpoolupdate)

#### Output
* output [ElasticPool](#elasticpool)

### ElasticPools_CreateOrUpdate
Creates a new elastic pool or updates an existing elastic pool.


```js
azure_sql_elasticpools.ElasticPools_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool to be operated on (updated or created).
  * parameters **required** [ElasticPool](#elasticpool)

#### Output
* output [ElasticPool](#elasticpool)



## Definitions

### ElasticPool
* ElasticPool `object`: Represents a database elastic pool.
  * kind `string`: Kind of elastic pool.  This is metadata used for the Azure portal experience.
  * properties [ElasticPoolProperties](#elasticpoolproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ElasticPoolListResult
* ElasticPoolListResult `object`: Represents the response to a list elastic pool request.
  * value **required** `array`: The list of elastic pools hosted in the server.
    * items [ElasticPool](#elasticpool)

### ElasticPoolProperties
* ElasticPoolProperties `object`: Represents the properties of an elastic pool.
  * creationDate `string`: The creation date of the elastic pool (ISO8601 format).
  * databaseDtuMax `integer`: The maximum DTU any one database can consume.
  * databaseDtuMin `integer`: The minimum DTU all databases are guaranteed.
  * dtu `integer`: The total shared DTU for the database elastic pool.
  * edition `string` (values: Basic, Standard, Premium): The edition of the elastic pool.
  * state `string` (values: Creating, Ready, Disabled): The state of the elastic pool.
  * storageMB `integer`: Gets storage limit for the database elastic pool in MB.
  * zoneRedundant `boolean`: Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.

### ElasticPoolUpdate
* ElasticPoolUpdate `object`: Represents an elastic pool update.
  * properties [ElasticPoolProperties](#elasticpoolproperties)
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


