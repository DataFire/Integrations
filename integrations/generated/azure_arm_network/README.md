# @datafire/azure_arm_network

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_network
```

```js
let datafire = require('datafire');
let azure_arm_network = require('@datafire/azure_arm_network').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_network: account,
  }
})


azure_arm_network.ApplicationGateways_ListAll({}, context).then(data => {
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ExpressRouteCircuits_ListAll
The List ExpressRouteCircuit operation retrieves all the ExpressRouteCircuits in a subscription.


```js
azure_arm_network.ExpressRouteCircuits_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ExpressRouteServiceProviders_List
The List ExpressRouteServiceProvider operation retrieves all the available ExpressRouteServiceProviders.


```js
azure_arm_network.ExpressRouteServiceProviders_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### LoadBalancers_ListAll
The List loadBalancer operation retrieves all the load balancers in a subscription.


```js
azure_arm_network.LoadBalancers_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### CheckDnsNameAvailability
Checks whether a domain name in the cloudapp.net zone is available for use.


```js
azure_arm_network.CheckDnsNameAvailability({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location of the domain name
* domainNameLabel (string) - The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Usages_List
Lists compute usages for a subscription.


```js
azure_arm_network.Usages_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location upon which resource usage is queried.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NetworkInterfaces_ListAll
The List networkInterfaces operation retrieves all the networkInterfaces in a subscription.


```js
azure_arm_network.NetworkInterfaces_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NetworkSecurityGroups_ListAll
The list NetworkSecurityGroups returns all network security groups in a subscription


```js
azure_arm_network.NetworkSecurityGroups_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### PublicIPAddresses_ListAll
The List publicIpAddress operation retrieves all the publicIpAddresses in a subscription.


```js
azure_arm_network.PublicIPAddresses_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RouteTables_ListAll
The list RouteTables returns all route tables in a subscription


```js
azure_arm_network.RouteTables_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualNetworks_ListAll
The list VirtualNetwork returns all Virtual Networks in a subscription


```js
azure_arm_network.VirtualNetworks_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ApplicationGateways_List
The List ApplicationGateway operation retrieves all the application gateways in a resource group.


```js
azure_arm_network.ApplicationGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* applicationGatewayName (string) **required** - The name of the application gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* applicationGatewayName (string) **required** - The name of the application gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* applicationGatewayName (string) **required** - The name of the ApplicationGateway.
* parameters (undefined) **required** - ApplicationGateways resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* applicationGatewayName (string) **required** - The name of the application gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* applicationGatewayName (string) **required** - The name of the application gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualNetworkGatewayConnections_List
The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways connections created.


```js
azure_arm_network.VirtualNetworkGatewayConnections_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* connectionSharedKeyName (string) **required** - The virtual network gateway connection shared key name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayConnectionName (string) **required** - The name of the virtual network gateway connection.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayConnectionName (string) **required** - The name of the virtual network gateway connection.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayConnectionName (string) **required** - The name of the virtual network gateway connection.
* parameters (undefined) **required** - A common class for general resource information
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayConnectionName (string) **required** - The virtual network gateway connection name.
* parameters (undefined) **required** - Response for GetConnectionSharedKey Api service call
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayConnectionName (string) **required** - The virtual network gateway connection reset shared key Name.
* parameters (undefined) **required**
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ExpressRouteCircuits_List
The List ExpressRouteCircuit operation retrieves all the ExpressRouteCircuits in a resource group.


```js
azure_arm_network.ExpressRouteCircuits_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route Circuit.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* parameters (undefined) **required** - ExpressRouteCircuit resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route circuit.
* authorizationName (string) **required** - The name of the authorization.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route circuit.
* authorizationName (string) **required** - The name of the authorization.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route circuit.
* authorizationName (string) **required** - The name of the authorization.
* authorizationParameters (undefined) **required** - Authorization in a ExpressRouteCircuit resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route circuit.
* peeringName (string) **required** - The name of the peering.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route circuit.
* peeringName (string) **required** - The name of the peering.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the express route circuit.
* peeringName (string) **required** - The name of the peering.
* peeringParameters (undefined) **required** - Peering in a ExpressRouteCircuit resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* peeringName (string) **required** - The name of the peering.
* devicePath (string) **required** - The path of the device.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* peeringName (string) **required** - The name of the peering.
* devicePath (string) **required** - The path of the device.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* peeringName (string) **required** - The name of the peering.
* devicePath (string) **required** - The path of the device.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* peeringName (string) **required** - The name of the peering.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* circuitName (string) **required** - The name of the circuit.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### LoadBalancers_List
The List loadBalancer operation retrieves all the load balancers in a resource group.


```js
azure_arm_network.LoadBalancers_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* loadBalancerName (string) **required** - The name of the loadBalancer.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* loadBalancerName (string) **required** - The name of the loadBalancer.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* loadBalancerName (string) **required** - The name of the loadBalancer.
* parameters (undefined) **required** - LoadBalancer resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### LocalNetworkGateways_List
The List LocalNetworkGateways operation retrieves all the local network gateways stored.


```js
azure_arm_network.LocalNetworkGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* localNetworkGatewayName (string) **required** - The name of the local network gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* localNetworkGatewayName (string) **required** - The name of the local network gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* localNetworkGatewayName (string) **required** - The name of the local network gateway.
* parameters (undefined) **required** - A common class for general resource information
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NetworkInterfaces_List
The List networkInterfaces operation retrieves all the networkInterfaces in a resource group.


```js
azure_arm_network.NetworkInterfaces_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkInterfaceName (string) **required** - The name of the network interface.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkInterfaceName (string) **required** - The name of the network interface.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkInterfaceName (string) **required** - The name of the network interface.
* parameters (undefined) **required** - A NetworkInterface in a resource group
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkInterfaceName (string) **required** - The name of the network interface.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkInterfaceName (string) **required** - The name of the network interface.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NetworkSecurityGroups_List
The list NetworkSecurityGroups returns all network security groups in a resource group


```js
azure_arm_network.NetworkSecurityGroups_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* parameters (undefined) **required** - NetworkSecurityGroup resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* securityRuleName (string) **required** - The name of the security rule.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* securityRuleName (string) **required** - The name of the security rule.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* networkSecurityGroupName (string) **required** - The name of the network security group.
* securityRuleName (string) **required** - The name of the security rule.
* securityRuleParameters (undefined) **required** - Network security rule
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### PublicIPAddresses_List
The List publicIpAddress operation retrieves all the publicIpAddresses in a resource group.


```js
azure_arm_network.PublicIPAddresses_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* publicIpAddressName (string) **required** - The name of the subnet.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* publicIpAddressName (string) **required** - The name of the subnet.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* publicIpAddressName (string) **required** - The name of the publicIpAddress.
* parameters (undefined) **required** - PublicIPAddress resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RouteTables_List
The list RouteTables returns all route tables in a resource group


```js
azure_arm_network.RouteTables_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* parameters (undefined) **required** - RouteTable resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* routeName (string) **required** - The name of the route.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* routeName (string) **required** - The name of the route.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* routeTableName (string) **required** - The name of the route table.
* routeName (string) **required** - The name of the route.
* routeParameters (undefined) **required** - Route resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualNetworkGateways_List
The List VirtualNetworkGateways operation retrieves all the virtual network gateways stored.


```js
azure_arm_network.VirtualNetworkGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayName (string) **required** - The name of the virtual network gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayName (string) **required** - The name of the virtual network gateway.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayName (string) **required** - The name of the virtual network gateway.
* parameters (undefined) **required** - A common class for general resource information
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayName (string) **required** - The name of the virtual network gateway.
* parameters (undefined) **required** - VpnClientParameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkGatewayName (string) **required** - The name of the virtual network gateway.
* parameters (undefined) **required** - A common class for general resource information
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualNetworks_List
The list VirtualNetwork returns all Virtual Networks in a resource group


```js
azure_arm_network.VirtualNetworks_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* parameters (undefined) **required** - Virtual Network resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* ipAddress (string) - The private IP address to be verified.
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* subnetName (string) **required** - The name of the subnet.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* subnetName (string) **required** - The name of the subnet.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* subnetName (string) **required** - The name of the subnet.
* subnetParameters (undefined) **required** - Subnet in a VirtualNework resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* virtualNetworkPeeringName (string) **required** - The name of the virtual network peering.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* virtualNetworkPeeringName (string) **required** - The name of the virtual network peering.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualNetworkName (string) **required** - The name of the virtual network.
* virtualNetworkPeeringName (string) **required** - The name of the peering.
* VirtualNetworkPeeringParameters (undefined) **required** - Peerings in a VirtualNework resource
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualMachineScaleSetName (string) **required** - The name of the virtual machine scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualMachineScaleSetName (string) **required** - The name of the virtual machine scale set.
* virtualmachineIndex (string) **required** - The virtual machine index.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualMachineScaleSetName (string) **required** - The name of the virtual machine scale set.
* virtualmachineIndex (string) **required** - The virtual machine index.
* networkInterfaceName (string) **required** - The name of the network interface.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - expand references resources.

