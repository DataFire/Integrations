# @datafire/azure_network_networkprofile

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_networkprofile
```
```js
let azure_network_networkprofile = require('@datafire/azure_network_networkprofile').create({
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

### NetworkProfiles_ListAll
Gets all the network profiles in a subscription.


```js
azure_network_networkprofile.NetworkProfiles_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkProfileListResult](#networkprofilelistresult)

### NetworkProfiles_List
Gets all network profiles in a resource group.


```js
azure_network_networkprofile.NetworkProfiles_List({
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
* output [NetworkProfileListResult](#networkprofilelistresult)

### NetworkProfiles_Delete
Deletes the specified network profile.


```js
azure_network_networkprofile.NetworkProfiles_Delete({
  "resourceGroupName": "",
  "networkProfileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkProfileName **required** `string`: The name of the NetworkProfile.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkProfiles_Get
Gets the specified network profile in a specified resource group.


```js
azure_network_networkprofile.NetworkProfiles_Get({
  "resourceGroupName": "",
  "networkProfileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkProfileName **required** `string`: The name of the public IP prefix.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [NetworkProfile](#networkprofile)

### NetworkProfiles_UpdateTags
Updates network profile tags.


```js
azure_network_networkprofile.NetworkProfiles_UpdateTags({
  "resourceGroupName": "",
  "networkProfileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkProfileName **required** `string`: The name of the network profile.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkProfile](#networkprofile)

### NetworkProfiles_CreateOrUpdate
Creates or updates a network profile.


```js
azure_network_networkprofile.NetworkProfiles_CreateOrUpdate({
  "resourceGroupName": "",
  "networkProfileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkProfileName **required** `string`: The name of the network profile.
  * parameters **required** [NetworkProfile](#networkprofile)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkProfile](#networkprofile)



## Definitions

### Container
* Container `object`: Reference to container resource in remote resource provider.
  * id `string`: Resource ID.

### ContainerNetworkInterface
* ContainerNetworkInterface `object`: Container network interface child resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource. This name can be used to access the resource.
  * properties [ContainerNetworkInterfacePropertiesFormat](#containernetworkinterfacepropertiesformat)
  * type `string`: Sub Resource type.
  * id `string`: Resource ID.

### ContainerNetworkInterfaceConfiguration
* ContainerNetworkInterfaceConfiguration `object`: Container network interface configuration child resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource. This name can be used to access the resource.
  * properties [ContainerNetworkInterfaceConfigurationPropertiesFormat](#containernetworkinterfaceconfigurationpropertiesformat)
  * type `string`: Sub Resource type.
  * id `string`: Resource ID.

### ContainerNetworkInterfaceConfigurationPropertiesFormat
* ContainerNetworkInterfaceConfigurationPropertiesFormat `object`: Container network interface configuration properties.
  * containerNetworkInterfaces `array`: A list of container network interfaces created from this container network interface configuration.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * ipConfigurations `array`: A list of ip configurations of the container network interface configuration.
    * items [IPConfigurationProfile](#ipconfigurationprofile)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### ContainerNetworkInterfaceIpConfiguration
* ContainerNetworkInterfaceIpConfiguration `object`: The ip configuration for a container network interface.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource. This name can be used to access the resource.
  * properties [ContainerNetworkInterfaceIpConfigurationPropertiesFormat](#containernetworkinterfaceipconfigurationpropertiesformat)
  * type `string`: Sub Resource type.

### ContainerNetworkInterfaceIpConfigurationPropertiesFormat
* ContainerNetworkInterfaceIpConfigurationPropertiesFormat `object`: Properties of the container network interface IP configuration.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### ContainerNetworkInterfacePropertiesFormat
* ContainerNetworkInterfacePropertiesFormat `object`: Properties of container network interface.
  * container [Container](#container)
  * containerNetworkInterfaceConfiguration [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)
  * ipConfigurations `array`: Reference to the ip configuration on this container nic.
    * items [ContainerNetworkInterfaceIpConfiguration](#containernetworkinterfaceipconfiguration)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### IPConfigurationProfile
* IPConfigurationProfile `object`: IP configuration profile child resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource. This name can be used to access the resource.
  * properties [IPConfigurationProfilePropertiesFormat](#ipconfigurationprofilepropertiesformat)
  * type `string`: Sub Resource type.
  * id `string`: Resource ID.

### IPConfigurationProfilePropertiesFormat
* IPConfigurationProfilePropertiesFormat `object`: IP configuration profile properties.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * subnet [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)

### NetworkProfile
* NetworkProfile `object`: Network profile resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [NetworkProfilePropertiesFormat](#networkprofilepropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NetworkProfileListResult
* NetworkProfileListResult `object`: Response for ListNetworkProfiles API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of network profiles that exist in a resource group.
    * items [NetworkProfile](#networkprofile)

### NetworkProfilePropertiesFormat
* NetworkProfilePropertiesFormat `object`: Network profile properties.
  * containerNetworkInterfaceConfigurations `array`: List of chid container network interface configurations.
    * items [ContainerNetworkInterfaceConfiguration](#containernetworkinterfaceconfiguration)
  * containerNetworkInterfaces `array`: List of child container network interfaces.
    * items [ContainerNetworkInterface](#containernetworkinterface)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the network profile resource.


