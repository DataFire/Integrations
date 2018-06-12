# @datafire/azure_azsadmin_edgegateway

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_edgegateway
```
```js
let azure_azsadmin_edgegateway = require('@datafire/azure_azsadmin_edgegateway').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_edgegateway.EdgeGateways_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Edge gateway operation endpoints and objects.

## Actions

### EdgeGateways_List
Get a list of all edge gateways at a certain location.


```js
azure_azsadmin_edgegateway.EdgeGateways_List({
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
* output [EdgeGatewayList](#edgegatewaylist)

### EdgeGateways_Get
Get an edge gateway by name.


```js
azure_azsadmin_edgegateway.EdgeGateways_Get({
  "subscriptionId": "",
  "location": "",
  "edgeGateway": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * edgeGateway **required** `string`: name of the edge gateway.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [EdgeGateway](#edgegateway)



## Definitions

### EdgeGateway
* EdgeGateway `object`: This resource represents a gateway, which provides the configuration needed to provide gateway services to virtual networks.
  * properties [EdgeGatewayModel](#edgegatewaymodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### EdgeGatewayList
* EdgeGatewayList `object`: Pageable list of edge gateways.
  * nextLink `string`: URI to the next page.
  * value `array`: Array of edge gateways.
    * items [EdgeGateway](#edgegateway)

### EdgeGatewayModel
* EdgeGatewayModel `object`: Model which holds information related to edge gateways.
  * availableCapacity `integer`: The available network capacity.
  * numberOfConnections `integer`: The current number of connections.
  * state `string`: The current state of the edge gateway.
  * totalCapacity `integer`: The total network capacity.


