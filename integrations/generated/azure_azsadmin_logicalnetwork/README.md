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

.then(data => {
  console.log(data);
});
```

## Description

Logical network operation endpoints and objects.

## Actions

### LogicalNetworks_List
Returns a list of all logical networks at a location.


```js
azure_azsadmin_logicalnetwork.LogicalNetworks_List({
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
* output [LogicalNetworkList](#logicalnetworklist)

### LogicalNetworks_Get
Returns the requested logical network.


```js
azure_azsadmin_logicalnetwork.LogicalNetworks_Get({
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

#### Output
* output [LogicalNetwork](#logicalnetwork)



## Definitions

### LogicalNetwork
* LogicalNetwork `object`: This resource represents a logical partition of physical network that is dedicated for a particular purpose.  A logical network comprises a collection of logical subnets.
  * properties [LogicalNetworkModel](#logicalnetworkmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### LogicalNetworkList
* LogicalNetworkList `object`: A pageable list of logical networks.
  * nextLink `string`: URI to the next page.
  * value `array`: List of logical networks.
    * items [LogicalNetwork](#logicalnetwork)

### LogicalNetworkModel
* LogicalNetworkModel `object`: Properties of a logical network.
  * metadata `object`: Metadata related to the logical network.
  * networkVirtualizationEnabled `boolean`: Flag to indicate that the network virtualization is enabled on the logical network.
  * subnets `array`: List of subnets belonging to the logical network.
    * items `string`


