# @datafire/azure_network_virtualnetworktap

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_virtualnetworktap
```
```js
let azure_network_virtualnetworktap = require('@datafire/azure_network_virtualnetworktap').create({
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

### VirtualNetworkTaps_ListAll
Gets all the VirtualNetworkTaps in a subscription.


```js
azure_network_virtualnetworktap.VirtualNetworkTaps_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkTapListResult](#virtualnetworktaplistresult)

### VirtualNetworkTaps_ListByResourceGroup
Gets all the VirtualNetworkTaps in a subscription.


```js
azure_network_virtualnetworktap.VirtualNetworkTaps_ListByResourceGroup({
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
* output [VirtualNetworkTapListResult](#virtualnetworktaplistresult)

### VirtualNetworkTaps_Delete
Deletes the specified virtual network tap.


```js
azure_network_virtualnetworktap.VirtualNetworkTaps_Delete({
  "resourceGroupName": "",
  "tapName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * tapName **required** `string`: The name of the virtual network tap.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkTaps_Get
Gets information about the specified virtual network tap.


```js
azure_network_virtualnetworktap.VirtualNetworkTaps_Get({
  "resourceGroupName": "",
  "tapName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * tapName **required** `string`: The name of virtual network tap.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkTap](#virtualnetworktap)

### VirtualNetworkTaps_UpdateTags
Updates an VirtualNetworkTap tags.


```js
azure_network_virtualnetworktap.VirtualNetworkTaps_UpdateTags({
  "resourceGroupName": "",
  "tapName": "",
  "tapParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * tapName **required** `string`: The name of the tap.
  * tapParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkTap](#virtualnetworktap)

### VirtualNetworkTaps_CreateOrUpdate
Creates or updates a Virtual Network Tap.


```js
azure_network_virtualnetworktap.VirtualNetworkTaps_CreateOrUpdate({
  "resourceGroupName": "",
  "tapName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * tapName **required** `string`: The name of the virtual network tap.
  * parameters **required** [VirtualNetworkTap](#virtualnetworktap)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkTap](#virtualnetworktap)



## Definitions

### VirtualNetworkTap
* VirtualNetworkTap `object`: Virtual Network Tap resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VirtualNetworkTapPropertiesFormat](#virtualnetworktappropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualNetworkTapListResult
* VirtualNetworkTapListResult `object`: Response for ListVirtualNetworkTap API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of VirtualNetworkTaps in a resource group.
    * items [VirtualNetworkTap](#virtualnetworktap)

### VirtualNetworkTapPropertiesFormat
* VirtualNetworkTapPropertiesFormat `object`: Virtual Network Tap properties.
  * destinationLoadBalancerFrontEndIPConfiguration [./loadBalancer.jsonFrontendIPConfiguration](#./loadbalancer.jsonfrontendipconfiguration)
  * destinationNetworkInterfaceIPConfiguration [./networkInterface.jsonNetworkInterfaceIPConfiguration](#./networkinterface.jsonnetworkinterfaceipconfiguration)
  * destinationPort `integer`: The VXLAN destination port that will receive the tapped traffic.
  * networkInterfaceTapConfigurations `array`: Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
    * items [./networkInterface.jsonNetworkInterfaceTapConfiguration](#./networkinterface.jsonnetworkinterfacetapconfiguration)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the virtual network tap resource.


