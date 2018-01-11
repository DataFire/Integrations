# @datafire/azure_arm_network

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_network
```
```js
let azure_arm_network = require('@datafire/azure_arm_network').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_network.ApplicationGateways_ListAll({}).then(data => {
  console.log(data);
})
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### ApplicationGateways_ListAll
The List ApplicationGateway operation retrieves all the application gateways in a subscription.


```js
azure_arm_network.ApplicationGateways_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationGatewayListResult](#applicationgatewaylistresult)

### ExpressRouteCircuits_ListAll
The List ExpressRouteCircuit operation retrieves all the ExpressRouteCircuits in a subscription.


```js
azure_arm_network.ExpressRouteCircuits_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitListResult](#expressroutecircuitlistresult)

### ExpressRouteServiceProviders_List
The List ExpressRouteServiceProvider operation retrieves all the available ExpressRouteServiceProviders.


```js
azure_arm_network.ExpressRouteServiceProviders_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteServiceProviderListResult](#expressrouteserviceproviderlistresult)

### LoadBalancers_ListAll
The List loadBalancer operation retrieves all the load balancers in a subscription.


```js
azure_arm_network.LoadBalancers_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerListResult](#loadbalancerlistresult)

### CheckDnsNameAvailability
Checks whether a domain name in the cloudapp.net zone is available for use.


```js
azure_arm_network.CheckDnsNameAvailability({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name
  * domainNameLabel `string`: The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DnsNameAvailabilityResult](#dnsnameavailabilityresult)

### Usages_List
Lists compute usages for a subscription.


```js
azure_arm_network.Usages_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location upon which resource usage is queried.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UsagesListResult](#usageslistresult)

### NetworkInterfaces_ListAll
The List networkInterfaces operation retrieves all the networkInterfaces in a subscription.


```js
azure_arm_network.NetworkInterfaces_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceListResult](#networkinterfacelistresult)

### NetworkSecurityGroups_ListAll
The list NetworkSecurityGroups returns all network security groups in a subscription


```js
azure_arm_network.NetworkSecurityGroups_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkSecurityGroupListResult](#networksecuritygrouplistresult)

### PublicIPAddresses_ListAll
The List publicIpAddress operation retrieves all the publicIpAddresses in a subscription.


```js
azure_arm_network.PublicIPAddresses_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PublicIPAddressListResult](#publicipaddresslistresult)

### RouteTables_ListAll
The list RouteTables returns all route tables in a subscription


```js
azure_arm_network.RouteTables_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteTableListResult](#routetablelistresult)

### VirtualNetworks_ListAll
The list VirtualNetwork returns all Virtual Networks in a subscription


```js
azure_arm_network.VirtualNetworks_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkListResult](#virtualnetworklistresult)

### ApplicationGateways_List
The List ApplicationGateway operation retrieves all the application gateways in a resource group.


```js
azure_arm_network.ApplicationGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationGatewayListResult](#applicationgatewaylistresult)

### ApplicationGateways_Delete
The delete ApplicationGateway operation deletes the specified application gateway.


```js
azure_arm_network.ApplicationGateways_Delete({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApplicationGateways_Get
The Get ApplicationGateway operation retrieves information about the specified application gateway.


```js
azure_arm_network.ApplicationGateways_Get({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationGateway](#applicationgateway)

### ApplicationGateways_CreateOrUpdate
The Put ApplicationGateway operation creates/updates a ApplicationGateway


```js
azure_arm_network.ApplicationGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the ApplicationGateway.
  * parameters **required** [ApplicationGateway](#applicationgateway)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationGateway](#applicationgateway)

### ApplicationGateways_Start
The Start ApplicationGateway operation starts application gateway in the specified resource group through Network resource provider.


```js
azure_arm_network.ApplicationGateways_Start({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApplicationGateways_Stop
The STOP ApplicationGateway operation stops application gateway in the specified resource group through Network resource provider.


```js
azure_arm_network.ApplicationGateways_Stop({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkGatewayConnections_List
The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways connections created.


```js
azure_arm_network.VirtualNetworkGatewayConnections_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayConnectionListResult](#virtualnetworkgatewayconnectionlistresult)

### VirtualNetworkGatewayConnections_GetSharedKey
The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified virtual network gateway connection shared key through Network resource provider.


```js
azure_arm_network.VirtualNetworkGatewayConnections_GetSharedKey({
  "resourceGroupName": "",
  "connectionSharedKeyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * connectionSharedKeyName **required** `string`: The virtual network gateway connection shared key name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionSharedKeyResult](#connectionsharedkeyresult)

### VirtualNetworkGatewayConnections_Delete
The Delete VirtualNetworkGatewayConnection operation deletes the specified virtual network Gateway connection through Network resource provider.


```js
azure_arm_network.VirtualNetworkGatewayConnections_Delete({
  "resourceGroupName": "",
  "virtualNetworkGatewayConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayConnectionName **required** `string`: The name of the virtual network gateway connection.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkGatewayConnections_Get
The Get VirtualNetworkGatewayConnection operation retrieves information about the specified virtual network gateway connection through Network resource provider.


```js
azure_arm_network.VirtualNetworkGatewayConnections_Get({
  "resourceGroupName": "",
  "virtualNetworkGatewayConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayConnectionName **required** `string`: The name of the virtual network gateway connection.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnections_CreateOrUpdate
The Put VirtualNetworkGatewayConnection operation creates/updates a virtual network gateway connection in the specified resource group through Network resource provider.


```js
azure_arm_network.VirtualNetworkGatewayConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkGatewayConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayConnectionName **required** `string`: The name of the virtual network gateway connection.
  * parameters **required** [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnections_SetSharedKey
The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.


```js
azure_arm_network.VirtualNetworkGatewayConnections_SetSharedKey({
  "resourceGroupName": "",
  "virtualNetworkGatewayConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayConnectionName **required** `string`: The virtual network gateway connection name.
  * parameters **required** [ConnectionSharedKey](#connectionsharedkey)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionSharedKey](#connectionsharedkey)

### VirtualNetworkGatewayConnections_ResetSharedKey
The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.


```js
azure_arm_network.VirtualNetworkGatewayConnections_ResetSharedKey({
  "resourceGroupName": "",
  "virtualNetworkGatewayConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayConnectionName **required** `string`: The virtual network gateway connection reset shared key Name.
  * parameters **required** [ConnectionResetSharedKey](#connectionresetsharedkey)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionResetSharedKey](#connectionresetsharedkey)

### ExpressRouteCircuits_List
The List ExpressRouteCircuit operation retrieves all the ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitListResult](#expressroutecircuitlistresult)

### ExpressRouteCircuits_Delete
The delete ExpressRouteCircuit operation deletes the specified ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuits_Delete({
  "resourceGroupName": "",
  "circuitName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * circuitName **required** `string`: The name of the express route Circuit.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuits_Get
The Get ExpressRouteCircuit operation retrieves information about the specified ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuits_Get({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuits_CreateOrUpdate
The Put ExpressRouteCircuit operation creates/updates a ExpressRouteCircuit


```js
azure_arm_network.ExpressRouteCircuits_CreateOrUpdate({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuitAuthorizations_List
The List authorization operation retrieves all the authorizations in an ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuitAuthorizations_List({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationListResult](#authorizationlistresult)

### ExpressRouteCircuitAuthorizations_Delete
The delete authorization operation deletes the specified authorization from the specified ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuitAuthorizations_Delete({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuitAuthorizations_Get
The GET authorization operation retrieves the specified authorization from the specified ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuitAuthorizations_Get({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)

### ExpressRouteCircuitAuthorizations_CreateOrUpdate
The Put Authorization operation creates/updates an authorization in the specified ExpressRouteCircuits


```js
azure_arm_network.ExpressRouteCircuitAuthorizations_CreateOrUpdate({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)

### ExpressRouteCircuitPeerings_List
The List peering operation retrieves all the peerings in an ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuitPeerings_List({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitPeeringListResult](#expressroutecircuitpeeringlistresult)

### ExpressRouteCircuitPeerings_Delete
The delete peering operation deletes the specified peering from the ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuitPeerings_Delete({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteCircuitPeerings_Get
The GET peering operation retrieves the specified authorization from the ExpressRouteCircuit.


```js
azure_arm_network.ExpressRouteCircuitPeerings_Get({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuitPeerings_CreateOrUpdate
The Put Peering operation creates/updates an peering in the specified ExpressRouteCircuits


```js
azure_arm_network.ExpressRouteCircuitPeerings_CreateOrUpdate({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuits_ListArpTable
The ListArpTable from ExpressRouteCircuit operation retrieves the currently advertised arp table associated with the ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_ListArpTable({
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
  * circuitName **required** `string`: The name of the circuit.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitsArpTableListResult](#expressroutecircuitsarptablelistresult)

### ExpressRouteCircuits_ListRoutesTable
The ListRoutesTable from ExpressRouteCircuit operation retrieves the currently advertised routes table associated with the ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_ListRoutesTable({
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
  * circuitName **required** `string`: The name of the circuit.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitsRoutesTableListResult](#expressroutecircuitsroutestablelistresult)

### ExpressRouteCircuits_ListRoutesTableSummary
The ListRoutesTable from ExpressRouteCircuit operation retrieves the currently advertised routes table associated with the ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_ListRoutesTableSummary({
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
  * circuitName **required** `string`: The name of the circuit.
  * peeringName **required** `string`: The name of the peering.
  * devicePath **required** `string`: The path of the device.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitsRoutesTableSummaryListResult](#expressroutecircuitsroutestablesummarylistresult)

### ExpressRouteCircuits_GetPeeringStats
The List stats ExpressRouteCircuit operation retrieves all the stats from a ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_GetPeeringStats({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitStats](#expressroutecircuitstats)

### ExpressRouteCircuits_GetStats
The List stats ExpressRouteCircuit operation retrieves all the stats from a ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_GetStats({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteCircuitStats](#expressroutecircuitstats)

### LoadBalancers_List
The List loadBalancer operation retrieves all the load balancers in a resource group.


```js
azure_arm_network.LoadBalancers_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerListResult](#loadbalancerlistresult)

### LoadBalancers_Delete
The delete LoadBalancer operation deletes the specified load balancer.


```js
azure_arm_network.LoadBalancers_Delete({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the loadBalancer.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LoadBalancers_Get
The Get LoadBalancer operation retrieves information about the specified LoadBalancer.


```js
azure_arm_network.LoadBalancers_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the loadBalancer.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [LoadBalancer](#loadbalancer)

### LoadBalancers_CreateOrUpdate
The Put LoadBalancer operation creates/updates a LoadBalancer


```js
azure_arm_network.LoadBalancers_CreateOrUpdate({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the loadBalancer.
  * parameters **required** [LoadBalancer](#loadbalancer)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancer](#loadbalancer)

### LocalNetworkGateways_List
The List LocalNetworkGateways operation retrieves all the local network gateways stored.


```js
azure_arm_network.LocalNetworkGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocalNetworkGatewayListResult](#localnetworkgatewaylistresult)

### LocalNetworkGateways_Delete
The Delete LocalNetworkGateway operation deletes the specified local network Gateway through Network resource provider.


```js
azure_arm_network.LocalNetworkGateways_Delete({
  "resourceGroupName": "",
  "localNetworkGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * localNetworkGatewayName **required** `string`: The name of the local network gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LocalNetworkGateways_Get
The Get LocalNetworkGateway operation retrieves information about the specified local network gateway through Network resource provider.


```js
azure_arm_network.LocalNetworkGateways_Get({
  "resourceGroupName": "",
  "localNetworkGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * localNetworkGatewayName **required** `string`: The name of the local network gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocalNetworkGateway](#localnetworkgateway)

### LocalNetworkGateways_CreateOrUpdate
The Put LocalNetworkGateway operation creates/updates a local network gateway in the specified resource group through Network resource provider.


```js
azure_arm_network.LocalNetworkGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "localNetworkGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * localNetworkGatewayName **required** `string`: The name of the local network gateway.
  * parameters **required** [LocalNetworkGateway](#localnetworkgateway)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocalNetworkGateway](#localnetworkgateway)

### NetworkInterfaces_List
The List networkInterfaces operation retrieves all the networkInterfaces in a resource group.


```js
azure_arm_network.NetworkInterfaces_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceListResult](#networkinterfacelistresult)

### NetworkInterfaces_Delete
The delete netwokInterface operation deletes the specified netwokInterface.


```js
azure_arm_network.NetworkInterfaces_Delete({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkInterfaces_Get
The Get network interface operation retrieves information about the specified network interface.


```js
azure_arm_network.NetworkInterfaces_Get({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [NetworkInterface](#networkinterface)

### NetworkInterfaces_CreateOrUpdate
The Put NetworkInterface operation creates/updates a networkInterface


```js
azure_arm_network.NetworkInterfaces_CreateOrUpdate({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * parameters **required** [NetworkInterface](#networkinterface)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterface](#networkinterface)

### NetworkInterfaces_ListEffectiveNetworkSecurityGroups
The list effective network security group operation retrieves all the network security groups applied on a networkInterface.


```js
azure_arm_network.NetworkInterfaces_ListEffectiveNetworkSecurityGroups({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EffectiveNetworkSecurityGroupListResult](#effectivenetworksecuritygrouplistresult)

### NetworkInterfaces_GetEffectiveRouteTable
The get effective routetable operation retrieves all the route tables applied on a networkInterface.


```js
azure_arm_network.NetworkInterfaces_GetEffectiveRouteTable({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EffectiveRouteListResult](#effectiveroutelistresult)

### NetworkSecurityGroups_List
The list NetworkSecurityGroups returns all network security groups in a resource group


```js
azure_arm_network.NetworkSecurityGroups_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkSecurityGroupListResult](#networksecuritygrouplistresult)

### NetworkSecurityGroups_Delete
The Delete NetworkSecurityGroup operation deletes the specified network security group


```js
azure_arm_network.NetworkSecurityGroups_Delete({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkSecurityGroups_Get
The Get NetworkSecurityGroups operation retrieves information about the specified network security group.


```js
azure_arm_network.NetworkSecurityGroups_Get({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [NetworkSecurityGroup](#networksecuritygroup)

### NetworkSecurityGroups_CreateOrUpdate
The Put NetworkSecurityGroup operation creates/updates a network security group in the specified resource group.


```js
azure_arm_network.NetworkSecurityGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * parameters **required** [NetworkSecurityGroup](#networksecuritygroup)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkSecurityGroup](#networksecuritygroup)

### SecurityRules_List
The List network security rule operation retrieves all the security rules in a network security group.


```js
azure_arm_network.SecurityRules_List({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRuleListResult](#securityrulelistresult)

### SecurityRules_Delete
The delete network security rule operation deletes the specified network security rule.


```js
azure_arm_network.SecurityRules_Delete({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "securityRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * securityRuleName **required** `string`: The name of the security rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### SecurityRules_Get
The Get NetworkSecurityRule operation retrieves information about the specified network security rule.


```js
azure_arm_network.SecurityRules_Get({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "securityRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * securityRuleName **required** `string`: The name of the security rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRule](#securityrule)

### SecurityRules_CreateOrUpdate
The Put network security rule operation creates/updates a security rule in the specified network security group


```js
azure_arm_network.SecurityRules_CreateOrUpdate({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "securityRuleName": "",
  "securityRuleParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * securityRuleName **required** `string`: The name of the security rule.
  * securityRuleParameters **required** [SecurityRule](#securityrule)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRule](#securityrule)

### PublicIPAddresses_List
The List publicIpAddress operation retrieves all the publicIpAddresses in a resource group.


```js
azure_arm_network.PublicIPAddresses_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PublicIPAddressListResult](#publicipaddresslistresult)

### PublicIPAddresses_Delete
The delete publicIpAddress operation deletes the specified publicIpAddress.


```js
azure_arm_network.PublicIPAddresses_Delete({
  "resourceGroupName": "",
  "publicIpAddressName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpAddressName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PublicIPAddresses_Get
The Get publicIpAddress operation retrieves information about the specified pubicIpAddress


```js
azure_arm_network.PublicIPAddresses_Get({
  "resourceGroupName": "",
  "publicIpAddressName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpAddressName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [PublicIPAddress](#publicipaddress)

### PublicIPAddresses_CreateOrUpdate
The Put PublicIPAddress operation creates/updates a stable/dynamic PublicIP address


```js
azure_arm_network.PublicIPAddresses_CreateOrUpdate({
  "resourceGroupName": "",
  "publicIpAddressName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpAddressName **required** `string`: The name of the publicIpAddress.
  * parameters **required** [PublicIPAddress](#publicipaddress)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PublicIPAddress](#publicipaddress)

### RouteTables_List
The list RouteTables returns all route tables in a resource group


```js
azure_arm_network.RouteTables_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteTableListResult](#routetablelistresult)

### RouteTables_Delete
The Delete RouteTable operation deletes the specified Route Table


```js
azure_arm_network.RouteTables_Delete({
  "resourceGroupName": "",
  "routeTableName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RouteTables_Get
The Get RouteTables operation retrieves information about the specified route table.


```js
azure_arm_network.RouteTables_Get({
  "resourceGroupName": "",
  "routeTableName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [RouteTable](#routetable)

### RouteTables_CreateOrUpdate
The Put RouteTable operation creates/updates a route table in the specified resource group.


```js
azure_arm_network.RouteTables_CreateOrUpdate({
  "resourceGroupName": "",
  "routeTableName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * parameters **required** [RouteTable](#routetable)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteTable](#routetable)

### Routes_List
The List network security rule operation retrieves all the routes in a route table.


```js
azure_arm_network.Routes_List({
  "resourceGroupName": "",
  "routeTableName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteListResult](#routelistresult)

### Routes_Delete
The delete route operation deletes the specified route from a route table.


```js
azure_arm_network.Routes_Delete({
  "resourceGroupName": "",
  "routeTableName": "",
  "routeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * routeName **required** `string`: The name of the route.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Routes_Get
The Get route operation retrieves information about the specified route from the route table.


```js
azure_arm_network.Routes_Get({
  "resourceGroupName": "",
  "routeTableName": "",
  "routeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * routeName **required** `string`: The name of the route.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Route](#route)

### Routes_CreateOrUpdate
The Put route operation creates/updates a route in the specified route table


```js
azure_arm_network.Routes_CreateOrUpdate({
  "resourceGroupName": "",
  "routeTableName": "",
  "routeName": "",
  "routeParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * routeName **required** `string`: The name of the route.
  * routeParameters **required** [Route](#route)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Route](#route)

### VirtualNetworkGateways_List
The List VirtualNetworkGateways operation retrieves all the virtual network gateways stored.


```js
azure_arm_network.VirtualNetworkGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayListResult](#virtualnetworkgatewaylistresult)

### VirtualNetworkGateways_Delete
The Delete VirtualNetworkGateway operation deletes the specified virtual network Gateway through Network resource provider.


```js
azure_arm_network.VirtualNetworkGateways_Delete({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkGateways_Get
The Get VirtualNetworkGateway operation retrieves information about the specified virtual network gateway through Network resource provider.


```js
azure_arm_network.VirtualNetworkGateways_Get({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGateways_CreateOrUpdate
The Put VirtualNetworkGateway operation creates/updates a virtual network gateway in the specified resource group through Network resource provider.


```js
azure_arm_network.VirtualNetworkGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * parameters **required** [VirtualNetworkGateway](#virtualnetworkgateway)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGateways_Generatevpnclientpackage
The Generatevpnclientpackage operation generates Vpn client package for P2S client of the virtual network gateway in the specified resource group through Network resource provider.


```js
azure_arm_network.VirtualNetworkGateways_Generatevpnclientpackage({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * parameters **required** [VpnClientParameters](#vpnclientparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_Reset
The Reset VirtualNetworkGateway operation resets the primary of the virtual network gateway in the specified resource group through Network resource provider.


```js
azure_arm_network.VirtualNetworkGateways_Reset({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * parameters **required** [VirtualNetworkGateway](#virtualnetworkgateway)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworks_List
The list VirtualNetwork returns all Virtual Networks in a resource group


```js
azure_arm_network.VirtualNetworks_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkListResult](#virtualnetworklistresult)

### VirtualNetworks_Delete
The Delete VirtualNetwork operation deletes the specified virtual network


```js
azure_arm_network.VirtualNetworks_Delete({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworks_Get
The Get VirtualNetwork operation retrieves information about the specified virtual network.


```js
azure_arm_network.VirtualNetworks_Get({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_CreateOrUpdate
The Put VirtualNetwork operation creates/updates a virtual network in the specified resource group.


```js
azure_arm_network.VirtualNetworks_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * parameters **required** [VirtualNetwork](#virtualnetwork)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_CheckIPAddressAvailability
Checks whether a private Ip address is available for use.


```js
azure_arm_network.VirtualNetworks_CheckIPAddressAvailability({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * ipAddress `string`: The private IP address to be verified.
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IPAddressAvailabilityResult](#ipaddressavailabilityresult)

### Subnets_List
The List subnets operation retrieves all the subnets in a virtual network.


```js
azure_arm_network.Subnets_List({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubnetListResult](#subnetlistresult)

### Subnets_Delete
The delete subnet operation deletes the specified subnet.


```js
azure_arm_network.Subnets_Delete({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subnets_Get
The Get subnet operation retrieves information about the specified subnet.


```js
azure_arm_network.Subnets_Get({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [Subnet](#subnet)

### Subnets_CreateOrUpdate
The Put Subnet operation creates/updates a subnet in the specified virtual network


```js
azure_arm_network.Subnets_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "subnetParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * subnetParameters **required** [Subnet](#subnet)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Subnet](#subnet)

### VirtualNetworkPeerings_List
The List virtual network peerings operation retrieves all the peerings in a virtual network.


```js
azure_arm_network.VirtualNetworkPeerings_List({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkPeeringListResult](#virtualnetworkpeeringlistresult)

### VirtualNetworkPeerings_Delete
The delete virtual network peering operation deletes the specified peering.


```js
azure_arm_network.VirtualNetworkPeerings_Delete({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "virtualNetworkPeeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * virtualNetworkPeeringName **required** `string`: The name of the virtual network peering.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkPeerings_Get
The Get virtual network peering operation retrieves information about the specified virtual network peering.


```js
azure_arm_network.VirtualNetworkPeerings_Get({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "virtualNetworkPeeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * virtualNetworkPeeringName **required** `string`: The name of the virtual network peering.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkPeering](#virtualnetworkpeering)

### VirtualNetworkPeerings_CreateOrUpdate
The Put virtual network peering operation creates/updates a peering in the specified virtual network


```js
azure_arm_network.VirtualNetworkPeerings_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "virtualNetworkPeeringName": "",
  "VirtualNetworkPeeringParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * virtualNetworkPeeringName **required** `string`: The name of the peering.
  * VirtualNetworkPeeringParameters **required** [VirtualNetworkPeering](#virtualnetworkpeering)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkPeering](#virtualnetworkpeering)

### NetworkInterfaces_ListVirtualMachineScaleSetNetworkInterfaces
The list network interface operation retrieves information about all network interfaces in a virtual machine scale set.


```js
azure_arm_network.NetworkInterfaces_ListVirtualMachineScaleSetNetworkInterfaces({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceListResult](#networkinterfacelistresult)

### NetworkInterfaces_ListVirtualMachineScaleSetVMNetworkInterfaces
The list network interface operation retrieves information about all network interfaces in a virtual machine from a virtual machine scale set.


```js
azure_arm_network.NetworkInterfaces_ListVirtualMachineScaleSetVMNetworkInterfaces({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * virtualmachineIndex **required** `string`: The virtual machine index.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceListResult](#networkinterfacelistresult)

### NetworkInterfaces_GetVirtualMachineScaleSetNetworkInterface
The Get network interface operation retrieves information about the specified network interface in a virtual machine scale set.


```js
azure_arm_network.NetworkInterfaces_GetVirtualMachineScaleSetNetworkInterface({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * virtualmachineIndex **required** `string`: The virtual machine index.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: expand references resources.

#### Output
* output [NetworkInterface](#networkinterface)



## Definitions

### AddressSpace
* AddressSpace `object`: AddressSpace contains an array of IP address ranges that can be used by subnets
  * addressPrefixes `array`: Gets or sets list of address blocks reserved for this virtual network in CIDR notation
    * items `string`

### ApplicationGateway
* ApplicationGateway `object`: ApplicationGateways resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * properties [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ApplicationGatewayAuthenticationCertificate
* ApplicationGatewayAuthenticationCertificate `object`: Authentication certificates of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayAuthenticationCertificatePropertiesFormat
* ApplicationGatewayAuthenticationCertificatePropertiesFormat `object`: Properties of Authentication certificates of application gateway
  * data `string`: Certificate public data 
  * provisioningState `string`: Provisioning state of the authentication certificate resource Updating/Deleting/Failed

### ApplicationGatewayBackendAddress
* ApplicationGatewayBackendAddress `object`: Backend Address of application gateway
  * fqdn `string`: Dns name
  * ipAddress `string`: Ip address

### ApplicationGatewayBackendAddressPool
* ApplicationGatewayBackendAddressPool `object`: Backend Address Pool of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayBackendAddressPoolPropertiesFormat
* ApplicationGatewayBackendAddressPoolPropertiesFormat `object`: Properties of Backend Address Pool of application gateway
  * backendAddresses `array`: Backend addresses
    * items [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)
  * backendIPConfigurations `array`: Collection of references to IPs defined in NICs
    * items [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)
  * provisioningState `string`: Provisioning state of the backend address pool resource Updating/Deleting/Failed

### ApplicationGatewayBackendHttpSettings
* ApplicationGatewayBackendHttpSettings `object`: Backend address pool settings of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayBackendHttpSettingsPropertiesFormat
* ApplicationGatewayBackendHttpSettingsPropertiesFormat `object`: Properties of Backend address pool settings of application gateway
  * authenticationCertificates `array`: Array of references to Application Gateway Authentication Certificates
    * items [SubResource](#subresource)
  * cookieBasedAffinity `string` (values: Enabled, Disabled): Cookie affinity
  * port `integer`: Port
  * probe [SubResource](#subresource)
  * protocol `string` (values: Http, Https): Protocol
  * provisioningState `string`: Provisioning state of the backend http settings resource Updating/Deleting/Failed
  * requestTimeout `integer`: Request timeout

### ApplicationGatewayFrontendIPConfiguration
* ApplicationGatewayFrontendIPConfiguration `object`: Frontend IP configuration of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayFrontendIPConfigurationPropertiesFormat
* ApplicationGatewayFrontendIPConfigurationPropertiesFormat `object`: Properties of Frontend IP configuration of application gateway
  * privateIPAddress `string`: PrivateIPAddress of the Network Interface IP Configuration
  * privateIPAllocationMethod `string` (values: Static, Dynamic): PrivateIP allocation method (Static/Dynamic)
  * provisioningState `string`: Provisioning state of the PublicIP resource Updating/Deleting/Failed
  * publicIPAddress [SubResource](#subresource)
  * subnet [SubResource](#subresource)

### ApplicationGatewayFrontendPort
* ApplicationGatewayFrontendPort `object`: Frontend Port of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayFrontendPortPropertiesFormat
* ApplicationGatewayFrontendPortPropertiesFormat `object`: Properties of Frontend Port of application gateway
  * port `integer`: Frontend port
  * provisioningState `string`: Provisioning state of the frontend port resource Updating/Deleting/Failed

### ApplicationGatewayHttpListener
* ApplicationGatewayHttpListener `object`: Http listener of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayHttpListenerPropertiesFormat
* ApplicationGatewayHttpListenerPropertiesFormat `object`: Properties of Http listener of application gateway
  * frontendIPConfiguration [SubResource](#subresource)
  * frontendPort [SubResource](#subresource)
  * hostName `string`: Host name of http listener 
  * protocol `string` (values: Http, Https): Protocol
  * provisioningState `string`: Provisioning state of the http listener resource Updating/Deleting/Failed
  * requireServerNameIndication `boolean`: RequireServerNameIndication of http listener 
  * sslCertificate [SubResource](#subresource)

### ApplicationGatewayIPConfiguration
* ApplicationGatewayIPConfiguration `object`: IP configuration of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayIPConfigurationPropertiesFormat
* ApplicationGatewayIPConfigurationPropertiesFormat `object`: Properties of IP configuration of application gateway
  * provisioningState `string`: Provisioning state of the application gateway subnet resource Updating/Deleting/Failed
  * subnet [SubResource](#subresource)

### ApplicationGatewayListResult
* ApplicationGatewayListResult `object`: Response for ListApplicationGateways Api service call
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of ApplicationGateways in a resource group
    * items [ApplicationGateway](#applicationgateway)

### ApplicationGatewayPathRule
* ApplicationGatewayPathRule `object`: Path rule of URL path map of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayPathRulePropertiesFormat
* ApplicationGatewayPathRulePropertiesFormat `object`: Properties of probe of application gateway
  * backendAddressPool [SubResource](#subresource)
  * backendHttpSettings [SubResource](#subresource)
  * paths `array`: Path rules of URL path map
    * items `string`
  * provisioningState `string`: Path rule of URL path map resource Updating/Deleting/Failed

### ApplicationGatewayProbe
* ApplicationGatewayProbe `object`: Probe of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayProbePropertiesFormat
* ApplicationGatewayProbePropertiesFormat `object`: Properties of probe of application gateway
  * host `string`: Host to send probe to 
  * interval `integer`: Probing interval in seconds 
  * path `string`: Relative path of probe 
  * protocol `string` (values: Http, Https): Protocol
  * provisioningState `string`: Provisioning state of the backend http settings resource Updating/Deleting/Failed
  * timeout `integer`: Probing timeout in seconds 
  * unhealthyThreshold `integer`: Probing unhealthy threshold 

### ApplicationGatewayPropertiesFormat
* ApplicationGatewayPropertiesFormat `object`: Properties of Application Gateway
  * authenticationCertificates `array`: Authentication certificates of application gateway resource
    * items [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)
  * backendAddressPools `array`: Backend address pool of application gateway resource
    * items [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * backendHttpSettingsCollection `array`: Backend http settings of application gateway resource
    * items [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)
  * frontendIPConfigurations `array`: Frontend IP addresses of application gateway resource
    * items [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)
  * frontendPorts `array`: Frontend ports of application gateway resource
    * items [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)
  * gatewayIPConfigurations `array`: Subnets of application gateway resource
    * items [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)
  * httpListeners `array`: HTTP listeners of application gateway resource
    * items [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)
  * operationalState `string` (values: Stopped, Starting, Running, Stopping): Operational state of application gateway resource
  * probes `array`: Probes of application gateway resource
    * items [ApplicationGatewayProbe](#applicationgatewayprobe)
  * provisioningState `string`: Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
  * requestRoutingRules `array`: Request routing rules of application gateway resource
    * items [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)
  * resourceGuid `string`: Resource guid property of the ApplicationGateway resource
  * sku [ApplicationGatewaySku](#applicationgatewaysku)
  * sslCertificates `array`: SSL certificates of application gateway resource
    * items [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)
  * sslPolicy [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy)
  * urlPathMaps `array`: URL path map of application gateway resource
    * items [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)

### ApplicationGatewayRequestRoutingRule
* ApplicationGatewayRequestRoutingRule `object`: Request routing rule of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayRequestRoutingRulePropertiesFormat
* ApplicationGatewayRequestRoutingRulePropertiesFormat `object`: Properties of Request routing rule of application gateway
  * backendAddressPool [SubResource](#subresource)
  * backendHttpSettings [SubResource](#subresource)
  * httpListener [SubResource](#subresource)
  * provisioningState `string`: Provisioning state of the request routing rule resource Updating/Deleting/Failed
  * ruleType `string` (values: Basic, PathBasedRouting): Rule type
  * urlPathMap [SubResource](#subresource)

### ApplicationGatewaySku
* ApplicationGatewaySku `object`: SKU of application gateway
  * capacity `integer`: Capacity (instance count) of application gateway
  * name `string` (values: Standard_Small, Standard_Medium, Standard_Large): Name of application gateway SKU
  * tier `string` (values: Standard): Tier of application gateway

### ApplicationGatewaySslCertificate
* ApplicationGatewaySslCertificate `object`: SSL certificates of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewaySslCertificatePropertiesFormat
* ApplicationGatewaySslCertificatePropertiesFormat `object`: Properties of SSL certificates of application gateway
  * data `string`: SSL Certificate data 
  * password `string`: SSL Certificate password 
  * provisioningState `string`: Provisioning state of the ssl certificate resource Updating/Deleting/Failed
  * publicCertData `string`: SSL Certificate public data 

### ApplicationGatewaySslPolicy
* ApplicationGatewaySslPolicy `object`: Application gateway SSL policy
  * disabledSslProtocols `array`: SSL protocols to be disabled on Application Gateway
    * items `string` (values: TLSv1_0, TLSv1_1, TLSv1_2)

### ApplicationGatewayUrlPathMap
* ApplicationGatewayUrlPathMap `object`: UrlPathMap of application gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat)
  * id `string`: Resource Id

### ApplicationGatewayUrlPathMapPropertiesFormat
* ApplicationGatewayUrlPathMapPropertiesFormat `object`: Properties of UrlPathMap of application gateway
  * defaultBackendAddressPool [SubResource](#subresource)
  * defaultBackendHttpSettings [SubResource](#subresource)
  * pathRules `array`: Path rule of URL path map resource
    * items [ApplicationGatewayPathRule](#applicationgatewaypathrule)
  * provisioningState `string`: Provisioning state of the backend http settings resource Updating/Deleting/Failed

### AuthorizationListResult
* AuthorizationListResult `object`: Response for ListAuthorizations Api service callRetrieves all authorizations that belongs to an ExpressRouteCircuit
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets the authorizations in an ExpressRoute Circuit
    * items [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)

### AuthorizationPropertiesFormat
* AuthorizationPropertiesFormat `object`
  * authorizationKey `string`: Gets or sets the authorization key
  * authorizationUseStatus `string` (values: Available, InUse): Gets or sets AuthorizationUseStatus
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

### AzureAsyncOperationResult
* AzureAsyncOperationResult `object`: The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure.
  * error [Error](#error)
  * status `string` (values: InProgress, Succeeded, Failed): Status of the AzureAsuncOperation

### BackendAddressPool
* BackendAddressPool `object`: Pool of backend IP addresses
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
  * id `string`: Resource Id

### BackendAddressPoolPropertiesFormat
* BackendAddressPoolPropertiesFormat `object`: Properties of BackendAddressPool
  * backendIPConfigurations `array`: Gets collection of references to IPs defined in NICs
    * items [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)
  * loadBalancingRules `array`: Gets Load Balancing rules that use this Backend Address Pool
    * items [SubResource](#subresource)
  * outboundNatRule [SubResource](#subresource)
  * provisioningState `string`: Get provisioning state of the PublicIP resource Updating/Deleting/Failed

### BgpSettings
* BgpSettings `object`
  * asn `integer`: Gets or sets this BGP speaker's ASN
  * bgpPeeringAddress `string`: Gets or sets the BGP peering address and BGP identifier of this BGP speaker
  * peerWeight `integer`: Gets or sets the weight added to routes learned from this BGP speaker

### ConnectionResetSharedKey
* ConnectionResetSharedKey `object`
  * keyLength `integer`: The virtual network connection reset shared key length

### ConnectionSharedKey
* ConnectionSharedKey `object`: Response for GetConnectionSharedKey Api service call
  * value `string`: The virtual network connection shared key value

### ConnectionSharedKeyResult
* ConnectionSharedKeyResult `object`: Response for CheckConnectionSharedKey Api service call
  * value `string`: The virtual network connection shared key value

### DhcpOptions
* DhcpOptions `object`: DHCPOptions contains an array of DNS servers available to VMs deployed in the virtual networkStandard DHCP option for a subnet overrides VNET DHCP options.
  * dnsServers `array`: Gets or sets list of DNS servers IP addresses
    * items `string`

### DnsNameAvailabilityResult
* DnsNameAvailabilityResult `object`: Response for CheckDnsNameAvailability Api service call
  * available `boolean`: Domain availability (True/False)

### EffectiveNetworkSecurityGroup
* EffectiveNetworkSecurityGroup `object`: Effective NetworkSecurityGroup
  * association [EffectiveNetworkSecurityGroupAssociation](#effectivenetworksecuritygroupassociation)
  * effectiveSecurityRules `array`: Gets collection of effective security rules
    * items [EffectiveNetworkSecurityRule](#effectivenetworksecurityrule)
  * networkSecurityGroup [SubResource](#subresource)

### EffectiveNetworkSecurityGroupAssociation
* EffectiveNetworkSecurityGroupAssociation `object`: Effective NetworkSecurityGroup association
  * networkInterface [SubResource](#subresource)
  * subnet [SubResource](#subresource)

### EffectiveNetworkSecurityGroupListResult
* EffectiveNetworkSecurityGroupListResult `object`: Response for list effective network security groups api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets list of effective network security groups
    * items [EffectiveNetworkSecurityGroup](#effectivenetworksecuritygroup)

### EffectiveNetworkSecurityRule
* EffectiveNetworkSecurityRule `object`: Effective NetworkSecurityRules
  * access `string` (values: Allow, Deny): Gets network traffic is allowed or denied
  * destinationAddressPrefix `string`: Gets destination address prefix
  * destinationPortRange `string`: Gets destination port or range
  * direction `string` (values: Inbound, Outbound): Gets the direction of the rule
  * expandedDestinationAddressPrefix `array`: Gets expanded destination address prefix
    * items `string`
  * expandedSourceAddressPrefix `array`: Gets expanded source address prefix
    * items `string`
  * name `string`: Gets the name of the security rule specified by the user (if created by the user)
  * priority `integer`: Gets the priority of the rule
  * protocol `string` (values: Tcp, Udp, *): Gets Network protocol this rule applies to
  * sourceAddressPrefix `string`: Gets source address prefix
  * sourcePortRange `string`: Gets source port or range

### EffectiveRoute
* EffectiveRoute `object`: Effective Route
  * addressPrefix `array`: Gets address prefixes of the effective routes in CIDR notation.
    * items `string`
  * name `string`: Gets the name of the user defined route. This is optional.
  * nextHopIpAddress `array`: Gets the IP address of the next hop of the effective route
    * items `string`
  * nextHopType `string` (values: VirtualNetworkGateway, VnetLocal, Internet, VirtualAppliance, None): Gets or sets the type of Azure hop the packet should be sent to.
  * source `string` (values: Unknown, User, VirtualNetworkGateway, Default): Gets who created the route
  * state `string` (values: Active, Invalid): Gets value of effective route

### EffectiveRouteListResult
* EffectiveRouteListResult `object`: Response for list effective route api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets list of effective routes
    * items [EffectiveRoute](#effectiveroute)

### Error
* Error `object`
  * code `string`
  * details `array`
    * items [ErrorDetails](#errordetails)
  * innerError `string`
  * message `string`
  * target `string`

### ErrorDetails
* ErrorDetails `object`
  * code `string`
  * message `string`
  * target `string`

### ExpressRouteCircuit
* ExpressRouteCircuit `object`: ExpressRouteCircuit resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [ExpressRouteCircuitPropertiesFormat](#expressroutecircuitpropertiesformat)
  * sku [ExpressRouteCircuitSku](#expressroutecircuitsku)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ExpressRouteCircuitArpTable
* ExpressRouteCircuitArpTable `object`: The arp table associated with the ExpressRouteCircuit
  * age `integer`: Age.
  * interface `string`: Interface.
  * ipAddress `string`: Gets ipAddress.
  * macAddress `string`: Gets macAddress.

### ExpressRouteCircuitAuthorization
* ExpressRouteCircuitAuthorization `object`: Authorization in a ExpressRouteCircuit resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [AuthorizationPropertiesFormat](#authorizationpropertiesformat)
  * id `string`: Resource Id

### ExpressRouteCircuitListResult
* ExpressRouteCircuitListResult `object`: Response for ListExpressRouteCircuit Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets a list of ExpressRouteCircuits in a resource group
    * items [ExpressRouteCircuit](#expressroutecircuit)

### ExpressRouteCircuitPeering
* ExpressRouteCircuitPeering `object`: Peering in a ExpressRouteCircuit resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ExpressRouteCircuitPeeringPropertiesFormat](#expressroutecircuitpeeringpropertiesformat)
  * id `string`: Resource Id

### ExpressRouteCircuitPeeringConfig
* ExpressRouteCircuitPeeringConfig `object`: Specifies the peering config
  * advertisedPublicPrefixes `array`: Gets or sets the reference of AdvertisedPublicPrefixes
    * items `string`
  * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): Gets or sets AdvertisedPublicPrefixState of the Peering resource 
  * customerASN `integer`: Gets or Sets CustomerAsn of the peering.
  * routingRegistryName `string`: Gets or Sets RoutingRegistryName of the config.

### ExpressRouteCircuitPeeringListResult
* ExpressRouteCircuitPeeringListResult `object`: Response for ListPeering Api service callRetrieves all Peerings that belongs to an ExpressRouteCircuit
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets the peerings in an express route circuit
    * items [ExpressRouteCircuitPeering](#expressroutecircuitpeering)

### ExpressRouteCircuitPeeringPropertiesFormat
* ExpressRouteCircuitPeeringPropertiesFormat `object`
  * azureASN `integer`: Gets or sets the azure ASN
  * gatewayManagerEtag `string`: Gets or sets the GatewayManager Etag
  * lastModifiedBy `string`: Gets whether the provider or the customer last modified the peering
  * microsoftPeeringConfig [ExpressRouteCircuitPeeringConfig](#expressroutecircuitpeeringconfig)
  * peerASN `integer`: Gets or sets the peer ASN
  * peeringType `string` (values: AzurePublicPeering, AzurePrivatePeering, MicrosoftPeering): Gets or sets PeeringType
  * primaryAzurePort `string`: Gets or sets the primary port
  * primaryPeerAddressPrefix `string`: Gets or sets the primary address prefix
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * secondaryAzurePort `string`: Gets or sets the secondary port
  * secondaryPeerAddressPrefix `string`: Gets or sets the secondary address prefix
  * sharedKey `string`: Gets or sets the shared key
  * state `string` (values: Disabled, Enabled): Gets or sets state of Peering
  * stats [ExpressRouteCircuitStats](#expressroutecircuitstats)
  * vlanId `integer`: Gets or sets the vlan id

### ExpressRouteCircuitPropertiesFormat
* ExpressRouteCircuitPropertiesFormat `object`: Properties of ExpressRouteCircuit
  * allowClassicOperations `boolean`: allow classic operations
  * authorizations `array`: Gets or sets list of authorizations
    * items [ExpressRouteCircuitAuthorization](#expressroutecircuitauthorization)
  * circuitProvisioningState `string`: Gets or sets CircuitProvisioningState state of the resource 
  * gatewayManagerEtag `string`: Gets or sets the GatewayManager Etag
  * peerings `array`: Gets or sets list of peerings
    * items [ExpressRouteCircuitPeering](#expressroutecircuitpeering)
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * serviceKey `string`: Gets or sets ServiceKey
  * serviceProviderNotes `string`: Gets or sets ServiceProviderNotes
  * serviceProviderProperties [ExpressRouteCircuitServiceProviderProperties](#expressroutecircuitserviceproviderproperties)
  * serviceProviderProvisioningState `string` (values: NotProvisioned, Provisioning, Provisioned, Deprovisioning): Gets or sets ServiceProviderProvisioningState state of the resource 

### ExpressRouteCircuitRoutesTable
* ExpressRouteCircuitRoutesTable `object`: The routes table associated with the ExpressRouteCircuit
  * locPrf `string`: locPrf.
  * network `string`: network.
  * nextHop `string`: nextHop
  * path `string`: path .
  * weight `integer`: weight.

### ExpressRouteCircuitRoutesTableSummary
* ExpressRouteCircuitRoutesTableSummary `object`: The routes table associated with the ExpressRouteCircuit
  * as `integer`: Autonomous system number.
  * neighbor `string`: Neighbor.
  * statePfxRcd `string`: Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group.
  * upDown `string`: The length of time that the BGP session has been in the Established state, or the current status if not in the Established state.
  * v `integer`: BGP version number spoken to the neighbor.

### ExpressRouteCircuitServiceProviderProperties
* ExpressRouteCircuitServiceProviderProperties `object`: Contains ServiceProviderProperties in an ExpressRouteCircuit
  * bandwidthInMbps `integer`: Gets or sets BandwidthInMbps.
  * peeringLocation `string`: Gets or sets peering location.
  * serviceProviderName `string`: Gets or sets serviceProviderName.

### ExpressRouteCircuitSku
* ExpressRouteCircuitSku `object`: Contains sku in an ExpressRouteCircuit
  * family `string` (values: UnlimitedData, MeteredData): Gets or sets family of the sku.
  * name `string`: Gets or sets name of the sku.
  * tier `string` (values: Standard, Premium): Gets or sets tier of the sku.

### ExpressRouteCircuitStats
* ExpressRouteCircuitStats `object`: Contains Stats associated with the peering
  * primarybytesIn `integer`: Gets BytesIn of the peering.
  * primarybytesOut `integer`: Gets BytesOut of the peering.
  * secondarybytesIn `integer`: Gets BytesIn of the peering.
  * secondarybytesOut `integer`: Gets BytesOut of the peering.

### ExpressRouteCircuitsArpTableListResult
* ExpressRouteCircuitsArpTableListResult `object`: Response for ListArpTable associated with the Express Route Circuits Api
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of ArpTable
    * items [ExpressRouteCircuitArpTable](#expressroutecircuitarptable)

### ExpressRouteCircuitsRoutesTableListResult
* ExpressRouteCircuitsRoutesTableListResult `object`: Response for ListRoutesTable associated with the Express Route Circuits Api
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of RoutesTable
    * items [ExpressRouteCircuitRoutesTable](#expressroutecircuitroutestable)

### ExpressRouteCircuitsRoutesTableSummaryListResult
* ExpressRouteCircuitsRoutesTableSummaryListResult `object`: Response for ListRoutesTable associated with the Express Route Circuits Api
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of RoutesTable
    * items [ExpressRouteCircuitRoutesTableSummary](#expressroutecircuitroutestablesummary)

### ExpressRouteServiceProvider
* ExpressRouteServiceProvider `object`: ExpressRouteResourceProvider object
  * properties [ExpressRouteServiceProviderPropertiesFormat](#expressrouteserviceproviderpropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ExpressRouteServiceProviderBandwidthsOffered
* ExpressRouteServiceProviderBandwidthsOffered `object`: Contains Bandwidths offered in ExpressRouteServiceProviders
  * offerName `string`: Gets the OfferName
  * valueInMbps `integer`: Gets the ValueInMbps.

### ExpressRouteServiceProviderListResult
* ExpressRouteServiceProviderListResult `object`: Response for ListExpressRouteServiceProvider Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of ExpressRouteResourceProvider
    * items [ExpressRouteServiceProvider](#expressrouteserviceprovider)

### ExpressRouteServiceProviderPropertiesFormat
* ExpressRouteServiceProviderPropertiesFormat `object`: Properties of ExpressRouteServiceProvider
  * bandwidthsOffered `array`: Gets or bandwidths offered
    * items [ExpressRouteServiceProviderBandwidthsOffered](#expressrouteserviceproviderbandwidthsoffered)
  * peeringLocations `array`: Gets or list of peering locations
    * items `string`
  * provisioningState `string`: Gets provisioning state of the resource 

### FrontendIPConfiguration
* FrontendIPConfiguration `object`: Frontend IP address of the load balancer
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat)
  * id `string`: Resource Id

### FrontendIPConfigurationPropertiesFormat
* FrontendIPConfigurationPropertiesFormat `object`: Properties of Frontend IP Configuration of the load balancer
  * inboundNatPools `array`: Read only. Inbound pools URIs that use this frontend IP
    * items [SubResource](#subresource)
  * inboundNatRules `array`: Read only. Inbound rules URIs that use this frontend IP
    * items [SubResource](#subresource)
  * loadBalancingRules `array`: Gets Load Balancing rules URIs that use this frontend IP
    * items [SubResource](#subresource)
  * outboundNatRules `array`: Read only. Outbound rules URIs that use this frontend IP
    * items [SubResource](#subresource)
  * privateIPAddress `string`: Gets or sets the privateIPAddress of the IP Configuration
  * privateIPAllocationMethod `string` (values: Static, Dynamic): Gets or sets PrivateIP allocation method
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * publicIPAddress [PublicIPAddress](#publicipaddress)
  * subnet [Subnet](#subnet)

### IPAddressAvailabilityResult
* IPAddressAvailabilityResult `object`: Response for CheckIPAddressAvailability Api service call
  * available `boolean`: Private IP address availability
  * availableIPAddresses `array`: Contains other available private IP addresses if the asked for address is taken
    * items `string`

### IPConfiguration
* IPConfiguration `object`: IPConfiguration
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat)
  * id `string`: Resource Id

### IPConfigurationPropertiesFormat
* IPConfigurationPropertiesFormat `object`: Properties of IPConfiguration
  * privateIPAddress `string`: Gets or sets the privateIPAddress of the IP Configuration
  * privateIPAllocationMethod `string` (values: Static, Dynamic): Gets or sets PrivateIP allocation method
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * publicIPAddress [PublicIPAddress](#publicipaddress)
  * subnet [Subnet](#subnet)

### InboundNatPool
* InboundNatPool `object`: Inbound NAT pool of the load balancer
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat)
  * id `string`: Resource Id

### InboundNatPoolPropertiesFormat
* InboundNatPoolPropertiesFormat `object`: Properties of Inbound NAT pool
  * backendPort **required** `integer`: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
  * frontendIPConfiguration [SubResource](#subresource)
  * frontendPortRangeEnd **required** `integer`: Gets or sets the ending port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
  * frontendPortRangeStart **required** `integer`: Gets or sets the starting port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
  * protocol **required** `string` (values: Udp, Tcp): Gets or sets the transport protocol for the endpoint. Possible values are Udp or Tcp
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

### InboundNatRule
* InboundNatRule `object`: Inbound NAT rule of the loadbalancer
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
  * id `string`: Resource Id

### InboundNatRulePropertiesFormat
* InboundNatRulePropertiesFormat `object`: Properties of Inbound NAT rule
  * backendIPConfiguration [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)
  * backendPort `integer`: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
  * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
  * frontendIPConfiguration [SubResource](#subresource)
  * frontendPort `integer`: Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
  * idleTimeoutInMinutes `integer`: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
  * protocol `string` (values: Udp, Tcp): Gets or sets the transport protocol for the endpoint. Possible values are Udp or Tcp
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

### LoadBalancer
* LoadBalancer `object`: LoadBalancer resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### LoadBalancerListResult
* LoadBalancerListResult `object`: Response for ListLoadBalancers Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets a list of LoadBalancers in a resource group
    * items [LoadBalancer](#loadbalancer)

### LoadBalancerPropertiesFormat
* LoadBalancerPropertiesFormat `object`: Properties of Load Balancer
  * backendAddressPools `array`: Gets or sets Pools of backend IP addresses
    * items [BackendAddressPool](#backendaddresspool)
  * frontendIPConfigurations `array`: Gets or sets frontend IP addresses of the load balancer
    * items [FrontendIPConfiguration](#frontendipconfiguration)
  * inboundNatPools `array`: Gets or sets inbound NAT pools
    * items [InboundNatPool](#inboundnatpool)
  * inboundNatRules `array`: Gets or sets list of inbound rules
    * items [InboundNatRule](#inboundnatrule)
  * loadBalancingRules `array`: Gets or sets load balancing rules
    * items [LoadBalancingRule](#loadbalancingrule)
  * outboundNatRules `array`: Gets or sets outbound NAT rules
    * items [OutboundNatRule](#outboundnatrule)
  * probes `array`: Gets or sets list of Load balancer probes
    * items [Probe](#probe)
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the Load balancer resource

### LoadBalancingRule
* LoadBalancingRule `object`: Rules of the load balancer
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat)
  * id `string`: Resource Id

### LoadBalancingRulePropertiesFormat
* LoadBalancingRulePropertiesFormat `object`: Properties of the load balancer
  * backendAddressPool [SubResource](#subresource)
  * backendPort `integer`: Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to '*' to automatically assign an unallocated port that is discoverable using the runtime API
  * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can't be changed after you create the endpoint
  * frontendIPConfiguration [SubResource](#subresource)
  * frontendPort **required** `integer`: Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive
  * idleTimeoutInMinutes `integer`: Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp
  * loadDistribution `string` (values: Default, SourceIP, SourceIPProtocol): Gets or sets the load distribution policy for this rule
  * probe [SubResource](#subresource)
  * protocol **required** `string` (values: Udp, Tcp): Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

### LocalNetworkGateway
* LocalNetworkGateway `object`: A common class for general resource information
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### LocalNetworkGatewayListResult
* LocalNetworkGatewayListResult `object`: Response for ListLocalNetworkGateways Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of LocalNetworkGateways that exists in a resource group
    * items [LocalNetworkGateway](#localnetworkgateway)

### LocalNetworkGatewayPropertiesFormat
* LocalNetworkGatewayPropertiesFormat `object`: LocalNetworkGateway properties
  * bgpSettings [BgpSettings](#bgpsettings)
  * gatewayIpAddress `string`: IP address of local network gateway.
  * localNetworkAddressSpace [AddressSpace](#addressspace)
  * provisioningState `string`: Gets provisioning state of the LocalNetworkGateway resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the LocalNetworkGateway resource

### NetworkInterface
* NetworkInterface `object`: A NetworkInterface in a resource group
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### NetworkInterfaceDnsSettings
* NetworkInterfaceDnsSettings `object`: Dns settings of a network interface
  * appliedDnsServers `array`: Gets or sets list of Applied DNS servers IP addresses
    * items `string`
  * dnsServers `array`: Gets or sets list of DNS servers IP addresses
    * items `string`
  * internalDnsNameLabel `string`: Gets or sets the internal DNS name
  * internalDomainNameSuffix `string`: Gets or sets internal domain name suffix of the NIC.
  * internalFqdn `string`: Gets or sets the internal fqdn.

### NetworkInterfaceIPConfiguration
* NetworkInterfaceIPConfiguration `object`: IPConfiguration in a NetworkInterface
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)
  * id `string`: Resource Id

### NetworkInterfaceIPConfigurationPropertiesFormat
* NetworkInterfaceIPConfigurationPropertiesFormat `object`: Properties of IPConfiguration
  * applicationGatewayBackendAddressPools `array`: Gets or sets the reference of ApplicationGatewayBackendAddressPool resource
    * items [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * loadBalancerBackendAddressPools `array`: Gets or sets the reference of LoadBalancerBackendAddressPool resource
    * items [BackendAddressPool](#backendaddresspool)
  * loadBalancerInboundNatRules `array`: Gets or sets list of references of LoadBalancerInboundNatRules
    * items [InboundNatRule](#inboundnatrule)
  * primary `boolean`: Gets whether this is a primary customer address on the NIC
  * privateIPAddress `string`
  * privateIPAddressVersion `string` (values: IPv4, IPv6): Gets or sets PrivateIP address version (IPv4/IPv6)
  * privateIPAllocationMethod `string` (values: Static, Dynamic): Gets or sets PrivateIP allocation method
  * provisioningState `string`
  * publicIPAddress [PublicIPAddress](#publicipaddress)
  * subnet [Subnet](#subnet)

### NetworkInterfaceListResult
* NetworkInterfaceListResult `object`: Response for ListNetworkInterface Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets or sets list of NetworkInterfaces in a resource group
    * items [NetworkInterface](#networkinterface)

### NetworkInterfacePropertiesFormat
* NetworkInterfacePropertiesFormat `object`: NetworkInterface properties. 
  * dnsSettings [NetworkInterfaceDnsSettings](#networkinterfacednssettings)
  * enableIPForwarding `boolean`: Gets or sets whether IPForwarding is enabled on the NIC
  * ipConfigurations `array`: Gets or sets list of IPConfigurations of the network interface
    * items [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)
  * macAddress `string`: Gets the MAC address of the network interface
  * networkSecurityGroup [NetworkSecurityGroup](#networksecuritygroup)
  * primary `boolean`: Gets whether this is a primary NIC on a virtual machine
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the network interface resource
  * virtualMachine [SubResource](#subresource)

### NetworkSecurityGroup
* NetworkSecurityGroup `object`: NetworkSecurityGroup resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### NetworkSecurityGroupListResult
* NetworkSecurityGroupListResult `object`: Response for ListNetworkSecurityGroups Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of NetworkSecurityGroups
    * items [NetworkSecurityGroup](#networksecuritygroup)

### NetworkSecurityGroupPropertiesFormat
* NetworkSecurityGroupPropertiesFormat `object`: Network Security Group resource
  * defaultSecurityRules `array`: Gets or default security rules of network security group
    * items [SecurityRule](#securityrule)
  * networkInterfaces `array`: Gets collection of references to Network Interfaces
    * items [NetworkInterface](#networkinterface)
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the network security group resource
  * securityRules `array`: Gets or sets security rules of network security group
    * items [SecurityRule](#securityrule)
  * subnets `array`: Gets collection of references to subnets
    * items [Subnet](#subnet)

### OutboundNatRule
* OutboundNatRule `object`: Outbound NAT pool of the load balancer
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [OutboundNatRulePropertiesFormat](#outboundnatrulepropertiesformat)
  * id `string`: Resource Id

### OutboundNatRulePropertiesFormat
* OutboundNatRulePropertiesFormat `object`: Outbound NAT pool of the load balancer
  * allocatedOutboundPorts `integer`: Gets or sets the number of outbound ports to be used for SNAT
  * backendAddressPool **required** [SubResource](#subresource)
  * frontendIPConfigurations `array`: Gets or sets Frontend IP addresses of the load balancer
    * items [SubResource](#subresource)
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed

### Probe
* Probe `object`: Load balancer Probe
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ProbePropertiesFormat](#probepropertiesformat)
  * id `string`: Resource Id

### ProbePropertiesFormat
* ProbePropertiesFormat `object`
  * intervalInSeconds `integer`: Gets or sets the interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5
  * loadBalancingRules `array`: Gets Load balancer rules that use this probe
    * items [SubResource](#subresource)
  * numberOfProbes `integer`: Gets or sets the number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure. 
  * port **required** `integer`: Gets or sets Port for communicating the probe. Possible values range from 1 to 65535, inclusive.
  * protocol **required** `string` (values: Http, Tcp): Gets or sets the protocol of the end point. Possible values are http or Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * requestPath `string`: Gets or sets the URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value

### PublicIPAddress
* PublicIPAddress `object`: PublicIPAddress resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### PublicIPAddressDnsSettings
* PublicIPAddressDnsSettings `object`: Contains FQDN of the DNS record associated with the public IP address
  * domainNameLabel `string`: Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
  * fqdn `string`: Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
  * reverseFqdn `string`: Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. 

### PublicIPAddressListResult
* PublicIPAddressListResult `object`: Response for ListPublicIpAddresses Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of publicIP addresses that exists in a resource group
    * items [PublicIPAddress](#publicipaddress)

### PublicIPAddressPropertiesFormat
* PublicIPAddressPropertiesFormat `object`: PublicIpAddress properties
  * dnsSettings [PublicIPAddressDnsSettings](#publicipaddressdnssettings)
  * idleTimeoutInMinutes `integer`: Gets or sets the Idletimeout of the public IP address
  * ipAddress `string`
  * ipConfiguration [IPConfiguration](#ipconfiguration)
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * publicIPAddressVersion `string` (values: IPv4, IPv6): Gets or sets PublicIP address version (IPv4/IPv6)
  * publicIPAllocationMethod `string` (values: Static, Dynamic): Gets or sets PublicIP allocation method (Static/Dynamic)
  * resourceGuid `string`: Gets or sets resource guid property of the PublicIP resource

### Resource
* Resource `object`
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceNavigationLink
* ResourceNavigationLink `object`: ResourceNavigationLink resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [ResourceNavigationLinkFormat](#resourcenavigationlinkformat)
  * id `string`: Resource Id

### ResourceNavigationLinkFormat
* ResourceNavigationLinkFormat `object`: Properties of ResourceNavigationLink
  * link `string`: Link to the external resource
  * linkedResourceType `string`: Resource type of the linked resource
  * provisioningState `string`: Provisioning state of the ResourceNavigationLink resource

### Route
* Route `object`: Route resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [RoutePropertiesFormat](#routepropertiesformat)
  * id `string`: Resource Id

### RouteListResult
* RouteListResult `object`: Response for ListRoute Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of Routes in a resource group
    * items [Route](#route)

### RoutePropertiesFormat
* RoutePropertiesFormat `object`: Route resource
  * addressPrefix `string`: Gets or sets the destination CIDR to which the route applies.
  * nextHopIpAddress `string`: Gets or sets the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
  * nextHopType **required** `string` (values: VirtualNetworkGateway, VnetLocal, Internet, VirtualAppliance, None): Gets or sets the type of Azure hop the packet should be sent to.
  * provisioningState `string`: Gets provisioning state of the resource Updating/Deleting/Failed

### RouteTable
* RouteTable `object`: RouteTable resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [RouteTablePropertiesFormat](#routetablepropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RouteTableListResult
* RouteTableListResult `object`: Response for ListRouteTable Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of RouteTables in a resource group
    * items [RouteTable](#routetable)

### RouteTablePropertiesFormat
* RouteTablePropertiesFormat `object`: Route Table resource
  * provisioningState `string`: Gets provisioning state of the resource Updating/Deleting/Failed
  * routes `array`: Gets or sets Routes in a Route Table
    * items [Route](#route)
  * subnets `array`: Gets collection of references to subnets
    * items [Subnet](#subnet)

### SecurityRule
* SecurityRule `object`: Network security rule
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [SecurityRulePropertiesFormat](#securityrulepropertiesformat)
  * id `string`: Resource Id

### SecurityRuleListResult
* SecurityRuleListResult `object`: Response for ListSecurityRule Api service callRetrieves all security rules that belongs to a network security group
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets security rules in a network security group
    * items [SecurityRule](#securityrule)

### SecurityRulePropertiesFormat
* SecurityRulePropertiesFormat `object`
  * access **required** `string` (values: Allow, Deny): Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
  * description `string`: Gets or sets a description for this rule. Restricted to 140 chars.
  * destinationAddressPrefix **required** `string`: Gets or sets destination address prefix. CIDR or source IP range. Asterix '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. 
  * destinationPortRange `string`: Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterix '*' can also be used to match all ports.
  * direction **required** `string` (values: Inbound, Outbound): Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outcoming traffic.
  * priority `integer`: Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
  * protocol **required** `string` (values: Tcp, Udp, *): Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * sourceAddressPrefix **required** `string`: Gets or sets source address prefix. CIDR or source IP range. Asterix '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
  * sourcePortRange `string`: Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterix '*' can also be used to match all ports.

### SubResource
* SubResource `object`
  * id `string`: Resource Id

### Subnet
* Subnet `object`: Subnet in a VirtualNework resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [SubnetPropertiesFormat](#subnetpropertiesformat)
  * id `string`: Resource Id

### SubnetListResult
* SubnetListResult `object`: Response for ListSubnets Api service callRetrieves all subnet that belongs to a virtual network
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets the subnets in a virtual network
    * items [Subnet](#subnet)

### SubnetPropertiesFormat
* SubnetPropertiesFormat `object`
  * addressPrefix `string`: Gets or sets Address prefix for the subnet.
  * ipConfigurations `array`: Gets array of references to the network interface IP configurations using subnet
    * items [IPConfiguration](#ipconfiguration)
  * networkSecurityGroup [NetworkSecurityGroup](#networksecuritygroup)
  * provisioningState `string`: Gets provisioning state of the resource
  * resourceNavigationLinks `array`: Gets array of references to the external resources using subnet
    * items [ResourceNavigationLink](#resourcenavigationlink)
  * routeTable [RouteTable](#routetable)

### Usage
* Usage `object`: Describes Network Resource Usage.
  * currentValue **required** `integer`: Gets or sets the current value of the usage.
  * limit **required** `integer`: Gets or sets the limit of usage.
  * name **required** [UsageName](#usagename)
  * unit **required** `string` (values: Count): Gets or sets an enum describing the unit of measurement.

### UsageName
* UsageName `object`: The Usage Names.
  * localizedValue `string`: Gets or sets a localized string describing the resource name.
  * value `string`: Gets or sets a string describing the resource name.

### UsagesListResult
* UsagesListResult `object`: The List Usages operation response.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: Gets or sets the list Network Resource Usages.
    * items [Usage](#usage)

### VirtualNetwork
* VirtualNetwork `object`: Virtual Network resource
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualNetworkGateway
* VirtualNetworkGateway `object`: A common class for general resource information
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualNetworkGatewayConnection
* VirtualNetworkGatewayConnection `object`: A common class for general resource information
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated
  * properties [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualNetworkGatewayConnectionListResult
* VirtualNetworkGatewayConnectionListResult `object`: Response for ListVirtualNetworkGatewayConnections Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of VirtualNetworkGatewayConnections that exists in a resource group
    * items [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnectionPropertiesFormat
* VirtualNetworkGatewayConnectionPropertiesFormat `object`: VirtualNetworkGatewayConnection properties
  * authorizationKey `string`: The authorizationKey.
  * connectionStatus `string` (values: Unknown, Connecting, Connected, NotConnected): Virtual network Gateway connection status
  * connectionType `string` (values: IPsec, Vnet2Vnet, ExpressRoute, VPNClient): Gateway connection type -Ipsec/Dedicated/VpnClient/Vnet2Vnet
  * egressBytesTransferred `integer`: The Egress Bytes Transferred in this connection
  * enableBgp `boolean`: EnableBgp Flag
  * ingressBytesTransferred `integer`: The Ingress Bytes Transferred in this connection
  * localNetworkGateway2 [LocalNetworkGateway](#localnetworkgateway)
  * peer [SubResource](#subresource)
  * provisioningState `string`: Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
  * routingWeight `integer`: The Routing weight.
  * sharedKey `string`: The Ipsec share key.
  * virtualNetworkGateway1 [VirtualNetworkGateway](#virtualnetworkgateway)
  * virtualNetworkGateway2 [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGatewayIPConfiguration
* VirtualNetworkGatewayIPConfiguration `object`: IpConfiguration for Virtual network gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat)
  * id `string`: Resource Id

### VirtualNetworkGatewayIPConfigurationPropertiesFormat
* VirtualNetworkGatewayIPConfigurationPropertiesFormat `object`: Properties of VirtualNetworkGatewayIPConfiguration
  * privateIPAllocationMethod `string` (values: Static, Dynamic): Gets or sets PrivateIP allocation method
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * publicIPAddress [SubResource](#subresource)
  * subnet [SubResource](#subresource)

### VirtualNetworkGatewayListResult
* VirtualNetworkGatewayListResult `object`: Response for ListVirtualNetworkGateways Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets List of VirtualNetworkGateways that exists in a resource group
    * items [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGatewayPropertiesFormat
* VirtualNetworkGatewayPropertiesFormat `object`: VirtualNetworkGateway properties
  * activeActive `boolean`: ActiveActive flag
  * bgpSettings [BgpSettings](#bgpsettings)
  * enableBgp `boolean`: EnableBgp Flag
  * gatewayDefaultSite [SubResource](#subresource)
  * gatewayType `string` (values: Vpn, ExpressRoute): The type of this virtual network gateway.
  * ipConfigurations `array`: IpConfigurations for Virtual network gateway.
    * items [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)
  * provisioningState `string`: Gets provisioning state of the VirtualNetworkGateway resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the VirtualNetworkGateway resource
  * sku [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku)
  * vpnClientConfiguration [VpnClientConfiguration](#vpnclientconfiguration)
  * vpnType `string` (values: PolicyBased, RouteBased): The type of this virtual network gateway.

### VirtualNetworkGatewaySku
* VirtualNetworkGatewaySku `object`: VirtualNetworkGatewaySku details
  * capacity `integer`: The capacity
  * name `string` (values: Basic, HighPerformance, Standard, UltraPerformance): Gateway sku name -Basic/HighPerformance/Standard/UltraPerformance
  * tier `string` (values: Basic, HighPerformance, Standard, UltraPerformance): Gateway sku tier -Basic/HighPerformance/Standard/UltraPerformance

### VirtualNetworkListResult
* VirtualNetworkListResult `object`: Response for ListVirtualNetworks Api service call
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets list of VirtualNetworks in a resource group
    * items [VirtualNetwork](#virtualnetwork)

### VirtualNetworkPeering
* VirtualNetworkPeering `object`: Peerings in a VirtualNework resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
  * id `string`: Resource Id

### VirtualNetworkPeeringListResult
* VirtualNetworkPeeringListResult `object`: Response for ListSubnets Api service callRetrieves all subnet that belongs to a virtual network
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets the peerings in a virtual network
    * items [VirtualNetworkPeering](#virtualnetworkpeering)

### VirtualNetworkPeeringPropertiesFormat
* VirtualNetworkPeeringPropertiesFormat `object`
  * allowForwardedTraffic `boolean`: Gets or sets whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed
  * allowGatewayTransit `boolean`: Gets or sets if gatewayLinks can be used in remote virtual network’s link to this virtual network
  * allowVirtualNetworkAccess `boolean`: Gets or sets whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space
  * peeringState `string` (values: Initiated, Connected, Disconnected): Gets the status of the virtual network peering
  * provisioningState `string`: Gets provisioning state of the resource
  * remoteVirtualNetwork [SubResource](#subresource)
  * useRemoteGateways `boolean`: Gets or sets if remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only 1 peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

### VirtualNetworkPropertiesFormat
* VirtualNetworkPropertiesFormat `object`
  * VirtualNetworkPeerings `array`: Gets or sets list of peerings in a VirtualNetwork
    * items [VirtualNetworkPeering](#virtualnetworkpeering)
  * addressSpace [AddressSpace](#addressspace)
  * dhcpOptions [DhcpOptions](#dhcpoptions)
  * provisioningState `string`: Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
  * resourceGuid `string`: Gets or sets resource guid property of the VirtualNetwork resource
  * subnets `array`: Gets or sets list of subnets in a VirtualNetwork
    * items [Subnet](#subnet)

### VpnClientConfiguration
* VpnClientConfiguration `object`: VpnClientConfiguration for P2S client
  * vpnClientAddressPool [AddressSpace](#addressspace)
  * vpnClientRevokedCertificates `array`: VpnClientRevokedCertificate for Virtual network gateway.
    * items [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)
  * vpnClientRootCertificates `array`: VpnClientRootCertificate for Virtual network gateway.
    * items [VpnClientRootCertificate](#vpnclientrootcertificate)

### VpnClientParameters
* VpnClientParameters `object`: VpnClientParameters
  * ProcessorArchitecture `string` (values: Amd64, X86): VPN client Processor Architecture -Amd64/X86

### VpnClientRevokedCertificate
* VpnClientRevokedCertificate `object`: VPN client revoked certificate of virtual network gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat)
  * id `string`: Resource Id

### VpnClientRevokedCertificatePropertiesFormat
* VpnClientRevokedCertificatePropertiesFormat `object`: Properties of the revoked VPN client certificate of virtual network gateway
  * provisioningState `string`: Gets provisioning state of the VPN client revoked certificate resource Updating/Deleting/Failed
  * thumbprint `string`: Gets or sets the revoked Vpn client certificate thumbprint

### VpnClientRootCertificate
* VpnClientRootCertificate `object`: VPN client root certificate of virtual network gateway
  * etag `string`: A unique read-only string that changes whenever the resource is updated
  * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource
  * properties [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat)
  * id `string`: Resource Id

### VpnClientRootCertificatePropertiesFormat
* VpnClientRootCertificatePropertiesFormat `object`: Properties of SSL certificates of application gateway
  * provisioningState `string`: Gets provisioning state of the VPN client root certificate resource Updating/Deleting/Failed
  * publicCertData `string`: Gets or sets the certificate public data


