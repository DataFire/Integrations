# @datafire/azure_network_availableservicealiases

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_availableservicealiases
```
```js
let azure_network_availableservicealiases = require('@datafire/azure_network_availableservicealiases').create({
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

### AvailableServiceAliases_List
Gets all available service aliases for this subscription in this region.


```js
azure_network_availableservicealiases.AvailableServiceAliases_List({
  "location": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [AvailableServiceAliasesResult](#availableservicealiasesresult)

### AvailableServiceAliases_ListByResourceGroup
Gets all available service aliases for this resource group in this region.


```js
azure_network_availableservicealiases.AvailableServiceAliases_ListByResourceGroup({
  "resourceGroupName": "",
  "location": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: The location.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [AvailableServiceAliasesResult](#availableservicealiasesresult)



## Definitions

### AvailableServiceAlias
* AvailableServiceAlias `object`: The available service alias.
  * id `string`: The ID of the service alias.
  * name `string`: The name of the service alias.
  * resourceName `string`: The resource name of the service alias.
  * type `string`: The type of the resource.

### AvailableServiceAliasesResult
* AvailableServiceAliasesResult `object`: An array of available service aliases.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: An array of available service aliases.
    * items [AvailableServiceAlias](#availableservicealias)


