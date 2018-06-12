# @datafire/azure_azsadmin_slbmuxinstance

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_slbmuxinstance
```
```js
let azure_azsadmin_slbmuxinstance = require('@datafire/azure_azsadmin_slbmuxinstance').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_slbmuxinstance.SlbMuxInstances_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Software load balancer multiplexer operation endpoints and objects.

## Actions

### SlbMuxInstances_List
Get a list of all software load balancer instances at a location.


```js
azure_azsadmin_slbmuxinstance.SlbMuxInstances_List({
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
* output [SlbMuxInstanceList](#slbmuxinstancelist)

### SlbMuxInstances_Get
Get a software load balancer multiplexer instance.


```js
azure_azsadmin_slbmuxinstance.SlbMuxInstances_Get({
  "subscriptionId": "",
  "location": "",
  "slbMuxInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * slbMuxInstance **required** `string`: Name of a SLB Mux instance.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SlbMuxInstance](#slbmuxinstance)



## Definitions

### SlbMuxInstance
* SlbMuxInstance `object`: This resource represents an SLB MUX (software load balancing multiplexer, which distributes the tenant and tenant customer network traffic).
  * properties [SlbMuxInstanceModel](#slbmuxinstancemodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### SlbMuxInstanceList
* SlbMuxInstanceList `object`: A pageable list of SLB Mux instances.
  * nextLink `string`: URI to the next page.
  * value `array`: List of SLB Mux instances on this page.
    * items [SlbMuxInstance](#slbmuxinstance)

### SlbMuxInstanceModel
* SlbMuxInstanceModel `object`: Properties of a SLB MUX
  * bgpPeers `array`: List of BGP peers.
    * items `string`
  * configurationState `string`: Configuration state.
  * virtualServer `string`: Virtual server.


