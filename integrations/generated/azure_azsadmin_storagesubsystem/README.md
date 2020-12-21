# @datafire/azure_azsadmin_storagesubsystem

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_storagesubsystem
```
```js
let azure_azsadmin_storagesubsystem = require('@datafire/azure_azsadmin_storagesubsystem').create({
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

Storage subsystem operation endpoints and objects.

## Actions

### StorageSubSystems_List
Returns a list of all storage subsystems for a location.


```js
azure_azsadmin_storagesubsystem.StorageSubSystems_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [StorageSubSystemList](#storagesubsystemlist)

### StorageSubSystems_Get
Return the requested storage subsystem.


```js
azure_azsadmin_storagesubsystem.StorageSubSystems_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "storageSubSystem": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * storageSubSystem **required** `string`: Name of the storage system.
  * api-version **required** `string`: Client API Version.

#### Output
* output [StorageSubSystem](#storagesubsystem)



## Definitions

### StorageSubSystem
* StorageSubSystem `object`: Representation of a storage system resource.
  * properties [StorageSubSystemModel](#storagesubsystemmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### StorageSubSystemList
* StorageSubSystemList `object`: Pageable list of storage systems.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage systems.
    * items [StorageSubSystem](#storagesubsystem)

### StorageSubSystemModel
* StorageSubSystemModel `object`: All properties of a storage subsystem.
  * healthStatus `string`: Health status of the subsystem.
  * operationalStatus `string`: Operational status of the subsystem.
  * rebalanceStatus `string`: Rebalance status of the subsystem.
  * remainingCapacityGB `integer`: Remaining capacity in GB of the subsystem.
  * totalCapacityGB `integer`: Total capacity in GB of the subsystem.


