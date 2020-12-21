# @datafire/azure_azsadmin_loadbalancers

Client library for NetworkAdminManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_loadbalancers
```
```js
let azure_azsadmin_loadbalancers = require('@datafire/azure_azsadmin_loadbalancers').create({
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

Load balancer admin operation endpoints and objects.

## Actions

### LoadBalancers_List
Get a list of all load balancers.


```js
azure_azsadmin_loadbalancers.LoadBalancers_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.
  * $orderBy `string`: OData orderBy parameter.
  * $top `string`: OData top parameter.
  * $skip `string`: OData skip parameter.
  * $inlineCount `string`: OData inline count parameter.

#### Output
* output [LoadBalancerList](#loadbalancerlist)



## Definitions

### LoadBalancer
* LoadBalancer `object`: Representation of a load balancer.
  * properties [LoadBalancerProperty](#loadbalancerproperty)
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### LoadBalancerList
* LoadBalancerList `object`: Pageable list of load balancers.
  * nextLink `string`: URI to the next page.
  * value `array`: List of load balancers for this page.
    * items [LoadBalancer](#loadbalancer)

### LoadBalancerProperty
* LoadBalancerProperty `object`: Properties of a load balancer.
  * publicIpAddresses `array`: List of public IP addresses.
    * items `string`
  * provisioningState `string`: The provisioning state.
  * subscriptionId `string`: The subscription ID.
  * tenantResourceUri `string`: The tenant resource URI.


