# @datafire/azure_network_privatelinkservice

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_privatelinkservice
```
```js
let azure_network_privatelinkservice = require('@datafire/azure_network_privatelinkservice').create({
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

### PrivateLinkServices_ListAutoApprovedPrivateLinkServices
Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region.


```js
azure_network_privatelinkservice.PrivateLinkServices_ListAutoApprovedPrivateLinkServices({
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
* output [AutoApprovedPrivateLinkServicesResult](#autoapprovedprivatelinkservicesresult)

### PrivateLinkServices_CheckPrivateLinkServiceVisibility
Checks whether the subscription is visible to private link service.


```js
azure_network_privatelinkservice.PrivateLinkServices_CheckPrivateLinkServiceVisibility({
  "location": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * parameters **required** [CheckPrivateLinkServiceVisibilityRequest](#checkprivatelinkservicevisibilityrequest)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateLinkServiceVisibility](#privatelinkservicevisibility)

### PrivateLinkServices_ListBySubscription
Gets all private link service in a subscription.


```js
azure_network_privatelinkservice.PrivateLinkServices_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateLinkServiceListResult](#privatelinkservicelistresult)

### PrivateLinkServices_ListAutoApprovedPrivateLinkServicesByResourceGroup
Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region.


```js
azure_network_privatelinkservice.PrivateLinkServices_ListAutoApprovedPrivateLinkServicesByResourceGroup({
  "location": "",
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AutoApprovedPrivateLinkServicesResult](#autoapprovedprivatelinkservicesresult)

### PrivateLinkServices_CheckPrivateLinkServiceVisibilityByResourceGroup
Checks whether the subscription is visible to private link service in the specified resource group.


```js
azure_network_privatelinkservice.PrivateLinkServices_CheckPrivateLinkServiceVisibilityByResourceGroup({
  "location": "",
  "resourceGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * resourceGroupName **required** `string`: The name of the resource group.
  * parameters **required** [CheckPrivateLinkServiceVisibilityRequest](#checkprivatelinkservicevisibilityrequest)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateLinkServiceVisibility](#privatelinkservicevisibility)

### PrivateLinkServices_List
Gets all private link services in a resource group.


```js
azure_network_privatelinkservice.PrivateLinkServices_List({
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
* output [PrivateLinkServiceListResult](#privatelinkservicelistresult)

### PrivateLinkServices_Delete
Deletes the specified private link service.


```js
azure_network_privatelinkservice.PrivateLinkServices_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the private link service.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PrivateLinkServices_Get
Gets the specified private link service by resource group.


```js
azure_network_privatelinkservice.PrivateLinkServices_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the private link service.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [PrivateLinkService](#privatelinkservice)

### PrivateLinkServices_CreateOrUpdate
Creates or updates an private link service in the specified resource group.


```js
azure_network_privatelinkservice.PrivateLinkServices_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the private link service.
  * parameters **required** [PrivateLinkService](#privatelinkservice)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateLinkService](#privatelinkservice)

### PrivateLinkServices_DeletePrivateEndpointConnection
Delete private end point connection for a private link service in a subscription.


```js
azure_network_privatelinkservice.PrivateLinkServices_DeletePrivateEndpointConnection({
  "resourceGroupName": "",
  "serviceName": "",
  "peConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the private link service.
  * peConnectionName **required** `string`: The name of the private end point connection.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PrivateLinkServices_UpdatePrivateEndpointConnection
Approve or reject private end point connection for a private link service in a subscription.


```js
azure_network_privatelinkservice.PrivateLinkServices_UpdatePrivateEndpointConnection({
  "resourceGroupName": "",
  "serviceName": "",
  "peConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the private link service.
  * peConnectionName **required** `string`: The name of the private end point connection.
  * parameters **required** [PrivateEndpointConnection](#privateendpointconnection)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)



## Definitions

### AutoApprovedPrivateLinkService
* AutoApprovedPrivateLinkService `object`: The information of an AutoApprovedPrivateLinkService.
  * privateLinkService `string`: The id of the private link service resource.

### AutoApprovedPrivateLinkServicesResult
* AutoApprovedPrivateLinkServicesResult `object`: An array of private link service id that can be linked to a private end point with auto approved.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: An array of auto approved private link service.
    * items [AutoApprovedPrivateLinkService](#autoapprovedprivatelinkservice)

### CheckPrivateLinkServiceVisibilityRequest
* CheckPrivateLinkServiceVisibilityRequest `object`: Request body of the CheckPrivateLinkServiceVisibility API service call.
  * privateLinkServiceAlias `string`: The alias of the private link service.

### FrontendIPConfigurationPropertiesFormat


### NetworkInterfacePropertiesFormat


### PrivateEndpointConnection
* PrivateEndpointConnection `object`: PrivateEndpointConnection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
  * type `string`: The resource type.
  * id `string`: Resource ID.

### PrivateEndpointConnectionProperties
* PrivateEndpointConnectionProperties `object`: Properties of the PrivateEndpointConnectProperties.
  * privateEndpoint `object`: Private endpoint resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * properties [PrivateEndpointProperties](#privateendpointproperties)
    * id `string`: Resource ID.
    * location `string`: Resource location.
    * name `string`: Resource name.
    * tags `object`: Resource tags.
    * type `string`: Resource type.
  * privateLinkServiceConnectionState [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### PrivateEndpointProperties


### PrivateLinkService
* PrivateLinkService `object`: Private link service resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [PrivateLinkServiceProperties](#privatelinkserviceproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### PrivateLinkServiceConnectionState
* PrivateLinkServiceConnectionState `object`: A collection of information about the state of the connection between service consumer and provider.
  * actionsRequired `string`: A message indicating if changes on the service provider require any updates on the consumer.
  * description `string`: The reason for approval/rejection of the connection.
  * status `string`: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

### PrivateLinkServiceIpConfiguration
* PrivateLinkServiceIpConfiguration `object`: The private link service ip configuration.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of private link service ip configuration.
  * properties [PrivateLinkServiceIpConfigurationProperties](#privatelinkserviceipconfigurationproperties)
  * type `string`: The resource type.
  * id `string`: Resource ID.

### PrivateLinkServiceIpConfigurationProperties
* PrivateLinkServiceIpConfigurationProperties `object`: Properties of private link service IP configuration.
  * primary `boolean`: Whether the ip configuration is primary or not.
  * privateIPAddress `string`: The private IP address of the IP configuration.
  * privateIPAddressVersion `string` (values: IPv4, IPv6): IP address version.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): IP address allocation method.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * subnet `object`: Subnet in a virtual network resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
    * properties [SubnetPropertiesFormat](#subnetpropertiesformat)
    * id `string`: Resource ID.

### PrivateLinkServiceListResult
* PrivateLinkServiceListResult `object`: Response for the ListPrivateLinkService API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of PrivateLinkService resources in a resource group.
    * items [PrivateLinkService](#privatelinkservice)

### PrivateLinkServiceProperties
* PrivateLinkServiceProperties `object`: Properties of the private link service.
  * alias `string`: The alias of the private link service.
  * autoApproval: The auto-approval list of the private link service.
    * subscriptions `array`: The list of subscriptions.
      * items `string`
  * fqdns `array`: The list of Fqdn.
    * items `string`
  * ipConfigurations `array`: An array of private link service IP configurations.
    * items [PrivateLinkServiceIpConfiguration](#privatelinkserviceipconfiguration)
  * loadBalancerFrontendIpConfigurations `array`: An array of references to the load balancer IP configurations.
    * items `object`: Frontend IP address of the load balancer.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
      * properties [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat)
      * type `string`: Type of the resource.
      * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
        * items `string`
      * id `string`: Resource ID.
  * networkInterfaces `array`: An array of references to the network interfaces created for this private link service.
    * items `object`: A network interface in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.
  * privateEndpointConnections `array`: An array of list about connections to the private endpoint.
    * items [PrivateEndpointConnection](#privateendpointconnection)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * visibility: The visibility list of the private link service.
    * subscriptions `array`: The list of subscriptions.
      * items `string`

### PrivateLinkServiceVisibility
* PrivateLinkServiceVisibility `object`: Response for the CheckPrivateLinkServiceVisibility API service call.
  * visible `boolean`: Private Link Service Visibility (True/False).

### ResourceSet
* ResourceSet `object`: The base resource set for visibility and auto-approval.
  * subscriptions `array`: The list of subscriptions.
    * items `string`

### SubnetPropertiesFormat



