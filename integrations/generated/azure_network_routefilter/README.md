# @datafire/azure_network_routefilter

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_routefilter
```
```js
let azure_network_routefilter = require('@datafire/azure_network_routefilter').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_network_routefilter.RouteFilters_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### RouteFilters_List
Gets all route filters in a subscription.


```js
azure_network_routefilter.RouteFilters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilterListResult](#routefilterlistresult)

### RouteFilters_ListByResourceGroup
Gets all route filters in a resource group.


```js
azure_network_routefilter.RouteFilters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilterListResult](#routefilterlistresult)

### RouteFilters_Delete
Deletes the specified route filter.


```js
azure_network_routefilter.RouteFilters_Delete({
  "resourceGroupName": "",
  "routeFilterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RouteFilters_Get
Gets the specified route filter.


```js
azure_network_routefilter.RouteFilters_Get({
  "resourceGroupName": "",
  "routeFilterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced express route bgp peering resources.

#### Output
* output [RouteFilter](#routefilter)

### RouteFilters_Update
Updates a route filter in a specified resource group.


```js
azure_network_routefilter.RouteFilters_Update({
  "resourceGroupName": "",
  "routeFilterName": "",
  "routeFilterParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * routeFilterParameters **required** [PatchRouteFilter](#patchroutefilter)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilter](#routefilter)

### RouteFilters_CreateOrUpdate
Creates or updates a route filter in a specified resource group.


```js
azure_network_routefilter.RouteFilters_CreateOrUpdate({
  "resourceGroupName": "",
  "routeFilterName": "",
  "routeFilterParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * routeFilterParameters **required** [RouteFilter](#routefilter)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilter](#routefilter)

### RouteFilterRules_ListByRouteFilter
Gets all RouteFilterRules in a route filter.


```js
azure_network_routefilter.RouteFilterRules_ListByRouteFilter({
  "resourceGroupName": "",
  "routeFilterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilterRuleListResult](#routefilterrulelistresult)

### RouteFilterRules_Delete
Deletes the specified rule from a route filter.


```js
azure_network_routefilter.RouteFilterRules_Delete({
  "resourceGroupName": "",
  "routeFilterName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RouteFilterRules_Get
Gets the specified rule from a route filter.


```js
azure_network_routefilter.RouteFilterRules_Get({
  "resourceGroupName": "",
  "routeFilterName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilterRule](#routefilterrule)

### RouteFilterRules_Update
Updates a route in the specified route filter.


```js
azure_network_routefilter.RouteFilterRules_Update({
  "resourceGroupName": "",
  "routeFilterName": "",
  "ruleName": "",
  "routeFilterRuleParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * ruleName **required** `string`: The name of the route filter rule.
  * routeFilterRuleParameters **required** [PatchRouteFilterRule](#patchroutefilterrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilterRule](#routefilterrule)

### RouteFilterRules_CreateOrUpdate
Creates or updates a route in the specified route filter.


```js
azure_network_routefilter.RouteFilterRules_CreateOrUpdate({
  "resourceGroupName": "",
  "routeFilterName": "",
  "ruleName": "",
  "routeFilterRuleParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeFilterName **required** `string`: The name of the route filter.
  * ruleName **required** `string`: The name of the route filter rule.
  * routeFilterRuleParameters **required** [RouteFilterRule](#routefilterrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteFilterRule](#routefilterrule)



## Definitions

### PatchRouteFilter
* PatchRouteFilter `object`: Route Filter Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
  * tags `object`: Resource tags.
  * type `string`: Resource type.
  * id `string`: Resource ID.

### PatchRouteFilterRule
* PatchRouteFilterRule `object`: Route Filter Rule Resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
  * id `string`: Resource ID.

### RouteFilter
* RouteFilter `object`: Route Filter Resource.
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * properties [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### RouteFilterListResult
* RouteFilterListResult `object`: Response for the ListRouteFilters API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Gets a list of route filters in a resource group.
    * items [RouteFilter](#routefilter)

### RouteFilterPropertiesFormat
* RouteFilterPropertiesFormat `object`: Route Filter Resource
  * peerings `array`: A collection of references to express route circuit peerings.
    * items [./expressRouteCircuit.jsonExpressRouteCircuitPeering](#./expressroutecircuit.jsonexpressroutecircuitpeering)
  * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
  * rules `array`: Collection of RouteFilterRules contained within a route filter.
    * items `object`: Route Filter Rule Resource
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * location `string`: Resource location.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Route Filter Rule Resource
        * access **required** `string` (values: Allow, Deny): The access type of the rule. Valid values are: 'Allow', 'Deny'
        * communities **required** `array`: The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
          * items `string`
        * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
        * routeFilterRuleType **required** `string` (values: Community): The rule type of the rule. Valid value is: 'Community'
      * id `string`: Resource ID.

### RouteFilterRule
* RouteFilterRule `object`: Route Filter Rule Resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * location `string`: Resource location.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Route Filter Rule Resource
    * access **required** `string` (values: Allow, Deny): The access type of the rule. Valid values are: 'Allow', 'Deny'
    * communities **required** `array`: The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
      * items `string`
    * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
    * routeFilterRuleType **required** `string` (values: Community): The rule type of the rule. Valid value is: 'Community'
  * id `string`: Resource ID.

### RouteFilterRuleListResult
* RouteFilterRuleListResult `object`: Response for the ListRouteFilterRules API service call
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Gets a list of RouteFilterRules in a resource group.
    * items [RouteFilterRule](#routefilterrule)

### RouteFilterRulePropertiesFormat
* RouteFilterRulePropertiesFormat `object`: Route Filter Rule Resource
  * access **required** `string` (values: Allow, Deny): The access type of the rule. Valid values are: 'Allow', 'Deny'
  * communities **required** `array`: The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
    * items `string`
  * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
  * routeFilterRuleType **required** `string` (values: Community): The rule type of the rule. Valid value is: 'Community'


