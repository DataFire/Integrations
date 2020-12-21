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

.then(data => {
  console.log(data);
});
```

## Description

Scale unit node operation endpoints and objects.

## Actions

### ScaleUnitNodes_List
Returns a list of all scale unit nodes in a location.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [ScaleUnitNodeList](#scaleunitnodelist)

### ScaleUnitNodes_Get
Return the requested scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ScaleUnitNode](#scaleunitnode)

### ScaleUnitNodes_PowerOff
Power off a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_PowerOff({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ScaleUnitNodes_PowerOn
Power on a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_PowerOn({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ScaleUnitNodes_Repair
Repairs a node of the cluster.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_Repair({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": "",
  "bareMetalNode": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.
  * bareMetalNode **required** [BareMetalNodeDescription](#baremetalnodedescription)

#### Output
*Output schema unknown*

### ScaleUnitNodes_Shutdown
Shutdown a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_Shutdown({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ScaleUnitNodes_StartMaintenanceMode
Start maintenance mode for a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_StartMaintenanceMode({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ScaleUnitNodes_StopMaintenanceMode
Stop maintenance mode for a scale unit node.


```js
azure_azsadmin_scaleunitnode.ScaleUnitNodes_StopMaintenanceMode({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnitNode": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnitNode **required** `string`: Name of the scale unit node.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### BareMetalNodeDescription
* BareMetalNodeDescription `object`: Description of a bare metal node used for ScaleOut operation on a cluster.
  * biosVersion `string`: Bios version of the physical machine.
  * bmcIpv4Address `string`: BMC address of the physical machine.
  * clusterName `string`: Name of the cluster.
  * computerName `string`: Name of the computer.
  * macAddress `string`: Name of the MAC address of the bare metal node.
  * model `string`: Model of the physical machine.
  * serialNumber `string`: Serial number of the physical machine.
  * vendor `string`: Vendor of the physical machine.

### ScaleUnitNode
* ScaleUnitNode `object`: The physical server in a cluster.
  * properties [ScaleUnitNodeModel](#scaleunitnodemodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### ScaleUnitNodeList
* ScaleUnitNodeList `object`: A pageable list of scale unit nodes.
  * nextLink `string`: The URI to the next page.
  * value `array`: List of scale unit nodes.
    * items [ScaleUnitNode](#scaleunitnode)

### ScaleUnitNodeModel
* ScaleUnitNodeModel `object`: Holds all properties related to a scale unit node.
  * biosVersion `string`: BIOS version of the physical machine.
  * bmcAddress `string`: BMC address of the physical machine.
  * canPowerOff `boolean`: Value indicating whether the node can be powered off.
  * capacity `object`: The capacity information for a physical machine.
    * cores `integer`: The number of CPU cores for the physical machine.
    * memoryGB `number`: The memory for the physical machine.
  * model `string`: Model of the physical machine.
  * powerState `string` (values: Stopped, Starting, Running, Stopping): PowerState of the physical machine.
  * scaleUnitName `string`: Cluster name of the physical machine.
  * scaleUnitNodeStatus `string` (values: Running, Maintenance, Stopped): Status of the physical machine.
  * scaleUnitUri `string`: URI of the corresponding cluster.
  * serialNumber `string`: Serial number of the physical machine.
  * vendor `string`: Vendor of the physical machine.


