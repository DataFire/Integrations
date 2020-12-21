# @datafire/azure_network_expressroutecircuit

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_expressroutecircuit
```
```js
let azure_network_expressroutecircuit = require('@datafire/azure_network_expressroutecircuit').create({
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

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### ExpressRouteCircuits_ListAll
Gets all the express route circuits in a subscription.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitListResult](#expressroutecircuitlistresult)

### ExpressRouteServiceProviders_List
Gets all the available express route service providers.


```js
azure_network_expressroutecircuit.ExpressRouteServiceProviders_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteServiceProviderListResult](#expressrouteserviceproviderlistresult)

### ExpressRouteCircuits_List
Gets all the express route circuits in a resource group.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitListResult](#expressroutecircuitlistresult)

### ExpressRouteCircuits_Delete
Deletes the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_Delete({
  "resourceGroupName": "",
  "circuitName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuits_Get
Gets information about the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_Get({
  "resourceGroupName": "",
  "circuitName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of express route circuit.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuits_UpdateTags
Updates an express route circuit tags.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_UpdateTags({
  "resourceGroupName": "",
  "circuitName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the circuit.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuits_CreateOrUpdate
Creates or updates an express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_CreateOrUpdate({
  "resourceGroupName": "",
  "circuitName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the circuit.
  * parameters **required** [ExpressRouteCircuit](#expressroutecircuit)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuitAuthorizations_List
Gets all authorizations in an express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitAuthorizations_List({
  "resourceGroupName": "",
  "circuitName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the circuit.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationListResult](#authorizationlistresult)

### ExpressRouteCircuitAuthorizations_Delete
Deletes the specified authorization from the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitAuthorizations_Delete({
  "resourceGroupName": "",
  "circuitName": "",
  "authorizationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * authorizationName **required** `string`: The name of the authorization.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuitAuthorizations_Get
Gets the specified authorization from the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitAuthorizations_Get({
  "resourceGroupName": "",
  "circuitName": "",
  "authorizationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * authorizationName **required** `string`: The name of the authorization.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)

### ExpressRouteCircuitAuthorizations_CreateOrUpdate
Creates or updates an authorization in the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitAuthorizations_CreateOrUpdate({
  "resourceGroupName": "",
  "circuitName": "",
  "authorizationName": "",
  "authorizationParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * authorizationName **required** `string`: The name of the authorization.
  * authorizationParameters **required** [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)

### ExpressRouteCircuitPeerings_List
Gets all peerings in a specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitPeerings_List({
  "resourceGroupName": "",
  "circuitName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitPeeringListResult](#expressroutecircuitpeeringlistresult)

### ExpressRouteCircuitPeerings_Delete
Deletes the specified peering from the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitPeerings_Delete({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuitPeerings_Get
Gets the specified peering for the express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitPeerings_Get({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuitPeerings_CreateOrUpdate
Creates or updates a peering in the specified express route circuits.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitPeerings_CreateOrUpdate({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "peeringParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * peeringParameters **required** [ExpressRouteCircuitPeering](#expressroutecircuitpeering)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuits_ListArpTable
Gets the currently advertised ARP table associated with the express route circuit in a resource group.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_ListArpTable({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "devicePath": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitsArpTableListResult](#expressroutecircuitsarptablelistresult)

### ExpressRouteCircuitConnections_List
Gets all global reach connections associated with a private peering in an express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitConnections_List({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the circuit.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitConnectionListResult](#expressroutecircuitconnectionlistresult)

### ExpressRouteCircuitConnections_Delete
Deletes the specified Express Route Circuit Connection from the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitConnections_Delete({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * connectionName **required** `string`: The name of the express route circuit connection.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuitConnections_Get
Gets the specified Express Route Circuit Connection from the specified express route circuit.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitConnections_Get({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * connectionName **required** `string`: The name of the express route circuit connection.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitConnection](#expressroutecircuitconnection)

### ExpressRouteCircuitConnections_CreateOrUpdate
Creates or updates a Express Route Circuit Connection in the specified express route circuits.


```js
azure_network_expressroutecircuit.ExpressRouteCircuitConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "connectionName": "",
  "expressRouteCircuitConnectionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * connectionName **required** `string`: The name of the express route circuit connection.
  * expressRouteCircuitConnectionParameters **required** [ExpressRouteCircuitConnection](#expressroutecircuitconnection)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitConnection](#expressroutecircuitconnection)

### PeerExpressRouteCircuitConnections_List
Gets all global reach peer connections associated with a private peering in an express route circuit.


```js
azure_network_expressroutecircuit.PeerExpressRouteCircuitConnections_List({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the circuit.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PeerExpressRouteCircuitConnectionListResult](#peerexpressroutecircuitconnectionlistresult)

### PeerExpressRouteCircuitConnections_Get
Gets the specified Peer Express Route Circuit Connection from the specified express route circuit.


```js
azure_network_expressroutecircuit.PeerExpressRouteCircuitConnections_Get({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * connectionName **required** `string`: The name of the peer express route circuit connection.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)

### ExpressRouteCircuits_ListRoutesTable
Gets the currently advertised routes table associated with the express route circuit in a resource group.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_ListRoutesTable({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "devicePath": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitsRoutesTableListResult](#expressroutecircuitsroutestablelistresult)

### ExpressRouteCircuits_ListRoutesTableSummary
Gets the currently advertised routes table summary associated with the express route circuit in a resource group.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_ListRoutesTableSummary({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "devicePath": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitsRoutesTableSummaryListResult](#expressroutecircuitsroutestablesummarylistresult)

### ExpressRouteCircuits_GetPeeringStats
Gets all stats from an express route circuit in a resource group.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_GetPeeringStats({
  "resourceGroupName": "",
  "circuitName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitStats](#expressroutecircuitstats)

### ExpressRouteCircuits_GetStats
Gets all the stats from an express route circuit in a resource group.


```js
azure_network_expressroutecircuit.ExpressRouteCircuits_GetStats({
  "resourceGroupName": "",
  "circuitName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route circuit.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitStats](#expressroutecircuitstats)



## Definitions

### AuthorizationListResult
* AuthorizationListResult `object`: Response for ListAuthorizations API service call retrieves all authorizations that belongs to an ExpressRouteCircuit.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The authorizations in an ExpressRoute Circuit.
    * items [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)

### AuthorizationPropertiesFormat
* AuthorizationPropertiesFormat `object`: Properties of ExpressRouteCircuitAuthorization.
  * authorizationKey `string`: The authorization key.
  * authorizationUseStatus `string` (values: Available, InUse): The authorization use status.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### CircuitConnectionStatus
* CircuitConnectionStatus `string` (values: Connected, Connecting, Disconnected): Express Route Circuit connection state.

### ExpressRouteCircuit
* ExpressRouteCircuit `object`: ExpressRouteCircuit resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
  * sku [ExpressRouteCircuitSku](#expressroutecircuitsku)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRouteCircuitArpTable
* ExpressRouteCircuitArpTable `object`: The ARP table associated with the ExpressRouteCircuit.
  * age `integer`: Entry age in minutes.
  * interface `string`: Interface address.
  * ipAddress `string`: The IP address.
  * macAddress `string`: The MAC address.

### ExpressRouteCircuitAuthorization
* ExpressRouteCircuitAuthorization `object`: Authorization in an ExpressRouteCircuit resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ExpressRouteCircuitConnection
* ExpressRouteCircuitConnection `object`: Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ExpressRouteCircuitConnectionPropertiesFormat](#expressroutecircuitconnectionpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ExpressRouteCircuitConnectionListResult
* ExpressRouteCircuitConnectionListResult `object`: Response for ListConnections API service call retrieves all global reach connections that belongs to a Private Peering for an ExpressRouteCircuit.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The global reach connection associated with Private Peering in an ExpressRoute Circuit.
    * items [ExpressRouteCircuitConnection](#expressroutecircuitconnection)

### ExpressRouteCircuitConnectionPropertiesFormat
* ExpressRouteCircuitConnectionPropertiesFormat `object`: Properties of the express route circuit connection.
  * addressPrefix `string`: /29 IP address space to carve out Customer addresses for tunnels.
  * authorizationKey `string`: The authorization key.
  * circuitConnectionStatus [CircuitConnectionStatus](#circuitconnectionstatus)
  * expressRouteCircuitPeering `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * peerExpressRouteCircuitPeering `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### ExpressRouteCircuitListResult
* ExpressRouteCircuitListResult `object`: Response for ListExpressRouteCircuit API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ExpressRouteCircuits in a resource group.
    * items [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuitPeering
* ExpressRouteCircuitPeering `object`: Peering in an ExpressRouteCircuit resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ExpressRouteCircuitPeeringConfig
* ExpressRouteCircuitPeeringConfig `object`: Specifies the peering configuration.
  * advertisedCommunities `array`: The communities of bgp peering. Specified for microsoft peering.
    * items `string`
  * advertisedPublicPrefixes `array`: The reference of AdvertisedPublicPrefixes.
    * items `string`
  * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): The advertised public prefix state of the Peering resource.
  * customerASN `integer`: The CustomerASN of the peering.
  * legacyMode `integer`: The legacy mode of the peering.
  * routingRegistryName `string`: The RoutingRegistryName of the configuration.

### ExpressRouteCircuitPeeringListResult
* ExpressRouteCircuitPeeringListResult `object`: Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The peerings in an express route circuit.
    * items [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuitPeeringPropertiesFormat
* ExpressRouteCircuitPeeringPropertiesFormat `object`: Properties of the express route circuit peering.
  * azureASN `integer`: The Azure ASN.
  * connections `array`: The list of circuit connections associated with Azure Private Peering for this circuit.
    * items [ExpressRouteCircuitConnection](#expressroutecircuitconnection)
  * expressRouteConnection `object`: The ID of the ExpressRouteConnection.
    * id `string`: The ID of the ExpressRouteConnection.
  * gatewayManagerEtag `string`: The GatewayManager Etag.
  * ipv6PeeringConfig [Ipv6ExpressRouteCircuitPeeringConfig](#ipv6expressroutecircuitpeeringconfig)
  * lastModifiedBy `string`: Who was the last to modify the peering.
  * microsoftPeeringConfig [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
  * peerASN `integer`: The peer ASN.
  * peeredConnections `array`: The list of peered circuit connections associated with Azure Private Peering for this circuit.
    * items [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)
  * peeringType [ExpressRoutePeeringType](#expressroutepeeringtype)
  * primaryAzurePort `string`: The primary port.
  * primaryPeerAddressPrefix `string`: The primary address prefix.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * routeFilter `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * secondaryAzurePort `string`: The secondary port.
  * secondaryPeerAddressPrefix `string`: The secondary address prefix.
  * sharedKey `string`: The shared key.
  * state [ExpressRoutePeeringState](#expressroutepeeringstate)
  * stats [ExpressRouteCircuitStats](#expressroutecircuitstats)
  * vlanId `integer`: The VLAN ID.

### ExpressRouteCircuitPropertiesFormat
* ExpressRouteCircuitPropertiesFormat `object`: Properties of ExpressRouteCircuit.
  * allowClassicOperations `boolean`: Allow classic operations.
  * authorizations `array`: The list of authorizations.
    * items [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)
  * bandwidthInGbps `number`: The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
  * circuitProvisioningState `string`: The CircuitProvisioningState state of the resource.
  * expressRoutePort `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * gatewayManagerEtag `string`: The GatewayManager Etag.
  * globalReachEnabled `boolean`: Flag denoting Global reach status.
  * peerings `array`: The list of peerings.
    * items [ExpressRouteCircuitPeering](#expressroutecircuitpeering)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * serviceKey `string`: The ServiceKey.
  * serviceProviderNotes `string`: The ServiceProviderNotes.
  * serviceProviderProperties [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties)
  * serviceProviderProvisioningState [ServiceProviderProvisioningState](#serviceproviderprovisioningstate)
  * stag `integer`: The identifier of the circuit traffic. Outer tag for QinQ encapsulation.

### ExpressRouteCircuitRoutesTable
* ExpressRouteCircuitRoutesTable `object`: The routes table associated with the ExpressRouteCircuit.
  * locPrf `string`: Local preference value as set with the set local-preference route-map configuration command.
  * network `string`: IP address of a network entity.
  * nextHop `string`: NextHop address.
  * path `string`: Autonomous system paths to the destination network.
  * weight `integer`: Route Weight.

### ExpressRouteCircuitRoutesTableSummary
* ExpressRouteCircuitRoutesTableSummary `object`: The routes table associated with the ExpressRouteCircuit.
  * as `integer`: Autonomous system number.
  * neighbor `string`: IP address of the neighbor.
  * statePfxRcd `string`: Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group.
  * upDown `string`: The length of time that the BGP session has been in the Established state, or the current status if not in the Established state.
  * v `integer`: BGP version number spoken to the neighbor.

### ExpressRouteCircuitServiceProviderProperties
* ExpressRouteCircuitServiceProviderProperties `object`: Contains ServiceProviderProperties in an ExpressRouteCircuit.
  * bandwidthInMbps `integer`: The BandwidthInMbps.
  * peeringLocation `string`: The peering location.
  * serviceProviderName `string`: The serviceProviderName.

### ExpressRouteCircuitSku
* ExpressRouteCircuitSku `object`: Contains SKU in an ExpressRouteCircuit.
  * family `string` (values: UnlimitedData, MeteredData): The family of the SKU.
  * name `string`: The name of the SKU.
  * tier `string` (values: Standard, Premium, Basic, Local): The tier of the SKU.

### ExpressRouteCircuitStats
* ExpressRouteCircuitStats `object`: Contains stats associated with the peering.
  * primarybytesIn `integer`: The Primary BytesIn of the peering.
  * primarybytesOut `integer`: The primary BytesOut of the peering.
  * secondarybytesIn `integer`: The secondary BytesIn of the peering.
  * secondarybytesOut `integer`: The secondary BytesOut of the peering.

### ExpressRouteCircuitsArpTableListResult
* ExpressRouteCircuitsArpTableListResult `object`: Response for ListArpTable associated with the Express Route Circuits API.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of the ARP tables.
    * items [ExpressRouteCircuitArpTable](#expressroutecircuitarptable)

### ExpressRouteCircuitsRoutesTableListResult
* ExpressRouteCircuitsRoutesTableListResult `object`: Response for ListRoutesTable associated with the Express Route Circuits API.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of routes table.
    * items [ExpressRouteCircuitRoutesTable](#expressroutecircuitroutestable)

### ExpressRouteCircuitsRoutesTableSummaryListResult
* ExpressRouteCircuitsRoutesTableSummaryListResult `object`: Response for ListRoutesTable associated with the Express Route Circuits API.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of the routes table.
    * items [ExpressRouteCircuitRoutesTableSummary](#expressroutecircuitroutestablesummary)

### ExpressRoutePeeringState
* ExpressRoutePeeringState `string` (values: Disabled, Enabled): The state of peering.

### ExpressRoutePeeringType
* ExpressRoutePeeringType `string` (values: AzurePublicPeering, AzurePrivatePeering, MicrosoftPeering): The peering type.

### ExpressRouteServiceProvider
* ExpressRouteServiceProvider `object`: A ExpressRouteResourceProvider object.
  * properties [ExpressRouteServiceProviderPropertiesFormat](#expressrouteserviceproviderpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRouteServiceProviderBandwidthsOffered
* ExpressRouteServiceProviderBandwidthsOffered `object`: Contains bandwidths offered in ExpressRouteServiceProvider resources.
  * offerName `string`: The OfferName.
  * valueInMbps `integer`: The ValueInMbps.

### ExpressRouteServiceProviderListResult
* ExpressRouteServiceProviderListResult `object`: Response for the ListExpressRouteServiceProvider API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ExpressRouteResourceProvider resources.
    * items [ExpressRouteServiceProvider](#expressrouteserviceprovider)

### ExpressRouteServiceProviderPropertiesFormat
* ExpressRouteServiceProviderPropertiesFormat `object`: Properties of ExpressRouteServiceProvider.
  * bandwidthsOffered `array`: A list of bandwidths offered.
    * items [ExpressRouteServiceProviderBandwidthsOffered](#expressrouteserviceproviderbandwidthsoffered)
  * peeringLocations `array`: A list of peering locations.
    * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### Ipv6ExpressRouteCircuitPeeringConfig
* Ipv6ExpressRouteCircuitPeeringConfig `object`: Contains IPv6 peering config.
  * microsoftPeeringConfig [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
  * primaryPeerAddressPrefix `string`: The primary address prefix.
  * routeFilter `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * secondaryPeerAddressPrefix `string`: The secondary address prefix.
  * state `string` (values: Disabled, Enabled): The state of peering.

### PeerExpressRouteCircuitConnection
* PeerExpressRouteCircuitConnection `object`: Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [PeerExpressRouteCircuitConnectionPropertiesFormat](#peerexpressroutecircuitconnectionpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### PeerExpressRouteCircuitConnectionListResult
* PeerExpressRouteCircuitConnectionListResult `object`: Response for ListPeeredConnections API service call retrieves all global reach peer circuit connections that belongs to a Private Peering for an ExpressRouteCircuit.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The global reach peer circuit connection associated with Private Peering in an ExpressRoute Circuit.
    * items [PeerExpressRouteCircuitConnection](#peerexpressroutecircuitconnection)

### PeerExpressRouteCircuitConnectionPropertiesFormat
* PeerExpressRouteCircuitConnectionPropertiesFormat `object`: Properties of the peer express route circuit connection.
  * addressPrefix `string`: /29 IP address space to carve out Customer addresses for tunnels.
  * authResourceGuid `string`: The resource guid of the authorization used for the express route circuit connection.
  * circuitConnectionStatus [CircuitConnectionStatus](#circuitconnectionstatus)
  * connectionName `string`: The name of the express route circuit connection resource.
  * expressRouteCircuitPeering `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * peerExpressRouteCircuitPeering `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### ServiceProviderProvisioningState
* ServiceProviderProvisioningState `string` (values: NotProvisioned, Provisioning, Provisioned, Deprovisioning): The ServiceProviderProvisioningState state of the resource.


