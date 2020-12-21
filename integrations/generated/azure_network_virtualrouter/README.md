# @datafire/azure_network_virtualrouter

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_virtualrouter
```
```js
let azure_network_virtualrouter = require('@datafire/azure_network_virtualrouter').create({
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

### VirtualRouters_List
Gets all the Virtual Routers in a subscription.


```js
azure_network_virtualrouter.VirtualRouters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualRouterListResult](#virtualrouterlistresult)

### VirtualRouters_ListByResourceGroup
Lists all Virtual Routers in a resource group.


```js
azure_network_virtualrouter.VirtualRouters_ListByResourceGroup({
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
* output [VirtualRouterListResult](#virtualrouterlistresult)

### VirtualRouters_Delete
Deletes the specified Virtual Router.


```js
azure_network_virtualrouter.VirtualRouters_Delete({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualRouters_Get
Gets the specified Virtual Router.


```js
azure_network_virtualrouter.VirtualRouters_Get({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [VirtualRouter](#virtualrouter)

### VirtualRouters_CreateOrUpdate
Creates or updates the specified Virtual Router.


```js
azure_network_virtualrouter.VirtualRouters_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * parameters **required** [VirtualRouter](#virtualrouter)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualRouter](#virtualrouter)

### VirtualRouterPeerings_List
Lists all Virtual Router Peerings in a Virtual Router resource.


```js
azure_network_virtualrouter.VirtualRouterPeerings_List({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualRouterPeeringListResult](#virtualrouterpeeringlistresult)

### VirtualRouterPeerings_Delete
Deletes the specified peering from a Virtual Router.


```js
azure_network_virtualrouter.VirtualRouterPeerings_Delete({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * peeringName **required** `string`: The name of the peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualRouterPeerings_Get
Gets the specified Virtual Router Peering.


```js
azure_network_virtualrouter.VirtualRouterPeerings_Get({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "peeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * peeringName **required** `string`: The name of the Virtual Router Peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualRouterPeering](#virtualrouterpeering)

### VirtualRouterPeerings_CreateOrUpdate
Creates or updates the specified Virtual Router Peering.


```js
azure_network_virtualrouter.VirtualRouterPeerings_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualRouterName": "",
  "peeringName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualRouterName **required** `string`: The name of the Virtual Router.
  * peeringName **required** `string`: The name of the Virtual Router Peering.
  * parameters **required** [VirtualRouterPeering](#virtualrouterpeering)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualRouterPeering](#virtualrouterpeering)



## Definitions

### VirtualRouter
* VirtualRouter `object`: VirtualRouter Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VirtualRouterPropertiesFormat](#virtualrouterpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualRouterListResult
* VirtualRouterListResult `object`: Response for ListVirtualRouters API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of Virtual Routers.
    * items [VirtualRouter](#virtualrouter)

### VirtualRouterPeering
* VirtualRouterPeering `object`: Virtual Router Peering resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the virtual router peering that is unique within a virtual router.
  * properties [VirtualRouterPeeringProperties](#virtualrouterpeeringproperties)
  * type `string`: Peering type.
  * id `string`: Resource ID.

### VirtualRouterPeeringListResult
* VirtualRouterPeeringListResult `object`: Response for ListVirtualRouterPeerings API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of VirtualRouterPeerings in a VirtualRouter.
    * items [VirtualRouterPeering](#virtualrouterpeering)

### VirtualRouterPeeringProperties
* VirtualRouterPeeringProperties `object`: Properties of the rule group.
  * peerAsn `integer`: Peer ASN.
  * peerIp `string`: Peer IP.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### VirtualRouterPropertiesFormat
* VirtualRouterPropertiesFormat `object`: Virtual Router definition.
  * hostedGateway `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * hostedSubnet `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * peerings `array`: List of references to VirtualRouterPeerings.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * virtualRouterAsn `integer`: VirtualRouter ASN.
  * virtualRouterIps `array`: VirtualRouter IPs.
    * items `string`


