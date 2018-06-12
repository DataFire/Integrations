# @datafire/azure_azsadmin_storagesystem

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_storagesystem
```
```js
let azure_azsadmin_storagesystem = require('@datafire/azure_azsadmin_storagesystem').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_storagesystem.StorageSystems_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Storage system operation endpoints and objects.

## Actions

### StorageSystems_List
Get a list of all storage subsystems for a location.


```js
azure_azsadmin_storagesystem.StorageSystems_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [StorageSystemList](#storagesystemlist)

### StorageSystems_Get
Get a storage subsystem.


```js
azure_azsadmin_storagesystem.StorageSystems_Get({
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

#### Output
* output [StorageSystem](#storagesystem)



## Definitions

### StorageSystem
* StorageSystem `object`: Representation of a storage system resource.
  * properties [StorageSystemModel](#storagesystemmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### StorageSystemList
* StorageSystemList `object`: Pageable list of storage systems.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage systems on this page.
    * items [StorageSystem](#storagesystem)

### StorageSystemModel
* StorageSystemModel `object`: All properties of a storage system.
  * totalCapacityGB `integer`: Total capacity of the system.


