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

azure_network_expressroutecircuit.ExpressRouteCircuits_ListAll({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
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
Gets the specified authorization from the specified express route circuit.


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
* AuthorizationPropertiesFormat `object`
  * authorizationKey `string`: The authorization key.
  * authorizationUseStatus `string` (values: Available, InUse): AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
  * provisioningState `string`: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### ExpressRouteCircuit
* ExpressRouteCircuit `object`: ExpressRouteCircuit resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * properties [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
  * sku [ExpressRouteCircuitSku](#expressroutecircuitsku)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRouteCircuitArpTable
* ExpressRouteCircuitArpTable `object`: The ARP table associated with the ExpressRouteCircuit.
  * age `integer`: Age
  * interface `string`: Interface
  * ipAddress `string`: The IP address.
  * macAddress `string`: The MAC address.

### ExpressRouteCircuitAuthorization
* ExpressRouteCircuitAuthorization `object`: Authorization in an ExpressRouteCircuit resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
  * id `string`: Resource ID.

### ExpressRouteCircuitListResult
* ExpressRouteCircuitListResult `object`: Response for ListExpressRouteCircuit API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ExpressRouteCircuits in a resource group.
    * items [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuitPeering
* ExpressRouteCircuitPeering `object`: Peering in an ExpressRouteCircuit resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
  * id `string`: Resource ID.

### ExpressRouteCircuitPeeringConfig
* ExpressRouteCircuitPeeringConfig `object`: Specifies the peering configuration.
  * advertisedPublicPrefixes `array`: The reference of AdvertisedPublicPrefixes.
    * items `string`
  * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
  * customerASN `integer`: The CustomerASN of the peering.
  * routingRegistryName `string`: The RoutingRegistryName of the configuration.

### ExpressRouteCircuitPeeringListResult
* ExpressRouteCircuitPeeringListResult `object`: Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The peerings in an express route circuit.
    * items [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuitPeeringPropertiesFormat
* ExpressRouteCircuitPeeringPropertiesFormat `object`
  * azureASN `integer`: The Azure ASN.
  * gatewayManagerEtag `string`: The GatewayManager Etag.
  * lastModifiedBy `string`: Gets whether the provider or the customer last modified the peering.
  * microsoftPeeringConfig [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
  * peerASN `integer`: The peer ASN.
  * peeringType `string` (values: AzurePublicPeering, AzurePrivatePeering, MicrosoftPeering): The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
  * primaryAzurePort `string`: The primary port.
  * primaryPeerAddressPrefix `string`: The primary address prefix.
  * provisioningState `string`: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * secondaryAzurePort `string`: The secondary port.
  * secondaryPeerAddressPrefix `string`: The secondary address prefix.
  * sharedKey `string`: The shared key.
  * state `string` (values: Disabled, Enabled): The state of peering. Possible values are: 'Disabled' and 'Enabled'
  * stats [ExpressRouteCircuitStats](#expressroutecircuitstats)
  * vlanId `integer`: The VLAN ID.

### ExpressRouteCircuitPropertiesFormat
* ExpressRouteCircuitPropertiesFormat `object`: Properties of ExpressRouteCircuit.
  * allowClassicOperations `boolean`: Allow classic operations
  * authorizations `array`: The list of authorizations.
    * items [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)
  * circuitProvisioningState `string`: The CircuitProvisioningState state of the resource.
  * gatewayManagerEtag `string`: The GatewayManager Etag.
  * peerings `array`: The list of peerings.
    * items [ExpressRouteCircuitPeering](#expressroutecircuitpeering)
  * provisioningState `string`: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * serviceKey `string`: The ServiceKey.
  * serviceProviderNotes `string`: The ServiceProviderNotes.
  * serviceProviderProperties [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties)
  * serviceProviderProvisioningState `string` (values: NotProvisioned, Provisioning, Provisioned, Deprovisioning): The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.

### ExpressRouteCircuitRoutesTable
* ExpressRouteCircuitRoutesTable `object`: The routes table associated with the ExpressRouteCircuit
  * locPrf `string`: locPrf
  * network `string`: network
  * nextHop `string`: nextHop
  * path `string`: path
  * weight `integer`: weight.

### ExpressRouteCircuitRoutesTableSummary
* ExpressRouteCircuitRoutesTableSummary `object`: The routes table associated with the ExpressRouteCircuit.
  * as `integer`: Autonomous system number.
  * neighbor `string`: Neighbor
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
  * family `string` (values: UnlimitedData, MeteredData): The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
  * name `string`: The name of the SKU.
  * tier `string` (values: Standard, Premium): The tier of the SKU. Possible values are 'Standard' and 'Premium'.

### ExpressRouteCircuitStats
* ExpressRouteCircuitStats `object`: Contains stats associated with the peering.
  * primarybytesIn `integer`: Gets BytesIn of the peering.
  * primarybytesOut `integer`: Gets BytesOut of the peering.
  * secondarybytesIn `integer`: Gets BytesIn of the peering.
  * secondarybytesOut `integer`: Gets BytesOut of the peering.

### ExpressRouteCircuitsArpTableListResult
* ExpressRouteCircuitsArpTableListResult `object`: Response for ListArpTable associated with the Express Route Circuits API.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Gets list of the ARP table.
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
  * bandwidthsOffered `array`: Gets bandwidths offered.
    * items [ExpressRouteServiceProviderBandwidthsOffered](#expressrouteserviceproviderbandwidthsoffered)
  * peeringLocations `array`: Get a list of peering locations.
    * items `string`
  * provisioningState `string`: Gets the provisioning state of the resource.


