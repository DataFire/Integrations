# @datafire/azure_sql_instancepools

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_instancepools
```
```js
let azure_sql_instancepools = require('@datafire/azure_sql_instancepools').create({
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

### InstancePools_List
Gets a list of all instance pools in the subscription.


```js
azure_sql_instancepools.InstancePools_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstancePoolListResult](#instancepoollistresult)

### InstancePools_ListByResourceGroup
Gets a list of instance pools in the resource group


```js
azure_sql_instancepools.InstancePools_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstancePoolListResult](#instancepoollistresult)

### InstancePools_Delete
Deletes an instance pool


```js
azure_sql_instancepools.InstancePools_Delete({
  "resourceGroupName": "",
  "instancePoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * instancePoolName **required** `string`: The name of the instance pool to be deleted
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### InstancePools_Get
Gets an instance pool.


```js
azure_sql_instancepools.InstancePools_Get({
  "resourceGroupName": "",
  "instancePoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * instancePoolName **required** `string`: The name of the instance pool to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstancePool](#instancepool)

### InstancePools_Update
Updates an instance pool.


```js
azure_sql_instancepools.InstancePools_Update({
  "resourceGroupName": "",
  "instancePoolName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * instancePoolName **required** `string`: The name of the instance pool to be updated.
  * parameters **required** [InstancePoolUpdate](#instancepoolupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstancePool](#instancepool)

### InstancePools_CreateOrUpdate
Creates or updates an instance pool.


```js
azure_sql_instancepools.InstancePools_CreateOrUpdate({
  "resourceGroupName": "",
  "instancePoolName": "",
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
  * instancePoolName **required** `string`: The name of the instance pool to be created or updated.
  * parameters **required** [InstancePool](#instancepool)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstancePool](#instancepool)



## Definitions

### InstancePool
* InstancePool `object`: An Azure SQL instance pool.
  * properties [InstancePoolProperties](#instancepoolproperties)
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

### InstancePoolListResult
* InstancePoolListResult `object`: A list of Azure SQL instance pools.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [InstancePool](#instancepool)

### InstancePoolProperties
* InstancePoolProperties `object`: Properties of an instance pool.
  * licenseType **required** `string` (values: LicenseIncluded, BasePrice): The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
  * subnetId **required** `string`: Resource ID of the subnet to place this instance pool in.
  * vCores **required** `integer`: Count of vCores belonging to this instance pool.

### InstancePoolUpdate
* InstancePoolUpdate `object`: An update to an Instance pool.
  * tags `object`: Resource tags.


