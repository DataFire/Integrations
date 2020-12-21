# @datafire/azure_azsadmin_storagepool

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_storagepool
```
```js
let azure_azsadmin_storagepool = require('@datafire/azure_azsadmin_storagepool').create({
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

Storage pool operation endpoints and objects.

## Actions

### StoragePools_List
Returns a list of all storage pools for a location.


```js
azure_azsadmin_storagepool.StoragePools_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "storageSubSystem": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * storageSubSystem **required** `string`: Name of the storage system.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [StoragePoolList](#storagepoollist)

### StoragePools_Get
Return the requested a storage pool.


```js
azure_azsadmin_storagepool.StoragePools_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "storageSubSystem": "",
  "storagePool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * storageSubSystem **required** `string`: Name of the storage system.
  * storagePool **required** `string`: Storage pool name.
  * api-version **required** `string`: Client API Version.

#### Output
* output [StoragePool](#storagepool)



## Definitions

### StoragePool
* StoragePool `object`: Representation of a storage pool resource.
  * properties [StoragePoolModel](#storagepoolmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### StoragePoolList
* StoragePoolList `object`: Pageable list of storage pools.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage pools.
    * items [StoragePool](#storagepool)

### StoragePoolModel
* StoragePoolModel `object`: All properties of a storage pool.
  * sizeGB `integer`: Amount of space in the storage pool in GB.


