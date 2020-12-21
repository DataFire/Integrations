# @datafire/azure_azsadmin_ippool

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_ippool
```
```js
let azure_azsadmin_ippool = require('@datafire/azure_azsadmin_ippool').create({
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

IP pool operation endpoints and objects.

## Actions

### IpPools_List
Returns a list of all IP pools at a certain location.


```js
azure_azsadmin_ippool.IpPools_List({
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
* output [IpPoolList](#ippoollist)

### IpPools_Get
Return the requested IP pool.


```js
azure_azsadmin_ippool.IpPools_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "ipPool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * ipPool **required** `string`: IP pool name.
  * api-version **required** `string`: Client API Version.

#### Output
* output [IpPool](#ippool)

### IpPools_CreateOrUpdate
Create an IP pool.  Once created an IP pool cannot be deleted.


```js
azure_azsadmin_ippool.IpPools_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "ipPool": "",
  "api-version": "",
  "pool": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * ipPool **required** `string`: IP pool name.
  * api-version **required** `string`: Client API Version.
  * pool **required** [IpPool](#ippool)

#### Output
* output [IpPool](#ippool)



## Definitions

### IpPool
* IpPool `object`: This resource defines the range of IP addresses from which addresses are  allocated for nodes within a subnet.
  * properties [IpPoolModel](#ippoolmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### IpPoolList
* IpPoolList `object`: Pageable list of IP pools.
  * nextLink `string`: URI to the next page.
  * value `array`: List of IP pools.
    * items [IpPool](#ippool)

### IpPoolModel
* IpPoolModel `object`: Properties of an IpPool.
  * addressPrefix `string`: The address prefix.
  * endIpAddress `string`: The ending IP address.
  * numberOfAllocatedIpAddresses `integer`: The number of currently allocated IP addresses.
  * numberOfIpAddresses `integer`: The total number of IP addresses.
  * numberOfIpAddressesInTransition `integer`: The current number of IP addresses in transition.
  * startIpAddress `string`: The starting IP address.


