# @datafire/azure_network_expressroutecrossconnection

Client library for ExpressRouteCrossConnection REST APIs

## Installation and Usage
```bash
npm install --save @datafire/azure_network_expressroutecrossconnection
```
```js
let azure_network_expressroutecrossconnection = require('@datafire/azure_network_expressroutecrossconnection').create({
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

The Microsoft Azure ExpressRouteCrossConnection Resource Provider REST APIs describes the operations for the connectivity provider to provision ExpressRoute circuit, create and modify BGP peering entities and troubleshoot connectivity on customer's ExpressRoute circuit.

## Actions

### ExpressRouteCrossConnections_List
Retrieves all the ExpressRouteCrossConnections in a subscription.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnectionListResult](#expressroutecrossconnectionlistresult)

### ExpressRouteCrossConnections_ListByResourceGroup
Retrieves all the ExpressRouteCrossConnections in a resource group.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_ListByResourceGroup({
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
* output [ExpressRouteCrossConnectionListResult](#expressroutecrossconnectionlistresult)

### ExpressRouteCrossConnections_Get
Gets details about the specified ExpressRouteCrossConnection.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_Get({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group (peering location of the circuit).
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection (service key of the circuit).
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnection](#expressroutecrossconnection)

### ExpressRouteCrossConnections_UpdateTags
Updates an express route cross connection tags.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_UpdateTags({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "crossConnectionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the cross connection.
  * crossConnectionParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnection](#expressroutecrossconnection)

### ExpressRouteCrossConnections_CreateOrUpdate
Update the specified ExpressRouteCrossConnection.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * parameters **required** [ExpressRouteCrossConnection](#expressroutecrossconnection)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnection](#expressroutecrossconnection)

### ExpressRouteCrossConnectionPeerings_List
Gets all peerings in a specified ExpressRouteCrossConnection.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnectionPeerings_List({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnectionPeeringList](#expressroutecrossconnectionpeeringlist)

### ExpressRouteCrossConnectionPeerings_Delete
Deletes the specified peering from the ExpressRouteCrossConnection.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnectionPeerings_Delete({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCrossConnectionPeerings_Get
Gets the specified peering for the ExpressRouteCrossConnection.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnectionPeerings_Get({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)

### ExpressRouteCrossConnectionPeerings_CreateOrUpdate
Creates or updates a peering in the specified ExpressRouteCrossConnection.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnectionPeerings_CreateOrUpdate({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "peeringName": "",
  "peeringParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * peeringName **required** `string`: The name of the peering.
  * peeringParameters **required** [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)

### ExpressRouteCrossConnections_ListArpTable
Gets the currently advertised ARP table associated with the express route cross connection in a resource group.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_ListArpTable({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "peeringName": "",
  "devicePath": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Response for ListArpTable associated with the Express Route Circuits API.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of the ARP tables.
    * items `object`: The ARP table associated with the ExpressRouteCircuit.
      * age `integer`: Entry age in minutes.
      * interface `string`: Interface address.
      * ipAddress `string`: The IP address.
      * macAddress `string`: The MAC address.

### ExpressRouteCrossConnections_ListRoutesTable
Gets the currently advertised routes table associated with the express route cross connection in a resource group.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_ListRoutesTable({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "peeringName": "",
  "devicePath": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Response for ListRoutesTable associated with the Express Route Circuits API.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of routes table.
    * items `object`: The routes table associated with the ExpressRouteCircuit.
      * locPrf `string`: Local preference value as set with the set local-preference route-map configuration command.
      * network `string`: IP address of a network entity.
      * nextHop `string`: NextHop address.
      * path `string`: Autonomous system paths to the destination network.
      * weight `integer`: Route Weight.

### ExpressRouteCrossConnections_ListRoutesTableSummary
Gets the route table summary associated with the express route cross connection in a resource group.


```js
azure_network_expressroutecrossconnection.ExpressRouteCrossConnections_ListRoutesTableSummary({
  "resourceGroupName": "",
  "crossConnectionName": "",
  "peeringName": "",
  "devicePath": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * crossConnectionName **required** `string`: The name of the ExpressRouteCrossConnection.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCrossConnectionsRoutesTableSummaryListResult](#expressroutecrossconnectionsroutestablesummarylistresult)



## Definitions

### ExpressRouteCircuitReference
* ExpressRouteCircuitReference `object`: Reference to an express route circuit.
  * id `string`: Corresponding Express Route Circuit Id.

### ExpressRouteCrossConnection
* ExpressRouteCrossConnection `object`: ExpressRouteCrossConnection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [ExpressRouteCrossConnectionProperties](#expressroutecrossconnectionproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRouteCrossConnectionListResult
* ExpressRouteCrossConnectionListResult `object`: Response for ListExpressRouteCrossConnection API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ExpressRouteCrossConnection resources.
    * items [ExpressRouteCrossConnection](#expressroutecrossconnection)

### ExpressRouteCrossConnectionPeering
* ExpressRouteCrossConnectionPeering `object`: Peering in an ExpressRoute Cross Connection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ExpressRouteCrossConnectionPeeringProperties](#expressroutecrossconnectionpeeringproperties)
  * id `string`: Resource ID.

### ExpressRouteCrossConnectionPeeringList
* ExpressRouteCrossConnectionPeeringList `object`: Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCrossConnection.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The peerings in an express route cross connection.
    * items [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)

### ExpressRouteCrossConnectionPeeringProperties
* ExpressRouteCrossConnectionPeeringProperties `object`: Properties of express route cross connection peering.
  * azureASN `integer`: The Azure ASN.
  * gatewayManagerEtag `string`: The GatewayManager Etag.
  * ipv6PeeringConfig `object`: Contains IPv6 peering config.
    * microsoftPeeringConfig `object`: Specifies the peering configuration.
      * advertisedCommunities `array`: The communities of bgp peering. Specified for microsoft peering.
        * items `string`
      * advertisedPublicPrefixes `array`: The reference of AdvertisedPublicPrefixes.
        * items `string`
      * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): The advertised public prefix state of the Peering resource.
      * customerASN `integer`: The CustomerASN of the peering.
      * legacyMode `integer`: The legacy mode of the peering.
      * routingRegistryName `string`: The RoutingRegistryName of the configuration.
    * primaryPeerAddressPrefix `string`: The primary address prefix.
    * routeFilter `object`: Reference to another subresource.
      * id `string`: Resource ID.
    * secondaryPeerAddressPrefix `string`: The secondary address prefix.
    * state `string` (values: Disabled, Enabled): The state of peering.
  * lastModifiedBy `string`: Who was the last to modify the peering.
  * microsoftPeeringConfig `object`: Specifies the peering configuration.
    * advertisedCommunities `array`: The communities of bgp peering. Specified for microsoft peering.
      * items `string`
    * advertisedPublicPrefixes `array`: The reference of AdvertisedPublicPrefixes.
      * items `string`
    * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): The advertised public prefix state of the Peering resource.
    * customerASN `integer`: The CustomerASN of the peering.
    * legacyMode `integer`: The legacy mode of the peering.
    * routingRegistryName `string`: The RoutingRegistryName of the configuration.
  * peerASN `integer`: The peer ASN.
  * peeringType `string` (values: AzurePublicPeering, AzurePrivatePeering, MicrosoftPeering): The peering type.
  * primaryAzurePort `string`: The primary port.
  * primaryPeerAddressPrefix `string`: The primary address prefix.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * secondaryAzurePort `string`: The secondary port.
  * secondaryPeerAddressPrefix `string`: The secondary address prefix.
  * sharedKey `string`: The shared key.
  * state `string` (values: Disabled, Enabled): The state of peering.
  * vlanId `integer`: The VLAN ID.

### ExpressRouteCrossConnectionProperties
* ExpressRouteCrossConnectionProperties `object`: Properties of ExpressRouteCrossConnection.
  * bandwidthInMbps `integer`: The circuit bandwidth In Mbps.
  * expressRouteCircuit [ExpressRouteCircuitReference](#expressroutecircuitreference)
  * peeringLocation `string`: The peering location of the ExpressRoute circuit.
  * peerings `array`: The list of peerings.
    * items [ExpressRouteCrossConnectionPeering](#expressroutecrossconnectionpeering)
  * primaryAzurePort `string`: The name of the primary port.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * sTag `integer`: The identifier of the circuit traffic.
  * secondaryAzurePort `string`: The name of the secondary port.
  * serviceProviderNotes `string`: Additional read only notes set by the connectivity provider.
  * serviceProviderProvisioningState `string` (values: NotProvisioned, Provisioning, Provisioned, Deprovisioning): The ServiceProviderProvisioningState state of the resource.

### ExpressRouteCrossConnectionRoutesTableSummary
* ExpressRouteCrossConnectionRoutesTableSummary `object`: The routes table associated with the ExpressRouteCircuit.
  * asn `integer`: Autonomous system number.
  * neighbor `string`: IP address of Neighbor router.
  * stateOrPrefixesReceived `string`: Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group.
  * upDown `string`: The length of time that the BGP session has been in the Established state, or the current status if not in the Established state.

### ExpressRouteCrossConnectionsRoutesTableSummaryListResult
* ExpressRouteCrossConnectionsRoutesTableSummaryListResult `object`: Response for ListRoutesTable associated with the Express Route Cross Connections.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of the routes table.
    * items [ExpressRouteCrossConnectionRoutesTableSummary](#expressroutecrossconnectionroutestablesummary)


