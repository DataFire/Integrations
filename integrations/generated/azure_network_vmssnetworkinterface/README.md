# @datafire/azure_network_vmssnetworkinterface

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_vmssnetworkinterface
```
```js
let azure_network_vmssnetworkinterface = require('@datafire/azure_network_vmssnetworkinterface').create({
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

### NetworkInterfaces_ListVirtualMachineScaleSetNetworkInterfaces
Gets all network interfaces in a virtual machine scale set.


```js
azure_network_vmssnetworkinterface.NetworkInterfaces_ListVirtualMachineScaleSetNetworkInterfaces({
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
* output `object`: Response for the ListNetworkInterface API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of network interfaces in a resource group.
    * items `object`: A network interface in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### NetworkInterfaces_ListVirtualMachineScaleSetVMNetworkInterfaces
Gets information about all network interfaces in a virtual machine in a virtual machine scale set.


```js
azure_network_vmssnetworkinterface.NetworkInterfaces_ListVirtualMachineScaleSetVMNetworkInterfaces({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the virtual machine scale set.
  * virtualmachineIndex **required** `string`: The virtual machine index.
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Response for the ListNetworkInterface API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of network interfaces in a resource group.
    * items `object`: A network interface in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### NetworkInterfaces_GetVirtualMachineScaleSetNetworkInterface
Get the specified network interface in a virtual machine scale set.


```js
azure_network_vmssnetworkinterface.NetworkInterfaces_GetVirtualMachineScaleSetNetworkInterface({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "networkInterfaceName": "",
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
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output `object`: A network interface in a resource group.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NetworkInterfaces_ListVirtualMachineScaleSetIpConfigurations
Get the specified network interface ip configuration in a virtual machine scale set.


```js
azure_network_vmssnetworkinterface.NetworkInterfaces_ListVirtualMachineScaleSetIpConfigurations({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "virtualmachineIndex": "",
  "networkInterfaceName": "",
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
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output `object`: Response for list ip configurations API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ip configurations.
    * items `object`: IPConfiguration in a network interface.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)
      * id `string`: Resource ID.

### NetworkInterfaces_GetVirtualMachineScaleSetIpConfiguration
Get the specified network interface ip configuration in a virtual machine scale set.


```js
azure_network_vmssnetworkinterface.NetworkInterfaces_GetVirtualMachineScaleSetIpConfiguration({
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
  * networkInterfaceName **required** `string`: The name of the network interface.
  * ipConfigurationName **required** `string`: The name of the ip configuration.
  * api-version **required** `string` (values: 2017-03-30): Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output `object`: IPConfiguration in a network interface.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)
  * id `string`: Resource ID.



## Definitions

### NetworkInterfaceIPConfigurationPropertiesFormat


### NetworkInterfacePropertiesFormat



