# @datafire/azure_azsadmin_macaddresspool

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_macaddresspool
```
```js
let azure_azsadmin_macaddresspool = require('@datafire/azure_azsadmin_macaddresspool').create({
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

MAC address pool operation endpoints and objects.

## Actions

### MacAddressPools_List
Returns a list of all MAC address pools at a location.


```js
azure_azsadmin_macaddresspool.MacAddressPools_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [MacAddressPoolList](#macaddresspoollist)

### MacAddressPools_Get
Returns the requested MAC address pool.


```js
azure_azsadmin_macaddresspool.MacAddressPools_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "macAddressPool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * macAddressPool **required** `string`: Name of the MAC address pool.
  * api-version **required** `string`: Client API Version.

#### Output
* output [MacAddressPool](#macaddresspool)



## Definitions

### MacAddressPool
* MacAddressPool `object`: This resource represents a MAC address pool.  The default MAC address pools are used if you set the MAC address type for a virtual machine to 'Static'.  If the virtual machine setting is 'Dynamic', the hypervisor assigns the MAC address.
  * properties [MacAddressPoolModel](#macaddresspoolmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### MacAddressPoolList
* MacAddressPoolList `object`: A pageable list of MAC address pools.
  * nextLink `string`: URI to the next page.
  * value `array`: List of MAC address pools.
    * items [MacAddressPool](#macaddresspool)

### MacAddressPoolModel
* MacAddressPoolModel `object`: Properties of a MAC address pool.
  * endMacAddress `string`: Ending MAC address.
  * metadata `object`: Metadata related to the MAC pool.
  * numberOfAllocatedMacAddresses `integer`: Number of MAC addresses allocated.
  * numberOfAvailableMacAddresses `integer`: Number of MAC addresses available.
  * startMacAddress `string`: Starting MAC address.


