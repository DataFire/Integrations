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

azure_azsadmin_edgegatewaypool.EdgeGatewayPools_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Edge gateway pool operation endpoints and objects.

## Actions

### EdgeGatewayPools_List
Get a list of all edge gateway pools at a location.


```js
azure_azsadmin_edgegatewaypool.EdgeGatewayPools_List({
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
* output [EdgeGatewayPoolList](#edgegatewaypoollist)

### EdgeGatewayPools_Get
Get an EdgeGatewayPool.


```js
azure_azsadmin_edgegatewaypool.EdgeGatewayPools_Get({
  "subscriptionId": "",
  "location": "",
  "edgeGatewayPool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * edgeGatewayPool **required** `string`: Name of the edge gateway pool.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [EdgeGatewayPool](#edgegatewaypool)



## Definitions

### EdgeGatewayPool
* EdgeGatewayPool `object`: This resource represents an edge gateway pool, which contains an array of gateways.
  * properties [EdgeGatewayPoolModel](#edgegatewaypoolmodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### EdgeGatewayPoolList
* EdgeGatewayPoolList `object`: A pageable list of edge gateway pools.
  * nextLink `string`: The URI to the next page.
  * value `array`: The array of edge gateway pools in this page.
    * items [EdgeGatewayPool](#edgegatewaypool)

### EdgeGatewayPoolModel
* EdgeGatewayPoolModel `object`: A model holding all properties of an edge gateway pool.
  * edgeGateways `array`: List of the edge gateways in this pool.
    * items `string`
  * gatewayCapacityKiloBitsPerSecond `integer`: Gateway capacity in kilobits per second.
  * gatewayType `string`: The gateway type (S2sIPsec, S2sGre, etc).
  * greVipSubnet `string`: The GRE VIP subnet.
  * numberOfGateways `integer`: The number of gateways in the pool.
  * publicIpAddress `string`: The public IP address.
  * redundantGatewayCount `integer`: The number of redundant gateways.


