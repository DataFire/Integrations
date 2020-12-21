# @datafire/azure_network_availabledelegations

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_availabledelegations
```
```js
let azure_network_availabledelegations = require('@datafire/azure_network_availabledelegations').create({
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

### AvailableDelegations_List
Gets all of the available subnet delegations for this subscription in this region.


```js
azure_network_availabledelegations.AvailableDelegations_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the subnet.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailableDelegationsResult](#availabledelegationsresult)

### AvailableResourceGroupDelegations_List
Gets all of the available subnet delegations for this resource group in this region.


```js
azure_network_availabledelegations.AvailableResourceGroupDelegations_List({
  "location": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [AvailableDelegationsResult](#availabledelegationsresult)



## Definitions

### AvailableDelegation
* AvailableDelegation `object`: The serviceName of an AvailableDelegation indicates a possible delegation for a subnet.
  * actions `array`: Describes the actions permitted to the service upon delegation.
    * items `string`
  * id `string`: A unique identifier of the AvailableDelegation resource.
  * name `string`: The name of the AvailableDelegation resource.
  * serviceName `string`: The name of the service and resource.
  * type `string`: Resource type.

### AvailableDelegationsResult
* AvailableDelegationsResult `object`: An array of available delegations.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: An array of available delegations.
    * items [AvailableDelegation](#availabledelegation)


