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

.then(data => {
  console.log(data);
});
```

## Description

Logical subnet operation endpoints and objects.

## Actions

### LogicalSubnets_List
Returns a list of all logical subnets.


```js
azure_azsadmin_logicalsubnet.LogicalSubnets_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "logicalNetwork": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * logicalNetwork **required** `string`: Name of the logical network.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [LogicalSubnetList](#logicalsubnetlist)

### LogicalSubnets_Get
Returns the requested logical subnet.


```js
azure_azsadmin_logicalsubnet.LogicalSubnets_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "logicalNetwork": "",
  "logicalSubnet": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * logicalNetwork **required** `string`: Name of the logical network.
  * logicalSubnet **required** `string`: Name of the logical subnet.
  * api-version **required** `string`: Client API Version.

#### Output
* output [LogicalSubnet](#logicalsubnet)



## Definitions

### LogicalSubnet
* LogicalSubnet `object`: This resource represents a logical subnet.  A logical subnet is made of a subnet-vlan pair.
  * properties [LogicalSubnetModel](#logicalsubnetmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### LogicalSubnetList
* LogicalSubnetList `object`: Pageable list of logical subnets.
  * nextLink `string`: URI to the next page.
  * value `array`: List of logical subnets.
    * items [LogicalSubnet](#logicalsubnet)

### LogicalSubnetModel
* LogicalSubnetModel `object`: Properties of a logical subnet.
  * ipPools `array`: All IP pools which belong to this subnet.
    * items `string`
  * isPublic `boolean`: The visibility status of the IP pool.  If is true the associated pools are public IP address pools.
  * metadata `object`: Metadata related to the logical network.


