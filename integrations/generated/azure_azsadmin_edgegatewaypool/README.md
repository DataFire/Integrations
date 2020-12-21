# @datafire/azure_azsadmin_edgegatewaypool

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_edgegatewaypool
```
```js
let azure_azsadmin_edgegatewaypool = require('@datafire/azure_azsadmin_edgegatewaypool').create({
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

Edge gateway pool operation endpoints and objects.

## Actions

### EdgeGatewayPools_List
Returns a list of all edge gateway pool objects at a location.


```js
azure_azsadmin_edgegatewaypool.EdgeGatewayPools_List({
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
* output [EdgeGatewayPoolList](#edgegatewaypoollist)

### EdgeGatewayPools_Get
Returns the requested edge gateway pool object.


```js
azure_azsadmin_edgegatewaypool.EdgeGatewayPools_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "edgeGatewayPool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * edgeGatewayPool **required** `string`: Name of the edge gateway pool.
  * api-version **required** `string`: Client API Version.

#### Output
* output [EdgeGatewayPool](#edgegatewaypool)



## Definitions

### EdgeGatewayPool
* EdgeGatewayPool `object`: This object represents an edge gateway pool, which contains a list of gateways.
  * properties [EdgeGatewayPoolModel](#edgegatewaypoolmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### EdgeGatewayPoolList
* EdgeGatewayPoolList `object`: A pageable list of edge gateway pools objects.
  * nextLink `string`: The URI to the next page.
  * value `array`: List of edge gateway pool objects.
    * items [EdgeGatewayPool](#edgegatewaypool)

### EdgeGatewayPoolModel
* EdgeGatewayPoolModel `object`: An object that contains the properties of an edge gateway pool.
  * edgeGateways `array`: List of the edge gateways in the pool.
    * items `string`
  * gatewayCapacityKiloBitsPerSecond `integer`: Gateway capacity in kilobits per second.
  * gatewayType `string`: The gateway type, for example, S2sIPsec, S2sGre, and so on.
  * greVipSubnet `string`: The GRE VIP subnet.
  * numberOfGateways `integer`: The number of gateways in the pool.
  * publicIpAddress `string`: The public IP address.
  * redundantGatewayCount `integer`: The number of redundant gateways.


