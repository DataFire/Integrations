# @datafire/azure_sql_elasticpools

Client library for SqlManagementClient

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

.then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ElasticPools_ListByServer
Gets all elastic pools in a server.


```js
azure_sql_elasticpools.ElasticPools_ListByServer({
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
  * $skip `integer`: The number of elements in the collection to skip.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ElasticPoolListResult](#elasticpoollistresult)

### ElasticPools_Delete
Deletes an elastic pool.


```js
azure_sql_elasticpools.ElasticPools_Delete({
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
  * elasticPoolName **required** `string`: The name of the elastic pool.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ElasticPools_Get
Gets an elastic pool.


```js
azure_sql_elasticpools.ElasticPools_Get({
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
  * elasticPoolName **required** `string`: The name of the elastic pool.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ElasticPool](#elasticpool)

### ElasticPools_Update
Updates an elastic pool.


```js
azure_sql_elasticpools.ElasticPools_Update({
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool.
  * parameters **required** [ElasticPoolUpdate](#elasticpoolupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ElasticPool](#elasticpool)

### ElasticPools_CreateOrUpdate
Creates or updates an elastic pool.


```js
azure_sql_elasticpools.ElasticPools_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool.
  * parameters **required** [ElasticPool](#elasticpool)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ElasticPool](#elasticpool)



## Definitions

### ElasticPool
* ElasticPool `object`: An elastic pool.
  * kind `string`: Kind of elastic pool. This is metadata used for the Azure portal experience.
  * properties [ElasticPoolProperties](#elasticpoolproperties)
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ElasticPoolListResult
* ElasticPoolListResult `object`: The result of an elastic pool list request.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ElasticPool](#elasticpool)

### ElasticPoolPerDatabaseSettings
* ElasticPoolPerDatabaseSettings `object`: Per database settings of an elastic pool.
  * maxCapacity `number`: The maximum capacity any one database can consume.
  * minCapacity `number`: The minimum capacity all databases are guaranteed.

### ElasticPoolProperties
* ElasticPoolProperties `object`: Properties of an elastic pool
  * creationDate `string`: The creation date of the elastic pool (ISO8601 format).
  * licenseType `string` (values: LicenseIncluded, BasePrice): The license type to apply for this elastic pool.
  * maxSizeBytes `integer`: The storage limit for the database elastic pool in bytes.
  * perDatabaseSettings [ElasticPoolPerDatabaseSettings](#elasticpoolperdatabasesettings)
  * state `string` (values: Creating, Ready, Disabled): The state of the elastic pool.
  * zoneRedundant `boolean`: Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.

### ElasticPoolUpdate
* ElasticPoolUpdate `object`: An elastic pool update.
  * properties [ElasticPoolUpdateProperties](#elasticpoolupdateproperties)
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * tags `object`: Resource tags.

### ElasticPoolUpdateProperties
* ElasticPoolUpdateProperties `object`: Properties of an elastic pool
  * licenseType `string` (values: LicenseIncluded, BasePrice): The license type to apply for this elastic pool.
  * maxSizeBytes `integer`: The storage limit for the database elastic pool in bytes.
  * perDatabaseSettings [ElasticPoolPerDatabaseSettings](#elasticpoolperdatabasesettings)
  * zoneRedundant `boolean`: Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.


