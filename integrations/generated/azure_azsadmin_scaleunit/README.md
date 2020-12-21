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

.then(data => {
  console.log(data);
});
```

## Description

Scale unit operation endpoints and objects.

## Actions

### ScaleUnits_List
Returns a list of all scale units at a location.


```js
azure_azsadmin_scaleunit.ScaleUnits_List({
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
* output [ScaleUnitList](#scaleunitlist)

### ScaleUnits_Get
Returns the requested scale unit.


```js
azure_azsadmin_scaleunit.ScaleUnits_Get({
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

#### Output
* output [ScaleUnit](#scaleunit)

### ScaleUnits_CreateFromJson
Add a new scale unit.


```js
azure_azsadmin_scaleunit.ScaleUnits_CreateFromJson({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "creationData": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * creationData **required** [CreateFromJsonScaleUnitParametersList](#createfromjsonscaleunitparameterslist)
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ScaleUnits_ScaleOut
Scales out a scale unit.


```js
azure_azsadmin_scaleunit.ScaleUnits_ScaleOut({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "scaleUnitNodeParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * scaleUnitNodeParameters **required** [ScaleOutScaleUnitParametersList](#scaleoutscaleunitparameterslist)
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### CreateFromJsonScaleUnitParametersList
* CreateFromJsonScaleUnitParametersList `object`: A list of input data that allows for creating the new scale unit.
  * clusterName `string`: Cluster name for the new scale unit.
  * infrastructureNetwork [NetworkDefinitionParameter](#networkdefinitionparameter)
  * netQosPriority `integer`: The network QOS priority setting.
  * physicalNodes `array`: List of nodes in the scale unit.
    * items [DeploymentJsonPhysicalNodeParameters](#deploymentjsonphysicalnodeparameters)
  * softwareBgpAsn `string`: The software ASN for the cluster's rack.
  * storageNetwork [NetworkDefinitionParameter](#networkdefinitionparameter)
  * torSwitchBgpAsn `string`: The ASN for the cluster's rack TOR.
  * torSwitchBgpPeerIp `array`: The list of IP addresses used for TOR communication.
    * items `string`

### DeploymentJsonPhysicalNodeParameters
* DeploymentJsonPhysicalNodeParameters `object`: Description of a bare metal node used for scale unit scale out operations.
  * bmcIpAddress `string`: BMC address of the physical machine.
  * name `string`: Computer name of the physical machine.

### NetworkDefinitionParameter
* NetworkDefinitionParameter `object`: A definition of the network received from a new cluster operation.
  * subnet `array`: The subnet IP mask in the example format 10.0.0.0/25.
    * items `string`
  * vlanId `array`: The Vlan ID of the subnet.
    * items `string`

### ScaleOutScaleUnitParameters
* ScaleOutScaleUnitParameters `object`: Input data that allows for adding a scale unit node.
  * bmcIpv4Address `string`: BMC address of the physical machine.
  * computerName `string`: Computer name of the physical machine.

### ScaleOutScaleUnitParametersList
* ScaleOutScaleUnitParametersList `object`: A list of input data that allows for adding a set of scale unit nodes.
  * awaitStorageConvergence `boolean`: Flag indicates if the operation should wait for storage to converge before returning.
  * nodeList `array`: List of nodes in the scale unit.
    * items [ScaleOutScaleUnitParameters](#scaleoutscaleunitparameters)

### ScaleUnit
* ScaleUnit `object`: Represents a cluster. Generally, the cluster will be a collection of hosts backed by failover cluster manager.
  * properties [ScaleUnitModel](#scaleunitmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### ScaleUnitCapacity
* ScaleUnitCapacity `object`: The capacity information for a physical machine.
  * cores `integer`: The number of CPU cores for the physical machine.
  * memoryGB `number`: The memory for the physical machine.

### ScaleUnitList
* ScaleUnitList `object`: A pageable list of scale units.
  * nextLink `string`: URI to the next page.
  * value `array`: List of scale units.
    * items [ScaleUnit](#scaleunit)

### ScaleUnitModel
* ScaleUnitModel `object`: Properties of a scale unit.
  * isMultiNode `boolean`: Denotes if more than one node in cluster.
  * logicalFaultDomain `integer`: Fault domain name of the cluster.
  * model `string`: Model of the servers in the cluster.
  * nodes `array`: List of nodes in the server.
    * items `string`
  * scaleUnitType `string` (values: Unknown, ComputeOnly, StorageOnly, HyperConverged): Type of cluster.
  * state `string` (values: Unknown, Creating, Running, Upgrading, Deleting): Current state of the cluster.
  * totalCapacity [ScaleUnitCapacity](#scaleunitcapacity)


