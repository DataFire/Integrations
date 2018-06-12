# @datafire/azure_azsadmin_logicalsubnet

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_logicalsubnet
```
```js
let azure_azsadmin_logicalsubnet = require('@datafire/azure_azsadmin_logicalsubnet').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_logicalsubnet.LogicalSubnets_List({
  "subscriptionId": "",
  "location": "",
  "logicalNetwork": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Logical subnet operation endpoints and objects.

## Actions

### LogicalSubnets_List
Get a list of all logical subnets.


```js
azure_azsadmin_logicalsubnet.LogicalSubnets_List({
  "subscriptionId": "",
  "location": "",
  "logicalNetwork": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * logicalNetwork **required** `string`: Name of the logical network.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [LogicalSubnetList](#logicalsubnetlist)

### LogicalSubnets_Get
Get a list of all volumes at a location.


```js
azure_azsadmin_logicalsubnet.LogicalSubnets_Get({
  "subscriptionId": "",
  "location": "",
  "logicalNetwork": "",
  "logicalSubnet": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * logicalNetwork **required** `string`: Name of the logical network.
  * logicalSubnet **required** `string`: Name of the logical subnet.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [LogicalSubnet](#logicalsubnet)



## Definitions

### LogicalSubnet
* LogicalSubnet `object`: This resource represents a Logical Subnet.  A Logical Subnet comprises of subnet/vlan pair.
  * properties [LogicalSubnetModel](#logicalsubnetmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### LogicalSubnetList
* LogicalSubnetList `object`: Pageable list of logical subnets.
  * nextLink `string`: URI to the next page.
  * value `array`: List of logical subnets on this page.
    * items [LogicalSubnet](#logicalsubnet)

### LogicalSubnetModel
* LogicalSubnetModel `object`: Properties of a logical subnet.
  * ipPools `array`: All ip pools which belong to this subnet.
    * items `string`
  * isPublic `boolean`: The visiblity status of the ip pool.  If is true the associated pools are public ip address pools.
  * metadata `object`: Metadata related to this Logical Network.


