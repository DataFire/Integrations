# @datafire/azure_network_interfaceendpoint

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_interfaceendpoint
```
```js
let azure_network_interfaceendpoint = require('@datafire/azure_network_interfaceendpoint').create({
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

### InterfaceEndpoints_ListBySubscription
Gets all interface endpoints in a subscription.


```js
azure_network_interfaceendpoint.InterfaceEndpoints_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InterfaceEndpointListResult](#interfaceendpointlistresult)

### InterfaceEndpoints_List
Gets all interface endpoints in a resource group.


```js
azure_network_interfaceendpoint.InterfaceEndpoints_List({
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
* output [InterfaceEndpointListResult](#interfaceendpointlistresult)

### InterfaceEndpoints_Delete
Deletes the specified interface endpoint.


```js
azure_network_interfaceendpoint.InterfaceEndpoints_Delete({
  "resourceGroupName": "",
  "interfaceEndpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * interfaceEndpointName **required** `string`: The name of the interface endpoint.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### InterfaceEndpoints_Get
Gets the specified interface endpoint by resource group.


```js
azure_network_interfaceendpoint.InterfaceEndpoints_Get({
  "resourceGroupName": "",
  "interfaceEndpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * interfaceEndpointName **required** `string`: The name of the interface endpoint.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [InterfaceEndpoint](#interfaceendpoint)

### InterfaceEndpoints_CreateOrUpdate
Creates or updates an interface endpoint in the specified resource group.


```js
azure_network_interfaceendpoint.InterfaceEndpoints_CreateOrUpdate({
  "resourceGroupName": "",
  "interfaceEndpointName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * interfaceEndpointName **required** `string`: The name of the interface endpoint.
  * parameters **required** [InterfaceEndpoint](#interfaceendpoint)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InterfaceEndpoint](#interfaceendpoint)



## Definitions

### EndpointService
* EndpointService `object`: Identifies the service being brought into the virtual network.
  * id `string`: A unique identifier of the service being referenced by the interface endpoint.

### InterfaceEndpoint
* InterfaceEndpoint `object`: Interface endpoint resource.
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * properties [InterfaceEndpointProperties](#interfaceendpointproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### InterfaceEndpointListResult
* InterfaceEndpointListResult `object`: Response for the ListInterfaceEndpoints API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Gets a list of InterfaceEndpoint resources in a resource group.
    * items [InterfaceEndpoint](#interfaceendpoint)

### InterfaceEndpointProperties
* InterfaceEndpointProperties `object`: Properties of the interface endpoint.
  * endpointService `object`: Identifies the service being brought into the virtual network.
    * id `string`: A unique identifier of the service being referenced by the interface endpoint.
  * fqdn `string`: A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
  * networkInterfaces `array`: Gets an array of references to the network interfaces created for this interface endpoint.
    * items [./networkInterface.jsonNetworkInterface](#./networkinterface.jsonnetworkinterface)
  * owner `string`: A read-only property that identifies who created this interface endpoint.
  * provisioningState `string`: The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * subnet [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)


