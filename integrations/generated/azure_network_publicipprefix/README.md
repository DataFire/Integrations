# @datafire/azure_network_publicipprefix

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_publicipprefix
```
```js
let azure_network_publicipprefix = require('@datafire/azure_network_publicipprefix').create({
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

### PublicIPPrefixes_ListAll
Gets all the public IP prefixes in a subscription.


```js
azure_network_publicipprefix.PublicIPPrefixes_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PublicIPPrefixListResult](#publicipprefixlistresult)

### PublicIPPrefixes_List
Gets all public IP prefixes in a resource group.


```js
azure_network_publicipprefix.PublicIPPrefixes_List({
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
* output [PublicIPPrefixListResult](#publicipprefixlistresult)

### PublicIPPrefixes_Delete
Deletes the specified public IP prefix.


```js
azure_network_publicipprefix.PublicIPPrefixes_Delete({
  "resourceGroupName": "",
  "publicIpPrefixName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpPrefixName **required** `string`: The name of the PublicIpPrefix.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PublicIPPrefixes_Get
Gets the specified public IP prefix in a specified resource group.


```js
azure_network_publicipprefix.PublicIPPrefixes_Get({
  "resourceGroupName": "",
  "publicIpPrefixName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpPrefixName **required** `string`: The name of the public IP prefix.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [PublicIPPrefix](#publicipprefix)

### PublicIPPrefixes_UpdateTags
Updates public IP prefix tags.


```js
azure_network_publicipprefix.PublicIPPrefixes_UpdateTags({
  "resourceGroupName": "",
  "publicIpPrefixName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpPrefixName **required** `string`: The name of the public IP prefix.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PublicIPPrefix](#publicipprefix)

### PublicIPPrefixes_CreateOrUpdate
Creates or updates a static or dynamic public IP prefix.


```js
azure_network_publicipprefix.PublicIPPrefixes_CreateOrUpdate({
  "resourceGroupName": "",
  "publicIpPrefixName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * publicIpPrefixName **required** `string`: The name of the public IP prefix.
  * parameters **required** [PublicIPPrefix](#publicipprefix)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PublicIPPrefix](#publicipprefix)



## Definitions

### PublicIPPrefix
* PublicIPPrefix `object`: Public IP prefix resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [PublicIPPrefixPropertiesFormat](#publicipprefixpropertiesformat)
  * sku [PublicIPPrefixSku](#publicipprefixsku)
  * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
    * items `string`
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### PublicIPPrefixListResult
* PublicIPPrefixListResult `object`: Response for ListPublicIpPrefixes API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of public IP prefixes that exists in a resource group.
    * items [PublicIPPrefix](#publicipprefix)

### PublicIPPrefixPropertiesFormat
* PublicIPPrefixPropertiesFormat `object`: Public IP prefix properties.
  * ipPrefix `string`: The allocated Prefix.
  * ipTags `array`: The list of tags associated with the public IP prefix.
    * items `object`: Contains the IpTag associated with the object.
      * ipTagType `string`: The IP tag type. Example: FirstPartyUsage.
      * tag `string`: The value of the IP tag associated with the public IP. Example: SQL.
  * loadBalancerFrontendIpConfiguration `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * prefixLength `integer`: The Length of the Public IP Prefix.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIPAddressVersion `string` (values: IPv4, IPv6): IP address version.
  * publicIPAddresses `array`: The list of all referenced PublicIPAddresses.
    * items [ReferencedPublicIpAddress](#referencedpublicipaddress)
  * resourceGuid `string`: The resource GUID property of the public IP prefix resource.

### PublicIPPrefixSku
* PublicIPPrefixSku `object`: SKU of a public IP prefix.
  * name `string` (values: Standard): Name of a public IP prefix SKU.

### ReferencedPublicIpAddress
* ReferencedPublicIpAddress `object`: Reference to a public IP address.
  * id `string`: The PublicIPAddress Reference.


