# @datafire/azure_network_vmsspublicipaddress

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_vmsspublicipaddress
```
```js
let azure_network_vmsspublicipaddress = require('@datafire/azure_network_vmsspublicipaddress').create({
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

### PublicIPAddresses_ListVirtualMachineScaleSetPublicIPAddresses
Gets information about all public IP addresses on a virtual machine scale set level.


```js
azure_network_vmsspublicipaddress.PublicIPAddresses_ListVirtualMachineScaleSetPublicIPAddresses({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Response for ListPublicIpAddresses API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of public IP addresses that exists in a resource group.
    * items `object`: Public IP address resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
      * sku `object`: SKU of a public IP address.
        * name `string` (values: Basic, Standard): Name of a public IP address SKU.
      * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
        * items `string`
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### PublicIPAddresses_ListVirtualMachineScaleSetVMPublicIPAddresses
Gets information about all public IP addresses in a virtual machine IP configuration in a virtual machine scale set.


```js
azure_network_vmsspublicipaddress.PublicIPAddresses_ListVirtualMachineScaleSetVMPublicIPAddresses({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "networkInterfaceName": "",
  "ipConfigurationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * virtualmachineIndex **required** `string`: The virtual machine index.
  * networkInterfaceName **required** `string`: The network interface name.
  * ipConfigurationName **required** `string`: The IP configuration name.
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Response for ListPublicIpAddresses API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of public IP addresses that exists in a resource group.
    * items `object`: Public IP address resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
      * sku `object`: SKU of a public IP address.
        * name `string` (values: Basic, Standard): Name of a public IP address SKU.
      * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
        * items `string`
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### PublicIPAddresses_GetVirtualMachineScaleSetPublicIPAddress
Get the specified public IP address in a virtual machine scale set.


```js
azure_network_vmsspublicipaddress.PublicIPAddresses_GetVirtualMachineScaleSetPublicIPAddress({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "networkInterfaceName": "",
  "ipConfigurationName": "",
  "publicIpAddressName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * virtualmachineIndex **required** `string`: The virtual machine index.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * ipConfigurationName **required** `string`: The name of the IP configuration.
  * publicIpAddressName **required** `string`: The name of the public IP Address.
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output `object`: Public IP address resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
  * sku `object`: SKU of a public IP address.
    * name `string` (values: Basic, Standard): Name of a public IP address SKU.
  * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
    * items `string`
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.



## Definitions

### PublicIPAddressPropertiesFormat



