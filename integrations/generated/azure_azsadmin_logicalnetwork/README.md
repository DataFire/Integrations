# @datafire/azure_azsadmin_logicalnetwork

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_logicalnetwork
```
```js
let azure_azsadmin_logicalnetwork = require('@datafire/azure_azsadmin_logicalnetwork').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_logicalnetwork.LogicalNetworks_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Logical network operation endpoints and objects.

## Actions

### LogicalNetworks_List
Get a list of all logical networks at a location.


```js
azure_azsadmin_logicalnetwork.LogicalNetworks_List({
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
* output [LogicalNetworkList](#logicalnetworklist)

### LogicalNetworks_Get
Get a logical network.


```js
azure_azsadmin_logicalnetwork.LogicalNetworks_Get({
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

#### Output
* output [LogicalNetwork](#logicalnetwork)



## Definitions

### LogicalNetwork
* LogicalNetwork `object`: This resource represents a logical partition of physical network that is dedicated for a particular purpose.  A logical network comprises of a collection of logical subnets.
  * properties [LogicalNetworkModel](#logicalnetworkmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### LogicalNetworkList
* LogicalNetworkList `object`: A pageable list of logical networks.
  * nextLink `string`: URI to the next page.
  * value `array`: List of logical networks for this page.
    * items [LogicalNetwork](#logicalnetwork)

### LogicalNetworkModel
* LogicalNetworkModel `object`: Properties of a logical network.
  * metadata `object`: Metadata related to this Logical Network.
  * networkVirtualizationEnabled `boolean`: Is Network Virtualization is enabled on this Logical Network.
  * subnets `array`: List of subnets belonging to this Logical Network.
    * items `string`


