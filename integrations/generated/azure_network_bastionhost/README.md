# @datafire/azure_network_bastionhost

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_bastionhost
```
```js
let azure_network_bastionhost = require('@datafire/azure_network_bastionhost').create({
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

### BastionHosts_List
Lists all Bastion Hosts in a subscription.


```js
azure_network_bastionhost.BastionHosts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BastionHostListResult](#bastionhostlistresult)

### BastionHosts_ListByResourceGroup
Lists all Bastion Hosts in a resource group.


```js
azure_network_bastionhost.BastionHosts_ListByResourceGroup({
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
* output [BastionHostListResult](#bastionhostlistresult)

### BastionHosts_Delete
Deletes the specified Bastion Host.


```js
azure_network_bastionhost.BastionHosts_Delete({
  "resourceGroupName": "",
  "bastionHostName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * bastionHostName **required** `string`: The name of the Bastion Host.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### BastionHosts_Get
Gets the specified Bastion Host.


```js
azure_network_bastionhost.BastionHosts_Get({
  "resourceGroupName": "",
  "bastionHostName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * bastionHostName **required** `string`: The name of the Bastion Host.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BastionHost](#bastionhost)

### BastionHosts_CreateOrUpdate
Creates or updates the specified Bastion Host.


```js
azure_network_bastionhost.BastionHosts_CreateOrUpdate({
  "resourceGroupName": "",
  "bastionHostName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * bastionHostName **required** `string`: The name of the Bastion Host.
  * parameters **required** [BastionHost](#bastionhost)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BastionHost](#bastionhost)



## Definitions

### BastionHost
* BastionHost `object`: Bastion Host resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [BastionHostPropertiesFormat](#bastionhostpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### BastionHostIPConfiguration
* BastionHostIPConfiguration `object`: IP configuration of an Bastion Host.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [BastionHostIPConfigurationPropertiesFormat](#bastionhostipconfigurationpropertiesformat)
  * type `string`: Ip configuration type.
  * id `string`: Resource ID.

### BastionHostIPConfigurationPropertiesFormat
* BastionHostIPConfigurationPropertiesFormat `object`: Properties of IP configuration of an Bastion Host.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): IP address allocation method.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIPAddress **required** `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * subnet **required** `object`: Reference to another subresource.
    * id `string`: Resource ID.

### BastionHostListResult
* BastionHostListResult `object`: Response for ListBastionHosts API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of Bastion Hosts in a resource group.
    * items [BastionHost](#bastionhost)

### BastionHostPropertiesFormat
* BastionHostPropertiesFormat `object`: Properties of the Bastion Host.
  * dnsName `string`: FQDN for the endpoint on which bastion host is accessible.
  * ipConfigurations `array`: IP configuration of the Bastion Host resource.
    * items [BastionHostIPConfiguration](#bastionhostipconfiguration)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.


