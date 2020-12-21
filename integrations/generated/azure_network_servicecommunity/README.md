# @datafire/azure_network_servicecommunity

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_servicecommunity
```
```js
let azure_network_servicecommunity = require('@datafire/azure_network_servicecommunity').create({
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

### BgpServiceCommunities_List
Gets all the available bgp service communities.


```js
azure_network_servicecommunity.BgpServiceCommunities_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BgpServiceCommunityListResult](#bgpservicecommunitylistresult)



## Definitions

### BGPCommunity
* BGPCommunity `object`: Contains bgp community information offered in Service Community resources.
  * communityName `string`: The name of the bgp community. e.g. Skype.
  * communityPrefixes `array`: The prefixes that the bgp community contains.
    * items `string`
  * communityValue `string`: The value of the bgp community. For more information: https://docs.microsoft.com/en-us/azure/expressroute/expressroute-routing.
  * isAuthorizedToUse `boolean`: Customer is authorized to use bgp community or not.
  * serviceGroup `string`: The service group of the bgp community contains.
  * serviceSupportedRegion `string`: The region which the service support. e.g. For O365, region is Global.

### BgpServiceCommunity
* BgpServiceCommunity `object`: Service Community Properties.
  * properties [BgpServiceCommunityPropertiesFormat](#bgpservicecommunitypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### BgpServiceCommunityListResult
* BgpServiceCommunityListResult `object`: Response for the ListServiceCommunity API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of service community resources.
    * items [BgpServiceCommunity](#bgpservicecommunity)

### BgpServiceCommunityPropertiesFormat
* BgpServiceCommunityPropertiesFormat `object`: Properties of Service Community.
  * bgpCommunities `array`: A list of bgp communities.
    * items [BGPCommunity](#bgpcommunity)
  * serviceName `string`: The name of the bgp community. e.g. Skype.


