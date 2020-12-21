# @datafire/azure_network_privateendpoint

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_privateendpoint
```
```js
let azure_network_privateendpoint = require('@datafire/azure_network_privateendpoint').create({
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

### AvailablePrivateEndpointTypes_List
Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region.


```js
azure_network_privateendpoint.AvailablePrivateEndpointTypes_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailablePrivateEndpointTypesResult](#availableprivateendpointtypesresult)

### PrivateEndpoints_ListBySubscription
Gets all private endpoints in a subscription.


```js
azure_network_privateendpoint.PrivateEndpoints_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateEndpointListResult](#privateendpointlistresult)

### AvailablePrivateEndpointTypes_ListByResourceGroup
Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region.


```js
azure_network_privateendpoint.AvailablePrivateEndpointTypes_ListByResourceGroup({
  "location": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [AvailablePrivateEndpointTypesResult](#availableprivateendpointtypesresult)

### PrivateEndpoints_List
Gets all private endpoints in a resource group.


```js
azure_network_privateendpoint.PrivateEndpoints_List({
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
* output [PrivateEndpointListResult](#privateendpointlistresult)

### PrivateEndpoints_Delete
Deletes the specified private endpoint.


```js
azure_network_privateendpoint.PrivateEndpoints_Delete({
  "resourceGroupName": "",
  "privateEndpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateEndpointName **required** `string`: The name of the private endpoint.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PrivateEndpoints_Get
Gets the specified private endpoint by resource group.


```js
azure_network_privateendpoint.PrivateEndpoints_Get({
  "resourceGroupName": "",
  "privateEndpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateEndpointName **required** `string`: The name of the private endpoint.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [PrivateEndpoint](#privateendpoint)

### PrivateEndpoints_CreateOrUpdate
Creates or updates an private endpoint in the specified resource group.


```js
azure_network_privateendpoint.PrivateEndpoints_CreateOrUpdate({
  "resourceGroupName": "",
  "privateEndpointName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateEndpointName **required** `string`: The name of the private endpoint.
  * parameters **required** [PrivateEndpoint](#privateendpoint)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateEndpoint](#privateendpoint)



## Definitions

### AvailablePrivateEndpointType
* AvailablePrivateEndpointType `object`: The information of an AvailablePrivateEndpointType.
  * id `string`: A unique identifier of the AvailablePrivateEndpoint Type resource.
  * name `string`: The name of the service and resource.
  * resourceName `string`: The name of the service and resource.
  * type `string`: Resource type.

### AvailablePrivateEndpointTypesResult
* AvailablePrivateEndpointTypesResult `object`: An array of available PrivateEndpoint types.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: An array of available privateEndpoint type.
    * items [AvailablePrivateEndpointType](#availableprivateendpointtype)

### PrivateEndpoint
* PrivateEndpoint `object`: Private endpoint resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [PrivateEndpointProperties](#privateendpointproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### PrivateEndpointListResult
* PrivateEndpointListResult `object`: Response for the ListPrivateEndpoints API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of private endpoint resources in a resource group.
    * items [PrivateEndpoint](#privateendpoint)

### PrivateEndpointProperties
* PrivateEndpointProperties `object`: Properties of the private endpoint.
  * manualPrivateLinkServiceConnections `array`: A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
    * items `object`: PrivateLinkServiceConnection resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Properties of the PrivateLinkServiceConnection.
        * groupIds `array`: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
          * items `string`
        * privateLinkServiceConnectionState `object`: A collection of information about the state of the connection between service consumer and provider.
          * actionsRequired `string`: A message indicating if changes on the service provider require any updates on the consumer.
          * description `string`: The reason for approval/rejection of the connection.
          * status `string`: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
        * privateLinkServiceId `string`: The resource id of private link service.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * requestMessage `string`: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
      * type `string`: The resource type.
      * id `string`: Resource ID.
  * networkInterfaces `array`: An array of references to the network interfaces created for this private endpoint.
    * items [./networkInterface.jsonNetworkInterface](#./networkinterface.jsonnetworkinterface)
  * privateLinkServiceConnections `array`: A grouping of information about the connection to the remote resource.
    * items `object`: PrivateLinkServiceConnection resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Properties of the PrivateLinkServiceConnection.
        * groupIds `array`: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
          * items `string`
        * privateLinkServiceConnectionState `object`: A collection of information about the state of the connection between service consumer and provider.
          * actionsRequired `string`: A message indicating if changes on the service provider require any updates on the consumer.
          * description `string`: The reason for approval/rejection of the connection.
          * status `string`: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
        * privateLinkServiceId `string`: The resource id of private link service.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * requestMessage `string`: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
      * type `string`: The resource type.
      * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * subnet [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)

### PrivateLinkServiceConnection
* PrivateLinkServiceConnection `object`: PrivateLinkServiceConnection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Properties of the PrivateLinkServiceConnection.
    * groupIds `array`: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
      * items `string`
    * privateLinkServiceConnectionState `object`: A collection of information about the state of the connection between service consumer and provider.
      * actionsRequired `string`: A message indicating if changes on the service provider require any updates on the consumer.
      * description `string`: The reason for approval/rejection of the connection.
      * status `string`: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
    * privateLinkServiceId `string`: The resource id of private link service.
    * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
    * requestMessage `string`: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
  * type `string`: The resource type.
  * id `string`: Resource ID.

### PrivateLinkServiceConnectionProperties
* PrivateLinkServiceConnectionProperties `object`: Properties of the PrivateLinkServiceConnection.
  * groupIds `array`: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
    * items `string`
  * privateLinkServiceConnectionState `object`: A collection of information about the state of the connection between service consumer and provider.
    * actionsRequired `string`: A message indicating if changes on the service provider require any updates on the consumer.
    * description `string`: The reason for approval/rejection of the connection.
    * status `string`: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
  * privateLinkServiceId `string`: The resource id of private link service.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * requestMessage `string`: A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.


