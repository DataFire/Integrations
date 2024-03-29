# @datafire/azure_azsadmin_networkoperationresults

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_networkoperationresults
```
```js
let azure_azsadmin_networkoperationresults = require('@datafire/azure_azsadmin_networkoperationresults').create({
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

Network operation results.

## Actions

### NetworkOperationResults_List
Returns a list of all network operation results at a location.


```js
azure_azsadmin_networkoperationresults.NetworkOperationResults_List({
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
* output [NetworkOperationResultList](#networkoperationresultlist)

### NetworkOperationResults_Get
Returns the status of a network operation.


```js
azure_azsadmin_networkoperationresults.NetworkOperationResults_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "operation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * operation **required** `string`: Operation identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [NetworkOperationResult](#networkoperationresult)



## Definitions

### NetworkOperationResult
* NetworkOperationResult `object`: Network operation result description.
  * properties [NetworkOperationResultModel](#networkoperationresultmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### NetworkOperationResultList
* NetworkOperationResultList `object`: Pageable list of network operation results.
  * nextLink `string`: URI to the next page.
  * value `array`: List of network operation results.
    * items [NetworkOperationResult](#networkoperationresult)

### NetworkOperationResultModel
* NetworkOperationResultModel `object`: Network operation result properties.
  * instances `array`: List of operation result instances.
    * items `string`
  * provisioningState `string`: Success or failure of operation.


