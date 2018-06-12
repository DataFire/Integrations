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

azure_azsadmin_ippool.IpPools_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Ip pool operation endpoints and objects.

## Actions

### IpPools_List
Get a list of all ip pools at a certain location.


```js
azure_azsadmin_ippool.IpPools_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [IpPoolList](#ippoollist)

### IpPools_Get
Get an ip pool.


```js
azure_azsadmin_ippool.IpPools_Get({
  "subscriptionId": "",
  "location": "",
  "ipPool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * ipPool **required** `string`: Ip pool name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [IpPool](#ippool)

### IpPools_Create
Create an ip pool.


```js
azure_azsadmin_ippool.IpPools_Create({
  "subscriptionId": "",
  "location": "",
  "ipPool": "",
  "api-version": "",
  "pool": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * ipPool **required** `string`: Ip pool name.
  * api-version **required** `string`: Client Api Version.
  * pool **required** [IpPool](#ippool)

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.



## Definitions

### IpPool
* IpPool `object`: This resource defines the range of IP addresses from which addresses are  allocated for nodes within a subnet.
  * properties [IpPoolModel](#ippoolmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### IpPoolList
* IpPoolList `object`: Pageable list of ip pools.
  * nextLink `string`: URI to the next page.
  * value `array`: List of ip pools for this page.
    * items [IpPool](#ippool)

### IpPoolModel
* IpPoolModel `object`: Properties of an IpPool.
  * addressPrefix `string`: The address prefix.
  * endIpAddress `string`: The ending Ip address.
  * numberOfAllocatedIpAddresses `integer`: The number of currently allocated ip addresses.
  * numberOfIpAddresses `integer`: The total number of ip addresses.
  * numberOfIpAddressesInTransition `integer`: The current number of ip addresses in transition.
  * startIpAddress `string`: The starting Ip address.


