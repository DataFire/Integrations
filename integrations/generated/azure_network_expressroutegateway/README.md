# @datafire/azure_network_expressroutegateway

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_expressroutegateway
```
```js
let azure_network_expressroutegateway = require('@datafire/azure_network_expressroutegateway').create({
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

### ExpressRouteGateways_ListBySubscription
Lists ExpressRoute gateways under a given subscription.


```js
azure_network_expressroutegateway.ExpressRouteGateways_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteGatewayList](#expressroutegatewaylist)

### ExpressRouteGateways_ListByResourceGroup
Lists ExpressRoute gateways in a given resource group.


```js
azure_network_expressroutegateway.ExpressRouteGateways_ListByResourceGroup({
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
* output [ExpressRouteGatewayList](#expressroutegatewaylist)

### ExpressRouteGateways_Delete
Deletes the specified ExpressRoute gateway in a resource group. An ExpressRoute gateway resource can only be deleted when there are no connection subresources.


```js
azure_network_expressroutegateway.ExpressRouteGateways_Delete({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteGateways_Get
Fetches the details of a ExpressRoute gateway in a resource group.


```js
azure_network_expressroutegateway.ExpressRouteGateways_Get({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteGateway](#expressroutegateway)

### ExpressRouteGateways_CreateOrUpdate
Creates or updates a ExpressRoute gateway in a specified resource group.


```js
azure_network_expressroutegateway.ExpressRouteGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "putExpressRouteGatewayParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * putExpressRouteGatewayParameters **required** [ExpressRouteGateway](#expressroutegateway)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteGateway](#expressroutegateway)

### ExpressRouteConnections_List
Lists ExpressRouteConnections.


```js
azure_network_expressroutegateway.ExpressRouteConnections_List({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteConnectionList](#expressrouteconnectionlist)

### ExpressRouteConnections_Delete
Deletes a connection to a ExpressRoute circuit.


```js
azure_network_expressroutegateway.ExpressRouteConnections_Delete({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * connectionName **required** `string`: The name of the connection subresource.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ExpressRouteConnections_Get
Gets the specified ExpressRouteConnection.


```js
azure_network_expressroutegateway.ExpressRouteConnections_Get({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * connectionName **required** `string`: The name of the ExpressRoute connection.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteConnection](#expressrouteconnection)

### ExpressRouteConnections_CreateOrUpdate
Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.


```js
azure_network_expressroutegateway.ExpressRouteConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "expressRouteGatewayName": "",
  "connectionName": "",
  "putExpressRouteConnectionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRouteGatewayName **required** `string`: The name of the ExpressRoute gateway.
  * connectionName **required** `string`: The name of the connection subresource.
  * putExpressRouteConnectionParameters **required** [ExpressRouteConnection](#expressrouteconnection)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ExpressRouteConnection](#expressrouteconnection)



## Definitions

### ExpressRouteCircuitPeeringId
* ExpressRouteCircuitPeeringId `object`: ExpressRoute circuit peering identifier.
  * id `string`: The ID of the ExpressRoute circuit peering.

### ExpressRouteConnection
* ExpressRouteConnection `object`: ExpressRouteConnection resource.
  * name **required** `string`: The name of the resource.
  * properties [ExpressRouteConnectionProperties](#expressrouteconnectionproperties)
  * id `string`: Resource ID.

### ExpressRouteConnectionId
* ExpressRouteConnectionId `object`: The ID of the ExpressRouteConnection.
  * id `string`: The ID of the ExpressRouteConnection.

### ExpressRouteConnectionList
* ExpressRouteConnectionList `object`: ExpressRouteConnection list.
  * value `array`: The list of ExpressRoute connections.
    * items [ExpressRouteConnection](#expressrouteconnection)

### ExpressRouteConnectionProperties
* ExpressRouteConnectionProperties `object`: Properties of the ExpressRouteConnection subresource.
  * authorizationKey `string`: Authorization key to establish the connection.
  * expressRouteCircuitPeering **required** [ExpressRouteCircuitPeeringId](#expressroutecircuitpeeringid)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * routingWeight `integer`: The routing weight associated to the connection.

### ExpressRouteGateway
* ExpressRouteGateway `object`: ExpressRoute gateway resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [ExpressRouteGatewayProperties](#expressroutegatewayproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRouteGatewayList
* ExpressRouteGatewayList `object`: List of ExpressRoute gateways.
  * value `array`: List of ExpressRoute gateways.
    * items [ExpressRouteGateway](#expressroutegateway)

### ExpressRouteGatewayProperties
* ExpressRouteGatewayProperties `object`: ExpressRoute gateway resource properties.
  * autoScaleConfiguration `object`: Configuration for auto scaling.
    * bounds `object`: Minimum and maximum number of scale units to deploy.
      * max `integer`: Maximum number of scale units deployed for ExpressRoute gateway.
      * min `integer`: Minimum number of scale units deployed for ExpressRoute gateway.
  * expressRouteConnections `array`: List of ExpressRoute connections to the ExpressRoute gateway.
    * items [ExpressRouteConnection](#expressrouteconnection)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * virtualHub **required** [VirtualHubId](#virtualhubid)

### VirtualHubId
* VirtualHubId `object`: Virtual Hub identifier.
  * id `string`: The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.


