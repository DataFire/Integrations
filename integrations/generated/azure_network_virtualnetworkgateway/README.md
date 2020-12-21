# @datafire/azure_network_virtualnetworkgateway

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_virtualnetworkgateway
```
```js
let azure_network_virtualnetworkgateway = require('@datafire/azure_network_virtualnetworkgateway').create({
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

### VirtualNetworkGatewayConnections_List
The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways connections created.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_List({
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
* output [VirtualNetworkGatewayConnectionListResult](#virtualnetworkgatewayconnectionlistresult)

### VirtualNetworkGatewayConnections_Delete
Deletes the specified virtual network Gateway connection.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_Delete({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkGatewayConnections_Get
Gets the specified virtual network gateway connection by resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_Get({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnections_UpdateTags
Updates a virtual network gateway connection tags.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_UpdateTags({
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
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnections_CreateOrUpdate
Creates or updates a virtual network gateway connection in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_CreateOrUpdate({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnections_GetSharedKey
The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified virtual network gateway connection shared key through Network resource provider.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_GetSharedKey({
  "resourceGroupName": "",
  "virtualNetworkGatewayConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayConnectionName **required** `string`: The virtual network gateway connection shared key name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionSharedKey](#connectionsharedkey)

### VirtualNetworkGatewayConnections_SetSharedKey
The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_SetSharedKey({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionSharedKey](#connectionsharedkey)

### VirtualNetworkGatewayConnections_ResetSharedKey
The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_ResetSharedKey({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionResetSharedKey](#connectionresetsharedkey)

### VirtualNetworkGatewayConnections_StartPacketCapture
Starts packet capture on virtual network gateway connection in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_StartPacketCapture({
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
  * parameters [VpnPacketCaptureStartParameters](#vpnpacketcapturestartparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGatewayConnections_StopPacketCapture
Stops packet capture on virtual network gateway connection in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGatewayConnections_StopPacketCapture({
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
  * virtualNetworkGatewayConnectionName **required** `string`: The name of the virtual network gateway Connection.
  * parameters **required** [VpnPacketCaptureStopParameters](#vpnpacketcapturestopparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_VpnDeviceConfigurationScript
Gets a xml format representation for vpn device configuration script.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_VpnDeviceConfigurationScript({
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
  * virtualNetworkGatewayConnectionName **required** `string`: The name of the virtual network gateway connection for which the configuration script is generated.
  * parameters **required** [VpnDeviceScriptParameters](#vpndevicescriptparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### LocalNetworkGateways_List
Gets all the local network gateways in a resource group.


```js
azure_network_virtualnetworkgateway.LocalNetworkGateways_List({
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
* output [LocalNetworkGatewayListResult](#localnetworkgatewaylistresult)

### LocalNetworkGateways_Delete
Deletes the specified local network gateway.


```js
azure_network_virtualnetworkgateway.LocalNetworkGateways_Delete({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LocalNetworkGateways_Get
Gets the specified local network gateway in a resource group.


```js
azure_network_virtualnetworkgateway.LocalNetworkGateways_Get({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocalNetworkGateway](#localnetworkgateway)

### LocalNetworkGateways_UpdateTags
Updates a local network gateway tags.


```js
azure_network_virtualnetworkgateway.LocalNetworkGateways_UpdateTags({
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
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocalNetworkGateway](#localnetworkgateway)

### LocalNetworkGateways_CreateOrUpdate
Creates or updates a local network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.LocalNetworkGateways_CreateOrUpdate({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocalNetworkGateway](#localnetworkgateway)

### VirtualNetworkGateways_List
Gets all virtual network gateways by resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_List({
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
* output [VirtualNetworkGatewayListResult](#virtualnetworkgatewaylistresult)

### VirtualNetworkGateways_Delete
Deletes the specified virtual network gateway.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_Delete({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkGateways_Get
Gets the specified virtual network gateway by resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_Get({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGateways_UpdateTags
Updates a virtual network gateway tags.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_UpdateTags({
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
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGateways_CreateOrUpdate
Creates or updates a virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_CreateOrUpdate({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGateways_ListConnections
Gets all the connections in a virtual network gateway.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_ListConnections({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGatewayListConnectionsResult](#virtualnetworkgatewaylistconnectionsresult)

### VirtualNetworkGateways_Generatevpnclientpackage
Generates VPN client package for P2S client of the virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_Generatevpnclientpackage({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_GenerateVpnProfile
Generates VPN profile for P2S client of the virtual network gateway in the specified resource group. Used for IKEV2 and radius based authentication.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GenerateVpnProfile({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_GetAdvertisedRoutes
This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GetAdvertisedRoutes({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "peer": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * peer **required** `string`: The IP address of the peer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GatewayRouteListResult](#gatewayroutelistresult)

### VirtualNetworkGateways_GetBgpPeerStatus
The GetBgpPeerStatus operation retrieves the status of all BGP peers.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GetBgpPeerStatus({
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
  * peer `string`: The IP address of the peer to retrieve the status of.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BgpPeerStatusListResult](#bgppeerstatuslistresult)

### VirtualNetworkGateways_GetLearnedRoutes
This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GetLearnedRoutes({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GatewayRouteListResult](#gatewayroutelistresult)

### VirtualNetworkGateways_GetVpnclientConnectionHealth
Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GetVpnclientConnectionHealth({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VpnClientConnectionHealthDetailListResult](#vpnclientconnectionhealthdetaillistresult)

### VirtualNetworkGateways_GetVpnclientIpsecParameters
The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GetVpnclientIpsecParameters({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The virtual network gateway name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VpnClientIPsecParameters](#vpnclientipsecparameters)

### VirtualNetworkGateways_GetVpnProfilePackageUrl
Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified resource group. The profile needs to be generated first using generateVpnProfile.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_GetVpnProfilePackageUrl({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_Reset
Resets the primary of the virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_Reset({
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
  * gatewayVip `string`: Virtual network gateway vip address supplied to the begin reset of the active-active feature enabled gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGateways_ResetVpnClientSharedKey
Resets the VPN client shared key of the virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_ResetVpnClientSharedKey({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkGateways_SetVpnclientIpsecParameters
The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_SetVpnclientIpsecParameters({
  "resourceGroupName": "",
  "virtualNetworkGatewayName": "",
  "vpnclientIpsecParams": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkGatewayName **required** `string`: The name of the virtual network gateway.
  * vpnclientIpsecParams **required** [VpnClientIPsecParameters](#vpnclientipsecparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VpnClientIPsecParameters](#vpnclientipsecparameters)

### VirtualNetworkGateways_StartPacketCapture
Starts packet capture on virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_StartPacketCapture({
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
  * parameters [VpnPacketCaptureStartParameters](#vpnpacketcapturestartparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_StopPacketCapture
Stops packet capture on virtual network gateway in the specified resource group.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_StopPacketCapture({
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
  * parameters **required** [VpnPacketCaptureStopParameters](#vpnpacketcapturestopparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`

### VirtualNetworkGateways_SupportedVpnDevices
Gets a xml format representation for supported vpn devices.


```js
azure_network_virtualnetworkgateway.VirtualNetworkGateways_SupportedVpnDevices({
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
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `string`



## Definitions

### BgpPeerStatus
* BgpPeerStatus `object`: BGP peer status details.
  * asn `integer`: The autonomous system number of the remote BGP peer.
  * connectedDuration `string`: For how long the peering has been up.
  * localAddress `string`: The virtual network gateway's local address.
  * messagesReceived `integer`: The number of BGP messages received.
  * messagesSent `integer`: The number of BGP messages sent.
  * neighbor `string`: The remote BGP peer.
  * routesReceived `integer`: The number of routes learned from this peer.
  * state `string` (values: Unknown, Stopped, Idle, Connecting, Connected): The BGP peer state.

### BgpPeerStatusListResult
* BgpPeerStatusListResult `object`: Response for list BGP peer status API service call.
  * value `array`: List of BGP peers.
    * items [BgpPeerStatus](#bgppeerstatus)

### BgpSettings
* BgpSettings `object`: BGP settings details.
  * asn `integer`: The BGP speaker's ASN.
  * bgpPeeringAddress `string`: The BGP peering address and BGP identifier of this BGP speaker.
  * peerWeight `integer`: The weight added to routes learned from this BGP speaker.

### ConnectionProtocol
* ConnectionProtocol `string` (values: IKEv2, IKEv1): Gateway connection protocol.

### ConnectionResetSharedKey
* ConnectionResetSharedKey `object`: The virtual network connection reset shared key.
  * keyLength **required** `integer`: The virtual network connection reset shared key length, should between 1 and 128.

### ConnectionSharedKey
* ConnectionSharedKey `object`: Response for GetConnectionSharedKey API service call.
  * value **required** `string`: The virtual network connection shared key value.
  * id `string`: Resource ID.

### DhGroup
* DhGroup `string` (values: None, DHGroup1, DHGroup2, DHGroup14, DHGroup2048, ECP256, ECP384, DHGroup24): The DH Groups used in IKE Phase 1 for initial SA.

### GatewayRoute
* GatewayRoute `object`: Gateway routing details.
  * asPath `string`: The route's AS path sequence.
  * localAddress `string`: The gateway's local address.
  * network `string`: The route's network prefix.
  * nextHop `string`: The route's next hop.
  * origin `string`: The source this route was learned from.
  * sourcePeer `string`: The peer this route was learned from.
  * weight `integer`: The route's weight.

### GatewayRouteListResult
* GatewayRouteListResult `object`: List of virtual network gateway routes.
  * value `array`: List of gateway routes.
    * items [GatewayRoute](#gatewayroute)

### IkeEncryption
* IkeEncryption `string` (values: DES, DES3, AES128, AES192, AES256, GCMAES256, GCMAES128): The IKE encryption algorithm (IKE phase 2).

### IkeIntegrity
* IkeIntegrity `string` (values: MD5, SHA1, SHA256, SHA384, GCMAES256, GCMAES128): The IKE integrity algorithm (IKE phase 2).

### IpsecEncryption
* IpsecEncryption `string` (values: None, DES, DES3, AES128, AES192, AES256, GCMAES128, GCMAES192, GCMAES256): The IPSec encryption algorithm (IKE phase 1).

### IpsecIntegrity
* IpsecIntegrity `string` (values: MD5, SHA1, SHA256, GCMAES128, GCMAES192, GCMAES256): The IPSec integrity algorithm (IKE phase 1).

### IpsecPolicy
* IpsecPolicy `object`: An IPSec Policy configuration for a virtual network gateway connection.
  * dhGroup **required** [DhGroup](#dhgroup)
  * ikeEncryption **required** [IkeEncryption](#ikeencryption)
  * ikeIntegrity **required** [IkeIntegrity](#ikeintegrity)
  * ipsecEncryption **required** [IpsecEncryption](#ipsecencryption)
  * ipsecIntegrity **required** [IpsecIntegrity](#ipsecintegrity)
  * pfsGroup **required** [PfsGroup](#pfsgroup)
  * saDataSizeKilobytes **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
  * saLifeTimeSeconds **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.

### LocalNetworkGateway
* LocalNetworkGateway `object`: A common class for general resource information.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties **required** [LocalNetworkGatewayPropertiesFormat](#localnetworkgatewaypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### LocalNetworkGatewayListResult
* LocalNetworkGatewayListResult `object`: Response for ListLocalNetworkGateways API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of local network gateways that exists in a resource group.
    * items [LocalNetworkGateway](#localnetworkgateway)

### LocalNetworkGatewayPropertiesFormat
* LocalNetworkGatewayPropertiesFormat `object`: LocalNetworkGateway properties.
  * bgpSettings [BgpSettings](#bgpsettings)
  * gatewayIpAddress `string`: IP address of local network gateway.
  * localNetworkAddressSpace `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
    * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
      * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the local network gateway resource.

### PfsGroup
* PfsGroup `string` (values: None, PFS1, PFS2, PFS2048, ECP256, ECP384, PFS24, PFS14, PFSMM): The Pfs Groups used in IKE Phase 2 for new child SA.

### TrafficSelectorPolicy
* TrafficSelectorPolicy `object`: An traffic selector policy for a virtual network gateway connection.
  * localAddressRanges **required** `array`: A collection of local address spaces in CIDR format
    * items `string`
  * remoteAddressRanges **required** `array`: A collection of remote address spaces in CIDR format
    * items `string`

### TunnelConnectionHealth
* TunnelConnectionHealth `object`: VirtualNetworkGatewayConnection properties.
  * connectionStatus [VirtualNetworkGatewayConnectionStatus](#virtualnetworkgatewayconnectionstatus)
  * egressBytesTransferred `integer`: The Egress Bytes Transferred in this connection.
  * ingressBytesTransferred `integer`: The Ingress Bytes Transferred in this connection.
  * lastConnectionEstablishedUtcTime `string`: The time at which connection was established in Utc format.
  * tunnel `string`: Tunnel name.

### VirtualNetworkConnectionGatewayReference
* VirtualNetworkConnectionGatewayReference `object`: A reference to VirtualNetworkGateway or LocalNetworkGateway resource.
  * id **required** `string`: The ID of VirtualNetworkGateway or LocalNetworkGateway resource.

### VirtualNetworkGateway
* VirtualNetworkGateway `object`: A common class for general resource information.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties **required** [VirtualNetworkGatewayPropertiesFormat](#virtualnetworkgatewaypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualNetworkGatewayConnection
* VirtualNetworkGatewayConnection `object`: A common class for general resource information.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties **required** [VirtualNetworkGatewayConnectionPropertiesFormat](#virtualnetworkgatewayconnectionpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualNetworkGatewayConnectionListEntity
* VirtualNetworkGatewayConnectionListEntity `object`: A common class for general resource information.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties **required** [VirtualNetworkGatewayConnectionListEntityPropertiesFormat](#virtualnetworkgatewayconnectionlistentitypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualNetworkGatewayConnectionListEntityPropertiesFormat
* VirtualNetworkGatewayConnectionListEntityPropertiesFormat `object`: VirtualNetworkGatewayConnection properties.
  * authorizationKey `string`: The authorizationKey.
  * connectionProtocol [ConnectionProtocol](#connectionprotocol)
  * connectionStatus [VirtualNetworkGatewayConnectionStatus](#virtualnetworkgatewayconnectionstatus)
  * connectionType **required** [VirtualNetworkGatewayConnectionType](#virtualnetworkgatewayconnectiontype)
  * egressBytesTransferred `integer`: The egress bytes transferred in this connection.
  * enableBgp `boolean`: EnableBgp flag.
  * expressRouteGatewayBypass `boolean`: Bypass ExpressRoute Gateway for data forwarding.
  * ingressBytesTransferred `integer`: The ingress bytes transferred in this connection.
  * ipsecPolicies `array`: The IPSec Policies to be considered by this connection.
    * items [IpsecPolicy](#ipsecpolicy)
  * localNetworkGateway2 [VirtualNetworkConnectionGatewayReference](#virtualnetworkconnectiongatewayreference)
  * peer `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the virtual network gateway connection resource.
  * routingWeight `integer`: The routing weight.
  * sharedKey `string`: The IPSec shared key.
  * trafficSelectorPolicies `array`: The Traffic Selector Policies to be considered by this connection.
    * items [TrafficSelectorPolicy](#trafficselectorpolicy)
  * tunnelConnectionStatus `array`: Collection of all tunnels' connection health status.
    * items [TunnelConnectionHealth](#tunnelconnectionhealth)
  * usePolicyBasedTrafficSelectors `boolean`: Enable policy-based traffic selectors.
  * virtualNetworkGateway1 **required** [VirtualNetworkConnectionGatewayReference](#virtualnetworkconnectiongatewayreference)
  * virtualNetworkGateway2 [VirtualNetworkConnectionGatewayReference](#virtualnetworkconnectiongatewayreference)

### VirtualNetworkGatewayConnectionListResult
* VirtualNetworkGatewayConnectionListResult `object`: Response for the ListVirtualNetworkGatewayConnections API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of VirtualNetworkGatewayConnection resources that exists in a resource group.
    * items [VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

### VirtualNetworkGatewayConnectionPropertiesFormat
* VirtualNetworkGatewayConnectionPropertiesFormat `object`: VirtualNetworkGatewayConnection properties.
  * authorizationKey `string`: The authorizationKey.
  * connectionProtocol [ConnectionProtocol](#connectionprotocol)
  * connectionStatus [VirtualNetworkGatewayConnectionStatus](#virtualnetworkgatewayconnectionstatus)
  * connectionType **required** [VirtualNetworkGatewayConnectionType](#virtualnetworkgatewayconnectiontype)
  * egressBytesTransferred `integer`: The egress bytes transferred in this connection.
  * enableBgp `boolean`: EnableBgp flag.
  * expressRouteGatewayBypass `boolean`: Bypass ExpressRoute Gateway for data forwarding.
  * ingressBytesTransferred `integer`: The ingress bytes transferred in this connection.
  * ipsecPolicies `array`: The IPSec Policies to be considered by this connection.
    * items [IpsecPolicy](#ipsecpolicy)
  * localNetworkGateway2 [LocalNetworkGateway](#localnetworkgateway)
  * peer `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the virtual network gateway connection resource.
  * routingWeight `integer`: The routing weight.
  * sharedKey `string`: The IPSec shared key.
  * trafficSelectorPolicies `array`: The Traffic Selector Policies to be considered by this connection.
    * items [TrafficSelectorPolicy](#trafficselectorpolicy)
  * tunnelConnectionStatus `array`: Collection of all tunnels' connection health status.
    * items [TunnelConnectionHealth](#tunnelconnectionhealth)
  * usePolicyBasedTrafficSelectors `boolean`: Enable policy-based traffic selectors.
  * virtualNetworkGateway1 **required** [VirtualNetworkGateway](#virtualnetworkgateway)
  * virtualNetworkGateway2 [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGatewayConnectionStatus
* VirtualNetworkGatewayConnectionStatus `string` (values: Unknown, Connecting, Connected, NotConnected): Virtual Network Gateway connection status.

### VirtualNetworkGatewayConnectionType
* VirtualNetworkGatewayConnectionType `string` (values: IPsec, Vnet2Vnet, ExpressRoute, VPNClient): Gateway connection type.

### VirtualNetworkGatewayIPConfiguration
* VirtualNetworkGatewayIPConfiguration `object`: IP configuration for virtual network gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [VirtualNetworkGatewayIPConfigurationPropertiesFormat](#virtualnetworkgatewayipconfigurationpropertiesformat)
  * id `string`: Resource ID.

### VirtualNetworkGatewayIPConfigurationPropertiesFormat
* VirtualNetworkGatewayIPConfigurationPropertiesFormat `object`: Properties of VirtualNetworkGatewayIPConfiguration.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): IP address allocation method.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIPAddress `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * subnet `object`: Reference to another subresource.
    * id `string`: Resource ID.

### VirtualNetworkGatewayListConnectionsResult
* VirtualNetworkGatewayListConnectionsResult `object`: Response for the VirtualNetworkGatewayListConnections API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of VirtualNetworkGatewayConnection resources that exists in a resource group.
    * items [VirtualNetworkGatewayConnectionListEntity](#virtualnetworkgatewayconnectionlistentity)

### VirtualNetworkGatewayListResult
* VirtualNetworkGatewayListResult `object`: Response for the ListVirtualNetworkGateways API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of VirtualNetworkGateway resources that exists in a resource group.
    * items [VirtualNetworkGateway](#virtualnetworkgateway)

### VirtualNetworkGatewayPropertiesFormat
* VirtualNetworkGatewayPropertiesFormat `object`: VirtualNetworkGateway properties.
  * activeActive `boolean`: ActiveActive flag.
  * bgpSettings [BgpSettings](#bgpsettings)
  * customRoutes `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
    * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
      * items `string`
  * enableBgp `boolean`: Whether BGP is enabled for this virtual network gateway or not.
  * gatewayDefaultSite `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * gatewayType `string` (values: Vpn, ExpressRoute): The type of this virtual network gateway.
  * ipConfigurations `array`: IP configurations for virtual network gateway.
    * items [VirtualNetworkGatewayIPConfiguration](#virtualnetworkgatewayipconfiguration)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the virtual network gateway resource.
  * sku [VirtualNetworkGatewaySku](#virtualnetworkgatewaysku)
  * vpnClientConfiguration [VpnClientConfiguration](#vpnclientconfiguration)
  * vpnGatewayGeneration `string` (values: None, Generation1, Generation2): The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
  * vpnType `string` (values: PolicyBased, RouteBased): The type of this virtual network gateway.

### VirtualNetworkGatewaySku
* VirtualNetworkGatewaySku `object`: VirtualNetworkGatewaySku details.
  * capacity `integer`: The capacity.
  * name `string` (values: Basic, HighPerformance, Standard, UltraPerformance, VpnGw1, VpnGw2, VpnGw3, VpnGw4, VpnGw5, VpnGw1AZ, VpnGw2AZ, VpnGw3AZ, VpnGw4AZ, VpnGw5AZ, ErGw1AZ, ErGw2AZ, ErGw3AZ): Gateway SKU name.
  * tier `string` (values: Basic, HighPerformance, Standard, UltraPerformance, VpnGw1, VpnGw2, VpnGw3, VpnGw4, VpnGw5, VpnGw1AZ, VpnGw2AZ, VpnGw3AZ, VpnGw4AZ, VpnGw5AZ, ErGw1AZ, ErGw2AZ, ErGw3AZ): Gateway SKU tier.

### VpnClientConfiguration
* VpnClientConfiguration `object`: VpnClientConfiguration for P2S client.
  * aadAudience `string`: The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
  * aadIssuer `string`: The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
  * aadTenant `string`: The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
  * radiusServerAddress `string`: The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
  * radiusServerSecret `string`: The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
  * vpnClientAddressPool `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
    * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
      * items `string`
  * vpnClientIpsecPolicies `array`: VpnClientIpsecPolicies for virtual network gateway P2S client.
    * items [IpsecPolicy](#ipsecpolicy)
  * vpnClientProtocols `array`: VpnClientProtocols for Virtual network gateway.
    * items `string` (values: IkeV2, SSTP, OpenVPN): VPN client protocol enabled for the virtual network gateway.
  * vpnClientRevokedCertificates `array`: VpnClientRevokedCertificate for Virtual network gateway.
    * items [VpnClientRevokedCertificate](#vpnclientrevokedcertificate)
  * vpnClientRootCertificates `array`: VpnClientRootCertificate for virtual network gateway.
    * items [VpnClientRootCertificate](#vpnclientrootcertificate)

### VpnClientConnectionHealthDetail
* VpnClientConnectionHealthDetail `object`: VPN client connection health detail.
  * egressBytesTransferred `integer`: The egress bytes per second.
  * egressPacketsTransferred `integer`: The egress packets per second.
  * ingressBytesTransferred `integer`: The ingress bytes per second.
  * ingressPacketsTransferred `integer`: The ingress packets per second.
  * maxBandwidth `integer`: The max band width.
  * maxPacketsPerSecond `integer`: The max packets transferred per second.
  * privateIpAddress `string`: The assigned private Ip of a connected vpn client.
  * publicIpAddress `string`: The public Ip of a connected vpn client.
  * vpnConnectionDuration `integer`: The duration time of a connected vpn client.
  * vpnConnectionId `string`: The vpn client Id.
  * vpnConnectionTime `string`: The start time of a connected vpn client.
  * vpnUserName `string`: The user name of a connected vpn client.

### VpnClientConnectionHealthDetailListResult
* VpnClientConnectionHealthDetailListResult `object`: List of virtual network gateway vpn client connection health.
  * value `array`: List of vpn client connection health.
    * items [VpnClientConnectionHealthDetail](#vpnclientconnectionhealthdetail)

### VpnClientIPsecParameters
* VpnClientIPsecParameters `object`: An IPSec parameters for a virtual network gateway P2S connection.
  * dhGroup **required** [DhGroup](#dhgroup)
  * ikeEncryption **required** [IkeEncryption](#ikeencryption)
  * ikeIntegrity **required** [IkeIntegrity](#ikeintegrity)
  * ipsecEncryption **required** [IpsecEncryption](#ipsecencryption)
  * ipsecIntegrity **required** [IpsecIntegrity](#ipsecintegrity)
  * pfsGroup **required** [PfsGroup](#pfsgroup)
  * saDataSizeKilobytes **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for P2S client..
  * saLifeTimeSeconds **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for P2S client.

### VpnClientParameters
* VpnClientParameters `object`: Vpn Client Parameters for package generation.
  * authenticationMethod `string` (values: EAPTLS, EAPMSCHAPv2): VPN client authentication method.
  * clientRootCertificates `array`: A list of client root certificates public certificate data encoded as Base-64 strings. Optional parameter for external radius based authentication with EAPTLS.
    * items `string`
  * processorArchitecture `string` (values: Amd64, X86): VPN client Processor Architecture.
  * radiusServerAuthCertificate `string`: The public certificate data for the radius server authentication certificate as a Base-64 encoded string. Required only if external radius authentication has been configured with EAPTLS authentication.

### VpnClientRevokedCertificate
* VpnClientRevokedCertificate `object`: VPN client revoked certificate of virtual network gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [VpnClientRevokedCertificatePropertiesFormat](#vpnclientrevokedcertificatepropertiesformat)
  * id `string`: Resource ID.

### VpnClientRevokedCertificatePropertiesFormat
* VpnClientRevokedCertificatePropertiesFormat `object`: Properties of the revoked VPN client certificate of virtual network gateway.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * thumbprint `string`: The revoked VPN client certificate thumbprint.

### VpnClientRootCertificate
* VpnClientRootCertificate `object`: VPN client root certificate of virtual network gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties **required** [VpnClientRootCertificatePropertiesFormat](#vpnclientrootcertificatepropertiesformat)
  * id `string`: Resource ID.

### VpnClientRootCertificatePropertiesFormat
* VpnClientRootCertificatePropertiesFormat `object`: Properties of SSL certificates of application gateway.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicCertData **required** `string`: The certificate public data.

### VpnDeviceScriptParameters
* VpnDeviceScriptParameters `object`: Vpn device configuration script generation parameters.
  * deviceFamily `string`: The device family for the vpn device.
  * firmwareVersion `string`: The firmware version for the vpn device.
  * vendor `string`: The vendor for the vpn device.

### VpnPacketCaptureStartParameters
* VpnPacketCaptureStartParameters `object`: Start packet capture parameters on virtual network gateway.
  * filterData `string`: Start Packet capture parameters.

### VpnPacketCaptureStopParameters
* VpnPacketCaptureStopParameters `object`: Stop packet capture parameters.
  * sasUrl `string`: SAS url for packet capture on virtual network gateway.


