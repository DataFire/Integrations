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

azure_azsadmin_storagepool.StoragePools_List({
  "subscriptionId": "",
  "location": "",
  "storageSubSystem": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Storage pool operation endpoints and objects.

## Actions

### StoragePools_List
Get a list of all storage pools for a location.


```js
azure_azsadmin_storagepool.StoragePools_List({
  "subscriptionId": "",
  "location": "",
  "storageSubSystem": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * storageSubSystem **required** `string`: Name of the storage system.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [StoragePoolList](#storagepoollist)

### StoragePools_Get
Get a storage pool.


```js
azure_azsadmin_storagepool.StoragePools_Get({
  "subscriptionId": "",
  "location": "",
  "storageSubSystem": "",
  "storagePool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * storageSubSystem **required** `string`: Name of the storage system.
  * storagePool **required** `string`: Storage pool name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [StoragePool](#storagepool)



## Definitions

### StoragePool
* StoragePool `object`: Representation of a storage pool resource.
  * properties [StoragePoolModel](#storagepoolmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### StoragePoolList
* StoragePoolList `object`: Pageable list of storage pools.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage pools on this page.
    * items [StoragePool](#storagepool)

### StoragePoolModel
* StoragePoolModel `object`: All properties of a storage pool.
  * sizeGB `integer`: Amount of space in the storage pool in GB.


