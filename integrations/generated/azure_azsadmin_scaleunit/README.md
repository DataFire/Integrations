# @datafire/azure_azsadmin_scaleunit

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_scaleunit
```
```js
let azure_azsadmin_scaleunit = require('@datafire/azure_azsadmin_scaleunit').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_scaleunit.ScaleUnits_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Scale unit operation endpoints and objects.

## Actions

### ScaleUnits_List
Get a list of all scale units at a location.


```js
azure_azsadmin_scaleunit.ScaleUnits_List({
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
* output [ScaleUnitList](#scaleunitlist)

### ScaleUnits_Get
Get a scale unit.


```js
azure_azsadmin_scaleunit.ScaleUnits_Get({
  "subscriptionId": "",
  "location": "",
  "scaleUnit": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ScaleUnit](#scaleunit)



## Definitions

### ScaleUnit
* ScaleUnit `object`: Represents a cluster - generally this will be a collection of Hosts backed by Failover Cluster Manager.
  * properties [ScaleUnitModel](#scaleunitmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### ScaleUnitCapacity
* ScaleUnitCapacity `object`: The capacity information for a physical machine.
  * cores `integer`: The number of CPU cores for the physical machine.
  * memoryGB `number`: The memory for the physical machine.

### ScaleUnitList
* ScaleUnitList `object`: A pageable list of scale units.
  * nextLink `string`: URI to the next page.
  * value `array`: The list of scale units on this page.
    * items [ScaleUnit](#scaleunit)

### ScaleUnitModel
* ScaleUnitModel `object`: Properties of a scale unit.
  * logicalFaultDomain `integer`: Fault domain name of the cluster.
  * model `string`: Model of the servers in the cluster.
  * nodes `array`: List of nodes in the server.
    * items `string`
  * scaleUnitType `string` (values: Unknown, ComputeOnly, StorageOnly, HyperConverged): Type of the cluster.
  * state `string` (values: Unknown, Creating, Running, Upgrading, Deleting): Current state of the cluster.
  * totalCapacity [ScaleUnitCapacity](#scaleunitcapacity)


