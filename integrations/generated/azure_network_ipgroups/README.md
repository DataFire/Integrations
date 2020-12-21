# @datafire/azure_network_ipgroups

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_ipgroups
```
```js
let azure_network_ipgroups = require('@datafire/azure_network_ipgroups').create({
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

### IpGroups_List
Gets all IpGroups in a subscription.


```js
azure_network_ipgroups.IpGroups_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpGroupListResult](#ipgrouplistresult)

### IpGroups_ListByResourceGroup
Gets all IpGroups in a resource group.


```js
azure_network_ipgroups.IpGroups_ListByResourceGroup({
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
* output [IpGroupListResult](#ipgrouplistresult)

### IpGroups_Delete
Deletes the specified ipGroups.


```js
azure_network_ipgroups.IpGroups_Delete({
  "resourceGroupName": "",
  "ipGroupsName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ipGroupsName **required** `string`: The name of the ipGroups.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IpGroups_Get
Gets the specified ipGroups.


```js
azure_network_ipgroups.IpGroups_Get({
  "resourceGroupName": "",
  "ipGroupsName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ipGroupsName **required** `string`: The name of the ipGroups.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource.

#### Output
* output [IpGroup](#ipgroup)

### IpGroups_UpdateGroups
Updates tags of an IpGroups resource.


```js
azure_network_ipgroups.IpGroups_UpdateGroups({
  "resourceGroupName": "",
  "ipGroupsName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ipGroupsName **required** `string`: The name of the ipGroups.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpGroup](#ipgroup)

### IpGroups_CreateOrUpdate
Creates or updates an ipGroups in a specified resource group.


```js
azure_network_ipgroups.IpGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "ipGroupsName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ipGroupsName **required** `string`: The name of the ipGroups.
  * parameters **required** [IpGroup](#ipgroup)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpGroup](#ipgroup)



## Definitions

### IpGroup
* IpGroup `object`: The IpGroups resource information.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [IpGroupPropertiesFormat](#ipgrouppropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### IpGroupListResult
* IpGroupListResult `object`: Response for the ListIpGroups API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: The list of IpGroups information resources.
    * items [IpGroup](#ipgroup)

### IpGroupPropertiesFormat
* IpGroupPropertiesFormat `object`: The IpGroups property information.
  * firewalls `array`: List of references to Azure resources that this IpGroups is associated with.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * ipAddresses `array`: IpAddresses/IpAddressPrefixes in the IpGroups resource.
    * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.


