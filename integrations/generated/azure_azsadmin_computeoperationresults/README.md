# @datafire/azure_azsadmin_computeoperationresults

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_computeoperationresults
```
```js
let azure_azsadmin_computeoperationresults = require('@datafire/azure_azsadmin_computeoperationresults').create({
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

Compute operation results.

## Actions

### ComputeOperationResults_List
Returns a list of all compute operation results at a location.


```js
azure_azsadmin_computeoperationresults.ComputeOperationResults_List({
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
* output [ComputeOperationResultList](#computeoperationresultlist)

### ComputeOperationResults_Get
Returns the status of a compute operation.


```js
azure_azsadmin_computeoperationresults.ComputeOperationResults_Get({
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
* output [ComputeOperationResult](#computeoperationresult)



## Definitions

### ComputeOperationResult
* ComputeOperationResult `object`: Compute operation result description.
  * properties [ComputeOperationResultModel](#computeoperationresultmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### ComputeOperationResultList
* ComputeOperationResultList `object`: Pageable list of compute operation results.
  * nextLink `string`: URI to the next page.
  * value `array`: List of compute operation results.
    * items [ComputeOperationResult](#computeoperationresult)

### ComputeOperationResultModel
* ComputeOperationResultModel `object`: Compute operation result properties.
  * instances `array`: List of operation result instances.
    * items `string`
  * provisioningState `string`: Success or failure of operation.


