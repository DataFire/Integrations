# @datafire/azure_azsadmin_scaleunitnode

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_scaleunitnode
```
```js
let azure_azsadmin_scaleunitnode = require('@datafire/azure_azsadmin_scaleunitnode').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_scaleunitnode.ScaleUnitNodes_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Scale unit node operation endpoints and objects.

## Actions

### ScaleUnitNodes_List
Get a list of all scale unit nodes in a location.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_List({
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
* output [ScaleUnitNodeList](#scaleunitnodelist)

### ScaleUnitNodes_Get
Get a specific scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_Get({
  "subscriptionId": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ScaleUnitNode](#scaleunitnode)

### ScaleUnitNodes_PowerOff
Power off a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_PowerOff({
  "subscriptionId": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.

### ScaleUnitNodes_PowerOn
Power on a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_PowerOn({
  "subscriptionId": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.

### ScaleUnitNodes_StartMaintenanceMode
Start maintenance mode for a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_StartMaintenanceMode({
  "subscriptionId": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.

### ScaleUnitNodes_StopMaintenanceMode
Stop maintenance mode for a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_StopMaintenanceMode({
  "subscriptionId": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.



## Definitions

### ScaleUnitNode
* ScaleUnitNode `object`: The physical server in a cluster.
  * properties [ScaleUnitNodeModel](#scaleunitnodemodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### ScaleUnitNodeList
* ScaleUnitNodeList `object`: A pageable list of scale unit nodes.
  * nextLink `string`: The URI to the next page.
  * value `array`: The list of nodes in this page.
    * items [ScaleUnitNode](#scaleunitnode)

### ScaleUnitNodeModel
* ScaleUnitNodeModel `object`: Holds all properties related to a scale unit node.
  * biosVersion `string`: Bios version of the physical machine.
  * bmcAddress `string`: Bmc address of the physical machine.
  * canPowerOff `boolean`: Value indicating whether the node can be powered off.
  * capacity `object`: The capacity information for a physical machine.
    * cores `integer`: The number of CPU cores for the physical machine.
    * memoryGB `number`: The memory for the physical machine.
  * macAddress `string`: MacAddress of the physical machine.
  * model `string`: Model of the physical machine.
  * powerState `string` (values: Stopped, Starting, Running, Stopping): PowerState of the physical machine.
  * scaleUnitName `string`: Cluster name of the physical machine.
  * scaleUnitNodeStatus `string` (values: Running, Maintenance, Stopped): Status of the physical machine.
  * scaleUnitUri `string`: URI of the corresponding cluster.
  * serialNumber `string`: Serial number of the physical machine.
  * vendor `string`: Vendor of the physical machine.


