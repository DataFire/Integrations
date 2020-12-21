# @datafire/azure_network_virtualwan

Client library for VirtualWANAsAServiceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_virtualwan
```
```js
let azure_network_virtualwan = require('@datafire/azure_network_virtualwan').create({
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

REST API for Azure VirtualWAN As a Service.

## Actions

### P2sVpnGateways_List
Lists all the P2SVpnGateways in a subscription.


```js
azure_network_virtualwan.P2sVpnGateways_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListP2SVpnGatewaysResult](#listp2svpngatewaysresult)

### VirtualHubs_List
Lists all the VirtualHubs in a subscription.


```js
azure_network_virtualwan.VirtualHubs_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVirtualHubsResult](#listvirtualhubsresult)

### VirtualWans_List
Lists all the VirtualWANs in a subscription.


```js
azure_network_virtualwan.VirtualWans_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVirtualWANsResult](#listvirtualwansresult)

### VpnGateways_List
Lists all the VpnGateways in a subscription.


```js
azure_network_virtualwan.VpnGateways_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnGatewaysResult](#listvpngatewaysresult)

### VpnSites_List
Lists all the VpnSites in a subscription.


```js
azure_network_virtualwan.VpnSites_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnSitesResult](#listvpnsitesresult)

### P2sVpnGateways_ListByResourceGroup
Lists all the P2SVpnGateways in a resource group.


```js
azure_network_virtualwan.P2sVpnGateways_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnGateway.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListP2SVpnGatewaysResult](#listp2svpngatewaysresult)

### P2sVpnGateways_Delete
Deletes a virtual wan p2s vpn gateway.


```js
azure_network_virtualwan.P2sVpnGateways_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### P2sVpnGateways_Get
Retrieves the details of a virtual wan p2s vpn gateway.


```js
azure_network_virtualwan.P2sVpnGateways_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.

#### Output
* output [P2SVpnGateway](#p2svpngateway)

### P2sVpnGateways_UpdateTags
Updates virtual wan p2s vpn gateway tags.


```js
azure_network_virtualwan.P2sVpnGateways_UpdateTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": "",
  "p2SVpnGatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.
  * p2SVpnGatewayParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [P2SVpnGateway](#p2svpngateway)

### P2sVpnGateways_CreateOrUpdate
Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.


```js
azure_network_virtualwan.P2sVpnGateways_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": "",
  "p2SVpnGatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.
  * p2SVpnGatewayParameters **required** [P2SVpnGateway](#p2svpngateway)

#### Output
* output [P2SVpnGateway](#p2svpngateway)

### P2sVpnGateways_GenerateVpnProfile
Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.


```js
azure_network_virtualwan.P2sVpnGateways_GenerateVpnProfile({
  "resourceGroupName": "",
  "gatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * gatewayName **required** `string`: The name of the P2SVpnGateway.
  * parameters **required** [P2SVpnProfileParameters](#p2svpnprofileparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VpnProfileResponse](#vpnprofileresponse)

### P2sVpnGateways_GetP2sVpnConnectionHealth
Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.


```js
azure_network_virtualwan.P2sVpnGateways_GetP2sVpnConnectionHealth({
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * gatewayName **required** `string`: The name of the P2SVpnGateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [P2SVpnGateway](#p2svpngateway)

### VirtualHubs_ListByResourceGroup
Lists all the VirtualHubs in a resource group.


```js
azure_network_virtualwan.VirtualHubs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVirtualHubsResult](#listvirtualhubsresult)

### VirtualHubs_Delete
Deletes a VirtualHub.


```js
azure_network_virtualwan.VirtualHubs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualHubName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * virtualHubName **required** `string`: The name of the VirtualHub.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualHubs_Get
Retrieves the details of a VirtualHub.


```js
azure_network_virtualwan.VirtualHubs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualHubName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * virtualHubName **required** `string`: The name of the VirtualHub.
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualHub](#virtualhub)

### VirtualHubs_UpdateTags
Updates VirtualHub tags.


```js
azure_network_virtualwan.VirtualHubs_UpdateTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualHubName": "",
  "api-version": "",
  "virtualHubParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * virtualHubName **required** `string`: The name of the VirtualHub.
  * api-version **required** `string`: Client API version.
  * virtualHubParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [VirtualHub](#virtualhub)

### VirtualHubs_CreateOrUpdate
Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.


```js
azure_network_virtualwan.VirtualHubs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualHubName": "",
  "api-version": "",
  "virtualHubParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * virtualHubName **required** `string`: The name of the VirtualHub.
  * api-version **required** `string`: Client API version.
  * virtualHubParameters **required** [VirtualHub](#virtualhub)

#### Output
* output [VirtualHub](#virtualhub)

### HubVirtualNetworkConnections_List
Retrieves the details of all HubVirtualNetworkConnections.


```js
azure_network_virtualwan.HubVirtualNetworkConnections_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualHubName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * virtualHubName **required** `string`: The name of the VirtualHub.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListHubVirtualNetworkConnectionsResult](#listhubvirtualnetworkconnectionsresult)

### HubVirtualNetworkConnections_Get
Retrieves the details of a HubVirtualNetworkConnection.


```js
azure_network_virtualwan.HubVirtualNetworkConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualHubName": "",
  "connectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualHub.
  * virtualHubName **required** `string`: The name of the VirtualHub.
  * connectionName **required** `string`: The name of the vpn connection.
  * api-version **required** `string`: Client API version.

#### Output
* output [HubVirtualNetworkConnection](#hubvirtualnetworkconnection)

### VirtualWans_ListByResourceGroup
Lists all the VirtualWANs in a resource group.


```js
azure_network_virtualwan.VirtualWans_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVirtualWANsResult](#listvirtualwansresult)

### VirtualWans_Delete
Deletes a VirtualWAN.


```js
azure_network_virtualwan.VirtualWans_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "VirtualWANName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * VirtualWANName **required** `string`: The name of the VirtualWAN being deleted.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualWans_Get
Retrieves the details of a VirtualWAN.


```js
azure_network_virtualwan.VirtualWans_Get({
  "resourceGroupName": "",
  "VirtualWANName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * VirtualWANName **required** `string`: The name of the VirtualWAN being retrieved.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualWAN](#virtualwan)

### VirtualWans_UpdateTags
Updates a VirtualWAN tags.


```js
azure_network_virtualwan.VirtualWans_UpdateTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "VirtualWANName": "",
  "api-version": "",
  "WANParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * VirtualWANName **required** `string`: The name of the VirtualWAN being updated.
  * api-version **required** `string`: Client API version.
  * WANParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [VirtualWAN](#virtualwan)

### VirtualWans_CreateOrUpdate
Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.


```js
azure_network_virtualwan.VirtualWans_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "VirtualWANName": "",
  "api-version": "",
  "WANParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * VirtualWANName **required** `string`: The name of the VirtualWAN being created or updated.
  * api-version **required** `string`: Client API version.
  * WANParameters **required** [VirtualWAN](#virtualwan)

#### Output
* output [VirtualWAN](#virtualwan)

### SupportedSecurityProviders
Gives the supported security providers for the virtual wan.


```js
azure_network_virtualwan.SupportedSecurityProviders({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualWANName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name.
  * virtualWANName **required** `string`: The name of the VirtualWAN for which supported security providers are needed.
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualWanSecurityProviders](#virtualwansecurityproviders)

### VpnSitesConfiguration_Download
Gives the sas-url to download the configurations for vpn-sites in a resource group.


```js
azure_network_virtualwan.VpnSitesConfiguration_Download({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualWANName": "",
  "request": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name.
  * virtualWANName **required** `string`: The name of the VirtualWAN for which configuration of all vpn-sites is needed.
  * request **required** [GetVpnSitesConfigurationRequest](#getvpnsitesconfigurationrequest)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### P2sVpnServerConfigurations_ListByVirtualWan
Retrieves all P2SVpnServerConfigurations for a particular VirtualWan.


```js
azure_network_virtualwan.P2sVpnServerConfigurations_ListByVirtualWan({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualWanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * virtualWanName **required** `string`: The name of the VirtualWan.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListP2SVpnServerConfigurationsResult](#listp2svpnserverconfigurationsresult)

### P2sVpnServerConfigurations_Delete
Deletes a P2SVpnServerConfiguration.


```js
azure_network_virtualwan.P2sVpnServerConfigurations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualWanName": "",
  "p2SVpnServerConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnServerConfiguration.
  * virtualWanName **required** `string`: The name of the VirtualWan.
  * p2SVpnServerConfigurationName **required** `string`: The name of the P2SVpnServerConfiguration.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### P2sVpnServerConfigurations_Get
Retrieves the details of a P2SVpnServerConfiguration.


```js
azure_network_virtualwan.P2sVpnServerConfigurations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualWanName": "",
  "p2SVpnServerConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the P2SVpnServerConfiguration.
  * virtualWanName **required** `string`: The name of the VirtualWan.
  * p2SVpnServerConfigurationName **required** `string`: The name of the P2SVpnServerConfiguration.
  * api-version **required** `string`: Client API version.

#### Output
* output [P2SVpnServerConfiguration](#p2svpnserverconfiguration)

### P2sVpnServerConfigurations_CreateOrUpdate
Creates a P2SVpnServerConfiguration to associate with a VirtualWan if it doesn't exist else updates the existing P2SVpnServerConfiguration.


```js
azure_network_virtualwan.P2sVpnServerConfigurations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualWanName": "",
  "p2SVpnServerConfigurationName": "",
  "api-version": "",
  "p2SVpnServerConfigurationParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VirtualWan.
  * virtualWanName **required** `string`: The name of the VirtualWan.
  * p2SVpnServerConfigurationName **required** `string`: The name of the P2SVpnServerConfiguration.
  * api-version **required** `string`: Client API version.
  * p2SVpnServerConfigurationParameters **required** [P2SVpnServerConfiguration](#p2svpnserverconfiguration)

#### Output
* output [P2SVpnServerConfiguration](#p2svpnserverconfiguration)

### VpnGateways_ListByResourceGroup
Lists all the VpnGateways in a resource group.


```js
azure_network_virtualwan.VpnGateways_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnGatewaysResult](#listvpngatewaysresult)

### VpnGateways_Delete
Deletes a virtual wan vpn gateway.


```js
azure_network_virtualwan.VpnGateways_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VpnGateways_Get
Retrieves the details of a virtual wan vpn gateway.


```js
azure_network_virtualwan.VpnGateways_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.

#### Output
* output [VpnGateway](#vpngateway)

### VpnGateways_UpdateTags
Updates virtual wan vpn gateway tags.


```js
azure_network_virtualwan.VpnGateways_UpdateTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": "",
  "vpnGatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.
  * vpnGatewayParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [VpnGateway](#vpngateway)

### VpnGateways_CreateOrUpdate
Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.


```js
azure_network_virtualwan.VpnGateways_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": "",
  "vpnGatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.
  * vpnGatewayParameters **required** [VpnGateway](#vpngateway)

#### Output
* output [VpnGateway](#vpngateway)

### VpnGateways_Reset
Resets the primary of the vpn gateway in the specified resource group.


```js
azure_network_virtualwan.VpnGateways_Reset({
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VpnGateway](#vpngateway)

### VpnConnections_ListByVpnGateway
Retrieves all vpn connections for a particular virtual wan vpn gateway.


```js
azure_network_virtualwan.VpnConnections_ListByVpnGateway({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnConnectionsResult](#listvpnconnectionsresult)

### VpnConnections_Delete
Deletes a vpn connection.


```js
azure_network_virtualwan.VpnConnections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "connectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * connectionName **required** `string`: The name of the connection.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VpnConnections_Get
Retrieves the details of a vpn connection.


```js
azure_network_virtualwan.VpnConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "connectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * connectionName **required** `string`: The name of the vpn connection.
  * api-version **required** `string`: Client API version.

#### Output
* output [VpnConnection](#vpnconnection)

### VpnConnections_CreateOrUpdate
Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing connection.


```js
azure_network_virtualwan.VpnConnections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "connectionName": "",
  "api-version": "",
  "VpnConnectionParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * connectionName **required** `string`: The name of the connection.
  * api-version **required** `string`: Client API version.
  * VpnConnectionParameters **required** [VpnConnection](#vpnconnection)

#### Output
* output [VpnConnection](#vpnconnection)

### VpnLinkConnections_ListByVpnConnection
Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.


```js
azure_network_virtualwan.VpnLinkConnections_ListByVpnConnection({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "connectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * connectionName **required** `string`: The name of the vpn connection.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnSiteLinkConnectionsResult](#listvpnsitelinkconnectionsresult)

### VpnSiteLinkConnections_Get
Retrieves the details of a vpn site link connection.


```js
azure_network_virtualwan.VpnSiteLinkConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "connectionName": "",
  "linkConnectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnGateway.
  * gatewayName **required** `string`: The name of the gateway.
  * connectionName **required** `string`: The name of the vpn connection.
  * linkConnectionName **required** `string`: The name of the vpn connection.
  * api-version **required** `string`: Client API version.

#### Output
* output [VpnSiteLinkConnection](#vpnsitelinkconnection)

### VpnSites_ListByResourceGroup
Lists all the vpnSites in a resource group.


```js
azure_network_virtualwan.VpnSites_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnSitesResult](#listvpnsitesresult)

### VpnSites_Delete
Deletes a VpnSite.


```js
azure_network_virtualwan.VpnSites_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vpnSiteName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * vpnSiteName **required** `string`: The name of the VpnSite being deleted.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VpnSites_Get
Retrieves the details of a VPN site.


```js
azure_network_virtualwan.VpnSites_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vpnSiteName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * vpnSiteName **required** `string`: The name of the VpnSite being retrieved.
  * api-version **required** `string`: Client API version.

#### Output
* output [VpnSite](#vpnsite)

### VpnSites_UpdateTags
Updates VpnSite tags.


```js
azure_network_virtualwan.VpnSites_UpdateTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vpnSiteName": "",
  "api-version": "",
  "VpnSiteParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * vpnSiteName **required** `string`: The name of the VpnSite being updated.
  * api-version **required** `string`: Client API version.
  * VpnSiteParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [VpnSite](#vpnsite)

### VpnSites_CreateOrUpdate
Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.


```js
azure_network_virtualwan.VpnSites_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vpnSiteName": "",
  "api-version": "",
  "VpnSiteParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * vpnSiteName **required** `string`: The name of the VpnSite being created or updated.
  * api-version **required** `string`: Client API version.
  * VpnSiteParameters **required** [VpnSite](#vpnsite)

#### Output
* output [VpnSite](#vpnsite)

### VpnSiteLinks_ListByVpnSite
Lists all the vpnSiteLinks in a resource group for a vpn site.


```js
azure_network_virtualwan.VpnSiteLinks_ListByVpnSite({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vpnSiteName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * vpnSiteName **required** `string`: The name of the VpnSite.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListVpnSiteLinksResult](#listvpnsitelinksresult)

### VpnSiteLinks_Get
Retrieves the details of a VPN site link.


```js
azure_network_virtualwan.VpnSiteLinks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vpnSiteName": "",
  "vpnSiteLinkName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the VpnSite.
  * vpnSiteName **required** `string`: The name of the VpnSite.
  * vpnSiteLinkName **required** `string`: The name of the VpnSiteLink being retrieved.
  * api-version **required** `string`: Client API version.

#### Output
* output [VpnSiteLink](#vpnsitelink)



## Definitions

### DeviceProperties
* DeviceProperties `object`: List of properties of the device.
  * deviceModel `string`: Model of the device.
  * deviceVendor `string`: Name of the device Vendor.
  * linkSpeedInMbps `integer`: Link speed.

### GetVpnSitesConfigurationRequest
* GetVpnSitesConfigurationRequest `object`: List of Vpn-Sites.
  * outputBlobSasUrl **required** `string`: The sas-url to download the configurations for vpn-sites.
  * vpnSites `array`: List of resource-ids of the vpn-sites for which config is to be downloaded.
    * items `string`

### HubVirtualNetworkConnection
* HubVirtualNetworkConnection `object`: HubVirtualNetworkConnection Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [HubVirtualNetworkConnectionProperties](#hubvirtualnetworkconnectionproperties)
  * id `string`: Resource ID.

### HubVirtualNetworkConnectionProperties
* HubVirtualNetworkConnectionProperties `object`: Parameters for HubVirtualNetworkConnection.
  * allowHubToRemoteVnetTransit `boolean`: VirtualHub to RemoteVnet transit to enabled or not.
  * allowRemoteVnetToUseHubVnetGateways `boolean`: Allow RemoteVnet to use Virtual Hub's gateways.
  * enableInternetSecurity `boolean`: Enable internet security.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * remoteVirtualNetwork `object`: Reference to another subresource.
    * id `string`: Resource ID.

### HubVirtualNetworkConnectionStatus
* HubVirtualNetworkConnectionStatus `string` (values: Unknown, Connecting, Connected, NotConnected): The current state of the VirtualHub to vnet connection.

### ListHubVirtualNetworkConnectionsResult
* ListHubVirtualNetworkConnectionsResult `object`: List of HubVirtualNetworkConnections and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of HubVirtualNetworkConnections.
    * items [HubVirtualNetworkConnection](#hubvirtualnetworkconnection)

### ListP2SVpnGatewaysResult
* ListP2SVpnGatewaysResult `object`: Result of the request to list P2SVpnGateways. It contains a list of P2SVpnGateways and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of P2SVpnGateways.
    * items [P2SVpnGateway](#p2svpngateway)

### ListP2SVpnServerConfigurationsResult
* ListP2SVpnServerConfigurationsResult `object`: Result of the request to list all P2SVpnServerConfigurations associated to a VirtualWan. It contains a list of P2SVpnServerConfigurations and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of P2SVpnServerConfigurations.
    * items [P2SVpnServerConfiguration](#p2svpnserverconfiguration)

### ListVirtualHubsResult
* ListVirtualHubsResult `object`: Result of the request to list VirtualHubs. It contains a list of VirtualHubs and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of VirtualHubs.
    * items [VirtualHub](#virtualhub)

### ListVirtualWANsResult
* ListVirtualWANsResult `object`: Result of the request to list VirtualWANs. It contains a list of VirtualWANs and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of VirtualWANs.
    * items [VirtualWAN](#virtualwan)

### ListVpnConnectionsResult
* ListVpnConnectionsResult `object`: Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Vpn Connections.
    * items [VpnConnection](#vpnconnection)

### ListVpnGatewaysResult
* ListVpnGatewaysResult `object`: Result of the request to list VpnGateways. It contains a list of VpnGateways and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of VpnGateways.
    * items [VpnGateway](#vpngateway)

### ListVpnSiteLinkConnectionsResult
* ListVpnSiteLinkConnectionsResult `object`: Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of VpnSiteLinkConnections.
    * items [VpnSiteLinkConnection](#vpnsitelinkconnection)

### ListVpnSiteLinksResult
* ListVpnSiteLinksResult `object`: Result of the request to list VpnSiteLinks. It contains a list of VpnSiteLinks and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of VpnSitesLinks.
    * items [VpnSiteLink](#vpnsitelink)

### ListVpnSitesResult
* ListVpnSitesResult `object`: Result of the request to list VpnSites. It contains a list of VpnSites and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of VpnSites.
    * items [VpnSite](#vpnsite)

### OfficeTrafficCategory
* OfficeTrafficCategory `string` (values: Optimize, OptimizeAndAllow, All, None): The office traffic category.

### P2SVpnGateway
* P2SVpnGateway `object`: P2SVpnGateway Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [P2SVpnGatewayProperties](#p2svpngatewayproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### P2SVpnGatewayProperties
* P2SVpnGatewayProperties `object`: Parameters for P2SVpnGateway.
  * customRoutes `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
    * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
      * items `string`
  * p2SVpnServerConfiguration `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * virtualHub `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * vpnClientAddressPool `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
    * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
      * items `string`
  * vpnClientConnectionHealth [VpnClientConnectionHealth](#vpnclientconnectionhealth)
  * vpnGatewayScaleUnit `integer`: The scale unit for this p2s vpn gateway.

### P2SVpnProfileParameters
* P2SVpnProfileParameters `object`: Vpn Client Parameters for package generation.
  * authenticationMethod `string` (values: EAPTLS, EAPMSCHAPv2): VPN client authentication method.

### P2SVpnServerConfigRadiusClientRootCertificate
* P2SVpnServerConfigRadiusClientRootCertificate `object`: Radius client root certificate of P2SVpnServerConfiguration.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat](#p2svpnserverconfigradiusclientrootcertificatepropertiesformat)
  * id `string`: Resource ID.

### P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat
* P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat `object`: Properties of the Radius client root certificate of P2SVpnServerConfiguration.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * thumbprint `string`: The Radius client root certificate thumbprint.

### P2SVpnServerConfigRadiusServerRootCertificate
* P2SVpnServerConfigRadiusServerRootCertificate `object`: Radius Server root certificate of P2SVpnServerConfiguration.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties **required** [P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat](#p2svpnserverconfigradiusserverrootcertificatepropertiesformat)
  * id `string`: Resource ID.

### P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat
* P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat `object`: Properties of Radius Server root certificate of P2SVpnServerConfiguration.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicCertData **required** `string`: The certificate public data.

### P2SVpnServerConfigVpnClientRevokedCertificate
* P2SVpnServerConfigVpnClientRevokedCertificate `object`: VPN client revoked certificate of P2SVpnServerConfiguration.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat](#p2svpnserverconfigvpnclientrevokedcertificatepropertiesformat)
  * id `string`: Resource ID.

### P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat
* P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat `object`: Properties of the revoked VPN client certificate of P2SVpnServerConfiguration.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * thumbprint `string`: The revoked VPN client certificate thumbprint.

### P2SVpnServerConfigVpnClientRootCertificate
* P2SVpnServerConfigVpnClientRootCertificate `object`: VPN client root certificate of P2SVpnServerConfiguration.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties **required** [P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat](#p2svpnserverconfigvpnclientrootcertificatepropertiesformat)
  * id `string`: Resource ID.

### P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat
* P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat `object`: Properties of VPN client root certificate of P2SVpnServerConfiguration.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicCertData **required** `string`: The certificate public data.

### P2SVpnServerConfiguration
* P2SVpnServerConfiguration `object`: P2SVpnServerConfiguration Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [P2SVpnServerConfigurationProperties](#p2svpnserverconfigurationproperties)
  * id `string`: Resource ID.

### P2SVpnServerConfigurationProperties
* P2SVpnServerConfigurationProperties `object`: Parameters for P2SVpnServerConfiguration.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
  * p2SVpnGateways `array`: List of references to P2SVpnGateways.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * p2SVpnServerConfigRadiusClientRootCertificates `array`: Radius client root certificate of P2SVpnServerConfiguration.
    * items [P2SVpnServerConfigRadiusClientRootCertificate](#p2svpnserverconfigradiusclientrootcertificate)
  * p2SVpnServerConfigRadiusServerRootCertificates `array`: Radius Server root certificate of P2SVpnServerConfiguration.
    * items [P2SVpnServerConfigRadiusServerRootCertificate](#p2svpnserverconfigradiusserverrootcertificate)
  * p2SVpnServerConfigVpnClientRevokedCertificates `array`: VPN client revoked certificate of P2SVpnServerConfiguration.
    * items [P2SVpnServerConfigVpnClientRevokedCertificate](#p2svpnserverconfigvpnclientrevokedcertificate)
  * p2SVpnServerConfigVpnClientRootCertificates `array`: VPN client root certificate of P2SVpnServerConfiguration.
    * items [P2SVpnServerConfigVpnClientRootCertificate](#p2svpnserverconfigvpnclientrootcertificate)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * radiusServerAddress `string`: The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
  * radiusServerSecret `string`: The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
  * vpnClientIpsecPolicies `array`: VpnClientIpsecPolicies for P2SVpnServerConfiguration.
    * items `object`: An IPSec Policy configuration for a virtual network gateway connection.
      * dhGroup **required** `string` (values: None, DHGroup1, DHGroup2, DHGroup14, DHGroup2048, ECP256, ECP384, DHGroup24): The DH Groups used in IKE Phase 1 for initial SA.
      * ikeEncryption **required** `string` (values: DES, DES3, AES128, AES192, AES256, GCMAES256, GCMAES128): The IKE encryption algorithm (IKE phase 2).
      * ikeIntegrity **required** `string` (values: MD5, SHA1, SHA256, SHA384, GCMAES256, GCMAES128): The IKE integrity algorithm (IKE phase 2).
      * ipsecEncryption **required** `string` (values: None, DES, DES3, AES128, AES192, AES256, GCMAES128, GCMAES192, GCMAES256): The IPSec encryption algorithm (IKE phase 1).
      * ipsecIntegrity **required** `string` (values: MD5, SHA1, SHA256, GCMAES128, GCMAES192, GCMAES256): The IPSec integrity algorithm (IKE phase 1).
      * pfsGroup **required** `string` (values: None, PFS1, PFS2, PFS2048, ECP256, ECP384, PFS24, PFS14, PFSMM): The Pfs Groups used in IKE Phase 2 for new child SA.
      * saDataSizeKilobytes **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
      * saLifeTimeSeconds **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
  * vpnProtocols `array`: VPN protocols for the P2SVpnServerConfiguration.
    * items `string` (values: IkeV2, OpenVPN): VPN protocol enabled for the P2SVpnServerConfiguration.

### TunnelConnectionStatus
* TunnelConnectionStatus `string` (values: Unknown, Connecting, Connected, NotConnected): The current state of the tunnel.

### VirtualHub
* VirtualHub `object`: VirtualHub Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VirtualHubProperties](#virtualhubproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualHubProperties
* VirtualHubProperties `object`: Parameters for VirtualHub.
  * addressPrefix `string`: Address-prefix for this VirtualHub.
  * expressRouteGateway `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * p2SVpnGateway `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * routeTable [VirtualHubRouteTable](#virtualhubroutetable)
  * virtualNetworkConnections `array`: List of all vnet connections with this VirtualHub.
    * items [HubVirtualNetworkConnection](#hubvirtualnetworkconnection)
  * virtualWan `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * vpnGateway `object`: Reference to another subresource.
    * id `string`: Resource ID.

### VirtualHubRoute
* VirtualHubRoute `object`: VirtualHub route.
  * addressPrefixes `array`: List of all addressPrefixes.
    * items `string`
  * nextHopIpAddress `string`: NextHop ip address.

### VirtualHubRouteTable
* VirtualHubRouteTable `object`: VirtualHub route table.
  * routes `array`: List of all routes.
    * items [VirtualHubRoute](#virtualhubroute)

### VirtualWAN
* VirtualWAN `object`: VirtualWAN Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VirtualWanProperties](#virtualwanproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualWanProperties
* VirtualWanProperties `object`: Parameters for VirtualWAN.
  * allowBranchToBranchTraffic `boolean`: True if branch to branch traffic is allowed.
  * allowVnetToVnetTraffic `boolean`: True if Vnet to Vnet traffic is allowed.
  * disableVpnEncryption `boolean`: Vpn encryption to be disabled or not.
  * office365LocalBreakoutCategory [OfficeTrafficCategory](#officetrafficcategory)
  * p2SVpnServerConfigurations `array`: List of all P2SVpnServerConfigurations associated with the virtual wan.
    * items [P2SVpnServerConfiguration](#p2svpnserverconfiguration)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * securityProviderName `string`: The Security Provider name.
  * virtualHubs `array`: List of VirtualHubs in the VirtualWAN.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * vpnSites `array`: List of VpnSites in the VirtualWAN.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.

### VirtualWanSecurityProvider
* VirtualWanSecurityProvider `object`: Collection of SecurityProviders.
  * name `string`: Name of the security provider.
  * type [VirtualWanSecurityProviderType](#virtualwansecurityprovidertype)
  * url `string`: Url of the security provider.

### VirtualWanSecurityProviderType
* VirtualWanSecurityProviderType `string` (values: External, Native): The virtual wan security provider type.

### VirtualWanSecurityProviders
* VirtualWanSecurityProviders `object`: Collection of SecurityProviders.
  * supportedProviders `array`: List of VirtualWAN security providers.
    * items [VirtualWanSecurityProvider](#virtualwansecurityprovider)

### VpnClientConnectionHealth
* VpnClientConnectionHealth `object`: VpnClientConnectionHealth properties.
  * allocatedIpAddresses `array`: List of allocated ip addresses to the connected p2s vpn clients.
    * items `string`
  * totalEgressBytesTransferred `integer`: Total of the Egress Bytes Transferred in this connection.
  * totalIngressBytesTransferred `integer`: Total of the Ingress Bytes Transferred in this P2S Vpn connection.
  * vpnClientConnectionsCount `integer`: The total of p2s vpn clients connected at this time to this P2SVpnGateway.

### VpnConnection
* VpnConnection `object`: VpnConnection Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [VpnConnectionProperties](#vpnconnectionproperties)
  * id `string`: Resource ID.

### VpnConnectionProperties
* VpnConnectionProperties `object`: Parameters for VpnConnection.
  * connectionBandwidth `integer`: Expected bandwidth in MBPS.
  * connectionStatus [VpnConnectionStatus](#vpnconnectionstatus)
  * egressBytesTransferred `integer`: Egress bytes transferred.
  * enableBgp `boolean`: EnableBgp flag.
  * enableInternetSecurity `boolean`: Enable internet security.
  * enableRateLimiting `boolean`: EnableBgp flag.
  * ingressBytesTransferred `integer`: Ingress bytes transferred.
  * ipsecPolicies `array`: The IPSec Policies to be considered by this connection.
    * items `object`: An IPSec Policy configuration for a virtual network gateway connection.
      * dhGroup **required** `string` (values: None, DHGroup1, DHGroup2, DHGroup14, DHGroup2048, ECP256, ECP384, DHGroup24): The DH Groups used in IKE Phase 1 for initial SA.
      * ikeEncryption **required** `string` (values: DES, DES3, AES128, AES192, AES256, GCMAES256, GCMAES128): The IKE encryption algorithm (IKE phase 2).
      * ikeIntegrity **required** `string` (values: MD5, SHA1, SHA256, SHA384, GCMAES256, GCMAES128): The IKE integrity algorithm (IKE phase 2).
      * ipsecEncryption **required** `string` (values: None, DES, DES3, AES128, AES192, AES256, GCMAES128, GCMAES192, GCMAES256): The IPSec encryption algorithm (IKE phase 1).
      * ipsecIntegrity **required** `string` (values: MD5, SHA1, SHA256, GCMAES128, GCMAES192, GCMAES256): The IPSec integrity algorithm (IKE phase 1).
      * pfsGroup **required** `string` (values: None, PFS1, PFS2, PFS2048, ECP256, ECP384, PFS24, PFS14, PFSMM): The Pfs Groups used in IKE Phase 2 for new child SA.
      * saDataSizeKilobytes **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
      * saLifeTimeSeconds **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * remoteVpnSite `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * routingWeight `integer`: Routing weight for vpn connection.
  * sharedKey `string`: SharedKey for the vpn connection.
  * useLocalAzureIpAddress `boolean`: Use local azure ip to initiate connection.
  * usePolicyBasedTrafficSelectors `boolean`: Enable policy-based traffic selectors.
  * vpnConnectionProtocolType `string` (values: IKEv2, IKEv1): Gateway connection protocol.
  * vpnLinkConnections `array`: List of all vpn site link connections to the gateway.
    * items [VpnSiteLinkConnection](#vpnsitelinkconnection)

### VpnConnectionStatus
* VpnConnectionStatus `string` (values: Unknown, Connecting, Connected, NotConnected): The current state of the vpn connection.

### VpnGateway
* VpnGateway `object`: VpnGateway Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VpnGatewayProperties](#vpngatewayproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VpnGatewayProperties
* VpnGatewayProperties `object`: Parameters for VpnGateway.
  * bgpSettings `object`: BGP settings details.
    * asn `integer`: The BGP speaker's ASN.
    * bgpPeeringAddress `string`: The BGP peering address and BGP identifier of this BGP speaker.
    * peerWeight `integer`: The weight added to routes learned from this BGP speaker.
  * connections `array`: List of all vpn connections to the gateway.
    * items [VpnConnection](#vpnconnection)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * virtualHub `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * vpnGatewayScaleUnit `integer`: The scale unit for this vpn gateway.

### VpnLinkBgpSettings
* VpnLinkBgpSettings `object`: BGP settings details for a link.
  * asn `integer`: The BGP speaker's ASN.
  * bgpPeeringAddress `string`: The BGP peering address and BGP identifier of this BGP speaker.

### VpnLinkProviderProperties
* VpnLinkProviderProperties `object`: List of properties of a link provider.
  * linkProviderName `string`: Name of the link provider.
  * linkSpeedInMbps `integer`: Link speed.

### VpnProfileResponse
* VpnProfileResponse `object`: Vpn Profile Response for package generation.
  * profileUrl `string`: URL to the VPN profile.

### VpnSite
* VpnSite `object`: VpnSite Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VpnSiteProperties](#vpnsiteproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VpnSiteId
* VpnSiteId `object`: VpnSite Resource.
  * vpnSite `string`: The resource-uri of the vpn-site for which config is to be fetched.

### VpnSiteLink
* VpnSiteLink `object`: VpnSiteLink Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [VpnSiteLinkProperties](#vpnsitelinkproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### VpnSiteLinkConnection
* VpnSiteLinkConnection `object`: VpnSiteLinkConnection Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [VpnSiteLinkConnectionProperties](#vpnsitelinkconnectionproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### VpnSiteLinkConnectionProperties
* VpnSiteLinkConnectionProperties `object`: Parameters for VpnConnection.
  * connectionBandwidth `integer`: Expected bandwidth in MBPS.
  * connectionStatus [VpnConnectionStatus](#vpnconnectionstatus)
  * egressBytesTransferred `integer`: Egress bytes transferred.
  * enableBgp `boolean`: EnableBgp flag.
  * enableRateLimiting `boolean`: EnableBgp flag.
  * ingressBytesTransferred `integer`: Ingress bytes transferred.
  * ipsecPolicies `array`: The IPSec Policies to be considered by this connection.
    * items `object`: An IPSec Policy configuration for a virtual network gateway connection.
      * dhGroup **required** `string` (values: None, DHGroup1, DHGroup2, DHGroup14, DHGroup2048, ECP256, ECP384, DHGroup24): The DH Groups used in IKE Phase 1 for initial SA.
      * ikeEncryption **required** `string` (values: DES, DES3, AES128, AES192, AES256, GCMAES256, GCMAES128): The IKE encryption algorithm (IKE phase 2).
      * ikeIntegrity **required** `string` (values: MD5, SHA1, SHA256, SHA384, GCMAES256, GCMAES128): The IKE integrity algorithm (IKE phase 2).
      * ipsecEncryption **required** `string` (values: None, DES, DES3, AES128, AES192, AES256, GCMAES128, GCMAES192, GCMAES256): The IPSec encryption algorithm (IKE phase 1).
      * ipsecIntegrity **required** `string` (values: MD5, SHA1, SHA256, GCMAES128, GCMAES192, GCMAES256): The IPSec integrity algorithm (IKE phase 1).
      * pfsGroup **required** `string` (values: None, PFS1, PFS2, PFS2048, ECP256, ECP384, PFS24, PFS14, PFSMM): The Pfs Groups used in IKE Phase 2 for new child SA.
      * saDataSizeKilobytes **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
      * saLifeTimeSeconds **required** `integer`: The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * routingWeight `integer`: Routing weight for vpn connection.
  * sharedKey `string`: SharedKey for the vpn connection.
  * useLocalAzureIpAddress `boolean`: Use local azure ip to initiate connection.
  * usePolicyBasedTrafficSelectors `boolean`: Enable policy-based traffic selectors.
  * vpnConnectionProtocolType `string` (values: IKEv2, IKEv1): Gateway connection protocol.
  * vpnSiteLink `object`: Reference to another subresource.
    * id `string`: Resource ID.

### VpnSiteLinkProperties
* VpnSiteLinkProperties `object`: Parameters for VpnSite.
  * bgpProperties [VpnLinkBgpSettings](#vpnlinkbgpsettings)
  * ipAddress `string`: The ip-address for the vpn-site-link.
  * linkProperties [VpnLinkProviderProperties](#vpnlinkproviderproperties)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### VpnSiteProperties
* VpnSiteProperties `object`: Parameters for VpnSite.
  * addressSpace `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
    * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
      * items `string`
  * bgpProperties `object`: BGP settings details.
    * asn `integer`: The BGP speaker's ASN.
    * bgpPeeringAddress `string`: The BGP peering address and BGP identifier of this BGP speaker.
    * peerWeight `integer`: The weight added to routes learned from this BGP speaker.
  * deviceProperties [DeviceProperties](#deviceproperties)
  * ipAddress `string`: The ip-address for the vpn-site.
  * isSecuritySite `boolean`: IsSecuritySite flag.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * siteKey `string`: The key for vpn-site that can be used for connections.
  * virtualWan `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * vpnSiteLinks `array`: List of all vpn site links.
    * items [VpnSiteLink](#vpnsitelink)


