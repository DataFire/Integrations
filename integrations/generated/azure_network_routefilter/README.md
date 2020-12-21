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

.then(data => {
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
* PatchRouteFilterRule `object`: Route Filter Rule Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
  * id `string`: Resource ID.

### RouteFilter
* RouteFilter `object`: Route Filter Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [RouteFilterPropertiesFormat](#routefilterpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### RouteFilterListResult
* RouteFilterListResult `object`: Response for the ListRouteFilters API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of route filters in a resource group.
    * items [RouteFilter](#routefilter)

### RouteFilterPropertiesFormat
* RouteFilterPropertiesFormat `object`: Route Filter Resource.
  * ipv6Peerings `array`: A collection of references to express route circuit ipv6 peerings.
    * items `object`: Peering in an ExpressRouteCircuit resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Properties of the express route circuit peering.
        * azureASN `integer`: The Azure ASN.
        * connections `array`: The list of circuit connections associated with Azure Private Peering for this circuit.
          * items `object`: Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
        * expressRouteConnection `object`: The ID of the ExpressRouteConnection.
          * id `string`: The ID of the ExpressRouteConnection.
        * gatewayManagerEtag `string`: The GatewayManager Etag.
        * ipv6PeeringConfig `object`: Contains IPv6 peering config.
          * microsoftPeeringConfig `object`: Specifies the peering configuration.
          * primaryPeerAddressPrefix `string`: The primary address prefix.
          * routeFilter `object`: Reference to another subresource.
          * secondaryPeerAddressPrefix `string`: The secondary address prefix.
          * state `string` (values: Disabled, Enabled): The state of peering.
        * lastModifiedBy `string`: Who was the last to modify the peering.
        * microsoftPeeringConfig `object`: Specifies the peering configuration.
          * advertisedCommunities `array`: The communities of bgp peering. Specified for microsoft peering.
          * advertisedPublicPrefixes `array`: The reference of AdvertisedPublicPrefixes.
          * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): The advertised public prefix state of the Peering resource.
          * customerASN `integer`: The CustomerASN of the peering.
          * legacyMode `integer`: The legacy mode of the peering.
          * routingRegistryName `string`: The RoutingRegistryName of the configuration.
        * peerASN `integer`: The peer ASN.
        * peeredConnections `array`: The list of peered circuit connections associated with Azure Private Peering for this circuit.
          * items `object`: Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
        * peeringType `string` (values: AzurePublicPeering, AzurePrivatePeering, MicrosoftPeering): The peering type.
        * primaryAzurePort `string`: The primary port.
        * primaryPeerAddressPrefix `string`: The primary address prefix.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * routeFilter `object`: Reference to another subresource.
          * id `string`: Resource ID.
        * secondaryAzurePort `string`: The secondary port.
        * secondaryPeerAddressPrefix `string`: The secondary address prefix.
        * sharedKey `string`: The shared key.
        * state `string` (values: Disabled, Enabled): The state of peering.
        * stats `object`: Contains stats associated with the peering.
          * primarybytesIn `integer`: The Primary BytesIn of the peering.
          * primarybytesOut `integer`: The primary BytesOut of the peering.
          * secondarybytesIn `integer`: The secondary BytesIn of the peering.
          * secondarybytesOut `integer`: The secondary BytesOut of the peering.
        * vlanId `integer`: The VLAN ID.
      * type `string`: Type of the resource.
      * id `string`: Resource ID.
  * peerings `array`: A collection of references to express route circuit peerings.
    * items `object`: Peering in an ExpressRouteCircuit resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Properties of the express route circuit peering.
        * azureASN `integer`: The Azure ASN.
        * connections `array`: The list of circuit connections associated with Azure Private Peering for this circuit.
          * items `object`: Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
        * expressRouteConnection `object`: The ID of the ExpressRouteConnection.
          * id `string`: The ID of the ExpressRouteConnection.
        * gatewayManagerEtag `string`: The GatewayManager Etag.
        * ipv6PeeringConfig `object`: Contains IPv6 peering config.
          * microsoftPeeringConfig `object`: Specifies the peering configuration.
          * primaryPeerAddressPrefix `string`: The primary address prefix.
          * routeFilter `object`: Reference to another subresource.
          * secondaryPeerAddressPrefix `string`: The secondary address prefix.
          * state `string` (values: Disabled, Enabled): The state of peering.
        * lastModifiedBy `string`: Who was the last to modify the peering.
        * microsoftPeeringConfig `object`: Specifies the peering configuration.
          * advertisedCommunities `array`: The communities of bgp peering. Specified for microsoft peering.
          * advertisedPublicPrefixes `array`: The reference of AdvertisedPublicPrefixes.
          * advertisedPublicPrefixesState `string` (values: NotConfigured, Configuring, Configured, ValidationNeeded): The advertised public prefix state of the Peering resource.
          * customerASN `integer`: The CustomerASN of the peering.
          * legacyMode `integer`: The legacy mode of the peering.
          * routingRegistryName `string`: The RoutingRegistryName of the configuration.
        * peerASN `integer`: The peer ASN.
        * peeredConnections `array`: The list of peered circuit connections associated with Azure Private Peering for this circuit.
          * items `object`: Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
        * peeringType `string` (values: AzurePublicPeering, AzurePrivatePeering, MicrosoftPeering): The peering type.
        * primaryAzurePort `string`: The primary port.
        * primaryPeerAddressPrefix `string`: The primary address prefix.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * routeFilter `object`: Reference to another subresource.
          * id `string`: Resource ID.
        * secondaryAzurePort `string`: The secondary port.
        * secondaryPeerAddressPrefix `string`: The secondary address prefix.
        * sharedKey `string`: The shared key.
        * state `string` (values: Disabled, Enabled): The state of peering.
        * stats `object`: Contains stats associated with the peering.
          * primarybytesIn `integer`: The Primary BytesIn of the peering.
          * primarybytesOut `integer`: The primary BytesOut of the peering.
          * secondarybytesIn `integer`: The secondary BytesIn of the peering.
          * secondarybytesOut `integer`: The secondary BytesOut of the peering.
        * vlanId `integer`: The VLAN ID.
      * type `string`: Type of the resource.
      * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * rules `array`: Collection of RouteFilterRules contained within a route filter.
    * items [RouteFilterRule](#routefilterrule)

### RouteFilterRule
* RouteFilterRule `object`: Route Filter Rule Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * location `string`: Resource location.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [RouteFilterRulePropertiesFormat](#routefilterrulepropertiesformat)
  * id `string`: Resource ID.

### RouteFilterRuleListResult
* RouteFilterRuleListResult `object`: Response for the ListRouteFilterRules API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of RouteFilterRules in a resource group.
    * items [RouteFilterRule](#routefilterrule)

### RouteFilterRulePropertiesFormat
* RouteFilterRulePropertiesFormat `object`: Route Filter Rule Resource.
  * access **required** `string` (values: Allow, Deny): Access to be allowed or denied.
  * communities **required** `array`: The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
    * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * routeFilterRuleType **required** `string` (values: Community): The rule type of the rule.


